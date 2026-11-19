import asyncio
from playwright.async_api import async_playwright
OUT='/home/claude/keiba/test/shots'
async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch(executable_path='/usr/bin/google-chrome', args=['--use-angle=swiftshader','--enable-unsafe-swiftshader'])
        pg = await (await b.new_context(viewport={'width':390,'height':844}, device_scale_factor=2)).new_page(); errs=[]
        pg.on('pageerror', lambda e: errs.append(str(e))); pg.on('console', lambda m: m.type=='error' and errs.append(m.text))
        await pg.goto('http://localhost:8765/#fastpre'); await pg.evaluate("()=>localStorage.setItem('shinuka_ikiruka_v1', JSON.stringify({settings:{sound:false,view:'back'},horses:[],jockeys:[],gacha:[],carrots:0,nextId:1}))"); await pg.reload(); await pg.wait_for_timeout(500)
        await pg.evaluate("window.__race3d({place:'東京',weather:'晴',going:'良',surf:'芝',dist:1600})")
        await pg.wait_for_timeout(2500)
        await pg.evaluate("()=>document.getElementById('h-pre').classList.add('hidden')")
        await pg.wait_for_timeout(1500); await pg.screenshot(path=f'{OUT}/hc_orbit1.png')
        await pg.wait_for_timeout(2500); await pg.screenshot(path=f'{OUT}/hc_orbit2.png')
        await pg.evaluate("()=>document.getElementById('pre-skip').click()"); await pg.wait_for_timeout(9000); await pg.screenshot(path=f'{OUT}/hc_back.png')
        await pg.evaluate("()=>{document.getElementById('h-view').click();document.getElementById('h-view').click();}"); await pg.wait_for_timeout(2500); await pg.screenshot(path=f'{OUT}/hc_tv.png')
        print('errors', errs[:4]); await b.close()
asyncio.run(main())
