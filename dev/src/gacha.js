// ===== ガチャ（サポートキャラ）。性能はここで決まっている。名前・絵はあとで入れる =====
// 名前を付けるときは、下の NAMES に id: '名前' を書き足すだけでOK（例: 'ssr-1': '〇〇調教師'）。
// 種類 kind: 'horse'＝馬の育成で効く / 'jockey'＝騎手の育成で効く / 'both'＝どちらでも効く
// 効果 fx:
//   train: { 能力: 割合 }  … その能力を練習したときの伸びが増える（0.2 = +20%）
//   start: { 能力: 数 }    … 育成を始めたときに能力が上がる
//   inj:   割合            … ケガのしやすさが下がる（0.15 = -15%）
//   ev:    割合            … 出来事の成功率が上がる（0.05 = +5%）
//   money: 割合            … 賞金・収入が増える
//   cond:  数              … 毎月の調子が上がる
//   sta:   数              … 毎月の体力の回復が増える
// 重ね（同じキャラが出る）で凸が上がり、効果が 1凸ごとに +25%（最大4凸で2倍）
export const NAMES = {
  // 'ssr-1': '',
};

const H = ['spd', 'sta', 'pow', 'gut', 'wis'], J = ['tec', 'whip', 'bal', 'fit', 'jud'];
const ROLE = { horse: ['調教師', '厩務員', '調教助手', '獣医', '装蹄師', '牧場長'], jockey: ['先輩騎手', 'トレーナー', 'エージェント', '騎手学校の教官', '栄養士'], both: ['馬主', '記者', '実況アナ', 'ファン代表'] };

function mk(rar, n, kind, role, fx) { return { id: `${rar.toLowerCase()}-${n}`, rarity: rar, kind, role, fx }; }
const P = [];
// SSR：とても強い。2つの効果を持つ
P.push(mk('SSR', 1, 'horse', '調教師', { train: { spd: 0.3 }, start: { spd: 4 } }));
P.push(mk('SSR', 2, 'horse', '牧場長', { train: { sta: 0.3 }, sta: 2 }));
P.push(mk('SSR', 3, 'horse', '獣医', { inj: 0.3, train: { pow: 0.2 } }));
P.push(mk('SSR', 4, 'jockey', '先輩騎手', { train: { tec: 0.3 }, start: { jud: 4 } }));
P.push(mk('SSR', 5, 'jockey', 'トレーナー', { train: { fit: 0.3 }, inj: 0.15 }));
P.push(mk('SSR', 6, 'both', '馬主', { money: 0.25, ev: 0.06 }));
// SR：1〜2つの効果
const SRX = [
  ['horse', '厩務員', { train: { gut: 0.2 }, cond: 1 }], ['horse', '調教助手', { train: { wis: 0.2 } }], ['horse', '装蹄師', { inj: 0.18 }],
  ['horse', '調教師', { train: { spd: 0.18 } }], ['horse', '牧場長', { start: { sta: 4, pow: 3 } }], ['horse', '厩務員', { sta: 2, cond: 0.5 }],
  ['jockey', 'エージェント', { money: 0.15, train: { jud: 0.12 } }], ['jockey', '騎手学校の教官', { train: { whip: 0.2 } }], ['jockey', '栄養士', { sta: 2, inj: 0.1 }],
  ['jockey', '先輩騎手', { train: { bal: 0.2 } }], ['both', '記者', { ev: 0.05 }], ['both', '実況アナ', { cond: 1, ev: 0.02 }],
];
SRX.forEach(([k, r, fx], i) => P.push(mk('SR', i + 1, k, r, fx)));
// R：小さな効果1つ
const RX = [];
H.forEach(s => RX.push(['horse', '調教助手', { train: { [s]: 0.1 } }]));
J.forEach(s => RX.push(['jockey', 'トレーナー', { train: { [s]: 0.1 } }]));
RX.push(['horse', '獣医', { inj: 0.08 }], ['jockey', '栄養士', { inj: 0.08 }], ['both', 'ファン代表', { cond: 0.5 }], ['both', '記者', { ev: 0.02 }], ['horse', '牧場長', { start: { gut: 3 } }], ['jockey', 'エージェント', { money: 0.06 }], ['both', '馬主', { money: 0.05 }], ['horse', '厩務員', { sta: 1 }]);
RX.forEach(([k, r, fx], i) => P.push(mk('R', i + 1, k, r, fx)));

