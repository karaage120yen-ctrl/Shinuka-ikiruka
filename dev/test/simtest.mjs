import { createRace, stepRace, makeOpponents, marginText, aiLane } from '../src/sim.js';
import { fmtTime } from '../src/data.js';
function run(dist, stat, lv, policy, n=11){
  const ph = {spd:stat,sta:stat,pow:stat,gut:stat,wis:stat};
  const pspec = {name:'PLAYER', isPlayer:true, ai: policy==='ai', h:ph, j:{tec:50,whip:50,bal:50,fit:50,jud:50}, apt:'A', cond:2, style:'先行'};
  const race = {dist, lv};
  const opps = makeOpponents(race, pspec, n);
  const R = createRace({dist, surf:'芝', specs:[pspec, ...opps]});
  R.countdown = 0; R.started = true;
  let tt=0;
  while (R.finishedCount < R.racers.length && tt < 400){
    const pl=R.player; const rem = dist-pl.p;
    const input={steer:0, whip: policy.startsWith('w') && rem<+policy.slice(1) && pl.energy>0};
    // steer out if blocked
    if(!pl._lt||Math.random()<0.06) pl._lt=aiLane(pl,R,rem); input.steer = Math.abs(pl._lt-pl.d)<0.15?0:Math.sign(pl._lt-pl.d)*0.7;
    stepRace(R, 1/60, input); tt+=1/60;
  }
  const o=R.order; const w=o[0];
  return {pos:R.player.pos, win:fmtTime(w.finishTime), gap:marginText(R.player.finishTime-w.finishTime, w.v), e:(R.player.energy/R.player.cap).toFixed(2), whips:R.player.whips,
    top3: o.slice(0,3).map(r=>r.style+(r.isPlayer?'*':'')).join(','), spread: (o[o.length-1].finishTime-w.finishTime).toFixed(1)};
}
for (const [d,s,lv] of [[1200,30,24],[2000,60,60],[2400,80,79]]) {
  for (const pol of ['none','w300','w450','ai']) {
    const rs=[]; let wins=0, sumpos=0;
    for (let i=0;i<20;i++){ const r=run(d,s,lv,pol); sumpos+=r.pos; if(r.pos===1)wins++; if(i<2) rs.push(r); }
    console.log(d,s,pol,'avgpos',(sumpos/20).toFixed(1),'wins',wins, JSON.stringify(rs[0]));
  }
}
