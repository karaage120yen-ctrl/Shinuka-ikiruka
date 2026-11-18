import { simulateField } from '../src/sim.js';
import { APT_FACTOR, COND_SPEED } from '../src/data.js';
const rnd=(a,b)=>a+Math.random()*(b-a), pick=a=>a[Math.floor(Math.random()*a.length)];
function mk(lv, dist){ const h={spd:lv+rnd(-8,8),pow:lv+rnd(-8,8),gut:lv+rnd(-8,8),wis:lv+rnd(-8,8),sta:Math.max(lv+rnd(-12,10),(dist*1.13-1100)/24+rnd(-14,10))}; const jl=rnd(35,85); const j={tec:jl,whip:jl+rnd(-8,8),bal:jl+rnd(-8,8),fit:jl+rnd(-8,8),jud:jl+rnd(-8,8)}; return {name:'x',h,j,apt:pick(['A','A','B','B','C']),cond:pick([1,2,2,3,3,4]),style:pick(['逃げ','先行','先行','差し','差し','追込']),coat:0,silk:0}; }
export function idx(s, dist){ const h=s.h,j=s.j; let top=(16.55+0.022*h.spd)*APT_FACTOR[s.apt]*COND_SPEED[s.cond]; const cap=1100+24*h.sta; const need=dist*1.13; const r=cap/need; if(r<1) top*= 1-(1-r)*A; top += j.whip*B + h.gut*C + h.pow*D + (j.bal+h.wis)*E; return top; }
let A=0.12,B=0.002,C=0.002,D=0.001,E=0.001;
const data=[];
for(let n=0;n<400;n++){ const dist=pick([1200,1600,2000,2400,3000]); const lv=rnd(25,80); const N=pick([8,10,12,14,16]); const specs=[...Array(N)].map(()=>mk(lv,dist)); const res=simulateField(specs,{dist,surf:'芝'}); data.push({dist,specs,win:res[0].num-1, top3:res.slice(0,3).map(x=>x.num-1)}); }
function ll(T){ let L=0; for(const d of data){ const xs=d.specs.map(s=>idx(s,d.dist)/T); const m=Math.max(...xs); const z=xs.reduce((a,x)=>a+Math.exp(x-m),0); L+= xs[d.win]-m-Math.log(z);} return L; }
let best=null;
for (const a of [0.08,0.15,0.25,0.4]) for (const b of [0,0.002,0.004]) for(const c of [0,0.002,0.004]) for (const T of [0.05,0.08,0.12,0.18,0.25]) { A=a;B=b;C=c; const v=ll(T); if(!best||v>best.v) best={v,a,b,c,T}; }
console.log(best, 'baseline', data.length*Math.log(1/12));
A=best.a;B=best.b;C=best.c; const T=best.T;
// calibration buckets
const bk=[0,0,0,0,0,0],bw=[0,0,0,0,0,0];
for(const d of data){ const xs=d.specs.map(s=>idx(s,d.dist)/T); const m=Math.max(...xs); const e=xs.map(x=>Math.exp(x-m)); const z=e.reduce((a,b)=>a+b,0); e.forEach((v,i)=>{const p=v/z; const b=p<.05?0:p<.1?1:p<.2?2:p<.35?3:p<.5?4:5; bk[b]+=p; bw[b]+= (d.win===i)?1:0; }); }
console.log('pred',bk.map(x=>x.toFixed(1)).join(' '),'\nreal',bw.join(' '));
