import asyncio, sys, json
from playwright.async_api import async_playwright
OUT='/home/claude/keiba/test/shots'
name=sys.argv[1]; opt=sys.argv[2]; leads=json.loads(sys.argv[3]); W=int(sys.argv[4]); H=int(sys.argv[5]); DIST=int(sys.argv[6]); dpr=float(sys.argv[7]) if len(sys.argv)>7 else 1.5
seed = sys.argv[8] if len(sys.argv)>8 else ''
async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch(executable_path='/usr/bin/google-chrome', args=['--use-angle=swiftshader','--enable-unsafe-swiftshader'])
        pg = await (await b.new_context(viewport={'width':W,'height':H}, device_scale_factor=dpr)).new_page(); errs=[]
        pg.on('pageerror', lambda e: errs.append(str(e)))
        if seed: await pg.add_init_script(f"(()=>{{let s={seed}; Math.random=()=>{{s=(s*16807)%2147483647; return s/2147483647;}}}})()")
        await pg.goto('http://localhost:8765/#nocut'); await pg.evaluate("()=>localStorage.setItem('shinuka_ikiruka_v1', JSON.stringify({settings:{sound:false,view:'back',prerace:false},horses:[],jockeys:[],gacha:[],carrots:0,nextId:1}))"); await pg.reload(); await pg.wait_for_timeout(400)
        await pg.evaluate(f"window.__race3d({{place:'東京',weather:'晴',going:'良',surf:'芝',dist:{DIST},title:'日本ダービー',g:'G1'}})")
        await pg.add_style_tag(content='#race-screen > *:not(#race-canvas){display:none!important} #minimap{display:none!important}')
        await pg.wait_for_timeout(600)
        await pg.evaluate(f"()=>{{Object.assign(window.__view,{opt}); window.__view.setView('hero')}}")
        await pg.wait_for_function("()=>window.__race.started && Math.max(...window.__race.racers.map(r=>r.p))>=1.2", timeout=120000, polling=16)
        await pg.evaluate("()=>{window.__pause=true}")
        for i,L in enumerate(leads):
            await pg.evaluate(f"""()=>{{const R=window.__race; const mx=Math.max(...R.racers.map(r=>r.u)); const sh=R.u0+{L}-mx;
              R.racers.forEach((r,i)=>{{ r.u+=sh; r.v=Math.max(r.v,9); r.stride+= (i*0.37)%1*3 + sh; }}); R.t = Math.max(R.t, 0.85); }}""")
            await pg.wait_for_timeout(900); await pg.screenshot(path=f'{OUT}/{name}{i}.png'); print(await pg.evaluate("()=>{const c=window.__view.camera; const cv=document.getElementById('race-canvas'); return [c.position.x.toFixed(2),c.fov.toFixed(1),c.aspect.toFixed(3),cv.width,cv.height,cv.clientWidth,cv.clientHeight,innerWidth,innerHeight,getComputedStyle(cv).transform].join(',')}"))
        print(name, errs[:3])
        await b.close()
asyncio.run(main())
