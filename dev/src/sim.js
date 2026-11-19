// ===== レースの物理シミュレーション（描画とは別） =====
import { APT_FACTOR, COND_SPEED, clamp, lerp, randomHorseName, randomJockeyName, SILKS, COAT } from './data.js';

// 乱数（ルームで同じ結果にするため、種から作れるようにする）
let SR = Math.random;
export function setSimSeed(seed) {
  if (seed == null) { SR = Math.random; return; }
  let x = (seed >>> 0) || 1;
  SR = () => { x ^= x << 13; x >>>= 0; x ^= x >> 17; x ^= x << 5; x >>>= 0; return x / 4294967296; };
}
export function hashStr(s) { let h = 2166136261; for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); } return h >>> 0; }
const rnd = (a, b) => a + SR() * (b - a);
const pick = (arr) => arr[Math.floor(SR() * arr.length)];

// ===== 競馬場（直線の長さ・コーナーの大きさ・回り・坂） =====
// hills: [ゴールまでの距離（始まり）, ゴールまでの距離（終わり）, 高さの変化m]
export const VENUES = {
  東京: { Ls: 525, R: 170, dir: 1, stand: 'big', hills: [[480, 320, 2.0], [1450, 1250, -2.0]] },
  中山: { Ls: 310, R: 135, dir: -1, stand: 'big', hills: [[180, 70, 2.2], [1000, 720, -2.2]] },
  京都: { Ls: 400, R: 150, dir: -1, stand: 'big', hills: [[1050, 850, 4.3], [850, 600, -4.3]] },
  阪神: { Ls: 470, R: 150, dir: -1, stand: 'big', hills: [[200, 80, 1.8], [950, 720, -1.8]] },
  中京: { Ls: 410, R: 150, dir: 1, stand: 'big', hills: [[380, 240, 2.0], [1150, 900, -2.0]] },
  新潟: { Ls: 660, R: 150, dir: 1, stand: 'mid', hills: [] },
  札幌: { Ls: 270, R: 125, dir: -1, stand: 'mid', hills: [] },
  函館: { Ls: 262, R: 125, dir: -1, stand: 'mid', hills: [[150, 60, 1.0], [700, 500, -1.0]] },
  福島: { Ls: 295, R: 125, dir: -1, stand: 'mid', hills: [[200, 100, 1.2], [800, 600, -1.2]] },
  小倉: { Ls: 293, R: 125, dir: -1, stand: 'mid', hills: [[250, 120, 1.0], [900, 650, -1.0]] },
  学校: { Ls: 300, R: 125, dir: -1, stand: 'none', hills: [] },
  ロンシャン: { Ls: 530, R: 215, dir: -1, stand: 'paris', hills: [[1900, 1500, 6], [1300, 800, -6]], abroad: 'フランス' },
  メイダン: { Ls: 450, R: 190, dir: 1, stand: 'night', hills: [], abroad: 'ドバイ' },
  リヤド: { Ls: 450, R: 175, dir: 1, stand: 'night', hills: [], abroad: 'サウジアラビア' },
  シャティン: { Ls: 430, R: 160, dir: -1, stand: 'city', hills: [], abroad: '香港' },
  アスコット: { Ls: 500, R: 190, dir: -1, stand: 'big', hills: [[600, 100, 4], [1750, 1300, -4]], abroad: 'イギリス' },
};
export const TRACK = { width: 26 };
let Ls, R, P, PR, HILL = [];
export function setVenue(name) {
  const V = VENUES[name] || VENUES['東京'];
  TRACK.name = VENUES[name] ? name : '東京';
  TRACK.Ls = Ls = V.Ls; TRACK.R = R = V.R; TRACK.P = P = 2 * Ls + 2 * Math.PI * R; PR = Math.PI * R;
  TRACK.finishU = Ls * 0.8; TRACK.dir = V.dir; TRACK.stand = V.stand; TRACK.abroad = V.abroad || null;
  HILL = [];
  for (const [a, b, dh] of V.hills) {
    let u0 = ((TRACK.finishU - a) % P + P) % P, u1 = ((TRACK.finishU - b) % P + P) % P;
    if (u1 < u0) { const L = P - u0 + u1; HILL.push([u0, P, dh * (P - u0) / L]); HILL.push([0, u1, dh * u1 / L]); }
    else HILL.push([u0, u1, dh]);
  }
  // 坂をつなげて一周で元の高さに戻る（最も低い所を0にする）
  let mn = 0; for (let u = 0; u < P; u += 10) mn = Math.min(mn, elevRaw(u));
  TRACK.base = -mn;
}
function elevRaw(u) {
  let e = 0;
  for (const [a, b, dh] of HILL) { const t = u <= a ? 0 : u >= b ? 1 : (u - a) / (b - a); e += dh * t * t * (3 - 2 * t); }
  return e;
}
export function elev(u) { u = ((u % P) + P) % P; return elevRaw(u) + (TRACK.base || 0); }
export function grade(u) { return (elev(u + 2) - elev(u - 2)) / 4; }
setVenue('東京');

