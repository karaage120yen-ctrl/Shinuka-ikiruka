// ===== 賭け（馬券）のしくみ：実際のJRAの券種・枠番・払戻率にそろえる =====
import { APT_FACTOR, COND_SPEED, GRADED, SIRE, SILKS, COAT, clamp, NAME_A, NAME_B, HORSE_NAMES } from './data.js';
import { hashStr, simulateField, rollWeather } from './sim.js';

export const FRAME_COLORS = ['#ffffff', '#222222', '#e8332b', '#2a6bd8', '#f2d22e', '#2a9a4a', '#f08a24', '#f39ac0'];
export const FRAME_TEXT = ['#111', '#fff', '#fff', '#fff', '#111', '#fff', '#111', '#111'];
export const TYPES = [
  { id: 'tan', n: '単勝', k: 1, ord: true, rate: 0.8, d: '1着を当てる' },
  { id: 'fuku', n: '複勝', k: 1, ord: false, rate: 0.8, d: '3着までに入る馬を当てる' },
  { id: 'waku', n: '枠連', k: 2, ord: false, rate: 0.775, d: '1着と2着の枠番の組み合わせ', frame: true },
  { id: 'umaren', n: '馬連', k: 2, ord: false, rate: 0.775, d: '1着と2着の馬番の組み合わせ（順番は問わない）' },
  { id: 'wide', n: 'ワイド', k: 2, ord: false, rate: 0.775, d: '3着までに入る2頭の組み合わせ' },
  { id: 'umatan', n: '馬単', k: 2, ord: true, rate: 0.75, d: '1着と2着を着順どおりに当てる' },
  { id: 'trio', n: '3連複', k: 3, ord: false, rate: 0.75, d: '1〜3着の3頭の組み合わせ（順番は問わない）' },
  { id: 'trifecta', n: '3連単', k: 3, ord: true, rate: 0.725, d: '1〜3着を着順どおりに当てる' },
];
export const typeOf = (id) => TYPES.find(t => t.id === id);

// 乱数（日付で同じ出馬表になるように）
function rng(seed) { let x = (seed >>> 0) || 1; return () => { x ^= x << 13; x >>>= 0; x ^= x >> 17; x ^= x << 5; x >>>= 0; return x / 4294967296; }; }
const JOCKEYS = [['武田 翔', 88], ['ルメール J', 90], ['川村 拓也', 84], ['戸崎 大地', 82], ['坂井 颯太', 81], ['横山 蓮', 80], ['松岡 悠真', 78], ['岩本 海斗', 76], ['鮫島 陸', 74], ['池田 隼人', 72],
  ['福田 健太', 70], ['菅原 涼', 68], ['藤岡 一輝', 66], ['田辺 湊', 64], ['三浦 晴', 62], ['北島 大和', 60], ['佐藤 瑛太', 58], ['吉田 翼', 56], ['丹羽 光', 54], ['西村 樹', 52],
  ['永野 蒼', 50], ['小林 凛', 48], ['石田 大輔', 47], ['原 優斗', 46], ['今村 聖奈', 58], ['角田 和希', 55], ['古川 奈穂', 52], ['団野 大成', 60], ['斎藤 新', 57], ['亀田 温心', 50]];
const VENUES = { 1: ['中山', '京都'], 2: ['東京', '京都'], 3: ['中山', '阪神'], 4: ['中山', '阪神'], 5: ['東京', '京都'], 6: ['東京', '阪神'], 7: ['福島', '小倉'], 8: ['新潟', '札幌'], 9: ['中山', '阪神'], 10: ['東京', '京都'], 11: ['東京', '京都'], 12: ['中山', '阪神'] };
const OP_NAMES = ['ステークス', '特別', 'カップ', '賞'];
const OP_HEAD = ['紅葉', '晩秋', '師走', '初春', '春雷', '若葉', '青嵐', '夏至', '白秋', '銀杏', '霜月', '朱雀', '白鷺', '飛鳥', '大和', '武蔵野', '比叡', '六甲', '浜名湖', '桶狭間'];
const DAY = ['日', '月', '火', '水', '木', '金', '土'];

