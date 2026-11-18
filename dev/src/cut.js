// ===== 育成のカットシーン（ドット絵） =====
const WD = 160, HT = 100;
// 馬のドット絵（横向き・走る2コマ）
const HORSE = [
  ['....................',
   '...............##...',
   '..............####..',
   '.............#####..',
   '..#######...######..',
   '.##########.####....',
   '###############.....',
   '##############......',
   '.############.......',
   '.##..#....##.#......',
   '##....#..#...##.....',
   '#......##.....#.....'],
  ['....................',
   '...............##...',
   '..............####..',
   '.............#####..',
   '..#######...######..',
   '.##########.####....',
   '###############.....',
   '##############......',
   '.############.......',
   '..#...##..#..#......',
   '..#..#..#.#..#......',
   '..#.#....##...#.....']];
const JOCK = ['...##...', '..####..', '...##...', '.######.', '..####..'];

function px(g, x, y, s, c) { g.fillStyle = c; g.fillRect(Math.round(x), Math.round(y), s, s); }
function sprite(g, rows, x, y, c, s = 1, flip = false) {
  g.fillStyle = c;
  rows.forEach((r, j) => { for (let i = 0; i < r.length; i++) if (r[i] === '#') g.fillRect(Math.round(x + (flip ? r.length - 1 - i : i) * s), Math.round(y + j * s), s, s); });
}
function horse(g, x, y, t, c = '#6b3a1e', s = 2, rider = true, silk = '#e8332b') {
  sprite(g, HORSE[Math.floor(t * 8) % 2], x, y, c, s);
  // たてがみ・目
  px(g, x + 15 * s, y + 1 * s, s, '#1a0f08'); px(g, x + 14 * s, y + 2 * s, s, '#1a0f08'); px(g, x + 16 * s, y + 3 * s, s, '#000');
  if (rider) sprite(g, JOCK, x + 5 * s, y - 2 * s, silk, s);
}
function sky(g, top, bot) { const gr = g.createLinearGradient(0, 0, 0, HT); gr.addColorStop(0, top); gr.addColorStop(1, bot); g.fillStyle = gr; g.fillRect(0, 0, WD, HT); }
function ground(g, c1, c2, y = 72) { g.fillStyle = c1; g.fillRect(0, y, WD, HT - y); g.fillStyle = c2; for (let x = 0; x < WD; x += 6) g.fillRect(x, y, 3, 1); }
function rail(g, y, off) { g.fillStyle = '#fff'; g.fillRect(0, y, WD, 1); for (let x = -off % 12; x < WD; x += 12) g.fillRect(x, y, 1, 6); }
function confetti(g, t, n = 40) { const cs = ['#ffcf4d', '#e8332b', '#3db8ff', '#3ddc84', '#ff4fd8']; for (let i = 0; i < n; i++) { const x = (i * 37 + t * 30 * (1 + i % 3)) % WD, y = (i * 53 + t * 40 * (1 + i % 2)) % HT; px(g, x, y, 1 + (i % 2), cs[i % 5]); } }
function fireworks(g, t) { for (let k = 0; k < 3; k++) { const cx = 30 + k * 50, cy = 25 + (k % 2) * 10, r = ((t * 1.3 + k * 0.3) % 1) * 22; const cs = ['#ffcf4d', '#ff4fd8', '#3db8ff'][k]; for (let a = 0; a < 16; a++) { const an = a / 16 * Math.PI * 2; px(g, cx + Math.cos(an) * r, cy + Math.sin(an) * r, 1, cs); } } }
function trophy(g, x, y, s = 2) {
  const T = ['.########.', '##########', '#.######.#', '#.######.#', '..######..', '...####...', '....##....', '....##....', '..######..', '.########.'];
  sprite(g, T, x, y, '#ffcf4d', s); sprite(g, ['.#', '#.'], x + 3 * s, y + s, '#fff6c0', s);
}
function heart(g, x, y, s, c = '#ff5a8a') { sprite(g, ['.##.##.', '#######', '#######', '.#####.', '..###..', '...#...'], x, y, c, s); }
function stars(g, t) { for (let i = 0; i < 50; i++) { const x = (i * 71) % WD, y = (i * 29) % 60; if ((i + Math.floor(t * 4)) % 7) px(g, x, y, 1, '#fff'); } }

