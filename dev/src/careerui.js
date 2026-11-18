// ===== 育成の画面（サッカーやるよんと同じ構成） =====
import { COAT, SILKS, STYLES, COND_NAMES, fmtTime, rankColor } from './data.js';
import { S, save, newId } from './store.js';
import * as K from './career.js';
import { simulateRace, rollWeather } from './sim.js';
import { startRace } from './racescreen.js';
import { NPC_JOCKEY } from './jockey.js';
import { playCuts } from './cut.js';
import { NPC_SIRES, NPC_DAMS, makeFoal, preview, sexOf } from './breed.js';
import { checkAch } from './ach.js';

const esc = (s) => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const hex = (n) => '#' + (n ?? 0xffffff).toString(16).padStart(6, '0');
const sgn = (v) => (v > 0 ? '+' : '') + v;
const yen = K.yen;
let KINDNOW = 'horse';
let goHome = () => {};
const slot = (kind) => kind === 'horse' ? 'activeHorse' : 'activeJockey';
const getC = (kind = KINDNOW) => S[slot(kind)];

export function openCareer(kind, homeFn) {
  KINDNOW = kind; goHome = homeFn;
  let C = getC();
  if (C && !C.p) { S[slot(kind)] = null; C = null; } // 古い形式のデータは捨てる
  if (!C) { draftNew(kind); return; }
  // 1ターンの長さを変えたので、前のデータの月をそろえる
  const T = K.KIND[kind].turns;
  if (!T.includes(C.p.month)) { C.p.month = [...T].reverse().find(x => x <= C.p.month) || T[0]; if (['month', 'event', 'afterEvents'].includes(C.screen)) K.startTurn(C); save(); }
  draw();
}

// ===== 共通パーツ =====
function header(title) {
  return `<header class="top"><button class="back" data-act="home">‹</button><h1>${title}</h1><div class="carrot">🥕 ${S.carrots}</div></header>`;
}
function bars(p) {
  const KK = K.KIND[p.kind];
  return `<div class="mbars">${KK.keys.map(k => { const v = p.st[k]; return `<div class="mb"><span>${KK.names[k]}</span><div class="bar"><i style="width:${Math.min(100, v)}%"></i></div><b>${Math.floor(v)}</b></div>`; }).join('')}</div>`;
}
function pcard(p, mode = 'full') {
  const o = K.ovrOf(p), pre = mode === 'preview', st = K.stageOf(p);
  const potT = p.flags.potShown ? `伸びしろ ${p.flags.potEst}` : `スカウト評価 ${p.flags.potEst}`;
  const G = K.GROWTH[p.kind][p.growth];
  let sub, tags, face;
  if (p.kind === 'horse') {
    sub = `${p.age}歳・${K.STAGE_NAME[st]}`;
    tags = [p.sex || '', p.style, G.n, `芝${p.apt.turf}・ダ${p.apt.dirt}`].filter(Boolean).map(t => `<span>${esc(t)}</span>`).join('');
    face = `<div class="face" style="--c:${hex(COAT[p.coat].body)}">🐴</div>`;
  } else {
    const sb = K.stableOf(p);
    sub = `${p.age}歳・${p.stage === 'school' ? '競馬学校' : p.free ? 'フリー' : sb ? sb.n : 'プロ騎手'}`;
    tags = [`得意：${p.pref}`, G.n].map(t => `<span>${esc(t)}</span>`).join('');
    face = `<div class="face" style="--c:${hex(SILKS[p.silk])}">🏇</div>`;
  }
  tags += `<span class="pot">${potT}</span>` + p.skills.map(k => `<span class="sk" title="${esc(K.SKILLS[k].d)}">${esc(K.SKILLS[k].n)}</span>`).join('');
  const KK = K.KIND[p.kind];
  const meters = pre ? '' : `<div class="meters"><div><span>体力</span><b class="${p.sta < 30 ? 'bad' : ''}">${Math.round(p.sta)}</b></div><div><span>調子</span><b>${Math.round(p.cond)}</b></div><div><span>${KK.popName}</span><b>${Math.round(p.pop)}</b></div><div><span>評価</span><b>${Math.round(p.eval)}</b></div></div>
    <div class="wallet"><span>${KK.moneyName} <b class="${p.money < 0 ? 'bad' : ''}">${yen(p.money)}</b></span>${p.inj > 0 ? `<span class="bad">🩹 ${esc(p.injName || 'ケガ')} 残り${Math.ceil(p.inj)}週</span>` : `<span>${p.kind === 'horse' ? `戦績 ${p.record.join('-')}` : p.stage === 'pro' ? `${p.rides}戦${p.wins}勝` : `模擬レース${p.mockWins}勝`}</span>`}</div>`;
  return `<section class="pcard ${o >= 88 || K.has(p, 'legend') ? 'legendary' : ''}">
    <div class="pc-top"><div class="pc-ovr"><span class="n">${o}</span><span class="tier">${K.tierOf(p, o)}</span></div>
    <div class="pc-id"><div class="name">${esc(p.name)}</div><div class="sub">${sub}</div><div class="tags">${tags}</div></div>${face}</div>
    ${mode === 'compact' ? '' : bars(p)}${meters}</section>`;
}
function ring(pr) {
  const pc = Math.round(pr * 100), safe = pr >= 1;
  return `<span class="ring ${safe ? 'safe' : ''}"><svg viewBox="0 0 48 48"><circle cx="24" cy="24" r="20" class="bg"/><circle cx="24" cy="24" r="20" class="fg" stroke-dasharray="${(pc / 100 * 125.66).toFixed(1)} 125.66"/></svg><b>${safe ? '確実' : pc}${safe ? '' : '<small>%</small>'}</b></span>`;
}
function chipsOf(fx) { return fx.map(([l, v, s]) => { const raw = s !== undefined, n = raw ? s : v, cls = n > 0 ? 'up' : n < 0 ? 'down' : ''; return `<span class="chip ${cls}">${esc(l)} ${raw ? esc(v) : sgn(v)}</span>`; }).join(''); }
function careerBar(p) {
  const H = p.kind === 'horse';
  const startAge = H ? 0 : 16, endAge = H ? 7 : 45, T = K.KIND[p.kind].turns;
  const total = (endAge - startAge + 1) * T.length;
  const done = (p.age - startAge) * T.length + Math.max(0, T.indexOf(p.month));
  const pct = Math.min(100, Math.round(done / total * 100));
  const fa = H ? 4 : 30;
  const note = H ? (p.age < 2 ? `デビューまであと${2 - p.age}年（2歳6月から）` : p.age < fa ? `運命の分岐点まであと${fa - p.age}年` : '引退は7歳の年末') : (p.stage === 'school' ? 'デビューは18歳' : p.age < fa ? `運命の分岐点まであと${fa - p.age}年` : `${p.age >= 30 ? '引退を選べる' : '30歳から引退を選べる'}・40歳で引退`);
  return `<div class="cbar"><div class="cbar-t"><span>${H ? '競走馬生' : '騎手人生'} ${pct}%</span><span>${note}</span></div><div class="cbar-b"><i style="width:${pct}%"></i><em style="left:${Math.round(((fa - startAge) * T.length) / total * 100)}%"></em></div></div>`;
}

