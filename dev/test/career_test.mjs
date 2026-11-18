import * as K from '../src/career.js';
import { simulateRace } from '../src/sim.js';
const NPC = { name: '見習い騎手', s: { tec: 50, whip: 50, bal: 50, fit: 50, jud: 50 }, silk: 6 };
function run(kind) {
  const p = kind === 'horse' ? K.makeHorse() : K.makeJockey();
  const C = K.newCareerState(p);
  let guard = 0, turns = 0;
  C.screen = 'month';
  while (guard++ < 2000) {
    if (C.screen === 'camp') { p.int = 'std'; p.focus = 'all'; K.startTurn(C); }
    else if (C.screen === 'month') {
      const a = K.autoPickAct(C); C.act = a.id;
      if (a.race) { const r = K.autoPickRace(C); if (!r) { C.act = (K.actsFor(p).find(x=>x.id==='rest')||K.actsFor(p)[0]).id; } else C.raceSel = r; }
      K.confirmAction(C); turns++;
    }
    else if (C.screen === 'event') { if (!C.evr) K.chooseEvent(C, K.autoPickChoice(C)); else K.nextEvent(C); }
    else if (C.screen === 'afterEvents') {
      if (C.raceSel) { const cfg = kind === 'horse' ? K.horseRaceCfg(p, C.raceSel, NPC) : K.jockeyRaceCfg(p, C.raceSel); C.raceRes = simulateRace(cfg); }
      K.runTurn(C);
    }
    else if (C.screen === 'mres') K.afterTurn(C);
    else if (C.screen === 'report') K.buildOffers(C);
    else if (C.screen === 'offers') {
      const X = C.offers;
      if (kind === 'horse') { if (X.forced) K.pickOffer(C, 'retire', X.retireOpts[0].d); else if (X.paths) K.pickOffer(C, 'path', 'middle'); else K.pickOffer(C, 'none'); }
      else { if (X.forced) K.pickOffer(C, 'retire', '引退'); else if (X.list.length) K.pickOffer(C, 'stable', X.list[0].stable); else K.pickOffer(C, 'free'); }
    }
    else if (C.screen === 'retireNow') break;
    else { console.log('?', C.screen); break; }
    if (kind==='horse' && C.screen==='report' && [1,2,3,4].includes(p.age)) console.log('  age', p.age, 'ovr', K.ovrOf(p), JSON.stringify(Object.fromEntries(Object.entries(p.st).map(([k,v])=>[k,Math.round(v)]))), 'rec', p.record.join('-'), 'money', Math.round(p.money));
    if (kind==='jockey' && C.screen==='report' && [17,18,20,25,30,35,40].includes(p.age)) console.log('  age', p.age, 'ovr', K.ovrOf(p), 'eval', Math.round(p.eval), 'rides', p.rides, 'wins', p.wins, 'money', Math.round(p.money));
  }
  const card = K.toCard(p);
  return { kind, turns, age: p.age, ovr: K.ovrOf(p), rec: p.record.join('-'), wins: p.wins, g: p.gradedWins, g1: p.g1Wins, earn: Math.round(p.earnings), rank: card.rank, why: p.fate && p.fate.why, skills: p.skills.join(',') };
}
for (let i = 0; i < 2; i++) console.log(JSON.stringify(run('horse')));
for (let i = 0; i < 5; i++) console.log(JSON.stringify(run('jockey')));
