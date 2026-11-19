// ===== 馬と騎手の3Dモデル（プログラムで組み立て） =====
import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { coatTex, clothTex, maneTex } from './textures.js';

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
function loft(secs, N = 18) {
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
  for (const [i, flip] of [[0, true], [M - 1, false]]) {
    const ci = pos.length / 3; const c = secs[i].c; pos.push(c.x, c.y, c.z); uv.push(i / (M - 1), 0.5);
    for (let j = 0; j < N; j++) { const a = i * (N + 1) + j; if (flip) idx.push(ci, a + 1, a); else idx.push(ci, a, a + 1); }
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); geo.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  geo.setIndex(idx); geo.computeVertexNormals();
  return geo;
}
const sec = (x, y, rT, rB, rz, z = 0) => ({ c: V(x, y, z), rT, rB, rz });
const LEGK = 1.42; // 脚を太めに（かわいい体形）
function legLoft(rows) { return loft(rows.map(([y, f, b, w, x = 0]) => ({ c: V(x, y, 0), rT: f * LEGK, rB: b * LEGK, rz: w * LEGK })), 14); }

const geoCache = {};
const NI = (x) => x.index ? x.toNonIndexed() : x;
function horseGeos() {
  if (geoCache.h) return geoCache.h;
  // 胴体：き甲・胸・肋・腹・トモを重ねて筋肉の起伏を出す
  const body = loft([
    sec(1.0, 1.2, 0.12, 0.12, 0.1), sec(0.92, 1.22, 0.3, 0.3, 0.26), sec(0.78, 1.25, 0.4, 0.44, 0.33),
    sec(0.55, 1.3, 0.46, 0.47, 0.37), sec(0.3, 1.31, 0.44, 0.47, 0.4), sec(0.02, 1.31, 0.42, 0.44, 0.41),
    sec(-0.28, 1.33, 0.41, 0.36, 0.39), sec(-0.52, 1.36, 0.43, 0.38, 0.38), sec(-0.76, 1.35, 0.4, 0.38, 0.34),
    sec(-0.93, 1.31, 0.3, 0.3, 0.25), sec(-1.02, 1.28, 0.12, 0.14, 0.1),
  ], 24);
  body.scale(0.94, 1.1, 1.22);
  // 首と頭（首の付け根が原点）
  const alpha = 0.5, beta = -0.82;
  const E = V(Math.cos(alpha) * 0.95, Math.sin(alpha) * 0.95, 0);
  const hd = (t) => E.clone().add(V(Math.cos(beta) * t, Math.sin(beta) * t, 0));
  const na = (t, rT, rB, rz) => ({ c: V(Math.cos(alpha) * t - 0.05, Math.sin(alpha) * t - 0.02, 0), rT, rB, rz });
  const neckG = loft([na(-0.16, 0.36, 0.42, 0.31), na(0.05, 0.33, 0.37, 0.27), na(0.35, 0.26, 0.28, 0.2), na(0.65, 0.2, 0.21, 0.155), na(0.92, 0.17, 0.18, 0.13)], 20);
  const hs = (t, rT, rB, rz) => ({ c: hd(t), rT, rB, rz });
  const headG = loft([hs(-0.08, 0.15, 0.16, 0.12), hs(0.08, 0.14, 0.21, 0.13), hs(0.22, 0.115, 0.13, 0.105), hs(0.4, 0.092, 0.095, 0.085), hs(0.55, 0.088, 0.09, 0.083), hs(0.63, 0.06, 0.06, 0.06)], 20);
  const neck = neckG;
  const rel = (geo) => { geo.translate(-E.x, -E.y, -E.z); geo.rotateZ(-beta); return geo; }; // 頭のグループ基準に（頭の向きをx軸に）
  const head = rel(headG.clone());
  // 頭の形：鼻先を少し丸く大きく、口元は少し濃い色
  const muzzle = rel(mergeGeometries([g(new THREE.SphereGeometry(0.105, 16, 12), hd(0.56), 0, V(1.05, 0.95, 0.9))].map(NI)));
  // まんまるの目（白目・黒目・光）
  const eyeAt = (side) => hd(0.1).add(V(Math.cos(beta + Math.PI / 2) * 0.07, Math.sin(beta + Math.PI / 2) * 0.07, side * 0.1));
  const eyeW = rel(mergeGeometries([1, -1].map(sd => NI(g(new THREE.SphereGeometry(0.066, 16, 12), eyeAt(sd), 0, V(1, 1.1, 0.62))))));
  const eyeB = rel(mergeGeometries([1, -1].map(sd => NI(g(new THREE.SphereGeometry(0.046, 12, 10), eyeAt(sd).add(V(0.02, -0.004, sd * 0.024)), 0, V(1, 1.15, 0.62))))));
  const eyeH = rel(mergeGeometries([1, -1].map(sd => NI(g(new THREE.SphereGeometry(0.014, 6, 5), eyeAt(sd).add(V(0.04, 0.024, sd * 0.042)))))));
  // 覆面（メンコ）：頭の上半分を包む布と、目のまわりのカップ
  const hood = rel(mergeGeometries([
    NI(loft([hs(-0.12, 0.16, 0.175, 0.13), hs(0.06, 0.15, 0.22, 0.138), hs(0.22, 0.123, 0.14, 0.113), hs(0.34, 0.1, 0.105, 0.094)], 20)),
    ...[1, -1].map(sd => NI(g(new THREE.TorusGeometry(0.074, 0.022, 8, 18), eyeAt(sd).add(V(0, 0, sd * 0.004)), 0, V(1, 1.08, 1), 0, sd * 0.35))),
  ]));
  const ears = rel(mergeGeometries([
    g(new THREE.ConeGeometry(0.045, 0.17, 10), E.clone().add(V(-0.04, 0.17, 0.07)), -0.25, V(1, 1, 0.75), 0.18),
    g(new THREE.ConeGeometry(0.045, 0.17, 10), E.clone().add(V(-0.04, 0.17, -0.07)), -0.25, V(1, 1, 0.75), -0.18),
  ].map(NI)));
  // たてがみ：首すじに沿って垂れる毛の帯（毛すじの画像を貼る）
  const mp = [], mu = [], mi = [];
  const NM = 16;
  for (let i = 0; i <= NM; i++) {
    const t = 0.02 + (i / NM) * 0.9;
    const cx = Math.cos(alpha) * t - Math.sin(alpha) * (0.24 - t * 0.09), cy = Math.sin(alpha) * t + Math.cos(alpha) * (0.24 - t * 0.09);
    const len = 0.2 + Math.sin(i / NM * Math.PI) * 0.06;
    // 上の端（首すじ）と下の端（右側に垂れる）
    mp.push(cx, cy + 0.015, 0.0, cx + 0.03, cy - len * 0.9, 0.17 - t * 0.035);
    mu.push(i / NM, 0, i / NM, 1);
  }
  for (let i = 0; i < NM; i++) { const a0 = i * 2; mi.push(a0, a0 + 1, a0 + 2, a0 + 1, a0 + 3, a0 + 2); }
  const maneG = new THREE.BufferGeometry();
  maneG.setAttribute('position', new THREE.Float32BufferAttribute(mp, 3)); maneG.setAttribute('uv', new THREE.Float32BufferAttribute(mu, 2)); maneG.setIndex(mi); maneG.computeVertexNormals();
  const forelock = g(new THREE.PlaneGeometry(0.14, 0.16), E.clone().add(V(0.02, 0.12, 0)), 0.5, null, 0, Math.PI / 2);
  const tufts = [];
  for (let i = 0; i < 9; i++) {
    const t = 0.0 + i * 0.105;
    const cx = Math.cos(alpha) * t - Math.sin(alpha) * (0.3 - t * 0.12) - 0.04, cy = Math.sin(alpha) * t + Math.cos(alpha) * (0.3 - t * 0.12);
    const c = new THREE.ConeGeometry(0.075 - i * 0.003, 0.2, 7); c.rotateZ(0.9 - alpha * 0.3); c.scale(1, 1, 0.7); c.translate(cx - 0.02, cy + 0.03, 0.02 * ((i % 2) * 2 - 1));
    tufts.push(NI(c));
  }
  const mane = mergeGeometries([NI(maneG), ...tufts]);
  const ft = [-1, 0, 1].map(k => { const c = new THREE.ConeGeometry(0.05, 0.16, 7); c.rotateZ(-1.2 + k * 0.15); c.translate(E.x + 0.07, E.y + 0.11, k * 0.04); return NI(c); });
  const fore = rel(mergeGeometries([NI(forelock), ...ft]));
  const eyes = rel(mergeGeometries([
    g(new THREE.SphereGeometry(0.024, 6, 5), hd(0.62).add(V(0.03, -0.02, 0.055))),  // 鼻の穴
    g(new THREE.SphereGeometry(0.024, 6, 5), hd(0.62).add(V(0.03, -0.02, -0.055))),
  ].map(NI)));
  // 流星（顔の前面＝頭のローカル+y側に沿って貼る）
  const blaze = (() => { const pl = new THREE.PlaneGeometry(0.46, 0.08); pl.rotateX(-Math.PI / 2); const pa = pl.attributes.position; for (let i = 0; i < pa.count; i++) { const x = pa.getX(i); pa.setY(i, 0.124 - x * 0.12); pa.setZ(i, pa.getZ(i) * (1 - Math.abs(x) * 0.8)); } pl.translate(0.26, 0, 0); return pl; })();
  const bit = hd(0.5).sub(E).applyAxisAngle(V(0, 0, 1), -beta);
  const ring = (t, r, sc) => { const tg = new THREE.TorusGeometry(r, 0.012, 6, 18); tg.rotateY(Math.PI / 2); tg.scale(1, sc, 1); tg.rotateZ(beta); const p = hd(t); tg.translate(p.x, p.y, p.z); return NI(tg); };
  const bridle = rel(mergeGeometries([ring(0.44, 0.1, 1.05), ring(-0.07, 0.128, 1.25),
    g(new THREE.TorusGeometry(0.13, 0.014, 6, 16, Math.PI), E.clone().add(V(0.0, 0.07, 0)), Math.PI / 2 - 0.2, V(1, 1, 1.05), 0, Math.PI / 2).toNonIndexed()]));
  // 脚：上・管・つなぎ（球節で曲がる）
  const upperF = legLoft([[0.04, 0.12, 0.11, 0.1], [-0.12, 0.11, 0.1, 0.085], [-0.3, 0.07, 0.072, 0.06], [-0.43, 0.052, 0.06, 0.05], [-0.48, 0.065, 0.07, 0.064], [-0.53, 0.05, 0.05, 0.048]]);
  const lowerF = legLoft([[0.02, 0.05, 0.05, 0.045], [-0.15, 0.036, 0.052, 0.035], [-0.32, 0.038, 0.05, 0.038], [-0.39, 0.058, 0.068, 0.056], [-0.43, 0.04, 0.045, 0.04]]);
  const pastF = mergeGeometries([g(new THREE.CylinderGeometry(0.05, 0.055, 0.13, 10), V(0.02, -0.06, 0), 0.25)].map(NI));
  const hoof = g(new THREE.CylinderGeometry(0.068, 0.088, 0.1, 12), V(0.03, -0.16, 0));
  const upperH = legLoft([[0.06, 0.17, 0.2, 0.13], [-0.16, 0.13, 0.16, 0.105], [-0.38, 0.075, 0.09, 0.065], [-0.53, 0.06, 0.1, 0.06, -0.01], [-0.6, 0.05, 0.06, 0.05]]);
  const lowerH = legLoft([[0.02, 0.05, 0.055, 0.045], [-0.18, 0.038, 0.054, 0.036], [-0.37, 0.04, 0.052, 0.04], [-0.44, 0.06, 0.07, 0.057], [-0.48, 0.042, 0.046, 0.042]]);
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
  geoCache.h = { beta, body, neck, head, muzzle, eyeW, eyeB, eyeH, hood, fore, E, ears, mane, eyes, blaze, bridle, upperF, lowerF, pastF, hoof, upperH, lowerH, sock, tail, saddle, bit, alpha };
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
    capX(0.15, 0.3, V(0.24, 0.45, 0), -0.14, V(1, 1, 1.22)),
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
  geoCache.j = { torso, helmet, face, goggles, pants, boots, cuff, arms, gloves };
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
  const coatMat = new THREE.MeshStandardMaterial({ color: coat.body, roughness: 0.32, metalness: 0.04, map: COAT_MAP });
  const maneMat = mat(coat.mane, { roughness: 0.8 });
  const legMat = new THREE.MeshStandardMaterial({ color: coat.leg, roughness: 0.5, map: COAT_MAP });
  const hoofMat = mat(0x1a1a1a, { roughness: 0.4 });
  const body = new THREE.Mesh(G.body, coatMat); bodyG.add(body);
  const saddle = new THREE.Mesh(G.saddle, mat(0x2a1a10, { roughness: 0.5 })); bodyG.add(saddle);
  // ゼッケン
  const ct = clothTex(num, '#ffffff');
  const clothMat = new THREE.MeshStandardMaterial({ map: ct, roughness: 0.8, side: THREE.DoubleSide });
  for (const s of [1, -1]) {
    const pl = new THREE.Mesh(new THREE.PlaneGeometry(0.62, 0.42), clothMat);
    pl.position.set(0.02, 1.5, s * 0.36); if (s < 0) pl.rotation.y = Math.PI;
    bodyG.add(pl);
  }
  // 首
  const neckP = new THREE.Group(); neckP.position.set(0.58, 1.42, 0); bodyG.add(neckP);
  const neck = new THREE.Mesh(G.neck, coatMat); neckP.add(neck);
  // 頭（少し大きめ・かわいい顔）
  // 頭：短く・幅広く（頭の向きに沿って縮め、横と縦に広げる）
  const headO = new THREE.Group(); headO.position.copy(G.E); headO.scale.setScalar(1.42); neckP.add(headO);
  const headR = new THREE.Group(); headR.rotation.z = G.beta; headO.add(headR);
  const headG = new THREE.Group(); headG.scale.set(0.8, 1.14, 1.16); headR.add(headG);
  headG.add(new THREE.Mesh(G.head, coatMat));
  const mz = new THREE.Color(coat.body).multiplyScalar(coat.name === '芦毛' ? 0.55 : 0.62);
  headG.add(new THREE.Mesh(G.muzzle, new THREE.MeshStandardMaterial({ color: mz, roughness: 0.4, map: COAT_MAP })));
  headG.add(new THREE.Mesh(G.ears, coatMat));
  headG.add(new THREE.Mesh(G.eyeW, mat(0xffffff, { roughness: 0.15 })));
  headG.add(new THREE.Mesh(G.eyeB, mat(0x0a0604, { roughness: 0.08 })));
  headG.add(new THREE.Mesh(G.eyeH, new THREE.MeshBasicMaterial({ color: 0xffffff })));
  const hoodC = opts.hood ?? (Math.random() < 0.3 ? [0x1d6bff, 0x18a84a, 0xe02828, 0xf2c200, 0xf97316, 0x7c3aed, 0xffffff][Math.floor(Math.random() * 7)] : null);
  if (hoodC != null) headG.add(new THREE.Mesh(G.hood, mat(hoodC, { roughness: 0.55 })));
  if (!MANE_MAP) MANE_MAP = maneTex();
  const mane = new THREE.Mesh(G.mane, new THREE.MeshStandardMaterial({ color: coat.mane, map: MANE_MAP, alphaTest: 0.35, side: THREE.DoubleSide, roughness: 0.7 })); neckP.add(mane);
  headG.add(new THREE.Mesh(G.eyes, mat(0x050505, { roughness: 0.2 })));
  headG.add(new THREE.Mesh(G.fore, new THREE.MeshStandardMaterial({ color: coat.mane, map: MANE_MAP, alphaTest: 0.35, side: THREE.DoubleSide, roughness: 0.7 })));
  // 脚
  const legs = [];
  const socks = opts.socks ?? Math.floor(Math.random() * 16);
  const white = mat(0xf4f1ea, { roughness: 0.6 });
  const mk = (x, y, z, front, off, bitN) => {
    const hip = new THREE.Group(); hip.position.set(x, y, z); bodyG.add(hip);
    hip.add(new THREE.Mesh(front ? G.upperF : G.upperH, legMat));
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
  if (opts.blaze ?? Math.random() < 0.35) headG.add(new THREE.Mesh(G.blaze, new THREE.MeshStandardMaterial({ color: 0xf4f1ea, roughness: 0.6, side: THREE.DoubleSide })));
  // しっぽ
  const tailP = new THREE.Group(); tailP.position.set(-1.08, 1.45, 0); bodyG.add(tailP);
  tailP.add(new THREE.Mesh(G.tail, new THREE.MeshStandardMaterial({ color: coat.mane, map: MANE_MAP, alphaTest: 0.3, side: THREE.DoubleSide, roughness: 0.7 })));
  // 騎手
  const J = jockeyGeos();
  const jock = new THREE.Group(); jock.position.set(0.05, 1.68, 0); bodyG.add(jock);
  const silk = silkMat(silkColor, opts.pat ?? ((num || 0) * 5 + 3) % 7);
  const torso = new THREE.Mesh(J.torso, silk); jock.add(torso);
  const helmet = new THREE.Mesh(J.helmet, opts.cap ? mat(new THREE.Color(opts.cap).getHex(), { roughness: 0.25 }) : silk); jock.add(helmet);
  const face = new THREE.Mesh(J.face, mat(0xd9a982, { roughness: 0.7 })); jock.add(face);
  const gog = new THREE.Mesh(J.goggles, mat(0x101418, { roughness: 0.1, metalness: 0.6 })); jock.add(gog);
  const pants = new THREE.Mesh(J.pants, mat(0xf4f4f0, { roughness: 0.6 })); jock.add(pants);
  const boots = new THREE.Mesh(J.boots, mat(0x111111, { roughness: 0.25 })); jock.add(boots);
  jock.add(new THREE.Mesh(J.cuff, mat(0xb07a45, { roughness: 0.5 })));
  const arms = new THREE.Mesh(J.arms, silk); jock.add(arms);
  const gloves = new THREE.Mesh(J.gloves, mat(0xf2f2f2, { roughness: 0.7 })); jock.add(gloves);
  // 頭絡（白い鼻革・額革）と手綱の付け根
  const bri = mat([0xf0efe8, 0xf2c200, 0xe02828, 0x1d4ed8, 0x5a3a20][Math.floor(Math.random() * 5)], { roughness: 0.45 });
  headG.add(new THREE.Mesh(G.bridle, bri));
  root.traverse(o => { if (o.isMesh) { o.castShadow = !!opts.shadow; } });
  const H = { root, bodyG, neckP, mane, legs, tailP, jock, torso, helmet, face, pants, boots, arms, silk, gog, gloves, bit: G.bit.clone().multiply(V(0.8, 1.14, 1.16)).applyAxisAngle(V(0, 0, 1), G.beta).multiplyScalar(1.42).add(G.E), headG, phase: 0, coatMat, coatBase: coatMat.color.clone() };
  return H;
}

// 走りのアニメーション
export function animateHorse(H, stride, v, t) {
  const strideLen = 4.2 + v * 0.16;
  const ph = (stride / strideLen) * Math.PI * 2;
  const amp = Math.min(1, v / 14);
  for (const L of H.legs) {
    const p = ph + L.off * Math.PI * 2;
    const sw = Math.sin(p), cs = Math.cos(p);
    if (L.front) {
      L.hip.rotation.z = (0.62 * sw + 0.05) * amp;
      L.knee.rotation.z = -1.5 * Math.max(0, cs) * amp;
      L.fet.rotation.z = (Math.max(0, cs) * 0.9 - Math.max(0, -sw) * 0.5) * amp; // 着地で沈み、振り出しで巻き込む
    } else {
      L.hip.rotation.z = (0.5 * sw - 0.12) * amp;
      L.knee.rotation.z = (0.9 * Math.max(0, Math.cos(p + 0.4)) - 0.25) * amp;
      L.fet.rotation.z = (-Math.max(0, cs) * 0.7 + Math.max(0, -sw) * 0.4) * amp;
    }
  }
  H.bodyG.position.y = 0.06 * Math.sin(ph * 1) * amp;
  H.bodyG.rotation.z = 0.035 * Math.sin(ph + 1.2) * amp;
  H.neckP.rotation.z = (0.1 * Math.sin(ph + 2.4) - 0.12) * amp;
  H.tailP.rotation.z = -0.5 - 0.75 * amp + 0.1 * Math.sin(ph * 2);
  H.tailP.rotation.x = 0.08 * Math.sin(t * 9);
  // 騎手は上下動を吸収
  H.jock.position.y = 1.68 - H.bodyG.position.y * 0.7;
  H.jock.rotation.z = -H.bodyG.rotation.z * 0.8;
  H.mane.rotation.z = 0.04 * Math.sin(t * 22) * amp;
  H.mane.position.y = 0.01 * Math.sin(t * 17);
  return ph;
}
