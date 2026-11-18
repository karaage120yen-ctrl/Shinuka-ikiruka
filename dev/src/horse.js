// ===== 馬の育成ロジック =====
import { H_KEYS, H_NAMES, COAT, SIRE, DAM, GRADED, CLASS_INFO, PLACES, APT_LETTERS,
  COND_TRAIN, rnd, irnd, pick, clamp, randomHorseName } from './data.js';

// 暦：t=0 が 0歳4月。2歳になるまでは1ターン=2か月
export function cal(t) {
  const abs = 3 + t;
  return { age: Math.floor(abs / 12), month: (abs % 12) + 1 };
}
export function calText(t) { const c = cal(t); return `${c.age}歳 ${c.month}月`; }
export const RETIRE_T = 7 * 12 + 11 - 3; // 7歳12月

export function stageOf(h) {
  const { age } = cal(h.t);
  if (age === 0) return 0;  // 生まれ故郷の牧場
  if (age === 1) return 1;  // 育成牧場
  return 2;                 // トレセン
}
export const STAGE_NAMES = ['生まれ故郷の牧場', '育成牧場', 'トレーニングセンター'];

function aptLetter(bias) { return APT_LETTERS[clamp(Math.round(bias), 0, 6)]; }

export function createHorse(name, opts = {}) {
  const coat = opts.coat ?? irnd(0, COAT.length - 1);
  const talent = opts.talent ?? rnd(0, 1); // 素質（ガチャや血統で上げる予定）
  const cap = {};
  for (const k of H_KEYS) cap[k] = Math.round(clamp(rnd(62, 92) + talent * 12, 55, 110));
  const s = {};
  for (const k of H_KEYS) s[k] = irnd(4, 12);
  const turfBias = rnd(2.5, 6.6), dirtBias = rnd(1.5, 6.6);
  return {
    name: name || randomHorseName(), coat, sire: pick(SIRE), dam: pick(DAM),
    t: 0, s, cap, apt: { turf: aptLetter(turfBias), dirt: aptLetter(dirtBias) },
    style: pick(['逃げ', '先行', '先行', '差し', '差し', '追込']),
    fatigue: 0, cond: 2, injury: null, feed: 'normal',
    money: 1000, earnings: 0, record: [0, 0, 0, 0], races: [], wins: 0, gradedWins: 0, g1Wins: 0,
    titles: [], jockeyId: null, log: [],
    retired: false, retireReason: '', lastRaceT: -1,
  };
}

// ===== メニュー =====
// g: 上がる能力, f: 疲労, inj: ケガの基本確率
const MENU0 = [
  { id: 'graze', name: '放牧', desc: '広い牧場で走り回る', g: { pow: 4, sta: 4 }, f: 8, inj: 0.004 },
  { id: 'mare', name: '母馬と駆けっこ', desc: 'スピードの土台', g: { spd: 5, gut: 2 }, f: 10, inj: 0.006 },
  { id: 'people', name: '人に慣れる', desc: '賢さが育つ', g: { wis: 5, gut: 1 }, f: 4, inj: 0 },
  { id: 'rest', name: '休養', desc: '疲れをとる', rest: 35 },
];
const MENU1 = [
  { id: 'break', name: '馴致', desc: '鞍と人を背に乗せる', g: { wis: 5, gut: 2 }, f: 8, inj: 0.004 },
  { id: 'hillL', name: '坂路（軽め）', desc: 'パワーをつける', g: { pow: 6, spd: 2 }, f: 13, inj: 0.008 },
  { id: 'lap', name: '周回コース', desc: 'スタミナをつける', g: { sta: 6, gut: 1 }, f: 11, inj: 0.006 },
  { id: 'dash', name: 'ダッシュ練習', desc: 'スピードをつける', g: { spd: 6, pow: 1 }, f: 13, inj: 0.008 },
  { id: 'rest', name: '休養', desc: '疲れをとる', rest: 35 },
];
const MENU2 = [
  { id: 'turf', name: '芝コース追い切り', desc: 'スピード中心', g: { spd: 8, pow: 2 }, f: 15, inj: 0.012 },
  { id: 'hill', name: '坂路', desc: 'パワー中心', g: { pow: 8, spd: 2 }, f: 16, inj: 0.014 },
  { id: 'wood', name: 'ウッドチップ', desc: 'スタミナ中心', g: { sta: 8, gut: 2 }, f: 13, inj: 0.008 },
  { id: 'pair', name: '併せ馬', desc: '根性中心', g: { gut: 8, spd: 2 }, f: 15, inj: 0.012 },
  { id: 'gate', name: 'ゲート練習', desc: '賢さ中心', g: { wis: 7, gut: 1 }, f: 7, inj: 0.003 },
  { id: 'pool', name: 'プール', desc: '脚にやさしいスタミナ強化', g: { sta: 4 }, f: 5, inj: 0.001 },
  { id: 'rest', name: '休養', desc: '疲れをとる', rest: 35 },
  { id: 'farm', name: '放牧に出す', desc: '外厩でしっかりリフレッシュ', rest: 65, cond: 1 },
];
export function menuFor(h) { return [MENU0, MENU1, MENU2][stageOf(h)]; }

