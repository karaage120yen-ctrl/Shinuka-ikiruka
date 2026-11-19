// ===== 音（WebAudioで合成）：BGM・効果音・歓声。音量は別々に変えられる =====
let ctx = null, master = null, bgmG = null, sfxG = null, crowdBus = null, crowdGain = null, enabled = true;
let noiseBuf = null;
const VOL = { bgm: 0.5, sfx: 0.8, crowd: 0.7 };

export function setSound(on) { enabled = on; if (master) master.gain.value = on ? 0.9 : 0; if (!on) stopBgm(); }
export function setVolumes(v) {
  Object.assign(VOL, v || {});
  if (bgmG) { bgmG.gain.value = VOL.bgm * 0.5; sfxG.gain.value = VOL.sfx; crowdBus.gain.value = VOL.crowd; }
}

export function initAudio() {
  if (ctx) { if (ctx.state === 'suspended') ctx.resume(); return; }
  try {
    ctx = new (window.AudioContext || window.webkitAudioContext)();
    master = ctx.createGain(); master.gain.value = enabled ? 0.9 : 0; master.connect(ctx.destination);
    bgmG = ctx.createGain(); bgmG.connect(master);
    sfxG = ctx.createGain(); sfxG.connect(master);
    crowdBus = ctx.createGain(); crowdBus.connect(master);
    setVolumes();
    noiseBuf = ctx.createBuffer(1, ctx.sampleRate * 2, ctx.sampleRate);
    const d = noiseBuf.getChannelData(0);
    for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
    if (wantBgm) playBgm(wantBgm, true);
  } catch (e) { ctx = null; }
}

function noise(dur, freq, q, gain, type = 'bandpass', when = 0, bus) {
  if (!ctx) return;
  const t = ctx.currentTime + when;
  const src = ctx.createBufferSource(); src.buffer = noiseBuf;
  const f = ctx.createBiquadFilter(); f.type = type; f.frequency.value = freq; f.Q.value = q;
  const g = ctx.createGain(); g.gain.setValueAtTime(gain, t); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
  src.connect(f); f.connect(g); g.connect(bus || sfxG);
  src.start(t, Math.random() * 1.5); src.stop(t + dur + 0.05);
}

export function hoof(vol = 0.5) { noise(0.09, 180 + Math.random() * 60, 1.2, vol); noise(0.05, 900, 2, vol * 0.25); }
export function whip() { noise(0.08, 3200, 0.8, 0.9, 'highpass'); noise(0.12, 1400, 3, 0.4); }
export function bump() { noise(0.15, 300, 1, 0.5); }
export function thud() { noise(0.5, 120, 0.8, 1.2); noise(0.3, 600, 1, 0.5, 'bandpass', 0.05); }
export function gateOpen() { noise(0.35, 600, 0.6, 0.8); noise(0.25, 2500, 1, 0.5, 'highpass', 0.02); }
export function click() { if (!ctx) return; const t = ctx.currentTime; const o = ctx.createOscillator(); o.type = 'triangle'; o.frequency.value = 880; const g = ctx.createGain(); g.gain.setValueAtTime(0.12, t); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.07); o.connect(g); g.connect(sfxG); o.start(t); o.stop(t + 0.08); }
export function coin() { if (!ctx) return; [1319, 1760].forEach((f, i) => { const t = ctx.currentTime + i * 0.07; const o = ctx.createOscillator(); o.type = 'square'; o.frequency.value = f; const g = ctx.createGain(); g.gain.setValueAtTime(0.08, t); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.2); o.connect(g); g.connect(sfxG); o.start(t); o.stop(t + 0.22); }); }

