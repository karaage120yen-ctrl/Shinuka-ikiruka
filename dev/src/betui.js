// ===== 賭けの画面（コインで馬券を買う・ルームで同じレース） =====
import { S, save } from './store.js';
import * as B from './bet.js';
import { simulateField } from './sim.js';
import { startRace } from './racescreen.js';
import { fmtTime } from './data.js';
import { checkAch } from './ach.js';
import { NET, online, onNet, joinRoomLive, pushMember, callWatch, me } from './net.js';

const esc = (s) => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const cn = (v) => Math.round(v).toLocaleString('ja-JP');
let goHome = () => {};
let UI = { race: 1, type: 'tan', mode: 'normal', sel: [[], [], []], amt: 100, busy: null };
const EASY = { tan: 3, fuku: 5, waku: 3, umaren: 2, wide: 4, umatan: 2, trio: 2, trifecta: 1 };

function st() {
  if (!S.bet) S.bet = { coins: 10000, room: '', name: '', week: 0, cards: {}, hist: { bet: 0, ret: 0 }, friends: {}, rescue: '' };
  return S.bet;
}
function card() {
  const b = st();
  const key = `${b.room || 'solo'}|${b.week}`;
  let c = b.cards[key];
  if (!c || c.key !== B.cardKey(b.week, b.room)) { c = B.makeCard(b.week, b.room); c.tickets = {}; c.results = {}; b.cards = { [key]: c }; save(); }
  return c;
}
const raceOf = (c, no) => c.races.find(r => r.no === no);
function toast(t) { const el = document.createElement('div'); el.className = 'toast'; el.textContent = t; document.body.appendChild(el); setTimeout(() => el.classList.add('show'), 10); setTimeout(() => { el.classList.remove('show'); setTimeout(() => el.remove(), 400); }, 2200); }