export const FEEDS = [
  { id: 'normal', name: '普通の飼い葉', cost: 0, desc: '無料' },
  { id: 'carrot', name: 'にんじん多め', cost: 5, desc: '体調が少し上がりやすい' },
  { id: 'good', name: '良質な飼い葉', cost: 20, desc: '疲れが少し抜ける・体調UP' },
  { id: 'supp', name: '特製サプリ', cost: 50, desc: 'トレーニング効果+15%' },
];

const AGE_F = [0.8, 0.9, 1.0, 1.1, 1.0, 0.75, 0.5, 0.3];

function gainOne(h, k, base, mult) {
  const v = h.s[k], c = h.cap[k];
  const room = Math.max(0, (c - v) / c);
  let g = base * mult * Math.pow(room, 0.55) * rnd(0.85, 1.15);
  if (v >= c) g = Math.random() < 0.15 ? 1 : 0;
  g = Math.round(g * 10) / 10;
  h.s[k] = Math.round(Math.min(c + 2, v + g) * 10) / 10;
  return g;
}

const INJ_LIGHT = ['ソエ', '挫石', 'フレグモーネ', '筋肉痛'];
const INJ_MID = ['骨膜炎', '剥離骨折', '球節炎', 'トモの筋肉を痛めた'];
const INJ_HEAVY = ['屈腱炎', '骨折（重度）', '繋靭帯炎'];

export function injuryChance(h, base) {
  const fat = h.fatigue / 40;
  const condM = [1.4, 1.2, 1.0, 0.9, 0.85][h.cond];
  const ageM = cal(h.t).age >= 6 ? 1.3 : 1;
  return base * (1 + fat * fat * 1.6) * condM * ageM;
}

function rollInjury(h, base) {
  if (Math.random() >= injuryChance(h, base)) return null;
  const r = Math.random();
  let inj;
  if (r < 0.64) inj = { name: pick(INJ_LIGHT), months: 1, sev: 1 };
  else if (r < 0.93) inj = { name: pick(INJ_MID), months: irnd(3, 5), sev: 2 };
  else inj = { name: pick(INJ_HEAVY), months: irnd(9, 12), sev: 3 };
  h.injury = inj;
  if (inj.sev >= 2) { h.s.spd = Math.max(1, h.s.spd - inj.sev * 1.5); h.s.pow = Math.max(1, h.s.pow - inj.sev); }
  return inj;
}

// 1ターン進める。結果メッセージを返す
export function doAction(h, actId, jockey) {
  const menu = menuFor(h);
  const act = menu.find(m => m.id === actId);
  const feed = FEEDS.find(f => f.id === h.feed) || FEEDS[0];
  const out = { title: act.name, gains: {}, msgs: [], injury: null };
  const { age } = cal(h.t);

  // エサ代
  if (h.money < feed.cost) { h.feed = 'normal'; out.msgs.push('お金が足りないので普通の飼い葉にした'); }
  else h.money -= feed.cost;
  const ff = (h.feed === 'supp') ? 1.15 : 1;

  if (act.g) {
    const jf = (jockey && stageOf(h) === 2) ? 1 + jockey.s.tec / 1000 : 1;
    const mult = AGE_F[Math.min(age, 7)] * COND_TRAIN[h.cond] * ff * jf * (h.fatigue > 75 ? 0.7 : 1);
    for (const [k, b] of Object.entries(act.g)) out.gains[k] = gainOne(h, k, b, mult);
    h.fatigue = clamp(h.fatigue + act.f * rnd(0.85, 1.15), 0, 100);
    out.injury = rollInjury(h, act.inj);
    if (Math.random() < 0.12) { h.cond = clamp(h.cond + (Math.random() < 0.5 ? 1 : -1), 0, 4); }
  } else {
    h.fatigue = clamp(h.fatigue - act.rest * rnd(0.9, 1.1), 0, 100);
    if (Math.random() < 0.5 || act.cond) { h.cond = clamp(h.cond + 1, 0, 4); out.msgs.push('体調が上がった'); }
  }

  applyFeed(h, out);
  monthlyEvents(h, out);
  advance(h, out);
  return out;
}