// ===== 画面の振り分け =====
function draw() {
  const C = getC();
  const app = document.getElementById('app');
  if (!C) { draftNew(KINDNOW); return; }
  C._kind = KINDNOW;
  const p = C.p;
  if (C.screen === 'retireNow') doRetire(C);
  const title = p.kind === 'horse' ? '馬の育成' : '騎手の育成';
  const inC = !['retired'].includes(C.screen);
  const tabs = inC ? `<div class="seg c3 subnav">${[['play', 'プレー'], ['life', p.kind === 'horse' ? '牧場・厩舎' : '暮らし'], ['log', '経歴']].map(([k, n]) => `<button class="opt" aria-pressed="${C.tab === k}" data-act="tab" data-v="${k}">${n}</button>`).join('')}</div>` : '';
  let body;
  if (C.tab === 'life' && inC) body = lifeHtml(C);
  else if (C.tab === 'log' && inC) body = logHtml(C);
  else body = (SCREENS[C.screen] || SCREENS.month)(C);
  app.innerHTML = `${header(title)}<div class="page career">${tabs}${body}</div>${inC ? autoBtn(C) : ''}`;
  bindAll(C);
  window.scrollTo(0, C._keepScroll ? window.scrollY : 0); C._keepScroll = false;
  if (C.cutq && C.cutq.length) { const q = C.cutq.splice(0); save(); if (!C.auto || (C.speed || 1) <= 2) playCuts(q); }
  if (C.auto) scheduleAuto(C);
}

function autoBtn(C) {
  return `<div class="autobar"><button class="ab-speed" data-act="speed">×${C.speed || 1}</button><button class="ab-auto ${C.auto ? 'on' : ''}" data-act="auto">${C.auto ? '止める' : 'オート'}</button></div>`;
}

// ===== スカウトレポート（作成） =====
function draftNew(kind) {
  const prev = kind === 'horse' ? K.makeHorse() : K.makeJockey();
  S._draft = { kind, prev, custom: false, n: (S._draftN = (S._draftN || 0) + 1), parents: [] };
  drawDraft();
}
function drawDraft() {
  const d = S._draft, p = d.prev, H = d.kind === 'horse';
  const app = document.getElementById('app');
  const G = K.GROWTH[d.kind];
  const pool = H ? S.horses : S.jockeys;
  const lead = K.has(p, 'legend') ? '<b class="gold">10万頭に1頭の伝説が現れた。</b>限界がとても高い。' : K.has(p, 'monster') ? '<b class="gold">天才が見つかった。</b>並よりはるかに限界が高い。' : d.custom ? '条件を変えるたびに、能力は引き直される。' : H ? '牧場に新しい命が生まれた。この馬の一生を見守るか、別の馬を探すか。' : '競馬学校の入学試験に、新しい才能が現れた。この人の騎手人生を歩むか、別の人を探すか。';
  const custom = d.custom ? (H ? `
    <div class="card"><label>馬の名前（9文字まで）</label><input id="cname" maxlength="9" value="${esc(p.name)}">
    ${d.bred ? '' : `<label>毛色</label><div class="chips">${COAT.map((c, i) => `<button class="chip ${i === p.coat ? 'on' : ''}" data-act="dset" data-k="coat" data-v="${i}"><i style="background:${hex(c.body)}"></i>${c.name}</button>`).join('')}</div>`}
    <label>性別</label><div class="chips">${['牡', '牝'].map(x => `<button class="chip ${x === p.sex ? 'on' : ''}" data-act="dsex" data-v="${x}">${x === '牡' ? '牡（オス）' : '牝（メス）'}</button>`).join('')}</div>
    ${d.bred ? '' : `<label>脚質</label><div class="chips">${STYLES.map(s => `<button class="chip ${s === p.style ? 'on' : ''}" data-act="dset" data-k="style" data-v="${s}">${s}</button>`).join('')}</div>`}
    ${d.bred ? '' : `<label>成長タイプ</label><div class="chips">${Object.entries(G).map(([k, g]) => `<button class="chip ${k === p.growth ? 'on' : ''}" data-act="dset" data-k="growth" data-v="${k}">${g.n}</button>`).join('')}</div>`}</div>`
    : `<div class="card"><label>騎手の名前</label><input id="cname" maxlength="10" value="${esc(p.name)}">
    <label>勝負服の色</label><div class="chips">${SILKS.map((c, i) => `<button class="chip sw ${i === p.silk ? 'on' : ''}" data-act="dset" data-k="silk" data-v="${i}"><i style="background:${hex(c)}"></i></button>`).join('')}</div>
    <label>得意な戦法</label><div class="chips">${STYLES.map(s => `<button class="chip ${s === p.pref ? 'on' : ''}" data-act="dset" data-k="pref" data-v="${s}">${s}</button>`).join('')}</div>
    <label>成長タイプ</label><div class="chips">${Object.entries(G).map(([k, g]) => `<button class="chip ${k === p.growth ? 'on' : ''}" data-act="dset" data-k="growth" data-v="${k}">${g.n}</button>`).join('')}</div></div>`) : '';
  const inh = `<div class="kick">${H ? '血統（育てた馬から受け継ぐ）' : '師匠（育てた騎手から受け継ぐ）'}<span class="r">${d.parents.length}/3</span></div>
    ${pool.length ? `<p class="note">${H ? '引退した馬を3頭まで選ぶと、1頭につき1つ才能を受け継ぐ。2頭以上で「血統の継承者」。' : '引退した騎手を3人まで選ぶと、1人につき1つ技を受け継ぐ。'}</p><div class="plist">${pool.slice(0, 30).map((c, i) => `<button class="pitem ${d.parents.includes(i) ? 'on' : ''}" data-act="dpar" data-v="${i}"><b>${esc(c.name)}</b><small>${c.rank || ''}　${c.g1Wins ? `G1 ${c.g1Wins}勝` : `${c.wins}勝`}</small></button>`).join('')}</div>` : `<p class="note">${H ? '馬を引退まで育てると、ここで父・母として選べる。' : '騎手を引退まで育てると、ここで師匠として選べる。'}</p>`}`;
  const scout = H ? `<dl class="scout"><div><dt>父</dt><dd>${esc(p.sire)}</dd></div><div><dt>母</dt><dd>${esc(p.dam)}</dd></div><div><dt>脚質</dt><dd>${p.style}</dd></div><div><dt>成長タイプ</dt><dd>${G[p.growth].n}<small>${G[p.growth].d}</small></dd></div><div><dt>適性</dt><dd>芝${p.apt.turf}・ダート${p.apt.dirt}</dd></div><div><dt>スカウト評価</dt><dd>${p.flags.potEst}<small>伸びしろの見立て（SS〜D）</small></dd></div></dl>`
    : `<dl class="scout"><div><dt>得意な戦法</dt><dd>${p.pref}</dd></div><div><dt>成長タイプ</dt><dd>${G[p.growth].n}<small>${G[p.growth].d}</small></dd></div><div><dt>スカウト評価</dt><dd>${p.flags.potEst}<small>伸びしろの見立て（SS〜D）</small></dd></div></dl>`;
  app.innerHTML = `${header(H ? '馬の育成' : '騎手の育成')}<div class="page career">
    <div class="kick">${H ? '牧場レポート' : 'スカウトレポート'}<span class="r">No.${String(d.n).padStart(3, '0')}</span></div>
    <p class="note">${lead}</p>${pcard(p, 'preview')}${scout}${inh}
    <div class="stack"><button class="btn red" data-act="dstart">${H ? 'この馬で始める' : 'この騎手で始める'}</button><button class="btn ghost" data-act="dreroll">${d.custom ? '能力を引き直す' : H ? '別の馬を探す' : '別の人を探す'}</button>
    ${H ? `<button class="btn race" data-act="dbreed">🧬 配合して産ませる（父と母を選ぶ）</button>` : ''}</div>
    ${d.bred ? `<p class="note">配合で生まれた仔。父${esc(p.sire)}・母${esc(p.dam)}${p.gen >= 2 ? `　自分の血統 ${p.gen}代目` : ''}</p>` : ''}
    <button class="linkbtn" data-act="dcustom">${d.custom ? 'おまかせに戻す' : H ? '名前や毛色を自分で決める' : '名前や勝負服を自分で決める'}</button>${custom}</div>`;
  const nm = () => { const el = document.getElementById('cname'); if (el) p.name = el.value.trim() || p.name; };
  const remake = (patch) => { nm(); const keep = { name: p.name, coat: p.coat, style: p.style, growth: p.growth, silk: p.silk, pref: p.pref, ...patch }; d.prev = H ? K.makeHorse(keep) : K.makeJockey(keep); drawDraft(); };
  app.querySelectorAll('[data-act]').forEach(el => el.onclick = () => {
    const a = el.dataset.act, v = el.dataset.v;
    if (a === 'home') return goHome();
    if (a === 'dreroll') { d.bred = false; if (d.custom) remake({}); else { d.prev = H ? K.makeHorse() : K.makeJockey(); d.n++; drawDraft(); } }
    if (a === 'dsex') { nm(); p.sex = v; drawDraft(); }
    if (a === 'dbreed') { nm(); return drawBreed(); }
    if (a === 'dcustom') { nm(); d.custom = !d.custom; drawDraft(); }
    if (a === 'dset') { const k = el.dataset.k; remake({ [k]: ['coat', 'silk'].includes(k) ? +v : v, sex: p.sex }); }
    if (a === 'dpar') { const i = +v; const j = d.parents.indexOf(i); if (j >= 0) d.parents.splice(j, 1); else if (d.parents.length < 3) d.parents.push(i); nm(); drawDraft(); }
    if (a === 'dstart') {
      nm();
      const p2 = d.prev; p2.id = newId();
      const pars = d.parents.map(i => pool[i]).filter(Boolean);
      const got = K.inherit(p2, pars);
      if (d.bred && d.damRef && !d.damRef.npc) d.damRef.foals = (d.damRef.foals || 0) + 1;
      if (d.bred && (!d.sireRef.npc || !d.damRef.npc)) checkAch('breed', { gen: p2.gen });
      if (H && pars[0]) { p2.sire = pars[0].name; if (pars[1]) p2.dam = pars[1].name; }
      p2.log.unshift(H ? `${p2.year}年5月 父${p2.sire}・母${p2.dam}の間に、${COAT[p2.coat].name}の仔馬「${p2.name}」が生まれた` : `${p2.year}年4月 ${p2.name}、競馬学校に入学`);
      got.forEach(g => p2.log.unshift('受け継いだ：' + g));
      S[slot(d.kind)] = K.newCareerState(p2);
      S[slot(d.kind)].cutq = [H ? { k: 'birth', t: '誕生！', s: `${p2.name}（父${p2.sire}・母${p2.dam}）`, d: 2400 } : { k: 'school', t: '競馬学校に入学', s: p2.name, d: 2000 }];
      S._draft = null; save(); draw();
    }
  });
}