// ----- 楽譜（このゲームのためのオリジナル曲） -----
const NOTE = { C: 0, D: 2, E: 4, F: 5, G: 7, A: 9, B: 11 };
const midi = (s) => { const m = /^([A-G])(#|b)?(\d)$/.exec(s); if (!m) return null; return 12 * (+m[3] + 1) + NOTE[m[1]] + (m[2] === '#' ? 1 : m[2] === 'b' ? -1 : 0); };
const freq = (n) => 440 * Math.pow(2, (n - 69) / 12);
function parse(str) { // "C5:1 E5:0.5 R:1 C4+E4+G4:2"
  const out = []; let b = 0;
  for (const tok of str.trim().split(/\s+/)) { const [n, d] = tok.split(':'); const dur = +d || 1; if (n !== 'R') out.push([b, n.split('+').map(midi), dur]); b += dur; }
  return { notes: out, len: b };
}
const T = (bpm, parts) => { const ps = parts.map(p => ({ ...p, ...parse(p.s) })); return { bpm, parts: ps, len: Math.max(...ps.map(p => p.len)) }; };
const TRACKS = {
  // ホーム：明るい行進曲
  menu: T(124, [
    { w: 'square', v: 0.07, s: 'C5:0.5 E5:0.5 G5:1 E5:0.5 G5:0.5 C6:1 B5:0.5 A5:0.5 G5:1 E5:1 R:1 F5:0.5 A5:0.5 C6:1 A5:0.5 F5:0.5 G5:1.5 E5:0.5 D5:1 C5:1 R:1 E5:0.5 G5:0.5 A5:1 G5:0.5 E5:0.5 D5:1 E5:0.5 F5:0.5 G5:2 R:1 A5:0.5 G5:0.5 F5:1 E5:0.5 D5:0.5 C5:1 D5:1 C5:2 R:2' },
    { w: 'triangle', v: 0.16, s: 'C3:1 G3:1 C3:1 G3:1 A2:1 E3:1 A2:1 E3:1 F2:1 C3:1 F2:1 C3:1 G2:1 D3:1 G2:1 B2:1 C3:1 G3:1 A2:1 E3:1 F2:1 C3:1 G2:1 D3:1 F2:1 C3:1 G2:1 D3:1 C3:1 G2:1 C3:2' },
    { w: 'sine', v: 0.05, s: 'E4+G4:4 C4+E4:4 A3+C4:4 B3+D4:4 E4+G4:4 C4+E4:4 A3+C4:4 B3+D4:2 C4+E4:2' },
  ]),
  // パドック：ゆったり
  paddock: T(84, [
    { w: 'triangle', v: 0.12, s: 'E5:1.5 D5:0.5 C5:1 G4:1 A4:1.5 C5:0.5 D5:2 E5:1.5 G5:0.5 E5:1 D5:1 C5:3 R:1 A4:1.5 C5:0.5 D5:1 E5:1 G5:1.5 E5:0.5 D5:2 C5:1.5 D5:0.5 E5:1 D5:1 C5:4' },
    { w: 'sine', v: 0.1, s: 'C3+G3:4 A2+E3:4 F2+C3:4 G2+D3:4 C3+G3:4 A2+E3:4 F2+C3:4 G2+D3:2 C3+G3:2' },
  ]),
  // 馬主・育成のときの落ち着いた曲
  farm: T(96, [
    { w: 'triangle', v: 0.1, s: 'G4:1 A4:0.5 B4:0.5 D5:1 B4:1 A4:1 G4:0.5 A4:0.5 B4:2 D5:1 E5:0.5 D5:0.5 B4:1 G4:1 A4:3 R:1 G4:1 A4:0.5 B4:0.5 D5:1 G5:1 E5:1 D5:0.5 B4:0.5 A4:2 B4:1 A4:0.5 G4:0.5 E4:1 A4:1 G4:4' },
    { w: 'sine', v: 0.11, s: 'G2+D3:4 E2+B2:4 C3+G3:4 D3+A3:4 G2+D3:4 E2+B2:4 C3+G3:4 D3+A3:2 G2+D3:2' },
  ]),
};
// ファンファーレ（オリジナル）
const FANFARE = {
  g1: T(108, [
    { w: 'sawtooth', v: 0.09, s: 'G4:0.33 G4:0.33 G4:0.34 C5:1.5 E5:0.5 G5:2 R:0.5 E5:0.5 G5:0.5 A5:0.5 G5:1 E5:0.5 C5:0.5 D5:1.5 R:0.5 G4:0.33 G4:0.33 G4:0.34 C5:1 E5:0.5 G5:0.5 C6:1.5 B5:0.5 A5:0.5 G5:0.5 F5:0.5 D5:0.5 C5:3' },
    { w: 'sawtooth', v: 0.05, s: 'R:1 E4:1.5 G4:0.5 C5:2 R:0.5 C5:0.5 E5:0.5 F5:0.5 E5:1 C5:0.5 G4:0.5 B4:1.5 R:1.5 E4:1 G4:0.5 C5:0.5 E5:1.5 D5:0.5 C5:0.5 B4:0.5 A4:0.5 F4:0.5 E4:3' },
    { w: 'triangle', v: 0.2, s: 'R:1 C3:2 C3:2 R:0.5 A2:1.5 F2:1 G2:2 R:1 C3:2 C3:1 A2:1 F2:1 G2:1 C3:3' },
  ]),
  normal: T(120, [
    { w: 'sawtooth', v: 0.08, s: 'C5:0.5 E5:0.5 G5:1 E5:0.5 G5:0.5 C6:2 R:0.5 A5:0.5 G5:0.5 E5:0.5 F5:0.5 D5:0.5 C5:2' },
    { w: 'triangle', v: 0.18, s: 'C3:2 C3:2 R:0.5 F2:1.5 G2:1 C3:2' },
  ]),
  win: T(140, [{ w: 'square', v: 0.08, s: 'C5:0.5 E5:0.5 G5:0.5 C6:1.5 G5:0.5 C6:2' }, { w: 'triangle', v: 0.18, s: 'C3:1 G2:1 C3:1 C3:2' }]),
};

function playNote(t, fs, dur, w, v, bus) {
  for (const n of fs) {
    if (n == null) continue;
    const o = ctx.createOscillator(); o.type = w; o.frequency.value = freq(n);
    const g = ctx.createGain(); const end = t + dur * 0.95;
    g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(v, t + 0.015); g.gain.setValueAtTime(v * 0.8, Math.max(t + 0.02, end - 0.06)); g.gain.exponentialRampToValueAtTime(0.0001, end);
    if (w === 'sawtooth' || w === 'square') { const f = ctx.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = w === 'sawtooth' ? 2400 : 3000; o.connect(f); f.connect(g); } else o.connect(g);
    g.connect(bus); o.start(t); o.stop(end + 0.02);
  }
}
function schedule(track, t0, bus, from, to) {
  const spb = 60 / track.bpm;
  for (const p of track.parts) for (const [b, fs, d] of p.notes) if (b >= from && b < to) playNote(t0 + b * spb, fs, d * spb, p.w, p.v, bus);
}

let wantBgm = null, bgmTimer = null, bgmState = null;
export function playBgm(name, force) {
  if (!force && wantBgm === name && bgmTimer) return;
  wantBgm = name;
  if (!ctx || !enabled) return;
  stopBgm(true);
  const tr = TRACKS[name]; if (!tr) return;
  const spb = 60 / tr.bpm;
  bgmState = { tr, t0: ctx.currentTime + 0.1, done: 0 };
  const tick = () => {
    const S = bgmState; if (!S) return;
    const ahead = (ctx.currentTime + 0.5 - S.t0) / spb; // 先の0.5秒ぶんを予約
    while (S.done < ahead) {
      const loopN = Math.floor(S.done / S.tr.len), inLoop = S.done - loopN * S.tr.len;
      const step = Math.min(1, S.tr.len - inLoop);
      schedule(S.tr, S.t0 + loopN * S.tr.len * spb, bgmG, inLoop, inLoop + step);
      S.done += step;
    }
  };
  tick(); bgmTimer = setInterval(tick, 200);
}
export const currentBgm = () => wantBgm;
export function stopBgm(keepWant) { if (bgmTimer) clearInterval(bgmTimer); bgmTimer = null; bgmState = null; if (!keepWant) wantBgm = null; }
export function fanfare(kind = 'win') {
  if (!ctx) return 0;
  const tr = FANFARE[kind] || FANFARE.win;
  schedule(tr, ctx.currentTime + 0.05, bgmG, 0, 1e9);
  return tr.len * 60 / tr.bpm;
}

export function startCrowd() {
  if (!ctx || crowdGain) return;
  const src = ctx.createBufferSource(); src.buffer = noiseBuf; src.loop = true;
  const f = ctx.createBiquadFilter(); f.type = 'bandpass'; f.frequency.value = 700; f.Q.value = 0.5;
  crowdGain = ctx.createGain(); crowdGain.gain.value = 0.02;
  src.connect(f); f.connect(crowdGain); crowdGain.connect(crowdBus); src.start();
  crowdGain._src = src;
}
export function crowdLevel(v) { if (crowdGain) crowdGain.gain.setTargetAtTime(v, ctx.currentTime, 0.3); }
export function cheer() { noise(2.2, 900, 0.4, 0.5, 'bandpass', 0, crowdBus); noise(1.6, 2200, 0.6, 0.25, 'bandpass', 0.1, crowdBus); }
export function stopCrowd() { if (crowdGain) { try { crowdGain._src.stop(); } catch (e) { } crowdGain.disconnect(); crowdGain = null; } }