let inBet = false, seenWatch = 0, watchTimer = null;
export function openBet(homeFn) { goHome = () => { inBet = false; homeFn(); }; inBet = true; st(); joinRoomLive(st().room); drawLobby(); }
// ルームのみんなの動きが届いたら、その部分だけ描き直す
onNet(() => {
  if (!inBet) return;
  const lb = document.getElementById('livebox'); if (lb) lb.innerHTML = liveHtml(card());
  const rl = document.getElementById('racelive'); if (rl) rl.innerHTML = raceLiveHtml(card(), UI.race);
  checkWatch();
});
const others = (c) => (NET.members || []).filter(m => m.id !== me() && m.k === c.key);
function liveHtml(c) {
  if (!online() || !st().room) return '';
  const os = others(c);
  return `<div class="kick">🟢 ルームのみんな（リアルタイム）<span class="r">${os.length + 1}人</span></div>
  ${os.length ? `<div class="mlist">${os.map(m => { const p = m.ret - m.bet; let rs = []; try { rs = JSON.parse(m.rs || '[]'); } catch (e) { /* */ } const buying = rs.filter(x => x[1] > 0 && x[2] == null);
    return `<div class="mrow"><b>${esc(m.n)}</b><span class="${p >= 0 ? 'upv' : 'bad'}">${p >= 0 ? '+' : ''}${cn(p)}</span><small>${m.done}R確定・🪙${cn(m.coins || 0)}${buying.length ? `・購入中 ${buying.map(x => x[0] + 'R').join(' ')}` : ''}</small></div>`; }).join('')}</div>` : '<p class="note">まだ誰もいない。ルームコードを友達に送ろう。</p>'}`;
}
function raceLiveHtml(c, no) {
  if (!online() || !st().room) return '';
  const os = others(c).map(m => { let rs = []; try { rs = JSON.parse(m.rs || '[]'); } catch (e) { /* */ } const x = rs.find(y => y[0] === no); return x && x[1] > 0 ? { n: m.n, bet: x[1], ret: x[2], list: x[3] } : null; }).filter(Boolean);
  if (!os.length) return '';
  return `<div class="kick">👥 みんなの馬券</div><div class="mlist">${os.map(o => `<div class="mrow"><b>${esc(o.n)}</b><span>${cn(o.bet)}</span><small>${o.list.map(esc).join('／')}${o.ret != null ? `　→ <b class="${o.ret > 0 ? 'gold' : ''}">払戻 ${cn(o.ret)}</b>` : ''}</small></div>`).join('')}</div>`;
}
function sync() { if (online() && st().room) pushMember(summary(card())); }
// だれかが「一緒に見る」を押したら、全員で同時に3D中継を始める
function checkWatch() {
  const w = NET.watch; if (!w || w.at === seenWatch) return;
  const c = card(); if (w.k !== c.key) return;
  if (w.at < Date.now() - 4000) { seenWatch = w.at; return; }
  const r = raceOf(c, w.no); if (!r || c.results[w.no]) { seenWatch = w.at; return; }
  seenWatch = w.at;
  if (!document.getElementById('race-screen').classList.contains('hidden')) return;
  const ov = document.createElement('div'); ov.className = 'watchov';
  ov.innerHTML = `<div><h2>📺 一緒に見よう</h2><p><b>${esc(w.uid === me() ? 'あなた' : w.by)}</b>が <b>${w.no}R ${esc(r.name)}</b> の中継を始めます</p><div class="cd" id="wcd">10</div><p class="small">締め切り前に馬券を買っておこう</p><div class="row2"><button class="btn red" id="wbuy">馬券を見る</button><button class="btn ghost" id="wno">見ない</button></div></div>`;
  document.body.appendChild(ov);
  let cancel = false;
  ov.querySelector('#wno').onclick = () => { cancel = true; ov.remove(); };
  ov.querySelector('#wbuy').onclick = () => { ov.classList.add('mini'); UI.race = w.no; openRace(w.no); };
  if (!r.priced) B.mcPrice(c, r, 40).then(() => save());
  clearInterval(watchTimer);
  watchTimer = setInterval(() => {
    const left = Math.ceil((w.at - Date.now()) / 1000);
    const el = document.getElementById('wcd'); if (el) el.textContent = Math.max(0, left);
    if (left > 0) return;
    clearInterval(watchTimer); ov.remove();
    if (cancel || !inBet || c.results[w.no]) return;
    const go = () => { UI.race = w.no; runResult(r, true); };
    if (r.priced) go(); else B.mcPrice(c, r, 40).then(go);
  }, 250);
}

function head(title, back = 'home') {
  return `<header class="top"><button class="back" data-a="${back}">‹</button><h1>${title}</h1><div class="carrot">🪙 ${cn(st().coins)}</div></header>`;
}
function frameBox(h) { const f = h.frame - 1; return `<span class="fbox" style="background:${B.FRAME_COLORS[f]};color:${B.FRAME_TEXT[f]}">${h.num}</span>`; }