// 内ラチ上の位置uと、内ラチからの距離d → ワールド座標
export function trackPos(u, d, out = {}) {
  u = ((u % P) + P) % P;
  let x, z, hx, hz, nx, nz, curve = false;
  if (u < Ls) { x = -Ls / 2 + u; z = R; hx = 1; hz = 0; nx = 0; nz = 1; }
  else if (u < Ls + PR) {
    const th = (u - Ls) / R; curve = true;
    nx = Math.sin(th); nz = Math.cos(th);
    x = Ls / 2 + R * nx; z = R * nz; hx = Math.cos(th); hz = -Math.sin(th);
  } else if (u < 2 * Ls + PR) { x = Ls / 2 - (u - Ls - PR); z = -R; hx = -1; hz = 0; nx = 0; nz = -1; }
  else {
    const th = (u - 2 * Ls - PR) / R; curve = true;
    nx = -Math.sin(th); nz = -Math.cos(th);
    x = -Ls / 2 + R * nx; z = R * nz; hx = -Math.cos(th); hz = Math.sin(th);
  }
  out.x = x + nx * d; out.z = z + nz * d; out.hx = hx; out.hz = hz; out.nx = nx; out.nz = nz; out.curve = curve;
  out.y = HILL.length ? elev(u) : 0;
  return out;
}
export function onCurve(u) { u = ((u % P) + P) % P; return (u >= Ls && u < Ls + PR) || u >= 2 * Ls + PR; }

// ===== 天気と馬場 =====
export const WEATHERS = ['晴', '曇', '小雨', '雨', '雪'];
export function rollWeather(month, rnd01 = Math.random) {
  const x = rnd01();
  const snow = (month === 1 || month === 2) ? 0.06 : 0;
  const rain = [6, 7, 9].includes(month) ? 0.3 : 0.18;
  const w = x < snow ? '雪' : x < snow + rain * 0.5 ? '雨' : x < snow + rain ? '小雨' : x < snow + rain + 0.25 ? '曇' : '晴';
  const y = rnd01();
  const going = w === '雨' ? (y < 0.5 ? '不良' : '重') : w === '小雨' || w === '雪' ? (y < 0.6 ? '稍重' : '重') : w === '曇' ? (y < 0.15 ? '稍重' : '良') : (y < 0.06 ? '稍重' : '良');
  return { weather: w, going };
}
// 馬場によるスピードと体力の変化（パワーがある馬ほど重い馬場に強い）
export function goingFx(surf, going, pow) {
  const i = ['良', '稍重', '重', '不良'].indexOf(going); if (i <= 0) return [1, 1];
  const resist = 1 - (pow - 50) / 160;
  if (surf === 'ダ') return [1 + [0, 0.004, 0.008, 0.01][i], 1 + [0, 0.01, 0.02, 0.035][i] * resist];
  return [1 - [0, 0.008, 0.02, 0.035][i] * resist, 1 + [0, 0.03, 0.06, 0.1][i] * resist];
}

const STYLE_CRUISE = { '逃げ': 0.927, '先行': 0.913, '差し': 0.9, '追込': 0.889 };
const STYLE_SPURT = { '逃げ': 520, '先行': 620, '差し': 720, '追込': 780 };
const STYLE_LANE = { '逃げ': 1.0, '先行': 1.6, '差し': 3.2, '追込': 4.6 };
const VREF = 16.5;

