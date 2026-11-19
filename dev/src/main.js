import { initNet } from './net.js';
import { home } from './ui.js';
import { startRace } from './racescreen.js';
// テスト用：window.__race3d({ place, weather, going, surf, dist })
window.__race3d = (o) => startRace({ race: { name: o.title || 'テスト', dist: o.dist || 1600, surf: o.surf || '芝', place: o.place, weather: o.weather, going: o.going, lv: 50, g: o.g }, fieldSize: o.n || 10,
  player: { name: 'テスト', jname: 'テスト', h: { spd: 60, sta: 60, pow: 60, gut: 60, wis: 60 }, j: { tec: 60, whip: 60, bal: 60, fit: 60, jud: 60 }, apt: 'A', cond: 2, style: '先行', coat: o.coat ?? 0, silk: 1, hsk: o.hsk || [] }, onDone: () => {} });

home();
initNet();
// 最初にさわったときに音を使えるようにする（スマホは操作がないと音が出せない）
import * as A from './audio.js';
import { S } from './store.js';
const unlock = () => { A.setSound(S.settings.sound); A.setVolumes(S.settings.vol); A.initAudio(); };
document.addEventListener('pointerdown', unlock, { passive: true });
document.addEventListener('click', (e) => { if (e.target.closest('button')) A.click(); }, true);

// ダブルタップでの拡大を防ぐ
let lastTouch = 0;
document.addEventListener('touchend', (e) => { const now = Date.now(); if (now - lastTouch < 300 && e.target.closest('button')) e.preventDefault(); lastTouch = now; }, { passive: false });

if ('serviceWorker' in navigator && location.protocol === 'https:') {
  navigator.serviceWorker.register('./sw.js').catch(() => {});
}
