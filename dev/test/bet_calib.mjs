import * as B from '../src/bet.js';
import { simulateField } from '../src/sim.js';
const data=[];
for (let w=0; w<14; w++) { const c=B.makeCard(w,'C'+w); for (const r of c.races){ const res=simulateField(B.specsOf(r), r, B.raceSeed(c,r)); data.push({r, win: res[0].num-1}); } }
for (const T of [0.08,0.1,0.12,0.15,0.18,0.22,0.28]) { let L=0, fav=0; for (const d of data){ const sv=d.r.horses.map(x=>B.strength(x,d.r.dist)/T); const m=Math.max(...sv); const e=sv.map(v=>Math.exp(v-m)); const z=e.reduce((a,b)=>a+b,0); L+=Math.log(e[d.win]/z); } console.log(T, L.toFixed(1)); }
let fav=0; for (const d of data){ const sv=d.r.horses.map(x=>B.strength(x,d.r.dist)); const bi=sv.indexOf(Math.max(...sv)); if(bi===d.win) fav++; } console.log('top-strength win%', (fav/data.length*100).toFixed(0), data.length);
let bet=0, ret=0, fw=0; for (const d of data){ for (const h of d.r.horses){ bet+=100; if (h.num-1===d.win) ret+=B.payout100(B.oddsOf(d.r,'tan',[h.num])); } if (d.r.horses[d.win].pop===1) fw++; }
console.log('tan return', (ret/bet).toFixed(2), 'fav(pop1) win%', (fw/data.length*100).toFixed(0));
for (const pp of [[1],[2,3],[4,5,6],[7,8,9,10,11,12,13,14,15,16]]) { let b=0,r=0; for (const d of data){ for (const h of d.r.horses){ if(!pp.includes(h.pop)) continue; b+=100; if (h.num-1===d.win) r+=B.payout100(B.oddsOf(d.r,'tan',[h.num])); } } console.log('pop',pp.join(','),'return',(r/b).toFixed(2)); }