// 馬・騎手の能力から走りのパラメータを作る
export function makeRacer(spec) {
  const h = spec.h, j = spec.j;
  const apt = APT_FACTOR[spec.apt] ?? 1;
  const cf = COND_SPEED[spec.cond ?? 2];
  const hs = spec.hsk || [], js = spec.jsk || [];
  // その日の出来（ゆらぎ）。強い馬でも負けることがある
  const form = 1 + (SR() + SR() + SR() - 1.5) * 0.016;
  const top = (16.55 + 0.022 * h.spd) * apt * cf * (spec.tired ? 0.985 : 1) * form;
  const cap = (1100 + 24 * h.sta) * (hs.includes('stayer') ? 1.06 : 1) * (1 + (SR() - 0.5) * 0.08);
  const R = {
    ...spec,
    top, cap, energy: cap, god: hs.includes('umagami') ? 1 : 0, godT: 0, slip: 0, duel: 0,
    accel: 0.42 + 0.008 * h.pow,
    startAccel: 3.0 + 0.022 * h.pow,
    eff: (1.06 - 0.0012 * h.wis) * (1.08 - 0.0016 * j.bal),
    whipDv: 0.4 + 0.0055 * j.whip,
    whipCd: Math.max(0.35, 0.7 - 0.0035 * j.fit),
    whipDrain: 1.38 - 0.0018 * j.fit,
    latSpeed: spec.isPlayer ? 1.25 + 0.016 * j.tec : 0.85 + 0.011 * j.tec,
    cruise: STYLE_CRUISE[spec.style] ?? 0.905,
    spurtDist: (STYLE_SPURT[spec.style] ?? 650) * rnd(0.9, 1.12) * (1.15 - j.jud / 400),
    laneWant: STYLE_LANE[spec.style] ?? 2,
    u: 0, p: 0, d: 0, v: 0, whipT: 0, whipCool: 0, whips: 0, finished: false, finishTime: 0,
    gateDelay: rnd(0.02, 0.38) * (1.25 - (h.wis + j.jud) / 260),
    blocked: false, stride: SR() * 10, aiTimer: SR() * 0.3, aiWhipT: 0, bump: 0,
  };
  // 特殊能力
  if (hs.includes('nige')) R.cruise += 0.006;
  if (hs.includes('smart')) R.eff *= 0.97;
  if (js.includes('eco')) R.eff *= 0.96;
  if (js.includes('whipm')) R.whipDv *= 1.15;
  if (js.includes('meishu')) R.latSpeed *= 1.25;
  if (js.includes('start')) R.gateDelay *= 0.5;
  R.sue = hs.includes('sue') ? 1.01 : 1;
  R.konjo = hs.includes('konjo') ? 2 : 1;
  return R;
}

// 対戦相手を作る（いい勝負になるように、プレイヤーの強さに寄せる）
export function makeOpponents(race, playerSpec, n, opts = {}) {
  const ph = playerSpec.h;
  const pEff = (ph.spd * 1.3 + ph.pow * 0.9 + ph.gut * 0.8 + ph.wis * 0.6 + Math.min(ph.sta, 20 + race.dist / 40) * 1.0) / 4.6;
  const base = lerp(race.lv ?? 40, pEff, opts.blend ?? 0.4);
  const staNeed = (race.dist * 1.13 - 1100) / 24;
  const list = [];
  const styles = ['逃げ', '先行', '先行', '先行', '差し', '差し', '差し', '追込', '追込'];
  for (let i = 0; i < n; i++) {
    const strong = i < 3 ? rnd(0, 5) : rnd(-7, 2);
    const b = base + strong;
    const h = {
      spd: clamp(b + rnd(-4, 4), 5, 100), pow: clamp(b + rnd(-6, 5), 5, 100), gut: clamp(b + rnd(-8, 6), 5, 100),
      wis: clamp(b + rnd(-8, 6), 5, 100), sta: clamp(Math.max(b + rnd(-10, 6), staNeed + rnd(-2, 12)), 5, 105),
    };
    const jl = clamp(b * 0.8 + rnd(-8, 12), 20, 95);
    const j = { tec: jl, whip: jl + rnd(-8, 8), bal: jl + rnd(-8, 8), fit: jl + rnd(-8, 8), jud: jl + rnd(-8, 8) };
    list.push({
      name: randomHorseName(), jname: randomJockeyName(), h, j, apt: pick(['A', 'A', 'A', 'B', 'B']), cond: pick([1, 2, 2, 2, 3, 3]),
      style: pick(styles), coat: Math.floor(SR() * COAT.length), silk: SILKS[(i * 5 + 3) % SILKS.length],
    });
  }
  return list;
}