// ===== 配合 =====
function drawBreed() {
  const d = S._draft; const B = S._breed = S._breed || { s: null, d: null };
  const own = S.horses.map((c, i) => ({ c, i }));
  const sires = [...own.filter(x => sexOf(x.c) === '牡').map(x => ({ ref: x.c, key: 'o' + x.i })), ...NPC_SIRES.map((c, i) => ({ ref: c, key: 'n' + i }))];
  const dams = [...own.filter(x => sexOf(x.c) === '牝').map(x => ({ ref: x.c, key: 'o' + x.i, full: (x.c.foals || 0) >= 6 })), ...NPC_DAMS.map((c, i) => ({ ref: c, key: 'n' + i }))];
  const S1 = sires.find(x => x.key === B.s), D1 = dams.find(x => x.key === B.d);
  const fee = S1 && S1.ref.npc ? Math.round((S1.ref.fee || 0) / 100) : 0;
  const pv = S1 && D1 ? preview(S1.ref, D1.ref) : null;
  const row = (x, kind) => `<button class="pitem ${((kind === 's' ? B.s : B.d) === x.key) ? 'on' : ''} ${x.full ? 'locked' : ''}" data-act="${kind}pick" data-v="${x.key}"><b>${x.ref.npc ? '🏠 ' : '⭐ '}${esc(x.ref.name)}</b><small>${x.ref.npc ? (kind === 's' ? `牧場の種牡馬${x.ref.fee ? `・種付け料 🥕${Math.round(x.ref.fee / 100)}` : ''}` : '牧場の繁殖牝馬') : `${x.ref.rank || ''}・${x.ref.g1Wins ? `G1 ${x.ref.g1Wins}勝` : `${x.ref.wins}勝`}${kind === 'd' ? `・産駒${x.ref.foals || 0}/6` : ''}`}</small></button>`;
  document.getElementById('app').innerHTML = `${header('配合')}<div class="page career">
    <div class="kick">父（種牡馬）</div><div class="plist">${sires.slice(0, 40).map(x => row(x, 's')).join('')}</div>
    <div class="kick">母（繁殖牝馬）</div><div class="plist">${dams.slice(0, 40).map(x => row(x, 'd')).join('')}</div>
    ${pv ? `<div class="kick">配合の見通し</div><div class="evcard legend"><h2>${esc(S1.ref.name)} × ${esc(D1.ref.name)}</h2>
      <p>予想される素質：<b class="gold big">${pv.grade}</b><br>伸びやすい能力：${pv.best.map(k => K.KIND.horse.names[k]).join('・')}<br>${pv.skills.length ? `受け継ぐかもしれない特殊能力：${pv.skills.map(k => K.SKILLS[k].n).join('・')}` : '特殊能力の遺伝はなし'}</p></div>` : '<p class="note">父と母を1頭ずつ選ぶ。⭐は自分が育てた馬、🏠は牧場の馬。</p>'}
    <div class="stack"><button class="btn red" data-act="breedGo" ${pv && S.carrots >= fee ? '' : 'disabled'}>${!pv ? '父と母を選んでください' : S.carrots < fee ? '金のにんじんが足りない' : `この配合で産ませる${fee ? `（🥕${fee}）` : ''}`}</button><button class="btn ghost" data-act="back">戻る</button></div></div>`;
  document.getElementById('app').querySelectorAll('[data-act]').forEach(el => el.onclick = () => {
    const a = el.dataset.act, v = el.dataset.v;
    if (a === 'home') return goHome();
    if (a === 'back') return drawDraft();
    if (a === 'spick') { B.s = v; return drawBreed(); }
    if (a === 'dpick') { const x = dams.find(y => y.key === v); if (x && x.full) return; B.d = v; return drawBreed(); }
    if (a === 'breedGo' && pv) {
      S.carrots -= fee;
      const foal = makeFoal(S1.ref, D1.ref);
      d.prev = foal; d.bred = true; d.custom = false; d.parents = []; d.sireRef = S1.ref; d.damRef = D1.ref;
      save(); return drawDraft();
    }
  });
}

