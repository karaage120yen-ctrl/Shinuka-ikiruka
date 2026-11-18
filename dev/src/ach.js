// ===== 実績と称号 =====
import { S, save } from './store.js';

export const ACH = [
  // 馬
  { id: 'h_first', g: '馬', n: '新米オーナー', d: '馬を1頭、引退まで育てる', r: { carrots: 10 } },
  { id: 'h_win', g: '馬', n: '初勝利', d: '育てた馬がレースに勝つ', r: { carrots: 5 } },
  { id: 'h_graded', g: '馬', n: '重賞ウイナー', d: '重賞を勝つ', r: { carrots: 10 } },
  { id: 'h_g1', g: '馬', n: 'G1馬のオーナー', d: 'G1を勝つ', r: { carrots: 30, coins: 5000 } },
  { id: 'h_g1_5', g: '馬', n: '名馬', d: '1頭でG1を5勝する', r: { carrots: 50, coins: 20000 } },
  { id: 'h_triple', g: '馬', n: '三冠馬', d: '皐月賞・日本ダービー・菊花賞をすべて勝つ', r: { carrots: 100, coins: 50000 } },
  { id: 'h_aotyp', g: '馬', n: '年度代表馬', d: '年度代表馬に選ばれる', r: { carrots: 30 } },
  { id: 'h_abroad', g: '馬', n: '世界への挑戦', d: '海外のG1を勝つ', r: { carrots: 50, coins: 20000 } },
  { id: 'h_arc', g: '馬', n: '凱旋門の英雄', d: '凱旋門賞を勝つ', r: { carrots: 100, coins: 100000 } },
  { id: 'h_unbeaten', g: '馬', n: '無敗の伝説', d: '5戦以上して負けなしで引退する', r: { carrots: 80 } },
  { id: 'h_earn', g: '馬', n: '10億円ホース', d: '獲得賞金10億円以上で引退する', r: { carrots: 50 } },
  { id: 'h_ss', g: '馬', n: '歴史に残る馬', d: '引退ランクSSの馬を育てる', r: { carrots: 80 } },
  { id: 'h_10', g: '馬', n: '大牧場', d: '馬を10頭育てる', r: { carrots: 30 } },
  { id: 'h_breed', g: '馬', n: 'ブリーダー', d: '自分の馬どうしを配合する', r: { carrots: 10 } },
  { id: 'h_gen3', g: '馬', n: '血の物語', d: '3代続けて自分の血統の馬を育てる', r: { carrots: 50 } },
  // 騎手
  { id: 'j_debut', g: '騎手', n: 'デビュー', d: '騎手としてデビューする', r: { carrots: 5 } },
  { id: 'j_first', g: '騎手', n: 'ムチを置く日', d: '騎手を引退まで育てる', r: { carrots: 10 } },
  { id: 'j_100', g: '騎手', n: '100勝ジョッキー', d: '通算100勝', r: { carrots: 10 } },
  { id: 'j_1000', g: '騎手', n: '1000勝ジョッキー', d: '通算1000勝', r: { carrots: 50, coins: 30000 } },
  { id: 'j_g1', g: '騎手', n: 'G1ジョッキー', d: 'G1を勝つ', r: { carrots: 30 } },
  { id: 'j_g1_10', g: '騎手', n: '大舞台の主役', d: 'G1を10勝', r: { carrots: 80, coins: 50000 } },
  { id: 'j_leading', g: '騎手', n: 'リーディングジョッキー', d: '年間150勝', r: { carrots: 50 } },
  { id: 'j_marry', g: '騎手', n: '幸せな家庭', d: '結婚する', r: { carrots: 10 } },
  { id: 'j_abroad', g: '騎手', n: '世界のジョッキー', d: '海外のG1を勝つ', r: { carrots: 50 } },
  // 賭け
  { id: 'b_first', g: '賭け', n: '初的中', d: '馬券を当てる', r: { coins: 1000 } },
  { id: 'b_man', g: '賭け', n: '万馬券ハンター', d: '100コインあたり1万コイン以上の馬券を当てる', r: { coins: 10000 } },
  { id: 'b_3t', g: '賭け', n: '3連単の達人', d: '3連単を当てる', r: { coins: 5000 } },
  { id: 'b_100k', g: '賭け', n: '大勝負', d: '1レースで10万コイン以上の払い戻し', r: { carrots: 20 } },
  { id: 'b_rich', g: '賭け', n: 'コイン長者', d: 'コインを100万枚ためる', r: { carrots: 50 } },
  { id: 'b_room', g: '賭け', n: 'みんなで競馬', d: 'ルームで遊ぶ', r: { coins: 2000 } },
];

