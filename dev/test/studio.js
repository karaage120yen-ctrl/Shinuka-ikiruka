// モデル確認用スタジオ（ゲームには入らない）
import * as THREE from 'three';
import { buildHorse, animateHorse } from '../src/model.js';
import { COAT } from '../src/data.js';
import { turfTex } from '../src/textures.js';
const q = new URLSearchParams(location.search);
if (q.get('soff')) window.__sculptOff = q.get('soff').split(',').map(Number);
const W = +q.get('w') || 1200, H = +q.get('h') || 400;
const R = new THREE.WebGLRenderer({ antialias: true, preserveDrawingBuffer: true });
R.setPixelRatio(1); R.setSize(W, H); document.body.appendChild(R.domElement);
R.outputColorSpace = THREE.SRGBColorSpace; R.toneMapping = THREE.ACESFilmicToneMapping; R.toneMappingExposure = 1.16;
R.shadowMap.enabled = true; R.shadowMap.type = THREE.PCFSoftShadowMap; R.autoClear = false;
const S = new THREE.Scene(); S.background = new THREE.Color(0x8cc4f0);
const sunDir = new THREE.Vector3(-0.45, 0.62, 0.35).normalize();
S.add(new THREE.HemisphereLight(0xd6e8ff, 0x52602f, 0.85));
const sun = new THREE.DirectionalLight(0xfff0d8, 2.6); sun.position.copy(sunDir).multiplyScalar(30); sun.castShadow = true;
sun.shadow.mapSize.set(2048, 2048); Object.assign(sun.shadow.camera, { left: -8, right: 8, top: 8, bottom: -8 }); sun.shadow.bias = -0.0004; sun.shadow.normalBias = 0.03;
S.add(sun);
const pm = new THREE.PMREMGenerator(R); const envS = new THREE.Scene(); envS.background = new THREE.Color(0x9ccaf2);
const gg = new THREE.Mesh(new THREE.PlaneGeometry(400, 400), new THREE.MeshBasicMaterial({ color: 0x35552a, side: THREE.DoubleSide })); gg.rotation.x = -Math.PI / 2; gg.position.y = -3; envS.add(gg);
S.environment = pm.fromScene(envS, 0.02).texture; S.environmentIntensity = 0.55;
const gt = turfTex(); gt.repeat.set(4, 4);
const ground = new THREE.Mesh(new THREE.PlaneGeometry(60, 60), new THREE.MeshStandardMaterial({ map: gt, roughness: 0.95 })); ground.rotation.x = -Math.PI / 2; ground.receiveShadow = true; S.add(ground);
const coat = COAT[+(q.get('coat') ?? 3)];
const Hs = buildHorse(coat, +(q.get('silk') ?? 0x9333ea), +(q.get('num') ?? 1), { shadow: true, cap: q.get('cap') ? +q.get('cap') : 0xffffff, hood: q.get('hood') ? +q.get('hood') : null, cups: true, blaze: +(q.get('blaze') ?? 0), roll: q.get('roll') === '1', bridle: q.get('br') ? +q.get('br') : 1, socks: +(q.get('socks') ?? 0), dapple: q.get('dap') === '1' });
S.add(Hs.root); Hs.root.traverse(o => { if (o.isMesh) { o.castShadow = true; } });
const v = +(q.get('v') ?? 14), stride = +(q.get('stride') ?? 1.2);
animateHorse(Hs, stride, v, 0.3);
if (q.get('nojock')) Hs.jock.visible = false;
if (q.get('hide')) { const ids = q.get('hide').split(','); let n = 0; Hs.root.traverse(o => { if (o.isMesh) { if (ids.includes(String(n))) o.visible = false; n++; } }); }
if (q.get('list')) { let n = 0; const out = []; Hs.root.traverse(o => { if (o.isMesh) { out.push(n + ':' + o.geometry.attributes.position.count + ':' + o.parent.type); n++; } }); console.error(out.join(' ')); }
// 視点：3/4前・正面・横・頭アップ
const views = (q.get('views') || 'q,f,s').split(',');
const camOf = (k) => {
  const c = new THREE.PerspectiveCamera(30, (W / views.length) / H, 0.05, 200);
  const T = { q: [[5.2, 1.6, 3.6], [0.4, 1.5, 0]], f: [[7, 1.6, 0], [0.4, 1.5, 0]], s: [[0.2, 1.6, 7.5], [0.1, 1.4, 0]], h: [[3.0, 2.3, 1.8], [1.1, 2.15, 0]], hf: [[3.4, 2.2, 0], [1.1, 2.1, 0]], b: [[-5, 2.4, 3], [0.3, 1.6, 0]], e: [[1.75, 2.22, 0.95], [1.5, 2.12, 0.15]], e2: [[2.6, 2.3, 0.9], [1.55, 2.0, 0.1]], c: [[0.9, 1.9, 2.2], [-0.1, 1.55, 0.2]], c2: [[-1.6, 1.9, 2.0], [-0.4, 1.5, 0.2]], fp: [[0.25, 2.62, 0], [1.6, 1.9, 0]], m: [[0.9, 2.4, 1.6], [1.0, 2.0, 0]], fl: [[4.2, 1.25, 0.6], [0.6, 1.6, 0]], m2: [[0.9, 2.4, -1.6], [1.0, 2.0, 0]] }[k];
  c.position.set(...T[0]); c.lookAt(new THREE.Vector3(...T[1])); if (k[0] === 'h') c.fov = 26; if (k === 'e') c.fov = 22; if (k === 'e2') c.fov = 30; c.updateProjectionMatrix(); return c;
};
R.clear();
views.forEach((k, i) => { const w = W / views.length; R.setViewport(i * w, 0, w, H); R.setScissor(i * w, 0, w, H); R.setScissorTest(true); R.render(S, camOf(k)); });
window.__done = true;
