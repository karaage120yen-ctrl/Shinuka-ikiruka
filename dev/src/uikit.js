// ===== 画面づくりの共通部品 =====
import { S } from './store.js';
export const app = () => document.getElementById('app');
export const esc = (s) => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
export const hex = (n) => '#' + (n ?? 0xffffff).toString(16).padStart(6, '0');
export function render(html, keep) { const y = window.scrollY; app().innerHTML = html; window.scrollTo(0, keep ? y : 0); }
export function bind(map) {
  document.querySelectorAll('#app [data-act], .modal [data-act]').forEach(el => {
    const a = el.dataset.act;
    if (map[a]) el.onclick = (e) => { e.preventDefault(); map[a](el.dataset.v, el); };
  });
}
export function toast(t) {
  const el = document.createElement('div'); el.className = 'toast'; el.textContent = t;
  document.body.appendChild(el); setTimeout(() => el.classList.add('show'), 10);
  setTimeout(() => { el.classList.remove('show'); setTimeout(() => el.remove(), 400); }, 2400);
}
export function header(title) {
  return `<header class="top"><button class="back" data-act="go">‹</button><h1>${title}</h1><div class="carrot">🥕 ${S.carrots}</div></header>`;
}
export function modal(html, { onClose, cls = '' } = {}) {
  const m = document.createElement('div');
  m.className = 'modal ' + cls;
  m.innerHTML = `<div class="modal-card">${html}</div>`;
  document.body.appendChild(m);
  const close = () => { m.remove(); onClose && onClose(); };
  m.addEventListener('click', (e) => { if (e.target === m) close(); });
  m.querySelectorAll('[data-close]').forEach(b => b.onclick = close);
  return { el: m, close };
}
export const man = (n) => { n = Math.round(n); const a = Math.abs(n), s = a >= 10000 ? `${Math.floor(a / 10000)}億${a % 10000 ? (a % 10000).toLocaleString('ja-JP') + '万' : ''}円` : `${a.toLocaleString('ja-JP')}万円`; return (n < 0 ? '-' : '') + s; };
