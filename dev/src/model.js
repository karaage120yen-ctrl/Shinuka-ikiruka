// ===== 馬と騎手の3Dモデル（プログラムで組み立て） =====
import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { coatTex, clothTex } from './textures.js';

const V = (x, y, z) => new THREE.Vector3(x, y, z);
let COAT_MAP = null;

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
function horseGeos() {
  if (geoCache.h) return geoCache.h;
  const body = mergeGeometries([
    g(new THREE.CapsuleGeometry(0.4, 1.25, 6, 14), V(0, 1.27, 0), Math.PI / 2, V(1.06, 1, 0.82)),
    g(new THREE.SphereGeometry(0.45, 14, 10), V(0.62, 1.25, 0), 0, V(1, 1.02, 0.8)),
    g(new THREE.SphereGeometry(0.47, 14, 10), V(-0.64, 1.3, 0), 0, V(1, 1, 0.86)),
    g(new THREE.SphereGeometry(0.3, 10, 8), V(0.5, 1.5, 0), 0, V(1.2, 0.8, 0.7)), // き甲
  ].map(x => x.toNonIndexed ? x.toNonIndexed() : x));
  // 首と頭（首の付け根が原点）
  const alpha = 0.42, beta = -1.05;
  const E = V(Math.cos(alpha) * 0.95, Math.sin(alpha) * 0.95, 0);
  const neck = mergeGeometries([
    cylDir(0.27, 0.15, 1.0, V(-0.05, -0.05, 0), alpha, 12).toNonIndexed(),
    g(new THREE.SphereGeometry(0.17, 10, 8), E.clone(), 0, V(1, 1, 0.85)).toNonIndexed(),
    cylDir(0.15, 0.085, 0.58, E.clone().add(V(0.02, 0.02, 0)), beta, 10).toNonIndexed(),
    g(new THREE.SphereGeometry(0.09, 8, 6), E.clone().add(V(Math.cos(beta) * 0.58, Math.sin(beta) * 0.58 + 0.01, 0)), 0, V(1.1, 0.9, 0.9)).toNonIndexed(),
  ]);
  const ears = mergeGeometries([
    g(new THREE.ConeGeometry(0.035, 0.15, 6), E.clone().add(V(-0.04, 0.16, 0.07)), -0.25, null, 0.15).toNonIndexed(),
    g(new THREE.ConeGeometry(0.035, 0.15, 6), E.clone().add(V(-0.04, 0.16, -0.07)), -0.25, null, -0.15).toNonIndexed(),
  ]);
  const mane = g(new THREE.BoxGeometry(0.95, 0.07, 0.035), V(Math.cos(alpha) * 0.45 - Math.sin(alpha) * 0.17, Math.sin(alpha) * 0.45 + Math.cos(alpha) * 0.17, 0), alpha);
  const eyes = mergeGeometries([
    g(new THREE.SphereGeometry(0.03, 6, 5), E.clone().add(V(0.12, -0.05, 0.11))).toNonIndexed(),
    g(new THREE.SphereGeometry(0.03, 6, 5), E.clone().add(V(0.12, -0.05, -0.11))).toNonIndexed(),
  ]);
  const bit = E.clone().add(V(Math.cos(beta) * 0.5, Math.sin(beta) * 0.5, 0));
  const upperF = g(new THREE.CylinderGeometry(0.075, 0.11, 0.5, 8), V(0, -0.25, 0));
  const lowerF = mergeGeometries([
    g(new THREE.CylinderGeometry(0.042, 0.05, 0.46, 7), V(0, -0.23, 0)).toNonIndexed(),
    g(new THREE.SphereGeometry(0.06, 7, 5), V(0, -0.47, 0)).toNonIndexed(),
  ]);
  const hoof = g(new THREE.CylinderGeometry(0.055, 0.07, 0.09, 8), V(0.01, -0.03, 0));
  const upperH = g(new THREE.CylinderGeometry(0.08, 0.15, 0.58, 8), V(0, -0.29, 0));
  const lowerH = mergeGeometries([
    g(new THREE.CylinderGeometry(0.042, 0.055, 0.5, 7), V(0, -0.25, 0)).toNonIndexed(),
    g(new THREE.SphereGeometry(0.06, 7, 5), V(0, -0.5, 0)).toNonIndexed(),
  ]);
  const tail = mergeGeometries([
    g(new THREE.CylinderGeometry(0.09, 0.035, 0.8, 7), V(0, -0.4, 0)).toNonIndexed(),
  ]);
  const saddle = mergeGeometries([
    g(new THREE.BoxGeometry(0.5, 0.06, 0.42), V(0.1, 1.69, 0)).toNonIndexed(),
    g(new THREE.BoxGeometry(0.16, 0.08, 0.36), V(0.32, 1.72, 0)).toNonIndexed(),
  ]);
  geoCache.h = { body, neck, ears, mane, eyes, upperF, lowerF, hoof, upperH, lowerH, tail, saddle, bit, alpha };
  return geoCache.h;
}

