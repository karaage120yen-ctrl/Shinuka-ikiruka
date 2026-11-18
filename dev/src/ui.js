// ===== 画面（メニュー・育成・一覧・ガチャ・対戦） =====
import { H_KEYS, H_NAMES, J_KEYS, J_NAMES, COND_NAMES, COND_COLORS, COAT, SILKS, STYLES, GRADED,
  rankOf, rankColor, fmtMoney, fmtTime, randomHorseName, randomJockeyName, pick } from './data.js';
import { S, save, newId, resetAll, findJockey } from './store.js';
import { NPC_JOCKEY } from './jockey.js';
import { openCareer } from './careerui.js';
import { stageOf } from './career.js';
import { startRace } from './racescreen.js';
import { pull, COST_1, COST_10, GACHA_POOL, RATES } from './gacha.js';
import { setSound, initAudio } from './audio.js';

const app = () => document.getElementById('app');
const esc = (s) => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const hex = (n) => '#' + (n ?? 0xffffff).toString(16).padStart(6, '0');

function render(html) { app().innerHTML = html; window.scrollTo(0, 0); }
function bind(map) {
  document.querySelectorAll('[data-act]').forEach(el => {
    const a = el.dataset.act;
    if (map[a]) el.onclick = (e) => { e.preventDefault(); map[a](el.dataset.v, el); };
  });
}
function modal(html, { onClose, cls = '' } = {}) {
  const m = document.createElement('div');
  m.className = 'modal ' + cls;
  m.innerHTML = `<div class="modal-card">${html}</div>`;
  document.body.appendChild(m);
  const close = () => { m.remove(); onClose && onClose(); };
  m.addEventListener('click', (e) => { if (e.target === m && !cls.includes('nobg')) close(); });
  m.querySelectorAll('[data-close]').forEach(b => b.onclick = close);
  return { el: m, close };
}
function toast(t) {
  const el = document.createElement('div'); el.className = 'toast'; el.textContent = t;
  document.body.appendChild(el); setTimeout(() => el.classList.add('show'), 10);
  setTimeout(() => { el.classList.remove('show'); setTimeout(() => el.remove(), 400); }, 2200);
}
function statRow(name, v) {
  const r = rankOf(v);
  return `<div class="stat"><span class="sn">${name}</span><span class="rk" style="color:${rankColor(r)}">${r}</span>
    <div class="bar"><i style="width:${Math.min(100, v)}%"></i></div><span class="sv">${Math.floor(v)}</span></div>`;
}
function header(title, back = 'home') {
  return `<header class="top"><button class="back" data-act="go" data-v="${back}">‹</button><h1>${title}</h1>
    <div class="carrot">🥕 ${S.carrots}</div></header>`;
}
const GO = {};
function go(v) { (GO[v] || home)(); }

// ===== ホーム =====
export function home() {
  const ah = S.activeHorse, aj = S.activeJockey;
  render(`
  <div class="title-screen">
    <div class="title-bg"></div>
    <div class="logo"><div class="logo-sub">競馬育成ゲーム</div><div class="logo-main">死ぬか<br>生きるかの<br>戦い</div></div>
    <div class="carrot home-carrot">🥕 金のにんじん ${S.carrots}</div>
    <div class="menu">
      <button class="mbtn big" data-act="horse">🐎 馬を育てる${ah && ah.p ? `<small>続き：${esc(ah.p.name)}（${ah.p.age}歳${ah.p.month}月）</small>` : '<small>生まれてから引退まで</small>'}</button>
      <button class="mbtn" data-act="jockey">🏇 騎手を育てる${aj && aj.p ? `<small>続き：${esc(aj.p.name)}（${aj.p.age}歳）</small>` : '<small>競馬学校から引退まで</small>'}</button>
      <button class="mbtn" data-act="list">📖 一覧<small>育てた馬 ${S.horses.length}頭・騎手 ${S.jockeys.length}人</small></button>
      <button class="mbtn" data-act="gacha">🎰 ガチャ<small>キャラは準備中</small></button>
      <button class="mbtn" data-act="vs">⚔️ 対戦・レース<small>育てた馬で勝負</small></button>
      <button class="mbtn small" data-act="settings">⚙️ 設定</button>
    </div>
  </div>`);
  bind({ horse: () => openCareer('horse', home), jockey: () => openCareer('jockey', home),
    list: () => listScreen('h'), gacha: gachaScreen, vs: vsScreen, settings: settingsScreen });
}
GO.home = home;

