// ===== 育成エンジン（サッカーやるよんと同じ流れ） =====
// スカウト（作成）→ キャンプ（年の方針）→ ターン（行動を1つ）→ 出来事 → ターンの結果 → 年間総括 → オファー → … → 引退
import { H_KEYS, H_NAMES, J_KEYS, J_NAMES, COAT, SIRE, DAM, SILKS, GRADED, CLASS_INFO, PLACES, APT_LETTERS, STYLES,
  rnd, irnd, pick, clamp, randomHorseName, randomJockeyName } from './data.js';
import { EVENTS } from './events.js';

export const ri = (a, b) => irnd(a, b);
const gauss = () => { let u = 0, v = 0; while (!u) u = Math.random(); while (!v) v = Math.random(); return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v); };

// ===== 種類ごとの設定 =====
export const KIND = {
  horse: {
    keys: H_KEYS, names: H_NAMES, w: { spd: 1.3, sta: 1, pow: 0.9, gut: 0.8, wis: 0.6 },
    turns: [1, 3, 5, 7, 9, 11], len: 2, rate: 0.03,
    evalName: '調教師の評価', popName: 'ファン', moneyName: '馬主の資金',
  },
  jockey: {
    keys: J_KEYS, names: J_NAMES, w: { tec: 1.2, whip: 1, bal: 1, fit: 0.8, jud: 1 },
    turns: [1, 4, 7, 10], len: 3, rate: 0.015,
    evalName: '騎乗依頼の評価', popName: '人気', moneyName: '所持金',
  },
};
export const turnEnd = (p) => p.month + KIND[p.kind].len - 1;
export const isFirstTurnOfYear = (p) => p.month === KIND[p.kind].turns[0];
export const isLastTurnOfYear = (p) => turnEnd(p) >= 12;

export const GROWTH = {
  horse: {
    early: { n: '早熟', d: '2歳から走れる。衰えも早い', c: a => [0.7, 1.0, 1.3, 0.9, 0.25][a] ?? -((a - 4) * 0.5 + 0.5) },
    normal: { n: '標準', d: '3〜4歳がピーク', c: a => [0.55, 0.8, 1.0, 1.05, 0.6, 0.1][a] ?? -((a - 5) * 0.5 + 0.5) },
    late: { n: '晩成', d: '遅咲き。古馬になって本格化', c: a => [0.45, 0.65, 0.75, 0.9, 0.95, 0.45, 0.1][a] ?? -((a - 6) * 0.5 + 0.5) },
  },
  jockey: {
    early: { n: '早熟', d: '若いうちから乗れる。衰えも早い', c: a => a <= 22 ? 1.35 : a <= 28 ? 0.8 : a <= 33 ? 0.2 : -((a - 33) * 0.3 + 0.4) },
    normal: { n: '標準', d: '30歳前後がピーク', c: a => a <= 24 ? 1 : a <= 31 ? 0.75 : a <= 36 ? 0.2 : -((a - 36) * 0.3 + 0.4) },
    late: { n: '晩成', d: '遅咲き。ベテランになって輝く', c: a => a <= 24 ? 0.62 : a <= 34 ? 0.8 : a <= 39 ? 0.3 : -((a - 39) * 0.3 + 0.4) },
  },
};
const DECAY = { spd: 1.3, sta: 1.0, pow: 1.1, gut: 0.6, wis: 0.4, tec: 0.4, whip: 0.6, bal: 0.8, fit: 1.3, jud: 0.2 };
export const TRAIN = { easy: { n: '軽め', g: 1.2, inj: 0.03 }, std: { n: '普通', g: 2.3, inj: 0.08 }, hard: { n: 'ハード', g: 3.6, inj: 0.17 } };

export const potGrade = x => x >= 96 ? 'SS' : x >= 90 ? 'S' : x >= 84 ? 'A' : x >= 78 ? 'B' : x >= 72 ? 'C' : 'D';
export function ovrOf(p) { const K = KIND[p.kind]; let s = 0, t = 0; for (const k of K.keys) { s += K.w[k] * p.st[k]; t += K.w[k]; } return Math.round(s / t); }
export function tierOf(p, o = ovrOf(p)) {
  if (p.kind === 'horse') return o >= 90 ? '伝説級' : o >= 80 ? 'G1級' : o >= 70 ? '重賞級' : o >= 60 ? 'オープン級' : o >= 45 ? '条件馬' : '素質馬';
  return o >= 90 ? 'レジェンド' : o >= 80 ? 'トップジョッキー' : o >= 70 ? '一流' : o >= 60 ? '中堅' : o >= 45 ? '若手' : '見習い';
}
export function stageOf(p) {
  if (p.kind === 'horse') return p.age === 0 ? 'farm' : p.age === 1 ? 'ikusei' : 'tc';
  return p.stage;
}
export const STAGE_NAME = { farm: '生まれ故郷の牧場', ikusei: '育成牧場', tc: 'トレーニングセンター', school: '競馬学校', pro: 'プロ騎手' };

// ===== 特殊能力 =====
export const SKILLS = {
  legend: { n: '伝説', d: '0.001%の奇跡。限界がとても高い' },
  monster: { n: '天才', d: '並外れた才能。限界が高く成長速度1.1倍' },
  heir: { n: '血統の継承者', d: '受け継いだ力で成長速度1.1倍' },
  // 馬
  nige: { n: '逃げの天才', d: '序盤のスピード+', k: 'horse', chk: p => p.style === '逃げ' && p.st.spd >= 80 },
  sue: { n: '鬼脚', d: '直線の伸び+1%', k: 'horse', chk: p => (p.style === '差し' || p.style === '追込') && p.st.spd >= 80 },
  iron: { n: '鉄の脚', d: 'ケガのリスク4割減', k: 'horse', chk: p => p.st.pow >= 83 },
  stayer: { n: 'ステイヤー', d: 'スタミナの量+6%', k: 'horse', chk: p => p.st.sta >= 85 },
  konjo: { n: '勝負根性', d: '競り合いで強くなる', k: 'horse', chk: p => p.st.gut >= 84 },
  smart: { n: '名馬の頭脳', d: '体力の減りが少ない', k: 'horse', chk: p => p.st.wis >= 84 },
  // 騎手
  meishu: { n: '名手', d: '左右の動きが速い', k: 'jockey', chk: p => p.st.tec >= 84 },
  whipm: { n: 'ムチの達人', d: 'ムチの効き+15%', k: 'jockey', chk: p => p.st.whip >= 84 },
  eco: { n: '省エネ騎乗', d: '馬の体力の減りが少ない', k: 'jockey', chk: p => p.st.bal >= 84 },
  ironj: { n: '鉄人', d: 'ケガのリスク4割減', k: 'jockey', chk: p => p.st.fit >= 83 },
  start: { n: 'スタートの名手', d: 'ゲートの出が速い', k: 'jockey', chk: p => p.st.jud >= 84 },
  g1man: { n: '大舞台の男', d: 'G1を3勝。出来事の成功率+5%', k: 'jockey', chk: p => p.g1Wins >= 3 },
};
export const has = (p, k) => (p.skills || []).includes(k);
function checkSkills(p) {
  const out = [];
  for (const [k, s] of Object.entries(SKILLS)) if (s.chk && s.k === p.kind && !has(p, k) && s.chk(p)) { p.skills.push(k); out.push(k); }
  return out;
}

