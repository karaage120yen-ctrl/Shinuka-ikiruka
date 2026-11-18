from PIL import Image, ImageDraw, ImageFont, ImageFilter
import math, os
out = '/home/claude/keiba/web/icons'; os.makedirs(out, exist_ok=True)
S = 1024
img = Image.new('RGB', (S, S), (11, 26, 20))
d = ImageDraw.Draw(img)
# 背景のグラデーション（夕方の競馬場）
for y in range(S):
    t = y / S
    c = (int(20 + 120 * t), int(40 + 10 * t), int(30 - 10 * t))
    d.line([(0, y), (S, y)], fill=c)
# 芝のコース
for i in range(6):
    y0 = 700 + i * 40
    d.rectangle([0, y0, S, y0 + 40], fill=(40 + (i % 2) * 14, 110 + (i % 2) * 16, 40))
# 白いラチ
d.rectangle([0, 690, S, 704], fill=(240, 240, 240))
for x in range(0, S, 60): d.rectangle([x, 690, x + 10, 760], fill=(240, 240, 240))
# 馬のシルエット（走る姿）
horse = [(250,560),(330,500),(420,480),(520,470),(600,430),(660,360),(700,330),(740,340),(760,370),(720,400),(690,440),(670,500),(640,540),
 (700,600),(780,650),(770,670),(690,640),(620,590),(560,580),(520,620),(470,690),(450,690),(480,610),(430,590),(360,600),(300,650),(230,700),(215,690),(280,610),(240,600),(170,560),(150,500),(200,520)]
d.polygon(horse, fill=(10, 8, 8))
# 騎手
d.ellipse([520, 330, 580, 390], fill=(232, 67, 58))
d.polygon([(470,470),(560,380),(600,400),(540,480)], fill=(232, 67, 58))
f = ImageFont.truetype('/usr/share/fonts/opentype/noto/NotoSansCJK-Black.ttc', 190)
f2 = ImageFont.truetype('/usr/share/fonts/opentype/noto/NotoSansCJK-Black.ttc', 100)
def text(xy, s, font, fill, stroke=(0,0,0)):
    d.text(xy, s, font=font, fill=fill, anchor='mm', stroke_width=14, stroke_fill=stroke)
text((S/2, 105), '死ぬか', f2, (255, 255, 255))
text((S/2, 275), '生きるか', f, (255, 207, 77))
img = img.convert('RGB')
for n in (512, 192, 180):
    img.resize((n, n), Image.LANCZOS).save(f'{out}/icon-{n}.png')
# maskable（余白あり）
m = Image.new('RGB', (S, S), (11, 26, 20)); m.paste(img.resize((820, 820), Image.LANCZOS), (102, 102))
m.resize((512, 512), Image.LANCZOS).save(f'{out}/icon-maskable-512.png')
print('icons ok')