// ===== 一覧 =====
function listScreen(tab = 'h') {
  const horses = S.horses, jockeys = S.jockeys;
  render(`${header('一覧')}
  <div class="page">
    <div class="tabs"><button class="${tab === 'h' ? 'on' : ''}" data-act="tab" data-v="h">馬（${horses.length}）</button><button class="${tab === 'j' ? 'on' : ''}" data-act="tab" data-v="j">騎手（${jockeys.length}）</button></div>
    ${tab === 'h' ? (horses.length ? horses.map((h, i) => `<button class="lcard" data-act="hd" data-v="${i}">
      <div class="lrank" style="color:${rankColor(h.rank || 'G')}">${h.rank || '-'}</div>
      <div class="linfo"><b><i class="dot sm" style="background:${hex(COAT[h.coat].body)}"></i>${esc(h.name)}</b>
      <small>${h.record.join('-')}　${fmtMoney(h.earnings)}${h.g1Wins ? `　G1 ${h.g1Wins}勝` : ''}</small>
      <small class="muted">${esc(h.retireReason || '')}</small></div></button>`).join('') : '<div class="empty">まだ引退した馬はいません。<br>馬を育てて引退させると、ここに残ります。</div>')
    : (jockeys.length ? jockeys.map((j, i) => { const avg = J_KEYS.reduce((a, k) => a + j.s[k], 0) / 5; return `<button class="lcard" data-act="jd" data-v="${i}">
      <div class="lrank" style="color:${rankColor(j.rank || rankOf(avg))}">${j.rank || rankOf(avg)}</div>
      <div class="linfo"><b><i class="dot sm" style="background:${hex(SILKS[j.silk])}"></i>${esc(j.name)}</b><small>${j.races}戦${j.wins}勝${j.g1Wins ? `　G1 ${j.g1Wins}勝` : ''}</small><small class="muted">${esc(j.retireReason || '')}</small></div></button>`; }).join('') : '<div class="empty">まだデビューした騎手はいません。</div>')}
  </div>`);
  bind({ go, tab: (v) => listScreen(v), hd: (i) => horseDetail(horses[+i]), jd: (i) => jockeyDetail(jockeys[+i]) });
}

function horseDetail(h) {
  const races = (h.races || []).slice().reverse();
  const m = modal(`<h2><i class="dot sm" style="background:${hex(COAT[h.coat].body)}"></i>${esc(h.name)}</h2>
    <p class="center muted">父 ${h.sire}　母 ${h.dam}　${COAT[h.coat].name}</p>
    ${H_KEYS.map(k => statRow(H_NAMES[k], h.s[k])).join('')}
    <div class="apt"><span>芝 ${h.apt.turf}</span><span>ダ ${h.apt.dirt}</span><span>${h.style}</span><span>${h.record.join('-')}</span></div>
    ${h.titles && h.titles.length ? `<p>🏆 ${h.titles.map(esc).join('、')}</p>` : ''}
    <div class="rhist">${races.map(r => `<div><span class="${r.pos === 1 ? 'win' : ''}">${r.pos}着</span>${r.g ? `<span class="grade g-${r.g}">${r.g}</span>` : ''}${esc(r.name)}<small>${r.surf}${r.dist}m ${fmtTime(r.time)}</small></div>`).join('') || '<p class="muted">レース記録なし</p>'}</div>
    <button class="btn wide" data-a="code">対戦コードをコピー</button>
    <button class="btn ghost wide" data-a="del">一覧から消す</button>
    <button class="btn primary wide" data-close>閉じる</button>`);
  m.el.querySelector('[data-a=code]').onclick = () => copyCode(h);
  m.el.querySelector('[data-a=del]').onclick = () => { if (confirm('本当に消しますか？')) { S.horses.splice(S.horses.indexOf(h), 1); save(); m.close(); listScreen('h'); } };
}

