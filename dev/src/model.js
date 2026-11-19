// ===== 馬と騎手の3Dモデル（プログラムで組み立て） =====
import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { coatTex, clothTex, maneTex, eyeTex, headTex } from './textures.js';

const V = (x, y, z) => new THREE.Vector3(x, y, z);
let COAT_MAP = null, MANE_MAP = null;

function g(geom, pos, rotZ = 0, scale, rotX = 0, rotY = 0) {
  const m = new THREE.Matrix4();
  const q = new THREE.Quaternion().setFromEuler(new THREE.Euler(rotX, rotY, rotZ));
  m.compose(pos || V(0, 0, 0), q, scale || V(1, 1, 1));
  geom.applyMatrix4(m);
  return geom;
}
// 方向(dx,dy)へ向いた円柱（XY平面内）
function cylDir(r1, r2, len, start, ang, seg = 10) {
  const c = new THREE.CylinderGeometry(r2, r1, len, seg);
  const th = ang - Math.PI / 2;
  const mid = V(start.x + Math.cos(ang) * len / 2, start.y + Math.sin(ang) * len / 2, start.z);
  return g(c, mid, th);
}

// 断面をつないでなめらかな形を作る（rT=上/前側、rB=下/後ろ側、rz=横幅）
function smoothSecs(secs, k = 3) {
  if (secs.length < 3) return secs;
  const out = [], M = secs.length, at = (i) => secs[Math.max(0, Math.min(M - 1, i))];
  const cr = (a, b, c, d, t) => 0.5 * ((2 * b) + (-a + c) * t + (2 * a - 5 * b + 4 * c - d) * t * t + (-a + 3 * b - 3 * c + d) * t * t * t);
  for (let i = 0; i < M - 1; i++) for (let j = 0; j < k; j++) {
    const t = j / k, A = at(i - 1), B = at(i), C = at(i + 1), D = at(i + 2);
    out.push({ c: V(cr(A.c.x, B.c.x, C.c.x, D.c.x, t), cr(A.c.y, B.c.y, C.c.y, D.c.y, t), cr(A.c.z, B.c.z, C.c.z, D.c.z, t)),
      rT: Math.max(0.005, cr(A.rT, B.rT, C.rT, D.rT, t)), rB: Math.max(0.005, cr(A.rB, B.rB, C.rB, D.rB, t)), rz: Math.max(0.005, cr(A.rz, B.rz, C.rz, D.rz, t)) });
  }
  out.push(secs[M - 1]);
  return out;
}
function loft(secs0, N = 28, caps = true) {
  const secs = smoothSecs(secs0);
  const pos = [], uv = [], idx = [];
  const M = secs.length;
  for (let i = 0; i < M; i++) {
    const S = secs[i];
    const a = secs[Math.max(0, i - 1)].c, b = secs[Math.min(M - 1, i + 1)].c;
    const t = new THREE.Vector3().subVectors(b, a).normalize();
    const n = new THREE.Vector3(-t.y, t.x, 0).normalize(), bz = new THREE.Vector3(0, 0, 1);
    for (let j = 0; j <= N; j++) {
      const th = (j / N) * Math.PI * 2, sn = Math.sin(th), cs = Math.cos(th);
      const up = sn > 0 ? S.rT * sn : S.rB * sn;
      const q = S.c.clone().addScaledVector(n, up).addScaledVector(bz, S.rz * cs);
      pos.push(q.x, q.y, q.z); uv.push(i / (M - 1), j / N);
    }
  }
  for (let i = 0; i < M - 1; i++) for (let j = 0; j < N; j++) {
    const a = i * (N + 1) + j, b2 = a + N + 1;
    idx.push(a, b2, a + 1, a + 1, b2, b2 + 1);
  }
  // 両端のふた
  if (caps) for (const [i, flip] of [[0, true], [M - 1, false]]) {
    const ci = pos.length / 3; const c = secs[i].c; pos.push(c.x, c.y, c.z); uv.push(i / (M - 1), 0.5);
    for (let j = 0; j < N; j++) { const a = i * (N + 1) + j; if (flip) idx.push(ci, a + 1, a); else idx.push(ci, a, a + 1); }
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); geo.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  geo.setIndex(idx); geo.computeVertexNormals();
  return geo;
}
const sec = (x, y, rT, rB, rz, z = 0) => ({ c: V(x, y, z), rT, rB, rz });
const LEGK = 1.85; // 脚を太めに（かわいい体形）
function legLoft(rows) { return loft(rows.map(([y, f, b, w, x = 0]) => ({ c: V(x, y, 0), rT: f * LEGK, rB: b * LEGK, rz: w * LEGK })), 14); }

const geoCache = {};
const JOCK_Y = 1.72;
// 首と頭の形（参考：大きな頭・横に張り出した目・まるい鼻先）
const NECK_A = 0.82, NECK_L = 0.64, HEAD_B = -1.0;
// 頭の断面 [x, 中心y, 上(顔側), 下(あご側), 横]
const HSEC = [
  [-0.08, 0.0, 0.11, 0.11, 0.11],
  [0.0, 0.0, 0.19, 0.2, 0.2],
  [0.1, -0.012, 0.215, 0.255, 0.24],
  [0.22, -0.03, 0.198, 0.245, 0.215],
  [0.36, -0.012, 0.168, 0.17, 0.168],
  [0.49, 0.0, 0.15, 0.148, 0.15],
  [0.6, -0.006, 0.166, 0.17, 0.176],
  [0.68, -0.014, 0.146, 0.154, 0.158],
  [0.74, -0.022, 0.055, 0.065, 0.065],
];
function headAt(x) {
  for (let i = 0; i < HSEC.length - 1; i++) { const a = HSEC[i], b = HSEC[i + 1]; if (x <= b[0]) { const k = Math.max(0, (x - a[0]) / (b[0] - a[0])); return a.map((v, j) => v + (b[j] - v) * k); } }
  return HSEC[HSEC.length - 1];
}
// 頭の表面の点（th：0=右横, π/2=顔の正面, π=左横, -π/2=あご）
function headPt(x, th, out = 0) { const [, cy, rT, rB, rz] = headAt(x); const s = Math.sin(th); return V(x, cy + ((s > 0 ? rT : rB) + out) * s, (rz + out) * Math.cos(th)); }
const EYE_X = 0.12, EYE_TH = 0.55, EYE_IN = 0.036, EYE_R = 0.074, EYE_FW = 0.8, LID_A = 0.48, LID_TILT = -0.08;