export function createRace(cfg) {
  // cfg: { dist, surf, specs:[...], playerIndex }
  const u0 = TRACK.finishU - cfg.dist;
  const racers = cfg.specs.map((s, i) => makeRacer(s));
  // ゲート番号をランダムに
  const gates = cfg.fixedGates ? racers.map((_, i) => i) : racers.map((_, i) => i).map(i => [SR(), i]).sort((a, b) => a[0] - b[0]).map(x => x[1]);
  racers.forEach((r, i) => { r.gate = gates[i] + 1; r.u = u0; r.d = 1.1 + gates[i] * 1.25; r.num = gates[i] + 1; });
  const going = cfg.going || '良';
  for (const r of racers) { const [sf, ef] = goingFx(cfg.surf, going, r.h.pow); r.top *= sf; r.eff *= ef; }
  return { dist: cfg.dist, surf: cfg.surf, going, weather: cfg.weather || '晴', u0, racers, t: 0, started: false, countdown: 3.2, finishedCount: 0, order: [], player: racers.find(r => r.isPlayer) || null, events: [], noBand: !!cfg.noBand };
}

function sustainSpeed(r, remaining, whipping) {
  const m = r.eff * (whipping ? r.whipDrain : 1);
  if (remaining <= 1) return r.top * 1.1;
  return VREF * Math.pow(Math.max(0, r.energy) / (remaining * m), 0.25);
}