function jockeyDetail(j) {
  const m = modal(`<h2><i class="dot sm" style="background:${hex(SILKS[j.silk])}"></i>${esc(j.name)}</h2>
    ${J_KEYS.map(k => statRow(J_NAMES[k], j.s[k])).join('')}
    <div class="apt"><span>${j.races}戦 ${j.wins}勝</span><span>G1 ${j.g1Wins || 0}勝</span><span>${esc(j.retireReason || '')}</span></div>
    ${j.titles && j.titles.length ? `<p>🏆 ${j.titles.slice(-12).map(esc).join('、')}</p>` : ''}
    <button class="btn ghost wide" data-a="del">一覧から消す</button><button class="btn primary wide" data-close>閉じる</button>`);
  m.el.querySelector('[data-a=del]').onclick = () => { if (confirm('本当に消しますか？')) { S.jockeys.splice(S.jockeys.indexOf(j), 1); save(); m.close(); listScreen('j'); } };
}

// ===== 対戦コード =====
function encodeHorse(h, j) {
  const o = { v: 1, n: h.name, s: h.s, a: h.apt, st: h.style, c: h.coat, k: h.skills || [], jn: j ? j.name : NPC_JOCKEY.name, js: j ? j.s : NPC_JOCKEY.s, sl: j ? j.silk : 6 };
  return 'SNK-' + btoa(unescape(encodeURIComponent(JSON.stringify(o))));
}
function decodeHorse(code) {
  try {
    const o = JSON.parse(decodeURIComponent(escape(atob(code.trim().replace(/^SNK-/, '')))));
    if (!o.s || !o.n) return null;
    for (const k of H_KEYS) o.s[k] = Math.max(1, Math.min(105, +o.s[k] || 1));
    return o;
  } catch (e) { return null; }
}
function copyCode(h) {
  const code = encodeHorse(h, findJockey(h.jockeyId));
  const done = () => toast('対戦コードをコピーしました。友達に送ろう！');
  if (navigator.clipboard) navigator.clipboard.writeText(code).then(done, () => prompt('このコードをコピーしてください', code));
  else prompt('このコードをコピーしてください', code);
}

// ===== ガチャ =====
function gachaScreen() {
  const owned = {};
  for (const id of S.gacha) owned[id] = (owned[id] || 0) + 1;
  render(`${header('ガチャ')}
  <div class="page">
    <div class="banner"><div class="bn-tag">PICK UP</div><div class="bn-title">キャラ準備中</div><div class="bn-sub">このあとキャラを追加予定</div></div>
    <div class="rates">SSR ${RATES.SSR * 100}%　SR ${RATES.SR * 100}%　R ${RATES.R * 100}%　（10連はSR以上1枚確定）</div>
    <div class="row2"><button class="btn primary" data-act="p1">1回引く<small>🥕${COST_1}</small></button><button class="btn race" data-act="p10">10連<small>🥕${COST_10}</small></button></div>
    <div class="muted small center">金のにんじんはレースで勝つ・馬を引退させる・騎手をデビューさせると増えます</div>
    <div class="sec">持っているキャラ（${S.gacha.length}）</div>
    <div class="cgrid">${GACHA_POOL.map(c => `<div class="ccard ${c.rarity} ${owned[c.id] ? '' : 'none'}"><span class="rar">${c.rarity}</span><span class="cn">${owned[c.id] ? esc(c.name) : '？？？'}</span>${owned[c.id] ? `<span class="cnt">×${owned[c.id]}</span>` : ''}</div>`).join('')}</div>
  </div>`);
  const doPull = (n, cost) => {
    if (S.carrots < cost) { toast('金のにんじんが足りません'); return; }
    S.carrots -= cost;
    const res = pull(n);
    for (const c of res) S.gacha.push(c.id);
    save();
    const best = res.some(c => c.rarity === 'SSR') ? 'SSR' : res.some(c => c.rarity === 'SR') ? 'SR' : 'R';
    const m = modal(`<div class="gacha-anim ${best}"><div class="gate-light"></div></div><div class="gres">${res.map((c, i) => `<div class="ccard ${c.rarity} flip" style="animation-delay:${0.6 + i * 0.12}s"><span class="rar">${c.rarity}</span><span class="cn">${esc(c.name)}</span></div>`).join('')}</div>
      <button class="btn primary wide" data-close>OK</button>`, { onClose: gachaScreen, cls: 'gacha' });
  };
  bind({ go, p1: () => doPull(1, COST_1), p10: () => doPull(10, COST_10) });
}