// ===== キャンプ（年の方針） =====
const SCREENS = {};
SCREENS.camp = (C) => {
  const p = C.p, KK = K.KIND[p.kind];
  const opts = [...KK.keys.map(k => [k, KK.names[k], Math.round(p.st[k])]), ['all', 'バランス', '全体']];
  const H = p.kind === 'horse';
  const txt = H ? (p.age === 0 ? '生まれたばかりの仔馬。まずは牧場でのびのび育てよう。' : p.age === 1 ? '育成牧場で、競走馬になるための準備をする一年。' : p.age === 2 ? 'いよいよトレセンへ。6月からレースに出られる。' : `${p.age}歳のシーズン。${K.PATHS[p.path || 'middle'].n}で戦う。`)
    : (p.stage === 'school' ? (p.age === 16 ? '競馬学校に入学。2年間で騎手の基礎をたたき込む。' : '競馬学校2年目。卒業すればデビューだ。') : `${p.age}歳のシーズン。${p.free ? 'フリー' : K.stableOf(p).n}で騎乗する。`);
  const nextM = p.month;
  return `${pcard(p)}
  <div class="kick">${p.year}年 ${H ? '調教の方針' : '練習の方針'}</div><p class="note">${txt}</p>
  <div class="label">今年の${H ? '調教' : '練習'}の重点</div>
  <div class="seg c3">${opts.map(([k, n, v]) => `<button class="opt" aria-pressed="${p.focus === k}" data-act="focus" data-v="${k}">${n}<span class="d">${v}</span></button>`).join('')}</div>
  <div class="label">強度</div>
  <div class="seg c3">${Object.entries(K.TRAIN).map(([k, x]) => `<button class="opt" aria-pressed="${p.int === k}" data-act="int" data-v="${k}">${x.n}<span class="d">年間ケガ率 ${Math.round(K.injRisk(p, k) * 100)}%</span></button>`).join('')}</div>
  <div class="stack"><button class="btn red" data-act="toMonth">${nextM}月に進む</button></div>`;
};

// ===== ターン（行動を選ぶ） =====
function planList(p) {
  const out = [];
  if (p.kind === 'horse') {
    const st = K.stageOf(p);
    if (st === 'farm') out.push('生まれ故郷の牧場で過ごす');
    else if (st === 'ikusei') out.push('育成牧場で競走馬になる準備');
    else if (p.age === 2 && p.month < 5) out.push('トレセンで調教。レースは6月から');
    const rs = K.racesInTurn(p).filter(r => r.g);
    rs.forEach(r => out.push(`<span class="mmk">${r.m}月</span><span class="grade g-${r.g}">${r.g}</span><b>${esc(r.name)}</b> ${r.surf}${r.dist}m${r.locked ? ' 🔒' : ''}`));
    if (st === 'tc' && !(p.age === 2 && p.month < 5)) out.push('条件戦は毎月2レースずつ');
  } else {
    if (p.stage === 'school') out.push('競馬学校の訓練。模擬レースにも出られる');
    else {
      const rs = K.bigRacesInTurn(p).filter(r => r.g === 'G1');
      rs.forEach(r => out.push(`<span class="mmk">${r.m}月</span><span class="grade g-G1">G1</span><b>${esc(r.name)}</b>${r.locked ? ' 🔒評価' + r.need : ''}`));
      out.push(`騎乗依頼の見込み：月${K.ridesEstimate(p, (K.stableOf(p) || { rep: 45 }).rep, p.free)}鞍前後`);
    }
  }
  return out;
}
function actCard(C, a) {
  const p = C.p, cost = a.cost || 0, dis = (cost > 0 && cost > p.money) || (a.race && !raceList(C).some(r => !r.locked)), sel = C.act === a.id;
  const ef = [`成長×${a.g}`]; if (a.sta) ef.push(`体力${sgn(a.sta)}`); if (cost) ef.push(`費用 ${yen(cost)}`);
  return `<button class="act" aria-pressed="${sel}" data-act="pickAct" data-v="${a.id}" ${dis ? 'disabled' : ''}><b>${esc(K.actName(a, p))}</b><span>${esc(a.d)}</span><em>${ef.join('・')}${dis ? (a.race ? '・出られるレースなし' : '・お金が足りない') : ''}</em></button>`;
}
function raceList(C) {
  const p = C.p;
  if (p.kind === 'horse') return p.inj > 0 ? [] : K.racesInTurn(p);
  if (p.stage === 'school') return [{ m: p.month + 1 > 12 ? p.month : p.month + 1, name: '競馬学校 模擬レース', mock: 1, surf: '芝', dist: [1200, 1400, 1600][p.month % 3], place: '学校', prize: 0, lv: 34 }];
  return p.inj > 0 ? [] : K.bigRacesInTurn(p);
}
function racePicker(C) {
  const p = C.p, list = raceList(C);
  return `<div class="label">出るレース</div><div class="rlist">${list.map((r, i) => {
    const [mk, mt, mc] = r.mock ? ['', '', ''] : K.oddsMark(p, r);
    const on = C.raceSel && C.raceSel.name === r.name && C.raceSel.m === r.m && C.raceSel.dist === r.dist && C.raceSel.surf === r.surf;
    return `<button class="ritem ${r.locked ? 'locked' : ''} ${on ? 'on' : ''}" data-act="pickRace" data-v="${i}">
      <div><span class="mmk">${r.m}月</span>${r.g ? `<span class="grade g-${r.g}">${r.g}</span>` : r.mock ? '' : '<span class="grade gc">条件</span>'}<b>${esc(r.name)}</b>${mk ? `<span class="odds ${mc}">${mk} ${mt}</span>` : ''}</div>
      <small>${r.place || ''} ${r.surf === 'ダ' ? 'ダート' : '芝'}${r.dist}m${r.prize ? `　1着 ${yen(r.prize)}` : ''}${p.kind === 'horse' ? `　適性${r.surf === '芝' ? p.apt.turf : p.apt.dirt}` : ''}${r.path ? '　★路線' : ''}</small>
      ${r.locked ? `<small class="lock">🔒 ${p.kind === 'horse' ? '勝ち星が足りない' : `評価${r.need}以上で騎乗依頼`}</small>` : ''}</button>`;
  }).join('') || '<p class="note">このターンに出られるレースはない。</p>'}</div>`;
}
SCREENS.month = (C) => {
  const p = C.p, T = K.KIND[p.kind].turns, end = K.turnEnd(p);
  const dots = T.map(m => `<i class="${m < p.month ? 'done' : m === p.month ? 'now' : ''}"></i>`).join('');
  const a = C.act && K.ACTS[p.kind].find(x => x.id === C.act);
  const ready = a && (!a.race || (C.raceSel && !C.raceSel.locked));
  return `${pcard(p, 'compact')}
  <section class="cal"><div class="cal-m"><span class="cnum">${p.month}</span><span class="u">–${end}月</span></div><div class="cal-i"><b>${p.year}年</b><span class="sub">${p.age}歳・${K.STAGE_NAME[K.stageOf(p)]}</span><div class="dots" style="grid-template-columns:repeat(${T.length},1fr)">${dots}</div></div></section>
  ${careerBar(p)}
  <div class="kick">この${K.KIND[p.kind].len}か月の予定</div><ul class="plan">${planList(p).map(s => `<li>${s}</li>`).join('')}</ul>
  <div class="kick">この${K.KIND[p.kind].len}か月の行動<span class="r">ひとつ選ぶ</span></div>
  <div class="acts">${K.actsFor(p).map(x => actCard(C, x)).join('')}</div>
  ${a && a.race ? racePicker(C) : ''}
  <div class="stack"><button class="btn red" data-act="confirm" ${ready ? '' : 'disabled'}>${ready ? `この行動で${K.KIND[p.kind].len}か月を過ごす` : a && a.race ? 'レースを選んでください' : '行動を選んでください'}</button></div>`;
};