function applyFeed(h, out) {
  if (h.feed === 'carrot' && Math.random() < 0.3) { h.cond = clamp(h.cond + 1, 0, 4); out.msgs.push('にんじんで機嫌がいい！ 体調UP'); }
  if (h.feed === 'good') { h.fatigue = clamp(h.fatigue - 6, 0, 100); if (Math.random() < 0.35) { h.cond = clamp(h.cond + 1, 0, 4); out.msgs.push('飼い葉をよく食べた！ 体調UP'); } }
}

const EVENTS = [
  { p: 0.05, f: (h, o) => { h.cond = clamp(h.cond - 1, 0, 4); o.msgs.push('夜に馬房で暴れていた…体調DOWN'); } },
  { p: 0.04, f: (h, o) => { h.s.gut = Math.min(h.cap.gut + 2, h.s.gut + 2); o.msgs.push('となりの馬とケンカして負けん気が育った（根性+2）'); } },
  { p: 0.04, f: (h, o) => { h.fatigue = clamp(h.fatigue - 10, 0, 100); o.msgs.push('ぐっすり眠れた（疲労-10）'); } },
  { p: 0.03, f: (h, o) => { h.s.wis = Math.min(h.cap.wis + 2, h.s.wis + 2); o.msgs.push('厩務員さんの言うことをよく聞くようになった（賢さ+2）'); } },
];

function monthlyEvents(h, out) {
  for (const e of EVENTS) if (Math.random() < e.p) { e.f(h, out); break; }
  if (h.fatigue >= 80) { if (Math.random() < 0.4) { h.cond = clamp(h.cond - 1, 0, 4); out.msgs.push('疲れがたまって体調DOWN'); } }
}

// 時間を進める（ケガの治療、加齢）
export function advance(h, out) {
  const step = stageOf(h) < 2 ? 2 : 1;
  for (let i = 0; i < step; i++) {
    h.t++;
    const { age, month } = cal(h.t);
    if (month === 1) out.msgs.push(`年が明けて${age}歳になった`);
    if (age >= 5) {
      const d = (age - 4) * 0.12;
      h.s.spd = Math.max(1, h.s.spd - d); h.s.pow = Math.max(1, h.s.pow - d * 0.7);
    }
  }
  if (h.injury && !out.injury) {
    h.injury.months -= step;
    h.fatigue = clamp(h.fatigue - 15, 0, 100);
    if (h.injury.months <= 0) { out.msgs.push(`${h.injury.name}が治った！`); h.injury = null; }
  }
  if (cal(h.t).age === 2 && cal(h.t).month <= 2 && stageOf(h) === 2 && !h._tc) {
    h._tc = true; out.msgs.push('トレーニングセンターに入厩した！ レースに出られるのは2歳6月から');
  }
  if (h.t > RETIRE_T) { h.retireReason = '7歳の年末で引退'; out.forceRetire = true; }
}

// 治療ターン（ケガ中）
export function doTreat(h) {
  const out = { title: '治療・休養', gains: {}, msgs: [], injury: null };
  const feed = FEEDS.find(f => f.id === h.feed) || FEEDS[0];
  if (h.money >= feed.cost) h.money -= feed.cost; else h.feed = 'normal';
  h.fatigue = clamp(h.fatigue - 30, 0, 100);
  applyFeed(h, out);
  advance(h, out);
  return out;
}

// ===== レース選び =====
function seeded(seed) { let x = seed * 9301 + 49297; return () => { x = (x * 9301 + 49297) % 233280; return x / 233280; }; }

export function classIndex(h) {
  if (h.races.length === 0) return 0;
  if (h.wins === 0) return 1;
  return Math.min(h.wins + 1, 5);
}

