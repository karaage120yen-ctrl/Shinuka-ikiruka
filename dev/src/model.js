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

const geoCache = {};
const NI = (x) => x.index ? x.toNonIndexed() : x;
function horseGeos() {
  if (geoCache.h) return geoCache.h;
  // 胴体：き甲・胸・肋・腹・トモを重ねて筋肉の起伏を出す
  const body = mergeGeometries([
    g(new THREE.CapsuleGeometry(0.39, 1.2, 8, 20), V(0, 1.27, 0), Math.PI / 2, V(1.06, 1, 0.8)),
    g(new THREE.SphereGeometry(0.46, 20, 14), V(0.64, 1.24, 0), 0, V(1, 1.04, 0.78)),
    g(new THREE.SphereGeometry(0.3, 14, 10), V(0.72, 1.05, 0.14), 0, V(0.8, 1, 0.7)),   // 肩
    g(new THREE.SphereGeometry(0.3, 14, 10), V(0.72, 1.05, -0.14), 0, V(0.8, 1, 0.7)),
    g(new THREE.SphereGeometry(0.48, 20, 14), V(-0.62, 1.3, 0), 0, V(1.02, 1, 0.86)),  // トモ
    g(new THREE.SphereGeometry(0.32, 14, 10), V(-0.72, 1.14, 0.17), 0, V(1, 1.1, 0.7)),
    g(new THREE.SphereGeometry(0.32, 14, 10), V(-0.72, 1.14, -0.17), 0, V(1, 1.1, 0.7)),
    g(new THREE.SphereGeometry(0.3, 14, 10), V(0.48, 1.52, 0), 0, V(1.25, 0.75, 0.66)), // き甲
    g(new THREE.SphereGeometry(0.36, 16, 10), V(0, 1.06, 0), 0, V(1.6, 0.6, 0.85)),    // 腹
  ].map(NI));
  // 首と頭（首の付け根が原点）
  const alpha = 0.42, beta = -1.05;
  const E = V(Math.cos(alpha) * 0.95, Math.sin(alpha) * 0.95, 0);
  const hd = (t) => E.clone().add(V(Math.cos(beta) * t, Math.sin(beta) * t, 0));
  const neck = mergeGeometries([
    cylDir(0.28, 0.15, 1.0, V(-0.05, -0.05, 0), alpha, 18),
    g(new THREE.SphereGeometry(0.2, 12, 8), V(Math.cos(alpha) * 0.35 - 0.03, Math.sin(alpha) * 0.35 + 0.1, 0), alpha, V(1.6, 0.7, 0.65)), // たてがみの下の盛り上がり
    g(new THREE.SphereGeometry(0.17, 14, 10), E.clone(), 0, V(1.05, 1, 0.82)),
    g(new THREE.SphereGeometry(0.15, 14, 10), hd(0.12).add(V(-0.03, 0, 0)), beta, V(1, 1.2, 0.95)), // ほお
    cylDir(0.14, 0.085, 0.56, E.clone().add(V(0.02, 0.02, 0)), beta, 14),
    g(new THREE.SphereGeometry(0.095, 10, 8), hd(0.58).add(V(0, 0.01, 0)), 0, V(1.15, 0.9, 0.95)), // 鼻先
  ].map(NI));
  const ears = mergeGeometries([
    g(new THREE.ConeGeometry(0.035, 0.16, 8), E.clone().add(V(-0.04, 0.17, 0.065)), -0.25, null, 0.15),
    g(new THREE.ConeGeometry(0.035, 0.16, 8), E.clone().add(V(-0.04, 0.17, -0.065)), -0.25, null, -0.15),
  ].map(NI));
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
  const mane = mergeGeometries([NI(maneG), NI(forelock)]);
  const eyes = mergeGeometries([
    g(new THREE.SphereGeometry(0.032, 8, 6), E.clone().add(V(0.1, -0.04, 0.115))),
    g(new THREE.SphereGeometry(0.032, 8, 6), E.clone().add(V(0.1, -0.04, -0.115))),
    g(new THREE.SphereGeometry(0.022, 6, 5), hd(0.6).add(V(0.04, -0.02, 0.06))),  // 鼻の穴
    g(new THREE.SphereGeometry(0.022, 6, 5), hd(0.6).add(V(0.04, -0.02, -0.06))),
  ].map(NI));
  const blaze = g(new THREE.PlaneGeometry(0.07, 0.5), hd(0.3).add(V(0.075 * Math.sin(-beta), 0.075 * Math.cos(beta) * 0 + 0.07, 0)), beta - Math.PI / 2, null, 0, Math.PI / 2);
  const bit = hd(0.5);
  const ring = (t, r, sc) => { const tg = new THREE.TorusGeometry(r, 0.012, 6, 18); tg.rotateY(Math.PI / 2); tg.scale(1, sc, 1); tg.rotateZ(beta); const p = hd(t); tg.translate(p.x, p.y, p.z); return NI(tg); };
  const bridle = mergeGeometries([ring(0.42, 0.105, 1.05), ring(0.06, 0.16, 1.1),
    g(new THREE.TorusGeometry(0.125, 0.012, 6, 16, Math.PI), E.clone().add(V(0.0, 0.07, 0)), Math.PI / 2 - 0.2, V(1, 1, 1.05), 0, Math.PI / 2).toNonIndexed()]);
  // 脚：上・管・つなぎ（球節で曲がる）
  const upperF = mergeGeometries([g(new THREE.CylinderGeometry(0.07, 0.115, 0.48, 10), V(0, -0.24, 0)), g(new THREE.SphereGeometry(0.075, 8, 6), V(0, -0.48, 0), 0, V(1, 1.1, 0.9))].map(NI));
  const lowerF = mergeGeometries([g(new THREE.CylinderGeometry(0.04, 0.05, 0.38, 8), V(0, -0.19, 0)), g(new THREE.SphereGeometry(0.058, 8, 6), V(0, -0.39, 0))].map(NI));
  const pastF = mergeGeometries([g(new THREE.CylinderGeometry(0.038, 0.042, 0.13, 8), V(0.02, -0.06, 0), 0.25)].map(NI));
  const hoof = g(new THREE.CylinderGeometry(0.055, 0.072, 0.09, 10), V(0.03, -0.155, 0));
  const upperH = mergeGeometries([g(new THREE.CylinderGeometry(0.08, 0.16, 0.56, 10), V(0, -0.28, 0)), g(new THREE.SphereGeometry(0.08, 8, 6), V(-0.02, -0.56, 0), 0, V(1.3, 1, 0.8))].map(NI));
  const lowerH = mergeGeometries([g(new THREE.CylinderGeometry(0.042, 0.055, 0.44, 8), V(0, -0.22, 0)), g(new THREE.SphereGeometry(0.06, 8, 6), V(0, -0.45, 0))].map(NI));
  const sock = g(new THREE.CylinderGeometry(0.047, 0.052, 0.2, 8), V(0, -0.33, 0));
  // しっぽ：付け根＋毛すじを貼った板を3枚交差させて、ふさふさに
  const tailParts = [g(new THREE.CylinderGeometry(0.075, 0.055, 0.28, 8), V(0, -0.13, 0))];
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
  geoCache.h = { body, neck, ears, mane, eyes, blaze, bridle, upperF, lowerF, pastF, hoof, upperH, lowerH, sock, tail, saddle, bit, alpha };
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
  const helmet = mergeGeometries([
    g(new THREE.SphereGeometry(0.128, 16, 10, 0, Math.PI * 2, 0, Math.PI * 0.58), V(0.57, 0.6, 0)),
    g(new THREE.CylinderGeometry(0.12, 0.13, 0.02, 16, 1, false, -Math.PI * 0.45, Math.PI * 0.9), V(0.6, 0.6, 0), 0, V(1.25, 1, 1)), // ひさし
  ].map(NI));
  const face = mergeGeometries([
    g(new THREE.SphereGeometry(0.1, 12, 10), V(0.6, 0.555, 0), 0, V(1, 1.05, 0.9)),
    seg(0.05, 0.05, V(0.5, 0.5, 0), V(0.56, 0.54, 0), 8), // 首
  ].map(NI));
  const goggles = mergeGeometries([
    g(new THREE.BoxGeometry(0.04, 0.05, 0.17), V(0.69, 0.57, 0)),
    g(new THREE.TorusGeometry(0.105, 0.012, 6, 20), V(0.6, 0.575, 0), 0, V(1, 0.35, 1.02), Math.PI / 2),
  ].map(NI));
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
  const coatMat = new THREE.MeshStandardMaterial({ color: coat.body, roughness: 0.42, metalness: 0.05, map: COAT_MAP });
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
  neckP.add(new THREE.Mesh(G.ears, coatMat));
  if (!MANE_MAP) MANE_MAP = maneTex();
  const mane = new THREE.Mesh(G.mane, new THREE.MeshStandardMaterial({ color: coat.mane, map: MANE_MAP, alphaTest: 0.35, side: THREE.DoubleSide, roughness: 0.7 })); neckP.add(mane);
  neckP.add(new THREE.Mesh(G.eyes, mat(0x050505, { roughness: 0.2 })));
  // 白いメンコ（覆面）や手綱の鼻革
  const nose = new THREE.Mesh(new THREE.TorusGeometry(0.11, 0.018, 6, 14), mat(0x111111));
  nose.position.copy(G.bit).add(V(-0.08, 0.1, 0)); nose.rotation.y = Math.PI / 2; nose.rotation.x = 0.6; neckP.add(nose);
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
  if (opts.blaze ?? Math.random() < 0.35) neckP.add(new THREE.Mesh(G.blaze, new THREE.MeshStandardMaterial({ color: 0xf4f1ea, roughness: 0.6, side: THREE.DoubleSide })));
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
  const bri = mat(0xf0efe8, { roughness: 0.5 });
  neckP.add(new THREE.Mesh(G.bridle, bri));
  root.traverse(o => { if (o.isMesh) { o.castShadow = !!opts.shadow; } });
  const H = { root, bodyG, neckP, mane, legs, tailP, jock, torso, helmet, face, pants, boots, arms, silk, gog, gloves, bit: G.bit.clone(), phase: 0, coatMat, coatBase: coatMat.color.clone() };
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
