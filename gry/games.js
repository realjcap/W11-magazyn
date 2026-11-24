// W11 – Game Hub. Ładowane przez index.html dopiero po kliknięciu ukrytego przycisku.
if (!document.querySelector('script[type=importmap]')) { const im = document.createElement('script'); im.type = 'importmap'; im.textContent = JSON.stringify({ imports: { three: 'https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.min.js' } }); document.head.appendChild(im); }
// --- snake: głowa to postać gracza, ogon to zjedzone batony
const GM_BAR = 'data:image/webp;base64,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';
// power-upy (grafiki wycięte ze zdjęć)
const GM_PW = {"slow": "data:image/webp;base64,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", "life": "data:image/webp;base64,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", "wall": "data:image/webp;base64,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"};
const GM_PWI = { slow: { t: 'SPOWOLNIENIE CZASU', ic: '⏳', d: 6700 }, life: { t: 'DODATKOWE ŻYCIE', ic: '❤', d: 2200 }, wall: { t: 'PRZECHODZENIE PRZEZ ŚCIANY', ic: '🧱', d: 8000 } };
const GM = { N: 15, dir: [1, 0], q: [], body: [], food: null, score: 0, best: 0, run: false, over: false, t: 0, step: 150, raf: 0, last: 0, imgs: null, leg: 0 };
try { GM.best = +localStorage.getItem('w11-gm-best') || 0; } catch (e) {}
function gmImgs() {
  if (GM.imgs) return GM.imgs;
  const ld = src => { const i = new Image(); i.src = src; return i; };
  return GM.imgs = { body: ld(BOAR.body), legs: BOAR.legs.map(l => ({ ...l, im: ld(l.src) })), bar: ld(GM_BAR), pw: Object.fromEntries(Object.entries(GM_PW).map(([k, v]) => [k, ld(v)])) };
}