const HEAD_S = 1.36, HEAD_K = V(1, 1, 1);
const NI = (x) => x.index ? x.toNonIndexed() : x;
function horseGeos() {
  if (geoCache.h) return geoCache.h;
  // 胴体：き甲・胸・肋・腹・トモを重ねて筋肉の起伏を出す
  const body = loft([
    sec(1.0, 1.2, 0.12, 0.12, 0.1), sec(0.92, 1.22, 0.3, 0.3, 0.26), sec(0.78, 1.25, 0.4, 0.44, 0.33),
    sec(0.55, 1.3, 0.46, 0.47, 0.37), sec(0.3, 1.31, 0.44, 0.47, 0.4), sec(0.02, 1.31, 0.42, 0.44, 0.41),
    sec(-0.28, 1.33, 0.41, 0.36, 0.39), sec(-0.52, 1.36, 0.43, 0.38, 0.38), sec(-0.76, 1.35, 0.4, 0.38, 0.34),
    sec(-0.93, 1.31, 0.3, 0.3, 0.25), sec(-1.02, 1.28, 0.12, 0.14, 0.1),
  ], 32);
  body.scale(0.88, 1.13, 1.26);
  // 筋肉のふくらみ（胸・肩・トモ）
  const bulge = (x, y, z, r, sx, sy, sz, rz = 0) => { const s = new THREE.SphereGeometry(r, 18, 12); s.scale(sx, sy, sz); s.rotateZ(rz); s.translate(x, y, z); return NI(s); };
  const muscles = mergeGeometries([1, -1].flatMap(sd => [
    bulge(0.72, 1.3, sd * 0.15, 0.24, 0.8, 1.05, 0.9, 0.3),   // 胸
    bulge(0.48, 1.52, sd * 0.25, 0.27, 1.0, 1.2, 0.62, -0.35),  // 肩
    bulge(-0.6, 1.52, sd * 0.22, 0.34, 1.05, 1.0, 0.72, 0.15),   // トモ
  ]));
  // 首（首の付け根が原点）：太く短く、高く起こす
  const alpha = NECK_A, beta = HEAD_B;
  const E = V(Math.cos(alpha) * NECK_L, Math.sin(alpha) * NECK_L, 0);
  const na = (t, rT, rB, rz) => ({ c: V(Math.cos(alpha) * t - 0.05, Math.sin(alpha) * t - 0.02, 0), rT, rB, rz });
  const neck = loft([na(-0.2, 0.42, 0.48, 0.38), na(0.05, 0.38, 0.42, 0.34), na(0.32, 0.32, 0.33, 0.28), na(0.58, 0.27, 0.27, 0.23), na(NECK_L - 0.02, 0.24, 0.24, 0.2)], 22);

  // たてがみ：首すじに沿った短い毛のかたまり＋右に垂れる毛の帯
  const nTop = (t, out = 0) => { const k = t / NECK_L, rT = 0.38 + (0.24 - 0.38) * k; const c = V(Math.cos(alpha) * t - 0.05, Math.sin(alpha) * t - 0.02, 0); return c.add(V(-Math.sin(alpha), Math.cos(alpha), 0).multiplyScalar(rT + out)); };
  const mp = [], mu = [], mi = [], NM = 14;
  for (let i = 0; i <= NM; i++) {
    const t = 0.0 + (i / NM) * (NECK_L - 0.02), a = nTop(t, -0.01), len = 0.16 + Math.sin(i / NM * Math.PI) * 0.05;
    mp.push(a.x, a.y, 0.02, a.x + 0.05, a.y - len, 0.2 - t * 0.04); mu.push(i / NM, 0, i / NM, 1);
  }
  for (let i = 0; i < NM; i++) { const a0 = i * 2; mi.push(a0, a0 + 1, a0 + 2, a0 + 1, a0 + 3, a0 + 2); }
  const maneG = new THREE.BufferGeometry();
  maneG.setAttribute('position', new THREE.Float32BufferAttribute(mp, 3)); maneG.setAttribute('uv', new THREE.Float32BufferAttribute(mu, 2)); maneG.setIndex(mi); maneG.computeVertexNormals();
  const tufts = [];
  for (let i = 0; i < 10; i++) {
    const t = -0.05 + i * (NECK_L / 9.5), a = nTop(t, 0.0);
    const c = new THREE.SphereGeometry(0.07 - i * 0.002, 10, 8); c.scale(1.55, 0.7, 0.62); c.rotateZ(alpha - 0.35 + (i % 2) * 0.15); c.translate(a.x - 0.015, a.y, 0.03 * ((i % 2) * 2 - 1));
    tufts.push(NI(c));
  }
  const mane = mergeGeometries([NI(maneG), ...tufts]);
  // ===== 頭（頭のローカル座標：x=鼻先の方向, y=顔の正面側, z=横） =====
  const head = loft(HSEC.map(([x, cy, rT, rB, rz]) => ({ c: V(x, cy, 0), rT, rB, rz })), 30);
  const UPh = V(-Math.sin(-beta), Math.cos(-beta), 0), FWh = V(Math.cos(-beta), Math.sin(-beta), 0); // 頭から見た「上」と「前」
  const basis = (X, upHint) => { const Y = upHint.clone().addScaledVector(X, -upHint.dot(X)).normalize(); const Z = new THREE.Vector3().crossVectors(X, Y); return new THREE.Matrix4().makeBasis(X, Y, Z); };
  // 目：横に大きく張り出した目玉（白目＋黒目のテクスチャ）。黒目は少し前を向く
  const eyes = [], lids = [], lash = [];
  for (const sd of [1, -1]) {
    const c = headPt(EYE_X, EYE_TH); c.z = sd * (c.z - EYE_IN);
    const L = FWh.clone().multiplyScalar(EYE_FW).add(V(0, 0, sd * 0.8)).add(UPh.clone().multiplyScalar(0.06)).normalize();
    const M = basis(L, UPh).setPosition(c);
    const e = new THREE.SphereGeometry(EYE_R, 22, 14); e.scale(0.86, 1.06, 1); e.applyMatrix4(M); eyes.push(NI(e));
    // まぶた（上の縁を少し覆う）とまつげの線
    const lidUp = UPh.clone().addScaledVector(L, LID_TILT).normalize();
    const ML = basis(lidUp, L.clone().negate()).setPosition(c);
    const MLr = new THREE.Matrix4().makeBasis(V(0, 0, 1), V(1, 0, 0), V(0, 1, 0)); // y軸まわりのキャップ → lidUp方向
    const lid = new THREE.SphereGeometry(EYE_R * 1.08, 20, 6, 0, Math.PI * 2, 0, LID_A); lid.scale(0.95, 1, 1.06);
    lid.applyMatrix4(MLr); lid.applyMatrix4(ML); lids.push(NI(lid));
    const rr = EYE_R * 1.08 * Math.sin(LID_A), ry = EYE_R * 1.08 * Math.cos(LID_A);
    const ls = new THREE.TorusGeometry(rr, 0.0085, 5, 20); ls.rotateX(Math.PI / 2); ls.translate(0, ry, 0); ls.scale(1.06, 1, 0.95);
    ls.applyMatrix4(MLr); ls.applyMatrix4(ML); lash.push(NI(ls));
  }
  const eyeG = mergeGeometries(eyes), lidG = mergeGeometries(lids), lashG = mergeGeometries(lash);
  // 耳：先のとがった葉っぱ形（内側は濃い色）
  const earProf = [[0, 0], [0.05, 0.015], [0.066, 0.07], [0.058, 0.13], [0.036, 0.19], [0.012, 0.235], [0, 0.25]].map(([r, y]) => new THREE.Vector2(r, y));
  const earMs = [1, -1].map(sd => { const d = UPh.clone().multiplyScalar(0.92).add(FWh.clone().multiplyScalar(0.12)).add(V(0, 0, sd * 0.26)).normalize(); const front = FWh.clone().add(V(0, 0, sd * 0.35)).normalize(); const Y = d, Z = front.clone().addScaledVector(Y, -front.dot(Y)).normalize(), X = new THREE.Vector3().crossVectors(Y, Z); return new THREE.Matrix4().makeBasis(X, Y, Z).setPosition(V(-0.03, 0.15, sd * 0.1)); });
  const earShape = (s, zs, dz, dy) => mergeGeometries(earMs.map(M => { const l = new THREE.LatheGeometry(earProf, 14); l.scale(s, s, s * zs); l.translate(0, dy, dz); l.applyMatrix4(M); return NI(l); }));
  const ears = earShape(0.8, 0.55, 0, 0), earIn = earShape(0.58, 0.3, 0.02, 0.025), earCover = earShape(0.93, 0.62, -0.004, -0.01);
  // 前髪（両耳のあいだからおでこへ）
  const fore = mergeGeometries([[-0.02, 0.2, 0, 0.05, 0.1], [0.03, 0.208, 0.035, 0.042, -0.25], [0.03, 0.208, -0.035, 0.042, 0.25], [0.07, 0.21, 0.0, 0.038, 0.05], [0.0, 0.21, 0.06, 0.035, -0.4], [0.0, 0.21, -0.06, 0.035, 0.4]].map(([x, y, z, r, ry]) => { const s = new THREE.SphereGeometry(r, 9, 6); s.scale(2.0, 0.45, 0.7); s.rotateY(ry); s.rotateZ(-0.22); s.translate(x + r * 0.9, y, z); return NI(s); }));
  // 鼻の穴・口
  const nose = mergeGeometries([1, -1].flatMap(sd => { const p = headPt(0.69, 0.62); p.z *= sd; const s = new THREE.SphereGeometry(0.03, 10, 8); s.scale(1.3, 0.55, 0.75); s.rotateY(-sd * 0.5); s.rotateZ(0.35); s.translate(p.x - 0.008, p.y, p.z * 0.96); return [NI(s)]; }));
  const mouthC = new THREE.CatmullRomCurve3([headPt(0.6, -0.55, 0.0), headPt(0.68, -0.95, 0.0), headPt(0.71, -Math.PI / 2, 0.0), headPt(0.68, -Math.PI + 0.95, 0.0), headPt(0.6, -Math.PI + 0.55, 0.0)]);
  const mouth = new THREE.TubeGeometry(mouthC, 20, 0.01, 5, false);
  // 頭絡：鼻革・額革・ほお革・のど革（頭の表面に沿うひも）
  const ringPts = (x, out, a0 = 0, a1 = Math.PI * 2, n = 24) => { const p = []; for (let i = 0; i <= n; i++) p.push(headPt(x, a0 + (a1 - a0) * i / n, out)); return p; };
  const strap = (pts, r = 0.016, closed = false) => new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts, closed), Math.max(8, pts.length * 2), r, 6, closed);
  const noseband = strap(ringPts(0.52, 0.022, 0, Math.PI * 2, 28).slice(0, -1), 0.02, true);
  const browband = strap(ringPts(0.02, 0.03, 0.3, Math.PI - 0.3, 16), 0.017);
  const cheeks = mergeGeometries([1, -1].map(sd => { const th = sd > 0 ? 0.32 : Math.PI - 0.32; return NI(strap([headPt(0.0, th, 0.03), headPt(0.18, th - sd * 0.18, 0.02), headPt(0.34, th - sd * 0.22, 0.02), headPt(0.52, th - sd * 0.16, 0.025)], 0.015)); }));
  const throat = strap(ringPts(-0.02, 0.03, -0.35, -Math.PI + 0.35, 14).map(p => p.add(V(-0.02, 0, 0))), 0.014);
  const bitRings = mergeGeometries([1, -1].map(sd => { const p = headPt(0.63, -0.3, 0.012); p.z *= sd; const t = new THREE.TorusGeometry(0.024, 0.007, 6, 14); t.translate(p.x, p.y, p.z); return NI(t); }));
  const bridle = mergeGeometries([cheeks, NI(throat), bitRings].map(NI));
  const shadowRoll = strap(ringPts(0.52, 0.05, 0.1, Math.PI - 0.1, 16), 0.045);
  // 覆面（メンコ）：おでこから鼻の手前までを包む布＋目のまわりのカップ
  const hood = loft(HSEC.filter(s => s[0] <= 0.5).map(([x, cy, rT, rB, rz]) => ({ c: V(x, cy, 0), rT: rT + 0.022, rB: rB + 0.02, rz: rz + 0.022 })), 30, false);
  // 目のカップ（ブリンカー）：目のまわりを囲む厚い輪＋前のふちの細い輪
  const cupParts = [], rims = [];
  for (const sd of [1, -1]) {
    const c = headPt(EYE_X, EYE_TH); c.z = sd * (c.z - EYE_IN);
    const N = c.clone().sub(V(EYE_X, headAt(EYE_X)[1], 0)).normalize();
    const A = N.clone().multiplyScalar(0.75).addScaledVector(FWh, 0.45).normalize();
    const Y = A, Z = UPh.clone().addScaledVector(Y, -UPh.dot(Y)).normalize(), X = new THREE.Vector3().crossVectors(Y, Z);
    const B = new THREE.Matrix4().makeBasis(X, Y, Z).setPosition(c.clone().addScaledVector(N, 0.035));
    const cup = new THREE.TorusGeometry(EYE_R * 1.12, 0.036, 8, 20); cup.rotateX(Math.PI / 2); cup.scale(1, 1.25, 1); cup.applyMatrix4(B); cupParts.push(NI(cup));
    const rim = new THREE.TorusGeometry(EYE_R * 1.12, 0.012, 5, 20); rim.rotateX(Math.PI / 2); rim.translate(0, 0.04, 0); rim.applyMatrix4(B); rims.push(NI(rim));
  }
  const cups = mergeGeometries(cupParts), cupRim = mergeGeometries(rims);
  const bit = headPt(0.63, -0.3, 0.02).setZ(0);
  // 脚：上・管・つなぎ（球節で曲がる）
  const upperF = legLoft([[0.04, 0.12, 0.11, 0.1], [-0.12, 0.11, 0.1, 0.085], [-0.3, 0.07, 0.072, 0.06], [-0.43, 0.052, 0.06, 0.05], [-0.48, 0.065, 0.07, 0.064], [-0.53, 0.05, 0.05, 0.048]]);
  const lowerF = legLoft([[0.02, 0.058, 0.058, 0.052], [-0.15, 0.044, 0.06, 0.042], [-0.32, 0.045, 0.058, 0.045], [-0.39, 0.064, 0.074, 0.062], [-0.43, 0.046, 0.05, 0.046]]);
  const pastF = mergeGeometries([g(new THREE.CylinderGeometry(0.05, 0.055, 0.13, 10), V(0.02, -0.06, 0), 0.25)].map(NI));
  const hoof = g(new THREE.SphereGeometry(0.095, 14, 10, 0, Math.PI * 2, 0, Math.PI * 0.62), V(0.03, -0.2, 0), 0, V(1.1, 0.9, 1));
  const upperH = legLoft([[0.06, 0.17, 0.2, 0.13], [-0.16, 0.13, 0.16, 0.105], [-0.38, 0.075, 0.09, 0.065], [-0.53, 0.06, 0.1, 0.06, -0.01], [-0.6, 0.05, 0.06, 0.05]]);
  const lowerH = legLoft([[0.02, 0.058, 0.064, 0.052], [-0.18, 0.045, 0.062, 0.043], [-0.37, 0.046, 0.06, 0.046], [-0.44, 0.066, 0.076, 0.063], [-0.48, 0.048, 0.052, 0.048]]);
  const sock = g(new THREE.CylinderGeometry(0.06, 0.066, 0.2, 10), V(0, -0.33, 0));
  // しっぽ：付け根＋毛すじを貼った板を3枚交差させて、ふさふさに
  const tailParts = [g(new THREE.CylinderGeometry(0.085, 0.07, 0.28, 10), V(0, -0.13, 0)),
    NI(loft([{ c: V(0, -0.2, 0), rT: 0.08, rB: 0.08, rz: 0.08 }, { c: V(0, -0.5, 0), rT: 0.15, rB: 0.15, rz: 0.12 }, { c: V(0, -0.85, 0), rT: 0.13, rB: 0.13, rz: 0.1 }, { c: V(0, -1.05, 0), rT: 0.03, rB: 0.03, rz: 0.03 }], 12))];
  for (let i = 0; i < 3; i++) {
    const pl = new THREE.PlaneGeometry(0.26, 0.85, 1, 4);
    const a = pl.attributes.position; for (let k = 0; k < a.count; k++) { const y = a.getY(k); a.setX(k, a.getX(k) * (0.75 + (0.425 - y) * 0.5)); }
    { const uv = pl.attributes.uv; for (let k = 0; k < uv.count; k++) uv.setY(k, 1 - uv.getY(k)); }
    pl.translate(0, -0.62, 0); pl.rotateY(i * Math.PI / 3);
    tailParts.push(pl);
  }  const tail = mergeGeometries(tailParts.map(NI));
  const saddle = mergeGeometries([
    g(new THREE.BoxGeometry(0.5, 0.06, 0.42), V(0.1, 1.69, 0)),
    g(new THREE.BoxGeometry(0.16, 0.08, 0.36), V(0.32, 1.72, 0)),
    g(new THREE.TorusGeometry(0.4, 0.025, 6, 20, Math.PI), V(0.1, 1.3, 0), 0, null, 0, Math.PI / 2), // 腹帯
  ].map(NI));
  geoCache.h = { body, muscles, neck, head, eyeG, lidG, lashG, ears, earIn, earCover, fore, nose, mouth, noseband, browband, bridle, shadowRoll, hood, cups, cupRim, E, mane, upperF, lowerF, pastF, hoof, upperH, lowerH, sock, tail, saddle, bit, alpha, beta };
  return geoCache.h;
}

