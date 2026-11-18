// 死ぬか生きるかの戦い：Firebase との接続（ログイン・クラウド保存・ルームのリアルタイム共有）
// ゲーム本体は window.KBNET を通してここを使う。設定は firebase-config.js に書く。
const done = (v) => { if (window.__kbResolve) window.__kbResolve(v); };
const cfg = window.FIREBASE_CONFIG;

if (!cfg || !cfg.apiKey || /ここに|YOUR/.test(cfg.apiKey)) {
  console.warn('firebase-config.js がまだ設定されていません。オフラインで動きます。');
  done(null);
} else {
  start().catch((e) => { console.error(e); done(null); });
}

async function start() {
  const V = 'https://www.gstatic.com/firebasejs/10.12.2/';
  const [{ initializeApp }, A, F] = await Promise.all([
    import(V + 'firebase-app.js'), import(V + 'firebase-auth.js'), import(V + 'firebase-firestore.js')
  ]);
  const { getAuth, onAuthStateChanged, signInAnonymously, GoogleAuthProvider, signInWithPopup, linkWithPopup, signInWithCredential, signOut } = A;
  const { getFirestore, doc, getDoc, setDoc, deleteDoc, onSnapshot, collection } = F;
  const app = initializeApp(cfg);
  const auth = getAuth(app);
  const fs = getFirestore(app);
  const clean = (o) => JSON.parse(JSON.stringify(o));
  const wrap = (s) => ({ id: s.id, exists: s.exists(), data: () => (s.exists() ? s.data() : undefined) });

  const db = {
    doc(path) {
      const r = doc(fs, path);
      return {
        get: () => getDoc(r).then(wrap),
        set: (d, merge) => setDoc(r, clean(d), merge ? { merge: true } : undefined),
        delete: () => deleteDoc(r),
        onSnapshot: (next, err) => onSnapshot(r, (s) => next(wrap(s)), (e) => err && err(e)),
      };
    },
    col(path) {
      const r = collection(fs, path);
      return { onSnapshot: (next, err) => onSnapshot(r, (q) => next(q.docs.map(d => ({ id: d.id, ...d.data() }))), (e) => err && err(e)) };
    },
  };

  const subs = []; let cur;
  const info = (u) => (u ? { uid: u.uid, anon: u.isAnonymous, name: u.displayName || '' } : null);
  const notify = () => subs.forEach((f) => { try { f(cur); } catch (e) { console.error(e); } });
  onAuthStateChanged(auth, (u) => {
    if (!u) { signInAnonymously(auth).catch((e) => { console.error(e); cur = null; notify(); }); return; }
    cur = info(u); notify();
  });
  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });

  window.KBNET = {
    db,
    onUser(f) { subs.push(f); if (cur !== undefined) f(cur); },
    info: () => cur,
    async signInGoogle() {
      const u = auth.currentUser;
      try {
        if (u && u.isAnonymous) await linkWithPopup(u, provider);
        else await signInWithPopup(auth, provider);
      } catch (e) {
        if (e && (e.code === 'auth/credential-already-in-use' || e.code === 'auth/email-already-in-use')) {
          const c = GoogleAuthProvider.credentialFromError(e);
          if (c) { await signInWithCredential(auth, c); cur = info(auth.currentUser); notify(); return; }
        }
        throw e;
      }
      cur = info(auth.currentUser); notify();
    },
    async signOut() { await signOut(auth); },
  };
  done(window.KBNET);
}