function gmReset() {
  const m = GM.N >> 1;
  GM.body = [[m, m], [m - 1, m], [m - 2, m]]; GM.prev = null; GM.ha = 0; GM.dir = [1, 0]; GM.q = []; GM.score = 0; GM.step = 150; GM.over = false;
  GM.lives = 1; GM.freeze = 0; GM.ghost = 0; GM.recover = false; GM.gt = 0; GM.eff = {}; GM.item = null; GM.nextPw = 5000 + Math.random() * 4000; GM.msg = null;
  gmFood(); $('#gmS').textContent = '0'; gmHud();
}
// --- power-upy: czas liczony w czasie gry (GM.gt), więc pauza go zatrzymuje
const gmStep = () => GM.step * (GM.eff && GM.eff.slow > GM.gt ? 1.6 : 1);
function gmHud() {
  $('#gmHp').innerHTML = '❤'.repeat(Math.max(0, GM.lives || 0));
  const act = Object.entries(GM.eff || {}).filter(([k, t]) => t > GM.gt && k !== 'life').map(([k, t]) => GM_PWI[k].ic + ' ' + GM_PWI[k].t + ' · ' + ((t - GM.gt) / 1000).toFixed(1) + ' s');
  if (GM.msg && GM.msg.until > GM.gt) act.unshift(GM.msg.txt);
  const el = $('#gmPw'), html = act.map(a => '<span>' + a + '</span>').join('');
  if (el.innerHTML !== html) el.innerHTML = html;
  el.classList.toggle('on', !!act.length);
}
function gmPwSpawn() {
  const busy = c => GM.body.some(b => b[0] === c[0] && b[1] === c[1]) || (GM.food && GM.food[0] === c[0] && GM.food[1] === c[1]);
  const free = []; for (let x = 0; x < GM.N; x++) for (let y = 0; y < GM.N; y++) if (!busy([x, y])) free.push([x, y]);
  if (!free.length) return;
  const ty = ['slow', 'life', 'wall'][Math.floor(Math.random() * 3)];
  GM.item = { ty, c: free[Math.floor(Math.random() * free.length)], until: GM.gt + 9000 };
}
function gmPwTake(ty) {
  SFX.play('fanfare');
  if (ty === 'life') { GM.lives = Math.min(3, GM.lives + 1); GM.msg = { txt: '❤ DODATKOWE ŻYCIE!', until: GM.gt + 2200 }; }
  else GM.eff[ty] = GM.gt + GM_PWI[ty].d;
  GM.item = null; GM.nextPw = GM.gt + 7000 + Math.random() * 6000; gmHud();
}
function gmFood() {
  const free = []; for (let x = 0; x < GM.N; x++) for (let y = 0; y < GM.N; y++) if (!GM.body.some(b => b[0] === x && b[1] === y)) free.push([x, y]);
  GM.food = free[Math.floor(Math.random() * free.length)] || null;
}
function gmOv(html) { const o = $('#gmOv'); if (html) { o.innerHTML = html; o.hidden = false; } else o.hidden = true; }
function gmStart() { if (GM.over || !GM.body.length) gmReset(); GM.run = true; gmOv(''); try { $('#gmWrap').focus({ preventScroll: true }); } catch (e) {} GM.last = performance.now(); GM.t = 0; }
function gmPause() { if (!GM.run) return; GM.run = false; gmOv('<b>Pauza</b><span>Spacja lub strzałka – gramy dalej</span>'); }
function gmTurn(d) {
  const D = { up: [0, -1], down: [0, 1], left: [-1, 0], right: [1, 0] }[d]; if (!D) return;
  if (!GM.run) { if (GM.over || !GM.body.length) gmReset(); gmStart(); }
  const prev = GM.q.length ? GM.q[GM.q.length - 1] : GM.dir;
  if (D[0] === -prev[0] && D[1] === -prev[1]) return; // bez zawracania w miejscu
  if (D[0] === prev[0] && D[1] === prev[1]) return;
  if (GM.q.length < 3) GM.q.push(D);
}
function gmTick() {
  if (GM.q.length) GM.dir = GM.q.shift();
  const ghost = GM.ghost > GM.gt; // chwila nietykalności po utracie serca
  if (GM.recover) { // po zatrzymaniu: jeśli przed graczem jest przeszkoda, skręca w wolną stronę
    GM.recover = false;
    const ok = d => { const hh = GM.body[0]; let c = [hh[0] + d[0], hh[1] + d[1]]; if (GM.eff.wall > GM.gt) c = [(c[0] + GM.N) % GM.N, (c[1] + GM.N) % GM.N]; return c[0] >= 0 && c[1] >= 0 && c[0] < GM.N && c[1] < GM.N && !GM.body.slice(0, -1).some(b => b[0] === c[0] && b[1] === c[1]); };
    if (!ok(GM.dir)) { const alt = [[1, 0], [-1, 0], [0, 1], [0, -1]].find(d => !(d[0] === -GM.dir[0] && d[1] === -GM.dir[1]) && ok(d)); if (alt) GM.dir = alt; }
  }
  const h = GM.body[0], n = [h[0] + GM.dir[0], h[1] + GM.dir[1]];
  if (GM.eff.wall > GM.gt || ghost) { n[0] = (n[0] + GM.N) % GM.N; n[1] = (n[1] + GM.N) % GM.N; } // przez ścianę – wyjście z drugiej strony
  const eat = GM.food && n[0] === GM.food[0] && n[1] === GM.food[1];
  const hit = !ghost && (n[0] < 0 || n[1] < 0 || n[0] >= GM.N || n[1] >= GM.N || GM.body.slice(0, eat ? GM.body.length : -1).some(b => b[0] === n[0] && b[1] === n[1]));
  if (hit && GM.lives > 1) { // tracimy serce: gracz staje na 2 s i miga (z całym ogonem), potem jedzie dalej z tą samą długością
    GM.lives--; SFX.play('crash');
    GM.prev = null; GM.freeze = GM.gt + 2000; GM.ghost = GM.gt + 2600; GM.recover = true;
    GM.msg = { txt: '−1 ❤  zostało serc: ' + GM.lives, until: GM.gt + 2000 }; gmHud();
    return;
  }
  if (hit) {
    GM.run = false; GM.over = true; SFX.play('crash');
    const rec = GM.score > GM.best; if (rec) { GM.best = GM.score; try { localStorage.setItem('w11-gm-best', GM.best); } catch (e) {} $('#gmBest').textContent = GM.best; }
    lbSave(GM.score);
    gmOv(`<b>${rec ? 'Nowy rekord!' : 'Dzik się rozbił'}</b><span>Zjedzone batony: ${GM.score}</span><button type="button" class="p" id="gmGo">Jeszcze raz</button>`);
    return;
  }
  GM.prev = GM.body.map(b => b.slice()); // poprzednie pozycje – do płynnego przejścia między polami
  GM.body.unshift(n);
  if (GM.item && n[0] === GM.item.c[0] && n[1] === GM.item.c[1]) gmPwTake(GM.item.ty);
  if (eat) { SFX.play('eat'); GM.score++; $('#gmS').textContent = GM.score; GM.step = GM.score <= 15 ? 150 - GM.score * 3 : Math.max(95, 105 - (GM.score - 15) * 0.7); /* do 15 batonów szybko przyspiesza, potem łagodnie, max prędkość ok. 95 ms/pole */ gmFood(); } else GM.body.pop();
}
function gmDraw() {
  const c = $('#gmC'), r = c.getBoundingClientRect(), dpr = Math.min(window.devicePixelRatio || 1, 2);
  const W = Math.round(r.width * dpr); if (!W) return;
  const cs = W / GM.N, im = gmImgs();
  if (c.width !== W || !GM.bg || GM.bg.width !== W) {
    c.width = W; c.height = W;
    GM.bg = document.createElement('canvas'); GM.bg.width = GM.bg.height = W; const g = GM.bg.getContext('2d');
    g.fillStyle = 'rgba(255,255,255,.025)';
    for (let i = 0; i < GM.N; i++) for (let j = 0; j < GM.N; j++) if ((i + j) % 2) g.fillRect(i * cs, j * cs, cs, cs);
  }
  const x = c.getContext('2d');
  x.clearRect(0, 0, W, W); x.drawImage(GM.bg, 0, 0);
  // płynny ruch: pozycja między poprzednim a obecnym polem (a = postęp kroku 0..1)
  const a = GM.run && GM.prev ? Math.min(1, GM.t / gmStep()) : 1;
  const ease = a < .5 ? 2 * a * a : 1 - Math.pow(-2 * a + 2, 2) / 2;
  const pos = i => { const b = GM.body[i]; let p = (GM.prev && (GM.prev[i] || GM.prev[GM.prev.length - 1])) || b; if (Math.abs(p[0] - b[0]) > 1 || Math.abs(p[1] - b[1]) > 1) p = b; return [(p[0] + (b[0] - p[0]) * ease + .5) * cs, (p[1] + (b[1] - p[1]) * ease + .5) * cs]; };
  const bar = (cx, cy, w, ang) => { const bw = w, bh = bw * 63 / 200; x.save(); x.translate(cx, cy); x.rotate(ang); x.drawImage(im.bar, -bw / 2, -bh / 2, bw, bh); x.restore(); };
  if (GM.item) { // power-up: pulsuje i świeci, w ostatnich 2 s miga
    const it = GM.item, img = im.pw[it.ty], left = it.until - GM.gt, now = performance.now();
    if (img.complete && img.naturalWidth && (left > 2000 || Math.floor(now / 120) % 2)) {
      const hh = cs * 1.45 * (1 + Math.sin(now / 160) * .07), ww = hh * img.naturalWidth / img.naturalHeight, cx = (it.c[0] + .5) * cs, cy = (it.c[1] + .5) * cs;
      x.save(); x.shadowColor = `hsl(${now / 6 % 360},100%,60%)`; x.shadowBlur = cs * .6; x.drawImage(img, cx - ww / 2, cy - hh / 2, ww, hh); x.restore();
    }
  }
  if (GM.eff && GM.eff.wall > GM.gt) { x.save(); x.strokeStyle = `hsla(${performance.now() / 6 % 360},100%,60%,.7)`; x.lineWidth = Math.max(2, cs * .08); x.setLineDash([cs * .3, cs * .2]); x.strokeRect(x.lineWidth / 2, x.lineWidth / 2, W - x.lineWidth, W - x.lineWidth); x.restore(); }
  if (GM.food) { const p = 1 + Math.sin(performance.now() / 180) * .06; bar((GM.food[0] + .5) * cs, (GM.food[1] + .5) * cs, cs * 1.7 * p, -0.5); }
  // ogon: zjedzone batony ułożone wzdłuż drogi gracza
  const P = GM.body.map((_, i) => pos(i));
  const frz = GM.freeze > GM.gt; // po utracie serca: gracz z ogonem miga, potem chwilę jest półprzezroczysty
  if (frz && Math.floor(performance.now() / 140) % 2) return;
  if (!frz && GM.ghost > GM.gt) x.globalAlpha = .55;
  for (let i = P.length - 1; i > 0; i--) {
    const b = P[i], f = P[i - 1]; let ang = Math.atan2(f[1] - b[1], f[0] - b[0]); if (Math.abs(ang) > Math.PI / 2 + .01) ang += Math.PI; // napis zawsze czytelny
    bar(b[0], b[1], cs * 1.3, ang);
  }
  // głowa: postać gracza; obrót płynnie dogania kierunek, w lewo odbity, żeby nie był do góry nogami
  const d = GM.dir, tgt = Math.atan2(d[1], d[0]);
  let df = tgt - GM.ha; df = Math.atan2(Math.sin(df), Math.cos(df));
  GM.ha += df * (GM.run ? .35 : 1);
  const h = P[0], bw = cs * 2, bh = bw * BOAR.H / BOAR.W;
  x.save(); x.translate(h[0], h[1]); x.rotate(GM.ha); if (Math.cos(GM.ha) < 0) x.scale(1, -1);
  const k = bw / BOAR.W, sw = GM.run ? Math.sin(performance.now() / 70) : 0;
  im.legs.forEach((l, i) => { x.save(); const ox = -bw / 2 + (l.x + l.w * l.ox / 100) * k, oy = -bh / 2 + l.y * k; x.translate(ox, oy); x.rotate((i % 2 ? 1 : -1) * sw * .45); x.drawImage(l.im, -(l.w * l.ox / 100) * k, 0, l.w * k, l.h * k); x.restore(); });
  x.drawImage(im.body, -bw / 2, -bh / 2, bw, bh);
  x.restore(); x.globalAlpha = 1;
}
function gmLoop(t) {
  if (!$('#gm').open) { GM.raf = 0; return; }
  if (GM.run) {
    const dt = Math.min(t - GM.last, 200); GM.gt += dt;
    if (!GM.item && GM.gt >= GM.nextPw) gmPwSpawn();
    if (GM.item && GM.gt > GM.item.until) { GM.item = null; GM.nextPw = GM.gt + 4000 + Math.random() * 5000; }
    if (GM.freeze > GM.gt) GM.t = 0;
    else { GM.t = Math.min(GM.t + dt, gmStep() * 3); while (GM.t >= gmStep() && GM.run && !(GM.freeze > GM.gt)) { GM.t -= gmStep(); gmTick(); } }
    gmHud();
  }
  GM.last = t; gmDraw(); GM.raf = requestAnimationFrame(gmLoop);
}
// popup „Gratulacje” z konfetti po bokach napisu (~4 s), potem gra; klik pomija
function gmCongrats() {
  return new Promise(done => {
    const ov = document.createElement('div'); ov.id = 'gmCg';
    ov.innerHTML = '<canvas></canvas><div class="t"><b>GRATULACJE!</b><span>ODKRYŁEŚ DZIK GAME HUB</span></div>';
    document.body.appendChild(ov);
    const c = ov.querySelector('canvas'), x = c.getContext('2d'), dpr = window.devicePixelRatio || 1;
    const fit = () => { c.width = innerWidth * dpr; c.height = innerHeight * dpr; }; fit();
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const COL = ['#0f5fd7', '#7b3fc4', '#12a150', '#f5b400', '#e5484d', '#3ec6e0', '#ffffff'];
    const P = [];
    const burst = n => {
      const r = ov.querySelector('.t').getBoundingClientRect();
      for (let i = 0; i < n; i++) {
        const left = i % 2 === 0, a = (left ? Math.PI : 0) + (Math.random() - .5) * 1.4 - (left ? -.5 : .5);
        const sp = 6 + Math.random() * 9;
        P.push({ x: (left ? r.left : r.right) * dpr, y: (r.top + r.height * (.2 + Math.random() * .6)) * dpr, vx: Math.cos(a) * sp * dpr * Math.min(1, Math.max(.3, innerWidth / 1000)), vy: (Math.sin(a) * sp - 5 - (innerWidth < 600 ? 4 : 0)) * dpr,
          w: (6 + Math.random() * 6) * dpr, h: (3 + Math.random() * 4) * dpr, rot: Math.random() * 6, vr: (Math.random() - .5) * .4, c: COL[i % COL.length], life: 0 });
      }
    };
    SFX.play('fanfare');
    const T = 2500, t0 = performance.now(); let raf = 0, end = false, nextB = 0;
    const frame = t => {
      const el = t - t0;
      if (!reduce && el > nextB && el < T - 800) { burst(nextB ? 26 : 80); nextB = el + 320; }
      x.clearRect(0, 0, c.width, c.height);
      for (const p of P) {
        p.vy += .32 * dpr; p.vx *= .985; p.vy *= .985; p.x += p.vx; p.y += p.vy; p.rot += p.vr; p.life++;
        x.save(); x.translate(p.x, p.y); x.rotate(p.rot); x.scale(1, Math.cos(p.life * .18)); x.fillStyle = p.c; x.fillRect(-p.w / 2, -p.h / 2, p.w, p.h); x.restore();
      }
      for (let i = P.length - 1; i >= 0; i--) if (P[i].y > c.height + 40) P.splice(i, 1);
      if (el >= T) return close();
      raf = requestAnimationFrame(frame);
    };
    const close = () => {
      if (end) return; end = true; cancelAnimationFrame(raf); removeEventListener('resize', fit);
      ov.classList.add('out'); setTimeout(() => { ov.remove(); done(); }, 330);
    };
    ov.addEventListener('click', close); addEventListener('resize', fit);
    raf = requestAnimationFrame(frame);
  });
}
let gmBusy = false;
// Game Hub: po popupie wybór gry z kafelków
window.gmLaunch = async () => {
  if (gmBusy) return; gmBusy = true;
  try { await gmCongrats(); } finally { gmBusy = false; }
  hubOpen();
};
function hubOpen() {
  if (!$('#hubImg').src) $('#hubImg').src = GM_BAR;
  if (!$('#hubFace').src) $('#hubFace').src = W3_FACE.c;
  if (!$('#hubCan').src) $('#hubCan').src = FL_CAN;
  $('#hubFn').hidden = lbMe() !== DELMA_UID; // gra FN – na razie tylko dla delmy
  $('#hubFlBest').textContent = FL.G.best ? 'Twój rekord: ' + FL.G.best : 'Jeszcze nie grałeś';
  $('#hubBest').textContent = GM.best ? 'Twój rekord: ' + GM.best : 'Jeszcze nie grałeś';
  $('#hub').showModal();
}
$('#hub').addEventListener('click', e => {
  const t = e.target.closest('.hubt[data-g]'); if (!t) return;
  SFX.play('tick');
  if (t.dataset.g === 'snake') { $('#hub').close(); snakeOpen(); }
  if (t.dataset.g === 'w3') { $('#hub').close(); W3.open(); }
  if (t.dataset.g === 'fl') { $('#hub').close(); FL.open(); }
  if (t.dataset.g === 'sl') { $('#hub').close(); SL3.open(); }
  if (t.dataset.g === 'fn' && lbMe() === DELMA_UID) { $('#hub').close(); FN.open(); }
});
$('#hubX').onclick = () => $('#hub').close();
$('#gmHub').onclick = () => { $('#gm').close(); hubOpen(); };
function snakeOpen() {
  gmImgs(); gmReset(); GM.run = false; $('#gmBest').textContent = GM.best;
  gmOv(`<img src="${GM_BAR}" alt=""><b>Dzik na batonach</b><span>Zjadaj batony kokosowe, nie wjeżdżaj w ścianę ani w ogon.<br><small>Łap power-upy: Limitless – spowolnienie, Tropic – dodatkowe życie, Kreatyna – przejście przez ściany.</small></span><button type="button" class="p" id="gmGo">Start</button><small>albo naciśnij strzałkę</small>`);
  $('#gm').showModal(); lbOpen(); if (!GM.raf) GM.raf = requestAnimationFrame(t => { GM.last = t; gmLoop(t); });
};
// ===== SLENDER: MAGAZYN – horror 3D (Three.js z CDN, ładowany dopiero przy otwarciu gry) =====
// Faza 1: oświetlony magazyn, 4 przedmioty → gasną światła, otwiera się brama. Faza 2: las nocą, kolejne 4.
// Przedmioty i model Slendera są tymczasowe (do podmiany).
const SL3 = (() => {
  const THREE_URLS = ['https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.min.js', 'https://unpkg.com/three@0.160.0/build/three.module.min.js'];
  const PIX = .62; // lekko obniżona rozdzielczość = delikatna pikseloza
  const WH = { x0: -20, x1: 20, z0: -15, z1: 15, h: 7 }; // magazyn
  const FO = { x0: -60, x1: 60, z0: -115, z1: -15 };      // las (za bramą, na północ)
  const GATE = { x0: -3, x1: 3, h: 4.5 };
  let T, R, scene, cam, flash, clock, cv, built = false;
  const G = { open: false, run: false, st: 'menu', yaw: Math.PI, pitch: 0, x: 0, z: 12, got: 0, total: 8, stam: 1, stat: 0, lightsOut: false, gateY: 0, sl: null, slT: 0, keys: {}, mx: 0, my: 0, touch: { mx: 0, mz: 0 }, flashOn: false, mute: false, ending: 0 };
  const NPC = { x: 13, z: 12.15, face: Math.PI }; // Długi stoi przy komputerze, przodem do monitora
  // lista od Długiego – nazwy przedmiotów do podmiany
  const LIST1 = ['Puszka DZIK Tropic', 'Puszka DZIK Classic', 'Limitless Sour Apple', 'Kreatyna DZIK White'];
  let boxes = [], trees = [], items = [], lamps = [], whLights = [], hemi, amb, monitors = [], gateMesh, slender, emerg, audio;
  try { G.mute = localStorage.getItem('w11-sl-mute') === '1'; } catch (e) {}

  // ---------- ładowanie Three.js ----------
  // model Długiego/Slendera (slender.glb w repo: siatka + animacje idle / walk / run), ładowany dopiero przy otwarciu gry
  const ASSET_V = '8d3ecca270'; // wersja grafik w gry/img (omija cache)
  const MODEL_URL = 'gry/slender.glb?v=f540b68bb1';
  let mixer = null, acts = {}, curAct = '', modelP = null;
  function loadModel() {
    return modelP || (modelP = (async () => {
      const { GLTFLoader } = await import('https://cdn.jsdelivr.net/npm/three@0.160.0/examples/jsm/loaders/GLTFLoader.js');
      const g = await new GLTFLoader().loadAsync(MODEL_URL);
      const m = g.scene; m.traverse(o => { if (o.isMesh) { o.frustumCulled = false; (Array.isArray(o.material) ? o.material : [o.material]).forEach(x => { if (x.map) x.map.colorSpace = T.SRGBColorSpace; x.roughness = .85; x.metalness = 0; }); } });
      while (slender.children.length) slender.remove(slender.children[0]); // zamiast modelu z klocków
      slender.scale.setScalar(1); slender.add(m);
      mixer = new T.AnimationMixer(m); g.animations.forEach(c => { acts[c.name] = mixer.clipAction(c); });
      curAct = ''; slAnim('idle');
    })().catch(e => { modelP = null; console.warn('slender.glb', e); }));
  }
  function slAnim(n, ts = 1) {
    const a = acts[n]; if (!a) return; a.timeScale = ts; if (curAct === n) return;
    const old = acts[curAct]; a.reset().setEffectiveWeight(1).play(); if (old) old.crossFadeTo(a, .35, false); curAct = n;
  }
  async function loadThree() {
    if (T) return T;
    for (const u of THREE_URLS) { try { T = await import(u); return T; } catch (e) {} }
    throw new Error('Nie udało się pobrać silnika 3D (Three.js). Sprawdź internet.');
  }

  // ---------- tekstury z canvasa ----------
  function ctex(w, h, fn, rx = 1, ry = 1) {
    const c = document.createElement('canvas'); c.width = w; c.height = h; fn(c.getContext('2d'), w, h);
    const t = new T.CanvasTexture(c); t.colorSpace = T.SRGBColorSpace; t.wrapS = t.wrapT = T.RepeatWrapping; t.repeat.set(rx, ry); t.magFilter = T.NearestFilter; return t;
  }
  let seed = 3; const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
  const noise = (g, w, h, base, v, n = 4000) => { g.fillStyle = base; g.fillRect(0, 0, w, h); for (let i = 0; i < n; i++) { const k = (rnd() - .5) * v; g.fillStyle = `rgba(${k > 0 ? 255 : 0},${k > 0 ? 255 : 0},${k > 0 ? 255 : 0},${Math.abs(k) / 255})`; g.fillRect(rnd() * w, rnd() * h, 2, 2); } };

  // ---------- budowa świata ----------
  function build() {
    if (built) return; built = true;
    scene = new T.Scene(); scene.background = new T.Color(0x0b0c0e);
    cam = new T.PerspectiveCamera(70, 16 / 9, .05, 220); cam.rotation.order = 'YXZ'; scene.add(cam);
    hemi = new T.HemisphereLight(0xdfe8ff, 0x3a3328, 1.1); scene.add(hemi);
    amb = new T.AmbientLight(0xffffff, .35); scene.add(amb);
    // latarka
    flash = new T.SpotLight(0xfff1d0, 0, 32, .42, .45, 1.4); flash.position.set(.15, -.1, 0); flash.target.position.set(0, 0, -1); cam.add(flash); cam.add(flash.target);

    const M = (o) => new T.MeshLambertMaterial(o);
    const box = (w, h, d, mat, x, y, z, solid = true) => { const m = new T.Mesh(new T.BoxGeometry(w, h, d), mat); m.position.set(x, y, z); scene.add(m); if (solid) boxes.push({ x0: x - w / 2, x1: x + w / 2, z0: z - d / 2, z1: z + d / 2, m }); return m; };

    // --- magazyn ---
    const concrete = ctex(256, 256, (g, w, h) => { noise(g, w, h, '#8a8c8f', 60, 6000); g.strokeStyle = 'rgba(0,0,0,.25)'; g.lineWidth = 2; g.strokeRect(0, 0, w, h); }, 10, 8);
    const floor = new T.Mesh(new T.PlaneGeometry(40, 30), M({ map: concrete })); floor.rotation.x = -Math.PI / 2; scene.add(floor);
    // żółte linie na podłodze
    const yl = M({ color: 0xe8c020 });
    for (const x of [-3.2, 3.2]) { const l = new T.Mesh(new T.PlaneGeometry(.15, 28), yl); l.rotation.x = -Math.PI / 2; l.position.set(x, .01, 0); scene.add(l); }
    const metal = ctex(128, 128, (g, w, h) => { const gr = g.createLinearGradient(0, 0, w, 0); for (let i = 0; i <= 8; i++) gr.addColorStop(i / 8, i % 2 ? '#6d7884' : '#8793a0'); g.fillStyle = gr; g.fillRect(0, 0, w, h); noise(g, w, h, 'rgba(0,0,0,0)', 30, 800); }, 12, 2);
    const wallM = M({ map: metal });
    const ceil = new T.Mesh(new T.PlaneGeometry(40, 30), M({ color: 0x3b4048 })); ceil.rotation.x = Math.PI / 2; ceil.position.y = WH.h; scene.add(ceil);
    box(40, WH.h, .4, wallM, 0, WH.h / 2, 15.2);                 // ściana południowa
    box(.4, WH.h, 30, wallM, -20.2, WH.h / 2, 0);                // zachodnia
    box(.4, WH.h, 30, wallM, 20.2, WH.h / 2, 0);                 // wschodnia
    box(17, WH.h, .4, wallM, -11.5, WH.h / 2, -15.2);            // północna lewa
    box(17, WH.h, .4, wallM, 11.5, WH.h / 2, -15.2);             // północna prawa
    box(6, WH.h - GATE.h, .4, wallM, 0, GATE.h + (WH.h - GATE.h) / 2, -15.2, false); // nad bramą
    // brama (podnoszona)
    const gateTex = ctex(128, 128, (g, w, h) => { g.fillStyle = '#5a6470'; g.fillRect(0, 0, w, h); g.fillStyle = '#48515c'; for (let y = 0; y < h; y += 10) g.fillRect(0, y, w, 3); g.fillStyle = '#e8c020'; g.fillRect(0, h - 10, w, 10); g.fillStyle = '#111'; for (let x = 0; x < w; x += 20) g.fillRect(x, h - 10, 10, 10); });
    gateMesh = box(6, GATE.h, .3, M({ map: gateTex }), 0, GATE.h / 2, -15.15);
    gateMesh.userData.col = boxes[boxes.length - 1];
    // regały: niebieskie słupy, pomarańczowe belki, kartony
    const blue = M({ color: 0x2f5fa8 }), orange = M({ color: 0xe0701e });
    const cartonTex = ctex(64, 64, (g, w, h) => { g.fillStyle = '#b8854a'; g.fillRect(0, 0, w, h); g.fillStyle = '#e3c48f'; g.fillRect(w / 2 - 4, 0, 8, h); g.strokeStyle = 'rgba(0,0,0,.3)'; g.strokeRect(1, 1, w - 2, h - 2); });
    const cartonG = new T.BoxGeometry(1, 1, 1), cartonM = M({ map: cartonTex });
    const cartons = new T.InstancedMesh(cartonG, cartonM, 900); let ci = 0; const mtx = new T.Matrix4(), q = new T.Quaternion(), sc = new T.Vector3(), pos = new T.Vector3();
    const rack = (x0, x1, z) => {
      const len = x1 - x0, cx = (x0 + x1) / 2;
      boxes.push({ x0: x0 - .1, x1: x1 + .1, z0: z - .65, z1: z + .65 });
      for (let x = x0; x <= x1 + .01; x += 3) for (const dz of [-.55, .55]) { const p = new T.Mesh(new T.BoxGeometry(.12, 5, .12), blue); p.position.set(x, 2.5, z + dz); scene.add(p); }
      for (const y of [.15, 1.4, 2.65, 3.9]) {
        for (const dz of [-.55, .55]) { const b = new T.Mesh(new T.BoxGeometry(len, .14, .1), orange); b.position.set(cx, y, z + dz); scene.add(b); }
        const sh = new T.Mesh(new T.BoxGeometry(len, .04, 1.1), M({ color: 0x6b6f75 })); sh.position.set(cx, y + .07, z); scene.add(sh);
        for (let x = x0 + .3; x < x1 - .5 && ci < 900;) { const w = .6 + rnd() * .5, hh = .5 + rnd() * .55, d = .7 + rnd() * .3; if (rnd() > .18) { pos.set(x + w / 2, y + .09 + hh / 2, z + (rnd() - .5) * .15); sc.set(w, hh, d); q.setFromAxisAngle(new T.Vector3(0, 1, 0), (rnd() - .5) * .15); mtx.compose(pos, q, sc); cartons.setMatrixAt(ci++, mtx); } x += w + .08; }
      }
    };
    for (const z of [-9, -4, 1, 6]) { rack(-17, -5, z); rack(5, 17, z); }
    cartons.count = ci; scene.add(cartons);
    // biuro: biurka z komputerami (wschodni róg), palety
    const desk = M({ color: 0x8a6a48 }), dark = M({ color: 0x1c1f24 });
    for (const [x, z] of [[13, 11], [16.5, 11], [13, 13.6], [16.5, 13.6]]) {
      box(2.6, .08, 1.1, desk, x, .76, z); for (const dx of [-1.2, 1.2]) for (const dz of [-.45, .45]) box(.06, .76, .06, desk, x + dx, .38, z + dz, false);
      boxes.push({ x0: x - 1.3, x1: x + 1.3, z0: z - .55, z1: z + .55 });
      box(.9, .55, .05, dark, x, 1.15, z - .3, false); box(.08, .25, .08, dark, x, .9, z - .3, false);
      const scr = new T.Mesh(new T.PlaneGeometry(.82, .47), new T.MeshBasicMaterial({ map: ctex(64, 40, (g, w, h) => { g.fillStyle = '#0d3a6e'; g.fillRect(0, 0, w, h); g.fillStyle = '#5fb4ff'; for (let y = 6; y < h - 4; y += 6) g.fillRect(4, y, 10 + rnd() * 40, 2); g.fillStyle = '#ffd34d'; g.fillRect(w - 16, 4, 12, 8); }) }));
      scr.position.set(x, 1.15, z - .27); scene.add(scr); monitors.push(scr);
      box(.5, .03, .18, dark, x, .81, z + .1, false);
    }
    for (const [x, z] of [[-14, 12], [-10, 12.5], [7, -13], [-8, -13]]) { box(1.2, .15, 1.0, M({ color: 0xa07848 }), x, .08, z, false); box(1.1, .9 + rnd() * .5, .9, cartonM, x, .6, z); }
    // lampy pod sufitem + światła
    const lampM = new T.MeshBasicMaterial({ color: 0xfff6d8 });
    for (const x of [-12, 0, 12]) for (const z of [-9, 0, 9]) {
      const l = new T.Mesh(new T.BoxGeometry(2.2, .08, .3), lampM); l.position.set(x, WH.h - .3, z); scene.add(l); lamps.push(l);
      const pl = new T.PointLight(0xfff1d6, 38, 20, 1.6); pl.position.set(x, WH.h - .6, z); scene.add(pl); whLights.push(pl);
    }
    lamps.mat = lampM;
    // światło awaryjne przy bramie (czerwone, po zgaszeniu)
    emerg = new T.PointLight(0xff2a2a, 0, 12, 1.5); emerg.position.set(0, 5.2, -14.2); scene.add(emerg);
    const eb = new T.Mesh(new T.BoxGeometry(.5, .2, .15), new T.MeshBasicMaterial({ color: 0x551111 })); eb.position.set(0, 5.2, -14.95); scene.add(eb); emerg.userData.m = eb;
    // napis WYJŚCIE nad bramą
    const ex = new T.Mesh(new T.PlaneGeometry(1.4, .4), new T.MeshBasicMaterial({ map: ctex(128, 36, (g, w, h) => { g.fillStyle = '#0a5a1e'; g.fillRect(0, 0, w, h); g.fillStyle = '#7dff9a'; g.font = 'bold 24px sans-serif'; g.textAlign = 'center'; g.fillText('WYJŚCIE', w / 2, 27); }) }));
    ex.position.set(0, 5.8, -14.95); scene.add(ex);

    // --- las ---
    const grass = ctex(256, 256, (g, w, h) => { noise(g, w, h, '#1f2b17', 70, 9000); }, 30, 25);
    const ground = new T.Mesh(new T.PlaneGeometry(130, 105), M({ map: grass })); ground.rotation.x = -Math.PI / 2; ground.position.set(0, -.01, -65); scene.add(ground);
    const bark = ctex(64, 128, (g, w, h) => { noise(g, w, h, '#3b2a1e', 80, 1500); g.fillStyle = 'rgba(0,0,0,.35)'; for (let x = 0; x < w; x += 9) g.fillRect(x, 0, 2, h); }, 1, 3);
    const trunkG = new T.CylinderGeometry(.22, .32, 9, 7), crownG = new T.ConeGeometry(2.2, 6, 7);
    const trunks = new T.InstancedMesh(trunkG, M({ map: bark }), 420), crowns = new T.InstancedMesh(crownG, M({ color: 0x14261a }), 420);
    let ti = 0; seed = 11;
    const ITEM_F = [[-34, -48], [31, -40], [-12, -92], [42, -96]];
    while (ti < 420) {
      const x = FO.x0 + 2 + rnd() * (FO.x1 - FO.x0 - 4), z = FO.z0 + 2 + rnd() * (FO.z1 - FO.z0 - 6);
      if (Math.abs(x) < 5 && z > -26) continue; // ścieżka od bramy
      if (ITEM_F.some(([a, b]) => Math.hypot(a - x, b - z) < 4)) continue;
      if (trees.some(t => Math.hypot(t.x - x, t.z - z) < 2.2)) continue;
      const s = .8 + rnd() * .5; trees.push({ x, z, r: .4 * s });
      pos.set(x, 4.5 * s, z); sc.set(s, s, s); q.identity(); mtx.compose(pos, q, sc); trunks.setMatrixAt(ti, mtx);
      pos.set(x, (6.5 + rnd() * 1.5) * s, z); mtx.compose(pos, q, sc); crowns.setMatrixAt(ti, mtx); ti++;
    }
    scene.add(trunks, crowns);
    // charakterystyczne miejsca w lesie (przy przedmiotach): kontener, wiata, auto, kamień
    box(6, 2.6, 2.4, M({ color: 0x8a2d22 }), -34, 1.3, -50.5);
    box(3, 2.2, 3, M({ color: 0x55504a }), 31, 1.1, -42.2);
    box(4.2, 1.5, 2, M({ color: 0x2c3e66 }), -12, .75, -94.3);
    box(2.5, 2, 2.5, M({ color: 0x5c5c58 }), 42, 1, -98.4);

    // --- przedmioty: w magazynie produkty (sprite'y z wyciętych zdjęć), w lesie etykiety przyklejone do obiektów ---
    const TL = new T.TextureLoader();
    const PROD = [['gry/img/tropic.webp', .62, -18.9, .31, -12], ['gry/img/classic.webp', .62, 16.5, .81 + .31, 11.3], ['gry/img/limitless.webp', .42, -11, .21, 3.6], ['gry/img/kreatyna.webp', .52, 11, .26, -6.4]]; // [obrazek (pełna rozdzielczość), wysokość, x, y, z]
    PROD.forEach(([src, h, x, y, z]) => {
      const tex = TL.load(src + '?v=' + ASSET_V, t => { m.scale.set(h * t.image.width / t.image.height, h, 1); }); tex.colorSpace = T.SRGBColorSpace;
      const m = new T.Sprite(new T.SpriteMaterial({ map: tex })); m.scale.set(h * .5, h, 1); m.position.set(x, y, z); scene.add(m); items.push({ m, x, y, z, got: false, by: y });
    });
    const rTex = TL.load('gry/img/raben.png?v=' + ASSET_V); rTex.colorSpace = T.SRGBColorSpace; rTex.anisotropy = R.capabilities.getMaxAnisotropy(); // ostra etykieta pod kątem
    const rM = new T.MeshLambertMaterial({ map: rTex, color: 0xb0b0b0, emissive: 0x0c0c0c, side: T.DoubleSide });
    // [x, y, z] – przód obiektu (kontener, wiata, auto, głaz), etykieta lekko przed ścianą
    [[-34, 1.5, -49.27], [31, 1.3, -40.67], [-12, .85, -93.27], [42, 1.2, -97.12]].forEach(([x, y, z]) => {
      const m = new T.Mesh(new T.PlaneGeometry(.82, .56), rM); m.position.set(x, y, z); m.rotation.z = (Math.random() - .5) * .12; scene.add(m); items.push({ m, x, y, z: z + .25, got: false, flat: true });
    });

    // --- Slender (tymczasowy model) ---
    slender = new T.Group();
    const suit = M({ color: 0x0b0b0d }), white = M({ color: 0xf4f4f0 }), red = M({ color: 0x7a0e0e });
    const part = (w, h, d, m, x, y, z) => { const p = new T.Mesh(new T.BoxGeometry(w, h, d), m); p.position.set(x, y, z); slender.add(p); return p; };
    part(.16, 1.35, .16, suit, -.13, .68, 0); part(.16, 1.35, .16, suit, .13, .68, 0);       // nogi
    part(.52, .95, .26, suit, 0, 1.82, 0); part(.14, .75, .02, white, 0, 1.92, .135); part(.06, .55, .02, red, 0, 1.88, .145); // tułów, koszula, krawat
    const a1 = part(.1, 1.5, .1, suit, -.33, 1.55, 0), a2 = part(.1, 1.5, .1, suit, .33, 1.55, 0); a1.rotation.z = .08; a2.rotation.z = -.08; // długie ręce
    part(.08, .2, .08, white, -.39, .78, 0); part(.08, .2, .08, white, .39, .78, 0);
    // głowa z twarzą „Długiego” (zdjęcie naklejone na przód kuli; reszta w kolorze skóry)
    const faceC = document.createElement('canvas'); faceC.width = 512; faceC.height = 256; const fg = faceC.getContext('2d'); fg.fillStyle = '#967068'; fg.fillRect(0, 0, 512, 256);
    const faceT = new T.CanvasTexture(faceC); faceT.colorSpace = T.SRGBColorSpace;
    const fi = new Image(); fi.onload = () => { fg.fillStyle = '#5a4030'; fg.fillRect(0, 0, 512, 34); fg.drawImage(fi, 128 - 74, 22, 148, 214); faceT.needsUpdate = true; }; fi.src = SL_FACE;
    const head = new T.Mesh(new T.SphereGeometry(.22, 20, 14), M({ map: faceT })); head.scale.set(1, 1.3, 1.05); head.position.set(0, 2.58, 0); slender.add(head);
    slender.scale.setScalar(1.42); // wyraźnie wyższy od gracza (~3,9 m)
    slender.position.set(0, -50, 0); scene.add(slender);
    G.sl = { x: 0, z: -100, vis: false };

    clock = new T.Clock();
  }

  // ---------- kolizje ----------
  function blocked(x, z, r) {
    for (const b of boxes) if (b !== (G.gateY > 3.6 ? gateMesh.userData.col : null) && x + r > b.x0 && x - r < b.x1 && z + r > b.z0 && z - r < b.z1) return true;
    for (const t of trees) if (Math.hypot(t.x - x, t.z - z) < t.r + r) return true;
    if (!G.lightsOut && Math.hypot(NPC.x - x, NPC.z - z) < .5 + r) return true; // Długi przy komputerze
    const inWH = z > -15.4;
    if (inWH) return x < WH.x0 + r || x > WH.x1 - r || z > WH.z1 - r || (z < -14.6 && !(G.gateY > 3.6 && x > GATE.x0 + r && x < GATE.x1 - r));
    return x < FO.x0 + r || x > FO.x1 - r || z < FO.z0 + r;
  }
  function segBlocked(ax, az, bx, bz) {
    for (const b of boxes) {
      if (b === gateMesh.userData.col && G.gateY > 3.6) continue;
      let t0 = 0, t1 = 1; const dx = bx - ax, dz = bz - az;
      const clip = (p, q2) => { if (p === 0) return q2 >= 0; const r = q2 / p; if (p < 0) { if (r > t1) return false; if (r > t0) t0 = r; } else { if (r < t0) return false; if (r < t1) t1 = r; } return true; };
      if (clip(-dx, ax - b.x0) && clip(dx, b.x1 - ax) && clip(-dz, az - b.z0) && clip(dz, b.z1 - az) && t0 <= t1) return true;
    }
    return false;
  }

  // ---------- dźwięk (WebAudio: szum przy patrzeniu, dudnienie po zgaszeniu) ----------
  function audioInit() {
    if (audio) return; const A = window.AudioContext || window.webkitAudioContext; if (!A) return;
    const ac = new A(), master = ac.createGain(); master.gain.value = G.mute ? 0 : 1; master.connect(ac.destination);
    const buf = ac.createBuffer(1, ac.sampleRate * 2, ac.sampleRate), d = buf.getChannelData(0); for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
    const ns = ac.createBufferSource(); ns.buffer = buf; ns.loop = true; const ng = ac.createGain(); ng.gain.value = 0; const bp = ac.createBiquadFilter(); bp.type = 'bandpass'; bp.frequency.value = 1800; bp.Q.value = .6;
    ns.connect(bp).connect(ng).connect(master); ns.start();
    const drone = ac.createGain(); drone.gain.value = 0; drone.connect(master);
    for (const f of [41, 43.5, 82]) { const o = ac.createOscillator(); o.type = f > 80 ? 'triangle' : 'sawtooth'; o.frequency.value = f; const lp = ac.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 160; o.connect(lp).connect(drone); o.start(); }
    const hum = ac.createGain(); hum.gain.value = .025; hum.connect(master); { const o = ac.createOscillator(); o.frequency.value = 100; o.type = 'sine'; o.connect(hum); o.start(); } // brzęczenie lamp
    audio = { ac, master, ng, drone, hum };
  }
  function boom(len = .6, vol = .6, f = 70) { if (!audio || G.mute) return; const { ac, master } = audio, o = ac.createOscillator(), g = ac.createGain(); o.frequency.setValueAtTime(f * 2, ac.currentTime); o.frequency.exponentialRampToValueAtTime(f / 2, ac.currentTime + len); g.gain.setValueAtTime(vol, ac.currentTime); g.gain.exponentialRampToValueAtTime(.001, ac.currentTime + len); o.connect(g).connect(master); o.start(); o.stop(ac.currentTime + len); }
  function chime() { if (!audio || G.mute) return; const { ac, master } = audio; [660, 880].forEach((f, i) => { const o = ac.createOscillator(), g = ac.createGain(); o.type = 'triangle'; o.frequency.value = f; const t = ac.currentTime + i * .09; g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(.18, t + .02); g.gain.exponentialRampToValueAtTime(.001, t + .5); o.connect(g).connect(master); o.start(t); o.stop(t + .55); }); }

  // ---------- Slender ----------
  function slPlace() {
    const inWH = G.z > -15.2, agg = Math.max(0, G.got - 4) / 4;
    const dist = (inWH ? 16 : 22) - agg * (inWH ? 9 : 14);
    for (let i = 0; i < 60; i++) {
      // zwykle za plecami albo z boku; przy wyższym poziomie czasem też przed graczem
      const behind = Math.random() > agg * .35, a = i >= 30 ? Math.random() * Math.PI * 2 : G.yaw + (behind ? Math.PI + (Math.random() - .5) * 2.2 : (Math.random() - .5) * 1.4) /* po 30 próbach – dowolny kierunek */, d = dist * (.75 + Math.random() * .5);
      const x = G.x - Math.sin(a) * d, z = G.z - Math.cos(a) * d;
      if ((z > -15.2) !== inWH) continue;
      if (blocked(x, z, .5) || Math.hypot(x - G.x, z - G.z) < 4) continue;
      G.sl.x = x; G.sl.z = z; slender.position.set(x, 0, z); return;
    }
  }
  function slUpdate(dt) {
    // Slender pojawia się dopiero w lesie (po pierwszym wyjściu za bramę zostaje aktywny)
    if (!G.forest) { if (G.z < -16.5) { G.forest = true; G.slT = 4 + Math.random() * 3; quest(); } if (G.lightsOut) slender.position.y = -50; return; }
    if (G.slFirst !== true) { if ((G.slT -= dt) > 0) { slender.position.y = -50; return; } G.slFirst = true; slPlace(); G.slT = 8; }
    slender.position.y = 0;
    const dx = G.sl.x - G.x, dz = G.sl.z - G.z, dist = Math.hypot(dx, dz);
    slender.rotation.y = Math.atan2(-dx, -dz);
    // czy gracz na niego patrzy
    const fx = -Math.sin(G.yaw), fz = -Math.cos(G.yaw), ang = Math.acos(Math.max(-1, Math.min(1, (dx * fx + dz * fz) / (dist || 1))));
    const dark = G.lightsOut || G.z < -15.2, range = dark ? (G.flashOn ? 24 : 9) : 40;
    const sameArea = (G.sl.z > -15.2) === (G.z > -15.2) || (G.gateY > 3.6 && Math.abs(G.z + 15) < 12);
    const seen = sameArea && dist < range && ang < .62 && !segBlocked(G.x, G.z, G.sl.x, G.sl.z);
    const agg = Math.max(0, G.got - 4) / 4; // agresja rośnie z przedmiotami z lasu
    const NEAR = 12; // szum dopiero z bliska: od 12 m, im bliżej tym mocniej
    if (seen && dist < NEAR) G.stat += dt * (NEAR - dist) / NEAR * (.28 + agg * .22);
    else G.stat = Math.max(0, G.stat - dt * .22);
    if (dist < 4 && !seen) G.stat += dt * .03;
    if (dist < 1.6 || G.stat >= 1) return caught();
    G.slT -= dt;
    const v = .9 + agg * 2.4; // m/s: na początku chód, z kolejnymi etykietami szybciej
    if (dist > 1.7) {
      const ux = -dx / dist, uz = -dz / dist; let moved = false;
      for (const a of [0, .6, -.6, 1.2, -1.2]) { // omijanie drzew
        const c = Math.cos(a), s = Math.sin(a), mx = (ux * c - uz * s) * v * dt, mz = (ux * s + uz * c) * v * dt;
        if (!blocked(G.sl.x + mx, G.sl.z + mz, .4)) { G.sl.x += mx; G.sl.z += mz; moved = true; break; }
      }
      G.sl.stuck = moved ? 0 : (G.sl.stuck || 0) + dt;
      slender.position.x = G.sl.x; slender.position.z = G.sl.z;
    }
    if (v > 2) slAnim('run', Math.min(1.3, v / 3.2)); else slAnim('walk', 1);
    if ((G.slT <= 0 && !seen && dist > 26) || G.sl.stuck > 2.5) { slPlace(); G.slT = 9 - agg * 6 + Math.random() * 3; G.sl.stuck = 0; }
    if (seen && !G.sl.vis) boom(.9, .35, 45); // „uderzenie” przy pierwszym zobaczeniu
    G.sl.vis = seen;
  }
  function caught() {
    G.run = false; G.st = 'dead'; if (document.pointerLockElement) document.exitPointerLock();
    const js = $('#slJs'); js.hidden = false; boom(1.4, .9, 40); if (audio && !G.mute) audio.ng.gain.value = .9;
    setTimeout(() => { js.hidden = true; if (audio) audio.ng.gain.value = 0; ov(`<b>ZŁAPAŁ CIĘ</b><span>Zebrane przedmioty: ${G.got}/${G.total}</span><button type="button" class="p" data-go="new">Jeszcze raz</button>`); }, 1500);
  }

  // ---------- zgaszenie świateł + brama ----------
  function lightsOut() {
    G.lightsOut = true; boom(1.2, .7, 55);
    whLights.forEach(l => l.intensity = 0); lamps.mat.color.set(0x222222); hemi.intensity = .03; amb.intensity = .015;
    monitors.forEach(m => m.material.color.set(0x334455));
    emerg.intensity = 9; emerg.userData.m.material.color.set(0xff3030);
    scene.fog = new T.FogExp2(0x050607, .045); scene.background.set(0x030304);
    G.flashOn = true; if (audio) { audio.hum.gain.value = 0; }
    slender.position.y = -50; quest();
    say('Światła zgasły… brama się otwiera');
  }

  // ---------- pętla ----------
  function update(dt) {
    // ruch
    const k = G.keys, f = (k.w || k.arrowup ? 1 : 0) - (k.s || k.arrowdown ? 1 : 0) + G.touch.mz, s = (k.d || k.arrowright ? 1 : 0) - (k.a || k.arrowleft ? 1 : 0) + G.touch.mx;
    const sprint = (k.shift || G.touch.run) && G.stam > 0 && (f || s);
    G.stam = Math.max(0, Math.min(1, G.stam + (sprint ? -.22 : .12) * dt));
    const sp = (sprint ? 5.2 : 2.9) * dt, len = Math.hypot(f, s) || 1;
    const vx = (-Math.sin(G.yaw) * f + Math.cos(G.yaw) * s) / len * sp, vz = (-Math.cos(G.yaw) * f - Math.sin(G.yaw) * s) / len * sp;
    if (!blocked(G.x + vx, G.z, .35)) G.x += vx; if (!blocked(G.x, G.z + vz, .35)) G.z += vz;
    G.bob = (f || s) ? (G.bob || 0) + dt * (sprint ? 13 : 8) : 0;
    G.yaw -= G.mx; G.pitch = Math.max(-1.2, Math.min(1.2, G.pitch - G.my)); G.mx = G.my = 0;
    cam.position.set(G.x, 1.65 + Math.sin(G.bob) * .04, G.z); cam.rotation.set(G.pitch, G.yaw, 0);
    flash.intensity = G.flashOn ? 55 : 0;
    // Długi: odwraca się do gracza, wręcza listę
    if (!G.lightsOut) {
      const ndx = G.x - NPC.x, ndz = G.z - NPC.z, nd = Math.hypot(ndx, ndz);
      const want = nd < 5 ? Math.atan2(ndx, ndz) : NPC.face; let da = want - slender.rotation.y; da = Math.atan2(Math.sin(da), Math.cos(da)); slender.rotation.y += da * Math.min(1, dt * 4);
      const near = G.q === 'list' && nd < 2.8; $('#slPr').classList.toggle('on', near);
      if (near && (G.use || nd < 1.6)) takeList();
    } else $('#slPr').classList.remove('on');
    // przedmioty – podnoszenie z bliska (albo E, patrząc na nie); dopiero po wzięciu listy
    const t = clock.elapsedTime;
    for (const it of items) if (!it.got) {
      if (!it.flat) it.m.position.y = it.by + Math.sin(t * 2 + it.x) * .03;
      const d = Math.hypot(it.x - G.x, it.z - G.z);
      if (G.q !== 'list' && (d < 1.5 || (G.use && d < 2.6))) { it.got = true; scene.remove(it.m); G.got++; chime(); say(`Zebrano ${G.got}/${G.total}`); listRender(); quest();
        if (G.got === 4) lightsOut();
        if (G.got === G.total) return win(); }
    }
    G.use = false;
    // brama podnosi się po zgaszeniu
    if (G.lightsOut && G.gateY < 4.2) { G.gateY = Math.min(4.2, G.gateY + dt * .7); gateMesh.position.y = GATE.h / 2 + G.gateY; }
    if (G.lightsOut) emerg.intensity = 6 + Math.sin(t * 6) * 3;
    slUpdate(dt);
    if (audio) { audio.ng.gain.value = G.mute ? 0 : Math.min(.3, G.stat * G.stat * .35); audio.drone.gain.value = G.mute ? 0 : (G.lightsOut ? .05 + G.got / G.total * .1 : 0); }
    // HUD
    $('#slHud').textContent = `${G.got}/${G.total}`;
    $('#slSt').style.width = (G.stam * 100) + '%';
    $('#slNs').style.opacity = Math.min(.45, G.stat * .5).toFixed(2);
    G.msgT -= dt; $('#slMsg').classList.toggle('on', G.msgT > 0);
  }
  function takeList() {
    G.q = 'collect'; chime(); say('Długi: „Masz tu listę. Zbierz to wszystko.”'); $('#slPr').classList.remove('on');
    $('#slList').hidden = false; listRender(); quest();
  }
  function listRender() {
    const got = items.slice(0, 4).map(i => i.got);
    $('#slList').innerHTML = '<h4>Lista od Długiego</h4><ol>' + LIST1.map((n, i) => `<li class="${got[i] ? 'ok' : ''}">${esc(n)}</li>`).join('') + '</ol>';
  }
  function quest() {
    const wh = items.slice(0, 4).filter(i => i.got).length, fo = items.slice(4).filter(i => i.got).length;
    const q = G.q === 'list' ? 'Weź listę od Długiego' : !G.lightsOut ? `Zbierz przedmioty z listy (${wh}/4)` : !G.forest ? 'Wyjdź bramą do lasu' : `Znajdź etykiety Raben w lesie (${fo}/4)`;
    $('#slQ').innerHTML = '<small>ZADANIE</small>' + esc(q);
  }
  function win() { G.run = false; G.st = 'win'; if (document.pointerLockElement) document.exitPointerLock(); boom(.5, .3, 120); ov(`<b>UCIEKŁEŚ!</b><span>Wszystkie przedmioty zebrane (${G.total}/${G.total}).</span><button type="button" class="p" data-go="new">Zagraj jeszcze raz</button>`); }
  function say(m) { $('#slMsg').textContent = m; G.msgT = 2.4; }
  let noiseT = 0;
  function loop() {
    if (!G.open) { G.raf = 0; return; }
    const dt = Math.min(.05, clock.getDelta());
    if (G.run) update(dt);
    if (mixer) mixer.update(dt);
    resize(); R.render(scene, cam);
    if ((noiseT += dt) > .06 && G.stat > .02) { noiseT = 0; drawNoise(); }
    G.raf = requestAnimationFrame(loop);
  }
  function drawNoise() {
    const c = $('#slNs'), x = c.getContext('2d'), w = c.width = 160, h = c.height = 90, im = x.createImageData(w, h), d = im.data;
    for (let i = 0; i < d.length; i += 4) { const v = Math.random() * 255; d[i] = d[i + 1] = d[i + 2] = v; d[i + 3] = 255; }
    x.putImageData(im, 0, 0);
  }
  function resize() {
    const r = cv.getBoundingClientRect(), w = Math.round(r.width), h = Math.round(r.height);
    if (!w || (cv._w === w && cv._h === h)) return; cv._w = w; cv._h = h;
    R.setSize(w, h, false); cam.aspect = w / h; cam.updateProjectionMatrix();
  }

  // ---------- start / reset ----------
  function reset() {
    G.x = 0; G.z = 12; G.yaw = 0; G.pitch = 0; G.got = 0; G.stam = 1; G.stat = 0; G.lightsOut = false; G.gateY = 0; G.flashOn = false; G.slT = 6; G.forest = false; G.slFirst = false; G.q = 'list';
    slender.position.set(NPC.x, 0, NPC.z); slender.rotation.y = NPC.face; slAnim('idle'); $('#slList').hidden = true; $('#slPr').classList.remove('on');
    items.forEach(it => { it.got = false; if (!it.m.parent) scene.add(it.m); });
    whLights.forEach(l => l.intensity = 38); lamps.mat.color.set(0xfff6d8); hemi.intensity = 1.1; amb.intensity = .35; emerg.intensity = 0; emerg.userData.m.material.color.set(0x551111);
    monitors.forEach(m => m.material.color.set(0xffffff));
    scene.fog = null; scene.background.set(0x0b0c0e); gateMesh.position.y = GATE.h / 2; G.sl.x = 0; G.sl.z = -100; quest();
    if (audio) audio.hum.gain.value = .025;
  }
  function start(kind) {
    if (kind === 'new') reset();
    audioInit(); if (audio && audio.ac.state === 'suspended') audio.ac.resume();
    ov(''); G.run = true; G.st = 'run'; clock.getDelta(); lockPtr();
  }
  function lockPtr() { if (matchMedia('(pointer:fine)').matches && cv.requestPointerLock && document.pointerLockElement !== cv) { try { const p = cv.requestPointerLock(); if (p && p.catch) p.catch(() => {}); } catch (e) {} } }
  const ov = h => { const o = $('#slOv'); if (h) { o.innerHTML = h; o.hidden = false; } else o.hidden = true; };

  let inited = false;
  function initUI() {
    if (inited) return; inited = true;
    cv = $('#slC');
    const key = (e, down) => {
      if (!G.open) return; const k = e.key.toLowerCase();
      if (!['w', 'a', 's', 'd', 'arrowup', 'arrowdown', 'arrowleft', 'arrowright', 'shift', 'f', 'e', ' '].includes(k)) return;
      e.preventDefault(); G.keys[k] = down;
      if (down && k === 'f' && G.run) G.flashOn = !G.flashOn;
      if (down && (k === 'e' || k === ' ') && G.run) G.use = true;
    };
    document.addEventListener('keydown', e => key(e, true)); document.addEventListener('keyup', e => key(e, false));
    document.addEventListener('mousemove', e => { if (document.pointerLockElement === cv && G.run) { G.mx += e.movementX * .0022; G.my += e.movementY * .0022; } });
    document.addEventListener('pointerlockchange', () => { if (G.open && G.run && document.pointerLockElement !== cv && matchMedia('(pointer:fine)').matches) { G.run = false; G.st = 'pause'; G.keys = {}; ov('<b>PAUZA</b><span>Kliknij, aby wrócić do gry</span><button type="button" class="p" data-go="resume">Wróć</button>'); } });
    cv.addEventListener('click', () => { if (G.run) lockPtr(); });
    $('#slOv').addEventListener('click', e => { const b = e.target.closest('[data-go]'); if (b) start(b.dataset.go); });
    // dotyk: lewa połowa – ruch (joystick), prawa – rozglądanie
    const tp = {};
    $('#slWrap').addEventListener('pointerdown', e => { if (e.pointerType === 'mouse' || !G.run || e.target.closest('button')) return; const r = cv.getBoundingClientRect(); tp[e.pointerId] = { x: e.clientX, y: e.clientY, left: e.clientX < r.left + r.width / 2 }; });
    $('#slWrap').addEventListener('pointermove', e => { const p = tp[e.pointerId]; if (!p) return; e.preventDefault();
      if (p.left) { G.touch.mx = Math.max(-1, Math.min(1, (e.clientX - p.x) / 45)); G.touch.mz = Math.max(-1, Math.min(1, -(e.clientY - p.y) / 45)); }
      else { G.mx += (e.clientX - p.x) * .006; G.my += (e.clientY - p.y) * .006; p.x = e.clientX; p.y = e.clientY; } });
    const up = e => { const p = tp[e.pointerId]; if (p && p.left) { G.touch.mx = 0; G.touch.mz = 0; } delete tp[e.pointerId]; };
    $('#slWrap').addEventListener('pointerup', up); $('#slWrap').addEventListener('pointercancel', up);
    $('#slFl').onclick = () => { if (G.run) G.flashOn = !G.flashOn; };
    $('#slRun').addEventListener('pointerdown', e => { e.stopPropagation(); G.touch.run = true; }); ['pointerup', 'pointercancel', 'pointerleave'].forEach(ev => $('#slRun').addEventListener(ev, () => G.touch.run = false));
    const sndBtn = () => $('#slSnd').textContent = G.mute ? '🔇' : '🔊'; sndBtn();
    $('#slSnd').onclick = () => { G.mute = !G.mute; try { localStorage.setItem('w11-sl-mute', G.mute ? '1' : '0'); } catch (e) {} sndBtn(); if (audio) audio.master.gain.value = G.mute ? 0 : 1; };
    $('#sl').addEventListener('close', () => { G.open = false; G.run = false; G.keys = {}; if (document.pointerLockElement) document.exitPointerLock(); if (audio) audio.ac.suspend(); });
    $('#slX').onclick = () => $('#sl').close();
    $('#slHub').onclick = () => { $('#sl').close(); hubOpen(); };
  }
  async function open() {
    initUI(); $('#sl').showModal(); G.open = true;
    if (!T) {
      ov('<b>Ładowanie…</b><span>Pobieranie silnika 3D</span>');
      try { await loadThree(); } catch (e) { ov(`<b>Błąd</b><span>${esc(e.message)}</span>`); return; }
    }
    if (!R) { R = new T.WebGLRenderer({ canvas: cv, antialias: false, powerPreference: 'high-performance' }); R.setPixelRatio(PIX); R.toneMapping = T.ACESFilmicToneMapping; R.toneMappingExposure = 1.15; } // tone mapping: latarka z bliska nie przepala etykiet na biało
    build();
    if (!mixer) { ov('<b>Ładowanie…</b><span>Pobieranie modelu postaci</span>'); await loadModel(); }
    reset(); G.run = false; G.st = 'menu';
    ov(`<b>SLENDER: MAGAZYN</b><span>Długi czeka przy komputerze z listą rzeczy do zebrania. Gdy zbierzesz wszystko, zgasną światła i otworzy się brama do lasu, gdzie trzeba znaleźć 4 etykiety Raben…<br>Tam nie patrz na niego zbyt długo.</span><span class="slk">WASD – ruch · mysz – rozglądanie · Shift – sprint · F – latarka · E – podnieś<br>Telefon: lewa strona ekranu – ruch, prawa – rozglądanie</span><button type="button" class="p" data-go="new">Start</button>`);
    if (audio) audio.ac.resume();
    if (!G.raf) { clock.getDelta(); G.raf = requestAnimationFrame(loop); }
  }
  return { open, G, _dbg: () => ({ scene, cam, items, slender, boxes, step: (dt = .016, nr) => { if (G.run) update(dt); if (nr) return; resize(); R.render(scene, cam); } }) };
})();

