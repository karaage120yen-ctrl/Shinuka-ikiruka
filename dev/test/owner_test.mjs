globalThis.localStorage = { _: {}, getItem(k) { return this._[k] || null; }, setItem(k, v) { this._[k] = v; }, removeItem(k) { delete this._[k]; } };
globalThis.window = globalThis; globalThis.document = { createElement: () => ({ getContext: () => null }) };
const O2 = await import('../src/owner.js');
const { S } = await import('../src/store.js');
const { deckFx, pull, GACHA_POOL } = await import('../src/gacha.js');
const { makeMyRace, makeCard, mcPrice } = await import('../src/bet.js');
const O = O2.ownerState();
for (let t = 0; t < 3; t++) { const L = O2.lots(O); const lot = L[t]; let p = lot.start, r; let n = 0; do { r = O2.bid(O, lot, p); if (!r.done) p = r.price + (r.step || 100); n++; } while (!r.done && n < 100); O2.buy(O, lot, r.price); }
let races = 0, wins = 0, dnf = 0;
for (let m = 0; m < 60; m++) {
  for (const H of O.horses) { H.plan = 'std'; const rs = O2.racesFor(H, O); if (rs.length && H.p.sta > 60) { H.entry = rs[0]; H.jockey = 'n2'; } }
  const r = O2.advance(O); races += r.races.length; wins += r.races.filter(x => x.pos === 1).length; dnf += r.races.filter(x => x.dnf).length;
}
console.log('owner', { money: Math.round(O.money), horses: O.horses.length, retired: S.horses.length, races, wins, dnf, earn: Math.round(O.earn), spent: O.spent });
const st = { pity: 0 }; const got = pull(200, st); const cnt = { SSR: 0, SR: 0, R: 0 }; got.forEach(c => cnt[c.rarity]++); console.log('gacha', cnt, GACHA_POOL.length);
S.gacha = got.map(c => c.id); console.log('deck', JSON.stringify(deckFx('horse', ['ssr-1', 'sr-1', 'r-1'], S.gacha)));
if (S.horses[0]) { const c = makeCard(0, ''); const h = S.horses[0]; const r = makeMyRace(c, h, { name: 'J', s: { tec: 60, whip: 60, bal: 60, fit: 60, jud: 60 } }); const me = r.horses.find(x => x.mine); console.log('myrace', r.no, r.name, r.surf, r.dist, r.horses.length, 'my pop', me.pop, 'odds', r.odds.tan[me.num] ?? Object.keys(r.odds.tan).length); }
const K = await import('../src/career.js');
console.log('ovr', O.horses.map(H => K.ovrOf(H.p) + '/' + H.p.wins + 'w/' + H.p.races.length));
{ const c = makeCard(0, ''); const h = { name: 'テストホース', s: { spd: 70, sta: 72, pow: 68, gut: 66, wis: 64 }, apt: { turf: 'A', dirt: 'C' }, style: '先行', coat: 1 };
  const r = makeMyRace(c, h, { name: 'J', s: { tec: 60, whip: 60, bal: 60, fit: 60, jud: 60 } }); const me = r.horses.find(x => x.mine);
  console.log('myrace', r.no, r.name, r.surf, r.dist, r.horses.length, 'my pop', me.pop, 'tan', JSON.stringify(r.horses.map(x => x.pop)));
  const { simulateField } = await import('../src/sim.js'); const { specsOf } = await import('../src/bet.js');
  const pos = []; for (let i = 0; i < 40; i++) { const res = simulateField(specsOf(r), r, 1000 + i); pos.push(res.find(x => x.num === me.num).pos); }
  console.log('my positions', pos.join(','), 'wins', pos.filter(p => p === 1).length);
}
