import { HORSE_NAMES } from './names.js';
export { HORSE_NAMES };
// ===== 基本データ =====
export const H_KEYS = ['spd', 'sta', 'pow', 'gut', 'wis'];
export const H_NAMES = { spd: 'スピード', sta: 'スタミナ', pow: 'パワー', gut: '根性', wis: '賢さ' };
export const J_KEYS = ['tec', 'whip', 'bal', 'fit', 'jud'];
export const J_NAMES = { tec: '技術', whip: 'ムチ', bal: 'バランス', fit: '持久力', jud: '判断' };

export const COND_NAMES = ['絶不調', '不調', '普通', '好調', '絶好調'];
export const COND_COLORS = ['#7b5cff', '#5b9bff', '#cfcfcf', '#ffb347', '#ff5a5a'];
export const COND_SPEED = [0.978, 0.99, 1.0, 1.007, 1.014];
export const COND_TRAIN = [0.7, 0.85, 1.0, 1.1, 1.2];

export const APT_LETTERS = ['G', 'F', 'E', 'D', 'C', 'B', 'A'];
export const APT_FACTOR = { G: 0.9, F: 0.92, E: 0.94, D: 0.957, C: 0.972, B: 0.988, A: 1.0 };

export const STYLES = ['逃げ', '先行', '差し', '追込'];

export const COAT = [
  { name: '鹿毛', body: 0x93501f, mane: 0x241208, leg: 0x241208 },
  { name: '黒鹿毛', body: 0x5a3018, mane: 0x150a05, leg: 0x150a05 },
  { name: '青鹿毛', body: 0x2e1c14, mane: 0x0b0705, leg: 0x0b0705 },
  { name: '栗毛', body: 0xcf7430, mane: 0xd88a42, leg: 0xb8642a },
  { name: '栃栗毛', body: 0xa85a26, mane: 0xe0b878, leg: 0x985022 },
  { name: '芦毛', body: 0xc4c2be, mane: 0x8a8886, leg: 0x6a6866 },
];

export const SILKS = [0xd62828, 0x1d4ed8, 0xf2c200, 0x16a34a, 0xf97316, 0x9333ea, 0xffffff, 0x111111,
  0xec4899, 0x06b6d4, 0x84cc16, 0x7c2d12, 0x64748b, 0xfacc15, 0x0f766e, 0xbe123c, 0x4338ca, 0xa3a3a3];

export function rankOf(v) {
  if (v >= 97) return 'SS';
  if (v >= 90) return 'S';
  if (v >= 80) return 'A';
  if (v >= 70) return 'B';
  if (v >= 60) return 'C';
  if (v >= 50) return 'D';
  if (v >= 35) return 'E';
  if (v >= 20) return 'F';
  return 'G';
}
export function rankColor(r) {
  return { SS: '#ff4fd8', S: '#ffcf33', A: '#ff7a3d', B: '#ff5a5a', C: '#3ddc84', D: '#3db8ff', E: '#9d8cff', F: '#9aa0a6', G: '#6b7076' }[r];
}

export const rnd = (a, b) => a + Math.random() * (b - a);
export const irnd = (a, b) => Math.floor(rnd(a, b + 1));
export const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
export const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
export const lerp = (a, b, t) => a + (b - a) * t;

// ===== 名前 =====
export const NAME_A = ['サンダー', 'ブレイズ', 'シルバー', 'ゴールド', 'ミラクル', 'スター', 'ダーク', 'ライジング', 'キング', 'クイーン',
  'ロード', 'ストーム', 'フレイム', 'ブルー', 'レッド', 'ホワイト', 'グラン', 'エアー', 'メイショウ', 'サクラ', 'トウカイ', 'ナリタ',
  'マチカネ', 'ダイワ', 'タイキ', 'ハヤテ', 'イナズマ', 'カゼノ', 'ミホノ', 'ヤマト'];
export const NAME_B = ['ボルト', 'ハート', 'ウイング', 'ソード', 'ドリーム', 'ロケット', 'ナイト', 'ジャスティス', 'クラウン', 'ブレイブ',
  'ファイア', 'シャドウ', 'リーフ', 'スピリット', 'エース', 'ムーン', 'サン', 'オーラ', 'タイガー', 'ドラゴン', 'ホープ', 'ビクトリー',
  'フラッシュ', 'テイオー', 'オー', 'ハヤブサ', 'イカヅチ', 'サムライ', 'ゼロ', 'ブライアン'];
export function randomHorseName() {
  if (Math.random() < 0.5) return pick(HORSE_NAMES);
  let n = pick(NAME_A) + pick(NAME_B);
  if (n.length > 9) n = n.slice(0, 9);
  return n;
}
const J_SEI = ['武田', '川村', '横山', '松岡', '岩本', '福田', '戸崎', '坂井', '池田', '鮫島', '菅原', '藤岡', '田辺', '三浦', '北島', '佐藤', '吉田', '丹羽'];
const J_MEI = ['翔', '拓也', '大地', '颯太', '蓮', '悠真', '海斗', '陸', '隼人', '健太', '涼', '一輝', '湊', '晴', '大和', '瑛太'];
export function randomJockeyName() { return pick(J_SEI) + ' ' + pick(J_MEI); }
export const SIRE = ['サンデーブレイブ', 'ディープクラウン', 'キングロード', 'ステイゴールデン', 'オルフェスター', 'ロードカナロン',
  'ハーツクライム', 'エピファネオ', 'キタサンブラッド', 'ドゥラメンテオ'];