// ===== FN – kanciapa brygadzistów (Three.js, ten sam silnik co Slender) =====
// Na razie: menu główne, kanciapa, telefon od Lukasa Frozena, zegar 00:00→06:00 (koniec zmiany zapisuje postęp).
const FN = (() => {
  const URLS = ['https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.min.js', 'https://unpkg.com/three@0.160.0/build/three.module.min.js'];
  const HOUR = 60; // 1 godzina w grze = 60 s
  let T, R, scene, cam, clock, cv, built = false, ray, phone = {}, audio, ringT = 0;
  const S = { vol: .8, sens: 1, subs: true };
  try { Object.assign(S, JSON.parse(localStorage.getItem('w11-fn-set') || '{}')); } catch (e) {}
  const G = { cam: -1, open: false, st: 'menu', night: 1, t: 0, yaw: 0, look: 0, mx: .5, my: .5, call: null, lines: [], li: 0, lt: 0 };
  const done = () => { try { return +localStorage.getItem('w11-fn-night') || 0; } catch (e) { return 0; } };

  async function load() { if (T) return; for (const u of URLS) { try { T = await import(u); return; } catch (e) {} } throw new Error('Nie udało się pobrać silnika 3D.'); }
  function ctex(w, h, fn) { const c = document.createElement('canvas'); c.width = w; c.height = h; fn(c.getContext('2d'), w, h); const t = new T.CanvasTexture(c); t.colorSpace = T.SRGBColorSpace; t.anisotropy = 4; return t; }

  // ---------- kanciapa ----------
  function build() {
    if (built) return; built = true;
    scene = new T.Scene(); scene.background = new T.Color(0x0a0b0d);
    cam = new T.PerspectiveCamera(68, 16 / 9, .03, 80); cam.position.set(0, 1.18, .95); cam.rotation.order = 'YXZ'; scene.add(cam);
    scene.add(new T.HemisphereLight(0xffffff, 0x50555c, .55));
    const lamp = new T.PointLight(0xf4f8ff, 9, 9, 1.4); lamp.position.set(0, 2.55, .2); scene.add(lamp);
    const M = o => new T.MeshLambertMaterial(o), add = (g, m, x, y, z) => { const o = new T.Mesh(g, m); o.position.set(x, y, z); scene.add(o); return o; };
    const B = (w, h, d, m, x, y, z) => add(new T.BoxGeometry(w, h, d), m, x, y, z);
    const white = M({ color: 0xeceeee }), whiteD = M({ color: 0xdfe2e3 });
    // podłoga, sufit, ściany (białe)
    const floorT = ctex(256, 256, (g, w, h) => { g.fillStyle = '#9a9ea3'; g.fillRect(0, 0, w, h); for (let i = 0; i < 3000; i++) { g.fillStyle = `rgba(0,0,0,${Math.random() * .08})`; g.fillRect(Math.random() * w, Math.random() * h, 2, 2); } g.strokeStyle = 'rgba(0,0,0,.18)'; for (let i = 0; i <= w; i += 64) { g.beginPath(); g.moveTo(i, 0); g.lineTo(i, h); g.moveTo(0, i); g.lineTo(w, i); g.stroke(); } });
    floorT.wrapS = floorT.wrapT = T.RepeatWrapping; floorT.repeat.set(3, 2.5);
    const fl = add(new T.PlaneGeometry(6.4, 5), M({ map: floorT }), 0, 0, .5); fl.rotation.x = -Math.PI / 2;
    const ce = add(new T.PlaneGeometry(6.4, 5), M({ color: 0xf2f2f2 }), 0, 2.8, .5); ce.rotation.x = Math.PI / 2;
    B(2.2, .04, .35, new T.MeshBasicMaterial({ color: 0xf6f9ff }), 0, 2.77, .2); // świetlówka
    B(.1, 2.8, 5, white, -3.2, 1.4, .5); B(.1, 2.8, 5, white, 3.2, 1.4, .5); B(6.4, 2.8, .1, white, 0, 1.4, 3);
    // ściana frontowa: szerokie okno (x -2.8..1.0) + drzwi po prawej (x 1.55..2.55)
    const FZ = -1.4;
    B(6.4, 1.0, .12, white, 0, .5, FZ);                       // pod oknem
    B(6.4, .45, .12, white, 0, 2.575, FZ);                    // nad oknem/drzwiami
    B(.4, 1.35, .12, white, -3.0, 1.675, FZ);                 // lewy filar
    B(.55, 1.35, .12, white, 1.275, 1.675, FZ);               // między oknem a drzwiami (nad parapetem)
    B(.65, 2.35, .12, white, 2.875, 1.175, FZ);               // za drzwiami
    B(.55, 1.0, .12, white, 1.275, .5, FZ);
    // rama okna + szyba
    const frame = M({ color: 0xc9cdd0 });
    B(3.8, .06, .2, frame, -1.0, 1.0, FZ); B(3.8, .06, .16, frame, -1.0, 2.35, FZ); B(.06, 1.35, .16, frame, -2.8, 1.675, FZ); B(.06, 1.35, .16, frame, 1.0, 1.675, FZ); B(.05, 1.35, .14, frame, -.9, 1.675, FZ);
    const glass = add(new T.PlaneGeometry(3.8, 1.35), new T.MeshBasicMaterial({ color: 0x9fc4d8, transparent: true, opacity: .08 }), -1.0, 1.675, FZ); glass.renderOrder = 2;
    B(3.8, .04, .28, whiteD, -1.0, 1.0, FZ + .12); // parapet
    // drzwi (białe) z ościeżnicą i klamką
    const door = new T.Group(); door.position.set(1.55, 0, FZ); scene.add(door);
    const leaf = new T.Mesh(new T.BoxGeometry(1.0, 2.1, .05), M({ color: 0xf4f5f5 })); leaf.position.set(.5, 1.05, 0); door.add(leaf);
    const hnd = new T.Mesh(new T.BoxGeometry(.14, .03, .04), M({ color: 0x9aa0a6 })); hnd.position.set(.88, 1.0, .05); door.add(hnd);
    B(.06, 2.15, .16, frame, 1.53, 1.075, FZ); B(.06, 2.15, .16, frame, 2.57, 1.075, FZ); B(1.1, .06, .16, frame, 2.05, 2.15, FZ);
    phone.door = door;
    // biurko
    const wood = M({ color: 0xc8b494 }), dark = M({ color: 0x1c1f24 }), grey = M({ color: 0x3a3f46 });
    B(2.5, .05, .85, wood, 0, .75, -.35); B(.05, .73, .8, grey, -1.2, .37, -.35); B(.05, .73, .8, grey, 1.2, .37, -.35); B(2.4, .5, .03, grey, 0, .5, -.75);
    // monitor (na środku) – ekran z aplikacją W11
    B(.62, .38, .03, dark, 0, 1.12, -.62); B(.06, .2, .05, dark, 0, .88, -.64); B(.22, .015, .16, dark, 0, .78, -.62);
    const scr = add(new T.PlaneGeometry(.58, .34), new T.MeshBasicMaterial({ map: ctex(512, 300, (g, w, h) => {
      g.fillStyle = '#0f1217'; g.fillRect(0, 0, w, h); g.fillStyle = '#1b2030'; g.fillRect(0, 0, w, 34); g.fillStyle = '#fff'; g.font = 'bold 18px sans-serif'; g.fillText('DZIK / W11', 12, 23);
      g.fillStyle = '#5b8cff'; g.fillRect(w - 120, 7, 108, 20); g.fillStyle = '#fff'; g.font = '13px sans-serif'; g.fillText('Dostawa', w - 92, 22);
      for (let i = 0; i < 6; i++) { const y = 46 + i * 41; g.fillStyle = '#171b24'; g.fillRect(10, y, w - 20, 35); g.fillStyle = '#dfe6f3'; g.font = '13px sans-serif'; g.fillText(['CORE T-SHIRT SLIM BLACK', 'PRO LIFT GRIP REGULAR', 'CORE HOODIE NAVY', 'CORE JOGGERS BLACK', 'LIMITLESS SOUR APPLE', 'DZIK ENERGY TROPIC'][i], 18, y + 15); g.fillStyle = '#7c8799'; g.font = '11px sans-serif'; g.fillText('SKU DM' + (1000 + i * 137) + '-99X', 18, y + 29);
        ['S', 'M', 'L', 'XL'].forEach((z, k) => { g.fillStyle = (i + k) % 5 ? '#1f3d2a' : '#4a3a12'; g.fillRect(w - 200 + k * 46, y + 7, 40, 21); g.fillStyle = '#9fe3b4'; g.font = 'bold 12px sans-serif'; g.fillText(z + ' ' + ((i * 7 + k * 13) % 40), w - 196 + k * 46, y + 22); }); }
    }) }), 0, 1.12, -.603);
    // laptop (po lewej): podstawa z klawiaturą i touchpadem, otwarta klapa z ramką – klik = system kamer
    const lapG = new T.Group(); lapG.position.set(-.72, .776, -.36); lapG.rotation.y = .28; scene.add(lapG);
    const alu = M({ color: 0x9ba1a7 });
    const lbase = new T.Mesh(new T.BoxGeometry(.36, .018, .25), alu); lbase.position.y = .009; lapG.add(lbase);
    const lkb = new T.Mesh(new T.PlaneGeometry(.31, .12), M({ map: ctex(128, 50, (g, w, h) => { g.fillStyle = '#2a2d31'; g.fillRect(0, 0, w, h); g.fillStyle = '#4a4f56'; for (let y = 3; y < h - 5; y += 9) for (let x = 3; x < w - 5; x += 9) g.fillRect(x, y, 7, 7); g.fillRect(34, h - 10, 60, 7); }) }));
    lkb.rotation.x = -Math.PI / 2; lkb.position.set(0, .0185, -.04); lapG.add(lkb);
    const ltp = new T.Mesh(new T.PlaneGeometry(.1, .06), M({ color: 0x80868c })); ltp.rotation.x = -Math.PI / 2; ltp.position.set(0, .0186, .07); lapG.add(ltp);
    const lid = new T.Group(); lid.position.set(0, .018, -.125); lid.rotation.x = -.32; lapG.add(lid);
    const lb = new T.Mesh(new T.BoxGeometry(.36, .235, .01), alu); lb.position.set(0, .1175, -.005); lid.add(lb);
    const lbz = new T.Mesh(new T.PlaneGeometry(.345, .222), new T.MeshBasicMaterial({ color: 0x111111 })); lbz.position.set(0, .1175, .0005); lid.add(lbz);
    const ls = new T.Mesh(new T.PlaneGeometry(.32, .195), new T.MeshBasicMaterial({ map: ctex(256, 156, (g, w, h) => { g.fillStyle = '#0b0f0c'; g.fillRect(0, 0, w, h); g.fillStyle = '#1c2a1f'; for (let i = 0; i < 6; i++) g.fillRect(6 + (i % 3) * 82, 22 + Math.floor(i / 3) * 64, 78, 58); g.fillStyle = '#7dff9a'; g.font = 'bold 12px monospace'; g.fillText('KAMERY W11', 8, 14); g.fillStyle = '#ff3030'; g.beginPath(); g.arc(w - 14, 9, 4, 0, 7); g.fill(); g.fillStyle = '#5fbf72'; g.font = '9px monospace'; for (let i = 0; i < 6; i++) g.fillText('CAM ' + (i + 1), 10 + (i % 3) * 82, 34 + Math.floor(i / 3) * 64); }) }));
    ls.position.set(0, .1175, .001); lid.add(ls);
    phone.lap = [lbase, lkb, ltp, lb, lbz, ls];
    // drukarka etykiet (po prawej od monitora) z wysuniętą etykietą
    B(.17, .13, .2, M({ color: 0x2a2d31 }), .5, .82, -.52); B(.17, .02, .2, M({ color: 0x3c4046 }), .5, .895, -.52);
    const lab = add(new T.PlaneGeometry(.1, .065), new T.MeshLambertMaterial({ color: 0xffffff, side: T.DoubleSide }), .5, .86, -.41); lab.rotation.x = -1.1;
    // klawiatura + mysz
    const kb = B(.44, .02, .14, dark, 0, .77, -.2); kb.rotation.x = .04;
    add(new T.PlaneGeometry(.42, .12), M({ map: ctex(128, 36, (g, w, h) => { g.fillStyle = '#25282d'; g.fillRect(0, 0, w, h); g.fillStyle = '#3c4148'; for (let y = 2; y < h - 4; y += 8) for (let x = 2; x < w - 4; x += 8) g.fillRect(x, y, 6, 6); g.fillRect(36, 26, 50, 6); }) }), 0, .782, -.2).rotation.x = -Math.PI / 2 + .04;
    const mouse = add(new T.SphereGeometry(.035, 10, 8), dark, .32, .775, -.18); mouse.scale.set(.9, .45, 1.4);
    add(new T.PlaneGeometry(.22, .18), M({ color: 0x23262b }), .32, .7765, -.18).rotation.x = -Math.PI / 2;
    // telefon stacjonarny (po prawej od myszki): baza, słuchawka, dioda
    const ph = new T.Group(); ph.position.set(.68, .775, -.22); ph.rotation.y = -.35; scene.add(ph);
    const base = new T.Mesh(new T.BoxGeometry(.19, .05, .21), M({ color: 0x2b2e33 })); base.position.y = .025; base.rotation.x = -.08; ph.add(base);
    const keys = new T.Mesh(new T.PlaneGeometry(.08, .1), M({ map: ctex(32, 40, (g, w, h) => { g.fillStyle = '#2b2e33'; g.fillRect(0, 0, w, h); g.fillStyle = '#9aa0a8'; for (let r = 0; r < 4; r++) for (let c = 0; c < 3; c++) g.fillRect(3 + c * 10, 3 + r * 9, 7, 6); }) })); keys.rotation.x = -Math.PI / 2 - .08; keys.position.set(.045, .052, .03); ph.add(keys);
    const hs = new T.Group(); hs.position.set(-.04, .065, 0); ph.add(hs);
    const hsb = new T.Mesh(new T.BoxGeometry(.05, .035, .22), M({ color: 0x24272b })); hs.add(hsb);
    for (const z of [-.095, .095]) { const e = new T.Mesh(new T.BoxGeometry(.065, .04, .05), M({ color: 0x24272b })); e.position.set(0, -.01, z); hs.add(e); }
    const led = new T.Mesh(new T.SphereGeometry(.008, 8, 6), new T.MeshBasicMaterial({ color: 0x330000 })); led.position.set(.07, .056, -.08); ph.add(led);
    Object.assign(phone, { g: ph, hs, led, hit: [base, hsb, keys] });
    // krzesło (widać kawałek) + kosz + segregatory na parapecie
    B(.5, .06, .5, grey, 0, .48, 1.05); B(.5, .55, .06, grey, 0, .8, 1.32);
    B(.22, .3, .22, M({ color: 0x4a4f57 }), -1.0, .15, .1);
    [0x1f4fa0, 0xb02a2a, 0x2a7a3a, 0xd8b02a].forEach((c, i) => B(.06, .3, .22, M({ color: c }), -2.5 + i * .07, 1.17, FZ + .12));
    // ---------- hala magazynu (widoczna przez okno i na kamerach) ----------
    const metal = M({ color: 0x59606a }), blue = M({ color: 0x2f5fa8 }), orange = M({ color: 0xe0701e }), carton = M({ color: 0xb8854a }), pal = M({ color: 0x9c7a4c }), yel = M({ color: 0xe8c020 });
    const hf = add(new T.PlaneGeometry(32, 29), M({ map: floorT.clone() }), 0, 0, -15.9); hf.rotation.x = -Math.PI / 2; hf.material.map.repeat.set(12, 11); hf.material.map.needsUpdate = true;
    const hc = add(new T.PlaneGeometry(32, 29), M({ color: 0x2a2e34 }), 0, 8, -15.9); hc.rotation.x = Math.PI / 2;
    B(32, 8, .2, metal, 0, 4, -30.4); B(.2, 8, 29, metal, -16.1, 4, -15.9); B(.2, 8, 29, metal, 16.1, 4, -15.9);
    B(12.8, 8, .2, metal, -9.6, 4, -1.5); B(12.8, 8, .2, metal, 9.6, 4, -1.5); B(6.4, 5.2, .2, metal, 0, 5.4, -1.5); // ściana z kanciapą
    for (const x of [-3.9, 3.9]) { const l = add(new T.PlaneGeometry(.12, 27), yel, x, .01, -16); l.rotation.x = -Math.PI / 2; }
    // regały A (lewo) i B (prawo)
    for (const z of [-8, -12.5, -17, -21.5]) for (const x0 of [-14.5, 4.5]) {
      for (let x = x0; x <= x0 + 10.01; x += 2.5) for (const dz of [-.5, .5]) B(.1, 5, .1, blue, x, 2.5, z + dz);
      for (const y of [.2, 1.5, 2.8, 4.1]) { for (const dz of [-.5, .5]) B(10.1, .12, .08, orange, x0 + 5, y, z + dz); for (let x = x0 + .3; x < x0 + 9.6; x += .95 + Math.random() * .3) if (Math.random() > .2) { const hh = .5 + Math.random() * .6; B(.85, hh, .8, carton, x + .4, y + .07 + hh / 2, z); } }
    }
    // rampa: bramy rolowane, palety z kartonami
    for (const x of [-11, -4, 4, 11]) { B(3.2, 3.6, .1, M({ color: 0x7b858f }), x, 1.8, -30.25); for (let y = .2; y < 3.6; y += .25) B(3.2, .03, .02, M({ color: 0x5c656e }), x, y, -30.18); B(3.4, .12, .12, yel, x, 3.65, -30.2); }
    for (const [x, z] of [[-11, -27.5], [-6.5, -26.5], [4, -27.8], [9.5, -26.8], [12.5, -28]]) { B(1.2, .15, 1.0, pal, x, .075, z); const h = .7 + Math.random() * .8; B(1.1, h, .9, carton, x, .15 + h / 2, z); }
    // pakowanie: stoły z kartonami (po lewej od kanciapy)
    for (const x of [-13.5, -9.5]) { B(3, .06, 1.2, M({ color: 0xbfae8e }), x, .9, -3.6); for (const dx of [-1.4, 1.4]) for (const dz of [-.5, .5]) B(.06, .9, .06, metal, x + dx, .45, -3.6 + dz); B(.5, .35, .4, carton, x - .7, 1.1, -3.6); B(.4, .25, .3, carton, x + .5, 1.05, -3.4); B(.12, .12, .12, M({ color: 0x8a6a30 }), x + .1, .99, -3.8); }
    // lampy hali (przyciemnione – nocna zmiana)
    const lampM2 = new T.MeshBasicMaterial({ color: 0xd8d2bd });
    for (const [x, z] of [[-9, -6], [9, -6], [-9, -18], [9, -18], [0, -26], [0, -12]]) { B(2.2, .08, .3, lampM2, x, 7.7, z); const pl = new T.PointLight(0xffe9c4, 16, 18, 1.4); pl.position.set(x, 7.3, z); scene.add(pl); }
    // kamery: [nazwa, pozycja, punkt, w który patrzy]
    G.cams = [
      ['Hala główna', [0, 6.5, -29], [0, .8, -3]],
      ['Regały A', [-15.3, 5.5, -5], [-6, .5, -22]],
      ['Regały B', [15.3, 5.5, -5], [6, .5, -22]],
      ['Rampa', [15.3, 4.6, -24], [-6, .6, -29.5]],
      ['Pakowanie', [-15.3, 4, -1.9], [-8, .6, -5.5]],
      ['Korytarz przy kanciapie', [7, 3.6, -7], [1.6, 1.1, -1.6]]
    ].map(([n, p, l]) => { const c = new T.PerspectiveCamera(62, 16 / 9, .05, 80); c.position.set(...p); c.lookAt(...l); return { n, c }; });
    ray = new T.Raycaster(); clock = new T.Clock();
  }

  // ---------- dźwięk ----------
  function audioInit() {
    if (audio) return; const A = window.AudioContext || window.webkitAudioContext; if (!A) return;
    const ac = new A(), master = ac.createGain(); master.gain.value = S.vol; master.connect(ac.destination);
    const hum = ac.createGain(); hum.gain.value = .02; hum.connect(master); // wentylacja + świetlówka
    const buf = ac.createBuffer(1, ac.sampleRate * 2, ac.sampleRate), d = buf.getChannelData(0); let l = 0; for (let i = 0; i < d.length; i++) { l = (l + (Math.random() * 2 - 1) * .02) / 1.02; d[i] = l * 6; }
    const n = ac.createBufferSource(); n.buffer = buf; n.loop = true; n.connect(hum); n.start();
    const o = ac.createOscillator(); o.frequency.value = 120; const og = ac.createGain(); og.gain.value = .15; o.connect(og).connect(hum); o.start();
    audio = { ac, master, hum };
  }
  function ringBurst() { // elektroniczny dzwonek telefonu biurowego
    if (!audio) return; const { ac, master } = audio, t0 = ac.currentTime;
    for (let i = 0; i < 16; i++) { const o = ac.createOscillator(), g = ac.createGain(); o.type = 'square'; o.frequency.value = i % 2 ? 1320 : 1050; const t = t0 + i * .06; g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(.05, t + .005); g.gain.setValueAtTime(.05, t + .05); g.gain.linearRampToValueAtTime(0, t + .06); o.connect(g).connect(master); o.start(t); o.stop(t + .07); }
  }
  function blip(f = 180) { if (!audio) return; const { ac, master } = audio, o = ac.createOscillator(), g = ac.createGain(); o.type = 'square'; o.frequency.value = f + Math.random() * 40; g.gain.setValueAtTime(.025, ac.currentTime); g.gain.exponentialRampToValueAtTime(.001, ac.currentTime + .05); o.connect(g).connect(master); o.start(); o.stop(ac.currentTime + .06); }
  function click() { if (!audio) return; const { ac, master } = audio, o = ac.createOscillator(), g = ac.createGain(); o.frequency.value = 90; g.gain.setValueAtTime(.3, ac.currentTime); g.gain.exponentialRampToValueAtTime(.001, ac.currentTime + .12); o.connect(g).connect(master); o.start(); o.stop(ac.currentTime + .13); }

  // ---------- rozmowa ----------
  const CALL1 = [
    ['Lukas Frozen', 'Halo? Halo, słychać mnie? Tu Lukas Frozen.'],
    ['Lukas Frozen', 'Słuchaj… dzisiaj jest mocno pojebana zmiana.'],
    ['Lukas Frozen', 'Wszyscy na hali wypili przeterminowanego Tropica…'],
    ['Lukas Frozen', '…i zajedli to zgniłym batonem kokosowym.'],
    ['Lukas Frozen', 'Nie pytaj, skąd to wzięli. Dobra, muszę kończyć. Powodzenia.'],
    ['', '*klik*']
  ];
  const CALLN = [['Lukas Frozen', 'Halo? To znowu ja. Przeżyłeś wczoraj, więc dzisiaj też dasz radę.'], ['Lukas Frozen', 'Tylko nie wychodź z kanciapy. Serio.'], ['', '*klik*']];
  function answer() {
    if (G.st !== 'ring') return; G.st = 'call'; click();
    phone.hs.position.y = .3; phone.hs.position.x = -.2; phone.hs.rotation.z = .6; phone.led.material.color.set(0x330000);
    G.lines = G.night === 1 ? CALL1 : CALLN; G.li = -1; nextLine();
    $('#fnHint').classList.remove('on');
  }
  function nextLine() {
    G.li++; const L = G.lines[G.li];
    if (!L) { phone.hs.position.set(-.04, .065, 0); phone.hs.rotation.z = 0; click(); G.st = 'night'; $('#fnSub').classList.remove('on'); return; }
    G.lt = 0; G.lc = 0; G.lineTxt = L[1];
    $('#fnSub').classList.toggle('on', S.subs); $('#fnSub').innerHTML = (L[0] ? `<b>${esc(L[0])}:</b> ` : '') + '<span></span>';
  }

  // ---------- pętla ----------
  function update(dt) {
    // rozglądanie jak w FNAF: kursor przy krawędzi obraca widok
    const edge = G.mx < .3 ? (.3 - G.mx) / .3 : G.mx > .7 ? -(G.mx - .7) / .3 : 0;
    G.yaw = Math.max(-1.05, Math.min(1.05, G.yaw + (edge + G.look) * 1.6 * S.sens * dt));
    cam.rotation.set(-.12 + (G.my - .5) * -.12, G.yaw, 0);
    if (G.st === 'ring') {
      ringT -= dt; if (ringT <= 0) { ringBurst(); ringT = 2.6; }
      phone.led.material.color.set(Math.floor(clock.elapsedTime * 4) % 2 ? 0xff2020 : 0x330000);
      phone.hs.position.y = .065 + (ringT > 1.6 ? Math.abs(Math.sin(clock.elapsedTime * 60)) * .004 : 0);
      G.ringFor = (G.ringFor || 0) + dt; if (G.ringFor > 10) answer(); // po 10 s odbiera samo
    }
    if (G.st === 'call') {
      G.lt += dt; const n = Math.min(G.lineTxt.length, Math.floor(G.lt * 32));
      if (n > G.lc) { if (G.lineTxt[n - 1] !== ' ' && n % 2) blip(); G.lc = n; const sp = $('#fnSub span'); if (sp) sp.textContent = G.lineTxt.slice(0, n); }
      if (G.lt > G.lineTxt.length / 32 + 1.6) nextLine();
    }
    if (G.st === 'night' || G.st === 'call') {
      G.t += dt; const h = Math.floor(G.t / HOUR);
      $('#fnClk').innerHTML = `${h === 0 ? 12 : h}:00 ${'AM'}<small>Noc ${G.night}</small>`;
      if (G.t >= HOUR * 6) endNight();
    }
  }
  function endNight() {
    camClose(); $('#fnCamBtn').hidden = true; G.st = 'end'; try { localStorage.setItem('w11-fn-night', Math.max(done(), G.night)); } catch (e) {}
    if (document.pointerLockElement) document.exitPointerLock();
    ov(`<div class="fnBig">6:00 AM</div><span>Koniec zmiany – noc ${G.night} przetrwana.</span><button type="button" data-a="menu">Menu główne</button>`);
  }
  function loop() {
    if (!G.open) { G.raf = 0; return; }
    const dt = Math.min(.05, clock.getDelta());
    if (G.st !== 'menu' && G.st !== 'end' && G.st !== 'pause' && scene) update(dt);
    if (R && scene) { resize(); R.render(scene, G.cam >= 0 ? G.cams[G.cam].c : cam); }
    if (G.cam >= 0 && (G.nT = (G.nT || 0) + 1) % 3 === 0) camNoise();
    G.raf = requestAnimationFrame(loop);
  }
  function resize() { const r = cv.getBoundingClientRect(), w = Math.round(r.width), h = Math.round(r.height); if (!w || (cv._w === w && cv._h === h)) return; cv._w = w; cv._h = h; R.setSize(w, h, false); cam.aspect = w / h; cam.updateProjectionMatrix(); if (G.cams) G.cams.forEach(c => { c.c.aspect = w / h; c.c.updateProjectionMatrix(); }); }
  // ---------- system kamer (laptop) ----------
  function camOpen(i) {
    if (!['night', 'call', 'ring'].includes(G.st)) return;
    G.cam = i == null ? (G.lastCam || 0) : i; G.lastCam = G.cam; click(); camStatic();
    $('#fnWrap').classList.add('cam'); $('#fnCam').hidden = false;
    $('#fnCamN').textContent = `CAM ${G.cam + 1} – ${G.cams[G.cam].n}`;
    document.querySelectorAll('#fnMap [data-c]').forEach(b => b.classList.toggle('on', +b.dataset.c === G.cam));
  }
  function camClose() { if (G.cam < 0) return; G.cam = -1; click(); $('#fnWrap').classList.remove('cam'); $('#fnCam').hidden = true; }
  function camStatic() { const n = $('#fnCamS'); n.classList.remove('burst'); void n.offsetWidth; n.classList.add('burst'); if (!audio) return; const { ac, master } = audio, b = ac.createBuffer(1, ac.sampleRate * .25, ac.sampleRate), d = b.getChannelData(0); for (let i = 0; i < d.length; i++) d[i] = (Math.random() * 2 - 1) * (1 - i / d.length); const s = ac.createBufferSource(), g = ac.createGain(); g.gain.value = .12; s.buffer = b; s.connect(g).connect(master); s.start(); }
  function camNoise() { const c = $('#fnCamS'), x = c.getContext('2d'), w = c.width = 192, h = c.height = 108, im = x.createImageData(w, h), d = im.data; for (let i = 0; i < d.length; i += 4) { const v = Math.random() * 255; d[i] = d[i + 1] = d[i + 2] = v; d[i + 3] = 255; } x.putImageData(im, 0, 0); $('#fnCamT').textContent = $('#fnClk').firstChild ? $('#fnClk').firstChild.textContent : ''; }

  // ---------- menu ----------
  const ov = h => { const o = $('#fnOv'); if (h) { o.innerHTML = h; o.hidden = false; } else o.hidden = true; };
  function menu() {
    camClose(); G.st = 'menu'; $('#fnCamBtn').hidden = true; $('#fnSub').classList.remove('on'); $('#fnHint').classList.remove('on'); $('#fnClk').innerHTML = '';
    const d = done();
    ov(`<div class="fnTitle">FIVE NIGHTS<br>AT <span>DZIK</span></div>
      <nav class="fnMenu">
        <button type="button" data-a="new">Nowa zmiana</button>
        <button type="button" data-a="cont"${d ? '' : ' disabled title="Najpierw przetrwaj pierwszą noc"'}>Wróć z przerwy${d ? ` <small>noc ${Math.min(5, d + 1)}</small>` : ''}</button>
        <button type="button" data-a="set">Ustawienia</button>
        <button type="button" data-a="quit">Wyjdź</button>
      </nav>`);
  }
  function settings() {
    G.st = 'menu';
    ov(`<div class="fnH">Ustawienia</div><div class="fnSet">
      <label>Głośność <input type="range" id="fnVol" min="0" max="1" step=".05" value="${S.vol}"></label>
      <label>Czułość obracania <input type="range" id="fnSens" min=".4" max="2" step=".1" value="${S.sens}"></label>
      <label class="ck"><input type="checkbox" id="fnSubs"${S.subs ? ' checked' : ''}> Napisy rozmów</label>
      <button type="button" data-a="reset" class="dang">Resetuj postęp</button>
      </div><button type="button" data-a="menu">← Wróć</button>`);
    const save = () => { try { localStorage.setItem('w11-fn-set', JSON.stringify(S)); } catch (e) {} };
    $('#fnVol').oninput = e => { S.vol = +e.target.value; if (audio) audio.master.gain.value = S.vol; save(); };
    $('#fnSens').oninput = e => { S.sens = +e.target.value; save(); };
    $('#fnSubs').onchange = e => { S.subs = e.target.checked; save(); };
  }
  function startNight(n) {
    G.night = n; G.t = 0; G.yaw = 0; G.st = 'ring'; G.ringFor = 0; ringT = .8; ov('');
    audioInit(); if (audio && audio.ac.state === 'suspended') audio.ac.resume();
    phone.door.rotation.y = 0; phone.hs.position.set(-.04, .065, 0); phone.hs.rotation.z = 0;
    $('#fnHint').classList.add('on'); $('#fnClk').innerHTML = `12:00 AM<small>Noc ${n}</small>`; $('#fnCamBtn').hidden = false;
  }
  async function act(a) {
    if (a === 'new') startNight(1);
    else if (a === 'cont') startNight(Math.min(5, done() + 1));
    else if (a === 'set') settings();
    else if (a === 'menu') menu();
    else if (a === 'quit') { $('#fn').close(); hubOpen(); }
    else if (a === 'reset') { if (await ask('Usunąć postęp (przetrwane noce)?')) { try { localStorage.removeItem('w11-fn-night'); } catch (e) {} menu(); } }
  }

  let inited = false;
  function initUI() {
    if (inited) return; inited = true; cv = $('#fnC');
    $('#fnOv').addEventListener('click', e => { const b = e.target.closest('[data-a]'); if (b && !b.disabled) { act(b.dataset.a); } });
    const pos = e => { const r = cv.getBoundingClientRect(); G.mx = (e.clientX - r.left) / r.width; G.my = (e.clientY - r.top) / r.height; };
    $('#fnWrap').addEventListener('pointermove', e => { if (e.pointerType === 'mouse') pos(e); });
    $('#fnWrap').addEventListener('mouseleave', () => { G.mx = .5; });
    // dotyk: przeciąganie obraca widok
    let tx = null; $('#fnWrap').addEventListener('pointerdown', e => { if (e.pointerType !== 'mouse') tx = e.clientX; });
    $('#fnWrap').addEventListener('pointermove', e => { if (tx === null || e.pointerType === 'mouse') return; G.yaw = Math.max(-1.05, Math.min(1.05, G.yaw + (e.clientX - tx) * .004 * S.sens)); tx = e.clientX; });
    $('#fnWrap').addEventListener('pointerup', () => tx = null);
    // klik w telefon = odbierz
    cv.addEventListener('click', e => {
      if (!ray || G.cam >= 0) return; const r = cv.getBoundingClientRect();
      ray.setFromCamera(new T.Vector2(((e.clientX - r.left) / r.width) * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1), cam);
      if (G.st === 'ring' && ray.intersectObjects(phone.hit.concat(phone.hs.children), false).length) return answer();
      if (ray.intersectObjects(phone.lap, false).length) camOpen();
    });
    $('#fnCamX').onclick = camClose; $('#fnCamBtn').onclick = () => G.cam >= 0 ? camClose() : camOpen();
    $('#fnMap').addEventListener('click', e => { const b = e.target.closest('[data-c]'); if (b) camOpen(+b.dataset.c); });
    document.addEventListener('keydown', e => { if (!G.open) return; const k = e.key.toLowerCase();
      if (k === ' ' && G.st === 'ring') { e.preventDefault(); answer(); }
      if (k === 'arrowleft' || k === 'a') { G.look = 1; e.preventDefault(); } if (k === 'arrowright' || k === 'd') { G.look = -1; e.preventDefault(); }
      if (k === 'escape' && G.cam >= 0) { e.preventDefault(); return camClose(); }
      if ((k === 'tab' || k === 'q') && ['night', 'call', 'ring'].includes(G.st)) { e.preventDefault(); G.cam >= 0 ? camClose() : camOpen(); }
      if (G.cam >= 0 && /^[1-6]$/.test(k)) camOpen(+k - 1);
      if (k === 'escape' && (G.st === 'night' || G.st === 'call' || G.st === 'ring')) { e.preventDefault(); menu(); } });
    document.addEventListener('keyup', e => { const k = e.key.toLowerCase(); if (['arrowleft', 'arrowright', 'a', 'd'].includes(k)) G.look = 0; });
    $('#fn').addEventListener('cancel', e => { if (G.cam >= 0) { e.preventDefault(); camClose(); } else if (G.st !== 'menu') { e.preventDefault(); menu(); } });
    $('#fn').addEventListener('close', () => { G.open = false; if (audio) audio.ac.suspend(); });
  }
  async function open() {
    initUI(); $('#fn').showModal(); G.open = true;
    if (!T) { ov('<div class="fnH">Ładowanie…</div>'); try { await load(); } catch (e) { ov(`<div class="fnH">Błąd</div><span>${esc(e.message)}</span><button type="button" data-a="quit">Wyjdź</button>`); return; } }
    if (!R) { R = new T.WebGLRenderer({ canvas: cv, antialias: false }); R.setPixelRatio(.8); }
    build(); menu(); if (audio) audio.ac.resume();
    if (!G.raf) { clock.getDelta(); G.raf = requestAnimationFrame(loop); }
  }
  return { open, G, _dbg: () => ({ scene, cam, R, step: (dt = .016, nr) => { if (G.st !== 'menu' && G.st !== 'end') update(dt); if (nr) return; resize(); R.render(scene, cam); } }) };
})();

