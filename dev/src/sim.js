// ===== レースの物理シミュレーション（描画とは別） =====
import { APT_FACTOR, COND_SPEED, rnd, clamp, lerp, pick, randomHorseName, randomJockeyName, SILKS, COAT } from './data.js';

export const TRACK = { Ls: 500, R: 160, width: 26, finishU: 400 };
TRACK.P = 2 * TRACK.Ls + 2 * Math.PI * TRACK.R;
const { Ls, R, P } = TRACK;
const PR = Math.PI * R;

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
  return out;
}
export function onCurve(u) { u = ((u % P) + P) % P; return (u >= Ls && u < Ls + PR) || u >= 2 * Ls + PR; }

const STYLE_CRUISE = { '逃げ': 0.927, '先行': 0.913, '差し': 0.9, '追込': 0.889 };
const STYLE_SPURT = { '逃げ': 520, '先行': 620, '差し': 720, '追込': 780 };
const STYLE_LANE = { '逃げ': 1.0, '先行': 1.6, '差し': 3.2, '追込': 4.6 };
const VREF = 16.5;

// 馬・騎手の能力から走りのパラメータを作る
export function makeRacer(spec) {
  const h = spec.h, j = spec.j;
  const apt = APT_FACTOR[spec.apt] ?? 1;
  const cf = COND_SPEED[spec.cond ?? 2];
  const top = (16.55 + 0.022 * h.spd) * apt * cf;
  const cap = 1100 + 24 * h.sta;
  return {
    ...spec,
    top, cap, energy: cap,
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
    blocked: false, stride: Math.random() * 10, aiTimer: Math.random() * 0.3, aiWhipT: 0, bump: 0,
  };
}

// 対戦相手を作る（いい勝負になるように、プレイヤーの強さに寄せる）
export function makeOpponents(race, playerSpec, n, opts = {}) {
  const ph = playerSpec.h;
  const pEff = (ph.spd * 1.3 + ph.pow * 0.9 + ph.gut * 0.8 + ph.wis * 0.6 + Math.min(ph.sta, 20 + race.dist / 40) * 1.0) / 4.6;
  const base = lerp(race.lv ?? 40, pEff, opts.blend ?? 0.6);
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
      style: pick(styles), coat: Math.floor(Math.random() * COAT.length), silk: SILKS[(i * 5 + 3) % SILKS.length],
    });
  }
  return list;
}

export function createRace(cfg) {
  // cfg: { dist, surf, specs:[...], playerIndex }
  const u0 = TRACK.finishU - cfg.dist;
  const racers = cfg.specs.map((s, i) => makeRacer(s));
  // ゲート番号をランダムに
  const gates = racers.map((_, i) => i).sort(() => Math.random() - 0.5);
  racers.forEach((r, i) => { r.gate = gates[i] + 1; r.u = u0; r.d = 1.1 + gates[i] * 1.25; r.num = gates[i] + 1; });
  return { dist: cfg.dist, surf: cfg.surf, u0, racers, t: 0, started: false, countdown: 3.2, finishedCount: 0, order: [], player: racers.find(r => r.isPlayer) || null, events: [] };
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
  const sorted = [...rs].sort((a, b) => (b.finished ? 1e6 - b.finishTime * 100 : b.p) - (a.finished ? 1e6 - a.finishTime * 100 : a.p));
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
      if (pl && !pl.finished && rem < 900 && !r.finished) {
        const gap = r.p - pl.p;
        if (gap > 3) target -= 0.16 * Math.min(1, (gap - 3) / 8);
        else if (gap < -4 && gap > -40) target += 0.06;
      }
    }
    if (whipping && r.whipT > 0) target += (r.isPlayer && !r.ai ? 1.15 : 1) * r.whipDv * (r.energy > 0 ? 1 : 0.3) + (rem < 400 ? r.h.gut * 0.002 : 0);
    // 競り合い（根性）
    if (rem < 420 && !r.finished) {
      for (const o of rs) if (o !== r && Math.abs(o.p - r.p) < 1.6 && Math.abs(o.d - r.d) < 2.6) { target += 0.12 * r.h.gut / 100; break; }
    }
    // スタミナ切れ
    if (r.energy <= 0) target = Math.min(target, r.top * (0.85 + 0.0007 * r.h.gut) + (whipping ? 0.15 : 0));
    else if (ratio < 0.12) target *= 0.95 + 0.0005 * r.h.gut;
    target = Math.min(target, r.top * 1.07);
    // ---- 前が詰まる ----
    r.blocked = false;
    for (const o of rs) {
      if (o === r) continue;
      const du = o.p - r.p;
      if (du > 0 && du < 2.7 && Math.abs(o.d - r.d) < 0.95) { if (target > o.v + 0.05) { target = o.v + 0.05; r.blocked = true; } }
    }
    // ---- 加速 ----
    const a = r.v < 13 ? r.startAccel : (target > r.v ? r.accel : 0.9);
    if (r.v < target) r.v = Math.min(target, r.v + a * dt); else r.v = Math.max(target, r.v - a * dt);
    if (r.bump > 0) { r.v -= 0.5 * dt; r.bump -= dt; }
    // ---- スタミナ ----
    if (!r.finished) {
      const m = r.eff * (r.whipT > 0 ? r.whipDrain : 1);
      r.energy -= Math.pow(r.v / VREF, 4) * m * r.v * dt;
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
        for (const q of [a, b]) { if (q.bump <= 0 && q.isPlayer) race.events.push({ type: 'bump' }); q.bump = 0.25; }
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
  r.whipT = 0.95; r.whipCool = r.whipCd; r.whips++;
  if (r.isPlayer) race.events.push({ type: 'whip' });
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
