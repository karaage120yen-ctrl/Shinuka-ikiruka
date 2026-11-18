import asyncio, sys
from playwright.async_api import async_playwright
OUT='/home/claude/keiba/test/shots'
async def one(b, live, shots):
    ctx = await b.new_context(viewport={'width':390,'height':844}, is_mobile=True, has_touch=True, device_scale_factor=2)
    page = await ctx.new_page(); errs=[]
    page.on('pageerror', lambda e: errs.append('PAGEERROR: '+str(e)))
    await page.goto('http://localhost:8765/#fast'); await page.evaluate("localStorage.clear()"); await page.reload(); await page.wait_for_timeout(400)
    await page.click('text=競馬で賭ける'); await page.wait_for_timeout(300)
    await page.fill('#rcode', 'TEST1'); await page.click('[data-a=join]'); await page.wait_for_timeout(300)
    if shots: await page.screenshot(path=f'{OUT}/50_lobby.png', full_page=True)
    await page.click('[data-a=race][data-v="6"]'); await page.wait_for_timeout(8000)
    await page.click('[data-a=pickh] >> nth=1'); await page.wait_for_timeout(100)
    await page.click('[data-a=buy]'); await page.wait_for_timeout(100)
    await page.click('[data-a=type][data-v=trifecta]'); await page.click('[data-a=mode][data-v=box]')
    for i in [0,2,4,5]: await page.click(f'[data-a=pickh] >> nth={i}')
    await page.wait_for_timeout(200)
    if shots: await page.screenshot(path=f'{OUT}/51_race.png', full_page=True)
    await page.click('[data-a=buy]'); await page.wait_for_timeout(200)
    if live:
        await page.click('[data-a=watch]'); await page.wait_for_timeout(6000)
        if shots: await page.screenshot(path=f'{OUT}/52_watch.png')
        for i in range(90):
            if await page.query_selector('[data-a=next]'): break
            await page.wait_for_timeout(1000)
    else:
        await page.click('[data-a=quickres]'); await page.wait_for_timeout(1500)
    if shots: await page.screenshot(path=f'{OUT}/53_result.png', full_page=True)
    order = await page.evaluate("(()=>{const s=JSON.parse(localStorage.getItem('shinuka_ikiruka_v1'));const c=Object.values(s.bet.cards)[0];return [c.results[6]&&c.results[6].order.slice(0,5), s.bet.coins]})()")
    await ctx.close()
    return order, errs
async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch(executable_path='/usr/bin/google-chrome', args=['--use-angle=swiftshader','--enable-unsafe-swiftshader'])
        a = await one(b, True, True)
        c = await one(b, False, False)
        print('live', a); print('quick', c)
        await b.close()
asyncio.run(main())
