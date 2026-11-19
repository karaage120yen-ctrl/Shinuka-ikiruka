import asyncio
from playwright.async_api import async_playwright
OUT='/home/claude/keiba/test/shots'
async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch(executable_path='/usr/bin/google-chrome', args=['--use-angle=swiftshader','--enable-unsafe-swiftshader'])
        ctx = await b.new_context(viewport={'width':390,'height':844}, device_scale_factor=2)
        pg = await ctx.new_page(); errs=[]
        pg.on('pageerror', lambda e: errs.append(str(e))); pg.on('console', lambda m: m.type=='error' and errs.append(m.text))
        await pg.goto('http://localhost:8765/#fastpre'); await pg.evaluate("()=>localStorage.setItem('shinuka_ikiruka_v1', JSON.stringify({settings:{sound:false,view:'back'},horses:[],jockeys:[],gacha:[],carrots:0,nextId:1}))"); await pg.reload(); await pg.wait_for_timeout(500)
        await pg.evaluate("window.__race3d({place:'東京',weather:'晴',going:'良',surf:'芝',dist:1200})")
        await pg.wait_for_timeout(3000); await pg.screenshot(path=f'{OUT}/r7_paddock.png')
        await pg.click('#pre-go'); await pg.wait_for_timeout(1200); await pg.screenshot(path=f'{OUT}/r7_fanfare.png')
        await pg.wait_for_timeout(4000)
        # 追いすぎてみる（ずっとムチ）
        for i in range(260):
            await pg.evaluate("()=>{const e=new KeyboardEvent('keydown',{key:' '});window.dispatchEvent(e)}"); await pg.wait_for_timeout(100)
            if await pg.evaluate("()=>!!document.querySelector('#h-result:not(.hidden)')"): break
        await pg.wait_for_timeout(1500)
        await pg.screenshot(path=f'{OUT}/r7_result.png')
        print('fell', await pg.evaluate("window.__race.player.fallen"), 'pos', await pg.evaluate("window.__race.player.pos"))
        await pg.click('#res-replay'); await pg.wait_for_timeout(2500); await pg.screenshot(path=f'{OUT}/r7_replay.png')
        await pg.click('[data-a=goal]'); await pg.wait_for_timeout(2500); await pg.screenshot(path=f'{OUT}/r7_replay_goal.png')
        await pg.click('[data-a=back]'); await pg.wait_for_timeout(500)
        await pg.click('#res-next'); await pg.wait_for_timeout(500)
        print('errors', errs[:6])
        await b.close()
asyncio.run(main())