// ===== 出来事 =====
SCREENS.event = (C) => {
  const p = C.p, e = K.getEv(C.evq[C.evi]), c = K.evCtx(p), R = C.evr;
  const t = typeof e.t === 'function' ? e.t(c) : e.t, x = typeof e.x === 'function' ? e.x(c) : e.x;
  let body;
  if (!R) body = `<div class="stack">${e.ch.map((ch, i) => `<button class="choice" data-act="choose" data-v="${i}"><span><b>${esc(ch.l)}</b>${ch.d ? `<small>${esc(ch.d)}</small>` : ''}</span>${ring(K.prOf(ch, c))}</button>`).join('')}</div>`;
  else {
    const ch = e.ch[R.ci];
    body = `<div class="evcard"><div class="verdict ${R.safe ? 'safe' : R.win ? 'ok' : 'ng'}"><span class="vbig">${R.safe ? '決定' : R.win ? '成功' : '失敗'}</span><span class="sub">「${esc(ch.l)}」<br>成功率 ${Math.round(R.pr * 100)}%</span></div><p>${esc(R.m)}</p>${R.fx.length ? `<div class="chips">${chipsOf(R.fx)}</div>` : ''}</div>
    <div class="stack"><button class="btn red" data-act="nextEv">${C.evi + 1 < C.evq.length ? '次の出来事へ' : 'このターンの結果へ'}</button></div>`;
  }
  const band = e.sp ? `<div class="lgband"><span>SPECIAL</span><span>特別な出来事</span></div>` : '';
  return `${pcard(p, 'compact')}<div class="kick">${p.year}年${p.month}–${K.turnEnd(p)}月の出来事<span class="r">${C.evi + 1}/${C.evq.length}</span></div>
  <div class="evcard ${e.sp ? 'legend' : ''}">${band}<h2>${esc(t)}</h2><p>${esc(x)}</p></div>${body}`;
};

// ===== レース前 =====
SCREENS.afterEvents = (C) => {
  const p = C.p, r = C.raceSel;
  if (!r) { runTurnC(C); save(); return SCREENS.mres(C); }
  const H = p.kind === 'horse';
  const jks = [NPC_JOCKEY, ...S.jockeys];
  const jk = H ? (S.jockeys.find(j => j.id === p.jockeyId) || NPC_JOCKEY) : null;
  if (!C.style) C.style = H ? p.style : p.pref;
  return `${pcard(p, 'compact')}<div class="kick">${r.m}月　出走</div>
  <div class="evcard legend"><h2>${r.g ? `<span class="grade g-${r.g}">${r.g}</span>` : ''}${esc(r.name)}</h2><p>${r.abroad ? `🌍 ${r.abroad}・` : ''}${r.place || ''} ${r.surf === 'ダ' ? 'ダート' : '芝'}${r.dist}m${r.prize ? `　1着賞金 ${yen(r.prize)}` : ''}</p><p class="sub">天気 ${r.weather || '晴'}・馬場 ${r.going || '良'}${r.cost ? `・遠征費 ${yen(r.cost)}` : ''}</p>
  ${H ? `<p class="sub">体力 ${Math.round(p.sta)}・調子 ${COND_NAMES[K.condIdx(p)]}${p.sta < 30 ? '（疲れが残っている…）' : ''}</p>` : `<p class="sub">${r.mock ? '学校の馬に乗る' : '依頼された馬に乗る'}</p>`}</div>
  ${H ? `<div class="label">騎手</div><div class="chips">${jks.map((j, i) => `<button class="chip ${((p.jockeyId ?? null) === (j.id ?? null)) ? 'on' : ''}" data-act="jk" data-v="${i}">${esc(j.name)}${j.rank ? `<small>${j.rank}</small>` : ''}</button>`).join('')}</div>` : ''}
  <div class="label">作戦</div><div class="chips">${STYLES.map(s => `<button class="chip ${s === C.style ? 'on' : ''}" data-act="style" data-v="${s}">${s}</button>`).join('')}</div>
  <div class="howto"><b>操作</b>　◀▶で進路、ムチで加速（体力が減りやすい）。体力ゲージが0になると失速。スマホは横向きがおすすめ。</div>
  <div class="stack"><button class="btn race" data-act="ride3d">🏇 自分で乗る（3Dレース）</button><button class="btn ghost" data-act="rideAuto">結果だけ見る</button></div>`;
};

// ===== ターンの結果 =====
SCREENS.mres = (C) => {
  const p = C.p, R = C.mres, KK = K.KIND[p.kind];
  if (!R) return SCREENS.month(C);
  const ds = R.d.filter(([, v]) => Math.abs(v) >= 0.5).map(([k, v], i) => `<span class="chip pop ${v > 0 ? 'up' : 'down'}" style="animation-delay:${200 + i * 80}ms">${KK.names[k]} ${v > 0 ? '+' : ''}${v.toFixed(1)}</span>`).join('');
  const mini = [['体力', R.dsta], ['調子', R.dcond], [KK.popName, R.dpop], ['評価', R.deval]]; if (R.dfam !== null) mini.push([p.fam.partner && p.fam.partner.married ? '家族' : '愛情', R.dfam]);
  const F = R.fate;
  const fb = F ? `<div class="fate ${F.ty}"><b>${esc(F.head)}</b><p>${esc(F.why)}${F.ty === 'retire' ? '。ここで現役生活が終わる。' : '。'}</p></div>` : '';
  const next = F ? (F.ty === 'death' ? 'お別れへ' : '引退へ') : K.isLastTurnOfYear(p) ? '年間総括へ' : `${(K.KIND[p.kind].turns.find(x => x > p.month) || 1)}月へ`;
  const races = R.races.map(x => `<li class="mt"><span class="md">${x.m}月</span><span class="mo"><small>${x.g ? x.g + '・' : ''}${x.surf}${x.dist}m${x.horse ? '・' + esc(x.horse) : ''}</small>${esc(x.name)}<small>${fmtTime(x.time)}${x.prize ? '・賞金 ' + yen(x.prize) : ''}</small></span><span class="ms ${x.pos === 1 ? 'w' : x.pos <= 3 ? 'd' : 'l'}"><i>${x.pos}着</i>/${x.field}</span></li>`).join('');
  return `${fb}${pcard(p, 'compact')}
  <div class="kick">${R.y}年${R.m}–${R.m1}月の結果<span class="r">${esc(R.act)}</span></div>
  ${R.ev ? `<p class="note">このターンの出来事：${esc(R.ev.t)}（${esc(R.ev.l)}）</p>` : ''}
  ${races ? `<ul class="mlist">${races}</ul>` : ''}
  ${R.rides ? `<p class="note">騎乗 ${R.rides}鞍・<b class="gold">${R.w}勝</b></p>` : ''}
  ${R.notes.length ? `<ul class="plan">${R.notes.map(n => `<li>${esc(n)}</li>`).join('')}</ul>` : ''}
  ${R.skills.length ? `<div class="chips">${R.skills.map(k => `<span class="chip gold shine">特殊能力「${esc(K.SKILLS[k].n)}」を習得</span>`).join('')}</div>` : ''}
  ${R.carrots ? `<p class="note">🥕 金のにんじん +${R.carrots}</p>` : ''}
  <div class="kick">このターンの変化<span class="r">総合 ${R.o0} → <b class="${R.o1 > R.o0 ? 'upv' : ''}">${R.o1}</b></span></div>
  ${ds ? `<div class="chips">${ds}</div>` : ''}
  <div class="chips">${mini.map(([l, v]) => `<span class="chip ${v > 0 ? 'up' : v < 0 ? 'down' : ''}">${l} ${sgn(v)}</span>`).join('')}<span class="chip ${R.dm >= 0 ? 'up' : 'down'}">${KK.moneyName} ${R.dm >= 0 ? '+' : ''}${yen(R.dm)}</span></div>
  <p class="note">収入 ${yen(R.inc)}・固定費 ${yen(R.cost)}</p>
  <div class="stack"><button class="btn red" data-act="afterTurn">${next}</button></div>`;
};

