// ===== レース実況（文字と声） =====
import { marginText } from './sim.js';


export class Commentator {
  constructor(race, opts = {}) { this.race = race; this.t = 0; this.next = 2; this.lead = null; this.done = {}; this.lines = []; this.focus = opts.focus; }
  nm(r) { return `${r.num}番${r.name}`; }
  say(text) { this.lines.push(text); }
  update(dt) {
    const R = this.race; if (!R.started) return;
    this.t += dt;
    const rs = [...R.racers].sort((a, b) => (a.rank || 99) - (b.rank || 99));
    const L = rs[0], rem = R.dist - L.p;
    if (!this.done.start && R.t > 1.2) {
      this.done.start = 1;
      const fast = [...R.racers].sort((a, b) => b.p - a.p)[0];
      this.say(`スタートしました！ 好スタートは${this.nm(fast)}。`, true);
      this.next = this.t + 7;
    }
    if (this.done.start && this.lead && L !== this.lead && rem > 250 && !L.finished) this.say(`先頭が替わって${this.nm(L)}！`);
    this.lead = L;
    const mark = (k, cond, fn) => { if (!this.done[k] && cond) { this.done[k] = 1; this.say(fn(), true); this.next = this.t + 8; } };
    mark('m1000', rem < 1000 && R.dist > 1300, () => {
      const pace = R.t / Math.max(1, L.p) * 200;
      return `残り1000メートル。先頭は${this.nm(L)}、ペースは${pace < 11.9 ? '速い' : pace > 12.6 ? 'ゆったり' : '平均的'}。`;
    });
    mark('m600', rem < 600, () => `3コーナーから4コーナー、各馬が動き出した！ 先頭は${this.nm(L)}、2番手${this.nm(rs[1])}。`);
    mark('m400', rem < 400, () => { const out = rs.slice(1, 6).sort((a, b) => b.d - a.d)[0]; return `最後の直線！ ${this.nm(L)}が粘る！ 外から${out ? this.nm(out) : this.nm(rs[1])}！`; });
    mark('m200', rem < 200, () => `残り200！ ${this.nm(L)}と${this.nm(rs[1])}の叩き合い！`);
    mark('m100', rem < 90, () => `${rs[0].name}か、${rs[1].name}か！`);
    const fin = R.order[0];
    if (fin && !this.done.fin) {
      this.done.fin = 1;
      const sec = R.order[1];
      const mg = sec ? marginText(sec.finishTime - fin.finishTime, fin.v) : '';
      this.say(`${fin.name}、ゴールイン！ ${sec ? `2着は${sec.name}、着差は${mg === '1' ? '1馬身' : mg}。` : ''}`, true);
    }
    if (this.done.start && !this.done.m400 && this.t > this.next) {
      this.next = this.t + 9;
      const f = this.focus && this.focus();
      let line = `先頭は${this.nm(L)}、続いて${this.nm(rs[1])}、${this.nm(rs[2])}。`;
      if (f && f.rank > 3) line += `${f.name}は${f.rank}番手。`;
      this.say(line);
    }
  }
}