export const GACHA_POOL = P;
export const RATES = { SSR: 0.03, SR: 0.18, R: 0.79 };
export const COST_1 = 10, COST_10 = 100, PITY = 100;
export const charName = (c) => NAMES[c.id] || '';
export const charLabel = (c) => NAMES[c.id] || `${c.role} No.${c.id.split('-')[1]}`;
export const cardName = (c) => NAMES[c.id] || `No.${c.id.split('-')[1]}`;
export const KIND_N = { horse: '馬の育成', jockey: '騎手の育成', both: '馬・騎手どちらも' };
const SN = { spd: 'スピード', sta: 'スタミナ', pow: 'パワー', gut: '根性', wis: '賢さ', tec: '技術', whip: 'ムチ', bal: 'バランス', fit: '持久力', jud: '判断力' };

export function lvOf(owned, id) { return Math.min(4, Math.max(0, (owned[id] || 0) - 1)); }
export const mult = (lv) => 1 + lv * 0.25;
export function fxText(fx, lv = 0) {
  const m = mult(lv), out = [];
  const pc = (x) => `${Math.round(x * m * 100)}%`;
  for (const [k, v] of Object.entries(fx.train || {})) out.push(`${SN[k]}の練習 +${pc(v)}`);
  for (const [k, v] of Object.entries(fx.start || {})) out.push(`開始時 ${SN[k]} +${Math.round(v * m)}`);
  if (fx.inj) out.push(`ケガ -${pc(fx.inj)}`);
  if (fx.ev) out.push(`出来事の成功 +${pc(fx.ev)}`);
  if (fx.money) out.push(`収入 +${pc(fx.money)}`);
  if (fx.cond) out.push(`毎月の調子 +${Math.round(fx.cond * m * 10) / 10}`);
  if (fx.sta) out.push(`毎月の体力回復 +${Math.round(fx.sta * m * 10) / 10}`);
  return out;
}

function rollRarity(minSR) {
  const x = Math.random();
  if (x < RATES.SSR) return 'SSR';
  if (x < RATES.SSR + RATES.SR || minSR) return 'SR';
  return 'R';
}
// 100回引くとSSRが確定（天井）
export function pull(count, state) {
  const out = [];
  for (let i = 0; i < count; i++) {
    state.pity = (state.pity || 0) + 1;
    let rar = rollRarity(count === 10 && i === 9);
    if (state.pity >= PITY) rar = 'SSR';
    if (rar === 'SSR') state.pity = 0;
    const pool = GACHA_POOL.filter(c => c.rarity === rar);
    out.push(pool[Math.floor(Math.random() * pool.length)]);
  }
  return out;
}

// 編成（各3枠）の効果をまとめる
export function deckFx(kind, deck, ownedList) {
  const owned = {}; for (const id of ownedList || []) owned[id] = (owned[id] || 0) + 1;
  const out = { train: {}, start: {}, inj: 0, ev: 0, money: 0, cond: 0, sta: 0, ids: [] };
  for (const id of deck || []) {
    const c = GACHA_POOL.find(x => x.id === id); if (!c || !owned[id]) continue;
    if (c.kind !== 'both' && c.kind !== kind) continue;
    const m = mult(lvOf(owned, id)); out.ids.push(id);
    for (const [k, v] of Object.entries(c.fx.train || {})) out.train[k] = (out.train[k] || 0) + v * m;
    for (const [k, v] of Object.entries(c.fx.start || {})) out.start[k] = (out.start[k] || 0) + v * m;
    for (const k of ['inj', 'ev', 'money', 'cond', 'sta']) out[k] += (c.fx[k] || 0) * m;
  }
  out.inj = Math.min(0.6, out.inj); out.ev = Math.min(0.15, out.ev);
  return out;
}
