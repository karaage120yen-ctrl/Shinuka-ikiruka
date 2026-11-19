// ===== オンライン対戦・全国ランキング =====
import { S, save } from './store.js';
import { render, bind, toast, header, esc } from './uikit.js';
import { NET, online, onNet, VS, vsJoin, vsListen, vsLeave, vsStart, RANK, rankListen, pushRank, me } from './net.js';
import { startRace } from './racescreen.js';
import { NPC_JOCKEY } from './jockey.js';
import { SILKS, COAT, H_KEYS, rankOf, randomHorseName } from './data.js';
import { mission } from './mission.js';
import { bondN, applyBond, addBond } from './combo.js';

let back = null, code = '', hsel = 0, jsel = -1, seen = 0, off = null, tab = 'vs';
export function openOnline(home) { back = home; code = S.vsCode || ''; if (code) vsListen(code); rankListen(true); off = onNet(() => { if (document.getElementById('online-page')) draw(true); checkStart(); }); draw(); }
const leave = () => { rankListen(false); if (off) off(); off = null; back(); };

// 自分のランキング用データ
export function myRank() {
  const bh = [...S.horses].sort((a, b) => (b.score || 0) - (a.score || 0))[0];
  const bj = [...S.jockeys].sort((a, b) => (b.score || 0) - (a.score || 0))[0];
  const b = S.bet && S.bet.hist ? S.bet.hist : { bet: 0, ret: 0 };
  return { n: (S.bet && S.bet.name) || 'ななし', bet: Math.round(b.ret - b.bet), hs: bh ? bh.score || 0 : 0, hn: bh ? bh.name : '', js: bj ? bj.score || 0 : 0, jn: bj ? bj.name : '', own: S.owner ? Math.round(S.owner.earn) : 0 };
}
export function syncRank() { if (online()) pushRank(myRank()); }