const SL_FACE = 'data:image/jpeg;base64,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';
const FL_CAN = 'data:image/webp;base64,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';
// ===== FLAPPY – gracz leci przez magazyn między puszkami =====
const FL = (() => {
  const LW = 360, LH = 540, FLOOR = 470, PW = 66, GAP = 150, SPACE = 215;
  const G = { open: false, st: 'menu', raf: 0, last: 0, y: 0, vy: 0, rot: 0, pipes: [], score: 0, best: 0, speed: 150, scroll: 0, t: 0, flapT: 0, dead: 0 };
  try { G.best = +localStorage.getItem('w11-fl-best') || 0; } catch (e) {}
  let cv, x, dpr = 1, can, strip, bgFar, bgNear, boar;
  const LB = LBX('fl', '#flOv');

  // ---------- tło: magazyn (generowane w kodzie, dwie warstwy z paralaksą) ----------
  function makeFar() {
    const c = document.createElement('canvas'); c.width = 480; c.height = FLOOR; const g = c.getContext('2d');
    const gr = g.createLinearGradient(0, 0, 0, FLOOR); gr.addColorStop(0, '#2b3036'); gr.addColorStop(1, '#3d434a'); g.fillStyle = gr; g.fillRect(0, 0, 480, FLOOR);
    // ściana z blachy + okna pod sufitem
    g.fillStyle = 'rgba(255,255,255,.035)'; for (let i = 0; i < 480; i += 24) g.fillRect(i, 0, 2, FLOOR);
    for (let i = 20; i < 480; i += 120) { g.fillStyle = '#5d7d94'; g.fillRect(i, 26, 80, 34); g.fillStyle = '#88a9c0'; g.fillRect(i + 4, 30, 34, 26); g.fillRect(i + 42, 30, 34, 26); }
    // lampy
    for (let i = 60; i < 480; i += 160) { g.fillStyle = '#1d2024'; g.fillRect(i, 0, 3, 70); g.fillStyle = '#f5e9b8'; g.fillRect(i - 16, 70, 35, 6); const l = g.createRadialGradient(i + 1, 80, 2, i + 1, 80, 90); l.addColorStop(0, 'rgba(255,240,190,.22)'); l.addColorStop(1, 'rgba(255,240,190,0)'); g.fillStyle = l; g.fillRect(i - 90, 70, 182, 120); }
    // regały w tle (mniejsze, ciemniejsze)
    rack(g, 0, 150, 480, FLOOR - 150, .55);
    return c;
  }
  function rack(g, X, Y, W, H, dim) {
    const lv = 4, lh = H / lv, bay = 120;
    for (let b = X; b < X + W; b += bay) {
      for (let l = 0; l < lv; l++) {
        const by = Y + l * lh;
        // kartony na półce
        let cx = b + 8; let s = (b * 7 + l * 13) % 17;
        while (cx < b + bay - 14) {
          s = (s * 31 + 7) % 97; const bw = 22 + s % 18, bh = Math.min(lh - 12, 18 + s % 22);
          if (s % 9 !== 0) {
            g.fillStyle = shade(s % 3 ? '#b8854a' : '#c99a5c', dim); g.fillRect(cx, by + lh - 6 - bh, bw, bh);
            g.fillStyle = shade('#e3c48f', dim); g.fillRect(cx + bw / 2 - 2, by + lh - 6 - bh, 4, bh);
            g.fillStyle = 'rgba(0,0,0,.18)'; g.fillRect(cx + bw - 3, by + lh - 6 - bh, 3, bh);
          }
          cx += bw + 3;
        }
        // belka (pomarańczowa) pod półką
        g.fillStyle = shade('#e0701e', dim); g.fillRect(b, by + lh - 6, bay, 6);
      }
      // słupki (niebieskie z otworami)
      g.fillStyle = shade('#2f5fa8', dim); g.fillRect(b, Y, 6, H); g.fillRect(b + bay - 6, Y, 6, H);
      g.fillStyle = 'rgba(0,0,0,.35)'; for (let k = Y + 6; k < Y + H; k += 12) { g.fillRect(b + 2, k, 2, 4); g.fillRect(b + bay - 4, k, 2, 4); }
    }
  }
  function shade(hex, k) { const n = parseInt(hex.slice(1), 16); return `rgb(${(n >> 16) * k | 0},${(n >> 8 & 255) * k | 0},${(n & 255) * k | 0})`; }
  function makeNear() {
    const c = document.createElement('canvas'); c.width = 240; c.height = LH - FLOOR; const g = c.getContext('2d');
    g.fillStyle = '#7d8289'; g.fillRect(0, 0, 240, LH - FLOOR); g.fillStyle = '#9aa0a7'; g.fillRect(0, 0, 240, 4);
    g.fillStyle = '#f2c230'; for (let i = 0; i < 240; i += 40) { g.beginPath(); g.moveTo(i, 14); g.lineTo(i + 20, 14); g.lineTo(i + 30, 24); g.lineTo(i + 10, 24); g.fill(); }
    g.fillStyle = 'rgba(0,0,0,.08)'; for (let i = 0; i < 240; i += 60) g.fillRect(i, 30, 1, 40);
    g.fillStyle = '#6a6f76'; g.fillRect(0, 28, 240, 2);
    return c;
  }

  // ---------- rury z puszek ----------
  // pasek z korpusu puszki (czerwony/czarny) – przedłuża puszkę, gdy rura jest dłuższa niż sama puszka
  function makeStrip() {
    const c = document.createElement('canvas'); c.width = PW; c.height = Math.round(PW * can.naturalHeight / can.naturalWidth); const g = c.getContext('2d'); g.drawImage(can, 0, 0, c.width, c.height);
    const row = g.getImageData(0, Math.round(c.height * .2), PW, 1), s = document.createElement('canvas'); s.width = PW; s.height = 1; s.getContext('2d').putImageData(row, 0, 0);
    return s;
  }
  function drawPipe(px, edge, up) {
    // up = true: rura od sufitu, puszka odwrócona (wieczkiem w stronę przerwy)
    const ch = PW * can.naturalHeight / can.naturalWidth;
    x.save();
    if (up) { x.translate(0, edge); x.scale(1, -1); x.translate(0, -edge); }
    const len = up ? edge : FLOOR - edge; // od przerwy do sufitu/podłogi
    if (len > ch - 4) x.drawImage(strip, px, edge + ch - 6, PW, len - ch + 8);
    x.drawImage(can, px, edge, PW, ch);
    x.restore();
  }

  function reset() { G.y = LH * .42; G.vy = 0; G.rot = 0; G.pipes = []; G.score = 0; G.speed = 150; G.dead = 0; G.nextX = LW + 60; }
  function flap() {
    if (G.st === 'menu' || G.st === 'over') { if (G.st === 'over' && G.dead > 0) return; reset(); G.st = 'run'; ov(''); }
    if (G.st !== 'run') return;
    G.vy = -385; G.flapT = .25; SFX.play('tick');
  }
  function die() {
    if (G.st !== 'run') return; G.st = 'over'; G.dead = .6; SFX.play('crash');
    const rec = G.score > G.best; if (rec) { G.best = G.score; try { localStorage.setItem('w11-fl-best', G.best); } catch (e) {} }
    LB.save(G.score);
    setTimeout(() => { if (G.open) ov(`<b>${rec ? 'Nowy rekord!' : 'Dzik w puszkach'}</b><span>Wynik: ${G.score} · rekord: ${G.best}</span><button type="button" class="p" data-go="1">Jeszcze raz</button><small>albo spacja / kliknięcie</small>${LB.html()}`); }, 550);
  }
  function update(dt) {
    G.t += dt; G.flapT -= dt;
    if (G.st === 'menu') { G.y = LH * .42 + Math.sin(G.t * 3) * 10; G.scroll += 60 * dt; return; }
    if (G.st === 'over') { G.dead -= dt; if (G.y < FLOOR - 18) { G.vy += 1500 * dt; G.y = Math.min(FLOOR - 18, G.y + G.vy * dt); G.rot = Math.min(1.4, G.rot + 5 * dt); } return; }
    G.vy = Math.min(620, G.vy + 1350 * dt); G.y += G.vy * dt;
    G.rot += ((G.vy < 0 ? -.45 : Math.min(1.2, G.vy / 520)) - G.rot) * Math.min(1, dt * 10);
    G.scroll += G.speed * dt;
    for (const p of G.pipes) p.x -= G.speed * dt;
    G.nextX -= G.speed * dt;
    if (G.nextX <= LW) { const lo = 90, hi = FLOOR - 70 - GAP; G.pipes.push({ x: G.nextX, top: lo + Math.random() * (hi - lo), done: false }); G.nextX += SPACE; }
    G.pipes = G.pipes.filter(p => p.x > -PW - 10);
    // kolizje: prostokąt gracza (trochę mniejszy niż grafika – uczciwiej)
    const bx = 92, hw = 20, hh = 13;
    if (G.y + hh >= FLOOR) { G.y = FLOOR - hh; die(); return; }
    if (G.y - hh < 0) { G.y = hh; G.vy = 0; }
    for (const p of G.pipes) {
      if (bx + hw > p.x + 6 && bx - hw < p.x + PW - 6 && (G.y - hh < p.top || G.y + hh > p.top + GAP)) { die(); return; }
      if (!p.done && p.x + PW < bx - hw) { p.done = true; G.score++; G.speed = Math.min(215, 150 + G.score * 2); SFX.play('eat'); }
    }
  }
  function draw() {
    const r = cv.getBoundingClientRect(); dpr = Math.min(2, window.devicePixelRatio || 1);
    const W = Math.round(r.width * dpr), H = Math.round(r.height * dpr); if (!W) return;
    if (cv.width !== W || cv.height !== H) { cv.width = W; cv.height = H; }
    x.setTransform(W / LW, 0, 0, H / LH, 0, 0);
    // tło
    const fo = -(G.scroll * .35 % bgFar.width); for (let i = fo; i < LW; i += bgFar.width) x.drawImage(bgFar, i, 0);
    // puszki
    if (can.complete && can.naturalWidth) { if (!strip) strip = makeStrip(); for (const p of G.pipes) { drawPipe(p.x, p.top, true); drawPipe(p.x, p.top + GAP, false); } }
    // podłoga
    const no = -(G.scroll % bgNear.width); for (let i = no; i < LW; i += bgNear.width) x.drawImage(bgNear, i, FLOOR);
    // gracz (sylwetka z nóżkami, nóżki machają przy podskoku)
    drawBoar(92, G.y, G.rot);
    // wynik
    if (G.st !== 'menu') { x.font = '900 46px system-ui,sans-serif'; x.textAlign = 'center'; x.lineWidth = 7; x.strokeStyle = '#111'; x.strokeText(G.score, LW / 2, 70); x.fillStyle = '#fff'; x.fillText(G.score, LW / 2, 70); }
  }
  function drawBoar(cx0, cy, rot) {
    const im = boar; if (!im || !im.body.complete) return;
    const bw = 62, bh = bw * BOAR.H / BOAR.W, k = bw / BOAR.W, sw = G.st === 'run' ? Math.sin(G.t * (G.flapT > 0 ? 40 : 14)) : Math.sin(G.t * 8) * .5;
    x.save(); x.translate(cx0, cy); x.rotate(rot);
    x.shadowColor = 'rgba(0,0,0,.45)'; x.shadowBlur = 6; x.shadowOffsetY = 3;
    im.legs.forEach((l, i) => { x.save(); const ox = -bw / 2 + (l.x + l.w * l.ox / 100) * k, oy = -bh / 2 + l.y * k; x.translate(ox, oy); x.rotate((i % 2 ? 1 : -1) * sw * .6); x.drawImage(l.im, -(l.w * l.ox / 100) * k, 0, l.w * k, l.h * k); x.restore(); });
    x.drawImage(im.body, -bw / 2, -bh / 2, bw, bh);
    x.restore();
  }
  function loop(t) {
    if (!G.open) { G.raf = 0; return; }
    const dt = Math.min(.034, (t - G.last) / 1000); G.last = t;
    update(dt); draw();
    G.raf = requestAnimationFrame(loop);
  }
  const ov = h => { const o = $('#flOv'); if (h) { o.innerHTML = h; o.hidden = false; } else o.hidden = true; };
  function init() {
    if (cv) return;
    cv = $('#flC'); x = cv.getContext('2d');
    bgFar = makeFar(); bgNear = makeNear();
    can = new Image(); can.src = FL_CAN;
    boar = gmImgs();
    const go = e => { if (!G.open) return; if (e) e.preventDefault(); flap(); };
    $('#flWrap').addEventListener('pointerdown', e => { if ((e.target.closest('button') && !e.target.closest('[data-go]')) || e.target.closest('.lbx')) return; go(e); });
    document.addEventListener('keydown', e => { if (!G.open) return; if ([' ', 'arrowup', 'w', 'enter'].includes(e.key.toLowerCase())) { if (e.repeat) return e.preventDefault(); go(e); } });
    $('#fl').addEventListener('close', () => { G.open = false; if (G.st === 'run') G.st = 'menu'; LB.close(); });
    $('#flX').onclick = () => $('#fl').close();
    $('#flHub').onclick = () => { $('#fl').close(); hubOpen(); };
  }
  function open() {
    init(); reset(); G.st = 'menu'; G.open = true;
    ov(`<b>Flappy Dzik</b><span>Leć przez magazyn między puszkami DZIK Classic.<br>Spacja, ↑ albo kliknięcie – podskok.</span><button type="button" class="p" data-go="1">Start</button><small>Rekord: ${G.best}</small>${LB.html()}`);
    $('#fl').showModal(); LB.open(); if (!G.raf) G.raf = requestAnimationFrame(t => { G.last = t; loop(t); });
  }
  return { open, G };
})();

