from PIL import Image, ImageDraw, ImageFont, ImageFilter, ImageEnhance
import os
out='/home/claude/keiba/web/icons'; src='/home/claude/keiba/test/shots/ka_square_1.png'
F='/usr/share/fonts/opentype/noto/NotoSansCJK-Black.ttc'
im=Image.open(src).convert('RGB')
# タイトル背景（縦長）: 夕焼け調に色調補正
bg=Image.open('/home/claude/keiba/test/shots/ka_portrait_1.png').convert('RGB')
def grade(x, warm=1.0):
    x=ImageEnhance.Contrast(x).enhance(1.15); x=ImageEnhance.Color(x).enhance(1.1)
    ov=Image.new('RGB',x.size,(255,120,40)); x=Image.blend(x,ov,0.18*warm)
    # 上を暗く
    g=Image.new('L',(1,x.size[1]))
    for y in range(x.size[1]): g.putpixel((0,y),int(200*max(0,1-y/(x.size[1]*0.55))))
    g=g.resize(x.size); dark=Image.new('RGB',x.size,(10,6,4)); x=Image.composite(dark,x,g); return x
t=grade(bg); t=t.resize((780//2*2, 1688//2*2)); t.save('/home/claude/keiba/web/title.jpg',quality=82)
# アイコン：群れのあたりを切り出し
c=im.crop((170,520,830,1180)).resize((1024,1024),Image.LANCZOS); c=grade(c,1.3)
d=ImageDraw.Draw(c)
# 下部の帯
grad=Image.new('L',(1,1024))
for y in range(1024): grad.putpixel((0,y), int(230*max(0,(y-560)/464)))
c=Image.composite(Image.new('RGB',(1024,1024),(20,4,4)),c,grad.resize((1024,1024))); d=ImageDraw.Draw(c)
f=ImageFont.truetype(F,300); f2=ImageFont.truetype(F,96)
d.text((512,170),'死ぬか生きるか',font=f2,fill=(255,214,90),anchor='mm',stroke_width=10,stroke_fill=(0,0,0))
d.text((300,800),'死',font=f,fill=(255,255,255),anchor='mm',stroke_width=18,stroke_fill=(150,10,10))
d.text((724,800),'生',font=f,fill=(255,214,90),anchor='mm',stroke_width=18,stroke_fill=(90,40,0))
d.text((512,800),'×',font=ImageFont.truetype(F,160),fill=(255,80,60),anchor='mm',stroke_width=10,stroke_fill=(0,0,0))
c.save(f'{out}/icon-src.png')
for s in (512,192,180): c.resize((s,s),Image.LANCZOS).save(f'{out}/icon-{s}.png')
m=Image.new('RGB',(1024,1024),(20,4,4)); m.paste(c.resize((820,820),Image.LANCZOS),(102,102)); m.resize((512,512),Image.LANCZOS).save(f'{out}/icon-maskable-512.png')
os.remove(f'{out}/icon-src.png')
