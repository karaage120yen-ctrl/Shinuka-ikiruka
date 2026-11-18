// ===== 繁殖（配合して子どもを作る） =====
import { H_KEYS, COAT, APT_LETTERS, clamp, rnd, pick, randomHorseName, SIRE, DAM } from './data.js';
import { makeHorse, potGrade, SKILLS } from './career.js';

const hashS = (s) => { let h = 7; for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0; return h; };
export const sexOf = (c) => c.sex || (hashS(c.name || '') % 2 ? '牡' : '牝');

// 牧場の種牡馬・繁殖牝馬（自分の馬がいなくても配合できる）
function npc(name, sex, lv, i) {
  const s = {}; H_KEYS.forEach((k, j) => { s[k] = clamp(lv + ((i * 7 + j * 13) % 17) - 8, 30, 95); });
  return { npc: true, name, sex, s, apt: { turf: APT_LETTERS[6 - (i % 3)], dirt: APT_LETTERS[3 + ((i + 1) % 4)] }, style: ['逃げ', '先行', '差し', '追込'][i % 4], coat: i % COAT.length, skills: [], g1Wins: lv >= 82 ? 2 : 0, rank: lv >= 84 ? 'S' : lv >= 76 ? 'A' : 'B', fee: lv >= 84 ? 3000 : lv >= 76 ? 800 : 0, gen: 0 };
}
export const NPC_SIRES = SIRE.map((n, i) => npc(n, '牡', 70 + (i * 5) % 20, i));
export const NPC_DAMS = DAM.map((n, i) => npc(n, '牝', 58 + (i * 7) % 16, i + 3));

function aptMix(a, b) {
  const ia = APT_LETTERS.indexOf(a), ib = APT_LETTERS.indexOf(b);
  return APT_LETTERS[clamp(Math.round((Math.random() < 0.5 ? ia : ib) + rnd(-1.2, 1.2)), 0, 6)];
}
function coatMix(sc, dc) {
  const gray = COAT.findIndex(c => c.name === '芦毛');
  if ((sc === gray || dc === gray) && Math.random() < 0.5) return gray;
  const r = Math.random();
  return r < 0.4 ? (sc === gray ? dc : sc) : r < 0.8 ? (dc === gray ? sc : dc) : Math.floor(Math.random() * COAT.length);
}

// 配合の見通し（画面に出す目安）
export function preview(sire, dam) {
  const avg = {}; H_KEYS.forEach(k => { avg[k] = ((sire.s[k] || 50) + (dam.s[k] || 50)) / 2; });
  const o = H_KEYS.reduce((a, k) => a + avg[k], 0) / 5;
  const bonus = Math.min(6, ((sire.g1Wins || 0) + (dam.g1Wins || 0)) * 1.2);
  const pot = clamp(Math.round(o * 0.35 + 52 + bonus), 70, 93);
  const best = [...H_KEYS].sort((a, b) => avg[b] - avg[a]).slice(0, 2);
  const skills = [...new Set([...(sire.skills || []), ...(dam.skills || [])])].filter(k => SKILLS[k] && SKILLS[k].k === 'horse');
  return { pot, grade: potGrade(pot), best, skills, avg };
}

export function makeFoal(sire, dam) {
  const pv = preview(sire, dam);
  const pot = clamp(Math.round(pv.pot + rnd(-3, 3)), 68, 95);
  const legend = Math.random() < 0.00002 + (pot >= 92 ? 0.0005 : 0);
  const p = makeHorse({
    name: randomHorseName(), coat: coatMix(sire.coat ?? 0, dam.coat ?? 0),
    style: Math.random() < 0.5 ? sire.style : dam.style, sire: sire.name, dam: dam.name, forceLegend: legend,
  });
  p.pot = pot;
  for (const k of H_KEYS) p.cap[k] = clamp(Math.round(pot - 6 + (pv.avg[k] - (H_KEYS.reduce((a, x) => a + pv.avg[x], 0) / 5)) * 0.5 + rnd(-5, 5)), 40, 99);
  p.apt = { turf: aptMix(sire.apt ? sire.apt.turf : 'B', dam.apt ? dam.apt.turf : 'B'), dirt: aptMix(sire.apt ? sire.apt.dirt : 'C', dam.apt ? dam.apt.dirt : 'C') };
  p.growth = Math.random() < 0.6 ? (sire.growth || pick(['early', 'normal', 'late'])) : (dam.growth || 'normal');
  p.flags.potEst = potGrade(pot + rnd(-2, 2));
  // 特殊能力の遺伝（両親とも持っていると受け継ぎやすい）
  const both = (sire.skills || []).filter(k => (dam.skills || []).includes(k));
  for (const k of pv.skills) { if (p.skills.includes(k)) continue; if (Math.random() < (both.includes(k) ? 0.6 : 0.25)) p.skills.push(k); }
  p.ped = { s: sire.name, d: dam.name, ss: sire.sire || '', sd: sire.dam || '', ds: dam.sire || '', dd: dam.dam || '' };
  p.gen = Math.max(sire.npc ? 0 : (sire.gen || 1), dam.npc ? 0 : (dam.gen || 1)) + (sire.npc && dam.npc ? 0 : 1);
  p.sireId = sire.id ?? null; p.damId = dam.id ?? null;
  return p;
}
