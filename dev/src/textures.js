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

// なめらかなノイズ（値ノイズ）
function vnoise(w, h, cell, seed = 1) {
  const gw = Math.ceil(w / cell) + 2, gh = Math.ceil(h / cell) + 2, g = new Float32Array(gw * gh);
  let x = seed * 9973; const r = () => { x = (x * 16807) % 2147483647; return x / 2147483647; };
  for (let i = 0; i < g.length; i++) g[i] = r();
  const gx = Math.ceil(w / cell), gy = Math.ceil(h / cell); // タイル状につながるように
  return (px, py) => {
    const fx = px / cell, fy = py / cell, ix = Math.floor(fx), iy = Math.floor(fy), tx = fx - ix, ty = fy - iy;
    const sx = tx * tx * (3 - 2 * tx), sy = ty * ty * (3 - 2 * ty);
    const at = (a, b) => g[((b % gy + gy) % gy) * gw + ((a % gx + gx) % gx)];
    const a = at(ix, iy), b = at(ix + 1, iy), c = at(ix, iy + 1), d = at(ix + 1, iy + 1);
    return a + (b - a) * sx + (c - a) * sy + (a - b - c + d) * sx * sy;
  };
}
function fbmFill(ctx, w, h, fn) {
  const img = ctx.getImageData(0, 0, w, h), d = img.data;
  for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) { const i = (y * w + x) * 4; const c = fn(x, y, d[i], d[i + 1], d[i + 2]); d[i] = c[0]; d[i + 1] = c[1]; d[i + 2] = c[2]; }
  ctx.putImageData(img, 0, 0);
}
// 芝の葉（短い線をたくさん）
function blades(x, w, h, n, base, amp, len = 5) {
  for (let i = 0; i < n; i++) {
    const v = (Math.random() - 0.5) * amp, px = Math.random() * w, py = Math.random() * h, l = len * (0.5 + Math.random());
    x.strokeStyle = `rgb(${clampc(base[0] + v * 0.8)},${clampc(base[1] + v)},${clampc(base[2] + v * 0.5)})`;
    x.lineWidth = 0.8 + Math.random() * 0.8;
    x.beginPath(); x.moveTo(px, py); x.lineTo(px + (Math.random() - 0.5) * 2, py - l); x.stroke();
  }
}
// 競馬場の芝（刈り目の縞・葉・ムラ）
const TURF = {};
export function turfTex() {
  if (!TURF.c) {
    const S = 1024, c = canvas(S, S), x = c.getContext('2d');
    const n1 = vnoise(S, S, 128, 3), n2 = vnoise(S, S, 32, 7);
    x.fillStyle = 'rgb(92,170,52)'; x.fillRect(0, 0, S, S);
    // 刈り目：進む方向にくっきりした明暗の帯＋やわらかいムラ（明るいアニメ調の芝）
    fbmFill(x, S, S, (px, py) => {
      const band = (Math.floor(px / (S / 2)) + Math.floor(py / (S / 2))) % 2 ? 1 : -1;
      const k = band * 11 + (n1(px, py) - 0.5) * 14 + (n2(px, py) - 0.5) * 7;
      return [92 + k * 0.6, 170 + k, 52 + k * 0.35];
    });
    blades(x, S, S, 26000, [100, 182, 58], 34, 6);
    // クローバーや土の見えるところ
    for (let i = 0; i < 30; i++) { x.fillStyle = `rgba(${Math.random() < 0.5 ? '96,84,52' : '40,90,30'},${0.12 + Math.random() * 0.12})`; x.beginPath(); x.ellipse(Math.random() * S, Math.random() * S, 3 + Math.random() * 10, 2 + Math.random() * 6, Math.random() * 3, 0, Math.PI * 2); x.fill(); }
    TURF.c = c;
    // でこぼこ用（明るさから作る）
    const b = canvas(512, 512), bx = b.getContext('2d'); bx.drawImage(c, 0, 0, 512, 512);
    fbmFill(bx, 512, 512, (px, py, r, g) => { const v = clampc((g - 90) * 3); return [v, v, v]; });
    TURF.b = b;
  }
  const t = tex(TURF.c); t.bump = new THREE.CanvasTexture(TURF.b); t.bump.wrapS = t.bump.wrapT = THREE.RepeatWrapping;
  return t;
}
// ダート（砂・蹄の跡）
const DIRT = {};
export function dirtTex() {
  if (!DIRT.c) {
    const S = 1024, c = canvas(S, S), x = c.getContext('2d');
    const n1 = vnoise(S, S, 96, 11), n2 = vnoise(S, S, 20, 5);
    x.fillStyle = 'rgb(150,112,74)'; x.fillRect(0, 0, S, S);
    fbmFill(x, S, S, (px, py) => { const k = (n1(px, py) - 0.5) * 34 + (n2(px, py) - 0.5) * 16; return [150 + k, 112 + k * 0.85, 74 + k * 0.6]; });
    noise(x, S, S, [150, 112, 74], 60, 60000, 1.3);
    // 蹄の跡
    for (let i = 0; i < 900; i++) {
      const px = Math.random() * S, py = Math.random() * S, r = 4 + Math.random() * 4;
      x.fillStyle = 'rgba(70,46,26,0.28)'; x.beginPath(); x.ellipse(px, py, r * 1.3, r, 0, 0, Math.PI * 2); x.fill();
      x.fillStyle = 'rgba(200,165,120,0.22)'; x.beginPath(); x.ellipse(px + r * 0.9, py, r * 0.6, r * 0.9, 0, 0, Math.PI * 2); x.fill();
    }
    // ハローの筋
    x.globalAlpha = 0.1; x.strokeStyle = '#5a3c22';
    for (let i = 0; i < 70; i++) { x.beginPath(); const y = Math.random() * S; x.moveTo(0, y); x.bezierCurveTo(S / 3, y + 10, S * 2 / 3, y - 10, S, y); x.stroke(); }
    x.globalAlpha = 1;
    DIRT.c = c;
    const b = canvas(512, 512), bx = b.getContext('2d'); bx.drawImage(c, 0, 0, 512, 512);
    fbmFill(bx, 512, 512, (px, py, r) => { const v = clampc((r - 110) * 2.5); return [v, v, v]; });
    DIRT.b = b;
  }
  const t = tex(DIRT.c); t.bump = new THREE.CanvasTexture(DIRT.b); t.bump.wrapS = t.bump.wrapT = THREE.RepeatWrapping;
  return t;
}
// 一般の草地（大きなムラ）
export function grassTex() {
  const S = 512, c = canvas(S, S), x = c.getContext('2d');
  const n1 = vnoise(S, S, 128, 21), n2 = vnoise(S, S, 24, 4);
  x.fillStyle = 'rgb(96,162,56)'; x.fillRect(0, 0, S, S);
  fbmFill(x, S, S, (px, py) => { const k = (n1(px, py) - 0.5) * 30 + (n2(px, py) - 0.5) * 12; return [96 + k * 0.8, 162 + k, 56 + k * 0.4]; });
  blades(x, S, S, 12000, [100, 170, 58], 40, 4);
  return tex(c);
}
// 草のかたまり（近くに生える立体の草）
export function tuftTex() {
  const c = canvas(128, 128), x = c.getContext('2d');
  for (let i = 0; i < 46; i++) {
    const bx = 10 + Math.random() * 108, h = 50 + Math.random() * 74, lean = (Math.random() - 0.5) * 40, g = 100 + Math.random() * 70;
    x.strokeStyle = `rgb(${Math.round(g * 0.5)},${Math.round(g)},${Math.round(g * 0.3)})`; x.lineWidth = 2 + Math.random() * 2.5; x.lineCap = 'round';
    x.beginPath(); x.moveTo(bx, 128); x.quadraticCurveTo(bx + lean * 0.3, 128 - h * 0.6, bx + lean, 128 - h); x.stroke();
  }
  // すき間の色を草色にしておく（遠くで黒くならないように）
  const img = x.getImageData(0, 0, 128, 128), d = img.data;
  for (let i = 0; i < d.length; i += 4) if (d[i + 3] < 10) { d[i] = 60; d[i + 1] = 110; d[i + 2] = 40; d[i + 3] = 0; }
  x.putImageData(img, 0, 0);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.premultiplyAlpha = false; t.generateMipmaps = false; t.minFilter = THREE.LinearFilter; return t;
}
// たてがみの毛すじ（白黒。色はマテリアルで付ける）
export function maneTex() {
  const c = canvas(256, 64), x = c.getContext('2d');
  for (let i = 0; i < 520; i++) {
    const px = Math.random() * 256, l = 30 + Math.random() * 34, v = 150 + Math.random() * 105;
    x.strokeStyle = `rgb(${v},${v},${v})`; x.lineWidth = 0.8 + Math.random() * 1.4;
    x.beginPath(); x.moveTo(px, 64); x.quadraticCurveTo(px + (Math.random() - 0.5) * 6, 64 - l * 0.5, px + (Math.random() - 0.5) * 10, 64 - l); x.stroke();
  }
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.generateMipmaps = false; t.minFilter = THREE.LinearFilter; return t;
}
// 砂ぼこり
export function puffTex() {
  const c = canvas(128, 128), x = c.getContext('2d');
  for (let i = 0; i < 9; i++) {
    const px = 40 + Math.random() * 48, py = 40 + Math.random() * 48, r = 22 + Math.random() * 22;
    const g = x.createRadialGradient(px, py, 2, px, py, r);
    g.addColorStop(0, 'rgba(255,255,255,0.35)'); g.addColorStop(1, 'rgba(255,255,255,0)');
    x.fillStyle = g; x.fillRect(0, 0, 128, 128);
  }
  return new THREE.CanvasTexture(c);
}
// スタンドの観客
export function crowdTex() {
  // 座席の観客：肩と頭の形・服の色・影
  const W = 1024, H = 512, c = canvas(W, H), x = c.getContext('2d');
  x.fillStyle = '#2f3238'; x.fillRect(0, 0, W, H);
  const cols = ['#ecebe6', '#2b2b2b', '#c23b3b', '#3b6cc2', '#e0c040', '#6a4a3a', '#7aa05a', '#d88a4a', '#4a4a7a', '#9a9aa2', '#1f5d4a', '#e07aa0', '#ffffff', '#163a7a'];
  const skin = ['#f1c9a5', '#e2b48c', '#c99a72', '#a87850'], hair = ['#1a120c', '#2a1a10', '#111', '#5a3a20', '#8a8a8a', '#c9a060'];
  const rows = 16, rh = H / rows;
  for (let r = 0; r < rows; r++) {
    const y = r * rh;
    x.fillStyle = '#4a4e56'; x.fillRect(0, y + rh - 5, W, 5); x.fillStyle = '#5c616a'; x.fillRect(0, y + rh - 5, W, 1.5);
    for (let px = Math.random() * 6; px < W; px += 9 + Math.random() * 5) {
      if (Math.random() < 0.08) continue;
      const cl = cols[Math.floor(Math.random() * cols.length)], sc = 0.85 + Math.random() * 0.3;
      // 体（肩）
      x.fillStyle = cl; x.beginPath(); x.ellipse(px, y + rh - 6, 5.2 * sc, 8 * sc, 0, Math.PI, 0); x.fill();
      x.fillStyle = 'rgba(0,0,0,0.25)'; x.fillRect(px + 1.5 * sc, y + rh - 13 * sc, 3 * sc, 7 * sc);
      // 頭
      x.fillStyle = skin[Math.floor(Math.random() * skin.length)]; x.beginPath(); x.arc(px, y + rh - 16 * sc, 3.4 * sc, 0, Math.PI * 2); x.fill();
      x.fillStyle = Math.random() < 0.15 ? cols[Math.floor(Math.random() * 4)] : hair[Math.floor(Math.random() * hair.length)];
      x.beginPath(); x.arc(px, y + rh - 17 * sc, 3.6 * sc, Math.PI * 1.05, Math.PI * 1.95); x.fill();
      // ときどき旗や手
      if (Math.random() < 0.05) { x.fillStyle = cols[Math.floor(Math.random() * cols.length)]; x.fillRect(px + 3, y + rh - 26, 7, 5); x.fillStyle = '#ddd'; x.fillRect(px + 2.5, y + rh - 26, 1, 12); }
    }
  }
  return tex(c);
}
// ラチ沿いに立つ観客（透明背景）
export function standingCrowdTex() {
  const W = 2048, H = 192, c = canvas(W, H), x = c.getContext('2d');
  const cols = ['#f0f0f0', '#222', '#b33', '#36b', '#dc4', '#654', '#7a5', '#d84', '#448', '#999', '#1f5d4a', '#e07aa0'];
  const skin = ['#f1c9a5', '#e2b48c', '#c99a72'], hair = ['#2a1a10', '#111', '#5a3a20', '#8a8a8a'];
  for (let layer = 0; layer < 2; layer++) for (let i = 0; i < 230; i++) {
    const px = Math.random() * W, h = (110 + Math.random() * 50) * (layer ? 1 : 0.9), w = 22 + Math.random() * 10;
    const top = H - h, cl = cols[Math.floor(Math.random() * cols.length)];
    // 脚
    x.fillStyle = ['#2a2f3a', '#3a3a3a', '#4a5a7a', '#6a5a4a'][Math.floor(Math.random() * 4)];
    x.fillRect(px - w * 0.3, top + h * 0.6, w * 0.25, h * 0.4); x.fillRect(px + w * 0.05, top + h * 0.6, w * 0.25, h * 0.4);
    // 胴（丸い肩）
    x.fillStyle = cl; x.beginPath(); x.moveTo(px - w / 2, top + h * 0.62); x.lineTo(px - w / 2, top + 30); x.quadraticCurveTo(px - w / 2, top + 20, px - w / 4, top + 19); x.lineTo(px + w / 4, top + 19); x.quadraticCurveTo(px + w / 2, top + 20, px + w / 2, top + 30); x.lineTo(px + w / 2, top + h * 0.62); x.fill();
    x.fillStyle = 'rgba(0,0,0,0.2)'; x.fillRect(px + w * 0.15, top + 22, w * 0.35, h * 0.4);
    // 手をあげている人
    if (Math.random() < 0.25) { x.strokeStyle = cl; x.lineWidth = 6; x.beginPath(); x.moveTo(px + w * 0.4, top + 28); x.lineTo(px + w * 0.6, top - 6); x.stroke(); x.fillStyle = skin[0]; x.beginPath(); x.arc(px + w * 0.62, top - 8, 4, 0, 7); x.fill(); }
    // 頭
    x.fillStyle = skin[Math.floor(Math.random() * skin.length)]; x.beginPath(); x.arc(px, top + 9, 9, 0, Math.PI * 2); x.fill();
    x.fillStyle = Math.random() < 0.2 ? cols[Math.floor(Math.random() * 5)] : hair[Math.floor(Math.random() * hair.length)];
    x.beginPath(); x.arc(px, top + 6, 9.5, Math.PI, Math.PI * 2); x.fill();
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
// 毛並み：体の向き（u方向）に流れる短い毛をたくさん描く。色はマテリアル側で付ける
const FUR = {};
export function coatTex() {
  if (!FUR.c) {
    const S = 512, c = canvas(S, S), x = c.getContext('2d');
    x.fillStyle = '#e9e9e9'; x.fillRect(0, 0, S, S);
    // ゆるいムラ（毛の流れのかたまり）
    for (let i = 0; i < 260; i++) { const v = 200 + Math.random() * 55; x.fillStyle = `rgba(${v},${v},${v},0.25)`; x.beginPath(); x.ellipse(Math.random() * S, Math.random() * S, 20 + Math.random() * 40, 6 + Math.random() * 12, (Math.random() - 0.5) * 0.4, 0, Math.PI * 2); x.fill(); }
    // 毛（明るい毛と暗い毛）
    x.lineCap = 'round';
    for (let i = 0; i < 52000; i++) {
      const px = Math.random() * S, py = Math.random() * S, l = 5 + Math.random() * 11, a = (Math.random() - 0.5) * 0.35;
      const v = Math.random() < 0.5 ? 255 : 150 + Math.random() * 40;
      x.strokeStyle = `rgba(${v},${v},${v},${0.18 + Math.random() * 0.22})`; x.lineWidth = 0.6 + Math.random() * 0.9;
      x.beginPath(); x.moveTo(px, py); x.quadraticCurveTo(px + l * 0.5, py + a * l * 0.5 + 0.6, px + l, py + a * l); x.stroke();
    }
    FUR.c = c;
    // でこぼこ（毛の立体感）
    const b = canvas(S, S), bx = b.getContext('2d'); bx.fillStyle = '#808080'; bx.fillRect(0, 0, S, S); bx.lineCap = 'round';
    for (let i = 0; i < 40000; i++) {
      const px = Math.random() * S, py = Math.random() * S, l = 4 + Math.random() * 9, v = Math.random() < 0.5 ? 200 : 60;
      bx.strokeStyle = `rgba(${v},${v},${v},0.35)`; bx.lineWidth = 0.8; bx.beginPath(); bx.moveTo(px, py); bx.lineTo(px + l, py + (Math.random() - 0.5) * 2); bx.stroke();
    }
    FUR.b = b;
  }
  const t = tex(FUR.c, 5, 3); t.anisotropy = 4;
  t.bump = new THREE.CanvasTexture(FUR.b); t.bump.wrapS = t.bump.wrapT = THREE.RepeatWrapping; t.bump.repeat.set(5, 3);
  return t;
}
// 黒いぼかし影
export function blobTex() {
  const c = canvas(128, 128), x = c.getContext('2d');
  const g = x.createRadialGradient(64, 64, 4, 64, 64, 62);
  g.addColorStop(0, 'rgba(0,0,0,0.55)'); g.addColorStop(1, 'rgba(0,0,0,0)');
  x.fillStyle = g; x.fillRect(0, 0, 128, 128);
  const t = new THREE.CanvasTexture(c); return t;
}
// 目玉（白目・黒目・光）。球のu=0.5,v=0.5 が見る向き
let EYE_T = null;
export function eyeTex() {
  if (EYE_T) return EYE_T;
  const W = 512, H = 256, c = canvas(W, H), x = c.getContext('2d');
  x.fillStyle = '#fbf8f1'; x.fillRect(0, 0, W, H);
  // 白目のふちのかげ
  const sg = x.createRadialGradient(W / 2, H / 2, 40, W / 2, H / 2, 150); sg.addColorStop(0, 'rgba(0,0,0,0)'); sg.addColorStop(1, 'rgba(90,70,60,0.35)');
  x.fillStyle = sg; x.fillRect(0, 0, W, H);
  const cx = W / 2, cy = H / 2, R = 78;
  const ig = x.createRadialGradient(cx, cy + 6, 6, cx, cy, R);
  ig.addColorStop(0, '#120a05'); ig.addColorStop(0.42, '#2a170c'); ig.addColorStop(0.78, '#4a2a14'); ig.addColorStop(0.93, '#2a170c'); ig.addColorStop(1, '#120904');
  x.fillStyle = ig; x.beginPath(); x.arc(cx, cy, R, 0, Math.PI * 2); x.fill();
  x.fillStyle = '#050302'; x.beginPath(); x.arc(cx, cy + 2, R * 0.46, 0, Math.PI * 2); x.fill();
  // 光
  x.fillStyle = '#ffffff'; x.beginPath(); x.ellipse(cx - 18, cy - 32, 20, 16, -0.3, 0, Math.PI * 2); x.fill();
  x.beginPath(); x.arc(cx + 24, cy + 30, 8, 0, Math.PI * 2); x.fill();
  EYE_T = new THREE.CanvasTexture(c); EYE_T.colorSpace = THREE.SRGBColorSpace; EYE_T.anisotropy = 4;
  return EYE_T;
}
// 顔の色（鼻先のかげ・流星）。頭のロフトのuv：u=後ろ→鼻先、v=横→顔の正面(0.25)→反対の横→あご
const HEADT = {};
export function headTex(body, muzzle, blaze, umap) {
  const key = body + '_' + muzzle + '_' + blaze;
  if (HEADT[key]) return HEADT[key];
  const W = 256, H = 256, c = canvas(W, H), x = c.getContext('2d');
  const cb = new THREE.Color(body), cm = new THREE.Color(muzzle);
  const css = (col) => '#' + col.getHexString();
  const sb = cb, sm = cm;
  const g = x.createLinearGradient(0, 0, W, 0);
  g.addColorStop(0, css(sb)); g.addColorStop(umap(0.55), css(sb)); g.addColorStop(umap(0.68), css(sm)); g.addColorStop(1, css(sm));
  x.fillStyle = g; x.fillRect(0, 0, W, H);
  // あごの下は少し明るく、目のまわりは少し濃く
  const vy = (v) => (1 - v) * H;
  if (blaze) {
    x.fillStyle = '#f6f2ea';
    const pts = blaze === 1 ? [[0.08, 0.035], [0.13, 0.05], [0.19, 0.03], [0.22, 0.0]] : blaze === 2 ? [[0.06, 0.02], [0.1, 0.045], [0.3, 0.025], [0.5, 0.02], [0.62, 0.035], [0.68, 0.05], [0.7, 0.0]] : [[0.05, 0.025], [0.1, 0.06], [0.3, 0.045], [0.5, 0.04], [0.6, 0.06], [0.68, 0.075], [0.74, 0.07]];
    x.beginPath();
    pts.forEach(([u, w], i) => { const X = umap(u) * W, Y = vy(0.25 + w); i ? x.lineTo(X, Y) : x.moveTo(X, Y); });
    for (let i = pts.length - 1; i >= 0; i--) { const [u, w] = pts[i]; x.lineTo(umap(u) * W, vy(0.25 - w)); }
    x.closePath(); x.filter = 'blur(2px)'; x.fill(); x.filter = 'none';
  }
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4;
  return (HEADT[key] = t);
}
// ゲート上の横断幕（赤地・金のふち・白っぽい金文字）
export function bannerTex(text) {
  const w = 1024, h = 128, c = canvas(w, h), x = c.getContext('2d');
  if (MIRROR) { x.translate(w, 0); x.scale(-1, 1); }
  const g = x.createLinearGradient(0, 0, 0, h); g.addColorStop(0, '#e0242a'); g.addColorStop(0.55, '#c3161c'); g.addColorStop(1, '#8e0d12');
  x.fillStyle = g; x.fillRect(0, 0, w, h);
  x.fillStyle = '#f3c84b'; x.fillRect(0, 8, w, 6); x.fillRect(0, h - 14, w, 6);
  // 両はしの菱形の飾り
  for (const cx of [40, w - 40]) { x.save(); x.translate(cx, h / 2); x.rotate(Math.PI / 4); x.fillStyle = '#f7f1dc'; x.fillRect(-19, -19, 38, 38); x.fillStyle = '#d8a93a'; x.fillRect(-11, -11, 22, 22); x.restore(); }
  const size = Math.min(80, Math.floor((w - 160) / Math.max(4, [...String(text)].length) * 1.05));
  x.font = `900 ${size}px "Hiragino Mincho ProN","Noto Serif JP","Hiragino Sans","Noto Sans JP",serif`;
  x.textAlign = 'center'; x.textBaseline = 'middle';
  x.lineJoin = 'round'; x.strokeStyle = '#5a0608'; x.lineWidth = 10; x.strokeText(text, w / 2, h / 2 + 4);
  const tg = x.createLinearGradient(0, h / 2 - size / 2, 0, h / 2 + size / 2); tg.addColorStop(0, '#fff7d6'); tg.addColorStop(0.6, '#ffe07a'); tg.addColorStop(1, '#e7b23a');
  x.fillStyle = tg; x.fillText(text, w / 2, h / 2 + 4);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8;
  return t;
}
// ゲートのクッション（白い板にうっすらステッチ）
export function padTex() {
  const c = canvas(128, 128), x = c.getContext('2d');
  const g = x.createLinearGradient(0, 0, 0, 128); g.addColorStop(0, '#fbfbf8'); g.addColorStop(1, '#dcdedb');
  x.fillStyle = g; x.fillRect(0, 0, 128, 128);
  x.strokeStyle = 'rgba(120,130,125,0.35)'; x.lineWidth = 2;
  for (let i = 1; i < 4; i++) { x.beginPath(); x.moveTo(i * 32, 6); x.lineTo(i * 32, 122); x.stroke(); }
  x.strokeRect(4, 4, 120, 120);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
}
// もくもくの雲（ビルボード用）。seedで形を変える
export function cloudTex(seed = 1) {
  const W = 512, H = 256, c = canvas(W, H), x = c.getContext('2d');
  let s = seed * 7919 + 13; const R = () => { s = (s * 16807) % 2147483647; return s / 2147483647; };
  const puffs = [];
  const n = 9 + Math.floor(R() * 6);
  for (let i = 0; i < n; i++) {
    const t = i / (n - 1), cx = 60 + t * (W - 120) + (R() - 0.5) * 30;
    const r = (40 + Math.sin(t * Math.PI) * 70) * (0.75 + R() * 0.45);
    puffs.push([cx, H - 50 - r * (0.55 + R() * 0.35), r]);
  }
  for (let i = 0; i < 6; i++) { const cx = 120 + R() * (W - 240); puffs.push([cx, H - 40 - R() * 30, 30 + R() * 30]); }
  x.filter = 'blur(1.5px)';
  x.fillStyle = '#ffffff';
  for (const [cx, cy, r] of puffs) { x.beginPath(); x.arc(cx, cy, r, 0, Math.PI * 2); x.fill(); }
  x.fillRect(70, H - 62, W - 140, 22);
  // 下側のかげ（青みのある灰色）と、ふくらみごとのかげ
  x.globalCompositeOperation = 'source-atop'; x.filter = 'blur(8px)';
  for (const [cx, cy, r] of puffs) { const g = x.createRadialGradient(cx - r * 0.25, cy - r * 0.35, r * 0.2, cx, cy, r * 1.05); g.addColorStop(0, 'rgba(255,255,255,0)'); g.addColorStop(0.75, 'rgba(205,215,232,0.0)'); g.addColorStop(1, 'rgba(190,202,224,0.55)'); x.fillStyle = g; x.beginPath(); x.arc(cx, cy, r, 0, Math.PI * 2); x.fill(); }
  const gb = x.createLinearGradient(0, H * 0.35, 0, H - 40); gb.addColorStop(0, 'rgba(180,192,215,0)'); gb.addColorStop(1, 'rgba(170,184,210,0.75)');
  x.fillStyle = gb; x.fillRect(0, 0, W, H);
  x.globalCompositeOperation = 'source-over'; x.filter = 'none';
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace;
  return t;
}
