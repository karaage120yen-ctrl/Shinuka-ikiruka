import { createRace, stepRace, makeOpponents } from '../src/sim.js';
const dist=2000, stat=62;
function run(whipFrom) {
  const ph = {spd:stat,sta:stat,pow:stat,gut:stat,wis:stat};
  const pspec = {name:'PLAYER', isPlayer:true, h:ph, j:{tec:50,whip:50,bal:50,fit:50,jud:50}, apt:'A', cond:2, style:'先行'};
  const opps = makeOpponents({dist,lv:60}, pspec, 11);
  const R = createRace({dist, surf:'芝', specs:[pspec,...opps], noBand:true}); R.countdown=0;
  let tt=0, empt=null, vmin=99;
  while (R.finishedCount < R.racers.length && tt<300){ const pl=R.player; const rem=dist-pl.p; stepRace(R,1/60,{steer:0,whip: rem<whipFrom}); tt+=1/60;
    if (pl.energy<=0 && empt==null && !pl.finished) empt=Math.round(dist-pl.p); if (empt!=null && !pl.finished) vmin=Math.min(vmin,pl.v); }
  const pl=R.player; return {pos:R.order.indexOf(pl)+1, t:pl.finishTime.toFixed(1), emptyAt:empt, vmin:(vmin*3.6).toFixed(0)};
}
for (const w of [1400, 2000, 2100]) { const a=[]; for (let i=0;i<20;i++) a.push(run(w)); const avg=a.reduce((s,x)=>s+x.pos,0)/a.length; console.log('whip from',w,'avg pos',avg.toFixed(1), JSON.stringify(a[0]), 'empty',a.filter(x=>x.emptyAt!=null).length); }
