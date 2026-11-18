import * as B from '../src/bet.js';
import { simulateField } from '../src/sim.js';
const c1 = B.makeCard(0, 'ABC12'), c2 = B.makeCard(0, 'ABC12'), c3 = B.makeCard(0, '');
console.log(c1.label, c1.place, c1.races.map(r=>`${r.no}R ${r.name} ${r.surf}${r.dist} ${r.horses.length}頭`).join(' / '));
console.log('same card', c1.races[5].horses.map(h=>h.name).join()===c2.races[5].horses.map(h=>h.name).join(), 'diff solo', c1.races[5].horses[0].name!==c3.races[5].horses[0].name);
const r = c1.races[5];
console.log(r.horses.slice(0,6).map(h=>`${h.frame}枠${h.num} ${h.name} ${h.mark} ${B.oddsOf(r,'tan',[h.num])}倍 ${h.pop}人気`).join('\n'));
const t0=Date.now(); const a = simulateField(B.specsOf(r), r, B.raceSeed(c1, r)); const b = simulateField(B.specsOf(r), r, B.raceSeed(c2, r)); console.log('ms', Date.now()-t0);
console.log('same result', a.map(x=>x.num).join()===b.map(x=>x.num).join(), a.slice(0,3).map(x=>x.num));
// 単勝回収率チェック（オッズのずれ）
let bet=0, ret=0, favWin=0, N=0;
for (let w=0; w<12; w++) { const c=B.makeCard(w,'R'+w); for (const rr of c.races) { const res=simulateField(B.specsOf(rr), rr, B.raceSeed(c, rr), 1/30); const win=res[0].num; for (const h of rr.horses){ bet+=100; if(h.num===win) ret+=B.payout100(B.oddsOf(rr,'tan',[h.num])); } const fav=rr.horses.find(h=>h.pop===1).num; if(fav===win) favWin++; N++; } }
console.log('tan return', (ret/bet).toFixed(2), 'fav win%', (favWin/N*100).toFixed(0), 'races', N);
const tk={type:'trifecta',mode:'box',combos:B.combos('trifecta','box',[[1,2,3]],r),amt:100}; console.log('box combos', tk.combos.length);