export function raceDay(weekOffset = 0) {
  const d = new Date();
  const dow = d.getDay();
  let add = dow === 6 || dow === 0 ? 0 : 6 - dow;
  d.setDate(d.getDate() + add + weekOffset * 7);
  return d;
}
export function dayLabel(d) { return `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日（${DAY[d.getDay()]}）`; }

const LV = { '新馬': 24, '未勝利': 27, '1勝クラス': 37, '2勝クラス': 47, '3勝クラス': 56, 'オープン': 62, G3: 64, G2: 70, G1: 79 };

// 出馬表を作る
export function makeCard(weekOffset = 0, room = '') {
  const d = raceDay(weekOffset);
  const m = d.getMonth() + 1, sun = d.getDay() === 0;
  const R = rng(hashStr(`${room}|${d.getFullYear()}-${m}-${d.getDate()}`) + 7);
  const wk = Math.floor((d.getDate() - 1) / 7);
  const graded = GRADED.filter(r => r.m === m);
  const g1 = graded.filter(r => r.g === 'G1'), gx = graded.filter(r => r.g !== 'G1');
  let main = null;
  if (sun && g1.length) main = g1[wk % g1.length];
  else if (gx.length) main = gx[(wk + (sun ? 1 : 0)) % gx.length];
  else if (g1.length) main = g1[wk % g1.length];
  const place = main ? main.place : VENUES[m][sun ? 1 : 0];
  const y2 = m >= 6;
  const lst = [
    { cls: '未勝利', age: y2 ? '2' : '3', name: `${y2 ? '2歳' : '3歳'}未勝利` },
    { cls: y2 ? '新馬' : '未勝利', age: y2 ? '2' : '3', name: y2 ? '2歳新馬' : '3歳未勝利' },
    { cls: '1勝クラス', age: m <= 5 ? '4+' : '3+', name: `${m <= 5 ? '4歳以上' : '3歳以上'}1勝クラス` },
    { cls: '2勝クラス', age: m <= 5 ? '4+' : '3+', name: `${m <= 5 ? '4歳以上' : '3歳以上'}2勝クラス` },
    { cls: '3勝クラス', age: '3+', name: `${OP_HEAD[Math.floor(R() * OP_HEAD.length)]}${OP_NAMES[Math.floor(R() * OP_NAMES.length)]}（3勝クラス）` },
  ];
  const races = lst.map((x, i) => {
    const dist = [1200, 1400, 1600, 1800, 2000, 2200, 2400][Math.floor(R() * (x.age === '2' ? 4 : 7))];
    const surf = R() < 0.55 ? '芝' : 'ダ';
    return { no: i + 1, name: x.name, cls: x.cls, g: null, age: x.age, dist, surf, place, lv: LV[x.cls], start: `${10 + i}:${['05', '35', '10', '40', '15'][i]}` };
  });
  if (main) races.push({ no: 6, name: main.name, cls: main.g, g: main.g, age: main.age, dist: main.dist, surf: main.surf, place, lv: LV[main.g] + (main.age === '2' ? -14 : main.age === '3' ? -5 : 0), start: '15:40' });
  else races.push({ no: 6, name: `${OP_HEAD[Math.floor(R() * OP_HEAD.length)]}ステークス`, cls: 'オープン', g: null, age: '3+', dist: 1800, surf: '芝', place, lv: LV['オープン'], start: '15:40' });
  const wx = rollWeather(m, R);
  for (const r of races) { r.horses = makeField(r, R); r.weather = wx.weather; r.going = wx.going; if (R() < 0.25) { const g2 = rollWeather(m, R); r.going = g2.going === '良' && wx.going !== '良' ? wx.going : wx.going; } }
  for (const r of races) priceRace(r);
  return { key: `${room || 'solo'}|${d.getFullYear()}-${m}-${d.getDate()}`, room, date: d.getTime(), label: dayLabel(d), place, races, week: weekOffset };
}

