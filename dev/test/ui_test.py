import asyncio, json, sys
from playwright.async_api import async_playwright
OUT='/home/claude/keiba/test/shots'
import os; os.makedirs(OUT, exist_ok=True)
async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch(executable_path='/usr/bin/google-chrome', args=['--use-angle=swiftshader','--enable-unsafe-swiftshader','--ignore-gpu-blocklist'])
        ctx = await b.new_context(viewport={'width':390,'height':844}, device_scale_factor=2, is_mobile=True, has_touch=True,
            user_agent='Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1')
        page = await ctx.new_page()
        errs=[]
        page.on('console', lambda m: errs.append(f'{m.type}: {m.text}') if m.type in ('error','warning') else None)
        page.on('pageerror', lambda e: errs.append('PAGEERROR: '+str(e)))
        await page.goto('http://localhost:8765/')
        await page.wait_for_timeout(800)
        await page.screenshot(path=f'{OUT}/01_home.png')
        await page.click('text=馬を育てる')
        await page.wait_for_timeout(300)
        await page.screenshot(path=f'{OUT}/02_new.png')
        await page.click('text=誕生させる'); await page.wait_for_timeout(400)
        await page.click('text=育成スタート'); await page.wait_for_timeout(300)
        await page.screenshot(path=f'{OUT}/03_train.png', full_page=True)
        # 何ターンか進める
        for i in range(14):
            btns = await page.query_selector_all('.tbtn')
            if not btns:
                tb = await page.query_selector('[data-act=treat]')
                if tb: await tb.click()
            else:
                await btns[i % len(btns)].click()
            await page.wait_for_timeout(120)
            ok = await page.query_selector('.modal [data-close]')
            while ok:
                await ok.click(); await page.wait_for_timeout(120)
                ok = await page.query_selector('.modal [data-close]')
            c = await page.query_selector('.modal [data-a=cont]')
            if c: await c.click(); await page.wait_for_timeout(100)
        await page.screenshot(path=f'{OUT}/04_train2.png', full_page=True)
        st = await page.evaluate("JSON.parse(localStorage.getItem('shinuka_ikiruka_v1')).activeHorse")
        print('t', st['t'], st['s'], st['fatigue'], st.get('injury'))
        print('\n'.join(errs[:20]))
        await b.close()
asyncio.run(main())