// 1ステップ進める
export function stepRace(race, dt, input) {
  if (race.countdown > 0) { race.countdown -= dt; if (race.countdown <= 0) { race.started = true; race.events.push({ type: 'start' }); } return; }
  race.t += dt;
  const rs = race.racers;
  const pl = race.player;
  // 順位
  const key = (r) => (r.fallen ? -1e7 + r.p : r.finished ? 1e6 - r.finishTime * 100 : r.p);
  const sorted = [...rs].sort((a, b) => key(b) - key(a));
  sorted.forEach((r, i) => { r.rank = i + 1; });
  const leaderP = sorted[0].p;

  for (const r of rs) {
    const rem = race.dist - r.p;
    if (race.t < r.gateDelay) { r.v = 0; continue; }
    // ---- 目標速度 ----
    let target;
    const ratio = r.energy / r.cap;
    let whipping = r.whipT > 0;
    if (r.finished) target = 11;
    else if (r.isPlayer && !r.ai) {
      target = r.top * r.cruise;
      // 直線では馬が自分から伸びる（体力に合わせて）
      if (rem < r.spurtDist * 0.9) target = clamp(sustainSpeed(r, rem, false), r.top * 0.86, r.top);
      if (input && input.whip && r.whipCool <= 0) { doWhip(r, race); whipping = true; }
      if (input && input.god && r.god === 1 && race.started && !r.finished) { r.god = 2; r.godT = 2; race.events.push({ type: 'god', r }); }
    } else {
      // CPUの作戦
      target = r.top * r.cruise;
      if (r.style === '逃げ' && r.rank > 1 && race.t < 25 && ratio > 0.7) target += 0.25;
      if (rem < r.spurtDist) {
        const wantWhip = rem < 460 && ratio > 0.04;
        const vs = sustainSpeed(r, rem, wantWhip);
        target = Math.min(r.top * (wantWhip ? 1 : 1.0) + (wantWhip ? r.whipDv : 0), vs);
        target = Math.max(target, r.top * 0.86);
        r.aiWhipT -= dt;
        if (wantWhip && r.aiWhipT <= 0 && vs > r.top * 0.97) { doWhip(r, race); r.aiWhipT = rnd(0.45, 0.9); whipping = true; }
      }
      // 接戦になるよう少しだけ調整
      if (pl && !race.noBand && !pl.finished && rem < 900 && !r.finished) {
        const gap = r.p - pl.p;
        if (gap > 3) target -= 0.16 * Math.min(1, (gap - 3) / 8);
        else if (gap < -4 && gap > -40) target += 0.06;
      }
    }
    if (whipping && r.whipT > 0 && r.energy > 0) target += (r.isPlayer && !r.ai ? 1.15 : 1) * r.whipDv + (rem < 400 ? r.h.gut * 0.002 : 0);
    // 競り合い（根性）
    if (rem < 420 && !r.finished) {
      for (const o of rs) if (o !== r && Math.abs(o.p - r.p) < 1.6 && Math.abs(o.d - r.d) < 2.6) { target += 0.12 * r.konjo * r.h.gut / 100; break; }
    }
    // スタミナ切れ
    // スタミナ切れ：はっきりバテる。切れている時間が長いほど、どんどん遅くなる（根性で少しだけこらえる）
    if (r.energy <= 0 && !r.finished) {
      r.emptyT = (r.emptyT || 0) + dt;
      const floor = 0.74 + 0.0006 * r.h.gut - Math.min(0.1, r.emptyT * 0.012);
      target = Math.min(target, r.top * floor);
      whipping = false;
    } else if (ratio < 0.15) target *= 0.9 + ratio / 0.15 * 0.08 + 0.0003 * r.h.gut;
    if (rem < r.spurtDist) target *= r.sue;
    // つまずき・落馬（カラ馬はゆっくり走り続ける）
    if (r.stumbleT > 0) { r.stumbleT -= dt; target = Math.min(target, r.top * 0.8); }
    if (r.fallen) { target = Math.min(r.top * 0.82, r.top * 0.82); whipping = false; }
    // 坂（上りは遅くなる。パワーがあると楽）
    if (HILL.length) { const g = grade(r.u); target *= g > 0 ? 1 - g * 3 * (1 - r.h.pow / 200) : 1 - g * 1.2; r.slope = g; } else r.slope = 0;
    target = Math.min(target, r.top * 1.07);
    // ---- 前が詰まる ----
    r.blocked = false;
    // ---- スリップストリーム（前の馬の真後ろ）・競り合い（横に並んだ馬） ----
    r.slip = 0; r.duel = 0;
    if (!r.finished && race.started) {
      for (const o of race.racers) {
        if (o === r || o.finished) continue;
        const du = o.p - r.p, dd = Math.abs(o.d - r.d);
        if (du > 1.2 && du < 6 && dd < 1.1 && o.v > 12) r.slip = Math.max(r.slip, 1 - (du - 1.2) / 4.8);
        if (Math.abs(du) < 1.4 && dd > 0.6 && dd < 2.2 && rem < 500) r.duel = 1;
      }
    }
    if (r.slip > 0) target += 0.18 * r.slip;               // 風よけで少しだけ楽に速く
    if (r.duel) target += 0.0035 * r.h.gut * (r.energy > 0 ? 1 : 0.3); // 根性で負けない
    // ---- 特殊能力「メダルゲームの馬神」：2秒間、押し出す力が増える ----
    if (r.god === 1 && (r.ai || !r.isPlayer) && rem < 260 && !r.finished) { r.god = 2; r.godT = 2; race.events.push({ type: 'god', r }); }
    if (r.godT > 0) { r.godT -= dt; target += 2.4; }
    for (const o of rs) {
      if (o === r) continue;
      const du = o.p - r.p;
      if (du > 0 && du < 2.7 && Math.abs(o.d - r.d) < 0.95) { if (target > o.v + 0.05) { target = o.v + 0.05; r.blocked = true; } }
    }
    // ---- 加速 ----
    const a = r.v < 13 ? r.startAccel : (target > r.v ? r.accel * (r.godT > 0 ? 3.2 : 1) : r.energy <= 0 ? 2.2 : 0.9);
    if (r.v < target) r.v = Math.min(target, r.v + a * dt); else r.v = Math.max(target, r.v - a * dt);
    if (r.bump > 0) { r.v -= 0.5 * dt; r.bump -= dt; }
    // ---- スタミナ ----
    if (!r.finished) {
      const m = r.eff * (r.whipT > 0 ? r.whipDrain : 1) * (1 - 0.18 * r.slip);
      r.energy -= Math.pow(r.v / VREF, 4) * m * r.v * dt * (r.slope > 0 ? 1 + r.slope * 8 : 1);
      if (r.energy < 0) r.energy = 0;
    }
    r.whipT -= dt; r.whipCool -= dt;
    // ---- 前進（コーナーは外ほど損） ----
    const k = onCurve(r.u) ? R / (R + r.d) : 1;
    const du = r.v * dt * k;
    r.u += du; r.p += du;
    r.stride += r.v * dt;
    if (!r.finished && r.p >= race.dist) {
      r.finished = true; r.finishTime = race.t - (r.p - race.dist) / Math.max(1, r.v);
      race.finishedCount++; race.order.push(r);
      r.pos = race.order.length;
      race.events.push({ type: 'finish', r });
    }
    // ---- 横の動き ----
    let want = r.d;
    if (r.isPlayer && !r.ai) {
      const s = input ? input.steer : 0;
      want = r.d + s * r.latSpeed * dt;
    } else {
      r.aiTimer -= dt;
      if (r.aiTimer <= 0) { r.aiTimer = 0.25; r.laneTarget = aiLane(r, race, rem); }
      const lt = r.laneTarget ?? r.laneWant;
      const ls = r.latSpeed * (race.t < 6 ? 0.5 : 1);
      want = r.d + clamp(lt - r.d, -ls * dt, ls * dt);
    }
    r.d = want;
  }
  // ---- 馬同士がぶつからないように ----
  for (let i = 0; i < rs.length; i++) for (let k2 = i + 1; k2 < rs.length; k2++) {
    const a = rs[i], b = rs[k2];
    if (Math.abs(a.p - b.p) < 2.4) {
      const dd = b.d - a.d, ad = Math.abs(dd);
      if (ad < 1.05) {
        const push = (1.05 - ad) / 2, sgn = dd >= 0 ? 1 : -1;
        a.d -= push * sgn; b.d += push * sgn;
        for (const q of [a, b]) { if (q.bump <= 0 && q.isPlayer) race.events.push({ type: 'bump' }); if (q.bump <= 0 && q.v > 15 && !q.finished && SR() < (q.isPlayer && !q.ai ? 0.012 : 0.002)) stumble(q, race); q.bump = 0.25; }
      }
    }
  }
  for (const r of rs) r.d = clamp(r.d, 0.7, TRACK.width - 1.2);
  if (pl && !pl.finished && race.events.length < 50) {
    const rem = race.dist - pl.p;
    for (const mark of [1000, 600, 400, 200]) {
      if (rem < mark && !race['m' + mark] && race.dist > mark + 100) { race['m' + mark] = true; race.events.push({ type: 'mark', m: mark }); }
    }
  }
  return leaderP;
}

