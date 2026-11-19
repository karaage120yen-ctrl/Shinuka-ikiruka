import asyncio, json
from playwright.async_api import async_playwright
async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch(executable_path='/usr/bin/google-chrome', args=['--use-angle=swiftshader','--enable-unsafe-swiftshader'])
        pg = await (await b.new_context(viewport={'width':390,'height':844})).new_page(); errs=[]
        pg.on('pageerror', lambda e: errs.append(str(e))); pg.on('console', lambda m: m.type=='error' and errs.append(m.text))
        await pg.goto('http://localhost:8765/'); await pg.evaluate("()=>localStorage.setItem('shinuka_ikiruka_v1', JSON.stringify({settings:{sound:false,view:'back',cuts:false},horses:[],jockeys:[],gacha:['ssr-1','sr-1','r-1'],deck:{horse:['ssr-1','sr-1','r-1'],jockey:[]},carrots:0,nextId:1}))"); await pg.reload(); await pg.wait_for_timeout(500)
        await pg.click('[data-act=horse]'); await pg.wait_for_timeout(400)
        await pg.click('[data-act=dstart]'); await pg.wait_for_timeout(600)
        for i in range(3): await pg.click('[data-act=speed]'); await pg.wait_for_timeout(100)
        await pg.click('[data-act=auto]')
        for t in range(24):
            await pg.wait_for_timeout(5000)
            st = await pg.evaluate("()=>{const s=JSON.parse(localStorage.getItem('shinuka_ikiruka_v1'));const p=s.activeHorse&&s.activeHorse.p;return p?{age:p.age,m:p.month,races:p.races.length,rival:p.rival&&{n:p.rival.name,w:p.rival.w,l:p.rival.l,last:p.rival.last},sup:!!p.sup,mis:s.mis}:{done:true,h:s.horses.length}}")
            if st.get('done'): print('done', st); break
        print(json.dumps(st, ensure_ascii=False)[:600])
        print('errors', errs[:5])
        await b.close()
asyncio.run(main())
