import * as K from '../src/career.js';
import { simulateRace } from '../src/sim.js';
const NPC = { name: 'NPC', s: { tec: 50, whip: 50, bal: 50, fit: 50, jud: 50 }, silk: 6 };
const p = K.makeHorse(); p.age = 3; p.month=3; p.wins=Number(process.argv[2]||0); p.races=[{}]; p.gradedWins=0;
for (const k in p.st) p.st[k] = 62; p.st.sta = 70; p.apt.turf='A'; p.sta=80; p.cond=70;
const C = K.newCareerState(p);
const rs = K.racesInTurn(p).filter(r=>!r.locked);
for (const r of rs) {
  const pos=[]; for (let i=0;i<12;i++){ const res = simulateRace(K.horseRaceCfg(p, r, NPC)); pos.push(res.pos); }
  console.log(r.name, r.surf, r.dist, 'lv', r.lv, 'apt', r.surf==='芝'?p.apt.turf:p.apt.dirt, 'pos', pos.join(','));
}
