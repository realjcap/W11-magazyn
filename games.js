// W11 – Game Hub. Ładowane przez index.html dopiero po kliknięciu ukrytego przycisku.
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
    const PROD = [[GM_PW.life, .62, -18.9, .31, -12], [FL_CAN, .62, 16.5, .81 + .31, 11.3], [GM_PW.slow, .42, -11, .21, 3.6], [GM_PW.wall, .52, 11, .26, -6.4]]; // [obrazek, wysokość, x, y, z]
    PROD.forEach(([src, h, x, y, z]) => {
      const tex = TL.load(src, t => { m.scale.set(h * t.image.width / t.image.height, h, 1); }); tex.colorSpace = T.SRGBColorSpace;
      const m = new T.Sprite(new T.SpriteMaterial({ map: tex })); m.scale.set(h * .5, h, 1); m.position.set(x, y, z); scene.add(m); items.push({ m, x, y, z, got: false, by: y });
    });
    const rTex = TL.load(SL_RABEN); rTex.colorSpace = T.SRGBColorSpace;
    const rM = new T.MeshLambertMaterial({ map: rTex, emissive: 0x0c0c0c, side: T.DoubleSide });
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
    if (seen) G.stat += dt * (.16 + agg * .25 + Math.max(0, 7 - dist) * .09);
    else G.stat = Math.max(0, G.stat - dt * .22);
    if (dist < 6 && !seen) G.stat += dt * .05;
    if (dist < 1.6 || G.stat >= 1) return caught();
    G.slT -= dt;
    if (G.slT <= 0 && !seen) { slPlace(); G.slT = 9 - agg * 6 + Math.random() * 3; }
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
    if (audio) { audio.ng.gain.value = G.mute ? 0 : Math.min(.6, G.stat * G.stat * .7); audio.drone.gain.value = G.mute ? 0 : (G.lightsOut ? .05 + G.got / G.total * .1 : 0); }
    // HUD
    $('#slHud').textContent = `${G.got}/${G.total}`;
    $('#slSt').style.width = (G.stam * 100) + '%';
    $('#slNs').style.opacity = Math.min(.85, G.stat * 1.1).toFixed(2);
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
    slender.position.set(NPC.x, 0, NPC.z); slender.rotation.y = NPC.face; $('#slList').hidden = true; $('#slPr').classList.remove('on');
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
    if (!R) { R = new T.WebGLRenderer({ canvas: cv, antialias: false, powerPreference: 'high-performance' }); R.setPixelRatio(PIX); }
    build(); reset(); G.run = false; G.st = 'menu';
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

const SL_RABEN = 'data:image/jpeg;base64,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/wCSqPsnxx/6GD4df+CS9/8AkqgD0WivOvsnxx/6GD4df+CS9/8Akqj7J8cf+hg+HX/gkvf/AJKoA9Forzr7J8cf+hg+HX/gkvf/AJKo+yfHH/oYPh1/4JL3/wCSqAPRaK86+yfHH/oYPh1/4JL3/wCSqPsnxx/6GD4df+CS9/8AkqgD0WivOvsnxx/6GD4df+CS9/8Akqj7J8cf+hg+HX/gkvf/AJKoA9FrjPjt/wAkQ8ef9i3qP/pNJWb9k+OP/QwfDr/wSXv/AMlVm+KfDXxk8SeGdV8O6l4i8BJY6pZTWVy1vo12sojlQoxRmuWAbDHBIIz2PSgD0Xwr/wAivpX/AF5Q/wDoArSqrpFqbHSbOyZw5t4EiLAYztUDP6VaoAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA//2Q==';
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

const W3_FACE = {"c": "data:image/png;base64,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", "l": "data:image/png;base64,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", "r": "data:image/png;base64,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"};
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
    // cicha muzyka w tle (plik JEDZIEMY.mp3 obok index.html – wielkość liter ma znaczenie); wyciszenie zapamiętane
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

