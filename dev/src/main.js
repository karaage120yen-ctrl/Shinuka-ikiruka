import { home } from './ui.js';

home();

// ダブルタップでの拡大を防ぐ
let lastTouch = 0;
document.addEventListener('touchend', (e) => { const now = Date.now(); if (now - lastTouch < 300 && e.target.closest('button')) e.preventDefault(); lastTouch = now; }, { passive: false });

if ('serviceWorker' in navigator && location.protocol === 'https:') {
  navigator.serviceWorker.register('./sw.js').catch(() => {});
}
