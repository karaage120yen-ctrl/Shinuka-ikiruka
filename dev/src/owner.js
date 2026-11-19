// ===== 馬主モード（エンジン）：セリで馬を買い、厩舎に預けて走らせる =====
import { S, save, newId } from './store.js';
import * as K from './career.js';
import { simulateRace } from './sim.js';
import { NPC_JOCKEY } from './jockey.js';
import { randomJockeyName, SILKS } from './data.js';
import { bondN, applyBond, addBond } from './combo.js';

export const START_MONEY = 30000; // 3億円（単位：万円）
export const FEE = 45;            // 預託料（月）
export const MAX_HORSES = 6;
export const NPC_J = [
  { key: 'n0', name: '若手騎手', s: 50, fee: 0 },
  { key: 'n1', name: '中堅騎手', s: 62, fee: 0.05 },
  { key: 'n2', name: 'リーディング騎手', s: 76, fee: 0.1 },
];

export function ownerState() {
  if (!S.owner) S.owner = { money: START_MONEY, year: 2027, month: 1, horses: [], log: [], lots: null, lotsKey: '', wins: 0, g1: 0, earn: 0, spent: 0, started: Date.now() };
  return S.owner;
}
// セリに出る馬（月ごとに入れ替わる）
const BUYERS = ['ノーザン系クラブ', '社台オーナーズ', 'ダーレー・ジャパン', '大物個人馬主', '地方の馬主会', '海外の投資家', '老舗オーナーブリーダー'];
export function lots(O) {
  const key = `${O.year}-${O.month}`;
  if (O.lotsKey === key && O.lots) return O.lots;
  const out = [];
  for (let i = 0; i < 5; i++) {
    const p = K.makeHorse({});
    p.age = i < 3 ? 1 : 2; p.year = O.year; p.month = O.month;
    // 2歳はある程度できあがっている
    for (const k in p.st) p.st[k] = Math.min(p.cap[k], p.st[k] + (p.age === 2 ? 22 : 8) + Math.random() * 6);
    const value = Math.round(((p.pot - 68) ** 2) * 11 + 300 + (p.skills.includes('monster') ? 1500 : 0));
    const look = K.potGrade(p.pot + (Math.random() - 0.5) * 9);
    out.push({ p, value, look, start: Math.max(200, Math.round(value * 0.35 / 50) * 50), sold: false });
  }
  O.lots = out; O.lotsKey = key; save();
  return out;
}
// 入札：NPCが競ってくる。返り値 { done, win, price, rival }
export function bid(O, lot, myPrice) {
  const npcMax = lot.npcMax ?? (lot.npcMax = Math.round(lot.value * (0.75 + Math.random() * 0.55)));
  if (myPrice > O.money) return { err: 'お金が足りない' };
  if (myPrice > npcMax) return { done: true, win: true, price: myPrice };
  const step = myPrice < 2000 ? 100 : myPrice < 10000 ? 500 : 1000;
  const np = myPrice + step;
  if (np > npcMax) return { done: true, win: true, price: myPrice };
  lot.cur = np; lot.rival = lot.rival || BUYERS[Math.floor(Math.random() * BUYERS.length)];
  return { done: false, price: np, rival: lot.rival, step };
}
export function buy(O, lot, price) {
  const p = lot.p; p.id = newId(); p.ownedBy = 'me';
  O.money -= price; O.spent += price;
  O.horses.push({ p, plan: 'std', entry: null, jockey: 'n1', price });
  lot.sold = true;
  O.log.unshift(`${O.year}年${O.month}月 セリで${p.name}（${p.age}歳）を${price.toLocaleString('ja-JP')}万円で購入`);
  save();
}
export function jockeyOf(key) {
  if (key && key.startsWith('n')) { const n = NPC_J.find(x => x.key === key) || NPC_J[0]; const v = n.s; return { id: null, name: n.name, s: { tec: v, whip: v, bal: v, fit: v, jud: v }, fee: n.fee, silk: 6, skills: [] }; }
  const j = S.jockeys.find(x => String(x.id) === String(key));
  return j ? { ...j, fee: 0.05 } : jockeyOf('n0');
}
export const racesFor = (H, O) => H.p.inj > 0 ? [] : K.ownerRaces(H.p, O.month);

// 1か月進める
export function advance(O) {
  const res = { lines: [], races: [], notes: [], money0: O.money };
  const m = O.month;
  for (const H of O.horses) {
    const p = H.p;
    const rr = { races: [], notes: [], skills: [], inc: 0, cost: 0, carrots: 0 };
    // レース
    if (H.entry && H.entry.m === m && p.inj <= 0) {
      const jk = jockeyOf(H.jockey);
      const cfg = K.horseRaceCfg(p, H.entry, jk);
      cfg.player.jname = jk.name;
      if (jk.id != null) cfg.player = applyBond(cfg.player, bondN(p.id, jk.id));
      const r = simulateRace(cfg);
      p.month = m;
      K.applyHorseRace(p, H.entry, r, rr);
      const got = rr.races[0];
      if (got) {
        const prize = got.prize || 0, fee = prize * jk.fee;
        O.money += prize * 0.8 - fee; O.earn += prize;
        if (got.pos === 1 && !got.dnf) { O.wins++; if (H.entry.g === 'G1') O.g1++; S.carrots += H.entry.g === 'G1' ? 30 : H.entry.g ? 10 : 3; }
        res.races.push({ name: p.name, race: H.entry.name, g: H.entry.g, pos: got.pos, dnf: got.dnf, field: r.field, prize: prize * 0.8 - fee, jname: jk.name });
      }
      if (jk.id != null) addBond(p.id, jk.id);
      H.entry = null;
    } else if (H.entry && H.entry.m !== m) H.entry = null;
    K.ownerMonth(p, H.plan, m, rr);
    res.notes.push(...rr.notes);
    if (p.fate && p.fate.ty === 'death') { res.notes.push(`${p.name}：${p.fate.why}`); H.dead = true; }
  }
  // 亡くなった馬は厩舎から外す
  for (const H of O.horses.filter(h => h.dead)) retire(O, H, true);
  const fee = O.horses.length * FEE; O.money -= fee; res.fee = fee;
  O.month++;
  if (O.month > 12) {
    O.month = 1; O.year++;
    for (const H of O.horses) { H.p.age++; H.p.year = O.year; }
    // 8歳になった馬は引退
    for (const H of O.horses.filter(h => h.p.age >= 8)) { res.notes.push(`${H.p.name}は8歳になり、引退した`); retire(O, H); }
  }
  res.money1 = O.money;
  O.log.unshift(`${O.year}年${O.month}月：${res.races.map(r => `${r.name} ${r.race}${r.dnf ? '中止' : r.pos + '着'}`).join('、') || 'レースなし'}`);
  O.log = O.log.slice(0, 80);
  save();
  return res;
}
export function retire(O, H, dead) {
  const p = H.p;
  O.horses = O.horses.filter(x => x !== H);
  if (p.races.length) {
    const c = K.toCard(p); c.id = p.id; c.owner = true; if (dead) c.dead = true;
    S.horses.unshift(c);
  }
  O.log.unshift(`${O.year}年${O.month}月 ${p.name}が${dead ? '天国へ旅立った' : '引退'}（${p.wins}勝・獲得${Math.round(p.earnings).toLocaleString('ja-JP')}万円）`);
  save();
}
export const ownerHorseSilk = () => SILKS[3];
export { randomJockeyName };