// ===== 行動 =====
export const ACTS = {
  horse: [
    { id: 'graze', n: '放牧', d: '広い牧場で走り回る。体が丈夫になる', g: 1, sta: -3, boost: ['pow', 'sta'], on: ['farm', 'ikusei'] },
    { id: 'mare', n: '母馬と過ごす', d: '安心して過ごす。賢さ・根性が育つ', g: 0.8, sta: 4, form: 4, boost: ['wis', 'gut'], on: ['farm'] },
    { id: 'dash', n: '仲間と駆けっこ', d: '全力で走る。成長1.5倍。ケガもしやすい', g: 1.5, sta: -10, inj: 1.3, boost: ['spd'], on: ['farm'] },
    { id: 'break', n: '馴致', d: '鞍と人に慣れる。賢さが伸びやすい', g: 0.9, sta: -3, boost: ['wis'], on: ['ikusei'] },
    { id: 'hillY', n: '坂路で鍛える', d: '成長1.6倍。体力を使う', g: 1.6, sta: -12, inj: 1.4, on: ['ikusei'] },
    { id: 'train', n: 'いつもの調教', d: '調教メニューをこなす', g: 1, sta: -3, eval: 1, on: ['tc'] },
    { id: 'hard', n: '強めの追い切り', d: '成長1.8倍。体力を大きく使い、ケガもしやすい', g: 1.8, sta: -14, inj: 1.7, eval: 2, on: ['tc'] },
    { id: 'gate', n: 'ゲート・折り合い練習', d: '賢さ・根性が伸びやすい', g: 0.75, sta: 3, boost: ['wis', 'gut'], eval: 1, on: ['tc'] },
    { id: 'pool', n: 'プール調教', d: '脚に負担をかけずにスタミナ強化', g: 0.8, sta: 2, inj: 0.3, boost: ['sta'], on: ['tc'] },
    { id: 'rest', n: '馬房で休養', d: '体力と調子を回復する。成長は控えめ', g: 0.35, sta: 20, form: 6, on: ['farm', 'ikusei', 'tc'] },
    { id: 'farmout', n: '外厩で放牧', d: 'しっかりリフレッシュ', g: 0.25, sta: 32, form: 10, cost: 30, on: ['tc'] },
    { id: 'race', n: 'レースに出る', d: 'この2か月のレースから選んで出走', g: 0.6, sta: 0, race: 1, on: ['tc'] },
  ],
  jockey: [
    { id: 'ride', n: '騎乗訓練', d: '毎日の騎乗訓練に集中する', g: 1, sta: -2, eval: 1, on: ['school'] },
    { id: 'ridep', n: '騎乗依頼をこなす', d: 'いつも通り乗れるだけ乗る', g: 1, sta: -4, eval: 1, on: ['pro'] },
    { id: 'extra', n: '居残り特訓', d: '成長1.8倍。体力を大きく使い、ケガもしやすい', g: 1.8, sta: -14, inj: 1.7, eval: 2, on: ['school', 'pro'] },
    { id: 'video', n: 'レース映像研究', d: '判断・技術が伸びやすい', g: 0.75, sta: 3, boost: ['jud', 'tec'], eval: 2, on: ['school', 'pro'] },
    { id: 'rest', n: 'コンディション調整', d: '体力と調子を回復する。成長は控えめ', g: 0.35, sta: 20, form: 6, on: ['school', 'pro'] },
    { id: 'family', n: '大切な人と過ごす', d: '家族・恋人との時間。心身も回復する', g: 0.55, sta: 9, form: 5, fam: 14, love: 16, on: ['school', 'pro'] },
    { id: 'media', n: 'メディア出演', d: '出演料と人気。調教師はいい顔をしない', g: 0.5, sta: -5, pop: 3, eval: -3, media: 1, on: ['pro'] },
    { id: 'mock', n: '模擬レースに出る', d: '自分で乗る3Dレース。順位がよいほど大きく成長', g: 0.8, race: 1, on: ['school'] },
    { id: 'bigrace', n: '大一番に騎乗', d: 'この3か月の重賞から選んで、自分で乗る', g: 1, race: 1, on: ['pro'] },
    { id: 'abroad', n: '海外で騎乗修行', d: '海外の一流に学ぶ。成長2.2倍。日本の騎乗はお休み', g: 2.2, sta: -8, cost: 300, norides: 1, on: ['pro'] },
  ],
};
export function actsFor(p) { const st = stageOf(p); return ACTS[p.kind].filter(a => a.on.includes(st)); }
export function actName(a, p) {
  if (a.id !== 'family') return a.n;
  const P = p.fam && p.fam.partner;
  return P ? (P.married ? '家族と過ごす' : `${P.n}と過ごす`) : '実家でのんびり';
}

// ===== 買い物（暮らし／牧場） =====
export const SHOP = {
  horse: [
    { id: 'shoe', n: '特注の蹄鉄', d: '装蹄師が脚に合わせて作る', eff: 'スピード+2', price: 200, type: 'once', fx: { spd: 2 } },
    { id: 'saddle', n: '軽量の鞍', d: '馬の背中の負担を減らす', eff: 'スタミナ+2', price: 150, type: 'once', fx: { sta: 2 } },
    { id: 'capsuleH', n: '馬用の酸素カプセル', d: '疲れを早く抜く', eff: '毎月の体力回復+5', price: 800, type: 'once' },
    { id: 'stall', n: '馬房の改装', d: '広くて静かな馬房', eff: '毎月の体力回復+2・調子が安定', price: 500, type: 'once' },
    { id: 'farrier', n: '専属の装蹄師', d: '毎月脚の状態を見てくれる', eff: 'ケガのリスク3割減', price: 30, type: 'sub' },
    { id: 'gaikyu', n: '一流の外厩と契約', d: '最新設備で鍛える', eff: '成長速度1.2倍', price: 80, type: 'sub' },
    { id: 'vet', n: '専属の獣医', d: 'いつでも診てもらえる', eff: 'ケガの治りが早い・手術の成功率+15%', price: 40, type: 'sub' },
    { id: 'summer', n: '夏の北海道合宿', d: '涼しい場所で集中して鍛える', eff: 'パワー+2・スタミナ+2（1年に1回）', price: 300, type: 'season', fx: { pow: 2, sta: 2, sta_: 10 } },
    { id: 'partner', n: '併せ馬の相手を用意', d: '強い馬と並んで走らせる', eff: '根性+3（1年に1回）', price: 200, type: 'season', fx: { gut: 3 } },
  ],
  jockey: [
    { id: 'helmet', cat: 'self', n: '特注のヘルメットと防具', d: '安全に思い切り乗れる', eff: 'バランス+2', price: 120, type: 'once', fx: { bal: 2 } },
    { id: 'whipc', cat: 'self', n: 'カーボン製のムチ', d: '軽くてよくしなる', eff: 'ムチ+2', price: 80, type: 'once', fx: { whip: 2 } },
    { id: 'capsule', cat: 'self', n: '酸素カプセル', d: '自宅で疲労を抜く', eff: '毎月の体力回復+5', price: 600, type: 'once' },
    { id: 'gym', cat: 'self', n: '自宅トレーニングルーム', d: 'いつでも鍛えられる', eff: '成長速度1.1倍', price: 2000, type: 'once' },
    { id: 'trainer', cat: 'self', n: 'パーソナルトレーナー', d: '専属契約。毎日のメニューを組んでくれる', eff: '成長速度1.2倍', price: 60, type: 'sub' },
    { id: 'nutri', cat: 'self', n: '専属栄養士', d: '減量と食事を管理してくれる', eff: 'ケガのリスク3割減・体力回復+3', price: 30, type: 'sub' },
    { id: 'mental', cat: 'self', n: 'メンタルコーチ', d: '大一番でも心が乱れなくなる', eff: '出来事の成功率+5%', price: 30, type: 'sub' },
    { id: 'agent', cat: 'self', n: 'エージェント契約', d: '騎乗依頼を集めてくれる', eff: '騎乗数+20%', price: 50, type: 'sub', pro: 1 },
    { id: 'apart', cat: 'home', n: '賃貸マンション', d: '寮を出て一人暮らし', eff: '体力回復+1', price: 15, type: 'home' },
    { id: 'tower', cat: 'home', n: 'タワーマンション', d: '景色のいい部屋', eff: '体力回復+3・家族が喜ぶ', price: 70, type: 'home' },
    { id: 'house', cat: 'home', n: '一戸建て', d: 'トレセンの近くに家を建てる', eff: '体力回復+3・家族が喜ぶ', price: 6000, type: 'buyhome' },
    { id: 'compact', cat: 'car', n: '軽自動車', d: '通勤用の小さな車', eff: '体力回復+1', price: 150, up: 2, type: 'car' },
    { id: 'sports', cat: 'car', n: 'スポーツカー', d: 'あこがれの1台', eff: '人気+3', price: 1500, up: 10, type: 'car', fx: { pop: 3 } },
  ],
};
export function shopItem(kind, id) { return SHOP[kind].find(x => x.id === id); }
export function canBuy(p, it) {
  if (it.pro && stageOf(p) !== 'pro') return [false, 'プロになってから'];
  if (it.type === 'once' && p.items[it.id]) return [false, '購入済み'];
  if (it.type === 'sub' && p.subs[it.id]) return [true, '契約中（解約する）'];
  if (it.type === 'season' && p.seasonBuys[it.id] === p.year) return [false, '今年は済み'];
  if (it.type === 'home' && p.home === it.id) return [false, '住んでいる'];
  if (it.type === 'buyhome' && p.items[it.id]) return [false, '購入済み'];
  if (it.type === 'car' && p.car === it.id) return [false, '持っている'];
  const cost = it.type === 'home' ? it.price * 2 : it.price;
  if (p.money < cost) return [false, 'お金が足りない'];
  return [true, ''];
}
export function buy(p, id) {
  const it = shopItem(p.kind, id);
  const out = [];
  if (it.type === 'sub' && p.subs[id]) { p.subs[id] = 0; return [`${it.n}を解約した`]; }
  const [ok] = canBuy(p, it); if (!ok) return [];
  if (it.type === 'sub') { p.subs[id] = 1; out.push(`${it.n}と契約した（毎月${it.price}万円）`); }
  else if (it.type === 'home') { p.money -= it.price * 2; p.home = id; out.push(`${it.n}に引っ越した`); }
  else if (it.type === 'buyhome') { p.money -= it.price; p.items[id] = 1; p.home = id; out.push(`${it.n}を買った！`); }
  else if (it.type === 'car') { p.money -= it.price; p.car = id; out.push(`${it.n}を買った`); }
  else { p.money -= it.price; if (it.type === 'once') p.items[id] = 1; else p.seasonBuys[id] = p.year; out.push(`${it.n}を買った`); }
  if (it.fx) for (const [k, v] of Object.entries(it.fx)) { if (k === 'sta_') p.sta = clamp(p.sta + v, 0, 100); else if (k === 'pop') p.pop = clamp(p.pop + v, 0, 100); else stAdd(p, k, v); }
  return out;
}

