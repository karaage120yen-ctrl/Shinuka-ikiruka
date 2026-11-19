import asyncio
from playwright.async_api import async_playwright
OUT='/home/claude/keiba/test/shots'
async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch(executable_path='/usr/bin/google-chrome', args=['--use-angle=swiftshader','--enable-unsafe-swiftshader'])
        pg = await (await b.new_context(viewport={'width':844,'height':390}, device_scale_factor=2)).new_page(); errs=[]
        pg.on('pageerror', lambda e: errs.append(str(e)))
        await pg.goto('http://localhost:8765/#fast'); await pg.evaluate("()=>localStorage.setItem('shinuka_ikiruka_v1', JSON.stringify({settings:{sound:false,view:'back'},horses:[],jockeys:[],gacha:[],carrots:0,nextId:1}))"); await pg.reload(); await pg.wait_for_timeout(500)
        await pg.evaluate("window.__race3d({place:'東京',weather:'晴',going:'良',surf:'芝',dist:1600})")
        await pg.add_style_tag(content='.hud-top,#minimap,.hud-small,.hud-bottom,.hud-call,.hud-msg,.side{display:none!important}')
        await pg.evaluate("()=>{window.__view && window.__view.setView('front')}")
        for i,t in enumerate([300, 2500, 2500, 2500]):
            await pg.wait_for_timeout(t); await pg.screenshot(path=f'{OUT}/face{i}.png')
        print('errors', errs[:4]); await b.close()
asyncio.run(main())