// ===== 年間総括 =====
SCREENS.report = (C) => {
  const p = C.p, R = C.report, KK = K.KIND[p.kind];
  const gold = R.awards.length || R.titles.length;
  const dch = R.d.filter(([, v]) => v).map(([k, v]) => `<span class="chip ${v > 0 ? 'up' : 'down'}">${KK.names[k]} ${sgn(v)}</span>`).join('');
  return `<article class="front ${gold ? 'gold' : ''}">${gold ? '<span class="gogai">号外</span>' : ''}
    <div class="dateline"><span>${R.year}年 総括</span><span>${R.age}歳</span></div>
    <div class="vhead"><span class="l1">${esc(R.headA)}</span><span class="l2">${esc(R.headB)}</span></div>
    <p class="deck">${esc(R.deck)}</p>
    ${R.awards.length ? `<div class="chips">${R.awards.map(a => `<span class="chip gold">${esc(a)}</span>`).join('')}</div>` : ''}</article>
  ${R.rows.length ? `<div class="kick">今年の成績</div><table class="st"><tbody>${R.rows.map(([a, b]) => `<tr><th>${esc(a)}</th><td>${esc(b)}</td></tr>`).join('')}</tbody></table>` : ''}
  <div class="kick">能力の変化<span class="r">総合 ${R.o0} → <b>${R.o1}</b></span></div>
  ${dch ? `<div class="chips">${dch}</div>` : '<p class="note">変化なし</p>'}
  ${R.potNote ? `<p class="note">${p.kind === 'horse' ? '調教師' : '教官'}の見立て：伸びしろは <b class="gold big">${R.potNote}</b>（SS〜D）</p>` : ''}
  <div class="stack"><button class="btn red" data-act="toOffers">${p.kind === 'horse' ? (p.age < 2 ? '次の年へ' : '来年の路線を決める') : p.stage === 'school' && p.age >= 17 ? 'デビューする厩舎を決める' : p.stage === 'school' ? '次の年へ' : '来年の所属を決める'}</button></div>`;
};

// ===== オファー（年末の進路） =====
SCREENS.offers = (C) => {
  const p = C.p, X = C.offers;
  if (!X) return '';
  let html = `${pcard(p, 'compact')}<div class="kick">${p.year + 1}年に向けて</div><p class="note">${esc(X.note || '')}</p><div class="stack">`;
  if (p.kind === 'horse') {
    if (p.age < 2) html += `<button class="btn red" data-act="offer" data-k="none">${p.year + 1}年へ</button>`;
    else {
      if (!X.forced) html += X.paths.map(P => `<div class="offer ${p.path === P.k ? 'renew' : ''}"><div class="top"><div><div class="club">${P.n}${p.path === P.k ? '<span class="tag">今年と同じ</span>' : ''}</div><div class="lg">${P.d}</div></div></div><button class="btn" data-act="offer" data-k="path" data-v="${P.k}">この路線で現役を続ける</button></div>`).join('');
      html += X.retireOpts.map(o => `<div class="offer"><div class="top"><div><div class="club">${o.n}</div><div class="lg">${esc(o.d)}</div></div></div><button class="btn ghost" data-act="offer" data-k="retire" data-v="${esc(o.n.replace('引退して', '') + '。' + o.d)}">${o.n}</button></div>`).join('');
    }
  } else {
    html += X.list.map(of => {
      const s = K.STABLES[of.stable];
      return `<div class="offer ${of.renew ? 'renew' : ''}"><div class="top"><div><div class="club">${esc(s.n)}${of.renew ? '<span class="tag">残留</span>' : ''}</div><div class="lg">厩舎の力 ${s.rep}</div></div><div class="stars">${K.stars(s.rep)}</div></div>
      <div class="kv"><div>騎乗依頼の見込み<b>月${K.ridesEstimate(p, s.rep, false)}鞍</b></div></div>
      <button class="btn" data-act="offer" data-k="stable" data-v="${s.id}">${of.renew ? '残る' : p.stage === 'school' ? 'この厩舎でデビュー' : '移籍する'}</button></div>`;
    }).join('');
    if (X.free || X.stayFree) html += `<div class="offer"><div class="top"><div><div class="club">フリー${X.stayFree ? '<span class="tag">継続</span>' : ''}</div><div class="lg">所属なし。人気と評価で依頼が決まる</div></div></div><div class="kv"><div>騎乗依頼の見込み<b>月${K.ridesEstimate(p, 0, true)}鞍</b></div></div><button class="btn" data-act="offer" data-k="free">${X.stayFree ? 'フリーを続ける' : 'フリーになる'}</button></div>`;
    if (X.canRetire || X.forced) html += `<button class="btn ghost" data-act="offer" data-k="retire" data-v="${p.age}歳でムチを置いた">${X.forced ? '引退する' : '現役を引退する'}</button>`;
  }
  return html + '</div>';
};

