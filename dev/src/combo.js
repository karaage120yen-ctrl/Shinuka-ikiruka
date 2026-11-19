// ===== 人馬コンビ：同じ馬と騎手で走るほど息が合う =====
import { S, save } from './store.js';
export const bondKey = (h, j) => `${h}_${j}`;
export const bondN = (h, j) => (S.bonds || {})[bondKey(h, j)] || 0;
export const bondLv = (n) => Math.min(5, Math.floor(n / 3));
export const BOND_NAME = ['はじめまして', '顔なじみ', '息が合ってきた', '名コンビ', '黄金コンビ', '人馬一体'];
export function addBond(h, j) { if (h == null || j == null) return; S.bonds = S.bonds || {}; const k = bondKey(h, j); S.bonds[k] = (S.bonds[k] || 0) + 1; save(); }
// レースの能力にボーナスを足す（Lv1ごとに 馬+0.6・騎手+0.8）
export function applyBond(spec, n) {
  const lv = bondLv(n); if (!lv) return spec;
  const h = { ...spec.h }, j = { ...spec.j };
  for (const k in h) h[k] = h[k] + lv * 0.6;
  for (const k in j) j[k] = j[k] + lv * 0.8;
  return { ...spec, h, j, bondLv: lv };
}