// ===== 対戦 =====
function vsScreen() {
  const mine = [];
  const ap = S.activeHorse && S.activeHorse.p;
  if (ap && stageOf(ap) === 'tc') mine.push({ h: { name: ap.name, s: ap.st, apt: ap.apt, style: ap.style, coat: ap.coat, skills: ap.skills }, label: '育成中' });
  for (const h of S.horses) mine.push({ h, label: '引退馬' });
  let sel = 0, jsel = -1, rsel = 0;
  const friends = [];
  const presets = [{ name: 'フリーレース', g: null, surf: '芝', dist: 2000, place: '東京' }, ...GRADED.filter(r => r.g === 'G1')];
  const draw = () => {
    render(`${header('対戦・レース')}
    <div class="page">
      ${mine.length ? '' : '<div class="empty">対戦に出せる馬がいません。<br>馬を育ててトレセンに入る（2歳）か、引退させると出られます。</div>'}
      ${mine.length ? `
      <div class="sec">自分の馬</div>
      <div class="plist">${mine.map((x, i) => `<button class="pitem ${i === sel ? 'on' : ''}" data-act="sel" data-v="${i}"><b>${esc(x.h.name)}</b><small>${x.label}　${H_KEYS.map(k => rankOf(x.h.s[k])).join('')}</small></button>`).join('')}</div>
      <div class="sec">騎手</div>
      <div class="chips"><button class="chip ${jsel === -1 ? 'on' : ''}" data-act="js" data-v="-1">${NPC_JOCKEY.name}</button>${S.jockeys.map((j, i) => `<button class="chip ${jsel === i ? 'on' : ''}" data-act="js" data-v="${i}">${esc(j.name)}</button>`).join('')}</div>
      <div class="sec">レース</div>
      <select id="rsel">${presets.map((r, i) => `<option value="${i}" ${i === rsel ? 'selected' : ''}>${r.g ? r.g + ' ' : ''}${r.name}（${r.surf}${r.dist}m）</option>`).join('')}</select>
      ${rsel === 0 ? `<div class="row2"><select id="fsurf"><option ${presets[0].surf === '芝' ? 'selected' : ''}>芝</option><option ${presets[0].surf === 'ダ' ? 'selected' : ''}>ダ</option></select>
        <select id="fdist">${[1200, 1400, 1600, 1800, 2000, 2200, 2400, 2500, 3000, 3200].map(d => `<option ${d === presets[0].dist ? 'selected' : ''}>${d}</option>`).join('')}</select></div>` : ''}
      <div class="sec">相手</div>
      <div class="muted small">友達の対戦コードを入れると、その馬と勝負できます（残りはCPU）</div>
      <div class="row"><input id="fcode" placeholder="SNK-…"><button class="btn" data-act="add">追加</button></div>
      <div class="plist">${friends.map((f, i) => `<div class="pitem on"><b>${esc(f.n)}</b><small>${esc(f.jn)}</small><button class="x" data-act="rm" data-v="${i}">×</button></div>`).join('')}</div>
      <button class="btn race wide" data-act="start">レース開始！</button>
      <button class="btn wide" data-act="mycode">自分の馬の対戦コードをコピー</button>` : ''}
    </div>`);
    const rs = document.getElementById('rsel');
    if (rs) rs.onchange = () => { rsel = +rs.value; draw(); };
    const fs = document.getElementById('fsurf'), fd = document.getElementById('fdist');
    if (fs) fs.onchange = () => { presets[0].surf = fs.value; };
    if (fd) fd.onchange = () => { presets[0].dist = +fd.value; };
    bind({ go,
      sel: (v) => { sel = +v; draw(); }, js: (v) => { jsel = +v; draw(); },
      add: () => { const o = decodeHorse(document.getElementById('fcode').value); if (!o) { toast('コードが読めませんでした'); return; } if (friends.length >= 11) return; friends.push(o); draw(); },
      rm: (v) => { friends.splice(+v, 1); draw(); },
      mycode: () => copyCode(mine[sel].h),
      start: () => {
        const h = mine[sel].h, j = jsel >= 0 ? S.jockeys[jsel] : NPC_JOCKEY;
        const r = { ...presets[rsel] };
        const avg = H_KEYS.reduce((a, k) => a + h.s[k], 0) / 5;
        r.lv = r.g === 'G1' ? 80 : avg; r.prize = 0;
        const opps = friends.map((f, i) => ({ name: f.n, jname: f.jn, h: { ...f.s }, j: { ...f.js }, apt: r.surf === '芝' ? f.a.turf : f.a.dirt, cond: 2, style: f.st, coat: f.c, silk: SILKS[f.sl ?? i], hsk: f.k || [] }));
        startRace({ race: r, fieldSize: r.g ? 14 : 12, opponents: opps,
          player: { name: h.name, jname: j.name, h: { ...h.s }, j: { ...j.s }, apt: r.surf === '芝' ? h.apt.turf : h.apt.dirt, cond: 2, style: h.style, coat: h.coat, silk: j.silk ?? 6, hsk: h.skills || [], jsk: j.skills || [] },
          onDone: (res) => {
            if (res && res.pos === 1) { S.carrots += 5; save(); toast('勝利！ 🥕+5'); }
            draw();
          } });
      } });
  };
  draw();
}

