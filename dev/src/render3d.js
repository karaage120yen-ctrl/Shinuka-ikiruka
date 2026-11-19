// ===== 3Dの競馬場とレース描画（騎手の一人称視点） =====
import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { TRACK, trackPos, elev } from './sim.js';
import { COAT } from './data.js';
import { buildHorse, animateHorse } from './model.js';
import { turfTex, dirtTex, grassTex, tuftTex, puffTex, crowdTex, standingCrowdTex, buildingTex, textTex, blobTex, setMirror } from './textures.js';

const W = TRACK.width;
const tmp = {};

// コースに沿った帯（坂の高さもつける）
function loopStrip(d0, d1, y0, y1, step, uvScaleU = 10, uvAcross = 1, lift = true) {
  const P = TRACK.P;
  const pos = [], uv = [], idx = [];
  const n = Math.ceil(P / step);
  for (let i = 0; i <= n; i++) {
    const u = (i / n) * P;
    const a = trackPos(u, d0, {}), b = trackPos(u, d1, {});
    const e = lift ? a.y : 0;
    pos.push(a.x, y0 + e, a.z, b.x, y1 + e, b.z);
    uv.push(u / uvScaleU, 0, u / uvScaleU, uvAcross);
    if (i < n) { const k = i * 2; idx.push(k, k + 1, k + 2, k + 1, k + 3, k + 2); }
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  geo.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  geo.setIndex(idx); geo.computeVertexNormals();
  return geo;
}
// 坂の下の土手（地面まで）
function skirt(d) {
  const P = TRACK.P, pos = [], idx = [];
  const n = Math.ceil(P / 4);
  for (let i = 0; i <= n; i++) {
    const a = trackPos((i / n) * P, d, {});
    pos.push(a.x, -0.05, a.z, a.x, a.y + 0.005, a.z);
    if (i < n) { const k = i * 2; idx.push(k, k + 1, k + 2, k + 1, k + 3, k + 2); }
  }
  const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setIndex(idx); g.computeVertexNormals();
  return g;
}

function skyMesh(sunDir, sky) {
  const mat = new THREE.ShaderMaterial({
    side: THREE.BackSide, depthWrite: false, fog: false,
    uniforms: { sunDir: { value: sunDir.clone().normalize() }, cloud: { value: sky.cloud }, night: { value: sky.night }, dark: { value: sky.dark } },
    vertexShader: `varying vec3 vDir; void main(){ vDir = normalize(position); vec4 p = modelViewMatrix*vec4(position,1.0); gl_Position = projectionMatrix*p; gl_Position.z = gl_Position.w; }`,
    fragmentShader: `uniform vec3 sunDir; uniform float cloud; uniform float night; uniform float dark; varying vec3 vDir;
      float h21(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7)))*43758.5453); }
      float vn(vec2 p){ vec2 i = floor(p), f = fract(p); f = f*f*(3.0-2.0*f);
        return mix(mix(h21(i), h21(i+vec2(1,0)), f.x), mix(h21(i+vec2(0,1)), h21(i+vec2(1,1)), f.x), f.y); }
      float fbm(vec2 p){ float v = 0.0, a = 0.5; for (int i = 0; i < 5; i++) { v += a*vn(p); p = p*2.03 + vec2(1.7, 9.2); a *= 0.5; } return v; }
      void main(){ float h = clamp(vDir.y, -0.1, 1.0);
        vec3 zen = vec3(0.08,0.36,0.86); vec3 hor = vec3(0.62,0.82,0.98);
        vec3 c = mix(hor, zen, pow(max(h,0.0), 0.55));
        float s = max(dot(normalize(vDir), sunDir), 0.0);
        c += vec3(1.0,0.9,0.7) * (pow(s, 400.0)*4.0 + pow(s, 12.0)*0.25) * (1.0 - cloud);
        // 雲（空に貼った平面に投影してノイズで描く）
        vec2 cp = vDir.xz / (h + 0.18) * 1.15;
        float n = fbm(cp) * 0.75 + fbm(cp * 0.45 + 3.1) * 0.35;
        float cl = smoothstep(0.6 - cloud*0.3, 0.68 - cloud*0.2, n) * smoothstep(0.0, 0.14, h);
        float shade = fbm(cp + sunDir.xz*0.25);
        vec3 cc = mix(vec3(1.0,1.0,1.0), vec3(0.72,0.78,0.88), clamp((shade - n)*1.6 + 0.25 + cloud*0.3, 0.0, 1.0));
        cc += vec3(1.0,0.85,0.6) * pow(s, 8.0) * 0.35;
        c = mix(c, cc, cl*0.92);
        // 地平線のかすみ
        c = mix(c, vec3(0.86,0.89,0.92), (1.0 - smoothstep(0.0, 0.12, h))*0.55);
        c = mix(c, vec3(0.55,0.58,0.62), cloud*0.8);
        c *= 1.0 - dark;
        // 夜空
        vec3 nc = mix(vec3(0.05,0.07,0.16), vec3(0.01,0.02,0.06), pow(max(h,0.0),0.4));
        nc += vec3(0.25,0.18,0.10) * (1.0 - smoothstep(0.0, 0.15, h));
        vec2 g = floor(vDir.xz/(0.2+vDir.y) * 220.0);
        float st = step(0.997, h21(g)) * smoothstep(0.1, 0.4, h);
        nc += vec3(st);
        c = mix(c, nc, night);
        gl_FragColor = vec4(c, 1.0);
        #include <colorspace_fragment>
      }`,
  });
  const m = new THREE.Mesh(new THREE.SphereGeometry(4000, 32, 16), mat);
  m.renderOrder = -1; m.frustumCulled = false;
  return m;
}

export class RaceView {
  constructor(canvas, race, opts = {}) {
    this.race = race; this.opts = opts;
    this.view = opts.view || 'fp';
    this.mirror = TRACK.dir === -1; // 右回りは画面を左右反転して見せる
    setMirror(this.mirror);
    canvas.style.transform = this.mirror ? 'scaleX(-1)' : '';
    const lowPower = opts.lowPower;
    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: !lowPower, powerPreference: 'high-performance' });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, lowPower ? 1 : 1.6));
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.16;
    this.renderer.shadowMap.enabled = !lowPower;
    this.renderer.shadowMap.type = THREE.PCFShadowMap;
    this.scene = new THREE.Scene();
    const w = race.weather || '晴', night = TRACK.stand === 'night';
    this.night = night; this.wx = w;
    const fogC = night ? 0x0b1020 : w === '雨' ? 0x8f969e : w === '小雨' || w === '曇' ? 0xa9b2bb : w === '雪' ? 0xd5dbe2 : 0xa8d0f0;
    this.scene.fog = new THREE.Fog(fogC, night ? 80 : 100, w === '雨' || w === '雪' ? 700 : 1500);
    this.camera = new THREE.PerspectiveCamera(72, 1, 0.05, 6000);
    this.camera.rotation.order = 'YXZ';
    this.t = 0; this.shake = 0; this.whipAnim = 0;
    this.buildWorld();
    this.buildHorses();
    this.particles();
    this.weatherFx();
    this.resize();
    this._onResize = () => this.resize();
    window.addEventListener('resize', this._onResize);
  }

  resize() {
    const c = this.renderer.domElement;
    const w = c.clientWidth || window.innerWidth, h = c.clientHeight || window.innerHeight;
    this.renderer.setSize(w, h, false);
    this.camera.aspect = w / h;
    this.camera.fov = w < h ? 90 : 66;
    this.camera.updateProjectionMatrix();
  }

  buildWorld() {
    const S = this.scene, { Ls, R, P } = TRACK, wx = this.wx, night = this.night;
    const wet = ['小雨', '雨'].includes(wx) || this.race.going === '重' || this.race.going === '不良';
    const cloudy = wx === '晴' ? 0 : wx === '曇' ? 0.45 : wx === '小雨' ? 0.7 : 1;
    const sunDir = new THREE.Vector3(-0.45, 0.62, 0.35).normalize();
    this.sunDir = sunDir;
    S.add(this.sky = skyMesh(sunDir, { cloud: cloudy, night: night ? 1 : 0, dark: wx === '雨' ? 0.25 : 0 }));
    // 空を写した環境光（毛づや・勝負服・柵がそれらしく光る）
    try {
      const envS = new THREE.Scene();
      envS.add(skyMesh(sunDir, { cloud: cloudy, night: night ? 1 : 0, dark: wx === '雨' ? 0.25 : 0 }));
      const gnd = new THREE.Mesh(new THREE.PlaneGeometry(400, 400), new THREE.MeshBasicMaterial({ color: night ? 0x0c140c : 0x35552a })); gnd.rotation.x = -Math.PI / 2; gnd.position.y = -3; envS.add(gnd);
      const pm = new THREE.PMREMGenerator(this.renderer);
      this.envRT = pm.fromScene(envS, 0.02, 0.1, 500); pm.dispose();
      S.environment = this.envRT.texture; S.environmentIntensity = night ? 0.35 : 0.55;
    } catch (e) { console.warn(e); }
    const hemiI = night ? 0.16 : 0.85 - cloudy * 0.15;
    S.add(new THREE.HemisphereLight(night ? 0x8090c0 : 0xd6e8ff, 0x52602f, hemiI));
    const sun = new THREE.DirectionalLight(night ? 0xdfe6ff : 0xfff0d8, night ? 0.9 : 2.6 * (1 - cloudy * 0.6));
    sun.castShadow = true;
    if ('intensity' in sun.shadow) sun.shadow.intensity = night ? 0.8 : 0.62;
    const hi = !this.opts.lowPower;
    sun.shadow.mapSize.set(hi ? 2048 : 1024, hi ? 2048 : 1024);
    const sc = sun.shadow.camera; sc.left = -30; sc.right = 30; sc.top = 30; sc.bottom = -30; sc.near = 1; sc.far = 220;
    sun.shadow.bias = -0.0004; sun.shadow.normalBias = 0.03;
    S.add(sun); S.add(sun.target); this.sun = sun;

    // 地面
    const gt = grassTex(); gt.repeat.set(600, 600);
    const ground = new THREE.Mesh(new THREE.PlaneGeometry(5000, 5000), new THREE.MeshStandardMaterial({ map: gt, roughness: 0.95, color: TRACK.abroad === 'ドバイ' || TRACK.abroad === 'サウジアラビア' ? 0xd8c090 : 0xffffff }));
    ground.rotation.x = -Math.PI / 2; ground.position.y = -0.02; ground.receiveShadow = true; S.add(ground);

    const isTurf = this.race.surf !== 'ダ';
    const tint = wet ? 0x9aa08a : wx === '雪' ? 0xf0f4f8 : 0xffffff;
    const tt = isTurf ? turfTex() : dirtTex();
    const main = new THREE.Mesh(loopStrip(-1.5, W + 1.2, 0.01, 0.01, 2, 13, 2.1), new THREE.MeshStandardMaterial({ map: tt, bumpMap: tt.bump, bumpScale: isTurf ? 1.4 : 2.2, color: isTurf ? tint : (wet ? 0x7a6a5a : tint), roughness: wet ? 0.38 : isTurf ? 0.88 : 0.97, metalness: wet ? 0.12 : 0 }));
    main.receiveShadow = true; S.add(main);
    const it = isTurf ? dirtTex() : turfTex();
    const inner = new THREE.Mesh(loopStrip(-26, -4, 0.008, 0.008, 3, 13, 1.7), new THREE.MeshStandardMaterial({ map: it, bumpMap: it.bump, bumpScale: 1.2, roughness: 1 }));
    inner.receiveShadow = true; S.add(inner);
    if (TRACK.base || elev(0) || elev(TRACK.P / 2)) {
      const grassM = new THREE.MeshStandardMaterial({ color: 0x4a7a32, roughness: 1, side: THREE.DoubleSide });
      S.add(new THREE.Mesh(skirt(-27), grassM), new THREE.Mesh(skirt(W + 3.2), grassM));
      S.add(new THREE.Mesh(loopStrip(-4, -1.5, 0.009, 0.009, 3, 13, 1), grassM));
      S.add(new THREE.Mesh(loopStrip(W + 1.2, W + 3.2, 0.006, 0.006, 3, 13, 1), grassM));
    }

    // ラチ（柵）
    const white = new THREE.MeshStandardMaterial({ color: 0xf4f4f4, roughness: 0.35, side: THREE.DoubleSide });
    const rail = (d, h) => {
      S.add(new THREE.Mesh(loopStrip(d, d, h - 0.14, h, 2), white));
      S.add(new THREE.Mesh(loopStrip(d - 0.07, d + 0.07, h, h, 2), white));
      const n = Math.floor(P / 3.2);
      const post = new THREE.InstancedMesh(new THREE.BoxGeometry(0.07, h, 0.07), white, n);
      const m = new THREE.Matrix4();
      for (let i = 0; i < n; i++) { trackPos(i * 3.2, d, tmp); m.makeTranslation(tmp.x, tmp.y + h / 2, tmp.z); post.setMatrixAt(i, m); }
      S.add(post);
    };
    rail(-0.15, 1.05); rail(W + 0.4, 1.05); rail(-4, 1.0); rail(-26, 0.9);
    const hedge = new THREE.MeshStandardMaterial({ color: 0x2f5a26, roughness: 1, side: THREE.DoubleSide });
    S.add(new THREE.Mesh(loopStrip(W + 2.6, W + 2.6, 0, 1.4, 4), hedge));
    S.add(new THREE.Mesh(loopStrip(W + 2.3, W + 2.9, 1.4, 1.4, 4), hedge));

    // ハロン棒
    for (let m = 200; m <= 3600; m += 200) {
      if (m > P * 1.9) break;
      const u = TRACK.finishU - m;
      trackPos(u, -0.6, tmp);
      const grp = new THREE.Group();
      const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 3.2, 8), new THREE.MeshStandardMaterial({ color: m % 1000 === 0 ? 0xd42a2a : 0xffffff }));
      pole.position.y = 1.6; grp.add(pole);
      if (m <= 1600) {
        const sign = new THREE.Mesh(new THREE.PlaneGeometry(1.4, 0.8), new THREE.MeshBasicMaterial({ map: textTex(String(m), { w: 256, h: 140, bg: '#ffffff', fg: '#d42a2a', border: '#d42a2a' }), side: THREE.DoubleSide }));
        sign.position.y = 3.1; sign.rotation.y = Math.atan2(-tmp.hz, tmp.hx) + Math.PI / 2; grp.add(sign);
      }
      grp.position.set(tmp.x, tmp.y, tmp.z); S.add(grp);
    }
    // ゴール板
    trackPos(TRACK.finishU, -0.8, tmp);
    const goal = new THREE.Group();
    const gpole = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 5, 10), new THREE.MeshStandardMaterial({ color: 0xffffff })); gpole.position.y = 2.5; goal.add(gpole);
    const disk = new THREE.Mesh(new THREE.CylinderGeometry(0.9, 0.9, 0.08, 24), new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.2, metalness: 0.4 }));
    disk.rotation.x = Math.PI / 2; disk.position.y = 5.2; goal.add(disk);
    const dsk2 = new THREE.Mesh(new THREE.CircleGeometry(0.55, 24), new THREE.MeshBasicMaterial({ color: 0xd42a2a })); dsk2.position.set(0, 5.2, 0.05); goal.add(dsk2);
    const dsk3 = dsk2.clone(); dsk3.position.z = -0.05; dsk3.rotation.y = Math.PI; goal.add(dsk3);
    goal.position.set(tmp.x, tmp.y, tmp.z); S.add(goal);
    const a = trackPos(TRACK.finishU, 0, {}), b = trackPos(TRACK.finishU, W, {});
    const line = new THREE.Mesh(new THREE.PlaneGeometry(0.25, W), new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.7 }));
    line.rotation.x = -Math.PI / 2; line.position.set(a.x, a.y + 0.03, (a.z + b.z) / 2); S.add(line);

    // スタンド
    const kind = TRACK.stand;
    const big = kind === 'big' || kind === 'night' || kind === 'city';
    const sy = trackPos(TRACK.finishU, W, {}).y;
    const zS = R + W + 14;
    const x0 = -Ls * (big ? 0.48 : 0.3), x1 = Ls * (big ? 0.52 : 0.42), len = x1 - x0, cx = (x0 + x1) / 2;
    this.standX = [x0, x1];
    if (kind !== 'none') {
      const H = big ? 1 : 0.55;
      const stand = new THREE.Group(); stand.position.y = sy; S.add(stand);
      const apron = new THREE.Mesh(new THREE.PlaneGeometry(len + 40, 16), new THREE.MeshStandardMaterial({ color: 0x9a9a94, roughness: 1 }));
      apron.rotation.x = -Math.PI / 2; apron.position.set(cx, 0.01, R + W + 6); apron.receiveShadow = true; stand.add(apron);
      const ct = crowdTex(); ct.repeat.set(len / 24, 3); this.crowdT = ct;
      const seats = new THREE.Mesh(new THREE.PlaneGeometry(len, 46 * H), new THREE.MeshStandardMaterial({ map: ct, roughness: 1, emissive: night ? 0x222222 : 0x000000 }));
      seats.rotation.x = -Math.PI / 2 - 0.55; seats.position.set(cx, 11 * H, zS + 19 * H); stand.add(seats);
      const bt = buildingTex(); bt.repeat.set(len / 30, 1);
      const wallC = kind === 'paris' ? 0xe9dcc4 : 0xcfd3d8;
      const bld = new THREE.Mesh(new THREE.BoxGeometry(len, 16 * H, 20 * H), [
        new THREE.MeshStandardMaterial({ color: wallC }), new THREE.MeshStandardMaterial({ color: wallC }),
        new THREE.MeshStandardMaterial({ color: wallC }), new THREE.MeshStandardMaterial({ color: wallC }),
        new THREE.MeshStandardMaterial({ map: bt, emissive: night ? 0xffe0a0 : 0x000000, emissiveIntensity: night ? 0.35 : 0, emissiveMap: night ? bt : null }), new THREE.MeshStandardMaterial({ color: wallC })]);
      bld.position.set(cx, 30 * H, zS + 48 * H); stand.add(bld);
      const roof = new THREE.Mesh(new THREE.BoxGeometry(len + 10, 1.2, 46 * H), new THREE.MeshStandardMaterial({ color: kind === 'paris' ? 0x6b4a3a : 0xe8ecef, roughness: 0.4, metalness: 0.3 }));
      roof.position.set(cx, 39 * H, zS + 26 * H); roof.rotation.x = 0.08; stand.add(roof);
      for (let x = x0 + 10; x < x1; x += 40) {
        const col = new THREE.Mesh(new THREE.CylinderGeometry(0.6, 0.6, 30 * H, 8), new THREE.MeshStandardMaterial({ color: 0xdddddd }));
        col.position.set(x, 15 * H, zS + 36 * H); stand.add(col);
      }
      const sct = standingCrowdTex(); sct.repeat.set(len / 60, 1); this.standT = sct;
      const crowdMat = new THREE.MeshStandardMaterial({ map: sct, transparent: true, alphaTest: 0.4, side: THREE.DoubleSide, roughness: 1, emissive: night ? 0x333333 : 0x000000 });
      for (const [dz, s, y0] of [[R + W + 5.5, 2.1, 0.2], [R + W + 9, 2.3, 0.9], [R + W + 12.5, 2.5, 1.7]]) {
        const cr = new THREE.Mesh(new THREE.PlaneGeometry(len, s), crowdMat);
        cr.position.set(cx, y0 + s / 2, dz); stand.add(cr);
        const step = new THREE.Mesh(new THREE.BoxGeometry(len, y0 + 0.01, 3.5), new THREE.MeshStandardMaterial({ color: 0x8d8d88 }));
        step.position.set(cx, (y0 + 0.01) / 2, dz + 1.2); stand.add(step);
      }
    }
    // 夜のナイター照明
    if (night) {
      const poleM = new THREE.MeshStandardMaterial({ color: 0x666666 });
      const lampM = new THREE.MeshBasicMaterial({ color: 0xfff6dd });
      for (let i = 0; i < 16; i++) {
        trackPos((i / 16) * P, i % 2 ? W + 12 : -34, tmp);
        const pl = new THREE.Mesh(new THREE.CylinderGeometry(0.6, 0.8, 40, 8), poleM); pl.position.set(tmp.x, 20, tmp.z); S.add(pl);
        const lp = new THREE.Mesh(new THREE.BoxGeometry(6, 3, 1), lampM); lp.position.set(tmp.x, 41, tmp.z); lp.lookAt(0, 0, 0); S.add(lp);
      }
      this.flood = new THREE.PointLight(0xfff2d8, 2.2, 160, 1.2); S.add(this.flood);
    }
    // ターフビジョン
    const tvGroup = new THREE.Group();
    const tvTex = textTex(this.opts.title || '死ぬか生きるかの戦い', { w: 1024, h: 256, bg: '#0b1a2e', fg: '#ffd34d', size: 110 });
    const tv = new THREE.Mesh(new THREE.PlaneGeometry(60, 15), new THREE.MeshBasicMaterial({ map: tvTex, toneMapped: false }));
    tv.position.y = 16; tvGroup.add(tv);
    const frame = new THREE.Mesh(new THREE.BoxGeometry(63, 18, 1.5), new THREE.MeshStandardMaterial({ color: 0x222222 })); frame.position.set(0, 16, -0.9); tvGroup.add(frame);
    for (const x of [-20, 20]) { const leg = new THREE.Mesh(new THREE.BoxGeometry(1.5, 8, 1.5), new THREE.MeshStandardMaterial({ color: 0x555555 })); leg.position.set(x, 4, -0.9); tvGroup.add(leg); }
    tvGroup.position.set(Ls * 0.12, 0, R - 70); if (kind !== 'none') S.add(tvGroup);
    if (TRACK.name === '東京' || kind === 'paris') {
      const pond = new THREE.Mesh(new THREE.CircleGeometry(40, 32), new THREE.MeshStandardMaterial({ color: 0x3a6f8f, roughness: 0.08, metalness: 0.4 }));
      pond.rotation.x = -Math.PI / 2; pond.scale.set(Math.min(2.2, Ls / 230), 1, 1); pond.position.set(-Ls * 0.12, 0.03, -20); S.add(pond);
    }
    // 木
    const trunkG = new THREE.CylinderGeometry(0.3, 0.45, 4, 6); trunkG.translate(0, 2, 0);
    const leafG = mergeGeometries([[3.4, 4.2, 5.5], [2.7, 3.6, 8], [1.9, 3, 10.3]].map(([r, h, y]) => { const c = new THREE.ConeGeometry(r, h, 10); c.translate(0, y, 0); return c.toNonIndexed(); }));
    const leafG2 = (() => { // いくつかの球を合わせたふんわりした木
      const parts = [[0, 6.6, 0, 3.0], [1.8, 5.6, 0.6, 2.2], [-1.6, 5.8, -0.5, 2.3], [0.4, 8.2, -0.6, 2.2], [-0.3, 5.4, 1.7, 2.0], [0.5, 5.6, -1.8, 2.0]];
      const gs = parts.map(([x, y, z, r]) => { const q = new THREE.IcosahedronGeometry(r, 2); const a = q.attributes.position; for (let i = 0; i < a.count; i++) { const k = 1 + (Math.sin(a.getX(i) * 3.1 + a.getY(i) * 2.3) * Math.cos(a.getZ(i) * 2.7)) * 0.1; a.setXYZ(i, a.getX(i) * k + x, a.getY(i) * k + y, a.getZ(i) * k + z); } q.computeVertexNormals(); return q; });
      return mergeGeometries(gs);
    })();
    const trees = [];
    const desert = TRACK.abroad === 'ドバイ' || TRACK.abroad === 'サウジアラビア';
    const nTree = desert ? 120 : kind === 'paris' ? 800 : 520;
    for (let i = 0; i < nTree; i++) {
      const u = Math.random() * P;
      const d = W + 14 + Math.random() * 160;
      trackPos(u, d, tmp);
      if (tmp.z > R && tmp.x > x0 - 30 && tmp.x < x1 + 30) continue;
      trees.push([tmp.x, tmp.z, 0.7 + Math.random() * 0.8, desert ? 2 : Math.random() < 0.5 ? 1 : 0]);
    }
    for (let i = 0; i < 60; i++) {
      const x = (Math.random() - 0.5) * (Ls + 60), z = (Math.random() - 0.5) * (R * 1.2);
      if (Math.abs(x - Ls * 0.12) < 50 && z > R - 100) continue;
      if (Math.hypot((x + Ls * 0.12) / 2.2, z + 20) < 45) continue;
      trees.push([x, z, 0.5 + Math.random() * 0.6, desert ? 2 : 1]);
    }
    const trunkM = new THREE.InstancedMesh(trunkG, new THREE.MeshStandardMaterial({ color: 0x4a3524 }), trees.length);
    const coneT = trees.filter(t => t[3] === 0), roundT = trees.filter(t => t[3] === 1), palmT = trees.filter(t => t[3] === 2);
    const coneM = new THREE.InstancedMesh(leafG, new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.95 }), Math.max(1, coneT.length));
    const roundM = new THREE.InstancedMesh(leafG2, new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.95 }), Math.max(1, roundT.length));
    const palmG = new THREE.ConeGeometry(4, 2.5, 7); palmG.translate(0, 9, 0);
    const palmM = new THREE.InstancedMesh(palmG, new THREE.MeshStandardMaterial({ color: 0x4f7a2a, roughness: 1 }), Math.max(1, palmT.length));
    const m = new THREE.Matrix4(), q = new THREE.Quaternion(), sv = new THREE.Vector3();
    trees.forEach((t, i) => { sv.set(t[2], t[2] * (t[3] === 2 ? 2.2 : 1), t[2]); m.compose(new THREE.Vector3(t[0], 0, t[1]), q, sv); trunkM.setMatrixAt(i, m); });
    coneT.forEach((t, i) => { sv.setScalar(t[2]); m.compose(new THREE.Vector3(t[0], 0, t[1]), q, sv); coneM.setMatrixAt(i, m); });
    roundT.forEach((t, i) => { sv.set(t[2], t[2] * (0.8 + Math.random() * 0.4), t[2]); m.compose(new THREE.Vector3(t[0], 0, t[1]), q, sv); roundM.setMatrixAt(i, m); });
    palmT.forEach((t, i) => { sv.setScalar(t[2]); m.compose(new THREE.Vector3(t[0], 0, t[1]), q, sv); palmM.setMatrixAt(i, m); });
    { const cc = new THREE.Color(); const snow = wx === '雪';
      coneT.forEach((t, i) => { cc.setHSL(0.3 + Math.random() * 0.06, 0.45, snow ? 0.75 : 0.16 + Math.random() * 0.08); coneM.setColorAt(i, cc); });
      roundT.forEach((t, i) => { cc.setHSL(0.2 + Math.random() * 0.12, 0.42 + Math.random() * 0.15, snow ? 0.8 : 0.22 + Math.random() * 0.1); roundM.setColorAt(i, cc); }); }
    if (!coneT.length) coneM.count = 0; if (!roundT.length) roundM.count = 0; if (!palmT.length) palmM.count = 0;
    S.add(trunkM, coneM, roundM, palmM);
    // 遠くの山・街
    // 山なみ：遠い列と近い列の2重。ノイズで稜線を作り、遠いほど青くかすむ
    const ridge = (R0, hBase, hVar, col, seed, yb) => {
      const N = 360, pos = [], idx = [], cols = [];
      const haze = new THREE.Color(this.scene.fog ? this.scene.fog.color : 0xdfe8f0), wet = ['雨', '雪', '小雨'].includes(wx) ? 0.55 : 0;
      const c0 = new THREE.Color(col).lerp(haze, wet), c1 = new THREE.Color(col).lerp(haze, 0.35 + wet * 0.5);
      let a1 = seed * 3.1, a2 = seed * 7.7;
      for (let i = 0; i <= N; i++) {
        const th = (i / N) * Math.PI * 2;
        const n = Math.sin(th * 3 + a1) * 0.45 + Math.sin(th * 7 + a2) * 0.3 + Math.sin(th * 17 + a1 * 2) * 0.15 + Math.sin(th * 41 + a2) * 0.06;
        const h = Math.max(8, hBase + n * hVar);
        const x = Math.cos(th) * R0, z = Math.sin(th) * R0;
        pos.push(x, yb, z, x * 1.02, yb + h, z * 1.02);
        cols.push(c0.r, c0.g, c0.b, c1.r, c1.g, c1.b);
      }
      for (let i = 0; i < N; i++) { const a = i * 2; idx.push(a, a + 2, a + 1, a + 1, a + 2, a + 3); }
      const geo = new THREE.BufferGeometry(); geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); geo.setAttribute('color', new THREE.Float32BufferAttribute(cols, 3)); geo.setIndex(idx); geo.computeVertexNormals();
      const msh = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ vertexColors: true, side: THREE.DoubleSide, fog: false }));
      msh.frustumCulled = false; return msh;
    };
    const far = desert ? 0xc9b48e : kind === 'city' ? 0x7b93a8 : night ? 0x1c2433 : 0x8ea7c0;
    const near = desert ? 0xb69a72 : kind === 'city' ? 0x5c7f68 : night ? 0x141c18 : 0x5f8070;
    S.add(ridge(2300, desert ? 40 : 170, desert ? 30 : 140, far, 1.3, -20));
    S.add(ridge(1500, desert ? 18 : 70, desert ? 15 : 55, near, 4.7, -10));
    if (kind === 'city' || kind === 'night') {
      const bm = new THREE.MeshStandardMaterial({ color: 0x9aa4ae, roughness: 0.4, metalness: 0.4, emissive: night ? 0x334466 : 0x000000 });
      const box = new THREE.BoxGeometry(1, 1, 1); box.translate(0, 0.5, 0);
      const n = 90, im = new THREE.InstancedMesh(box, bm, n);
      for (let i = 0; i < n; i++) {
        const ang = Math.random() * Math.PI * 2, dist = 600 + Math.random() * 700;
        m.compose(new THREE.Vector3(Math.cos(ang) * dist, 0, Math.sin(ang) * dist), q, sv.set(20 + Math.random() * 30, 40 + Math.random() * (kind === 'city' ? 220 : 120), 20 + Math.random() * 30));
        im.setMatrixAt(i, m);
      }
      S.add(im);
    }
    if (kind === 'paris') {
      // ロンシャンの風車
      const wm = new THREE.Group();
      const body = new THREE.Mesh(new THREE.CylinderGeometry(4, 6, 18, 12), new THREE.MeshStandardMaterial({ color: 0xe9e2d0 })); body.position.y = 9; wm.add(body);
      const cap = new THREE.Mesh(new THREE.ConeGeometry(5, 5, 12), new THREE.MeshStandardMaterial({ color: 0x5a3a2a })); cap.position.y = 20.5; wm.add(cap);
      const blades = new THREE.Group(); blades.position.set(0, 18, 5.5); wm.add(blades);
      for (let k = 0; k < 4; k++) { const bl = new THREE.Mesh(new THREE.BoxGeometry(1.6, 14, 0.3), new THREE.MeshStandardMaterial({ color: 0x8a6a4a })); bl.position.y = 7; const g2 = new THREE.Group(); g2.rotation.z = k * Math.PI / 2; g2.add(bl); blades.add(g2); }
      this.windmill = blades;
      trackPos(TRACK.P * 0.55, -60, tmp); wm.position.set(tmp.x, 0, tmp.z); S.add(wm);
    }
    this.buildGate();
  }

  // 雨・雪の粒
  weatherFx() {
    const wx = this.wx;
    if (!['小雨', '雨', '雪'].includes(wx)) return;
    const N = wx === '雨' ? 2600 : wx === '小雨' ? 1200 : 1500;
    const pos = new Float32Array(N * 3);
    for (let i = 0; i < N; i++) { pos[i * 3] = (Math.random() - 0.5) * 80; pos[i * 3 + 1] = Math.random() * 30; pos[i * 3 + 2] = (Math.random() - 0.5) * 80; }
    const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    const snow = wx === '雪';
    const mat = new THREE.PointsMaterial({ color: snow ? 0xffffff : 0xdfe8f6, size: snow ? 0.12 : 0.09, transparent: true, opacity: snow ? 0.95 : 0.85, sizeAttenuation: true, depthWrite: false });
    this.rain = new THREE.Points(g, mat); this.rain.frustumCulled = false; this.rainSpeed = snow ? 2.2 : 18;
    this.scene.add(this.rain);
  }

  buildGate() {
    const race = this.race;
    const n = race.racers.length;
    const g = new THREE.Group();
    const green = new THREE.MeshStandardMaterial({ color: 0x2f9a44, roughness: 0.45, metalness: 0.2 });
    const grey = new THREE.MeshStandardMaterial({ color: 0xcfcfcf, roughness: 0.5 });
    const white = new THREE.MeshStandardMaterial({ color: 0xf4f6f2, roughness: 0.5 });
    trackPos(race.u0 + 1.6, 0, tmp);
    const ang = Math.atan2(-tmp.hz, tmp.hx), gy = tmp.y;
    for (let i = 0; i <= n; i++) {
      const d = 0.5 + i * 1.25;
      const p = trackPos(race.u0 + 1.6, d, {});
      // 仕切り：緑の鉄骨の枠＋白い板（トラス）
      const fr = new THREE.Group(); fr.position.set(p.x, gy, p.z); fr.rotation.y = ang;
      const bar = (w, h, x, y, rz = 0) => { const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, 0.09), green); m.position.set(x, y, 0); m.rotation.z = rz; fr.add(m); };
      bar(0.1, 2.5, -1.25, 1.25); bar(0.1, 2.5, 1.25, 1.25); bar(2.6, 0.1, 0, 2.45); bar(2.6, 0.1, 0, 1.3); bar(2.6, 0.1, 0, 0.4);
      bar(0.07, 1.55, -0.6, 1.85, 0.75); bar(0.07, 1.55, 0.6, 1.85, -0.75);
      const pn = new THREE.Mesh(new THREE.BoxGeometry(2.4, 0.85, 0.04), white); pn.position.set(0, 0.85, 0); fr.add(pn);
      g.add(fr);
    }
    const a = trackPos(race.u0 + 1.6, 0.5, {}), b = trackPos(race.u0 + 1.6, 0.5 + n * 1.25, {});
    const beam = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.6, n * 1.25 + 0.4), green);
    beam.position.set((a.x + b.x) / 2, gy + 2.7, (a.z + b.z) / 2); beam.rotation.y = ang; g.add(beam);
    // 前に向けて板を置く（ゲートの正面側）
    const front = (mesh, d, y, off = 0.27, both = true) => {
      // 前と後ろの両方に置く（正面からも騎手視点からも読めるように）
      for (const sd of both ? [1, -1] : [1]) {
        const m2 = sd === 1 ? mesh : mesh.clone();
        const q = trackPos(race.u0 + 1.6, d, {});
        m2.position.set(q.x + sd * Math.cos(ang) * off, gy + y, q.z - sd * Math.sin(ang) * off);
        m2.rotation.y = ang + (sd === 1 ? Math.PI / 2 : -Math.PI / 2);
        if (m2.material && m2.material.side === THREE.DoubleSide) m2.material = m2.material.clone(), m2.material.side = THREE.FrontSide;
        g.add(m2);
      }
    };
    // 黄色い馬番の板
    for (let i = 0; i < n; i++) {
      const num = race.racers.slice().sort((x, y) => x.gate - y.gate)[i]?.num ?? i + 1;
      const pt = textTex(String(i + 1), { w: 128, h: 128, bg: '#f5c800', fg: '#111111', size: 92 });
      front(new THREE.Mesh(new THREE.PlaneGeometry(0.8, 0.5), new THREE.MeshBasicMaterial({ map: pt, side: THREE.DoubleSide })), 0.5 + (i + 0.5) * 1.25, 2.7);
    }
    // 赤い横断幕（レース名）
    const title = this.opts.title || '死ぬか生きるかの戦い';
    const bt = textTex(title, { w: 1024, h: 128, bg: '#c4161c', fg: '#ffe9a8', size: 80 });
    const bw = Math.min(n * 1.25 * 0.8, 9);
    front(new THREE.Mesh(new THREE.PlaneGeometry(bw, 0.75), new THREE.MeshBasicMaterial({ map: bt, side: THREE.DoubleSide })), 0.5 + n * 1.25 / 2, 3.45, 0.2, false);
    for (const e of [-1, 1]) { const q = trackPos(race.u0 + 1.6, 0.5 + n * 1.25 / 2 + e * bw / 2, {}); const pole = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.9, 0.08), grey); pole.position.set(q.x, gy + 3.25, q.z); g.add(pole); }
    this.scene.add(g); this.gate = g;
  }

  buildHorses() {
    this.models = [];
    const blob = new THREE.MeshBasicMaterial({ map: blobTex(), transparent: true, depthWrite: false });
    for (const r of this.race.racers) {
      const coat = COAT[r.coat ?? 0];
      const H = buildHorse(coat, r.silk ?? 0xffffff, r.num, { shadow: true, cap: r.cap });
      const sh = new THREE.Mesh(new THREE.PlaneGeometry(3.0, 1.2), blob);
      sh.rotation.x = -Math.PI / 2; sh.position.y = 0.03; H.root.add(sh);
      this.scene.add(H.root);
      H.r = r;
      this.models.push(H);
      if (r.isPlayer) this.player = H;
    }
    // 一人称：自分の騎手の腕・手綱・ムチ
    const P = this.player;
    if (P) {
      this.rig = new THREE.Group();
      P.bodyG.add(this.rig);
      this.rig.position.set(0.12, 2.55, 0);
      this.rig.add(this.camera);
      const silk = P.silk;
      const glove = new THREE.MeshStandardMaterial({ color: 0xf5f5f5, roughness: 0.7 });
      this.arms = [];
      for (const s of [1, -1]) {
        const arm = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.055, 1, 10), silk);
        const hand = new THREE.Mesh(new THREE.SphereGeometry(0.055, 10, 8), glove);
        const rein = new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.008, 1, 5), new THREE.MeshStandardMaterial({ color: 0x2a1a0e }));
        P.bodyG.add(arm, hand, rein);
        this.arms.push({ s, arm, hand, rein });
      }
      this.whipStick = new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.014, 0.65, 6), new THREE.MeshStandardMaterial({ color: 0x111111 }));
      P.bodyG.add(this.whipStick);
      this.setView(this.view);
    }
  }

  setView(v) {
    this.view = v;
    const P = this.player; if (!P) return;
    const fp = v === 'fp';
    P.jock.visible = !fp;
    for (const a of this.arms) { a.arm.visible = fp; a.hand.visible = fp; a.rein.visible = true; }
    this.whipStick.visible = fp;
    if (fp) { if (this.camera.parent !== this.rig) this.rig.add(this.camera); this.camera.position.set(0, 0, 0); }
    else { this.scene.add(this.camera); }
  }

  particles() {
    const N = 1400;
    const geo = new THREE.BufferGeometry();
    this.pPos = new Float32Array(N * 3); this.pVel = new Float32Array(N * 3); this.pLife = new Float32Array(N); this.pCol = new Float32Array(N * 3);
    geo.setAttribute('position', new THREE.BufferAttribute(this.pPos, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(this.pCol, 3));
    const isTurf = this.race.surf !== 'ダ';
    this.isTurf = isTurf;
    const dot = document.createElement('canvas'); dot.width = dot.height = 32; { const x = dot.getContext('2d'); x.fillStyle = '#fff'; x.beginPath(); x.arc(16, 16, 12, 0, 7); x.fill(); }
    this.pts = new THREE.Points(geo, new THREE.PointsMaterial({ vertexColors: true, size: isTurf ? 0.09 : 0.08, sizeAttenuation: true, map: new THREE.CanvasTexture(dot), alphaTest: 0.5 }));
    this.pts.frustumCulled = false;
    this.scene.add(this.pts); this.pN = N; this.pI = 0;
    // 砂ぼこり（ダートは大きく、乾いた芝は少し）
    const wet = ['小雨', '雨', '雪'].includes(this.wx) || ['重', '不良'].includes(this.race.going);
    this.puffRate = isTurf ? (wet ? 0 : 0.25) : (wet ? 0.35 : 1);
    const ptx = puffTex();
    this.puffs = [];
    const pc = isTurf ? 0xb8b090 : this.night ? 0x9a8a78 : 0xc8a47c;
    for (let i = 0; i < (this.opts.lowPower ? 40 : 90); i++) {
      const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: ptx, color: pc, transparent: true, opacity: 0, depthWrite: false, fog: true }));
      sp.visible = false; this.scene.add(sp); this.puffs.push({ sp, life: 0, max: 1, vx: 0, vz: 0 });
    }
    this.puffI = 0;
    // 近くの草（立体）：選手の前後だけに置いて、通り過ぎたら前へ回す
    const tt = tuftTex();
    const tg = new THREE.PlaneGeometry(0.5, 0.32); tg.translate(0, 0.16, 0);
    const tg2 = tg.clone(); tg2.rotateY(Math.PI / 2);
    const geoT = mergeTwo(tg, tg2);
    { const nr = geoT.attributes.normal.array; for (let i = 0; i < nr.length; i += 3) { nr[i] = 0; nr[i + 1] = 1; nr[i + 2] = 0; } } // 上向きの光で明るく
    const n = this.opts.lowPower ? 900 : 2600;
    const tm = new THREE.MeshStandardMaterial({ map: tt, alphaTest: 0.4, side: THREE.DoubleSide, roughness: 1, color: this.wx === '雪' ? 0xdfe6e0 : 0xd8f0c0 });
    this.tufts = new THREE.InstancedMesh(geoT, tm, n); this.tufts.frustumCulled = false;
    this.tuftD = [];
    const zones = [[W + 1.3, W + 2.4, 1.1], [-3.8, -1.7, 0.85], [W + 3, W + 10, 1.5]];
    for (let i = 0; i < n; i++) {
      const z = zones[i % zones.length];
      this.tuftD.push({ u: Math.random() * 90 - 20, d: z[0] + Math.random() * (z[1] - z[0]), s: z[2] * (0.6 + Math.random() * 0.7), ry: Math.random() * 3.14, dirty: true });
    }
    this.scene.add(this.tufts); this.tuftBase = null;
  }
  updateTufts(pu) {
    const m = new THREE.Matrix4(), q = new THREE.Quaternion(), sc = new THREE.Vector3(), pos = new THREE.Vector3(), e = new THREE.Euler();
    if (this.tuftBase == null) { for (const t of this.tuftD) t.u += pu; this.tuftBase = pu; }
    let ch = false;
    this.tuftD.forEach((t, i) => {
      while (t.u < pu - 20) { t.u += 90; t.dirty = true; }
      while (t.u > pu + 70) { t.u -= 90; t.dirty = true; }
      if (!t.dirty) return;
      t.dirty = false; ch = true;
      trackPos(t.u, t.d, tmp);
      pos.set(tmp.x, (tmp.y || 0) + 0.01, tmp.z); e.set(0, t.ry, 0); q.setFromEuler(e); sc.set(t.s, t.s * (0.8 + (i % 5) * 0.1), t.s);
      m.compose(pos, q, sc); this.tufts.setMatrixAt(i, m);
    });
    if (ch) this.tufts.instanceMatrix.needsUpdate = true;
  }
  puff(x, y, z, vx, vz, big) {
    const P = this.puffs[this.puffI]; this.puffI = (this.puffI + 1) % this.puffs.length;
    P.sp.position.set(x, y + 0.4, z); P.vx = vx; P.vz = vz; P.max = P.life = 1.2 + Math.random() * 0.9; P.big = big;
    P.sp.visible = true; P.sp.material.rotation = Math.random() * 6;
  }
  emit(x, y, z, vx, vz) {
    const i = this.pI; this.pI = (this.pI + 1) % this.pN;
    const turfBit = this.isTurf && Math.random() < 0.55;
    const c = turfBit ? [0.2 + Math.random() * 0.1, 0.36 + Math.random() * 0.15, 0.12] : [0.36 + Math.random() * 0.12, 0.25 + Math.random() * 0.08, 0.15];
    this.pCol[i * 3] = c[0]; this.pCol[i * 3 + 1] = c[1]; this.pCol[i * 3 + 2] = c[2]; this.pDirty = true;
    this.pPos[i * 3] = x; this.pPos[i * 3 + 1] = y; this.pPos[i * 3 + 2] = z;
    this.pVel[i * 3] = vx + (Math.random() - 0.5) * 1.5; this.pVel[i * 3 + 1] = 1.5 + Math.random() * 2.5; this.pVel[i * 3 + 2] = vz + (Math.random() - 0.5) * 1.5;
    this.pLife[i] = 0.7 + Math.random() * 0.4;
  }

  onWhip() { this.whipAnim = 0.32; this.shake = 0.12; }

  update(dt) {
    this.t += dt;
    const camPos = new THREE.Vector3();
    for (const H of this.models) {
      const r = H.r;
      const p = trackPos(r.u, r.d, tmp);
      const ang = Math.atan2(-p.hz, p.hx);
      const lat = (r.d - (H.lastD ?? r.d)) / Math.max(dt, 1e-3);
      H.lastD = r.d;
      H.yaw = (H.yaw ?? 0) * 0.85 + (-Math.atan2(lat, Math.max(r.v, 3))) * 0.15;
      H.root.position.set(p.x, p.y || 0, p.z);
      H.root.rotation.y = ang + H.yaw;
      if (r.fallen && H.jock.visible) { H.jock.visible = false; }
      if (H.coatMat) { const gl = r.godT > 0 ? Math.min(1, r.godT) : 0; if (gl || H._gl) { H.coatMat.emissive.setRGB(0.9 * gl, 0.65 * gl, 0.1 * gl); H._gl = gl; } }
      const ph = animateHorse(H, r.stride, r.v, this.t);
      // 蹄の跡（土や芝が飛ぶ）
      if (r.v > 8) {
        const step = Math.floor(ph / Math.PI);
        if (step !== H.lastStep) {
          H.lastStep = step;
          const cnt = this.race.surf === 'ダ' ? 8 : 5;
          for (let k = 0; k < cnt; k++) this.emit(p.x - p.hx * (0.5 + Math.random()), (p.y || 0) + 0.08, p.z - p.hz * (0.5 + Math.random()), -p.hx * r.v * 0.18, -p.hz * r.v * 0.18);
          if (Math.random() < this.puffRate * 0.5) this.puff(p.x - p.hx * 1.4, p.y || 0, p.z - p.hz * 1.4, -p.hx * r.v * 0.08, -p.hz * r.v * 0.08);
        }
      }
      // 汗：疲れるほど毛づやが濡れて暗く光る
      if (H.coatMat) {
        const tired = 1 - Math.max(0, Math.min(1, r.energy / r.cap / 0.6));
        const sw = Math.min(1, (this.race.t || 0) / 40) * 0.35 + tired * 0.65;
        H.coatMat.roughness = 0.8 - sw * 0.32; if (H.coatMat.sheen != null) H.coatMat.sheen = 1 - sw * 0.5;
        H.coatMat.color.copy(H.coatBase).multiplyScalar(1 - sw * 0.18);
      }
    }
    // 砂ぼこり
    for (const P of this.puffs) {
      if (P.life <= 0) { if (P.sp.visible) P.sp.visible = false; continue; }
      P.life -= dt; const k = 1 - P.life / P.max;
      P.sp.position.x += P.vx * dt; P.sp.position.z += P.vz * dt; P.sp.position.y += dt * 0.35;
      const sz = (P.big ? 1.2 : 0.8) + k * (P.big ? 4 : 2.6); P.sp.scale.set(sz, sz * 0.75, 1);
      P.sp.material.opacity = Math.sin(Math.min(1, k * 3) * Math.PI / 2) * (1 - k) * (this.isTurf ? 0.35 : 0.6);
    }
    // 粒子
    for (let i = 0; i < this.pN; i++) {
      if (this.pLife[i] <= 0) { this.pPos[i * 3 + 1] = -10; continue; }
      this.pLife[i] -= dt;
      this.pVel[i * 3 + 1] -= 9.8 * dt;
      this.pPos[i * 3] += this.pVel[i * 3] * dt; this.pPos[i * 3 + 1] = Math.max(-1, this.pPos[i * 3 + 1] + this.pVel[i * 3 + 1] * dt); this.pPos[i * 3 + 2] += this.pVel[i * 3 + 2] * dt;
    }
    this.pts.geometry.attributes.position.needsUpdate = true;
    if (this.pDirty) { this.pts.geometry.attributes.color.needsUpdate = true; this.pDirty = false; }

    const P = this.player;
    if (P) {
      const r = P.r;
      // 腕と手綱
      const nk = P.neckP;
      nk.updateMatrix(); P.bodyG.updateMatrix();
      this.whipAnim = Math.max(0, this.whipAnim - dt);
      const wa = this.whipAnim > 0 ? Math.sin((1 - this.whipAnim / 0.32) * Math.PI) : 0;
      const push = r.v > 10 ? Math.sin(this.t * 2 * Math.PI * (r.v / (4.2 + r.v * 0.16)) ) * 0.05 : 0;
      for (const A of this.arms) {
        const shoulder = new THREE.Vector3(0.2, 2.25, A.s * 0.2);
        let hand = new THREE.Vector3(0.92 + push, 1.72 + push * 0.4, A.s * 0.11);
        if (A.s > 0 && wa > 0) hand = new THREE.Vector3(0.5 - wa * 0.15, 1.95 + wa * 0.35, 0.36 + wa * 0.1);
        const bitWorld = P.bit.clone().add(new THREE.Vector3(0, 0, A.s * 0.1)).applyMatrix4(nk.matrix);
        stretch(A.arm, shoulder, hand);
        A.hand.position.copy(hand);
        stretch(A.rein, (A.s > 0 && wa > 0) ? new THREE.Vector3(0.92, 1.72, 0.11) : hand, bitWorld);
        if (A.s > 0) {
          // ムチ
          const tip = wa > 0 ? new THREE.Vector3(0.05 - wa * 0.6, 1.6 + wa * 0.2, 0.55) : new THREE.Vector3(1.3, 1.45, 0.28);
          stretch(this.whipStick, hand, tip, 0.65);
        }
      }
      this.updateTufts(r.u);
      if (this.view === 'fp') {
        const bob = P.bodyG.position.y;
        this.shake = Math.max(0, this.shake - dt);
        const sh = this.shake * 0.25;
        this.rig.position.set(0.12, 2.55 - bob * 0.55 + Math.sin(this.t * 40) * sh * 0.1, 0);
        this.camera.rotation.set(-0.13 - P.bodyG.rotation.z * 0.6 + (Math.random() - 0.5) * sh * 0.05, -Math.PI / 2, -P.yaw * 0.5 + (Math.random() - 0.5) * sh * 0.05);
        this.camera.rotation.x -= 0;
        const k = Math.max(0, Math.min(1, (r.v - 12) / 6));
        const baseFov = this.camera.aspect < 1 ? 88 : 64;
        this.camera.fov += ((baseFov + k * 7 + (r.whipT > 0 ? 3 : 0)) - this.camera.fov) * 0.06;
        this.camera.updateProjectionMatrix();
      } else {
        const p = trackPos(r.u, r.d, {});
        const back = this.view === 'tv' ? 0 : 9;
        let target;
        if (this.view === 'orbit') {
          const a = this.t * 0.35;
          camPos.set(p.x + Math.cos(a) * 6.5, (p.y || 0) + 3.2, p.z + Math.sin(a) * 6.5);
          target = new THREE.Vector3(p.x, (p.y || 0) - 0.6, p.z);
          this.camera.position.copy(camPos); this.camera.lookAt(target);
        } else if (this.view === 'hero') {
          // タイトル用：ゲートの正面・低い位置から、飛び出す馬たちを見上げる
          const n = this.race.racers.length, mid = 0.5 + n * 1.25 / 2;
          const q = trackPos(this.race.u0 + (this.heroDist || 9), mid + (this.heroSide || 2.5), {}), f = trackPos(this.race.u0 + 1, mid + (this.heroSide || 2.5) * 0.4, {});
          camPos.set(q.x, (q.y || 0) + (this.heroH || 1.1), q.z);
          target = new THREE.Vector3(f.x, (f.y || 0) + 1.9, f.z);
          this.camera.position.copy(camPos); this.camera.lookAt(target);
          if (Math.abs(this.camera.fov - (this.heroFov || 58)) > 0.1) { this.camera.fov = this.heroFov || 58; this.camera.updateProjectionMatrix(); }
        } else if (this.view === 'front') {
          const q = trackPos(r.u + (this.frontDist || 9), r.d + (this.frontDist || 9) * 0.17, {});
          camPos.set(q.x, (q.y || 0) + 2.1, q.z);
          target = new THREE.Vector3(p.x, (p.y || 0) + 1.5, p.z);
          this.camera.position.copy(camPos); this.camera.lookAt(target);
        } else if (this.view === 'goal') {
          const q = trackPos(TRACK.finishU, W + 4.2, {}), f = trackPos(TRACK.finishU, W * 0.35, {});
          camPos.set(q.x, (q.y || 0) + 2.9, q.z);
          target = new THREE.Vector3(f.x, (f.y || 0) + 1.3, f.z);
          this.camera.position.copy(camPos); this.camera.lookAt(target);
        } else if (this.view === 'tv') {
          const q = trackPos(r.u + 2, r.d + 22, {});
          camPos.set(q.x, (q.y || 0) + 7, q.z);
          target = new THREE.Vector3(p.x, (p.y || 0) + 1.4, p.z);
        } else {
          camPos.set(p.x - p.hx * back + p.nx * 1.5, (p.y || 0) + 4.2, p.z - p.hz * back + p.nz * 1.5);
          target = new THREE.Vector3(p.x + p.hx * 8, (p.y || 0) + 1.4, p.z + p.hz * 8);
        }
        if (this.view !== 'orbit' && this.view !== 'goal' && this.view !== 'front' && this.view !== 'hero') { this.camera.position.lerp(camPos, 1 - Math.exp(-dt * 10)); this.camera.lookAt(target); }
        const wf = this.view === 'hero' ? (this.heroFov || 58) : this.view === 'goal' ? 22 : (this.camera.aspect < 1 ? 90 : 66) - (this.view === 'fp' ? 0 : 6);
        if (Math.abs(this.camera.fov - wf) > 0.1) { this.camera.fov = wf; this.camera.updateProjectionMatrix(); }
      }
      const pp = trackPos(r.u, r.d, {}); const p0y = pp.y;
      this.sun.position.set(pp.x + this.sunDir.x * 100, (pp.y || 0) + this.sunDir.y * 100, pp.z + this.sunDir.z * 100);
      this.sun.target.position.set(pp.x, pp.y || 0, pp.z);
      this.sun.target.updateMatrixWorld();
      this.camera.getWorldPosition(camPos);
      this.sky.position.copy(camPos);
      if (this.flood) this.flood.position.set(camPos.x, camPos.y + 30, camPos.z);
      if (this.windmill) this.windmill.rotation.z += dt * 0.4;
      // 観客：ゴールが近づくと立ち上がって盛り上がる
      if (this.crowdT) {
        let lead = 0; for (const q of this.race.racers) lead = Math.max(lead, q.p || 0);
        const ex = lead > this.race.dist - 450 && lead < this.race.dist + 80 ? 1 : 0.12;
        this.crowdT.offset.y = Math.abs(Math.sin(this.t * 9)) * 0.004 * ex;
        if (this.standT) this.standT.offset.y = -Math.abs(Math.sin(this.t * 7.3)) * 0.035 * ex;
      }
      if (this.rain) {
        const a = this.rain.geometry.attributes.position, arr = a.array, sp = this.rainSpeed;
        for (let i = 0; i < arr.length; i += 3) {
          arr[i + 1] -= sp * dt; if (this.wx === '雪') arr[i] += Math.sin(this.t + i) * dt * 0.5;
          if (arr[i + 1] < 0) { arr[i + 1] = 30; arr[i] = (Math.random() - 0.5) * 80; arr[i + 2] = (Math.random() - 0.5) * 80; }
        }
        a.needsUpdate = true; this.rain.position.set(camPos.x, (p0y || 0) - 2, camPos.z);
      }
    }
  }

  render() { this.renderer.render(this.scene, this.camera); }

  dispose() {
    this.renderer.domElement.style.transform = ''; setMirror(false);
    window.removeEventListener('resize', this._onResize);
    this.scene.traverse(o => { if (o.geometry) o.geometry.dispose(); if (o.material) { const ms = Array.isArray(o.material) ? o.material : [o.material]; ms.forEach(m => { if (m.map) m.map.dispose(); if (m.bumpMap) m.bumpMap.dispose(); m.dispose(); }); } });
    if (this.envRT) this.envRT.dispose();
    this.renderer.dispose();
  }
}

function mergeTwo(a, b) {
  const g = new THREE.BufferGeometry();
  for (const k of ['position', 'normal', 'uv']) {
    const A = a.attributes[k].array, B = b.attributes[k].array, out = new Float32Array(A.length + B.length);
    out.set(A); out.set(B, A.length); g.setAttribute(k, new THREE.BufferAttribute(out, a.attributes[k].itemSize));
  }
  const ia = a.index.array, ib = b.index.array, na = a.attributes.position.count, idx = new Uint16Array(ia.length + ib.length);
  idx.set(ia); for (let i = 0; i < ib.length; i++) idx[ia.length + i] = ib[i] + na;
  g.setIndex(new THREE.BufferAttribute(idx, 1)); return g;
}
const UP = new THREE.Vector3(0, 1, 0);
function stretch(mesh, a, b, fixedLen) {
  const d = new THREE.Vector3().subVectors(b, a);
  const len = d.length();
  mesh.position.copy(a).addScaledVector(d, 0.5);
  mesh.quaternion.setFromUnitVectors(UP, d.normalize());
  mesh.scale.set(1, fixedLen ? 1 : len, 1);
}