const W3_FACE = {"c": "data:image/png;base64,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", "l": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAgCAIAAACHPC9vAAAGcklEQVR42m1VS28b1xX+Zu5wHpwZvkmRomxLsvUy6YcsQ67yQBzVi7hIEwQOAjcOGhTpKkX+QB9o+weyzapLo9m1BZrYLlpbTYoodpDIcinLER2KUkSJI4ria0YzHM7M7WIsR2pyVmfuvefgO9/5zhkCgAfj4QeMAfqVhMoHu26PsIRQSkiAUPqDjzkADkAPxzNg0kp8fDA/JmfuVh4CSEeyAAobD3qgFGAOhwAgAOiTYABgwVBgcuCMIoZEUar39HL1m3QkG4lELcvyPEflgz5Gj3rM/yHCfnoWjAf69PpRueBjiUSizWaj2qz4vn+1pe8wYABKDyZ6GsyTwDvnX589M3m/VNzt6EPZvn4pLshC1+humvXRkfHRcHip/O0HwGZhjjlMyBPz4czmL77/2tu8JEISIqGQfxVSBcJzAFzbWa/UYHbrhv77v12/XZhjwVBQ6nOEffJ4EvjDpV8M9KcgCemwElTFoCoqEYnwHHWpazsAGIazjD3O9bJCotzY3WxXmcOlMRQ0nzkpyEJYFhlFlWIy4QkA13YJT/Z9J6QKQLLZbgtaLRKJ8lsB2+0BYJnvy0dRRcZzbce1XVvv+kBc23Vtx9bNdqdL9U4kFApEQzPpkYQU9gti97tGAfgd8c3WTT+Fb77PKxKArioA6DXaAMYH89+13yeIBTMmZwA0tVo6HZdiaiAsAfBMm5V4UeL9ADGpbpd2fD8cklHdD6ff02jd0KWYKg7FSSxIYsFANgLA93st06p1Dj4ekzMUge/I9i2mKl2jiyS2dhsP5hdXio/6pfgzP54aSCewi7/8+R8ffPbxTHokHJJnJnIAWm0jpio8geMyHHNY45tm/RjSX35ewP7nl58XMj95vlZcXd3Z/OOr1+KyUjf04VTi+PCQL1rbBUDJU45cIJ8cy/Udmzp3qmdb+p6VymYvz/yoZ1ui45W2d44kU9nj2b/OfbJUKq9UN5+bOqU39m6WFoZSR6N82Ceb+fWlX4ZD8mpFUwaSVO/MLy8NJfpH06lmuw1AUmV1p1nUasOpxLtXr6xXagAIz6WT0TE58+al2WqtwQHgCPfShenc8WMf/+tunCOSKr979YqtmwAsysLs8oqUGjxSKG0wisorwomxAVbirVonLisxVVkrV8+dz7EAHNcBYHaMTbNed1yLsoTnQkOp6NRgajgBSfD5EmQBQCAbCWQjnmn7/Z2vFpWBJACWB+OBzi8v9Z0earUNfaMGIBCWSCx4sKHRuByIhizGBuDu7rESD2CtXAVweuzo3z/9hAXhWDAf3rsDYKLv6LK2bjG2Z9ru7p4vH1+E4lC812hbLcuXaK9ltjvdZW19TM60V7UP793hem6PAoWth/P//CI/PLCsrVvVlq2oPIBdAFhafry0/DgQDd1eXMgNHgGwUd3xB323o8+emSzb3cLGA8IALBiHuqKt/PytV7ZLO3E1yAXlPb3LswxDKWe5EUEgDC6eOhXpSwbFQLfR1bVdTav/t7R6s7Rw64tPN9saw+7vNo5w+czJq9MvXnvhhdpOs+M5w6lEy7DCsth/MQfA+Frb1jsi5aneuXOv4K/Nt67/zv8PHRgR1/lqY/Hy+LSkythprpWrcVmxTasFYG6pqwqVbyr+w+FUYtOszwzmqmjw+zjYg61hwcxXixZ9chiWxaJWqxt6y7Daq5rKcmvlarXWCGcSrbYB4Pbigr0/8hx3ePQflQvb5W95SfQ/n8mNJEeyrMT7wkkmIi3DWn+8EQ7Ja+Xq3cpDngTgOgAIObD/PUDhg8lQH2SVcd0eqGPasHqG1qQ9z9ateqNjm9biSrnjmA/WyqezQyva6p5tHi6NcB5oOpKdmcjdmvs3AJXlfGjJkWx0alCKqQD8k9WKFlOVs8Mj6Ui2B3ogEeHgOjwJXMiejMvKe6++cr9U7HhOWBYlVfZ3GwBIAiRhWVsHcG12FsDl8ekX8xdtcKRPSQT54F7XSCjxXz3/s5mJHAmQ3NnRI0r0TzduSvHEsUSUo4Dj1TdbVrd7/aMb89Xib16+Eh/IPF4pD/Slfnpu+tbCf7iqXucI986Fq8+eOHkudyIsi58tFRt1Y3Rm4j1JuP7RjZXio6fVr1a0r42t9197Oz87uXK/5B9OnhkfH8xzHrjnJp797ZtvAAhnEv72aLbb0ZY8enb4mjlbN/S648Y5AuDl8xcAjM5MHGw0rwgvjZ79H44h46EIk0JUAAAAAElFTkSuQmCC", "r": "data:image/png;base64,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"};
// ===== W3 – strzelanka w stylu Wolfenstein 3D (raycasting, pikselowa grafika generowana w kodzie) =====
const W3 = (() => {
  const VW = 320, VH = 160, HUDH = 40, CH = VH + HUDH, TS = 64;
  const rgb = (r, g, b, a = 255) => ((a << 24) | (b << 16) | (g << 8) | r) >>> 0;
  const clamp = (v, a, b) => v < a ? a : v > b ? b : v;
  let rs = 1; const rnd = () => (rs = (rs * 16807) % 2147483647) / 2147483647; // stały seed – tekstury zawsze takie same

  // ---------- czcionka pikselowa 3x5 ----------
  const FONT = {
    A: '010101111101101', B: '110101110101110', C: '011100100100011', D: '110101101101110', E: '111100110100111', F: '111100110100100', G: '011100101101011',
    H: '101101111101101', I: '111010010010111', J: '001001001101010', K: '101101110101101', L: '100100100100111', M: '101111111101101', N: '110101101101101',
    O: '010101101101010', P: '110101110100100', Q: '010101101110011', R: '110101110101101', S: '011100010001110', T: '111010010010010', U: '101101101101111',
    V: '101101101101010', W: '101101111111101', X: '101101010101101', Y: '101101010010010', Z: '111001010100111',
    0: '111101101101111', 1: '010110010010111', 2: '110001010100111', 3: '110001010001110', 4: '101101111001001', 5: '111100110001110',
    6: '011100111101111', 7: '111001010010010', 8: '111101111101111', 9: '111101111001110', '%': '101001010100101', '!': '010010010000010',
    ':': '000010000010000', '-': '000000111000000', '.': '000000000000010', ' ': '000000000000000', '?': '110001010000010', '/': '001001010100100'
  };
  function text(x, s, X, Y, col, sc = 1) {
    x.fillStyle = col; let cx = X;
    for (const ch of String(s).toUpperCase()) {
      const g = FONT[ch] || FONT['?'];
      for (let i = 0; i < 15; i++) if (g[i] === '1') x.fillRect(cx + (i % 3) * sc, Y + Math.floor(i / 3) * sc, sc, sc);
      cx += 4 * sc;
    }
  }
  const textW = (s, sc = 1) => String(s).length * 4 * sc - sc;

  // ---------- tekstury ścian 64x64 ----------
  function tex(fn) { const t = new Uint32Array(TS * TS); for (let y = 0; y < TS; y++) for (let x = 0; x < TS; x++) t[y * TS + x] = fn(x, y); return t; }
  function brick(base, mortar, jit) {
    return tex((x, y) => {
      const row = y >> 4, off = row % 2 ? 16 : 0, bx = (x + off) & 31;
      if (y % 16 === 15 || bx === 31) return rgb(...mortar);
      const n = (rnd() - .5) * jit + (((x + off) >> 5) * 7 + row * 13) % 5 * 3 - 6;
      const hl = y % 16 === 0 || bx === 0 ? 14 : 0;
      return rgb(clamp(base[0] + n + hl, 0, 255), clamp(base[1] + n + hl, 0, 255), clamp(base[2] + n + hl, 0, 255));
    });
  }
  function makeTextures() {
    rs = 7;
    const T = [];
    T[0] = brick([118, 118, 122], [70, 70, 74], 22);                 // szary kamień
    T[1] = brick([36, 58, 150], [18, 28, 84], 18);                   // niebieski kamień
    T[2] = tex((x, y) => { const p = x >> 4, g = Math.sin((y + p * 17) * .35 + p) * 10 + (rnd() - .5) * 12; return x % 16 === 0 ? rgb(60, 36, 16) : rgb(clamp(132 + g, 0, 255), clamp(84 + g * .7, 0, 255), clamp(40 + g * .4, 0, 255)); }); // drewno
    // plakat na szarym kamieniu
    T[3] = T[0].slice();
    { const c = document.createElement('canvas'); c.width = c.height = TS; const x = c.getContext('2d');
      x.fillStyle = '#101418'; x.fillRect(10, 8, 44, 48); x.fillStyle = '#1ab8ff'; x.fillRect(10, 8, 44, 3); x.fillRect(10, 53, 44, 3);
      text(x, 'DZIK', 32 - textW('DZIK', 2) / 2, 18, '#ffffff', 2); text(x, 'WK', 32 - textW('WK', 2) / 2, 34, '#1ab8ff', 2);
      const d = x.getImageData(0, 0, TS, TS).data; for (let i = 0; i < TS * TS; i++) if (d[i * 4 + 3]) T[3][i] = rgb(d[i * 4], d[i * 4 + 1], d[i * 4 + 2]); }
    // wyjście (winda)
    T[4] = tex((x, y) => { const edge = x < 3 || x > 60 || y < 3 || y > 60, seam = x === 31 || x === 32; const v = 150 + ((x * 3 + y) % 7) - (y % 8 === 0 ? 20 : 0); return edge ? rgb(60, 60, 66) : seam ? rgb(40, 40, 46) : rgb(v - 30, v - 20, v - 10); });
    { const c = document.createElement('canvas'); c.width = c.height = TS; const x = c.getContext('2d');
      x.fillStyle = '#0a3d12'; x.fillRect(12, 20, 40, 24); text(x, 'EXIT', 32 - textW('EXIT', 2) / 2, 23, '#4dff6a', 2); x.fillStyle = '#4dff6a'; x.fillRect(22, 36, 20, 3); x.fillRect(36, 34, 3, 7); x.fillRect(39, 35, 2, 5);
      const d = x.getImageData(0, 0, TS, TS).data; for (let i = 0; i < TS * TS; i++) if (d[i * 4 + 3]) T[4][i] = rgb(d[i * 4], d[i * 4 + 1], d[i * 4 + 2]); }
    // drzwi stalowe
    T[5] = tex((x, y) => { const rib = x % 8 === 0, v = 96 + (y % 16 < 2 ? -18 : 0) + (rib ? 26 : 0); if (x >= 50 && x <= 54 && y >= 28 && y <= 36) return rgb(200, 180, 60); return rgb(v - 20, v, v + 22); });
    // bok framugi
    T[6] = tex((x, y) => x < 4 || x > 59 ? rgb(70, 74, 90) : rgb(110, 116, 140));
    return T;
  }

  // ---------- sprite'y 64x64 (0 = przezroczyste) ----------
  function fromCanvas(c) { const d = c.getContext('2d').getImageData(0, 0, TS, TS).data, t = new Uint32Array(TS * TS); for (let i = 0; i < TS * TS; i++) t[i] = d[i * 4 + 3] > 120 ? rgb(d[i * 4], d[i * 4 + 1], d[i * 4 + 2]) : 0; return t; }
  // pikselowanie obrazka: najpierw mały (lowW px szerokości), potem powiększenie bez wygładzania
  function pixelImg(img, lowH, scaleOnFloor = 1) {
    const ar = img.naturalWidth / img.naturalHeight; let h = lowH, w = Math.round(h * ar); if (w > 30) { w = 30; h = Math.round(w / ar); }
    const s = document.createElement('canvas'); s.width = w; s.height = h; const sx = s.getContext('2d'); sx.drawImage(img, 0, 0, w, h);
    const c = document.createElement('canvas'); c.width = c.height = TS; const x = c.getContext('2d'); x.imageSmoothingEnabled = false;
    const k = 2 * scaleOnFloor; x.drawImage(s, 32 - w * k / 2, TS - h * k - 1, w * k, h * k);
    return fromCanvas(c);
  }
  // przeciwnik: „Leniwiec” w dresie – rysowany prostokątami na siatce 32x32, powiększany x2
  function enemyFrame(kind) {
    const c = document.createElement('canvas'); c.width = c.height = TS; const x = c.getContext('2d');
    const P = (col, X, Y, W, H) => { x.fillStyle = col; x.fillRect(X * 2, Y * 2, W * 2, H * 2); };
    const skin = '#e0a878', suit = kind === 'hurt' ? '#ff5a5a' : '#c8322c', suitD = '#8a1e1a', pants = '#2a3550', hair = '#3a2414';
    if (kind === 'dead') {
      P(pants, 6, 27, 9, 3); P(suit, 13, 25, 11, 5); P(suitD, 13, 29, 11, 1); P(skin, 23, 25, 5, 4); P(hair, 26, 25, 2, 4); P('#7a0000', 9, 30, 14, 2); return fromCanvas(c);
    }
    const st = kind === 'w1' ? 1 : kind === 'w2' ? -1 : 0;
    // nogi
    P(pants, 12, 21, 3, 9 - Math.max(0, st)); P(pants, 17, 21, 3, 9 - Math.max(0, -st)); P('#111', 11 + (st > 0 ? 0 : 0), 30 - Math.max(0, st), 5, 2); P('#111', 16, 30 - Math.max(0, -st), 5, 2);
    // tułów
    P(suit, 10, 11, 12, 11); P('#ffffff', 15, 11, 2, 10); P(suitD, 10, 20, 12, 1);
    // ręce
    if (kind === 'atk') { P(suit, 22, 7, 3, 6); P(skin, 22, 4, 3, 3); P('#a0602a', 21, 1, 5, 4); P('#ff7ab8', 22, 2, 3, 2); P(suit, 7, 12, 3, 8); P(skin, 7, 20, 3, 2); }
    else { P(suit, 7, 12, 3, 8 + st); P(skin, 7, 20 + st, 3, 2); P(suit, 22, 12, 3, 8 - st); P(skin, 22, 20 - st, 3, 2); }
    // głowa
    P(skin, 12, 3, 8, 8); P(hair, 12, 2, 8, 2); P(hair, 11, 3, 1, 3); P(hair, 20, 3, 1, 3);
    P('#fff', 13, 6, 2, 1); P('#fff', 17, 6, 2, 1); P('#000', 14, 6, 1, 1); P('#000', 18, 6, 1, 1); P('#8a3a2a', 14, 9, 4, 1);
    if (kind === 'hurt') P('#ff0000', 15, 4, 2, 2);
    return fromCanvas(c);
  }

  // ---------- mapy ----------
  // # ściana, D drzwi, E wyjście, P plakat, S start, g przeciwnik, h baton (+10 zdr.), c Tropic (+25 zdr.), t Limitless (+100 pkt), k kreatyna (+500 pkt)
  const MAP1 = [
    '########################',
    '#S.....#.....#....t....#',
    '#......D.....D.........#',
    '#..h...#..g..#...g.....#',
    '####D###.....#####D#####',
    '#......#.....#.........#',
    '#..g...###D###....c....#',
    '#......#.....#.........#',
    '#......#..t..#####D#####',
    '##D#####.....#.........#',
    '#......#..g..#...g...k.#',
    '#.c....###D###.........#',
    '#......#.....##D########',
    '#..g...D.....#.........#',
    '#......#..h..#..g......#',
    '####D###.....#.......t.#',
    '#......#####D#####D#####',
    '#..t...#.........#.....#',
    '#......D....g....#..g..#',
    '#..g...#.........D.....#',
    '#......###D#P#####.....#',
    '#..h...#.........#.....E',
    '#......#....c....#..h..#',
    '########################'];
  const transpose = m => m[0].split('').map((_, x) => m.map(r => r[x]).join(''));
  const MAPS = [MAP1, transpose(MAP1)];
  // ---------- losowa mapa: siatka pokoi połączonych drzwiami (losowe drzewo przejść + dodatkowe drzwi, część ścian zburzona) ----------
  function genMap(lvl) {
    for (let attempt = 0; attempt < 40; attempt++) {
      const CW = [4, 5, 6], cols = [], rows = []; let w = 1, h = 1;
      while (w < 26) { const c = CW[Math.random() * 3 | 0]; if (w + c + 1 > 30) break; cols.push(c); w += c + 1; }
      while (h < 26) { const c = CW[Math.random() * 3 | 0]; if (h + c + 1 > 30) break; rows.push(c); h += c + 1; }
      const NX = cols.length, NY = rows.length, m = Array.from({ length: h }, () => Array(w).fill('#'));
      const cx0 = [], cy0 = []; let a = 1; cols.forEach(c => { cx0.push(a); a += c + 1; }); a = 1; rows.forEach(c => { cy0.push(a); a += c + 1; });
      for (let ry = 0; ry < NY; ry++) for (let rx = 0; rx < NX; rx++) for (let y = 0; y < rows[ry]; y++) for (let x = 0; x < cols[rx]; x++) m[cy0[ry] + y][cx0[rx] + x] = '.';
      // przejścia między pokojami: drzwi w losowym miejscu wspólnej ściany albo cała ściana zburzona
      const link = (rx, ry, dir) => {
        // ściana już zburzona – nie wstawiamy samotnych drzwi na środku pokoju
        if (dir === 'E' ? m[cy0[ry]][cx0[rx] + cols[rx]] === '.' : m[cy0[ry] + rows[ry]][cx0[rx]] === '.') return;
        const wall = dir === 'E' ? rows[ry] && Array.from({ length: rows[ry] }, (_, i) => m[cy0[ry] + i][cx0[rx] + cols[rx]]) : Array.from({ length: cols[rx] }, (_, i) => m[cy0[ry] + rows[ry]][cx0[rx] + i]);
        if (wall.includes('D')) return; // jedne drzwi na ścianę
        if (dir === 'E') { const x = cx0[rx] + cols[rx]; if (Math.random() < .14) { for (let y = 0; y < rows[ry]; y++) m[cy0[ry] + y][x] = '.'; } else m[cy0[ry] + 1 + (Math.random() * (rows[ry] - 2) | 0)][x] = 'D'; }
        else { const y = cy0[ry] + rows[ry]; if (Math.random() < .14) { for (let x = 0; x < cols[rx]; x++) m[y][cx0[rx] + x] = '.'; } else m[y][cx0[rx] + 1 + (Math.random() * (cols[rx] - 2) | 0)] = 'D'; }
      };
      const seen = new Set(), st = [[Math.random() * NX | 0, Math.random() * NY | 0]]; seen.add(st[0] + '');
      while (st.length) { // losowy DFS = każdy pokój osiągalny
        const [rx, ry] = st[st.length - 1], nb = [[1, 0], [-1, 0], [0, 1], [0, -1]].map(([dx, dy]) => [rx + dx, ry + dy, dx, dy]).filter(([x, y]) => x >= 0 && y >= 0 && x < NX && y < NY && !seen.has(x + ',' + y));
        if (!nb.length) { st.pop(); continue; }
        const [x, y, dx, dy] = nb[Math.random() * nb.length | 0]; seen.add(x + ',' + y); st.push([x, y]);
        if (dx) link(Math.min(rx, x), ry, 'E'); else link(rx, Math.min(ry, y), 'S');
      }
      for (let ry = 0; ry < NY; ry++) for (let rx = 0; rx < NX; rx++) { if (rx < NX - 1 && Math.random() < .22) link(rx, ry, 'E'); if (ry < NY - 1 && Math.random() < .22) link(rx, ry, 'S'); }
      // kolumny w większych pokojach
      for (let ry = 0; ry < NY; ry++) for (let rx = 0; rx < NX; rx++) if (cols[rx] >= 6 && rows[ry] >= 6 && Math.random() < .5) { m[cy0[ry] + 2][cx0[rx] + 2] = '#'; m[cy0[ry] + rows[ry] - 3][cx0[rx] + cols[rx] - 3] = '#'; }
      // start w losowym pokoju, wyjście na zewnętrznej ścianie najdalszego miejsca
      const srx = Math.random() * NX | 0, sry = Math.random() * NY | 0, sx = cx0[srx] + (cols[srx] >> 1), sy = cy0[sry] + (rows[sry] >> 1);
      if (m[sy][sx] !== '.') continue;
      const dist = Array.from({ length: h }, () => Array(w).fill(-1)), q = [[sx, sy]]; dist[sy][sx] = 0;
      while (q.length) { const [x, y] = q.shift(); for (const [dx, dy] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) { const X = x + dx, Y = y + dy; if (m[Y] && (m[Y][X] === '.' || m[Y][X] === 'D') && dist[Y][X] < 0) { dist[Y][X] = dist[y][x] + 1; q.push([X, Y]); } } }
      let best = null;
      for (let y = 1; y < h - 1; y++) for (let x = 1; x < w - 1; x++) if (m[y][x] === '.' && dist[y][x] > 0) for (const [dx, dy] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) { const X = x + dx, Y = y + dy; if ((X === 0 || Y === 0 || X === w - 1 || Y === h - 1) && (!best || dist[y][x] > best.d)) best = { x: X, y: Y, d: dist[y][x] }; }
      if (!best || best.d < 12) continue;
      m[best.y][best.x] = 'E';
      const floor = []; for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) if (m[y][x] === '.' && dist[y][x] > 0) floor.push([x, y]);
      if (floor.length < 60) continue;
      const take = (n, ch, minD) => { for (let i = 0, t = 0; i < n && t < 500; t++) { const [x, y] = floor[Math.random() * floor.length | 0]; if (m[y][x] === '.' && dist[y][x] >= minD && !(x === best.x && y === best.y)) { m[y][x] = ch; i++; } } };
      m[sy][sx] = 'S';
      take(Math.min(28, 13 + lvl * 2), 'g', 5); take(3, 'h', 2); take(2, 'c', 4); take(4, 't', 3); take(1, 'k', 8);
      // plakaty na ścianach przy podłodze
      for (let i = 0, t = 0; i < 6 && t < 400; t++) { const x = 1 + Math.random() * (w - 2) | 0, y = 1 + Math.random() * (h - 2) | 0; if (m[y][x] === '#' && [[1, 0], [-1, 0], [0, 1], [0, -1]].some(([dx, dy]) => m[y + dy] && m[y + dy][x + dx] === '.')) { m[y][x] = 'P'; i++; } }
      return m.map(r => r.join(''));
    }
    return MAPS[lvl % MAPS.length]; // awaryjnie mapa stała
  }

  // ---------- stan gry ----------
  const LB = LBX('w3', '#w3Ov');
  const G = { run: false, open: false, lvl: 0, score: 0, lives: 3, hp: 100, raf: 0, last: 0, keys: {}, flash: 0, gflash: 0, swing: 0, faceT: 0, faceDir: 0, msgT: 0, msg: '' };
  let T, SPR, cv, cx, img, buf, zb, faceImgs = [], hudBg, weaponLow;
  let map, MW, MH, doors, ents;

  function cellAt(x, y) { const X = Math.floor(x), Y = Math.floor(y); return X < 0 || Y < 0 || X >= MW || Y >= MH ? '#' : map[Y][X]; }
  function solid(x, y) { const c = cellAt(x, y); if (c === 'D') return doors[Math.floor(y) * MW + Math.floor(x)] < .85; return c === '#' || c === 'E' || c === 'P'; }
  function canStand(x, y, r) { return !solid(x - r, y - r) && !solid(x + r, y - r) && !solid(x - r, y + r) && !solid(x + r, y + r); }
  function los(ax, ay, bx, by) { const d = Math.hypot(bx - ax, by - ay), n = Math.ceil(d / .1); for (let i = 1; i < n; i++) { const t = i / n; if (solid(ax + (bx - ax) * t, ay + (by - ay) * t)) return false; } return true; }

  function loadLevel(keepHp) {
    if (!G.curMap || G.newMap) { G.curMap = genMap(G.lvl); G.newMap = false; } // ten sam układ przy powtórce poziomu, nowy przy następnym
    const m = G.curMap; map = m.map(r => r.split('')); MH = map.length; MW = map[0].length;
    doors = new Float32Array(MW * MH); ents = [];
    const hard = 1 + G.lvl * .18;
    for (let y = 0; y < MH; y++) for (let x = 0; x < MW; x++) {
      const c = map[y][x], px = x + .5, py = y + .5;
      if (c === 'S') { G.x = px; G.y = py; G.a = 0; }
      if (c === 'g') ents.push({ t: 'e', x: px, y: py, hp: Math.round(30 * hard), st: 'idle', cd: 1 + Math.random(), anim: Math.random() * 10, hurt: 0, dmg: hard });
      if ('hctk'.includes(c)) ents.push({ t: c, x: px, y: py });
      if ('Sghctk'.includes(c)) map[y][x] = '.';
    }
    // start zawsze patrzy w stronę wolnego pola
    for (const [a, dx, dy] of [[0, 1, 0], [Math.PI / 2, 0, 1], [Math.PI, -1, 0], [-Math.PI / 2, 0, -1]]) if (!solid(G.x + dx, G.y + dy)) { G.a = a; break; }
    if (!keepHp) G.hp = 100;
  }

  // ---------- render ----------
  function render() {
    const dx = Math.cos(G.a), dy = Math.sin(G.a), FOV = .66, px = -dy * FOV, py = dx * FOV;
    // sufit i podłoga (płaskie kolory jak w oryginale)
    buf.fill(rgb(56, 56, 56), 0, VW * VH / 2); buf.fill(rgb(112, 112, 112), VW * VH / 2, VW * VH);
    for (let col = 0; col < VW; col++) {
      const cam = 2 * col / VW - 1, rx = dx + px * cam, ry = dy + py * cam;
      let mx = Math.floor(G.x), my = Math.floor(G.y);
      const ddx = Math.abs(1 / rx), ddy = Math.abs(1 / ry), sx = rx < 0 ? -1 : 1, sy = ry < 0 ? -1 : 1;
      let sdx = (rx < 0 ? G.x - mx : mx + 1 - G.x) * ddx, sdy = (ry < 0 ? G.y - my : my + 1 - G.y) * ddy, side = 0, hit = 0, perp = 0, wx = 0, ti = 0, guard = 0;
      while (!hit && guard++ < 64) {
        if (sdx < sdy) { sdx += ddx; mx += sx; side = 0; } else { sdy += ddy; my += sy; side = 1; }
        const c = mx < 0 || my < 0 || mx >= MW || my >= MH ? '#' : map[my][mx];
        if (c === '.') continue;
        perp = side ? sdy - ddy : sdx - ddx;
        wx = side ? G.x + perp * rx : G.y + perp * ry; wx -= Math.floor(wx);
        if (c === 'D') { // drzwi: rozsuwają się w bok, przez otwartą część promień leci dalej
          const o = doors[my * MW + mx]; if (wx < o) continue; wx -= o; ti = 5;
        } else ti = c === 'E' ? 4 : c === 'P' ? 3 : ((mx >> 3) + (my >> 3)) % 3;
        // framuga przy drzwiach
        if (c !== 'D') { const nx = side ? mx : mx - sx, ny = side ? my - sy : my; if (nx >= 0 && ny >= 0 && nx < MW && ny < MH && map[ny][nx] === 'D') ti = 6; }
        hit = 1;
      }
      zb[col] = perp;
      const lh = Math.floor(VH / Math.max(perp, .0001)), y0 = Math.max(0, (VH - lh) >> 1), y1 = Math.min(VH - 1, (VH + lh) >> 1);
      let tx = Math.floor(wx * TS); if ((side === 0 && rx < 0) || (side === 1 && ry > 0)) tx = TS - 1 - tx; // ekran: lewo = -y przy patrzeniu na +x, więc odbicie odwrotnie niż w klasycznym przykładzie
      const t = T[ti], step = TS / lh; let tp = (y0 - (VH - lh) / 2) * step;
      for (let y = y0; y <= y1; y++) {
        let c = t[(Math.min(TS - 1, tp | 0)) * TS + tx]; tp += step;
        if (side) c = ((c >> 1) & 0x7f7f7f) | 0xff000000; // ciemniejsza ściana N/S – jak w oryginale
        buf[y * VW + col] = c;
      }
    }
    // sprite'y od najdalszego
    const list = ents.filter(e => !e.gone).map(e => ({ e, d: (G.x - e.x) ** 2 + (G.y - e.y) ** 2 })).sort((a, b) => b.d - a.d);
    const inv = 1 / (px * dy - dx * py);
    for (const { e } of list) {
      const sxr = e.x - G.x, syr = e.y - G.y, tx = inv * (dy * sxr - dx * syr), ty = inv * (-py * sxr + px * syr);
      if (ty <= .1) continue;
      const scr = Math.floor(VW / 2 * (1 + tx / ty)), sz = Math.abs(Math.floor(VH / ty));
      let tx0 = e.t === 'p' ? SPR.p[Math.floor(e.age * 14) % 4] : e.t === 'e' ? SPR[e.st === 'dead' ? 'dead' : e.hurt > 0 ? 'hurt' : e.st === 'atk' ? 'atk' : e.st === 'chase' ? (Math.floor(e.anim * 4) % 2 ? 'w1' : 'w2') : 'stand'] : SPR[e.t];
      const ys = (VH - sz) >> 1, xs = scr - (sz >> 1);
      for (let c = Math.max(0, xs); c < Math.min(VW, xs + sz); c++) {
        if (ty >= zb[c]) continue;
        const u = Math.floor((c - xs) * TS / sz);
        for (let y = Math.max(0, ys); y < Math.min(VH, ys + sz); y++) { const v = Math.floor((y - ys) * TS / sz), p = tx0[v * TS + u]; if (p) buf[y * VW + c] = p; }
      }
    }
    cx.putImageData(img, 0, 0);
    drawWeapon();
    if (G.flash > 0) { cx.fillStyle = `rgba(255,0,0,${Math.min(.45, G.flash)})`; cx.fillRect(0, 0, VW, VH); }
    if (G.gflash > 0) { cx.fillStyle = `rgba(255,220,60,${Math.min(.35, G.gflash)})`; cx.fillRect(0, 0, VW, VH); }
    const mEl = $('#w3Msg'), mOn = G.msgT > 0 && G.run; if (mOn && mEl.textContent !== G.msg) mEl.textContent = G.msg; mEl.classList.toggle('on', mOn);
    $('#w3X0').hidden = !G.run;
    drawHud();
  }
  // broń: pikselowy baton w dłoni, zamach po ataku
  function drawWeapon() {
    if (!weaponLow) return;
    // rzut: ręka idzie do przodu i w górę, baton znika (poleciał), potem z dołu wjeżdża nowy
    const s = G.swing > 0 ? 1 - G.swing / .35 : 0, bob = G.moving ? Math.sin(performance.now() / 110) * 2 : 0;
    const fwd = s < .4 ? s / .4 : 1 - (s - .4) / .6, hx = Math.round(VW / 2 + 40 - fwd * 24), hy = Math.round(VH - 4 + Math.abs(bob) - fwd * 14 + (s > .4 ? (1 - fwd) * 0 : 0));
    const W = 70, H = Math.round(W * weaponLow.height / weaponLow.width), hasBar = !(s > .3 && s < .75), rise = s >= .75 ? (1 - (s - .75) / .25) * 30 : 0;
    if (hasBar) { cx.save(); cx.imageSmoothingEnabled = false; cx.translate(hx, hy - 8 + rise); cx.rotate(-2.15 - fwd * .5); cx.drawImage(weaponLow, -6, -H / 2, W, H); cx.restore(); }
    cx.save(); cx.translate(hx, hy + rise * .6);
    const P = (c, x, y, w, h) => { cx.fillStyle = c; cx.fillRect(x, y, w, h); };
    P('#c98a5a', -12, -12, 24, 20); P('#e0a878', -11, -14, 22, 18); P('#c98a5a', -11, -8, 22, 1); P('#c98a5a', -11, -3, 22, 1); P('#b07040', 9, -13, 4, 13); P('#e0a878', -17, -6, 7, 14); P('#c98a5a', -17, -6, 1, 14);
    cx.restore();
  }
  function drawHud() {
    cx.drawImage(hudBg, 0, VH);
    const Y = VH;
    text(cx, G.lvl + 1, 22 - textW(G.lvl + 1, 2) / 2, Y + 18, '#fff', 2);
    text(cx, G.score, 76 - textW(G.score, 2) / 2, Y + 18, '#fff', 2);
    text(cx, G.lives, 132 - textW(G.lives, 2) / 2, Y + 18, '#fff', 2);
    text(cx, Math.max(0, Math.ceil(G.hp)) + '%', 210 - textW(Math.max(0, Math.ceil(G.hp)) + '%', 2) / 2, Y + 18, G.hp < 30 ? '#ff5050' : '#fff', 2);
    // twarz: rozgląda się co chwilę, przy niskim zdrowiu – krew
    const f = faceImgs[G.faceDir]; if (f && f.complete) cx.drawImage(f, 154, Y + 5, 24, 32);
    if (G.hp < 70) { cx.fillStyle = '#b00000'; const n = G.hp < 30 ? 9 : G.hp < 50 ? 5 : 2; for (let i = 0; i < n; i++) cx.fillRect(156 + (i * 7) % 20, Y + 9 + (i * 11) % 22, 2, 2 + i % 3); }
    if (G.hp <= 0) { cx.fillStyle = 'rgba(120,0,0,.5)'; cx.fillRect(154, Y + 5, 24, 32); }
    // broń
    if (weaponLow) { cx.save(); cx.imageSmoothingEnabled = false; cx.translate(278, Y + 22); cx.rotate(-.35); cx.drawImage(weaponLow, -24, -weaponLow.height * 0.8, 48, weaponLow.height * 1.6); cx.restore(); }
  }
  function makeHud() {
    const c = document.createElement('canvas'); c.width = VW; c.height = HUDH; const x = c.getContext('2d');
    x.fillStyle = '#004070'; x.fillRect(0, 0, VW, HUDH); x.fillStyle = '#002a4c'; x.fillRect(0, 0, VW, 1);
    const box = (X, W, label) => { x.fillStyle = '#00213d'; x.fillRect(X, 3, W, 34); x.fillStyle = '#0a5c9c'; x.fillRect(X, 36, W, 1); x.fillRect(X + W - 1, 3, 1, 34); };
    box(4, 36, 'POZIOM'); box(44, 64, 'WYNIK'); box(112, 40, 'ZYCIA'); box(152, 28, ''); box(184, 52, 'ZDROWIE'); box(240, 76, 'BRON');
    return c;
  }

  // ---------- logika ----------
  function hurt(n) { G.hp -= n; G.flash = .5; G.faceT = 0; SFX.play('crash'); if (G.hp <= 0) die(); }
  function die() {
    G.run = false; G.lives--;
    if (G.lives <= 0) { LB.save(G.score); ov(`<b>KONIEC GRY</b><span>Wynik: ${G.score} · poziom ${G.lvl + 1}</span><button type="button" class="p" data-go="new">Jeszcze raz</button>${LB.html()}`); }
    else ov(`<b>OWCA PADŁA</b><span>Zostało żyć: ${G.lives}</span><button type="button" class="p" data-go="retry">Od początku poziomu</button>`);
  }
  function say(m) { G.msg = m; G.msgT = 1.6; }
  // atak: rzut batonem – baton leci prosto i kręci się, trafia pierwszego przeciwnika albo rozbija się o ścianę
  function attack() {
    if (G.swing > 0 || !G.run) return; G.swing = .35; SFX.play('tick');
    setTimeout(() => {
      if (!G.run) return;
      const c = Math.cos(G.a), sn = Math.sin(G.a);
      ents.push({ t: 'p', x: G.x + c * .3, y: G.y + sn * .3, vx: c * 9, vy: sn * 9, age: 0 });
    }, 120);
  }
  function projectiles(dt) {
    for (const p of ents) if (p.t === 'p' && !p.gone) {
      p.age += dt;
      const n = Math.max(1, Math.ceil(Math.hypot(p.vx, p.vy) * dt / .15));
      for (let i = 0; i < n && !p.gone; i++) {
        p.x += p.vx * dt / n; p.y += p.vy * dt / n;
        if (solid(p.x, p.y) || p.age > 2) { p.gone = true; break; }
        for (const e of ents) if (e.t === 'e' && e.st !== 'dead' && Math.hypot(e.x - p.x, e.y - p.y) < .38) {
          p.gone = true; e.hp -= 14 + Math.random() * 12; e.hurt = .2; e.st = e.hp > 0 ? 'chase' : 'dead'; SFX.play('eat');
          if (e.st === 'dead') { G.score += 100; say('+100'); }
          break;
        }
      }
    }
    if (ents.length > 60) ents = ents.filter(e => !(e.t === 'p' && e.gone));
  }
  function use() {
    const fx = G.x + Math.cos(G.a) * .9, fy = G.y + Math.sin(G.a) * .9, c = cellAt(fx, fy), X = Math.floor(fx), Y = Math.floor(fy);
    if (c === 'D') { const i = Y * MW + X; if (!doors.op) doors.op = new Set(); doors.op.add(i); SFX.play('tick'); }
    else if (c === 'E') { G.run = false; SFX.play('fanfare'); G.score += 1000; const kills = ents.filter(e => e.t === 'e' && e.st === 'dead').length, all = ents.filter(e => e.t === 'e').length;
      LB.save(G.score);
      ov(`<b>POZIOM ${G.lvl + 1} UKOŃCZONY!</b><span>Pokonani: ${kills}/${all} · bonus +1000 · wynik ${G.score}</span><button type="button" class="p" data-go="next">Następny poziom</button>${LB.html()}`); }
  }
  function update(dt) {
    const k = G.keys, mv = (k.w || k.arrowup ? 1 : 0) - (k.s || k.arrowdown ? 1 : 0) + (G.touch.f || 0), st = (k.d ? 1 : 0) - (k.a ? 1 : 0), rt = (k.arrowright ? 1 : 0) - (k.arrowleft ? 1 : 0) + (k.e && false ? 1 : 0) + (G.touch.t || 0);
    G.a += rt * 2.6 * dt + G.mouse; G.mouse = 0;
    const sp = 3.2 * dt, cs = Math.cos(G.a), sn = Math.sin(G.a);
    let nx = G.x + (cs * mv - sn * st) * sp, ny = G.y + (sn * mv + cs * st) * sp;
    if (canStand(nx, G.y, .22)) G.x = nx; if (canStand(G.x, ny, .22)) G.y = ny;
    G.moving = !!(mv || st);
    projectiles(dt);
    if (doors.op) for (const i of doors.op) { doors[i] = Math.min(1, doors[i] + dt * 1.6); if (doors[i] >= 1) doors.op.delete(i); }
    // znajdźki
    for (const e of ents) if (!e.gone && e.t !== 'e' && e.t !== 'p' && Math.hypot(e.x - G.x, e.y - G.y) < .5) {
      // zawsze podnosimy: przy pełnym zdrowiu zamiast zdrowia są punkty
      if (e.t === 'h') { if (G.hp >= 100) { G.score += 25; say('BATON +25 PKT'); } else { G.hp = Math.min(100, G.hp + 10); say('BATON +10 ZDROWIA'); } }
      if (e.t === 'c') { if (G.hp >= 100) { G.score += 50; say('TROPIC +50 PKT'); } else { G.hp = Math.min(100, G.hp + 25); say('TROPIC +25 ZDROWIA'); } }
      if (e.t === 't') { G.score += 100; say('LIMITLESS +100'); }
      if (e.t === 'k') { G.score += 500; say('KREATYNA +500'); }
      e.gone = true; G.gflash = .35; SFX.play('eat');
    }
    // przeciwnicy
    for (const e of ents) if (e.t === 'e' && e.st !== 'dead') {
      e.hurt -= dt; e.cd -= dt;
      const d = Math.hypot(G.x - e.x, G.y - e.y), see = d < 14 && los(e.x, e.y, G.x, G.y);
      if (e.st === 'idle' && see) e.st = 'chase';
      if (e.st === 'atk' && e.cd < .6) e.st = 'chase';
      if (e.st === 'chase') {
        e.anim += dt;
        if (d > .9) { const vx = (G.x - e.x) / d * 1.5 * dt, vy = (G.y - e.y) / d * 1.5 * dt; if (canStand(e.x + vx, e.y, .25)) e.x += vx; if (canStand(e.x, e.y + vy, .25)) e.y += vy; }
        if (e.cd <= 0 && see) {
          if (d < 1.3) { e.st = 'atk'; e.cd = 1.1; hurt((11 + Math.random() * 10) * e.dmg); }
          else if (d < 8 && Math.random() < .55) { e.st = 'atk'; e.cd = 1.4 + Math.random(); if (Math.random() < .6 - d * .04) hurt((6 + Math.random() * 8) * e.dmg); } // rzut pączkiem
          else e.cd = .6;
        }
      }
      if (!G.run) return;
    }
    G.swing = Math.max(0, G.swing - dt); G.flash = Math.max(0, G.flash - dt); G.gflash = Math.max(0, G.gflash - dt); G.msgT -= dt;
    G.faceT -= dt; if (G.faceT <= 0) { G.faceDir = [0, 0, 1, 2][Math.floor(Math.random() * 4)]; G.faceT = 1 + Math.random() * 1.5; }
  }
  function loop(t) {
    if (!G.open) { G.raf = 0; return; }
    const dt = Math.min(.05, (t - G.last) / 1000); G.last = t;
    if (G.run) update(dt);
    render();
    G.raf = requestAnimationFrame(loop);
  }

  // ---------- UI ----------
  const ov = h => { const o = $('#w3Ov'); if (h) { o.innerHTML = h; o.hidden = false; } else o.hidden = true; };
  function musPlay() { const m = $('#w3Mus'); if (G.mute || !G.open) return; m.volume = .35; const p = m.play(); if (p && p.catch) p.catch(() => {}); }
  function start(kind) {
    if (kind === 'new') { G.lvl = 0; G.score = 0; G.lives = 3; G.newMap = true; loadLevel(); }
    else if (kind === 'retry') loadLevel();
    else if (kind === 'next') { G.lvl++; G.newMap = true; loadLevel(true); }
    ov(''); G.run = true; G.last = performance.now(); musPlay(); try { $('#w3Wrap').focus({ preventScroll: true }); } catch (e) {}
  }
  function init() {
    if (T) return;
    T = makeTextures();
    cv = $('#w3C'); cv.width = VW; cv.height = CH; cx = cv.getContext('2d'); cx.imageSmoothingEnabled = false;
    img = cx.createImageData(VW, VH); buf = new Uint32Array(img.data.buffer); zb = new Float64Array(VW);
    hudBg = makeHud();
    SPR = { stand: enemyFrame('stand'), w1: enemyFrame('w1'), w2: enemyFrame('w2'), atk: enemyFrame('atk'), hurt: enemyFrame('hurt'), dead: enemyFrame('dead') };
    const blank = new Uint32Array(TS * TS); SPR.h = SPR.c = SPR.t = SPR.k = blank; SPR.p = [blank, blank, blank, blank];
    const ld = (src, f) => { const i = new Image(); i.onload = () => f(i); i.src = src; return i; };
    ld(GM_BAR, i => { SPR.h = pixelImg(i, 7, 1.2);
      // rzucany baton: 4 klatki obrotu, na wysokości oczu
      SPR.p = [0, 1, 2, 3].map(f => { const c = document.createElement('canvas'); c.width = c.height = TS; const x = c.getContext('2d'); x.imageSmoothingEnabled = false;
        const s2 = document.createElement('canvas'); s2.width = 14; s2.height = 5; s2.getContext('2d').drawImage(i, 0, 0, 14, 5);
        x.translate(32, 32); x.rotate(f * Math.PI / 4); x.drawImage(s2, -14, -5, 28, 10); return fromCanvas(c); }); const s = document.createElement('canvas'); s.width = 30; s.height = Math.round(30 * i.naturalHeight / i.naturalWidth); s.getContext('2d').drawImage(i, 0, 0, s.width, s.height); weaponLow = s; });
    ld(GM_PW.life, i => SPR.c = pixelImg(i, 16, 1));
    ld(GM_PW.slow, i => SPR.t = pixelImg(i, 11, 1));
    ld(GM_PW.wall, i => SPR.k = pixelImg(i, 13, 1));
    faceImgs = [W3_FACE.c, W3_FACE.l, W3_FACE.r].map(s => { const i = new Image(); i.src = s; return i; });
    G.touch = {}; G.mouse = 0;
    const key = (e, down) => {
      if (!G.open) return; const k = e.key.toLowerCase();
      if (['arrowup', 'arrowdown', 'arrowleft', 'arrowright', 'w', 'a', 's', 'd', ' ', 'control', 'e', 'enter'].includes(k)) e.preventDefault(); else return;
      G.keys[k] = down;
      if (down && (k === ' ' || k === 'control')) { if (!G.run && $('#w3Ov').hidden === false && $('#w3Ov [data-go]')) return $('#w3Ov [data-go]').click(); attack(); }
      if (down && (k === 'e' || k === 'enter')) use();
    };
    document.addEventListener('keydown', e => key(e, true)); document.addEventListener('keyup', e => key(e, false));
    $('#w3Ov').addEventListener('click', e => { const b = e.target.closest('[data-go]'); if (b) start(b.dataset.go); });
    // mysz: klik w obraz = blokada kursora (obracanie myszką) i atak
    cv.addEventListener('mousedown', () => { if (!G.run) return; if (document.pointerLockElement !== cv && cv.requestPointerLock && matchMedia('(pointer:fine)').matches) { try { cv.requestPointerLock(); } catch (e) {} } attack(); });
    document.addEventListener('mousemove', e => { if (document.pointerLockElement === cv && G.run) G.mouse += e.movementX * .002; });
    // sterowanie dotykowe
    $('#w3Pad').addEventListener('pointerdown', e => { const b = e.target.closest('[data-k]'); if (!b) return; e.preventDefault(); const k = b.dataset.k;
      if (k === 'fire') attack(); else if (k === 'use') use(); else { if (k === 'f') G.touch.f = 1; if (k === 'b') G.touch.f = -1; if (k === 'l') G.touch.t = -1; if (k === 'r') G.touch.t = 1; } });
    const stopT = e => { const b = e.target.closest && e.target.closest('[data-k]'); if (!b) return; const k = b.dataset.k; if (k === 'f' || k === 'b') G.touch.f = 0; if (k === 'l' || k === 'r') G.touch.t = 0; };
    $('#w3Pad').addEventListener('pointerup', stopT); $('#w3Pad').addEventListener('pointercancel', stopT); $('#w3Pad').addEventListener('pointerleave', () => { G.touch.f = 0; G.touch.t = 0; });
    $('#w3').addEventListener('close', () => { G.open = false; G.run = false; LB.save(G.score); LB.close(); G.keys = {}; G.touch = {}; if (document.pointerLockElement) document.exitPointerLock(); });
    $('#w3X').onclick = () => $('#w3').close();
    // cicha muzyka w tle (plik gry/JEDZIEMY.mp3 – wielkość liter ma znaczenie); wyciszenie zapamiętane
    const mus = $('#w3Mus'); mus.volume = .35;
    try { G.mute = localStorage.getItem('w11-w3-mute') === '1'; } catch (e) {}
    const sndBtn = () => { $('#w3Snd').textContent = G.mute ? '🔇' : '🔊'; };
    sndBtn();
    $('#w3Snd').onclick = () => { G.mute = !G.mute; try { localStorage.setItem('w11-w3-mute', G.mute ? '1' : '0'); } catch (e) {} sndBtn(); G.mute ? mus.pause() : musPlay(); };
    $('#w3').addEventListener('close', () => mus.pause());
    $('#w3Hub').onclick = () => { $('#w3').close(); hubOpen(); };
  }
  function open() {
    init(); G.lvl = 0; G.score = 0; G.lives = 3; G.newMap = true; loadLevel(); G.run = false; G.open = true;
    ov(`<b>OWCA WK 3D</b><span>Przejdź przez magazyn, pokonaj leniwców rzucając batonami kokosowymi i znajdź wyjście (EXIT).</span><span class="w3k">W/S lub ↑↓ – ruch · A/D – krok w bok · ←→ – obrót<br>Spacja / klik – rzut batonem · E – otwórz drzwi / wyjście</span><button type="button" class="p" data-go="go">Start</button>${LB.html()}`);
    $('#w3').showModal(); LB.open(); if (!G.raf) G.raf = requestAnimationFrame(t => { G.last = t; loop(t); });
  }
  return { open, G, _ents: () => ents, _map: () => map };
})();