// ===== 設定 =====
function settingsScreen() {
  render(`${header('設定')}
  <div class="page">
    <div class="card"><label class="sw-row"><span>効果音</span><input type="checkbox" id="snd" ${S.settings.sound ? 'checked' : ''}></label>
    <label class="sw-row"><span>レースの視点（最初）</span><select id="vw"><option value="fp" ${S.settings.view === 'fp' ? 'selected' : ''}>騎手視点</option><option value="back" ${S.settings.view === 'back' ? 'selected' : ''}>後ろから</option><option value="tv" ${S.settings.view === 'tv' ? 'selected' : ''}>中継</option></select></label></div>
    <div class="card"><b>遊び方</b><p class="small">馬は0歳から育てて、2歳6月からレースに出られます。7歳の年末か、重い故障で引退。疲れたまま調教するとケガをしやすく、重い故障だと競走生命の危機に。<br>レースは騎手視点。◀▶で進路を変え、ムチで加速。体力ゲージの使い方が勝負の分かれ目です。</p></div>
    <button class="btn ghost wide" data-act="reset">データをすべて消す</button>
    <p class="muted small center">データはこの端末のブラウザに保存されています</p>
  </div>`);
  document.getElementById('snd').onchange = (e) => { S.settings.sound = e.target.checked; setSound(S.settings.sound); save(); };
  document.getElementById('vw').onchange = (e) => { S.settings.view = e.target.value; save(); };
  bind({ go, reset: () => { if (confirm('育てた馬・騎手・ガチャをすべて消します。よろしいですか？')) { resetAll(); home(); } } });
}