// ===== ロビー =====
function drawLobby() {
  const b = st(), c = card();
  const done = c.races.filter(r => c.results[r.no]).length;
  const prof = b.hist.ret - b.hist.bet;
  document.getElementById('app').innerHTML = `${head('競馬で賭ける')}<div class="page career">
    <div class="betday"><div><b>${c.label}</b><span>${esc(c.place)}競馬場</span></div><div class="room">${b.room ? `ルーム <b>${esc(b.room)}</b>` : 'ひとりで遊ぶ'}</div></div>
    <div class="meters coinbar"><div><span>コイン</span><b>${cn(b.coins)}</b></div><div><span>賭けた合計</span><b>${cn(b.hist.bet)}</b></div><div><span>払戻の合計</span><b>${cn(b.hist.ret)}</b></div><div><span>収支</span><b class="${prof >= 0 ? 'upv' : 'bad'}">${prof >= 0 ? '+' : ''}${cn(prof)}</b></div></div>
    ${b.coins < 100 ? `<button class="btn race wide" data-a="rescue">救済：3,000コインもらう（1日1回）</button>` : ''}
    <div class="kick">今日のレース<span class="r">${done}/${c.races.length} 確定</span></div>
    <div class="rlist">${c.races.map(r => { const res = c.results[r.no], tk = c.tickets[r.no] || [];
      return `<button class="ritem ${res ? 'locked' : ''}" data-a="race" data-v="${r.no}"><div><span class="mmk">${r.no}R</span>${r.g ? `<span class="grade g-${r.g}">${r.g}</span>` : ''}<b>${esc(r.name)}</b></div>
      <small>${r.start}発走　${r.surf === 'ダ' ? 'ダート' : '芝'}${r.dist}m　${r.horses.length}頭${tk.length ? `　🎫${tk.length}枚` : ''}${res ? `　確定：${res.order.slice(0, 3).join('-')}${res.ret ? `　<b class="gold">払戻 ${cn(res.ret)}</b>` : ''}` : ''}</small></button>`; }).join('')}</div>
    ${done === c.races.length ? '<button class="btn red wide" data-a="nextday">次の開催日へ</button>' : ''}
    <div id="livebox">${liveHtml(c)}</div>
    <div class="kick">ルーム（友達と同じレースで勝負）</div>
    <p class="note">同じルームコードを入れた人は、<b>出馬表・オッズ・レース結果が全員同じ</b>になる。${online() ? 'オンラインなので、みんなの馬券と収支がリアルタイムで見える。「一緒に見る」で同時に観戦もできる。' : 'それぞれ馬券を買って、最後に「結果コード」を送り合うと順位がわかる。'}</p>
    <div class="row"><input id="rcode" maxlength="8" placeholder="ルームコード" value="${esc(b.room)}"><button class="btn" data-a="join">入る</button></div>
    <div class="row2"><button class="btn" data-a="newroom">ルームを作る</button>${b.room ? '<button class="btn ghost" data-a="leave">ひとりに戻る</button>' : ''}</div>
    ${b.room ? `<label>自分の名前（ランキング用）</label><div class="row"><input id="pname" maxlength="10" value="${esc(b.name)}" placeholder="なまえ"><button class="btn" data-a="setname">決定</button></div>
      <div class="row2"><button class="btn race" data-a="share">結果コードをコピー</button><button class="btn" data-a="addfriend">友達の結果を入れる</button></div>
      ${rankingHtml(c)}` : ''}
    <div class="kick">馬券のルール</div>
    <div class="rules">${B.TYPES.map(t => `<div><b>${t.n}</b><span>${t.d}</span><em>当てやすさ ${'★'.repeat(EASY[t.id])}${'☆'.repeat(5 - EASY[t.id])}</em></div>`).join('')}</div>
    <p class="note small">払戻率：単勝・複勝80%／枠連・馬連・ワイド77.5%／馬単・3連複75%／3連単72.5%（JRAと同じ）。オッズは締め切り時点で確定する。</p>
  </div>`;
  bindL(); sync();
}
function rankingHtml(c) {
  const b = st();
  const mine = summary(c);
  const live = others(c).map(m => ({ n: m.n, bet: m.bet, ret: m.ret, done: m.done, live: 1 }));
  const fr = [...live, ...Object.values(b.friends[c.key] || {}).filter(f => !live.some(l => l.n === f.n))];
  const all = [{ ...mine, me: 1 }, ...fr].sort((x, y) => (y.ret - y.bet) - (x.ret - x.bet));
  return `<div class="kick">ルームの順位<span class="r">${esc(c.label)}</span></div><table class="st rank"><tbody>${all.map((x, i) => `<tr class="${x.me ? 'me' : ''}"><th>${i + 1}位 ${x.live ? '🟢' : ''}${esc(x.n || 'あなた')}</th><td>${x.ret - x.bet >= 0 ? '+' : ''}${cn(x.ret - x.bet)}<small>（${x.done}R確定）</small></td></tr>`).join('')}</tbody></table>`;
}
function summary(c) {
  let bet = 0, ret = 0, done = 0; const rs = [];
  for (const r of c.races) { const tk = c.tickets[r.no] || []; const b = tk.reduce((a, t) => a + t.amt * t.combos.length, 0); const res = c.results[r.no]; bet += res ? b : 0; if (res) { ret += res.ret || 0; done++; } rs.push([r.no, b, res ? res.ret || 0 : null, tk.map(t => `${B.typeOf(t.type).n}${t.mode === 'box' ? 'BOX' : ''} ${t.combos.length === 1 ? t.combos[0].join('-') : t.sel[0].join(',')}`).slice(0, 4)]); }
  return { n: st().name || 'ななし', k: c.key, coins: st().coins, bet, ret, done, rs };
}
function bindL() {
  const app = document.getElementById('app'), b = st();
  app.querySelectorAll('[data-a]').forEach(el => el.onclick = () => {
    const a = el.dataset.a, v = el.dataset.v;
    if (a === 'home') return goHome();
    if (a === 'race') { UI.race = +v; UI.sel = [[], [], []]; return openRace(+v); }
    if (a === 'rescue') { const today = new Date().toDateString(); if (b.rescue === today) return toast('今日はもう受け取りました'); b.rescue = today; b.coins += 3000; save(); return drawLobby(); }
    if (a === 'nextday') { b.week++; save(); return drawLobby(); }
    if (a === 'join') { const v2 = document.getElementById('rcode').value.trim().toUpperCase().replace(/[^A-Z0-9]/g, ''); if (!v2) return toast('ルームコードを入れてください'); b.room = v2; b.week = 0; save(); toast(`ルーム ${v2} に入りました`); checkAch('room'); joinRoomLive(v2); return drawLobby(); }
    if (a === 'newroom') { const cs = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'; let code = ''; for (let i = 0; i < 5; i++) code += cs[Math.floor(Math.random() * cs.length)]; b.room = code; b.week = 0; save(); navigator.clipboard && navigator.clipboard.writeText(code).catch(() => {}); toast(`ルーム ${code} を作りました（コピー済み）`); checkAch('room'); joinRoomLive(code); return drawLobby(); }
    if (a === 'leave') { b.room = ''; b.week = 0; save(); joinRoomLive(''); return drawLobby(); }
    if (a === 'setname') { b.name = document.getElementById('pname').value.trim().slice(0, 10); save(); sync(); toast('名前を決めました'); return drawLobby(); }
    if (a === 'share') {
      const c = card(); const s = summary(c);
      const code = 'KB1-' + btoa(unescape(encodeURIComponent(JSON.stringify({ k: c.key, ...s }))));
      const text = `【死ぬか生きるかの戦い】ルーム${b.room} ${c.label}\n${s.n}：収支 ${s.ret - s.bet >= 0 ? '+' : ''}${cn(s.ret - s.bet)}コイン（${s.done}R確定）\n結果コード：${code}`;
      if (navigator.clipboard) navigator.clipboard.writeText(text).then(() => toast('コピーしました。LINEなどに貼って送ろう'), () => prompt('コピーしてください', text)); else prompt('コピーしてください', text);
      return;
    }
    if (a === 'addfriend') {
      const t = prompt('友達から届いた結果コード（KB1-…）を貼ってください'); if (!t) return;
      const m = t.match(/KB1-[A-Za-z0-9+/=]+/); if (!m) return toast('コードが見つかりません');
      try {
        const o = JSON.parse(decodeURIComponent(escape(atob(m[0].slice(4)))));
        const c = card(); if (o.k !== c.key) return toast('別のルームか、別の日の結果です');
        b.friends[c.key] = b.friends[c.key] || {}; b.friends[c.key][o.n] = { n: o.n, bet: +o.bet || 0, ret: +o.ret || 0, done: +o.done || 0 }; save(); toast(`${o.n}さんの結果を入れました`); drawLobby();
      } catch (e) { toast('コードが読めませんでした'); }
    }
  });
}

// ===== レース（出馬表と馬券） =====
async function openRace(no) {
  const c = card(), r = raceOf(c, no);
  if (!r.priced && !c.results[no]) {
    document.getElementById('app').innerHTML = `${head(`${no}R`, 'lobby')}<div class="page"><div class="empty">オッズを集計中…<div class="bar" style="margin-top:12px"><i id="mcbar" style="width:0%"></i></div></div></div>`;
    bindBack();
    await B.mcPrice(c, r, 40, (f) => { const el = document.getElementById('mcbar'); if (el) el.style.width = Math.round(f * 100) + '%'; });
    save();
  }
  drawRace();
}
function bindBack() { document.querySelectorAll('[data-a=lobby]').forEach(el => el.onclick = drawLobby); }

function needSlots(T, mode) { if (T.k === 1) return 1; return mode === 'box' ? 1 : T.k; }
function slotLabels(T, mode) {
  if (T.k === 1 || mode === 'box') return [mode === 'box' ? 'ボックスに入れる馬（何頭でも）' : T.frame ? '枠' : '馬'];
  if (T.ord) return ['1着', '2着', '3着'].slice(0, T.k);
  return [T.frame ? '1つ目の枠' : '1頭目', T.frame ? '2つ目の枠' : '2頭目', '3頭目'].slice(0, T.k);
}
function drawRace() {
  const c = card(), r = raceOf(c, UI.race), res = c.results[r.no];
  const T = B.typeOf(UI.type);
  const tk = c.tickets[r.no] || [];
  const tkTotal = tk.reduce((a, t) => a + t.amt * t.combos.length, 0);
  const cmb = B.combos(UI.type, T.k === 1 ? 'normal' : UI.mode, UI.mode === 'box' || T.k === 1 ? [UI.sel[0]] : UI.sel, r);
  const os = cmb.map(x => B.oddsOf(r, UI.type, x)).filter(x => x > 0);
  const cost = cmb.length * UI.amt;
  const maxRet = os.length ? Math.max(...os.map(o => B.payout100(o) * UI.amt / 100)) : 0;
  const labels = slotLabels(T, UI.mode);
  const selHtml = labels.map((l, i) => `<div class="slot ${UI.slot === i ? 'on' : ''}" data-a="slot" data-v="${i}"><small>${l}</small><div>${(UI.sel[i] || []).map(n => T.frame ? `<span class="fbox" style="background:${B.FRAME_COLORS[n - 1]};color:${B.FRAME_TEXT[n - 1]}">${n}</span>` : frameBox(r.horses[n - 1])).join('') || '<span class="ph">タップして選ぶ</span>'}</div></div>`).join('');
  const horseRows = r.horses.map(h => {
    const picked = UI.sel.some(s => (s || []).includes(T.frame ? h.frame : h.num));
    return `<button class="hrow ${picked ? 'on' : ''}" data-a="${T.frame ? 'pickf' : 'pickh'}" data-v="${T.frame ? h.frame : h.num}">
      <span class="mk">${h.mark || ''}</span>${frameBox(h)}
      <span class="hn"><b>${esc(h.name)}</b><small>${h.sex}${h.age}・${h.kin}kg・${esc(h.jname)}</small><small>${h.wt}kg（${h.dw > 0 ? '+' : ''}${h.dw}）・${h.style}・${h.prev ? `前走${h.prev}着` : '初出走'}</small></span>
      <span class="od"><b>${B.oddsOf(r, 'tan', [h.num]).toFixed(1)}</b><small>${h.pop}番人気</small></span></button>`;
  }).join('');
  let resHtml = '';
  if (res) resHtml = resultHtml(c, r, res);
  document.getElementById('app').innerHTML = `${head(`${r.no}R ${esc(r.name)}`, 'lobby')}<div class="page career betpage">
    <div class="evcard ${r.g ? 'legend' : ''}"><h2>${r.g ? `<span class="grade g-${r.g}">${r.g}</span>` : ''}${esc(r.name)}</h2><p>${esc(r.place)} ${r.surf === 'ダ' ? 'ダート' : '芝'}${r.dist}m・${r.horses.length}頭・${r.start}発走</p></div>
    ${res ? resHtml : `
    <div class="kick">① 馬券の種類</div>
    <div class="tgrid">${B.TYPES.map(t => `<button class="tbtn2 ${UI.type === t.id ? 'on' : ''}" data-a="type" data-v="${t.id}"><b>${t.n}</b><small>${'★'.repeat(EASY[t.id])}</small></button>`).join('')}</div>
    <p class="note">${T.n}：${T.d}</p>
    ${T.k > 1 ? `<div class="seg c3" style="grid-template-columns:1fr 1fr"><button class="opt" aria-pressed="${UI.mode === 'normal'}" data-a="mode" data-v="normal">ふつう<span class="d">1点だけ買う</span></button><button class="opt" aria-pressed="${UI.mode === 'box'}" data-a="mode" data-v="box">ボックス<span class="d">選んだ馬の全部の組み合わせ</span></button></div>` : ''}
    <div class="kick">② ${T.frame ? '枠' : '馬'}を選ぶ<span class="r"><button class="linkbtn" data-a="clear" style="margin:0">選び直す</button></span></div>
    <div class="slots">${selHtml}</div>
    ${T.frame ? `<div class="framepick">${[1, 2, 3, 4, 5, 6, 7, 8].filter(f => r.horses.some(h => h.frame === f)).map(f => `<button class="fbtn" data-a="pickf" data-v="${f}" style="background:${B.FRAME_COLORS[f - 1]};color:${B.FRAME_TEXT[f - 1]}">${f}枠<small>${r.horses.filter(h => h.frame === f).map(h => h.num).join('・')}</small></button>`).join('')}</div>` : ''}
    <div class="kick">③ 金額（1点あたり）</div>
    <div class="chips">${[100, 500, 1000, 5000, 10000].map(v => `<button class="chip ${UI.amt === v ? 'on' : ''}" data-a="amt" data-v="${v}">${cn(v)}</button>`).join('')}</div>
    <div class="buybox"><div><span>${cmb.length}点</span><b>${cn(cost)}コイン</b></div><div><span>オッズ</span><b>${os.length ? (os.length === 1 ? os[0].toFixed(1) + '倍' : `${Math.min(...os).toFixed(1)}〜${Math.max(...os).toFixed(1)}倍`) : '—'}</b></div><div><span>当たれば最大</span><b class="gold">${cn(maxRet)}</b></div></div>
    <button class="btn red wide" data-a="buy" ${cmb.length && cost <= st().coins ? '' : 'disabled'}>${!cmb.length ? '馬を選んでください' : cost > st().coins ? 'コインが足りない' : 'この馬券を買う'}</button>
    <div class="kick">かんたん買い</div>
    <div class="chips">${quickBets(r).map((q, i) => `<button class="chip" data-a="quick" data-v="${i}">${q.n}</button>`).join('')}</div>
    <div class="kick">出馬表<span class="r">印＝新聞の予想</span></div>
    <div class="hlist">${horseRows}</div>
    <div class="kick">買った馬券<span class="r">合計 ${cn(tkTotal)}コイン</span></div>
    ${tk.length ? `<div class="tickets">${tk.map((t, i) => ticketHtml(r, t, i)).join('')}</div>` : '<p class="note">まだ買っていない。</p>'}
    <div id="racelive">${raceLiveHtml(c, r.no)}</div>
    <div class="stack">${online() && st().room ? '<button class="btn red" data-a="together">👥 みんなで一緒に見る（10秒後に同時スタート）</button>' : ''}<button class="btn race" data-a="watch">📺 レースを見る（3D中継）</button><button class="btn ghost" data-a="quickres">結果だけ見る</button></div>`}
    ${res ? `<div id="racelive">${raceLiveHtml(c, r.no)}</div>` : ''}
  </div>`;
  bindR(r, cmb); sync();
}
function ticketHtml(r, t, i, res) {
  const T = B.typeOf(t.type);
  const sel = t.mode === 'box' ? `BOX ${t.sel[0].join('・')}` : t.combos[0].join(T.ord ? '→' : '-');
  return `<div class="ticket ${res ? (t.ret ? 'hit' : 'miss') : ''}"><div><b>${T.n}</b><span>${sel}</span><small>${t.combos.length}点×${cn(t.amt)}＝${cn(t.amt * t.combos.length)}</small></div>
    ${res ? `<em>${t.ret ? `的中！ +${cn(t.ret)}` : 'はずれ'}</em>` : `<button class="x" data-a="cancel" data-v="${i}">取消</button>`}</div>`;
}
function quickBets(r) {
  const byPop = [...r.horses].sort((a, b) => a.pop - b.pop).map(h => h.num);
  const mk = (m) => (r.horses.find(h => h.mark === m) || {}).num;
  const marked = r.horses.filter(h => h.mark && h.mark !== '☆').map(h => h.num);
  return [
    { n: '◎の単勝', t: 'tan', m: 'normal', s: [[mk('◎')]] },
    { n: '◎の複勝', t: 'fuku', m: 'normal', s: [[mk('◎')]] },
    { n: '1番人気の複勝', t: 'fuku', m: 'normal', s: [[byPop[0]]] },
    { n: '◎→○の馬単', t: 'umatan', m: 'normal', s: [[mk('◎')], [mk('○')]] },
    { n: '人気上位3頭のワイドBOX', t: 'wide', m: 'box', s: [byPop.slice(0, 3)] },
    { n: '印の馬で3連複BOX', t: 'trio', m: 'box', s: [marked.slice(0, 5)] },
    { n: '☆（穴）の単勝', t: 'tan', m: 'normal', s: [[mk('☆') || byPop[byPop.length - 1]]] },
  ];
}
function bindR(r, cmb) {
  const app = document.getElementById('app');
  const T = B.typeOf(UI.type);
  const c = card();
  bindBack();
  const fill = (n) => {
    if (T.k === 1) { UI.sel = [[n], [], []]; return; }
    if (UI.mode === 'box') { const s = UI.sel[0]; const i = s.indexOf(n); if (i >= 0) s.splice(i, 1); else s.push(n); return; }
    // ふつう：空いている枠に順に入れる（タップした枠が優先）
    let slot = UI.slot != null ? UI.slot : UI.sel.slice(0, T.k).findIndex(s => !s.length);
    if (slot < 0) slot = T.k - 1;
    for (let i = 0; i < T.k; i++) if (!T.frame && UI.sel[i][0] === n) UI.sel[i] = [];
    UI.sel[slot] = [n]; UI.slot = null;
  };
  app.querySelectorAll('[data-a]').forEach(el => el.onclick = () => {
    if (el.disabled) return;
    const a = el.dataset.a, v = el.dataset.v;
    if (a === 'home') return goHome();
    if (a === 'lobby') return drawLobby();
    if (a === 'type') { UI.type = v; UI.sel = [[], [], []]; UI.slot = null; if (B.typeOf(v).k === 1) UI.mode = 'normal'; }
    if (a === 'mode') { UI.mode = v; UI.sel = [[], [], []]; }
    if (a === 'clear') { UI.sel = [[], [], []]; UI.slot = null; }
    if (a === 'slot') UI.slot = +v;
    if (a === 'pickh' || a === 'pickf') fill(+v);
    if (a === 'amt') UI.amt = +v;
    if (a === 'quick') {
      const q = quickBets(r)[+v]; UI.type = q.t; UI.mode = q.m; UI.sel = [q.s[0] || [], q.s[1] || [], q.s[2] || []].map(x => x.filter(Boolean));
    }
    if (a === 'buy') {
      const cost = cmb.length * UI.amt; if (!cmb.length || cost > st().coins) return;
      st().coins -= cost; st().hist.bet += cost;
      c.tickets[r.no] = c.tickets[r.no] || [];
      c.tickets[r.no].push({ type: UI.type, mode: T.k === 1 ? 'normal' : UI.mode, sel: (UI.mode === 'box' || T.k === 1 ? [UI.sel[0]] : UI.sel.slice(0, T.k)).map(x => [...x]), combos: cmb, amt: UI.amt });
      UI.sel = [[], [], []]; save(); toast(`${T.n}を買いました（${cn(cost)}コイン）`);
    }
    if (a === 'cancel') { const t = c.tickets[r.no][+v]; const back = t.amt * t.combos.length; st().coins += back; st().hist.bet -= back; c.tickets[r.no].splice(+v, 1); save(); }
    if (a === 'quickres') return runResult(r, false);
    if (a === 'watch') return runResult(r, true);
    if (a === 'together') { callWatch(c.key, r.no).then(() => toast('みんなに合図を送りました')).catch(() => toast('送れませんでした')); return; }
    if (a === 'next') { const nx = c.races.find(x => !c.results[x.no]); if (nx) { UI.race = nx.no; UI.sel = [[], [], []]; return openRace(nx.no); } return drawLobby(); }
    drawRace();
  });
}

function runResult(r, live) {
  const c = card();
  const seed = B.raceSeed(c, r);
  const fin = (list) => {
    const order = list.map(x => x.num);
    const tk = c.tickets[r.no] || [];
    const { ret } = B.settle(r, order, tk);
    st().coins += ret; st().hist.ret += ret;
    c.results[r.no] = { order, ret, list: list.map(x => ({ num: x.num, name: x.name, time: x.time, margin: x.margin })) };
    save(); drawRace();
    if (ret > 0) toast(`的中！ ${cn(ret)}コインの払い戻し`);
    checkAch('bet', { ret, tickets: tk, hits: tk.flatMap(t => t.hits || []) });
  };
  if (!live) { fin(simulateField(B.specsOf(r), r, seed)); return; }
  // 注目する馬（最初に買った馬券の1頭目、なければ1番人気）
  const tk = c.tickets[r.no] || [];
  let focus = tk.length ? (B.typeOf(tk[0].type).frame ? r.horses.find(h => h.frame === tk[0].combos[0][0]).num : tk[0].combos[0][0]) : r.horses.find(h => h.pop === 1).num;
  startRace({ spectate: true, seed, specs: B.specsOf(r), focus: focus - 1, race: { name: `${r.no}R ${r.name}`, g: r.g, dist: r.dist, surf: r.surf, place: r.place },
    onDone: (res) => { if (!res) { fin(simulateField(B.specsOf(r), r, seed)); return; } fin(res.list); } });
}

function resultHtml(c, r, res) {
  const W = B.winningKeys(r, res.order);
  const rows = B.TYPES.map(t => {
    const ks = W[t.id];
    return `<tr><th>${t.n}</th><td>${ks.map(k => { const o = r.odds[t.id][k] || 0; return `<div><span>${k}</span><b>${cn(B.payout100(o))}</b><small>${B.popRank(r, t.id, k)}番人気</small></div>`; }).join('')}</td></tr>`;
  }).join('');
  const tk = c.tickets[r.no] || [];
  const bet = tk.reduce((a, t) => a + t.amt * t.combos.length, 0);
  return `<div class="kick">着順</div>
  <div class="hlist">${res.list.slice(0, 5).map((x, i) => { const h = r.horses[x.num - 1]; return `<div class="hrow"><span class="mk">${i + 1}着</span>${frameBox(h)}<span class="hn"><b>${esc(h.name)}</b><small>${esc(h.jname)}・${h.pop}番人気</small></span><span class="od"><b>${fmtTime(x.time)}</b><small>${x.margin || ''}</small></span></div>`; }).join('')}</div>
  <div class="kick">払戻金（100コインあたり）</div><table class="st pay"><tbody>${rows}</tbody></table>
  <div class="kick">あなたの馬券<span class="r">${cn(bet)} → <b class="${res.ret >= bet ? 'upv' : 'bad'}">${cn(res.ret)}</b></span></div>
  ${tk.length ? `<div class="tickets">${tk.map((t, i) => ticketHtml(r, t, i, res)).join('')}</div>` : '<p class="note">このレースは買っていない。</p>'}
  <div class="stack"><button class="btn red" data-a="next">次のレースへ</button><button class="btn ghost" data-a="lobby">レース一覧へ</button></div>`;
}
