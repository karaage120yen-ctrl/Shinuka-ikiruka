import asyncio
from playwright.async_api import async_playwright
OUT='/home/claude/keiba/test/shots'
async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch(executable_path='/usr/bin/google-chrome', args=['--use-angle=swiftshader','--enable-unsafe-swiftshader'])
        for vw,size,name in [('back',{'width':390,'height':844},'portrait'),('tv',{'width':640,'height':640},'square')]:
            ctx = await b.new_context(viewport=size, device_scale_factor=2)
            page = await ctx.new_page()
            await page.goto('http://localhost:8765/#fast'); await page.evaluate("(v)=>{localStorage.setItem('shinuka_ikiruka_v1', JSON.stringify({settings:{sound:false,view:v,voice:false},horses:[],jockeys:[],gacha:[],carrots:0,nextId:1}))}", vw); await page.reload(); await page.wait_for_timeout(300)
            await page.evaluate("window.__race3d({place:'東京',weather:'晴',going:'良',surf:'芝',dist:1400})")
            await page.add_style_tag(content='.hud-top,#minimap,.hud-small,.hud-bottom,.hud-msg,.hud-call,.side,.hud-top3{display:none!important}')
            for i,t in enumerate([20000, 9000, 9000]):
                await page.wait_for_timeout(t)
                await page.screenshot(path=f'{OUT}/ka_{name}_{i}.png')
            await ctx.close()
        await b.close()
asyncio.run(main())