function makeField(r, R) {
  const N = r.g === 'G1' ? 16 : r.g ? [12, 14, 16][Math.floor(R() * 3)] : [8, 10, 12, 14, 16][Math.floor(R() * 5)];
  const out = [];
  const usedJ = new Set();
  for (let i = 0; i < N; i++) {
    const b = r.lv + (R() - 0.5) * 14;
    const s = {
      spd: clamp(b + (R() - 0.5) * 10, 5, 99), pow: clamp(b + (R() - 0.5) * 12, 5, 99), gut: clamp(b + (R() - 0.5) * 14, 5, 99), wis: clamp(b + (R() - 0.5) * 14, 5, 99),
      sta: clamp(Math.max(b + (R() - 0.5) * 20, (r.dist * 1.1 - 1100) / 24 + (R() - 0.5) * 24), 5, 99),
    };
    let ji; do { ji = Math.floor(R() * JOCKEYS.length); } while (usedJ.has(ji) && usedJ.size < JOCKEYS.length);
    usedJ.add(ji);
    const [jn, jl] = JOCKEYS[ji];
    const j = { tec: jl, whip: jl + (R() - 0.5) * 10, bal: jl + (R() - 0.5) * 10, fit: jl + (R() - 0.5) * 10, jud: jl + (R() - 0.5) * 10 };
    const age = r.age === '2' ? 2 : r.age === '3' ? 3 : (r.age === '4+' ? 4 : 3) + Math.floor(R() * 4);
    const sex = R() < 0.6 ? '牡' : R() < 0.85 ? '牝' : 'セ';
    const kin = age === 2 ? (sex === '牝' ? 54 : 55) : age === 3 && r.age === '3' ? (sex === '牝' ? 55 : 57) : (sex === '牝' ? 56 : 58);
    const wt = Math.round(430 + R() * 100), dw = Math.round((R() - 0.45) * 20 / 2) * 2;
    const cond = clamp(Math.round(2 + (R() - 0.5) * 2.6 - (dw <= -10 ? 1 : 0) + (dw >= 2 && dw <= 8 ? 0.4 : 0)), 0, 4);
    const apt = r.surf === '芝' ? (R() < 0.7 ? 'A' : R() < 0.7 ? 'B' : 'C') : (R() < 0.6 ? 'A' : R() < 0.7 ? 'B' : 'C');
    const style = ['逃げ', '先行', '先行', '差し', '差し', '追込'][Math.floor(R() * 6)];
    const prev = r.cls === '新馬' ? null : Math.max(1, Math.round(1 + R() * 12));
    out.push({
      num: i + 1, name: (() => { for (let t = 0; t < 20; t++) { let n = R() < 0.5 ? HORSE_NAMES[Math.floor(R() * HORSE_NAMES.length)] : NAME_A[Math.floor(R() * NAME_A.length)] + NAME_B[Math.floor(R() * NAME_B.length)]; if (n.length > 9) n = n.slice(0, 9); if (!out.some(o => o.name === n)) return n; } return 'ナナシ' + (i + 1); })(), sex, age, kin, wt, dw, jname: jn, jlv: jl, sire: SIRE[Math.floor(R() * SIRE.length)],
      h: s, j, apt, cond, style, prev, coat: Math.floor(R() * COAT.length), silk: SILKS[Math.floor(R() * SILKS.length)],
    });
  }
  // 斤量の差を少しだけ能力に反映
  for (const h of out) h.h.spd = clamp(h.h.spd - (h.kin - 56) * 0.6, 5, 99);
  // 枠番（JRAのルール：多い分は外の枠から2頭になる）
  const fr = frameMap(N);
  out.forEach((h, i) => { h.frame = fr[i]; });
  return out;
}

export function frameMap(N) {
  const per = Array(8).fill(Math.floor(N / 8));
  for (let k = 0; k < N % 8; k++) per[7 - k]++;
  if (N < 8) { const res = []; for (let i = 0; i < N; i++) res.push(i + 1); return res; }
  const res = [];
  per.forEach((c, f) => { for (let k = 0; k < c; k++) res.push(f + 1); });
  return res;
}

// 強さの目安（シミュレーションで合わせた式）
export let T = 0.1;
export function setT(v) { T = v; }
export function strength(x, dist) {
  const h = x.h, j = x.j;
  let top = (16.55 + 0.022 * h.spd) * (APT_FACTOR[x.apt] || 1) * COND_SPEED[x.cond ?? 2];
  const cap = 1100 + 24 * h.sta, need = dist * 1.13, r = cap / need;
  if (r < 1) top *= 1 - (1 - r) * 0.15;
  return top + h.pow * 0.001 + (j.bal + h.wis) * 0.001;
}

