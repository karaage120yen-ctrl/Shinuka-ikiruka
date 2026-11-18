// ここに Firebase の設定を貼り付ける（README の「オンライン機能の設定」を参照）
// Firebase コンソールの「プロジェクトの設定 → マイアプリ」に出てくる firebaseConfig の { } の中身を、
// 下の { } の中にそのまま貼る。この値は公開されても大丈夫（守りは Firestore のルールで行う）。
// サッカーやるよん と同じ Firebase プロジェクトを使ってもOK（そのときは firestore.rules を両方入りのものに）。
window.FIREBASE_CONFIG = {
  apiKey: "ここにapiKeyを貼る",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};