// ===== 厩舎（騎手の所属先） =====
const STABLE_NAMES = ['美浦・田辺厩舎', '美浦・国枝厩舎', '美浦・堀田厩舎', '美浦・木村厩舎', '美浦・手塚厩舎', '栗東・矢作厩舎', '栗東・友道厩舎',
  '栗東・中内田厩舎', '栗東・池添厩舎', '栗東・須貝厩舎', '栗東・音無厩舎', '美浦・鹿戸厩舎', '栗東・杉山厩舎', '美浦・萩原厩舎'];
export const STABLES = STABLE_NAMES.map((n, i) => ({ id: i, n, rep: Math.round(40 + (i * 37) % 50) }));
export function stableOf(p) { return p.stable == null ? null : STABLES[p.stable]; }
export function stars(rep) { const n = clamp(Math.round((rep - 30) / 12), 1, 5); return '★'.repeat(n) + '☆'.repeat(5 - n); }

// ===== 作成 =====
export function makeHorse(d = {}) {
  const legend = d.forceLegend || Math.random() < 0.00001;
  const monster = !legend && (d.forceMonster || Math.random() < 0.02);
  const pot = legend ? 99 : monster ? ri(87, 91) : clamp(Math.round(80 + gauss() * 3.6), 70, 87);
  const style = d.style || pick(['逃げ', '先行', '先行', '差し', '差し', '追込']);
  const sb = { '逃げ': { spd: 2, gut: -1 }, '先行': { pow: 1 }, '差し': { spd: 1, wis: 1 }, '追込': { spd: 2, sta: -1 } }[style];
  const st = {}, cap = {};
  for (const k of H_KEYS) {
    cap[k] = clamp(Math.round(pot - 6 + rnd(-6, 6) + (sb[k] || 0) * 2), 40, 99);
    st[k] = Math.round(rnd(6, 12) + (monster ? 2 : legend ? 5 : 0));
  }
  if (legend) { const top = [...H_KEYS].sort(() => Math.random() - 0.5).slice(0, 3); for (const k of top) cap[k] = ri(97, 99); }
  const coat = d.coat ?? ri(0, COAT.length - 1);
  const p = {
    kind: 'horse', name: d.name || randomHorseName(), coat, sire: d.sire || pick(SIRE), dam: d.dam || pick(DAM),
    style, growth: d.growth || pick(['early', 'normal', 'normal', 'late']), pot, st, cap,
    apt: { turf: APT_LETTERS[clamp(Math.round(rnd(2.6, 6.6)), 0, 6)], dirt: APT_LETTERS[clamp(Math.round(rnd(1.6, 6.6)), 0, 6)] },
    age: 0, year: 2027, month: 5, season: 0, sta: 90, cond: 70, pop: 5, eval: 50, money: 1500, inj: 0, injName: '',
    focus: 'all', int: 'std', items: {}, subs: {}, seasonBuys: {}, skills: legend ? ['legend'] : monster ? ['monster'] : [],
    record: [0, 0, 0, 0], races: [], wins: 0, gradedWins: 0, g1Wins: 0, titles: [], awards: [], earnings: 0,
    log: [], yearLog: [], seen: {}, flags: { potEst: potGrade(pot + rnd(-3, 3)) }, fate: null, path: 'middle', jockeyId: null, playMs: 0,
  };
  return p;
}

export function makeJockey(d = {}) {
  const legend = d.forceLegend || Math.random() < 0.00001;
  const monster = !legend && (d.forceMonster || Math.random() < 0.02);
  const pot = legend ? 99 : monster ? ri(87, 91) : clamp(Math.round(80 + gauss() * 3.6), 70, 87);
  const st = {}, cap = {};
  for (const k of J_KEYS) { cap[k] = clamp(Math.round(pot - 4 + rnd(-6, 5)), 40, 99); st[k] = Math.round(rnd(16, 26) + (monster ? 3 : legend ? 8 : 0)); }
  return {
    kind: 'jockey', name: d.name || randomJockeyName(), silk: d.silk ?? ri(0, SILKS.length - 1), pref: d.pref || pick(['逃げ', '先行', '差し', '追込']),
    growth: d.growth || pick(['early', 'normal', 'normal', 'late']), pot, st, cap,
    age: 16, year: 2027, month: 4, season: 0, stage: 'school', stable: null, free: false,
    sta: 85, cond: 70, pop: 5, eval: 45, money: 20, inj: 0, injName: '',
    focus: 'all', int: 'std', items: {}, subs: {}, seasonBuys: {}, home: 'dorm', car: null,
    fam: { partner: null, kids: [], happy: 60 }, skills: legend ? ['legend'] : monster ? ['monster'] : [],
    record: [0, 0, 0, 0], rides: 0, wins: 0, gradedWins: 0, g1Wins: 0, titles: [], awards: [], earnings: 0, mockWins: 0,
    log: [], yearLog: [], seen: {}, flags: { potEst: potGrade(pot + rnd(-3, 3)) }, fate: null, playMs: 0,
  };
}

// 先輩（引退した馬・騎手）から1つずつ受け継ぐ
export function inherit(p, parents) {
  const K = KIND[p.kind]; const out = [];
  for (const par of parents) {
    const ps = par.s || {};
    const best = [...K.keys].sort((a, b) => (ps[b] || 0) - (ps[a] || 0));
    const skl = (par.skills || []).filter(k => SKILLS[k] && SKILLS[k].k === p.kind && !has(p, k));
    if (skl.length && Math.random() < 0.4) { const k = pick(skl); p.skills.push(k); out.push(`${par.name}から「${SKILLS[k].n}」`); }
    else { const k = pick(best.slice(0, 2)); p.cap[k] = clamp(p.cap[k] + 3, 40, 99); p.st[k] += 2; out.push(`${par.name}から${K.names[k]}の才能（限界+3）`); }
  }
  if (parents.length >= 2 && !has(p, 'heir')) p.skills.push('heir');
  return out;
}

// ===== 能力の上げ下げ =====
export function stAdd(p, k, v) {
  const x = p.st[k];
  if (v <= 0) p.st[k] = clamp(x + v, 1, 99);
  else p.st[k] = clamp(Math.min(x + v, Math.max(x, p.cap[k] + 1)), 1, 99);
}

export function evCtx(p) { return { p, ovr: ovrOf(p), stage: stageOf(p) }; }

const INJ_H = [[2, 8, ['ソエ', '挫石', 'フレグモーネ', '筋肉痛', '蹄の炎症']], [12, 24, ['屈腱炎', '骨折', '繋靭帯炎', '剥離骨折']]];
const INJ_J = [[2, 8, ['打撲', '手首のねんざ', '肋骨のひび', '肩の痛み']], [12, 24, ['鎖骨骨折', '腰椎の骨折', '大腿骨の骨折']]];

