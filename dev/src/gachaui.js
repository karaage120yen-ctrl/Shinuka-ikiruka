// ===== ガチャ画面（引く・コレクション・編成） =====
import { S, save } from './store.js';
import { render, bind, toast, header, modal, esc } from './uikit.js';
import { pull, COST_1, COST_10, GACHA_POOL, RATES, PITY, PICKUP, PICKUP_RATE, charLabel, cardName, fxText, lvOf, KIND_N } from './gacha.js';
import { mission } from './mission.js';
import * as A from './audio.js';

let back = null, tab = 'pull', deckKind = 'horse';
export function openGacha(home) { back = home; draw(); }
const ownedMap = () => { const o = {}; for (const id of S.gacha) o[id] = (o[id] || 0) + 1; return o; };
function card(c, owned, opt = {}) {
  const n = owned[c.id] || 0, lv = lvOf(owned, c.id);
  return `<button class="ccard ${c.rarity} ${n ? '' : 'none'} ${opt.on ? 'sel' : ''}" data-act="${opt.act || 'info'}" data-v="${c.id}">
    <span class="rar">${c.rarity}</span><span class="role">${esc(c.role)}</span><span class="cn">${n ? esc(cardName(c)) : '？？？'}</span>
    ${n ? `<span class="cnt">${'◆'.repeat(lv)}${'◇'.repeat(4 - lv)}</span>` : ''}<span class="kd">${c.horse ? '🐎' : c.kind === 'horse' ? '🐴' : c.kind === 'jockey' ? '🏇' : '⭐'}</span></button>`;
}
function draw() {
  const owned = ownedMap();
  S.deck = S.deck || { horse: [], jockey: [] };
  const tabs = `<div class="tabs">${[['pull', '引く'], ['col', 'コレクション'], ['deck', '編成']].map(([k, n]) => `<button class="tab ${tab === k ? 'on' : ''}" data-act="tab" data-v="${k}">${n}</button>`).join('')}</div>`;
  let body = '';
  if (tab === 'pull') {
    const pk = GACHA_POOL.find(c => c.id === PICKUP);
    body = `<div class="banner pickup"><canvas id="nabe" width="160" height="160"></canvas><div class="bn-info"><div class="bn-tag">PICK UP</div><div class="bn-title">ナベブギョウ</div><div class="bn-sub">SSR・競走馬　期間なし</div>
      <div class="bn-fx"><b>特殊能力「メダルゲームの馬神」</b><br>レース中1回、2秒間ぐんと加速<br>${fxText(pk.fx).join('<br>')}</div></div></div>
    <div class="rates">SSR ${RATES.SSR * 100}%（うちナベブギョウ ${PICKUP_RATE * 100}%）　SR ${RATES.SR * 100}%　R ${RATES.R * 100}%<br>10連はSR以上1枚確定　天井：あと <b>${PITY - (S.gachaPity || 0)}</b> 回でナベブギョウ確定</div>
    <div class="row2"><button class="btn primary" data-act="p1">1回引く<small>🥕${COST_1}</small></button><button class="btn race" data-act="p10">10連<small>🥕${COST_10}</small></button></div>
    <p class="note">同じキャラが出ると「凸」が上がって効果が強くなる（◆1つで+25%、最大◆◆◆◆で2倍）。引いたキャラは「編成」で育成に連れていく。</p>`;
  } else if (tab === 'col') {
    body = ['SSR', 'SR', 'R'].map(r => `<div class="sec">${r}</div><div class="cgrid">${GACHA_POOL.filter(c => c.rarity === r).map(c => card(c, owned)).join('')}</div>`).join('');
  } else {
    const d = S.deck[deckKind];
    const can = GACHA_POOL.filter(c => owned[c.id] && (c.kind === deckKind || c.kind === 'both'));
    const sum = {}; d.forEach(id => { const c = GACHA_POOL.find(x => x.id === id); if (c) fxText(c.fx, lvOf(owned, id)).forEach(t => { sum[t] = 1; }); });
    body = `<div class="chips">${['horse', 'jockey'].map(k => `<button class="chip ${deckKind === k ? 'on' : ''}" data-act="dk" data-v="${k}">${k === 'horse' ? '🐴 馬の育成' : '🏇 騎手の育成'}</button>`).join('')}</div>
    <div class="sec">編成（${d.length}/3）</div>
    <div class="cgrid">${[0, 1, 2].map(i => d[i] ? card(GACHA_POOL.find(c => c.id === d[i]), owned, { act: 'rm', on: true }) : '<div class="ccard empty">空き</div>').join('')}</div>
    <p class="note">${Object.keys(sum).length ? '効果：' + Object.keys(sum).join('・') : 'まだ効果なし'}<br>次に育成を始めるときから効く。</p>
    <div class="sec">連れていけるキャラ（タップで編成）</div>
    ${can.length ? `<div class="cgrid">${can.map(c => card(c, owned, { act: 'add', on: d.includes(c.id) })).join('')}</div>` : '<p class="note">まだいない。ガチャを引こう。</p>'}`;
  }
  render(`${header('ガチャ')}<div class="page gacha-page">${tabs}${body}</div>`, true);
  const cv = document.getElementById('nabe'); if (cv) drawNabe(cv);
  const doPull = (n, cost) => {
    if (S.carrots < cost) { toast('金のにんじんが足りません'); return; }
    S.carrots -= cost;
    const st = { pity: S.gachaPity || 0 };
    const res = pull(n, st); S.gachaPity = st.pity;
    for (const c of res) S.gacha.push(c.id);
    save(); mission('gacha'); A.coin();
    const best = res.some(c => c.rarity === 'SSR') ? 'SSR' : res.some(c => c.rarity === 'SR') ? 'SR' : 'R';
    const o2 = ownedMap();
    modal(`<div class="gacha-anim ${best}"><div class="gate-light"></div></div><div class="gres">${res.map((c, i) => `<div class="ccard ${c.rarity} flip" style="animation-delay:${0.6 + i * 0.12}s"><span class="rar">${c.rarity}</span><span class="role">${esc(c.role)}</span><span class="cn">${esc(cardName(c))}</span>${o2[c.id] > 1 ? '<span class="cnt">凸UP</span>' : '<span class="cnt">NEW</span>'}</div>`).join('')}</div>
      <button class="btn primary wide" data-close>OK</button>`, { onClose: draw, cls: 'gacha' });
  };
  const info = (id) => {
    const c = GACHA_POOL.find(x => x.id === id), n = owned[id] || 0;
    if (!n) { toast('まだ持っていない'); return; }
    modal(`<h2><span class="r-${c.rarity}">${c.rarity}</span> ${esc(charLabel(c))}</h2><p class="small">${esc(c.role)}・${KIND_N[c.kind]}で効く・持っている数 ${n}（${lvOf(owned, id)}凸）</p>
      <ul class="fx">${fxText(c.fx, lvOf(owned, id)).map(t => `<li>${t}</li>`).join('')}</ul><p class="small">${c.horse ? '🐴 馬の育成で「ガチャの馬を育てる」を選ぶと、この馬自身を競走馬として育てられる。' : '🏇 騎手の育成で「ガチャのキャラを育てる」を選ぶと、このキャラ自身を騎手として育てられる。'}</p><button class="btn primary wide" data-close>閉じる</button>`);
  };
  bind({
    go: () => back(), tab: (v) => { tab = v; draw(); }, dk: (v) => { deckKind = v; draw(); },
    p1: () => doPull(1, COST_1), p10: () => doPull(10, COST_10), info,
    add: (id) => { const d = S.deck[deckKind]; if (d.includes(id)) { d.splice(d.indexOf(id), 1); } else { if (d.length >= 3) { toast('3人まで'); return; } d.push(id); } save(); draw(); },
    rm: (id) => { const d = S.deck[deckKind]; d.splice(d.indexOf(id), 1); save(); draw(); },
  });
}

