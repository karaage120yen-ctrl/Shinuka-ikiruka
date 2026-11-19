// ===== デイリーミッション：毎日3つの小さな目標 =====
import { S, save } from './store.js';
import { showToast } from './ach.js';

export const MISSIONS = [
  { id: 'turn', n: '育成を5ターン進める', goal: 5, r: 6 },
  { id: 'race', n: '育成でレースに2回出る', goal: 2, r: 6 },
  { id: 'race3d', n: '3Dでレースを1回走る（見る）', goal: 1, r: 5 },
  { id: 'bet', n: '馬券を3枚買う', goal: 3, r: 5 },
  { id: 'hit', n: '馬券を1回当てる', goal: 1, r: 8 },
  { id: 'gacha', n: 'ガチャを1回引く', goal: 1, r: 4 },
  { id: 'owner', n: '馬主モードで2か月進める', goal: 2, r: 6 },
  { id: 'vs', n: '対戦で1回走る', goal: 1, r: 5 },
  { id: 'win', n: 'どこかのレースで1着をとる', goal: 1, r: 10 },
];
const today = () => { const d = new Date(); return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`; };
function seedPick(key) {
  let h = 7; for (let i = 0; i < key.length; i++) h = (h * 31 + key.charCodeAt(i)) >>> 0;
  const ids = MISSIONS.map(m => m.id), out = [];
  while (out.length < 3) { h = (h * 1103515245 + 12345) >>> 0; const id = ids[h % ids.length]; if (!out.includes(id)) out.push(id); }
  return out;
}
export function missions() {
  const d = today();
  if (!S.mis || S.mis.day !== d) { S.mis = { day: d, list: seedPick(d).map(id => ({ id, got: 0, done: false })), bonus: false }; save(); }
  return S.mis;
}
let toastFn = (t) => showToast(t);
export function onMissionToast(f) { toastFn = f; }
export function mission(id, n = 1) {
  const M = missions();
  let changed = false;
  for (const x of M.list) {
    if (x.id !== id || x.done) continue;
    const def = MISSIONS.find(m => m.id === id);
    x.got = Math.min(def.goal, x.got + n); changed = true;
    if (x.got >= def.goal) { x.done = true; S.carrots += def.r; toastFn && toastFn(`🎯 ミッション達成！「${def.n}」 🥕+${def.r}`); }
  }
  if (!M.bonus && M.list.every(x => x.done)) { M.bonus = true; S.carrots += 15; S.bet = S.bet || {}; if (S.bet.coins != null) S.bet.coins += 1000; toastFn && toastFn('🎉 今日のミッションを全部達成！ 🥕+15 🪙+1,000'); }
  if (changed) save();
}
export function missionHtml(esc) {
  const M = missions();
  return `<div class="mis"><div class="mis-h">🎯 今日のミッション<span>${M.list.filter(x => x.done).length}/3</span></div>${M.list.map(x => { const d = MISSIONS.find(m => m.id === x.id); return `<div class="mis-r ${x.done ? 'ok' : ''}"><span>${x.done ? '✅' : '⬜'} ${esc(d.n)}</span><small>${x.got}/${d.goal}・🥕${d.r}</small></div>`; }).join('')}${M.bonus ? '' : '<div class="mis-b">全部達成で 🥕15・🪙1,000</div>'}</div>`;
}