export function applyFx(p, fx) {
  const out = []; const K = KIND[p.kind];
  for (const [k, v] of Object.entries(fx || {})) {
    if (v === 0 || v == null) continue;
    if (k === 'hp') { p.sta = clamp(p.sta + v, 0, 100); out.push(['体力', v]); continue; }
    if (K.keys.includes(k)) { stAdd(p, k, v); out.push([K.names[k], v]); }
    else if (k === 'key') { const kk = p.focus === 'all' ? pick(K.keys) : p.focus; stAdd(p, kk, v); out.push([K.names[kk], v]); }
    else if (k === 'all') { for (const s of K.keys) stAdd(p, s, v); out.push(['全能力', v]); }
    else if (k === 'fate') { for (const s of K.keys) p.st[s] = clamp(p.st[s] + v, 1, 99); out.push(['全能力', v]); }
    else if (k === 'cap') { for (const s of K.keys) p.cap[s] = clamp(p.cap[s] + v, 40, 99); out.push(['全能力の限界', '↑', 1]); }
    else if (k === 'sta') { p.sta = clamp(p.sta + v, 0, 100); out.push(['体力', v]); }
    else if (k === 'cond') { p.cond = clamp(p.cond + v, 0, 100); out.push(['調子', v]); }
    else if (k === 'pop') { p.pop = clamp(p.pop + v, 0, 100); out.push([K.popName, v]); }
    else if (k === 'eval') { p.eval = clamp(p.eval + v, 0, 100); out.push([K.evalName, v]); }
    else if (k === 'money') { p.money += v; if (v > 0) p.earnings += v; out.push([v >= 0 ? '収入' : '出費', (v >= 0 ? '+' : '') + yen(v), v]); }
    else if (k === 'inj') { p.inj += v; if (!p.injName) p.injName = pick((p.kind === 'horse' ? INJ_H : INJ_J)[0][2]); out.push(['ケガ', `全治${v}週`, -1]); }
    else if (k === 'partner') { p.fam.partner = { n: v === true ? pick(PARTNER_NAMES) : v, love: 40, married: false, months: 0 }; out.push(['恋人', p.fam.partner.n, 1]); }
    else if (k === 'love') { const P = p.fam && p.fam.partner; if (P && !P.married) { P.love = clamp(P.love + v, 0, 100); out.push(['愛情', v]); } }
    else if (k === 'fam') { const P = p.fam && p.fam.partner; if (P && P.married) { p.fam.happy = clamp(p.fam.happy + v, 0, 100); out.push(['家族の満足度', v]); } }
    else if (k === 'breakup') { p.fam.partner = null; out.push(['恋人', '別れた', -1]); }
    else if (k === 'marry') { const P = p.fam.partner; if (P) { P.married = true; p.fam.happy = 72; out.push(['結婚', 'おめでとう', 1]); } }
    else if (k === 'kid') { const n = pick(KID_NAMES); p.fam.kids.push({ n, y: p.year }); out.push(['家族', `${n}が誕生`, 1]); }
    else if (k === 'retire') { p.fate = { ty: 'retire', why: v, head: '引退' }; out.push(['引退', '', -1]); }
    else if (k === 'heal') { p.inj = 0; p.injName = ''; out.push(['ケガ', '回復', 1]); }
  }
  return out;
}
const PARTNER_NAMES = ['美咲', '葵', '結衣', '陽菜', '彩花', '千尋', '真央', '莉子', '翔太', '大輝', '颯', '蓮'];
const KID_NAMES = ['ひなた', 'そら', 'ゆうと', 'さくら', 'はると', 'こはる', 'りく', 'みお'];
export const yen = (m) => { m = Math.round(m); const a = Math.abs(m); const s = a >= 10000 ? `${Math.floor(a / 10000)}億${a % 10000 ? (a % 10000) + '万' : ''}円` : `${a}万円`; return (m < 0 ? '-' : '') + s; };

// ===== 出来事の抽選 =====
export function pickEvents(p, n) {
  const c = evCtx(p), st = stageOf(p);
  const ok = EVENTS.filter(e => !e.sp && e.k === p.kind && e.st.includes(st) && (!e.when || e.when(c)) && (!e.mo || e.mo.some(m => m >= p.month && m <= turnEnd(p))));
  let pool = ok.filter(e => !(p.seen[e.id] != null && p.season - p.seen[e.id] < 2));
  if (pool.length < n) pool = ok;
  const out = [], P = pool.slice();
  while (out.length < n && P.length) {
    let x = Math.random() * P.reduce((s, e) => s + (e.w || 1), 0), i = 0;
    for (; i < P.length - 1; i++) { x -= P[i].w || 1; if (x <= 0) break; }
    out.push(P[i].id); P.splice(i, 1);
  }
  return out;
}
export function getEv(id) { return EVENTS.find(e => e.id === id); }
export function prOf(ch, c) {
  let v = ch.pr(c); if (v >= 1) return 1;
  if (c.p.subs && c.p.subs.mental) v += 0.05;
  if (has(c.p, 'g1man')) v += 0.05;
  return clamp(v, 0.05, 0.95);
}
const JIT = ['hp', 'spd', 'sta', 'pow', 'gut', 'wis', 'tec', 'whip', 'bal', 'fit', 'jud', 'key', 'all', 'pop', 'eval', 'cond', 'money', 'love', 'fam'];
export function jitterFx(fx, big, p) {
  if (!fx) return fx; const o = {};
  for (const [k, v] of Object.entries(fx)) {
    if (typeof v !== 'number' || !JIT.includes(k) || (k === 'sta' && false)) { o[k] = v; continue; }
    let x = v;
    if (['pop', 'eval', 'cond', 'love', 'fam', 'hp'].includes(k)) x = v * (0.6 + Math.random() * 0.9);
    else if (k === 'money' && v > 0) x = v * (0.7 + Math.random() * 0.8);
    if (big === 'great' && x > 0) x *= 2; if (big === 'bad' && x < 0) x *= 1.6;
    x = Math.round(x); if (x === 0) x = Math.sign(v); o[k] = x;
  }
  if (big === 'great' && !Object.values(o).some(v => typeof v === 'number' && v > 0)) o.cond = (o.cond || 0) + 6;
  return o;
}

// ===== レース（馬） =====
function seeded(seed) { let x = seed % 233280; return () => { x = (x * 9301 + 49297) % 233280; return x / 233280; }; }
export const PATHS = {
  sprint: { n: '短距離路線', d: '1200〜1400m', min: 1000, max: 1400 },
  mile: { n: 'マイル路線', d: '1400〜1800m', min: 1400, max: 1800 },
  middle: { n: '中距離路線', d: '1800〜2500m', min: 1800, max: 2500 },
  long: { n: '長距離路線', d: '2400m以上', min: 2400, max: 3600 },
  dirt: { n: 'ダート路線', d: 'ダートのレース中心', dirt: 1 },
};
function inPath(p, surf, dist) {
  const P = PATHS[p.path || 'middle'];
  if (P.dirt) return surf === 'ダ';
  return surf === '芝' && dist >= P.min && dist <= P.max;
}
export function classIndex(p) { if (p.races.length === 0) return 0; if (p.wins === 0) return 1; return Math.min(p.wins + 1, 5); }
function gradeLv(r) { const b = { G3: 64, G2: 70, G1: 79 }[r.g]; return r.age === '2' ? b - 14 : r.age === '3' ? b - 5 : b; }
export function racesInTurn(p) {
  if (p.kind !== 'horse' || stageOf(p) !== 'tc') return [];
  const out = [];
  for (let m = p.month; m <= turnEnd(p); m++) {
    if (p.age === 2 && m < 6) continue;
    const rand = seeded(p.year * 131 + m * 17 + (p.id || 3) * 7);
    const ci = classIndex(p);
    const dists = [1200, 1400, 1600, 1800, 2000, 2200, 2400];
    for (let i = 0; i < 2; i++) {
      const c = CLASS_INFO[ci];
      let surf = p.path === 'dirt' ? (rand() < 0.8 ? 'ダ' : '芝') : (rand() < 0.75 ? '芝' : 'ダ');
      let dist = dists[Math.floor(rand() * (p.age === 2 ? 4 : dists.length))];
      if (i === 0 && p.path !== 'dirt') { const P = PATHS[p.path || 'middle']; const ok = dists.filter(d => d >= P.min && d <= P.max && (p.age > 2 || d <= 2000)); if (ok.length) dist = ok[Math.floor(rand() * ok.length)]; surf = '芝'; }
      out.push({ m, name: c.name, g: null, cls: ci, surf, dist, place: PLACES[Math.floor(rand() * PLACES.length)], prize: c.prize, lv: c.lv });
    }
    for (const r of GRADED) {
      if (r.m !== m) continue;
      const ok = (r.age === '2' && p.age === 2) || (r.age === '3' && p.age === 3) || (r.age === '3+' && p.age >= 3) || (r.age === '4+' && p.age >= 4);
      if (!ok) continue;
      const can = r.g === 'G1' ? (r.age === '2' ? p.wins >= 1 : (p.wins >= 2 || p.gradedWins >= 1)) : p.wins >= 1;
      out.push({ ...r, cls: 6, lv: gradeLv(r), locked: !can, path: inPath(p, r.surf, r.dist) });
    }
  }
  return out.sort((a, b) => (a.m - b.m) || ((b.g ? 1 : 0) - (a.g ? 1 : 0)) || ((b.path ? 1 : 0) - (a.path ? 1 : 0)));
}
export function bigRacesInTurn(p) {
  if (p.kind !== 'jockey' || p.stage !== 'pro') return [];
  const out = [];
  for (let m = p.month; m <= turnEnd(p); m++) for (const r of GRADED) if (r.m === m) {
    const need = r.g === 'G1' ? 55 : r.g === 'G2' ? 45 : 35;
    out.push({ ...r, lv: gradeLv(r), locked: p.eval < need, need });
  }
  return out;
}
export const condIdx = (p) => { let i = p.cond < 20 ? 0 : p.cond < 40 ? 1 : p.cond < 70 ? 2 : p.cond < 90 ? 3 : 4; if (p.sta < 30) i = Math.max(0, i - 1); return i; };