function specOf(h, j, surf) {
  const s0 = { name: h.name, jname: j.name, h: { ...h.s }, j: { ...j.s }, apt: surf === '芝' ? h.apt.turf : h.apt.dirt, cond: 2, style: h.style, coat: h.coat, silk: j.silk != null ? SILKS[j.silk] ?? j.silk : SILKS[6], hsk: h.skills || [], jsk: j.skills || [] };
  return j.id != null && h.id != null ? applyBond(s0, bondN(h.id, j.id)) : s0;
}
function draw(keep) {
  if (!NET.on) {
    render(`${header('オンライン')}<div class="page" id="online-page"><div class="empty">オンライン機能はまだ設定されていない。<br>README の「オンライン機能の設定」をすると、友達とリアルタイムで対戦したり、全国ランキングに参加できる。</div></div>`);
    bind({ go: leave }); return;
  }
  if (!online()) { render(`${header('オンライン')}<div class="page" id="online-page"><div class="empty">接続中…</div></div>`); bind({ go: leave }); return; }
  const tabs = `<div class="tabs">${[['vs', 'オンライン対戦'], ['rank', '全国ランキング']].map(([k, n]) => `<button class="tab ${tab === k ? 'on' : ''}" data-act="tab" data-v="${k}">${n}</button>`).join('')}</div>`;
  let body = '';
  if (tab === 'vs') {
    const mine = S.horses;
    const ms = [...VS.members].sort((a, b) => a.id < b.id ? -1 : 1);
    const st = VS.room && VS.room.start;
    body = `<p class="note">同じ部屋コードの人の馬が一緒に走る（最大8頭、足りない分はCPU）。だれかが「スタート」を押すと、10秒後に全員の画面で同時にレースが始まる。結果は全員同じになる。</p>
    <div class="row"><input id="vcode" placeholder="部屋コード（例 KEIBA1）" value="${esc(code)}" maxlength="12"><button class="btn" data-act="join">入る</button></div>
    ${code ? `<div class="sec">出す馬</div>${mine.length ? `<select id="hsel">${mine.map((h, i) => `<option value="${i}" ${i === hsel ? 'selected' : ''}>${esc(h.name)}（${h.rank || ''}・${H_KEYS.map(k => rankOf(h.s[k])).join('')}）</option>`).join('')}</select>
      <select id="jsel"><option value="-1">${NPC_JOCKEY.name}</option>${S.jockeys.map((j, i) => `<option value="${i}" ${i === jsel ? 'selected' : ''}>⭐${esc(j.name)}</option>`).join('')}</select>
      <button class="btn race wide" data-act="entry">この馬でエントリー</button>` : '<p class="note">引退した馬がいない。育成で馬を育てよう。</p>'}
      <div class="sec">部屋 ${esc(code)}（${ms.length}/8）</div>
      <div class="mlist">${ms.map(m => { let sp = {}; try { sp = JSON.parse(m.spec); } catch (e) { /* */ } return `<div class="mrow"><b>${m.id === me() ? '🟡 ' : ''}${esc(m.n)}</b><span>${esc(sp.name || '')}</span><small>${esc(sp.jname || '')}・${H_KEYS.map(k => rankOf((sp.h || {})[k] || 0)).join('')}</small></div>`; }).join('') || '<p class="note">まだだれもいない</p>'}</div>
      <div class="row2"><select id="vdist">${[1200, 1600, 2000, 2400, 3000].map(d => `<option ${d === 2000 ? 'selected' : ''}>${d}</option>`).join('')}</select><select id="vsurf"><option>芝</option><option>ダ</option></select></div>
      <button class="btn red wide" data-act="start" ${ms.length ? '' : 'disabled'}>スタート（全員10秒後）</button>
      ${st && st.at > Date.now() ? `<p class="center gold">まもなくスタート！</p>` : ''}
      <button class="btn ghost wide" data-act="leave">部屋から出る</button>` : ''}`;
  } else {
    const L = RANK.list;
    const top = (key, f) => [...L].filter(x => (x[key] || 0) !== 0).sort((a, b) => b[key] - a[key]).slice(0, 30).map((x, i) => `<tr class="${x.id === me() ? 'me' : ''}"><td>${i + 1}</td><td>${esc(x.n)}</td><td>${f(x)}</td></tr>`).join('');
    body = `<p class="note">あなたの名前：<b>${esc((S.bet && S.bet.name) || 'ななし')}</b>（「競馬で賭ける」で変えられる）　データは自動で送られる</p>
      <div class="sec">💰 賭けの収支</div><div class="res-table"><table>${top('bet', x => `${x.bet > 0 ? '+' : ''}${x.bet.toLocaleString('ja-JP')}`) || '<tr><td>まだいない</td></tr>'}</table></div>
      <div class="sec">🐴 最強馬（総合評価）</div><div class="res-table"><table>${top('hs', x => `${esc(x.hn)} ${x.hs}`) || '<tr><td>まだいない</td></tr>'}</table></div>
      <div class="sec">🏇 最強騎手</div><div class="res-table"><table>${top('js', x => `${esc(x.jn)} ${x.js}`) || '<tr><td>まだいない</td></tr>'}</table></div>
      <div class="sec">🏠 馬主の獲得賞金</div><div class="res-table"><table>${top('own', x => `${x.own.toLocaleString('ja-JP')}万円`) || '<tr><td>まだいない</td></tr>'}</table></div>`;
    syncRank();
  }
  render(`${header('オンライン')}<div class="page" id="online-page">${tabs}${body}</div>`, keep);
  const hs = document.getElementById('hsel'); if (hs) hs.onchange = () => { hsel = +hs.value; };
  const js = document.getElementById('jsel'); if (js) js.onchange = () => { jsel = +js.value; };
  bind({
    go: leave, tab: (v) => { tab = v; draw(); },
    join: () => { const v = document.getElementById('vcode').value.trim().toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 12); if (!v) return; code = v; S.vsCode = v; save(); vsListen(v); draw(); },
    leave: () => { vsLeave(); code = ''; S.vsCode = ''; save(); draw(); },
    entry: () => {
      const h = S.horses[hsel], j = jsel >= 0 ? S.jockeys[jsel] : NPC_JOCKEY; if (!h) return;
      const sp = specOf(h, j, '芝'); sp.apts = { turf: h.apt.turf, dirt: h.apt.dirt }; sp.hid = h.id; sp.jid = j.id ?? null;
      vsJoin(code, { n: (S.bet && S.bet.name) || 'ななし', spec: sp }).then(() => toast('エントリーしました')).catch(e => toast('できませんでした：' + (e.code || e.message)));
    },
    start: () => { const race = { dist: +document.getElementById('vdist').value, surf: document.getElementById('vsurf').value, place: ['東京', '中山', '京都', '阪神'][Math.floor(Math.random() * 4)] }; vsStart(code, race).then(() => toast('10秒後にスタート！')).catch(() => toast('できませんでした')); },
  });
}