function jockeyGeos() {
  if (geoCache.j) return geoCache.j;
  const torso = g(new THREE.BoxGeometry(0.5, 0.24, 0.34), V(0.24, 0.43, 0), -0.12);
  const helmet = mergeGeometries([
    g(new THREE.SphereGeometry(0.135, 12, 8, 0, Math.PI * 2, 0, Math.PI * 0.6), V(0.56, 0.6, 0)).toNonIndexed(),
  ]);
  const face = g(new THREE.SphereGeometry(0.105, 10, 8), V(0.6, 0.56, 0));
  const pants = mergeGeometries([
    cylDir(0.07, 0.06, 0.42, V(-0.02, 0.32, 0.17), -0.35).toNonIndexed(),
    cylDir(0.07, 0.06, 0.42, V(-0.02, 0.32, -0.17), -0.35).toNonIndexed(),
  ]);
  const boots = mergeGeometries([
    cylDir(0.055, 0.045, 0.42, V(0.37, 0.18, 0.2), -2.0).toNonIndexed(),
    cylDir(0.055, 0.045, 0.42, V(0.37, 0.18, -0.2), -2.0).toNonIndexed(),
  ]);
  const arms = mergeGeometries([
    cylDir(0.05, 0.045, 0.42, V(0.42, 0.48, 0.17), -0.85).toNonIndexed(),
    cylDir(0.05, 0.045, 0.42, V(0.42, 0.48, -0.17), -0.85).toNonIndexed(),
  ]);
  geoCache.j = { torso, helmet, face, pants, boots, arms };
  return geoCache.j;
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
  const mane = new THREE.Mesh(G.mane, maneMat); neckP.add(mane);
  neckP.add(new THREE.Mesh(G.eyes, mat(0x050505, { roughness: 0.2 })));
  // 白いメンコ（覆面）や手綱の鼻革
  const nose = new THREE.Mesh(new THREE.TorusGeometry(0.11, 0.018, 6, 14), mat(0x111111));
  nose.position.copy(G.bit).add(V(-0.08, 0.1, 0)); nose.rotation.y = Math.PI / 2; nose.rotation.x = 0.6; neckP.add(nose);
  // 脚
  const legs = [];
  const mk = (x, y, z, front, off) => {
    const hip = new THREE.Group(); hip.position.set(x, y, z); bodyG.add(hip);
    hip.add(new THREE.Mesh(front ? G.upperF : G.upperH, legMat));
    const knee = new THREE.Group(); knee.position.y = front ? -0.5 : -0.58; hip.add(knee);
    knee.add(new THREE.Mesh(front ? G.lowerF : G.lowerH, legMat));
    const hf = new THREE.Mesh(G.hoof, hoofMat); hf.position.y = front ? -0.5 : -0.52; knee.add(hf);
    legs.push({ hip, knee, front, off });
  };
  mk(0.62, 1.12, 0.17, true, 0.5);   // 左前（+zが右）
  mk(0.62, 1.12, -0.17, true, 0.62);
  mk(-0.66, 1.2, 0.17, false, 0.0);
  mk(-0.66, 1.2, -0.17, false, 0.1);
  // しっぽ
  const tailP = new THREE.Group(); tailP.position.set(-1.08, 1.45, 0); bodyG.add(tailP);
  tailP.add(new THREE.Mesh(G.tail, maneMat));
  // 騎手
  const J = jockeyGeos();
  const jock = new THREE.Group(); jock.position.set(0.05, 1.68, 0); bodyG.add(jock);
  const silk = mat(silkColor, { roughness: 0.35, metalness: 0.05 });
  const torso = new THREE.Mesh(J.torso, silk); jock.add(torso);
  const helmet = new THREE.Mesh(J.helmet, opts.cap ? mat(new THREE.Color(opts.cap).getHex(), { roughness: 0.3 }) : silk); jock.add(helmet);
  const face = new THREE.Mesh(J.face, mat(0xe2b48c)); jock.add(face);
  const pants = new THREE.Mesh(J.pants, mat(0xf2f2f2)); jock.add(pants);
  const boots = new THREE.Mesh(J.boots, mat(0x151515, { roughness: 0.3 })); jock.add(boots);
  const arms = new THREE.Mesh(J.arms, silk); jock.add(arms);

  root.traverse(o => { if (o.isMesh) { o.castShadow = !!opts.shadow; } });
  const H = { root, bodyG, neckP, mane, legs, tailP, jock, torso, helmet, face, pants, boots, arms, silk, bit: G.bit.clone(), phase: 0 };
  return H;
}

// 走りのアニメーション
export function animateHorse(H, stride, v, t) {
  const strideLen = 4.2 + v * 0.16;
  const ph = (stride / strideLen) * Math.PI * 2;
  const amp = Math.min(1, v / 14);
  for (const L of H.legs) {
    const p = ph + L.off * Math.PI * 2;
    if (L.front) {
      L.hip.rotation.z = (0.62 * Math.sin(p) + 0.05) * amp;
      L.knee.rotation.z = -1.5 * Math.max(0, Math.cos(p)) * amp;
    } else {
      L.hip.rotation.z = (0.5 * Math.sin(p) - 0.12) * amp;
      L.knee.rotation.z = (0.9 * Math.max(0, Math.cos(p + 0.4)) - 0.25) * amp;
    }
  }
  H.bodyG.position.y = 0.06 * Math.sin(ph * 1) * amp;
  H.bodyG.rotation.z = 0.035 * Math.sin(ph + 1.2) * amp;
  H.neckP.rotation.z = (0.1 * Math.sin(ph + 2.4) - 0.12) * amp;
  H.tailP.rotation.z = -1.1 - 0.4 * amp + 0.08 * Math.sin(ph * 2);
  H.tailP.rotation.x = 0.08 * Math.sin(t * 9);
  // 騎手は上下動を吸収
  H.jock.position.y = 1.68 - H.bodyG.position.y * 0.7;
  H.jock.rotation.z = -H.bodyG.rotation.z * 0.8;
  H.mane.scale.y = 1 + 0.25 * Math.sin(t * 22);
  return ph;
}
