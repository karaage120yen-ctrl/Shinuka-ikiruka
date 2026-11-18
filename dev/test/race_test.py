import asyncio, json, sys
from playwright.async_api import async_playwright
OUT='/home/claude/keiba/test/shots'
H = {"name":"テストホース","coat":0,"sire":"x","dam":"y","t":26,"s":{"spd":40,"sta":45,"pow":40,"gut":40,"wis":40},"cap":{"spd":90,"sta":90,"pow":90,"gut":90,"wis":90},
 "apt":{"turf":"A","dirt":"C"},"style":"先行","fatigue":10,"cond":3,"injury":None,"feed":"normal","money":1000,"earnings":0,"record":[0,0,0,0],"races":[],"wins":0,"gradedWins":0,"g1Wins":0,
 "titles":[],"jockeyId":None,"log":[],"retired":False,"retireReason":"","lastRaceT":-1,"id":5}
async def main():
    view = sys.argv[1] if len(sys.argv)>1 else 'fp'
    async with async_playwright() as p:
        b = await p.chromium.launch(executable_path='/usr/bin/google-chrome', args=['--use-angle=swiftshader','--enable-unsafe-swiftshader','--ignore-gpu-blocklist'])
        ctx = await b.new_context(viewport=({'width':844,'height':390} if 'land' in sys.argv else {'width':390,'height':844}), device_scale_factor=1, is_mobile=True, has_touch=True)
        page = await ctx.new_page()
        errs=[]
        page.on('console', lambda m: errs.append(f'{m.type}: {m.text}') if m.type in ('error','warning') else None)
        page.on('pageerror', lambda e: errs.append('PAGEERROR: '+str(e)))
        await page.goto('http://localhost:8765/#fast')
        await page.evaluate("(h)=>{localStorage.setItem('shinuka_ikiruka_v1', JSON.stringify({carrots:30,activeHorse:h,activeJockey:null,horses:[],jockeys:[],gacha:[],settings:{sound:false,view:'%s'},nextId:9}))}" % view, H)
        await page.reload(); await page.wait_for_timeout(500)
        await page.click('text=馬を育てる'); await page.wait_for_timeout(300)
        await page.click('[data-act=races]'); await page.wait_for_timeout(300)
        await page.screenshot(path=f'{OUT}/10_races.png')
        await page.click('.ritem >> nth=0'); await page.wait_for_timeout(300)
        await page.click('[data-go]'); await page.wait_for_timeout(1500)
        await page.screenshot(path=f'{OUT}/11_gate_{view}.png')
        await page.wait_for_timeout(2500)
        await page.screenshot(path=f'{OUT}/12_run_{view}.png')
        fps = await page.evaluate("new Promise(r=>{let n=0;const t0=performance.now();const f=()=>{n++; if(performance.now()-t0<2000) requestAnimationFrame(f); else r(n/2)}; requestAnimationFrame(f)})")
        print('fps', fps)
        # 左に寄せる
        await page.dispatch_event('#b-left','pointerdown'); await page.wait_for_timeout(1500); await page.dispatch_event('#b-left','pointerup')
        await page.wait_for_timeout(3000)
        info = await page.evaluate("(()=>{const R=window.__race;const p=R.player;return R.racers.filter(r=>r!==p).map(r=>[+(r.p-p.p).toFixed(1),+(r.d-p.d).toFixed(1)]).sort((a,b)=>Math.abs(a[0])-Math.abs(b[0])).slice(0,4).concat([[p.p,p.d]])})()")
        print('near', info)
        await page.screenshot(path=f'{OUT}/13_mid_{view}.png')
        for i in range(60):
            rem = await page.inner_text('#h-rem')
            if 'ゴール' in rem: break
            if rem.endswith('m') and int(rem[:-1]) < 400:
                await page.dispatch_event('#b-whip','pointerdown'); await page.dispatch_event('#b-whip','pointerup')
                if i%3==0: await page.screenshot(path=f'{OUT}/14_whip_{view}.png')
            await page.wait_for_timeout(400)
        await page.wait_for_timeout(9000)
        await page.screenshot(path=f'{OUT}/15_result_{view}.png')
        nx = await page.query_selector('#res-next')
        if nx:
            await nx.click(); await page.wait_for_timeout(500)
            await page.screenshot(path=f'{OUT}/16_after_{view}.png')
            st = await page.evaluate("JSON.parse(localStorage.getItem('shinuka_ikiruka_v1')).activeHorse")
            print('after', st['t'], st['record'], st['earnings'], st['fatigue'])
        print('\n'.join(errs[:20]))
        await b.close()
asyncio.run(main())
