import asyncio
from playwright.async_api import async_playwright
OUT='/home/claude/keiba/test/shots'
async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch(executable_path='/usr/bin/google-chrome', args=['--use-angle=swiftshader','--enable-unsafe-swiftshader'])
        ctx = await b.new_context(viewport={'width':390,'height':844}, is_mobile=True, has_touch=True)
        page = await ctx.new_page(); errs=[]
        page.on('pageerror', lambda e: errs.append('PAGEERROR: '+str(e)))
        await page.goto('http://localhost:8765/'); await page.evaluate("localStorage.clear()"); await page.reload(); await page.wait_for_timeout(400)
        await page.click('text=騎手を育てる'); await page.wait_for_timeout(200)
        await page.click('text=入学する'); await page.wait_for_timeout(200)
        for i in range(24):
            if await page.query_selector('[data-act=mock]') and i%6==2:
                pass
            btns = await page.query_selector_all('.tbtn')
            if btns: await btns[i % len(btns)].click()
            else: await page.click('[data-act=treat]')
            await page.wait_for_timeout(80)
            while True:
                ok = await page.query_selector('.modal [data-close]')
                if not ok: break
                await ok.click(); await page.wait_for_timeout(80)
            if i==3: await page.screenshot(path=f'{OUT}/20_jockey.png')
        await page.screenshot(path=f'{OUT}/21_after_jockey.png')
        await page.click('text=一覧'); await page.wait_for_timeout(200)
        await page.click('text=騎手（'); await page.wait_for_timeout(200)
        await page.screenshot(path=f'{OUT}/22_list.png')
        await page.click('.back'); await page.click('text=ガチャ'); await page.wait_for_timeout(200)
        await page.click('[data-act=p1]'); await page.wait_for_timeout(1500)
        await page.screenshot(path=f'{OUT}/23_gacha.png')
        await page.click('.modal [data-close]'); await page.click('.back'); await page.click('text=対戦・レース'); await page.wait_for_timeout(200)
        await page.screenshot(path=f'{OUT}/24_vs.png')
        print(errs)
        await b.close()
asyncio.run(main())