function capX(r, len, pos, rotZ = 0, scale) { // x方向のカプセル
  const c = new THREE.CapsuleGeometry(r, len, 6, 14); c.rotateZ(-Math.PI / 2);
  return g(c, pos, rotZ, scale);
}
function seg(r1, r2, a, b, n = 10) { // 点aから点bへの円柱
  const d = new THREE.Vector3().subVectors(b, a), len = d.length();
  const c = new THREE.CylinderGeometry(r2, r1, len, n); c.translate(0, len / 2, 0);
  c.applyQuaternion(new THREE.Quaternion().setFromUnitVectors(V(0, 1, 0), d.normalize())); c.translate(a.x, a.y, a.z);
  return c;
}
function jockeyGeos() {
  if (geoCache.j) return geoCache.j;
  // 前かがみの胴（背中・肩・胸）
  const torso = mergeGeometries([
    capX(0.17, 0.24, V(0.24, 0.46, 0), -0.14, V(1, 1.05, 1.25)),
    g(new THREE.SphereGeometry(0.1, 12, 8), V(0.42, 0.47, 0.15)),
    g(new THREE.SphereGeometry(0.1, 12, 8), V(0.42, 0.47, -0.15)),
    g(new THREE.SphereGeometry(0.16, 14, 10), V(0.04, 0.4, 0), 0, V(1, 0.9, 1.15)), // 腰
  ].map(NI));
  const HC = V(0.58, 0.57, 0), big = (geo) => { geo.translate(-HC.x, -HC.y, -HC.z); geo.scale(1.55, 1.55, 1.55); geo.translate(HC.x, HC.y + 0.07, HC.z); return geo; };
  const helmet0 = mergeGeometries([
    g(new THREE.SphereGeometry(0.128, 16, 10, 0, Math.PI * 2, 0, Math.PI * 0.58), V(0.57, 0.6, 0)),
    g(new THREE.CylinderGeometry(0.12, 0.13, 0.02, 16, 1, false, -Math.PI * 0.45, Math.PI * 0.9), V(0.6, 0.6, 0), 0, V(1.25, 1, 1)), // ひさし
  ].map(NI));
  const helmet = big(helmet0);
  const face0 = mergeGeometries([
    g(new THREE.SphereGeometry(0.1, 12, 10), V(0.6, 0.555, 0), 0, V(1, 1.05, 0.9)),
    seg(0.05, 0.05, V(0.5, 0.5, 0), V(0.56, 0.54, 0), 8), // 首
  ].map(NI));
  const face = big(face0);
  const smile = big(mergeGeometries([g(new THREE.TorusGeometry(0.024, 0.006, 6, 12, Math.PI * 0.7), V(0.695, 0.52, 0), Math.PI * 1.1, null, 0, Math.PI / 2)].map(NI)));
  const goggles = big(mergeGeometries([
    g(new THREE.SphereGeometry(0.045, 12, 8), V(0.685, 0.57, 0.045), 0, V(0.5, 0.85, 1)),
    g(new THREE.SphereGeometry(0.045, 12, 8), V(0.685, 0.57, -0.045), 0, V(0.5, 0.85, 1)),
    g(new THREE.TorusGeometry(0.105, 0.012, 6, 20), V(0.6, 0.575, 0), 0, V(1, 0.35, 1.02), Math.PI / 2),
  ].map(NI)));
  const thighs = [], shins = [], cuffs = [];
  for (const z of [0.17, -0.17]) {
    const hip = V(0.02, 0.36, z * 0.8), knee = V(0.36, 0.26, z * 1.18), ank = V(0.2, -0.05, z * 1.24);
    thighs.push(seg(0.08, 0.065, hip, knee, 10), g(new THREE.SphereGeometry(0.065, 8, 6), knee));
    shins.push(seg(0.06, 0.05, knee, ank, 10), g(new THREE.BoxGeometry(0.15, 0.05, 0.07), V(0.25, -0.07, z * 1.24)));
    cuffs.push(seg(0.066, 0.064, knee.clone().lerp(ank, 0.08), knee.clone().lerp(ank, 0.22), 10));
  }
  const pants = mergeGeometries(thighs.map(NI));
  const boots = mergeGeometries(shins.map(NI));
  const cuff = mergeGeometries(cuffs.map(NI));
  const armsL = [], gl = [];
  for (const z of [0.17, -0.17]) {
    const sh = V(0.42, 0.47, z), el = V(0.6, 0.33, z * 1.15), hd = V(0.84, 0.3, z * 0.55);
    armsL.push(seg(0.058, 0.05, sh, el, 10), g(new THREE.SphereGeometry(0.05, 8, 6), el), seg(0.05, 0.042, el, hd, 10));
    gl.push(g(new THREE.SphereGeometry(0.048, 8, 6), hd, 0, V(1.2, 0.9, 1)));
  }
  const arms = mergeGeometries(armsL.map(NI));
  const gloves = mergeGeometries(gl.map(NI));
  geoCache.j = { smile, torso, helmet, face, goggles, pants, boots, cuff, arms, gloves };
  return geoCache.j;
}