function doWhip(r, race) {
  if (r.fallen) return;
  r.whipT = 0.95; r.whipCool = r.whipCd; r.whips++;
  if (r.isPlayer) race.events.push({ type: 'whip' });
  // スタミナが切れているのに追いすぎると、つまずく・落馬する
  const ratio = r.energy / r.cap;
  const risk = ratio <= 0 ? 0.09 : ratio < 0.05 ? 0.025 : 0;
  if (risk && !r.finished && SR() < risk) stumble(r, race);
}
function stumble(r, race) {
  if (r.fallen) return;
  const again = r.stumbleT > 0 || r.energy <= 0;
  if (again && SR() < (r.energy <= 0 ? 0.4 : 0.2)) {
    r.fallen = true; r.dnf = true; r.v *= 0.6; r.whipT = 0; r.ai = true; r.laneWant = TRACK.width - 2;
    race.events.push({ type: 'fall', r });
    return;
  }
  r.stumbleT = 1.1; r.v *= 0.74;
  race.events.push({ type: 'stumble', r });
}

export function aiLane(r, race, rem) {
  let want = r.laneWant;
  if (race.t < 4) return r.d;
  // 直線に入ったら差し・追込は外へ
  if (rem < 480 && (r.style === '差し' || r.style === '追込')) want = Math.max(r.d, 3.5);
  // 前が詰まっていたら空いている方へ
  const free = (d) => {
    let worst = 99;
    for (const o of race.racers) { if (o === r) continue; const du = o.p - r.p; if (du > -1.5 && du < 6 && Math.abs(o.d - d) < 1.1) worst = Math.min(worst, du); }
    return worst;
  };
  if (r.blocked || free(want) < 6) {
    const opts = [r.d - 1.3, r.d + 1.3, r.d + 2.6, r.d];
    let best = r.d, bs = -1;
    for (const d of opts) { if (d < 0.8 || d > TRACK.width - 2) continue; const f = free(d) - Math.abs(d - want) * 0.4; if (f > bs) { bs = f; best = d; } }
    want = best;
  }
  return want;
}