// オッズを作る
export function priceRace(r, pWin) {
  const N = r.horses.length;
  const R = rng(r.no * 9973 + N * 31 + Math.round(r.horses[0].h.spd * 1000) + hashStr(r.horses[0].name));
  const sv = r.horses.map(x => strength(x, r.dist) / T);
  const mx = Math.max(...sv);
  const p = sv.map(v => Math.exp(v - mx)); const z = p.reduce((a, b) => a + b, 0);
  let truep = p.map(v => v / z);
  // シミュレーションの結果があれば、それを中心にする
  if (pWin) { const K = 12, M = pWin.n; truep = truep.map((v, i) => (pWin.w[i] + v * K) / (M + K)); }
  // どんな馬にも少しは勝つ可能性がある（実際の競馬の大穴くらい）
  truep = truep.map(v => 0.95 * v + 0.05 / N);
  // ファンの人気（少し人気馬に偏る＋ゆらぎ）
  let q = truep.map(v => Math.pow(v, 0.97) * (0.9 + R() * 0.2));
  const zq = q.reduce((a, b) => a + b, 0); q = q.map(v => v / zq);
  r.q = q;
  const od = (rate, P) => P <= 0 ? 9999.9 : clamp(Math.floor(rate / P * 10) / 10, 1.0, 99999.9);
  r.odds = { tan: {}, fuku: {}, waku: {}, umaren: {}, wide: {}, umatan: {}, trio: {}, trifecta: {} };
  const place = Array(N).fill(0), pairTop3 = {}, trioP = {}, exa = {}, qn = {};
  for (let a = 0; a < N; a++) for (let b = 0; b < N; b++) {
    if (b === a) continue;
    const pab = q[a] * q[b] / (1 - q[a]);
    exa[`${a + 1}-${b + 1}`] = pab;
    const k2 = key2(a + 1, b + 1); qn[k2] = (qn[k2] || 0) + pab;
    for (let c = 0; c < N; c++) {
      if (c === a || c === b) continue;
      const pabc = pab * q[c] / (1 - q[a] - q[b]);
      r.odds.trifecta[`${a + 1}-${b + 1}-${c + 1}`] = pabc;
      const k3 = key3(a + 1, b + 1, c + 1); trioP[k3] = (trioP[k3] || 0) + pabc;
      place[a] += pabc; place[b] += pabc; place[c] += pabc;
      for (const [x, y] of [[a, b], [a, c], [b, c]]) { const kk = key2(x + 1, y + 1); pairTop3[kk] = (pairTop3[kk] || 0) + pabc; }
    }
  }
  // 確率→オッズ（JRAの払戻率）
  for (let a = 0; a < N; a++) { r.odds.tan[a + 1] = Math.min(999.9, od(0.8, q[a])); r.odds.fuku[a + 1] = Math.min(99.9, od(0.8, place[a])); }
  for (const k in qn) r.odds.umaren[k] = od(0.775, qn[k]);
  for (const k in pairTop3) r.odds.wide[k] = od(0.775, pairTop3[k]);
  for (const k in exa) r.odds.umatan[k] = od(0.75, exa[k]);
  for (const k in trioP) r.odds.trio[k] = od(0.75, trioP[k]);
  for (const k in r.odds.trifecta) r.odds.trifecta[k] = od(0.725, r.odds.trifecta[k]);
  // 枠連
  const wq = {};
  for (const k in qn) { const [a, b] = k.split('-').map(Number); const fa = r.horses[a - 1].frame, fb = r.horses[b - 1].frame; const kk = key2(fa, fb); wq[kk] = (wq[kk] || 0) + qn[k]; }
  for (const k in wq) r.odds.waku[k] = od(0.775, wq[k]);
  // 人気（単勝オッズ順）
  const ord = r.horses.map((h, i) => i).sort((a, b) => q[b] - q[a]);
  ord.forEach((i, rank) => { r.horses[i].pop = rank + 1; });
  // 新聞の印
  const est = r.horses.map((h, i) => ({ i, v: sv[i] + (R() - 0.5) * 1.2 })).sort((a, b) => b.v - a.v);
  const marks = ['◎', '○', '▲', '△', '△'];
  est.forEach((e, k) => { r.horses[e.i].mark = marks[k] || ''; });
  const ana = est.slice(6 + Math.floor(R() * 4))[0]; if (ana) r.horses[ana.i].mark = '☆';
}
export const key2 = (a, b) => a < b ? `${a}-${b}` : `${b}-${a}`;
export const key3 = (a, b, c) => [a, b, c].sort((x, y) => x - y).join('-');