// ===== 1か月の計算 =====
function injMult(p) {
  if (p.kind === 'horse') return (1.35 - Math.min(p.st.pow, 100) / 150) * (p.age >= 6 ? 1.35 : 1) * (p.subs.farrier ? 0.7 : 1) * (has(p, 'iron') ? 0.6 : 1) * (p.sta < 30 ? 1.6 : 1);
  return (1.35 - Math.min(p.st.fit, 100) / 150) * (p.age >= 40 ? 1.35 : 1) * (p.subs.nutri ? 0.7 : 1) * (has(p, 'ironj') ? 0.6 : 1) * (p.sta < 30 ? 1.6 : 1);
}
export function injRisk(p, k) { return clamp(TRAIN[k].inj * injMult(p), 0.01, 0.6); }

function grow(p, mult, a) {
  const K = KIND[p.kind];
  const g = GROWTH[p.kind][p.growth].c(p.age), t = TRAIN[p.int];
  const sb = (has(p, 'legend') ? 2 : has(p, 'monster') ? 1.1 : 1) * (has(p, 'heir') ? 1.1 : 1) * ((p.subs.trainer || p.subs.gaikyu) ? 1.2 : 1) * (p.items.gym ? 1.1 : 1);
  const ip = p.inj > 0 ? 0.4 : 1, sp = p.sta < 30 ? 0.7 : 1;
  for (const k of K.keys) {
    const below = p.st[k] < p.cap[k];
    let d = g > 0 ? g * Math.max(0, p.cap[k] - p.st[k]) * K.rate * sb * ip * sp * mult + (below ? rnd(-0.12, 0.18) : rnd(-0.1, 0.04))
      : g * DECAY[k] / 12 + rnd(-0.15, 0.08);
    if (below) {
      if (p.focus === k) d += t.g / 12 * mult * (g > 0 ? sb : 1) * ip;
      else if (p.focus === 'all') d += t.g / 12 * 0.33 * mult * ip;
      if (a.boost && a.boost.includes(k)) d += 0.3 * ip;
      if (d > 0) d = Math.min(d, p.cap[k] - p.st[k] + 0.05);
    }
    p.st[k] = clamp(p.st[k] + d, 1, 99);
  }
}

export function monthlyCost(p) {
  const items = [];
  if (p.kind === 'horse') {
    const st = stageOf(p);
    items.push(['預託料', st === 'tc' ? 30 : st === 'ikusei' ? 15 : 8]);
    for (const k of Object.keys(p.subs)) if (p.subs[k]) items.push([shopItem('horse', k).n, shopItem('horse', k).price]);
  } else {
    if (p.stage === 'pro') items.push(['生活費', 20]);
    const P = p.fam.partner; if (P && P.married) items.push(['家族の生活費', 10 + p.fam.kids.length * 8]);
    const rent = { apart: 15, tower: 70 }[p.home]; if (rent) items.push(['家賃', rent]);
    if (p.car) items.push(['車の維持費', shopItem('jockey', p.car).up]);
    for (const k of Object.keys(p.subs)) if (p.subs[k]) items.push([shopItem('jockey', k).n, shopItem('jockey', k).price]);
  }
  return items;
}

// 騎手：1か月の騎乗（自動）
function jockeyRides(p, a, res, m) {
  if (p.stage !== 'pro' || p.inj > 0 || a.norides) return;
  const S = stableOf(p), rep = S ? S.rep : 40;
  let rides = 6 + p.eval * 0.25 + (p.free ? p.pop * 0.16 : rep * 0.12);
  if (a.id === 'rest' || a.id === 'family') rides *= 0.6;
  if (p.subs.agent) rides *= 1.2;
  rides = Math.max(0, Math.round(rides * rnd(0.85, 1.15)));
  const o = ovrOf(p);
  const pw = clamp(0.015 + Math.max(0, o - 40) * 0.0025 + (p.eval - 50) * 0.0005 + (rep - 50) * 0.0006 + (p.cond - 60) * 0.0002, 0.01, 0.2);
  let w = 0, s2 = 0, s3 = 0;
  for (let i = 0; i < rides; i++) { const x = Math.random(); if (x < pw) w++; else if (x < pw * 1.85) s2++; else if (x < pw * 2.6) s3++; }
  const inc = Math.round(rides * 2.6 + w * 45 + s2 * 18 + s3 * 11);
  p.rides += rides; p.wins += w; p.record[0] += w; p.record[1] += s2; p.record[2] += s3; p.record[3] += rides - w - s2 - s3;
  p.money += inc; p.earnings += inc;
  res.rides += rides; res.w += w; res.inc += inc;
  p.cond = clamp(p.cond + (w / Math.max(1, rides) - pw) * 40, 0, 100);
  p.eval = clamp(p.eval + (w - rides * 0.08) * 0.04 + (o - p.eval) * 0.06, 0, 100);
  // 重賞（大一番以外の自動騎乗）
  if (a.id !== 'bigrace' && p.eval >= 50) for (const r of GRADED) if (r.m === m && Math.random() < (p.eval - 55) / 120) {
    const pg = pw * (r.g === 'G1' ? 0.3 : r.g === 'G2' ? 0.45 : 0.55);
    if (Math.random() < pg) {
      p.gradedWins++; if (r.g === 'G1') p.g1Wins++;
      const hn = randomHorseName();
      p.titles.push(`${r.name}（${hn}）`);
      const pz = Math.round(r.prize * 0.05); p.money += pz; p.earnings += pz; res.inc += pz;
      p.pop = clamp(p.pop + (r.g === 'G1' ? 8 : 3), 0, 100); p.eval = clamp(p.eval + (r.g === 'G1' ? 5 : 2), 0, 100);
      res.notes.push(`${m}月 ${r.g} ${r.name}を${hn}で制覇！`);
    }
  }
}

// 運命（ごくまれ）：大ケガで引退、亡くなる
const FATE_P = { horse: { retire: 0.0004, death: 0.00006 }, jockey: { retire: 0.00015, death: 0.00002, accident: 0.00045 } };
function fateRoll(p, res) {
  if (p.fate) return;
  const F = FATE_P[p.kind], r = Math.random();
  if (p.kind === 'horse') {
    if (stageOf(p) !== 'tc') return;
    if (r < F.death) p.fate = { ty: 'death', why: '調教中に脚を骨折し、天国へ旅立った', head: '訃報' };
    else if (r < F.death + F.retire) p.fate = { ty: 'retire', why: '調教中に脚に重いケガを負い、競走能力を失った', head: '故障で引退' };
  } else {
    if (p.stage !== 'pro') return;
    if (r < F.death) p.fate = { ty: 'death', why: 'レース中の落馬事故で、帰らぬ人となった', head: '訃報' };
    else if (r < F.death + F.retire) p.fate = { ty: 'retire', why: '落馬で大ケガを負い、ムチを置くことを決めた', head: '落馬で引退' };
  }
  if (p.fate) res.fate = p.fate;
}

// 馬のレース結果を反映
export function applyHorseRace(p, race, rr, res) {
  const pos = rr.pos;
  p.races.push({ y: p.year, age: p.age, m: race.m, name: race.name, g: race.g, surf: race.surf, dist: race.dist, pos, field: rr.field, time: rr.time, jockey: rr.jname || '' });
  p.record[Math.min(pos, 4) - 1]++;
  let prize = pos <= 5 ? race.prize * [1, 0.4, 0.25, 0.15, 0.1][pos - 1] : 0;
  p.money += prize * 0.8; p.earnings += prize; res.inc += prize * 0.8;
  if (pos === 1) {
    p.wins++; if (race.g) { p.gradedWins++; p.titles.push(race.name); } if (race.g === 'G1') p.g1Wins++;
    p.pop = clamp(p.pop + (race.g === 'G1' ? 15 : race.g ? 7 : 3), 0, 100); p.eval = clamp(p.eval + (race.g ? 6 : 4), 0, 100); p.cond = clamp(p.cond + 8, 0, 100);
    res.carrots += race.g === 'G1' ? 50 : race.g ? 20 : 10;
  } else if (pos <= 3) { p.pop = clamp(p.pop + 2, 0, 100); p.eval = clamp(p.eval + 1, 0, 100); res.carrots += 3; }
  else if (pos > rr.field / 2) { p.cond = clamp(p.cond - 6, 0, 100); p.eval = clamp(p.eval - 2, 0, 100); }
  p.sta = clamp(p.sta - 18 - race.dist / 300 - (rr.whips || 0) * 0.2, 0, 100);
  const exp = race.g === 'G1' ? 1.6 : race.g ? 1.3 : 1;
  stAdd(p, 'gut', 0.8 * exp); stAdd(p, 'wis', 0.8 * exp);
  res.races.push({ ...race, pos, field: rr.field, time: rr.time, prize });
  // レース中の故障
  const r = Math.random();
  if (r < 0.0012) { p.fate = { ty: 'death', why: `${race.name}のレース中に脚を骨折。懸命の処置もむなしく、天国へ旅立った`, head: '訃報' }; res.fate = p.fate; }
  else if (r < 0.0012 + 0.012 * injMult(p)) {
    const w = Math.random() < 0.3 ? ri(12, 24) : ri(2, 8);
    p.inj += w; p.injName = pick(INJ_H[w >= 12 ? 1 : 0][2]);
    res.notes.push(`${race.name}のあと${p.injName}が見つかった（全治${w}週間）`);
    if (w >= 12) p.flags.surgery = p.injName;
  }
}

