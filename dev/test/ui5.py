import asyncio
from playwright.async_api import async_playwright
OUT='/home/claude/keiba/test/shots'
FAKE = """
window.FIREBASE_CONFIG = null;
(function(){
  const store = {}; const subs = [];
  const fire = () => subs.forEach(s => s());
  const db = {
    doc(path){ return {
      get: async () => ({ exists: !!store[path], data: () => store[path] }),
      set: async (d, m) => { store[path] = m ? Object.assign({}, store[path]||{}, JSON.parse(JSON.stringify(d))) : JSON.parse(JSON.stringify(d)); fire(); },
      delete: async () => { delete store[path]; fire(); },
      onSnapshot(next){ const f = () => next({ exists: !!store[path], data: () => store[path] }); subs.push(f); f(); return () => {}; } }; },
    col(path){ return { onSnapshot(next){ const f = () => next(Object.keys(store).filter(k => k.startsWith(path + '/') && k.split('/').length === path.split('/').length + 1).map(k => ({ id: k.split('/').pop(), ...store[k] }))); subs.push(f); f(); return () => {}; } }; } };
  // 友達のデータ
  window.__fakeStore = store;
  window.KBNET = { db, onUser(f){ f({ uid: 'me1', anon: true, name: '' }); }, info: () => ({ uid: 'me1' }), signInGoogle: async () => {}, signOut: async () => {} };
  window.__kbReady = Promise.resolve(window.KBNET); window.__kbResolve = null;
})();
"""
async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch(executable_path='/usr/bin/google-chrome', args=['--use-angle=swiftshader','--enable-unsafe-swiftshader'])
        ctx = await b.new_context(viewport={'width':390,'height':844}, device_scale_factor=2)
        page = await ctx.new_page(); errs=[]
        page.on('pageerror', lambda e: errs.append(str(e)))
        page.on('console', lambda m: m.type=='error' and errs.append(m.text))
        await page.goto('http://localhost:8765/'); await page.wait_for_timeout(1500)
        await page.screenshot(path=f'{OUT}/u5_home.png')
        # 設定（オフライン表示）
        await page.click('[data-act=settings]'); await page.wait_for_timeout(400); await page.screenshot(path=f'{OUT}/u5_set_off.png', full_page=True)
        # 配合
        await page.click('[data-act=home]') if await page.query_selector('[data-act=home]') else None
        await page.goto('http://localhost:8765/'); await page.wait_for_timeout(800)
        await page.click('[data-act=horse]'); await page.wait_for_timeout(600)
        await page.screenshot(path=f'{OUT}/u5_draft.png')
        await page.click('[data-act=dbreed]'); await page.wait_for_timeout(400)
        await page.click('[data-act=spick] >> nth=0'); await page.wait_for_timeout(200)
        await page.click('[data-act=dpick] >> nth=1'); await page.wait_for_timeout(300)
        await page.screenshot(path=f'{OUT}/u5_breed.png', full_page=True)
        await page.click('[data-act=breedGo]'); await page.wait_for_timeout(400)
        await page.screenshot(path=f'{OUT}/u5_bred.png', full_page=True)
        await page.click('[data-act=dstart]'); await page.wait_for_timeout(600)
        await page.screenshot(path=f'{OUT}/u5_camp.png')
        # 実績
        await page.goto('http://localhost:8765/'); await page.wait_for_timeout(800)
        await page.click('[data-act=ach]'); await page.wait_for_timeout(400); await page.screenshot(path=f'{OUT}/u5_ach.png')
        print('errors1', errs[:5])
        # オンライン（にせFirebase）
        ctx2 = await b.new_context(viewport={'width':390,'height':844}, device_scale_factor=2)
        await ctx2.route('**/fb.js*', lambda r: r.fulfill(status=200, content_type='application/javascript', body='// fake'))
        await ctx2.route('**/firebase-config.js*', lambda r: r.fulfill(status=200, content_type='application/javascript', body=FAKE))
        pg = await ctx2.new_page(); errs2=[]
        pg.on('pageerror', lambda e: errs2.append(str(e)))
        await pg.add_init_script("window.__kbReadyFake=1")
        await pg.goto('http://localhost:8765/'); await pg.wait_for_timeout(1200)
        await pg.click('[data-act=settings]'); await pg.wait_for_timeout(600); await pg.screenshot(path=f'{OUT}/u5_set_on.png', full_page=True)
        await pg.click('[data-act=csave]'); await pg.wait_for_timeout(600)
        print('saved keys', await pg.evaluate("Object.keys(window.__fakeStore)"))
        await pg.goto('http://localhost:8765/'); await pg.wait_for_timeout(1200)
        await pg.click('[data-act=bet]'); await pg.wait_for_timeout(500)
        await pg.fill('#rcode', 'TEST1'); await pg.click('[data-a=join]'); await pg.wait_for_timeout(500)
        key = await pg.evaluate("Object.values(JSON.parse(localStorage.getItem('shinuka_ikiruka_v1')).bet.cards)[0].key")
        await pg.evaluate("""(k)=>{ const s=window.__fakeStore; window.KBNET.db.doc('kb_rooms/TEST1/members/fr1').set({n:'たろう',k:k,bet:3000,ret:5200,done:2,coins:12200,rs:JSON.stringify([[1,1000,2000,['単勝 3']],[2,2000,3200,['馬連 1-4']],[3,500,null,['複勝 7']]]),t:Date.now()}); }""", key)
        await pg.wait_for_timeout(1200)
        await pg.screenshot(path=f'{OUT}/u5_lobby_on.png', full_page=True)
        await pg.click('[data-a=race] >> nth=2'); await pg.wait_for_timeout(5000)
        await pg.screenshot(path=f'{OUT}/u5_race_on.png', full_page=True)
        await pg.click('[data-a=together]'); await pg.wait_for_timeout(1500)
        await pg.screenshot(path=f'{OUT}/u5_watch.png')
        await pg.wait_for_timeout(11000)
        vis = await pg.evaluate("!document.getElementById('race-screen').classList.contains('hidden')")
        print('race started', vis)
        await pg.screenshot(path=f'{OUT}/u5_watch2.png')
        print('errors2', errs2[:5])
        print('members', await pg.evaluate("Object.keys(window.__fakeStore)"))
        await b.close()
asyncio.run(main())