// 着差の表記
export function marginText(dt, v) {
  const len = dt * v / 2.4;
  if (len < 0.05) return 'ハナ';
  if (len < 0.15) return 'アタマ';
  if (len < 0.3) return 'クビ';
  if (len < 0.6) return '1/2';
  if (len < 0.85) return '3/4';
  if (len < 1.15) return '1';
  if (len < 1.4) return '1 1/4';
  if (len < 1.65) return '1 1/2';
  if (len < 1.9) return '1 3/4';
  if (len < 2.5) return '2';
  if (len < 3.5) return '3';
  if (len < 4.5) return '4';
  if (len < 6) return '5';
  return '大差';
}

// 3Dを使わずに結果だけ出す（オート用）
export function simulateRace(cfg) {
  const opps = cfg.opponents ? [...cfg.opponents] : [];
  const pSpec = { ...cfg.player, isPlayer: true, ai: true };
  const n = cfg.fieldSize || 12;
  if (opps.length < n - 1) opps.push(...makeOpponents(cfg.race, pSpec, n - 1 - opps.length));
  setVenue(cfg.race.place);
  const race = createRace({ dist: cfg.race.dist, surf: cfg.race.surf, specs: [pSpec, ...opps], going: cfg.race.going, weather: cfg.race.weather });
  race.countdown = 0; race.started = true;
  let t = 0;
  while (race.finishedCount < race.racers.length && t < 400) { stepRace(race, 1 / 20, null); t += 1 / 20; race.events.length = 0; }
  const all = race.racers.map(r => ({ r, time: (r.fallen ? 1e4 : 0) + (r.finished ? r.finishTime : race.t + (race.dist - r.p) / Math.max(10, r.v)) })).sort((a, b) => a.time - b.time);
  const list = all.map((x, i) => ({ pos: i + 1, name: x.r.name, jname: x.r.jname, num: x.r.num, time: x.time % 1e4, dnf: !!x.r.fallen, isPlayer: !!x.r.isPlayer, margin: x.r.fallen ? '中止' : i === 0 ? '' : marginText(x.time - all[i - 1].time, 16.5), silk: x.r.silk }));
  const me = list.find(x => x.isPlayer);
  return { pos: me.pos, field: list.length, time: me.time, whips: race.player.whips, list, jname: cfg.player.jname, auto: true, dnf: me.dnf };
}

// 出走馬を全部指定して結果だけ出す（賭け用）
export function simulateField(specs, race, seed, dt = 1 / 60) {
  if (seed != null) setSimSeed(seed);
  setVenue(race.place);
  const R = createRace({ dist: race.dist, surf: race.surf, specs, fixedGates: true, noBand: true, going: race.going, weather: race.weather });
  R.countdown = 0; R.started = true;
  let t = 0;
  while (R.finishedCount < R.racers.length && t < 400) { stepRace(R, dt, null); t += dt; R.events.length = 0; }
  setSimSeed(null);
  return fieldResult(R);
}
export function fieldResult(R) {
  const all = R.racers.map(r => ({ r, time: (r.fallen ? 1e4 : 0) + (r.finished ? r.finishTime : R.t + (R.dist - r.p) / Math.max(10, r.v)) })).sort((a, b) => a.time - b.time);
  return all.map((x, i) => ({ pos: i + 1, num: x.r.num, name: x.r.name, jname: x.r.jname, time: x.time % 1e4, dnf: !!x.r.fallen, margin: x.r.fallen ? '中止' : i === 0 ? '' : marginText(x.time - all[i - 1].time, 16.5) }));
}
