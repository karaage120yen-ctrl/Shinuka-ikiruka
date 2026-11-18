// ===== 画像を使わずに作るテクスチャ =====
import * as THREE from 'three';

let MIRROR = false;
export function setMirror(v) { MIRROR = !!v; }
function canvas(w, h) { const c = document.createElement('canvas'); c.width = w; c.height = h; return c; }
function tex(c, rx = 1, ry = 1) {
  const t = new THREE.CanvasTexture(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(rx, ry);
  t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8;
  return t;
}
function noise(ctx, w, h, base, amp, n = 9000, size = 2) {
  for (let i = 0; i < n; i++) {
    const v = (Math.random() - 0.5) * amp;
    ctx.fillStyle = `rgb(${clampc(base[0] + v)},${clampc(base[1] + v * 1.1)},${clampc(base[2] + v * 0.6)})`;
    ctx.fillRect(Math.random() * w, Math.random() * h, size * (0.5 + Math.random()), size * (0.5 + Math.random()) * 2);
  }
}
const clampc = (v) => Math.max(0, Math.min(255, Math.round(v)));

// 競馬場の芝（市松模様の刈り目）
export function turfTex() {
  const c = canvas(512, 512), x = c.getContext('2d');
  const a = [66, 128, 44], b = [82, 146, 52];
  for (let i = 0; i < 2; i++) for (let j = 0; j < 2; j++) {
    const col = (i + j) % 2 ? a : b;
    x.fillStyle = `rgb(${col})`; x.fillRect(i * 256, j * 256, 256, 256);
  }
  noise(x, 512, 512, [74, 137, 48], 42, 26000, 1.6);
  // 刈り目の線
  x.globalAlpha = 0.08; x.fillStyle = '#d8ffb0';
  for (let i = 0; i < 512; i += 8) x.fillRect(0, i, 512, 1);
  x.globalAlpha = 1;
  return tex(c);
}
// ダート（砂）
export function dirtTex() {
  const c = canvas(512, 512), x = c.getContext('2d');
  x.fillStyle = 'rgb(150,112,74)'; x.fillRect(0, 0, 512, 512);
  noise(x, 512, 512, [150, 112, 74], 50, 30000, 1.4);
  x.globalAlpha = 0.12; x.strokeStyle = '#5a3c22';
  for (let i = 0; i < 40; i++) { x.beginPath(); const y = Math.random() * 512; x.moveTo(0, y); x.bezierCurveTo(170, y + 10, 340, y - 10, 512, y); x.stroke(); }
  x.globalAlpha = 1;
  return tex(c);
}
// 一般の草地
export function grassTex() {
  const c = canvas(256, 256), x = c.getContext('2d');
  x.fillStyle = 'rgb(76,124,46)'; x.fillRect(0, 0, 256, 256);
  noise(x, 256, 256, [76, 124, 46], 50, 9000, 1.5);
  return tex(c);
}
// スタンドの観客
export function crowdTex() {
  const c = canvas(512, 256), x = c.getContext('2d');
  x.fillStyle = '#3a3d44'; x.fillRect(0, 0, 512, 256);
  const cols = ['#e8e8e8', '#2b2b2b', '#c23b3b', '#3b6cc2', '#e0c040', '#6a4a3a', '#7aa05a', '#d88a4a', '#f0d0b0', '#4a4a7a'];
  for (let row = 0; row < 16; row++) {
    const y = row * 16;
    x.fillStyle = '#55585f'; x.fillRect(0, y + 13, 512, 3);
    for (let i = 0; i < 70; i++) {
      if (Math.random() < 0.12) continue;
      const px = i * 7.3 + Math.random() * 3;
      x.fillStyle = cols[Math.floor(Math.random() * cols.length)];
      x.fillRect(px, y + 6, 5, 8);
      x.fillStyle = ['#f1c9a5', '#d9a87e', '#2a1a10', '#111'][Math.floor(Math.random() * 4)];
      x.beginPath(); x.arc(px + 2.5, y + 4, 2.3, 0, Math.PI * 2); x.fill();
    }
  }
  return tex(c);
}
// ラチ沿いに立つ観客（透明背景）
export function standingCrowdTex() {
  const c = canvas(1024, 128), x = c.getContext('2d');
  const cols = ['#f0f0f0', '#222', '#b33', '#36b', '#dc4', '#654', '#7a5', '#d84', '#448', '#999'];
  for (let i = 0; i < 150; i++) {
    const px = Math.random() * 1024, h = 70 + Math.random() * 40, w = 12 + Math.random() * 6;
    x.fillStyle = cols[Math.floor(Math.random() * cols.length)];
    x.fillRect(px - w / 2, 128 - h + 18, w, h);
    x.fillStyle = ['#f1c9a5', '#d9a87e', '#c69a72'][Math.floor(Math.random() * 3)];
    x.beginPath(); x.arc(px, 128 - h + 10, 7, 0, Math.PI * 2); x.fill();
    x.fillStyle = ['#2a1a10', '#111', '#5a3a20'][Math.floor(Math.random() * 3)];
    x.beginPath(); x.arc(px, 128 - h + 7, 7, Math.PI, Math.PI * 2); x.fill();
  }
  const t = tex(c); return t;
}
// 建物の窓
export function buildingTex() {
  const c = canvas(256, 128), x = c.getContext('2d');
  x.fillStyle = '#d9dde2'; x.fillRect(0, 0, 256, 128);
  for (let r = 0; r < 4; r++) for (let i = 0; i < 16; i++) {
    x.fillStyle = Math.random() < 0.2 ? '#9fb7cf' : '#5f7a96';
    x.fillRect(i * 16 + 2, r * 32 + 6, 12, 20);
  }
  return tex(c);
}
// 文字の看板
export function textTex(text, opts = {}) {
  const w = opts.w || 512, h = opts.h || 128;
  const c = canvas(w, h), x = c.getContext('2d');
  if (MIRROR) { x.translate(w, 0); x.scale(-1, 1); }
  x.fillStyle = opts.bg || '#ffffff'; x.fillRect(0, 0, w, h);
  if (opts.border) { x.strokeStyle = opts.border; x.lineWidth = 10; x.strokeRect(5, 5, w - 10, h - 10); }
  x.fillStyle = opts.fg || '#111';
  x.font = `bold ${opts.size || Math.floor(h * 0.62)}px "Hiragino Sans","Noto Sans JP",sans-serif`;
  x.textAlign = 'center'; x.textBaseline = 'middle';
  const lines = String(text).split('\n');
  lines.forEach((ln, i) => x.fillText(ln, w / 2, h / 2 + (i - (lines.length - 1) / 2) * (opts.size || h * 0.62) * 1.15));
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4;
  return t;
}
// ゼッケン
export function clothTex(num, color) {
  const c = canvas(128, 96), x = c.getContext('2d');
  if (MIRROR) { x.translate(128, 0); x.scale(-1, 1); }
  x.fillStyle = color; x.fillRect(0, 0, 128, 96);
  x.fillStyle = '#fff'; x.fillRect(30, 14, 68, 68);
  x.fillStyle = '#111'; x.font = 'bold 54px sans-serif'; x.textAlign = 'center'; x.textBaseline = 'middle';
  x.fillText(String(num), 64, 50);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
}
// 毛並み（つや）
export function coatTex() {
  const c = canvas(256, 256), x = c.getContext('2d');
  x.fillStyle = '#ffffff'; x.fillRect(0, 0, 256, 256);
  x.globalAlpha = 0.18;
  for (let i = 0; i < 4000; i++) {
    x.fillStyle = Math.random() < 0.5 ? '#000' : '#fff';
    const px = Math.random() * 256, py = Math.random() * 256;
    x.fillRect(px, py, 1, 3 + Math.random() * 5);
  }
  x.globalAlpha = 1;
  return tex(c, 2, 2);
}
// 黒いぼかし影
export function blobTex() {
  const c = canvas(128, 128), x = c.getContext('2d');
  const g = x.createRadialGradient(64, 64, 4, 64, 64, 62);
  g.addColorStop(0, 'rgba(0,0,0,0.55)'); g.addColorStop(1, 'rgba(0,0,0,0)');
  x.fillStyle = g; x.fillRect(0, 0, 128, 128);
  const t = new THREE.CanvasTexture(c); return t;
}