// ===== 引退 =====
function doRetire(C) {
  const p = C.p;
  const card = K.toCard(p);
  card.id = newId();
  if (p.kind === 'horse') S.horses.unshift(card); else S.jockeys.unshift(card);
  const bonus = 20 + Math.round((p.g1Wins || 0) * 20 + (p.gradedWins || 0) * 5);
  S.carrots += bonus;
  C.summary = { card, bonus };
  C.screen = 'retired'; C.auto = false; C.tab = 'play';
  (C.cutq = C.cutq || []).push(card.died ? { k: 'death', t: 'さようなら', s: p.name, d: 3000 } : { k: 'retire', t: '引退', s: `${p.name}　おつかれさま`, d: 2600 });
  checkAch('retire', { p, card });
  save();
}
SCREENS.retireNow = (C) => { doRetire(C); return SCREENS.retired(C); };
SCREENS.retired = (C) => {
  const p = C.p, s = C.summary, c = s.card, died = c.died;
  const rows = p.kind === 'horse' ? [['通算成績', `${p.record.join('-')}`], ['獲得賞金', yen(p.earnings)], ['重賞', `${p.gradedWins}勝（G1 ${p.g1Wins}勝）`]]
    : [['通算', `${p.rides}戦${p.wins}勝`], ['重賞', `${p.gradedWins}勝（G1 ${p.g1Wins}勝）`], ['生涯獲得', yen(p.earnings)]];
  return `<article class="front ${died ? 'mourn' : 'gold'}"><div class="dateline"><span>${p.year}年</span><span>${p.age}歳</span></div>
    <div class="vhead"><span class="l1">${esc(p.name)}</span><span class="l2">${died ? '天国へ' : '引退'}</span></div>
    <p class="deck">${esc(c.retireReason)}</p></article>
  <div class="rank-big" style="color:${rankColor(c.rank)}">${c.rank}</div><p class="note center">評価点 ${c.score}</p>
  <table class="st"><tbody>${rows.map(([a, b]) => `<tr><th>${a}</th><td>${b}</td></tr>`).join('')}</tbody></table>
  ${p.titles.length ? `<div class="kick">勝った重賞</div><div class="chips">${p.titles.slice(-20).map(t => `<span class="chip gold">${esc(t)}</span>`).join('')}</div>` : ''}
  ${p.awards.length ? `<div class="kick">受賞</div><div class="chips">${p.awards.map(t => `<span class="chip gold">${esc(t)}</span>`).join('')}</div>` : ''}
  <p class="note">${p.kind === 'horse' ? '一覧に登録した。次に生まれる馬の父・母に選べる。対戦にも出せる。' : '一覧に登録した。馬の育成で騎手に選べる。次の騎手の師匠にもなれる。'}　🥕 +${s.bonus}</p>
  <div class="stack"><button class="btn red" data-act="finish">ホームへ</button><button class="btn ghost" data-act="again">${p.kind === 'horse' ? '次の馬を育てる' : '次の騎手を育てる'}</button></div>`;
};

// ===== 暮らし・牧場 =====
function lifeHtml(C) {
  const p = C.p, H = p.kind === 'horse', KK = K.KIND[p.kind];
  const costs = K.monthlyCost(p);
  const items = K.SHOP[p.kind];
  const shop = items.map(it => {
    const [ok, why] = K.canBuy(p, it);
    const price = it.type === 'sub' ? `月${it.price}万円` : it.type === 'home' ? `家賃 月${it.price}万円` : yen(it.price);
    const owned = (it.type === 'once' && p.items[it.id]) || (it.type === 'sub' && p.subs[it.id]) || (it.type === 'home' && p.home === it.id) || (it.type === 'car' && p.car === it.id);
    return `<div class="shopi ${owned ? 'own' : ''}"><div><b>${esc(it.n)}</b><small>${esc(it.d)}</small><em>${esc(it.eff)}</em></div><button class="btn sm ${ok ? '' : 'off'}" data-act="buy" data-v="${it.id}" ${ok ? '' : 'disabled'}>${owned && it.type === 'sub' ? '解約' : owned ? '済み' : '買う'}<small>${why || price}</small></button></div>`;
  }).join('');
  let fam = '';
  if (!H) {
    const P = p.fam.partner;
    fam = `<div class="kick">家族</div><p class="note">${P ? (P.married ? `${esc(P.n)}と結婚している。家族の満足度 ${Math.round(p.fam.happy)}` : `恋人：${esc(P.n)}（愛情 ${Math.round(P.love)}）`) : 'いまは一人。出会いは出来事で起きる。'}${p.fam.kids.length ? `<br>子ども：${p.fam.kids.map(k => esc(k.n)).join('、')}` : ''}</p>
      <p class="note">住まい：${p.home === 'dorm' ? '寮' : esc((K.shopItem('jockey', p.home) || {}).n || '')}　車：${p.car ? esc(K.shopItem('jockey', p.car).n) : 'なし'}</p>`;
  }
  return `${pcard(p, 'compact')}${fam}
  <div class="kick">${KK.moneyName}<span class="r">${yen(p.money)}</span></div>
  <table class="st"><tbody>${costs.map(([a, b]) => `<tr><th>${esc(a)}</th><td>月${b}万円</td></tr>`).join('') || '<tr><th>固定費</th><td>なし</td></tr>'}</tbody></table>
  <div class="kick">${H ? '牧場・厩舎の買い物' : '買い物'}</div><div class="shop">${shop}</div>`;
}

// ===== 経歴 =====
function logHtml(C) {
  const p = C.p;
  const races = p.kind === 'horse' ? p.races.slice().reverse().slice(0, 40).map(r => `<div><span class="${r.pos === 1 ? 'win' : ''}">${r.pos}着</span>${r.g ? `<span class="grade g-${r.g}">${r.g}</span>` : ''}${esc(r.name)}<small>${r.y}年${r.m}月 ${r.surf}${r.dist}m ${fmtTime(r.time)}</small></div>`).join('') : '';
  return `${pcard(p)}
  ${p.titles.length ? `<div class="kick">勝った重賞</div><div class="chips">${p.titles.slice(-30).map(t => `<span class="chip gold">${esc(t)}</span>`).join('')}</div>` : ''}
  ${p.awards.length ? `<div class="kick">受賞</div><div class="chips">${p.awards.map(t => `<span class="chip gold">${esc(t)}</span>`).join('')}</div>` : ''}
  ${races ? `<div class="kick">レース成績</div><div class="rhist">${races}</div>` : ''}
  <div class="kick">歩み</div><div class="log">${p.log.slice(0, 60).map(l => `<div>${esc(l)}</div>`).join('') || '<div>まだ記録はない</div>'}</div>
  <div class="kick">今年の行動</div><div class="log">${p.yearLog.slice().reverse().map(y => `<div>${y.m}月：${esc(y.act)}${y.races.length ? '・' + esc(y.races.join(' ')) : ''}</div>`).join('') || '<div>—</div>'}</div>
  <button class="btn ghost" data-act="quit">この育成をやめる</button>`;
}

// ===== 操作 =====
function bindAll(C) {
  const app = document.getElementById('app');
  app.querySelectorAll('[data-act]').forEach(el => el.onclick = () => { if (el.disabled) return; act(C, el.dataset.act, el.dataset.v, el); });
}

