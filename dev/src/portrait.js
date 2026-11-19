// 馬の顔アイコン：レースと同じ3Dモデルで、顔のアップを描いて画像にする
import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { buildHorse } from './model.js';
import { COAT } from './data.js';

const SIZE = 256, RS = 512; // 2倍で描いて縮める（毛先のちらつきを抑える）
const PX = -0.04, PY = 0.15;
const cache = new Map();
let R = null;

function setup() {
  if (R) return R;
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = RS;
  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true, preserveDrawingBuffer: true });
  } catch (e) { R = { fail: true }; return R; }
  renderer.setSize(RS, RS, false);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 0.95;
  renderer.setClearColor(0x000000, 0);
  const scene = new THREE.Scene();
  const pm = new THREE.PMREMGenerator(renderer);
  scene.environment = pm.fromScene(new RoomEnvironment(), 0.04).texture;
  pm.dispose();
  scene.add(new THREE.HemisphereLight(0xfff4e0, 0x6a8a50, 0.9));
  const key = new THREE.DirectionalLight(0xfff1dc, 2.4); key.position.set(4, 6, 5); scene.add(key);
  const rim = new THREE.DirectionalLight(0xcfe6ff, 1.6); rim.position.set(-5, 3, -4); scene.add(rim);
  const fill = new THREE.DirectionalLight(0xffe0ec, 0.6); fill.position.set(2, -1, 4); scene.add(fill);
  const cam = new THREE.PerspectiveCamera(26, 1, 0.1, 50);
  const out = document.createElement('canvas');
  out.width = out.height = SIZE;
  R = { renderer, scene, cam, canvas, out, ctx: out.getContext('2d') };
  return R;
}

// 背景：やわらかい空と丘
function drawBg(ctx, coatHex) {
  const s = SIZE;
  const g = ctx.createLinearGradient(0, 0, 0, s);
  g.addColorStop(0, '#9fd8ff'); g.addColorStop(0.62, '#e4f6ff'); g.addColorStop(0.63, '#9ad86a'); g.addColorStop(1, '#5fae3c');
  ctx.fillStyle = g; ctx.fillRect(0, 0, s, s);
  const sun = ctx.createRadialGradient(s * 0.78, s * 0.2, 4, s * 0.78, s * 0.2, s * 0.42);
  sun.addColorStop(0, 'rgba(255,250,220,.95)'); sun.addColorStop(1, 'rgba(255,250,220,0)');
  ctx.fillStyle = sun; ctx.fillRect(0, 0, s, s);
  // 雲
  ctx.fillStyle = 'rgba(255,255,255,.85)';
  for (const [x, y, r] of [[0.66, 0.36, 0.05], [0.73, 0.33, 0.065], [0.8, 0.37, 0.045]]) { ctx.beginPath(); ctx.arc(x * s, y * s, r * s, 0, 7); ctx.fill(); }
  // 丘
  ctx.fillStyle = '#7cc653';
  ctx.beginPath(); ctx.moveTo(0, s * 0.66); ctx.quadraticCurveTo(s * 0.35, s * 0.55, s * 0.7, s * 0.64); ctx.quadraticCurveTo(s * 0.9, s * 0.69, s, s * 0.62); ctx.lineTo(s, s); ctx.lineTo(0, s); ctx.fill();
  // 毛色のふんわりした光
  const c = new THREE.Color(coatHex);
  const halo = ctx.createRadialGradient(s * 0.5, s * 0.55, s * 0.1, s * 0.5, s * 0.55, s * 0.55);
  halo.addColorStop(0, `rgba(${c.r * 255 | 0},${c.g * 255 | 0},${c.b * 255 | 0},.18)`); halo.addColorStop(1, 'rgba(0,0,0,0)');
  ctx.fillStyle = halo; ctx.fillRect(0, 0, s, s);
}

export function horsePortrait(coatIdx, name) {
  const ci = COAT[coatIdx] ? coatIdx : 0;
  const k = ci + '|' + (name || '');
  if (cache.has(k)) return cache.get(k);
  const r = setup();
  if (r.fail) return null;
  const coat = COAT[ci];
  const H = buildHorse(coat, 0xffffff, 0, { seed: name ? name + '|' + ci : null });
  H.jock.visible = false;
  // 少しだけ首を上げて、こちらを向いたポーズ
  H.neckP.rotation.z = 0.12;
  H.neckP.rotation.y = 0.1;
  r.scene.add(H.root);
  H.root.updateMatrixWorld(true);
  const box = new THREE.Box3().setFromObject(H.headG.children[0]);
  const tgt = box.getCenter(new THREE.Vector3());
  const size = box.getSize(new THREE.Vector3()).length();
  // 斜め前・少し上から（目と顔の形が一番かわいく見える角度）
  const dir = new THREE.Vector3(0.85, 0.16, 0.72).normalize();
  r.cam.position.copy(tgt).addScaledVector(dir, size * 1.85);
  r.cam.lookAt(tgt);
  // 画面の中で顔がまん中に来るように、カメラごと平行にずらす
  r.cam.updateMatrixWorld();
  const right = new THREE.Vector3().setFromMatrixColumn(r.cam.matrixWorld, 0);
  const up = new THREE.Vector3().setFromMatrixColumn(r.cam.matrixWorld, 1);
  const sh = right.multiplyScalar(size * PX).add(up.multiplyScalar(size * PY));
  r.cam.position.add(sh);
  r.renderer.render(r.scene, r.cam);
  r.scene.remove(H.root);
  drawBg(r.ctx, coat.body);
  r.ctx.imageSmoothingQuality = 'high';
  r.ctx.drawImage(r.canvas, 0, 0, SIZE, SIZE);
  const url = r.out.toDataURL('image/webp', 0.9);
  cache.set(k, url);
  return url;
}

// UIに入れる顔アイコン（まだ描いていなければ後から差し込む）
export function horseFace(coatIdx, name, cls = '') {
  const c = COAT[coatIdx] ? COAT[coatIdx].body : 0x8b5a2b;
  const k = (COAT[coatIdx] ? coatIdx : 0) + '|' + (name || '');
  const url = cache.get(k);
  const esc = s => String(s ?? '').replace(/[&<>"]/g, m => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[m]));
  return `<span class="face hp ${cls}" data-coat="${coatIdx ?? 0}" data-nm="${esc(name)}" style="--c:#${c.toString(16).padStart(6, '0')}">${url ? `<img src="${url}" alt="">` : '🐴'}</span>`;
}

// 画面に出たアイコンを1つずつ描いて差し込む
let busy = false;
function pump() {
  if (busy) return;
  const el = document.querySelector('.face.hp:not([data-done])');
  if (!el) return;
  busy = true;
  requestAnimationFrame(() => {
    el.dataset.done = '1';
    if (!el.querySelector('img')) {
      const url = horsePortrait(+el.dataset.coat, el.dataset.nm);
      if (url) { el.innerHTML = `<img src="${url}" alt="">`; }
    }
    busy = false;
    pump();
  });
}
export function initPortraits() {
  new MutationObserver(pump).observe(document.body, { childList: true, subtree: true });
  pump();
}