export function racesFor(h) {
  const { age, month } = cal(h.t);
  if (h.injury || stageOf(h) < 2) return [];
  if (age === 2 && month < 6) return [];
  if (h.lastRaceT === h.t) return [];
  const list = [];
  const ci = classIndex(h);
  const rand = seeded(h.t * 31 + (h.id || 7));
  const dists = [1200, 1400, 1600, 1800, 2000, 2200, 2400, 2500];
  const nClass = 2;
  for (let i = 0; i < nClass; i++) {
    const c = CLASS_INFO[ci];
    const surf = rand() < 0.68 ? '芝' : 'ダ';
    let dist = dists[Math.floor(rand() * (age === 2 ? 4 : dists.length))];
    if (ci <= 1 && age === 2) dist = Math.min(dist, 2000);
    list.push({ name: c.name + (i ? '（' + PLACES[Math.floor(rand() * PLACES.length)] + '）' : ''), g: null, cls: ci, surf, dist,
      place: PLACES[Math.floor(rand() * PLACES.length)], prize: c.prize, lv: c.lv, age: age + '' });
  }
  for (const r of GRADED) {
    if (r.m !== month) continue;
    const ok = (r.age === '2' && age === 2) || (r.age === '3' && age === 3) || (r.age === '3+' && age >= 3) || (r.age === '4+' && age >= 4);
    if (!ok) continue;
    let can;
    if (r.g === 'G1') can = (r.age === '2') ? h.wins >= 1 : (h.wins >= 2 || h.gradedWins >= 1);
    else can = h.wins >= 1;
    list.push({ ...r, cls: 6, lv: gradeLv(r), locked: !can });
  }
  return list;
}

function gradeLv(r) {
  const base = { G3: 64, G2: 70, G1: 79 }[r.g];
  if (r.age === '2') return base - 14;
  if (r.age === '3') return base - 5;
  return base;
}

// ===== レース後 =====
export function afterRace(h, race, result, jockey) {
  const out = { title: race.name, gains: {}, msgs: [], injury: null };
  const pos = result.pos;
  const field = result.field;
  h.races.push({ t: h.t, name: race.name, g: race.g, surf: race.surf, dist: race.dist, pos, field, time: result.time, jockey: jockey ? jockey.name : '見習い騎手' });
  h.record[Math.min(pos, 4) - 1]++;
  let prize = 0;
  if (pos <= 5) prize = race.prize * [1, 0.4, 0.25, 0.15, 0.1][pos - 1];
  h.money += prize * 0.8; // 馬主の取り分
  h.earnings += prize;
  if (prize) out.msgs.push(`賞金 ${Math.round(prize)}万円 を獲得！`);
  if (pos === 1) {
    h.wins++;
    if (race.g) { h.gradedWins++; h.titles.push(race.name); }
    if (race.g === 'G1') h.g1Wins++;
    out.carrots = race.g === 'G1' ? 50 : race.g ? 20 : 10;
    if (h.cond < 4) h.cond++;
  } else if (pos <= 3) { out.carrots = 3; }
  else if (pos >= field - 2 && Math.random() < 0.5) { h.cond = Math.max(0, h.cond - 1); out.msgs.push('大敗して元気がない…体調DOWN'); }
  // 経験で少し成長
  const exp = race.g === 'G1' ? 2 : race.g ? 1.5 : 1;
  for (const k of ['gut', 'wis']) out.gains[k] = gainOne(h, k, 2 * exp, 1);
  h.fatigue = clamp(h.fatigue + 18 + race.dist / 220 + result.whips * 0.25, 0, 100);
  // レース中・後のケガ
  const inj = rollInjury(h, 0.012 + result.whips * 0.0006);
  if (inj) out.injury = inj;
  h.lastRaceT = h.t;
  advance(h, out);
  return out;
}

export function horseScore(h) {
  const sum = H_KEYS.reduce((a, k) => a + h.s[k], 0);
  return Math.round(sum + h.g1Wins * 60 + h.gradedWins * 20 + h.wins * 6 + h.earnings / 2000);
}

export function horseRankLabel(h) {
  const p = horseScore(h);
  if (p >= 800) return 'SS';
  if (p >= 600) return 'S';
  if (p >= 480) return 'A';
  if (p >= 400) return 'B';
  if (p >= 330) return 'C';
  if (p >= 260) return 'D';
  if (p >= 180) return 'E';
  if (p >= 100) return 'F';
  return 'G';
}

export function bestDistanceText(h) {
  const d = 1100 + 24 * h.s.sta;
  if (d < 1500) return '短距離';
  if (d < 1900) return 'マイル';
  if (d < 2500) return '中距離';
  return '長距離';
}

export { H_NAMES };