function act(C, a, v, el) {
  const p = C.p;
  switch (a) {
    case 'home': stopAuto(C); save(); return goHome();
    case 'tab': C.tab = v; break;
    case 'focus': p.focus = v; C._keepScroll = true; break;
    case 'int': p.int = v; C._keepScroll = true; break;
    case 'toMonth': K.startTurn(C); break;
    case 'pickAct': C.act = v; C.raceSel = null; C._keepScroll = true; break;
    case 'pickRace': { const r = raceList(C)[+v]; if (r && !r.locked) C.raceSel = { ...r, ...rollWeather(r.m) }; C._keepScroll = true; break; }
    case 'confirm': K.confirmAction(C); break;
    case 'choose': {
      K.chooseEvent(C, +v);
      const fx = (C.evr && C.evr.fx) || [];
      C.cutq = C.cutq || [];
      if (fx.some(f => f[0] === '結婚')) C.cutq.push({ k: 'wedding', t: '結婚！', s: p.fam.partner ? `${p.fam.partner.n}と永遠の誓い` : '', d: 2400 });
      if (fx.some(f => f[0] === '家族' && /誕生/.test(f[1]))) C.cutq.push({ k: 'baby', t: '家族が増えた！', s: fx.find(f => f[0] === '家族')[1], d: 2200 });
      break;
    }
    case 'nextEv': K.nextEvent(C); break;
    case 'jk': { const j = [NPC_JOCKEY, ...S.jockeys][+v]; p.jockeyId = j.id ?? null; C._keepScroll = true; break; }
    case 'style': C.style = v; C._keepScroll = true; break;
    case 'ride3d': return runRace(C, true);
    case 'rideAuto': return runRace(C, false);
    case 'afterTurn': C.style = null; K.afterTurn(C); if (C.screen === 'report' && C.report.awards.length) { (C.cutq = C.cutq || []).push({ k: 'award', t: C.report.awards[0], s: `${p.year}年`, d: 2200 }); checkAch('award', { p, awards: C.report.awards }); } break;
    case 'toOffers': K.buildOffers(C); break;
    case 'offer': {
      const k = el.dataset.k;
      if (k === 'retire' && !C.auto && !confirm('本当に引退しますか？')) return;
      const wasSchool = p.kind === 'jockey' && p.stage === 'school';
      K.pickOffer(C, k, k === 'stable' ? +v : v);
      if (wasSchool && p.stage === 'pro') (C.cutq = C.cutq || []).push({ k: 'debutJ', t: '騎手デビュー！', s: K.stableOf(p) ? K.stableOf(p).n : 'フリー', d: 2200 });
      if (C.screen === 'camp') p.log.unshift(`${p.year}年 ${p.kind === 'horse' ? (p.age >= 2 ? K.PATHS[p.path].n + 'へ' : `${p.age}歳に`) : p.free ? 'フリーで騎乗' : K.stableOf(p) ? K.stableOf(p).n + '所属' : ''}`);
      break;
    }
    case 'buy': { const out = K.buy(p, v); out.forEach(m => p.log.unshift(`${p.year}年${p.month}月 ${m}`)); C._keepScroll = true; break; }
    case 'finish': S[slot(p.kind)] = null; save(); return goHome();
    case 'again': S[slot(p.kind)] = null; save(); return draftNew(p.kind);
    case 'quit': if (confirm('この育成をやめますか？（一覧には残りません）')) { S[slot(p.kind)] = null; save(); return goHome(); } return;
    case 'auto': C.auto = !C.auto; if (!C.auto) stopAuto(C); break;
    case 'speed': C.speed = { 1: 2, 2: 4, 4: 8, 8: 1 }[C.speed || 1]; C._keepScroll = true; break;
  }
  save(); draw();
}

function raceCfg(C) {
  const p = C.p, r = C.raceSel;
  if (p.kind === 'horse') {
    const jk = S.jockeys.find(j => j.id === p.jockeyId) || NPC_JOCKEY;
    const cfg = K.horseRaceCfg(p, r, jk); cfg.player.style = C.style || p.style; return cfg;
  }
  const cfg = K.jockeyRaceCfg(p, r); if (C.style) cfg.player.style = C.style; return cfg;
}
function runRace(C, live) {
  const cfg = raceCfg(C);
  const done = (res) => {
    if (!res) { C.raceSel = null; C.act = 'rest'; runTurnC(C); save(); draw(); return; }
    res.jname = cfg.player.jname;
    C.raceRes = res; runTurnC(C); save(); draw();
  };
  if (!live) { done(simulateRace(cfg)); return; }
  stopAuto(C);
  startRace({ ...cfg, onDone: done });
}

// ===== ターンの結果からカットシーンを決める =====
function runTurnC(C) {
  const p = C.p, w0 = p.wins, n0 = (p.races || []).length;
  const res = K.runTurn(C);
  const q = C.cutq = C.cutq || [];
  if (res.fate) q.push(res.fate.ty === 'death' ? { k: 'death', t: '訃報', s: res.fate.why, d: 3200 } : { k: 'injury', t: res.fate.head, s: res.fate.why, d: 2600 });
  for (const r of res.races || []) {
    if (r.pos === 1 && r.g === 'G1') q.push({ k: r.abroad ? 'g1' : 'g1', t: `${r.name} 制覇！`, s: p.kind === 'horse' ? p.name : `${r.horse || ''}に騎乗`, d: 2800 });
    else if (r.pos === 1 && p.kind === 'horse' && w0 === 0) q.push({ k: 'win', t: '初勝利！', s: r.name, d: 2200 });
  }
  if (p.kind === 'horse' && n0 === 0 && (p.races || []).length > 0) q.unshift({ k: 'debut', t: 'デビュー！', s: res.races[0] ? res.races[0].name : '', d: 2000 });
  for (const k of res.skills || []) q.push({ k: 'skill', t: `「${K.SKILLS[k].n}」習得！`, s: K.SKILLS[k].d, d: 1800 });
  if ((res.races || []).some(r => r.abroad)) q.unshift({ k: 'abroad', t: '海外遠征', s: res.races.find(r => r.abroad).abroad + 'へ', d: 1600 });
  if (!p.flags.inj2 && p.inj >= 12 && !res.fate) { p.flags.inj2 = 1; q.push({ k: 'injury', t: '大きなケガ', s: `${p.injName}（全治${Math.ceil(p.inj)}週）`, d: 2200 }); }
  if (p.inj < 12) p.flags.inj2 = 0;
  checkAch('turn', { p, res });
  return res;
}

// ===== オート =====
let autoTimer = null;
function stopAuto(C) { if (autoTimer) clearTimeout(autoTimer); autoTimer = null; if (C) C.auto = false; }
function scheduleAuto(C) {
  if (autoTimer) clearTimeout(autoTimer);
  const delay = 900 / (C.speed || 1);
  autoTimer = setTimeout(() => { autoTimer = null; if (getC() !== C || !C.auto) return; autoStep(C); }, delay);
}
function autoStep(C) {
  const p = C.p;
  C.tab = 'play';
  switch (C.screen) {
    case 'camp': K.startTurn(C); break;
    case 'month': {
      let a = K.autoPickAct(C);
      if (a.race) { const r = K.autoPickRace(C); if (r) C.raceSel = { ...r, ...rollWeather(r.m) }; else a = K.actsFor(p).find(x => x.id === 'rest') || K.actsFor(p)[0]; }
      C.act = a.id; K.confirmAction(C); break;
    }
    case 'event': if (!C.evr) K.chooseEvent(C, K.autoPickChoice(C)); else K.nextEvent(C); break;
    case 'afterEvents': if (C.raceSel) { const cfg = raceCfg(C); const res = simulateRace(cfg); res.jname = cfg.player.jname; C.raceRes = res; } runTurnC(C); break;
    case 'mres': K.afterTurn(C); break;
    case 'report': K.buildOffers(C); break;
    case 'offers': {
      const X = C.offers;
      if (p.kind === 'horse') { if (p.age < 2) K.pickOffer(C, 'none'); else if (X.forced) K.pickOffer(C, 'retire', X.retireOpts[X.retireOpts.length - 1].n + '。' + X.retireOpts[X.retireOpts.length - 1].d); else K.pickOffer(C, 'path', p.path || 'middle'); }
      else { if (X.forced) K.pickOffer(C, 'retire', `${p.age}歳でムチを置いた`); else if (X.list.length) { const best = X.list.slice().sort((a, b) => K.STABLES[b.stable].rep - K.STABLES[a.stable].rep)[0]; K.pickOffer(C, 'stable', best.stable); } else K.pickOffer(C, 'free'); }
      break;
    }
    case 'retireNow': doRetire(C); break;
    case 'retired': C.auto = false; break;
  }
  save(); draw();
}