// 騎手の大一番・模擬レースの結果
export function applyJockeyRace(p, race, rr, res) {
  const pos = rr.pos;
  if (race.mock) {
    const base = pos === 1 ? 2.2 : pos <= 3 ? 1.5 : pos <= rr.field / 2 ? 1 : 0.6;
    for (const k of J_KEYS) stAdd(p, k, base * rnd(0.8, 1.2));
    if (pos === 1) { p.mockWins++; p.eval = clamp(p.eval + 6, 0, 100); }
    else p.eval = clamp(p.eval + (pos <= 3 ? 3 : 0), 0, 100);
    res.races.push({ ...race, pos, field: rr.field, time: rr.time, prize: 0 });
    return;
  }
  p.rides++; p.record[Math.min(pos, 4) - 1]++;
  const prize = pos <= 5 ? race.prize * [1, 0.4, 0.25, 0.15, 0.1][pos - 1] * 0.05 : 0;
  p.money += prize; p.earnings += prize; res.inc += prize;
  if (pos === 1) {
    p.wins++; p.gradedWins++; if (race.g === 'G1') p.g1Wins++;
    p.titles.push(`${race.name}（${race.horse}）`);
    p.pop = clamp(p.pop + (race.g === 'G1' ? 12 : 5), 0, 100); p.eval = clamp(p.eval + (race.g === 'G1' ? 8 : 4), 0, 100);
    res.carrots += race.g === 'G1' ? 50 : 20;
  } else if (pos <= 3) { p.eval = clamp(p.eval + 2, 0, 100); res.carrots += 3; }
  else p.eval = clamp(p.eval - 2, 0, 100);
  for (const k of ['tec', 'jud', 'whip']) stAdd(p, k, 0.6);
  res.races.push({ ...race, pos, field: rr.field, time: rr.time, prize });
}

function monthStep(C, a, res, first, m) {
  const p = C.p;
  if (first) {
    if (a.cost) { p.money -= a.cost; }
    p.sta = clamp(p.sta + (a.sta || 0), 0, 100); p.cond = clamp(p.cond + (a.form || 0), 0, 100);
    p.eval = clamp(p.eval + (a.eval || 0), 0, 100); p.pop = clamp(p.pop + (a.pop || 0), 0, 100);
    if (a.id === 'family') { const P = p.fam.partner; if (P) { if (P.married) p.fam.happy = clamp(p.fam.happy + a.fam, 0, 100); else P.love = clamp(P.love + a.love, 0, 100); } else p.cond = clamp(p.cond + 3, 0, 100); }
    if (a.media && p.stage === 'pro') { const mm = Math.round(p.pop * 2.5 + 30); p.money += mm; p.earnings += mm; res.inc += mm; res.notes.push(`出演料 ${yen(mm)}`); }
  } else if (a.sta && a.sta < 0) p.sta = clamp(p.sta + a.sta * 0.5, 0, 100);
  // 練習中のケガ
  if (a.g >= 0.7 && !a.race) {
    const risk = TRAIN[p.int].inj / 9 * (a.inj || 1) * injMult(p) * (p.kind === 'horse' && stageOf(p) !== 'tc' ? 0.4 : 1);
    if (Math.random() < risk) {
      const sev = Math.random() < 0.15;
      const w = sev ? ri(12, 24) : ri(2, 8);
      p.inj += w; p.injName = pick((p.kind === 'horse' ? INJ_H : INJ_J)[sev ? 1 : 0][2]);
      res.notes.push(`${m}月 ${p.kind === 'horse' ? '調教中' : '練習中'}に${p.injName}（全治${w}週間）`);
      if (sev && p.kind === 'horse') p.flags.surgery = p.injName;
    }
  }
  // レース（このターンに選んだもの）
  if (C.raceSel && C.raceSel.m === m && C.raceRes) {
    if (p.kind === 'horse') applyHorseRace(p, C.raceSel, C.raceRes, res);
    else applyJockeyRace(p, C.raceSel, C.raceRes, res);
  }
  if (p.kind === 'jockey') jockeyRides(p, a, res, m);
  grow(p, a.g * (p.kind === 'jockey' && p.stage === 'pro' && !a.norides ? 1.1 : 1), a);
  // 体力・調子・お金
  const homeB = p.kind === 'jockey' ? ({ apart: 1, tower: 3, house: 3 }[p.home] || 0) + (p.car === 'compact' ? 1 : 0) : (p.items.stall ? 2 : 0);
  p.sta = clamp(p.sta + 12 + (p.subs.nutri ? 3 : 0) + ((p.items.capsule || p.items.capsuleH) ? 5 : 0) + homeB, 0, 100);
  let dc = (p.subs.mental || p.items.stall ? rnd(-3, 3) : rnd(-5, 5)) + (60 - p.cond) * 0.1;
  if (p.kind === 'jockey') { const P = p.fam.partner; if (P && P.married) dc += (p.fam.happy - 50) / 20; else if (P) dc += (P.love - 50) / 30; }
  if (p.money < 0) dc -= 5;
  p.cond = clamp(p.cond + dc, 0, 100);
  if (p.kind === 'jockey') {
    const P = p.fam.partner;
    if (P) { P.months = (P.months || 0) + 1; if (P.married) p.fam.happy = clamp(p.fam.happy - 2.5 + ({ tower: 1, house: 2 }[p.home] || 0), 0, 100); else P.love = clamp(P.love - 3, 0, 100); }
    if (p.stage === 'school') { p.money += 3; res.inc += 3; }
  }
  const costs = monthlyCost(p), cost = costs.reduce((s, x) => s + x[1], 0);
  p.money -= cost; res.cost += cost;
  p.inj = Math.max(0, p.inj - (p.subs.vet ? 6.5 : 4.3)); if (p.inj <= 0) p.injName = '';
  p.pop = p.pop * 0.99;
  const sk = checkSkills(p); res.skills.push(...sk);
}

// ===== ターンの流れ =====
export function newCareerState(p) {
  return { p, screen: 'camp', tab: 'play', act: null, evq: [], evi: 0, evr: null, mres: null, report: null, offers: null, raceSel: null, raceRes: null, yr: freshYear(p) };
}
function freshYear(p) { return { y: p.year, age: p.age, st0: { ...p.st }, o0: ovrOf(p), rec0: [...p.record], rides0: p.rides || 0, wins0: p.wins, earn0: p.earnings, titles0: p.titles.length, races0: (p.races || []).length, g10: p.g1Wins }; }

export function startTurn(C) { C.act = null; C.evq = []; C.evi = 0; C.evr = null; C.mres = null; C.raceSel = null; C.raceRes = null; C.screen = 'month'; }

export function confirmAction(C) {
  const p = C.p; const q = [];
  if (p.flags.surgery) { q.push('sp:surgery'); }
  const fateAge = p.kind === 'horse' ? 4 : 30;
  if (!q.length && p.age >= fateAge && !p.flags.fate && stageOf(p) === (p.kind === 'horse' ? 'tc' : 'pro')) { p.flags.fate = 1; q.push(p.kind === 'horse' ? 'sp:fateH' : 'sp:fateJ'); }
  if (!q.length) {
    if (Math.random() < 0.72) { const id = pickEvents(p, 1)[0]; if (id) q.push(id); }
    const extra = Math.random() < 0.35 ? (Math.random() < 0.3 ? 2 : 1) : 0;
    for (let k = 0; k < extra; k++) { const id = pickEvents(p, 6).find(x => !q.includes(x)); if (id) q.push(id); }
  }
  C.evq = q; C.evi = 0; C.evr = null;
  C.screen = q.length ? 'event' : 'afterEvents';
}

export function chooseEvent(C, ci) {
  const p = C.p, id = C.evq[C.evi], e = getEv(id), ch = e.ch[ci], c = evCtx(p);
  const pr = prOf(ch, c), win = Math.random() < pr, r = win ? ch.ok : ch.ng;
  p.seen[e.id] = p.season;
  const roll = Math.random(), big = win && pr < 1 && roll < 0.15 ? 'great' : !win && roll < 0.12 ? 'bad' : null;
  if (id === 'sp:surgery') p.flags.surgery = null;
  const fx = applyFx(p, id.startsWith('sp:fate') ? r.fx : jitterFx(typeof r.fx === 'function' ? r.fx(c) : r.fx, big, p));
  const msg = typeof r.m === 'function' ? r.m(c) : r.m;
  C.evr = { ci, win, m: (big === 'great' ? '【大成功】' : big === 'bad' ? '【大失敗】' : '') + msg, fx, pr, safe: pr >= 1, big };
  C.lastEv = { t: typeof e.t === 'function' ? e.t(c) : e.t, l: ch.l };
}
export function nextEvent(C) { C.evr = null; C.evi++; if (C.evi >= C.evq.length) C.screen = 'afterEvents'; }