export const DAM = ['ミスウインド', 'スイートリリー', 'ローズマリー', 'ハッピーベル', 'シャイニーデイ', 'ムーンライト', 'サクラヒメ', 'エンジェルハート'];

// ===== レース =====
// age: '2','3','3+','4+'  grade: G1,G2,G3
export const GRADED = [
  { m: 1, name: '京成杯', g: 'G3', age: '3', surf: '芝', dist: 2000, place: '中山', prize: 4000 },
  { m: 1, name: 'アメリカJCC', g: 'G2', age: '4+', surf: '芝', dist: 2200, place: '中山', prize: 6200 },
  { m: 1, name: '日経新春杯', g: 'G2', age: '4+', surf: '芝', dist: 2400, place: '京都', prize: 5700 },
  { m: 2, name: '共同通信杯', g: 'G3', age: '3', surf: '芝', dist: 1800, place: '東京', prize: 4300 },
  { m: 2, name: '京都記念', g: 'G2', age: '4+', surf: '芝', dist: 2200, place: '京都', prize: 6200 },
  { m: 2, name: 'フェブラリーS', g: 'G1', age: '4+', surf: 'ダ', dist: 1600, place: '東京', prize: 12000 },
  { m: 3, name: '弥生賞', g: 'G2', age: '3', surf: '芝', dist: 2000, place: '中山', prize: 5400 },
  { m: 3, name: '阪神大賞典', g: 'G2', age: '4+', surf: '芝', dist: 3000, place: '阪神', prize: 6700 },
  { m: 3, name: '中山記念', g: 'G2', age: '4+', surf: '芝', dist: 1800, place: '中山', prize: 6200 },
  { m: 3, name: '高松宮記念', g: 'G1', age: '4+', surf: '芝', dist: 1200, place: '中京', prize: 17000 },
  { m: 4, name: '大阪杯', g: 'G1', age: '4+', surf: '芝', dist: 2000, place: '阪神', prize: 30000 },
  { m: 4, name: '皐月賞', g: 'G1', age: '3', surf: '芝', dist: 2000, place: '中山', prize: 20000 },
  { m: 4, name: 'ニュージーランドT', g: 'G2', age: '3', surf: '芝', dist: 1600, place: '中山', prize: 5400 },
  { m: 4, name: '青葉賞', g: 'G2', age: '3', surf: '芝', dist: 2400, place: '東京', prize: 5400 },
  { m: 5, name: '天皇賞（春）', g: 'G1', age: '4+', surf: '芝', dist: 3200, place: '京都', prize: 22000 },
  { m: 5, name: 'NHKマイルC', g: 'G1', age: '3', surf: '芝', dist: 1600, place: '東京', prize: 13000 },
  { m: 5, name: '日本ダービー', g: 'G1', age: '3', surf: '芝', dist: 2400, place: '東京', prize: 30000 },
  { m: 5, name: '京王杯SC', g: 'G2', age: '4+', surf: '芝', dist: 1400, place: '東京', prize: 5900 },
  { m: 6, name: '安田記念', g: 'G1', age: '3+', surf: '芝', dist: 1600, place: '東京', prize: 18000 },
  { m: 6, name: '宝塚記念', g: 'G1', age: '3+', surf: '芝', dist: 2200, place: '阪神', prize: 22000 },
  { m: 6, name: 'ユニコーンS', g: 'G3', age: '3', surf: 'ダ', dist: 1600, place: '東京', prize: 4000 },
  { m: 7, name: '函館記念', g: 'G3', age: '3+', surf: '芝', dist: 2000, place: '函館', prize: 4300 },
  { m: 7, name: 'ラジオNIKKEI賞', g: 'G3', age: '3', surf: '芝', dist: 1800, place: '福島', prize: 4000 },
  { m: 8, name: '札幌記念', g: 'G2', age: '3+', surf: '芝', dist: 2000, place: '札幌', prize: 7000 },
  { m: 8, name: '新潟2歳S', g: 'G3', age: '2', surf: '芝', dist: 1600, place: '新潟', prize: 3300 },
  { m: 9, name: 'セントライト記念', g: 'G2', age: '3', surf: '芝', dist: 2200, place: '中山', prize: 5400 },
  { m: 9, name: '神戸新聞杯', g: 'G2', age: '3', surf: '芝', dist: 2400, place: '阪神', prize: 5400 },
  { m: 9, name: 'オールカマー', g: 'G2', age: '3+', surf: '芝', dist: 2200, place: '中山', prize: 6700 },
  { m: 9, name: 'スプリンターズS', g: 'G1', age: '3+', surf: '芝', dist: 1200, place: '中山', prize: 17000 },
  { m: 9, name: '札幌2歳S', g: 'G3', age: '2', surf: '芝', dist: 1800, place: '札幌', prize: 3300 },
  { m: 10, name: '毎日王冠', g: 'G2', age: '3+', surf: '芝', dist: 1800, place: '東京', prize: 6700 },
  { m: 10, name: '京都大賞典', g: 'G2', age: '3+', surf: '芝', dist: 2400, place: '京都', prize: 6700 },
  { m: 10, name: 'サウジアラビアRC', g: 'G3', age: '2', surf: '芝', dist: 1600, place: '東京', prize: 3300 },
  { m: 10, name: '菊花賞', g: 'G1', age: '3', surf: '芝', dist: 3000, place: '京都', prize: 20000 },
  { m: 10, name: '天皇賞（秋）', g: 'G1', age: '3+', surf: '芝', dist: 2000, place: '東京', prize: 22000 },
  { m: 11, name: 'アルゼンチン共和国杯', g: 'G2', age: '3+', surf: '芝', dist: 2500, place: '東京', prize: 5700 },
  { m: 11, name: '東京スポーツ杯2歳S', g: 'G2', age: '2', surf: '芝', dist: 1800, place: '東京', prize: 4000 },
  { m: 11, name: '武蔵野S', g: 'G3', age: '3+', surf: 'ダ', dist: 1600, place: '東京', prize: 4000 },
  { m: 11, name: 'マイルCS', g: 'G1', age: '3+', surf: '芝', dist: 1600, place: '京都', prize: 18000 },
  { m: 11, name: 'ジャパンC', g: 'G1', age: '3+', surf: '芝', dist: 2400, place: '東京', prize: 50000 },
  { m: 12, name: 'ステイヤーズS', g: 'G2', age: '3+', surf: '芝', dist: 3600, place: '中山', prize: 6200 },
  { m: 12, name: 'チャンピオンズC', g: 'G1', age: '3+', surf: 'ダ', dist: 1800, place: '中京', prize: 12000 },
  { m: 12, name: '朝日杯FS', g: 'G1', age: '2', surf: '芝', dist: 1600, place: '京都', prize: 7000 },
  { m: 12, name: 'ホープフルS', g: 'G1', age: '2', surf: '芝', dist: 2000, place: '中山', prize: 7000 },
  { m: 12, name: '有馬記念', g: 'G1', age: '3+', surf: '芝', dist: 2500, place: '中山', prize: 50000 },
];

