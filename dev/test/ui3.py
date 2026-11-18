import asyncio, sys
from playwright.async_api import async_playwright
OUT='/home/claude/keiba/test/shots'
async def main():
    kind = sys.argv[1]
    async with async_playwright() as p:
        b = await p.chromium.launch(executable_path='/usr/bin/google-chrome', args=['--use-angle=swiftshader','--enable-unsafe-swiftshader'])
        ctx = await b.new_context(viewport={'width':390,'height':844}, is_mobile=True, has_touch=True, device_scale_factor=2)
        page = await ctx.new_page(); errs=[]
        page.on('pageerror', lambda e: errs.append('PAGEERROR: '+str(e)))
        page.on('console', lambda m: errs.append(m.text) if m.type=='error' else None)
        await page.goto('http://localhost:8765/'); await page.evaluate("localStorage.clear()"); await page.reload(); await page.wait_for_timeout(400)
        await page.click('text=馬を育てる' if kind=='horse' else 'text=騎手を育てる'); await page.wait_for_timeout(300)
        await page.screenshot(path=f'{OUT}/30_{kind}_draft.png', full_page=True)
        await page.click('[data-act=dstart]'); await page.wait_for_timeout(300)
        await page.screenshot(path=f'{OUT}/31_{kind}_camp.png', full_page=True)
        await page.click('[data-act=toMonth]'); await page.wait_for_timeout(300)
        acts = await page.query_selector_all('.act:not([disabled])')
        await acts[0].click(); await page.wait_for_timeout(200)
        await page.screenshot(path=f'{OUT}/32_{kind}_month.png', full_page=True)
        await page.click('[data-act=confirm]'); await page.wait_for_timeout(300)
        await page.screenshot(path=f'{OUT}/33_{kind}_after.png', full_page=True)
        # 出来事があれば選ぶ
        for i in range(4):
            c = await page.query_selector('[data-act=choose]')
            if c: await c.click(); await page.wait_for_timeout(200); await page.screenshot(path=f'{OUT}/34_{kind}_ev.png', full_page=True); await page.click('[data-act=nextEv]'); await page.wait_for_timeout(200)
        await page.screenshot(path=f'{OUT}/35_{kind}_mres.png', full_page=True)
        # オート8倍
        await page.click('[data-act=auto]'); await page.click('[data-act=speed]'); await page.click('[data-act=speed]'); await page.click('[data-act=speed]')
        await page.wait_for_timeout(int(sys.argv[2]) if len(sys.argv)>2 else 25000)
        await page.screenshot(path=f'{OUT}/36_{kind}_auto.png', full_page=True)
        st = await page.evaluate("(()=>{const s=JSON.parse(localStorage.getItem('shinuka_ikiruka_v1'));const c=s.activeHorse||s.activeJockey;return c?[c.screen,c.p.age,c.p.month,c.p.record,c.p.wins]:['none', s.horses.length, s.jockeys.length]})()")
        print(kind, st)
        print(errs[:10])
        await b.close()
asyncio.run(main())