export function runTurn(C) {
  const p = C.p;
  const a = ACTS[p.kind].find(x => x.id === C.act) || ACTS[p.kind][0];
  const P = p.fam && p.fam.partner;
  const b = { st: { ...p.st }, money: p.money, sta: p.sta, cond: p.cond, pop: p.pop, eval: p.eval, o: ovrOf(p), love: P ? (P.married ? p.fam.happy : P.love) : null };
  const res = { y: p.year, m: p.month, m1: turnEnd(p), act: actName(a, p), races: [], notes: [], skills: [], inc: 0, cost: 0, rides: 0, w: 0, carrots: 0, ev: C.lastEv || null };
  C.lastEv = null;
  const end = turnEnd(p);
  for (let m = p.month; m <= end; m++) {
    monthStep(C, a, res, m === p.month, m);
    if (p.fate) break;
  }
  if (!p.fate) fateRoll(p, res);
  if (p.fate) res.fate = p.fate;
  res.d = KIND[p.kind].keys.map(k => [k, Math.round(p.st[k] * 10 - b.st[k] * 10) / 10]);
  res.o0 = b.o; res.o1 = ovrOf(p);
  res.dm = Math.round(p.money - b.money); res.dsta = Math.round(p.sta - b.sta); res.dcond = Math.round(p.cond - b.cond);
  res.dpop = Math.round(p.pop - b.pop); res.deval = Math.round(p.eval - b.eval);
  const P2 = p.fam && p.fam.partner; res.dfam = P2 && b.love != null ? Math.round((P2.married ? p.fam.happy : P2.love) - b.love) : null;
  p.yearLog.push({ m: res.m, act: res.act, races: res.races.map(r => `${r.name}${r.pos}着`), notes: res.notes.slice(0, 3) });
  C.mres = res; C.screen = 'mres';
  return res;
}

export function afterTurn(C) {
  const p = C.p;
  if (p.fate && p.fate.ty !== 'acc') { C.screen = 'retireNow'; return; }
  if (isLastTurnOfYear(p)) { seasonEnd(C); return; }
  const T = KIND[p.kind].turns; p.month = T.find(x => x > p.month) || T[0];
  startTurn(C);
}

// ===== 年間総括 =====
function seasonEnd(C) {
  const p = C.p, Y = C.yr;
  const R = { year: p.year, age: p.age, o0: Y.o0, o1: ovrOf(p), awards: [], rows: [] };
  R.d = KIND[p.kind].keys.map(k => [k, Math.round(p.st[k] - Y.st0[k])]);
  const titles = p.titles.slice(Y.titles0);
  R.titles = titles;
  if (p.kind === 'horse') {
    const races = p.races.slice(Y.races0);
    const rec = [0, 0, 0, 0]; races.forEach(r => rec[Math.min(r.pos, 4) - 1]++);
    const g1 = races.filter(r => r.g === 'G1' && r.pos === 1);
    R.rows.push(['出走', races.length ? `${races.length}戦（${rec.join('-')}）` : 'なし']);
    R.rows.push(['獲得賞金', yen(p.earnings - Y.earn0)]);
    if (titles.length) R.rows.push(['勝った重賞', titles.join('、')]);
    R.rows.push(['通算成績', `${p.record.join('-')}・${yen(p.earnings)}`]);
    if (g1.length && p.age === 2) R.awards.push('最優秀2歳馬');
    if (g1.length && p.age === 3) R.awards.push('最優秀3歳馬');
    if (g1.length && p.age >= 4) R.awards.push('最優秀古馬');
    if (g1.length >= 2) R.awards.push('年度代表馬');
    p.awards.push(...R.awards.map(a => `${p.year}年 ${a}`));
    R.headA = g1.length ? `${g1[0].name}` : titles.length ? titles[0] : rec[0] ? `${rec[0]}勝` : p.age < 2 ? 'すくすく' : races.length ? '雌伏の時' : '準備の一年';
    R.headB = g1.length ? '制覇！' : titles.length ? '重賞制覇' : rec[0] ? '挙げる' : p.age < 2 ? '成長中' : races.length ? 'まだまだ' : '力をためる';
    R.deck = g1.length ? `${p.name}、${g1.map(r => r.name).join('・')}を制す。${R.awards.includes('年度代表馬') ? 'まさに年度代表馬の走りだった。' : '世代の頂点に立った。'}`
      : titles.length ? `${p.name}、${titles.join('・')}を勝って重賞ウイナーに。次はG1の舞台だ。`
      : rec[0] ? `${p.name}、この一年で${rec[0]}勝。着実に階段を上っている。`
      : p.age === 0 ? `${p.name}、生まれ故郷の牧場で元気に育つ。` : p.age === 1 ? `${p.name}、育成牧場で競走馬への準備を進める。`
      : races.length ? `${p.name}、勝ち星には届かなかったが、経験を積んだ一年。` : `${p.name}、デビューに向けて力をためる一年。`;
  } else {
    const rides = p.rides - Y.rides0, wins = p.wins - Y.wins0;
    if (p.stage === 'pro') {
      R.rows.push(['騎乗数', `${rides}回`]); R.rows.push(['勝利数', `${wins}勝（勝率${rides ? (wins / rides * 100).toFixed(1) : 0}%）`]);
      R.rows.push(['獲得賞金・収入', yen(p.earnings - Y.earn0)]);
      if (titles.length) R.rows.push(['重賞勝ち', titles.join('、')]);
      R.rows.push(['通算', `${p.rides}戦${p.wins}勝・G1 ${p.g1Wins}勝`]);
      const st = stableOf(p); R.rows.push(['所属', p.free ? 'フリー' : st ? st.n : '—']);
      if (wins >= 150) R.awards.push('リーディングジョッキー'); else if (wins >= 100) R.awards.push('100勝達成');
      if (p.flags.debutY === p.year && wins >= 20) R.awards.push('最優秀新人騎手');
      if (p.g1Wins - Y.g10 >= 3) R.awards.push('最多G1勝利騎手');
      p.awards.push(...R.awards.map(a => `${p.year}年 ${a}`));
      R.headA = wins >= 100 ? `${wins}勝` : titles.length ? '重賞制覇' : `${wins}勝`;
      R.headB = wins >= 150 ? 'リーディング！' : titles.length ? '大舞台で輝く' : wins >= 50 ? '飛躍の年' : '経験を積む';
      R.deck = `${p.name}、この一年で${rides}鞍に騎乗し${wins}勝。${titles.length ? titles.join('・') + 'を制した。' : '次は重賞のタイトルを狙う。'}`;
    } else {
      R.rows.push(['模擬レース', `${p.mockWins}勝`]); R.rows.push(['教官の評価', Math.round(p.eval)]);
      R.headA = '競馬学校'; R.headB = p.age >= 17 ? '卒業へ' : '1年目';
      R.deck = `${p.name}、競馬学校で${p.age >= 17 ? '2年間の訓練を終える。いよいよデビューだ。' : '騎手の基礎をたたき込まれる一年。'}`;
    }
  }
  if (p.season >= 1 && !p.flags.potShown) { p.flags.potShown = 1; p.flags.potEst = potGrade(p.pot); R.potNote = p.flags.potEst; }
  C.report = R; C.screen = 'report';
}

// ===== オファー（年末の進路） =====
export function buildOffers(C) {
  const p = C.p; const X = { list: [], canRetire: false, retireOpts: [] };
  if (p.kind === 'horse') {
    if (p.age >= 2) {
      X.paths = Object.entries(PATHS).map(([k, v]) => ({ k, ...v }));
      if (p.age >= 3) X.retireOpts.push({ id: 'riding', n: '引退して乗馬になる', d: 'のんびりと第二の馬生へ' });
      if (p.g1Wins >= 1 || p.gradedWins >= 2) X.retireOpts.push({ id: 'stud', n: '引退して種牡馬入り', d: `種付け料 ${yen(Math.round(50 + p.g1Wins * 300 + p.gradedWins * 60))}。子どもたちに夢を託す` });
      X.forced = p.age >= 7;
      if (X.forced && !X.retireOpts.length) X.retireOpts.push({ id: 'riding', n: '引退して乗馬になる', d: 'のんびりと第二の馬生へ' });
    }
    X.note = p.age < 2 ? 'まだ競走馬になる前。来年も牧場でしっかり育てよう。' : X.forced ? '7歳の年末。ここで現役生活に区切りをつける。' : '来年はどの路線で戦うかを決める。引退させることもできる。';
  } else {
    const o = ovrOf(p);
    const vis = o * 0.6 + p.eval * 0.4 + p.pop * 0.1;
    const pool = STABLES.filter(s => s.rep <= vis + 12).sort(() => Math.random() - 0.5).slice(0, ri(2, 4));
    const cur = stableOf(p);
    if (p.stage === 'school') {
      X.list = (pool.length ? pool : [STABLES[0]]).map(s => ({ stable: s.id }));
      X.note = '卒業の年。どの厩舎に所属してデビューするかを選ぶ。';
    } else {
      if (cur && !p.free) X.list.push({ stable: cur.id, renew: 1 });
      for (const s of pool) if (!cur || s.id !== cur.id) X.list.push({ stable: s.id });
      X.list = X.list.slice(0, 4);
      X.free = p.eval >= 55 && !p.free;
      X.stayFree = p.free;
      X.canRetire = p.age >= 33;
      X.forced = p.age >= 45;
      if (X.forced) { X.list = []; X.free = false; X.stayFree = false; }
      X.note = X.forced ? '45歳。長い騎手人生に区切りをつける時が来た。' : '来年の所属を決める。フリーになると評価しだいで騎乗依頼が大きく変わる。';
    }
  }
  C.offers = X; C.screen = 'offers';
}

