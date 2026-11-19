import asyncio
from playwright.async_api import async_playwright
OUT='/home/claude/keiba/test/shots'
async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch(executable_path='/usr/bin/google-chrome', args=['--use-angle=swiftshader','--enable-unsafe-swiftshader'])
        pg = await (await b.new_context(viewport={'width':390,'height':844}, device_scale_factor=2)).new_page(); errs=[]
        pg.on('pageerror', lambda e: errs.append(str(e))); pg.on('console', lambda m: m.type=='error' and errs.append(m.text))
        await pg.goto('http://localhost:8765/#fast'); await pg.evaluate("()=>localStorage.setItem('shinuka_ikiruka_v1', JSON.stringify({settings:{sound:false,view:'fp'},horses:[],jockeys:[],gacha:[],carrots:0,nextId:1}))"); await pg.reload(); await pg.wait_for_timeout(500)
        await pg.evaluate("window.__race3d({place:'東京',weather:'晴',going:'良',surf:'芝',dist:1200,coat:3,hsk:['umagami']})")
        await pg.wait_for_timeout(7000); await pg.screenshot(path=f'{OUT}/god0.png')
        v0 = await pg.evaluate("window.__race.player.v")
        await pg.evaluate("()=>document.getElementById('b-god').dispatchEvent(new PointerEvent('pointerdown',{bubbles:true}))")
        await pg.wait_for_timeout(500); await pg.screenshot(path=f'{OUT}/god1.png')
        v1 = await pg.evaluate("window.__race.player.v")
        print('v', v0, v1, 'god', await pg.evaluate("window.__race.player.god"), 'slip', await pg.evaluate("window.__race.racers.map(r=>r.slip.toFixed(2)).join(',')"))
        print('errors', errs[:4]); await b.close()
asyncio.run(main())
