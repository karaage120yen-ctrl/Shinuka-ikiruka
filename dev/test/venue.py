import asyncio, sys, json
from playwright.async_api import async_playwright
OUT='/home/claude/keiba/test/shots'
CASES=[('東京','晴','良','芝',1600,'back'),('阪神','曇','良','芝',1600,'fp')]
async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch(executable_path='/usr/bin/google-chrome', args=['--use-angle=swiftshader','--enable-unsafe-swiftshader'])
        for (pl,w,g,sf,d,view) in CASES:
            ctx = await b.new_context(viewport={'width':844,'height':390}, is_mobile=True, has_touch=True)
            page = await ctx.new_page(); errs=[]
            page.on('pageerror', lambda e: errs.append('PAGEERROR: '+str(e)))
            await page.goto('http://localhost:8765/#fast'); await page.evaluate("(v)=>{localStorage.setItem('shinuka_ikiruka_v1', JSON.stringify({settings:{sound:false,view:v},horses:[],jockeys:[],gacha:[],carrots:0,nextId:1}))}", view); await page.reload(); await page.wait_for_timeout(300)
            await page.evaluate(f"window.__race3d({{place:'{pl}',weather:'{w}',going:'{g}',surf:'{sf}',dist:{d}}})")
            await page.wait_for_timeout(9000)
            await page.screenshot(path=f'{OUT}/60_{pl}.png')
            print(pl, errs[:3])
            await ctx.close()
        await b.close()
asyncio.run(main())
