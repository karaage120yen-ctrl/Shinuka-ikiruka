// ===== レース画面（操作・HUD・結果） =====
import { createRace, stepRace, makeOpponents, marginText, trackPos, TRACK } from './sim.js';
import { RaceView } from './render3d.js';
import { fmtTime, SILKS } from './data.js';
import * as A from './audio.js';
import { S, save } from './store.js';

let active = null;
const SPEED = /fast/.test(location.hash) ? 5 : 1; // テスト用の早送り

export function startRace(cfg) {
  const root = document.getElementById('race-screen');
  root.innerHTML = `
    <canvas id="race-canvas"></canvas>
    <div class="hud-top">
      <div class="hud-race"><b>${cfg.race.g ? `<span class="grade g-${cfg.race.g}">${cfg.race.g}</span>` : ''}${cfg.race.name}</b><span>${cfg.race.place || ''} ${cfg.race.surf}${cfg.race.dist}m</span></div>
      <div class="hud-stats"><div><small>順位</small><b id="h-rank">-</b></div><div><small>残り</small><b id="h-rem">-</b></div><div><small>タイム</small><b id="h-time">0:00.0</b></div></div>
    </div>
    <canvas id="minimap" width="220" height="130"></canvas>
    <button id="h-view" class="hud-small">視点</button>
    <button id="h-quit" class="hud-small hud-quit">中止</button>
    <div id="h-msg" class="hud-msg"></div><div id="side-l" class="side l"></div><div id="side-r" class="side r"></div>
    <div class="hud-bottom">
      <div class="gauge-wrap"><div class="gauge-label"><span>体力</span><span id="h-speed">0 km/h</span></div><div class="gauge"><div id="h-gauge"></div></div></div>
      <div class="ctrl">
        <div class="steer"><button id="b-left" class="cbtn">◀</button><button id="b-right" class="cbtn">▶</button></div>
        <button id="b-whip" class="cbtn whip">ムチ</button>
      </div>
    </div>
    <div id="h-result" class="hud-result hidden"></div>`;
  root.classList.remove('hidden');
  document.body.classList.add('in-race');

  const pSpec = { ...cfg.player, isPlayer: true, silk: SILKS[cfg.player.silk ?? 0] };
  const n = cfg.fieldSize || 12;
  const opps = cfg.opponents ? [...cfg.opponents] : [];
  if (opps.length < n - 1) opps.push(...makeOpponents(cfg.race, pSpec, n - 1 - opps.length));
  const race = createRace({ dist: cfg.race.dist, surf: cfg.race.surf, specs: [pSpec, ...opps] });
  const lowPower = /iPhone|iPad|Android/i.test(navigator.userAgent) && (navigator.hardwareConcurrency || 4) <= 4;
  const view = new RaceView(document.getElementById('race-canvas'), race, { view: S.settings.view || 'fp', title: cfg.race.name, lowPower });
  A.initAudio(); A.setSound(S.settings.sound); A.startCrowd(); A.crowdLevel(0.05);

  const input = { steer: 0, whip: false, l: false, r: false };
  const $ = (id) => document.getElementById(id);
  const hold = (el, on, off) => {
    el.addEventListener('pointerdown', (e) => { e.preventDefault(); try { el.setPointerCapture(e.pointerId); } catch (_) { } el.classList.add('on'); on(); });
    const up = (e) => { el.classList.remove('on'); off && off(); };
    el.addEventListener('pointerup', up); el.addEventListener('pointercancel', up); el.addEventListener('pointerleave', up);
  };
  hold($('b-left'), () => { input.l = true; }, () => { input.l = false; });
  hold($('b-right'), () => { input.r = true; }, () => { input.r = false; });
  hold($('b-whip'), () => { input.whip = true; }, null);
  const keys = (e, down) => {
    if (e.key === 'ArrowLeft' || e.key === 'a') input.l = down;
    if (e.key === 'ArrowRight' || e.key === 'd') input.r = down;
    if ((e.key === ' ' || e.key === 'ArrowUp') && down) input.whip = true;
  };
  const kd = (e) => keys(e, true), ku = (e) => keys(e, false);
  window.addEventListener('keydown', kd); window.addEventListener('keyup', ku);
  const views = ['fp', 'back', 'tv'];
  const viewNames = { fp: '騎手視点', back: '後ろから', tv: '中継' };
  $('h-view').textContent = viewNames[view.view] || '視点';
  $('h-view').onclick = () => { const v = views[(views.indexOf(view.view) + 1) % views.length]; view.setView(v); S.settings.view = v; save(); $('h-view').textContent = viewNames[v]; };
  let quit = false;
  $('h-quit').onclick = () => { if (confirm('レースを中止しますか？（出走しなかったことになります）')) { quit = true; finish(null); } };

  const msgEl = $('h-msg');
  let msgT = 0;
  const say = (t, dur = 1.6, cls = '') => { msgEl.textContent = t; msgEl.className = 'hud-msg show ' + cls; msgT = dur; };

  const mm = $('minimap').getContext('2d');
  const drawMap = () => {
    const c = mm.canvas; mm.clearRect(0, 0, c.width, c.height);
    const sx = (c.width - 16) / (TRACK.Ls + 2 * TRACK.R + 60), sz = (c.height - 16) / (2 * TRACK.R + 60);
    const s = Math.min(sx, sz), ox = c.width / 2, oz = c.height / 2;
    mm.strokeStyle = 'rgba(255,255,255,0.75)'; mm.lineWidth = 6; mm.beginPath();
    for (let u = 0; u <= TRACK.P; u += 20) { const p = trackPos(u, 10); const X = ox + p.x * s, Y = oz - p.z * s; u ? mm.lineTo(X, Y) : mm.moveTo(X, Y); }
    mm.closePath(); mm.stroke();
    const g = trackPos(TRACK.finishU, 10); mm.fillStyle = '#ff3b3b'; mm.fillRect(ox + g.x * s - 1, oz - g.z * s - 6, 3, 12);
    for (const r of race.racers) {
      const p = trackPos(r.u, r.d);
      mm.fillStyle = r.isPlayer ? '#ffe14d' : '#'+(r.silk ?? 0xffffff).toString(16).padStart(6, '0');
      mm.beginPath(); mm.arc(ox + p.x * s, oz - p.z * s, r.isPlayer ? 4.5 : 3, 0, Math.PI * 2); mm.fill();
      if (r.isPlayer) { mm.strokeStyle = '#000'; mm.lineWidth = 1; mm.stroke(); }
    }
  };

  let last = performance.now(), acc = 0, raf = 0, ended = false, endT = 0, lastStep = 0, blockedT = 0, lastCount = 3;
  say('3', 1);
  const loop = (now) => {
    const dt = Math.min(0.1, (now - last) / 1000); last = now;
    acc += dt * SPEED;
    let steps = 0;
    input.steer = (input.r ? 1 : 0) - (input.l ? 1 : 0);
    while (acc >= 1 / 60 && steps < 6 * SPEED) {
      stepRace(race, 1 / 60, input); input.whip = false; acc -= 1 / 60; steps++;
    }
    // イベント
    for (const ev of race.events.splice(0)) {
      if (ev.type === 'start') { say('スタート！', 1.2, 'big'); A.gateOpen(); }
      else if (ev.type === 'whip') { view.onWhip(); A.whip(); }
      else if (ev.type === 'bump') { A.bump(); }
      else if (ev.type === 'mark') {
        const t = { 1000: '残り1000m', 600: '残り600m　そろそろ勝負！', 400: '残り400m！ ムチで追え！', 200: '残り200m！' }[ev.m];
        say(t, 1.6); if (ev.m <= 400) A.crowdLevel(ev.m === 200 ? 0.5 : 0.35);
      } else if (ev.type === 'finish' && ev.r.isPlayer) {
        const pos = ev.r.pos;
        say(pos === 1 ? '1着！！ 勝った！' : `${pos}着でゴール`, 4, pos === 1 ? 'big win' : 'big');
        if (pos === 1) A.fanfare();
        ended = true; endT = 0;
      }
    }
    if (race.countdown > 0) {
      const c = Math.ceil(race.countdown);
      if (c !== lastCount && c > 0) { lastCount = c; say(String(c), 0.9, 'big'); }
    }
    view.update(dt); view.render();
    // HUD
    const pl = race.player;
    const rem = Math.max(0, race.dist - pl.p);
    $('h-rank').textContent = `${pl.rank || '-'}/${race.racers.length}`;
    $('h-rem').textContent = pl.finished ? 'ゴール' : `${Math.ceil(rem)}m`;
    $('h-time').textContent = fmtTime(pl.finished ? pl.finishTime : race.t);
    const ratio = pl.energy / pl.cap;
    const gEl = $('h-gauge'); gEl.style.width = (ratio * 100).toFixed(1) + '%';
    gEl.style.background = ratio > 0.5 ? '#3ddc84' : ratio > 0.2 ? '#ffc93d' : '#ff4d4d';
    $('h-speed').textContent = Math.round(pl.v * 3.6) + ' km/h' + (pl.whipT > 0 ? ' ⚡' : '');
    $('b-whip').classList.toggle('cool', pl.whipCool > 0);
    if (pl.blocked && !pl.finished) { blockedT += dt; if (blockedT > 0.8 && msgT <= 0) say('前が詰まっている！ 左右に動け！', 1.3, 'warn'); } else blockedT = 0;
    if (ratio <= 0 && !pl.finished && msgT <= 0 && race.started) say('スタミナ切れ…！', 1.2, 'warn');
    msgT -= dt; if (msgT <= 0) msgEl.classList.remove('show');
    drawMap();
    // 横に馬がいるときは画面のはしを光らせる
    let sl = 0, sr = 0;
    for (const o of race.racers) {
      if (o === pl) continue;
      const dp = o.p - pl.p, dd = o.d - pl.d;
      if (Math.abs(dp) < 3.5 && Math.abs(dd) < 3) { const k = 1 - Math.abs(dd) / 3; if (dd < 0) sl = Math.max(sl, k); else sr = Math.max(sr, k); }
    }
    $('side-l').style.opacity = sl.toFixed(2); $('side-r').style.opacity = sr.toFixed(2);
    // 足音
    const sp = Math.floor(pl.stride / ((4.2 + pl.v * 0.16) / 3));
    if (sp !== lastStep && pl.v > 3) { lastStep = sp; A.hoof(0.25 + Math.min(0.4, pl.v / 40)); }
    if (ended) {
      endT += dt * SPEED;
      if (endT > 3.2 && !$('h-result').dataset.shown) showResult();
    }
    raf = requestAnimationFrame(loop);
  };
  raf = requestAnimationFrame(loop);

  function results() {
    // まだゴールしていない馬は今の速さで予想
    const all = race.racers.map(r => ({ r, time: r.finished ? r.finishTime : race.t + (race.dist - r.p) / Math.max(10, r.v) }));
    all.sort((a, b) => a.time - b.time);
    const win = all[0];
    return all.map((x, i) => ({ pos: i + 1, name: x.r.name, jname: x.r.jname, num: x.r.num, time: x.time, isPlayer: !!x.r.isPlayer,
      margin: i === 0 ? '' : marginText(x.time - all[i - 1].time, 16.5), silk: x.r.silk }));
  }

  function showResult() {
    const el = $('h-result'); el.dataset.shown = '1';
    const list = results();
    const me = list.find(x => x.isPlayer);
    const rows = list.map(x => `<tr class="${x.isPlayer ? 'me' : ''}"><td>${x.pos}</td><td><span class="num" style="background:#${(x.silk ?? 0xffffff).toString(16).padStart(6, '0')}">${x.num}</span></td><td>${x.name}<small>${x.jname || ''}</small></td><td>${fmtTime(x.time)}</td><td>${x.margin}</td></tr>`).join('');
    el.innerHTML = `<div class="res-card"><h2>${cfg.race.name} 結果</h2><div class="res-me ${me.pos === 1 ? 'win' : ''}">${me.pos}着 <small>${fmtTime(me.time)}</small></div>
      <div class="res-table"><table><tr><th>着</th><th>番</th><th>馬名 / 騎手</th><th>タイム</th><th>着差</th></tr>${rows}</table></div>
      <button id="res-next" class="btn primary">次へ</button></div>`;
    el.classList.remove('hidden');
    $('res-next').onclick = () => finish({ pos: me.pos, field: list.length, time: me.time, whips: race.player.whips, list });
  }

  function finish(res) {
    if (ended === 'done') return; ended = 'done';
    cancelAnimationFrame(raf);
    window.removeEventListener('keydown', kd); window.removeEventListener('keyup', ku);
    A.stopCrowd();
    view.dispose();
    root.classList.add('hidden'); root.innerHTML = '';
    document.body.classList.remove('in-race');
    active = null;
    cfg.onDone && cfg.onDone(quit ? null : res);
  }
  active = { race, view };
  window.__race = race;
}
