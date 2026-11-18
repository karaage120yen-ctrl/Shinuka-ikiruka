import asyncio, sys
from playwright.async_api import async_playwright
OUT='/home/claude/keiba/test/shots'
CASES=[('back','東京','晴','良','芝',14000),('tv','京都','晴','良','芝',15000),('fp','東京','晴','良','芝',22000)]
async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch(executable_path='/usr/bin/google-chrome', args=['--use-angle=swiftshader','--enable-unsafe-swiftshader'])
        for vw,pl,w,g,sf,t in CASES:
            ctx = await b.new_context(viewport={'width':390,'height':844}, device_scale_factor=2)
            page = await ctx.new_page(); errs=[]
            page.on('pageerror', lambda e: errs.append(str(e))); page.on('console', lambda m: m.type=='error' and errs.append(m.text))
            await page.goto('http://localhost:8765/#fast'); await page.evaluate("(v)=>{localStorage.setItem('shinuka_ikiruka_v1', JSON.stringify({settings:{sound:false,view:v},horses:[],jockeys:[],gacha:[],carrots:0,nextId:1}))}", vw); await page.reload(); await page.wait_for_timeout(300)
            await page.evaluate(f"window.__race3d({{place:'{pl}',weather:'{w}',going:'{g}',surf:'{sf}',dist:1600}})")
            await page.wait_for_timeout(t)
            n=f'gfx_{vw}_{sf}'
            await page.screenshot(path=f'{OUT}/{n}.png'); print(n, errs[:3])
            await ctx.close()
        await b.close()
asyncio.run(main())