// 海外の大レース（G1を勝つか重賞を3勝すると招待される）
export const OVERSEAS = [
  { m: 2, name: 'サウジカップ', g: 'G1', age: '4+', surf: 'ダ', dist: 1800, place: 'リヤド', prize: 140000, abroad: 'サウジアラビア' },
  { m: 3, name: 'ドバイワールドカップ', g: 'G1', age: '4+', surf: 'ダ', dist: 2000, place: 'メイダン', prize: 100000, abroad: 'ドバイ' },
  { m: 3, name: 'ドバイシーマクラシック', g: 'G1', age: '4+', surf: '芝', dist: 2400, place: 'メイダン', prize: 50000, abroad: 'ドバイ' },
  { m: 7, name: 'キングジョージ6世&QES', g: 'G1', age: '3+', surf: '芝', dist: 2400, place: 'アスコット', prize: 25000, abroad: 'イギリス' },
  { m: 10, name: '凱旋門賞', g: 'G1', age: '3+', surf: '芝', dist: 2400, place: 'ロンシャン', prize: 45000, abroad: 'フランス' },
  { m: 12, name: '香港カップ', g: 'G1', age: '3+', surf: '芝', dist: 2000, place: 'シャティン', prize: 35000, abroad: '香港' },
  { m: 12, name: '香港ヴァーズ', g: 'G1', age: '3+', surf: '芝', dist: 2400, place: 'シャティン', prize: 20000, abroad: '香港' },
];

export const CLASS_INFO = [
  { name: '新馬', prize: 700, lv: 24 },
  { name: '未勝利', prize: 550, lv: 27 },
  { name: '1勝クラス', prize: 1000, lv: 37 },
  { name: '2勝クラス', prize: 1500, lv: 47 },
  { name: '3勝クラス', prize: 1800, lv: 56 },
  { name: 'オープン', prize: 2400, lv: 62 },
];
export const GRADE_LV = { G3: 66, G2: 72, G1: 80 };
export const PLACES = ['東京', '中山', '京都', '阪神', '中京', '新潟', '福島', '小倉'];

// 着順ごとの賞金割合
export const PRIZE_SHARE = [1, 0.4, 0.25, 0.15, 0.1];

export function fmtMoney(man) {
  // man = 万円
  if (man >= 10000) {
    const oku = Math.floor(man / 10000);
    const rest = Math.round(man % 10000);
    return oku + '億' + (rest ? rest + '万' : '') + '円';
  }
  return Math.round(man) + '万円';
}

export function fmtTime(sec) {
  const m = Math.floor(sec / 60);
  const s = sec - m * 60;
  return m + ':' + (s < 10 ? '0' : '') + s.toFixed(1);
}
