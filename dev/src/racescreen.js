// ===== レース画面（パドック・本馬場入場・操作・HUD・結果・リプレイ・写真判定） =====
import { createRace, stepRace, makeOpponents, marginText, trackPos, TRACK, setSimSeed, fieldResult, setVenue, rollWeather } from './sim.js';
import { RaceView } from './render3d.js';
import { fmtTime, SILKS } from './data.js';
import * as A from './audio.js';
import { Commentator } from './commentary.js';
import { S, save } from './store.js';

let active = null;
const SPEED = /fast/.test(location.hash) ? 5 : 1; // テスト用の早送り
const esc = (s) => String(s ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const hashS = (s) => { let h = 7; for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0; return h; };
const KEHAI = ['△', '▲', '○', '◎', '◎'];
const KEHAI_T = ['イレ込み気味', '少し硬い', '落ち着いている', '気合十分', '絶好の気配'];

export function startRace(cfg) {
  const root = document.getElementById('race-screen');
  root.innerHTML = `
    <canvas id="race-canvas"></canvas><div id="vig"></div><div id="vig-speed"></div>
    <div class="hud-top">
      <div class="hud-race"><b>${cfg.race.g ? `<span class="grade g-${cfg.race.g}">${cfg.race.g}</span>` : ''}${esc(cfg.race.name)}</b><span>${cfg.race.place || ''} ${cfg.race.surf}${cfg.race.dist}m・${cfg.race.weather || ''}・${cfg.race.going || ''}</span></div>
      <div class="hud-stats"><div><small>順位</small><b id="h-rank">-</b></div><div><small>残り</small><b id="h-rem">-</b></div><div><small>タイム</small><b id="h-time">0:00.0</b></div></div>
    </div>
    <canvas id="minimap" width="220" height="130"></canvas>
    <button id="h-view" class="hud-small">視点</button>
    <button id="h-quit" class="hud-small hud-quit">中止</button>
    <div id="h-msg" class="hud-msg"></div><div id="h-call" class="hud-call"></div><div id="h-msg2" class="hud-top3"></div><div id="side-l" class="side l"></div><div id="side-r" class="side r"></div>
    <div class="hud-bottom">
      <div class="gauge-wrap"><div class="gauge-label"><span>体力</span><span id="h-speed">0 km/h</span></div><div class="gauge"><div id="h-gauge"></div></div></div>
      <div class="ctrl">
        <div class="steer"><button id="b-left" class="cbtn">◀</button><button id="b-right" class="cbtn">▶</button></div>
        <button id="b-god" class="cbtn god hidden">馬神</button>
        <button id="b-whip" class="cbtn whip">ムチ</button>
      </div>
    </div>
    <div id="h-buff" class="hud-buff"></div><div id="god-fx" class="god-fx"></div>
    <div id="h-pre" class="hud-pre hidden"></div>
    <div id="h-replay" class="hud-replay hidden"></div>
    <div id="h-result" class="hud-result hidden"></div>`;
  root.classList.remove('hidden');
  document.body.classList.add('in-race');

  const SPEC = !!cfg.spectate;
  let race;
  setVenue(cfg.race.place);
  if (!cfg.race.going) Object.assign(cfg.race, rollWeather(cfg.race.m || new Date().getMonth() + 1));
  const GW = { going: cfg.race.going, weather: cfg.race.weather };
  if (SPEC) {
    setSimSeed(cfg.seed);
    const specs = cfg.specs.map((x, i) => i === (cfg.focus || 0) ? { ...x, isPlayer: true, ai: true } : { ...x });
    race = createRace({ dist: cfg.race.dist, surf: cfg.race.surf, specs, fixedGates: true, noBand: true, ...GW });
    root.classList.add('spectate');
  } else {
    const pSpec = { ...cfg.player, isPlayer: true, silk: SILKS[cfg.player.silk ?? 0] };
    const n = cfg.fieldSize || 12;
    const opps = cfg.opponents ? [...cfg.opponents] : [];
    if (opps.length < n - 1) opps.push(...makeOpponents(cfg.race, pSpec, n - 1 - opps.length));
    race = createRace({ dist: cfg.race.dist, surf: cfg.race.surf, specs: [pSpec, ...opps], ...GW });
  }
  const lowPower = /iPhone|iPad|Android/i.test(navigator.userAgent) && (navigator.hardwareConcurrency || 4) <= 4;
  const userView = SPEC ? 'tv' : (S.settings.view || 'fp');
  const view = new RaceView(document.getElementById('race-canvas'), race, { view: userView, title: cfg.race.name, lowPower });
  const prevBgm = A.currentBgm();
  A.initAudio(); A.setSound(S.settings.sound); A.setVolumes(S.settings.vol); A.stopBgm(); A.startCrowd(); A.crowdLevel(0.05);
  const caller = new Commentator(race, { focus: () => race.player });

  const input = { steer: 0, whip: false, l: false, r: false, god: false };
  const $ = (id) => document.getElementById(id);
  const hold = (el, on, off) => {
    el.addEventListener('pointerdown', (e) => { e.preventDefault(); try { el.setPointerCapture(e.pointerId); } catch (_) { } el.classList.add('on'); on(); });
    const up = () => { el.classList.remove('on'); off && off(); };
    el.addEventListener('pointerup', up); el.addEventListener('pointercancel', up); el.addEventListener('pointerleave', up);
  };
  hold($('b-left'), () => { input.l = true; }, () => { input.l = false; });
  hold($('b-right'), () => { input.r = true; }, () => { input.r = false; });
  hold($('b-whip'), () => { input.whip = true; }, null);
  if (!SPEC && race.player.god === 1) { $('b-god').classList.remove('hidden'); hold($('b-god'), () => { input.god = true; }, null); }
  const keys = (e, down) => {
    if (e.key === 'ArrowLeft' || e.key === 'a') input.l = down;
    if (e.key === 'ArrowRight' || e.key === 'd') input.r = down;
    if ((e.key === ' ' || e.key === 'ArrowUp') && down) input.whip = true;
  };
  const kd = (e) => keys(e, true), ku = (e) => keys(e, false);
  window.addEventListener('keydown', kd); window.addEventListener('keyup', ku);
  const views = ['fp', 'back', 'tv'];
  const viewNames = { fp: '騎手視点', back: '後ろから', tv: '中継', goal: 'ゴール前', orbit: 'パドック', front: '正面' };
  $('h-view').textContent = viewNames[view.view] || '視点';
  $('h-view').onclick = () => { if (phase !== 'race') return; const v = views[(views.indexOf(view.view) + 1) % views.length]; view.setView(v); if (!SPEC) { S.settings.view = v; save(); } $('h-view').textContent = viewNames[v]; };
  let quit = false;
  $('h-quit').onclick = () => { if (phase === 'replay') return; if (confirm('レースを中止しますか？（出走しなかったことになります）')) { quit = true; finish(null); } };

  const msgEl = $('h-msg');
  let msgT = 0;
  const say = (t, dur = 1.6, cls = '') => { msgEl.textContent = t; msgEl.className = 'hud-msg show ' + cls; msgT = dur; };

  const mm = $('minimap').getContext('2d');
  const drawMap = () => {
    const c = mm.canvas; mm.clearRect(0, 0, c.width, c.height);
    const sx = (c.width - 16) / (TRACK.Ls + 2 * TRACK.R + 60), sz = (c.height - 16) / (2 * TRACK.R + 60);
    const s = Math.min(sx, sz), ox = c.width / 2, oz = c.height / 2, fx = TRACK.dir === -1 ? -1 : 1;
    mm.strokeStyle = 'rgba(255,255,255,0.75)'; mm.lineWidth = 6; mm.beginPath();
    for (let u = 0; u <= TRACK.P; u += 20) { const p = trackPos(u, 10); const X = ox + fx * p.x * s, Y = oz - p.z * s; u ? mm.lineTo(X, Y) : mm.moveTo(X, Y); }
    mm.closePath(); mm.stroke();
    const g = trackPos(TRACK.finishU, 10); mm.fillStyle = '#ff3b3b'; mm.fillRect(ox + fx * g.x * s - 1, oz - g.z * s - 6, 3, 12);
    for (const r of race.racers) {
      const p = trackPos(r.u, r.d);
      mm.fillStyle = r.isPlayer ? '#ffe14d' : '#' + (r.silk ?? 0xffffff).toString(16).padStart(6, '0');
      mm.beginPath(); mm.arc(ox + fx * p.x * s, oz - p.z * s, r.isPlayer ? 4.5 : 3, 0, Math.PI * 2); mm.fill();
      if (r.isPlayer) { mm.strokeStyle = '#000'; mm.lineWidth = 1; mm.stroke(); }
    }
  };

  // ===== 記録（リプレイ用） =====
  const REC = []; let lastRec = -1;
  const F = 6;
  const record = () => {
    if (race.t - lastRec < 1 / 30) return; lastRec = race.t;
    const a = new Float32Array(race.racers.length * F);
    race.racers.forEach((r, i) => { a[i * F] = r.u; a[i * F + 1] = r.d; a[i * F + 2] = r.v; a[i * F + 3] = r.stride; a[i * F + 4] = r.energy; a[i * F + 5] = r.fallen ? 1 : 0; });
    REC.push({ t: race.t, a });
  };
  const applyRec = (t) => {
    if (!REC.length) return;
    let lo = 0, hi = REC.length - 1;
    if (t <= REC[0].t) hi = 0; else if (t >= REC[hi].t) lo = hi; else { while (hi - lo > 1) { const m = (lo + hi) >> 1; if (REC[m].t <= t) lo = m; else hi = m; } }
    const A0 = REC[lo], A1 = REC[hi], k = A1.t > A0.t ? (t - A0.t) / (A1.t - A0.t) : 0;
    race.racers.forEach((r, i) => {
      const o = i * F, L = (j) => A0.a[o + j] + (A1.a[o + j] - A0.a[o + j]) * k;
      r.u = L(0); r.d = L(1); r.v = L(2); r.stride = L(3); r.energy = L(4); r.fallen = A0.a[o + 5] > 0.5; r.whipT = 0;
    });
    race.t = t;
  };

  // ===== レース前：パドック → 本馬場入場（ファンファーレ） =====
  let phase = 'race';
  const big = cfg.race.g === 'G1';
  const preOn = !SPEC && S.settings.prerace !== false && (!/fast/.test(location.hash) || /pre/.test(location.hash));
  if (preOn) {
    phase = 'paddock'; view.setView('orbit'); root.classList.add('pre');
    A.playBgm('paddock');
    const pl = race.player;
    const rows = [...race.racers].sort((a, b) => a.num - b.num).map(r => {
      const h = hashS(r.name || ''), wt = r.wt || 440 + (h % 90), dw = r.dw ?? ((h >> 4) % 13) - 6;
      const c = Math.max(0, Math.min(4, (r.cond ?? 2) + (((h >> 8) % 3) - 1) * (r.isPlayer ? 0 : 1)));
      r._kehai = c;
      return `<tr class="${r.isPlayer ? 'me' : ''} ${cfg.rival && r.name === cfg.rival ? 'rival' : ''}"><td><span class="num" style="background:#${(r.cap ?? r.silk ?? 0xffffff).toString(16).padStart(6, '0')}">${r.num}</span></td><td>${esc(r.name)}${cfg.rival && r.name === cfg.rival ? '<em>ライバル</em>' : ''}<small>${esc(r.jname || '')}</small></td><td>${wt}<small>(${dw > 0 ? '+' : ''}${dw})</small></td><td class="kh k${c}">${KEHAI[c]}</td></tr>`;
    }).join('');
    $('h-pre').innerHTML = `<div class="pre-card"><h2>🐎 パドック</h2><p class="small">${esc(cfg.race.name)}　${cfg.race.surf}${cfg.race.dist}m　${race.racers.length}頭</p>
      <div class="pre-me">あなたの馬 <b>${pl.num}番 ${esc(pl.name)}</b>：<span class="k${pl._kehai}">${KEHAI[pl._kehai]} ${KEHAI_T[pl._kehai]}</span></div>
      <div class="res-table"><table><tr><th>番</th><th>馬名 / 騎手</th><th>馬体重</th><th>気配</th></tr>${rows}</table></div>
      <div class="row2"><button class="btn red" id="pre-go">本馬場入場 ▶</button><button class="btn ghost" id="pre-skip">スキップ</button></div></div>`;
    $('h-pre').classList.remove('hidden');
    const toGate = () => { if (phase === 'race') return; phase = 'race'; root.classList.remove('pre'); $('h-pre').classList.add('hidden'); view.setView(userView); $('h-view').textContent = viewNames[userView]; A.stopBgm(); A.crowdLevel(0.08); };
    $('pre-skip').onclick = toGate;
    $('pre-go').onclick = () => {
      phase = 'parade'; A.stopBgm();
      $('h-pre').innerHTML = `<div class="pre-banner"><b>${big ? '🎺 G1 ファンファーレ' : '🎺 ファンファーレ'}</b><small>${esc(cfg.race.name)}</small><button class="btn ghost" id="pre-skip2">スキップ</button></div>`;
      $('pre-skip2').onclick = toGate;
      A.crowdLevel(0.25);
      const sec = A.fanfare(big ? 'g1' : 'normal');
      setTimeout(() => { A.cheer(); toGate(); }, (sec + 0.8) * 1000 / SPEED);
    };
  } else if (SPEC) { A.fanfare(big ? 'g1' : 'normal'); }

  let last = performance.now(), acc = 0, raf = 0, ended = false, endT = 0, lastStep = 0, blockedT = 0, lastCount = 3;
  let playerFell = false;
  if (!preOn) say('3', 1);
  // ===== リプレイ =====
  const RP = { t: 0, sp: 1, on: false };
  const loop = (now) => {
    const dt = Math.min(0.1, (now - last) / 1000); last = now;
    if (phase === 'replay') { replayFrame(dt); raf = requestAnimationFrame(loop); return; }
    if (phase === 'paddock' || phase === 'parade') { view.update(dt); view.render(); raf = requestAnimationFrame(loop); return; }
    acc += window.__pause ? 0 : dt * SPEED;
    let steps = 0;
    input.steer = ((input.r ? 1 : 0) - (input.l ? 1 : 0)) * (TRACK.dir === -1 ? -1 : 1);
    while (acc >= 1 / 60 && steps < 6 * SPEED) {
      stepRace(race, 1 / 60, input); input.whip = false; input.god = false; acc -= 1 / 60; steps++;
      if (race.started && !(ended && endT > 5)) record();
    }
    // イベント
    for (const ev of race.events.splice(0)) {
      if (ev.type === 'start') { say('スタート！', 1.2, 'big'); A.gateOpen(); if (cfg.rival) setTimeout(() => say(`ライバル ${cfg.rival} も一緒に走る！`, 1.8), 1500); }
      else if (ev.type === 'whip') { view.onWhip(); A.whip(); }
      else if (ev.type === 'bump') { A.bump(); }
      else if (ev.type === 'god') {
        if (ev.r.isPlayer && !SPEC) { say('メダルゲームの馬神！', 2.2, 'big god'); $('b-god').classList.add('used'); $('god-fx').classList.add('on'); setTimeout(() => { const g = $('god-fx'); if (g) g.classList.remove('on'); }, 2000 / SPEED); view.onWhip(); A.coin(); A.cheer(); }
        else caller.lines.push(`${ev.r.num}番 ${ev.r.name}、メダルゲームの馬神が降臨！`);
        view.godGlow && view.godGlow(ev.r);
      }
      else if (ev.type === 'stumble') { if (ev.r.isPlayer && !SPEC) { say('つまずいた！ 追いすぎだ！', 1.6, 'warn'); view.onWhip(); A.bump(); } else caller.lines.push(`${ev.r.num}番 ${ev.r.name}、つまずいた！`); }
      else if (ev.type === 'fall') {
        A.thud(); A.crowdLevel(0.45);
        if (ev.r.isPlayer && !SPEC) { playerFell = true; say('落馬！ 競走中止…', 3.5, 'big warn'); view.setView('tv'); $('h-view').textContent = viewNames.tv; ended = true; endT = 0; }
        else caller.lines.push(`あっと${ev.r.num}番 ${ev.r.name}、落馬！ 競走中止！`);
      }
      else if (ev.type === 'mark') {
        const t = { 1000: '残り1000m', 600: '残り600m　そろそろ勝負！', 400: '残り400m！ ムチで追え！', 200: '残り200m！' }[ev.m];
        say(t, 1.6); if (ev.m <= 400) A.crowdLevel(ev.m === 200 ? 0.5 : 0.35);
      } else if (ev.type === 'finish' && SPEC) {
        if (ev.r.pos === 1) { say(`1着は ${ev.r.num}番 ${ev.r.name}！`, 3.5, 'big win'); A.cheer(); }
        if (race.finishedCount === race.racers.length) { ended = true; endT = 1.5; }
      } else if (ev.type === 'finish' && ev.r.isPlayer && !playerFell) {
        const pos = ev.r.pos;
        say(pos === 1 ? '1着！！ 勝った！' : `${pos}着でゴール`, 4, pos === 1 ? 'big win' : 'big');
        if (pos === 1) { A.fanfare('win'); A.cheer(); }
        ended = true; endT = 0;
      }
    }
    if (race.countdown > 0) {
      const c = Math.ceil(race.countdown);
      if (c !== lastCount && c > 0) { lastCount = c; say(String(c), 0.9, 'big'); }
    }
    caller.update(dt * (race.countdown > 0 ? 0 : 1));
    if (caller.lines.length) { $('h-call').textContent = caller.lines[caller.lines.length - 1]; $('h-call').classList.add('show'); caller.lines.length = 0; }
    view.update(dt); view.render();
    hud(dt);
    if (ended) {
      endT += dt * SPEED;
      if (endT > 3.2 && !$('h-result').dataset.shown) showResult();
    }
    if (ended !== 'done') raf = requestAnimationFrame(loop);
  };
  const hud = (dt) => {
    const pl = race.player;
    const rem = Math.max(0, race.dist - pl.p);
    $('h-rank').textContent = pl.fallen ? '中止' : `${pl.rank || '-'}/${race.racers.length}`;
    $('h-rem').textContent = pl.finished ? 'ゴール' : `${Math.ceil(rem)}m`;
    $('h-time').textContent = fmtTime(pl.finished ? pl.finishTime : race.t);
    const ratio = pl.energy / pl.cap;
    const gEl = $('h-gauge'); gEl.style.width = (ratio * 100).toFixed(1) + '%';
    gEl.style.background = ratio > 0.5 ? '#3ddc84' : ratio > 0.2 ? '#ffc93d' : '#ff4d4d';
    { const vs = $('vig-speed'); if (vs) { vs.style.opacity = SPEC || phase !== 'race' ? 0 : Math.max(0, Math.min(1, (pl.v - 15.5) / 2.5)) * 0.7 + (pl.whipT > 0 ? 0.3 : 0) + (ratio <= 0 ? 0.25 : 0); vs.classList.toggle('empty', ratio <= 0); } }
    $('h-speed').textContent = Math.round(pl.v * 3.6) + ' km/h' + (pl.whipT > 0 ? ' ⚡' : '');
    $('b-whip').classList.toggle('cool', pl.whipCool > 0);
    if (!SPEC) { const b2 = []; if (pl.slip > 0.25 && !pl.finished) b2.push('<span class="bf slip">🌀 スリップストリーム</span>'); if (pl.duel && !pl.finished) b2.push('<span class="bf duel">🔥 競り合い</span>'); if (pl.godT > 0) b2.push('<span class="bf godb">✨ 馬神</span>'); const html = b2.join(''); const hb = $('h-buff'); if (hb.innerHTML !== html) hb.innerHTML = html; }
    if (SPEC) { const top = [...race.racers].sort((a, b) => (a.rank || 99) - (b.rank || 99)).slice(0, 3); $('h-msg2').innerHTML = top.map((r, i) => `<span><small>${i + 1}</small>${r.num}</span>`).join(''); }
    if (!SPEC && pl.blocked && !pl.finished) { blockedT += dt; if (blockedT > 0.8 && msgT <= 0) say('前が詰まっている！ 左右に動け！', 1.3, 'warn'); } else blockedT = 0;
    if (!SPEC && ratio <= 0 && !pl.finished && !pl.fallen && msgT <= 0 && race.started) say('スタミナ切れ！ これ以上追うと危ない…', 1.6, 'warn');
    msgT -= dt; if (msgT <= 0) msgEl.classList.remove('show');
    drawMap();
    let sl = 0, sr = 0;
    for (const o of race.racers) {
      if (o === pl) continue;
      const dp = o.p - pl.p, dd = o.d - pl.d;
      if (Math.abs(dp) < 3.5 && Math.abs(dd) < 3) { const k = 1 - Math.abs(dd) / 3; if (dd < 0) sl = Math.max(sl, k); else sr = Math.max(sr, k); }
    }
    $('side-l').style.opacity = sl.toFixed(2); $('side-r').style.opacity = sr.toFixed(2);
    const sp = Math.floor(pl.stride / ((4.2 + pl.v * 0.16) / 3));
    if (sp !== lastStep && pl.v > 3) { lastStep = sp; A.hoof(0.25 + Math.min(0.4, pl.v / 40)); }
  };
  raf = requestAnimationFrame(loop);

  function results() {
    const all = race.racers.map(r => ({ r, time: (r.fallen ? 1e4 : 0) + (r.finished ? r.finishTime : race.t + (race.dist - r.p) / Math.max(10, r.v)) }));
    all.sort((a, b) => a.time - b.time);
    return all.map((x, i) => ({ pos: i + 1, name: x.r.name, jname: x.r.jname, num: x.r.num, time: x.time % 1e4, isPlayer: !!x.r.isPlayer, dnf: !!x.r.fallen,
      margin: x.r.fallen ? '中止' : i === 0 ? '' : marginText(x.time - all[i - 1].time, 16.5), silk: x.r.silk }));
  }

  // 写真判定：1着と2着がとても近いとき、ゴールの瞬間を真横から撮る
  let photo = null, finalT = 0;
  function takePhoto(list) {
    if (list.length < 2 || list[1].dnf || list[1].time - list[0].time > 0.06 || !REC.length) return null;
    finalT = race.t;
    const snap = race.racers.map(r => ({ u: r.u, d: r.d, v: r.v, stride: r.stride, energy: r.energy, fallen: r.fallen }));
    applyRec(list[0].time);
    const pv = view.view; view.setView('goal'); view.update(0.0001); view.render();
    let url = null; try { url = view.renderer.domElement.toDataURL('image/jpeg', 0.82); } catch (e) { /* */ }
    view.setView(pv);
    race.racers.forEach((r, i) => Object.assign(r, snap[i])); race.t = finalT;
    return url;
  }

  function showResult() {
    const el = $('h-result'); el.dataset.shown = '1';
    const list = SPEC ? null : results();
    if (SPEC) {
      const fl = fieldResult(race);
      photo = takePhoto(fl);
      el.innerHTML = `<div class="res-card"><h2>${esc(cfg.race.name)}</h2>${photo ? photoHtml(fl) : ''}
        <div class="res-table"><table><tr><th>着</th><th>番</th><th>馬名</th><th>着差</th></tr>${fl.slice(0, 5).map(x => `<tr><td>${x.pos}</td><td>${x.num}</td><td>${esc(x.name)}</td><td>${x.margin}</td></tr>`).join('')}</table></div>
        <div class="row2"><button id="res-replay" class="btn ghost">🔁 リプレイ</button><button id="res-next" class="btn primary">${cfg.nextLabel || '払い戻しへ'}</button></div></div>`;
      el.classList.remove('hidden');
      $('res-next').onclick = () => { setSimSeed(null); finish({ list: fl }); };
      $('res-replay').onclick = startReplay;
      return;
    }
    const me = list.find(x => x.isPlayer);
    photo = takePhoto(list);
    const rows = list.map(x => `<tr class="${x.isPlayer ? 'me' : ''} ${cfg.rival && x.name === cfg.rival ? 'rival' : ''}"><td>${x.dnf ? '-' : x.pos}</td><td><span class="num" style="background:#${(x.silk ?? 0xffffff).toString(16).padStart(6, '0')}">${x.num}</span></td><td>${esc(x.name)}${cfg.rival && x.name === cfg.rival ? '<em>ライバル</em>' : ''}<small>${esc(x.jname || '')}</small></td><td>${x.dnf ? '' : fmtTime(x.time)}</td><td>${x.margin}</td></tr>`).join('');
    el.innerHTML = `<div class="res-card"><h2>${esc(cfg.race.name)} 結果</h2><div class="res-me ${me.pos === 1 && !me.dnf ? 'win' : ''}">${me.dnf ? '競走中止' : `${me.pos}着 <small>${fmtTime(me.time)}</small>`}</div>
      ${photo ? photoHtml(list) : ''}
      <div class="res-table"><table><tr><th>着</th><th>番</th><th>馬名 / 騎手</th><th>タイム</th><th>着差</th></tr>${rows}</table></div>
      <div class="row2"><button id="res-replay" class="btn ghost">🔁 リプレイ</button><button id="res-next" class="btn primary">次へ</button></div></div>`;
    el.classList.remove('hidden');
    $('res-replay').onclick = startReplay;
    $('res-next').onclick = () => finish({ pos: me.pos, field: list.length, time: me.time, whips: race.player.whips, list, dnf: me.dnf });
  }
  const photoHtml = (l) => `<div class="photo"><img src="${photo}" alt="写真判定"><i></i><span>📸 写真判定　${l[0].num}番 ${esc(l[0].name)}　${l[1].margin}差</span></div>`;

  // リプレイ：記録した動きをもう一度再生する（視点・速さを変えられる）
  function startReplay() {
    if (!REC.length) return;
    finalT = finalT || race.t;
    phase = 'replay'; RP.t = Math.max(0, REC[0].t); RP.sp = 1;
    $('h-result').classList.add('hidden'); root.classList.add('replaying');
    const vw = ['tv', 'back', 'front', 'fp', 'goal'];
    const bar = () => {
      $('h-replay').innerHTML = `<div class="rp-top">🔁 リプレイ <span id="rp-t"></span></div>
        <div class="rp-bar"><input type="range" id="rp-seek" min="0" max="1000" value="0"></div>
        <div class="rp-btns">${vw.map(v => `<button class="chip ${view.view === v ? 'on' : ''}" data-v="${v}">${viewNames[v]}</button>`).join('')}</div>
        <div class="rp-btns">${[1, 0.5, 0.25].map(x => `<button class="chip ${RP.sp === x ? 'on' : ''}" data-s="${x}">${x === 1 ? '等速' : x === 0.5 ? '1/2' : '1/4'}</button>`).join('')}<button class="chip" data-a="goal">ゴール前へ</button><button class="chip" data-a="back">結果に戻る</button></div>`;
      $('h-replay').querySelectorAll('[data-v]').forEach(b => b.onclick = () => { view.setView(b.dataset.v); bar(); });
      $('h-replay').querySelectorAll('[data-s]').forEach(b => b.onclick = () => { RP.sp = +b.dataset.s; bar(); });
      $('h-replay').querySelector('[data-a=goal]').onclick = () => { RP.t = Math.max(REC[0].t, (results()[0].time || finalT) - 6); RP.sp = 0.5; view.setView('goal'); bar(); };
      $('h-replay').querySelector('[data-a=back]').onclick = endReplay;
      $('rp-seek').oninput = (e) => { RP.t = REC[0].t + (+e.target.value / 1000) * (REC[REC.length - 1].t - REC[0].t); };
    };
    bar(); $('h-replay').classList.remove('hidden');
  }
  function replayFrame(dt) {
    const T0 = REC[0].t, T1 = REC[REC.length - 1].t;
    RP.t += dt * RP.sp * SPEED; if (RP.t > T1) RP.t = T1;
    applyRec(RP.t);
    view.update(dt * RP.sp); view.render();
    const sk = $('rp-seek'); if (sk && document.activeElement !== sk) sk.value = Math.round((RP.t - T0) / (T1 - T0) * 1000);
    const tt = $('rp-t'); if (tt) tt.textContent = fmtTime(RP.t);
    drawMap();
  }
  function endReplay() {
    applyRec(REC[REC.length - 1].t); race.t = finalT;
    phase = 'done-replay'; root.classList.remove('replaying');
    $('h-replay').classList.add('hidden'); $('h-result').classList.remove('hidden');
    view.setView(SPEC ? 'tv' : userView);
    phase = 'replay-idle';
  }

  function finish(res) {
    if (ended === 'done') return; ended = 'done';
    cancelAnimationFrame(raf);
    window.removeEventListener('keydown', kd); window.removeEventListener('keyup', ku);
    A.stopCrowd(); A.stopBgm(); if (prevBgm) A.playBgm(prevBgm);
    view.dispose();
    root.classList.add('hidden'); root.classList.remove('spectate', 'pre', 'replaying'); root.innerHTML = '';
    if (SPEC) setSimSeed(null);
    document.body.classList.remove('in-race');
    active = null;
    cfg.onDone && cfg.onDone(quit ? null : res);
  }
  active = { race, view };
  window.__race = race; window.__view = view;
}
