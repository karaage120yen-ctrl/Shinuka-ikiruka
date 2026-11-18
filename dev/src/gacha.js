// ===== ガチャ（枠だけ。キャラはあとで追加する） =====
// キャラを追加するときは、このリストに足していけばOK。
//   rarity: 'SSR' | 'SR' | 'R'
//   kind:   'horse'（馬） | 'jockey'（騎手） | 'support'（サポート）など自由に
//   bonus:  あとで育成に効果をつけるときに使う（例: { spd: 5 }）
export const GACHA_POOL = [
  { id: 'ssr-1', rarity: 'SSR', kind: 'horse', name: 'SSRキャラ①（準備中）', bonus: {} },
  { id: 'ssr-2', rarity: 'SSR', kind: 'jockey', name: 'SSRキャラ②（準備中）', bonus: {} },
  { id: 'ssr-3', rarity: 'SSR', kind: 'support', name: 'SSRキャラ③（準備中）', bonus: {} },
  { id: 'sr-1', rarity: 'SR', kind: 'horse', name: 'SRキャラ①（準備中）', bonus: {} },
  { id: 'sr-2', rarity: 'SR', kind: 'horse', name: 'SRキャラ②（準備中）', bonus: {} },
  { id: 'sr-3', rarity: 'SR', kind: 'jockey', name: 'SRキャラ③（準備中）', bonus: {} },
  { id: 'sr-4', rarity: 'SR', kind: 'support', name: 'SRキャラ④（準備中）', bonus: {} },
  { id: 'r-1', rarity: 'R', kind: 'horse', name: 'Rキャラ①（準備中）', bonus: {} },
  { id: 'r-2', rarity: 'R', kind: 'horse', name: 'Rキャラ②（準備中）', bonus: {} },
  { id: 'r-3', rarity: 'R', kind: 'jockey', name: 'Rキャラ③（準備中）', bonus: {} },
  { id: 'r-4', rarity: 'R', kind: 'support', name: 'Rキャラ④（準備中）', bonus: {} },
  { id: 'r-5', rarity: 'R', kind: 'support', name: 'Rキャラ⑤（準備中）', bonus: {} },
];

export const RATES = { SSR: 0.03, SR: 0.18, R: 0.79 };
export const COST_1 = 10, COST_10 = 100;

function rollRarity(minSR) {
  const x = Math.random();
  if (x < RATES.SSR) return 'SSR';
  if (x < RATES.SSR + RATES.SR || minSR) return 'SR';
  return 'R';
}

export function pull(count) {
  const out = [];
  for (let i = 0; i < count; i++) {
    const rar = rollRarity(count === 10 && i === 9);
    const pool = GACHA_POOL.filter(c => c.rarity === rar);
    out.push(pool[Math.floor(Math.random() * pool.length)]);
  }
  return out;
}
