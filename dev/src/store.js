// ===== セーブデータ（端末のブラウザに保存） =====
const KEY = 'shinuka_ikiruka_v1';

const DEFAULT = () => ({
  carrots: 30,          // ガチャ用「金のにんじん」
  activeHorse: null,    // 育成中の馬
  activeJockey: null,   // 育成中の騎手
  horses: [],           // 引退した馬（一覧）
  jockeys: [],          // デビューした騎手（一覧）
  gacha: [],            // ガチャで出たもの
  settings: { sound: true, view: 'fp' },
  nextId: 1,
});

export let S = load();

function load() {
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) return Object.assign(DEFAULT(), JSON.parse(raw));
  } catch (e) { /* 読めないときは新規 */ }
  return DEFAULT();
}

export function save() {
  try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) { /* 容量不足など */ }
}

export function newId() { const id = S.nextId++; save(); return id; }

export function resetAll() { S = DEFAULT(); save(); }

export function findJockey(id) {
  if (id == null) return null;
  return S.jockeys.find(j => j.id === id) || null;
}
