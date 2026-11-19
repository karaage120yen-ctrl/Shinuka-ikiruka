import { horseFace } from './portrait.js';
// ===== 馬主モード（画面） =====
import { S, save } from './store.js';
import { render, bind, toast, header, modal, esc, hex, man } from './uikit.js';
import * as O2 from './owner.js';
import * as K from './career.js';
import { COAT, H_KEYS, H_NAMES, rankOf, rankColor } from './data.js';
import { bondN, bondLv, BOND_NAME } from './combo.js';
import { mission } from './mission.js';
import * as A from './audio.js';

let back = null, tab = 'stable';
export function openOwner(home) { back = home; A.playBgm('farm'); draw(); }
const ranks = (p) => H_KEYS.map(k => { const r = rankOf(p.st[k]); return `<b style="color:${rankColor(r)}">${r}</b>`; }).join('');
const bar = (v, c) => `<div class="mbar"><i style="width:${Math.max(0, Math.min(100, v))}%;background:${c}"></i></div>`;

function draw() {
  const O = O2.ownerState();
  const tabs = `<div class="tabs">${[['stable', '厩舎'], ['sale', 'セリ市場'], ['log', '記録']].map(([k, n]) => `<button class="tab ${tab === k ? 'on' : ''}" data-act="tab" data-v="${k}">${n}</button>`).join('')}</div>`;
  const top = `<div class="own-top"><div><small>資金</small><b class="${O.money < 0 ? 'bad' : ''}">${man(O.money)}</b></div><div><small>${O.year}年</small><b>${O.month}月</b></div><div><small>通算</small><b>${O.wins}勝${O.g1 ? `・G1 ${O.g1}勝` : ''}</b></div></div>`;
  let body = '';
  if (tab === 'stable') {
    body = O.horses.length ? O.horses.map((H, i) => horseCard(O, H, i)).join('') : '<div class="empty">まだ馬がいない。「セリ市場」で馬を買おう。</div>';
    body += `<div class="stack"><button class="btn red" data-act="adv">${O.month}月を走らせる ▶<small>預託料 ${man(O.horses.length * O2.FEE)}／月</small></button></div>
      <p class="note">2歳の6月からレースに出られる。調教を強めにすると伸びるが、ケガもしやすい。あなたが育てた騎手に乗ってもらうと、コンビの絆が育つ。</p>`;
  } else if (tab === 'sale') {
    const L = O2.lots(O);
    body = `<p class="note">月が変わると新しい馬が出てくる。「見栄え」は目安で、本当の素質はわからない。ライバル馬主と競り合って落札しよう。（厩舎は${O2.MAX_HORSES}頭まで）</p>` +
      L.map((l, i) => `<div class="lot ${l.sold ? 'sold' : ''}"><div class="lot-h">${horseFace(l.p.coat, l.p.name, 'sm')}<b>${esc(l.p.name)}</b><span>${l.p.sex}・${l.p.age}歳・${COAT[l.p.coat].name}</span></div>
        <div class="lot-b"><span>父 ${esc(l.p.sire)}　母 ${esc(l.p.dam)}</span><span>見栄え <b class="gold">${l.look}</b>　脚質 ${l.p.style}　芝${l.p.apt.turf}・ダ${l.p.apt.dirt}</span><span>今の能力 ${ranks(l.p)}</span></div>
        ${l.sold ? '<div class="lot-s">落札済み</div>' : `<button class="btn race" data-act="auc" data-v="${i}">セリに参加（開始 ${man(l.start)}）</button>`}</div>`).join('');
  } else {
    body = `<div class="card"><p class="small">購入額 合計 ${man(O.spent)}　獲得賞金 合計 ${man(O.earn)}</p></div><ul class="loglist">${O.log.map(l => `<li>${esc(l)}</li>`).join('')}</ul>
      <button class="btn ghost wide" data-act="reset">馬主をやめて最初から</button>`;
  }
  render(`${header('馬主モード')}<div class="page owner">${top}${tabs}${body}</div>`, true);
  bind({
    go: () => { A.playBgm('menu'); back(); }, tab: (v) => { tab = v; draw(); },
    plan: (v, el) => { const H = O.horses[+el.dataset.i]; H.plan = v; save(); draw(); },
    ret: (v) => { const H = O.horses[+v]; if (!confirm(`${H.p.name}を引退させますか？（一覧に入ります）`)) return; O2.retire(O, H); draw(); },
    adv: () => doAdvance(O),
    auc: (v) => auction(O, O2.lots(O)[+v]),
    reset: () => { if (confirm('馬主モードのデータを消して最初からにしますか？（引退した馬は一覧に残る）')) { S.owner = null; save(); draw(); } },
  });
  document.querySelectorAll('select[data-act]').forEach(el => { el.onchange = () => { const f = { race: 1, jk: 1 }[el.dataset.act]; if (!f) return; const H = O.horses[+el.dataset.i]; if (el.dataset.act === 'race') { const rs = O2.racesFor(H, O); H.entry = el.value === '' ? null : rs[+el.value]; } else H.jockey = el.value; save(); draw(); }; });
}
function horseCard(O, H, i) {
  const p = H.p, st = K.stageOf(p), rs = O2.racesFor(H, O), jk = O2.jockeyOf(H.jockey);
  const bl = jk.id != null ? bondLv(bondN(p.id, jk.id)) : -1;
  const ei = H.entry ? rs.findIndex(r => r.name === H.entry.name && r.dist === H.entry.dist) : -1;
  return `<div class="ohorse"><div class="oh-h">${horseFace(p.coat, p.name)}<div><b>${esc(p.name)}</b><small>${p.sex}・${p.age}歳・${K.STAGE_NAME[st]}・${p.wins}勝${p.g1Wins ? `（G1 ${p.g1Wins}勝）` : ''}</small></div><button class="x" data-act="ret" data-v="${i}">引退</button></div>
    <div class="oh-s">${ranks(p)}<span class="small">総合 ${K.ovrOf(p)}</span></div>
    <div class="oh-g"><span>体力</span>${bar(p.sta, '#3ddc84')}<span>調子</span>${bar(p.cond, '#ffc93d')}</div>
    ${p.inj > 0 ? `<p class="bad small">ケガ：${esc(p.injName)}（あと${Math.ceil(p.inj)}週）</p>` : ''}
    <div class="chips">${[['rest', '休養'], ['std', '普通'], ['hard', '強め']].map(([k, n]) => `<button class="chip ${H.plan === k ? 'on' : ''}" data-act="plan" data-v="${k}" data-i="${i}">${n}</button>`).join('')}</div>
    ${st === 'tc' ? `<label class="small">レース</label><select data-act="race" data-i="${i}"><option value="">出走しない</option>${rs.map((r, k) => { const mk = K.oddsMark(p, r); return `<option value="${k}" ${k === ei ? 'selected' : ''}>${mk[0]} ${r.g ? r.g + ' ' : ''}${r.name}（${r.surf}${r.dist}m・1着${man(r.prize)}）</option>`; }).join('')}</select>
    <label class="small">騎手</label><select data-act="jk" data-i="${i}">${O2.NPC_J.map(n => `<option value="${n.key}" ${H.jockey === n.key ? 'selected' : ''}>${n.name}${n.fee ? `（賞金の${n.fee * 100}%）` : ''}</option>`).join('')}${S.jockeys.map(j => `<option value="${j.id}" ${String(H.jockey) === String(j.id) ? 'selected' : ''}>⭐${esc(j.name)}（${j.rank || ''}）</option>`).join('')}</select>
    ${bl >= 0 ? `<p class="small">🤝 コンビ：${BOND_NAME[bl]}${bl ? `（能力+${bl}段階）` : ''}</p>` : ''}` : `<p class="small muted">${p.age === 1 ? '育成牧場で成長中（2歳からトレセン）' : ''}</p>`}
  </div>`;
}
function doAdvance(O) {
  if (O.money < -5000) { toast('資金がマイナスすぎる。馬を引退させよう'); return; }
  const r = O2.advance(O);
  mission('owner');
  if (r.races.some(x => x.pos === 1 && !x.dnf)) { mission('win'); A.fanfare('win'); }
  modal(`<h2>${O.month === 1 ? O.year - 1 : O.year}年${O.month === 1 ? 12 : O.month - 1}月の結果</h2>
    ${r.races.length ? `<ul class="loglist">${r.races.map(x => `<li>${x.g ? `<span class="grade g-${x.g}">${x.g}</span>` : ''}<b>${esc(x.name)}</b> ${esc(x.race)}：<b class="${x.pos === 1 && !x.dnf ? 'gold' : ''}">${x.dnf ? '競走中止' : x.pos + '着'}</b>/${x.field}（${esc(x.jname)}）${x.prize ? `　+${man(x.prize)}` : ''}</li>`).join('')}</ul>` : '<p>今月はレースなし</p>'}
    ${r.notes.length ? `<ul class="loglist">${r.notes.map(n => `<li>${esc(n)}</li>`).join('')}</ul>` : ''}
    <p class="small">預託料 -${man(r.fee)}　資金 ${man(r.money0)} → <b>${man(r.money1)}</b></p><button class="btn primary wide" data-close>OK</button>`, { onClose: draw });
}
function auction(O, lot) {
  if (O.horses.length >= O2.MAX_HORSES) { toast(`厩舎は${O2.MAX_HORSES}頭まで`); return; }
  let price = lot.start, rival = null, myTurn = true, last = null;
  const m = modal('<div id="auc"></div>', { onClose: draw });
  const step = () => price < 2000 ? 100 : price < 10000 ? 500 : 1000;
  const paint = (msg) => {
    m.el.querySelector('#auc').innerHTML = `<h2>🔨 セリ：${esc(lot.p.name)}</h2><p class="small">${lot.p.sex}・${lot.p.age}歳　見栄え ${lot.look}　父 ${esc(lot.p.sire)}</p>
      <div class="auc-p">${man(price)}</div><p class="center">${msg || ''}</p><p class="small center">資金 ${man(O.money)}</p>
      ${last === 'win' ? '<button class="btn primary wide" id="a-ok">厩舎へ</button>' : last === 'lose' ? '<button class="btn ghost wide" id="a-ok">閉じる</button>' : `<div class="row2"><button class="btn red" id="a-bid">${myTurn ? `${man(price)}で入札` : `${man(price + step())}で入札`}</button><button class="btn ghost" id="a-drop">降りる</button></div>`}`;
    const ok = m.el.querySelector('#a-ok'); if (ok) ok.onclick = () => m.close();
    const b = m.el.querySelector('#a-bid'); if (b) b.onclick = () => {
      const my = myTurn ? price : price + step();
      const r = O2.bid(O, lot, my);
      if (r.err) { paint(r.err); return; }
      A.click();
      if (r.done) { O2.buy(O, lot, r.price); last = 'win'; price = r.price; A.coin(); paint(`🎉 落札！ ${esc(lot.p.name)}はあなたの馬になった`); return; }
      price = r.price; rival = r.rival; myTurn = false; paint(`${esc(rival)}が ${man(price)} に上げてきた！`);
    };
    const d = m.el.querySelector('#a-drop'); if (d) d.onclick = () => { last = 'lose'; if (rival) lot.sold = true; save(); paint(rival ? `${esc(rival)}が落札した` : '入札しなかった'); };
  };
  paint('最初の入札をしよう');
}
