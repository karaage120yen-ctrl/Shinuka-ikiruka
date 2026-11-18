import * as B from '../src/bet.js';
import { simulateField } from '../src/sim.js';
const data=[];
for (let w=0; w<14; w++) { const c=B.makeCard(w,'C'+w); for (const r of c.races){ const res=simulateField(B.specsOf(r), r, B.raceSeed(c,r)); data.push({r, win: res[0].num-1}); } }
for (const T of [0.1,0.11]) { B.setT(T); for (const d of data) B.priceRace(d.r);
  const out=[]; for (const pp of [[1],[2,3],[4,5,6],[7,8,9,10,11,12,13,14,15,16]]) { let b=0,r=0; for (const d of data){ for (const h of d.r.horses){ if(!pp.includes(h.pop)) continue; b+=100; if (h.num-1===d.win) r+=B.payout100(B.oddsOf(d.r,'tan',[h.num])); } } out.push((r/b).toFixed(2)); }
  console.log(T, out.join(' ')); }
