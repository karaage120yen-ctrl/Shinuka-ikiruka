// ===== 騎手の育成ロジック =====
import { J_KEYS, COND_TRAIN, rnd, irnd, pick, clamp, randomJockeyName, SILKS } from './data.js';

export const J_TURNS = 24; // 競馬学校2年（1ターン=1か月）

export function createJockey(name, opts = {}) {
  const talent = opts.talent ?? rnd(0, 1);
  const cap = {}, s = {};
  for (const k of J_KEYS) { cap[k] = Math.round(clamp(rnd(62, 90) + talent * 12, 55, 105)); s[k] = irnd(8, 16); }
  return {
    name: name || randomJockeyName(), t: 0, s, cap, fatigue: 0, cond: 2, injury: null,
    silk: opts.silk ?? irnd(0, SILKS.length - 1),
    record: [0, 0, 0, 0], races: 0, wins: 0, g1Wins: 0, mockWins: 0, log: [], debuted: false,
  };
}

export function jCalText(j) {
  if (j.debuted) return 'デビュー済み';
  const y = Math.floor(j.t / 12) + 1, m = ((j.t + 3) % 12) + 1;
  return `競馬学校 ${y}年目 ${m}月（残り${J_TURNS - j.t}か月）`;
}

export const J_MENU = [
  { id: 'ride', name: '騎乗訓練', desc: '技術中心', g: { tec: 7, bal: 2 }, f: 14, inj: 0.012 },
  { id: 'whip', name: '木馬でムチ練習', desc: 'ムチ中心', g: { whip: 7, fit: 1 }, f: 10, inj: 0.002 },
  { id: 'bal', name: 'バランス練習', desc: 'バランス中心', g: { bal: 7, tec: 1 }, f: 10, inj: 0.002 },
  { id: 'run', name: '筋トレ・ランニング', desc: '体力中心', g: { fit: 7, bal: 1 }, f: 15, inj: 0.004 },
  { id: 'study', name: 'レース映像研究', desc: '判断中心', g: { jud: 7, tec: 1 }, f: 4, inj: 0 },
  { id: 'rest', name: '休養', desc: '疲れをとる', rest: 35 },
];

export function mockAvailable(j) { return !j.injury && j.t % 3 === 2; }

function gainOne(j, k, base, mult) {
  const v = j.s[k], c = j.cap[k];
  const room = Math.max(0, (c - v) / c);
  let g = base * mult * Math.pow(room, 0.55) * rnd(0.85, 1.15);
  if (v >= c) g = Math.random() < 0.15 ? 1 : 0;
  g = Math.round(g * 10) / 10;
  j.s[k] = Math.round(Math.min(c + 2, v + g) * 10) / 10;
  return g;
}

const J_INJ = [
  { name: '打撲', months: 1 }, { name: '落馬して手首をねんざ', months: 1 },
  { name: '鎖骨骨折', months: 3 }, { name: '落馬で腰を痛めた', months: 2 },
];

export function doJAction(j, id) {
  const act = J_MENU.find(m => m.id === id);
  const out = { title: act.name, gains: {}, msgs: [], injury: null };
  if (act.g) {
    const mult = COND_TRAIN[j.cond] * (j.fatigue > 75 ? 0.7 : 1);
    for (const [k, b] of Object.entries(act.g)) out.gains[k] = gainOne(j, k, b, mult);
    j.fatigue = clamp(j.fatigue + act.f * rnd(0.85, 1.15), 0, 100);
    const p = act.inj * (1 + Math.pow(j.fatigue / 40, 2) * 1.6);
    if (Math.random() < p) { j.injury = { ...pick(J_INJ) }; out.injury = j.injury; }
    if (Math.random() < 0.12) j.cond = clamp(j.cond + (Math.random() < 0.5 ? 1 : -1), 0, 4);
  } else {
    j.fatigue = clamp(j.fatigue - act.rest, 0, 100);
    if (Math.random() < 0.5) { j.cond = clamp(j.cond + 1, 0, 4); out.msgs.push('体調が上がった'); }
  }
  if (Math.random() < 0.05) { j.s.jud = Math.min(j.cap.jud + 2, j.s.jud + 2); out.msgs.push('先輩騎手からアドバイスをもらった（判断+2）'); }
  jAdvance(j, out);
  return out;
}

export function doJTreat(j) {
  const out = { title: '治療', gains: {}, msgs: [], injury: null };
  j.fatigue = clamp(j.fatigue - 30, 0, 100);
  jAdvance(j, out);
  return out;
}

export function jAdvance(j, out) {
  j.t++;
  if (j.injury && !out.injury) {
    j.injury.months--;
    if (j.injury.months <= 0) { out.msgs.push(`${j.injury.name}が治った！`); j.injury = null; }
  }
  if (j.t >= J_TURNS) out.debut = true;
}

// 模擬レースの結果
export function afterMock(j, pos, field) {
  const out = { title: '模擬レース', gains: {}, msgs: [], injury: null };
  const base = pos === 1 ? 5 : pos <= 3 ? 3.5 : pos <= field / 2 ? 2.5 : 1.5;
  for (const k of ['tec', 'whip', 'bal', 'fit', 'jud']) out.gains[k] = gainOne(j, k, base, COND_TRAIN[j.cond]);
  if (pos === 1) { j.mockWins++; out.msgs.push('模擬レースで1着！ 教官にほめられた'); }
  j.fatigue = clamp(j.fatigue + 18, 0, 100);
  jAdvance(j, out);
  return out;
}

// デビュー後の実戦経験
export function jockeyRaceExp(j, pos, g) {
  j.races++;
  j.record[Math.min(pos, 4) - 1]++;
  if (pos === 1) { j.wins++; if (g === 'G1') j.g1Wins++; }
  const e = g === 'G1' ? 1.2 : g ? 0.9 : 0.6;
  for (const k of ['tec', 'jud', 'whip']) gainOne(j, k, e, 1);
}

export const NPC_JOCKEY = { name: '厩舎の主戦騎手', s: { tec: 50, whip: 50, bal: 50, fit: 50, jud: 50 }, silk: 6, npc: true, skills: [] };