export function ridesEstimate(p, rep, free) { return Math.round(6 + p.eval * 0.25 + (free ? p.pop * 0.16 : rep * 0.12)); }

export function pickOffer(C, kind, v) {
  const p = C.p;
  if (kind === 'path') p.path = v;
  if (kind === 'stable') { const s = STABLES[v]; if (p.stage === 'school') { p.flags.debutY = p.year + 1; } p.stable = s.id; p.free = false; }
  if (kind === 'free') { p.free = true; p.stable = null; }
  if (kind === 'retire') { p.fate = { ty: 'retire', why: v, head: '引退' }; C.screen = 'retireNow'; return; }
  newYear(C);
}

function newYear(C) {
  const p = C.p;
  p.year++; p.age++; p.season++; p.month = KIND[p.kind].turns[0];
  if (p.kind === 'jockey' && p.stage === 'school' && p.age >= 18) { p.stage = 'pro'; p.eval = Math.max(p.eval, 40); p.log.unshift(`${p.year}年 騎手デビュー（${stableOf(p) ? stableOf(p).n : 'フリー'}）`); }
  if (p.kind === 'horse' && p.age === 2) p.log.unshift(`${p.year}年 トレーニングセンターに入厩`);
  if (p.kind === 'horse' && p.age === 1) p.log.unshift(`${p.year}年 育成牧場へ`);
  p.yearLog = [];
  C.yr = freshYear(p);
  C.screen = 'camp';
}

// ===== 引退 =====
export function scoreOf(p) {
  const o = Math.max(...Object.values(p.peakSt || p.st));
  if (p.kind === 'horse') return Math.round(ovrOf(p) * 3 + p.g1Wins * 60 + p.gradedWins * 20 + p.wins * 6 + p.earnings / 2000 + o);
  return Math.round(ovrOf(p) * 3 + p.g1Wins * 12 + p.gradedWins * 3 + p.wins * 0.05 + o);
}
export function gradeOf(sc) { return sc >= 800 ? 'SS' : sc >= 600 ? 'S' : sc >= 480 ? 'A' : sc >= 400 ? 'B' : sc >= 330 ? 'C' : sc >= 260 ? 'D' : sc >= 180 ? 'E' : sc >= 100 ? 'F' : 'G'; }

export function toCard(p) {
  const sc = scoreOf(p);
  const base = { kind: p.kind, name: p.name, s: { ...p.st }, skills: [...p.skills], growth: p.growth, record: [...p.record], wins: p.wins, gradedWins: p.gradedWins,
    g1Wins: p.g1Wins, titles: [...p.titles], awards: [...p.awards], earnings: Math.round(p.earnings), score: sc, rank: gradeOf(sc),
    retireReason: p.fate ? p.fate.why : '引退', died: p.fate && p.fate.ty === 'death', age: p.age, year: p.year };
  if (p.kind === 'horse') return { ...base, coat: p.coat, sire: p.sire, dam: p.dam, apt: { ...p.apt }, style: p.style, races: p.races.slice(-60) };
  return { ...base, silk: p.silk, races: p.rides, rides: p.rides, mockWins: p.mockWins, pref: p.pref };
}

// ===== オート用 =====
export function autoPickAct(C) {
  const p = C.p, acts = actsFor(p);
  const by = (id) => acts.find(a => a.id === id);
  if (p.kind === 'horse') {
    if (p.inj > 0 || p.sta < 35) return by('rest') || acts[0];
    const rs = racesInTurn(p).filter(r => !r.locked);
    if (rs.length && p.sta >= 55) return by('race');
    if (p.sta > 75) return by('hard') || by('dash') || by('hillY') || acts[0];
    return by('train') || by('graze') || by('break') || acts[0];
  }
  if (p.inj > 0 || p.sta < 35) return by('rest');
  if (p.sta > 75 && Math.random() < 0.5) return by('extra');
  if (p.stage === 'school' && Math.random() < 0.25) return by('mock');
  return by(p.stage === 'pro' ? 'ridep' : 'ride');
}
export function autoPickChoice(C) {
  const e = getEv(C.evq[C.evi]), c = evCtx(C.p);
  if (e.id === 'sp:surgery') return 0;
  let best = 0, bv = -1;
  e.ch.forEach((ch, i) => { const v = prOf(ch, c) + Math.random() * 0.25; if (v > bv) { bv = v; best = i; } });
  return best;
}
export function autoPickRace(C) {
  const p = C.p;
  const list = p.kind === 'horse' ? racesInTurn(p).filter(r => !r.locked) : bigRacesInTurn(p).filter(r => !r.locked);
  if (!list.length) return null;
  const o = ovrOf(p);
  const sc = (r) => (o - r.lv) - (p.kind === 'horse' ? ({ A: 0, B: 2, C: 5, D: 9, E: 14, F: 18, G: 22 }[r.surf === '芝' ? p.apt.turf : p.apt.dirt] || 0) : 0) + (r.g ? 4 : 0) + Math.random() * 3;
  const fit = list.filter(r => sc(r) > 2);
  return (fit.length ? fit : list).sort((a, b) => sc(b) - sc(a))[0];
}
export function oddsMark(p, r) {
  if (p.kind === 'jockey') { const S = stableOf(p); const hl = 42 + p.eval * 0.32 + (S ? S.rep : 45) * 0.12; const d = hl - r.lv; return d >= 6 ? ['◎', '有力馬', 'up'] : d >= -2 ? ['○', '互角', ''] : d >= -10 ? ['△', '伏兵', 'warn'] : ['×', '人気薄', 'down']; }
  const d = ovrOf(p) - r.lv - (p.kind === 'horse' ? ({ A: 0, B: 2, C: 5, D: 9, E: 14, F: 18, G: 22 }[r.surf === '芝' ? p.apt.turf : p.apt.dirt] || 0) : 0);
  return d >= 8 ? ['◎', '有利', 'up'] : d >= 0 ? ['○', '互角', ''] : d >= -8 ? ['△', '格上', 'warn'] : ['×', '厳しい', 'down'];
}
export { H_NAMES, J_NAMES };

// ===== レースの設定を作る =====
export function horseRaceCfg(p, race, jk) {
  const field = race.g === 'G1' ? 14 : race.g ? 12 : 10;
  const cond = condIdx(p);
  return {
    race, fieldSize: field,
    player: { name: p.name, jname: jk.name, h: { ...p.st }, j: { ...jk.s }, apt: race.surf === '芝' ? p.apt.turf : p.apt.dirt, cond, style: p.style,
      coat: p.coat, silk: jk.silk ?? 6, hsk: [...p.skills], jsk: [...(jk.skills || [])], tired: p.sta < 30 },
  };
}
export function jockeyRaceCfg(p, race) {
  const S = stableOf(p), rep = S ? S.rep : 45;
  let lv, field;
  if (race.mock) { lv = 36; field = 8; }
  else { lv = clamp(42 + p.eval * 0.32 + rep * 0.12 + rnd(-6, 6), 30, 95); field = race.g === 'G1' ? 14 : 12; }
  if (!race.horse) race.horse = race.mock ? '学校の馬' : randomHorseName();
  const style = pick(['逃げ', '先行', '先行', '差し', '差し', '追込']);
  const h = {};
  for (const k of H_KEYS) h[k] = clamp(lv + rnd(-6, 6), 10, 99);
  if (race.dist) h.sta = Math.max(h.sta, (race.dist * 1.1 - 1100) / 24 + rnd(-4, 8));
  return {
    race, fieldSize: field,
    player: { name: race.horse, jname: p.name, h, j: { ...p.st }, apt: 'A', cond: condIdx(p), style: p.pref && Math.random() < 0.5 ? p.pref : style,
      coat: ri(0, COAT.length - 1), silk: p.silk, jsk: [...p.skills], tired: p.sta < 30 },
  };
}
