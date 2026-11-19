import asyncio, sys
from playwright.async_api import async_playwright
OUT='/home/claude/keiba/test/shots'
async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch(executable_path='/usr/bin/google-chrome', args=['--use-angle=swiftshader','--enable-unsafe-swiftshader'])
        for name, vp, opt in [('hl', {'width':960,'height':540}, "{heroDist:15, heroSide:1.5, heroH:0.8, heroFov:36}")]:
            pg = await (await b.new_context(viewport=vp, device_scale_factor=2)).new_page(); errs=[]
            pg.on('pageerror', lambda e: errs.append(str(e)))
            await pg.goto('http://localhost:8765/'); await pg.evaluate("()=>localStorage.setItem('shinuka_ikiruka_v1', JSON.stringify({settings:{sound:false,view:'back'},horses:[],jockeys:[],gacha:[],carrots:0,nextId:1}))"); await pg.reload(); await pg.wait_for_timeout(400)
            await pg.evaluate("window.__race3d({place:'東京',weather:'晴',going:'良',surf:'芝',dist:2400,title:'日本ダービー'})")
            await pg.add_style_tag(content='.hud-top,#minimap,.hud-small,.hud-bottom,.hud-call,.hud-msg,.side,#vig,#vig-speed,.hud-buff,#h-msg2{display:none!important}')
            await pg.wait_for_timeout(1500)
            await pg.evaluate("()=>document.getElementById('pre-skip').click()")
            await pg.evaluate(f"()=>{{Object.assign(window.__view,{opt}); window.__view.setView('hero')}}")
            for i,D in enumerate([3.5, 4.5, 5.5]):
                await pg.evaluate("()=>{window.__pause=false}")
                await pg.wait_for_function(f"()=>window.__race.started && Math.max(...window.__race.racers.map(r=>r.p))>={D}", timeout=90000, polling=16)
                await pg.evaluate("()=>{window.__pause=true; window.__race.racers.forEach((r,i)=>{r.v=16; r.stride+= (i*0.37)%1*3;})}")
                await pg.wait_for_timeout(600); await pg.screenshot(path=f'{OUT}/{name}{i}.png')
            print(name, errs[:3])
        await b.close()
asyncio.run(main())