let toastFn = null;
export function onAchToast(f) { toastFn = f; }
function unlock(id) {
  if (!S.ach) S.ach = {};
  if (S.ach[id]) return;
  const a = ACH.find(x => x.id === id); if (!a) return;
  S.ach[id] = Date.now();
  if (a.r.carrots) S.carrots += a.r.carrots;
  if (a.r.coins) { S.bet = S.bet || { coins: 10000, room: '', name: '', week: 0, cards: {}, hist: { bet: 0, ret: 0 }, friends: {}, rescue: '' }; S.bet.coins += a.r.coins; }
  save();
  const msg = `🏆 実績「${a.n}」${a.r.carrots ? `　🥕+${a.r.carrots}` : ''}${a.r.coins ? `　🪙+${a.r.coins.toLocaleString('ja-JP')}` : ''}`;
  if (toastFn) toastFn(msg); else showToast(msg);
}
function showToast(t) {
  const el = document.createElement('div'); el.className = 'toast ach'; el.textContent = t;
  document.body.appendChild(el); setTimeout(() => el.classList.add('show'), 10);
  setTimeout(() => { el.classList.remove('show'); setTimeout(() => el.remove(), 400); }, 3200);
}

export function checkAch(evt, d = {}) {
  try {
    const p = d.p;
    if (evt === 'turn' && p) {
      if (p.kind === 'horse') {
        if (p.wins >= 1) unlock('h_win');
        if (p.gradedWins >= 1) unlock('h_graded');
        if (p.g1Wins >= 1) unlock('h_g1');
        if (p.g1Wins >= 5) unlock('h_g1_5');
        if (['皐月賞', '日本ダービー', '菊花賞'].every(n => p.titles.includes(n))) unlock('h_triple');
        if (p.races.some(r => r.abroad && r.pos === 1)) unlock('h_abroad');
        if (p.titles.includes('凱旋門賞')) unlock('h_arc');
      } else {
        if (p.stage === 'pro') unlock('j_debut');
        if (p.wins >= 100) unlock('j_100');
        if (p.wins >= 1000) unlock('j_1000');
        if (p.g1Wins >= 1) unlock('j_g1');
        if (p.g1Wins >= 10) unlock('j_g1_10');
        if (p.fam && p.fam.partner && p.fam.partner.married) unlock('j_marry');
        if ((d.res && d.res.races || []).some(r => r.abroad && r.pos === 1)) unlock('j_abroad');
      }
    }
    if (evt === 'award') {
      if (d.awards.includes('年度代表馬')) unlock('h_aotyp');
      if (d.awards.includes('リーディングジョッキー')) unlock('j_leading');
    }
    if (evt === 'retire' && p) {
      const c = d.card;
      if (p.kind === 'horse') {
        unlock('h_first');
        if (c.rank === 'SS') unlock('h_ss');
        if (p.record[0] >= 5 && p.record[1] + p.record[2] + p.record[3] === 0) unlock('h_unbeaten');
        if (p.earnings >= 100000) unlock('h_earn');
        if (S.horses.length >= 10) unlock('h_10');
      } else unlock('j_first');
    }
    if (evt === 'bet') {
      if (d.ret > 0) unlock('b_first');
      if (d.hits.some(h => h.o >= 100)) unlock('b_man');
      if (d.tickets.some(t => t.type === 'trifecta' && t.ret > 0)) unlock('b_3t');
      if (d.ret >= 100000) unlock('b_100k');
      if (S.bet && S.bet.coins >= 1000000) unlock('b_rich');
    }
    if (evt === 'room') unlock('b_room');
    if (evt === 'breed') { unlock('h_breed'); if ((d.gen || 0) >= 3) unlock('h_gen3'); }
  } catch (e) { console.warn(e); }
}