// だれかがスタートを押したら、時間に合わせて全員でレース
function checkStart() {
  const st = VS.room && VS.room.start;
  if (!st || st.at === seen || st.at < Date.now() - 3000) return;
  seen = st.at;
  const ms = [...VS.members].sort((a, b) => a.id < b.id ? -1 : 1).slice(0, 8);
  const myI = ms.findIndex(m => m.id === me());
  // 足りない分は部屋の全員で同じCPU馬を作る
  let x = st.seed >>> 0; const R = () => { x = (x * 1664525 + 1013904223) >>> 0; return x / 4294967296; };
  const specs = ms.map((m, i) => { const sp = JSON.parse(m.spec); sp.apt = st.race.surf === '芝' ? (sp.apts || {}).turf || 'B' : (sp.apts || {}).dirt || 'B'; sp.silk = SILKS[i % SILKS.length]; return sp; });
  const avg = specs.length ? specs.reduce((a, s) => a + H_KEYS.reduce((b, k) => b + s.h[k], 0) / 5, 0) / specs.length : 60;
  const CPU = ['ゴーストランナー', 'シャドウホース', 'ミラージュ', 'ファントム', 'エコーダンサー', 'リフレクション', 'ドッペルゲン', 'カゲムシャ'];
  while (specs.length < 8) { const b = avg - 2 + R() * 6; const h = {}; H_KEYS.forEach(k => { h[k] = b + (R() - 0.5) * 10; }); const jl = 55 + R() * 15; specs.push({ name: CPU[specs.length], jname: 'CPU', h, j: { tec: jl, whip: jl, bal: jl, fit: jl, jud: jl }, apt: 'A', cond: 2, style: ['逃げ', '先行', '差し', '追込'][Math.floor(R() * 4)], coat: Math.floor(R() * COAT.length), silk: SILKS[specs.length % SILKS.length] }); }
  const wait = Math.max(0, st.at - Date.now());
  toast(`オンライン対戦 ${Math.ceil(wait / 1000)}秒後にスタート！`);
  setTimeout(() => {
    startRace({ spectate: true, seed: st.seed, specs, focus: Math.max(0, myI), race: { name: 'オンライン対戦', dist: st.race.dist, surf: st.race.surf, place: st.race.place }, nextLabel: '結果へ',
      onDone: (res) => {
        mission('vs'); mission('race3d');
        if (res && res.list && myI >= 0) {
          const my = res.list.find(r => r.num === myI + 1);
          if (my && my.pos === 1) { S.carrots += 10; toast('オンライン対戦で1着！ 🥕+10'); mission('win'); }
          const sp = specs[myI]; if (sp && sp.hid != null && sp.jid != null) addBond(sp.hid, sp.jid);
          save();
        }
        draw();
      } });
  }, wait);
}
