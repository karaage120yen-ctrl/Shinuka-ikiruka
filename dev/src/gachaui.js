// ===== ガチャ画面（引く・コレクション・編成） =====
import { S, save } from './store.js';
import { render, bind, toast, header, modal, esc } from './uikit.js';
import { pull, COST_1, COST_10, GACHA_POOL, RATES, PITY, charLabel, cardName, fxText, lvOf, KIND_N } from './gacha.js';
import { mission } from './mission.js';
import * as A from './audio.js';

let back = null, tab = 'pull', deckKind = 'horse';
export function openGacha(home) { back = home; draw(); }
const ownedMap = () => { const o = {}; for (const id of S.gacha) o[id] = (o[id] || 0) + 1; return o; };
function card(c, owned, opt = {}) {
  const n = owned[c.id] || 0, lv = lvOf(owned, c.id);
  return `<button class="ccard ${c.rarity} ${n ? '' : 'none'} ${opt.on ? 'sel' : ''}" data-act="${opt.act || 'info'}" data-v="${c.id}">
    <span class="rar">${c.rarity}</span><span class="role">${esc(c.role)}</span><span class="cn">${n ? esc(cardName(c)) : '？？？'}</span>
    ${n ? `<span class="cnt">${'◆'.repeat(lv)}${'◇'.repeat(4 - lv)}</span>` : ''}<span class="kd">${c.kind === 'horse' ? '🐴' : c.kind === 'jockey' ? '🏇' : '⭐'}</span></button>`;
}
function draw() {
  const owned = ownedMap();
  S.deck = S.deck || { horse: [], jockey: [] };
  const tabs = `<div class="tabs">${[['pull', '引く'], ['col', 'コレクション'], ['deck', '編成']].map(([k, n]) => `<button class="tab ${tab === k ? 'on' : ''}" data-act="tab" data-v="${k}">${n}</button>`).join('')}</div>`;
  let body = '';
  if (tab === 'pull') {
    body = `<div class="banner"><div class="bn-tag">SUPPORT</div><div class="bn-title">サポートガチャ</div><div class="bn-sub">育成を助けるキャラ ${GACHA_POOL.length}人</div></div>
    <div class="rates">SSR ${RATES.SSR * 100}%　SR ${RATES.SR * 100}%　R ${RATES.R * 100}%　（10連はSR以上1枚確定）<br>天井：あと <b>${PITY - (S.gachaPity || 0)}</b> 回でSSR確定</div>
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
      <ul class="fx">${fxText(c.fx, lvOf(owned, id)).map(t => `<li>${t}</li>`).join('')}</ul><p class="muted small">名前と絵はあとで入る予定</p><button class="btn primary wide" data-close>閉じる</button>`);
  };
  bind({
    go: () => back(), tab: (v) => { tab = v; draw(); }, dk: (v) => { deckKind = v; draw(); },
    p1: () => doPull(1, COST_1), p10: () => doPull(10, COST_10), info,
    add: (id) => { const d = S.deck[deckKind]; if (d.includes(id)) { d.splice(d.indexOf(id), 1); } else { if (d.length >= 3) { toast('3人まで'); return; } d.push(id); } save(); draw(); },
    rm: (id) => { const d = S.deck[deckKind]; d.splice(d.indexOf(id), 1); save(); draw(); },
  });
}