// 勝負服の柄（地色＋もう1色で、縦じま・輪・たすき・袖・星など）
const silkCache = {};
function silkMat(color, pat) {
  const key = color + '_' + pat;
  if (silkCache[key]) return silkCache[key];
  const c = document.createElement('canvas'); c.width = 128; c.height = 128; const x = c.getContext('2d');
  const base = new THREE.Color(color), lum = base.r * 0.3 + base.g * 0.59 + base.b * 0.11;
  const sub = lum > 0.6 ? (pat % 2 ? '#1d3a8a' : '#c81e1e') : (pat % 3 ? '#ffffff' : '#f2c200');
  x.fillStyle = '#' + base.getHexString(); x.fillRect(0, 0, 128, 128);
  x.fillStyle = sub;
  if (pat === 1) for (let i = 0; i < 128; i += 32) x.fillRect(i, 0, 14, 128);           // 縦じま
  else if (pat === 2) for (let i = 0; i < 128; i += 32) x.fillRect(0, i, 128, 13);      // 輪
  else if (pat === 3) { x.save(); x.translate(64, 64); x.rotate(0.7); x.fillRect(-90, -11, 180, 22); x.restore(); } // たすき
  else if (pat === 4) for (let i = 0; i < 6; i++) for (let j = 0; j < 6; j++) { x.beginPath(); x.arc(i * 22 + (j % 2) * 11, j * 22, 5, 0, 7); x.fill(); } // 水玉
  else if (pat === 5) for (let i = 0; i < 4; i++) for (let j = 0; j < 4; j++) if ((i + j) % 2) x.fillRect(i * 32, j * 32, 32, 32); // 市松
  else if (pat === 6) { x.fillRect(0, 0, 128, 20); x.fillRect(0, 108, 128, 20); } // 山形の代わりに上下の帯
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.wrapS = t.wrapT = THREE.RepeatWrapping;
  return (silkCache[key] = new THREE.MeshStandardMaterial({ map: t, roughness: 0.32, metalness: 0.0 }));
}