$('#gmOv').addEventListener('click', e => { if (e.target.closest('#gmGo')) gmStart(); /* gmStart sam resetuje po przegranej; po utracie serca gra toczy się dalej */ });
$('#gmX').onclick = () => $('#gm').close();
$('#gm').addEventListener('close', () => { GM.run = false; if (lbRef) { lbRef.off(); lbRef = null; } });
// --- ranking (wspólny dla wszystkich kont): w11-…-snake/<uid> = { name, best, at }; każdy zapisuje tylko swój wynik
let lbRef = null, LB = {};
const lbMe = () => auth && auth.currentUser && auth.currentUser.uid;
function lbRender() {
  const me = lbMe();
  const rows = Object.entries(LB).filter(([, v]) => v && typeof v.best === 'number').map(([uid, v]) => ({ uid, name: txt(v.name, 30) || '?', best: v.best })).sort((a, b) => b.best - a.best || a.name.localeCompare(b.name, 'pl'));
  const mine = rows.findIndex(r => r.uid === me);
  const top = rows.slice(0, 10); if (mine >= 10) top.push(rows[mine]);
  $('#gmLb').innerHTML = `<h3><span>🏆 Ranking</span><span class="mu">${rows.length} graczy</span></h3>` + (top.length ? '<ol>' + top.map(r => { const i = rows.indexOf(r); return `<li class="${r.uid === me ? 'me' : ''}"><span class="lbn">${i < 3 ? ['🥇', '🥈', '🥉'][i] : i + 1 + '.'}</span><span>${esc(r.name)}</span><b>${r.best}</b></li>`; }).join('') + '</ol>' : '<p class="mu" style="margin:0;padding:8px 10px;font-size:13px">Nikt jeszcze nie grał – bądź pierwszy!</p>');
  if (mine >= 0 && rows[mine].best > GM.best) { GM.best = rows[mine].best; $('#gmBest').textContent = GM.best; }
}
function lbOpen() {
  if (!db || !lbMe()) { $('#gmLb').hidden = true; return; }
  $('#gmLb').hidden = false;
  lbRef = db.ref(ROOT + '-snake'); lbRef.on('value', s => { LB = s.val() || {}; lbRender(); }, () => { $('#gmLb').hidden = true; });
}
// wspólny ranking dla innych gier: w11-…-<key>/<uid> = { name, best, at } (te same reguły co snake)
function LBX(key, ovSel) {
  let ref = null, data = {};
  const me = () => lbMe();
  const html = () => {
    const rows = Object.entries(data).filter(([, v]) => v && typeof v.best === 'number').map(([uid, v]) => ({ uid, name: txt(v.name, 30) || '?', best: v.best })).sort((a, b) => b.best - a.best || a.name.localeCompare(b.name, 'pl'));
    const mi = rows.findIndex(r => r.uid === me()), top = rows.slice(0, 8); if (mi >= 8) top.push(rows[mi]);
    return `<div class="gmlb lbx"><h3><span>🏆 Ranking</span><span class="mu">${rows.length} graczy</span></h3>` + (top.length ? '<ol>' + top.map(r => { const i = rows.indexOf(r); return `<li class="${r.uid === me() ? 'me' : ''}"><span class="lbn">${i < 3 ? ['🥇', '🥈', '🥉'][i] : i + 1 + '.'}</span><span>${esc(r.name)}</span><b>${r.best}</b></li>`; }).join('') + '</ol>' : '<p class="mu" style="margin:0;padding:8px 10px;font-size:13px">Nikt jeszcze nie grał – bądź pierwszy!</p>') + '</div>';
  };
  const paint = () => { const el = document.querySelector(ovSel + ' .lbx'); if (el) el.outerHTML = html(); };
  return {
    html, mine: () => (data[me()] && Number(data[me()].best)) || 0,
    open() { if (!db || !me() || ref) return; ref = db.ref(ROOT + '-' + key); ref.on('value', sn => { data = sn.val() || {}; paint(); }, () => {}); },
    close() { if (ref) { ref.off(); ref = null; } },
    save(score) { const m = me(); if (!db || !m || !(score > 0) || score <= ((data[m] && Number(data[m].best)) || 0)) return; db.ref(ROOT + '-' + key + '/' + m).set({ name: cap(user || 'gracz'), best: Math.round(score), at: firebase.database.ServerValue.TIMESTAMP }).catch(() => {}); }
  };
}
function lbSave(score) {
  const me = lbMe(); if (!db || !me || !score) return;
  const cur = LB[me] && Number(LB[me].best) || 0; if (score <= cur) return;
  db.ref(ROOT + '-snake/' + me).set({ name: cap(user || 'gracz'), best: score, at: firebase.database.ServerValue.TIMESTAMP }).catch(() => {});
}
document.addEventListener('keydown', e => {
  if (!$('#gm').open || e.ctrlKey || e.metaKey || e.altKey) return;
  const k = { ArrowUp: 'up', ArrowDown: 'down', ArrowLeft: 'left', ArrowRight: 'right', w: 'up', s: 'down', a: 'left', d: 'right', W: 'up', S: 'down', A: 'left', D: 'right' }[e.key];
  if (k) { e.preventDefault(); gmTurn(k); return; }
  if (e.key === ' ') { e.preventDefault(); GM.run ? gmPause() : gmStart(); }
  else if (e.key === 'Enter' && GM.over) { e.preventDefault(); gmReset(); gmStart(); }
});
$('#gmPad').addEventListener('pointerdown', e => { const b = e.target.closest('[data-d]'); if (b) { e.preventDefault(); gmTurn(b.dataset.d); } });
(() => { // przesunięcie palcem po planszy
  let sx = 0, sy = 0, on = false;
  $('#gmWrap').addEventListener('pointerdown', e => { if (e.target.closest('button')) return; on = true; sx = e.clientX; sy = e.clientY; });
  $('#gmWrap').addEventListener('pointermove', e => {
    if (!on) return; const dx = e.clientX - sx, dy = e.clientY - sy; if (Math.max(Math.abs(dx), Math.abs(dy)) < 24) return;
    gmTurn(Math.abs(dx) > Math.abs(dy) ? (dx > 0 ? 'right' : 'left') : (dy > 0 ? 'down' : 'up')); sx = e.clientX; sy = e.clientY;
  });
  const end = () => { on = false; }; $('#gmWrap').addEventListener('pointerup', end); $('#gmWrap').addEventListener('pointercancel', end);
})();