// 買い目を展開する
export function combos(type, mode, sel, r) {
  const T = typeOf(type);
  const out = [];
  if (T.k === 1) return sel[0] ? sel[0].map(a => [a]) : [];
  if (mode === 'box') {
    const s = [...new Set(sel[0] || [])].sort((a, b) => a - b);
    if (T.k === 2) for (let i = 0; i < s.length; i++) for (let j = 0; j < s.length; j++) {
      if (i === j) continue; if (!T.ord && j < i) continue; out.push([s[i], s[j]]);
    }
    if (T.k === 3) for (let i = 0; i < s.length; i++) for (let j = 0; j < s.length; j++) for (let k = 0; k < s.length; k++) {
      if (i === j || j === k || i === k) continue; if (!T.ord && !(i < j && j < k)) continue; out.push([s[i], s[j], s[k]]);
    }
  } else {
    // 通常（各着・各頭を1頭ずつ選ぶ）
    const s = sel.map(x => (x || [])[0]);
    if (s.slice(0, T.k).some(x => x == null)) return [];
    const c = s.slice(0, T.k);
    if (new Set(c).size < c.length && !(T.frame && c.length === 2)) return [];
    if (T.frame && c[0] === c[1]) { const cnt = r.horses.filter(h => h.frame === c[0]).length; if (cnt < 2) return []; }
    out.push(T.ord ? c : [...c].sort((a, b) => a - b));
  }
  return out;
}
export function comboKey(type, c) {
  const T = typeOf(type);
  if (T.k === 1) return String(c[0]);
  if (T.k === 2) return T.ord ? `${c[0]}-${c[1]}` : key2(c[0], c[1]);
  return T.ord ? c.join('-') : key3(...c);
}
export function oddsOf(r, type, c) { return r.odds[type][comboKey(type, c)] ?? 0; }

// 当たり判定
export function winningKeys(r, order) {
  const [a, b, c] = order;
  const fr = (n) => r.horses[n - 1].frame;
  return {
    tan: [String(a)], fuku: [a, b, c].map(String), waku: [key2(fr(a), fr(b))], umaren: [key2(a, b)],
    wide: [key2(a, b), key2(a, c), key2(b, c)], umatan: [`${a}-${b}`], trio: [key3(a, b, c)], trifecta: [`${a}-${b}-${c}`],
  };
}
export function payout100(odds) { return Math.floor(odds * 100 / 10) * 10; }
export function popRank(r, type, key) {
  const vals = Object.entries(r.odds[type]).sort((x, y) => x[1] - y[1]);
  return vals.findIndex(([k]) => k === key) + 1;
}
export function settle(r, order, tickets) {
  const W = winningKeys(r, order);
  let ret = 0;
  for (const t of tickets) {
    t.hits = []; t.ret = 0;
    for (const c of t.combos) {
      const k = comboKey(t.type, c);
      if (W[t.type].includes(k)) { const o = oddsOf(r, t.type, c); const pay = payout100(o) * t.amt / 100; t.hits.push({ k, o, pay }); t.ret += pay; }
    }
    ret += t.ret;
  }
  return { W, ret };
}

// レース結果の種（同じルーム・同じ日・同じレースなら全員同じ結果）
export function raceSeed(card, r) { return hashStr(`${card.key}|R${r.no}|${r.name}`); }
// 出走馬をレース用の形にする
export function specsOf(r) {
  return r.horses.map(x => ({ name: x.name, jname: x.jname, h: { ...x.h }, j: { ...x.j }, apt: x.apt, cond: x.cond, style: x.style, coat: x.coat, silk: x.silk, cap: FRAME_COLORS[x.frame - 1] }));
}

