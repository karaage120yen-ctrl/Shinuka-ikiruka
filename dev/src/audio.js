// ===== 効果音（WebAudioで合成） =====
let ctx = null, master = null, crowdGain = null, enabled = true;
let noiseBuf = null;

export function setSound(on) { enabled = on; if (master) master.gain.value = on ? 0.8 : 0; }

export function initAudio() {
  if (ctx) { if (ctx.state === 'suspended') ctx.resume(); return; }
  try {
    ctx = new (window.AudioContext || window.webkitAudioContext)();
    master = ctx.createGain(); master.gain.value = enabled ? 0.8 : 0; master.connect(ctx.destination);
    noiseBuf = ctx.createBuffer(1, ctx.sampleRate * 2, ctx.sampleRate);
    const d = noiseBuf.getChannelData(0);
    for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
  } catch (e) { ctx = null; }
}

function noise(dur, freq, q, gain, type = 'bandpass', when = 0) {
  if (!ctx) return;
  const t = ctx.currentTime + when;
  const src = ctx.createBufferSource(); src.buffer = noiseBuf;
  const f = ctx.createBiquadFilter(); f.type = type; f.frequency.value = freq; f.Q.value = q;
  const g = ctx.createGain(); g.gain.setValueAtTime(gain, t); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
  src.connect(f); f.connect(g); g.connect(master);
  src.start(t, Math.random() * 1.5); src.stop(t + dur + 0.05);
}

export function hoof(vol = 0.5) { noise(0.09, 180 + Math.random() * 60, 1.2, vol); noise(0.05, 900, 2, vol * 0.25); }
export function whip() { noise(0.08, 3200, 0.8, 0.9, 'highpass'); noise(0.12, 1400, 3, 0.4); }
export function bump() { noise(0.15, 300, 1, 0.5); }
export function gateOpen() { noise(0.35, 600, 0.6, 0.8); noise(0.25, 2500, 1, 0.5, 'highpass', 0.02); }
export function fanfare() {
  if (!ctx) return;
  const notes = [523, 659, 784, 1046, 784, 1046];
  notes.forEach((f, i) => {
    const t = ctx.currentTime + i * 0.16;
    const o = ctx.createOscillator(); o.type = 'sawtooth'; o.frequency.value = f;
    const g = ctx.createGain(); g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.18, t + 0.02); g.gain.exponentialRampToValueAtTime(0.0001, t + (i === 5 ? 0.6 : 0.15));
    const fl = ctx.createBiquadFilter(); fl.type = 'lowpass'; fl.frequency.value = 2500;
    o.connect(fl); fl.connect(g); g.connect(master); o.start(t); o.stop(t + 0.7);
  });
}

export function startCrowd() {
  if (!ctx || crowdGain) return;
  const src = ctx.createBufferSource(); src.buffer = noiseBuf; src.loop = true;
  const f = ctx.createBiquadFilter(); f.type = 'bandpass'; f.frequency.value = 700; f.Q.value = 0.5;
  crowdGain = ctx.createGain(); crowdGain.gain.value = 0.02;
  src.connect(f); f.connect(crowdGain); crowdGain.connect(master); src.start();
  crowdGain._src = src;
}
export function crowdLevel(v) { if (crowdGain) crowdGain.gain.setTargetAtTime(v, ctx.currentTime, 0.3); }
export function stopCrowd() { if (crowdGain) { try { crowdGain._src.stop(); } catch (e) { } crowdGain.disconnect(); crowdGain = null; } }
