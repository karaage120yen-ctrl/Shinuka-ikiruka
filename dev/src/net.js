// ===== オンライン（Firebase）。設定がなければ何もしない =====
import { S, save, replaceAll, onSave } from './store.js';

export const NET = { on: false, user: null, api: null, members: [], room: null, watch: null };
const listeners = new Set();
export const onNet = (f) => { listeners.add(f); return () => listeners.delete(f); };
const emit = () => listeners.forEach(f => { try { f(NET); } catch (e) { console.error(e); } });

export function initNet() {
  const p = window.__kbReady || Promise.resolve(null);
  p.then((api) => {
    if (!api) return;
    NET.api = api; NET.on = true;
    api.onUser((u) => { NET.user = u; emit(); if (u) { autoCloud(); joinRoomLive(S.bet && S.bet.room); } });
  });
}
export const online = () => !!(NET.on && NET.user);

// ----- クラウド保存 -----
function packSave() {
  const o = JSON.parse(JSON.stringify(S));
  if (o.bet) o.bet.cards = {}; // オッズなど重いものは送らない（作り直せる）
  let txt = JSON.stringify(o);
  if (txt.length > 900000) { o.horses = o.horses.map(h => ({ ...h, races: (h.races || []).slice(-10) })); txt = JSON.stringify(o); }
  return txt;
}
export async function cloudSave() {
  if (!online()) throw new Error('オフライン');
  await NET.api.db.doc(`kb_users/${NET.user.uid}/save/main`).set({ data: packSave(), t: Date.now(), n: S.horses.length + S.jockeys.length });
  S._cloudT = Date.now();
}
export async function cloudInfo() {
  if (!online()) return null;
  const d = await NET.api.db.doc(`kb_users/${NET.user.uid}/save/main`).get();
  return d.exists ? d.data() : null;
}
export async function cloudLoad() {
  const d = await cloudInfo(); if (!d) return false;
  replaceAll(JSON.parse(d.data)); save(); return true;
}
let tmr = null;
function autoCloud() {
  onSave(() => {
    if (!online() || !S.settings || S.settings.cloud === false) return;
    clearTimeout(tmr); tmr = setTimeout(() => cloudSave().catch(e => console.warn(e)), 20000);
  });
}

// ----- ルーム：メンバーの馬券と収支をリアルタイムで共有 -----
let unsubM = null, unsubR = null, curRoom = '';
export function joinRoomLive(room) {
  if (!online()) return;
  if (room === curRoom) return;
  if (unsubM) unsubM(); if (unsubR) unsubR(); unsubM = unsubR = null; NET.members = []; NET.room = null; NET.watch = null; curRoom = room || '';
  if (!room) { emit(); return; }
  unsubM = NET.api.db.col(`kb_rooms/${room}/members`).onSnapshot((list) => { NET.members = list; emit(); }, (e) => console.warn(e));
  unsubR = NET.api.db.doc(`kb_rooms/${room}`).onSnapshot((d) => { NET.room = d.exists ? d.data() : null; NET.watch = NET.room && NET.room.watch || null; emit(); }, (e) => console.warn(e));
}
let pushT = null;
export function pushMember(sum) {
  if (!online() || !curRoom) return;
  clearTimeout(pushT);
  pushT = setTimeout(() => {
    NET.api.db.doc(`kb_rooms/${curRoom}/members/${NET.user.uid}`).set({ n: sum.n, k: sum.k, bet: sum.bet, ret: sum.ret, done: sum.done, coins: sum.coins, rs: JSON.stringify(sum.rs), t: Date.now() }).catch(e => console.warn(e));
  }, 600);
}
export function callWatch(k, no) {
  if (!online() || !curRoom) return Promise.reject(new Error('オフライン'));
  const w = { k, no, at: Date.now() + 10000, by: (S.bet && S.bet.name) || 'だれか', uid: NET.user.uid };
  return NET.api.db.doc(`kb_rooms/${curRoom}`).set({ watch: w, t: Date.now() }, true);
}
export const me = () => NET.user && NET.user.uid;