const SCENES = {
  birth(g, t) { sky(g, '#ffb36b', '#ffe6b0'); g.fillStyle = '#ffd36b'; g.beginPath(); g.arc(120, 60, 14, 0, 7); g.fill(); ground(g, '#5a9a3a', '#4a8a2a', 70);
    g.fillStyle = '#8a4a2a'; g.fillRect(10, 40, 40, 30); g.fillStyle = '#5a2a1a'; g.beginPath(); g.moveTo(6, 42); g.lineTo(30, 26); g.lineTo(54, 42); g.fill();
    horse(g, 60, 46, 0, '#6b3a1e', 2, false); horse(g, 92 + Math.sin(t * 6) * 2, 58, t, '#8a5a3a', 1, false); },
  debut(g, t) { sky(g, '#6fb4ff', '#cfe8ff'); ground(g, '#3f9a3a', '#4fb04a', 70); rail(g, 68, t * 120);
    g.fillStyle = '#2f7a3a'; for (let i = 0; i < 6; i++) g.fillRect(20 + i * 10 - Math.min(60, t * 80), 50, 2, 20);
    horse(g, 30 + t * 50, 46, t); },
  win(g, t) { sky(g, '#6fb4ff', '#cfe8ff'); ground(g, '#3f9a3a', '#4fb04a', 70); rail(g, 68, t * 160);
    g.fillStyle = '#fff'; g.fillRect(110, 30, 2, 40); g.fillStyle = '#e8332b'; g.beginPath(); g.arc(111, 30, 6, 0, 7); g.fill();
    horse(g, 20 + t * 70, 46, t); confetti(g, t, 30); },
  g1(g, t) { sky(g, '#0b1a40', '#3a2a70'); fireworks(g, t); trophy(g, 60, 30, 4); confetti(g, t, 60); },
  award(g, t) { sky(g, '#3a1a50', '#b4251e'); trophy(g, 60, 26, 4); for (let i = 0; i < 8; i++) px(g, 20 + i * 17, 20 + Math.sin(t * 5 + i) * 5, 2, '#ffcf4d'); },
  injury(g, t) { sky(g, '#2a2f38', '#5a6068'); ground(g, '#3a5a3a', '#2a4a2a', 72);
    for (let i = 0; i < 60; i++) { const x = (i * 29 + t * 90) % WD, y = (i * 17 + t * 160) % HT; g.fillStyle = '#9fb0c8'; g.fillRect(x, y, 1, 3); }
    horse(g, 54, 48, 0, '#5a3a2a', 2, false); g.fillStyle = '#fff'; g.fillRect(76, 66, 4, 4); },
  retire(g, t) { sky(g, '#ff8a4a', '#ffd6a0'); g.fillStyle = '#ffcf6b'; g.beginPath(); g.arc(80, 74, 20, 0, 7); g.fill(); ground(g, '#4a7a2a', '#3a6a2a', 74);
    horse(g, 20 + t * 40, 54, t * 0.4, '#3a2214', 2, false); },
  death(g, t) { sky(g, '#05081a', '#1a2050'); stars(g, t); g.globalAlpha = Math.min(1, t * 1.5); horse(g, 50, 60 - t * 30, t * 0.5, '#e8eef8', 2, false); g.globalAlpha = 1; },
  skill(g, t) { sky(g, '#1a1040', '#401a60'); for (let i = 0; i < 12; i++) { g.fillStyle = i % 2 ? '#ffcf4d' : '#fff'; const a = i / 12 * Math.PI * 2 + t * 3; g.fillRect(80 + Math.cos(a) * (20 + t * 40), 50 + Math.sin(a) * (20 + t * 40), 3, 3); } horse(g, 60, 40, t, '#ffcf4d', 2, false); },
  school(g, t) { sky(g, '#9fd0ff', '#e6f4ff'); ground(g, '#a07a4a', '#8a6a3a', 72); g.fillStyle = '#c8c0b0'; g.fillRect(20, 30, 120, 42); g.fillStyle = '#7a3a2a'; g.fillRect(20, 26, 120, 6);
    for (let i = 0; i < 6; i++) { g.fillStyle = '#5a7a9a'; g.fillRect(28 + i * 19, 40, 10, 10); } sprite(g, JOCK, 70, 58, '#3db8ff', 2); },
  debutJ(g, t) { sky(g, '#6fb4ff', '#cfe8ff'); ground(g, '#3f9a3a', '#4fb04a', 70); rail(g, 68, t * 120); horse(g, 40 + t * 30, 46, t, '#3a2214', 2, true, '#ffcf4d'); confetti(g, t, 20); },
  wedding(g, t) { sky(g, '#ffd6e6', '#fff0f6'); ground(g, '#9ad08a', '#8ac07a', 76); sprite(g, JOCK, 56, 52, '#222', 3); sprite(g, JOCK, 86, 52, '#fff', 3); for (let i = 0; i < 5; i++) heart(g, 20 + i * 28, 20 + Math.sin(t * 4 + i) * 6, 2); },
  baby(g, t) { sky(g, '#fff0d8', '#ffe0f0'); for (let i = 0; i < 4; i++) heart(g, 22 + i * 34, 18 + Math.sin(t * 4 + i) * 5, 2, '#ff8ab0'); g.fillStyle = '#c89a6a'; g.fillRect(55, 60, 50, 14); g.fillStyle = '#fff'; g.fillRect(62, 54, 36, 8); },
  abroad(g, t) { sky(g, '#4f9fff', '#cfe8ff'); g.fillStyle = '#fff'; for (let i = 0; i < 4; i++) g.fillRect(((i * 50 - t * 40) % 200 + 200) % 200 - 20, 20 + i * 12, 30, 6);
    sprite(g, ['.....#......', '....###.....', '############', '....###.....', '.....#......'], 30 + t * 80, 40, '#e8eef8', 3); },
};

let playing = null;
export function cutsOn() { try { return JSON.parse(localStorage.getItem('shinuka_ikiruka_v1') || '{}').settings?.cuts !== false; } catch (e) { return true; } }

// カットシーンを流す（タップで飛ばせる）
export function playCut(kind, title, sub, dur = 2200) {
  return new Promise((resolve) => {
    if (!SCENES[kind] || !cutsOn()) { resolve(); return; }
    const el = document.createElement('div'); el.className = 'cut';
    el.innerHTML = `<canvas width="${WD}" height="${HT}"></canvas><div class="cut-t"><b>${title || ''}</b><span>${sub || ''}</span></div><small>タップで飛ばす</small>`;
    document.body.appendChild(el);
    const g = el.querySelector('canvas').getContext('2d'); g.imageSmoothingEnabled = false;
    const t0 = performance.now(); let raf;
    const end = () => { cancelAnimationFrame(raf); el.classList.add('out'); setTimeout(() => { el.remove(); resolve(); }, 250); playing = null; };
    const loop = (now) => {
      const t = (now - t0) / 1000;
      g.clearRect(0, 0, WD, HT); SCENES[kind](g, Math.min(t, dur / 1000));
      if (t * 1000 > dur) { end(); return; }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    el.onclick = end;
    playing = end;
  });
}
export async function playCuts(list) { for (const c of list) await playCut(c.k, c.t, c.s, c.d); }
