import { createRace, stepRace, makeOpponents, aiLane } from '../src/sim.js';
const dist=2000, stat=60;
const ph = {spd:stat,sta:stat,pow:stat,gut:stat,wis:stat};
const pspec = {name:'PLAYER', isPlayer:true, ai:true, h:ph, j:{tec:50,whip:50,bal:50,fit:50,jud:50}, apt:'A', cond:2, style:'先行'};
const opps = makeOpponents({dist,lv:60}, pspec, 11);
const R = createRace({dist, surf:'芝', specs:[pspec,...opps]}); R.countdown=0;
let tt=0, log=[];
while (R.finishedCount < R.racers.length && tt<300){ stepRace(R,1/60,{steer:0,whip:false}); tt+=1/60;
  if (Math.abs(tt%20)<1/60) log.push(tt.toFixed(0)+'s '+[...R.racers].sort((a,b)=>b.p-a.p).map(r=>(r.isPlayer?'*':'')+r.style[0]+Math.round(r.p)+'/'+r.v.toFixed(1)+'/'+(r.energy/r.cap).toFixed(2)).join(' '));
}
console.log(log.join('\n'));
for (const r of R.order) console.log(r.pos, r.isPlayer?'*':' ', r.style, r.finishTime.toFixed(2), 'top',r.top.toFixed(2),'cap',r.cap.toFixed(0),'e',(r.energy/r.cap).toFixed(2), 'gd',r.gateDelay.toFixed(2),'d',r.d.toFixed(1), 'apt',r.apt,'cond',r.cond, 'sd', r.spurtDist.toFixed(0));
