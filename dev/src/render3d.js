// ===== 3Dの競馬場とレース描画（騎手の一人称視点） =====
import * as THREE from 'three';
import { TRACK, trackPos } from './sim.js';
import { COAT } from './data.js';
import { buildHorse, animateHorse } from './model.js';
import { turfTex, dirtTex, grassTex, crowdTex, standingCrowdTex, buildingTex, textTex, blobTex } from './textures.js';

const { Ls, R, P, width: W } = TRACK;
const tmp = {};

function loopStrip(d0, d1, y0, y1, step, uvScaleU = 10, uvAcross = 1) {
  const pos = [], uv = [], idx = [];
  const n = Math.ceil(P / step);
  for (let i = 0; i <= n; i++) {
    const u = (i / n) * P;
    const a = trackPos(u, d0, {}), b = trackPos(u, d1, {});
    pos.push(a.x, y0, a.z, b.x, y1, b.z);
    uv.push(u / uvScaleU, 0, u / uvScaleU, uvAcross);
    if (i < n) { const k = i * 2; idx.push(k, k + 1, k + 2, k + 1, k + 3, k + 2); }
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  geo.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  geo.setIndex(idx); geo.computeVertexNormals();
  return geo;
}

function skyMesh(sunDir) {
  const mat = new THREE.ShaderMaterial({
    side: THREE.BackSide, depthWrite: false, fog: false,
    uniforms: { sunDir: { value: sunDir.clone().normalize() } },
    vertexShader: `varying vec3 vDir; void main(){ vDir = normalize(position); vec4 p = modelViewMatrix*vec4(position,1.0); gl_Position = projectionMatrix*p; gl_Position.z = gl_Position.w; }`,
    fragmentShader: `uniform vec3 sunDir; varying vec3 vDir;
      void main(){ float h = clamp(vDir.y, -0.1, 1.0);
        vec3 zen = vec3(0.16,0.38,0.78); vec3 hor = vec3(0.74,0.84,0.93);
        vec3 c = mix(hor, zen, pow(max(h,0.0), 0.55));
        float s = max(dot(normalize(vDir), sunDir), 0.0);
        c += vec3(1.0,0.9,0.7) * (pow(s, 400.0)*4.0 + pow(s, 12.0)*0.25);
        // 雲
        float cl = sin(vDir.x*9.0+vDir.z*3.0)*sin(vDir.z*11.0-vDir.x*4.0)*0.5+0.5;
        cl = smoothstep(0.55, 0.95, cl) * smoothstep(0.02, 0.25, h) * (1.0 - smoothstep(0.35,0.7,h));
        c = mix(c, vec3(0.97,0.98,1.0), cl*0.75);
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
    const lowPower = opts.lowPower;
    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: !lowPower, powerPreference: 'high-performance' });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, lowPower ? 1 : 1.6));
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.05;
    this.renderer.shadowMap.enabled = !lowPower;
    this.renderer.shadowMap.type = THREE.PCFShadowMap;
    this.scene = new THREE.Scene();
    this.scene.fog = new THREE.Fog(0xb9cde0, 120, 1500);
    this.camera = new THREE.PerspectiveCamera(72, 1, 0.05, 6000);
    this.camera.rotation.order = 'YXZ';
    this.t = 0; this.shake = 0; this.whipAnim = 0;
    this.buildWorld();
    this.buildHorses();
    this.particles();
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
    const S = this.scene;
    const sunDir = new THREE.Vector3(-0.45, 0.62, 0.35).normalize();
    this.sunDir = sunDir;
    S.add(this.sky = skyMesh(sunDir));
    S.add(new THREE.HemisphereLight(0xd6e8ff, 0x52602f, 0.75));
    const sun = new THREE.DirectionalLight(0xfff0d8, 2.6);
    sun.castShadow = true;
    sun.shadow.mapSize.set(1024, 1024);
    const sc = sun.shadow.camera; sc.left = -28; sc.right = 28; sc.top = 28; sc.bottom = -28; sc.near = 1; sc.far = 220;
    sun.shadow.bias = -0.0004; sun.shadow.normalBias = 0.03;
    S.add(sun); S.add(sun.target); this.sun = sun;

    // 地面
    const gt = grassTex(); gt.repeat.set(600, 600);
    const ground = new THREE.Mesh(new THREE.PlaneGeometry(5000, 5000), new THREE.MeshStandardMaterial({ map: gt, roughness: 0.95 }));
    ground.rotation.x = -Math.PI / 2; ground.position.y = -0.02; ground.receiveShadow = true; S.add(ground);

    const isTurf = this.race.surf !== 'ダ';
    // メインのコース
    const tt = isTurf ? turfTex() : dirtTex();
    const main = new THREE.Mesh(loopStrip(-1.5, W + 1.2, 0.01, 0.01, 2, 13, 2.1), new THREE.MeshStandardMaterial({ map: tt, roughness: isTurf ? 0.85 : 1 }));
    main.receiveShadow = true; S.add(main);
    // 内側のもう一つのコース（芝なら内にダート、ダートなら外に芝があるイメージ）
    const it = isTurf ? dirtTex() : turfTex();
    const inner = new THREE.Mesh(loopStrip(-26, -4, 0.008, 0.008, 3, 13, 1.7), new THREE.MeshStandardMaterial({ map: it, roughness: 1 }));
    inner.receiveShadow = true; S.add(inner);

    // ラチ（柵）
    const white = new THREE.MeshStandardMaterial({ color: 0xf4f4f4, roughness: 0.35, side: THREE.DoubleSide });
    const rail = (d, h) => {
      S.add(new THREE.Mesh(loopStrip(d, d, h - 0.14, h, 2), white));
      S.add(new THREE.Mesh(loopStrip(d - 0.07, d + 0.07, h, h, 2), white));
      const n = Math.floor(P / 3.2);
      const post = new THREE.InstancedMesh(new THREE.BoxGeometry(0.07, h, 0.07), white, n);
      const m = new THREE.Matrix4();
      for (let i = 0; i < n; i++) { trackPos(i * 3.2, d, tmp); m.makeTranslation(tmp.x, h / 2, tmp.z); post.setMatrixAt(i, m); }
      S.add(post);
    };
    rail(-0.15, 1.05); rail(W + 0.4, 1.05); rail(-4, 1.0); rail(-26, 0.9);
    // 外側の植え込み
    const hedge = new THREE.MeshStandardMaterial({ color: 0x2f5a26, roughness: 1, side: THREE.DoubleSide });
    S.add(new THREE.Mesh(loopStrip(W + 2.6, W + 2.6, 0, 1.4, 4), hedge));
    S.add(new THREE.Mesh(loopStrip(W + 2.3, W + 2.9, 1.4, 1.4, 4), hedge));

    // ハロン棒（残り距離の標識）
    for (let m = 200; m <= 3600; m += 200) {
      const u = TRACK.finishU - m;
      trackPos(u, -0.6, tmp);
      const grp = new THREE.Group();
      const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 3.2, 8), new THREE.MeshStandardMaterial({ color: m % 1000 === 0 ? 0xd42a2a : 0xffffff }));
      pole.position.y = 1.6; grp.add(pole);
      if (m <= 1600) {
        const sign = new THREE.Mesh(new THREE.PlaneGeometry(1.4, 0.8), new THREE.MeshBasicMaterial({ map: textTex(String(m), { w: 256, h: 140, bg: '#ffffff', fg: '#d42a2a', border: '#d42a2a' }), side: THREE.DoubleSide }));
        sign.position.y = 3.1; sign.rotation.y = Math.atan2(-tmp.hz, tmp.hx) + Math.PI / 2; grp.add(sign);
      }
      grp.position.set(tmp.x, 0, tmp.z); S.add(grp);
    }
    // ゴール板
    trackPos(TRACK.finishU, -0.8, tmp);
    const goal = new THREE.Group();
    const gpole = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 5, 10), new THREE.MeshStandardMaterial({ color: 0xffffff })); gpole.position.y = 2.5; goal.add(gpole);
    const disk = new THREE.Mesh(new THREE.CylinderGeometry(0.9, 0.9, 0.08, 24), new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.2, metalness: 0.4 }));
    disk.rotation.x = Math.PI / 2; disk.position.y = 5.2; goal.add(disk);
    const dsk2 = new THREE.Mesh(new THREE.CircleGeometry(0.55, 24), new THREE.MeshBasicMaterial({ color: 0xd42a2a })); dsk2.position.set(0, 5.2, 0.05); goal.add(dsk2);
    const dsk3 = dsk2.clone(); dsk3.position.z = -0.05; dsk3.rotation.y = Math.PI; goal.add(dsk3);
    goal.position.set(tmp.x, 0, tmp.z); S.add(goal);
    // ゴールライン
    const a = trackPos(TRACK.finishU, 0, {}), b = trackPos(TRACK.finishU, W, {});
    const line = new THREE.Mesh(new THREE.PlaneGeometry(0.25, W), new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.7 }));
    line.rotation.x = -Math.PI / 2; line.position.set(a.x, 0.02, (a.z + b.z) / 2); S.add(line);

    // スタンド（ホームストレッチの外側）
    const zS = R + W + 14;
    const x0 = -230, x1 = 260, len = x1 - x0, cx = (x0 + x1) / 2;
    const apron = new THREE.Mesh(new THREE.PlaneGeometry(len + 40, 16), new THREE.MeshStandardMaterial({ color: 0x9a9a94, roughness: 1 }));
    apron.rotation.x = -Math.PI / 2; apron.position.set(cx, 0.01, R + W + 6); apron.receiveShadow = true; S.add(apron);
    const ct = crowdTex(); ct.repeat.set(len / 16, 3);
    const seats = new THREE.Mesh(new THREE.PlaneGeometry(len, 46), new THREE.MeshStandardMaterial({ map: ct, roughness: 1 }));
    seats.rotation.x = -Math.PI / 2 - 0.55; seats.position.set(cx, 11, zS + 19); S.add(seats);
    const bt = buildingTex(); bt.repeat.set(len / 30, 1);
    const bld = new THREE.Mesh(new THREE.BoxGeometry(len, 16, 20), [
      new THREE.MeshStandardMaterial({ color: 0xcfd3d8 }), new THREE.MeshStandardMaterial({ color: 0xcfd3d8 }),
      new THREE.MeshStandardMaterial({ color: 0xbfc4ca }), new THREE.MeshStandardMaterial({ color: 0xbfc4ca }),
      new THREE.MeshStandardMaterial({ map: bt }), new THREE.MeshStandardMaterial({ color: 0xcfd3d8 })]);
    bld.position.set(cx, 30, zS + 48); S.add(bld);
    const roof = new THREE.Mesh(new THREE.BoxGeometry(len + 10, 1.2, 46), new THREE.MeshStandardMaterial({ color: 0xe8ecef, roughness: 0.4, metalness: 0.3 }));
    roof.position.set(cx, 39, zS + 26); roof.rotation.x = 0.08; roof.castShadow = false; S.add(roof);
    for (let x = x0 + 10; x < x1; x += 40) {
      const col = new THREE.Mesh(new THREE.CylinderGeometry(0.6, 0.6, 30, 8), new THREE.MeshStandardMaterial({ color: 0xdddddd }));
      col.position.set(x, 15, zS + 36); S.add(col);
    }
    // ラチ沿いの観客
    const sct = standingCrowdTex(); sct.repeat.set(len / 30, 1);
    const crowdMat = new THREE.MeshStandardMaterial({ map: sct, transparent: true, alphaTest: 0.4, side: THREE.DoubleSide, roughness: 1 });
    for (const [dz, s, y0] of [[R + W + 5.5, 2.1, 0.2], [R + W + 9, 2.3, 0.9], [R + W + 12.5, 2.5, 1.7]]) {
      const cr = new THREE.Mesh(new THREE.PlaneGeometry(len, s), crowdMat);
      cr.position.set(cx, y0 + s / 2, dz); S.add(cr);
      const step = new THREE.Mesh(new THREE.BoxGeometry(len, y0 + 0.01, 3.5), new THREE.MeshStandardMaterial({ color: 0x8d8d88 }));
      step.position.set(cx, (y0 + 0.01) / 2, dz + 1.2); S.add(step);
    }

    // ターフビジョン（場内の大型画面）
    const tvGroup = new THREE.Group();
    const tvTex = textTex(this.opts.title || '死ぬか生きるかの戦い', { w: 1024, h: 256, bg: '#0b1a2e', fg: '#ffd34d', size: 110 });
    const tv = new THREE.Mesh(new THREE.PlaneGeometry(60, 15), new THREE.MeshBasicMaterial({ map: tvTex, toneMapped: false }));
    tv.position.y = 16; tvGroup.add(tv);
    const frame = new THREE.Mesh(new THREE.BoxGeometry(63, 18, 1.5), new THREE.MeshStandardMaterial({ color: 0x222222 })); frame.position.set(0, 16, -0.9); tvGroup.add(frame);
    for (const x of [-20, 20]) { const leg = new THREE.Mesh(new THREE.BoxGeometry(1.5, 8, 1.5), new THREE.MeshStandardMaterial({ color: 0x555555 })); leg.position.set(x, 4, -0.9); tvGroup.add(leg); }
    tvGroup.position.set(60, 0, R - 70); S.add(tvGroup);
    // 池
    const pond = new THREE.Mesh(new THREE.CircleGeometry(40, 32), new THREE.MeshStandardMaterial({ color: 0x3a6f8f, roughness: 0.08, metalness: 0.4 }));
    pond.rotation.x = -Math.PI / 2; pond.scale.set(2.2, 1, 1); pond.position.set(-60, 0.03, -20); S.add(pond);

    // 木
    const trunkG = new THREE.CylinderGeometry(0.3, 0.45, 4, 6); trunkG.translate(0, 2, 0);
    const leafG = new THREE.ConeGeometry(3.2, 9, 8); leafG.translate(0, 8, 0);
    const leafG2 = new THREE.SphereGeometry(3.6, 8, 6); leafG2.translate(0, 6.5, 0);
    const trees = [];
    for (let i = 0; i < 520; i++) {
      const u = Math.random() * P;
      const d = W + 14 + Math.random() * 160;
      trackPos(u, d, tmp);
      if (tmp.z > R && tmp.x > x0 - 30 && tmp.x < x1 + 30) continue; // スタンドの所はなし
      trees.push([tmp.x, tmp.z, 0.7 + Math.random() * 0.8, Math.random() < 0.5]);
    }
    for (let i = 0; i < 60; i++) {
      const x = (Math.random() - 0.5) * (Ls + 60), z = (Math.random() - 0.5) * (R * 1.2);
      if (Math.abs(x - 60) < 50 && z > R - 100) continue;
      if (Math.hypot((x + 60) / 2.2, z + 20) < 45) continue;
      trees.push([x, z, 0.5 + Math.random() * 0.6, true]);
    }
    const trunkM = new THREE.InstancedMesh(trunkG, new THREE.MeshStandardMaterial({ color: 0x4a3524 }), trees.length);
    const coneT = trees.filter(t => !t[3]), roundT = trees.filter(t => t[3]);
    const coneM = new THREE.InstancedMesh(leafG, new THREE.MeshStandardMaterial({ color: 0x24502a, roughness: 1 }), coneT.length);
    const roundM = new THREE.InstancedMesh(leafG2, new THREE.MeshStandardMaterial({ color: 0x3d6e2e, roughness: 1 }), roundT.length);
    const m = new THREE.Matrix4(), q = new THREE.Quaternion(), sv = new THREE.Vector3();
    trees.forEach((t, i) => { sv.setScalar(t[2]); m.compose(new THREE.Vector3(t[0], 0, t[1]), q, sv); trunkM.setMatrixAt(i, m); });
    coneT.forEach((t, i) => { sv.setScalar(t[2]); m.compose(new THREE.Vector3(t[0], 0, t[1]), q, sv); coneM.setMatrixAt(i, m); });
    roundT.forEach((t, i) => { sv.set(t[2], t[2] * (0.8 + Math.random() * 0.4), t[2]); m.compose(new THREE.Vector3(t[0], 0, t[1]), q, sv); roundM.setMatrixAt(i, m); });
    S.add(trunkM, coneM, roundM);
    // 遠くの山
    const mtMat = new THREE.MeshStandardMaterial({ color: 0x6e8aa0, roughness: 1, flatShading: true });
    for (let i = 0; i < 14; i++) {
      const ang = (i / 14) * Math.PI * 2 + Math.random() * 0.2;
      const dist = 1700 + Math.random() * 600;
      const mt = new THREE.Mesh(new THREE.ConeGeometry(300 + Math.random() * 300, 160 + Math.random() * 220, 7), mtMat);
      mt.position.set(Math.cos(ang) * dist, 60, Math.sin(ang) * dist); S.add(mt);
    }
    // スタートゲート
    this.buildGate();
  }

  buildGate() {
    const race = this.race;
    const n = race.racers.length;
    const g = new THREE.Group();
    const green = new THREE.MeshStandardMaterial({ color: 0x2f7a3a, roughness: 0.6 });
    const grey = new THREE.MeshStandardMaterial({ color: 0xcfcfcf, roughness: 0.5 });
    trackPos(race.u0 + 1.6, 0, tmp);
    const ang = Math.atan2(-tmp.hz, tmp.hx);
    for (let i = 0; i <= n; i++) {
      const d = 0.5 + i * 1.25;
      const p = trackPos(race.u0 + 1.6, d, {});
      const post = new THREE.Mesh(new THREE.BoxGeometry(2.6, 2.4, 0.08), green);
      post.position.set(p.x, 1.2, p.z); post.rotation.y = ang; g.add(post);
    }
    const a = trackPos(race.u0 + 1.6, 0.5, {}), b = trackPos(race.u0 + 1.6, 0.5 + n * 1.25, {});
    const beam = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.6, n * 1.25 + 0.4), grey);
    beam.position.set((a.x + b.x) / 2, 2.7, (a.z + b.z) / 2); beam.rotation.y = ang; g.add(beam);
    const tt = textTex('死ぬか生きるかの戦い', { w: 1024, h: 96, bg: '#2f7a3a', fg: '#ffffff', size: 60 });
    const label = new THREE.Mesh(new THREE.PlaneGeometry(n * 1.25, 0.5), new THREE.MeshBasicMaterial({ map: tt, side: THREE.DoubleSide }));
    label.position.set((a.x + b.x) / 2, 2.7, (a.z + b.z) / 2); label.rotation.y = ang - Math.PI / 2;
    label.position.x -= Math.cos(ang) * 0.27; label.position.z += Math.sin(ang) * 0.27;
    g.add(label);
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
    for (const o of [P.torso, P.helmet, P.face, P.pants, P.boots, P.arms]) o.visible = !fp;
    for (const a of this.arms) { a.arm.visible = fp; a.hand.visible = fp; a.rein.visible = true; }
    this.whipStick.visible = fp;
    if (fp) { if (this.camera.parent !== this.rig) this.rig.add(this.camera); this.camera.position.set(0, 0, 0); }
    else { this.scene.add(this.camera); }
  }

  particles() {
    const N = 700;
    const geo = new THREE.BufferGeometry();
    this.pPos = new Float32Array(N * 3); this.pVel = new Float32Array(N * 3); this.pLife = new Float32Array(N);
    geo.setAttribute('position', new THREE.BufferAttribute(this.pPos, 3));
    const isTurf = this.race.surf !== 'ダ';
    this.pts = new THREE.Points(geo, new THREE.PointsMaterial({ color: isTurf ? 0x4f6a2a : 0x8a6440, size: isTurf ? 0.07 : 0.09, sizeAttenuation: true }));
    this.pts.frustumCulled = false;
    this.scene.add(this.pts); this.pN = N; this.pI = 0;
  }
  emit(x, y, z, vx, vz) {
    const i = this.pI; this.pI = (this.pI + 1) % this.pN;
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
      H.root.position.set(p.x, 0, p.z);
      H.root.rotation.y = ang + H.yaw;
      const ph = animateHorse(H, r.stride, r.v, this.t);
      // 蹄の跡（土や芝が飛ぶ）
      if (r.v > 8) {
        const step = Math.floor(ph / Math.PI);
        if (step !== H.lastStep) {
          H.lastStep = step;
          const cnt = this.race.surf === 'ダ' ? 6 : 3;
          for (let k = 0; k < cnt; k++) this.emit(p.x - p.hx * (0.5 + Math.random()), 0.08, p.z - p.hz * (0.5 + Math.random()), -p.hx * r.v * 0.15, -p.hz * r.v * 0.15);
        }
      }
    }
    // 粒子
    for (let i = 0; i < this.pN; i++) {
      if (this.pLife[i] <= 0) { this.pPos[i * 3 + 1] = -10; continue; }
      this.pLife[i] -= dt;
      this.pVel[i * 3 + 1] -= 9.8 * dt;
      this.pPos[i * 3] += this.pVel[i * 3] * dt; this.pPos[i * 3 + 1] = Math.max(0.01, this.pPos[i * 3 + 1] + this.pVel[i * 3 + 1] * dt); this.pPos[i * 3 + 2] += this.pVel[i * 3 + 2] * dt;
    }
    this.pts.geometry.attributes.position.needsUpdate = true;

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
      if (this.view === 'fp') {
        const bob = P.bodyG.position.y;
        this.shake = Math.max(0, this.shake - dt);
        const sh = this.shake * 0.25;
        this.rig.position.set(0.12, 2.55 - bob * 0.55 + Math.sin(this.t * 40) * sh * 0.1, 0);
        this.camera.rotation.set(-0.13 - P.bodyG.rotation.z * 0.6 + (Math.random() - 0.5) * sh * 0.05, -Math.PI / 2, -P.yaw * 0.5 + (Math.random() - 0.5) * sh * 0.05);
        this.camera.rotation.x -= 0;
        const k = Math.min(1, r.v / 18);
        const baseFov = this.camera.aspect < 1 ? 90 : 66;
        this.camera.fov += ((baseFov + k * 6) - this.camera.fov) * 0.05;
        this.camera.updateProjectionMatrix();
      } else {
        const p = trackPos(r.u, r.d, {});
        const back = this.view === 'tv' ? 0 : 9;
        let target;
        if (this.view === 'tv') {
          const q = trackPos(r.u + 2, r.d + 22, {});
          camPos.set(q.x, 7, q.z);
          target = new THREE.Vector3(p.x, 1.4, p.z);
        } else {
          camPos.set(p.x - p.hx * back + p.nx * 1.5, 4.2, p.z - p.hz * back + p.nz * 1.5);
          target = new THREE.Vector3(p.x + p.hx * 8, 1.4, p.z + p.hz * 8);
        }
        this.camera.position.lerp(camPos, 1 - Math.exp(-dt * 10));
        this.camera.lookAt(target);
      }
      const pp = trackPos(r.u, r.d, {});
      this.sun.position.set(pp.x + this.sunDir.x * 100, this.sunDir.y * 100, pp.z + this.sunDir.z * 100);
      this.sun.target.position.set(pp.x, 0, pp.z);
      this.sun.target.updateMatrixWorld();
      this.camera.getWorldPosition(camPos);
      this.sky.position.copy(camPos);
    }
  }

  render() { this.renderer.render(this.scene, this.camera); }

  dispose() {
    window.removeEventListener('resize', this._onResize);
    this.scene.traverse(o => { if (o.geometry) o.geometry.dispose(); if (o.material) { const ms = Array.isArray(o.material) ? o.material : [o.material]; ms.forEach(m => { if (m.map) m.map.dispose(); m.dispose(); }); } });
    this.renderer.dispose();
  }
}

const UP = new THREE.Vector3(0, 1, 0);
function stretch(mesh, a, b, fixedLen) {
  const d = new THREE.Vector3().subVectors(b, a);
  const len = d.length();
  mesh.position.copy(a).addScaledVector(d, 0.5);
  mesh.quaternion.setFromUnitVectors(UP, d.normalize());
  mesh.scale.set(1, fixedLen ? 1 : len, 1);
}