const matCache = {};
function mat(color, opts = {}) {
  const key = color + JSON.stringify(opts);
  if (!matCache[key]) matCache[key] = new THREE.MeshStandardMaterial({ color, roughness: 0.6, metalness: 0, ...opts });
  return matCache[key];
}

// 馬を1頭作る
export function buildHorse(coat, silkColor, num, opts = {}) {
  if (!COAT_MAP) COAT_MAP = coatTex();
  const G = horseGeos();
  const root = new THREE.Group();
  const bodyG = new THREE.Group(); root.add(bodyG);
  // 毛：つるっとしたやわらかい質感（うっすら毛並み＋ふちの光）
  const furMat = (col, extra = {}) => new THREE.MeshPhysicalMaterial({ color: col, map: COAT_MAP, bumpMap: COAT_MAP.bump, bumpScale: 0.25, roughness: 0.62, metalness: 0, sheen: 0.6, sheenRoughness: 0.45, sheenColor: new THREE.Color(col).lerp(new THREE.Color(0xffffff), 0.5), clearcoat: 0.12, clearcoatRoughness: 0.5, envMapIntensity: 0.5, ...extra });
  const coatMat = furMat(coat.body);
  const maneMat = mat(coat.mane, { roughness: 0.8 });
  const legMat = furMat(coat.leg);
  const hoofMat = mat(0x1a1a1a, { roughness: 0.4 });
  const dark = mat(0x1e120b, { roughness: 0.5 });
  const body = new THREE.Mesh(G.body, coatMat); bodyG.add(body);
  bodyG.add(new THREE.Mesh(G.muscles, coatMat));
  const saddle = new THREE.Mesh(G.saddle, mat(0x2a1a10, { roughness: 0.5 })); bodyG.add(saddle);
  // ゼッケン
  const ct = clothTex(num, '#ffffff');
  const clothMat = new THREE.MeshStandardMaterial({ map: ct, roughness: 0.8, side: THREE.DoubleSide });
  for (const s of [1, -1]) {
    const pl = new THREE.Mesh(G.cloth || new THREE.PlaneGeometry(0.62, 0.42), clothMat);
    pl.position.set(0.02, 1.5, s * 0.36); if (s < 0) pl.rotation.y = Math.PI;
    bodyG.add(pl);
  }
  // 首
  const neckP = new THREE.Group(); neckP.position.set(0.58, 1.42, 0); bodyG.add(neckP);
  neckP.add(new THREE.Mesh(G.neck, coatMat));
  // 頭（大きく、目は横に張り出す）
  const headO = new THREE.Group(); headO.position.copy(G.E); headO.scale.setScalar(HEAD_S); neckP.add(headO);
  const headR = new THREE.Group(); headR.rotation.z = G.beta; headO.add(headR);
  const headG = new THREE.Group(); headG.scale.set(HEAD_K.x, HEAD_K.y, HEAD_K.z); headR.add(headG);
  const isGrey = coat.name === '芦毛', isChest = coat.name === '栗毛' || coat.name === '栃栗毛';
  const mz = new THREE.Color(coat.body).multiplyScalar(isGrey ? 0.62 : isChest ? 0.72 : 0.5);
  const blaze = opts.blaze ?? (Math.random() < 0.45 ? 1 + Math.floor(Math.random() * 3) : 0);
  const faceMat = new THREE.MeshPhysicalMaterial({ map: headTex(coat.body, mz.getHex(), blaze === true ? 2 : blaze, headU), color: 0xeeeeee, roughness: 0.6, sheen: 0.6, sheenRoughness: 0.45, sheenColor: new THREE.Color(coat.body).lerp(new THREE.Color(0xffffff), 0.5), clearcoat: 0.12, clearcoatRoughness: 0.5, envMapIntensity: 0.5 });
  headG.add(new THREE.Mesh(G.head, faceMat));
  const hoodC = opts.hood !== undefined ? opts.hood : (Math.random() < 0.3 ? [0x1d6bff, 0x18a84a, 0xe02828, 0xf2c200, 0xf97316, 0x7c3aed, 0xffffff][Math.floor(Math.random() * 7)] : null);
  if (hoodC == null) {
    headG.add(new THREE.Mesh(G.ears, furMat(coat.body)));
    headG.add(new THREE.Mesh(G.earIn, mat(new THREE.Color(coat.body).multiplyScalar(0.42).getHex(), { roughness: 0.8 })));
  }
  headG.add(new THREE.Mesh(G.eyeG, new THREE.MeshStandardMaterial({ map: eyeTex(), roughness: 0.12, envMapIntensity: 0.9 })));
  headG.add(new THREE.Mesh(G.lidG, coatMat));
  headG.add(new THREE.Mesh(G.lashG, dark));
  headG.add(new THREE.Mesh(G.nose, mat(0x120a06, { roughness: 0.6 })));
  headG.add(new THREE.Mesh(G.mouth, mat(new THREE.Color(mz).multiplyScalar(0.5).getHex(), { roughness: 0.6 })));
  if (!MANE_MAP) MANE_MAP = maneTex();
  const mane = new THREE.Mesh(G.mane, new THREE.MeshStandardMaterial({ color: coat.mane, map: MANE_MAP, alphaTest: 0.35, side: THREE.DoubleSide, roughness: 0.7 })); neckP.add(mane);
  headG.add(new THREE.Mesh(G.fore, mat(coat.mane, { roughness: 0.75 })));
  // 頭絡（茶色の革）と額革・鼻革の色
  const leather = mat(0x4a2c18, { roughness: 0.45 });
  const accent = [0xf0efe8, 0xf2c200, 0xe02828, 0x1d4ed8, 0x4a2c18][opts.bridle ?? Math.floor(Math.random() * 5)];
  headG.add(new THREE.Mesh(G.bridle, leather));
  headG.add(new THREE.Mesh(G.browband, mat(accent, { roughness: 0.4 })));
  const roll = opts.roll ?? Math.random() < 0.14;
  headG.add(new THREE.Mesh(G.noseband, roll ? mat(0xf4f1ea, { roughness: 0.9 }) : leather));
  if (roll) headG.add(new THREE.Mesh(G.shadowRoll, mat(0xf7f5ef, { roughness: 0.95 })));
  // 覆面（メンコ）
  if (hoodC != null) {
    const hm = new THREE.MeshStandardMaterial({ color: hoodC, roughness: 0.55, side: THREE.DoubleSide, alphaMap: hoodHoles(), alphaTest: 0.5 });
    headG.add(new THREE.Mesh(G.hood, hm)); headG.add(new THREE.Mesh(G.earCover, hm));
    if (opts.cups ?? Math.random() < 0.6) { headG.add(new THREE.Mesh(G.cups, hm)); headG.add(new THREE.Mesh(G.cupRim, mat(opts.cupC ?? (hoodC === 0xffffff ? 0x1d4ed8 : 0xffffff), { roughness: 0.5 }))); }
  }
  // 脚：ひざ・飛節から下が脚の色（鹿毛は黒い）
  const legs = [];
  const socks = opts.socks ?? Math.floor(Math.random() * 16);
  const white = mat(0xf4f1ea, { roughness: 0.6 });
  const mk = (x, y, z, front, off, bitN) => {
    const hip = new THREE.Group(); hip.position.set(x, y, z); bodyG.add(hip);
    hip.add(new THREE.Mesh(front ? G.upperF : G.upperH, coatMat));
    const knee = new THREE.Group(); knee.position.y = front ? -0.48 : -0.56; hip.add(knee);
    knee.add(new THREE.Mesh(front ? G.lowerF : G.lowerH, legMat));
    if (socks & bitN) knee.add(new THREE.Mesh(G.sock, white));
    const fet = new THREE.Group(); fet.position.y = front ? -0.39 : -0.45; knee.add(fet);
    fet.add(new THREE.Mesh(G.pastF, (socks & bitN) ? white : legMat));
    fet.add(new THREE.Mesh(G.hoof, hoofMat));
    legs.push({ hip, knee, fet, front, off });
  };
  mk(0.62, 1.12, 0.17, true, 0.5, 1);
  mk(0.62, 1.12, -0.17, true, 0.62, 2);
  mk(-0.66, 1.2, 0.17, false, 0.0, 4);
  mk(-0.66, 1.2, -0.17, false, 0.1, 8);
  // しっぽ
  const tailP = new THREE.Group(); tailP.position.set(-0.86, 1.5, 0); bodyG.add(tailP);
  tailP.add(new THREE.Mesh(G.tail, new THREE.MeshStandardMaterial({ color: coat.mane, map: MANE_MAP, alphaTest: 0.3, side: THREE.DoubleSide, roughness: 0.7 })));
  // 騎手
  const J = jockeyGeos();
  const jock = new THREE.Group(); jock.position.set(0.02, JOCK_Y, 0); jock.scale.setScalar(1.28); bodyG.add(jock);
  const silk = silkMat(silkColor, opts.pat ?? ((num || 0) * 5 + 3) % 7);
  const torso = new THREE.Mesh(J.torso, silk); jock.add(torso);
  const helmet = new THREE.Mesh(J.helmet, opts.cap != null ? mat(new THREE.Color(opts.cap).getHex(), { roughness: 0.3 }) : silk); jock.add(helmet);
  const face = new THREE.Mesh(J.face, mat(0xe8b48c, { roughness: 0.7 })); jock.add(face);
  const gog = new THREE.Mesh(J.goggles, mat(0x0c0e12, { roughness: 0.08, metalness: 0.5 })); jock.add(gog);
  if (J.gogBand) jock.add(new THREE.Mesh(J.gogBand, mat(0x16181c, { roughness: 0.5 })));
  jock.add(new THREE.Mesh(J.smile, mat(0x9a4a3a)));
  if (J.nose) jock.add(new THREE.Mesh(J.nose, mat(0xdea47c, { roughness: 0.7 })));
  const pants = new THREE.Mesh(J.pants, mat(0xf4f4f0, { roughness: 0.6 })); jock.add(pants);
  const boots = new THREE.Mesh(J.boots, mat(0x111111, { roughness: 0.25 })); jock.add(boots);
  jock.add(new THREE.Mesh(J.cuff, mat(0xb07a45, { roughness: 0.5 })));
  const arms = new THREE.Mesh(J.arms, silk); jock.add(arms);
  const gloves = new THREE.Mesh(J.gloves, mat(0xf2f2f2, { roughness: 0.7 })); jock.add(gloves);
  root.traverse(o => { if (o.isMesh) { o.castShadow = !!opts.shadow; } });
  const H = { root, bodyG, neckP, mane, legs, tailP, jock, torso, helmet, face, pants, boots, arms, silk, gog, gloves, bit: G.bit.clone().multiply(HEAD_K).applyAxisAngle(V(0, 0, 1), G.beta).multiplyScalar(HEAD_S).add(G.E), headG, headO, phase: 0, coatMat, coatBase: coatMat.color.clone() };
  return H;
}
// 覆面の目の穴（アルファマップ）
let HOOD_A = null;
function hoodHoles() {
  if (HOOD_A) return HOOD_A;
  const xs = HSEC.filter(s => s[0] <= 0.5).map(s => s[0]);
  let u = 0; for (let i = 0; i < xs.length - 1; i++) if (EYE_X <= xs[i + 1]) { u = (i + (EYE_X - xs[i]) / (xs[i + 1] - xs[i])) / (xs.length - 1); break; }
  const c = document.createElement('canvas'); c.width = 256; c.height = 256; const x = c.getContext('2d');
  x.fillStyle = '#fff'; x.fillRect(0, 0, 256, 256); x.fillStyle = '#000';
  for (const v of [EYE_TH / (Math.PI * 2), (Math.PI - EYE_TH) / (Math.PI * 2)]) { x.beginPath(); x.ellipse(u * 256, (1 - v) * 256, 0.085 * 256, 0.06 * 256, 0, 0, Math.PI * 2); x.fill(); }
  HOOD_A = new THREE.CanvasTexture(c);
  return HOOD_A;
}
// 頭のロフトの x → テクスチャのu
function headU(x) { const xs = HSEC.map(s => s[0]); for (let i = 0; i < xs.length - 1; i++) if (x <= xs[i + 1]) return (i + Math.max(0, (x - xs[i]) / (xs[i + 1] - xs[i]))) / (xs.length - 1); return 1; }
// 走りのアニメーション（leap：ゲートを飛び出すときの伸び上がり 0〜1）
export function animateHorse(H, stride, v, t, leap = 0) {
  // 歩幅は速さで変わるが、脚の回転（ピッチ）は毎秒2回強を保つ
  const strideLen = Math.max(1.1, Math.min(4.2 + v * 0.16, v / 2.1));
  if (H._s == null) H._s = stride, H._ph = (stride / strideLen) * Math.PI * 2;
  const ds = stride - H._s; H._s = stride;
  if (ds > 0 && ds < 5) H._ph += (ds / strideLen) * Math.PI * 2; else if (ds !== 0) H._ph = (stride / strideLen) * Math.PI * 2;
  const ph = H._ph;
  const amp = v < 0.2 ? 0 : Math.min(1, 0.45 + v / 10);
  const lp = leap;
  for (const L of H.legs) {
    const p = ph + L.off * Math.PI * 2;
    const sw = Math.sin(p), cs = Math.cos(p);
    if (L.front) {
      // 飛び出し：片方の前脚を前へ伸ばし、もう片方は高くたたむ
      L.hip.rotation.z = (0.62 * sw + 0.05) * amp * (1 + 0.55 * lp) + lp * 0.42;
      L.knee.rotation.z = -1.5 * Math.max(0, cs) * amp * (1 + 0.35 * lp) - lp * 0.2;
      L.fet.rotation.z = (Math.max(0, cs) * 0.9 - Math.max(0, -sw) * 0.5) * amp + lp * 0.25; // 着地で沈み、振り出しで巻き込む
    } else {
      L.hip.rotation.z = (0.5 * sw - 0.12) * amp - lp * 0.38;
      L.knee.rotation.z = (0.9 * Math.max(0, Math.cos(p + 0.4)) - 0.25) * amp - lp * 0.1;
      L.fet.rotation.z = (-Math.max(0, cs) * 0.7 + Math.max(0, -sw) * 0.4) * amp;
    }
  }
  H.bodyG.position.y = 0.06 * Math.sin(ph * 1) * amp + lp * 0.16;
  H.bodyG.rotation.z = 0.035 * Math.sin(ph + 1.2) * amp + lp * 0.17;
  H.neckP.rotation.z = (0.08 * Math.sin(ph + 2.4) - 0.04) * amp + lp * 0.06;
  H.tailP.rotation.z = -0.5 - 0.75 * amp + 0.1 * Math.sin(ph * 2);
  H.tailP.rotation.x = 0.08 * Math.sin(t * 9);
  // 騎手は上下動を吸収
  H.jock.position.y = JOCK_Y - H.bodyG.position.y * 0.7;
  H.jock.rotation.z = -H.bodyG.rotation.z * 0.8;
  H.mane.rotation.z = 0.04 * Math.sin(t * 22) * amp;
  H.mane.position.y = 0.01 * Math.sin(t * 17);
  return ph;
}