// ナベブギョウの絵（ドット絵）：栗毛の競走馬。おでこに白い流星、首に土鍋の飾り（鍋奉行だけに）
export function drawNabe(cv) {
  const x = cv.getContext('2d'), P = 5; x.imageSmoothingEnabled = false;
  x.clearRect(0, 0, cv.width, cv.height);
  const px = (c, a, b, w = 1, h = 1) => { x.fillStyle = c; x.fillRect(a * P, b * P, w * P, h * P); };
  const g = x.createRadialGradient(80, 70, 10, 80, 70, 80); g.addColorStop(0, 'rgba(255,220,120,.55)'); g.addColorStop(1, 'rgba(255,220,120,0)'); x.fillStyle = g; x.fillRect(0, 0, 160, 160);
  const B = '#a5542a', D = '#7a3a1a', L = '#c86e3c', M = '#3a1a0a';
  // たてがみ・耳
  px(M, 16, 3, 2, 2); px(M, 19, 3, 2, 2); px(B, 16, 4, 1, 1); px(B, 20, 4, 1, 1);
  px(M, 12, 6, 2, 9); px(M, 11, 8, 1, 6);
  // 頭（右向き）
  px(B, 14, 5, 8, 4); px(B, 19, 9, 6, 3); px(B, 21, 12, 5, 3); px(D, 24, 14, 2, 1); px(M, 25, 13, 1, 1);
  px('#f4f1ea', 18, 5, 2, 3); px('#f4f1ea', 20, 8, 1, 2);            // 流星
  px('#111', 19, 7, 1, 1); px('#fff', 19, 7, 0.4, 0.4);                // 目
  px(L, 15, 6, 2, 2);
  // 首と胴
  px(B, 14, 9, 6, 6); px(B, 12, 13, 8, 3); px(B, 6, 15, 16, 6); px(L, 8, 15, 10, 1); px(D, 6, 20, 16, 1);
  px(M, 3, 15, 3, 2); px(M, 2, 17, 2, 4); px(M, 1, 20, 2, 2);          // しっぽ
  // 脚
  for (const [a, w] of [[7, 0], [10, 1], [17, 0], [20, 1]]) { px(w ? D : B, a, 21, 2, 5); px('#f4f1ea', a, 25, 2, 1); px('#222', a, 26, 2, 1); }
  // 首の土鍋のお守り
  px('#e8c547', 15, 14, 4, 1); px('#7a4a2a', 15, 15, 4, 2); px('#5a3a22', 14, 15, 1, 1); px('#5a3a22', 19, 15, 1, 1);
  x.fillStyle = 'rgba(255,255,255,.8)'; x.fillRect(16 * P, 12.6 * P, P * 0.6, P * 1.2); x.fillRect(17.4 * P, 12.2 * P, P * 0.6, P * 1.2);
}