// たくさん走らせて勝つ確率を調べる（少しずつ実行して画面を止めない）
const PENDING = new Map();
export function mcPrice(card, r, n = 40, onProgress) {
  const pk = card.key + '#' + r.no;
  if (r.priced) return Promise.resolve();
  if (PENDING.has(pk)) return PENDING.get(pk);
  const pr = new Promise((resolve) => {
    const w = Array(r.horses.length).fill(0); let i = 0;
    const base = raceSeed(card, r) ^ 0x5bd1e995;
    const specs = specsOf(r);
    const tick = () => {
      const t0 = performance.now();
      while (i < n && performance.now() - t0 < 30) { const res = simulateField(specs, r, (base + i * 7919) >>> 0, 1 / 20); w[res[0].num - 1]++; i++; }
      onProgress && onProgress(i / n);
      if (i < n) setTimeout(tick, 0);
      else { priceRace(r, { w, n }); r.priced = true; PENDING.delete(pk); resolve(); }
    };
    tick();
  });
  PENDING.set(pk, pr); return pr;
}

export function cardKey(weekOffset = 0, room = '') { const d = raceDay(weekOffset); return `${room || 'solo'}|${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`; }

// ===== 自分の馬が出る特別レース（強さの近い相手をそろえて、いい勝負にする） =====
export function makeMyRace(card, h, jk) {
  const R = rng(hashStr(`${card.key}|my|${h.name}|${(card.myN || 0)}`));
  const surf = APT_ORDER(h.apt.turf) >= APT_ORDER(h.apt.dirt) ? '芝' : 'ダ';
  const dist = h.s.sta >= 82 ? 2400 : h.s.sta >= 70 ? 2000 : h.s.sta >= 58 ? 1800 : 1600;
  const myEff = strength({ h: { ...h.s }, j: { ...jk.s }, apt: surf === '芝' ? h.apt.turf : h.apt.dirt, cond: 2 }, dist);
  const base = (h.s.spd + h.s.pow + h.s.gut + h.s.wis) / 4;
  const r = { no: 7, name: `★${h.name}特別`, cls: 'オープン', g: null, age: '3+', dist, surf, place: card.place, lv: base, start: '16:25', mine: h.name, weather: card.races[0].weather, going: card.races[0].going };
  const field = makeField({ ...r, lv: base }, R).slice(0, 12);
  // 相手の強さを、自分の馬のまわりに散らす（上にも下にも）
  const offs = [3.5, 2.5, 1.5, 1, 0.5, 0, -0.5, -1.5, -2.5, -3.5, -5];
  field.slice(1).forEach((x, i) => { const o = offs[i] + (R() - 0.5) * 1.2; for (const k of ['spd', 'pow', 'gut', 'wis']) x.h[k] = clamp(h.s[k] + o + (R() - 0.5) * 6, 5, 105); x.h.sta = clamp(Math.max(h.s.sta + o + (R() - 0.5) * 8, (dist * 1.1 - 1100) / 24), 5, 105); x.apt = 'A'; const jl = (jk.s.tec + jk.s.jud) / 2 + (R() - 0.5) * 12; x.j = { tec: jl, whip: jl + (R() - 0.5) * 8, bal: jl + (R() - 0.5) * 8, fit: jl + (R() - 0.5) * 8, jud: jl + (R() - 0.5) * 8 }; x.jlv = Math.round(jl); });
  const me = field[0];
  Object.assign(me, { name: h.name, h: { ...h.s }, j: { ...jk.s }, jname: jk.name, jlv: Math.round((jk.s.tec + jk.s.jud) / 2), apt: surf === '芝' ? h.apt.turf : h.apt.dirt, cond: 2, style: h.style, coat: h.coat, mine: true, sex: h.sex || '牡', age: Math.min(7, h.age || 4), prev: null });
  // 枠をまぜる（自分の馬がいつも1番にならないように）
  const ord = field.map((x, i) => [R(), i]).sort((a, b) => a[0] - b[0]).map(x => field[x[1]]);
  ord.forEach((x, i) => { x.num = i + 1; });
  const fr = frameMap(ord.length); ord.forEach((x, i) => { x.frame = fr[i]; });
  r.horses = ord; priceRace(r); r.myEff = myEff;
  card.myN = (card.myN || 0) + 1;
  card.races = card.races.filter(x => !x.mine || card.results[x.no]); r.no = 7 + card.races.filter(x => x.mine).length; card.races.push(r);
  return r;
}
const APT_ORDER = (a) => 'GFEDCBA'.indexOf(a);
