// ===== 殿堂（名馬・名騎手の記念館） =====
import { S, save } from './store.js';
import { render, bind, header, esc, hex } from './uikit.js';
import { COAT, H_KEYS, H_NAMES, J_KEYS, J_NAMES, rankOf, rankColor } from './data.js';

export const hallHorse = (h) => (h.g1Wins || 0) >= 3 || ['S', 'SS'].includes(h.rank) || (h.earnings || 0) >= 100000;
export const hallJockey = (j) => (j.g1Wins || 0) >= 10 || (j.wins || 0) >= 1000 || ['S', 'SS'].includes(j.rank);
export function newHallCount() {
  const ids = [...S.horses.filter(hallHorse), ...S.jockeys.filter(hallJockey)].map(x => x.id + x.name);
  const seen = S.hallSeen || [];
  return ids.filter(x => !seen.includes(x)).length;
}
let back = null;
export function openHall(home) { back = home; draw(); }
function plaque(c, kind) {
  const keys = kind === 'h' ? H_KEYS : J_KEYS, names = kind === 'h' ? H_NAMES : J_NAMES;
  const titles = (c.titles || []).slice(0, 8);
  return `<div class="plaque ${kind}"><div class="pl-h">${kind === 'h' ? `<span class="face" style="--c:${hex(COAT[c.coat] ? COAT[c.coat].body : 0x8b5a2b)}">🐴</span>` : '<span class="face">🏇</span>'}
    <div><b>${esc(c.name)}</b><small>${kind === 'h' ? `${c.sex || ''} 父${esc(c.sire || '')}` : ''}　総合評価 <b style="color:${rankColor(c.rank)}">${c.rank}</b></small></div></div>
    <div class="pl-r">${kind === 'h' ? `${(c.record || []).slice(0, 3).join('-')}-${c.record ? c.record[3] : 0}　${c.wins}勝（G1 ${c.g1Wins}勝）　獲得 ${Math.round(c.earnings || 0).toLocaleString('ja-JP')}万円` : `${c.wins}勝（G1 ${c.g1Wins}勝）　${c.rides || 0}騎乗`}</div>
    <div class="pl-s">${keys.map(k => { const r = rankOf(c.s[k]); return `<span>${names[k]}<b style="color:${rankColor(r)}">${r}</b></span>`; }).join('')}</div>
    ${titles.length ? `<div class="pl-t">${titles.map(t => `<span>🏆${esc(t)}</span>`).join('')}</div>` : ''}
    ${c.died ? '<div class="pl-m">安らかに。</div>' : ''}</div>`;
}
function draw() {
  const hs = S.horses.filter(hallHorse).sort((a, b) => (b.score || 0) - (a.score || 0));
  const js = S.jockeys.filter(hallJockey).sort((a, b) => (b.score || 0) - (a.score || 0));
  S.hallSeen = [...hs, ...js].map(x => x.id + x.name); save();
  render(`${header('殿堂')}<div class="page hall">
    <p class="note">殿堂入りの条件　馬：G1を3勝・総合評価S以上・獲得10億円のどれか　騎手：G1を10勝・1000勝・総合評価S以上のどれか</p>
    <div class="sec">🐴 殿堂馬（${hs.length}）</div>${hs.length ? hs.map(h => plaque(h, 'h')).join('') : '<div class="empty">まだいない</div>'}
    <div class="sec">🏇 殿堂騎手（${js.length}）</div>${js.length ? js.map(j => plaque(j, 'j')).join('') : '<div class="empty">まだいない</div>'}
  </div>`);
  bind({ go: () => back() });
}
