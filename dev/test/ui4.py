import asyncio, sys
from playwright.async_api import async_playwright
OUT='/home/claude/keiba/test/shots'
async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch(executable_path='/usr/bin/google-chrome', args=['--use-angle=swiftshader','--enable-unsafe-swiftshader'])
        ctx = await b.new_context(viewport={'width':390,'height':844}, is_mobile=True, has_touch=True)
        page = await ctx.new_page(); errs=[]
        page.on('pageerror', lambda e: errs.append('PAGEERROR: '+str(e)))
        await page.goto('http://localhost:8765/#fast'); await page.evaluate("localStorage.clear()"); await page.reload(); await page.wait_for_timeout(400)
        await page.click('text=馬を育てる'); await page.click('[data-act=dstart]'); await page.wait_for_timeout(200)
        await page.evaluate("""(()=>{const k='shinuka_ikiruka_v1';const s=JSON.parse(localStorage.getItem(k));const p=s.activeHorse.p;p.age=2;p.month=7;for(const x in p.st)p.st[x]=50;s.activeHorse.screen='month';localStorage.setItem(k,JSON.stringify(s))})()""")
        await page.reload(); await page.wait_for_timeout(400)
        await page.click('text=馬を育てる'); await page.wait_for_timeout(300)
        await page.click('[data-act=pickAct][data-v=race]'); await page.wait_for_timeout(200)
        await page.click('[data-act=pickRace] >> nth=0'); await page.wait_for_timeout(200)
        await page.screenshot(path=f'{OUT}/40_pick.png', full_page=True)
        await page.click('[data-act=confirm]'); await page.wait_for_timeout(300)
        for i in range(4):
            c = await page.query_selector('[data-act=choose]')
            if c: await c.click(); await page.wait_for_timeout(150); await page.click('[data-act=nextEv]'); await page.wait_for_timeout(150)
        await page.screenshot(path=f'{OUT}/41_prerace.png', full_page=True)
        await page.click('[data-act=ride3d]'); await page.wait_for_timeout(3000)
        for i in range(80):
            if await page.query_selector('#res-next'): break
            await page.wait_for_timeout(1000)
        await page.click('#res-next'); await page.wait_for_timeout(500)
        await page.screenshot(path=f'{OUT}/42_mres_race.png', full_page=True)
        print(errs[:5])
        await b.close()
asyncio.run(main())
