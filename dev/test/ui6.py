import asyncio, json
from playwright.async_api import async_playwright
OUT='/home/claude/keiba/test/shots'
SAVE = {"settings":{"sound":False,"view":"back"},"carrots":500,"nextId":100,"horses":[{"id":5,"kind":"horse","name":"レジェンドホース","s":{"spd":88,"sta":84,"pow":80,"gut":78,"wis":75},"skills":[],"growth":"normal","record":[8,2,1,3],"wins":8,"gradedWins":5,"g1Wins":3,"titles":["日本ダービー","天皇賞（秋）","有馬記念"],"awards":[],"earnings":120000,"score":700,"rank":"S","age":5,"year":2031,"coat":2,"sire":"ディープ","dam":"ママ","sex":"牡","apt":{"turf":"A","dirt":"C"},"style":"差し","races":[]}],"jockeys":[{"id":6,"kind":"jockey","name":"テスト騎手","s":{"tec":80,"whip":75,"bal":78,"fit":70,"jud":82},"skills":[],"record":[1000,800,700,3000],"wins":1100,"g1Wins":12,"gradedWins":40,"titles":[],"awards":[],"earnings":1,"score":600,"rank":"S","rides":5000,"silk":2}],"gacha":[]}
async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch(executable_path='/usr/bin/google-chrome', args=['--use-angle=swiftshader','--enable-unsafe-swiftshader'])
        ctx = await b.new_context(viewport={'width':390,'height':844}, device_scale_factor=2)
        pg = await ctx.new_page(); errs=[]
        pg.on('pageerror', lambda e: errs.append(str(e))); pg.on('console', lambda m: m.type=='error' and errs.append(m.text))
        await pg.goto('http://localhost:8765/'); await pg.evaluate("(s)=>localStorage.setItem('shinuka_ikiruka_v1', s)", json.dumps(SAVE)); await pg.reload(); await pg.wait_for_timeout(800)
        await pg.screenshot(path=f'{OUT}/u6_home.png', full_page=True)
        # ガチャ
        await pg.click('[data-act=gacha]'); await pg.wait_for_timeout(300)
        await pg.click('[data-act=p10]'); await pg.wait_for_timeout(2500); await pg.screenshot(path=f'{OUT}/u6_gacha_pull.png')
        await pg.click('.modal [data-close]'); await pg.wait_for_timeout(300)
        await pg.click('[data-act=tab][data-v=deck]'); await pg.wait_for_timeout(300)
        for i in range(3):
            el = await pg.query_selector('[data-act=add]:not(.sel)')
            if el: await el.click(); await pg.wait_for_timeout(200)
        await pg.screenshot(path=f'{OUT}/u6_gacha_deck.png', full_page=True)
        await pg.click('[data-act=go]'); await pg.wait_for_timeout(300)
        # 馬主
        await pg.click('[data-act=owner]'); await pg.wait_for_timeout(300)
        await pg.click('[data-act=tab][data-v=sale]'); await pg.wait_for_timeout(300)
        await pg.screenshot(path=f'{OUT}/u6_sale.png', full_page=True)
        await pg.click('[data-act=auc] >> nth=3'); await pg.wait_for_timeout(300)
        for i in range(30):
            bt = await pg.query_selector('#a-bid')
            if not bt: break
            await bt.click(); await pg.wait_for_timeout(100)
        await pg.screenshot(path=f'{OUT}/u6_auction.png')
        ok = await pg.query_selector('#a-ok')
        if ok: await ok.click()
        await pg.wait_for_timeout(300)
        await pg.click('[data-act=tab][data-v=stable]'); await pg.wait_for_timeout(300)
        await pg.screenshot(path=f'{OUT}/u6_stable.png', full_page=True)
        for i in range(8):
            await pg.click('[data-act=adv]'); await pg.wait_for_timeout(200)
            await pg.click('.modal [data-close]'); await pg.wait_for_timeout(200)
        sel = await pg.query_selector('select[data-act=race]')
        if sel:
            opts = await sel.evaluate("e=>e.options.length")
            if opts > 1: await sel.select_option(index=1); await pg.wait_for_timeout(300)
        await pg.screenshot(path=f'{OUT}/u6_stable2.png', full_page=True)
        await pg.click('[data-act=adv]'); await pg.wait_for_timeout(400); await pg.screenshot(path=f'{OUT}/u6_adv.png')
        await pg.click('.modal [data-close]'); await pg.wait_for_timeout(200)
        await pg.click('[data-act=go]'); await pg.wait_for_timeout(300)
        # 殿堂・オンライン・設定
        await pg.click('[data-act=hall]'); await pg.wait_for_timeout(300); await pg.screenshot(path=f'{OUT}/u6_hall.png', full_page=True)
        await pg.click('[data-act=go]'); await pg.wait_for_timeout(300)
        await pg.click('[data-act=online]'); await pg.wait_for_timeout(300); await pg.screenshot(path=f'{OUT}/u6_online.png')
        await pg.click('[data-act=go]'); await pg.wait_for_timeout(300)
        await pg.click('[data-act=settings]'); await pg.wait_for_timeout(300); await pg.screenshot(path=f'{OUT}/u6_settings.png', full_page=True)
        await pg.click('[data-act=go]'); await pg.wait_for_timeout(300)
        # 馬の育成（サポート表示）
        await pg.click('[data-act=horse]'); await pg.wait_for_timeout(500); await pg.screenshot(path=f'{OUT}/u6_draft.png', full_page=True)
        await pg.goto('http://localhost:8765/'); await pg.wait_for_timeout(600)
        # 賭け：自分の馬
        await pg.click('[data-act=bet]'); await pg.wait_for_timeout(600)
        await pg.click('[data-a=myrace]'); await pg.wait_for_timeout(9000)
        await pg.screenshot(path=f'{OUT}/u6_myrace.png', full_page=True)
        print('errors', errs[:8])
        await b.close()
asyncio.run(main())
