var jn=["spd","sta","pow","gut","wis"],da={spd:"\u30B9\u30D4\u30FC\u30C9",sta:"\u30B9\u30BF\u30DF\u30CA",pow:"\u30D1\u30EF\u30FC",gut:"\u6839\u6027",wis:"\u8CE2\u3055"},Ci=["tec","whip","bal","fit","jud"],fa={tec:"\u6280\u8853",whip:"\u30E0\u30C1",bal:"\u30D0\u30E9\u30F3\u30B9",fit:"\u6301\u4E45\u529B",jud:"\u5224\u65AD"},ru=["\u7D76\u4E0D\u8ABF","\u4E0D\u8ABF","\u666E\u901A","\u597D\u8ABF","\u7D76\u597D\u8ABF"];var au=[.978,.99,1,1.007,1.014];var Ol=["G","F","E","D","C","B","A"],ou={G:.9,F:.92,E:.94,D:.957,C:.972,B:.988,A:1},pa=["\u9003\u3052","\u5148\u884C","\u5DEE\u3057","\u8FFD\u8FBC"],un=[{name:"\u9E7F\u6BDB",body:7027230,mane:1707784,leg:1707784},{name:"\u9ED2\u9E7F\u6BDB",body:3810068,mane:1182214,leg:1182214},{name:"\u9752\u9E7F\u6BDB",body:2365199,mane:722693,leg:722693},{name:"\u6817\u6BDB",body:10112802,mane:12088380,leg:9061664},{name:"\u6803\u6817\u6BDB",body:7223836,mane:13213802,leg:7223836},{name:"\u82A6\u6BDB",body:10263190,mane:6973542,leg:5591631}],dn=[14034984,1920728,15909376,1483594,16347926,9647082,16777215,1118481,15485081,440020,8702998,8138002,6583435,16436245,1013358,12456508,4405450,10724259];function rr(n){return n>=97?"SS":n>=90?"S":n>=80?"A":n>=70?"B":n>=60?"C":n>=50?"D":n>=35?"E":n>=20?"F":"G"}function xs(n){return{SS:"#ff4fd8",S:"#ffcf33",A:"#ff7a3d",B:"#ff5a5a",C:"#3ddc84",D:"#3db8ff",E:"#9d8cff",F:"#9aa0a6",G:"#6b7076"}[n]}var Ze=(n,e)=>n+Math.random()*(e-n),kl=(n,e)=>Math.floor(Ze(n,e+1)),xt=n=>n[Math.floor(Math.random()*n.length)],be=(n,e,t)=>Math.max(e,Math.min(t,n)),lu=(n,e,t)=>n+(e-n)*t,dp=["\u30B5\u30F3\u30C0\u30FC","\u30D6\u30EC\u30A4\u30BA","\u30B7\u30EB\u30D0\u30FC","\u30B4\u30FC\u30EB\u30C9","\u30DF\u30E9\u30AF\u30EB","\u30B9\u30BF\u30FC","\u30C0\u30FC\u30AF","\u30E9\u30A4\u30B8\u30F3\u30B0","\u30AD\u30F3\u30B0","\u30AF\u30A4\u30FC\u30F3","\u30ED\u30FC\u30C9","\u30B9\u30C8\u30FC\u30E0","\u30D5\u30EC\u30A4\u30E0","\u30D6\u30EB\u30FC","\u30EC\u30C3\u30C9","\u30DB\u30EF\u30A4\u30C8","\u30B0\u30E9\u30F3","\u30A8\u30A2\u30FC","\u30E1\u30A4\u30B7\u30E7\u30A6","\u30B5\u30AF\u30E9","\u30C8\u30A6\u30AB\u30A4","\u30CA\u30EA\u30BF","\u30DE\u30C1\u30AB\u30CD","\u30C0\u30A4\u30EF","\u30BF\u30A4\u30AD","\u30CF\u30E4\u30C6","\u30A4\u30CA\u30BA\u30DE","\u30AB\u30BC\u30CE","\u30DF\u30DB\u30CE","\u30E4\u30DE\u30C8"],fp=["\u30DC\u30EB\u30C8","\u30CF\u30FC\u30C8","\u30A6\u30A4\u30F3\u30B0","\u30BD\u30FC\u30C9","\u30C9\u30EA\u30FC\u30E0","\u30ED\u30B1\u30C3\u30C8","\u30CA\u30A4\u30C8","\u30B8\u30E3\u30B9\u30C6\u30A3\u30B9","\u30AF\u30E9\u30A6\u30F3","\u30D6\u30EC\u30A4\u30D6","\u30D5\u30A1\u30A4\u30A2","\u30B7\u30E3\u30C9\u30A6","\u30EA\u30FC\u30D5","\u30B9\u30D4\u30EA\u30C3\u30C8","\u30A8\u30FC\u30B9","\u30E0\u30FC\u30F3","\u30B5\u30F3","\u30AA\u30FC\u30E9","\u30BF\u30A4\u30AC\u30FC","\u30C9\u30E9\u30B4\u30F3","\u30DB\u30FC\u30D7","\u30D3\u30AF\u30C8\u30EA\u30FC","\u30D5\u30E9\u30C3\u30B7\u30E5","\u30C6\u30A4\u30AA\u30FC","\u30AA\u30FC","\u30CF\u30E4\u30D6\u30B5","\u30A4\u30AB\u30C5\u30C1","\u30B5\u30E0\u30E9\u30A4","\u30BC\u30ED","\u30D6\u30E9\u30A4\u30A2\u30F3"];function vs(){let n=xt(dp)+xt(fp);return n.length>9&&(n=n.slice(0,9)),n}var pp=["\u6B66\u7530","\u5DDD\u6751","\u6A2A\u5C71","\u677E\u5CA1","\u5CA9\u672C","\u798F\u7530","\u6238\u5D0E","\u5742\u4E95","\u6C60\u7530","\u9BAB\u5CF6","\u83C5\u539F","\u85E4\u5CA1","\u7530\u8FBA","\u4E09\u6D66","\u5317\u5CF6","\u4F50\u85E4","\u5409\u7530","\u4E39\u7FBD"],mp=["\u7FD4","\u62D3\u4E5F","\u5927\u5730","\u98AF\u592A","\u84EE","\u60A0\u771F","\u6D77\u6597","\u9678","\u96BC\u4EBA","\u5065\u592A","\u6DBC","\u4E00\u8F1D","\u6E4A","\u6674","\u5927\u548C","\u745B\u592A"];function ar(){return xt(pp)+" "+xt(mp)}var cu=["\u30B5\u30F3\u30C7\u30FC\u30D6\u30EC\u30A4\u30D6","\u30C7\u30A3\u30FC\u30D7\u30AF\u30E9\u30A6\u30F3","\u30AD\u30F3\u30B0\u30ED\u30FC\u30C9","\u30B9\u30C6\u30A4\u30B4\u30FC\u30EB\u30C7\u30F3","\u30AA\u30EB\u30D5\u30A7\u30B9\u30BF\u30FC","\u30ED\u30FC\u30C9\u30AB\u30CA\u30ED\u30F3","\u30CF\u30FC\u30C4\u30AF\u30E9\u30A4\u30E0","\u30A8\u30D4\u30D5\u30A1\u30CD\u30AA","\u30AD\u30BF\u30B5\u30F3\u30D6\u30E9\u30C3\u30C9","\u30C9\u30A5\u30E9\u30E1\u30F3\u30C6\u30AA"],hu=["\u30DF\u30B9\u30A6\u30A4\u30F3\u30C9","\u30B9\u30A4\u30FC\u30C8\u30EA\u30EA\u30FC","\u30ED\u30FC\u30BA\u30DE\u30EA\u30FC","\u30CF\u30C3\u30D4\u30FC\u30D9\u30EB","\u30B7\u30E3\u30A4\u30CB\u30FC\u30C7\u30A4","\u30E0\u30FC\u30F3\u30E9\u30A4\u30C8","\u30B5\u30AF\u30E9\u30D2\u30E1","\u30A8\u30F3\u30B8\u30A7\u30EB\u30CF\u30FC\u30C8"],ys=[{m:1,name:"\u4EAC\u6210\u676F",g:"G3",age:"3",surf:"\u829D",dist:2e3,place:"\u4E2D\u5C71",prize:4e3},{m:1,name:"\u30A2\u30E1\u30EA\u30ABJCC",g:"G2",age:"4+",surf:"\u829D",dist:2200,place:"\u4E2D\u5C71",prize:6200},{m:1,name:"\u65E5\u7D4C\u65B0\u6625\u676F",g:"G2",age:"4+",surf:"\u829D",dist:2400,place:"\u4EAC\u90FD",prize:5700},{m:2,name:"\u5171\u540C\u901A\u4FE1\u676F",g:"G3",age:"3",surf:"\u829D",dist:1800,place:"\u6771\u4EAC",prize:4300},{m:2,name:"\u4EAC\u90FD\u8A18\u5FF5",g:"G2",age:"4+",surf:"\u829D",dist:2200,place:"\u4EAC\u90FD",prize:6200},{m:2,name:"\u30D5\u30A7\u30D6\u30E9\u30EA\u30FCS",g:"G1",age:"4+",surf:"\u30C0",dist:1600,place:"\u6771\u4EAC",prize:12e3},{m:3,name:"\u5F25\u751F\u8CDE",g:"G2",age:"3",surf:"\u829D",dist:2e3,place:"\u4E2D\u5C71",prize:5400},{m:3,name:"\u962A\u795E\u5927\u8CDE\u5178",g:"G2",age:"4+",surf:"\u829D",dist:3e3,place:"\u962A\u795E",prize:6700},{m:3,name:"\u4E2D\u5C71\u8A18\u5FF5",g:"G2",age:"4+",surf:"\u829D",dist:1800,place:"\u4E2D\u5C71",prize:6200},{m:3,name:"\u9AD8\u677E\u5BAE\u8A18\u5FF5",g:"G1",age:"4+",surf:"\u829D",dist:1200,place:"\u4E2D\u4EAC",prize:17e3},{m:4,name:"\u5927\u962A\u676F",g:"G1",age:"4+",surf:"\u829D",dist:2e3,place:"\u962A\u795E",prize:3e4},{m:4,name:"\u7690\u6708\u8CDE",g:"G1",age:"3",surf:"\u829D",dist:2e3,place:"\u4E2D\u5C71",prize:2e4},{m:4,name:"\u30CB\u30E5\u30FC\u30B8\u30FC\u30E9\u30F3\u30C9T",g:"G2",age:"3",surf:"\u829D",dist:1600,place:"\u4E2D\u5C71",prize:5400},{m:4,name:"\u9752\u8449\u8CDE",g:"G2",age:"3",surf:"\u829D",dist:2400,place:"\u6771\u4EAC",prize:5400},{m:5,name:"\u5929\u7687\u8CDE\uFF08\u6625\uFF09",g:"G1",age:"4+",surf:"\u829D",dist:3200,place:"\u4EAC\u90FD",prize:22e3},{m:5,name:"NHK\u30DE\u30A4\u30EBC",g:"G1",age:"3",surf:"\u829D",dist:1600,place:"\u6771\u4EAC",prize:13e3},{m:5,name:"\u65E5\u672C\u30C0\u30FC\u30D3\u30FC",g:"G1",age:"3",surf:"\u829D",dist:2400,place:"\u6771\u4EAC",prize:3e4},{m:5,name:"\u4EAC\u738B\u676FSC",g:"G2",age:"4+",surf:"\u829D",dist:1400,place:"\u6771\u4EAC",prize:5900},{m:6,name:"\u5B89\u7530\u8A18\u5FF5",g:"G1",age:"3+",surf:"\u829D",dist:1600,place:"\u6771\u4EAC",prize:18e3},{m:6,name:"\u5B9D\u585A\u8A18\u5FF5",g:"G1",age:"3+",surf:"\u829D",dist:2200,place:"\u962A\u795E",prize:22e3},{m:6,name:"\u30E6\u30CB\u30B3\u30FC\u30F3S",g:"G3",age:"3",surf:"\u30C0",dist:1600,place:"\u6771\u4EAC",prize:4e3},{m:7,name:"\u51FD\u9928\u8A18\u5FF5",g:"G3",age:"3+",surf:"\u829D",dist:2e3,place:"\u51FD\u9928",prize:4300},{m:7,name:"\u30E9\u30B8\u30AANIKKEI\u8CDE",g:"G3",age:"3",surf:"\u829D",dist:1800,place:"\u798F\u5CF6",prize:4e3},{m:8,name:"\u672D\u5E4C\u8A18\u5FF5",g:"G2",age:"3+",surf:"\u829D",dist:2e3,place:"\u672D\u5E4C",prize:7e3},{m:8,name:"\u65B0\u6F5F2\u6B73S",g:"G3",age:"2",surf:"\u829D",dist:1600,place:"\u65B0\u6F5F",prize:3300},{m:9,name:"\u30BB\u30F3\u30C8\u30E9\u30A4\u30C8\u8A18\u5FF5",g:"G2",age:"3",surf:"\u829D",dist:2200,place:"\u4E2D\u5C71",prize:5400},{m:9,name:"\u795E\u6238\u65B0\u805E\u676F",g:"G2",age:"3",surf:"\u829D",dist:2400,place:"\u962A\u795E",prize:5400},{m:9,name:"\u30AA\u30FC\u30EB\u30AB\u30DE\u30FC",g:"G2",age:"3+",surf:"\u829D",dist:2200,place:"\u4E2D\u5C71",prize:6700},{m:9,name:"\u30B9\u30D7\u30EA\u30F3\u30BF\u30FC\u30BAS",g:"G1",age:"3+",surf:"\u829D",dist:1200,place:"\u4E2D\u5C71",prize:17e3},{m:9,name:"\u672D\u5E4C2\u6B73S",g:"G3",age:"2",surf:"\u829D",dist:1800,place:"\u672D\u5E4C",prize:3300},{m:10,name:"\u6BCE\u65E5\u738B\u51A0",g:"G2",age:"3+",surf:"\u829D",dist:1800,place:"\u6771\u4EAC",prize:6700},{m:10,name:"\u4EAC\u90FD\u5927\u8CDE\u5178",g:"G2",age:"3+",surf:"\u829D",dist:2400,place:"\u4EAC\u90FD",prize:6700},{m:10,name:"\u30B5\u30A6\u30B8\u30A2\u30E9\u30D3\u30A2RC",g:"G3",age:"2",surf:"\u829D",dist:1600,place:"\u6771\u4EAC",prize:3300},{m:10,name:"\u83CA\u82B1\u8CDE",g:"G1",age:"3",surf:"\u829D",dist:3e3,place:"\u4EAC\u90FD",prize:2e4},{m:10,name:"\u5929\u7687\u8CDE\uFF08\u79CB\uFF09",g:"G1",age:"3+",surf:"\u829D",dist:2e3,place:"\u6771\u4EAC",prize:22e3},{m:11,name:"\u30A2\u30EB\u30BC\u30F3\u30C1\u30F3\u5171\u548C\u56FD\u676F",g:"G2",age:"3+",surf:"\u829D",dist:2500,place:"\u6771\u4EAC",prize:5700},{m:11,name:"\u6771\u4EAC\u30B9\u30DD\u30FC\u30C4\u676F2\u6B73S",g:"G2",age:"2",surf:"\u829D",dist:1800,place:"\u6771\u4EAC",prize:4e3},{m:11,name:"\u6B66\u8535\u91CES",g:"G3",age:"3+",surf:"\u30C0",dist:1600,place:"\u6771\u4EAC",prize:4e3},{m:11,name:"\u30DE\u30A4\u30EBCS",g:"G1",age:"3+",surf:"\u829D",dist:1600,place:"\u4EAC\u90FD",prize:18e3},{m:11,name:"\u30B8\u30E3\u30D1\u30F3C",g:"G1",age:"3+",surf:"\u829D",dist:2400,place:"\u6771\u4EAC",prize:5e4},{m:12,name:"\u30B9\u30C6\u30A4\u30E4\u30FC\u30BAS",g:"G2",age:"3+",surf:"\u829D",dist:3600,place:"\u4E2D\u5C71",prize:6200},{m:12,name:"\u30C1\u30E3\u30F3\u30D4\u30AA\u30F3\u30BAC",g:"G1",age:"3+",surf:"\u30C0",dist:1800,place:"\u4E2D\u4EAC",prize:12e3},{m:12,name:"\u671D\u65E5\u676FFS",g:"G1",age:"2",surf:"\u829D",dist:1600,place:"\u4EAC\u90FD",prize:7e3},{m:12,name:"\u30DB\u30FC\u30D7\u30D5\u30EBS",g:"G1",age:"2",surf:"\u829D",dist:2e3,place:"\u4E2D\u5C71",prize:7e3},{m:12,name:"\u6709\u99AC\u8A18\u5FF5",g:"G1",age:"3+",surf:"\u829D",dist:2500,place:"\u4E2D\u5C71",prize:5e4}],uu=[{name:"\u65B0\u99AC",prize:700,lv:24},{name:"\u672A\u52DD\u5229",prize:550,lv:27},{name:"1\u52DD\u30AF\u30E9\u30B9",prize:1e3,lv:37},{name:"2\u52DD\u30AF\u30E9\u30B9",prize:1500,lv:47},{name:"3\u52DD\u30AF\u30E9\u30B9",prize:1800,lv:56},{name:"\u30AA\u30FC\u30D7\u30F3",prize:2400,lv:62}];var Bl=["\u6771\u4EAC","\u4E2D\u5C71","\u4EAC\u90FD","\u962A\u795E","\u4E2D\u4EAC","\u65B0\u6F5F","\u798F\u5CF6","\u5C0F\u5009"];function du(n){if(n>=1e4){let e=Math.floor(n/1e4),t=Math.round(n%1e4);return e+"\u5104"+(t?t+"\u4E07":"")+"\u5186"}return Math.round(n)+"\u4E07\u5186"}function oi(n){let e=Math.floor(n/60),t=n-e*60;return e+":"+(t<10?"0":"")+t.toFixed(1)}var fu="shinuka_ikiruka_v1",zl=()=>({carrots:30,activeHorse:null,activeJockey:null,horses:[],jockeys:[],gacha:[],settings:{sound:!0,view:"fp"},nextId:1}),Ce=gp();function gp(){try{let n=localStorage.getItem(fu);if(n)return Object.assign(zl(),JSON.parse(n))}catch{}return zl()}function At(){try{localStorage.setItem(fu,JSON.stringify(Ce))}catch{}}function Gl(){let n=Ce.nextId++;return At(),n}function pu(){Ce=zl(),At()}function mu(n){return n==null?null:Ce.jockeys.find(e=>e.id===n)||null}var Jn={name:"\u53A9\u820E\u306E\u4E3B\u6226\u9A0E\u624B",s:{tec:50,whip:50,bal:50,fit:50,jud:50},silk:6,npc:!0,skills:[]};var $=n=>()=>n,pt=n=>n.p.name,w=(n,e={})=>({m:n,fx:e}),or=[],ve=(n,e,t,i,s,r,a={})=>or.push({k:n,st:e,id:n[0]+":"+t,t:i,x:s,ch:r,...a}),ma=["farm"],lr=["ikusei"],_t=["tc"],cr=["farm","ikusei"],gu=["farm","ikusei","tc"],ns=["school"],Pt=["pro"],Ii=["school","pro"];ve("horse",ma,"wean","\u6BCD\u99AC\u3068\u306E\u304A\u5225\u308C",n=>`${pt(n)}\u3082\u305D\u308D\u305D\u308D\u96E2\u4E73\u306E\u6642\u671F\u3002\u6BCD\u99AC\u3068\u96E2\u308C\u308B\u65E5\u304C\u3084\u3063\u3066\u304D\u305F\u3002`,[{l:"\u6642\u9593\u3092\u304B\u3051\u3066\u5C11\u3057\u305A\u3064\u96E2\u3059",pr:$(.8),ok:w("\u843D\u3061\u7740\u3044\u3066\u4E00\u982D\u3067\u904E\u3054\u305B\u308B\u3088\u3046\u306B\u306A\u3063\u305F\u3002",{cond:6,wis:1}),ng:w("\u591C\u901A\u3057\u6BCD\u99AC\u3092\u547C\u3093\u3067\u9CF4\u3044\u3066\u3044\u305F\u3002",{cond:-4})},{l:"\u601D\u3044\u5207\u3063\u3066\u4E00\u6C17\u306B\u96E2\u3059",pr:$(.5),ok:w("\u3059\u3050\u306B\u5207\u308A\u66FF\u3048\u3066\u3001\u305F\u304F\u307E\u3057\u304F\u8D70\u308A\u56DE\u3063\u3066\u3044\u308B\u3002",{gut:2}),ng:w("\u98DF\u6B32\u304C\u843D\u3061\u3066\u5143\u6C17\u304C\u306A\u3044\u3002",{cond:-8,sta:-10})}]);ve("horse",ma,"chase","\u4EF2\u9593\u3068\u8FFD\u3044\u304B\u3051\u3063\u3053",n=>`\u653E\u7267\u5730\u3067\u3001\u540C\u3044\u5E74\u306E\u4ED4\u99AC\u305F\u3061\u304C${pt(n)}\u3092\u8FFD\u3044\u304B\u3051\u56DE\u3057\u3066\u3044\u308B\u3002`,[{l:"\u601D\u3044\u304D\u308A\u8D70\u3089\u305B\u308B",pr:$(.65),ok:w("\u4E00\u756A\u901F\u304F\u8D70\u308A\u304D\u3063\u305F\uFF01 \u811A\u306E\u901F\u3055\u304C\u5149\u308B\u3002",{spd:2,pow:1}),ng:w("\u8EE2\u3093\u3067\u811A\u3092\u3059\u308A\u3080\u3044\u305F\u3002",{inj:2})},{l:"\u898B\u5B88\u308B\u3060\u3051\u306B\u3059\u308B",pr:$(1),ok:w("\u306E\u3073\u306E\u3073\u3068\u904A\u3093\u3067\u6E80\u8DB3\u305D\u3046\u3060\u3002",{cond:4}),ng:w("",{})}]);ve("horse",ma,"storm","\u5D50\u306E\u591C",()=>"\u5F37\u3044\u98A8\u3068\u96E8\u304C\u7267\u5834\u3092\u8972\u3063\u305F\u3002\u653E\u7267\u5730\u306E\u4ED4\u99AC\u305F\u3061\u304C\u4E0D\u5B89\u305D\u3046\u306B\u3057\u3066\u3044\u308B\u3002",[{l:"\u99AC\u623F\u306B\u5165\u308C\u3066\u4ED8\u304D\u6DFB\u3046",pr:$(.85),ok:w("\u4EBA\u306E\u305D\u3070\u3067\u5B89\u5FC3\u3057\u3066\u7720\u308C\u305F\u3002",{wis:1,cond:3}),ng:w("\u96F7\u306E\u97F3\u306B\u304A\u3073\u3048\u3066\u3057\u307E\u3063\u305F\u3002",{cond:-3})},{l:"\u653E\u7267\u5730\u306E\u307E\u307E\u69D8\u5B50\u3092\u898B\u308B",pr:$(.5),ok:w("\u5D50\u306E\u4E2D\u3067\u3082\u5802\u3005\u3068\u3057\u3066\u3044\u305F\u3002\u809D\u304C\u3059\u308F\u3063\u3066\u3044\u308B\u3002",{gut:2}),ng:w("\u4F53\u304C\u51B7\u3048\u3066\u4F53\u8ABF\u3092\u5D29\u3057\u305F\u3002",{sta:-12,cond:-6})}]);ve("horse",cr,"kids","\u898B\u5B66\u306B\u6765\u305F\u5B50\u3069\u3082\u305F\u3061",()=>"\u8FD1\u304F\u306E\u5C0F\u5B66\u6821\u306E\u5B50\u3069\u3082\u305F\u3061\u304C\u7267\u5834\u898B\u5B66\u306B\u3084\u3063\u3066\u304D\u305F\u3002",[{l:"\u89E6\u3089\u305B\u3066\u3042\u3052\u308B",pr:$(.75),ok:w("\u5B50\u3069\u3082\u305F\u3061\u306B\u5927\u4EBA\u6C17\u3002\u4EBA\u304C\u597D\u304D\u306A\u99AC\u306B\u306A\u3063\u305F\u3002",{wis:2,pop:3}),ng:w("\u5927\u304D\u306A\u58F0\u306B\u9A5A\u3044\u3066\u9003\u3052\u3066\u3057\u307E\u3063\u305F\u3002",{cond:-3})},{l:"\u9060\u304F\u304B\u3089\u898B\u3066\u3082\u3089\u3046",pr:$(1),ok:w("\u300C\u304B\u3063\u3053\u3044\u3044\uFF01\u300D\u3068\u58F0\u63F4\u3092\u3082\u3089\u3063\u305F\u3002",{pop:1}),ng:w("",{})}]);ve("horse",cr,"vet","\u7363\u533B\u3055\u3093\u306E\u5065\u5EB7\u8A3A\u65AD",n=>`${pt(n)}\u306E\u5B9A\u671F\u5065\u8A3A\u306E\u65E5\u3002\u7363\u533B\u3055\u3093\u304C\u3058\u3063\u304F\u308A\u4F53\u3092\u898B\u3066\u304F\u308C\u308B\u3002`,[{l:"\u5FF5\u5165\u308A\u306B\u8A3A\u3066\u3082\u3089\u3046\uFF0810\u4E07\u5186\uFF09",pr:$(1),ok:w("\u9AA8\u3082\u7B4B\u8089\u3082\u9806\u8ABF\u306B\u80B2\u3063\u3066\u3044\u308B\u3002\u5B89\u5FC3\u3057\u305F\u3002",{money:-10,sta:6,cond:3}),ng:w("",{})},{l:"\u3044\u3064\u3082\u901A\u308A\u306B\u3059\u308B",pr:$(.9),ok:w("\u554F\u984C\u306A\u3057\u3002\u3059\u304F\u3059\u304F\u80B2\u3063\u3066\u3044\u308B\u3002",{cond:2}),ng:w("\u811A\u306B\u5C0F\u3055\u306A\u708E\u75C7\u304C\u898B\u3064\u304B\u3063\u305F\u3002",{inj:2})}]);ve("horse",ma,"river","\u5C0F\u5DDD\u3092\u6E21\u308C\u308B\u304B",()=>"\u653E\u7267\u5730\u306E\u7AEF\u306B\u3042\u308B\u5C0F\u5DDD\u3002\u4EF2\u9593\u305F\u3061\u306F\u3053\u308F\u304C\u3063\u3066\u8FD1\u3065\u304B\u306A\u3044\u3002",[{l:"\u6E21\u3089\u305B\u3066\u307F\u308B",pr:$(.55),ok:w("\u30B8\u30E3\u30D6\u30B8\u30E3\u30D6\u3068\u6E21\u308A\u304D\u3063\u305F\u3002\u5EA6\u80F8\u304C\u3042\u308B\uFF01",{gut:3,pow:1}),ng:w("\u8DB3\u3092\u3059\u3079\u3089\u305B\u3066\u3073\u3057\u3087\u306C\u308C\u306B\u3002\u3059\u3063\u304B\u308A\u3057\u3087\u3052\u3066\u3044\u308B\u3002",{cond:-5})},{l:"\u3084\u3081\u3066\u304A\u304F",pr:$(1),ok:w("\u7121\u7406\u306F\u3057\u306A\u3044\u3002\u4ECA\u65E5\u306F\u306E\u3093\u3073\u308A\u3002",{cond:1}),ng:w("",{})}]);ve("horse",cr,"scout","\u6709\u540D\u306A\u8ABF\u6559\u5E2B\u304C\u898B\u306B\u6765\u305F",n=>`\u300C${pt(n)}\u3068\u3044\u3046\u99AC\u304C\u3044\u3044\u3068\u805E\u3044\u3066\u306D\u300D\u3002\u30C8\u30C3\u30D7\u53A9\u820E\u306E\u8ABF\u6559\u5E2B\u304C\u7267\u5834\u3092\u8A2A\u308C\u305F\u3002`,[{l:"\u8D70\u308B\u59FF\u3092\u898B\u305B\u308B",pr:n=>.3+n.ovr/150,ok:w("\u300C\u3053\u308C\u306F\u8D70\u308B\u300D\u3068\u8ABF\u6559\u5E2B\u304C\u3046\u306A\u3063\u305F\u3002",{eval:8,pop:3}),ng:w("\u3053\u306E\u65E5\u306B\u9650\u3063\u3066\u306E\u3093\u3073\u308A\u6B69\u304F\u3060\u3051\u3060\u3063\u305F\u3002",{eval:-3})},{l:"\u99AC\u4F53\u3060\u3051\u898B\u3066\u3082\u3089\u3046",pr:$(1),ok:w("\u300C\u3044\u3044\u4F53\u3092\u3057\u3066\u3044\u308B\u300D\u3068\u8A00\u3063\u3066\u3082\u3089\u3048\u305F\u3002",{eval:2}),ng:w("",{})}]);ve("horse",cr,"grass","\u65B0\u3057\u3044\u7267\u8349",()=>"\u6804\u990A\u305F\u3063\u3077\u308A\u306E\u65B0\u3057\u3044\u7267\u8349\u3092\u53D6\u308A\u5BC4\u305B\u3089\u308C\u308B\u3089\u3057\u3044\u3002",[{l:"\u8A66\u3057\u3066\u307F\u308B\uFF085\u4E07\u5186\uFF09",pr:$(.7),ok:w("\u3088\u304F\u98DF\u3079\u3066\u3001\u4F53\u304C\u3072\u3068\u56DE\u308A\u5927\u304D\u304F\u306A\u3063\u305F\u3002",{money:-5,sta:2,pow:1}),ng:w("\u53E3\u306B\u5408\u308F\u306A\u304B\u3063\u305F\u3088\u3046\u3060\u3002",{money:-5,cond:-4})},{l:"\u3044\u3064\u3082\u306E\u7267\u8349\u306B\u3059\u308B",pr:$(1),ok:w("\u3044\u3064\u3082\u901A\u308A\u3082\u308A\u3082\u308A\u98DF\u3079\u3066\u3044\u308B\u3002",{cond:1}),ng:w("",{})}]);ve("horse",lr,"saddle","\u521D\u3081\u3066\u306E\u978D",n=>`${pt(n)}\u306E\u80CC\u4E2D\u306B\u3001\u521D\u3081\u3066\u978D\u3092\u4E57\u305B\u308B\u65E5\u304C\u6765\u305F\u3002`,[{l:"\u3086\u3063\u304F\u308A\u6163\u3089\u3059",pr:$(.8),ok:w("\u843D\u3061\u7740\u3044\u3066\u53D7\u3051\u5165\u308C\u305F\u3002\u8CE2\u3044\u99AC\u3060\u3002",{wis:2}),ng:w("\u5ACC\u304C\u3063\u3066\u4F55\u5EA6\u3082\u8DF3\u306D\u305F\u3002",{cond:-3})},{l:"\u3059\u3050\u306B\u4EBA\u3092\u4E57\u305B\u3066\u307F\u308B",pr:$(.45),ok:w("\u4EBA\u3092\u4E57\u305B\u3066\u3059\u3050\u306B\u8D70\u308A\u51FA\u3057\u305F\u3002\u4E57\u308A\u624B\u304C\u9A5A\u3044\u3066\u3044\u308B\u3002",{wis:1,gut:2,eval:3}),ng:w("\u632F\u308A\u843D\u3068\u305D\u3046\u3068\u66B4\u308C\u3066\u3001\u811A\u3092\u75DB\u3081\u305F\u3002",{inj:3,cond:-5})}]);ve("horse",lr,"sale","\u30BB\u30EA\u306E\u8A71",()=>"1\u6B73\u99AC\u306E\u30BB\u30EA\u304C\u8FD1\u3065\u3044\u3066\u3044\u308B\u3002\u300C\u51FA\u54C1\u3059\u308C\u3070\u9AD8\u5024\u304C\u3064\u304F\u300D\u3068\u8A00\u308F\u308C\u305F\u3002",[{l:"\u51FA\u3055\u305A\u306B\u81EA\u5206\u3067\u80B2\u3066\u308B",pr:$(1),ok:w("\u3053\u306E\u99AC\u306E\u5922\u306F\u81EA\u5206\u305F\u3061\u3067\u898B\u308B\u3002\u305D\u3046\u6C7A\u3081\u305F\u3002",{eval:2,cond:2}),ng:w("",{})},{l:"\u4E0B\u898B\u4F1A\u3067\u898B\u305B\u308B\u3060\u3051\u898B\u305B\u308B",pr:$(.6),ok:w("\u300C\u3042\u306E\u99AC\u306F\u4F55\u8005\u3060\u300D\u3068\u8A55\u5224\u306B\u306A\u3063\u305F\u3002",{pop:6}),ng:w("\u4EBA\u6DF7\u307F\u306B\u75B2\u308C\u3066\u3057\u307E\u3063\u305F\u3002",{cond:-4})}]);ve("horse",lr,"runaway","\u5742\u8DEF\u3067\u66B4\u8D70",n=>`\u5742\u8DEF\u3067${pt(n)}\u304C\u6025\u306B\u884C\u304D\u305F\u304C\u3063\u305F\u3002\u4E57\u308A\u624B\u304C\u5FC5\u6B7B\u306B\u624B\u7DB1\u3092\u5F15\u3044\u3066\u3044\u308B\u3002`,[{l:"\u624B\u7DB1\u3067\u6291\u3048\u308B",pr:$(.6),ok:w("\u6211\u6162\u3092\u899A\u3048\u305F\u3002\u6298\u308A\u5408\u3044\u304C\u3064\u3044\u3066\u304D\u305F\u3002",{wis:2}),ng:w("\u6291\u3048\u304D\u308C\u305A\u306B\u811A\u3092\u3072\u306D\u3063\u305F\u3002",{inj:2})},{l:"\u884C\u304D\u305F\u3044\u3060\u3051\u884C\u304B\u305B\u308B",pr:$(.5),ok:w("\u3082\u306E\u3059\u3054\u3044\u6642\u8A08\u304C\u51FA\u305F\uFF01",{spd:2,pow:2}),ng:w("\u30D0\u30C6\u3066\u3001\u811A\u306B\u3082\u8CA0\u62C5\u304C\u304B\u304B\u3063\u305F\u3002",{sta:-15,inj:3})}]);ve("horse",lr,"rival1","\u540C\u3044\u5E74\u306E\u30E9\u30A4\u30D0\u30EB",()=>"\u540C\u3058\u80B2\u6210\u7267\u5834\u306B\u3001\u8A55\u5224\u306E\u9AD8\u30441\u6B73\u99AC\u304C\u3044\u308B\u3002",[{l:"\u4E26\u3093\u3067\u8D70\u3089\u305B\u308B",pr:$(.5),ok:w("\u4E00\u6B69\u3082\u5F15\u304B\u305A\u306B\u7AF6\u308A\u5408\u3063\u305F\uFF01",{gut:3,spd:1}),ng:w("\u7F6E\u3044\u3066\u3044\u304B\u308C\u3066\u3001\u81EA\u4FE1\u3092\u306A\u304F\u3057\u305F\u3088\u3046\u3060\u3002",{cond:-5})},{l:"\u5225\u30E1\u30CB\u30E5\u30FC\u3067\u935B\u3048\u308B",pr:$(1),ok:w("\u30DE\u30A4\u30DA\u30FC\u30B9\u3067\u3057\u3063\u304B\u308A\u4E57\u308A\u8FBC\u3093\u3060\u3002",{sta:2}),ng:w("",{})}]);ve("horse",cr,"winter","\u51AC\u306E\u5BD2\u3055",()=>"\u5317\u306E\u7267\u5834\u306F\u96EA\u306B\u8986\u308F\u308C\u305F\u3002\u99AC\u305F\u3061\u306E\u606F\u304C\u767D\u3044\u3002",[{l:"\u65B0\u3057\u3044\u99AC\u7740\u3092\u7528\u610F\u3059\u308B\uFF088\u4E07\u5186\uFF09",pr:$(1),ok:w("\u6696\u304B\u304F\u3057\u3066\u51AC\u3092\u5143\u6C17\u306B\u8D8A\u305B\u305D\u3046\u3060\u3002",{money:-8,cond:5}),ng:w("",{})},{l:"\u5BD2\u3055\u306B\u6163\u308C\u3055\u305B\u308B",pr:$(.6),ok:w("\u96EA\u306E\u4E2D\u3067\u3082\u5143\u6C17\u306B\u8D70\u308A\u56DE\u3063\u3066\u3044\u308B\u3002",{gut:2,sta:1}),ng:w("\u98A8\u90AA\u3092\u3072\u3044\u3066\u3057\u307E\u3063\u305F\u3002",{cond:-6,sta:-10})}],{mo:[1,2,12]});ve("horse",lr,"gatefear","\u30B2\u30FC\u30C8\u3092\u5ACC\u304C\u308B",n=>`${pt(n)}\u304C\u30B2\u30FC\u30C8\u306B\u5165\u308B\u306E\u3092\u5ACC\u304C\u3063\u3066\u3001\u5F8C\u305A\u3055\u308A\u3059\u308B\u3002`,[{l:"\u6BCE\u65E5\u5C11\u3057\u305A\u3064\u6163\u3089\u3059",pr:$(.75),ok:w("\u81EA\u5206\u304B\u3089\u30B2\u30FC\u30C8\u306B\u5165\u308B\u3088\u3046\u306B\u306A\u3063\u305F\u3002",{wis:2}),ng:w("\u306A\u304B\u306A\u304B\u6163\u308C\u306A\u3044\u2026\u3002",{cond:-3})},{l:"\u62BC\u3057\u3066\u3067\u3082\u5165\u308C\u308B",pr:$(.4),ok:w("\u4E00\u5EA6\u5165\u3063\u305F\u3089\u5E73\u6C17\u306B\u306A\u3063\u305F\u3002",{wis:3}),ng:w("\u30B2\u30FC\u30C8\u304C\u3059\u3063\u304B\u308A\u5ACC\u3044\u306B\u306A\u3063\u3066\u3057\u307E\u3063\u305F\u3002",{cond:-8,wis:-1})}]);ve("horse",_t,"goodtime","\u8FFD\u3044\u5207\u308A\u3067\u597D\u6642\u8A08",n=>`${pt(n)}\u304C\u8FFD\u3044\u5207\u308A\u3067\u81EA\u5DF1\u30D9\u30B9\u30C8\u3092\u51FA\u3057\u305F\u3002\u8ABF\u6559\u5E2B\u3082\u76EE\u3092\u4E38\u304F\u3057\u3066\u3044\u308B\u3002`,[{l:"\u3053\u306E\u307E\u307E\u5F37\u3081\u306B\u653B\u3081\u308B",pr:$(.55),ok:w("\u3055\u3089\u306B\u6642\u8A08\u3092\u8A70\u3081\u305F\u3002\u4ED5\u4E0A\u304C\u308A\u306F\u4E07\u5168\u3060\u3002",{spd:2,eval:4}),ng:w("\u3084\u308A\u3059\u304E\u3066\u811A\u5143\u306B\u75B2\u308C\u304C\u51FA\u305F\u3002",{inj:3,sta:-10})},{l:"\u6B21\u306F\u8EFD\u3081\u306B\u3059\u308B",pr:$(1),ok:w("\u3044\u3044\u72B6\u614B\u3092\u30AD\u30FC\u30D7\u3057\u3066\u3044\u308B\u3002",{cond:3}),ng:w("",{})}]);ve("horse",_t,"press","\u8A18\u8005\u306E\u53D6\u6750",n=>`\u7AF6\u99AC\u65B0\u805E\u306E\u8A18\u8005\u304C${pt(n)}\u306E\u53D6\u6750\u306B\u6765\u305F\u3002`,[{l:"\u5F37\u6C17\u306E\u30B3\u30E1\u30F3\u30C8\u3092\u51FA\u3059",pr:$(.7),ok:w("\u300C\u4ECA\u5E74\u306E\u4E3B\u5F79\u5019\u88DC\u300D\u3068\u5927\u304D\u304F\u53D6\u308A\u4E0A\u3052\u3089\u308C\u305F\u3002",{pop:6}),ng:w("\u671F\u5F85\u304C\u5927\u304D\u3059\u304E\u3066\u3001\u9663\u55B6\u304C\u30D4\u30EA\u30D4\u30EA\u3057\u3066\u3044\u308B\u3002",{cond:-4,eval:-2})},{l:"\u8ABF\u6559\u5E2B\u306B\u307E\u304B\u305B\u308B",pr:$(1),ok:w("\u843D\u3061\u7740\u3044\u305F\u8A18\u4E8B\u306B\u306A\u3063\u305F\u3002",{pop:2}),ng:w("",{})}]);ve("horse",_t,"appetite","\u98FC\u3044\u8449\u3092\u98DF\u3079\u306A\u3044",n=>`${pt(n)}\u304C\u6700\u8FD1\u3001\u98FC\u3044\u8449\u3092\u6B8B\u3059\u3088\u3046\u306B\u306A\u3063\u305F\u3002`,[{l:"\u597D\u7269\u306E\u306B\u3093\u3058\u3093\u3092\u6DF7\u305C\u308B",pr:$(.7),ok:w("\u30DA\u30ED\u30EA\u3068\u5B8C\u98DF\u3057\u305F\uFF01",{cond:6,sta:6}),ng:w("\u305D\u308C\u3067\u3082\u98DF\u3079\u306A\u3044\u2026\u3002",{cond:-4,sta:-8})},{l:"\u7363\u533B\u306B\u76F8\u8AC7\u3059\u308B\uFF0810\u4E07\u5186\uFF09",pr:$(.9),ok:w("\u80C3\u306E\u8ABF\u5B50\u3092\u6574\u3048\u305F\u3089\u3001\u98DF\u6B32\u304C\u623B\u3063\u305F\u3002",{money:-10,sta:10}),ng:w("\u539F\u56E0\u306F\u308F\u304B\u3089\u306A\u304B\u3063\u305F\u3002",{money:-10})}]);ve("horse",_t,"star","\u96A3\u306E\u99AC\u623F\u306E\u5927\u7269",()=>"\u3068\u306A\u308A\u306E\u99AC\u623F\u306B\u306F\u3001G1\u3092\u52DD\u3063\u305F\u5927\u7269\u304C\u3044\u308B\u3002",[{l:"\u4E00\u7DD2\u306B\u8ABF\u6559\u3055\u305B\u3066\u3082\u3089\u3046",pr:$(.5),ok:w("\u5927\u7269\u306B\u98DF\u3089\u3044\u3064\u3044\u305F\uFF01 \u4E00\u6BB5\u5F37\u304F\u306A\u3063\u305F\u3002",{gut:2,spd:2,eval:3}),ng:w("\u5727\u5012\u3055\u308C\u3066\u81EA\u4FE1\u3092\u306A\u304F\u3057\u305F\u3002",{cond:-5})},{l:"\u8DDD\u96E2\u3092\u7F6E\u304F",pr:$(1),ok:w("\u30DE\u30A4\u30DA\u30FC\u30B9\u304C\u4E00\u756A\u3002",{cond:2}),ng:w("",{})}]);ve("horse",_t,"mud","\u96E8\u306E\u4E2D\u306E\u8ABF\u6559",()=>"\u5927\u96E8\u3067\u30B3\u30FC\u30B9\u306F\u7530\u3093\u307C\u306E\u3088\u3046\u3002\u8ABF\u6559\u306F\u3069\u3046\u3059\u308B\uFF1F",[{l:"\u91CD\u3044\u99AC\u5834\u3067\u935B\u3048\u308B",pr:$(.55),ok:w("\u3069\u308D\u3093\u3053\u306B\u306A\u3063\u3066\u529B\u5F37\u3055\u304C\u5897\u3057\u305F\u3002",{pow:3,gut:1}),ng:w("\u3059\u3079\u3063\u3066\u811A\u3092\u3072\u306D\u3063\u305F\u3002",{inj:2,sta:-10})},{l:"\u5C4B\u6839\u4ED8\u304D\u306E\u5742\u8DEF\u306B\u5909\u3048\u308B",pr:$(1),ok:w("\u5B89\u5168\u306B\u3057\u3063\u304B\u308A\u4E57\u308A\u8FBC\u3093\u3060\u3002",{pow:1}),ng:w("",{})}]);ve("horse",_t,"look","\u3088\u305D\u898B\u3092\u3059\u308B\u7656",n=>`${pt(n)}\u306F\u8D70\u3063\u3066\u3044\u308B\u9014\u4E2D\u3001\u5468\u308A\u304C\u6C17\u306B\u306A\u3063\u3066\u3088\u305D\u898B\u3092\u3059\u308B\u3002`,[{l:"\u30E1\u30F3\u30B3\uFF08\u8986\u9762\uFF09\u3092\u3064\u3051\u308B",pr:$(.8),ok:w("\u524D\u3060\u3051\u3092\u898B\u3066\u8D70\u308B\u3088\u3046\u306B\u306A\u3063\u305F\u3002",{wis:2}),ng:w("\u30E1\u30F3\u30B3\u3092\u5ACC\u304C\u3063\u3066\u3044\u308B\u3002",{cond:-2})},{l:"\u6163\u308C\u308B\u307E\u3067\u8272\u3005\u306A\u3082\u306E\u3092\u898B\u305B\u308B",pr:$(.5),ok:w("\u4F55\u3092\u898B\u3066\u3082\u52D5\u3058\u306A\u304F\u306A\u3063\u305F\u3002",{wis:3}),ng:w("\u304B\u3048\u3063\u3066\u6C17\u304C\u6563\u308B\u3088\u3046\u306B\u306A\u3063\u305F\u3002",{cond:-4})}]);ve("horse",_t,"kakari","\u6298\u308A\u5408\u3044\u306E\u8AB2\u984C",n=>`${pt(n)}\u306F\u524D\u306B\u99AC\u304C\u3044\u306A\u3044\u3068\u3001\u884C\u304D\u305F\u304C\u3063\u3066\u639B\u304B\u3063\u3066\u3057\u307E\u3046\u3002`,[{l:"\u524D\u306B\u99AC\u3092\u7F6E\u3044\u3066\u6211\u6162\u3055\u305B\u308B",pr:$(.6),ok:w("\u3058\u3063\u3068\u6211\u6162\u3067\u304D\u308B\u3088\u3046\u306B\u306A\u3063\u305F\u3002",{wis:3}),ng:w("\u30B9\u30C8\u30EC\u30B9\u304C\u305F\u307E\u3063\u3066\u3057\u307E\u3063\u305F\u3002",{gut:-1,cond:-3})},{l:"\u884C\u304D\u305F\u3044\u3060\u3051\u884C\u304B\u305B\u308B",pr:$(.5),ok:w("\u81EA\u5206\u306E\u30EA\u30BA\u30E0\u3067\u8D70\u308B\u3068\u3059\u3054\u304F\u901F\u3044\uFF01",{spd:2}),ng:w("\u6700\u5F8C\u306B\u30D0\u30C6\u3066\u3057\u307E\u3046\u8D70\u308A\u306B\u306A\u3063\u305F\u3002",{sta:-6,wis:-1})}]);ve("horse",_t,"letter","\u30D5\u30A1\u30F3\u304B\u3089\u306E\u624B\u7D19",n=>`${pt(n)}\u3042\u3066\u306B\u3001\u30D5\u30A1\u30F3\u304B\u3089\u624B\u7D19\u3068\u306B\u3093\u3058\u3093\u304C\u5C4A\u3044\u305F\u3002`,[{l:"\u53A9\u820E\u306B\u98FE\u308B",pr:$(1),ok:w("\u53A9\u820E\u306E\u307F\u3093\u306A\u3082\u5143\u6C17\u3092\u3082\u3089\u3063\u305F\u3002",{pop:3,cond:3}),ng:w("",{})},{l:"\u304A\u793C\u306E\u5199\u771F\u3092\u9001\u308B",pr:$(1),ok:w("\u5199\u771F\u304CSNS\u3067\u8A71\u984C\u306B\u306A\u3063\u305F\u3002",{pop:5}),ng:w("",{})}]);ve("horse",_t,"fever","\u71B1\u767A",n=>`\u671D\u3001${pt(n)}\u306E\u4F53\u6E29\u304C\u9AD8\u3044\u3002\u71B1\u304C\u3042\u308B\u3088\u3046\u3060\u3002`,[{l:"\u5927\u4E8B\u3092\u3068\u3063\u3066\u4F11\u307E\u305B\u308B",pr:$(1),ok:w("\u3059\u3050\u306B\u71B1\u306F\u4E0B\u304C\u3063\u305F\u3002",{sta:6,cond:-2}),ng:w("",{})},{l:"\u8EFD\u3081\u306B\u52D5\u304B\u3059",pr:$(.5),ok:w("\u52D5\u3044\u305F\u3089\u5143\u6C17\u306B\u306A\u3063\u305F\u3002",{cond:2}),ng:w("\u71B1\u304C\u3076\u308A\u8FD4\u3057\u3066\u3057\u307E\u3063\u305F\u3002",{inj:2,cond:-6})}]);ve("horse",_t,"bigtalk","\u8ABF\u6559\u5E2B\u306E\u5BA3\u8A00",()=>"\u8A18\u8005\u4F1A\u898B\u3067\u3001\u76EE\u6A19\u3092\u805E\u304B\u308C\u305F\u3002",[{l:"\u300C\u76EE\u6A19\u306FG1\u300D\u3068\u8A00\u3044\u5207\u308B",pr:$(.5),ok:w("\u9663\u55B6\u306E\u672C\u6C17\u304C\u4F1D\u308F\u308A\u3001\u30D5\u30A1\u30F3\u304C\u4E00\u6C17\u306B\u5897\u3048\u305F\u3002",{pop:8,eval:3}),ng:w("\u30D7\u30EC\u30C3\u30B7\u30E3\u30FC\u3067\u9663\u55B6\u304C\u7A7A\u56DE\u308A\u6C17\u5473\u3002",{cond:-4,eval:-3})},{l:"\u300C\u4E00\u6226\u305A\u3064\u5927\u4E8B\u306B\u300D\u3068\u7B54\u3048\u308B",pr:$(1),ok:w("\u843D\u3061\u7740\u3044\u305F\u53D7\u3051\u7B54\u3048\u306B\u597D\u611F\u304C\u96C6\u307E\u3063\u305F\u3002",{eval:2}),ng:w("",{})}],{when:n=>n.p.wins>=1});ve("horse",_t,"summer","\u590F\u306E\u6691\u3055",n=>`\u3046\u3060\u308B\u3088\u3046\u306A\u6691\u3055\u3002${pt(n)}\u306F\u590F\u30D0\u30C6\u6C17\u5473\u3060\u3002`,[{l:"\u5317\u6D77\u9053\u306E\u7267\u5834\u3078\u907F\u6691\uFF0830\u4E07\u5186\uFF09",pr:$(1),ok:w("\u6DBC\u3057\u3044\u5834\u6240\u3067\u30EA\u30D5\u30EC\u30C3\u30B7\u30E5\u3067\u304D\u305F\u3002",{money:-30,cond:8,sta:12}),ng:w("",{})},{l:"\u30C8\u30EC\u30BB\u30F3\u3067\u4E57\u308A\u5207\u308B",pr:$(.5),ok:w("\u6691\u3055\u306B\u8CA0\u3051\u305A\u305F\u304F\u307E\u3057\u304F\u306A\u3063\u305F\u3002",{gut:2}),ng:w("\u590F\u8CA0\u3051\u3057\u3066\u3057\u307E\u3063\u305F\u3002",{cond:-8,sta:-12})}],{mo:[7,8]});ve("horse",_t,"hoof","\u8E44\u306E\u4E0D\u5B89",n=>`${pt(n)}\u306E\u8E44\u304C\u5C11\u3057\u6B20\u3051\u3066\u3044\u308B\u3002`,[{l:"\u7279\u6CE8\u306E\u8E44\u9244\u306B\u66FF\u3048\u308B\uFF0820\u4E07\u5186\uFF09",pr:$(.9),ok:w("\u3074\u3063\u305F\u308A\u306E\u8E44\u9244\u3067\u8D70\u308A\u304C\u8EFD\u304F\u306A\u3063\u305F\u3002",{spd:1,money:-20}),ng:w("\u306A\u3058\u3080\u307E\u3067\u6642\u9593\u304C\u304B\u304B\u308A\u305D\u3046\u3060\u3002",{money:-20,inj:1})},{l:"\u69D8\u5B50\u3092\u898B\u308B",pr:$(.6),ok:w("\u81EA\u7136\u306B\u6CBB\u3063\u305F\u3002",{cond:1}),ng:w("\u60AA\u5316\u3057\u3066\u4F11\u3080\u3053\u3068\u306B\u306A\u3063\u305F\u3002",{inj:3})}]);ve("horse",_t,"topjockey","\u6709\u540D\u9A0E\u624B\u304B\u3089\u306E\u7533\u3057\u51FA",()=>"\u300C\u6B21\u306E\u30EC\u30FC\u30B9\u3001\u4E57\u305B\u3066\u3082\u3089\u3048\u307E\u305B\u3093\u304B\u300D\u3002\u30EA\u30FC\u30C7\u30A3\u30F3\u30B0\u4E0A\u4F4D\u306E\u9A0E\u624B\u304B\u3089\u58F0\u304C\u304B\u304B\u3063\u305F\u3002",[{l:"\u4E57\u3063\u3066\u3082\u3089\u3046",pr:$(.6),ok:w("\u8FFD\u3044\u5207\u308A\u306B\u4E57\u3063\u3066\u300C\u3053\u306E\u99AC\u306F\u5927\u7269\u3060\u300D\u3068\u592A\u9F13\u5224\u3002",{eval:6,pop:5,wis:1}),ng:w("\u624B\u304C\u5408\u308F\u306A\u304B\u3063\u305F\u3088\u3046\u3060\u3002",{cond:-3})},{l:"\u4ECA\u306E\u30C1\u30FC\u30E0\u3092\u4FE1\u3058\u308B",pr:$(1),ok:w("\u9663\u55B6\u306E\u7D46\u304C\u3055\u3089\u306B\u6DF1\u307E\u3063\u305F\u3002",{cond:4,gut:1}),ng:w("",{})}],{when:n=>n.p.wins>=1});ve("horse",_t,"abroad","\u6D77\u5916\u9060\u5F81\u306E\u8A98\u3044",()=>"\u300C\u4E16\u754C\u306E\u821E\u53F0\u3067\u8D70\u3089\u305B\u3066\u307F\u306A\u3044\u304B\u300D\u3002\u6D77\u5916\u306E\u30EC\u30FC\u30B9\u304B\u3089\u62DB\u5F85\u72B6\u304C\u5C4A\u3044\u305F\u3002",[{l:"\u6311\u6226\u3059\u308B\uFF08500\u4E07\u5186\uFF09",pr:$(.45),ok:w("\u6D77\u5916\u306E\u5F37\u8C6A\u76F8\u624B\u306B\u5802\u3005\u306E\u8D70\u308A\uFF01 \u4E16\u754C\u304C\u540D\u524D\u3092\u899A\u3048\u305F\u3002",{all:2,pop:10,eval:6,money:-500}),ng:w("\u9577\u65C5\u3068\u74B0\u5883\u306E\u5909\u5316\u3067\u3001\u672C\u6765\u306E\u529B\u3092\u51FA\u305B\u306A\u304B\u3063\u305F\u3002",{money:-500,sta:-15,cond:-6})},{l:"\u56FD\u5185\u306B\u5C02\u5FF5\u3059\u308B",pr:$(1),ok:w("\u56FD\u5185\u306EG1\u3092\u76EE\u6307\u3057\u3066\u8ABF\u6574\u3092\u7D9A\u3051\u308B\u3002",{cond:2}),ng:w("",{})}],{when:n=>n.p.age>=3&&n.p.gradedWins>=1});ve("horse",_t,"weight","\u8F38\u9001\u3067\u4F53\u91CD\u304C\u6E1B\u3063\u305F",()=>"\u9577\u3044\u8F38\u9001\u3067\u3001\u99AC\u4F53\u91CD\u304C10kg\u6E1B\u3063\u3066\u3057\u307E\u3063\u305F\u3002",[{l:"\u3086\u3063\u304F\u308A\u56DE\u5FA9\u3055\u305B\u308B",pr:$(1),ok:w("\u4F53\u91CD\u304C\u623B\u3063\u3066\u304D\u305F\u3002",{sta:10,cond:2}),ng:w("",{})},{l:"\u8ABF\u6559\u3067\u623B\u3059",pr:$(.5),ok:w("\u7B4B\u8089\u3067\u4F53\u91CD\u304C\u623B\u3063\u305F\u3002",{pow:2}),ng:w("\u3055\u3089\u306B\u4F53\u91CD\u304C\u6E1B\u3063\u3066\u3057\u307E\u3063\u305F\u3002",{sta:-10})}]);ve("horse",_t,"pair","\u4F75\u305B\u99AC\u3067\u5148\u7740",n=>`\u4F75\u305B\u99AC\u3067${pt(n)}\u304C\u304D\u3063\u3061\u308A\u5148\u7740\u3057\u305F\u3002`,[{l:"\u3082\u30461\u672C\u8D70\u3089\u305B\u308B",pr:$(.5),ok:w("2\u672C\u76EE\u3082\u3057\u3063\u304B\u308A\u5148\u7740\u3002\u52DD\u8CA0\u6839\u6027\u304C\u3064\u3044\u305F\u3002",{gut:3}),ng:w("2\u672C\u76EE\u306F\u30D0\u30C6\u3066\u3057\u307E\u3063\u305F\u3002",{sta:-12,inj:2})},{l:"\u4ECA\u65E5\u306F\u3053\u3053\u307E\u3067",pr:$(1),ok:w("\u6C17\u5206\u3088\u304F\u8ABF\u6559\u3092\u7D42\u3048\u305F\u3002",{cond:3}),ng:w("",{})}]);ve("horse",gu,"groom","\u53A9\u52D9\u54E1\u3055\u3093\u3068\u306E\u7D46",n=>`\u62C5\u5F53\u306E\u53A9\u52D9\u54E1\u3055\u3093\u304C\u3001${pt(n)}\u306E\u4F53\u3092\u6BCE\u65E5\u3066\u3044\u306D\u3044\u306B\u624B\u5165\u308C\u3057\u3066\u304F\u308C\u308B\u3002`,[{l:"\u3044\u3064\u3082\u3088\u308A\u9577\u304F\u624B\u5165\u308C\u3057\u3066\u3082\u3089\u3046",pr:$(1),ok:w("\u6C17\u6301\u3061\u3088\u3055\u305D\u3046\u306B\u76EE\u3092\u7D30\u3081\u3066\u3044\u308B\u3002",{cond:6,wis:1}),ng:w("",{})},{l:"\u30DE\u30C3\u30B5\u30FC\u30B8\u5E2B\u3092\u547C\u3076\uFF085\u4E07\u5186\uFF09",pr:$(1),ok:w("\u7B4B\u8089\u306E\u3053\u308F\u3070\u308A\u304C\u3068\u308C\u305F\u3002",{sta:12,money:-5}),ng:w("",{})}]);ve("horse",_t,"bully","\u5E74\u4E0A\u306E\u99AC\u306E\u3044\u3058\u308F\u308B",()=>"\u653E\u7267\u306E\u305F\u3073\u306B\u3001\u5E74\u4E0A\u306E\u99AC\u304C\u3061\u3087\u3063\u304B\u3044\u3092\u51FA\u3057\u3066\u304F\u308B\u3002",[{l:"\u653E\u7267\u306E\u6642\u9593\u3092\u305A\u3089\u3059",pr:$(1),ok:w("\u306E\u3073\u306E\u3073\u904E\u3054\u305B\u308B\u3088\u3046\u306B\u306A\u3063\u305F\u3002",{cond:3}),ng:w("",{})},{l:"\u653E\u3063\u3066\u304A\u304F",pr:$(.5),ok:w("\u3064\u3044\u306B\u3084\u308A\u8FD4\u3057\u305F\uFF01 \u8CA0\u3051\u3093\u6C17\u304C\u80B2\u3063\u305F\u3002",{gut:3}),ng:w("\u3059\u3063\u304B\u308A\u304A\u3073\u3048\u3066\u3057\u307E\u3063\u305F\u3002",{cond:-6})}]);ve("horse",gu,"thunder","\u96F7",()=>"\u5915\u65B9\u3001\u8FD1\u304F\u306B\u96F7\u304C\u843D\u3061\u305F\u3002\u99AC\u623F\u306E\u4E2D\u304C\u3056\u308F\u3064\u3044\u3066\u3044\u308B\u3002",[{l:"\u843D\u3061\u7740\u304F\u307E\u3067\u305D\u3070\u306B\u3044\u308B",pr:$(.8),ok:w("\u4EBA\u306E\u58F0\u3067\u5B89\u5FC3\u3057\u305F\u3088\u3046\u3060\u3002",{wis:1,cond:2}),ng:w("\u4E00\u6669\u4E2D\u305D\u308F\u305D\u308F\u3057\u3066\u3044\u305F\u3002",{cond:-3})},{l:"\u99AC\u623F\u3092\u6697\u304F\u3057\u3066\u9759\u304B\u306B\u3059\u308B",pr:$(.7),ok:w("\u3059\u3050\u306B\u7720\u3063\u305F\u3002",{cond:3}),ng:w("\u6697\u3044\u306E\u3082\u6016\u304B\u3063\u305F\u3088\u3046\u3060\u3002",{cond:-4})}]);ve("horse",_t,"colic","\u759D\u75DB\uFF08\u8179\u75DB\uFF09",n=>`\u591C\u4E2D\u306B${pt(n)}\u304C\u82E6\u3057\u305D\u3046\u306B\u5BDD\u8EE2\u304C\u3063\u3066\u3044\u308B\u3002\u304A\u8179\u304C\u75DB\u3044\u3088\u3046\u3060\u3002\u547D\u306B\u304B\u304B\u308F\u308B\u3053\u3068\u3082\u3042\u308B\u3002`,[{l:"\u3059\u3050\u306B\u7363\u533B\u3092\u547C\u3076\uFF0815\u4E07\u5186\uFF09",pr:$(.92),ok:w("\u65E9\u3081\u306E\u51E6\u7F6E\u3067\u5927\u4E8B\u306B\u81F3\u3089\u306A\u304B\u3063\u305F\u3002",{sta:5,money:-15}),ng:w("\u56DE\u5FA9\u307E\u3067\u5C11\u3057\u4F11\u3080\u3053\u3068\u306B\u306A\u3063\u305F\u3002",{inj:2,money:-15})},{l:"\u6B69\u304B\u305B\u3066\u69D8\u5B50\u3092\u898B\u308B",pr:$(.6),ok:w("\u3057\u3070\u3089\u304F\u3057\u3066\u843D\u3061\u7740\u3044\u305F\u3002",{cond:-2}),ng:w("\u60AA\u5316\u3057\u3066\u5165\u9662\u3059\u308B\u3053\u3068\u306B\u306A\u3063\u305F\u3002",{inj:4,sta:-20})}]);ve("horse",_t,"photo","\u5199\u771F\u64AE\u5F71\u4F1A",()=>"\u7AF6\u99AC\u96D1\u8A8C\u306E\u5199\u771F\u64AE\u5F71\u306E\u65E5\u3002",[{l:"\u304B\u3063\u3053\u3044\u3044\u30DD\u30FC\u30BA\u3092\u6C7A\u3081\u3055\u305B\u308B",pr:$(.6),ok:w("\u8868\u7D19\u3092\u98FE\u3063\u305F\uFF01",{pop:6}),ng:w("\u3058\u3063\u3068\u3057\u3066\u3044\u3089\u308C\u306A\u304B\u3063\u305F\u3002",{cond:-3})},{l:"\u3044\u3064\u3082\u306E\u59FF\u3092\u64AE\u3063\u3066\u3082\u3089\u3046",pr:$(1),ok:w("\u81EA\u7136\u306A\u8868\u60C5\u304C\u3044\u3044\u3068\u8A55\u5224\u306B\u3002",{pop:2}),ng:w("",{})}]);ve("horse",_t,"newmenu","\u65B0\u3057\u3044\u8ABF\u6559\u30E1\u30CB\u30E5\u30FC",()=>"\u6D77\u5916\u3067\u6D41\u884C\u3057\u3066\u3044\u308B\u65B0\u3057\u3044\u8ABF\u6559\u65B9\u6CD5\u3092\u8A66\u3059\u304B\u3001\u76F8\u8AC7\u3055\u308C\u305F\u3002",[{l:"\u53D6\u308A\u5165\u308C\u308B",pr:$(.55),ok:w("\u91CD\u70B9\u7684\u306B\u935B\u3048\u3066\u3044\u308B\u529B\u304C\u3050\u3093\u3068\u4F38\u3073\u305F\u3002",{key:3}),ng:w("\u5408\u308F\u306A\u304B\u3063\u305F\u3088\u3046\u3060\u3002",{cond:-4})},{l:"\u4ECA\u306E\u30E1\u30CB\u30E5\u30FC\u3092\u7D9A\u3051\u308B",pr:$(1),ok:w("\u3044\u3064\u3082\u901A\u308A\u304C\u4E00\u756A\u3002",{cond:2}),ng:w("",{})}]);ve("horse",_t,"bonus","\u99AC\u4E3B\u3055\u3093\u304B\u3089\u306E\u3054\u307B\u3046\u3073",()=>"\u300C\u3044\u3064\u3082\u3042\u308A\u304C\u3068\u3046\u300D\u3002\u99AC\u4E3B\u3055\u3093\u304B\u3089\u5DEE\u3057\u5165\u308C\u306E\u8CC7\u91D1\u304C\u5C4A\u3044\u305F\u3002",[{l:"\u3044\u3044\u30A8\u30B5\u306B\u4F7F\u3046",pr:$(1),ok:w("\u7279\u4E0A\u306E\u98FC\u3044\u8449\u3067\u4F53\u8ABF\u304C\u4E0A\u304C\u3063\u305F\u3002",{sta:6,cond:4}),ng:w("",{})},{l:"\u8CAF\u3081\u3066\u304A\u304F",pr:$(1),ok:w("\u3044\u3056\u3068\u3044\u3046\u6642\u306E\u305F\u3081\u306B\u53D6\u3063\u3066\u304A\u304F\u3002",{money:50}),ng:w("",{})}],{when:n=>n.p.wins>=1});ve("horse",_t,"record","\u5742\u8DEF\u306E\u81EA\u5DF1\u30D9\u30B9\u30C8",n=>`${pt(n)}\u304C\u5742\u8DEF\u3067\u81EA\u5DF1\u30D9\u30B9\u30C8\u3092\u66F4\u65B0\u3057\u305F\u3002`,[{l:"\u8A18\u8005\u306B\u767A\u8868\u3059\u308B",pr:$(1),ok:w("\u300C\u6B21\u8D70\u306F\u8981\u6CE8\u610F\u300D\u3068\u8A71\u984C\u306B\u3002",{pop:5}),ng:w("",{})},{l:"\u79D8\u5BC6\u306B\u3057\u3066\u304A\u304F",pr:$(1),ok:w("\u9663\u55B6\u3060\u3051\u306E\u624B\u5FDC\u3048\u3002",{eval:3}),ng:w("",{})}]);ve("horse",_t,"retireOld","\u5148\u8F29\u99AC\u306E\u5F15\u9000\u5F0F",()=>"\u540C\u3058\u53A9\u820E\u3067\u8D70\u3063\u3066\u304D\u305F\u5148\u8F29\u99AC\u306E\u5F15\u9000\u5F0F\u304C\u884C\u308F\u308C\u305F\u3002",[{l:"\u4E00\u7DD2\u306B\u898B\u9001\u308B",pr:$(1),ok:w("\u5148\u8F29\u306E\u5206\u307E\u3067\u8D70\u308B\u3002\u305D\u3093\u306A\u9854\u3092\u3057\u3066\u3044\u305F\u3002",{gut:2,cond:3}),ng:w("",{})}],{when:n=>n.p.age>=3});ve("horse",_t,"gateok","\u30B2\u30FC\u30C8\u8A66\u9A13",n=>`\u30EC\u30FC\u30B9\u306B\u51FA\u308B\u306B\u306F\u3001\u30B2\u30FC\u30C8\u8A66\u9A13\u306B\u5408\u683C\u3057\u306A\u3051\u308C\u3070\u306A\u3089\u306A\u3044\u3002${pt(n)}\u306E\u756A\u3060\u3002`,[{l:"\u843D\u3061\u7740\u3044\u3066\u53D7\u3051\u3055\u305B\u308B",pr:n=>.55+n.p.st.wis/200,ok:w("\u4E00\u767A\u5408\u683C\uFF01 \u30B9\u30BF\u30FC\u30C8\u3082\u901F\u304B\u3063\u305F\u3002",{wis:2,eval:2}),ng:w("\u30B2\u30FC\u30C8\u3067\u7ACB\u3061\u4E0A\u304C\u3063\u3066\u4E0D\u5408\u683C\u3002\u3082\u3046\u4E00\u5EA6\u7DF4\u7FD2\u3060\u3002",{cond:-3})}],{when:n=>n.p.races.length===0&&n.p.age===2});or.push({k:"horse",st:_t,id:"sp:surgery",sp:1,t:"\u7AF6\u8D70\u751F\u547D\u306E\u5371\u6A5F",x:n=>`${pt(n)}\u306F\u300C${n.p.flags.surgery||n.p.injName}\u300D\u3068\u8A3A\u65AD\u3055\u308C\u305F\u3002\u8D70\u308A\u7D9A\u3051\u308B\u306B\u306F\u3001\u5927\u304D\u306A\u624B\u8853\u3068\u9577\u3044\u30EA\u30CF\u30D3\u30EA\u304C\u5FC5\u8981\u3060\u3002`,ch:[{l:"\u624B\u8853\u306B\u6311\u3080",d:"\u6210\u529F\u3059\u308C\u3070\u5FA9\u5E30\u3092\u3081\u3056\u305B\u308B",pr:n=>.55+(n.p.subs.vet?.15:0)+(n.p.age<=4?.05:0),ok:w("\u624B\u8853\u306F\u6210\u529F\u3057\u305F\u3002\u9577\u3044\u30EA\u30CF\u30D3\u30EA\u304C\u59CB\u307E\u308B\u3002\u5FC5\u305A\u623B\u3063\u3066\u304F\u308B\u3002",{cond:4}),ng:w("\u624B\u8853\u306F\u3046\u307E\u304F\u3044\u3063\u305F\u304C\u3001\u7AF6\u8D70\u80FD\u529B\u306F\u623B\u3089\u306A\u304B\u3063\u305F\u3002",{retire:"\u6545\u969C\u306E\u305F\u3081\u7AF6\u8D70\u80FD\u529B\u3092\u5931\u3044\u3001\u5F15\u9000"})},{l:"\u5F15\u9000\u3055\u305B\u3066\u3001\u7267\u5834\u3067\u4F59\u751F\u3092",d:"\u547D\u3092\u4E00\u756A\u306B\u8003\u3048\u308B",pr:$(1),ok:w("\u3053\u3053\u307E\u3067\u3088\u304F\u9811\u5F35\u3063\u305F\u3002\u3053\u308C\u304B\u3089\u306F\u7267\u5834\u3067\u306E\u3093\u3073\u308A\u66AE\u3089\u3059\u3002",{retire:"\u6545\u969C\u306E\u305F\u3081\u5F15\u9000\u3002\u751F\u307E\u308C\u6545\u90F7\u306E\u7267\u5834\u3067\u4F59\u751F\u3092\u904E\u3054\u3059"}),ng:w("",{})}]});or.push({k:"horse",st:_t,id:"sp:fateH",sp:1,t:"\u904B\u547D\u306E\u5206\u5C90\u70B9",x:n=>`4\u6B73\u3092\u8FCE\u3048\u305F${pt(n)}\u3002\u672C\u683C\u5316\u3059\u308B\u304B\u3001\u3053\u3053\u3067\u6B62\u307E\u308B\u304B\u3002\u9663\u55B6\u306F\u52DD\u8CA0\u306E\u8ABF\u6559\u30E1\u30CB\u30E5\u30FC\u3092\u7528\u610F\u3057\u305F\u3002`,ch:[{l:"\u52DD\u8CA0\u306E\u30E1\u30CB\u30E5\u30FC\u306B\u6311\u3080",pr:$(.5),ok:w("\u4E00\u76AE\u3080\u3051\u305F\uFF01 \u4F53\u3064\u304D\u3082\u8D70\u308A\u3082\u5225\u306E\u99AC\u306E\u3088\u3046\u3060\u3002",{fate:6}),ng:w("\u8CA0\u8377\u304C\u304B\u304B\u308A\u3059\u304E\u3066\u3001\u5C11\u3057\u529B\u3092\u843D\u3068\u3057\u3066\u3057\u307E\u3063\u305F\u3002",{fate:-2})},{l:"\u3044\u3064\u3082\u306E\u30E1\u30CB\u30E5\u30FC\u3092\u7D9A\u3051\u308B",pr:$(1),ok:w("\u3058\u3063\u304F\u308A\u3068\u529B\u3092\u3064\u3051\u3066\u3044\u304F\u3002",{cond:4}),ng:w("",{})}]});ve("jockey",Ii,"fall","\u843D\u99AC",n=>`\u9A0E\u4E57\u4E2D\u306B\u99AC\u304C\u6025\u306B\u6B62\u307E\u308A\u3001${pt(n)}\u306F\u5730\u9762\u306B\u6295\u3052\u51FA\u3055\u308C\u305F\u3002`,[{l:"\u3059\u3050\u306B\u4E57\u308A\u76F4\u3059",pr:$(.6),ok:w("\u307B\u3053\u308A\u3092\u6255\u3063\u3066\u3001\u3059\u3050\u306B\u4E57\u308A\u76F4\u3057\u305F\u3002\u6559\u5B98\u3082\u3046\u306A\u305A\u3044\u3066\u3044\u308B\u3002",{bal:2,fit:1}),ng:w("\u75DB\u307F\u3092\u3053\u3089\u3048\u304D\u308C\u305A\u3001\u533B\u52D9\u5BA4\u3078\u3002",{inj:2})},{l:"\u533B\u52D9\u5BA4\u3067\u4F11\u3080",pr:$(1),ok:w("\u7121\u7406\u3092\u3057\u306A\u3044\u306E\u3082\u5927\u4E8B\u3002",{sta:6}),ng:w("",{})}]);ve("jockey",Ii,"weight","\u6E1B\u91CF",()=>"\u9A0E\u624B\u306F\u4F53\u91CD\u3068\u306E\u6226\u3044\u3002\u3042\u30681kg\u843D\u3068\u3055\u306A\u3044\u3068\u3044\u3051\u306A\u3044\u3002",[{l:"\u98DF\u4E8B\u3092\u6E1B\u3089\u3059",pr:$(.55),ok:w("\u306A\u3093\u3068\u304B\u898F\u5B9A\u4F53\u91CD\u306B\u53CE\u307E\u3063\u305F\u3002",{bal:1,cond:-2}),ng:w("\u3075\u3089\u3075\u3089\u306B\u306A\u3063\u3066\u3057\u307E\u3063\u305F\u3002",{sta:-15,cond:-6})},{l:"\u904B\u52D5\u3067\u843D\u3068\u3059",pr:$(.7),ok:w("\u6C57\u3092\u304B\u3044\u3066\u4F53\u3082\u7DE0\u307E\u3063\u305F\u3002",{fit:2}),ng:w("\u75B2\u308C\u304C\u305F\u307E\u3063\u305F\u3002",{sta:-10})}]);ve("jockey",ns,"scold","\u6559\u5B98\u306E\u547C\u3073\u51FA\u3057",n=>`\u300C${pt(n)}\u3001\u3061\u3087\u3063\u3068\u6765\u3044\u300D\u3002\u6559\u5B98\u306B\u547C\u3073\u51FA\u3055\u308C\u305F\u3002`,[{l:"\u7D20\u76F4\u306B\u8B1D\u308B",pr:$(.8),ok:w("\u300C\u308F\u304B\u308C\u3070\u3044\u3044\u300D\u3068\u3001\u9A0E\u4E57\u306E\u30B3\u30C4\u307E\u3067\u6559\u308F\u3063\u305F\u3002",{jud:2,eval:3}),ng:w("\u9577\u3044\u8AAC\u6559\u3067\u843D\u3061\u3053\u3093\u3060\u3002",{cond:-4})},{l:"\u81EA\u5206\u306E\u8003\u3048\u3092\u8A71\u3059",pr:$(.3),ok:w("\u300C\u9762\u767D\u3044\u3084\u3064\u3060\u300D\u3068\u6C17\u306B\u5165\u3089\u308C\u305F\u3002",{eval:5}),ng:w("\u300C\u751F\u610F\u6C17\u3060\u300D\u3068\u8A55\u4FA1\u3092\u4E0B\u3052\u3089\u308C\u305F\u3002",{eval:-6,cond:-5})}]);ve("jockey",ns,"rival","\u540C\u671F\u306E\u30E9\u30A4\u30D0\u30EB",()=>"\u540C\u671F\u306B\u3001\u6A21\u64EC\u30EC\u30FC\u30B9\u3067\u8CA0\u3051\u306A\u3057\u306E\u30E9\u30A4\u30D0\u30EB\u304C\u3044\u308B\u3002",[{l:"\u52DD\u8CA0\u3092\u6311\u3080",pr:$(.5),ok:w("\u30CF\u30CA\u5DEE\u3067\u52DD\u3063\u305F\uFF01",{tec:2,whip:1}),ng:w("\u5B8C\u6557\u3057\u305F\u3002\u304F\u3084\u3057\u3044\u3002",{cond:-4})},{l:"\u4E00\u7DD2\u306B\u7DF4\u7FD2\u3059\u308B",pr:$(.85),ok:w("\u304A\u305F\u304C\u3044\u306B\u6280\u3092\u6559\u3048\u5408\u3063\u305F\u3002",{bal:2,cond:2}),ng:w("\u8A71\u304C\u304B\u307F\u5408\u308F\u306A\u304B\u3063\u305F\u3002",{})}]);ve("jockey",Ii,"early","\u65E9\u671D\u306E\u53A9\u820E\u4F5C\u696D",()=>"\u671D4\u6642\u3002\u307E\u3060\u771F\u3063\u6697\u306A\u53A9\u820E\u3067\u3001\u4F5C\u696D\u304C\u59CB\u307E\u308B\u3002",[{l:"\u8AB0\u3088\u308A\u3082\u65E9\u304F\u884C\u304F",pr:$(.7),ok:w("\u8ABF\u6559\u5E2B\u306B\u9854\u3092\u899A\u3048\u3066\u3082\u3089\u3048\u305F\u3002",{eval:4,fit:1}),ng:w("\u5BDD\u4E0D\u8DB3\u3067\u3075\u3089\u3075\u3089\u3060\u3002",{sta:-10})},{l:"\u6642\u9593\u901A\u308A\u306B\u884C\u304F",pr:$(1),ok:w("\u3044\u3064\u3082\u901A\u308A\u306E\u4E00\u65E5\u3002",{cond:1}),ng:w("",{})}]);ve("jockey",Ii,"watch","\u5148\u8F29\u306E\u9A0E\u4E57\u3092\u898B\u5B66",()=>"\u30C8\u30C3\u30D7\u9A0E\u624B\u306E\u9A0E\u4E57\u3092\u9593\u8FD1\u3067\u898B\u3089\u308C\u308B\u3053\u3068\u306B\u306A\u3063\u305F\u3002",[{l:"\u8CEA\u554F\u653B\u3081\u306B\u3059\u308B",pr:$(.6),ok:w("\u300C\u76F4\u7DDA\u3067\u306F\u99AC\u306E\u9996\u306E\u52D5\u304D\u306B\u5408\u308F\u305B\u308D\u300D\u3002\u5927\u4E8B\u306A\u3053\u3068\u3092\u6559\u308F\u3063\u305F\u3002",{jud:3}),ng:w("\u5FD9\u3057\u305D\u3046\u3067\u76F8\u624B\u306B\u3055\u308C\u306A\u304B\u3063\u305F\u3002",{cond:-2})},{l:"\u9ED9\u3063\u3066\u76EE\u306B\u713C\u304D\u3064\u3051\u308B",pr:$(.9),ok:w("\u624B\u7DB1\u3055\u3070\u304D\u304C\u76EE\u306B\u713C\u304D\u3064\u3044\u305F\u3002",{jud:1,tec:1}),ng:w("",{})}]);ve("jockey",ns,"curfew","\u9580\u9650\u7834\u308A\u306E\u8A98\u3044",()=>"\u540C\u671F\u306B\u300C\u591C\u3001\u3053\u3063\u305D\u308A\u8857\u306B\u51FA\u3088\u3046\u300D\u3068\u8A98\u308F\u308C\u305F\u3002",[{l:"\u65AD\u308B",pr:$(1),ok:w("\u660E\u65E5\u306E\u8A13\u7DF4\u306B\u5099\u3048\u3066\u65E9\u304F\u5BDD\u305F\u3002",{eval:2}),ng:w("",{})},{l:"\u3053\u3063\u305D\u308A\u884C\u304F",pr:$(.4),ok:w("\u3044\u3044\u6C17\u5206\u8EE2\u63DB\u306B\u306A\u3063\u305F\u3002",{cond:8}),ng:w("\u898B\u3064\u304B\u3063\u3066\u3053\u3063\u3074\u3069\u304F\u53F1\u3089\u308C\u305F\u3002",{eval:-8,cond:-4})}]);ve("jockey",Ii,"form","\u65B0\u3057\u3044\u9A0E\u4E57\u30D5\u30A9\u30FC\u30E0",()=>"\u6D77\u5916\u306E\u9A0E\u624B\u306E\u3088\u3046\u306A\u3001\u4F4E\u3044\u59FF\u52E2\u306E\u30D5\u30A9\u30FC\u30E0\u3092\u8A66\u3057\u3066\u307F\u305F\u3044\u3002",[{l:"\u53D6\u308A\u5165\u308C\u308B",pr:$(.55),ok:w("\u99AC\u306E\u63A8\u9032\u529B\u3092\u3046\u307E\u304F\u5F15\u304D\u51FA\u305B\u308B\u3088\u3046\u306B\u306A\u3063\u305F\u3002",{whip:2,bal:2}),ng:w("\u30D0\u30E9\u30F3\u30B9\u3092\u304F\u305A\u3057\u3084\u3059\u304F\u306A\u3063\u305F\u3002",{bal:-1})},{l:"\u4ECA\u306E\u30D5\u30A9\u30FC\u30E0\u3092\u56FA\u3081\u308B",pr:$(.9),ok:w("\u5B89\u5B9A\u611F\u304C\u5897\u3057\u305F\u3002",{bal:1}),ng:w("",{})}]);ve("jockey",ns,"gift","\u5BB6\u65CF\u304B\u3089\u306E\u5DEE\u3057\u5165\u308C",()=>"\u5B9F\u5BB6\u304B\u3089\u3001\u304A\u6BCD\u3055\u3093\u306E\u624B\u4F5C\u308A\u306E\u304A\u83D3\u5B50\u304C\u5C4A\u3044\u305F\u3002",[{l:"\u540C\u671F\u3068\u5206\u3051\u308B",pr:$(1),ok:w("\u307F\u3093\u306A\u3067\u98DF\u3079\u3066\u76DB\u308A\u4E0A\u304C\u3063\u305F\u3002",{cond:4,eval:1}),ng:w("",{})},{l:"\u4E00\u4EBA\u3067\u3053\u3063\u305D\u308A\u98DF\u3079\u308B",pr:$(1),ok:w("\u3075\u308B\u3055\u3068\u306E\u5473\u306B\u5143\u6C17\u304C\u51FA\u305F\u3002",{cond:5,sta:3}),ng:w("",{})}]);ve("jockey",ns,"tactics","\u4F5C\u6226\u4F1A\u8B70",()=>"\u6B21\u306E\u6A21\u64EC\u30EC\u30FC\u30B9\u306B\u5411\u3051\u3066\u3001\u6559\u5B98\u3068\u4F5C\u6226\u3092\u7DF4\u308B\u3002",[{l:"\u9003\u3052\u3067\u884C\u304F",pr:$(.5),ok:w("\u30DA\u30FC\u30B9\u914D\u5206\u306E\u5927\u5207\u3055\u304C\u308F\u304B\u3063\u305F\u3002",{tec:2,jud:1}),ng:w("\u6700\u5F8C\u306B\u30D0\u30C6\u3066\u3057\u307E\u3046\u30A4\u30E1\u30FC\u30B8\u3057\u304B\u308F\u304B\u306A\u3044\u3002",{cond:-3})},{l:"\u5F8C\u308D\u304B\u3089\u3058\u3063\u304F\u308A",pr:$(.5),ok:w("\u4ED5\u639B\u3051\u3069\u3053\u308D\u306E\u611F\u899A\u3092\u3064\u304B\u3093\u3060\u3002",{jud:2,whip:1}),ng:w("\u3069\u3053\u3067\u4ED5\u639B\u3051\u308C\u3070\u3044\u3044\u304B\u8FF7\u3063\u3066\u3057\u307E\u3046\u3002",{cond:-3})}]);ve("jockey",ns,"fitness","\u4F53\u529B\u6E2C\u5B9A",()=>"\u7AF6\u99AC\u5B66\u6821\u306E\u4F53\u529B\u6E2C\u5B9A\u306E\u65E5\u3002",[{l:"\u5168\u529B\u3067\u6311\u3080",pr:$(.6),ok:w("\u5B66\u5E74\u30C8\u30C3\u30D7\u306E\u8A18\u9332\uFF01",{fit:3}),ng:w("\u5F35\u308A\u5207\u308A\u3059\u304E\u3066\u8DB3\u3092\u75DB\u3081\u305F\u3002",{inj:1})},{l:"\u30DA\u30FC\u30B9\u914D\u5206\u3092\u8003\u3048\u308B",pr:$(.9),ok:w("\u5B89\u5B9A\u3057\u305F\u8A18\u9332\u3092\u51FA\u3057\u305F\u3002",{fit:1}),ng:w("",{})}]);ve("jockey",ns,"visit","\u53A9\u820E\u898B\u5B66",()=>"\u30C7\u30D3\u30E5\u30FC\u5F8C\u306B\u6240\u5C5E\u3059\u308B\u53A9\u820E\u3092\u898B\u5B66\u3067\u304D\u308B\u3053\u3068\u306B\u306A\u3063\u305F\u3002",[{l:"\u540D\u9580\u53A9\u820E\u3078\u884C\u304F",pr:$(.4),ok:w("\u300C\u5352\u696D\u3057\u305F\u3089\u3046\u3061\u306B\u6765\u3044\u300D\u3068\u8A00\u308F\u308C\u305F\uFF01",{eval:8}),ng:w("\u76F8\u624B\u306B\u3055\u308C\u306A\u304B\u3063\u305F\u3002",{cond:-4})},{l:"\u30A2\u30C3\u30C8\u30DB\u30FC\u30E0\u306A\u53A9\u820E\u3078\u884C\u304F",pr:$(.85),ok:w("\u307F\u3093\u306A\u304C\u6E29\u304B\u304F\u8FCE\u3048\u3066\u304F\u308C\u305F\u3002",{eval:3,cond:3}),ng:w("",{})}],{when:n=>n.p.age>=17});ve("jockey",Pt,"double","\u9A0E\u4E57\u4F9D\u983C\u304C\u91CD\u306A\u3063\u305F",()=>"\u540C\u3058\u30EC\u30FC\u30B9\u3067\u30012\u982D\u304B\u3089\u9A0E\u4E57\u4F9D\u983C\u304C\u6765\u3066\u3057\u307E\u3063\u305F\u3002",[{l:"\u5F37\u3044\u99AC\u3092\u9078\u3076",pr:$(.6),ok:w("\u898B\u4E8B\u306B\u52DD\u3063\u3066\u3001\u99AC\u4E3B\u306B\u3082\u559C\u3070\u308C\u305F\u3002",{pop:3,money:20}),ng:w("\u65AD\u3063\u305F\u9663\u55B6\u3068\u306E\u95A2\u4FC2\u304C\u60AA\u304F\u306A\u3063\u305F\u3002",{eval:-5})},{l:"\u5148\u306B\u983C\u307E\u308C\u305F\u65B9\u306B\u4E57\u308B",pr:$(1),ok:w("\u300C\u7FA9\u7406\u304C\u305F\u3044\u9A0E\u624B\u3060\u300D\u3068\u8A55\u5224\u306B\u306A\u3063\u305F\u3002",{eval:4}),ng:w("",{})}]);ve("jockey",Pt,"fine","\u904E\u6020\u91D1",()=>"\u30EC\u30FC\u30B9\u4E2D\u306E\u9032\u8DEF\u306E\u53D6\u308A\u65B9\u306B\u3064\u3044\u3066\u3001\u88C1\u6C7A\u59D4\u54E1\u306B\u547C\u3070\u308C\u305F\u3002",[{l:"\u6620\u50CF\u3092\u898B\u305B\u3066\u6297\u8B70\u3059\u308B",pr:$(.35),ok:w("\u4E3B\u5F35\u304C\u8A8D\u3081\u3089\u308C\u305F\u3002",{pop:3}),ng:w("\u304B\u3048\u3063\u3066\u51E6\u5206\u304C\u91CD\u304F\u306A\u3063\u305F\u3002",{eval:-6,money:-5})},{l:"\u53D7\u3051\u5165\u308C\u308B",pr:$(1),ok:w("\u53CD\u7701\u3057\u3066\u3001\u6B21\u306B\u751F\u304B\u3059\u3002",{money:-5,jud:1}),ng:w("",{})}]);ve("jockey",Pt,"crash","\u30EC\u30FC\u30B9\u4E2D\u306E\u843D\u99AC",n=>`\u76F4\u7DDA\u3067\u524D\u306E\u99AC\u304C\u8EE2\u5012\u3002${pt(n)}\u3082\u5DFB\u304D\u3053\u307E\u308C\u3066\u843D\u99AC\u3057\u305F\u3002`,[{l:"\u3059\u3050\u306B\u5FA9\u5E30\u3059\u308B",pr:$(.5),ok:w("\u7FCC\u9031\u306B\u306F\u5143\u6C17\u306B\u9A0E\u4E57\u3002\u30BF\u30D5\u306A\u9A0E\u624B\u3060\u3002",{fit:2,pop:2}),ng:w("\u75DB\u307F\u304C\u5F15\u304B\u305A\u3001\u9577\u304F\u4F11\u3080\u3053\u3068\u306B\u306A\u3063\u305F\u3002",{inj:6})},{l:"\u3057\u3063\u304B\u308A\u6CBB\u3059",pr:$(1),ok:w("\u7121\u7406\u3092\u305B\u305A\u3001\u4F53\u3092\u5143\u306B\u623B\u3059\u3002",{inj:2,sta:10}),ng:w("",{})}]);ve("jockey",Pt,"tv","\u30C6\u30EC\u30D3\u756A\u7D44\u306E\u51FA\u6F14\u4F9D\u983C",()=>"\u30D0\u30E9\u30A8\u30C6\u30A3\u756A\u7D44\u304B\u3089\u51FA\u6F14\u306E\u4F9D\u983C\u304C\u6765\u305F\u3002",[{l:"\u51FA\u308B",pr:$(.7),ok:w("\u660E\u308B\u3044\u30AD\u30E3\u30E9\u30AF\u30BF\u30FC\u304C\u5927\u4EBA\u6C17\u306B\u3002",{pop:8,money:30}),ng:w("\u8ABF\u6559\u5E2B\u306B\u300C\u6D6E\u304B\u308C\u308B\u306A\u300D\u3068\u53F1\u3089\u308C\u305F\u3002",{eval:-4})},{l:"\u65AD\u308B",pr:$(1),ok:w("\u9A0E\u4E57\u306B\u96C6\u4E2D\u3059\u308B\u3002",{eval:2}),ng:w("",{})}]);ve("jockey",Pt,"junior","\u5F8C\u8F29\u306E\u76F8\u8AC7",()=>"\u82E5\u624B\u306E\u5F8C\u8F29\u9A0E\u624B\u304C\u300C\u306A\u304B\u306A\u304B\u52DD\u3066\u307E\u305B\u3093\u300D\u3068\u76F8\u8AC7\u306B\u6765\u305F\u3002",[{l:"\u89AA\u8EAB\u306B\u8A71\u3092\u805E\u304F",pr:$(1),ok:w("\u5F8C\u8F29\u306E\u76EE\u304C\u660E\u308B\u304F\u306A\u3063\u305F\u3002",{jud:1,pop:2}),ng:w("",{})},{l:"\u81EA\u5206\u306E\u7DF4\u7FD2\u3092\u512A\u5148\u3059\u308B",pr:$(1),ok:w("\u81EA\u5206\u306E\u8155\u3092\u78E8\u304F\u3002",{tec:1}),ng:w("",{})}],{when:n=>n.p.age>=24});ve("jockey",Pt,"sauna","\u6E1B\u91CF\u306B\u5931\u6557",()=>"\u660E\u65E5\u306E\u30EC\u30FC\u30B9\u306E\u898F\u5B9A\u4F53\u91CD\u307E\u3067\u3001\u307E\u30601.5kg\u3042\u308B\u3002",[{l:"\u30B5\u30A6\u30CA\u3067\u7D5E\u308B",pr:$(.5),ok:w("\u304E\u308A\u304E\u308A\u9593\u306B\u5408\u3063\u305F\u3002",{cond:-2}),ng:w("\u8131\u6C34\u3067\u3075\u3089\u3075\u3089\u3002\u9A0E\u4E57\u306B\u5F71\u97FF\u304C\u51FA\u305F\u3002",{sta:-15,cond:-6})},{l:"\u4E57\u308A\u66FF\u308F\u308A\u3092\u53D7\u3051\u5165\u308C\u308B",pr:$(1),ok:w("\u4F53\u3092\u5927\u4E8B\u306B\u3057\u305F\u3002",{eval:-3,sta:5}),ng:w("",{})}]);ve("jockey",Pt,"invite","\u6D77\u5916\u306E\u9A0E\u624B\u62DB\u5F85\u30EC\u30FC\u30B9",()=>"\u4E16\u754C\u306E\u540D\u624B\u304C\u96C6\u307E\u308B\u9A0E\u624B\u62DB\u5F85\u30EC\u30FC\u30B9\u306B\u62DB\u304B\u308C\u305F\u3002",[{l:"\u53C2\u52A0\u3059\u308B",pr:$(.5),ok:w("\u4E16\u754C\u306E\u540D\u624B\u3068\u4E92\u89D2\u306B\u6E21\u308A\u5408\u3063\u305F\uFF01",{tec:2,pop:6}),ng:w("\u4E16\u754C\u306E\u58C1\u306F\u9AD8\u304B\u3063\u305F\u3002",{cond:-3})},{l:"\u56FD\u5185\u306B\u5C02\u5FF5\u3059\u308B",pr:$(1),ok:w("\u65E5\u672C\u306E\u30EC\u30FC\u30B9\u3067\u7D50\u679C\u3092\u51FA\u3059\u3002",{eval:2}),ng:w("",{})}],{when:n=>n.p.wins>=30});ve("jockey",Pt,"clash","\u8ABF\u6559\u5E2B\u3068\u306E\u5BFE\u7ACB",()=>"\u4E57\u308A\u65B9\u306B\u3064\u3044\u3066\u3001\u8ABF\u6559\u5E2B\u3068\u610F\u898B\u304C\u3076\u3064\u304B\u3063\u305F\u3002",[{l:"\u3068\u3053\u3068\u3093\u8A71\u3057\u5408\u3046",pr:$(.65),ok:w("\u304A\u305F\u304C\u3044\u306E\u8003\u3048\u304C\u308F\u304B\u308A\u3001\u4FE1\u983C\u304C\u6DF1\u307E\u3063\u305F\u3002",{eval:5}),ng:w("\u95A2\u4FC2\u304C\u304E\u304F\u3057\u3083\u304F\u3057\u3066\u3057\u307E\u3063\u305F\u3002",{eval:-5})},{l:"\u9ED9\u3063\u3066\u6307\u793A\u306B\u5F93\u3046",pr:$(1),ok:w("\u3072\u3068\u307E\u305A\u8A00\u308F\u308C\u305F\u901A\u308A\u306B\u4E57\u308B\u3002",{eval:1,cond:-2}),ng:w("",{})}]);ve("jockey",Pt,"fans","\u30D5\u30A1\u30F3\u30B5\u30FC\u30D3\u30B9",()=>"\u30EC\u30FC\u30B9\u5F8C\u3001\u305F\u304F\u3055\u3093\u306E\u30D5\u30A1\u30F3\u304C\u30B5\u30A4\u30F3\u3092\u6C42\u3081\u3066\u5F85\u3063\u3066\u3044\u308B\u3002",[{l:"\u5168\u54E1\u306B\u30B5\u30A4\u30F3\u3059\u308B",pr:$(1),ok:w("\u30D5\u30A1\u30F3\u306E\u7B11\u9854\u306B\u75B2\u308C\u3082\u5439\u304D\u98DB\u3093\u3060\u3002",{pop:4,sta:-3}),ng:w("",{})},{l:"\u65E9\u3081\u306B\u5207\u308A\u4E0A\u3052\u308B",pr:$(1),ok:w("\u4F53\u3092\u4F11\u3081\u3066\u660E\u65E5\u306B\u5099\u3048\u308B\u3002",{sta:3}),ng:w("",{})}]);ve("jockey",Ii,"love","\u65B0\u3057\u3044\u51FA\u4F1A\u3044",()=>"\u53CB\u4EBA\u306E\u7D39\u4ECB\u3067\u3001\u6C17\u306B\u306A\u308B\u4EBA\u3068\u51FA\u4F1A\u3063\u305F\u3002",[{l:"\u98DF\u4E8B\u306B\u8A98\u3046",pr:$(.5),ok:w("\u8A71\u304C\u306F\u305A\u3093\u3067\u3001\u4ED8\u304D\u5408\u3046\u3053\u3068\u306B\u306A\u3063\u305F\uFF01",{partner:!0}),ng:w("\u3084\u3093\u308F\u308A\u65AD\u3089\u308C\u3066\u3057\u307E\u3063\u305F\u3002",{cond:-3})},{l:"\u4ECA\u306F\u9A0E\u4E57\u306B\u96C6\u4E2D\u3059\u308B",pr:$(1),ok:w("\u604B\u306F\u5F8C\u56DE\u3057\u3002",{tec:1}),ng:w("",{})}],{when:n=>n.p.age>=18&&!n.p.fam.partner,w:.8});ve("jockey",Ii,"date","\u604B\u4EBA\u3068\u306E\u6642\u9593",n=>`${n.p.fam.partner?n.p.fam.partner.n:"\u604B\u4EBA"}\u3068\u3001\u306A\u304B\u306A\u304B\u4F1A\u3048\u3066\u3044\u306A\u3044\u3002`,[{l:"\u65C5\u884C\u306B\u884C\u304F\uFF0830\u4E07\u5186\uFF09",pr:$(.8),ok:w("\u6700\u9AD8\u306E\u601D\u3044\u51FA\u304C\u3067\u304D\u305F\u3002",{love:15,money:-30,cond:4}),ng:w("\u96E8\u7D9A\u304D\u3067\u3051\u3093\u304B\u3057\u3066\u3057\u307E\u3063\u305F\u3002",{love:-5,money:-30})},{l:"\u77ED\u3044\u6642\u9593\u3067\u3082\u4F1A\u3046",pr:$(.7),ok:w("\u4F1A\u3048\u308B\u3060\u3051\u3067\u3046\u308C\u3057\u3044\u3002",{love:8}),ng:w("\u9045\u523B\u3057\u3066\u6012\u3089\u305B\u3066\u3057\u307E\u3063\u305F\u3002",{love:-6})}],{when:n=>n.p.fam.partner&&!n.p.fam.partner.married});ve("jockey",Ii,"propose","\u30D7\u30ED\u30DD\u30FC\u30BA",n=>`${n.p.fam.partner?n.p.fam.partner.n:"\u604B\u4EBA"}\u3068\u306E\u672A\u6765\u3092\u8003\u3048\u308B\u3088\u3046\u306B\u306A\u3063\u305F\u3002`,[{l:"\u30D7\u30ED\u30DD\u30FC\u30BA\u3059\u308B",pr:n=>.5+(n.p.fam.partner&&n.p.fam.partner.love||0)/300,ok:w("\u300C\u306F\u3044\u300D\u3002\u4EBA\u751F\u3067\u4E00\u756A\u3046\u308C\u3057\u3044\u65E5\u306B\u306A\u3063\u305F\u3002",{marry:1}),ng:w("\u300C\u307E\u3060\u8003\u3048\u3089\u308C\u306A\u3044\u300D\u3068\u8A00\u308F\u308C\u3066\u3057\u307E\u3063\u305F\u3002",{love:-20})},{l:"\u307E\u3060\u65E9\u3044",pr:$(1),ok:w("\u3082\u3046\u5C11\u3057\u4E8C\u4EBA\u306E\u6642\u9593\u3092\u5927\u5207\u306B\u3059\u308B\u3002",{love:-3}),ng:w("",{})}],{when:n=>n.p.fam.partner&&!n.p.fam.partner.married&&n.p.fam.partner.love>=70,w:2});ve("jockey",Pt,"baby","\u5BB6\u65CF\u304C\u5897\u3048\u308B",()=>"\u5BB6\u65CF\u304B\u3089\u3001\u3046\u308C\u3057\u3044\u77E5\u3089\u305B\u304C\u5C4A\u3044\u305F\u3002",[{l:"\u5927\u559C\u3073\u3059\u308B",pr:$(1),ok:w("\u65B0\u3057\u3044\u5BB6\u65CF\u304C\u8A95\u751F\u3057\u305F\uFF01",{kid:1,cond:8}),ng:w("",{})}],{when:n=>n.p.fam.partner&&n.p.fam.partner.married&&n.p.fam.kids.length<3,w:.6});ve("jockey",Pt,"rivalpro","\u30E9\u30A4\u30D0\u30EB\u9A0E\u624B",()=>"\u30EA\u30FC\u30C7\u30A3\u30F3\u30B0\u4E89\u3044\u3092\u3057\u3066\u3044\u308B\u30E9\u30A4\u30D0\u30EB\u9A0E\u624B\u3068\u3001\u30B4\u30FC\u30EB\u524D\u3067\u4E26\u3093\u3060\u3002",[{l:"\u771F\u3063\u5411\u52DD\u8CA0",pr:$(.5),ok:w("\u30CF\u30CA\u5DEE\u3067\u306D\u3058\u4F0F\u305B\u305F\uFF01",{tec:2,pop:4}),ng:w("\u6700\u5F8C\u306B\u5DEE\u3057\u8FD4\u3055\u308C\u305F\u3002",{cond:-4})},{l:"\u51B7\u9759\u306B\u9032\u8DEF\u3092\u63A2\u3059",pr:$(.8),ok:w("\u5185\u306E\u3059\u304D\u9593\u3092\u3064\u3044\u3066\u629C\u3051\u51FA\u3057\u305F\u3002",{jud:2}),ng:w("\u9032\u8DEF\u304C\u306A\u304F\u3001\u8FFD\u3048\u306A\u304B\u3063\u305F\u3002",{cond:-2})}]);ve("jockey",Pt,"suspend","\u9A0E\u4E57\u505C\u6B62\u306E\u5371\u6A5F",()=>"\u30EC\u30FC\u30B9\u3067\u659C\u3081\u306B\u8D70\u3063\u3066\u3001\u4ED6\u306E\u99AC\u306E\u9032\u8DEF\u3092\u3075\u3055\u3044\u3067\u3057\u307E\u3063\u305F\u3002",[{l:"\u7D20\u76F4\u306B\u53CD\u7701\u3059\u308B",pr:$(1),ok:w("\u51E6\u5206\u306F\u8EFD\u304F\u6E08\u3093\u3060\u3002\u6B21\u304B\u3089\u6C17\u3092\u3064\u3051\u308B\u3002",{jud:2,eval:-2}),ng:w("",{})},{l:"\u300C\u308F\u3056\u3068\u3058\u3083\u306A\u3044\u300D\u3068\u6297\u8B70\u3059\u308B",pr:$(.3),ok:w("\u4E3B\u5F35\u304C\u8A8D\u3081\u3089\u308C\u305F\u3002",{pop:2}),ng:w("2\u9031\u9593\u306E\u9A0E\u4E57\u505C\u6B62\u306B\u306A\u3063\u305F\u3002",{eval:-8})}]);ve("jockey",Pt,"owner","\u5927\u7269\u99AC\u4E3B\u304B\u3089\u306E\u4F9D\u983C",()=>"G1\u99AC\u3092\u4F55\u982D\u3082\u6301\u3064\u5927\u7269\u99AC\u4E3B\u304B\u3089\u300C\u3046\u3061\u306E\u99AC\u306B\u4E57\u3063\u3066\u307B\u3057\u3044\u300D\u3068\u58F0\u304C\u304B\u304B\u3063\u305F\u3002",[{l:"\u5F15\u304D\u53D7\u3051\u308B",pr:$(.55),ok:w("\u3044\u304D\u306A\u308A\u7D50\u679C\u3092\u51FA\u3057\u3066\u3001\u5927\u7269\u99AC\u4E3B\u306E\u4FE1\u983C\u3092\u5F97\u305F\u3002",{eval:6,money:50}),ng:w("\u671F\u5F85\u306B\u5FDC\u3048\u3089\u308C\u305A\u3001\u4E57\u308A\u66FF\u308F\u308A\u306B\u3002",{eval:-6})},{l:"\u4ECA\u306E\u53A9\u820E\u3092\u512A\u5148\u3059\u308B",pr:$(1),ok:w("\u6240\u5C5E\u53A9\u820E\u306E\u4FE1\u983C\u304C\u6DF1\u307E\u3063\u305F\u3002",{eval:1}),ng:w("",{})}],{when:n=>n.p.eval>=55});ve("jockey",Pt,"oldinjury","\u53E4\u50B7\u306E\u75DB\u307F",()=>"\u6614\u306E\u843D\u99AC\u3067\u30B1\u30AC\u3092\u3057\u305F\u80A9\u304C\u3001\u307E\u305F\u75DB\u307F\u59CB\u3081\u305F\u3002",[{l:"\u6CBB\u7642\u306B\u5C02\u5FF5\u3059\u308B",pr:$(1),ok:w("\u3057\u3063\u304B\u308A\u4F11\u3093\u3067\u56DE\u5FA9\u3057\u305F\u3002",{inj:2,sta:10}),ng:w("",{})},{l:"\u3060\u307E\u3057\u3060\u307E\u3057\u4E57\u308B",pr:$(.5),ok:w("\u75DB\u307F\u306B\u8010\u3048\u3066\u7D50\u679C\u3092\u51FA\u3057\u305F\u3002",{money:20}),ng:w("\u60AA\u5316\u3057\u3066\u9577\u304F\u4F11\u3080\u3053\u3068\u306B\u3002",{inj:6})}],{when:n=>n.p.age>=28});ve("jockey",Pt,"age","\u5E74\u9F62\u3068\u306E\u6226\u3044",()=>"\u82E5\u3044\u3053\u308D\u306E\u3088\u3046\u306B\u4F53\u304C\u52D5\u304B\u306A\u3044\u3002\u3067\u3082\u7D4C\u9A13\u306F\u5897\u3048\u305F\u3002",[{l:"\u30C8\u30EC\u30FC\u30CB\u30F3\u30B0\u3092\u5897\u3084\u3059",pr:$(.5),ok:w("\u4F53\u304C\u3088\u307F\u304C\u3048\u3063\u3066\u304D\u305F\u3002",{fit:2}),ng:w("\u75B2\u308C\u304C\u3068\u308C\u306A\u3044\u3002",{sta:-10})},{l:"\u7D4C\u9A13\u3067\u52DD\u8CA0\u3059\u308B",pr:$(1),ok:w("\u30DA\u30FC\u30B9\u3092\u8AAD\u3080\u529B\u304C\u3055\u3089\u306B\u51B4\u3048\u308B\u3002",{jud:2}),ng:w("",{})}],{when:n=>n.p.age>=34});ve("jockey",Pt,"local","\u5730\u65B9\u7AF6\u99AC\u3078\u306E\u9060\u5F81",()=>"\u5730\u65B9\u7AF6\u99AC\u306E\u4EA4\u6D41\u91CD\u8CDE\u306B\u547C\u3070\u308C\u305F\u3002",[{l:"\u884C\u304F",pr:$(.65),ok:w("\u5C0F\u56DE\u308A\u306E\u30B3\u30FC\u30B9\u3067\u52DD\u3063\u305F\uFF01",{tec:2,money:20}),ng:w("\u79FB\u52D5\u306E\u75B2\u308C\u304C\u305F\u307E\u3063\u305F\u3002",{sta:-8})},{l:"\u884C\u304B\u306A\u3044",pr:$(1),ok:w("\u4F53\u3092\u4F11\u3081\u308B\u3002",{sta:5}),ng:w("",{})}]);ve("jockey",Pt,"mentor","\u5E2B\u5320\u306E\u8A00\u8449",()=>"\u6240\u5C5E\u53A9\u820E\u306E\u8ABF\u6559\u5E2B\u304C\u3001\u9759\u304B\u306B\u8A71\u3057\u304B\u3051\u3066\u304D\u305F\u3002\u300C\u99AC\u306E\u6C17\u6301\u3061\u306B\u306A\u3063\u3066\u4E57\u308C\u300D\u3002",[{l:"\u5FC3\u306B\u523B\u3080",pr:$(1),ok:w("\u305D\u306E\u8A00\u8449\u304C\u3001\u9A0E\u4E57\u306E\u3059\u3079\u3066\u306E\u571F\u53F0\u306B\u306A\u3063\u305F\u3002",{jud:3}),ng:w("",{})}],{when:n=>n.p.age<=25});ve("jockey",Pt,"magazine","\u96D1\u8A8C\u306E\u8868\u7D19",()=>"\u7AF6\u99AC\u96D1\u8A8C\u304B\u3089\u3001\u8868\u7D19\u306E\u64AE\u5F71\u306E\u4F9D\u983C\u304C\u6765\u305F\u3002",[{l:"\u53D7\u3051\u308B",pr:$(1),ok:w("\u66F8\u5E97\u306B\u81EA\u5206\u306E\u9854\u304C\u4E26\u3093\u3060\u3002",{pop:6,money:20}),ng:w("",{})},{l:"\u65AD\u308B",pr:$(1),ok:w("\u9A0E\u4E57\u3067\u8A9E\u308B\u3002",{eval:1}),ng:w("",{})}],{when:n=>n.p.pop>=30});ve("jockey",Pt,"silks","\u52DD\u8CA0\u670D\u306E\u30C7\u30B6\u30A4\u30F3",()=>"\u81EA\u5206\u306E\u52DD\u8CA0\u670D\u306E\u30C7\u30B6\u30A4\u30F3\u3092\u6C7A\u3081\u3089\u308C\u308B\u3053\u3068\u306B\u306A\u3063\u305F\u3002",[{l:"\u6D3E\u624B\u306A\u30C7\u30B6\u30A4\u30F3\u306B\u3059\u308B",pr:$(.6),ok:w("\u9060\u304F\u304B\u3089\u3067\u3082\u76EE\u7ACB\u3064\u3068\u8A71\u984C\u306B\u3002",{pop:5}),ng:w("\u300C\u4F3C\u5408\u308F\u306A\u3044\u300D\u3068\u7B11\u308F\u308C\u305F\u3002",{pop:-2})},{l:"\u4F1D\u7D71\u7684\u306A\u30C7\u30B6\u30A4\u30F3\u306B\u3059\u308B",pr:$(1),ok:w("\u843D\u3061\u7740\u3044\u305F\u52DD\u8CA0\u670D\u304C\u4F3C\u5408\u3063\u3066\u3044\u308B\u3002",{eval:2}),ng:w("",{})}]);ve("jockey",Pt,"dawn","\u671D\u306E\u8ABF\u6559\u3067\u597D\u611F\u89E6",()=>"\u671D\u306E\u8ABF\u6559\u3067\u4E57\u3063\u305F2\u6B73\u99AC\u304C\u3001\u3059\u3070\u3089\u3057\u3044\u8D70\u308A\u3092\u898B\u305B\u305F\u3002",[{l:"\u300C\u30C7\u30D3\u30E5\u30FC\u6226\u3082\u4E57\u3089\u305B\u3066\u304F\u3060\u3055\u3044\u300D\u3068\u983C\u3080",pr:$(.6),ok:w("\u300C\u4EFB\u305B\u305F\u300D\u3068\u8A00\u3063\u3066\u3082\u3089\u3048\u305F\u3002",{eval:4,tec:1}),ng:w("\u5148\u7D04\u304C\u3042\u3063\u305F\u3002",{cond:-2})},{l:"\u8ABF\u6559\u5E2B\u306B\u611F\u60F3\u3060\u3051\u4F1D\u3048\u308B",pr:$(1),ok:w("\u7684\u78BA\u306A\u611F\u60F3\u306B\u3001\u8ABF\u6559\u5E2B\u3082\u611F\u5FC3\u3057\u3066\u3044\u305F\u3002",{jud:1,eval:1}),ng:w("",{})}]);or.push({k:"jockey",st:Pt,id:"sp:fateJ",sp:1,t:"\u904B\u547D\u306E\u5206\u5C90\u70B9",x:n=>`30\u6B73\u3092\u8FCE\u3048\u305F${pt(n)}\u3002\u30C8\u30C3\u30D7\u3092\u76EE\u6307\u3057\u3066\u4E57\u308A\u65B9\u3092\u5927\u304D\u304F\u5909\u3048\u308B\u304B\u3001\u4ECA\u306E\u30B9\u30BF\u30A4\u30EB\u3092\u78E8\u304F\u304B\u3002`,ch:[{l:"\u4E57\u308A\u65B9\u3092\u5927\u304D\u304F\u5909\u3048\u308B",pr:$(.5),ok:w("\u4E00\u6BB5\u4E0A\u306E\u9A0E\u624B\u306B\u306A\u3063\u305F\u3002\u898B\u3048\u308B\u666F\u8272\u304C\u5909\u308F\u3063\u305F\u3002",{fate:6}),ng:w("\u8FF7\u3044\u304C\u51FA\u3066\u3001\u6210\u7E3E\u3092\u843D\u3068\u3057\u3066\u3057\u307E\u3063\u305F\u3002",{fate:-2})},{l:"\u4ECA\u306E\u30B9\u30BF\u30A4\u30EB\u3092\u78E8\u304F",pr:$(1),ok:w("\u4FE1\u3058\u305F\u9053\u3092\u9032\u3080\u3002",{cond:4}),ng:w("",{})}]});var Hl=or;var Bn=(n,e)=>kl(n,e),xu=()=>{let n=0,e=0;for(;!n;)n=Math.random();for(;!e;)e=Math.random();return Math.sqrt(-2*Math.log(n))*Math.cos(2*Math.PI*e)},Ct={horse:{keys:jn,names:da,w:{spd:1.3,sta:1,pow:.9,gut:.8,wis:.6},turns:[1,3,5,7,9,11],len:2,rate:.03,evalName:"\u8ABF\u6559\u5E2B\u306E\u8A55\u4FA1",popName:"\u30D5\u30A1\u30F3",moneyName:"\u99AC\u4E3B\u306E\u8CC7\u91D1"},jockey:{keys:Ci,names:fa,w:{tec:1.2,whip:1,bal:1,fit:.8,jud:1},turns:[1,4,7,10],len:3,rate:.017,evalName:"\u9A0E\u4E57\u4F9D\u983C\u306E\u8A55\u4FA1",popName:"\u4EBA\u6C17",moneyName:"\u6240\u6301\u91D1"}},ci=n=>n.month+Ct[n.kind].len-1;var Vl=n=>ci(n)>=12,ga={horse:{early:{n:"\u65E9\u719F",d:"2\u6B73\u304B\u3089\u8D70\u308C\u308B\u3002\u8870\u3048\u3082\u65E9\u3044",c:n=>[.7,1,1.3,.9,.25][n]??-((n-4)*.5+.5)},normal:{n:"\u6A19\u6E96",d:"3\u301C4\u6B73\u304C\u30D4\u30FC\u30AF",c:n=>[.55,.8,1,1.05,.6,.1][n]??-((n-5)*.5+.5)},late:{n:"\u6669\u6210",d:"\u9045\u54B2\u304D\u3002\u53E4\u99AC\u306B\u306A\u3063\u3066\u672C\u683C\u5316",c:n=>[.45,.65,.75,.9,.95,.45,.1][n]??-((n-6)*.5+.5)}},jockey:{early:{n:"\u65E9\u719F",d:"\u82E5\u3044\u3046\u3061\u304B\u3089\u4E57\u308C\u308B\u3002\u8870\u3048\u3082\u65E9\u3044",c:n=>n<=22?1.35:n<=28?.8:n<=33?.2:-((n-33)*.3+.4)},normal:{n:"\u6A19\u6E96",d:"30\u6B73\u524D\u5F8C\u304C\u30D4\u30FC\u30AF",c:n=>n<=24?1:n<=31?.75:n<=36?.2:-((n-36)*.3+.4)},late:{n:"\u6669\u6210",d:"\u9045\u54B2\u304D\u3002\u30D9\u30C6\u30E9\u30F3\u306B\u306A\u3063\u3066\u8F1D\u304F",c:n=>n<=24?.62:n<=34?.8:n<=39?.3:-((n-39)*.3+.4)}}},_p={spd:1.3,sta:1,pow:1.1,gut:.6,wis:.4,tec:.4,whip:.6,bal:.8,fit:1.3,jud:.2},ur={easy:{n:"\u8EFD\u3081",g:1.2,inj:.03},std:{n:"\u666E\u901A",g:2.3,inj:.08},hard:{n:"\u30CF\u30FC\u30C9",g:3.6,inj:.17}},Wl=n=>n>=96?"SS":n>=90?"S":n>=84?"A":n>=78?"B":n>=72?"C":"D";function xn(n){let e=Ct[n.kind],t=0,i=0;for(let s of e.keys)t+=e.w[s]*n.st[s],i+=e.w[s];return Math.round(t/i)}function vu(n,e=xn(n)){return n.kind==="horse"?e>=90?"\u4F1D\u8AAC\u7D1A":e>=80?"G1\u7D1A":e>=70?"\u91CD\u8CDE\u7D1A":e>=60?"\u30AA\u30FC\u30D7\u30F3\u7D1A":e>=45?"\u6761\u4EF6\u99AC":"\u7D20\u8CEA\u99AC":e>=90?"\u30EC\u30B8\u30A7\u30F3\u30C9":e>=80?"\u30C8\u30C3\u30D7\u30B8\u30E7\u30C3\u30AD\u30FC":e>=70?"\u4E00\u6D41":e>=60?"\u4E2D\u5805":e>=45?"\u82E5\u624B":"\u898B\u7FD2\u3044"}function fn(n){return n.kind==="horse"?n.age===0?"farm":n.age===1?"ikusei":"tc":n.stage}var $l={farm:"\u751F\u307E\u308C\u6545\u90F7\u306E\u7267\u5834",ikusei:"\u80B2\u6210\u7267\u5834",tc:"\u30C8\u30EC\u30FC\u30CB\u30F3\u30B0\u30BB\u30F3\u30BF\u30FC",school:"\u7AF6\u99AC\u5B66\u6821",pro:"\u30D7\u30ED\u9A0E\u624B"},Pi={legend:{n:"\u4F1D\u8AAC",d:"0.001%\u306E\u5947\u8DE1\u3002\u9650\u754C\u304C\u3068\u3066\u3082\u9AD8\u3044"},monster:{n:"\u5929\u624D",d:"\u4E26\u5916\u308C\u305F\u624D\u80FD\u3002\u9650\u754C\u304C\u9AD8\u304F\u6210\u9577\u901F\u5EA61.1\u500D"},heir:{n:"\u8840\u7D71\u306E\u7D99\u627F\u8005",d:"\u53D7\u3051\u7D99\u3044\u3060\u529B\u3067\u6210\u9577\u901F\u5EA61.1\u500D"},nige:{n:"\u9003\u3052\u306E\u5929\u624D",d:"\u5E8F\u76E4\u306E\u30B9\u30D4\u30FC\u30C9+",k:"horse",chk:n=>n.style==="\u9003\u3052"&&n.st.spd>=80},sue:{n:"\u9B3C\u811A",d:"\u76F4\u7DDA\u306E\u4F38\u3073+1%",k:"horse",chk:n=>(n.style==="\u5DEE\u3057"||n.style==="\u8FFD\u8FBC")&&n.st.spd>=80},iron:{n:"\u9244\u306E\u811A",d:"\u30B1\u30AC\u306E\u30EA\u30B9\u30AF4\u5272\u6E1B",k:"horse",chk:n=>n.st.pow>=83},stayer:{n:"\u30B9\u30C6\u30A4\u30E4\u30FC",d:"\u30B9\u30BF\u30DF\u30CA\u306E\u91CF+6%",k:"horse",chk:n=>n.st.sta>=85},konjo:{n:"\u52DD\u8CA0\u6839\u6027",d:"\u7AF6\u308A\u5408\u3044\u3067\u5F37\u304F\u306A\u308B",k:"horse",chk:n=>n.st.gut>=84},smart:{n:"\u540D\u99AC\u306E\u982D\u8133",d:"\u4F53\u529B\u306E\u6E1B\u308A\u304C\u5C11\u306A\u3044",k:"horse",chk:n=>n.st.wis>=84},meishu:{n:"\u540D\u624B",d:"\u5DE6\u53F3\u306E\u52D5\u304D\u304C\u901F\u3044",k:"jockey",chk:n=>n.st.tec>=84},whipm:{n:"\u30E0\u30C1\u306E\u9054\u4EBA",d:"\u30E0\u30C1\u306E\u52B9\u304D+15%",k:"jockey",chk:n=>n.st.whip>=84},eco:{n:"\u7701\u30A8\u30CD\u9A0E\u4E57",d:"\u99AC\u306E\u4F53\u529B\u306E\u6E1B\u308A\u304C\u5C11\u306A\u3044",k:"jockey",chk:n=>n.st.bal>=84},ironj:{n:"\u9244\u4EBA",d:"\u30B1\u30AC\u306E\u30EA\u30B9\u30AF4\u5272\u6E1B",k:"jockey",chk:n=>n.st.fit>=83},start:{n:"\u30B9\u30BF\u30FC\u30C8\u306E\u540D\u624B",d:"\u30B2\u30FC\u30C8\u306E\u51FA\u304C\u901F\u3044",k:"jockey",chk:n=>n.st.jud>=84},g1man:{n:"\u5927\u821E\u53F0\u306E\u7537",d:"G1\u30923\u52DD\u3002\u51FA\u6765\u4E8B\u306E\u6210\u529F\u7387+5%",k:"jockey",chk:n=>n.g1Wins>=3}},bn=(n,e)=>(n.skills||[]).includes(e);function xp(n){let e=[];for(let[t,i]of Object.entries(Pi))i.chk&&i.k===n.kind&&!bn(n,t)&&i.chk(n)&&(n.skills.push(t),e.push(t));return e}var hr={horse:[{id:"graze",n:"\u653E\u7267",d:"\u5E83\u3044\u7267\u5834\u3067\u8D70\u308A\u56DE\u308B\u3002\u4F53\u304C\u4E08\u592B\u306B\u306A\u308B",g:1,sta:-3,boost:["pow","sta"],on:["farm","ikusei"]},{id:"mare",n:"\u6BCD\u99AC\u3068\u904E\u3054\u3059",d:"\u5B89\u5FC3\u3057\u3066\u904E\u3054\u3059\u3002\u8CE2\u3055\u30FB\u6839\u6027\u304C\u80B2\u3064",g:.8,sta:4,form:4,boost:["wis","gut"],on:["farm"]},{id:"dash",n:"\u4EF2\u9593\u3068\u99C6\u3051\u3063\u3053",d:"\u5168\u529B\u3067\u8D70\u308B\u3002\u6210\u95771.5\u500D\u3002\u30B1\u30AC\u3082\u3057\u3084\u3059\u3044",g:1.5,sta:-10,inj:1.3,boost:["spd"],on:["farm"]},{id:"break",n:"\u99B4\u81F4",d:"\u978D\u3068\u4EBA\u306B\u6163\u308C\u308B\u3002\u8CE2\u3055\u304C\u4F38\u3073\u3084\u3059\u3044",g:.9,sta:-3,boost:["wis"],on:["ikusei"]},{id:"hillY",n:"\u5742\u8DEF\u3067\u935B\u3048\u308B",d:"\u6210\u95771.6\u500D\u3002\u4F53\u529B\u3092\u4F7F\u3046",g:1.6,sta:-12,inj:1.4,on:["ikusei"]},{id:"train",n:"\u3044\u3064\u3082\u306E\u8ABF\u6559",d:"\u8ABF\u6559\u30E1\u30CB\u30E5\u30FC\u3092\u3053\u306A\u3059",g:1,sta:-3,eval:1,on:["tc"]},{id:"hard",n:"\u5F37\u3081\u306E\u8FFD\u3044\u5207\u308A",d:"\u6210\u95771.8\u500D\u3002\u4F53\u529B\u3092\u5927\u304D\u304F\u4F7F\u3044\u3001\u30B1\u30AC\u3082\u3057\u3084\u3059\u3044",g:1.8,sta:-14,inj:1.7,eval:2,on:["tc"]},{id:"gate",n:"\u30B2\u30FC\u30C8\u30FB\u6298\u308A\u5408\u3044\u7DF4\u7FD2",d:"\u8CE2\u3055\u30FB\u6839\u6027\u304C\u4F38\u3073\u3084\u3059\u3044",g:.75,sta:3,boost:["wis","gut"],eval:1,on:["tc"]},{id:"pool",n:"\u30D7\u30FC\u30EB\u8ABF\u6559",d:"\u811A\u306B\u8CA0\u62C5\u3092\u304B\u3051\u305A\u306B\u30B9\u30BF\u30DF\u30CA\u5F37\u5316",g:.8,sta:2,inj:.3,boost:["sta"],on:["tc"]},{id:"rest",n:"\u99AC\u623F\u3067\u4F11\u990A",d:"\u4F53\u529B\u3068\u8ABF\u5B50\u3092\u56DE\u5FA9\u3059\u308B\u3002\u6210\u9577\u306F\u63A7\u3048\u3081",g:.35,sta:20,form:6,on:["farm","ikusei","tc"]},{id:"farmout",n:"\u5916\u53A9\u3067\u653E\u7267",d:"\u3057\u3063\u304B\u308A\u30EA\u30D5\u30EC\u30C3\u30B7\u30E5",g:.25,sta:32,form:10,cost:30,on:["tc"]},{id:"race",n:"\u30EC\u30FC\u30B9\u306B\u51FA\u308B",d:"\u3053\u306E2\u304B\u6708\u306E\u30EC\u30FC\u30B9\u304B\u3089\u9078\u3093\u3067\u51FA\u8D70",g:.6,sta:0,race:1,on:["tc"]}],jockey:[{id:"ride",n:"\u9A0E\u4E57\u8A13\u7DF4",d:"\u6BCE\u65E5\u306E\u9A0E\u4E57\u8A13\u7DF4\u306B\u96C6\u4E2D\u3059\u308B",g:1,sta:-2,eval:1,on:["school"]},{id:"ridep",n:"\u9A0E\u4E57\u4F9D\u983C\u3092\u3053\u306A\u3059",d:"\u3044\u3064\u3082\u901A\u308A\u4E57\u308C\u308B\u3060\u3051\u4E57\u308B",g:1,sta:-4,eval:1,on:["pro"]},{id:"extra",n:"\u5C45\u6B8B\u308A\u7279\u8A13",d:"\u6210\u95771.8\u500D\u3002\u4F53\u529B\u3092\u5927\u304D\u304F\u4F7F\u3044\u3001\u30B1\u30AC\u3082\u3057\u3084\u3059\u3044",g:1.8,sta:-14,inj:1.7,eval:2,on:["school","pro"]},{id:"video",n:"\u30EC\u30FC\u30B9\u6620\u50CF\u7814\u7A76",d:"\u5224\u65AD\u30FB\u6280\u8853\u304C\u4F38\u3073\u3084\u3059\u3044",g:.75,sta:3,boost:["jud","tec"],eval:2,on:["school","pro"]},{id:"rest",n:"\u30B3\u30F3\u30C7\u30A3\u30B7\u30E7\u30F3\u8ABF\u6574",d:"\u4F53\u529B\u3068\u8ABF\u5B50\u3092\u56DE\u5FA9\u3059\u308B\u3002\u6210\u9577\u306F\u63A7\u3048\u3081",g:.35,sta:20,form:6,on:["school","pro"]},{id:"family",n:"\u5927\u5207\u306A\u4EBA\u3068\u904E\u3054\u3059",d:"\u5BB6\u65CF\u30FB\u604B\u4EBA\u3068\u306E\u6642\u9593\u3002\u5FC3\u8EAB\u3082\u56DE\u5FA9\u3059\u308B",g:.55,sta:9,form:5,fam:14,love:16,on:["school","pro"]},{id:"media",n:"\u30E1\u30C7\u30A3\u30A2\u51FA\u6F14",d:"\u51FA\u6F14\u6599\u3068\u4EBA\u6C17\u3002\u8ABF\u6559\u5E2B\u306F\u3044\u3044\u9854\u3092\u3057\u306A\u3044",g:.5,sta:-5,pop:3,eval:-3,media:1,on:["pro"]},{id:"mock",n:"\u6A21\u64EC\u30EC\u30FC\u30B9\u306B\u51FA\u308B",d:"\u81EA\u5206\u3067\u4E57\u308B3D\u30EC\u30FC\u30B9\u3002\u9806\u4F4D\u304C\u3088\u3044\u307B\u3069\u5927\u304D\u304F\u6210\u9577",g:.8,race:1,on:["school"]},{id:"bigrace",n:"\u5927\u4E00\u756A\u306B\u9A0E\u4E57",d:"\u3053\u306E3\u304B\u6708\u306E\u91CD\u8CDE\u304B\u3089\u9078\u3093\u3067\u3001\u81EA\u5206\u3067\u4E57\u308B",g:1,race:1,on:["pro"]},{id:"abroad",n:"\u6D77\u5916\u3067\u9A0E\u4E57\u4FEE\u884C",d:"\u6D77\u5916\u306E\u4E00\u6D41\u306B\u5B66\u3076\u3002\u6210\u95772.2\u500D\u3002\u65E5\u672C\u306E\u9A0E\u4E57\u306F\u304A\u4F11\u307F",g:2.2,sta:-8,cost:300,norides:1,on:["pro"]}]};function dr(n){let e=fn(n);return hr[n.kind].filter(t=>t.on.includes(e))}function Xl(n,e){if(n.id!=="family")return n.n;let t=e.fam&&e.fam.partner;return t?t.married?"\u5BB6\u65CF\u3068\u904E\u3054\u3059":`${t.n}\u3068\u904E\u3054\u3059`:"\u5B9F\u5BB6\u3067\u306E\u3093\u3073\u308A"}var ql={horse:[{id:"shoe",n:"\u7279\u6CE8\u306E\u8E44\u9244",d:"\u88C5\u8E44\u5E2B\u304C\u811A\u306B\u5408\u308F\u305B\u3066\u4F5C\u308B",eff:"\u30B9\u30D4\u30FC\u30C9+2",price:200,type:"once",fx:{spd:2}},{id:"saddle",n:"\u8EFD\u91CF\u306E\u978D",d:"\u99AC\u306E\u80CC\u4E2D\u306E\u8CA0\u62C5\u3092\u6E1B\u3089\u3059",eff:"\u30B9\u30BF\u30DF\u30CA+2",price:150,type:"once",fx:{sta:2}},{id:"capsuleH",n:"\u99AC\u7528\u306E\u9178\u7D20\u30AB\u30D7\u30BB\u30EB",d:"\u75B2\u308C\u3092\u65E9\u304F\u629C\u304F",eff:"\u6BCE\u6708\u306E\u4F53\u529B\u56DE\u5FA9+5",price:800,type:"once"},{id:"stall",n:"\u99AC\u623F\u306E\u6539\u88C5",d:"\u5E83\u304F\u3066\u9759\u304B\u306A\u99AC\u623F",eff:"\u6BCE\u6708\u306E\u4F53\u529B\u56DE\u5FA9+2\u30FB\u8ABF\u5B50\u304C\u5B89\u5B9A",price:500,type:"once"},{id:"farrier",n:"\u5C02\u5C5E\u306E\u88C5\u8E44\u5E2B",d:"\u6BCE\u6708\u811A\u306E\u72B6\u614B\u3092\u898B\u3066\u304F\u308C\u308B",eff:"\u30B1\u30AC\u306E\u30EA\u30B9\u30AF3\u5272\u6E1B",price:30,type:"sub"},{id:"gaikyu",n:"\u4E00\u6D41\u306E\u5916\u53A9\u3068\u5951\u7D04",d:"\u6700\u65B0\u8A2D\u5099\u3067\u935B\u3048\u308B",eff:"\u6210\u9577\u901F\u5EA61.2\u500D",price:80,type:"sub"},{id:"vet",n:"\u5C02\u5C5E\u306E\u7363\u533B",d:"\u3044\u3064\u3067\u3082\u8A3A\u3066\u3082\u3089\u3048\u308B",eff:"\u30B1\u30AC\u306E\u6CBB\u308A\u304C\u65E9\u3044\u30FB\u624B\u8853\u306E\u6210\u529F\u7387+15%",price:40,type:"sub"},{id:"summer",n:"\u590F\u306E\u5317\u6D77\u9053\u5408\u5BBF",d:"\u6DBC\u3057\u3044\u5834\u6240\u3067\u96C6\u4E2D\u3057\u3066\u935B\u3048\u308B",eff:"\u30D1\u30EF\u30FC+2\u30FB\u30B9\u30BF\u30DF\u30CA+2\uFF081\u5E74\u306B1\u56DE\uFF09",price:300,type:"season",fx:{pow:2,sta:2,sta_:10}},{id:"partner",n:"\u4F75\u305B\u99AC\u306E\u76F8\u624B\u3092\u7528\u610F",d:"\u5F37\u3044\u99AC\u3068\u4E26\u3093\u3067\u8D70\u3089\u305B\u308B",eff:"\u6839\u6027+3\uFF081\u5E74\u306B1\u56DE\uFF09",price:200,type:"season",fx:{gut:3}}],jockey:[{id:"helmet",cat:"self",n:"\u7279\u6CE8\u306E\u30D8\u30EB\u30E1\u30C3\u30C8\u3068\u9632\u5177",d:"\u5B89\u5168\u306B\u601D\u3044\u5207\u308A\u4E57\u308C\u308B",eff:"\u30D0\u30E9\u30F3\u30B9+2",price:120,type:"once",fx:{bal:2}},{id:"whipc",cat:"self",n:"\u30AB\u30FC\u30DC\u30F3\u88FD\u306E\u30E0\u30C1",d:"\u8EFD\u304F\u3066\u3088\u304F\u3057\u306A\u308B",eff:"\u30E0\u30C1+2",price:80,type:"once",fx:{whip:2}},{id:"capsule",cat:"self",n:"\u9178\u7D20\u30AB\u30D7\u30BB\u30EB",d:"\u81EA\u5B85\u3067\u75B2\u52B4\u3092\u629C\u304F",eff:"\u6BCE\u6708\u306E\u4F53\u529B\u56DE\u5FA9+5",price:600,type:"once"},{id:"gym",cat:"self",n:"\u81EA\u5B85\u30C8\u30EC\u30FC\u30CB\u30F3\u30B0\u30EB\u30FC\u30E0",d:"\u3044\u3064\u3067\u3082\u935B\u3048\u3089\u308C\u308B",eff:"\u6210\u9577\u901F\u5EA61.1\u500D",price:2e3,type:"once"},{id:"trainer",cat:"self",n:"\u30D1\u30FC\u30BD\u30CA\u30EB\u30C8\u30EC\u30FC\u30CA\u30FC",d:"\u5C02\u5C5E\u5951\u7D04\u3002\u6BCE\u65E5\u306E\u30E1\u30CB\u30E5\u30FC\u3092\u7D44\u3093\u3067\u304F\u308C\u308B",eff:"\u6210\u9577\u901F\u5EA61.2\u500D",price:60,type:"sub"},{id:"nutri",cat:"self",n:"\u5C02\u5C5E\u6804\u990A\u58EB",d:"\u6E1B\u91CF\u3068\u98DF\u4E8B\u3092\u7BA1\u7406\u3057\u3066\u304F\u308C\u308B",eff:"\u30B1\u30AC\u306E\u30EA\u30B9\u30AF3\u5272\u6E1B\u30FB\u4F53\u529B\u56DE\u5FA9+3",price:30,type:"sub"},{id:"mental",cat:"self",n:"\u30E1\u30F3\u30BF\u30EB\u30B3\u30FC\u30C1",d:"\u5927\u4E00\u756A\u3067\u3082\u5FC3\u304C\u4E71\u308C\u306A\u304F\u306A\u308B",eff:"\u51FA\u6765\u4E8B\u306E\u6210\u529F\u7387+5%",price:30,type:"sub"},{id:"agent",cat:"self",n:"\u30A8\u30FC\u30B8\u30A7\u30F3\u30C8\u5951\u7D04",d:"\u9A0E\u4E57\u4F9D\u983C\u3092\u96C6\u3081\u3066\u304F\u308C\u308B",eff:"\u9A0E\u4E57\u6570+20%",price:50,type:"sub",pro:1},{id:"apart",cat:"home",n:"\u8CC3\u8CB8\u30DE\u30F3\u30B7\u30E7\u30F3",d:"\u5BEE\u3092\u51FA\u3066\u4E00\u4EBA\u66AE\u3089\u3057",eff:"\u4F53\u529B\u56DE\u5FA9+1",price:15,type:"home"},{id:"tower",cat:"home",n:"\u30BF\u30EF\u30FC\u30DE\u30F3\u30B7\u30E7\u30F3",d:"\u666F\u8272\u306E\u3044\u3044\u90E8\u5C4B",eff:"\u4F53\u529B\u56DE\u5FA9+3\u30FB\u5BB6\u65CF\u304C\u559C\u3076",price:70,type:"home"},{id:"house",cat:"home",n:"\u4E00\u6238\u5EFA\u3066",d:"\u30C8\u30EC\u30BB\u30F3\u306E\u8FD1\u304F\u306B\u5BB6\u3092\u5EFA\u3066\u308B",eff:"\u4F53\u529B\u56DE\u5FA9+3\u30FB\u5BB6\u65CF\u304C\u559C\u3076",price:6e3,type:"buyhome"},{id:"compact",cat:"car",n:"\u8EFD\u81EA\u52D5\u8ECA",d:"\u901A\u52E4\u7528\u306E\u5C0F\u3055\u306A\u8ECA",eff:"\u4F53\u529B\u56DE\u5FA9+1",price:150,up:2,type:"car"},{id:"sports",cat:"car",n:"\u30B9\u30DD\u30FC\u30C4\u30AB\u30FC",d:"\u3042\u3053\u304C\u308C\u306E1\u53F0",eff:"\u4EBA\u6C17+3",price:1500,up:10,type:"car",fx:{pop:3}}]};function li(n,e){return ql[n].find(t=>t.id===e)}function Yl(n,e){if(e.pro&&fn(n)!=="pro")return[!1,"\u30D7\u30ED\u306B\u306A\u3063\u3066\u304B\u3089"];if(e.type==="once"&&n.items[e.id])return[!1,"\u8CFC\u5165\u6E08\u307F"];if(e.type==="sub"&&n.subs[e.id])return[!0,"\u5951\u7D04\u4E2D\uFF08\u89E3\u7D04\u3059\u308B\uFF09"];if(e.type==="season"&&n.seasonBuys[e.id]===n.year)return[!1,"\u4ECA\u5E74\u306F\u6E08\u307F"];if(e.type==="home"&&n.home===e.id)return[!1,"\u4F4F\u3093\u3067\u3044\u308B"];if(e.type==="buyhome"&&n.items[e.id])return[!1,"\u8CFC\u5165\u6E08\u307F"];if(e.type==="car"&&n.car===e.id)return[!1,"\u6301\u3063\u3066\u3044\u308B"];let t=e.type==="home"?e.price*2:e.price;return n.money<t?[!1,"\u304A\u91D1\u304C\u8DB3\u308A\u306A\u3044"]:[!0,""]}function yu(n,e){let t=li(n.kind,e),i=[];if(t.type==="sub"&&n.subs[e])return n.subs[e]=0,[`${t.n}\u3092\u89E3\u7D04\u3057\u305F`];let[s]=Yl(n,t);if(!s)return[];if(t.type==="sub"?(n.subs[e]=1,i.push(`${t.n}\u3068\u5951\u7D04\u3057\u305F\uFF08\u6BCE\u6708${t.price}\u4E07\u5186\uFF09`)):t.type==="home"?(n.money-=t.price*2,n.home=e,i.push(`${t.n}\u306B\u5F15\u3063\u8D8A\u3057\u305F`)):t.type==="buyhome"?(n.money-=t.price,n.items[e]=1,n.home=e,i.push(`${t.n}\u3092\u8CB7\u3063\u305F\uFF01`)):t.type==="car"?(n.money-=t.price,n.car=e,i.push(`${t.n}\u3092\u8CB7\u3063\u305F`)):(n.money-=t.price,t.type==="once"?n.items[e]=1:n.seasonBuys[e]=n.year,i.push(`${t.n}\u3092\u8CB7\u3063\u305F`)),t.fx)for(let[r,a]of Object.entries(t.fx))r==="sta_"?n.sta=be(n.sta+a,0,100):r==="pop"?n.pop=be(n.pop+a,0,100):Li(n,r,a);return i}var vp=["\u7F8E\u6D66\u30FB\u7530\u8FBA\u53A9\u820E","\u7F8E\u6D66\u30FB\u56FD\u679D\u53A9\u820E","\u7F8E\u6D66\u30FB\u5800\u7530\u53A9\u820E","\u7F8E\u6D66\u30FB\u6728\u6751\u53A9\u820E","\u7F8E\u6D66\u30FB\u624B\u585A\u53A9\u820E","\u6817\u6771\u30FB\u77E2\u4F5C\u53A9\u820E","\u6817\u6771\u30FB\u53CB\u9053\u53A9\u820E","\u6817\u6771\u30FB\u4E2D\u5185\u7530\u53A9\u820E","\u6817\u6771\u30FB\u6C60\u6DFB\u53A9\u820E","\u6817\u6771\u30FB\u9808\u8C9D\u53A9\u820E","\u6817\u6771\u30FB\u97F3\u7121\u53A9\u820E","\u7F8E\u6D66\u30FB\u9E7F\u6238\u53A9\u820E","\u6817\u6771\u30FB\u6749\u5C71\u53A9\u820E","\u7F8E\u6D66\u30FB\u8429\u539F\u53A9\u820E"],Di=vp.map((n,e)=>({id:e,n,rep:Math.round(40+e*37%50)}));function wn(n){return n.stable==null?null:Di[n.stable]}function Mu(n){let e=be(Math.round((n-30)/12),1,5);return"\u2605".repeat(e)+"\u2606".repeat(5-e)}function _a(n={}){let e=n.forceLegend||Math.random()<1e-5,t=!e&&(n.forceMonster||Math.random()<.02),i=e?99:t?Bn(87,91):be(Math.round(80+xu()*3.6),70,87),s=n.style||xt(["\u9003\u3052","\u5148\u884C","\u5148\u884C","\u5DEE\u3057","\u5DEE\u3057","\u8FFD\u8FBC"]),r={\u9003\u3052:{spd:2,gut:-1},\u5148\u884C:{pow:1},\u5DEE\u3057:{spd:1,wis:1},\u8FFD\u8FBC:{spd:2,sta:-1}}[s],a={},o={};for(let h of jn)o[h]=be(Math.round(i-6+Ze(-6,6)+(r[h]||0)*2),40,99),a[h]=Math.round(Ze(6,12)+(t?2:e?5:0));if(e){let h=[...jn].sort(()=>Math.random()-.5).slice(0,3);for(let u of h)o[u]=Bn(97,99)}let l=n.coat??Bn(0,un.length-1);return{kind:"horse",name:n.name||vs(),coat:l,sire:n.sire||xt(cu),dam:n.dam||xt(hu),style:s,growth:n.growth||xt(["early","normal","normal","late"]),pot:i,st:a,cap:o,apt:{turf:Ol[be(Math.round(Ze(2.6,6.6)),0,6)],dirt:Ol[be(Math.round(Ze(1.6,6.6)),0,6)]},age:0,year:2027,month:5,season:0,sta:90,cond:70,pop:5,eval:50,money:1500,inj:0,injName:"",focus:"all",int:"std",items:{},subs:{},seasonBuys:{},skills:e?["legend"]:t?["monster"]:[],record:[0,0,0,0],races:[],wins:0,gradedWins:0,g1Wins:0,titles:[],awards:[],earnings:0,log:[],yearLog:[],seen:{},flags:{potEst:Wl(i+Ze(-3,3))},fate:null,path:"middle",jockeyId:null,playMs:0}}function xa(n={}){let e=n.forceLegend||Math.random()<1e-5,t=!e&&(n.forceMonster||Math.random()<.02),i=e?99:t?Bn(87,91):be(Math.round(80+xu()*3.6),70,87),s={},r={};for(let a of Ci)r[a]=be(Math.round(i-4+Ze(-6,5)),40,99),s[a]=Math.round(Ze(16,26)+(t?3:e?8:0));return{kind:"jockey",name:n.name||ar(),silk:n.silk??Bn(0,dn.length-1),pref:n.pref||xt(["\u9003\u3052","\u5148\u884C","\u5DEE\u3057","\u8FFD\u8FBC"]),growth:n.growth||xt(["early","normal","normal","late"]),pot:i,st:s,cap:r,age:16,year:2027,month:4,season:0,stage:"school",stable:null,free:!1,sta:85,cond:70,pop:5,eval:45,money:20,inj:0,injName:"",focus:"all",int:"std",items:{},subs:{},seasonBuys:{},home:"dorm",car:null,fam:{partner:null,kids:[],happy:60},skills:e?["legend"]:t?["monster"]:[],record:[0,0,0,0],rides:0,wins:0,gradedWins:0,g1Wins:0,titles:[],awards:[],earnings:0,mockWins:0,log:[],yearLog:[],seen:{},flags:{potEst:Wl(i+Ze(-3,3))},fate:null,playMs:0}}function Su(n,e){let t=Ct[n.kind],i=[];for(let s of e){let r=s.s||{},a=[...t.keys].sort((l,c)=>(r[c]||0)-(r[l]||0)),o=(s.skills||[]).filter(l=>Pi[l]&&Pi[l].k===n.kind&&!bn(n,l));if(o.length&&Math.random()<.4){let l=xt(o);n.skills.push(l),i.push(`${s.name}\u304B\u3089\u300C${Pi[l].n}\u300D`)}else{let l=xt(a.slice(0,2));n.cap[l]=be(n.cap[l]+3,40,99),n.st[l]+=2,i.push(`${s.name}\u304B\u3089${t.names[l]}\u306E\u624D\u80FD\uFF08\u9650\u754C+3\uFF09`)}}return e.length>=2&&!bn(n,"heir")&&n.skills.push("heir"),i}function Li(n,e,t){let i=n.st[e];t<=0?n.st[e]=be(i+t,1,99):n.st[e]=be(Math.min(i+t,Math.max(i,n.cap[e]+1)),1,99)}function fr(n){return{p:n,ovr:xn(n),stage:fn(n)}}var Kl=[[2,8,["\u30BD\u30A8","\u632B\u77F3","\u30D5\u30EC\u30B0\u30E2\u30FC\u30CD","\u7B4B\u8089\u75DB","\u8E44\u306E\u708E\u75C7"]],[12,24,["\u5C48\u8171\u708E","\u9AA8\u6298","\u7E4B\u976D\u5E2F\u708E","\u5265\u96E2\u9AA8\u6298"]]],bu=[[2,8,["\u6253\u64B2","\u624B\u9996\u306E\u306D\u3093\u3056","\u808B\u9AA8\u306E\u3072\u3073","\u80A9\u306E\u75DB\u307F"]],[12,24,["\u9396\u9AA8\u9AA8\u6298","\u8170\u690E\u306E\u9AA8\u6298","\u5927\u817F\u9AA8\u306E\u9AA8\u6298"]]];function yp(n,e){let t=[],i=Ct[n.kind];for(let[s,r]of Object.entries(e||{}))if(i.keys.includes(s))Li(n,s,r),t.push([i.names[s],r]);else if(s==="key"){let a=n.focus==="all"?xt(i.keys):n.focus;Li(n,a,r),t.push([i.names[a],r])}else if(s==="all"){for(let a of i.keys)Li(n,a,r);t.push(["\u5168\u80FD\u529B",r])}else if(s==="fate"){for(let a of i.keys)n.st[a]=be(n.st[a]+r,1,99);t.push(["\u5168\u80FD\u529B",r])}else if(s==="cap"){for(let a of i.keys)n.cap[a]=be(n.cap[a]+r,40,99);t.push(["\u5168\u80FD\u529B\u306E\u9650\u754C","\u2191",1])}else if(s==="sta")n.sta=be(n.sta+r,0,100),t.push(["\u4F53\u529B",r]);else if(s==="cond")n.cond=be(n.cond+r,0,100),t.push(["\u8ABF\u5B50",r]);else if(s==="pop")n.pop=be(n.pop+r,0,100),t.push([i.popName,r]);else if(s==="eval")n.eval=be(n.eval+r,0,100),t.push([i.evalName,r]);else if(s==="money")n.money+=r,r>0&&(n.earnings+=r),t.push([r>=0?"\u53CE\u5165":"\u51FA\u8CBB",(r>=0?"+":"")+Ni(r),r]);else if(s==="inj")n.inj+=r,n.injName||(n.injName=xt((n.kind==="horse"?Kl:bu)[0][2])),t.push(["\u30B1\u30AC",`\u5168\u6CBB${r}\u9031`,-1]);else if(s==="partner")n.fam.partner={n:r===!0?xt(Mp):r,love:40,married:!1,months:0},t.push(["\u604B\u4EBA",n.fam.partner.n,1]);else if(s==="love"){let a=n.fam&&n.fam.partner;a&&!a.married&&(a.love=be(a.love+r,0,100),t.push(["\u611B\u60C5",r]))}else if(s==="fam"){let a=n.fam&&n.fam.partner;a&&a.married&&(n.fam.happy=be(n.fam.happy+r,0,100),t.push(["\u5BB6\u65CF\u306E\u6E80\u8DB3\u5EA6",r]))}else if(s==="breakup")n.fam.partner=null,t.push(["\u604B\u4EBA","\u5225\u308C\u305F",-1]);else if(s==="marry"){let a=n.fam.partner;a&&(a.married=!0,n.fam.happy=72,t.push(["\u7D50\u5A5A","\u304A\u3081\u3067\u3068\u3046",1]))}else if(s==="kid"){let a=xt(Sp);n.fam.kids.push({n:a,y:n.year}),t.push(["\u5BB6\u65CF",`${a}\u304C\u8A95\u751F`,1])}else s==="retire"?(n.fate={ty:"retire",why:r,head:"\u5F15\u9000"},t.push(["\u5F15\u9000","",-1])):s==="heal"&&(n.inj=0,n.injName="",t.push(["\u30B1\u30AC","\u56DE\u5FA9",1]));return t}var Mp=["\u7F8E\u54B2","\u8475","\u7D50\u8863","\u967D\u83DC","\u5F69\u82B1","\u5343\u5C0B","\u771F\u592E","\u8389\u5B50","\u7FD4\u592A","\u5927\u8F1D","\u98AF","\u84EE"],Sp=["\u3072\u306A\u305F","\u305D\u3089","\u3086\u3046\u3068","\u3055\u304F\u3089","\u306F\u308B\u3068","\u3053\u306F\u308B","\u308A\u304F","\u307F\u304A"],Ni=n=>{n=Math.round(n);let e=Math.abs(n),t=e>=1e4?`${Math.floor(e/1e4)}\u5104${e%1e4?e%1e4+"\u4E07":""}\u5186`:`${e}\u4E07\u5186`;return(n<0?"-":"")+t};function _u(n,e){let t=fr(n),i=fn(n),s=Hl.filter(l=>!l.sp&&l.k===n.kind&&l.st.includes(i)&&(!l.when||l.when(t))&&(!l.mo||l.mo.some(c=>c>=n.month&&c<=ci(n)))),r=s.filter(l=>!(n.seen[l.id]!=null&&n.season-n.seen[l.id]<2));r.length<e&&(r=s);let a=[],o=r.slice();for(;a.length<e&&o.length;){let l=Math.random()*o.reduce((h,u)=>h+(u.w||1),0),c=0;for(;c<o.length-1&&(l-=o[c].w||1,!(l<=0));c++);a.push(o[c].id),o.splice(c,1)}return a}function va(n){return Hl.find(e=>e.id===n)}function ya(n,e){let t=n.pr(e);return t>=1?1:(e.p.subs&&e.p.subs.mental&&(t+=.05),bn(e.p,"g1man")&&(t+=.05),be(t,.05,.95))}var bp=["spd","sta","pow","gut","wis","tec","whip","bal","fit","jud","key","all","pop","eval","cond","money","love","fam"];function wp(n,e,t){if(!n)return n;let i={};for(let[s,r]of Object.entries(n)){if(typeof r!="number"||!bp.includes(s)||s==="sta"&&!1){i[s]=r;continue}let a=r;["pop","eval","cond","love","fam"].includes(s)?a=r*(.6+Math.random()*.9):s==="money"&&r>0&&(a=r*(.7+Math.random()*.8)),e==="great"&&a>0&&(a*=2),e==="bad"&&a<0&&(a*=1.6),a=Math.round(a),a===0&&(a=Math.sign(r)),i[s]=a}return e==="great"&&!Object.values(i).some(s=>typeof s=="number"&&s>0)&&(i.cond=(i.cond||0)+6),i}function Ep(n){let e=n%233280;return()=>(e=(e*9301+49297)%233280,e/233280)}var Ms={sprint:{n:"\u77ED\u8DDD\u96E2\u8DEF\u7DDA",d:"1200\u301C1400m",min:1e3,max:1400},mile:{n:"\u30DE\u30A4\u30EB\u8DEF\u7DDA",d:"1400\u301C1800m",min:1400,max:1800},middle:{n:"\u4E2D\u8DDD\u96E2\u8DEF\u7DDA",d:"1800\u301C2500m",min:1800,max:2500},long:{n:"\u9577\u8DDD\u96E2\u8DEF\u7DDA",d:"2400m\u4EE5\u4E0A",min:2400,max:3600},dirt:{n:"\u30C0\u30FC\u30C8\u8DEF\u7DDA",d:"\u30C0\u30FC\u30C8\u306E\u30EC\u30FC\u30B9\u4E2D\u5FC3",dirt:1}};function Tp(n,e,t){let i=Ms[n.path||"middle"];return i.dirt?e==="\u30C0":e==="\u829D"&&t>=i.min&&t<=i.max}function Ap(n){return n.races.length===0?0:n.wins===0?1:Math.min(n.wins+1,5)}function wu(n){let e={G3:64,G2:70,G1:79}[n.g];return n.age==="2"?e-14:n.age==="3"?e-5:e}function pr(n){if(n.kind!=="horse"||fn(n)!=="tc")return[];let e=[];for(let t=n.month;t<=ci(n);t++){if(n.age===2&&t<6)continue;let i=Ep(n.year*131+t*17+(n.id||3)*7),s=Ap(n),r=[1200,1400,1600,1800,2e3,2200,2400];for(let a=0;a<2;a++){let o=uu[s],l=n.path==="dirt"?i()<.8?"\u30C0":"\u829D":i()<.75?"\u829D":"\u30C0",c=r[Math.floor(i()*(n.age===2?4:r.length))];if(a===0&&n.path!=="dirt"){let h=Ms[n.path||"middle"],u=r.filter(d=>d>=h.min&&d<=h.max&&(n.age>2||d<=2e3));u.length&&(c=u[Math.floor(i()*u.length)]),l="\u829D"}e.push({m:t,name:o.name,g:null,cls:s,surf:l,dist:c,place:Bl[Math.floor(i()*Bl.length)],prize:o.prize,lv:o.lv})}for(let a of ys){if(a.m!==t||!(a.age==="2"&&n.age===2||a.age==="3"&&n.age===3||a.age==="3+"&&n.age>=3||a.age==="4+"&&n.age>=4))continue;let l=a.g==="G1"?a.age==="2"?n.wins>=1:n.wins>=2||n.gradedWins>=1:n.wins>=1;e.push({...a,cls:6,lv:wu(a),locked:!l,path:Tp(n,a.surf,a.dist)})}}return e.sort((t,i)=>t.m-i.m||(i.g?1:0)-(t.g?1:0)||(i.path?1:0)-(t.path?1:0))}function Ma(n){if(n.kind!=="jockey"||n.stage!=="pro")return[];let e=[];for(let t=n.month;t<=ci(n);t++)for(let i of ys)if(i.m===t){let s=i.g==="G1"?55:i.g==="G2"?45:35;e.push({...i,lv:wu(i),locked:n.eval<s,need:s})}return e}var Sa=n=>{let e=n.cond<20?0:n.cond<40?1:n.cond<70?2:n.cond<90?3:4;return n.sta<30&&(e=Math.max(0,e-1)),e};function jl(n){return n.kind==="horse"?(1.35-Math.min(n.st.pow,100)/150)*(n.age>=6?1.35:1)*(n.subs.farrier?.7:1)*(bn(n,"iron")?.6:1)*(n.sta<30?1.6:1):(1.35-Math.min(n.st.fit,100)/150)*(n.age>=40?1.35:1)*(n.subs.nutri?.7:1)*(bn(n,"ironj")?.6:1)*(n.sta<30?1.6:1)}function Eu(n,e){return be(ur[e].inj*jl(n),.01,.6)}function Rp(n,e,t){let i=Ct[n.kind],s=ga[n.kind][n.growth].c(n.age),r=ur[n.int],a=(bn(n,"legend")?2:bn(n,"monster")?1.1:1)*(bn(n,"heir")?1.1:1)*(n.subs.trainer||n.subs.gaikyu?1.2:1)*(n.items.gym?1.1:1),o=n.inj>0?.4:1,l=n.sta<30?.7:1;for(let c of i.keys){let h=n.st[c]<n.cap[c],u=s>0?s*Math.max(0,n.cap[c]-n.st[c])*i.rate*a*o*l*e+(h?Ze(-.12,.18):Ze(-.1,.04)):s*_p[c]/12+Ze(-.15,.08);h&&(n.focus===c?u+=r.g/12*e*(s>0?a:1)*o:n.focus==="all"&&(u+=r.g/12*.33*e*o),t.boost&&t.boost.includes(c)&&(u+=.3*o),u>0&&(u=Math.min(u,n.cap[c]-n.st[c]+.05))),n.st[c]=be(n.st[c]+u,1,99)}}function Jl(n){let e=[];if(n.kind==="horse"){let t=fn(n);e.push(["\u9810\u8A17\u6599",t==="tc"?30:t==="ikusei"?15:8]);for(let i of Object.keys(n.subs))n.subs[i]&&e.push([li("horse",i).n,li("horse",i).price])}else{n.stage==="pro"&&e.push(["\u751F\u6D3B\u8CBB",20]);let t=n.fam.partner;t&&t.married&&e.push(["\u5BB6\u65CF\u306E\u751F\u6D3B\u8CBB",10+n.fam.kids.length*8]);let i={apart:15,tower:70}[n.home];i&&e.push(["\u5BB6\u8CC3",i]),n.car&&e.push(["\u8ECA\u306E\u7DAD\u6301\u8CBB",li("jockey",n.car).up]);for(let s of Object.keys(n.subs))n.subs[s]&&e.push([li("jockey",s).n,li("jockey",s).price])}return e}function Cp(n,e,t,i){if(n.stage!=="pro"||n.inj>0||e.norides)return;let s=wn(n),r=s?s.rep:40,a=8+n.eval*.35+(n.free?n.pop*.2:r*.15);(e.id==="rest"||e.id==="family")&&(a*=.6),n.subs.agent&&(a*=1.2),a=Math.max(0,Math.round(a*Ze(.85,1.15)));let o=xn(n),l=be(.02+Math.max(0,o-35)*.003+(n.eval-50)*6e-4+(r-50)*8e-4+(n.cond-60)*3e-4,.01,.25),c=0,h=0,u=0;for(let f=0;f<a;f++){let g=Math.random();g<l?c++:g<l*1.85?h++:g<l*2.6&&u++}let d=Math.round(a*2.6+c*45+h*18+u*11);if(n.rides+=a,n.wins+=c,n.record[0]+=c,n.record[1]+=h,n.record[2]+=u,n.record[3]+=a-c-h-u,n.money+=d,n.earnings+=d,t.rides+=a,t.w+=c,t.inc+=d,n.cond=be(n.cond+(c/Math.max(1,a)-l)*40,0,100),n.eval=be(n.eval+(c-a*.08)*.05+(o+8-n.eval)*.05,0,100),e.id!=="bigrace"&&n.eval>=50){for(let f of ys)if(f.m===i&&Math.random()<(n.eval-50)/100){let g=l*(f.g==="G1"?.35:f.g==="G2"?.5:.6);if(Math.random()<g){n.gradedWins++,f.g==="G1"&&n.g1Wins++;let v=vs();n.titles.push(`${f.name}\uFF08${v}\uFF09`);let p=Math.round(f.prize*.05);n.money+=p,n.earnings+=p,t.inc+=p,n.pop=be(n.pop+(f.g==="G1"?8:3),0,100),n.eval=be(n.eval+(f.g==="G1"?5:2),0,100),t.notes.push(`${i}\u6708 ${f.g} ${f.name}\u3092${v}\u3067\u5236\u8987\uFF01`)}}}}var Ip={horse:{retire:4e-4,death:6e-5},jockey:{retire:15e-5,death:2e-5,accident:45e-5}};function Pp(n,e){if(n.fate)return;let t=Ip[n.kind],i=Math.random();if(n.kind==="horse"){if(fn(n)!=="tc")return;i<t.death?n.fate={ty:"death",why:"\u8ABF\u6559\u4E2D\u306B\u811A\u3092\u9AA8\u6298\u3057\u3001\u5929\u56FD\u3078\u65C5\u7ACB\u3063\u305F",head:"\u8A03\u5831"}:i<t.death+t.retire&&(n.fate={ty:"retire",why:"\u8ABF\u6559\u4E2D\u306B\u811A\u306B\u91CD\u3044\u30B1\u30AC\u3092\u8CA0\u3044\u3001\u7AF6\u8D70\u80FD\u529B\u3092\u5931\u3063\u305F",head:"\u6545\u969C\u3067\u5F15\u9000"})}else{if(n.stage!=="pro")return;i<t.death?n.fate={ty:"death",why:"\u30EC\u30FC\u30B9\u4E2D\u306E\u843D\u99AC\u4E8B\u6545\u3067\u3001\u5E30\u3089\u306C\u4EBA\u3068\u306A\u3063\u305F",head:"\u8A03\u5831"}:i<t.death+t.retire&&(n.fate={ty:"retire",why:"\u843D\u99AC\u3067\u5927\u30B1\u30AC\u3092\u8CA0\u3044\u3001\u30E0\u30C1\u3092\u7F6E\u304F\u3053\u3068\u3092\u6C7A\u3081\u305F",head:"\u843D\u99AC\u3067\u5F15\u9000"})}n.fate&&(e.fate=n.fate)}function Lp(n,e,t,i){let s=t.pos;n.races.push({y:n.year,age:n.age,m:e.m,name:e.name,g:e.g,surf:e.surf,dist:e.dist,pos:s,field:t.field,time:t.time,jockey:t.jname||""}),n.record[Math.min(s,4)-1]++;let r=s<=5?e.prize*[1,.4,.25,.15,.1][s-1]:0;n.money+=r*.8,n.earnings+=r,i.inc+=r*.8,s===1?(n.wins++,e.g&&(n.gradedWins++,n.titles.push(e.name)),e.g==="G1"&&n.g1Wins++,n.pop=be(n.pop+(e.g==="G1"?15:e.g?7:3),0,100),n.eval=be(n.eval+(e.g?6:4),0,100),n.cond=be(n.cond+8,0,100),i.carrots+=e.g==="G1"?50:e.g?20:10):s<=3?(n.pop=be(n.pop+2,0,100),n.eval=be(n.eval+1,0,100),i.carrots+=3):s>t.field/2&&(n.cond=be(n.cond-6,0,100),n.eval=be(n.eval-2,0,100)),n.sta=be(n.sta-18-e.dist/300-(t.whips||0)*.2,0,100);let a=e.g==="G1"?1.6:e.g?1.3:1;Li(n,"gut",.8*a),Li(n,"wis",.8*a),i.races.push({...e,pos:s,field:t.field,time:t.time,prize:r});let o=Math.random();if(o<.0012)n.fate={ty:"death",why:`${e.name}\u306E\u30EC\u30FC\u30B9\u4E2D\u306B\u811A\u3092\u9AA8\u6298\u3002\u61F8\u547D\u306E\u51E6\u7F6E\u3082\u3080\u306A\u3057\u304F\u3001\u5929\u56FD\u3078\u65C5\u7ACB\u3063\u305F`,head:"\u8A03\u5831"},i.fate=n.fate;else if(o<.0012+.012*jl(n)){let l=Math.random()<.3?Bn(12,24):Bn(2,8);n.inj+=l,n.injName=xt(Kl[l>=12?1:0][2]),i.notes.push(`${e.name}\u306E\u3042\u3068${n.injName}\u304C\u898B\u3064\u304B\u3063\u305F\uFF08\u5168\u6CBB${l}\u9031\u9593\uFF09`),l>=12&&(n.flags.surgery=n.injName)}}function Np(n,e,t,i){let s=t.pos;if(e.mock){let a=s===1?2.2:s<=3?1.5:s<=t.field/2?1:.6;for(let o of Ci)Li(n,o,a*Ze(.8,1.2));s===1?(n.mockWins++,n.eval=be(n.eval+6,0,100)):n.eval=be(n.eval+(s<=3?3:0),0,100),i.races.push({...e,pos:s,field:t.field,time:t.time,prize:0});return}n.rides++,n.record[Math.min(s,4)-1]++;let r=s<=5?e.prize*[1,.4,.25,.15,.1][s-1]*.05:0;n.money+=r,n.earnings+=r,i.inc+=r,s===1?(n.wins++,n.gradedWins++,e.g==="G1"&&n.g1Wins++,n.titles.push(`${e.name}\uFF08${e.horse}\uFF09`),n.pop=be(n.pop+(e.g==="G1"?12:5),0,100),n.eval=be(n.eval+(e.g==="G1"?8:4),0,100),i.carrots+=e.g==="G1"?50:20):s<=3?(n.eval=be(n.eval+2,0,100),i.carrots+=3):n.eval=be(n.eval-2,0,100);for(let a of["tec","jud","whip"])Li(n,a,.6);i.races.push({...e,pos:s,field:t.field,time:t.time,prize:r})}function Dp(n,e,t,i,s){let r=n.p;if(i){if(e.cost&&(r.money-=e.cost),r.sta=be(r.sta+(e.sta||0),0,100),r.cond=be(r.cond+(e.form||0),0,100),r.eval=be(r.eval+(e.eval||0),0,100),r.pop=be(r.pop+(e.pop||0),0,100),e.id==="family"){let u=r.fam.partner;u?u.married?r.fam.happy=be(r.fam.happy+e.fam,0,100):u.love=be(u.love+e.love,0,100):r.cond=be(r.cond+3,0,100)}if(e.media&&r.stage==="pro"){let u=Math.round(r.pop*2.5+30);r.money+=u,r.earnings+=u,t.inc+=u,t.notes.push(`\u51FA\u6F14\u6599 ${Ni(u)}`)}}else e.sta&&e.sta<0&&(r.sta=be(r.sta+e.sta*.5,0,100));if(e.g>=.7&&!e.race){let u=ur[r.int].inj/9*(e.inj||1)*jl(r)*(r.kind==="horse"&&fn(r)!=="tc"?.4:1);if(Math.random()<u){let d=Math.random()<.15,f=d?Bn(12,24):Bn(2,8);r.inj+=f,r.injName=xt((r.kind==="horse"?Kl:bu)[d?1:0][2]),t.notes.push(`${s}\u6708 ${r.kind==="horse"?"\u8ABF\u6559\u4E2D":"\u7DF4\u7FD2\u4E2D"}\u306B${r.injName}\uFF08\u5168\u6CBB${f}\u9031\u9593\uFF09`),d&&r.kind==="horse"&&(r.flags.surgery=r.injName)}}n.raceSel&&n.raceSel.m===s&&n.raceRes&&(r.kind==="horse"?Lp(r,n.raceSel,n.raceRes,t):Np(r,n.raceSel,n.raceRes,t)),r.kind==="jockey"&&Cp(r,e,t,s),Rp(r,e.g*(r.kind==="jockey"&&r.stage==="pro"&&!e.norides?1.1:1),e);let a=r.kind==="jockey"?({apart:1,tower:3,house:3}[r.home]||0)+(r.car==="compact"?1:0):r.items.stall?2:0;r.sta=be(r.sta+12+(r.subs.nutri?3:0)+(r.items.capsule||r.items.capsuleH?5:0)+a,0,100);let o=(r.subs.mental||r.items.stall?Ze(-3,3):Ze(-5,5))+(60-r.cond)*.1;if(r.kind==="jockey"){let u=r.fam.partner;u&&u.married?o+=(r.fam.happy-50)/20:u&&(o+=(u.love-50)/30)}if(r.money<0&&(o-=5),r.cond=be(r.cond+o,0,100),r.kind==="jockey"){let u=r.fam.partner;u&&(u.months=(u.months||0)+1,u.married?r.fam.happy=be(r.fam.happy-2.5+({tower:1,house:2}[r.home]||0),0,100):u.love=be(u.love-3,0,100)),r.stage==="school"&&(r.money+=3,t.inc+=3)}let l=Jl(r),c=l.reduce((u,d)=>u+d[1],0);r.money-=c,t.cost+=c,r.inj=Math.max(0,r.inj-(r.subs.vet?6.5:4.3)),r.inj<=0&&(r.injName=""),r.pop=r.pop*.99;let h=xp(r);t.skills.push(...h)}function Tu(n){return{p:n,screen:"camp",tab:"play",act:null,evq:[],evi:0,evr:null,mres:null,report:null,offers:null,raceSel:null,raceRes:null,yr:Au(n)}}function Au(n){return{y:n.year,age:n.age,st0:{...n.st},o0:xn(n),rec0:[...n.record],rides0:n.rides||0,wins0:n.wins,earn0:n.earnings,titles0:n.titles.length,races0:(n.races||[]).length,g10:n.g1Wins}}function ba(n){n.act=null,n.evq=[],n.evi=0,n.evr=null,n.mres=null,n.raceSel=null,n.raceRes=null,n.screen="month"}function Zl(n){let e=n.p,t=[];e.flags.surgery&&t.push("sp:surgery");let i=e.kind==="horse"?4:30;if(!t.length&&e.age>=i&&!e.flags.fate&&fn(e)===(e.kind==="horse"?"tc":"pro")&&(e.flags.fate=1,t.push(e.kind==="horse"?"sp:fateH":"sp:fateJ")),!t.length){if(Math.random()<.72){let r=_u(e,1)[0];r&&t.push(r)}let s=Math.random()<.35?Math.random()<.3?2:1:0;for(let r=0;r<s;r++){let a=_u(e,6).find(o=>!t.includes(o));a&&t.push(a)}}n.evq=t,n.evi=0,n.evr=null,n.screen=t.length?"event":"afterEvents"}function Ql(n,e){let t=n.p,i=n.evq[n.evi],s=va(i),r=s.ch[e],a=fr(t),o=ya(r,a),l=Math.random()<o,c=l?r.ok:r.ng;t.seen[s.id]=t.season;let h=Math.random(),u=l&&o<1&&h<.15?"great":!l&&h<.12?"bad":null;i==="sp:surgery"&&(t.flags.surgery=null);let d=yp(t,i.startsWith("sp:fate")?c.fx:wp(typeof c.fx=="function"?c.fx(a):c.fx,u,t)),f=typeof c.m=="function"?c.m(a):c.m;n.evr={ci:e,win:l,m:(u==="great"?"\u3010\u5927\u6210\u529F\u3011":u==="bad"?"\u3010\u5927\u5931\u6557\u3011":"")+f,fx:d,pr:o,safe:o>=1,big:u},n.lastEv={t:typeof s.t=="function"?s.t(a):s.t,l:r.l}}function ec(n){n.evr=null,n.evi++,n.evi>=n.evq.length&&(n.screen="afterEvents")}function mr(n){let e=n.p,t=hr[e.kind].find(l=>l.id===n.act)||hr[e.kind][0],i=e.fam&&e.fam.partner,s={st:{...e.st},money:e.money,sta:e.sta,cond:e.cond,pop:e.pop,eval:e.eval,o:xn(e),love:i?i.married?e.fam.happy:i.love:null},r={y:e.year,m:e.month,m1:ci(e),act:Xl(t,e),races:[],notes:[],skills:[],inc:0,cost:0,rides:0,w:0,carrots:0,ev:n.lastEv||null};n.lastEv=null;let a=ci(e);for(let l=e.month;l<=a&&(Dp(n,t,r,l===e.month,l),!e.fate);l++);e.fate||Pp(e,r),e.fate&&(r.fate=e.fate),r.d=Ct[e.kind].keys.map(l=>[l,Math.round(e.st[l]*10-s.st[l]*10)/10]),r.o0=s.o,r.o1=xn(e),r.dm=Math.round(e.money-s.money),r.dsta=Math.round(e.sta-s.sta),r.dcond=Math.round(e.cond-s.cond),r.dpop=Math.round(e.pop-s.pop),r.deval=Math.round(e.eval-s.eval);let o=e.fam&&e.fam.partner;return r.dfam=o&&s.love!=null?Math.round((o.married?e.fam.happy:o.love)-s.love):null,e.yearLog.push({m:r.m,act:r.act,races:r.races.map(l=>`${l.name}${l.pos}\u7740`),notes:r.notes.slice(0,3)}),n.mres=r,n.screen="mres",r}function tc(n){let e=n.p;if(e.fate&&e.fate.ty!=="acc"){n.screen="retireNow";return}if(Vl(e)){Up(n);return}let t=Ct[e.kind].turns;e.month=t.find(i=>i>e.month)||t[0],ba(n)}function Up(n){let e=n.p,t=n.yr,i={year:e.year,age:e.age,o0:t.o0,o1:xn(e),awards:[],rows:[]};i.d=Ct[e.kind].keys.map(r=>[r,Math.round(e.st[r]-t.st0[r])]);let s=e.titles.slice(t.titles0);if(i.titles=s,e.kind==="horse"){let r=e.races.slice(t.races0),a=[0,0,0,0];r.forEach(l=>a[Math.min(l.pos,4)-1]++);let o=r.filter(l=>l.g==="G1"&&l.pos===1);i.rows.push(["\u51FA\u8D70",r.length?`${r.length}\u6226\uFF08${a.join("-")}\uFF09`:"\u306A\u3057"]),i.rows.push(["\u7372\u5F97\u8CDE\u91D1",Ni(e.earnings-t.earn0)]),s.length&&i.rows.push(["\u52DD\u3063\u305F\u91CD\u8CDE",s.join("\u3001")]),i.rows.push(["\u901A\u7B97\u6210\u7E3E",`${e.record.join("-")}\u30FB${Ni(e.earnings)}`]),o.length&&e.age===2&&i.awards.push("\u6700\u512A\u79C02\u6B73\u99AC"),o.length&&e.age===3&&i.awards.push("\u6700\u512A\u79C03\u6B73\u99AC"),o.length&&e.age>=4&&i.awards.push("\u6700\u512A\u79C0\u53E4\u99AC"),o.length>=2&&i.awards.push("\u5E74\u5EA6\u4EE3\u8868\u99AC"),e.awards.push(...i.awards.map(l=>`${e.year}\u5E74 ${l}`)),i.headA=o.length?`${o[0].name}`:s.length?s[0]:a[0]?`${a[0]}\u52DD`:e.age<2?"\u3059\u304F\u3059\u304F":r.length?"\u96CC\u4F0F\u306E\u6642":"\u6E96\u5099\u306E\u4E00\u5E74",i.headB=o.length?"\u5236\u8987\uFF01":s.length?"\u91CD\u8CDE\u5236\u8987":a[0]?"\u6319\u3052\u308B":e.age<2?"\u6210\u9577\u4E2D":r.length?"\u307E\u3060\u307E\u3060":"\u529B\u3092\u305F\u3081\u308B",i.deck=o.length?`${e.name}\u3001${o.map(l=>l.name).join("\u30FB")}\u3092\u5236\u3059\u3002${i.awards.includes("\u5E74\u5EA6\u4EE3\u8868\u99AC")?"\u307E\u3055\u306B\u5E74\u5EA6\u4EE3\u8868\u99AC\u306E\u8D70\u308A\u3060\u3063\u305F\u3002":"\u4E16\u4EE3\u306E\u9802\u70B9\u306B\u7ACB\u3063\u305F\u3002"}`:s.length?`${e.name}\u3001${s.join("\u30FB")}\u3092\u52DD\u3063\u3066\u91CD\u8CDE\u30A6\u30A4\u30CA\u30FC\u306B\u3002\u6B21\u306FG1\u306E\u821E\u53F0\u3060\u3002`:a[0]?`${e.name}\u3001\u3053\u306E\u4E00\u5E74\u3067${a[0]}\u52DD\u3002\u7740\u5B9F\u306B\u968E\u6BB5\u3092\u4E0A\u3063\u3066\u3044\u308B\u3002`:e.age===0?`${e.name}\u3001\u751F\u307E\u308C\u6545\u90F7\u306E\u7267\u5834\u3067\u5143\u6C17\u306B\u80B2\u3064\u3002`:e.age===1?`${e.name}\u3001\u80B2\u6210\u7267\u5834\u3067\u7AF6\u8D70\u99AC\u3078\u306E\u6E96\u5099\u3092\u9032\u3081\u308B\u3002`:r.length?`${e.name}\u3001\u52DD\u3061\u661F\u306B\u306F\u5C4A\u304B\u306A\u304B\u3063\u305F\u304C\u3001\u7D4C\u9A13\u3092\u7A4D\u3093\u3060\u4E00\u5E74\u3002`:`${e.name}\u3001\u30C7\u30D3\u30E5\u30FC\u306B\u5411\u3051\u3066\u529B\u3092\u305F\u3081\u308B\u4E00\u5E74\u3002`}else{let r=e.rides-t.rides0,a=e.wins-t.wins0;if(e.stage==="pro"){i.rows.push(["\u9A0E\u4E57\u6570",`${r}\u56DE`]),i.rows.push(["\u52DD\u5229\u6570",`${a}\u52DD\uFF08\u52DD\u7387${r?(a/r*100).toFixed(1):0}%\uFF09`]),i.rows.push(["\u7372\u5F97\u8CDE\u91D1\u30FB\u53CE\u5165",Ni(e.earnings-t.earn0)]),s.length&&i.rows.push(["\u91CD\u8CDE\u52DD\u3061",s.join("\u3001")]),i.rows.push(["\u901A\u7B97",`${e.rides}\u6226${e.wins}\u52DD\u30FBG1 ${e.g1Wins}\u52DD`]);let o=wn(e);i.rows.push(["\u6240\u5C5E",e.free?"\u30D5\u30EA\u30FC":o?o.n:"\u2014"]),a>=150?i.awards.push("\u30EA\u30FC\u30C7\u30A3\u30F3\u30B0\u30B8\u30E7\u30C3\u30AD\u30FC"):a>=100&&i.awards.push("100\u52DD\u9054\u6210"),e.flags.debutY===e.year&&a>=20&&i.awards.push("\u6700\u512A\u79C0\u65B0\u4EBA\u9A0E\u624B"),e.g1Wins-t.g10>=3&&i.awards.push("\u6700\u591AG1\u52DD\u5229\u9A0E\u624B"),e.awards.push(...i.awards.map(l=>`${e.year}\u5E74 ${l}`)),i.headA=a>=100?`${a}\u52DD`:s.length?"\u91CD\u8CDE\u5236\u8987":`${a}\u52DD`,i.headB=a>=150?"\u30EA\u30FC\u30C7\u30A3\u30F3\u30B0\uFF01":s.length?"\u5927\u821E\u53F0\u3067\u8F1D\u304F":a>=50?"\u98DB\u8E8D\u306E\u5E74":"\u7D4C\u9A13\u3092\u7A4D\u3080",i.deck=`${e.name}\u3001\u3053\u306E\u4E00\u5E74\u3067${r}\u978D\u306B\u9A0E\u4E57\u3057${a}\u52DD\u3002${s.length?s.join("\u30FB")+"\u3092\u5236\u3057\u305F\u3002":"\u6B21\u306F\u91CD\u8CDE\u306E\u30BF\u30A4\u30C8\u30EB\u3092\u72D9\u3046\u3002"}`}else i.rows.push(["\u6A21\u64EC\u30EC\u30FC\u30B9",`${e.mockWins}\u52DD`]),i.rows.push(["\u6559\u5B98\u306E\u8A55\u4FA1",Math.round(e.eval)]),i.headA="\u7AF6\u99AC\u5B66\u6821",i.headB=e.age>=17?"\u5352\u696D\u3078":"1\u5E74\u76EE",i.deck=`${e.name}\u3001\u7AF6\u99AC\u5B66\u6821\u3067${e.age>=17?"2\u5E74\u9593\u306E\u8A13\u7DF4\u3092\u7D42\u3048\u308B\u3002\u3044\u3088\u3044\u3088\u30C7\u30D3\u30E5\u30FC\u3060\u3002":"\u9A0E\u624B\u306E\u57FA\u790E\u3092\u305F\u305F\u304D\u8FBC\u307E\u308C\u308B\u4E00\u5E74\u3002"}`}e.season>=1&&!e.flags.potShown&&(e.flags.potShown=1,e.flags.potEst=Wl(e.pot),i.potNote=e.flags.potEst),n.report=i,n.screen="report"}function nc(n){let e=n.p,t={list:[],canRetire:!1,retireOpts:[]};if(e.kind==="horse")e.age>=2&&(t.paths=Object.entries(Ms).map(([i,s])=>({k:i,...s})),e.age>=3&&t.retireOpts.push({id:"riding",n:"\u5F15\u9000\u3057\u3066\u4E57\u99AC\u306B\u306A\u308B",d:"\u306E\u3093\u3073\u308A\u3068\u7B2C\u4E8C\u306E\u99AC\u751F\u3078"}),(e.g1Wins>=1||e.gradedWins>=2)&&t.retireOpts.push({id:"stud",n:"\u5F15\u9000\u3057\u3066\u7A2E\u7261\u99AC\u5165\u308A",d:`\u7A2E\u4ED8\u3051\u6599 ${Ni(Math.round(50+e.g1Wins*300+e.gradedWins*60))}\u3002\u5B50\u3069\u3082\u305F\u3061\u306B\u5922\u3092\u8A17\u3059`}),t.forced=e.age>=7,t.forced&&!t.retireOpts.length&&t.retireOpts.push({id:"riding",n:"\u5F15\u9000\u3057\u3066\u4E57\u99AC\u306B\u306A\u308B",d:"\u306E\u3093\u3073\u308A\u3068\u7B2C\u4E8C\u306E\u99AC\u751F\u3078"})),t.note=e.age<2?"\u307E\u3060\u7AF6\u8D70\u99AC\u306B\u306A\u308B\u524D\u3002\u6765\u5E74\u3082\u7267\u5834\u3067\u3057\u3063\u304B\u308A\u80B2\u3066\u3088\u3046\u3002":t.forced?"7\u6B73\u306E\u5E74\u672B\u3002\u3053\u3053\u3067\u73FE\u5F79\u751F\u6D3B\u306B\u533A\u5207\u308A\u3092\u3064\u3051\u308B\u3002":"\u6765\u5E74\u306F\u3069\u306E\u8DEF\u7DDA\u3067\u6226\u3046\u304B\u3092\u6C7A\u3081\u308B\u3002\u5F15\u9000\u3055\u305B\u308B\u3053\u3068\u3082\u3067\u304D\u308B\u3002";else{let s=xn(e)*.6+e.eval*.4+e.pop*.1,r=Di.filter(o=>o.rep<=s+12).sort(()=>Math.random()-.5).slice(0,Bn(2,4)),a=wn(e);if(e.stage==="school")t.list=(r.length?r:[Di[0]]).map(o=>({stable:o.id})),t.note="\u5352\u696D\u306E\u5E74\u3002\u3069\u306E\u53A9\u820E\u306B\u6240\u5C5E\u3057\u3066\u30C7\u30D3\u30E5\u30FC\u3059\u308B\u304B\u3092\u9078\u3076\u3002";else{a&&!e.free&&t.list.push({stable:a.id,renew:1});for(let o of r)(!a||o.id!==a.id)&&t.list.push({stable:o.id});t.list=t.list.slice(0,4),t.free=e.eval>=55&&!e.free,t.stayFree=e.free,t.canRetire=e.age>=33,t.forced=e.age>=45,t.forced&&(t.list=[],t.free=!1,t.stayFree=!1),t.note=t.forced?"45\u6B73\u3002\u9577\u3044\u9A0E\u624B\u4EBA\u751F\u306B\u533A\u5207\u308A\u3092\u3064\u3051\u308B\u6642\u304C\u6765\u305F\u3002":"\u6765\u5E74\u306E\u6240\u5C5E\u3092\u6C7A\u3081\u308B\u3002\u30D5\u30EA\u30FC\u306B\u306A\u308B\u3068\u8A55\u4FA1\u3057\u3060\u3044\u3067\u9A0E\u4E57\u4F9D\u983C\u304C\u5927\u304D\u304F\u5909\u308F\u308B\u3002"}}n.offers=t,n.screen="offers"}function wa(n,e,t){return Math.round(8+n.eval*.35+(t?n.pop*.2:e*.15))}function Ui(n,e,t){let i=n.p;if(e==="path"&&(i.path=t),e==="stable"){let s=Di[t];i.stage==="school"&&(i.flags.debutY=i.year+1),i.stable=s.id,i.free=!1}if(e==="free"&&(i.free=!0,i.stable=null),e==="retire"){i.fate={ty:"retire",why:t,head:"\u5F15\u9000"},n.screen="retireNow";return}Fp(n)}function Fp(n){let e=n.p;e.year++,e.age++,e.season++,e.month=Ct[e.kind].turns[0],e.kind==="jockey"&&e.stage==="school"&&e.age>=18&&(e.stage="pro",e.eval=Math.max(e.eval,40),e.log.unshift(`${e.year}\u5E74 \u9A0E\u624B\u30C7\u30D3\u30E5\u30FC\uFF08${wn(e)?wn(e).n:"\u30D5\u30EA\u30FC"}\uFF09`)),e.kind==="horse"&&e.age===2&&e.log.unshift(`${e.year}\u5E74 \u30C8\u30EC\u30FC\u30CB\u30F3\u30B0\u30BB\u30F3\u30BF\u30FC\u306B\u5165\u53A9`),e.kind==="horse"&&e.age===1&&e.log.unshift(`${e.year}\u5E74 \u80B2\u6210\u7267\u5834\u3078`),e.yearLog=[],n.yr=Au(e),n.screen="camp"}function Op(n){let e=Math.max(...Object.values(n.peakSt||n.st));return n.kind==="horse"?Math.round(xn(n)*3+n.g1Wins*60+n.gradedWins*20+n.wins*6+n.earnings/2e3+e):Math.round(xn(n)*3+n.g1Wins*12+n.gradedWins*3+n.wins*.05+e)}function kp(n){return n>=800?"SS":n>=600?"S":n>=480?"A":n>=400?"B":n>=330?"C":n>=260?"D":n>=180?"E":n>=100?"F":"G"}function Ru(n){let e=Op(n),t={kind:n.kind,name:n.name,s:{...n.st},skills:[...n.skills],growth:n.growth,record:[...n.record],wins:n.wins,gradedWins:n.gradedWins,g1Wins:n.g1Wins,titles:[...n.titles],awards:[...n.awards],earnings:Math.round(n.earnings),score:e,rank:kp(e),retireReason:n.fate?n.fate.why:"\u5F15\u9000",died:n.fate&&n.fate.ty==="death",age:n.age,year:n.year};return n.kind==="horse"?{...t,coat:n.coat,sire:n.sire,dam:n.dam,apt:{...n.apt},style:n.style,races:n.races.slice(-60)}:{...t,silk:n.silk,races:n.rides,rides:n.rides,mockWins:n.mockWins,pref:n.pref}}function Cu(n){let e=n.p,t=dr(e),i=s=>t.find(r=>r.id===s);return e.kind==="horse"?e.inj>0||e.sta<35?i("rest")||t[0]:pr(e).filter(r=>!r.locked).length&&e.sta>=55?i("race"):e.sta>75?i("hard")||i("dash")||i("hillY")||t[0]:i("train")||i("graze")||i("break")||t[0]:e.inj>0||e.sta<35?i("rest"):e.sta>75&&Math.random()<.5?i("extra"):e.stage==="school"&&Math.random()<.25?i("mock"):i(e.stage==="pro"?"ridep":"ride")}function Iu(n){let e=va(n.evq[n.evi]),t=fr(n.p);if(e.id==="sp:surgery")return 0;let i=0,s=-1;return e.ch.forEach((r,a)=>{let o=ya(r,t)+Math.random()*.25;o>s&&(s=o,i=a)}),i}function Pu(n){let e=n.p,t=e.kind==="horse"?pr(e).filter(a=>!a.locked):Ma(e).filter(a=>!a.locked);if(!t.length)return null;let i=xn(e),s=a=>i-a.lv-(e.kind==="horse"&&{A:0,B:2,C:5,D:9,E:14,F:18,G:22}[a.surf==="\u829D"?e.apt.turf:e.apt.dirt]||0)+(a.g?4:0)+Math.random()*3,r=t.filter(a=>s(a)>2);return(r.length?r:t).sort((a,o)=>s(o)-s(a))[0]}function Lu(n,e){if(n.kind==="jockey"){let i=wn(n),r=42+n.eval*.32+(i?i.rep:45)*.12-e.lv;return r>=6?["\u25CE","\u6709\u529B\u99AC","up"]:r>=-2?["\u25CB","\u4E92\u89D2",""]:r>=-10?["\u25B3","\u4F0F\u5175","warn"]:["\xD7","\u4EBA\u6C17\u8584","down"]}let t=xn(n)-e.lv-(n.kind==="horse"&&{A:0,B:2,C:5,D:9,E:14,F:18,G:22}[e.surf==="\u829D"?n.apt.turf:n.apt.dirt]||0);return t>=8?["\u25CE","\u6709\u5229","up"]:t>=0?["\u25CB","\u4E92\u89D2",""]:t>=-8?["\u25B3","\u683C\u4E0A","warn"]:["\xD7","\u53B3\u3057\u3044","down"]}function Nu(n,e,t){let i=e.g==="G1"?14:e.g?12:10,s=Sa(n);return{race:e,fieldSize:i,player:{name:n.name,jname:t.name,h:{...n.st},j:{...t.s},apt:e.surf==="\u829D"?n.apt.turf:n.apt.dirt,cond:s,style:n.style,coat:n.coat,silk:t.silk??6,hsk:[...n.skills],jsk:[...t.skills||[]],tired:n.sta<30}}}function Du(n,e){let t=wn(n),i=t?t.rep:45,s,r;e.mock?(s=36,r=8):(s=be(42+n.eval*.32+i*.12+Ze(-6,6),30,95),r=e.g==="G1"?14:12),e.horse||(e.horse=e.mock?"\u5B66\u6821\u306E\u99AC":vs());let a=xt(["\u9003\u3052","\u5148\u884C","\u5148\u884C","\u5DEE\u3057","\u5DEE\u3057","\u8FFD\u8FBC"]),o={};for(let l of jn)o[l]=be(s+Ze(-6,6),10,99);return e.dist&&(o.sta=Math.max(o.sta,(e.dist*1.1-1100)/24+Ze(-4,8))),{race:e,fieldSize:r,player:{name:e.horse,jname:n.name,h:o,j:{...n.st},apt:"A",cond:Sa(n),style:n.pref&&Math.random()<.5?n.pref:a,coat:Bn(0,un.length-1),silk:n.silk,jsk:[...n.skills],tired:n.sta<30}}}var zt={Ls:500,R:160,width:26,finishU:400};zt.P=2*zt.Ls+2*Math.PI*zt.R;var{Ls:En,R:zn,P:bs}=zt,Ss=Math.PI*zn;function Lt(n,e,t={}){n=(n%bs+bs)%bs;let i,s,r,a,o,l,c=!1;if(n<En)i=-En/2+n,s=zn,r=1,a=0,o=0,l=1;else if(n<En+Ss){let h=(n-En)/zn;c=!0,o=Math.sin(h),l=Math.cos(h),i=En/2+zn*o,s=zn*l,r=Math.cos(h),a=-Math.sin(h)}else if(n<2*En+Ss)i=En/2-(n-En-Ss),s=-zn,r=-1,a=0,o=0,l=-1;else{let h=(n-2*En-Ss)/zn;c=!0,o=-Math.sin(h),l=-Math.cos(h),i=-En/2+zn*o,s=zn*l,r=-Math.cos(h),a=Math.sin(h)}return t.x=i+o*e,t.z=s+l*e,t.hx=r,t.hz=a,t.nx=o,t.nz=l,t.curve=c,t}function zp(n){return n=(n%bs+bs)%bs,n>=En&&n<En+Ss||n>=2*En+Ss}var Gp={\u9003\u3052:.927,\u5148\u884C:.913,\u5DEE\u3057:.9,\u8FFD\u8FBC:.889},Hp={\u9003\u3052:520,\u5148\u884C:620,\u5DEE\u3057:720,\u8FFD\u8FBC:780},Vp={\u9003\u3052:1,\u5148\u884C:1.6,\u5DEE\u3057:3.2,\u8FFD\u8FBC:4.6},Ou=16.5;function Wp(n){let e=n.h,t=n.j,i=ou[n.apt]??1,s=au[n.cond??2],r=n.hsk||[],a=n.jsk||[],o=(16.55+.022*e.spd)*i*s*(n.tired?.985:1),l=(1100+24*e.sta)*(r.includes("stayer")?1.06:1),c={...n,top:o,cap:l,energy:l,accel:.42+.008*e.pow,startAccel:3+.022*e.pow,eff:(1.06-.0012*e.wis)*(1.08-.0016*t.bal),whipDv:.4+.0055*t.whip,whipCd:Math.max(.35,.7-.0035*t.fit),whipDrain:1.38-.0018*t.fit,latSpeed:n.isPlayer?1.25+.016*t.tec:.85+.011*t.tec,cruise:Gp[n.style]??.905,spurtDist:(Hp[n.style]??650)*Ze(.9,1.12)*(1.15-t.jud/400),laneWant:Vp[n.style]??2,u:0,p:0,d:0,v:0,whipT:0,whipCool:0,whips:0,finished:!1,finishTime:0,gateDelay:Ze(.02,.38)*(1.25-(e.wis+t.jud)/260),blocked:!1,stride:Math.random()*10,aiTimer:Math.random()*.3,aiWhipT:0,bump:0};return r.includes("nige")&&(c.cruise+=.006),r.includes("smart")&&(c.eff*=.97),a.includes("eco")&&(c.eff*=.96),a.includes("whipm")&&(c.whipDv*=1.15),a.includes("meishu")&&(c.latSpeed*=1.25),a.includes("start")&&(c.gateDelay*=.5),c.sue=r.includes("sue")?1.01:1,c.konjo=r.includes("konjo")?2:1,c}function ic(n,e,t,i={}){let s=e.h,r=(s.spd*1.3+s.pow*.9+s.gut*.8+s.wis*.6+Math.min(s.sta,20+n.dist/40)*1)/4.6,a=lu(n.lv??40,r,i.blend??.4),o=(n.dist*1.13-1100)/24,l=[],c=["\u9003\u3052","\u5148\u884C","\u5148\u884C","\u5148\u884C","\u5DEE\u3057","\u5DEE\u3057","\u5DEE\u3057","\u8FFD\u8FBC","\u8FFD\u8FBC"];for(let h=0;h<t;h++){let u=h<3?Ze(0,5):Ze(-7,2),d=a+u,f={spd:be(d+Ze(-4,4),5,100),pow:be(d+Ze(-6,5),5,100),gut:be(d+Ze(-8,6),5,100),wis:be(d+Ze(-8,6),5,100),sta:be(Math.max(d+Ze(-10,6),o+Ze(-2,12)),5,105)},g=be(d*.8+Ze(-8,12),20,95),v={tec:g,whip:g+Ze(-8,8),bal:g+Ze(-8,8),fit:g+Ze(-8,8),jud:g+Ze(-8,8)};l.push({name:vs(),jname:ar(),h:f,j:v,apt:xt(["A","A","A","B","B"]),cond:xt([1,2,2,2,3,3]),style:xt(c),coat:Math.floor(Math.random()*un.length),silk:dn[(h*5+3)%dn.length]})}return l}function sc(n){let e=zt.finishU-n.dist,t=n.specs.map((s,r)=>Wp(s)),i=t.map((s,r)=>r).sort(()=>Math.random()-.5);return t.forEach((s,r)=>{s.gate=i[r]+1,s.u=e,s.d=1.1+i[r]*1.25,s.num=i[r]+1}),{dist:n.dist,surf:n.surf,u0:e,racers:t,t:0,started:!1,countdown:3.2,finishedCount:0,order:[],player:t.find(s=>s.isPlayer)||null,events:[]}}function Uu(n,e,t){let i=n.eff*(t?n.whipDrain:1);return e<=1?n.top*1.1:Ou*Math.pow(Math.max(0,n.energy)/(e*i),.25)}function rc(n,e,t){if(n.countdown>0){n.countdown-=e,n.countdown<=0&&(n.started=!0,n.events.push({type:"start"}));return}n.t+=e;let i=n.racers,s=n.player,r=[...i].sort((o,l)=>(l.finished?1e6-l.finishTime*100:l.p)-(o.finished?1e6-o.finishTime*100:o.p));r.forEach((o,l)=>{o.rank=l+1});let a=r[0].p;for(let o of i){let l=n.dist-o.p;if(n.t<o.gateDelay){o.v=0;continue}let c,h=o.energy/o.cap,u=o.whipT>0;if(o.finished)c=11;else if(o.isPlayer&&!o.ai)c=o.top*o.cruise,l<o.spurtDist*.9&&(c=be(Uu(o,l,!1),o.top*.86,o.top)),t&&t.whip&&o.whipCool<=0&&(Fu(o,n),u=!0);else{if(c=o.top*o.cruise,o.style==="\u9003\u3052"&&o.rank>1&&n.t<25&&h>.7&&(c+=.25),l<o.spurtDist){let p=l<460&&h>.04,m=Uu(o,l,p);c=Math.min(o.top*1+(p?o.whipDv:0),m),c=Math.max(c,o.top*.86),o.aiWhipT-=e,p&&o.aiWhipT<=0&&m>o.top*.97&&(Fu(o,n),o.aiWhipT=Ze(.45,.9),u=!0)}if(s&&!s.finished&&l<900&&!o.finished){let p=o.p-s.p;p>3?c-=.16*Math.min(1,(p-3)/8):p<-4&&p>-40&&(c+=.06)}}if(u&&o.whipT>0&&(c+=(o.isPlayer&&!o.ai?1.15:1)*o.whipDv*(o.energy>0?1:.3)+(l<400?o.h.gut*.002:0)),l<420&&!o.finished){for(let p of i)if(p!==o&&Math.abs(p.p-o.p)<1.6&&Math.abs(p.d-o.d)<2.6){c+=.12*o.konjo*o.h.gut/100;break}}o.energy<=0?c=Math.min(c,o.top*(.85+7e-4*o.h.gut)+(u?.15:0)):h<.12&&(c*=.95+5e-4*o.h.gut),l<o.spurtDist&&(c*=o.sue),c=Math.min(c,o.top*1.07),o.blocked=!1;for(let p of i){if(p===o)continue;let m=p.p-o.p;m>0&&m<2.7&&Math.abs(p.d-o.d)<.95&&c>p.v+.05&&(c=p.v+.05,o.blocked=!0)}let d=o.v<13?o.startAccel:c>o.v?o.accel:.9;if(o.v<c?o.v=Math.min(c,o.v+d*e):o.v=Math.max(c,o.v-d*e),o.bump>0&&(o.v-=.5*e,o.bump-=e),!o.finished){let p=o.eff*(o.whipT>0?o.whipDrain:1);o.energy-=Math.pow(o.v/Ou,4)*p*o.v*e,o.energy<0&&(o.energy=0)}o.whipT-=e,o.whipCool-=e;let f=zp(o.u)?zn/(zn+o.d):1,g=o.v*e*f;o.u+=g,o.p+=g,o.stride+=o.v*e,!o.finished&&o.p>=n.dist&&(o.finished=!0,o.finishTime=n.t-(o.p-n.dist)/Math.max(1,o.v),n.finishedCount++,n.order.push(o),o.pos=n.order.length,n.events.push({type:"finish",r:o}));let v=o.d;if(o.isPlayer&&!o.ai){let p=t?t.steer:0;v=o.d+p*o.latSpeed*e}else{o.aiTimer-=e,o.aiTimer<=0&&(o.aiTimer=.25,o.laneTarget=$p(o,n,l));let p=o.laneTarget??o.laneWant,m=o.latSpeed*(n.t<6?.5:1);v=o.d+be(p-o.d,-m*e,m*e)}o.d=v}for(let o=0;o<i.length;o++)for(let l=o+1;l<i.length;l++){let c=i[o],h=i[l];if(Math.abs(c.p-h.p)<2.4){let u=h.d-c.d,d=Math.abs(u);if(d<1.05){let f=(1.05-d)/2,g=u>=0?1:-1;c.d-=f*g,h.d+=f*g;for(let v of[c,h])v.bump<=0&&v.isPlayer&&n.events.push({type:"bump"}),v.bump=.25}}}for(let o of i)o.d=be(o.d,.7,zt.width-1.2);if(s&&!s.finished&&n.events.length<50){let o=n.dist-s.p;for(let l of[1e3,600,400,200])o<l&&!n["m"+l]&&n.dist>l+100&&(n["m"+l]=!0,n.events.push({type:"mark",m:l}))}return a}function Fu(n,e){n.whipT=.95,n.whipCool=n.whipCd,n.whips++,n.isPlayer&&e.events.push({type:"whip"})}function $p(n,e,t){let i=n.laneWant;if(e.t<4)return n.d;t<480&&(n.style==="\u5DEE\u3057"||n.style==="\u8FFD\u8FBC")&&(i=Math.max(n.d,3.5));let s=r=>{let a=99;for(let o of e.racers){if(o===n)continue;let l=o.p-n.p;l>-1.5&&l<6&&Math.abs(o.d-r)<1.1&&(a=Math.min(a,l))}return a};if(n.blocked||s(i)<6){let r=[n.d-1.3,n.d+1.3,n.d+2.6,n.d],a=n.d,o=-1;for(let l of r){if(l<.8||l>zt.width-2)continue;let c=s(l)-Math.abs(l-i)*.4;c>o&&(o=c,a=l)}i=a}return i}function ac(n,e){let t=n*e/2.4;return t<.05?"\u30CF\u30CA":t<.15?"\u30A2\u30BF\u30DE":t<.3?"\u30AF\u30D3":t<.6?"1/2":t<.85?"3/4":t<1.15?"1":t<1.4?"1 1/4":t<1.65?"1 1/2":t<1.9?"1 3/4":t<2.5?"2":t<3.5?"3":t<4.5?"4":t<6?"5":"\u5927\u5DEE"}function oc(n){let e=n.opponents?[...n.opponents]:[],t={...n.player,isPlayer:!0,ai:!0},i=n.fieldSize||12;e.length<i-1&&e.push(...ic(n.race,t,i-1-e.length));let s=sc({dist:n.race.dist,surf:n.race.surf,specs:[t,...e]});s.countdown=0,s.started=!0;let r=0;for(;s.finishedCount<s.racers.length&&r<400;)rc(s,1/20,null),r+=1/20,s.events.length=0;let a=s.racers.map(c=>({r:c,time:c.finished?c.finishTime:s.t+(s.dist-c.p)/Math.max(10,c.v)})).sort((c,h)=>c.time-h.time),o=a.map((c,h)=>({pos:h+1,name:c.r.name,jname:c.r.jname,num:c.r.num,time:c.time,isPlayer:!!c.r.isPlayer,margin:h===0?"":ac(c.time-a[h-1].time,16.5),silk:c.r.silk})),l=o.find(c=>c.isPlayer);return{pos:l.pos,field:o.length,time:l.time,whips:s.player.whips,list:o,jname:n.player.jname,auto:!0}}var ud=0,kc=1,dd=2;var os=1,fd=2,Ks=3,Yi=0,nn=1,jt=2,ls=0,js=1,Bc=2,zc=3,Gc=4,pd=5;var cs=100,md=101,gd=102,_d=103,xd=104,vd=200,yd=201,Md=202,Sd=203,Hc=204,Vc=205,bd=206,wd=207,Ed=208,Td=209,Ad=210,Rd=211,Cd=212,Id=213,Pd=214,ja=0,Ja=1,Za=2,Bs=3,Qa=4,eo=5,to=6,no=7,Wc=0,Ld=1,Nd=2,ni=0,$c=1,Xc=2,qc=3,qr=4,Yc=5,Kc=6,jc=7;var Jc=300,hs=301,Js=302,Ao=303,Ro=304,zs=1e3,Qn=1001,io=1002,Kt=1003,Dd=1004;var Yr=1005;var gn=1006,Co=1007;var Mi=1008;var yn=1009,Zc=1010,Qc=1011,Zs=1012,Io=1013,qn=1014,Un=1015,Yn=1016,Po=1017,Lo=1018,us=1020,eh=35902,th=35899,nh=1021,ih=1022,Kn=1023,gi=1026,Si=1027,No=1028,Do=1029,Ki=1030,Uo=1031;var Fo=1033,Kr=33776,jr=33777,Jr=33778,Zr=33779,Oo=35840,ko=35841,Bo=35842,zo=35843,Go=36196,Ho=37492,Vo=37496,Wo=37488,$o=37489,Qr=37490,Xo=37491,qo=37808,Yo=37809,Ko=37810,jo=37811,Jo=37812,Zo=37813,Qo=37814,el=37815,tl=37816,nl=37817,il=37818,sl=37819,rl=37820,al=37821,ol=36492,ll=36494,cl=36495,hl=36283,ul=36284,ea=36285,dl=36286;var br=2300,so=2301,Ya=2302,Ic=2303,Pc=2400,Lc=2401,Nc=2402;var Ud=3200;var fl=0,Fd=1,bi="",Gt="srgb",wr="srgb-linear",Er="linear",ht="srgb";var Ka=7680;var Od=519,kd=512,Bd=513,zd=514,sh=515,Gd=516,Hd=517,rh=518,ah=519,Vd=35044;var oh="300 es",Nn=2e3,Gs=2001;function Xp(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function qp(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Tr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Wd(){let n=Tr("canvas");return n.style.display="block",n}var ku={},Hs=null;function lh(...n){let e="THREE."+n.shift();Hs?Hs("log",e,...n):console.log(e,...n)}function $d(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function ke(...n){n=$d(n);let e="THREE."+n.shift();if(Hs)Hs("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Be(...n){n=$d(n);let e="THREE."+n.shift();if(Hs)Hs("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Sr(...n){let e=n.join(" ");e in ku||(ku[e]=!0,ke(...n))}function Xd(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}var qd={[ja]:ja,[Za]:to,[Qa]:Qa,[Bs]:eo,[Ja]:Ja,[to]:Za,[no]:no,[eo]:Bs},ei=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},on=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var lc=Math.PI/180,ro=180/Math.PI;function ta(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(on[n&255]+on[n>>8&255]+on[n>>16&255]+on[n>>24&255]+"-"+on[e&255]+on[e>>8&255]+"-"+on[e>>16&15|64]+on[e>>24&255]+"-"+on[t&63|128]+on[t>>8&255]+"-"+on[t>>16&255]+on[t>>24&255]+on[i&255]+on[i>>8&255]+on[i>>16&255]+on[i>>24&255]).toLowerCase()}function it(n,e,t){return Math.max(e,Math.min(t,n))}function Yp(n,e){return(n%e+e)%e}function cc(n,e,t){return(1-t)*n+t*e}function Yd(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function ch(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Kp(n,e){if(e.constructor===Float32Array)return n;let t=ch(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/t,-1)}function jp(n,e){if(e.constructor===Float32Array)return n;let t=ch(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*t)}var ph=class ph{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(it(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(it(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};ph.prototype.isVector2=!0;var Qe=ph,vn=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3],d=r[a+0],f=r[a+1],g=r[a+2],v=r[a+3];if(u!==v||l!==d||c!==f||h!==g){let p=l*d+c*f+h*g+u*v;p<0&&(d=-d,f=-f,g=-g,v=-v,p=-p);let m=1-o;if(p<.9995){let M=Math.acos(p),R=Math.sin(M);m=Math.sin(m*M)/R,o=Math.sin(o*M)/R,l=l*m+d*o,c=c*m+f*o,h=h*m+g*o,u=u*m+v*o}else{l=l*m+d*o,c=c*m+f*o,h=h*m+g*o,u=u*m+v*o;let M=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=M,c*=M,h*=M,u*=M}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,s,r,a){let o=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return e[t]=o*g+h*u+l*f-c*d,e[t+1]=l*g+h*d+c*u-o*f,e[t+2]=c*g+h*f+o*d-l*u,e[t+3]=h*g-o*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(s/2),u=o(r/2),d=l(i/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:ke("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=i+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(i>o&&i>u){let f=2*Math.sqrt(1+i-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>u){let f=2*Math.sqrt(1+o-i-u);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-i-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(it(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-i*c,this._z=r*h+a*c+i*l-s*o,this._w=a*h-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},mh=class mh{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Bu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Bu.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*i),h=2*(o*t-r*s),u=2*(r*i-a*t);return this.x=t+l*c+a*u-o*h,this.y=i+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this.z=it(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this.z=it(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(it(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return hc.copy(this).projectOnVector(e),this.sub(hc)}reflect(e){return this.sub(hc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(it(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};mh.prototype.isVector3=!0;var O=mh,hc=new O,Bu=new vn,gh=class gh{constructor(e,t,i,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c)}set(e,t,i,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],f=i[5],g=i[8],v=s[0],p=s[3],m=s[6],M=s[1],R=s[4],b=s[7],A=s[2],T=s[5],_=s[8];return r[0]=a*v+o*M+l*A,r[3]=a*p+o*R+l*T,r[6]=a*m+o*b+l*_,r[1]=c*v+h*M+u*A,r[4]=c*p+h*R+u*T,r[7]=c*m+h*b+u*_,r[2]=d*v+f*M+g*A,r[5]=d*p+f*R+g*T,r[8]=d*m+f*b+g*_,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-i*r*h+i*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*r,f=c*r-a*l,g=t*u+i*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return e[0]=u*v,e[1]=(s*c-h*i)*v,e[2]=(o*i-s*a)*v,e[3]=d*v,e[4]=(h*t-s*l)*v,e[5]=(s*r-o*t)*v,e[6]=f*v,e[7]=(i*l-c*t)*v,e[8]=(a*t-i*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return Sr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(uc.makeScale(e,t)),this}rotate(e){return Sr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(uc.makeRotation(-e)),this}translate(e,t){return Sr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(uc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};gh.prototype.isMatrix3=!0;var ze=gh,uc=new ze,zu=new ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Gu=new ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Jp(){let n={enabled:!0,workingColorSpace:wr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ht&&(s.r=mi(s.r),s.g=mi(s.g),s.b=mi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ht&&(s.r=ks(s.r),s.g=ks(s.g),s.b=ks(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===bi?Er:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[wr]:{primaries:e,whitePoint:i,transfer:Er,toXYZ:zu,fromXYZ:Gu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Gt},outputColorSpaceConfig:{drawingBufferColorSpace:Gt}},[Gt]:{primaries:e,whitePoint:i,transfer:ht,toXYZ:zu,fromXYZ:Gu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Gt}}}),n}var nt=Jp();function mi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ks(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var ws,ao=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ws===void 0&&(ws=Tr("canvas")),ws.width=e.width,ws.height=e.height;let s=ws.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=ws}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Tr("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=mi(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(mi(t[i]/255)*255):t[i]=mi(t[i]);return{data:t,width:e.width,height:e.height}}else return ke("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Zp=0,Vs=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Zp++}),this.uuid=ta(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(dc(s[a].image)):r.push(dc(s[a]))}else r=dc(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function dc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?ao.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(ke("Texture: Unable to serialize Texture."),{})}var Qp=0,fc=new O,_n=class n extends ei{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=Qn,s=Qn,r=gn,a=Mi,o=Kn,l=yn,c=n.DEFAULT_ANISOTROPY,h=bi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Qp++}),this.uuid=ta(),this.name="",this.source=new Vs(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Qe(0,0),this.repeat=new Qe(1,1),this.center=new Qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ze,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(fc).x}get height(){return this.source.getSize(fc).y}get depth(){return this.source.getSize(fc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){ke(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){ke(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Jc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case zs:e.x=e.x-Math.floor(e.x);break;case Qn:e.x=e.x<0?0:1;break;case io:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case zs:e.y=e.y-Math.floor(e.y);break;case Qn:e.y=e.y<0?0:1;break;case io:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};_n.DEFAULT_IMAGE=null;_n.DEFAULT_MAPPING=Jc;_n.DEFAULT_ANISOTROPY=1;var _h=class _h{constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],v=l[2],p=l[6],m=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(g+p)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let R=(c+1)/2,b=(f+1)/2,A=(m+1)/2,T=(h+d)/4,_=(u+v)/4,S=(g+p)/4;return R>b&&R>A?R<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(R),s=T/i,r=_/i):b>A?b<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),i=T/s,r=S/s):A<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),i=_/r,s=S/r),this.set(i,s,r,t),this}let M=Math.sqrt((p-g)*(p-g)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(M)<.001&&(M=1),this.x=(p-g)/M,this.y=(u-v)/M,this.z=(d-h)/M,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this.z=it(this.z,e.z,t.z),this.w=it(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this.z=it(this.z,e,t),this.w=it(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(it(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};_h.prototype.isVector4=!0;var Et=_h,oo=class extends ei{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:gn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Et(0,0,e,t),this.scissorTest=!1,this.viewport=new Et(0,0,e,t),this.textures=[];let s=i.count;for(let r=0;r<s;r++)this.textures[r]=new _n({width:e,height:t,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:gn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Vs(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Rn=class extends oo{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Ar=class extends _n{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=Qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var lo=class extends _n{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=Qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var To=class To{constructor(e,t,i,s,r,a,o,l,c,h,u,d,f,g,v,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c,h,u,d,f,g,v,p)}set(e,t,i,s,r,a,o,l,c,h,u,d,f,g,v,p){let m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=d,m[3]=f,m[7]=g,m[11]=v,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new To().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,s=1/Es.setFromMatrixColumn(e,0).length(),r=1/Es.setFromMatrixColumn(e,1).length(),a=1/Es.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=a*h,f=a*u,g=o*h,v=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+g*c,t[5]=d-v*c,t[9]=-o*l,t[2]=v-d*c,t[6]=g+f*c,t[10]=a*l}else if(e.order==="YXZ"){let d=l*h,f=l*u,g=c*h,v=c*u;t[0]=d+v*o,t[4]=g*o-f,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-g,t[6]=v+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*h,f=l*u,g=c*h,v=c*u;t[0]=d-v*o,t[4]=-a*u,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*h,t[9]=v-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*h,f=a*u,g=o*h,v=o*u;t[0]=l*h,t[4]=g*c-f,t[8]=d*c+v,t[1]=l*u,t[5]=v*c+d,t[9]=f*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,f=a*c,g=o*l,v=o*c;t[0]=l*h,t[4]=v-d*u,t[8]=g*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*u+g,t[10]=d-v*u}else if(e.order==="XZY"){let d=a*l,f=a*c,g=o*l,v=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+v,t[5]=a*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=o*h,t[10]=v*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(em,e,tm)}lookAt(e,t,i){let s=this.elements;return Tn.subVectors(e,t),Tn.lengthSq()===0&&(Tn.z=1),Tn.normalize(),Fi.crossVectors(i,Tn),Fi.lengthSq()===0&&(Math.abs(i.z)===1?Tn.x+=1e-4:Tn.z+=1e-4,Tn.normalize(),Fi.crossVectors(i,Tn)),Fi.normalize(),Ea.crossVectors(Tn,Fi),s[0]=Fi.x,s[4]=Ea.x,s[8]=Tn.x,s[1]=Fi.y,s[5]=Ea.y,s[9]=Tn.y,s[2]=Fi.z,s[6]=Ea.z,s[10]=Tn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],f=i[13],g=i[2],v=i[6],p=i[10],m=i[14],M=i[3],R=i[7],b=i[11],A=i[15],T=s[0],_=s[4],S=s[8],N=s[12],C=s[1],D=s[5],F=s[9],V=s[13],P=s[2],K=s[6],j=s[10],H=s[14],q=s[3],B=s[7],W=s[11],X=s[15];return r[0]=a*T+o*C+l*P+c*q,r[4]=a*_+o*D+l*K+c*B,r[8]=a*S+o*F+l*j+c*W,r[12]=a*N+o*V+l*H+c*X,r[1]=h*T+u*C+d*P+f*q,r[5]=h*_+u*D+d*K+f*B,r[9]=h*S+u*F+d*j+f*W,r[13]=h*N+u*V+d*H+f*X,r[2]=g*T+v*C+p*P+m*q,r[6]=g*_+v*D+p*K+m*B,r[10]=g*S+v*F+p*j+m*W,r[14]=g*N+v*V+p*H+m*X,r[3]=M*T+R*C+b*P+A*q,r[7]=M*_+R*D+b*K+A*B,r[11]=M*S+R*F+b*j+A*W,r[15]=M*N+R*V+b*H+A*X,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],v=e[7],p=e[11],m=e[15],M=l*f-c*d,R=o*f-c*u,b=o*d-l*u,A=a*f-c*h,T=a*d-l*h,_=a*u-o*h;return t*(v*M-p*R+m*b)-i*(g*M-p*A+m*T)+s*(g*R-v*A+m*_)-r*(g*b-v*T+p*_)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(a*h-o*c)-i*(r*h-o*l)+s*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],v=e[13],p=e[14],m=e[15],M=t*o-i*a,R=t*l-s*a,b=t*c-r*a,A=i*l-s*o,T=i*c-r*o,_=s*c-r*l,S=h*v-u*g,N=h*p-d*g,C=h*m-f*g,D=u*p-d*v,F=u*m-f*v,V=d*m-f*p,P=M*V-R*F+b*D+A*C-T*N+_*S;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let K=1/P;return e[0]=(o*V-l*F+c*D)*K,e[1]=(s*F-i*V-r*D)*K,e[2]=(v*_-p*T+m*A)*K,e[3]=(d*T-u*_-f*A)*K,e[4]=(l*C-a*V-c*N)*K,e[5]=(t*V-s*C+r*N)*K,e[6]=(p*b-g*_-m*R)*K,e[7]=(h*_-d*b+f*R)*K,e[8]=(a*F-o*C+c*S)*K,e[9]=(i*C-t*F-r*S)*K,e[10]=(g*T-v*b+m*M)*K,e[11]=(u*b-h*T-f*M)*K,e[12]=(o*N-a*D-l*S)*K,e[13]=(t*D-i*N+s*S)*K,e[14]=(v*R-g*A-p*M)*K,e[15]=(h*A-u*R+d*M)*K,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+i,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,d=r*c,f=r*h,g=r*u,v=a*h,p=a*u,m=o*u,M=l*c,R=l*h,b=l*u,A=i.x,T=i.y,_=i.z;return s[0]=(1-(v+m))*A,s[1]=(f+b)*A,s[2]=(g-R)*A,s[3]=0,s[4]=(f-b)*T,s[5]=(1-(d+m))*T,s[6]=(p+M)*T,s[7]=0,s[8]=(g+R)*_,s[9]=(p-M)*_,s[10]=(1-(d+v))*_,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let a=Es.set(s[0],s[1],s[2]).length(),o=Es.set(s[4],s[5],s[6]).length(),l=Es.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Gn.copy(this);let c=1/a,h=1/o,u=1/l;return Gn.elements[0]*=c,Gn.elements[1]*=c,Gn.elements[2]*=c,Gn.elements[4]*=h,Gn.elements[5]*=h,Gn.elements[6]*=h,Gn.elements[8]*=u,Gn.elements[9]*=u,Gn.elements[10]*=u,t.setFromRotationMatrix(Gn),i.x=a,i.y=o,i.z=l,this}makePerspective(e,t,i,s,r,a,o=Nn,l=!1){let c=this.elements,h=2*r/(t-e),u=2*r/(i-s),d=(t+e)/(t-e),f=(i+s)/(i-s),g,v;if(l)g=r/(a-r),v=a*r/(a-r);else if(o===Nn)g=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===Gs)g=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=Nn,l=!1){let c=this.elements,h=2/(t-e),u=2/(i-s),d=-(t+e)/(t-e),f=-(i+s)/(i-s),g,v;if(l)g=1/(a-r),v=a/(a-r);else if(o===Nn)g=-2/(a-r),v=-(a+r)/(a-r);else if(o===Gs)g=-1/(a-r),v=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};To.prototype.isMatrix4=!0;var rt=To,Es=new O,Gn=new rt,em=new O(0,0,0),tm=new O(1,1,1),Fi=new O,Ea=new O,Tn=new O,Hu=new rt,Vu=new vn,$n=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(it(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-it(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(it(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-it(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(it(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-it(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:ke("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Hu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Hu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Vu.setFromEuler(this),this.setFromQuaternion(Vu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};$n.DEFAULT_ORDER="XYZ";var Rr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},nm=0,Wu=new O,Ts=new vn,hi=new rt,Ta=new O,gr=new O,im=new O,sm=new vn,$u=new O(1,0,0),Xu=new O(0,1,0),qu=new O(0,0,1),Yu={type:"added"},rm={type:"removed"},As={type:"childadded",child:null},pc={type:"childremoved",child:null},en=class n extends ei{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:nm++}),this.uuid=ta(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new O,t=new $n,i=new vn,s=new O(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new rt},normalMatrix:{value:new ze}}),this.matrix=new rt,this.matrixWorld=new rt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Rr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ts.setFromAxisAngle(e,t),this.quaternion.multiply(Ts),this}rotateOnWorldAxis(e,t){return Ts.setFromAxisAngle(e,t),this.quaternion.premultiply(Ts),this}rotateX(e){return this.rotateOnAxis($u,e)}rotateY(e){return this.rotateOnAxis(Xu,e)}rotateZ(e){return this.rotateOnAxis(qu,e)}translateOnAxis(e,t){return Wu.copy(e).applyQuaternion(this.quaternion),this.position.add(Wu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis($u,e)}translateY(e){return this.translateOnAxis(Xu,e)}translateZ(e){return this.translateOnAxis(qu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(hi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ta.copy(e):Ta.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),gr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hi.lookAt(gr,Ta,this.up):hi.lookAt(Ta,gr,this.up),this.quaternion.setFromRotationMatrix(hi),s&&(hi.extractRotation(s.matrixWorld),Ts.setFromRotationMatrix(hi),this.quaternion.premultiply(Ts.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Be("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Yu),As.child=e,this.dispatchEvent(As),As.child=null):Be("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(rm),pc.child=e,this.dispatchEvent(pc),pc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),hi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),hi.multiply(e.parent.matrixWorld)),e.applyMatrix4(hi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Yu),As.child=e,this.dispatchEvent(As),As.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gr,e,im),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gr,sm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};en.DEFAULT_UP=new O(0,1,0);en.DEFAULT_MATRIX_AUTO_UPDATE=!0;en.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Nt=class extends en{constructor(){super(),this.isGroup=!0,this.type="Group"}},am={type:"move"},Ws=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Nt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Nt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Nt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let v of e.hand.values()){let p=t.getJointPose(v,i),m=this._getHandJoint(c,v);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(am)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Nt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Kd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Oi={h:0,s:0,l:0},Aa={h:0,s:0,l:0};function mc(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var Je=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Gt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=nt.workingColorSpace){return this.r=e,this.g=t,this.b=i,nt.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=nt.workingColorSpace){if(e=Yp(e,1),t=it(t,0,1),i=it(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=mc(a,r,e+1/3),this.g=mc(a,r,e),this.b=mc(a,r,e-1/3)}return nt.colorSpaceToWorking(this,s),this}setStyle(e,t=Gt){function i(r){r!==void 0&&parseFloat(r)<1&&ke("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:ke("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);ke("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Gt){let i=Kd[e.toLowerCase()];return i!==void 0?this.setHex(i,t):ke("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=mi(e.r),this.g=mi(e.g),this.b=mi(e.b),this}copyLinearToSRGB(e){return this.r=ks(e.r),this.g=ks(e.g),this.b=ks(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Gt){return nt.workingToColorSpace(ln.copy(this),e),Math.round(it(ln.r*255,0,255))*65536+Math.round(it(ln.g*255,0,255))*256+Math.round(it(ln.b*255,0,255))}getHexString(e=Gt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=nt.workingColorSpace){nt.workingToColorSpace(ln.copy(this),t);let i=ln.r,s=ln.g,r=ln.b,a=Math.max(i,s,r),o=Math.min(i,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=nt.workingColorSpace){return nt.workingToColorSpace(ln.copy(this),t),e.r=ln.r,e.g=ln.g,e.b=ln.b,e}getStyle(e=Gt){nt.workingToColorSpace(ln.copy(this),e);let t=ln.r,i=ln.g,s=ln.b;return e!==Gt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Oi),this.setHSL(Oi.h+e,Oi.s+t,Oi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Oi),e.getHSL(Aa);let i=cc(Oi.h,Aa.h,t),s=cc(Oi.s,Aa.s,t),r=cc(Oi.l,Aa.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ln=new Je;Je.NAMES=Kd;var Cr=class n{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Je(e),this.near=t,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Ir=class extends en{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $n,this.environmentIntensity=1,this.environmentRotation=new $n,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Hn=new O,ui=new O,gc=new O,di=new O,Rs=new O,Cs=new O,Ku=new O,_c=new O,xc=new O,vc=new O,yc=new Et,Mc=new Et,Sc=new Et,Gi=class n{constructor(e=new O,t=new O,i=new O){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Hn.subVectors(e,t),s.cross(Hn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Hn.subVectors(s,t),ui.subVectors(i,t),gc.subVectors(e,t);let a=Hn.dot(Hn),o=Hn.dot(ui),l=Hn.dot(gc),c=ui.dot(ui),h=ui.dot(gc),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-o*h)*d,g=(a*h-o*l)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,di)===null?!1:di.x>=0&&di.y>=0&&di.x+di.y<=1}static getInterpolation(e,t,i,s,r,a,o,l){return this.getBarycoord(e,t,i,s,di)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,di.x),l.addScaledVector(a,di.y),l.addScaledVector(o,di.z),l)}static getInterpolatedAttribute(e,t,i,s,r,a){return yc.setScalar(0),Mc.setScalar(0),Sc.setScalar(0),yc.fromBufferAttribute(e,t),Mc.fromBufferAttribute(e,i),Sc.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(yc,r.x),a.addScaledVector(Mc,r.y),a.addScaledVector(Sc,r.z),a}static isFrontFacing(e,t,i,s){return Hn.subVectors(i,t),ui.subVectors(e,t),Hn.cross(ui).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Hn.subVectors(this.c,this.b),ui.subVectors(this.a,this.b),Hn.cross(ui).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,a,o;Rs.subVectors(s,i),Cs.subVectors(r,i),_c.subVectors(e,i);let l=Rs.dot(_c),c=Cs.dot(_c);if(l<=0&&c<=0)return t.copy(i);xc.subVectors(e,s);let h=Rs.dot(xc),u=Cs.dot(xc);if(h>=0&&u<=h)return t.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0&&l-h>0)return a=l/(l-h),t.copy(i).addScaledVector(Rs,a);vc.subVectors(e,r);let f=Rs.dot(vc),g=Cs.dot(vc);if(g>=0&&f<=g)return t.copy(r);let v=f*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(Cs,o);let p=h*g-f*u;if(p<=0&&u-h>=0&&f-g>=0)return Ku.subVectors(r,s),o=(u-h)/(u-h+(f-g)),t.copy(s).addScaledVector(Ku,o);let m=1/(p+v+d);return a=v*m,o=d*m,t.copy(i).addScaledVector(Rs,a).addScaledVector(Cs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},ti=class{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Vn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Vn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Vn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Vn):Vn.fromBufferAttribute(r,a),Vn.applyMatrix4(e.matrixWorld),this.expandByPoint(Vn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ra.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ra.copy(i.boundingBox)),Ra.applyMatrix4(e.matrixWorld),this.union(Ra)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Vn),Vn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(_r),Ca.subVectors(this.max,_r),Is.subVectors(e.a,_r),Ps.subVectors(e.b,_r),Ls.subVectors(e.c,_r),ki.subVectors(Ps,Is),Bi.subVectors(Ls,Ps),is.subVectors(Is,Ls);let t=[0,-ki.z,ki.y,0,-Bi.z,Bi.y,0,-is.z,is.y,ki.z,0,-ki.x,Bi.z,0,-Bi.x,is.z,0,-is.x,-ki.y,ki.x,0,-Bi.y,Bi.x,0,-is.y,is.x,0];return!bc(t,Is,Ps,Ls,Ca)||(t=[1,0,0,0,1,0,0,0,1],!bc(t,Is,Ps,Ls,Ca))?!1:(Ia.crossVectors(ki,Bi),t=[Ia.x,Ia.y,Ia.z],bc(t,Is,Ps,Ls,Ca))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Vn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Vn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(fi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),fi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),fi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),fi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),fi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),fi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),fi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),fi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(fi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},fi=[new O,new O,new O,new O,new O,new O,new O,new O],Vn=new O,Ra=new ti,Is=new O,Ps=new O,Ls=new O,ki=new O,Bi=new O,is=new O,_r=new O,Ca=new O,Ia=new O,ss=new O;function bc(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){ss.fromArray(n,r);let o=s.x*Math.abs(ss.x)+s.y*Math.abs(ss.y)+s.z*Math.abs(ss.z),l=e.dot(ss),c=t.dot(ss),h=i.dot(ss);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Ot=new O,Pa=new Qe,om=0,mn=class extends ei{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:om++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Vd,this.updateRanges=[],this.gpuType=Un,this.version=0,this._normalizationScale=e!==void 0?ch(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Pa.fromBufferAttribute(this,t),Pa.applyMatrix3(e),this.setXY(t,Pa.x,Pa.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix3(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix4(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ot.fromBufferAttribute(this,t),Ot.applyNormalMatrix(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ot.fromBufferAttribute(this,t),Ot.transformDirection(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Kp(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):jp(e,this.array)}};var Pr=class extends mn{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Lr=class extends mn{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var lt=class extends mn{constructor(e,t,i){super(new Float32Array(e),t,i)}},lm=new ti,xr=new O,wc=new O,_i=class{constructor(e=new O,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):lm.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;xr.subVectors(e,this.center);let t=xr.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(xr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(wc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(xr.copy(e.center).add(wc)),this.expandByPoint(xr.copy(e.center).sub(wc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},cm=0,Ln=new rt,Ec=new en,Ns=new O,An=new ti,vr=new ti,Yt=new O,Ht=class n extends ei{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:cm++}),this.uuid=ta(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Xp(e)?Lr:Pr)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new ze().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Ln.makeRotationFromQuaternion(e),this.applyMatrix4(Ln),this}rotateX(e){return Ln.makeRotationX(e),this.applyMatrix4(Ln),this}rotateY(e){return Ln.makeRotationY(e),this.applyMatrix4(Ln),this}rotateZ(e){return Ln.makeRotationZ(e),this.applyMatrix4(Ln),this}translate(e,t,i){return Ln.makeTranslation(e,t,i),this.applyMatrix4(Ln),this}scale(e,t,i){return Ln.makeScale(e,t,i),this.applyMatrix4(Ln),this}lookAt(e){return Ec.lookAt(e),Ec.updateMatrix(),this.applyMatrix4(Ec.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ns).negate(),this.translate(Ns.x,Ns.y,Ns.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new lt(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&ke("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ti);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Be("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];An.setFromBufferAttribute(r),this.morphTargetsRelative?(Yt.addVectors(this.boundingBox.min,An.min),this.boundingBox.expandByPoint(Yt),Yt.addVectors(this.boundingBox.max,An.max),this.boundingBox.expandByPoint(Yt)):(this.boundingBox.expandByPoint(An.min),this.boundingBox.expandByPoint(An.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Be('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _i);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Be("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){let i=this.boundingSphere.center;if(An.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];vr.setFromBufferAttribute(o),this.morphTargetsRelative?(Yt.addVectors(An.min,vr.min),An.expandByPoint(Yt),Yt.addVectors(An.max,vr.max),An.expandByPoint(Yt)):(An.expandByPoint(vr.min),An.expandByPoint(vr.max))}An.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)Yt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Yt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Yt.fromBufferAttribute(o,c),l&&(Ns.fromBufferAttribute(e,c),Yt.add(Ns)),s=Math.max(s,i.distanceToSquared(Yt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Be('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Be("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new mn(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let o=[],l=[],c=new Uint8Array(i.count);for(let N=0;N<i.count;N++)o[N]=new O,l[N]=new O;let h=new O,u=new O,d=new O,f=new Qe,g=new Qe,v=new Qe,p=new O,m=new O;function M(N,C,D){c[N]=c[C]=c[D]=1,h.fromBufferAttribute(i,N),u.fromBufferAttribute(i,C),d.fromBufferAttribute(i,D),f.fromBufferAttribute(r,N),g.fromBufferAttribute(r,C),v.fromBufferAttribute(r,D),u.sub(h),d.sub(h),g.sub(f),v.sub(f);let F=1/(g.x*v.y-v.x*g.y);isFinite(F)&&(p.copy(u).multiplyScalar(v.y).addScaledVector(d,-g.y).multiplyScalar(F),m.copy(d).multiplyScalar(g.x).addScaledVector(u,-v.x).multiplyScalar(F),o[N].add(p),o[C].add(p),o[D].add(p),l[N].add(m),l[C].add(m),l[D].add(m))}let R=this.groups;R.length===0&&(R=[{start:0,count:e.count}]);for(let N=0,C=R.length;N<C;++N){let D=R[N],F=D.start,V=D.count;for(let P=F,K=F+V;P<K;P+=3)M(e.getX(P+0),e.getX(P+1),e.getX(P+2))}let b=new O,A=new O,T=new O,_=new O;function S(N){T.fromBufferAttribute(s,N),_.copy(T);let C=o[N];b.copy(C),b.sub(T.multiplyScalar(T.dot(C))).normalize(),A.crossVectors(_,C);let F=A.dot(l[N])<0?-1:1;a.setXYZW(N,b.x,b.y,b.z,F)}for(let N=0,C=i.count;N<C;++N)c[N]&&S(N);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new mn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);let s=new O,r=new O,a=new O,o=new O,l=new O,c=new O,h=new O,u=new O;if(e)for(let d=0,f=e.count;d<f;d+=3){let g=e.getX(d+0),v=e.getX(d+1),p=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,p),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,p),o.add(h),l.add(h),c.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Yt.fromBufferAttribute(e,t),Yt.normalize(),e.setXYZ(t,Yt.x,Yt.y,Yt.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),f=0,g=0;for(let v=0,p=l.length;v<p;v++){o.isInterleavedBufferAttribute?f=l[v]*o.data.stride+o.offset:f=l[v]*h;for(let m=0;m<h;m++)d[g++]=c[f++]}return new mn(d,h,u)}if(this.index===null)return ke("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,i);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=e(d,i);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Tc=new O,hm=new O,um=new ze,Wn=class{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=Tc.subVectors(i,t).cross(hm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let s=e.delta(Tc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||um.getNormalMatrix(e),s=this.coplanarPoint(Tc).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},dm=0,xi=class extends ei{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:dm++}),this.uuid=ta(),this.name="",this.type="Material",this.blending=js,this.side=Yi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Hc,this.blendDst=Vc,this.blendEquation=cs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Je(0,0,0),this.blendAlpha=0,this.depthFunc=Bs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Od,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ka,this.stencilZFail=Ka,this.stencilZPass=Ka,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){ke(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){ke(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Je().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new Wn().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Qe().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Qe().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var pi=new O,Ac=new O,La=new O,Na=new O,Nr=class{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,pi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=pi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(pi.copy(this.origin).addScaledVector(this.direction,t),pi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Ac.copy(e).add(t).multiplyScalar(.5),La.copy(t).sub(e).normalize(),Na.copy(this.origin).sub(Ac);let r=e.distanceTo(t)*.5,a=-this.direction.dot(La),o=Na.dot(this.direction),l=-Na.dot(La),c=Na.lengthSq(),h=Math.abs(1-a*a),u,d,f,g;if(h>0)if(u=a*l-o,d=a*o-l,g=r*h,u>=0)if(d>=-g)if(d<=g){let v=1/h;u*=v,d*=v,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Ac).addScaledVector(La,d),f}intersectSphere(e,t){if(e.radius<0)return null;pi.subVectors(e.center,this.origin);let i=pi.dot(this.direction),s=pi.dot(pi)-i*i,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,pi)!==null}intersectTriangle(e,t,i,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,g=t.x-a.x,v=t.y-a.y,p=t.z-a.z,m=i.x-a.x,M=i.y-a.y,R=i.z-a.z,b=Math.abs(l),A=Math.abs(c),T=Math.abs(h),_,S,N,C,D,F,V,P,K,j,H,q;if(b>=A&&b>=T?(N=l,F=u,K=g,q=m,l>=0?(_=c,S=h,C=d,D=f,V=v,P=p,j=M,H=R):(_=h,S=c,C=f,D=d,V=p,P=v,j=R,H=M)):A>=T?(N=c,F=d,K=v,q=M,c>=0?(_=h,S=l,C=f,D=u,V=p,P=g,j=R,H=m):(_=l,S=h,C=u,D=f,V=g,P=p,j=m,H=R)):(N=h,F=f,K=p,q=R,h>=0?(_=l,S=c,C=u,D=d,V=g,P=v,j=m,H=M):(_=c,S=l,C=d,D=u,V=v,P=g,j=M,H=m)),N===0)return null;let B=_/N,W=S/N,X=1/N,oe=C-B*F,Ie=D-W*F,J=V-B*K,re=P-W*K,_e=j-B*q,Pe=H-W*q,ie=_e*re-Pe*J,De=oe*Pe-Ie*_e,dt=J*Ie-re*oe;if(s){if(ie<0||De<0||dt<0)return null}else if((ie<0||De<0||dt<0)&&(ie>0||De>0||dt>0))return null;let Ue=ie+De+dt;if(Ue===0)return null;let at=X*(ie*F+De*K+dt*q);return(Ue>0?at<0:at>0)?null:this.at(at/Ue,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Xn=class extends xi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $n,this.combine=Wc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},ju=new rt,rs=new Nr,Da=new _i,Ju=new O,Ua=new O,Fa=new O,Oa=new O,Rc=new O,ka=new O,Zu=new O,Ba=new O,we=class extends en{constructor(e=new Ht,t=new Xn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){ka.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(Rc.fromBufferAttribute(u,e),a?ka.addScaledVector(Rc,h):ka.addScaledVector(Rc.sub(t),h))}t.add(ka)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Da.copy(i.boundingSphere),Da.applyMatrix4(r),rs.copy(e.ray).recast(e.near),!(Da.containsPoint(rs.origin)===!1&&(rs.intersectSphere(Da,Ju)===null||rs.origin.distanceToSquared(Ju)>(e.far-e.near)**2))&&(ju.copy(r).invert(),rs.copy(e.ray).applyMatrix4(ju),!(i.boundingBox!==null&&rs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,rs)))}_computeIntersections(e,t,i){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){let p=d[g],m=a[p.materialIndex],M=Math.max(p.start,f.start),R=Math.min(o.count,Math.min(p.start+p.count,f.start+f.count));for(let b=M,A=R;b<A;b+=3){let T=o.getX(b),_=o.getX(b+1),S=o.getX(b+2);s=za(this,m,e,i,c,h,u,T,_,S),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);for(let p=g,m=v;p<m;p+=3){let M=o.getX(p),R=o.getX(p+1),b=o.getX(p+2);s=za(this,a,e,i,c,h,u,M,R,b),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){let p=d[g],m=a[p.materialIndex],M=Math.max(p.start,f.start),R=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let b=M,A=R;b<A;b+=3){let T=b,_=b+1,S=b+2;s=za(this,m,e,i,c,h,u,T,_,S),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let p=g,m=v;p<m;p+=3){let M=p,R=p+1,b=p+2;s=za(this,a,e,i,c,h,u,M,R,b),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}};function fm(n,e,t,i,s,r,a,o){let l;if(e.side===nn?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,e.side===Yi,o),l===null)return null;Ba.copy(o),Ba.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(Ba);return c<t.near||c>t.far?null:{distance:c,point:Ba.clone(),object:n}}function za(n,e,t,i,s,r,a,o,l,c){n.getVertexPosition(o,Ua),n.getVertexPosition(l,Fa),n.getVertexPosition(c,Oa);let h=fm(n,e,t,i,Ua,Fa,Oa,Zu);if(h){let u=new O;Gi.getBarycoord(Zu,Ua,Fa,Oa,u),s&&(h.uv=Gi.getInterpolatedAttribute(s,o,l,c,u,new Qe)),r&&(h.uv1=Gi.getInterpolatedAttribute(r,o,l,c,u,new Qe)),a&&(h.normal=Gi.getInterpolatedAttribute(a,o,l,c,u,new O),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new O,materialIndex:0};Gi.getNormal(Ua,Fa,Oa,d.normal),h.face=d,h.barycoord=u}return h}var Dr=class extends _n{constructor(e=null,t=1,i=1,s,r,a,o,l,c=Kt,h=Kt,u,d){super(null,a,o,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var $s=class extends mn{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Ds=new rt,Qu=new rt,Ga=[],ed=new ti,pm=new rt,yr=new we,Mr=new _i,Hi=class extends we{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new $s(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,pm)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ti),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ds),ed.copy(e.boundingBox).applyMatrix4(Ds),this.boundingBox.union(ed)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new _i),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ds),Mr.copy(e.boundingSphere).applyMatrix4(Ds),this.boundingSphere.union(Mr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,a=e*r+1;for(let o=0;o<i.length;o++)i[o]=s[a+o]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(yr.geometry=this.geometry,yr.material=this.material,yr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Mr.copy(this.boundingSphere),Mr.applyMatrix4(i),e.ray.intersectsSphere(Mr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ds),Qu.multiplyMatrices(i,Ds),yr.matrixWorld=Qu,yr.raycast(e,Ga);for(let a=0,o=Ga.length;a<o;a++){let l=Ga[a];l.instanceId=r,l.object=this,t.push(l)}Ga.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new $s(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Dr(new Float32Array(s*this.count),s,this.count,No,Un));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<i.length;c++)a+=i[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;return r[l]=o,r.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},as=new _i,mm=new Qe(.5,.5),Ha=new O,Vi=class{constructor(e=new Wn,t=new Wn,i=new Wn,s=new Wn,r=new Wn,a=new Wn){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Nn,i=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],f=r[7],g=r[8],v=r[9],p=r[10],m=r[11],M=r[12],R=r[13],b=r[14],A=r[15];if(s[0].setComponents(c-a,f-h,m-g,A-M).normalize(),s[1].setComponents(c+a,f+h,m+g,A+M).normalize(),s[2].setComponents(c+o,f+u,m+v,A+R).normalize(),s[3].setComponents(c-o,f-u,m-v,A-R).normalize(),i)s[4].setComponents(l,d,p,b).normalize(),s[5].setComponents(c-l,f-d,m-p,A-b).normalize();else if(s[4].setComponents(c-l,f-d,m-p,A-b).normalize(),t===Nn)s[5].setComponents(c+l,f+d,m+p,A+b).normalize();else if(t===Gs)s[5].setComponents(l,d,p,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),as.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),as.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(as)}intersectsSprite(e){as.center.set(0,0,0);let t=mm.distanceTo(e.center);return as.radius=.7071067811865476+t,as.applyMatrix4(e.matrixWorld),this.intersectsSphere(as)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(Ha.x=s.normal.x>0?e.max.x:e.min.x,Ha.y=s.normal.y>0?e.max.y:e.min.y,Ha.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ha)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},td=new rt,co=class n{constructor(){this.coordinateSystem=Nn,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,i=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];td.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[s]===void 0&&(i[s]=new Vi),i[s].setFromProjectionMatrix(td,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,i=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new Vi),t[s].copy(i[s]);return this._count=e._count,this}clone(){return new n().copy(this)}};var Xs=class extends xi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Je(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},nd=new rt,Dc=new Nr,Va=new _i,Wa=new O,Ur=class extends en{constructor(e=new Ht,t=new Xs){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Va.copy(i.boundingSphere),Va.applyMatrix4(s),Va.radius+=r,e.ray.intersectsSphere(Va)===!1)return;nd.copy(s).invert(),Dc.copy(e.ray).applyMatrix4(nd);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,u=i.attributes.position;if(c!==null){let d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=d,v=f;g<v;g++){let p=c.getX(g);Wa.fromBufferAttribute(u,p),id(Wa,p,l,s,e,t,this)}}else{let d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let g=d,v=f;g<v;g++)Wa.fromBufferAttribute(u,g),id(Wa,g,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function id(n,e,t,i,s,r,a){let o=Dc.distanceSqToPoint(n);if(o<t){let l=new O;Dc.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Fr=class extends _n{constructor(e=[],t=hs,i,s,r,a,o,l,c,h){super(e,t,i,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Wi=class extends _n{constructor(e,t,i,s,r,a,o,l,c){super(e,t,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var vi=class extends _n{constructor(e,t,i=qn,s,r,a,o=Kt,l=Kt,c,h=gi,u=1){if(h!==gi&&h!==Si)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:u};super(d,s,r,a,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Vs(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Or=class extends vi{constructor(e,t=qn,i=hs,s,r,a=Kt,o=Kt,l,c=gi){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,i,s,r,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},kr=class extends _n{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},kt=class n extends Ht{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,i,t,e,a,r,0),g("z","y","x",1,-1,i,t,-e,a,r,1),g("x","z","y",1,1,e,i,t,s,a,2),g("x","z","y",1,-1,e,i,-t,s,a,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new lt(c,3)),this.setAttribute("normal",new lt(h,3)),this.setAttribute("uv",new lt(u,2));function g(v,p,m,M,R,b,A,T,_,S,N){let C=b/_,D=A/S,F=b/2,V=A/2,P=T/2,K=_+1,j=S+1,H=0,q=0,B=new O;for(let W=0;W<j;W++){let X=W*D-V;for(let oe=0;oe<K;oe++){let Ie=oe*C-F;B[v]=Ie*M,B[p]=X*R,B[m]=P,c.push(B.x,B.y,B.z),B[v]=0,B[p]=0,B[m]=T>0?1:-1,h.push(B.x,B.y,B.z),u.push(oe/_),u.push(1-W/S),H+=1}}for(let W=0;W<S;W++)for(let X=0;X<_;X++){let oe=d+X+K*W,Ie=d+X+K*(W+1),J=d+(X+1)+K*(W+1),re=d+(X+1)+K*W;l.push(oe,Ie,re),l.push(Ie,J,re),q+=6}o.addGroup(f,q,N),f+=q,d+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},Br=class n extends Ht{constructor(e=1,t=1,i=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:i,radialSegments:s,heightSegments:r},t=Math.max(0,t),i=Math.max(1,Math.floor(i)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let a=[],o=[],l=[],c=[],h=t/2,u=Math.PI/2*e,d=t,f=2*u+d,g=i*2+r,v=s+1,p=new O,m=new O;for(let M=0;M<=g;M++){let R=0,b=0,A=0,T=0;if(M<=i){let N=M/i,C=N*Math.PI/2;b=-h-e*Math.cos(C),A=e*Math.sin(C),T=-e*Math.cos(C),R=N*u}else if(M<=i+r){let N=(M-i)/r;b=-h+N*t,A=e,T=0,R=u+N*d}else{let N=(M-i-r)/i,C=N*Math.PI/2;b=h+e*Math.sin(C),A=e*Math.cos(C),T=e*Math.sin(C),R=u+d+N*u}let _=Math.max(0,Math.min(1,R/f)),S=0;M===0?S=.5/s:M===g&&(S=-.5/s);for(let N=0;N<=s;N++){let C=N/s,D=C*Math.PI*2,F=Math.sin(D),V=Math.cos(D);m.x=-A*V,m.y=b,m.z=A*F,o.push(m.x,m.y,m.z),p.set(-A*V,T,A*F),p.normalize(),l.push(p.x,p.y,p.z),c.push(C+S,_)}if(M>0){let N=(M-1)*v;for(let C=0;C<s;C++){let D=N+C,F=N+C+1,V=M*v+C,P=M*v+C+1;a.push(D,F,V),a.push(F,P,V)}}}this.setIndex(a),this.setAttribute("position",new lt(o,3)),this.setAttribute("normal",new lt(l,3)),this.setAttribute("uv",new lt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},qs=class n extends Ht{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],l=[],c=new O,h=new Qe;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let f=i+u/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new lt(a,3)),this.setAttribute("normal",new lt(o,3)),this.setAttribute("uv",new lt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Dt=class n extends Ht{constructor(e=1,t=1,i=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],g=0,v=[],p=i/2,m=0;M(),a===!1&&(e>0&&R(!0),t>0&&R(!1)),this.setIndex(h),this.setAttribute("position",new lt(u,3)),this.setAttribute("normal",new lt(d,3)),this.setAttribute("uv",new lt(f,2));function M(){let b=new O,A=new O,T=0,_=(t-e)/i;for(let S=0;S<=r;S++){let N=[],C=S/r,D=C*(t-e)+e;for(let F=0;F<=s;F++){let V=F/s,P=V*l+o,K=Math.sin(P),j=Math.cos(P);A.x=D*K,A.y=-C*i+p,A.z=D*j,u.push(A.x,A.y,A.z),b.set(K,_,j).normalize(),d.push(b.x,b.y,b.z),f.push(V,1-C),N.push(g++)}v.push(N)}for(let S=0;S<s;S++)for(let N=0;N<r;N++){let C=v[N][S],D=v[N+1][S],F=v[N+1][S+1],V=v[N][S+1];(e>0||N!==0)&&(h.push(C,D,V),T+=3),(t>0||N!==r-1)&&(h.push(D,F,V),T+=3)}c.addGroup(m,T,0),m+=T}function R(b){let A=g,T=new Qe,_=new O,S=0,N=b===!0?e:t,C=b===!0?1:-1;for(let F=1;F<=s;F++)u.push(0,p*C,0),d.push(0,C,0),f.push(.5,.5),g++;let D=g;for(let F=0;F<=s;F++){let P=F/s*l+o,K=Math.cos(P),j=Math.sin(P);_.x=N*j,_.y=p*C,_.z=N*K,u.push(_.x,_.y,_.z),d.push(0,C,0),T.x=K*.5+.5,T.y=j*.5*C+.5,f.push(T.x,T.y),g++}for(let F=0;F<s;F++){let V=A+F,P=D+F;b===!0?h.push(P,P+1,V):h.push(P+1,P,V),S+=3}c.addGroup(m,S,b===!0?1:2),m+=S}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},yi=class n extends Dt{constructor(e=1,t=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,i,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var tn=class n extends Ht{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(s),c=o+1,h=l+1,u=e/o,d=t/l,f=[],g=[],v=[],p=[];for(let m=0;m<h;m++){let M=m*d-a;for(let R=0;R<c;R++){let b=R*u-r;g.push(b,-M,0),v.push(0,0,1),p.push(R/o),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let M=0;M<o;M++){let R=M+c*m,b=M+c*(m+1),A=M+1+c*(m+1),T=M+1+c*m;f.push(R,b,T),f.push(b,A,T)}this.setIndex(f),this.setAttribute("position",new lt(g,3)),this.setAttribute("normal",new lt(v,3)),this.setAttribute("uv",new lt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}};var Vt=class n extends Ht{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new O,d=new O,f=[],g=[],v=[],p=[];for(let m=0;m<=i;m++){let M=[],R=m/i,b=a+R*o,A=e*Math.cos(b),T=Math.sqrt(e*e-A*A),_=0;m===0&&a===0?_=.5/t:m===i&&l===Math.PI&&(_=-.5/t);for(let S=0;S<=t;S++){let N=S/t,C=s+N*r;u.x=-T*Math.cos(C),u.y=A,u.z=T*Math.sin(C),g.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),p.push(N+_,1-R),M.push(c++)}h.push(M)}for(let m=0;m<i;m++)for(let M=0;M<t;M++){let R=h[m][M+1],b=h[m][M],A=h[m+1][M],T=h[m+1][M+1];(m!==0||a>0)&&f.push(R,b,T),(m!==i-1||l<Math.PI)&&f.push(b,A,T)}this.setIndex(f),this.setAttribute("position",new lt(g,3)),this.setAttribute("normal",new lt(v,3)),this.setAttribute("uv",new lt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var zr=class n extends Ht{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},i=Math.floor(i),s=Math.floor(s);let l=[],c=[],h=[],u=[],d=new O,f=new O,g=new O;for(let v=0;v<=i;v++){let p=a+v/i*o;for(let m=0;m<=s;m++){let M=m/s*r;f.x=(e+t*Math.cos(p))*Math.cos(M),f.y=(e+t*Math.cos(p))*Math.sin(M),f.z=t*Math.sin(p),c.push(f.x,f.y,f.z),d.x=e*Math.cos(M),d.y=e*Math.sin(M),g.subVectors(f,d).normalize(),h.push(g.x,g.y,g.z),u.push(m/s),u.push(v/i)}}for(let v=1;v<=i;v++)for(let p=1;p<=s;p++){let m=(s+1)*v+p-1,M=(s+1)*(v-1)+p-1,R=(s+1)*(v-1)+p,b=(s+1)*v+p;l.push(m,M,b),l.push(M,R,b)}this.setIndex(l),this.setAttribute("position",new lt(c,3)),this.setAttribute("normal",new lt(h,3)),this.setAttribute("uv",new lt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function ds(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];if(sd(s))s.isRenderTargetTexture?(ke("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(sd(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function cn(n){let e={};for(let t=0;t<n.length;t++){let i=ds(n[t]);for(let s in i)e[s]=i[s]}return e}function sd(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function gm(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function hh(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:nt.workingColorSpace}var jd={clone:ds,merge:cn},_m=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,xm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Dn=class extends xi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_m,this.fragmentShader=xm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ds(e.uniforms),this.uniformsGroups=gm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new Je().setHex(s.value);break;case"v2":this.uniforms[i].value=new Qe().fromArray(s.value);break;case"v3":this.uniforms[i].value=new O().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Et().fromArray(s.value);break;case"m3":this.uniforms[i].value=new ze().fromArray(s.value);break;case"m4":this.uniforms[i].value=new rt().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},ho=class extends Dn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},qe=class extends xi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Je(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fl,this.normalScale=new Qe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $n,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var uo=class extends xi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ud,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},fo=class extends xi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Us(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function $a(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var $i=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=t[++i],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}a=i,i=0;break t}break n}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=i[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},po=class extends $i{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Pc,endingEnd:Pc}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Lc:r=e,o=2*t-i;break;case Nc:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Lc:a=e,l=2*i-t;break;case Nc:a=1,l=i+s[1]-s[0];break;default:a=e-1,l=t}let c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(i-t)/(s-t),v=g*g,p=v*g,m=-d*p+2*d*v-d*g,M=(1+d)*p+(-1.5-2*d)*v+(-.5+d)*g+1,R=(-1-f)*p+(1.5+f)*v+.5*g,b=f*p-f*v;for(let A=0;A!==o;++A)r[A]=m*a[h+A]+M*a[c+A]+R*a[l+A]+b*a[u+A];return r}},mo=class extends $i{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(i-t)/(s-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}},go=class extends $i{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},_o=class extends $i{interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this.inTangents,u=this.outTangents;if(!h||!u){let g=(i-t)/(s-t),v=1-g;for(let p=0;p!==o;++p)r[p]=a[c+p]*v+a[l+p]*g;return r}let d=o*2,f=e-1;for(let g=0;g!==o;++g){let v=a[c+g],p=a[l+g],m=f*d+g*2,M=u[m],R=u[m+1],b=e*d+g*2,A=h[b],T=h[b+1],_=ym(i,t,M,A,s);r[g]=Jd(_,v,R,T,p)}return r}};function Jd(n,e,t,i,s){let r=1-n;return r*r*r*e+3*r*r*n*t+3*r*n*n*i+n*n*n*s}function vm(n,e,t,i,s){let r=1-n;return 3*r*r*(t-e)+6*r*n*(i-t)+3*n*n*(s-i)}function ym(n,e,t,i,s){let r=(n-e)/(s-e);for(let a=0;a<8;a++){let o=Jd(r,e,t,i,s)-n;if(Math.abs(o)<1e-10)break;let l=vm(r,e,t,i,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var Cn=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Us(t,this.TimeBufferType),this.values=Us(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Us(e.times,Array),values:Us(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s),$a(e.settings)&&(i.settings={inTangents:Us(e.settings.inTangents,Array),outTangents:Us(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new go(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new mo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new po(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new _o(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case br:t=this.InterpolantFactoryMethodDiscrete;break;case so:t=this.InterpolantFactoryMethodLinear;break;case Ya:t=this.InterpolantFactoryMethodSmooth;break;case Ic:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return ke("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return br;case this.InterpolantFactoryMethodLinear:return so;case this.InterpolantFactoryMethodSmooth:return Ya;case this.InterpolantFactoryMethodBezier:return Ic}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e;$a(this.settings)&&(rd(this.settings.inTangents,e),rd(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e;$a(this.settings)&&(ad(this.settings.inTangents,e),ad(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<e;)++r;for(;a!==-1&&i[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Be("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(Be("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){Be("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Be("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&qp(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Be("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Ya,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let u=o*i,d=u-i,f=u+i;for(let g=0;g!==i;++g){let v=t[u+g];if(v!==t[d+g]||v!==t[f+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let u=o*i,d=a*i;for(let f=0;f!==i;++f)t[d+f]=t[u+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,$a(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function rd(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]+=e}function ad(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]*=e}Cn.prototype.ValueTypeName="";Cn.prototype.TimeBufferType=Float32Array;Cn.prototype.ValueBufferType=Float32Array;Cn.prototype.DefaultInterpolation=so;var Xi=class extends Cn{constructor(e,t,i){super(e,t,i)}};Xi.prototype.ValueTypeName="bool";Xi.prototype.ValueBufferType=Array;Xi.prototype.DefaultInterpolation=br;Xi.prototype.InterpolantFactoryMethodLinear=void 0;Xi.prototype.InterpolantFactoryMethodSmooth=void 0;var xo=class extends Cn{constructor(e,t,i,s){super(e,t,i,s)}};xo.prototype.ValueTypeName="color";var vo=class extends Cn{constructor(e,t,i,s){super(e,t,i,s)}};vo.prototype.ValueTypeName="number";var yo=class extends $i{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)vn.slerpFlat(r,0,a,c-o,a,c,l);return r}},Gr=class extends Cn{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new yo(this.times,this.values,this.getValueSize(),e)}};Gr.prototype.ValueTypeName="quaternion";Gr.prototype.InterpolantFactoryMethodSmooth=void 0;var qi=class extends Cn{constructor(e,t,i){super(e,t,i)}};qi.prototype.ValueTypeName="string";qi.prototype.ValueBufferType=Array;qi.prototype.DefaultInterpolation=br;qi.prototype.InterpolantFactoryMethodLinear=void 0;qi.prototype.InterpolantFactoryMethodSmooth=void 0;var Mo=class extends Cn{constructor(e,t,i,s){super(e,t,i,s)}};Mo.prototype.ValueTypeName="vector";var So=class{constructor(e,t,i){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Zd=new So,bo=class{constructor(e){this.manager=e!==void 0?e:Zd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};bo.DEFAULT_MATERIAL_NAME="__DEFAULT";var Hr=class extends en{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Je(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Vr=class extends Hr{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(en.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Je(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Cc=new rt,od=new O,ld=new O,wo=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Qe(512,512),this.mapType=yn,this.map=null,this.mapPass=null,this.matrix=new rt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Vi,this._frameExtents=new Qe(1,1),this._viewportCount=1,this._viewports=[new Et(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;od.setFromMatrixPosition(e.matrixWorld),t.position.copy(od),ld.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ld),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,s){Cc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(Cc,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===Gs||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Cc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Xa=new O,qa=new vn,Zn=new O,Wr=class extends en{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new rt,this.projectionMatrix=new rt,this.projectionMatrixInverse=new rt,this.coordinateSystem=Nn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Xa,qa,Zn),Zn.x===1&&Zn.y===1&&Zn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Xa,qa,Zn.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Xa,qa,Zn),Zn.x===1&&Zn.y===1&&Zn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Xa,qa,Zn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},zi=new O,cd=new Qe,hd=new Qe,pn=class extends Wr{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ro*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(lc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ro*2*Math.atan(Math.tan(lc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){zi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(zi.x,zi.y).multiplyScalar(-e/zi.z),zi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(zi.x,zi.y).multiplyScalar(-e/zi.z)}getViewSize(e,t){return this.getViewBounds(e,cd,hd),t.subVectors(hd,cd)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(lc*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var $r=class extends Wr{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,a=i+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Uc=class extends wo{constructor(){super(new $r(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Xr=class extends Hr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(en.DEFAULT_UP),this.updateMatrix(),this.target=new en,this.shadow=new Uc}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Fs=-90,Os=1,Ys=class extends en{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new pn(Fs,Os,e,t);s.layers=this.layers,this.add(s);let r=new pn(Fs,Os,e,t);r.layers=this.layers,this.add(r);let a=new pn(Fs,Os,e,t);a.layers=this.layers,this.add(a);let o=new pn(Fs,Os,e,t);o.layers=this.layers,this.add(o);let l=new pn(Fs,Os,e,t);l.layers=this.layers,this.add(l);let c=new pn(Fs,Os,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===Nn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Gs)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let v=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.mipmapsAutoUpdate=v,e.setRenderTarget(i,5,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Eo=class extends pn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var uh="\\[\\]\\.:\\/",Mm=new RegExp("["+uh+"]","g"),dh="[^"+uh+"]",Sm="[^"+uh.replace("\\.","")+"]",bm=/((?:WC+[\/:])*)/.source.replace("WC",dh),wm=/(WCOD+)?/.source.replace("WCOD",Sm),Em=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",dh),Tm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",dh),Am=new RegExp("^"+bm+wm+Em+Tm+"$"),Rm=["material","materials","bones","map"],Fc=class{constructor(e,t,i){let s=i||vt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},vt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Mm,"")}static parseTrackName(e){let t=Am.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);Rm.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=i(o.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){ke("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){Be("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Be("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Be("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Be("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Be("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){Be("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){Be("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;Be("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Be("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Be("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};vt.Composite=Fc;vt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};vt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};vt.prototype.GetterByBindingType=[vt.prototype._getValue_direct,vt.prototype._getValue_array,vt.prototype._getValue_arrayElement,vt.prototype._getValue_toArray];vt.prototype.SetterByBindingTypeAndVersioning=[[vt.prototype._setValue_direct,vt.prototype._setValue_direct_setNeedsUpdate,vt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[vt.prototype._setValue_array,vt.prototype._setValue_array_setNeedsUpdate,vt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[vt.prototype._setValue_arrayElement,vt.prototype._setValue_arrayElement_setNeedsUpdate,vt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[vt.prototype._setValue_fromArray,vt.prototype._setValue_fromArray_setNeedsUpdate,vt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var oy=new Float32Array(1);var xh=class xh{constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};xh.prototype.isMatrix2=!0;var Oc=xh;function fh(n,e,t,i){let s=Cm(i);switch(t){case nh:return n*e;case No:return n*e/s.components*s.byteLength;case Do:return n*e/s.components*s.byteLength;case Ki:return n*e*2/s.components*s.byteLength;case Uo:return n*e*2/s.components*s.byteLength;case ih:return n*e*3/s.components*s.byteLength;case Kn:return n*e*4/s.components*s.byteLength;case Fo:return n*e*4/s.components*s.byteLength;case Kr:case jr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Jr:case Zr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ko:case zo:return Math.max(n,16)*Math.max(e,8)/4;case Oo:case Bo:return Math.max(n,8)*Math.max(e,8)/2;case Go:case Ho:case Wo:case $o:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Vo:case Qr:case Xo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case qo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Yo:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Ko:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case jo:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Jo:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Zo:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Qo:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case el:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case tl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case nl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case il:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case sl:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case rl:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case al:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case ol:case ll:case cl:return Math.ceil(n/4)*Math.ceil(e/4)*16;case hl:case ul:return Math.ceil(n/4)*Math.ceil(e/4)*8;case ea:case dl:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Cm(n){switch(n){case yn:case Zc:return{byteLength:1,components:1};case Zs:case Qc:case Yn:return{byteLength:2,components:1};case Po:case Lo:return{byteLength:2,components:4};case qn:case Io:case Un:return{byteLength:4,components:1};case eh:case th:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?ke("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function Mf(){let n=null,e=!1,t=null,i=null;function s(r,a){i=n.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Om(n){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,u=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,l,c){let h=l.array,u=l.updateRanges;if(n.bindBuffer(c,o),u.length===0)n.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){let g=u[d],v=u[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,u[d]=v)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){let v=u[f];n.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var km=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Bm=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,zm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Gm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Vm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Wm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,$m=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Xm=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,qm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ym=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Km=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,jm=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Jm=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Zm=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Qm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,e0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,t0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,n0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,i0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,s0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,r0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,a0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,o0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,l0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,c0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,h0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,u0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,d0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,f0="gl_FragColor = linearToOutputTexel( gl_FragColor );",p0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,m0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,g0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,_0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,x0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,v0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,y0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,M0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,S0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,b0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,w0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,E0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,T0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,A0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,R0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,C0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,I0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,P0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,L0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,N0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,D0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,U0=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,F0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,O0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,k0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,B0=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,z0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,G0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,H0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,V0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,W0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,X0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,q0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Y0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,K0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,j0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,J0=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Z0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Q0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,eg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,ng=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ig=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,ag=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,og=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,lg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,cg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,hg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ug=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,dg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,fg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,pg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,mg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,gg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_g=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,xg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,vg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,yg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Mg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Sg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,bg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,wg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Eg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Tg=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Ag=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Rg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Cg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ig=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Pg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Lg=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Ng=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Dg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ug=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Fg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Og=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,kg=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zg=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Wg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,$g=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Xg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,qg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Yg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,jg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Jg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Zg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,e_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,t_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,n_=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,i_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,s_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,r_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,a_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,o_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,l_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,c_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,h_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,u_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,d_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,f_=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,p_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,m_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,g_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ke={alphahash_fragment:km,alphahash_pars_fragment:Bm,alphamap_fragment:zm,alphamap_pars_fragment:Gm,alphatest_fragment:Hm,alphatest_pars_fragment:Vm,aomap_fragment:Wm,aomap_pars_fragment:$m,batching_pars_vertex:Xm,batching_vertex:qm,begin_vertex:Ym,beginnormal_vertex:Km,bsdfs:jm,iridescence_fragment:Jm,bumpmap_pars_fragment:Zm,clipping_planes_fragment:Qm,clipping_planes_pars_fragment:e0,clipping_planes_pars_vertex:t0,clipping_planes_vertex:n0,color_fragment:i0,color_pars_fragment:s0,color_pars_vertex:r0,color_vertex:a0,common:o0,defaultnormal_vertex:l0,displacementmap_pars_vertex:c0,displacementmap_vertex:h0,emissivemap_fragment:u0,emissivemap_pars_fragment:d0,colorspace_fragment:f0,colorspace_pars_fragment:p0,envmap_fragment:m0,envmap_common_pars_fragment:g0,envmap_pars_fragment:_0,envmap_pars_vertex:x0,envmap_physical_pars_fragment:C0,envmap_vertex:v0,fog_vertex:y0,fog_pars_vertex:M0,fog_fragment:S0,fog_pars_fragment:b0,gradientmap_pars_fragment:w0,lightmap_pars_fragment:E0,lights_lambert_fragment:T0,lights_lambert_pars_fragment:A0,lights_pars_begin:R0,lights_toon_fragment:I0,lights_toon_pars_fragment:P0,lights_phong_fragment:L0,lights_phong_pars_fragment:N0,lights_physical_fragment:D0,lights_physical_pars_fragment:U0,lights_fragment_begin:F0,lights_fragment_maps:O0,lights_fragment_end:k0,lightprobes_pars_fragment:B0,logdepthbuf_fragment:z0,logdepthbuf_pars_fragment:G0,logdepthbuf_pars_vertex:H0,logdepthbuf_vertex:V0,map_fragment:W0,map_pars_fragment:$0,map_particle_fragment:X0,map_particle_pars_fragment:q0,metalnessmap_fragment:Y0,metalnessmap_pars_fragment:K0,morphinstance_vertex:j0,morphcolor_vertex:J0,morphnormal_vertex:Z0,morphtarget_pars_vertex:Q0,morphtarget_vertex:eg,normal_fragment_begin:tg,normal_fragment_maps:ng,normal_pars_fragment:ig,normal_pars_vertex:sg,normal_vertex:rg,normalmap_pars_fragment:ag,clearcoat_normal_fragment_begin:og,clearcoat_normal_fragment_maps:lg,clearcoat_pars_fragment:cg,iridescence_pars_fragment:hg,opaque_fragment:ug,packing:dg,premultiplied_alpha_fragment:fg,project_vertex:pg,dithering_fragment:mg,dithering_pars_fragment:gg,roughnessmap_fragment:_g,roughnessmap_pars_fragment:xg,shadowmap_pars_fragment:vg,shadowmap_pars_vertex:yg,shadowmap_vertex:Mg,shadowmask_pars_fragment:Sg,skinbase_vertex:bg,skinning_pars_vertex:wg,skinning_vertex:Eg,skinnormal_vertex:Tg,specularmap_fragment:Ag,specularmap_pars_fragment:Rg,tonemapping_fragment:Cg,tonemapping_pars_fragment:Ig,transmission_fragment:Pg,transmission_pars_fragment:Lg,uv_pars_fragment:Ng,uv_pars_vertex:Dg,uv_vertex:Ug,worldpos_vertex:Fg,background_vert:Og,background_frag:kg,backgroundCube_vert:Bg,backgroundCube_frag:zg,cube_vert:Gg,cube_frag:Hg,depth_vert:Vg,depth_frag:Wg,distance_vert:$g,distance_frag:Xg,equirect_vert:qg,equirect_frag:Yg,linedashed_vert:Kg,linedashed_frag:jg,meshbasic_vert:Jg,meshbasic_frag:Zg,meshlambert_vert:Qg,meshlambert_frag:e_,meshmatcap_vert:t_,meshmatcap_frag:n_,meshnormal_vert:i_,meshnormal_frag:s_,meshphong_vert:r_,meshphong_frag:a_,meshphysical_vert:o_,meshphysical_frag:l_,meshtoon_vert:c_,meshtoon_frag:h_,points_vert:u_,points_frag:d_,shadow_vert:f_,shadow_frag:p_,sprite_vert:m_,sprite_frag:g_},ye={common:{diffuse:{value:new Je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ze}},envmap:{envMap:{value:null},envMapRotation:{value:new ze},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ze},normalScale:{value:new Qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0},uvTransform:{value:new ze}},sprite:{diffuse:{value:new Je(16777215)},opacity:{value:1},center:{value:new Qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}}},si={basic:{uniforms:cn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:Ke.meshbasic_vert,fragmentShader:Ke.meshbasic_frag},lambert:{uniforms:cn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new Je(0)},envMapIntensity:{value:1}}]),vertexShader:Ke.meshlambert_vert,fragmentShader:Ke.meshlambert_frag},phong:{uniforms:cn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new Je(0)},specular:{value:new Je(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphong_vert,fragmentShader:Ke.meshphong_frag},standard:{uniforms:cn([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new Je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag},toon:{uniforms:cn([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new Je(0)}}]),vertexShader:Ke.meshtoon_vert,fragmentShader:Ke.meshtoon_frag},matcap:{uniforms:cn([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:Ke.meshmatcap_vert,fragmentShader:Ke.meshmatcap_frag},points:{uniforms:cn([ye.points,ye.fog]),vertexShader:Ke.points_vert,fragmentShader:Ke.points_frag},dashed:{uniforms:cn([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ke.linedashed_vert,fragmentShader:Ke.linedashed_frag},depth:{uniforms:cn([ye.common,ye.displacementmap]),vertexShader:Ke.depth_vert,fragmentShader:Ke.depth_frag},normal:{uniforms:cn([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:Ke.meshnormal_vert,fragmentShader:Ke.meshnormal_frag},sprite:{uniforms:cn([ye.sprite,ye.fog]),vertexShader:Ke.sprite_vert,fragmentShader:Ke.sprite_frag},background:{uniforms:{uvTransform:{value:new ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ke.background_vert,fragmentShader:Ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ze}},vertexShader:Ke.backgroundCube_vert,fragmentShader:Ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ke.cube_vert,fragmentShader:Ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ke.equirect_vert,fragmentShader:Ke.equirect_frag},distance:{uniforms:cn([ye.common,ye.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ke.distance_vert,fragmentShader:Ke.distance_frag},shadow:{uniforms:cn([ye.lights,ye.fog,{color:{value:new Je(0)},opacity:{value:1}}]),vertexShader:Ke.shadow_vert,fragmentShader:Ke.shadow_frag}};si.physical={uniforms:cn([si.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ze},clearcoatNormalScale:{value:new Qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ze},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new ze},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ze},sheen:{value:0},sheenColor:{value:new Je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ze},transmissionSamplerSize:{value:new Qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ze},attenuationDistance:{value:0},attenuationColor:{value:new Je(0)},specularColor:{value:new Je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ze},anisotropyVector:{value:new Qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ze}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag};var pl={r:0,b:0,g:0},__=new rt,Sf=new ze;Sf.set(-1,0,0,0,1,0,0,0,1);function x_(n,e,t,i,s,r){let a=new Je(0),o=s===!0?0:1,l,c,h=null,u=0,d=null;function f(M){let R=M.isScene===!0?M.background:null;if(R&&R.isTexture){let b=M.backgroundBlurriness>0;R=e.get(R,b)}return R}function g(M){let R=!1,b=f(M);b===null?p(a,o):b&&b.isColor&&(p(b,1),R=!0);let A=n.xr.getEnvironmentBlendMode();A==="additive"?t.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||R)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function v(M,R){let b=f(R);b&&b.isCubeTexture?(c===void 0&&(c=new we(new kt(1,1,1),new Dn({name:"BackgroundCubeMaterial",uniforms:ds(si.backgroundCube.uniforms),vertexShader:si.backgroundCube.vertexShader,fragmentShader:si.backgroundCube.fragmentShader,side:nn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,T,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=b,c.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(__.makeRotationFromEuler(R.backgroundRotation)).transpose(),b.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Sf),c.material.toneMapped=nt.getTransfer(b.colorSpace)!==ht,(h!==b||u!==b.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,h=b,u=b.version,d=n.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new we(new tn(2,2),new Dn({name:"BackgroundMaterial",uniforms:ds(si.background.uniforms),vertexShader:si.background.vertexShader,fragmentShader:si.background.fragmentShader,side:Yi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,l.material.toneMapped=nt.getTransfer(b.colorSpace)!==ht,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(h!==b||u!==b.version||d!==n.toneMapping)&&(l.material.needsUpdate=!0,h=b,u=b.version,d=n.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function p(M,R){M.getRGB(pl,hh(n)),t.buffers.color.setClear(pl.r,pl.g,pl.b,R,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,R=1){a.set(M),o=R,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,p(a,o)},render:g,addToRenderList:v,dispose:m}}function v_(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null),r=s,a=!1;function o(D,F,V,P,K){let j=!1,H=u(D,P,V,F);r!==H&&(r=H,c(r.object)),j=f(D,P,V,K),j&&g(D,P,V,K),K!==null&&e.update(K,n.ELEMENT_ARRAY_BUFFER),(j||a)&&(a=!1,b(D,F,V,P),K!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(K).buffer))}function l(){return n.createVertexArray()}function c(D){return n.bindVertexArray(D)}function h(D){return n.deleteVertexArray(D)}function u(D,F,V,P){let K=P.wireframe===!0,j=i[F.id];j===void 0&&(j={},i[F.id]=j);let H=D.isInstancedMesh===!0?D.id:0,q=j[H];q===void 0&&(q={},j[H]=q);let B=q[V.id];B===void 0&&(B={},q[V.id]=B);let W=B[K];return W===void 0&&(W=d(l()),B[K]=W),W}function d(D){let F=[],V=[],P=[];for(let K=0;K<t;K++)F[K]=0,V[K]=0,P[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:V,attributeDivisors:P,object:D,attributes:{},index:null}}function f(D,F,V,P){let K=r.attributes,j=F.attributes,H=0,q=V.getAttributes();for(let B in q)if(q[B].location>=0){let X=K[B],oe=j[B];if(oe===void 0&&(B==="instanceMatrix"&&D.instanceMatrix&&(oe=D.instanceMatrix),B==="instanceColor"&&D.instanceColor&&(oe=D.instanceColor)),X===void 0||X.attribute!==oe||oe&&X.data!==oe.data)return!0;H++}return r.attributesNum!==H||r.index!==P}function g(D,F,V,P){let K={},j=F.attributes,H=0,q=V.getAttributes();for(let B in q)if(q[B].location>=0){let X=j[B];X===void 0&&(B==="instanceMatrix"&&D.instanceMatrix&&(X=D.instanceMatrix),B==="instanceColor"&&D.instanceColor&&(X=D.instanceColor));let oe={};oe.attribute=X,X&&X.data&&(oe.data=X.data),K[B]=oe,H++}r.attributes=K,r.attributesNum=H,r.index=P}function v(){let D=r.newAttributes;for(let F=0,V=D.length;F<V;F++)D[F]=0}function p(D){m(D,0)}function m(D,F){let V=r.newAttributes,P=r.enabledAttributes,K=r.attributeDivisors;V[D]=1,P[D]===0&&(n.enableVertexAttribArray(D),P[D]=1),K[D]!==F&&(n.vertexAttribDivisor(D,F),K[D]=F)}function M(){let D=r.newAttributes,F=r.enabledAttributes;for(let V=0,P=F.length;V<P;V++)F[V]!==D[V]&&(n.disableVertexAttribArray(V),F[V]=0)}function R(D,F,V,P,K,j,H){H===!0?n.vertexAttribIPointer(D,F,V,K,j):n.vertexAttribPointer(D,F,V,P,K,j)}function b(D,F,V,P){v();let K=P.attributes,j=V.getAttributes(),H=F.defaultAttributeValues;for(let q in j){let B=j[q];if(B.location>=0){let W=K[q];if(W===void 0&&(q==="instanceMatrix"&&D.instanceMatrix&&(W=D.instanceMatrix),q==="instanceColor"&&D.instanceColor&&(W=D.instanceColor)),W!==void 0){let X=W.normalized,oe=W.itemSize,Ie=e.get(W);if(Ie===void 0)continue;let J=Ie.buffer,re=Ie.type,_e=Ie.bytesPerElement,Pe=re===n.INT||re===n.UNSIGNED_INT||W.gpuType===Io;if(W.isInterleavedBufferAttribute){let ie=W.data,De=ie.isInterleavedBuffer===!0?ie.stride:ie.itemSize,dt=W.offset;if(ie.isInstancedInterleavedBuffer||ie.isInstancedBufferAttribute){for(let Ue=0;Ue<B.locationSize;Ue++)m(B.location+Ue,ie.meshPerAttribute);D.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let Ue=0;Ue<B.locationSize;Ue++)p(B.location+Ue);n.bindBuffer(n.ARRAY_BUFFER,J);for(let Ue=0;Ue<B.locationSize;Ue++)R(B.location+Ue,oe/B.locationSize,re,X,De*_e,(dt+oe/B.locationSize*Ue)*_e,Pe)}else{if(W.isInstancedBufferAttribute){for(let ie=0;ie<B.locationSize;ie++)m(B.location+ie,W.meshPerAttribute);D.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let ie=0;ie<B.locationSize;ie++)p(B.location+ie);n.bindBuffer(n.ARRAY_BUFFER,J);for(let ie=0;ie<B.locationSize;ie++)R(B.location+ie,oe/B.locationSize,re,X,oe*_e,oe/B.locationSize*ie*_e,Pe)}}else if(H!==void 0){let X=H[q];if(X!==void 0)switch(X.length){case 2:n.vertexAttrib2fv(B.location,X);break;case 3:n.vertexAttrib3fv(B.location,X);break;case 4:n.vertexAttrib4fv(B.location,X);break;default:n.vertexAttrib1fv(B.location,X)}}}}M()}function A(){N();for(let D in i){let F=i[D];for(let V in F){let P=F[V];for(let K in P){let j=P[K];for(let H in j)h(j[H].object),delete j[H];delete P[K]}}delete i[D]}}function T(D){if(i[D.id]===void 0)return;let F=i[D.id];for(let V in F){let P=F[V];for(let K in P){let j=P[K];for(let H in j)h(j[H].object),delete j[H];delete P[K]}}delete i[D.id]}function _(D){for(let F in i){let V=i[F];for(let P in V){let K=V[P];if(K[D.id]===void 0)continue;let j=K[D.id];for(let H in j)h(j[H].object),delete j[H];delete K[D.id]}}}function S(D){for(let F in i){let V=i[F],P=D.isInstancedMesh===!0?D.id:0,K=V[P];if(K!==void 0){for(let j in K){let H=K[j];for(let q in H)h(H[q].object),delete H[q];delete K[j]}delete V[P],Object.keys(V).length===0&&delete i[F]}}}function N(){C(),a=!0,r!==s&&(r=s,c(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:N,resetDefaultState:C,dispose:A,releaseStatesOfGeometry:T,releaseStatesOfObject:S,releaseStatesOfProgram:_,initAttributes:v,enableAttribute:p,disableUnusedAttributes:M}}function y_(n,e,t){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function a(l,c,h){h!==0&&(n.drawArraysInstanced(i,l,c,h),t.update(c,i,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let d=0;for(let f=0;f<h;f++)d+=c[f];t.update(d,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function M_(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let _=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(_){return!(_!==Kn&&i.convert(_)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(_){let S=_===Yn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(_!==yn&&_!==Un&&!S&&i.convert(_)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(_){if(_==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(ke("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=t.logarithmicDepthBuffer===!0&&u===!1;t.reversedDepthBuffer===!0&&u===!1&&ke("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&u===!0&&ke("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),M=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),R=n.getParameter(n.MAX_VARYING_VECTORS),b=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),A=n.getParameter(n.MAX_SAMPLES),T=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:M,maxVaryings:R,maxFragmentUniforms:b,maxSamples:A,samples:T}}function S_(n){let e=this,t=null,i=0,s=!1,r=!1,a=new Wn,o=new ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||i!==0||s;return s=d,i=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,v=u.clipIntersection,p=u.clipShadows,m=n.get(u);if(!s||g===null||g.length===0||r&&!p)r?h(null):c();else{let M=r?0:i,R=M*4,b=m.clippingState||null;l.value=b,b=h(g,d,R,f);for(let A=0;A!==R;++A)b[A]=t[A];m.clippingState=b,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,d,f,g){let v=u!==null?u.length:0,p=null;if(v!==0){if(p=l.value,g!==!0||p===null){let m=f+v*4,M=d.matrixWorldInverse;o.getNormalMatrix(M),(p===null||p.length<m)&&(p=new Float32Array(m));for(let R=0,b=f;R!==v;++R,b+=4)a.copy(u[R]).applyMatrix4(M,o),a.normal.toArray(p,b),p[b+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,p}}var sa=class extends Rn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Fr(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new kt(5,5,5),r=new Dn({name:"CubemapFromEquirect",uniforms:ds(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:nn,blending:ls});r.uniforms.tEquirect.value=t;let a=new we(s,r),o=t.minFilter;return t.minFilter===Mi&&(t.minFilter=gn),new Ys(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}},Qd=256,b_=3,w_=20,bf=256,wf=16,E_=3,T_=new O,A_=new Je,gl=class n{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Ys(1,10,null),this._boxMesh=new we(new kt(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){let{size:a=256,position:o=T_}=r,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let u=l.autoClear,d=l.autoClearColor,f=l.autoClearDepth,g=l.autoClearStencil,v=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,v===null&&(e.background=l.getClearColor(A_));let p=new Ys(i,s,h);return p.position.copy(o),p.update(l,e),l.autoClear=u,l.autoClearColor=d,l.autoClearDepth=f,l.autoClearStencil=g,e.background=v,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=nf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=tf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Qd,Yd(e))}_fromTexture(e,t){e.mapping===hs||e.mapping===Js?this._setSize(e.image.length===0?Qd:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let i=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){let e=this._cubeSize,t=ef(e,!1,!1),i=Math.log2(e)-b_;for(let s=0;s<=i;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==t||e&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=ef(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,i){let s=this._boxMesh,r=this._cubeCamera;s.material=i,r.renderTarget=e,r.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===hs||e.mapping===Js?(this._cubemapMaterial===null&&(this._cubemapMaterial=nf()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=tf()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=R_(),this._integrationMaterial=C_());let t=this._cubeSize,i=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/wf);for(let a=0;a<=i;a++){let o=n.lodToRoughness(a,i);if(a>i-E_)r.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{let l=o>0?Math.log2(t)+.5*Math.log2(6/(bf*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=I_());let i=this._blurMaterial,s=i.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,i),s.envMap.value=e.texture,this._renderCube(r,0,i)}};function ef(n,e,t){return new sa(n,{minFilter:Mi,generateMipmaps:e,type:Yn,colorSpace:wr,depthBuffer:t})}function ra(n,e,t){return new Dn({name:n,uniforms:e,vertexShader:Ke.cube_vert,fragmentShader:t,side:nn,blending:ls,depthTest:!1,depthWrite:!1})}function R_(){return ra("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${bf}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function C_(){return ra("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:wf}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function I_(){return ra("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${w_}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function tf(){return ra("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function nf(){return ra("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function P_(n){let e=new WeakMap,t=new WeakMap,i=null;function s(d,f=!1){return d==null?null:f?a(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===Ao||f===Ro)if(e.has(d)){let g=e.get(d).texture;return o(g,d.mapping)}else{let g=d.image;if(g&&g.height>0){let v=new sa(g.height);return v.fromEquirectangularTexture(n,d),e.set(d,v),d.addEventListener("dispose",c),o(v.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){let f=d.mapping,g=f===Ao||f===Ro,v=f===hs||f===Js;if(g||v){let p=t.get(d),m=p!==void 0?p.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==m)return i===null&&(i=new gl(n)),p=g?i.fromEquirectangular(d,p):i.fromCubemap(d,p),p.texture.pmremVersion=d.pmremVersion,t.set(d,p),p.texture;if(p!==void 0)return p.texture;{let M=d.image;return g&&M&&M.height>0||v&&M&&l(M)?(i===null&&(i=new gl(n)),p=g?i.fromEquirectangular(d):i.fromCubemap(d),p.texture.pmremVersion=d.pmremVersion,t.set(d,p),d.addEventListener("dispose",h),p.texture):null}}}return d}function o(d,f){return f===Ao?d.mapping=hs:f===Ro&&(d.mapping=Js),d}function l(d){let f=0,g=6;for(let v=0;v<g;v++)d[v]!==void 0&&f++;return f===g}function c(d){let f=d.target;f.removeEventListener("dispose",c);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function h(d){let f=d.target;f.removeEventListener("dispose",h);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function u(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:u}}function L_(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&Sr("WebGLRenderer: "+i+" extension not supported."),s}}}function N_(n,e,t,i){let s={},r=new WeakMap,a=new FinalizationRegistry(g=>delete s[g]);function o(g){l(g.target)}function l(g){g.index!==null&&e.remove(g.index);for(let p in g.attributes)e.remove(g.attributes[p]);g.removeEventListener("dispose",o),delete s[g.id],a.unregister(g);let v=r.get(g);v&&(e.remove(v),r.delete(g)),i.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function c(g,v){return s[v.id]!==void 0||(v.addEventListener("dispose",o),s[v.id]=new WeakRef(v),a.register(v,v.id,v),t.memory.geometries++),v}function h(g){let v=g.attributes;for(let p in v)e.update(v[p],n.ARRAY_BUFFER)}function u(g){let v=g.index,p=g.attributes.position,m=0;if(p===void 0)return;let M=v!==null?v.array.length:p.array.length/3-1,R=p.count>=65535?Lr:Pr,b=new R(Math.ceil(M/3)*6,1),A=b.array;if(v!==null){let _=v.array;m=v.version;for(let S=0,N=0;S<M;S+=3){let C=_[S+0],D=_[S+1],F=_[S+2];A[N++]=C,A[N++]=D,A[N++]=D,A[N++]=F,A[N++]=F,A[N++]=C}}else{m=p.version;for(let _=0,S=0;_<M;_+=3){let N=_+0,C=_+1,D=_+2;A[S++]=N,A[S++]=C,A[S++]=C,A[S++]=D,A[S++]=D,A[S++]=N}}b.version=m;let T=r.get(g);T&&e.remove(T),r.set(g,b)}function d(g){let v=r.get(g);if(v){let p=g.index;p!==null&&v.version<p.version&&u(g)}else u(g);return r.get(g)}function f(){for(let g in s){let v=s[g].deref();v!==void 0&&l(v)}}return{get:c,update:h,getWireframeAttribute:d,dispose:f}}function D_(n,e,t){let i;function s(u){i=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,d){n.drawElements(i,d,r,u*a),t.update(d,i,1)}function c(u,d,f){f!==0&&(n.drawElementsInstanced(i,d,r,u*a,f),t.update(d,i,f))}function h(u,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,u,0,f);let v=0;for(let p=0;p<f;p++)v+=d[p];t.update(v,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function U_(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:Be("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function F_(n,e,t){let i=new WeakMap,s=new Et;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=i.get(o);if(d===void 0||d.count!==u){let N=function(){_.dispose(),i.delete(o),o.removeEventListener("dispose",N)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],M=o.morphAttributes.color||[],R=0;f===!0&&(R=1),g===!0&&(R=2),v===!0&&(R=3);let b=o.attributes.position.count*R,A=1;b>e.maxTextureSize&&(A=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);let T=new Float32Array(b*A*4*u),_=new Ar(T,b,A,u);_.type=Un,_.needsUpdate=!0;let S=R*4;for(let C=0;C<u;C++){let D=p[C],F=m[C],V=M[C],P=b*A*4*C;for(let K=0;K<D.count;K++){let j=K*S;f===!0&&(s.fromBufferAttribute(D,K),T[P+j+0]=s.x,T[P+j+1]=s.y,T[P+j+2]=s.z,T[P+j+3]=0),g===!0&&(s.fromBufferAttribute(F,K),T[P+j+4]=s.x,T[P+j+5]=s.y,T[P+j+6]=s.z,T[P+j+7]=0),v===!0&&(s.fromBufferAttribute(V,K),T[P+j+8]=s.x,T[P+j+9]=s.y,T[P+j+10]=s.z,T[P+j+11]=V.itemSize===4?s.w:1)}}d={count:u,texture:_,size:new Qe(b,A)},i.set(o,d),o.addEventListener("dispose",N)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let f=0;for(let v=0;v<c.length;v++)f+=c[v];let g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function O_(n,e,t,i,s){let r=new WeakMap;function a(c){let h=s.render.frame,u=c.geometry,d=e.get(c,u);if(r.get(d)!==h&&(e.update(d),r.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return d}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var k_={[$c]:"LINEAR_TONE_MAPPING",[Xc]:"REINHARD_TONE_MAPPING",[qc]:"CINEON_TONE_MAPPING",[qr]:"ACES_FILMIC_TONE_MAPPING",[Kc]:"AGX_TONE_MAPPING",[jc]:"NEUTRAL_TONE_MAPPING",[Yc]:"CUSTOM_TONE_MAPPING"};function B_(n,e,t,i,s,r){let a=new Rn(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,h=new Ht;h.setAttribute("position",new lt([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new lt([0,2,0,0,2,0],2));let u=new ho({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new we(h,u),f=new $r(-1,1,1,-1,0,1),g=null,v=null,p=!1,m,M=null,R=[],b=!1;this.setSize=function(A,T){a.setSize(A,T),o!==null&&o.setSize(A,T),l!==null&&l.setSize(A,T);for(let _=0;_<R.length;_++){let S=R[_];S.setSize&&S.setSize(A,T)}},this.setEffects=function(A){R=A,b=R.length>0&&R[0].isRenderPass===!0;let T=a.width,_=a.height;R.length>0&&o===null&&(o=new Rn(T,_,{type:Yn,depthBuffer:!1,stencilBuffer:!1}),l=new Rn(T,_,{type:Yn,depthBuffer:!1,stencilBuffer:!1}));let S=s===!0&&R.some(N=>N.needsDepthTexture===!0);S!==(a.depthTexture!==null)&&(S===!0&&c===null&&(c=new vi(T,_),r===!0&&(c.format=Si,c.type=us)),a.dispose(),a.depthTexture=S?c:null,a.resolveDepthBuffer=S,a.storeMultisampledDepthBuffer=S);for(let N=0;N<R.length;N++){let C=R[N];C.setSize&&C.setSize(T,_),S&&C.needsDepthTexture===!0&&C.setDepthTexture&&C.setDepthTexture(c)}},this.begin=function(A,T){if(p||A.toneMapping===ni&&R.length===0)return!1;if(M=T,T!==null){let _=T.width,S=T.height;(a.width!==_||a.height!==S)&&this.setSize(_,S)}return b===!1&&A.setRenderTarget(a),m=A.toneMapping,A.toneMapping=ni,!0},this.hasRenderPass=function(){return b},this.end=function(A,T){A.toneMapping=m,p=!0;let _=a,S=o;for(let N=0;N<R.length;N++){let C=R[N];C.enabled!==!1&&(C.render(A,S,_,T),C.needsSwap!==!1&&(_=S,S=S===o?l:o))}if(g!==A.outputColorSpace||v!==A.toneMapping){g=A.outputColorSpace,v=A.toneMapping,u.defines={},nt.getTransfer(g)===ht&&(u.defines.SRGB_TRANSFER="");let N=k_[v];N&&(u.defines[N]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=_.texture,A.setRenderTarget(M),A.render(d,f),M=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),u.dispose()}}var Ef=new _n,Tf=new vi(1,1),Af=new Or(1),Rf=new Ar,Cf=new lo,If=new Fr,sf=[],rf=[],af=new Float32Array(16),of=new Float32Array(9),lf=new Float32Array(4);function er(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=sf[s];if(r===void 0&&(r=new Float32Array(s),sf[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function Wt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function $t(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function xl(n,e){let t=rf[e];t===void 0&&(t=new Int32Array(e),rf[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function z_(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function G_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;n.uniform2fv(this.addr,e),$t(t,e)}}function H_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Wt(t,e))return;n.uniform3fv(this.addr,e),$t(t,e)}}function V_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;n.uniform4fv(this.addr,e),$t(t,e)}}function W_(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Wt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),$t(t,e)}else{if(Wt(t,i))return;lf.set(i),n.uniformMatrix2fv(this.addr,!1,lf),$t(t,i)}}function $_(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Wt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),$t(t,e)}else{if(Wt(t,i))return;of.set(i),n.uniformMatrix3fv(this.addr,!1,of),$t(t,i)}}function X_(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Wt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),$t(t,e)}else{if(Wt(t,i))return;af.set(i),n.uniformMatrix4fv(this.addr,!1,af),$t(t,i)}}function q_(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Y_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;n.uniform2iv(this.addr,e),$t(t,e)}}function K_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Wt(t,e))return;n.uniform3iv(this.addr,e),$t(t,e)}}function j_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;n.uniform4iv(this.addr,e),$t(t,e)}}function J_(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Z_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;n.uniform2uiv(this.addr,e),$t(t,e)}}function Q_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Wt(t,e))return;n.uniform3uiv(this.addr,e),$t(t,e)}}function ex(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;n.uniform4uiv(this.addr,e),$t(t,e)}}function vl(n){return n.version===0&&(n.compareFunction=ah,n.needsUpdate=!0),n}function tx(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?r=vl(Tf):r=Ef,t.setTexture2D(e||r,s)}function nx(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Cf,s)}function ix(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_CUBE_SHADOW?r=vl(Af):r=If,t.setTextureCube(e||r,s)}function sx(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Rf,s)}function rx(n){switch(n){case 5126:return z_;case 35664:return G_;case 35665:return H_;case 35666:return V_;case 35674:return W_;case 35675:return $_;case 35676:return X_;case 5124:case 35670:return q_;case 35667:case 35671:return Y_;case 35668:case 35672:return K_;case 35669:case 35673:return j_;case 5125:return J_;case 36294:return Z_;case 36295:return Q_;case 36296:return ex;case 35678:case 36198:case 36298:case 36306:case 35682:return tx;case 35679:case 36299:case 36307:return nx;case 35680:case 36300:case 36308:case 36293:return ix;case 36289:case 36303:case 36311:case 36292:return sx}}function ax(n,e){n.uniform1fv(this.addr,e)}function ox(n,e){let t=er(e,this.size,2);n.uniform2fv(this.addr,t)}function lx(n,e){let t=er(e,this.size,3);n.uniform3fv(this.addr,t)}function cx(n,e){let t=er(e,this.size,4);n.uniform4fv(this.addr,t)}function hx(n,e){let t=er(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function ux(n,e){let t=er(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function dx(n,e){let t=er(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function fx(n,e){n.uniform1iv(this.addr,e)}function px(n,e){n.uniform2iv(this.addr,e)}function mx(n,e){n.uniform3iv(this.addr,e)}function gx(n,e){n.uniform4iv(this.addr,e)}function _x(n,e){n.uniform1uiv(this.addr,e)}function xx(n,e){n.uniform2uiv(this.addr,e)}function vx(n,e){n.uniform3uiv(this.addr,e)}function yx(n,e){n.uniform4uiv(this.addr,e)}function Mx(n,e,t){let i=this.cache,s=e.length,r=xl(t,s);Wt(i,r)||(n.uniform1iv(this.addr,r),$t(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=vl(Tf):a=Ef;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function Sx(n,e,t){let i=this.cache,s=e.length,r=xl(t,s);Wt(i,r)||(n.uniform1iv(this.addr,r),$t(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Cf,r[a])}function bx(n,e,t){let i=this.cache,s=e.length,r=xl(t,s);Wt(i,r)||(n.uniform1iv(this.addr,r),$t(i,r));let a;this.type===n.SAMPLER_CUBE_SHADOW?a=vl(Af):a=If;for(let o=0;o!==s;++o)t.setTextureCube(e[o]||a,r[o])}function wx(n,e,t){let i=this.cache,s=e.length,r=xl(t,s);Wt(i,r)||(n.uniform1iv(this.addr,r),$t(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Rf,r[a])}function Ex(n){switch(n){case 5126:return ax;case 35664:return ox;case 35665:return lx;case 35666:return cx;case 35674:return hx;case 35675:return ux;case 35676:return dx;case 5124:case 35670:return fx;case 35667:case 35671:return px;case 35668:case 35672:return mx;case 35669:case 35673:return gx;case 5125:return _x;case 36294:return xx;case 36295:return vx;case 36296:return yx;case 35678:case 36198:case 36298:case 36306:case 35682:return Mx;case 35679:case 36299:case 36307:return Sx;case 35680:case 36300:case 36308:case 36293:return bx;case 36289:case 36303:case 36311:case 36292:return wx}}var Mh=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=rx(t.type)}},Sh=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ex(t.type)}},bh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],i)}}},vh=/(\w+)(\])?(\[|\.)?/g;function cf(n,e){n.seq.push(e),n.map[e.id]=e}function Tx(n,e,t){let i=n.name,s=i.length;for(vh.lastIndex=0;;){let r=vh.exec(i),a=vh.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){cf(t,c===void 0?new Mh(o,n,e):new Sh(o,n,e));break}else{let u=t.map[o];u===void 0&&(u=new bh(o),cf(t,u)),t=u}}}var Qs=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);Tx(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&i.push(a)}return i}};function hf(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var Ax=37297,Rx=0;function Cx(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}var uf=new ze;function Ix(n){nt._getMatrix(uf,nt.workingColorSpace,n);let e=`mat3( ${uf.elements.map(t=>t.toFixed(4))} )`;switch(nt.getTransfer(n)){case Er:return[e,"LinearTransferOETF"];case ht:return[e,"sRGBTransferOETF"];default:return ke("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function df(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Cx(n.getShaderSource(e),o)}else return r}function Px(n,e){let t=Ix(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var Lx={[$c]:"Linear",[Xc]:"Reinhard",[qc]:"Cineon",[qr]:"ACESFilmic",[Kc]:"AgX",[jc]:"Neutral",[Yc]:"Custom"};function Nx(n,e){let t=Lx[e];return t===void 0?(ke("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var ml=new O;function Dx(){nt.getLuminanceCoefficients(ml);let n=ml.x.toFixed(4),e=ml.y.toFixed(4),t=ml.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ux(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ia).join(`
`)}function Fx(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Ox(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),a=r.name,o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function ia(n){return n!==""}function ff(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function pf(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var kx=/^[ \t]*#include +<([\w\d./]+)>/gm;function wh(n){return n.replace(kx,Bx)}function Bx(n,e){let t=Ke[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return wh(t)}var zx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function mf(n){return n.replace(zx,Gx)}function Gx(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function gf(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var Hx={[os]:"SHADOWMAP_TYPE_PCF",[Ks]:"SHADOWMAP_TYPE_VSM"};function Vx(n){return Hx[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Wx={[Js]:"ENVMAP_MODE_REFRACTION"};function $x(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":Wx[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Xx={[Wc]:"ENVMAP_BLENDING_MULTIPLY",[Ld]:"ENVMAP_BLENDING_MIX",[Nd]:"ENVMAP_BLENDING_ADD"};function qx(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":Xx[n.combine]||"ENVMAP_BLENDING_NONE"}function Yx(n,e,t,i){let s=n.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=Vx(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=$x(t),u=qx(t),d=Ux(t),f=Fx(r),g=s.createProgram(),v,p,m=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(ia).join(`
`),v.length>0&&(v+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(ia).join(`
`),p.length>0&&(p+=`
`)):(v=[gf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ia).join(`
`),p=[gf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ni?"#define TONE_MAPPING":"",t.toneMapping!==ni?Ke.tonemapping_pars_fragment:"",t.toneMapping!==ni?Nx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ke.colorspace_pars_fragment,Px("linearToOutputTexel",t.outputColorSpace),Dx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ia).join(`
`)),a=wh(a),a=ff(a,t),a=pf(a,t),o=wh(o),o=ff(o,t),o=pf(o,t),a=mf(a),o=mf(o),t.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,v=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,p=["#define varying in",t.glslVersion===oh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===oh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let M=m+v+a,R=m+p+o,b=hf(s,s.VERTEX_SHADER,M),A=hf(s,s.FRAGMENT_SHADER,R);s.attachShader(g,b),s.attachShader(g,A),t.index0AttributeName!==void 0?s.bindAttribLocation(g,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function T(C){if(n.debug.checkShaderErrors){let D=s.getProgramInfoLog(g)||"",F=s.getShaderInfoLog(b)||"",V=s.getShaderInfoLog(A)||"",P=D.trim(),K=F.trim(),j=V.trim(),H=!0,q=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(H=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,g,b,A);else{let B=df(s,b,"vertex"),W=df(s,A,"fragment");Be("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+P+`
`+B+`
`+W)}else P!==""?ke("WebGLProgram: Program Info Log:",P):(K===""||j==="")&&(q=!1);q&&(C.diagnostics={runnable:H,programLog:P,vertexShader:{log:K,prefix:v},fragmentShader:{log:j,prefix:p}})}s.deleteShader(b),s.deleteShader(A),_=new Qs(s,g),S=Ox(s,g)}let _;this.getUniforms=function(){return _===void 0&&T(this),_};let S;this.getAttributes=function(){return S===void 0&&T(this),S};let N=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=s.getProgramParameter(g,Ax)),N},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Rx++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=b,this.fragmentShader=A,this}var Kx=0,Eh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Th(e),t.set(e,i)),i}},Th=class{constructor(e){this.id=Kx++,this.code=e,this.usedTimes=0}};function jx(n){return n===Ki||n===Qr||n===ea}function Jx(n,e,t,i,s,r){let a=new Rr,o=new Eh,l=new Set,c=[],h=new Map,u=i.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(_){return l.add(_),_===0?"uv":`uv${_}`}function g(_,S,N,C,D,F){let V=C.fog,P=D.geometry,K=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?C.environment:null,j=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,H=e.get(_.envMap||K,j),q=d[_.type],B=i.precision;_.precision!==null&&(B=i.getMaxPrecision(_.precision),B!==_.precision&&ke("WebGLProgram.getParameters:",_.precision,"not supported, using",B,"instead."));let W=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,X=W!==void 0?W.length:0,oe=0;P.morphAttributes.position!==void 0&&(oe=1),P.morphAttributes.normal!==void 0&&(oe=2),P.morphAttributes.color!==void 0&&(oe=3);let Ie,J,re,_e;if(q){let xe=si[q];Ie=xe.vertexShader,J=xe.fragmentShader}else{Ie=_.vertexShader,J=_.fragmentShader;let xe=o.getVertexShaderStage(_),ut=o.getFragmentShaderStage(_);o.update(_,xe,ut),re=xe.id,_e=ut.id}let Pe=n.getRenderTarget(),ie=n.state.buffers.depth.getReversed(),De=D.isInstancedMesh===!0,dt=D.isBatchedMesh===!0,Ue=!!_.map,at=!!_.matcap,ct=!!H,Ve=ct&&H.isPMREMTexture===!0,It=!!_.aoMap,mt=!!_.lightMap,sn=!!_.bumpMap&&_.wireframe===!1,Me=!!_.normalMap,We=!!_.displacementMap,je=!!_.emissiveMap,St=!!_.metalnessMap,Rt=!!_.roughnessMap,Zt=_.anisotropy>0,U=_.clearcoat>0,Pn=_.diffuseRoughness>0,bt=_.dispersion>0,wt=_.retroreflectivity>0,ge=_.iridescence>0,Bt=_.sheen>0,Oe=_.transmission>0,Ge=Zt&&!!_.anisotropyMap,E=U&&!!_.clearcoatMap,x=U&&!!_.clearcoatNormalMap,z=U&&!!_.clearcoatRoughnessMap,se=Pn&&!!_.diffuseRoughnessMap,ne=ge&&!!_.iridescenceMap,ce=ge&&!!_.iridescenceThicknessMap,pe=Bt&&!!_.sheenColorMap,Q=Bt&&!!_.sheenRoughnessMap,ee=!!_.specularMap,ue=!!_.specularColorMap,I=!!_.specularIntensityMap,te=Oe&&!!_.transmissionMap,Z=Oe&&!!_.thicknessMap,de=!!_.gradientMap,le=!!_.alphaMap,he=_.alphaTest>0,Ne=!!_.alphaHash,Ye=!!_.extensions,ae=ni;_.toneMapped&&(Pe===null||Pe.isXRRenderTarget===!0)&&(ae=n.toneMapping);let Fe=Ve?H.isCompressedCubeTexture?H.image[0].mipmaps:H.mipmaps:null,Xe={shaderID:q,shaderType:_.type,shaderName:_.name,vertexShader:Ie,fragmentShader:J,defines:_.defines,customVertexShaderID:re,customFragmentShaderID:_e,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:B,batching:dt,batchingColor:dt&&D._colorsTexture!==null,instancing:De,instancingColor:De&&D.instanceColor!==null,instancingMorph:De&&D.morphTexture!==null,outputColorSpace:Pe===null?n.outputColorSpace:Pe.isXRRenderTarget===!0?Pe.texture.colorSpace:nt.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Ue,matcap:at,envMap:ct,envMapMode:ct&&H.mapping,envMapPMREM:Ve,envMapMaxLod:Ve?Fe.length-1:null,envMapSize:Ve?Fe[0].width:null,aoMap:It,lightMap:mt,bumpMap:sn,normalMap:Me,displacementMap:We,emissiveMap:je,normalMapObjectSpace:Me&&_.normalMapType===Fd,normalMapTangentSpace:Me&&_.normalMapType===fl,packedNormalMap:Me&&_.normalMapType===fl&&jx(_.normalMap.format),metalnessMap:St,roughnessMap:Rt,anisotropy:Zt,anisotropyMap:Ge,clearcoat:U,clearcoatMap:E,clearcoatNormalMap:x,clearcoatRoughnessMap:z,diffuseRoughness:Pn,diffuseRoughnessMap:se,dispersion:bt,retroreflection:wt,iridescence:ge,iridescenceMap:ne,iridescenceThicknessMap:ce,sheen:Bt,sheenColorMap:pe,sheenRoughnessMap:Q,specularMap:ee,specularColorMap:ue,specularIntensityMap:I,transmission:Oe,transmissionMap:te,thicknessMap:Z,gradientMap:de,opaque:_.transparent===!1&&_.blending===js&&_.alphaToCoverage===!1,alphaMap:le,alphaTest:he,alphaHash:Ne,combine:_.combine,mapUv:Ue&&f(_.map.channel),aoMapUv:It&&f(_.aoMap.channel),lightMapUv:mt&&f(_.lightMap.channel),bumpMapUv:sn&&f(_.bumpMap.channel),normalMapUv:Me&&f(_.normalMap.channel),displacementMapUv:We&&f(_.displacementMap.channel),emissiveMapUv:je&&f(_.emissiveMap.channel),metalnessMapUv:St&&f(_.metalnessMap.channel),roughnessMapUv:Rt&&f(_.roughnessMap.channel),anisotropyMapUv:Ge&&f(_.anisotropyMap.channel),clearcoatMapUv:E&&f(_.clearcoatMap.channel),clearcoatNormalMapUv:x&&f(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:z&&f(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:se&&f(_.diffuseRoughnessMap.channel),iridescenceMapUv:ne&&f(_.iridescenceMap.channel),iridescenceThicknessMapUv:ce&&f(_.iridescenceThicknessMap.channel),sheenColorMapUv:pe&&f(_.sheenColorMap.channel),sheenRoughnessMapUv:Q&&f(_.sheenRoughnessMap.channel),specularMapUv:ee&&f(_.specularMap.channel),specularColorMapUv:ue&&f(_.specularColorMap.channel),specularIntensityMapUv:I&&f(_.specularIntensityMap.channel),transmissionMapUv:te&&f(_.transmissionMap.channel),thicknessMapUv:Z&&f(_.thicknessMap.channel),alphaMapUv:le&&f(_.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(Me||Zt),vertexNormals:!!P.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!P.attributes.uv&&(Ue||le),fog:!!V,useFog:_.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||P.attributes.normal===void 0&&Me===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:ie,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:P.attributes.position!==void 0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:X,morphTextureStride:oe,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:F.filter(xe=>xe.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:n.shadowMap.enabled&&N.length>0,shadowMapType:n.shadowMap.type,toneMapping:ae,decodeVideoTexture:Ue&&_.map.isVideoTexture===!0&&nt.getTransfer(_.map.colorSpace)===ht,decodeVideoTextureEmissive:je&&_.emissiveMap.isVideoTexture===!0&&nt.getTransfer(_.emissiveMap.colorSpace)===ht,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===jt,flipSided:_.side===nn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Ye&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ye&&_.extensions.multiDraw===!0||dt)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Xe.vertexUv1s=l.has(1),Xe.vertexUv2s=l.has(2),Xe.vertexUv3s=l.has(3),l.clear(),Xe}function v(_){let S=[];if(_.shaderID?S.push(_.shaderID):(S.push(_.customVertexShaderID),S.push(_.customFragmentShaderID)),_.defines!==void 0)for(let N in _.defines)S.push(N),S.push(_.defines[N]);return _.isRawShaderMaterial===!1&&(p(S,_),m(S,_),S.push(n.outputColorSpace)),S.push(_.customProgramCacheKey),S.join()}function p(_,S){_.push(S.precision),_.push(S.outputColorSpace),_.push(S.envMapMode),_.push(S.envMapPMREM),_.push(S.envMapMaxLod),_.push(S.envMapSize),_.push(S.mapUv),_.push(S.alphaMapUv),_.push(S.lightMapUv),_.push(S.aoMapUv),_.push(S.bumpMapUv),_.push(S.normalMapUv),_.push(S.displacementMapUv),_.push(S.emissiveMapUv),_.push(S.metalnessMapUv),_.push(S.roughnessMapUv),_.push(S.anisotropyMapUv),_.push(S.clearcoatMapUv),_.push(S.clearcoatNormalMapUv),_.push(S.clearcoatRoughnessMapUv),_.push(S.diffuseRoughnessMapUv),_.push(S.iridescenceMapUv),_.push(S.iridescenceThicknessMapUv),_.push(S.sheenColorMapUv),_.push(S.sheenRoughnessMapUv),_.push(S.specularMapUv),_.push(S.specularColorMapUv),_.push(S.specularIntensityMapUv),_.push(S.transmissionMapUv),_.push(S.thicknessMapUv),_.push(S.combine),_.push(S.fogExp2),_.push(S.sizeAttenuation),_.push(S.morphTargetsCount),_.push(S.numSunLights),_.push(S.numDirLights),_.push(S.numPointLights),_.push(S.numSpotLights),_.push(S.numSpotLightMaps),_.push(S.numHemiLights),_.push(S.numRectAreaLights),_.push(S.numSunLightShadows),_.push(S.numDirLightShadows),_.push(S.numPointLightShadows),_.push(S.numSpotLightShadows),_.push(S.numSpotLightShadowsWithMaps),_.push(S.numLightProbes),_.push(S.numLightProbeGrids),_.push(S.shadowMapType),_.push(S.toneMapping),_.push(S.numClippingPlanes),_.push(S.numClipIntersection),_.push(S.depthPacking)}function m(_,S){a.disableAll(),S.instancing&&a.enable(0),S.instancingColor&&a.enable(1),S.instancingMorph&&a.enable(2),S.matcap&&a.enable(3),S.envMap&&a.enable(4),S.normalMapObjectSpace&&a.enable(5),S.normalMapTangentSpace&&a.enable(6),S.clearcoat&&a.enable(7),S.iridescence&&a.enable(8),S.alphaTest&&a.enable(9),S.vertexColors&&a.enable(10),S.vertexAlphas&&a.enable(11),S.vertexUv1s&&a.enable(12),S.vertexUv2s&&a.enable(13),S.vertexUv3s&&a.enable(14),S.vertexTangents&&a.enable(15),S.anisotropy&&a.enable(16),S.alphaHash&&a.enable(17),S.batching&&a.enable(18),S.dispersion&&a.enable(19),S.retroreflection&&a.enable(24),S.diffuseRoughness&&a.enable(25),S.batchingColor&&a.enable(20),S.gradientMap&&a.enable(21),S.packedNormalMap&&a.enable(22),S.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),S.numLightProbeGrids>0&&a.enable(22),S.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function M(_){let S=d[_.type],N;if(S){let C=si[S];N=jd.clone(C.uniforms)}else N=_.uniforms;return N}function R(_,S){let N=h.get(S);return N!==void 0?++N.usedTimes:(N=new Yx(n,S,_,s),c.push(N),h.set(S,N)),N}function b(_){if(--_.usedTimes===0){let S=c.indexOf(_);c[S]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function A(_){o.remove(_)}function T(){o.dispose()}return{getParameters:g,getProgramCacheKey:v,getUniforms:M,acquireProgram:R,releaseProgram:b,releaseShaderCache:A,programs:c,dispose:T}}function Zx(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function Qx(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function _f(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function xf(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function o(d,f,g,v,p,m){let M=n[e];return M===void 0?(M={id:d.id,object:d,geometry:f,material:g,materialVariant:a(d),groupOrder:v,renderOrder:d.renderOrder,z:p,group:m},n[e]=M):(M.id=d.id,M.object=d,M.geometry=f,M.material=g,M.materialVariant=a(d),M.groupOrder=v,M.renderOrder=d.renderOrder,M.z=p,M.group=m),e++,M}function l(d,f,g,v,p,m,M){M.reversedDepth===!0&&(p=-p);let R=o(d,f,g,v,p,m);g.transmission>0?i.push(R):g.transparent===!0?s.push(R):t.push(R)}function c(d,f,g,v,p,m){let M=o(d,f,g,v,p,m);g.transmission>0?i.unshift(M):g.transparent===!0?s.unshift(M):t.unshift(M)}function h(d,f){t.length>1&&t.sort(d||Qx),i.length>1&&i.sort(f||_f),s.length>1&&s.sort(f||_f)}function u(){for(let d=e,f=n.length;d<f;d++){let g=n[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:u,sort:h}}function ev(){let n=new WeakMap;function e(i,s){let r=n.get(i),a;return r===void 0?(a=new xf,n.set(i,[a])):s>=r.length?(a=new xf,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function tv(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new O,color:new Je};break;case"SpotLight":t={position:new O,direction:new O,color:new Je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new Je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new Je,groundColor:new Je};break;case"RectAreaLight":t={color:new Je,position:new O,halfWidth:new O,halfHeight:new O};break}return n[e.id]=t,t}}}function nv(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var iv=0;function sv(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function rv(n){let e=new tv,t=nv(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new O);let s=new O,r=new rt,a=new rt;function o(c){let h=0,u=0,d=0;for(let F=0;F<9;F++)i.probe[F].set(0,0,0);let f=0,g=0,v=0,p=0,m=0,M=0,R=0,b=0,A=0,T=0,_=0,S=0,N=0,C=0;c.sort(sv);for(let F=0,V=c.length;F<V;F++){let P=c[F],K=P.color,j=P.intensity,H=P.distance,q=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===Ki?q=P.shadow.map.texture:q=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=K.r*j,u+=K.g*j,d+=K.b*j;else if(P.isLightProbe){for(let B=0;B<9;B++)i.probe[B].addScaledVector(P.sh.coefficients[B],j);C++}else if(P.isSunLight){let B=e.get(P);if(B.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let W=P.shadow,X=t.get(P);X.shadowIntensity=W.intensity,X.shadowBias=W.bias,X.shadowNormalBias=W.normalBias,X.shadowRadius=W.radius,X.shadowMapSize.copy(W.mapSize).multiply(W.getFrameExtents()),i.sunShadow[g]=X,i.sunShadowMap[g]=q;let oe=W.getViewportCount();for(let Ie=0;Ie<oe;Ie++)i.sunShadowMatrix[v+Ie]=W.getMatrix(Ie),i.sunShadowCascade[v+Ie]=W._cascadeData[Ie];v+=oe,g++}i.sun[f]=B,f++}else if(P.isDirectionalLight){let B=e.get(P);if(B.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let W=P.shadow,X=t.get(P);X.shadowIntensity=W.intensity,X.shadowBias=W.bias,X.shadowNormalBias=W.normalBias,X.shadowRadius=W.radius,X.shadowMapSize=W.mapSize,i.directionalShadow[p]=X,i.directionalShadowMap[p]=q,i.directionalShadowMatrix[p]=P.shadow.matrix,A++}i.directional[p]=B,p++}else if(P.isSpotLight){let B=e.get(P);B.position.setFromMatrixPosition(P.matrixWorld),B.color.copy(K).multiplyScalar(j),B.distance=H,B.coneCos=Math.cos(P.angle),B.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),B.decay=P.decay,i.spot[M]=B;let W=P.shadow;if(P.map&&(i.spotLightMap[S]=P.map,S++,W.updateMatrices(P),P.castShadow&&N++),i.spotLightMatrix[M]=W.matrix,P.castShadow){let X=t.get(P);X.shadowIntensity=W.intensity,X.shadowBias=W.bias,X.shadowNormalBias=W.normalBias,X.shadowRadius=W.radius,X.shadowMapSize=W.mapSize,i.spotShadow[M]=X,i.spotShadowMap[M]=q,_++}M++}else if(P.isRectAreaLight){let B=e.get(P);B.color.copy(K).multiplyScalar(j),B.halfWidth.set(P.width*.5,0,0),B.halfHeight.set(0,P.height*.5,0),i.rectArea[R]=B,R++}else if(P.isPointLight){let B=e.get(P);if(B.color.copy(P.color).multiplyScalar(P.intensity),B.distance=P.distance,B.decay=P.decay,P.castShadow){let W=P.shadow,X=t.get(P);X.shadowIntensity=W.intensity,X.shadowBias=W.bias,X.shadowNormalBias=W.normalBias,X.shadowRadius=W.radius,X.shadowMapSize=W.mapSize,X.shadowCameraNear=W.camera.near,X.shadowCameraFar=W.camera.far,i.pointShadow[m]=X,i.pointShadowMap[m]=q,i.pointShadowMatrix[m]=P.shadow.matrix,T++}i.point[m]=B,m++}else if(P.isHemisphereLight){let B=e.get(P);B.skyColor.copy(P.color).multiplyScalar(j),B.groundColor.copy(P.groundColor).multiplyScalar(j),i.hemi[b]=B,b++}}R>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ye.LTC_FLOAT_1,i.rectAreaLTC2=ye.LTC_FLOAT_2):(i.rectAreaLTC1=ye.LTC_HALF_1,i.rectAreaLTC2=ye.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;let D=i.hash;(D.sunLength!==f||D.directionalLength!==p||D.pointLength!==m||D.spotLength!==M||D.rectAreaLength!==R||D.hemiLength!==b||D.numSunShadows!==g||D.numDirectionalShadows!==A||D.numPointShadows!==T||D.numSpotShadows!==_||D.numSpotMaps!==S||D.numLightProbes!==C)&&(i.sun.length=f,i.directional.length=p,i.spot.length=M,i.rectArea.length=R,i.point.length=m,i.hemi.length=b,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=v,i.sunShadowCascade.length=v,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.directionalShadowMatrix.length=A,i.pointShadow.length=T,i.pointShadowMap.length=T,i.pointShadowMatrix.length=T,i.spotShadow.length=_,i.spotShadowMap.length=_,i.spotLightMatrix.length=_+S-N,i.spotLightMap.length=S,i.numSpotLightShadowsWithMaps=N,i.numLightProbes=C,D.sunLength=f,D.directionalLength=p,D.pointLength=m,D.spotLength=M,D.rectAreaLength=R,D.hemiLength=b,D.numSunShadows=g,D.numDirectionalShadows=A,D.numPointShadows=T,D.numSpotShadows=_,D.numSpotMaps=S,D.numLightProbes=C,i.version=iv++)}function l(c,h){let u=0,d=0,f=0,g=0,v=0,p=0,m=h.matrixWorldInverse;for(let M=0,R=c.length;M<R;M++){let b=c[M];if(b.isSunLight){let A=i.sun[u];A.direction.setFromMatrixPosition(b.matrixWorld),A.direction.transformDirection(m),u++}else if(b.isDirectionalLight){let A=i.directional[d];A.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(m),d++}else if(b.isSpotLight){let A=i.spot[g];A.position.setFromMatrixPosition(b.matrixWorld),A.position.applyMatrix4(m),A.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(m),g++}else if(b.isRectAreaLight){let A=i.rectArea[v];A.position.setFromMatrixPosition(b.matrixWorld),A.position.applyMatrix4(m),a.identity(),r.copy(b.matrixWorld),r.premultiply(m),a.extractRotation(r),A.halfWidth.set(b.width*.5,0,0),A.halfHeight.set(0,b.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),v++}else if(b.isPointLight){let A=i.point[f];A.position.setFromMatrixPosition(b.matrixWorld),A.position.applyMatrix4(m),f++}else if(b.isHemisphereLight){let A=i.hemi[p];A.direction.setFromMatrixPosition(b.matrixWorld),A.direction.transformDirection(m),p++}}}return{setup:o,setupView:l,state:i}}function vf(n){let e=new rv(n),t=[],i=[],s=[];function r(u){h.camera=u,t.length=0,i.length=0,s.length=0}function a(u){u.isLightProbeGrid?s.push(u):t.push(u)}function o(u){i.push(u)}function l(){e.setup(t),s.sort((u,d)=>u.priority-d.priority||u.id-d.id)}function c(u){e.setupView(t,u)}let h={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function av(n){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new vf(n),e.set(s,[o])):r>=a.length?(o=new vf(n),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}var ov=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,lv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,cv=[new O(1,0,0),new O(-1,0,0),new O(0,1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1)],hv=[new O(0,-1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1),new O(0,-1,0),new O(0,-1,0)],yf=new rt,na=new O,yh=new O;function uv(n,e,t){let i=new Vi,s=new Qe,r=new Qe,a=new Et,o=new uo,l=new fo,c={},h=t.maxTextureSize,u={[Yi]:nn,[nn]:Yi,[jt]:jt},d=new Dn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Qe},radius:{value:4}},vertexShader:ov,fragmentShader:lv}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new Ht;g.setAttribute("position",new mn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new we(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=os;let m=this.type;this.render=function(T,_,S){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;this.type===fd&&(ke("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=os);let N=n.getRenderTarget(),C=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),F=n.state;F.setBlending(ls),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let V=m!==this.type;V&&_.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(K=>K.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,K=T.length;P<K;P++){let j=T[P],H=j.shadow;if(H===void 0){ke("WebGLShadowMap:",j,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);let q=H.getFrameExtents();s.multiply(q),r.copy(H.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/q.x),s.x=r.x*q.x,H.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/q.y),s.y=r.y*q.y,H.mapSize.y=r.y));let B=n.state.buffers.depth.getReversed();if(H.camera._reversedDepth=B,H.map===null||V===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===Ks){if(j.isPointLight){ke("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new Rn(s.x,s.y,{format:Ki,type:Yn,minFilter:gn,magFilter:gn,generateMipmaps:!1}),H.map.texture.name=j.name+".shadowMap",H.map.depthTexture=new vi(s.x,s.y,Un),H.map.depthTexture.name=j.name+".shadowMapDepth",H.map.depthTexture.format=gi,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Kt,H.map.depthTexture.magFilter=Kt}else j.isPointLight?(H.map=new sa(s.x),H.map.depthTexture=new Or(s.x,qn)):(H.map=new Rn(s.x,s.y),H.map.depthTexture=new vi(s.x,s.y,qn)),H.map.depthTexture.name=j.name+".shadowMap",H.map.depthTexture.format=gi,this.type===os?(H.map.depthTexture.compareFunction=B?rh:sh,H.map.depthTexture.minFilter=gn,H.map.depthTexture.magFilter=gn):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Kt,H.map.depthTexture.magFilter=Kt);H.camera.updateProjectionMatrix()}H.map.isWebGLCubeRenderTarget!==!0&&(H.map.width!==s.x||H.map.height!==s.y)&&H.map.setSize(s.x,s.y);let W=H.map.isWebGLCubeRenderTarget?6:H.getViewportCount();j.isPointLight!==!0&&H.updateMatrices(j,S);let X=(H.camera.layers.mask&4294967294)!==0?H.camera.layers:S.layers;for(let oe=0;oe<W;oe++){let Ie=H.getCamera(oe);if(j.isPointLight){let J=H.camera,re=H.matrix,_e=j.distance||J.far;_e!==J.far&&(J.far=_e,J.updateProjectionMatrix()),na.setFromMatrixPosition(j.matrixWorld),J.position.copy(na),yh.copy(J.position),yh.add(cv[oe]),J.up.copy(hv[oe]),J.lookAt(yh),J.updateMatrixWorld(),re.makeTranslation(-na.x,-na.y,-na.z),yf.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),H._frustum.setFromProjectionMatrix(yf,J.coordinateSystem,J.reversedDepth)}if(H.map.isWebGLCubeRenderTarget)n.setRenderTarget(H.map,oe),n.clear();else{oe===0&&(n.setRenderTarget(H.map),n.clear());let J=H.getViewport(oe);a.set(r.x*J.x,r.y*J.y,r.x*J.z,r.y*J.w),F.viewport(a)}i=H.getFrustum(oe),b(_,S,Ie,j,X,this.type)}H.isPointLightShadow!==!0&&this.type===Ks&&M(H,S),H.needsUpdate=!1}m=this.type,p.needsUpdate=!1,n.setRenderTarget(N,C,D)};function M(T,_){let S=e.update(v);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null?T.mapPass=new Rn(s.x,s.y,{format:Ki,type:Yn}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),d.uniforms.shadow_pass.value=T.map.depthTexture,d.uniforms.resolution.value.set(T.map.width,T.map.height),d.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(_,null,S,d,v,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value.set(T.map.width,T.map.height),f.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(_,null,S,f,v,null)}function R(T,_,S,N){let C=null,D=S.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(D!==void 0)C=D;else if(C=S.isPointLight===!0?l:o,n.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){let F=C.uuid,V=_.uuid,P=c[F];P===void 0&&(P={},c[F]=P);let K=P[V];K===void 0&&(K=C.clone(),P[V]=K,_.addEventListener("dispose",A)),C=K}if(C.visible=_.visible,C.wireframe=_.wireframe,N===Ks?C.side=_.shadowSide!==null?_.shadowSide:_.side:C.side=_.shadowSide!==null?_.shadowSide:u[_.side],C.alphaMap=_.alphaMap,C.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,C.map=_.map,C.clipShadows=_.clipShadows,C.clippingPlanes=_.clippingPlanes,C.clipIntersection=_.clipIntersection,C.displacementMap=_.displacementMap,C.displacementScale=_.displacementScale,C.displacementBias=_.displacementBias,C.wireframeLinewidth=_.wireframeLinewidth,C.linewidth=_.linewidth,S.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let F=n.properties.get(C);F.light=S}return C}function b(T,_,S,N,C,D){if(T.visible===!1)return;if(T.layers.test(C)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&D===Ks)&&(!T.frustumCulled||T.intersectsFrustum(i))){T.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,T.matrixWorld);let P=e.update(T),K=T.material;if(Array.isArray(K)){let j=P.groups;for(let H=0,q=j.length;H<q;H++){let B=j[H],W=K[B.materialIndex];if(W&&W.visible){let X=R(T,W,N,D);T.onBeforeShadow(n,T,_,S,P,X,B),n.renderBufferDirect(S,null,P,X,T,B),T.onAfterShadow(n,T,_,S,P,X,B)}}}else if(K.visible){let j=R(T,K,N,D);T.onBeforeShadow(n,T,_,S,P,j,null),n.renderBufferDirect(S,null,P,j,T,null),T.onAfterShadow(n,T,_,S,P,j,null)}}let V=T.children;for(let P=0,K=V.length;P<K;P++)b(V[P],_,S,N,C,D)}function A(T){T.target.removeEventListener("dispose",A);for(let S in c){let N=c[S],C=T.target.uuid;C in N&&(N[C].dispose(),delete N[C])}}}function dv(n,e){function t(){let I=!1,te=new Et,Z=null,de=new Et(0,0,0,0);return{setMask:function(le){Z!==le&&!I&&(n.colorMask(le,le,le,le),Z=le)},setLocked:function(le){I=le},setClear:function(le,he,Ne,Ye,ae){ae===!0&&(le*=Ye,he*=Ye,Ne*=Ye),te.set(le,he,Ne,Ye),de.equals(te)===!1&&(n.clearColor(le,he,Ne,Ye),de.copy(te))},reset:function(){I=!1,Z=null,de.set(-1,0,0,0)}}}function i(){let I=!1,te=!1,Z=null,de=null,le=null;return{setReversed:function(he){if(te!==he){let Ne=e.get("EXT_clip_control");he?Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.ZERO_TO_ONE_EXT):Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.NEGATIVE_ONE_TO_ONE_EXT),te=he;let Ye=le;le=null,this.setClear(Ye)}},getReversed:function(){return te},setTest:function(he){he?ie(n.DEPTH_TEST):De(n.DEPTH_TEST)},setMask:function(he){Z!==he&&!I&&(n.depthMask(he),Z=he)},setFunc:function(he){if(te&&(he=qd[he]),de!==he){switch(he){case ja:n.depthFunc(n.NEVER);break;case Ja:n.depthFunc(n.ALWAYS);break;case Za:n.depthFunc(n.LESS);break;case Bs:n.depthFunc(n.LEQUAL);break;case Qa:n.depthFunc(n.EQUAL);break;case eo:n.depthFunc(n.GEQUAL);break;case to:n.depthFunc(n.GREATER);break;case no:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}de=he}},setLocked:function(he){I=he},setClear:function(he){le!==he&&(le=he,te&&(he=1-he),n.clearDepth(he))},reset:function(){I=!1,Z=null,de=null,le=null,te=!1}}}function s(){let I=!1,te=null,Z=null,de=null,le=null,he=null,Ne=null,Ye=null,ae=null;return{setTest:function(Fe){I||(Fe?ie(n.STENCIL_TEST):De(n.STENCIL_TEST))},setMask:function(Fe){te!==Fe&&!I&&(n.stencilMask(Fe),te=Fe)},setFunc:function(Fe,Xe,xe){(Z!==Fe||de!==Xe||le!==xe)&&(n.stencilFunc(Fe,Xe,xe),Z=Fe,de=Xe,le=xe)},setOp:function(Fe,Xe,xe){(he!==Fe||Ne!==Xe||Ye!==xe)&&(n.stencilOp(Fe,Xe,xe),he=Fe,Ne=Xe,Ye=xe)},setLocked:function(Fe){I=Fe},setClear:function(Fe){ae!==Fe&&(n.clearStencil(Fe),ae=Fe)},reset:function(){I=!1,te=null,Z=null,de=null,le=null,he=null,Ne=null,Ye=null,ae=null}}}let r=new t,a=new i,o=new s,l={},c=new WeakMap,h={},u={},d={},f=new WeakMap,g=[],v=null,p=!1,m=null,M=null,R=null,b=null,A=null,T=null,_=null,S=new Je(0,0,0),N=0,C=!1,D=null,F=null,V=null,P=null,K=null,j=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,q=0,B=n.getParameter(n.VERSION);B.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(B)[1]),H=q>=1):B.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),H=q>=2);let W=null,X={},oe=n.getParameter(n.SCISSOR_BOX),Ie=n.getParameter(n.VIEWPORT),J=new Et().fromArray(oe),re=new Et().fromArray(Ie);function _e(I,te,Z,de){let le=new Uint8Array(4),he=n.createTexture();n.bindTexture(I,he),n.texParameteri(I,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(I,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ne=0;Ne<Z;Ne++)I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY?n.texImage3D(te,0,n.RGBA,1,1,de,0,n.RGBA,n.UNSIGNED_BYTE,le):n.texImage2D(te+Ne,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,le);return he}let Pe={};Pe[n.TEXTURE_2D]=_e(n.TEXTURE_2D,n.TEXTURE_2D,1),Pe[n.TEXTURE_CUBE_MAP]=_e(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Pe[n.TEXTURE_2D_ARRAY]=_e(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Pe[n.TEXTURE_3D]=_e(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ie(n.DEPTH_TEST),a.setFunc(Bs),sn(!1),Me(kc),ie(n.CULL_FACE),It(ls);function ie(I){h[I]!==!0&&(n.enable(I),h[I]=!0)}function De(I){h[I]!==!1&&(n.disable(I),h[I]=!1)}function dt(I,te){return d[I]!==te?(n.bindFramebuffer(I,te),d[I]=te,I===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=te),I===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=te),!0):!1}function Ue(I,te){let Z=g,de=!1;if(I){Z=f.get(te),Z===void 0&&(Z=[],f.set(te,Z));let le=I.textures;if(Z.length!==le.length||Z[0]!==n.COLOR_ATTACHMENT0){for(let he=0,Ne=le.length;he<Ne;he++)Z[he]=n.COLOR_ATTACHMENT0+he;Z.length=le.length,de=!0}}else Z[0]!==n.BACK&&(Z[0]=n.BACK,de=!0);de&&n.drawBuffers(Z)}function at(I){return v!==I?(n.useProgram(I),v=I,!0):!1}let ct={[cs]:n.FUNC_ADD,[md]:n.FUNC_SUBTRACT,[gd]:n.FUNC_REVERSE_SUBTRACT};ct[_d]=n.MIN,ct[xd]=n.MAX;let Ve={[vd]:n.ZERO,[yd]:n.ONE,[Md]:n.SRC_COLOR,[Hc]:n.SRC_ALPHA,[Ad]:n.SRC_ALPHA_SATURATE,[Ed]:n.DST_COLOR,[bd]:n.DST_ALPHA,[Sd]:n.ONE_MINUS_SRC_COLOR,[Vc]:n.ONE_MINUS_SRC_ALPHA,[Td]:n.ONE_MINUS_DST_COLOR,[wd]:n.ONE_MINUS_DST_ALPHA,[Rd]:n.CONSTANT_COLOR,[Cd]:n.ONE_MINUS_CONSTANT_COLOR,[Id]:n.CONSTANT_ALPHA,[Pd]:n.ONE_MINUS_CONSTANT_ALPHA};function It(I,te,Z,de,le,he,Ne,Ye,ae,Fe){if(I===ls){p===!0&&(De(n.BLEND),p=!1);return}if(p===!1&&(ie(n.BLEND),p=!0),I!==pd){if(I!==m||Fe!==C){if((M!==cs||A!==cs)&&(n.blendEquation(n.FUNC_ADD),M=cs,A=cs),Fe)switch(I){case js:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Bc:n.blendFunc(n.ONE,n.ONE);break;case zc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Gc:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Be("WebGLState: Invalid blending: ",I);break}else switch(I){case js:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Bc:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case zc:Be("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Gc:Be("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Be("WebGLState: Invalid blending: ",I);break}R=null,b=null,T=null,_=null,S.set(0,0,0),N=0,m=I,C=Fe}return}le=le||te,he=he||Z,Ne=Ne||de,(te!==M||le!==A)&&(n.blendEquationSeparate(ct[te],ct[le]),M=te,A=le),(Z!==R||de!==b||he!==T||Ne!==_)&&(n.blendFuncSeparate(Ve[Z],Ve[de],Ve[he],Ve[Ne]),R=Z,b=de,T=he,_=Ne),(Ye.equals(S)===!1||ae!==N)&&(n.blendColor(Ye.r,Ye.g,Ye.b,ae),S.copy(Ye),N=ae),m=I,C=!1}function mt(I,te){I.side===jt?De(n.CULL_FACE):ie(n.CULL_FACE);let Z=I.side===nn;te&&(Z=!Z),sn(Z),I.blending===js&&I.transparent===!1?It(ls):It(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),r.setMask(I.colorWrite);let de=I.stencilWrite;o.setTest(de),de&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),je(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?ie(n.SAMPLE_ALPHA_TO_COVERAGE):De(n.SAMPLE_ALPHA_TO_COVERAGE)}function sn(I){D!==I&&(I?n.frontFace(n.CW):n.frontFace(n.CCW),D=I)}function Me(I){I!==ud?(ie(n.CULL_FACE),I!==F&&(I===kc?n.cullFace(n.BACK):I===dd?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):De(n.CULL_FACE),F=I}function We(I){I!==V&&(H&&n.lineWidth(I),V=I)}function je(I,te,Z){I?(ie(n.POLYGON_OFFSET_FILL),(P!==te||K!==Z)&&(P=te,K=Z,a.getReversed()&&(te=-te,Z=-Z),n.polygonOffset(te,Z))):De(n.POLYGON_OFFSET_FILL)}function St(I){I?ie(n.SCISSOR_TEST):De(n.SCISSOR_TEST)}function Rt(I){I===void 0&&(I=n.TEXTURE0+j-1),W!==I&&(n.activeTexture(I),W=I)}function Zt(I,te,Z){Z===void 0&&(W===null?Z=n.TEXTURE0+j-1:Z=W);let de=X[Z];de===void 0&&(de={type:void 0,texture:void 0},X[Z]=de),(de.type!==I||de.texture!==te)&&(W!==Z&&(n.activeTexture(Z),W=Z),n.bindTexture(I,te||Pe[I]),de.type=I,de.texture=te)}function U(){let I=X[W];I!==void 0&&I.type!==void 0&&(n.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function Pn(){try{n.compressedTexImage2D(...arguments)}catch(I){Be("WebGLState:",I)}}function bt(){try{n.compressedTexImage3D(...arguments)}catch(I){Be("WebGLState:",I)}}function wt(){try{n.texSubImage2D(...arguments)}catch(I){Be("WebGLState:",I)}}function ge(){try{n.texSubImage3D(...arguments)}catch(I){Be("WebGLState:",I)}}function Bt(){try{n.compressedTexSubImage2D(...arguments)}catch(I){Be("WebGLState:",I)}}function Oe(){try{n.compressedTexSubImage3D(...arguments)}catch(I){Be("WebGLState:",I)}}function Ge(){try{n.texStorage2D(...arguments)}catch(I){Be("WebGLState:",I)}}function E(){try{n.texStorage3D(...arguments)}catch(I){Be("WebGLState:",I)}}function x(){try{n.texImage2D(...arguments)}catch(I){Be("WebGLState:",I)}}function z(){try{n.texImage3D(...arguments)}catch(I){Be("WebGLState:",I)}}function se(I){return u[I]!==void 0?u[I]:n.getParameter(I)}function ne(I,te){u[I]!==te&&(n.pixelStorei(I,te),u[I]=te)}function ce(I){J.equals(I)===!1&&(n.scissor(I.x,I.y,I.z,I.w),J.copy(I))}function pe(I){re.equals(I)===!1&&(n.viewport(I.x,I.y,I.z,I.w),re.copy(I))}function Q(I,te){let Z=c.get(te);Z===void 0&&(Z=new WeakMap,c.set(te,Z));let de=Z.get(I);de===void 0&&(de=n.getUniformBlockIndex(te,I.name),n.uniformBlockBinding(te,de,de),Z.set(I,de))}function ee(I,te,Z){let le=c.get(te).get(I);l[le]!==Z&&(n.bindBufferBase(n.UNIFORM_BUFFER,le,Z),l[le]=Z)}function ue(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),h={},u={},W=null,X={},d={},l={},f=new WeakMap,g=[],v=null,p=!1,m=null,M=null,R=null,b=null,A=null,T=null,_=null,S=new Je(0,0,0),N=0,C=!1,D=null,F=null,V=null,P=null,K=null,J.set(0,0,n.canvas.width,n.canvas.height),re.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ie,disable:De,bindFramebuffer:dt,drawBuffers:Ue,useProgram:at,setBlending:It,setMaterial:mt,setFlipSided:sn,setCullFace:Me,setLineWidth:We,setPolygonOffset:je,setScissorTest:St,activeTexture:Rt,bindTexture:Zt,unbindTexture:U,compressedTexImage2D:Pn,compressedTexImage3D:bt,texImage2D:x,texImage3D:z,pixelStorei:ne,getParameter:se,updateUBOMapping:Q,uniformBlockBinding:ee,texStorage2D:Ge,texStorage3D:E,texSubImage2D:wt,texSubImage3D:ge,compressedTexSubImage2D:Bt,compressedTexSubImage3D:Oe,scissor:ce,viewport:pe,reset:ue}}function fv(n,e,t,i,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Qe,h=new WeakMap,u=new Set,d,f=new WeakMap,g=new Set,v=new FinalizationRegistry(E=>g.delete(E)),p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(E,x){return p?new OffscreenCanvas(E,x):Tr("canvas")}function M(E,x,z){let se=1,ne=Ge(E);if((ne.width>z||ne.height>z)&&(se=z/Math.max(ne.width,ne.height)),se<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){let ce=Math.floor(se*ne.width),pe=Math.floor(se*ne.height);d===void 0&&(d=m(ce,pe));let Q=x?m(ce,pe):d;return Q.width=ce,Q.height=pe,Q.getContext("2d").drawImage(E,0,0,ce,pe),ke("WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+ce+"x"+pe+")."),Q}else return"data"in E&&ke("WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),E;return E}function R(E){return E.generateMipmaps}function b(E){n.generateMipmap(E)}function A(E){return E.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?n.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function T(E,x,z,se,ne,ce=!1){if(E!==null){if(n[E]!==void 0)return n[E];ke("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let pe;se&&(pe=e.get("EXT_texture_norm16"),pe||ke("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Q=x;if(x===n.RED&&(z===n.FLOAT&&(Q=n.R32F),z===n.HALF_FLOAT&&(Q=n.R16F),z===n.UNSIGNED_BYTE&&(Q=n.R8),z===n.UNSIGNED_SHORT&&pe&&(Q=pe.R16_EXT),z===n.SHORT&&pe&&(Q=pe.R16_SNORM_EXT)),x===n.RED_INTEGER&&(z===n.UNSIGNED_BYTE&&(Q=n.R8UI),z===n.UNSIGNED_SHORT&&(Q=n.R16UI),z===n.UNSIGNED_INT&&(Q=n.R32UI),z===n.BYTE&&(Q=n.R8I),z===n.SHORT&&(Q=n.R16I),z===n.INT&&(Q=n.R32I)),x===n.RG&&(z===n.FLOAT&&(Q=n.RG32F),z===n.HALF_FLOAT&&(Q=n.RG16F),z===n.UNSIGNED_BYTE&&(Q=n.RG8),z===n.UNSIGNED_SHORT&&pe&&(Q=pe.RG16_EXT),z===n.SHORT&&pe&&(Q=pe.RG16_SNORM_EXT)),x===n.RG_INTEGER&&(z===n.UNSIGNED_BYTE&&(Q=n.RG8UI),z===n.UNSIGNED_SHORT&&(Q=n.RG16UI),z===n.UNSIGNED_INT&&(Q=n.RG32UI),z===n.BYTE&&(Q=n.RG8I),z===n.SHORT&&(Q=n.RG16I),z===n.INT&&(Q=n.RG32I)),x===n.RGB_INTEGER&&(z===n.UNSIGNED_BYTE&&(Q=n.RGB8UI),z===n.UNSIGNED_SHORT&&(Q=n.RGB16UI),z===n.UNSIGNED_INT&&(Q=n.RGB32UI),z===n.BYTE&&(Q=n.RGB8I),z===n.SHORT&&(Q=n.RGB16I),z===n.INT&&(Q=n.RGB32I)),x===n.RGBA_INTEGER&&(z===n.UNSIGNED_BYTE&&(Q=n.RGBA8UI),z===n.UNSIGNED_SHORT&&(Q=n.RGBA16UI),z===n.UNSIGNED_INT&&(Q=n.RGBA32UI),z===n.BYTE&&(Q=n.RGBA8I),z===n.SHORT&&(Q=n.RGBA16I),z===n.INT&&(Q=n.RGBA32I)),x===n.RGB&&(z===n.UNSIGNED_SHORT&&pe&&(Q=pe.RGB16_EXT),z===n.SHORT&&pe&&(Q=pe.RGB16_SNORM_EXT),z===n.UNSIGNED_INT_5_9_9_9_REV&&(Q=n.RGB9_E5),z===n.UNSIGNED_INT_10F_11F_11F_REV&&(Q=n.R11F_G11F_B10F)),x===n.RGBA){let ee=ce?Er:nt.getTransfer(ne);z===n.FLOAT&&(Q=n.RGBA32F),z===n.HALF_FLOAT&&(Q=n.RGBA16F),z===n.UNSIGNED_BYTE&&(Q=ee===ht?n.SRGB8_ALPHA8:n.RGBA8),z===n.UNSIGNED_SHORT&&pe&&(Q=pe.RGBA16_EXT),z===n.SHORT&&pe&&(Q=pe.RGBA16_SNORM_EXT),z===n.UNSIGNED_SHORT_4_4_4_4&&(Q=n.RGBA4),z===n.UNSIGNED_SHORT_5_5_5_1&&(Q=n.RGB5_A1)}return(Q===n.R16F||Q===n.R32F||Q===n.RG16F||Q===n.RG32F||Q===n.RGBA16F||Q===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function _(E,x){let z;return E?x===null||x===qn||x===us?z=n.DEPTH24_STENCIL8:x===Un?z=n.DEPTH32F_STENCIL8:x===Zs&&(z=n.DEPTH24_STENCIL8,ke("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===qn||x===us?z=n.DEPTH_COMPONENT24:x===Un?z=n.DEPTH_COMPONENT32F:x===Zs&&(z=n.DEPTH_COMPONENT16),z}function S(E,x){return R(E)===!0||E.isFramebufferTexture&&E.minFilter!==Kt&&E.minFilter!==gn?Math.log2(Math.max(x.width,x.height))+1:E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?x.mipmaps.length:1}function N(E){let x=new WeakRef(E);i.get(E).__ref=x,g.add(x),v.register(E,x,x)}function C(E){let x=i.get(E).__ref;x!==void 0&&(g.delete(x),v.unregister(x))}function D(E){V(E.target)}function F(E){P(E.target)}function V(E){E.removeEventListener("dispose",D),C(E),j(E),E.isVideoTexture&&h.delete(E),E.isHTMLTexture&&u.delete(E)}function P(E){E.removeEventListener("dispose",F),C(E),q(E)}function K(){for(let E of g){let x=E.deref();x!==void 0&&(x.isRenderTarget===!0?P(x):V(x))}g.clear(),u.clear()}function j(E){let x=i.get(E);if(x.__webglInit===void 0)return;let z=E.source,se=f.get(z);if(se){let ne=se[x.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&H(E),Object.keys(se).length===0&&f.delete(z)}i.remove(E)}function H(E){let x=i.get(E);n.deleteTexture(x.__webglTexture);let z=E.source,se=f.get(z);delete se[x.__cacheKey],a.memory.textures--}function q(E){let x=i.get(E);x.__depthDisposeCallback&&x.__depthDisposeCallback();let z=E.depthTexture;if(z&&z.renderTarget===E&&V(z),E.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(x.__webglFramebuffer[ne]))for(let ce=0;ce<x.__webglFramebuffer[ne].length;ce++)n.deleteFramebuffer(x.__webglFramebuffer[ne][ce]);else n.deleteFramebuffer(x.__webglFramebuffer[ne]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[ne])}else{if(Array.isArray(x.__webglFramebuffer))for(let ne=0;ne<x.__webglFramebuffer.length;ne++)n.deleteFramebuffer(x.__webglFramebuffer[ne]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let ne=0;ne<x.__webglColorRenderbuffer.length;ne++)x.__webglColorRenderbuffer[ne]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[ne]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let se=E.textures;for(let ne=0,ce=se.length;ne<ce;ne++){let pe=i.get(se[ne]);pe.__webglTexture&&(n.deleteTexture(pe.__webglTexture),a.memory.textures--),i.remove(se[ne])}i.remove(E)}let B=0;function W(){B=0}function X(){return B}function oe(E){B=E}function Ie(){let E=B;return E>=s.maxTextures&&ke("WebGLTextures: Trying to use "+(E+1)+" texture units while this GPU supports only "+s.maxTextures),B+=1,E}function J(E){let x=[];return x.push(E.wrapS),x.push(E.wrapT),x.push(E.wrapR||0),x.push(E.magFilter),x.push(E.minFilter),x.push(E.anisotropy),x.push(E.internalFormat),x.push(E.format),x.push(E.type),x.push(E.generateMipmaps),x.push(E.mipmapsAutoUpdate),x.push(E.premultiplyAlpha),x.push(E.flipY),x.push(E.unpackAlignment),x.push(E.colorSpace),x.join()}function re(E,x){let z=i.get(E);if(E.isVideoTexture&&Bt(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&z.__version!==E.version){let se=E.image;if(se===null)ke("WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)ke("WebGLRenderer: Texture marked for update but image is incomplete");else{mt(z,E,x);return}}else E.isExternalTexture&&(z.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,z.__webglTexture,n.TEXTURE0+x)}function _e(E,x){let z=i.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&z.__version!==E.version){mt(z,E,x);return}else E.isExternalTexture&&(z.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,z.__webglTexture,n.TEXTURE0+x)}function Pe(E,x){let z=i.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&z.__version!==E.version){mt(z,E,x);return}t.bindTexture(n.TEXTURE_3D,z.__webglTexture,n.TEXTURE0+x)}function ie(E,x){let z=i.get(E);if(E.version>0&&z.__version!==E.version){sn(z,E,x);return}t.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture,n.TEXTURE0+x)}let De={[zs]:n.REPEAT,[Qn]:n.CLAMP_TO_EDGE,[io]:n.MIRRORED_REPEAT},dt={[Kt]:n.NEAREST,[Dd]:n.NEAREST_MIPMAP_NEAREST,[Yr]:n.NEAREST_MIPMAP_LINEAR,[gn]:n.LINEAR,[Co]:n.LINEAR_MIPMAP_NEAREST,[Mi]:n.LINEAR_MIPMAP_LINEAR},Ue={[kd]:n.NEVER,[ah]:n.ALWAYS,[Bd]:n.LESS,[sh]:n.LEQUAL,[zd]:n.EQUAL,[rh]:n.GEQUAL,[Gd]:n.GREATER,[Hd]:n.NOTEQUAL};function at(E,x){if(x.type===Un&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===gn||x.magFilter===Co||x.magFilter===Yr||x.magFilter===Mi||x.minFilter===gn||x.minFilter===Co||x.minFilter===Yr||x.minFilter===Mi)&&ke("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(E,n.TEXTURE_WRAP_S,De[x.wrapS]),n.texParameteri(E,n.TEXTURE_WRAP_T,De[x.wrapT]),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,De[x.wrapR]),n.texParameteri(E,n.TEXTURE_MAG_FILTER,dt[x.magFilter]),n.texParameteri(E,n.TEXTURE_MIN_FILTER,dt[x.minFilter]),x.compareFunction&&(n.texParameteri(E,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(E,n.TEXTURE_COMPARE_FUNC,Ue[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Kt||x.minFilter!==Yr&&x.minFilter!==Mi||x.type===Un&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){let z=e.get("EXT_texture_filter_anisotropic");n.texParameterf(E,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function ct(E,x){let z=!1;E.__webglInit===void 0&&(E.__webglInit=!0,x.addEventListener("dispose",D),N(x));let se=x.source,ne=f.get(se);ne===void 0&&(ne={},f.set(se,ne));let ce=J(x);if(ce!==E.__cacheKey){ne[ce]===void 0&&(ne[ce]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,z=!0),ne[ce].usedTimes++;let pe=ne[E.__cacheKey];pe!==void 0&&(ne[E.__cacheKey].usedTimes--,pe.usedTimes===0&&H(x)),E.__cacheKey=ce,E.__webglTexture=ne[ce].texture}return z}function Ve(E,x,z){return Math.floor(Math.floor(E/z)/x)}function It(E,x,z,se){let ce=E.updateRanges;if(ce.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,x.width,x.height,z,se,x.data);else{ce.sort((I,te)=>I.start-te.start);let pe=0;for(let I=1;I<ce.length;I++){let te=ce[pe],Z=ce[I],de=te.start+te.count,le=Ve(Z.start,x.width,4),he=Ve(te.start,x.width,4);Z.start<=de+1&&le===he&&Ve(Z.start+Z.count-1,x.width,4)===le?te.count=Math.max(te.count,Z.start+Z.count-te.start):(++pe,ce[pe]=Z)}ce.length=pe+1;let Q=t.getParameter(n.UNPACK_ROW_LENGTH),ee=t.getParameter(n.UNPACK_SKIP_PIXELS),ue=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,x.width);for(let I=0,te=ce.length;I<te;I++){let Z=ce[I],de=Math.floor(Z.start/4),le=Math.ceil(Z.count/4),he=de%x.width,Ne=Math.floor(de/x.width),Ye=le,ae=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,he),t.pixelStorei(n.UNPACK_SKIP_ROWS,Ne),t.texSubImage2D(n.TEXTURE_2D,0,he,Ne,Ye,ae,z,se,x.data)}E.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,Q),t.pixelStorei(n.UNPACK_SKIP_PIXELS,ee),t.pixelStorei(n.UNPACK_SKIP_ROWS,ue)}}function mt(E,x,z){let se=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(se=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(se=n.TEXTURE_3D);let ne=ct(E,x),ce=x.source;t.bindTexture(se,E.__webglTexture,n.TEXTURE0+z);let pe=i.get(ce);if(ce.version!==pe.__version||ne===!0){if(t.activeTexture(n.TEXTURE0+z),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){let ae=nt.getPrimaries(nt.workingColorSpace),Fe=x.colorSpace===bi?null:nt.getPrimaries(x.colorSpace),Xe=x.colorSpace===bi||ae===Fe?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xe)}t.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment);let ee=M(x.image,!1,s.maxTextureSize);ee=Oe(x,ee);let ue=r.convert(x.format,x.colorSpace),I=r.convert(x.type),te=T(x.internalFormat,ue,I,x.normalized,x.colorSpace,x.isVideoTexture);at(se,x);let Z,de=x.mipmaps,le=x.isVideoTexture!==!0,he=pe.__version===void 0||ne===!0,Ne=ce.dataReady,Ye=S(x,ee);if(x.isDepthTexture)te=_(x.format===Si,x.type),he&&(le?t.texStorage2D(n.TEXTURE_2D,1,te,ee.width,ee.height):t.texImage2D(n.TEXTURE_2D,0,te,ee.width,ee.height,0,ue,I,null));else if(x.isDataTexture)if(de.length>0){le&&he&&t.texStorage2D(n.TEXTURE_2D,Ye,te,de[0].width,de[0].height);for(let ae=0,Fe=de.length;ae<Fe;ae++)Z=de[ae],le?Ne&&t.texSubImage2D(n.TEXTURE_2D,ae,0,0,Z.width,Z.height,ue,I,Z.data):t.texImage2D(n.TEXTURE_2D,ae,te,Z.width,Z.height,0,ue,I,Z.data);x.generateMipmaps=!1}else le?(he&&t.texStorage2D(n.TEXTURE_2D,Ye,te,ee.width,ee.height),Ne&&It(x,ee,ue,I)):t.texImage2D(n.TEXTURE_2D,0,te,ee.width,ee.height,0,ue,I,ee.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){le&&he&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ye,te,de[0].width,de[0].height,ee.depth);for(let ae=0,Fe=de.length;ae<Fe;ae++)if(Z=de[ae],x.format!==Kn)if(ue!==null)if(le){if(Ne)if(x.layerUpdates.size>0){let Xe=fh(Z.width,Z.height,x.format,x.type);for(let xe of x.layerUpdates){let ut=Z.data.subarray(xe*Xe/Z.data.BYTES_PER_ELEMENT,(xe+1)*Xe/Z.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ae,0,0,xe,Z.width,Z.height,1,ue,ut)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ae,0,0,0,Z.width,Z.height,ee.depth,ue,Z.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ae,te,Z.width,Z.height,ee.depth,0,Z.data,0,0);else ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else le?Ne&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ae,0,0,0,Z.width,Z.height,ee.depth,ue,I,Z.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ae,te,Z.width,Z.height,ee.depth,0,ue,I,Z.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{le&&he&&t.texStorage2D(n.TEXTURE_2D,Ye,te,de[0].width,de[0].height);for(let ae=0,Fe=de.length;ae<Fe;ae++)Z=de[ae],x.format!==Kn?ue!==null?le?Ne&&t.compressedTexSubImage2D(n.TEXTURE_2D,ae,0,0,Z.width,Z.height,ue,Z.data):t.compressedTexImage2D(n.TEXTURE_2D,ae,te,Z.width,Z.height,0,Z.data):ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):le?Ne&&t.texSubImage2D(n.TEXTURE_2D,ae,0,0,Z.width,Z.height,ue,I,Z.data):t.texImage2D(n.TEXTURE_2D,ae,te,Z.width,Z.height,0,ue,I,Z.data)}else if(x.isDataArrayTexture)if(le){if(he&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ye,te,ee.width,ee.height,ee.depth),Ne)if(x.layerUpdates.size>0){let ae=fh(ee.width,ee.height,x.format,x.type);for(let Fe of x.layerUpdates){let Xe=ee.data.subarray(Fe*ae/ee.data.BYTES_PER_ELEMENT,(Fe+1)*ae/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Fe,ee.width,ee.height,1,ue,I,Xe)}x.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,ue,I,ee.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,te,ee.width,ee.height,ee.depth,0,ue,I,ee.data);else if(x.isData3DTexture)le?(he&&t.texStorage3D(n.TEXTURE_3D,Ye,te,ee.width,ee.height,ee.depth),Ne&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,ue,I,ee.data)):t.texImage3D(n.TEXTURE_3D,0,te,ee.width,ee.height,ee.depth,0,ue,I,ee.data);else if(x.isFramebufferTexture){if(he)if(le)t.texStorage2D(n.TEXTURE_2D,Ye,te,ee.width,ee.height);else{let ae=ee.width,Fe=ee.height;for(let Xe=0;Xe<Ye;Xe++)t.texImage2D(n.TEXTURE_2D,Xe,te,ae,Fe,0,ue,I,null),ae>>=1,Fe>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in n){let ae=n.canvas;if(ae.hasAttribute("layoutsubtree")||ae.setAttribute("layoutsubtree","true"),ee.parentNode!==ae){ae.appendChild(ee),u.add(x),ae.onpaint=Fe=>{let Xe=Fe.changedElements;for(let xe of u)Xe.includes(xe.image)&&(xe.needsUpdate=!0)},ae.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,ee);else{let Xe=n.RGBA,xe=n.RGBA,ut=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Xe,xe,ut,ee)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(de.length>0){if(le&&he){let ae=Ge(de[0]);t.texStorage2D(n.TEXTURE_2D,Ye,te,ae.width,ae.height)}for(let ae=0,Fe=de.length;ae<Fe;ae++)Z=de[ae],le?Ne&&t.texSubImage2D(n.TEXTURE_2D,ae,0,0,ue,I,Z):t.texImage2D(n.TEXTURE_2D,ae,te,ue,I,Z);x.generateMipmaps=!1}else if(le){if(he){let ae=Ge(ee);t.texStorage2D(n.TEXTURE_2D,Ye,te,ae.width,ae.height)}Ne&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ue,I,ee)}else t.texImage2D(n.TEXTURE_2D,0,te,ue,I,ee);R(x)&&x.mipmapsAutoUpdate===!0&&b(se),pe.__version=ce.version,x.onUpdate&&x.onUpdate(x)}E.__version=x.version}function sn(E,x,z){if(x.image.length!==6)return;let se=ct(E,x),ne=x.source;t.bindTexture(n.TEXTURE_CUBE_MAP,E.__webglTexture,n.TEXTURE0+z);let ce=i.get(ne);if(ne.version!==ce.__version||se===!0){t.activeTexture(n.TEXTURE0+z);let pe=nt.getPrimaries(nt.workingColorSpace),Q=x.colorSpace===bi?null:nt.getPrimaries(x.colorSpace),ee=x.colorSpace===bi||pe===Q?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);let ue=x.isCompressedTexture||x.image[0].isCompressedTexture,I=x.image[0]&&x.image[0].isDataTexture,te=[];for(let xe=0;xe<6;xe++)!ue&&!I?te[xe]=M(x.image[xe],!0,s.maxCubemapSize):te[xe]=I?x.image[xe].image:x.image[xe],te[xe]=Oe(x,te[xe]);let Z=te[0],de=r.convert(x.format,x.colorSpace),le=r.convert(x.type),he=T(x.internalFormat,de,le,x.normalized,x.colorSpace),Ne=x.isVideoTexture!==!0,Ye=ce.__version===void 0||se===!0,ae=ne.dataReady,Fe=S(x,Z);at(n.TEXTURE_CUBE_MAP,x);let Xe;if(x.isDepthTexture){if(he=_(x.format===Si,x.type),Ye)if(Ne)t.texStorage2D(n.TEXTURE_CUBE_MAP,1,he,Z.width,Z.height);else for(let xe=0;xe<6;xe++)t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,he,Z.width,Z.height,0,de,le,null)}else if(ue){Ne&&Ye&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Fe,he,Z.width,Z.height);for(let xe=0;xe<6;xe++){Xe=te[xe].mipmaps;for(let ut=0;ut<Xe.length;ut++){let Xt=Xe[ut];x.format!==Kn?de!==null?Ne?ae&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,ut,0,0,Xt.width,Xt.height,de,Xt.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,ut,he,Xt.width,Xt.height,0,Xt.data):ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ne?ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,ut,0,0,Xt.width,Xt.height,de,le,Xt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,ut,he,Xt.width,Xt.height,0,de,le,Xt.data)}}}else{if(Xe=x.mipmaps,Ne&&Ye){Xe.length>0&&Fe++;let xe=Ge(te[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Fe,he,xe.width,xe.height)}for(let xe=0;xe<6;xe++)if(I){Ne?ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,te[xe].width,te[xe].height,de,le,te[xe].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,he,te[xe].width,te[xe].height,0,de,le,te[xe].data);for(let ut=0;ut<Xe.length;ut++){let Ai=Xe[ut].image[xe].image;Ne?ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,ut+1,0,0,Ai.width,Ai.height,de,le,Ai.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,ut+1,he,Ai.width,Ai.height,0,de,le,Ai.data)}}else{Ne?ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,de,le,te[xe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,he,de,le,te[xe]);for(let ut=0;ut<Xe.length;ut++){let Xt=Xe[ut];Ne?ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,ut+1,0,0,de,le,Xt.image[xe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,ut+1,he,de,le,Xt.image[xe])}}}R(x)&&x.mipmapsAutoUpdate===!0&&b(n.TEXTURE_CUBE_MAP),ce.__version=ne.version,x.onUpdate&&x.onUpdate(x)}E.__version=x.version}function Me(E,x,z,se,ne,ce){let pe=r.convert(z.format,z.colorSpace),Q=r.convert(z.type),ee=T(z.internalFormat,pe,Q,z.normalized,z.colorSpace),ue=i.get(x),I=i.get(z);if(I.__renderTarget=x,!ue.__hasExternalTextures){let te=Math.max(1,x.width>>ce),Z=Math.max(1,x.height>>ce);ne===n.TEXTURE_3D||ne===n.TEXTURE_2D_ARRAY?t.texImage3D(ne,ce,ee,te,Z,x.depth,0,pe,Q,null):t.texImage2D(ne,ce,ee,te,Z,0,pe,Q,null)}t.bindFramebuffer(n.FRAMEBUFFER,E),ge(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,se,ne,I.__webglTexture,0,wt(x)):(ne===n.TEXTURE_2D||ne>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,se,ne,I.__webglTexture,ce),t.bindFramebuffer(n.FRAMEBUFFER,null)}function We(E,x,z){if(n.bindRenderbuffer(n.RENDERBUFFER,E),x.depthBuffer){let se=x.depthTexture,ne=se&&se.isDepthTexture?se.type:null,ce=_(x.stencilBuffer,ne),pe=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;ge(x)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,wt(x),ce,x.width,x.height):z?n.renderbufferStorageMultisample(n.RENDERBUFFER,wt(x),ce,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,ce,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,pe,n.RENDERBUFFER,E)}else{let se=x.textures;for(let ne=0;ne<se.length;ne++){let ce=se[ne],pe=r.convert(ce.format,ce.colorSpace),Q=r.convert(ce.type),ee=T(ce.internalFormat,pe,Q,ce.normalized,ce.colorSpace);ge(x)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,wt(x),ee,x.width,x.height):z?n.renderbufferStorageMultisample(n.RENDERBUFFER,wt(x),ee,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,ee,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function je(E,x,z){let se=x.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,E),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ne=i.get(x.depthTexture);ne.__renderTarget=x;let ce=se?x.depthTexture.image[0]:x.depthTexture.image;(!ne.__webglTexture||ce.width!==x.width||ce.height!==x.height)&&(ce.width=x.width,ce.height=x.height,x.depthTexture.needsUpdate=!0),se?ie(x.depthTexture,0):re(x.depthTexture,0);let pe=ne.__webglTexture,Q=wt(x),ee=se?n.TEXTURE_CUBE_MAP_POSITIVE_X+z:n.TEXTURE_2D,ue=x.depthTexture.format===Si?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(x.depthTexture.format===gi)ge(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ue,ee,pe,0,Q):n.framebufferTexture2D(n.FRAMEBUFFER,ue,ee,pe,0);else if(x.depthTexture.format===Si)ge(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ue,ee,pe,0,Q):n.framebufferTexture2D(n.FRAMEBUFFER,ue,ee,pe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function St(E){let x=i.get(E),z=E.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==E.depthTexture){let se=E.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),se){let ne=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,se.removeEventListener("dispose",ne)};se.addEventListener("dispose",ne),x.__depthDisposeCallback=ne}x.__boundDepthTexture=se}if(E.depthTexture&&!x.__autoAllocateDepthBuffer)if(z)for(let se=0;se<6;se++)je(x.__webglFramebuffer[se],E,se);else E.texture.mipmaps.length>0?je(x.__webglFramebuffer[0],E,0):je(x.__webglFramebuffer,E,0);else if(z){x.__webglDepthbuffer=[];for(let se=0;se<6;se++)if(t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[se]),x.__webglDepthbuffer[se]===void 0)x.__webglDepthbuffer[se]=n.createRenderbuffer(),We(x.__webglDepthbuffer[se],E,!1);else{let ne=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ce=x.__webglDepthbuffer[se];n.bindRenderbuffer(n.RENDERBUFFER,ce),n.framebufferRenderbuffer(n.FRAMEBUFFER,ne,n.RENDERBUFFER,ce)}}else if(E.texture.mipmaps.length>0?t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),We(x.__webglDepthbuffer,E,!1);else{let ne=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ce=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ce),n.framebufferRenderbuffer(n.FRAMEBUFFER,ne,n.RENDERBUFFER,ce)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Rt(E,x,z){let se=i.get(E);x!==void 0&&Me(se.__webglFramebuffer,E,E.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),z!==void 0&&St(E)}function Zt(E){let x=E.texture,z=i.get(E),se=i.get(x);E.addEventListener("dispose",F),N(E);let ne=E.textures,ce=E.isWebGLCubeRenderTarget===!0,pe=ne.length>1;if(pe||(se.__webglTexture===void 0&&(se.__webglTexture=n.createTexture()),se.__version=x.version,a.memory.textures++),ce){z.__webglFramebuffer=[];for(let Q=0;Q<6;Q++)if(x.mipmaps.length>0){z.__webglFramebuffer[Q]=[];for(let ee=0;ee<x.mipmaps.length;ee++)z.__webglFramebuffer[Q][ee]=n.createFramebuffer()}else z.__webglFramebuffer[Q]=n.createFramebuffer()}else{if(x.mipmaps.length>0){z.__webglFramebuffer=[];for(let Q=0;Q<x.mipmaps.length;Q++)z.__webglFramebuffer[Q]=n.createFramebuffer()}else z.__webglFramebuffer=n.createFramebuffer();if(pe)for(let Q=0,ee=ne.length;Q<ee;Q++){let ue=i.get(ne[Q]);ue.__webglTexture===void 0&&(ue.__webglTexture=n.createTexture(),a.memory.textures++)}if(E.samples>0&&ge(E)===!1){z.__webglMultisampledFramebuffer=n.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let Q=0;Q<ne.length;Q++){let ee=ne[Q];z.__webglColorRenderbuffer[Q]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,z.__webglColorRenderbuffer[Q]);let ue=r.convert(ee.format,ee.colorSpace),I=r.convert(ee.type),te=T(ee.internalFormat,ue,I,ee.normalized,ee.colorSpace,E.isXRRenderTarget===!0),Z=wt(E);n.renderbufferStorageMultisample(n.RENDERBUFFER,Z,te,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Q,n.RENDERBUFFER,z.__webglColorRenderbuffer[Q])}n.bindRenderbuffer(n.RENDERBUFFER,null),E.depthBuffer&&(z.__webglDepthRenderbuffer=n.createRenderbuffer(),We(z.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ce){t.bindTexture(n.TEXTURE_CUBE_MAP,se.__webglTexture),at(n.TEXTURE_CUBE_MAP,x);for(let Q=0;Q<6;Q++)if(x.mipmaps.length>0)for(let ee=0;ee<x.mipmaps.length;ee++)Me(z.__webglFramebuffer[Q][ee],E,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ee);else Me(z.__webglFramebuffer[Q],E,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0);R(x)?b(n.TEXTURE_CUBE_MAP):x.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,x.mipmaps.length-1),t.unbindTexture()}else if(pe){for(let Q=0,ee=ne.length;Q<ee;Q++){let ue=ne[Q],I=i.get(ue),te=n.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(te=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(te,I.__webglTexture),at(te,ue),Me(z.__webglFramebuffer,E,ue,n.COLOR_ATTACHMENT0+Q,te,0),R(ue)&&b(te)}t.unbindTexture()}else{let Q=n.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(Q=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Q,se.__webglTexture),at(Q,x),x.mipmaps.length>0)for(let ee=0;ee<x.mipmaps.length;ee++)Me(z.__webglFramebuffer[ee],E,x,n.COLOR_ATTACHMENT0,Q,ee);else Me(z.__webglFramebuffer,E,x,n.COLOR_ATTACHMENT0,Q,0);R(x)?b(Q):x.mipmaps.length>0&&n.texParameteri(Q,n.TEXTURE_MAX_LEVEL,x.mipmaps.length-1),t.unbindTexture()}E.depthBuffer&&St(E)}function U(E){let x=E.textures;for(let z=0,se=x.length;z<se;z++){let ne=x[z];if(R(ne)&&ne.mipmapsAutoUpdate===!0){let ce=A(E),pe=i.get(ne).__webglTexture;t.bindTexture(ce,pe),b(ce),t.unbindTexture()}}}let Pn=[];function bt(E){if(E.samples>0){if(ge(E)===!1){let x=E.textures,z=E.width,se=E.height,ne=n.COLOR_BUFFER_BIT,ce=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,pe=i.get(E),Q=x.length>1;if(Q)for(let ue=0;ue<x.length;ue++)t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,pe.__webglMultisampledFramebuffer),E.texture.mipmaps.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,pe.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,pe.__webglFramebuffer);for(let ue=0;ue<x.length;ue++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(ne|=n.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(ne|=n.STENCIL_BUFFER_BIT)),Q){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,pe.__webglColorRenderbuffer[ue]);let I=i.get(x[ue]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,I,0)}n.blitFramebuffer(0,0,z,se,0,0,z,se,ne,n.NEAREST),l===!0&&(Pn.length=0,Pn.push(n.COLOR_ATTACHMENT0+ue),E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&Pn.push(ce),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Pn))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Q)for(let ue=0;ue<x.length;ue++){t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.RENDERBUFFER,pe.__webglColorRenderbuffer[ue]);let I=i.get(x[ue]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.TEXTURE_2D,I,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,pe.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&l){let x=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function wt(E){return Math.min(s.maxSamples,E.samples)}function ge(E){let x=i.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Bt(E){let x=a.render.frame;h.get(E)!==x&&(h.set(E,x),E.update())}function Oe(E,x){let z=E.colorSpace,se=E.format,ne=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||z!==wr&&z!==bi&&(nt.getTransfer(z)===ht?(se!==Kn||ne!==yn)&&ke("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Be("WebGLTextures: Unsupported texture color space:",z)),x}function Ge(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=Ie,this.resetTextureUnits=W,this.getTextureUnits=X,this.setTextureUnits=oe,this.setTexture2D=re,this.setTexture2DArray=_e,this.setTexture3D=Pe,this.setTextureCube=ie,this.rebindTextures=Rt,this.setupRenderTarget=Zt,this.updateRenderTargetMipmap=U,this.updateMultisampleRenderTarget=bt,this.setupDepthRenderbuffer=St,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=ge,this.dispose=K}function pv(n,e){function t(i,s=bi){let r,a=nt.getTransfer(s);if(i===yn)return n.UNSIGNED_BYTE;if(i===Po)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Lo)return n.UNSIGNED_SHORT_5_5_5_1;if(i===eh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===th)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Zc)return n.BYTE;if(i===Qc)return n.SHORT;if(i===Zs)return n.UNSIGNED_SHORT;if(i===Io)return n.INT;if(i===qn)return n.UNSIGNED_INT;if(i===Un)return n.FLOAT;if(i===Yn)return n.HALF_FLOAT;if(i===nh)return n.ALPHA;if(i===ih)return n.RGB;if(i===Kn)return n.RGBA;if(i===gi)return n.DEPTH_COMPONENT;if(i===Si)return n.DEPTH_STENCIL;if(i===No)return n.RED;if(i===Do)return n.RED_INTEGER;if(i===Ki)return n.RG;if(i===Uo)return n.RG_INTEGER;if(i===Fo)return n.RGBA_INTEGER;if(i===Kr||i===jr||i===Jr||i===Zr)if(a===ht)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Kr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===jr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Jr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Zr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Kr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===jr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Jr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Zr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Oo||i===ko||i===Bo||i===zo)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Oo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ko)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Bo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===zo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Go||i===Ho||i===Vo||i===Wo||i===$o||i===Qr||i===Xo)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Go||i===Ho)return a===ht?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Vo)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Wo)return r.COMPRESSED_R11_EAC;if(i===$o)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Qr)return r.COMPRESSED_RG11_EAC;if(i===Xo)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===qo||i===Yo||i===Ko||i===jo||i===Jo||i===Zo||i===Qo||i===el||i===tl||i===nl||i===il||i===sl||i===rl||i===al)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===qo)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Yo)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ko)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===jo)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Jo)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Zo)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Qo)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===el)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===tl)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===nl)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===il)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===sl)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===rl)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===al)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ol||i===ll||i===cl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===ol)return a===ht?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ll)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===cl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===hl||i===ul||i===ea||i===dl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===hl)return r.COMPRESSED_RED_RGTC1_EXT;if(i===ul)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ea)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===dl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===us?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var mv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,gv=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Ah=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new kr(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new Dn({vertexShader:mv,fragmentShader:gv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new we(new tn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Rh=class extends ei{constructor(e,t){super();let i=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null,v=typeof XRWebGLBinding<"u",p=new Ah,m={},M=t.getContextAttributes(),R=null,b=null,A=[],T=[],_=new Qe,S=null,N=null,C=new pn;C.viewport=new Et;let D=new pn;D.viewport=new Et;let F=[C,D],V=new Eo,P=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let re=A[J];return re===void 0&&(re=new Ws,A[J]=re),re.getTargetRaySpace()},this.getControllerGrip=function(J){let re=A[J];return re===void 0&&(re=new Ws,A[J]=re),re.getGripSpace()},this.getHand=function(J){let re=A[J];return re===void 0&&(re=new Ws,A[J]=re),re.getHandSpace()};function j(J){let re=T.indexOf(J.inputSource);if(re===-1)return;let _e=A[re];_e!==void 0&&(_e.update(J.inputSource,J.frame,c||a),_e.dispatchEvent({type:J.type,data:J.inputSource}))}function H(){s.removeEventListener("select",j),s.removeEventListener("selectstart",j),s.removeEventListener("selectend",j),s.removeEventListener("squeeze",j),s.removeEventListener("squeezestart",j),s.removeEventListener("squeezeend",j),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",q);for(let J=0;J<A.length;J++){let re=T[J];re!==null&&(T[J]=null,A[J].disconnect(re))}P=null,K=null,p.reset();for(let J in m)delete m[J];if(e.setRenderTarget(R),f=null,d=null,u=null,s=null,b=null,Ie.stop(),i.isPresenting=!1,e.setPixelRatio(S),e.setSize(_.width,_.height,!1),N!==null){let J=N.camera;J.fov=N.fov,J.zoom=N.zoom,J.updateProjectionMatrix(),N=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,i.isPresenting===!0&&ke("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,i.isPresenting===!0&&ke("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&v&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(R=e.getRenderTarget(),s.addEventListener("select",j),s.addEventListener("selectstart",j),s.addEventListener("selectend",j),s.addEventListener("squeeze",j),s.addEventListener("squeezestart",j),s.addEventListener("squeezeend",j),s.addEventListener("end",H),s.addEventListener("inputsourceschange",q),M.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(_),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let _e=null,Pe=null,ie=null;M.depth&&(ie=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,_e=M.stencil?Si:gi,Pe=M.stencil?us:qn);let De={colorFormat:t.RGBA8,depthFormat:ie,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(De),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),b=new Rn(d.textureWidth,d.textureHeight,{format:Kn,type:yn,depthTexture:new vi(d.textureWidth,d.textureHeight,Pe,void 0,void 0,void 0,void 0,void 0,void 0,_e),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let _e={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,_e),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new Rn(f.framebufferWidth,f.framebufferHeight,{format:Kn,type:yn,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Ie.setContext(s),Ie.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function q(J){for(let re=0;re<J.removed.length;re++){let _e=J.removed[re],Pe=T.indexOf(_e);Pe>=0&&(T[Pe]=null,A[Pe].disconnect(_e))}for(let re=0;re<J.added.length;re++){let _e=J.added[re],Pe=T.indexOf(_e);if(Pe===-1){for(let De=0;De<A.length;De++)if(De>=T.length){T.push(_e),Pe=De;break}else if(T[De]===null){T[De]=_e,Pe=De;break}if(Pe===-1)break}let ie=A[Pe];ie&&ie.connect(_e)}}function B(J,re){re===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(re.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let re=J.near,_e=J.far;p.texture!==null&&(p.depthNear>0&&(re=p.depthNear),p.depthFar>0&&(_e=p.depthFar)),V.near=D.near=C.near=re,V.far=D.far=C.far=_e,(P!==V.near||K!==V.far)&&(s.updateRenderState({depthNear:V.near,depthFar:V.far}),P=V.near,K=V.far),V.layers.mask=J.layers.mask|6,C.layers.mask=V.layers.mask&-5,D.layers.mask=V.layers.mask&-3;let Pe=J.parent,ie=V.cameras;B(V,Pe);for(let De=0;De<ie.length;De++)B(ie[De],Pe);V.projectionMatrix.copy(C.projectionMatrix),V.projectionMatrixInverse.copy(C.projectionMatrixInverse),N===null&&J.isPerspectiveCamera&&(N={camera:J,fov:J.fov,zoom:J.zoom}),W(J,V,Pe)};function W(J,re,_e){_e===null?J.matrix.copy(re.matrixWorld):(J.matrix.copy(_e.matrixWorld),J.matrix.invert(),J.matrix.multiply(re.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(re.projectionMatrix),J.projectionMatrixInverse.copy(re.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=ro*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(J){l=J,d!==null&&(d.fixedFoveation=J),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=J)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(V)},this.getCameraTexture=function(J){return m[J]};let X=null;function oe(J,re){if(h=re.getViewerPose(c||a),g=re,h!==null){let _e=h.views;f!==null&&(e.setRenderTargetFramebuffer(b,f.framebuffer),e.setRenderTarget(b));let Pe=!1;_e.length!==V.cameras.length&&(V.cameras.length=0,Pe=!0);for(let Ue=0;Ue<_e.length;Ue++){let at=_e[Ue],ct=null;if(f!==null)ct=f.getViewport(at);else{let It=u.getViewSubImage(d,at);ct=It.viewport,Ue===0&&(e.setRenderTargetTextures(b,It.colorTexture,It.depthStencilTexture),e.setRenderTarget(b))}let Ve=F[Ue];Ve===void 0&&(Ve=new pn,Ve.layers.enable(Ue),Ve.viewport=new Et,F[Ue]=Ve),Ve.matrix.fromArray(at.transform.matrix),Ve.matrix.decompose(Ve.position,Ve.quaternion,Ve.scale),Ve.projectionMatrix.fromArray(at.projectionMatrix),Ve.projectionMatrixInverse.copy(Ve.projectionMatrix).invert(),Ve.viewport.set(ct.x,ct.y,ct.width,ct.height),Ue===0&&(V.matrix.copy(Ve.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),Pe===!0&&V.cameras.push(Ve)}let ie=s.enabledFeatures;if(ie&&ie.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){u=i.getBinding();let Ue=u.getDepthInformation(_e[0]);Ue&&Ue.isValid&&Ue.texture&&p.init(Ue,s.renderState)}if(ie&&ie.includes("camera-access")&&v){e.state.unbindTexture(),u=i.getBinding();for(let Ue=0;Ue<_e.length;Ue++){let at=_e[Ue].camera;if(at){let ct=m[at];ct||(ct=new kr,m[at]=ct);let Ve=u.getCameraImage(at);ct.sourceTexture=Ve}}}}for(let _e=0;_e<A.length;_e++){let Pe=T[_e],ie=A[_e];Pe!==null&&ie!==void 0&&ie.update(Pe,re,c||a)}X&&X(J,re),re.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:re}),g=null}let Ie=new Mf;Ie.setAnimationLoop(oe),this.setAnimationLoop=function(J){X=J},this.dispose=function(){}}},_v=new rt,Pf=new ze;Pf.set(-1,0,0,0,1,0,0,0,1);function xv(n,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function i(p,m){m.color.getRGB(p.fogColor.value,hh(n)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,M,R,b){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(p,m):m.isMeshLambertMaterial?(r(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(p,m),u(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(p,m),d(p,m),m.isMeshPhysicalMaterial&&f(p,m,b)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),v(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?l(p,m,M,R):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===nn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===nn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let M=e.get(m),R=M.envMap,b=M.envMapRotation;R&&(p.envMap.value=R,p.envMapRotation.value.setFromMatrix4(_v.makeRotationFromEuler(b)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(Pf),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,M,R){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*M,p.scale.value=R*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function d(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,M){p.ior.value=m.ior,m.diffuseRoughness>0&&(p.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=m.diffuseRoughnessMap,t(m.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===nn&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.retroreflectivity>0&&(p.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=M.texture,p.transmissionSamplerSize.value.set(M.width,M.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function v(p,m){let M=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(M.matrixWorld),p.nearDistance.value=M.shadow.camera.near,p.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function vv(n,e,t,i){let s={},r={};function a(M,R){let b=R.program;i.uniformBlockBinding(M,b,s[M.id])}function o(M,R){let b=s[M.id];b===void 0&&(g(M),b=l(M),s[M.id]=b,M.addEventListener("dispose",p));let A=R.program;i.updateUBOMapping(M,A);let T=e.render.frame;r[M.id]!==T&&(c(M),r[M.id]=T)}function l(M){let R=n.createBuffer(),b=M.__size,A=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,R),n.bufferData(n.UNIFORM_BUFFER,b,A),n.bindBuffer(n.UNIFORM_BUFFER,null),R}function c(M){let R=s[M.id],b=M.uniforms,A=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,R);for(let T=0,_=b.length;T<_;T++){let S=b[T];if(Array.isArray(S))for(let N=0,C=S.length;N<C;N++)h(S[N],T,N,A);else h(S,T,0,A)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(M,R,b,A){if(d(M,R,b,A)===!0){let T=M.__offset,_=M.value;if(Array.isArray(_)){let S=0;for(let N=0;N<_.length;N++){let C=_[N],D=v(C,!0);u(C,M.__data,S),S+=D.storage/Float32Array.BYTES_PER_ELEMENT}}else u(_,M.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,T,M.__data)}}function u(M,R,b){typeof M=="number"||typeof M=="boolean"?R[b]=M:M.isMatrix3?(R[b]=M.elements[0],R[b+1]=M.elements[1],R[b+2]=M.elements[2],R[b+3]=0,R[b+4]=M.elements[3],R[b+5]=M.elements[4],R[b+6]=M.elements[5],R[b+7]=0,R[b+8]=M.elements[6],R[b+9]=M.elements[7],R[b+10]=M.elements[8],R[b+11]=0):ArrayBuffer.isView(M)?R.set(M.subarray(0,R.length-b),b):M.toArray(R,b)}function d(M,R,b,A){let T=M.value,_=R+"_"+b;if(Array.isArray(T)){A[_]===void 0&&(A[_]=[]);let S=A[_],N=!1;for(let C=0;C<T.length;C++)f(T[C],S,C)===!0&&(N=!0);return N}return f(T,A,_)}function f(M,R,b){if(R[b]===void 0)return typeof M=="number"||typeof M=="boolean"?R[b]=M:ArrayBuffer.isView(M)?R[b]=M.slice():R[b]=M.clone(),!0;{let A=R[b];if(typeof M=="number"||typeof M=="boolean"){if(A!==M)return R[b]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(A.equals(M)===!1)return A.copy(M),!0}}return!1}function g(M){let R=M.uniforms,b=0,A=16;for(let _=0,S=R.length;_<S;_++){let N=Array.isArray(R[_])?R[_]:[R[_]];for(let C=0,D=N.length;C<D;C++){let F=N[C],V=Array.isArray(F.value)?F.value:[F.value],P=Array.isArray(R[_])||Array.isArray(F.value),K=b;for(let H=0,q=V.length;H<q;H++){let B=V[H],W=v(B,P),X=b%A,oe=X%W.boundary,Ie=X+oe;b+=oe,Ie!==0&&A-Ie<W.storage&&(b+=A-Ie),H===0&&(K=b),b+=W.storage}let j=F.type==="int"?Int32Array:F.type==="uint"?Uint32Array:Float32Array;F.__data=new j((b-K)/Float32Array.BYTES_PER_ELEMENT),F.__offset=K}}let T=b%A;return T>0&&(b+=A-T),M.__size=b,M.__cache={},this}function v(M,R){let b={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(b.boundary=4,b.storage=4):M.isVector2?(b.boundary=8,b.storage=8):M.isVector3||M.isColor?(b.boundary=16,b.storage=12):M.isVector4?(b.boundary=16,b.storage=16):M.isMatrix3?(b.boundary=16,b.storage=48):M.isMatrix4?(b.boundary=16,b.storage=64):M.isTexture?ke("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(b.boundary=16,b.storage=M.byteLength):ke("WebGLRenderer: Unsupported uniform value type.",M),R===!0&&(b.boundary=16,b.storage=Math.ceil(b.storage/16)*16),b}function p(M){let R=M.target;R.removeEventListener("dispose",p),n.deleteBuffer(s[R.id]),delete s[R.id],delete r[R.id]}function m(){for(let M in s)n.deleteBuffer(s[M]);s={},r={}}return{bind:a,update:o,dispose:m}}var yv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ii=null;function Mv(){return ii===null&&(ii=new Dr(yv,16,16,Ki,Yn),ii.name="DFG_LUT",ii.minFilter=gn,ii.magFilter=gn,ii.wrapS=Qn,ii.wrapT=Qn,ii.generateMipmaps=!1,ii.needsUpdate=!0),ii}var _l=class{constructor(e={}){let{canvas:t=Wd(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=yn}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;let v=f,p=new Set([Fo,Uo,Do]),m=new Set([yn,qn,Zs,us,Po,Lo]),M=new Uint32Array(4),R=new Int32Array(4),b={textures:[],min:[],max:[],resolution:[]},A=null,T=null,_=[],S=[],N=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ni,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,D=!1,F=null,V=null,P=null,K=null;this._outputColorSpace=Gt;let j=0,H=0,q=null,B=-1,W=null,X=new Et,oe=new Et,Ie=null,J=new Je(0),re=0,_e=t.width,Pe=t.height,ie=1,De=null,dt=null,Ue=new Et(0,0,_e,Pe),at=new Et(0,0,_e,Pe),ct=!1,Ve=new Vi,It=new co,mt=!1,sn=!1,Me=new rt,We=new O,je=new Et,St={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Rt=!1;function Zt(){return q===null?ie:1}let U=i;function Pn(y,L){return t.getContext(y,L)}let bt,wt,ge,Bt,Oe,Ge,E,x,z,se,ne,ce,pe,Q,ee,ue,I,te,Z,de,le,he,Ne;try{let y={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",Fe,!1),t.addEventListener("webglcontextrestored",Xe,!1),t.addEventListener("webglcontextcreationerror",xe,!1),U===null){let L="webgl2";if(U=Pn(L,y),U===null)throw Pn(L)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ye()}catch(y){throw t.removeEventListener("webglcontextlost",Fe,!1),t.removeEventListener("webglcontextrestored",Xe,!1),t.removeEventListener("webglcontextcreationerror",xe,!1),Be("WebGLRenderer: "+y.message),y}function Ye(){bt=new L_(U),bt.init(),le=new pv(U,bt),wt=new M_(U,bt,e,le),ge=new dv(U,bt),wt.reversedDepthBuffer&&d&&ge.buffers.depth.setReversed(!0),V=U.createFramebuffer(),P=U.createFramebuffer(),K=U.createFramebuffer(),Bt=new U_(U),Oe=new Zx,Ge=new fv(U,bt,ge,Oe,wt,le,Bt),E=new P_(C),x=new Om(U),he=new v_(U,x),z=new N_(U,x,Bt,he),se=new O_(U,z,x,he,Bt),te=new F_(U,wt,Ge),ee=new S_(Oe),ne=new Jx(C,E,bt,wt,he,ee),ce=new xv(C,Oe),pe=new ev,Q=new av(bt),I=new x_(C,E,ge,se,g,l),ue=new uv(C,se,wt),Ne=new vv(U,Bt,wt,ge),Z=new y_(U,bt,Bt),de=new D_(U,bt,Bt),Bt.programs=ne.programs,C.capabilities=wt,C.extensions=bt,C.properties=Oe,C.renderLists=pe,C.shadowMap=ue,C.state=ge,C.info=Bt}v!==yn&&(N=new B_(v,t.width,t.height,o,s,r));let ae=new Rh(C,U);this.xr=ae,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let y=bt.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){let y=bt.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return ie},this.setPixelRatio=function(y){y!==void 0&&(ie=y,this.setSize(_e,Pe,!1))},this.getSize=function(y){return y.set(_e,Pe)},this.setSize=function(y,L,Y=!0){if(ae.isPresenting){ke("WebGLRenderer: Can't change size while VR device is presenting.");return}_e=y,Pe=L,t.width=Math.floor(y*ie),t.height=Math.floor(L*ie),Y===!0&&(t.style.width=y+"px",t.style.height=L+"px"),N!==null&&N.setSize(t.width,t.height),this.setViewport(0,0,y,L)},this.getDrawingBufferSize=function(y){return y.set(_e*ie,Pe*ie).floor()},this.setDrawingBufferSize=function(y,L,Y){_e=y,Pe=L,ie=Y,t.width=Math.floor(y*Y),t.height=Math.floor(L*Y),this.setViewport(0,0,y,L)},this.setEffects=function(y){if(v===yn){Be("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let L=0;L<y.length;L++)if(y[L].isOutputPass===!0){ke("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}N.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(X)},this.getViewport=function(y){return y.copy(Ue)},this.setViewport=function(y,L,Y,k){y.isVector4?Ue.set(y.x,y.y,y.z,y.w):Ue.set(y,L,Y,k),ge.viewport(X.copy(Ue).multiplyScalar(Zt()).round())},this.getScissor=function(y){return y.copy(at)},this.setScissor=function(y,L,Y,k){y.isVector4?at.set(y.x,y.y,y.z,y.w):at.set(y,L,Y,k),ge.scissor(oe.copy(at).multiplyScalar(Zt()).round())},this.getScissorTest=function(){return ct},this.setScissorTest=function(y){ge.setScissorTest(ct=y)},this.setOpaqueSort=function(y){De=y},this.setTransparentSort=function(y){dt=y},this.getClearColor=function(y){return y.copy(I.getClearColor())},this.setClearColor=function(){I.setClearColor(...arguments)},this.getClearAlpha=function(){return I.getClearAlpha()},this.setClearAlpha=function(){I.setClearAlpha(...arguments)},this.clear=function(y=!0,L=!0,Y=!0){let k=0;if(y){let G=!1;if(q!==null){let me=q.texture.format;G=p.has(me)}if(G){let me=q.texture.type,Ee=m.has(me),fe=I.getClearColor(),Se=I.getClearAlpha(),Le=fe.r,He=fe.g,et=fe.b;Ee?(M[0]=Le,M[1]=He,M[2]=et,M[3]=Se,U.clearBufferuiv(U.COLOR,0,M)):(R[0]=Le,R[1]=He,R[2]=et,R[3]=Se,U.clearBufferiv(U.COLOR,0,R))}else k|=U.COLOR_BUFFER_BIT}L&&(k|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Y&&(k|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k!==0&&U.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(y){y.setRenderer(this),F=y},this.dispose=function(){t.removeEventListener("webglcontextlost",Fe,!1),t.removeEventListener("webglcontextrestored",Xe,!1),t.removeEventListener("webglcontextcreationerror",xe,!1),I.dispose(),pe.dispose(),Q.dispose(),Ge.dispose(),Oe.dispose(),E.dispose(),se.dispose(),z.dispose(),he.dispose(),Ne.dispose(),ne.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",Kh),ae.removeEventListener("sessionend",jh),Qi.stop()};function Fe(y){y.preventDefault(),lh("WebGLRenderer: Context Lost."),D=!0}function Xe(){lh("WebGLRenderer: Context Restored."),D=!1;let y=Bt.autoReset,L=ue.enabled,Y=ue.autoUpdate,k=ue.needsUpdate,G=ue.type;Ye(),Bt.autoReset=y,ue.enabled=L,ue.autoUpdate=Y,ue.needsUpdate=k,ue.type=G}function xe(y){Be("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function ut(y){let L=y.target;L.removeEventListener("dispose",ut),Xt(L)}function Xt(y){Ai(y),Oe.remove(y)}function Ai(y){let L=Oe.get(y).programs;L!==void 0&&(L.forEach(function(Y){ne.releaseProgram(Y)}),y.isShaderMaterial&&ne.releaseShaderCache(y))}this.renderBufferDirect=function(y,L,Y,k,G,me){L===null&&(L=St);let Ee=G.isMesh&&G.matrixWorld.determinantAffine()<0,fe=cp(y,L,Y,k,G);ge.setMaterial(k,Ee);let Se=Y.index,Le=1;if(k.wireframe===!0){if(Se=z.getWireframeAttribute(Y),Se===void 0)return;Le=2}let He=Y.drawRange,et=Y.attributes.position,Ae=He.start*Le,tt=(He.start+He.count)*Le;me!==null&&(Ae=Math.max(Ae,me.start*Le),tt=Math.min(tt,(me.start+me.count)*Le)),Se!==null?(Ae=Math.max(Ae,0),tt=Math.min(tt,Se.count)):et!=null&&(Ae=Math.max(Ae,0),tt=Math.min(tt,et.count));let Ft=tt-Ae;if(Ft<0||Ft===1/0)return;he.setup(G,k,fe,Y,Se);let gt,ft=Z;if(Se!==null&&(gt=x.get(Se),ft=de,ft.setIndex(gt)),G.isMesh)k.wireframe===!0?(ge.setLineWidth(k.wireframeLinewidth*Zt()),ft.setMode(U.LINES)):ft.setMode(U.TRIANGLES);else if(G.isLine){let rn=k.linewidth;rn===void 0&&(rn=1),ge.setLineWidth(rn*Zt()),G.isLineSegments?ft.setMode(U.LINES):G.isLineLoop?ft.setMode(U.LINE_LOOP):ft.setMode(U.LINE_STRIP)}else G.isPoints?ft.setMode(U.POINTS):G.isSprite&&ft.setMode(U.TRIANGLES);if(G.isBatchedMesh)if(bt.get("WEBGL_multi_draw"))ft.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{let rn=G._multiDrawStarts,Re=G._multiDrawCounts,hn=G._multiDrawCount,ot=Se?x.get(Se).bytesPerElement:1,es=Oe.get(k).currentProgram.getUniforms();for(let an=0;an<hn;an++)es.setValue(U,"_gl_DrawID",an),ft.render(rn[an]/ot,Re[an])}else if(G.isInstancedMesh)ft.renderInstances(Ae,Ft,G.count);else if(Y.isInstancedBufferGeometry){let rn=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Re=Math.min(Y.instanceCount,rn);ft.renderInstances(Ae,Ft,Re)}else ft.render(Ae,Ft)};function Yh(y,L,Y,k){F!==null&&y.isNodeMaterial&&F.setObject(k,y),mt===!0&&ee.setState(y,Y,!1),y.transparent===!0&&y.side===jt&&y.forceSinglePass===!1?(y.side=nn,y.needsUpdate=!0,sr(y,L,k),y.side=Yi,y.needsUpdate=!0,sr(y,L,k),y.side=jt):sr(y,L,k)}this.compile=function(y,L,Y=null){Y===null&&(Y=y),F!==null&&F.renderStart(y,L,Y),T=Q.get(Y),T.init(L),S.push(T),Y.traverseVisible(function(G){G.isLight&&G.layers.test(L.layers)&&(T.pushLight(G),G.castShadow&&T.pushShadow(G))}),y!==Y&&y.traverseVisible(function(G){G.isLight&&G.layers.test(L.layers)&&(T.pushLight(G),G.castShadow&&T.pushShadow(G))}),T.setupLights(),F!==null&&F.updateLights(T.state.lightsArray),sn=this.localClippingEnabled,mt=ee.init(this.clippingPlanes,sn),mt===!0&&ee.setGlobalState(this.clippingPlanes,L),F!==null&&ue.render(T.state.shadowsArray,Y,L);let k=new Set;return y.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;let me=G.material;if(me)if(Array.isArray(me))for(let Ee=0;Ee<me.length;Ee++){let fe=me[Ee];Yh(fe,Y,L,G),k.add(fe)}else Yh(me,Y,L,G),k.add(me)}),T=S.pop(),F!==null&&F.renderEnd(),k},this.compileAsync=function(y,L,Y=null){let k=this.compile(y,L,Y);return new Promise(G=>{function me(){if(k.forEach(function(Ee){let Se=Oe.get(Ee).currentProgram;(Se===void 0||Se.isReady())&&k.delete(Ee)}),k.size===0){G(y);return}setTimeout(me,10)}bt.get("KHR_parallel_shader_compile")!==null?me():setTimeout(me,10)})};let Ul=null;function op(y){Ul&&Ul(y)}function Kh(){Qi.stop()}function jh(){Qi.start()}let Qi=new Mf;Qi.setAnimationLoop(op),typeof self<"u"&&Qi.setContext(self),this.setAnimationLoop=function(y){Ul=y,ae.setAnimationLoop(y),y===null?Qi.stop():Qi.start()},ae.addEventListener("sessionstart",Kh),ae.addEventListener("sessionend",jh),this.render=function(y,L){if(L!==void 0&&L.isCamera!==!0){Be("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;F!==null&&F.renderStart(y,L);let Y=ae.enabled===!0&&ae.isPresenting===!0,k=N!==null&&(q===null||Y)&&N.begin(C,q);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(N===null||N.isCompositing()===!1)&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(L),L=ae.getCamera()),y.isScene===!0&&y.onBeforeRender(C,y,L,q),T=Q.get(y,S.length),T.init(L),T.state.textureUnits=Ge.getTextureUnits(),S.push(T),Me.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),L.isArrayCamera?It.setFromArrayCamera(L):Ve.setFromProjectionMatrix(Me,Nn,L.reversedDepth),sn=this.localClippingEnabled,mt=ee.init(this.clippingPlanes,sn),A=pe.get(y,_.length),A.init(),_.push(A),this.info.render.frame++,ae.enabled===!0&&ae.isPresenting===!0){let Ee=C.xr.getDepthSensingMesh();Ee!==null&&Fl(Ee,L,-1/0,C.sortObjects)}Fl(y,L,0,C.sortObjects),A.finish(),F!==null&&F.updateLights(T.state.lightsArray),C.sortObjects===!0&&A.sort(De,dt),Rt=ae.enabled===!1||ae.isPresenting===!1||ae.hasDepthSensing()===!1,Rt&&I.addToRenderList(A,y),this.info.autoReset===!0&&this.info.reset(),mt===!0&&ee.beginShadows();let G=T.state.shadowsArray;if(ue.render(G,y,L),mt===!0&&ee.endShadows(),(k&&N.hasRenderPass())===!1){let Ee=A.opaque,fe=A.transmissive;if(T.setupLights(),L.isArrayCamera){let Se=L.cameras;if(fe.length>0)for(let Le=0,He=Se.length;Le<He;Le++){let et=Se[Le];Zh(Ee,fe,y,et)}Rt&&I.render(y);for(let Le=0,He=Se.length;Le<He;Le++){let et=Se[Le];Jh(A,y,et,et.viewport)}}else fe.length>0&&Zh(Ee,fe,y,L),Rt&&I.render(y),Jh(A,y,L)}q!==null&&H===0&&(Ge.updateMultisampleRenderTarget(q),Ge.updateRenderTargetMipmap(q)),k&&N.end(C),y.isScene===!0&&y.onAfterRender(C,y,L),he.resetDefaultState(),B=-1,W=null,S.pop(),S.length>0?(T=S[S.length-1],Ge.setTextureUnits(T.state.textureUnits),mt===!0&&ee.setGlobalState(C.clippingPlanes,T.state.camera)):T=null,_.pop(),_.length>0?A=_[_.length-1]:A=null,F!==null&&F.renderEnd()};function Fl(y,L,Y,k){if(y.visible===!1)return;if(y.layers.test(L.layers)){if(y.isGroup)Y=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(L);else if(y.isLight)T.pushLight(y),y.castShadow&&T.pushShadow(y);else if(y.isSprite){let Ee=L.isArrayCamera?It:Ve;if(!y.frustumCulled||y.intersectsFrustum(Ee)){k&&je.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Me);let fe=se.update(y),Se=y.material;Se.visible&&A.push(y,fe,Se,Y,je.z,null,L)}}else if(y.isMesh||y.isLine||y.isPoints){let Ee=L.isArrayCamera?It:Ve;if(!y.frustumCulled||y.intersectsFrustum(Ee)){let fe=se.update(y),Se=y.material;if(k&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),je.copy(y.boundingSphere.center)):(fe.boundingSphere===null&&fe.computeBoundingSphere(),je.copy(fe.boundingSphere.center)),je.applyMatrix4(y.matrixWorld).applyMatrix4(Me)),Array.isArray(Se)){let Le=fe.groups;for(let He=0,et=Le.length;He<et;He++){let Ae=Le[He],tt=Se[Ae.materialIndex];tt&&tt.visible&&A.push(y,fe,tt,Y,je.z,Ae,L)}}else Se.visible&&A.push(y,fe,Se,Y,je.z,null,L)}}}let me=y.children;for(let Ee=0,fe=me.length;Ee<fe;Ee++)Fl(me[Ee],L,Y,k)}function Jh(y,L,Y,k){let{opaque:G,transmissive:me,transparent:Ee}=y;T.setupLightsView(Y),mt===!0&&ee.setGlobalState(C.clippingPlanes,Y),k&&ge.viewport(X.copy(k)),G.length>0&&ha(G,L,Y),me.length>0&&ha(me,L,Y),Ee.length>0&&ha(Ee,L,Y),ge.buffers.depth.setTest(!0),ge.buffers.depth.setMask(!0),ge.buffers.color.setMask(!0),ge.setPolygonOffset(!1)}function Zh(y,L,Y,k){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[k.id]===void 0){let Ae=bt.has("EXT_color_buffer_half_float")||bt.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[k.id]=new Rn(1,1,{generateMipmaps:!0,type:Ae?Yn:yn,minFilter:Mi,samples:Math.max(4,wt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:nt.workingColorSpace})}let me=T.state.transmissionRenderTarget[k.id],Ee=k.viewport||X;me.setSize(Ee.z*C.transmissionResolutionScale,Ee.w*C.transmissionResolutionScale);let fe=C.getRenderTarget(),Se=C.getActiveCubeFace(),Le=C.getActiveMipmapLevel();C.setRenderTarget(me),C.getClearColor(J),re=C.getClearAlpha(),re<1&&C.setClearColor(16777215,.5),C.clear(),Rt&&I.render(Y);let He=C.toneMapping;C.toneMapping=ni;let et=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),T.setupLightsView(k),mt===!0&&ee.setGlobalState(C.clippingPlanes,k),ha(y,Y,k),Ge.updateMultisampleRenderTarget(me),Ge.updateRenderTargetMipmap(me),bt.has("WEBGL_multisampled_render_to_texture")===!1){let Ae=!1;for(let tt=0,Ft=L.length;tt<Ft;tt++){let gt=L[tt],{object:ft,geometry:rn,material:Re,group:hn}=gt;if(Re.side===jt&&ft.layers.test(k.layers)){let ot=Re.side;Re.side=nn,Re.needsUpdate=!0,Qh(ft,Y,k,rn,Re,hn),Re.side=ot,Re.needsUpdate=!0,Ae=!0}}Ae===!0&&(Ge.updateMultisampleRenderTarget(me),Ge.updateRenderTargetMipmap(me))}C.setRenderTarget(fe,Se,Le),C.setClearColor(J,re),et!==void 0&&(k.viewport=et),C.toneMapping=He}function ha(y,L,Y){let k=L.isScene===!0?L.overrideMaterial:null;for(let G=0,me=y.length;G<me;G++){let Ee=y[G],{object:fe,geometry:Se,group:Le}=Ee,He=Ee.material;He.allowOverride===!0&&k!==null&&(He=k),fe.layers.test(Y.layers)&&Qh(fe,L,Y,Se,He,Le)}}function Qh(y,L,Y,k,G,me){F!==null&&G.isNodeMaterial&&F.setObject(y,G),y.onBeforeRender(C,L,Y,k,G,me),y.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),G.onBeforeRender(C,L,Y,k,y,me),G.transparent===!0&&G.side===jt&&G.forceSinglePass===!1?(G.side=nn,G.needsUpdate=!0,C.renderBufferDirect(Y,L,k,G,y,me),G.side=Yi,G.needsUpdate=!0,C.renderBufferDirect(Y,L,k,G,y,me),G.side=jt):C.renderBufferDirect(Y,L,k,G,y,me),y.onAfterRender(C,L,Y,k,G,me)}function eu(y){let L=0;for(let Y of y)Y.texture!==null&&L++;return L}function sr(y,L,Y){L.isScene!==!0&&(L=St);let k=Oe.get(y),G=T.state.lights,me=T.state.shadowsArray,Ee=G.state.version,fe=ne.getParameters(y,G.state,me,L,Y,T.state.lightProbeGridArray),Se=ne.getProgramCacheKey(fe),Le=k.programs;k.environment=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?L.environment:null,k.fog=L.fog;let He=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap;k.envMap=E.get(y.envMap||k.environment,He),k.envMapRotation=k.environment!==null&&y.envMap===null?L.environmentRotation:y.envMapRotation,Le===void 0&&(y.addEventListener("dispose",ut),Le=new Map,k.programs=Le,k.programVariants=new Map);let et=Le.get(Se);if(et!==void 0){if(k.currentProgram===et&&k.lightsStateVersion===Ee)return nu(y,fe),et}else fe.uniforms=ne.getUniforms(y),F!==null&&y.isNodeMaterial&&F.build(y,Y,fe),y.onBeforeCompile(fe,C),et=ne.acquireProgram(fe,Se),Le.set(Se,et),k.uniforms=fe.uniforms;let Ae=k.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Ae.clippingPlanes=ee.uniform),nu(y,fe),k.needsLights=up(y),k.lightsStateVersion=Ee,k.needsLights&&(Ae.ambientLightColor.value=G.state.ambient,Ae.lightProbe.value=G.state.probe,Ae.sunLights.value=G.state.sun,Ae.sunLightShadows.value=G.state.sunShadow,Ae.directionalLights.value=G.state.directional,Ae.directionalLightShadows.value=G.state.directionalShadow,Ae.spotLights.value=G.state.spot,Ae.spotLightShadows.value=G.state.spotShadow,Ae.rectAreaLights.value=G.state.rectArea,Ae.ltc_1.value=G.state.rectAreaLTC1,Ae.ltc_2.value=G.state.rectAreaLTC2,Ae.pointLights.value=G.state.point,Ae.pointLightShadows.value=G.state.pointShadow,Ae.hemisphereLights.value=G.state.hemi,Ae.sunShadowMatrix.value=G.state.sunShadowMatrix,Ae.sunShadowCascade.value=G.state.sunShadowCascade,Ae.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Ae.spotLightMatrix.value=G.state.spotLightMatrix,Ae.spotLightMap.value=G.state.spotLightMap,Ae.pointShadowMatrix.value=G.state.pointShadowMatrix),k.numLightProbeGrids=eu(T.state.lightProbeGridArray),k.currentProgram=et,k.uniformsList=null,et}function lp(y,L,Y,k,G){let me=Oe.get(y),Ee=me.currentProgram.id+","+k+","+G,fe=me.programVariants.get(Ee);return fe===void 0?(fe=sr(y,L,Y),me.programVariants.set(Ee,fe)):(me.currentProgram=fe,me.uniformsList=null,me.outputColorSpace=k,me.toneMapping=G),fe}function tu(y){if(y.uniformsList===null){let L=y.currentProgram.getUniforms();y.uniformsList=Qs.seqWithValue(L.seq,y.uniforms)}return y.uniformsList}function nu(y,L){let Y=Oe.get(y);Y.outputColorSpace=L.outputColorSpace,Y.batching=L.batching,Y.batchingColor=L.batchingColor,Y.instancing=L.instancing,Y.instancingColor=L.instancingColor,Y.instancingMorph=L.instancingMorph,Y.skinning=L.skinning,Y.morphTargets=L.morphTargets,Y.morphNormals=L.morphNormals,Y.morphColors=L.morphColors,Y.morphTargetsCount=L.morphTargetsCount,Y.numClippingPlanes=L.numClippingPlanes,Y.numIntersection=L.numClipIntersection,Y.vertexAlphas=L.vertexAlphas,Y.vertexTangents=L.vertexTangents,Y.toneMapping=L.toneMapping}function cp(y,L,Y,k,G){L.isScene!==!0&&(L=St),Ge.resetTextureUnits();let me=L.fog,Ee=k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial?L.environment:null,fe=q===null?C.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:nt.workingColorSpace,Se=k.isMeshStandardMaterial||k.isMeshLambertMaterial&&!k.envMap||k.isMeshPhongMaterial&&!k.envMap,Le=E.get(k.envMap||Ee,Se),He=k.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,et=!!Y.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Ae=!!Y.morphAttributes.position,tt=!!Y.morphAttributes.normal,Ft=!!Y.morphAttributes.color,gt=ni;k.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(gt=C.toneMapping);let ft=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,rn=ft!==void 0?ft.length:0,Re=Oe.get(k),hn=T.state.lights;if(mt===!0&&(sn===!0||y!==W)){let Tt=y===W&&k.id===B;ee.setState(k,y,Tt)}let ot=!1,es=!1;k.version===Re.__version?Re.needsLights&&Re.lightsStateVersion!==hn.state.version||G.isBatchedMesh&&Re.batching===!1||!G.isBatchedMesh&&Re.batching===!0||G.isBatchedMesh&&Re.batchingColor===!0&&G._colorsTexture===null||G.isBatchedMesh&&Re.batchingColor===!1&&G._colorsTexture!==null||G.isInstancedMesh&&Re.instancing===!1||!G.isInstancedMesh&&Re.instancing===!0||G.isSkinnedMesh&&Re.skinning===!1||!G.isSkinnedMesh&&Re.skinning===!0||G.isInstancedMesh&&Re.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Re.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Re.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Re.instancingMorph===!1&&G.morphTexture!==null||Re.envMap!==Le||k.fog===!0&&Re.fog!==me||Re.numClippingPlanes!==void 0&&(Re.numClippingPlanes!==ee.numPlanes||Re.numIntersection!==ee.numIntersection)||Re.vertexAlphas!==He||Re.vertexTangents!==et||Re.morphTargets!==Ae||Re.morphNormals!==tt||Re.morphColors!==Ft||Re.morphTargetsCount!==rn||Re.numLightProbeGrids!==eu(T.state.lightProbeGridArray)?ot=!0:(Re.outputColorSpace!==fe||Re.toneMapping!==gt)&&(es=!0):(ot=!0,Re.__version=k.version);let an=Re.currentProgram;(ot===!0||es===!0)&&(an=es===!0?lp(k,L,G,fe,gt):sr(k,L,G),F&&k.isNodeMaterial&&F.onUpdateProgram(k,an,Re));let ua=!1,Ri=!1,ts=!1,st=an.getUniforms(),Qt=Re.uniforms;if(ge.useProgram(an.program)&&(ua=!0,Ri=!0,ts=!0),k.id!==B&&(B=k.id,Ri=!0),ua||W!==y){ge.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),st.setValue(U,"projectionMatrix",y.projectionMatrix),st.setValue(U,"viewMatrix",y.matrixWorldInverse);let qt=st.map.cameraPosition;qt!==void 0&&qt.setValue(U,We.setFromMatrixPosition(y.matrixWorld)),wt.logarithmicDepthBuffer&&st.setValue(U,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&st.setValue(U,"isOrthographic",y.isOrthographicCamera===!0),W!==y&&(W=y,Ri=!0,ts=!0)}if(Re.needsLights&&(hn.state.sunShadowMap.length>0&&st.setValue(U,"sunShadowMap",hn.state.sunShadowMap,Ge),hn.state.directionalShadowMap.length>0&&st.setValue(U,"directionalShadowMap",hn.state.directionalShadowMap,Ge),hn.state.spotShadowMap.length>0&&st.setValue(U,"spotShadowMap",hn.state.spotShadowMap,Ge),hn.state.pointShadowMap.length>0&&st.setValue(U,"pointShadowMap",hn.state.pointShadowMap,Ge)),G.isSkinnedMesh){st.setOptional(U,G,"bindMatrix"),st.setOptional(U,G,"bindMatrixInverse");let Tt=G.skeleton;Tt&&(Tt.boneTexture===null&&Tt.computeBoneTexture(),st.setValue(U,"boneTexture",Tt.boneTexture,Ge))}G.isBatchedMesh&&(st.setOptional(U,G,"batchingTexture"),st.setValue(U,"batchingTexture",G._matricesTexture,Ge),st.setOptional(U,G,"batchingIdTexture"),st.setValue(U,"batchingIdTexture",G._indirectTexture,Ge),st.setOptional(U,G,"batchingColorTexture"),G._colorsTexture!==null&&st.setValue(U,"batchingColorTexture",G._colorsTexture,Ge));let kn=Y.morphAttributes;if((kn.position!==void 0||kn.normal!==void 0||kn.color!==void 0)&&te.update(G,Y,an),(Ri||Re.receiveShadow!==G.receiveShadow)&&(Re.receiveShadow=G.receiveShadow,st.setValue(U,"receiveShadow",G.receiveShadow)),(k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial)&&k.envMap===null&&L.environment!==null&&(Qt.envMapIntensity.value=L.environmentIntensity),Qt.dfgLUT!==void 0&&(Qt.dfgLUT.value=Mv()),Ri){if(st.setValue(U,"toneMappingExposure",C.toneMappingExposure),Re.needsLights&&hp(Qt,ts),me&&k.fog===!0&&ce.refreshFogUniforms(Qt,me),ce.refreshMaterialUniforms(Qt,k,ie,Pe,T.state.transmissionRenderTarget[y.id]),Re.needsLights&&Re.numLightProbeGrids>0){let Tt=b,qt=0;for(let ai of T.state.lightProbeGridArray)ai.texture!==null&&(Tt.textures[qt]=ai.texture,Tt.min[qt]=ai.boundingBox.min,Tt.max[qt]=ai.boundingBox.max,Tt.resolution[qt]=ai.resolution,qt++);for(let ai in Tt)Tt[ai].length=qt;Qt.probesSH.value=Tt.textures,Qt.probesMin.value=Tt.min,Qt.probesMax.value=Tt.max,Qt.probesResolution.value=Tt.resolution}Qs.upload(U,tu(Re),Qt,Ge)}if(k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Qs.upload(U,tu(Re),Qt,Ge),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&st.setValue(U,"center",G.center),st.setValue(U,"modelViewMatrix",G.modelViewMatrix),st.setValue(U,"normalMatrix",G.normalMatrix),st.setValue(U,"modelMatrix",G.matrixWorld),k.uniformsGroups!==void 0){let Tt=k.uniformsGroups;for(let qt=0,ai=Tt.length;qt<ai;qt++){let su=Tt[qt];Ne.update(su,an),Ne.bind(su,an)}}return an}function hp(y,L){y.ambientLightColor.needsUpdate=L,y.lightProbe.needsUpdate=L,y.sunLights.needsUpdate=L,y.sunLightShadows.needsUpdate=L,y.directionalLights.needsUpdate=L,y.directionalLightShadows.needsUpdate=L,y.pointLights.needsUpdate=L,y.pointLightShadows.needsUpdate=L,y.spotLights.needsUpdate=L,y.spotLightShadows.needsUpdate=L,y.rectAreaLights.needsUpdate=L,y.hemisphereLights.needsUpdate=L}function up(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return j},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return q},this.setRenderTargetTextures=function(y,L,Y){let k=Oe.get(y);k.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),Oe.get(y.texture).__webglTexture=L,Oe.get(y.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:Y,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,L){let Y=Oe.get(y);Y.__webglFramebuffer=L,Y.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(y,L=0,Y=0){q=y,j=L,H=Y;let k=null,G=!1,me=!1;if(y){let fe=Oe.get(y);if(fe.__useDefaultFramebuffer!==void 0){ge.bindFramebuffer(U.FRAMEBUFFER,fe.__webglFramebuffer),X.copy(y.viewport),oe.copy(y.scissor),Ie=y.scissorTest,ge.viewport(X),ge.scissor(oe),ge.setScissorTest(Ie),B=-1;return}else if(fe.__webglFramebuffer===void 0)Ge.setupRenderTarget(y);else if(fe.__hasExternalTextures)Ge.rebindTextures(y,Oe.get(y.texture).__webglTexture,Oe.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){let He=y.depthTexture;if(fe.__boundDepthTexture!==He){if(He!==null&&Oe.has(He)&&(y.width!==He.image.width||y.height!==He.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ge.setupDepthRenderbuffer(y)}}let Se=y.texture;(Se.isData3DTexture||Se.isDataArrayTexture||Se.isCompressedArrayTexture)&&(me=!0);let Le=Oe.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Le[L])?k=Le[L][Y]:k=Le[L],G=!0):y.samples>0&&Ge.useMultisampledRTT(y)===!1?k=Oe.get(y).__webglMultisampledFramebuffer:Array.isArray(Le)?k=Le[Y]:k=Le,X.copy(y.viewport),oe.copy(y.scissor),Ie=y.scissorTest}else X.copy(Ue).multiplyScalar(ie).floor(),oe.copy(at).multiplyScalar(ie).floor(),Ie=ct;if(Y!==0&&(k=V),ge.bindFramebuffer(U.FRAMEBUFFER,k)&&ge.drawBuffers(y,k),ge.viewport(X),ge.scissor(oe),ge.setScissorTest(Ie),G){let fe=Oe.get(y.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+L,fe.__webglTexture,Y)}else if(me){let fe=L;for(let Se=0;Se<y.textures.length;Se++){let Le=Oe.get(y.textures[Se]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Se,Le.__webglTexture,Y,fe)}}else if(y!==null&&Y!==0){let fe=Oe.get(y.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,fe.__webglTexture,Y)}B=-1};function iu(y){let L=Oe.get(y);return(L.__readFormat!==y.format||L.__readType!==y.type)&&(L.__readFormat=y.format,L.__readType=y.type,L.__formatReadable=wt.textureFormatReadable(y.format),L.__typeReadable=wt.textureTypeReadable(y.type)),L}this.readRenderTargetPixels=function(y,L,Y,k,G,me,Ee,fe=0){if(!(y&&y.isWebGLRenderTarget)){Be("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Se=Oe.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Ee!==void 0&&(Se=Se[Ee],Array.isArray(Se)&&(Se=Se[0])),Se){ge.bindFramebuffer(U.FRAMEBUFFER,Se);try{let Le=y.textures[fe],He=Le.format,et=Le.type;y.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+fe);let Ae=iu(Le);if(Ae.__formatReadable===!1){Be("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ae.__typeReadable===!1){Be("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=y.width-k&&Y>=0&&Y<=y.height-G&&U.readPixels(L,Y,k,G,le.convert(He),le.convert(et),me)}finally{let Le=q!==null?Oe.get(q).__webglFramebuffer:null;ge.bindFramebuffer(U.FRAMEBUFFER,Le)}}},this.readRenderTargetPixelsAsync=async function(y,L,Y,k,G,me,Ee,fe=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Se=Oe.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Ee!==void 0&&(Se=Se[Ee],Array.isArray(Se)&&(Se=Se[0])),Se)if(L>=0&&L<=y.width-k&&Y>=0&&Y<=y.height-G){ge.bindFramebuffer(U.FRAMEBUFFER,Se);let Le=y.textures[fe],He=Le.format,et=Le.type;y.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+fe);let Ae=iu(Le);if(Ae.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ae.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let tt=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,tt),U.bufferData(U.PIXEL_PACK_BUFFER,me.byteLength,U.STREAM_READ),U.readPixels(L,Y,k,G,le.convert(He),le.convert(et),0),U.bindBuffer(U.PIXEL_PACK_BUFFER,null);let Ft=q!==null?Oe.get(q).__webglFramebuffer:null;ge.bindFramebuffer(U.FRAMEBUFFER,Ft);let gt=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Xd(U,gt,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,tt),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,me),U.bindBuffer(U.PIXEL_PACK_BUFFER,null),U.deleteBuffer(tt),U.deleteSync(gt),me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,L=null,Y=0){let k=Math.pow(2,-Y),G=Math.floor(y.image.width*k),me=Math.floor(y.image.height*k),Ee=L!==null?L.x:0,fe=L!==null?L.y:0;Ge.setTexture2D(y,0),U.copyTexSubImage2D(U.TEXTURE_2D,Y,0,0,Ee,fe,G,me),ge.unbindTexture()},this.copyTextureToTexture=function(y,L,Y=null,k=null,G=0,me=0){let Ee,fe,Se,Le,He,et,Ae,tt,Ft,gt=y.isCompressedTexture?y.mipmaps[me]:y.image;if(Y!==null)Ee=Y.max.x-Y.min.x,fe=Y.max.y-Y.min.y,Se=Y.isBox3?Y.max.z-Y.min.z:1,Le=Y.min.x,He=Y.min.y,et=Y.isBox3?Y.min.z:0;else{let st=Math.pow(2,-G);Ee=Math.floor(gt.width*st),fe=Math.floor(gt.height*st),y.isDataArrayTexture?Se=gt.depth:y.isData3DTexture?Se=Math.floor(gt.depth*st):Se=1,Le=0,He=0,et=0}k!==null?(Ae=k.x,tt=k.y,Ft=k.z):(Ae=0,tt=0,Ft=0);let ft=le.convert(L.format),rn=le.convert(L.type),Re;L.isData3DTexture?(Ge.setTexture3D(L,0),Re=U.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(Ge.setTexture2DArray(L,0),Re=U.TEXTURE_2D_ARRAY):(Ge.setTexture2D(L,0),Re=U.TEXTURE_2D),ge.activeTexture(U.TEXTURE0),ge.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,L.flipY),ge.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),ge.pixelStorei(U.UNPACK_ALIGNMENT,L.unpackAlignment);let hn=ge.getParameter(U.UNPACK_ROW_LENGTH),ot=ge.getParameter(U.UNPACK_IMAGE_HEIGHT),es=ge.getParameter(U.UNPACK_SKIP_PIXELS),an=ge.getParameter(U.UNPACK_SKIP_ROWS),ua=ge.getParameter(U.UNPACK_SKIP_IMAGES);ge.pixelStorei(U.UNPACK_ROW_LENGTH,gt.width),ge.pixelStorei(U.UNPACK_IMAGE_HEIGHT,gt.height),ge.pixelStorei(U.UNPACK_SKIP_PIXELS,Le),ge.pixelStorei(U.UNPACK_SKIP_ROWS,He),ge.pixelStorei(U.UNPACK_SKIP_IMAGES,et);let Ri=y.isDataArrayTexture||y.isData3DTexture,ts=L.isDataArrayTexture||L.isData3DTexture;if(y.isDepthTexture){let st=Oe.get(y),Qt=Oe.get(L),kn=Oe.get(st.__renderTarget),Tt=Oe.get(Qt.__renderTarget);ge.bindFramebuffer(U.READ_FRAMEBUFFER,kn.__webglFramebuffer),ge.bindFramebuffer(U.DRAW_FRAMEBUFFER,Tt.__webglFramebuffer);for(let qt=0;qt<Se;qt++)Ri&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Oe.get(y).__webglTexture,G,et+qt),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Oe.get(L).__webglTexture,me,Ft+qt)),U.blitFramebuffer(Le,He,Le+Ee,He+fe,Ae,tt,Ae+Ee,tt+fe,U.DEPTH_BUFFER_BIT,U.NEAREST);ge.bindFramebuffer(U.READ_FRAMEBUFFER,null),ge.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(G!==0||y.isRenderTargetTexture||Oe.has(y)){let st=Oe.get(y),Qt=Oe.get(L);ge.bindFramebuffer(U.READ_FRAMEBUFFER,P),ge.bindFramebuffer(U.DRAW_FRAMEBUFFER,K);for(let kn=0;kn<Se;kn++)Ri?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,st.__webglTexture,G,et+kn):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,st.__webglTexture,G),ts?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Qt.__webglTexture,me,Ft+kn):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Qt.__webglTexture,me),G!==0?U.blitFramebuffer(Le,He,Le+Ee,He+fe,Ae,tt,Ae+Ee,tt+fe,U.COLOR_BUFFER_BIT,U.NEAREST):ts?U.copyTexSubImage3D(Re,me,Ae,tt,Ft+kn,Le,He,Ee,fe):U.copyTexSubImage2D(Re,me,Ae,tt,Le,He,Ee,fe);ge.bindFramebuffer(U.READ_FRAMEBUFFER,null),ge.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else ts?y.isDataTexture||y.isData3DTexture?U.texSubImage3D(Re,me,Ae,tt,Ft,Ee,fe,Se,ft,rn,gt.data):L.isCompressedArrayTexture?U.compressedTexSubImage3D(Re,me,Ae,tt,Ft,Ee,fe,Se,ft,gt.data):U.texSubImage3D(Re,me,Ae,tt,Ft,Ee,fe,Se,ft,rn,gt):y.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,me,Ae,tt,Ee,fe,ft,rn,gt.data):y.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,me,Ae,tt,gt.width,gt.height,ft,gt.data):U.texSubImage2D(U.TEXTURE_2D,me,Ae,tt,Ee,fe,ft,rn,gt);ge.pixelStorei(U.UNPACK_ROW_LENGTH,hn),ge.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ot),ge.pixelStorei(U.UNPACK_SKIP_PIXELS,es),ge.pixelStorei(U.UNPACK_SKIP_ROWS,an),ge.pixelStorei(U.UNPACK_SKIP_IMAGES,ua),me===0&&L.generateMipmaps===!0&&L.mipmapsAutoUpdate===!0&&U.generateMipmap(Re),ge.unbindTexture()},this.initRenderTarget=function(y){Oe.get(y).__webglFramebuffer===void 0&&Ge.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?Ge.setTextureCube(y,0):y.isData3DTexture?Ge.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?Ge.setTexture2DArray(y,0):Ge.setTexture2D(y,0),ge.unbindTexture()},this.resetState=function(){j=0,H=0,q=null,ge.reset(),he.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Nn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=nt._getDrawingBufferColorSpace(e),t.unpackColorSpace=nt._getUnpackColorSpace()}};function In(n,e=!1){let t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},a={},o=n[0].morphTargetsRelative,l=new Ht;l.morphTargetsRelative=o;let c=0;for(let h=0;h<n.length;++h){let u=n[h],d=0,f=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let g in u.attributes){if(!i.has(g))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+g+'" attribute exists among all geometries, or in none of them.'),null;r[g]===void 0&&(r[g]=[]),r[g].push(u.attributes[g]),d++}if(d!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let g in u.morphAttributes){if(!s.has(g))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(u.morphAttributes[g].length!==n[0].morphAttributes[g].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have the same number of morph targets for the "'+g+'" morph attribute.'),null;a[g]===void 0&&(a[g]=[]),a[g].push(u.morphAttributes[g]),f++}if(f!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of morph attributes."),null;if(e){let g;if(t)g=u.index.count;else if(u.attributes.position!==void 0)g=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,g,h),c+=g}}if(t){let h=0,u=[];for(let d=0;d<n.length;++d){let f=n[d].index;for(let g=0;g<f.count;++g)u.push(f.getX(g)+h);h+=n[d].attributes.position.count}l.setIndex(u)}for(let h in r){let u=Lf(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in a){let u=a[h][0].length;if(u!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let v=0;v<a[h].length;++v)f.push(a[h][v][d]);let g=Lf(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}}return l}function Lf(n){let e,t,i,s=-1,r=0;for(let c=0;c<n.length;++c){let h=n[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let a=new e(r),o=new mn(a,t,i),l=0;for(let c=0;c<n.length;++c){let h=n[c];if(h.isInterleavedBufferAttribute){let u=l/t;for(let d=0,f=h.count;d<f;d++)for(let g=0;g<t;g++){let v=h.getComponent(d,g);o.setComponent(d+u,g,v)}}else a.set(h.array,l);l+=h.count*t}return s!==void 0&&(o.gpuType=s),o}function ri(n,e){let t=document.createElement("canvas");return t.width=n,t.height=e,t}function fs(n,e=1,t=1){let i=new Wi(n);return i.wrapS=i.wrapT=zs,i.repeat.set(e,t),i.colorSpace=Gt,i.anisotropy=8,i}function Ph(n,e,t,i,s,r=9e3,a=2){for(let o=0;o<r;o++){let l=(Math.random()-.5)*s;n.fillStyle=`rgb(${Ih(i[0]+l)},${Ih(i[1]+l*1.1)},${Ih(i[2]+l*.6)})`,n.fillRect(Math.random()*e,Math.random()*t,a*(.5+Math.random()),a*(.5+Math.random())*2)}}var Ih=n=>Math.max(0,Math.min(255,Math.round(n)));function Lh(){let n=ri(512,512),e=n.getContext("2d"),t=[66,128,44],i=[82,146,52];for(let s=0;s<2;s++)for(let r=0;r<2;r++){let a=(s+r)%2?t:i;e.fillStyle=`rgb(${a})`,e.fillRect(s*256,r*256,256,256)}Ph(e,512,512,[74,137,48],42,26e3,1.6),e.globalAlpha=.08,e.fillStyle="#d8ffb0";for(let s=0;s<512;s+=8)e.fillRect(0,s,512,1);return e.globalAlpha=1,fs(n)}function Nh(){let n=ri(512,512),e=n.getContext("2d");e.fillStyle="rgb(150,112,74)",e.fillRect(0,0,512,512),Ph(e,512,512,[150,112,74],50,3e4,1.4),e.globalAlpha=.12,e.strokeStyle="#5a3c22";for(let t=0;t<40;t++){e.beginPath();let i=Math.random()*512;e.moveTo(0,i),e.bezierCurveTo(170,i+10,340,i-10,512,i),e.stroke()}return e.globalAlpha=1,fs(n)}function Nf(){let n=ri(256,256),e=n.getContext("2d");return e.fillStyle="rgb(76,124,46)",e.fillRect(0,0,256,256),Ph(e,256,256,[76,124,46],50,9e3,1.5),fs(n)}function Df(){let n=ri(512,256),e=n.getContext("2d");e.fillStyle="#3a3d44",e.fillRect(0,0,512,256);let t=["#e8e8e8","#2b2b2b","#c23b3b","#3b6cc2","#e0c040","#6a4a3a","#7aa05a","#d88a4a","#f0d0b0","#4a4a7a"];for(let i=0;i<16;i++){let s=i*16;e.fillStyle="#55585f",e.fillRect(0,s+13,512,3);for(let r=0;r<70;r++){if(Math.random()<.12)continue;let a=r*7.3+Math.random()*3;e.fillStyle=t[Math.floor(Math.random()*t.length)],e.fillRect(a,s+6,5,8),e.fillStyle=["#f1c9a5","#d9a87e","#2a1a10","#111"][Math.floor(Math.random()*4)],e.beginPath(),e.arc(a+2.5,s+4,2.3,0,Math.PI*2),e.fill()}}return fs(n)}function Uf(){let n=ri(1024,128),e=n.getContext("2d"),t=["#f0f0f0","#222","#b33","#36b","#dc4","#654","#7a5","#d84","#448","#999"];for(let s=0;s<150;s++){let r=Math.random()*1024,a=70+Math.random()*40,o=12+Math.random()*6;e.fillStyle=t[Math.floor(Math.random()*t.length)],e.fillRect(r-o/2,128-a+18,o,a),e.fillStyle=["#f1c9a5","#d9a87e","#c69a72"][Math.floor(Math.random()*3)],e.beginPath(),e.arc(r,128-a+10,7,0,Math.PI*2),e.fill(),e.fillStyle=["#2a1a10","#111","#5a3a20"][Math.floor(Math.random()*3)],e.beginPath(),e.arc(r,128-a+7,7,Math.PI,Math.PI*2),e.fill()}return fs(n)}function Ff(){let n=ri(256,128),e=n.getContext("2d");e.fillStyle="#d9dde2",e.fillRect(0,0,256,128);for(let t=0;t<4;t++)for(let i=0;i<16;i++)e.fillStyle=Math.random()<.2?"#9fb7cf":"#5f7a96",e.fillRect(i*16+2,t*32+6,12,20);return fs(n)}function yl(n,e={}){let t=e.w||512,i=e.h||128,s=ri(t,i),r=s.getContext("2d");r.fillStyle=e.bg||"#ffffff",r.fillRect(0,0,t,i),e.border&&(r.strokeStyle=e.border,r.lineWidth=10,r.strokeRect(5,5,t-10,i-10)),r.fillStyle=e.fg||"#111",r.font=`bold ${e.size||Math.floor(i*.62)}px "Hiragino Sans","Noto Sans JP",sans-serif`,r.textAlign="center",r.textBaseline="middle";let a=String(n).split(`
`);a.forEach((l,c)=>r.fillText(l,t/2,i/2+(c-(a.length-1)/2)*(e.size||i*.62)*1.15));let o=new Wi(s);return o.colorSpace=Gt,o.anisotropy=4,o}function Of(n,e){let t=ri(128,96),i=t.getContext("2d");i.fillStyle=e,i.fillRect(0,0,128,96),i.fillStyle="#fff",i.fillRect(30,14,68,68),i.fillStyle="#111",i.font="bold 54px sans-serif",i.textAlign="center",i.textBaseline="middle",i.fillText(String(n),64,50);let s=new Wi(t);return s.colorSpace=Gt,s}function kf(){let n=ri(256,256),e=n.getContext("2d");e.fillStyle="#ffffff",e.fillRect(0,0,256,256),e.globalAlpha=.18;for(let t=0;t<4e3;t++){e.fillStyle=Math.random()<.5?"#000":"#fff";let i=Math.random()*256,s=Math.random()*256;e.fillRect(i,s,1,3+Math.random()*5)}return e.globalAlpha=1,fs(n,2,2)}function Bf(){let n=ri(128,128),e=n.getContext("2d"),t=e.createRadialGradient(64,64,4,64,64,62);return t.addColorStop(0,"rgba(0,0,0,0.55)"),t.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=t,e.fillRect(0,0,128,128),new Wi(n)}var $e=(n,e,t)=>new O(n,e,t),Ml=null;function yt(n,e,t=0,i,s=0,r=0){let a=new rt,o=new vn().setFromEuler(new $n(s,r,t));return a.compose(e||$e(0,0,0),o,i||$e(1,1,1)),n.applyMatrix4(a),n}function ji(n,e,t,i,s,r=10){let a=new Dt(e,n,t,r),o=s-Math.PI/2,l=$e(i.x+Math.cos(s)*t/2,i.y+Math.sin(s)*t/2,i.z);return yt(a,l,o)}var Ji={};function Sv(){if(Ji.h)return Ji.h;let n=In([yt(new Br(.4,1.25,6,14),$e(0,1.27,0),Math.PI/2,$e(1.06,1,.82)),yt(new Vt(.45,14,10),$e(.62,1.25,0),0,$e(1,1.02,.8)),yt(new Vt(.47,14,10),$e(-.64,1.3,0),0,$e(1,1,.86)),yt(new Vt(.3,10,8),$e(.5,1.5,0),0,$e(1.2,.8,.7))].map(p=>p.toNonIndexed?p.toNonIndexed():p)),e=.42,t=-1.05,i=$e(Math.cos(e)*.95,Math.sin(e)*.95,0),s=In([ji(.27,.15,1,$e(-.05,-.05,0),e,12).toNonIndexed(),yt(new Vt(.17,10,8),i.clone(),0,$e(1,1,.85)).toNonIndexed(),ji(.15,.085,.58,i.clone().add($e(.02,.02,0)),t,10).toNonIndexed(),yt(new Vt(.09,8,6),i.clone().add($e(Math.cos(t)*.58,Math.sin(t)*.58+.01,0)),0,$e(1.1,.9,.9)).toNonIndexed()]),r=In([yt(new yi(.035,.15,6),i.clone().add($e(-.04,.16,.07)),-.25,null,.15).toNonIndexed(),yt(new yi(.035,.15,6),i.clone().add($e(-.04,.16,-.07)),-.25,null,-.15).toNonIndexed()]),a=yt(new kt(.95,.07,.035),$e(Math.cos(e)*.45-Math.sin(e)*.17,Math.sin(e)*.45+Math.cos(e)*.17,0),e),o=In([yt(new Vt(.03,6,5),i.clone().add($e(.12,-.05,.11))).toNonIndexed(),yt(new Vt(.03,6,5),i.clone().add($e(.12,-.05,-.11))).toNonIndexed()]),l=i.clone().add($e(Math.cos(t)*.5,Math.sin(t)*.5,0)),c=yt(new Dt(.075,.11,.5,8),$e(0,-.25,0)),h=In([yt(new Dt(.042,.05,.46,7),$e(0,-.23,0)).toNonIndexed(),yt(new Vt(.06,7,5),$e(0,-.47,0)).toNonIndexed()]),u=yt(new Dt(.055,.07,.09,8),$e(.01,-.03,0)),d=yt(new Dt(.08,.15,.58,8),$e(0,-.29,0)),f=In([yt(new Dt(.042,.055,.5,7),$e(0,-.25,0)).toNonIndexed(),yt(new Vt(.06,7,5),$e(0,-.5,0)).toNonIndexed()]),g=In([yt(new Dt(.09,.035,.8,7),$e(0,-.4,0)).toNonIndexed()]),v=In([yt(new kt(.5,.06,.42),$e(.1,1.69,0)).toNonIndexed(),yt(new kt(.16,.08,.36),$e(.32,1.72,0)).toNonIndexed()]);return Ji.h={body:n,neck:s,ears:r,mane:a,eyes:o,upperF:c,lowerF:h,hoof:u,upperH:d,lowerH:f,tail:g,saddle:v,bit:l,alpha:e},Ji.h}function bv(){if(Ji.j)return Ji.j;let n=yt(new kt(.5,.24,.34),$e(.24,.43,0),-.12),e=In([yt(new Vt(.135,12,8,0,Math.PI*2,0,Math.PI*.6),$e(.56,.6,0)).toNonIndexed()]),t=yt(new Vt(.105,10,8),$e(.6,.56,0)),i=In([ji(.07,.06,.42,$e(-.02,.32,.17),-.35).toNonIndexed(),ji(.07,.06,.42,$e(-.02,.32,-.17),-.35).toNonIndexed()]),s=In([ji(.055,.045,.42,$e(.37,.18,.2),-2).toNonIndexed(),ji(.055,.045,.42,$e(.37,.18,-.2),-2).toNonIndexed()]),r=In([ji(.05,.045,.42,$e(.42,.48,.17),-.85).toNonIndexed(),ji(.05,.045,.42,$e(.42,.48,-.17),-.85).toNonIndexed()]);return Ji.j={torso:n,helmet:e,face:t,pants:i,boots:s,arms:r},Ji.j}var Dh={};function wi(n,e={}){let t=n+JSON.stringify(e);return Dh[t]||(Dh[t]=new qe({color:n,roughness:.6,metalness:0,...e})),Dh[t]}function zf(n,e,t,i={}){Ml||(Ml=kf());let s=Sv(),r=new Nt,a=new Nt;r.add(a);let o=new qe({color:n.body,roughness:.42,metalness:.05,map:Ml}),l=wi(n.mane,{roughness:.8}),c=new qe({color:n.leg,roughness:.5,map:Ml}),h=wi(1710618,{roughness:.4}),u=new we(s.body,o);a.add(u);let d=new we(s.saddle,wi(2759184,{roughness:.5}));a.add(d);let f=Of(t,"#ffffff"),g=new qe({map:f,roughness:.8,side:jt});for(let j of[1,-1]){let H=new we(new tn(.62,.42),g);H.position.set(.02,1.5,j*.36),j<0&&(H.rotation.y=Math.PI),a.add(H)}let v=new Nt;v.position.set(.58,1.42,0),a.add(v);let p=new we(s.neck,o);v.add(p),v.add(new we(s.ears,o));let m=new we(s.mane,l);v.add(m),v.add(new we(s.eyes,wi(328965,{roughness:.2})));let M=new we(new zr(.11,.018,6,14),wi(1118481));M.position.copy(s.bit).add($e(-.08,.1,0)),M.rotation.y=Math.PI/2,M.rotation.x=.6,v.add(M);let R=[],b=(j,H,q,B,W)=>{let X=new Nt;X.position.set(j,H,q),a.add(X),X.add(new we(B?s.upperF:s.upperH,c));let oe=new Nt;oe.position.y=B?-.5:-.58,X.add(oe),oe.add(new we(B?s.lowerF:s.lowerH,c));let Ie=new we(s.hoof,h);Ie.position.y=B?-.5:-.52,oe.add(Ie),R.push({hip:X,knee:oe,front:B,off:W})};b(.62,1.12,.17,!0,.5),b(.62,1.12,-.17,!0,.62),b(-.66,1.2,.17,!1,0),b(-.66,1.2,-.17,!1,.1);let A=new Nt;A.position.set(-1.08,1.45,0),a.add(A),A.add(new we(s.tail,l));let T=bv(),_=new Nt;_.position.set(.05,1.68,0),a.add(_);let S=wi(e,{roughness:.35,metalness:.05}),N=new we(T.torso,S);_.add(N);let C=new we(T.helmet,S);_.add(C);let D=new we(T.face,wi(14857356));_.add(D);let F=new we(T.pants,wi(15921906));_.add(F);let V=new we(T.boots,wi(1381653,{roughness:.3}));_.add(V);let P=new we(T.arms,S);return _.add(P),r.traverse(j=>{j.isMesh&&(j.castShadow=!!i.shadow)}),{root:r,bodyG:a,neckP:v,mane:m,legs:R,tailP:A,jock:_,torso:N,helmet:C,face:D,pants:F,boots:V,arms:P,silk:S,bit:s.bit.clone(),phase:0}}function Gf(n,e,t,i){let s=4.2+t*.16,r=e/s*Math.PI*2,a=Math.min(1,t/14);for(let o of n.legs){let l=r+o.off*Math.PI*2;o.front?(o.hip.rotation.z=(.62*Math.sin(l)+.05)*a,o.knee.rotation.z=-1.5*Math.max(0,Math.cos(l))*a):(o.hip.rotation.z=(.5*Math.sin(l)-.12)*a,o.knee.rotation.z=(.9*Math.max(0,Math.cos(l+.4))-.25)*a)}return n.bodyG.position.y=.06*Math.sin(r*1)*a,n.bodyG.rotation.z=.035*Math.sin(r+1.2)*a,n.neckP.rotation.z=(.1*Math.sin(r+2.4)-.12)*a,n.tailP.rotation.z=-1.1-.4*a+.08*Math.sin(r*2),n.tailP.rotation.x=.08*Math.sin(i*9),n.jock.position.y=1.68-n.bodyG.position.y*.7,n.jock.rotation.z=-n.bodyG.rotation.z*.8,n.mane.scale.y=1+.25*Math.sin(i*22),r}var{Ls:wv,R:Ei,P:Sl,width:Mn}=zt,Ut={};function tr(n,e,t,i,s,r=10,a=1){let o=[],l=[],c=[],h=Math.ceil(Sl/s);for(let d=0;d<=h;d++){let f=d/h*Sl,g=Lt(f,n,{}),v=Lt(f,e,{});if(o.push(g.x,t,g.z,v.x,i,v.z),l.push(f/r,0,f/r,a),d<h){let p=d*2;c.push(p,p+1,p+2,p+1,p+3,p+2)}}let u=new Ht;return u.setAttribute("position",new lt(o,3)),u.setAttribute("uv",new lt(l,2)),u.setIndex(c),u.computeVertexNormals(),u}function Ev(n){let e=new Dn({side:nn,depthWrite:!1,fog:!1,uniforms:{sunDir:{value:n.clone().normalize()}},vertexShader:"varying vec3 vDir; void main(){ vDir = normalize(position); vec4 p = modelViewMatrix*vec4(position,1.0); gl_Position = projectionMatrix*p; gl_Position.z = gl_Position.w; }",fragmentShader:`uniform vec3 sunDir; varying vec3 vDir;
      void main(){ float h = clamp(vDir.y, -0.1, 1.0);
        vec3 zen = vec3(0.16,0.38,0.78); vec3 hor = vec3(0.74,0.84,0.93);
        vec3 c = mix(hor, zen, pow(max(h,0.0), 0.55));
        float s = max(dot(normalize(vDir), sunDir), 0.0);
        c += vec3(1.0,0.9,0.7) * (pow(s, 400.0)*4.0 + pow(s, 12.0)*0.25);
        // \u96F2
        float cl = sin(vDir.x*9.0+vDir.z*3.0)*sin(vDir.z*11.0-vDir.x*4.0)*0.5+0.5;
        cl = smoothstep(0.55, 0.95, cl) * smoothstep(0.02, 0.25, h) * (1.0 - smoothstep(0.35,0.7,h));
        c = mix(c, vec3(0.97,0.98,1.0), cl*0.75);
        gl_FragColor = vec4(c, 1.0);
        #include <colorspace_fragment>
      }`}),t=new we(new Vt(4e3,32,16),e);return t.renderOrder=-1,t.frustumCulled=!1,t}var bl=class{constructor(e,t,i={}){this.race=t,this.opts=i,this.view=i.view||"fp";let s=i.lowPower;this.renderer=new _l({canvas:e,antialias:!s,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,s?1:1.6)),this.renderer.outputColorSpace=Gt,this.renderer.toneMapping=qr,this.renderer.toneMappingExposure=1.05,this.renderer.shadowMap.enabled=!s,this.renderer.shadowMap.type=os,this.scene=new Ir,this.scene.fog=new Cr(12176864,120,1500),this.camera=new pn(72,1,.05,6e3),this.camera.rotation.order="YXZ",this.t=0,this.shake=0,this.whipAnim=0,this.buildWorld(),this.buildHorses(),this.particles(),this.resize(),this._onResize=()=>this.resize(),window.addEventListener("resize",this._onResize)}resize(){let e=this.renderer.domElement,t=e.clientWidth||window.innerWidth,i=e.clientHeight||window.innerHeight;this.renderer.setSize(t,i,!1),this.camera.aspect=t/i,this.camera.fov=t<i?90:66,this.camera.updateProjectionMatrix()}buildWorld(){let e=this.scene,t=new O(-.45,.62,.35).normalize();this.sunDir=t,e.add(this.sky=Ev(t)),e.add(new Vr(14084351,5398575,.75));let i=new Xr(16773336,2.6);i.castShadow=!0,i.shadow.mapSize.set(1024,1024);let s=i.shadow.camera;s.left=-28,s.right=28,s.top=28,s.bottom=-28,s.near=1,s.far=220,i.shadow.bias=-4e-4,i.shadow.normalBias=.03,e.add(i),e.add(i.target),this.sun=i;let r=Nf();r.repeat.set(600,600);let a=new we(new tn(5e3,5e3),new qe({map:r,roughness:.95}));a.rotation.x=-Math.PI/2,a.position.y=-.02,a.receiveShadow=!0,e.add(a);let o=this.race.surf!=="\u30C0",l=o?Lh():Nh(),c=new we(tr(-1.5,Mn+1.2,.01,.01,2,13,2.1),new qe({map:l,roughness:o?.85:1}));c.receiveShadow=!0,e.add(c);let h=o?Nh():Lh(),u=new we(tr(-26,-4,.008,.008,3,13,1.7),new qe({map:h,roughness:1}));u.receiveShadow=!0,e.add(u);let d=new qe({color:16053492,roughness:.35,side:jt}),f=(Me,We)=>{e.add(new we(tr(Me,Me,We-.14,We,2),d)),e.add(new we(tr(Me-.07,Me+.07,We,We,2),d));let je=Math.floor(Sl/3.2),St=new Hi(new kt(.07,We,.07),d,je),Rt=new rt;for(let Zt=0;Zt<je;Zt++)Lt(Zt*3.2,Me,Ut),Rt.makeTranslation(Ut.x,We/2,Ut.z),St.setMatrixAt(Zt,Rt);e.add(St)};f(-.15,1.05),f(Mn+.4,1.05),f(-4,1),f(-26,.9);let g=new qe({color:3103270,roughness:1,side:jt});e.add(new we(tr(Mn+2.6,Mn+2.6,0,1.4,4),g)),e.add(new we(tr(Mn+2.3,Mn+2.9,1.4,1.4,4),g));for(let Me=200;Me<=3600;Me+=200){let We=zt.finishU-Me;Lt(We,-.6,Ut);let je=new Nt,St=new we(new Dt(.06,.06,3.2,8),new qe({color:Me%1e3===0?13904426:16777215}));if(St.position.y=1.6,je.add(St),Me<=1600){let Rt=new we(new tn(1.4,.8),new Xn({map:yl(String(Me),{w:256,h:140,bg:"#ffffff",fg:"#d42a2a",border:"#d42a2a"}),side:jt}));Rt.position.y=3.1,Rt.rotation.y=Math.atan2(-Ut.hz,Ut.hx)+Math.PI/2,je.add(Rt)}je.position.set(Ut.x,0,Ut.z),e.add(je)}Lt(zt.finishU,-.8,Ut);let v=new Nt,p=new we(new Dt(.1,.1,5,10),new qe({color:16777215}));p.position.y=2.5,v.add(p);let m=new we(new Dt(.9,.9,.08,24),new qe({color:16777215,roughness:.2,metalness:.4}));m.rotation.x=Math.PI/2,m.position.y=5.2,v.add(m);let M=new we(new qs(.55,24),new Xn({color:13904426}));M.position.set(0,5.2,.05),v.add(M);let R=M.clone();R.position.z=-.05,R.rotation.y=Math.PI,v.add(R),v.position.set(Ut.x,0,Ut.z),e.add(v);let b=Lt(zt.finishU,0,{}),A=Lt(zt.finishU,Mn,{}),T=new we(new tn(.25,Mn),new Xn({color:16777215,transparent:!0,opacity:.7}));T.rotation.x=-Math.PI/2,T.position.set(b.x,.02,(b.z+A.z)/2),e.add(T);let _=Ei+Mn+14,S=-230,N=260,C=N-S,D=(S+N)/2,F=new we(new tn(C+40,16),new qe({color:10132116,roughness:1}));F.rotation.x=-Math.PI/2,F.position.set(D,.01,Ei+Mn+6),F.receiveShadow=!0,e.add(F);let V=Df();V.repeat.set(C/16,3);let P=new we(new tn(C,46),new qe({map:V,roughness:1}));P.rotation.x=-Math.PI/2-.55,P.position.set(D,11,_+19),e.add(P);let K=Ff();K.repeat.set(C/30,1);let j=new we(new kt(C,16,20),[new qe({color:13620184}),new qe({color:13620184}),new qe({color:12567754}),new qe({color:12567754}),new qe({map:K}),new qe({color:13620184})]);j.position.set(D,30,_+48),e.add(j);let H=new we(new kt(C+10,1.2,46),new qe({color:15265007,roughness:.4,metalness:.3}));H.position.set(D,39,_+26),H.rotation.x=.08,H.castShadow=!1,e.add(H);for(let Me=S+10;Me<N;Me+=40){let We=new we(new Dt(.6,.6,30,8),new qe({color:14540253}));We.position.set(Me,15,_+36),e.add(We)}let q=Uf();q.repeat.set(C/30,1);let B=new qe({map:q,transparent:!0,alphaTest:.4,side:jt,roughness:1});for(let[Me,We,je]of[[Ei+Mn+5.5,2.1,.2],[Ei+Mn+9,2.3,.9],[Ei+Mn+12.5,2.5,1.7]]){let St=new we(new tn(C,We),B);St.position.set(D,je+We/2,Me),e.add(St);let Rt=new we(new kt(C,je+.01,3.5),new qe({color:9276808}));Rt.position.set(D,(je+.01)/2,Me+1.2),e.add(Rt)}let W=new Nt,X=yl(this.opts.title||"\u6B7B\u306C\u304B\u751F\u304D\u308B\u304B\u306E\u6226\u3044",{w:1024,h:256,bg:"#0b1a2e",fg:"#ffd34d",size:110}),oe=new we(new tn(60,15),new Xn({map:X,toneMapped:!1}));oe.position.y=16,W.add(oe);let Ie=new we(new kt(63,18,1.5),new qe({color:2236962}));Ie.position.set(0,16,-.9),W.add(Ie);for(let Me of[-20,20]){let We=new we(new kt(1.5,8,1.5),new qe({color:5592405}));We.position.set(Me,4,-.9),W.add(We)}W.position.set(60,0,Ei-70),e.add(W);let J=new we(new qs(40,32),new qe({color:3829647,roughness:.08,metalness:.4}));J.rotation.x=-Math.PI/2,J.scale.set(2.2,1,1),J.position.set(-60,.03,-20),e.add(J);let re=new Dt(.3,.45,4,6);re.translate(0,2,0);let _e=new yi(3.2,9,8);_e.translate(0,8,0);let Pe=new Vt(3.6,8,6);Pe.translate(0,6.5,0);let ie=[];for(let Me=0;Me<520;Me++){let We=Math.random()*Sl,je=Mn+14+Math.random()*160;Lt(We,je,Ut),!(Ut.z>Ei&&Ut.x>S-30&&Ut.x<N+30)&&ie.push([Ut.x,Ut.z,.7+Math.random()*.8,Math.random()<.5])}for(let Me=0;Me<60;Me++){let We=(Math.random()-.5)*(wv+60),je=(Math.random()-.5)*(Ei*1.2);Math.abs(We-60)<50&&je>Ei-100||Math.hypot((We+60)/2.2,je+20)<45||ie.push([We,je,.5+Math.random()*.6,!0])}let De=new Hi(re,new qe({color:4863268}),ie.length),dt=ie.filter(Me=>!Me[3]),Ue=ie.filter(Me=>Me[3]),at=new Hi(_e,new qe({color:2379818,roughness:1}),dt.length),ct=new Hi(Pe,new qe({color:4025902,roughness:1}),Ue.length),Ve=new rt,It=new vn,mt=new O;ie.forEach((Me,We)=>{mt.setScalar(Me[2]),Ve.compose(new O(Me[0],0,Me[1]),It,mt),De.setMatrixAt(We,Ve)}),dt.forEach((Me,We)=>{mt.setScalar(Me[2]),Ve.compose(new O(Me[0],0,Me[1]),It,mt),at.setMatrixAt(We,Ve)}),Ue.forEach((Me,We)=>{mt.set(Me[2],Me[2]*(.8+Math.random()*.4),Me[2]),Ve.compose(new O(Me[0],0,Me[1]),It,mt),ct.setMatrixAt(We,Ve)}),e.add(De,at,ct);let sn=new qe({color:7244448,roughness:1,flatShading:!0});for(let Me=0;Me<14;Me++){let We=Me/14*Math.PI*2+Math.random()*.2,je=1700+Math.random()*600,St=new we(new yi(300+Math.random()*300,160+Math.random()*220,7),sn);St.position.set(Math.cos(We)*je,60,Math.sin(We)*je),e.add(St)}this.buildGate()}buildGate(){let e=this.race,t=e.racers.length,i=new Nt,s=new qe({color:3111482,roughness:.6}),r=new qe({color:13619151,roughness:.5});Lt(e.u0+1.6,0,Ut);let a=Math.atan2(-Ut.hz,Ut.hx);for(let d=0;d<=t;d++){let f=.5+d*1.25,g=Lt(e.u0+1.6,f,{}),v=new we(new kt(2.6,2.4,.08),s);v.position.set(g.x,1.2,g.z),v.rotation.y=a,i.add(v)}let o=Lt(e.u0+1.6,.5,{}),l=Lt(e.u0+1.6,.5+t*1.25,{}),c=new we(new kt(.5,.6,t*1.25+.4),r);c.position.set((o.x+l.x)/2,2.7,(o.z+l.z)/2),c.rotation.y=a,i.add(c);let h=yl("\u6B7B\u306C\u304B\u751F\u304D\u308B\u304B\u306E\u6226\u3044",{w:1024,h:96,bg:"#2f7a3a",fg:"#ffffff",size:60}),u=new we(new tn(t*1.25,.5),new Xn({map:h,side:jt}));u.position.set((o.x+l.x)/2,2.7,(o.z+l.z)/2),u.rotation.y=a-Math.PI/2,u.position.x-=Math.cos(a)*.27,u.position.z+=Math.sin(a)*.27,i.add(u),this.scene.add(i),this.gate=i}buildHorses(){this.models=[];let e=new Xn({map:Bf(),transparent:!0,depthWrite:!1});for(let i of this.race.racers){let s=un[i.coat??0],r=zf(s,i.silk??16777215,i.num,{shadow:!0}),a=new we(new tn(3,1.2),e);a.rotation.x=-Math.PI/2,a.position.y=.03,r.root.add(a),this.scene.add(r.root),r.r=i,this.models.push(r),i.isPlayer&&(this.player=r)}let t=this.player;if(t){this.rig=new Nt,t.bodyG.add(this.rig),this.rig.position.set(.12,2.55,0),this.rig.add(this.camera);let i=t.silk,s=new qe({color:16119285,roughness:.7});this.arms=[];for(let r of[1,-1]){let a=new we(new Dt(.045,.055,1,10),i),o=new we(new Vt(.055,10,8),s),l=new we(new Dt(.008,.008,1,5),new qe({color:2759182}));t.bodyG.add(a,o,l),this.arms.push({s:r,arm:a,hand:o,rein:l})}this.whipStick=new we(new Dt(.008,.014,.65,6),new qe({color:1118481})),t.bodyG.add(this.whipStick),this.setView(this.view)}}setView(e){this.view=e;let t=this.player;if(!t)return;let i=e==="fp";for(let s of[t.torso,t.helmet,t.face,t.pants,t.boots,t.arms])s.visible=!i;for(let s of this.arms)s.arm.visible=i,s.hand.visible=i,s.rein.visible=!0;this.whipStick.visible=i,i?(this.camera.parent!==this.rig&&this.rig.add(this.camera),this.camera.position.set(0,0,0)):this.scene.add(this.camera)}particles(){let t=new Ht;this.pPos=new Float32Array(700*3),this.pVel=new Float32Array(700*3),this.pLife=new Float32Array(700),t.setAttribute("position",new mn(this.pPos,3));let i=this.race.surf!=="\u30C0";this.pts=new Ur(t,new Xs({color:i?5204522:9069632,size:i?.07:.09,sizeAttenuation:!0})),this.pts.frustumCulled=!1,this.scene.add(this.pts),this.pN=700,this.pI=0}emit(e,t,i,s,r){let a=this.pI;this.pI=(this.pI+1)%this.pN,this.pPos[a*3]=e,this.pPos[a*3+1]=t,this.pPos[a*3+2]=i,this.pVel[a*3]=s+(Math.random()-.5)*1.5,this.pVel[a*3+1]=1.5+Math.random()*2.5,this.pVel[a*3+2]=r+(Math.random()-.5)*1.5,this.pLife[a]=.7+Math.random()*.4}onWhip(){this.whipAnim=.32,this.shake=.12}update(e){this.t+=e;let t=new O;for(let s of this.models){let r=s.r,a=Lt(r.u,r.d,Ut),o=Math.atan2(-a.hz,a.hx),l=(r.d-(s.lastD??r.d))/Math.max(e,.001);s.lastD=r.d,s.yaw=(s.yaw??0)*.85+-Math.atan2(l,Math.max(r.v,3))*.15,s.root.position.set(a.x,0,a.z),s.root.rotation.y=o+s.yaw;let c=Gf(s,r.stride,r.v,this.t);if(r.v>8){let h=Math.floor(c/Math.PI);if(h!==s.lastStep){s.lastStep=h;let u=this.race.surf==="\u30C0"?6:3;for(let d=0;d<u;d++)this.emit(a.x-a.hx*(.5+Math.random()),.08,a.z-a.hz*(.5+Math.random()),-a.hx*r.v*.15,-a.hz*r.v*.15)}}}for(let s=0;s<this.pN;s++){if(this.pLife[s]<=0){this.pPos[s*3+1]=-10;continue}this.pLife[s]-=e,this.pVel[s*3+1]-=9.8*e,this.pPos[s*3]+=this.pVel[s*3]*e,this.pPos[s*3+1]=Math.max(.01,this.pPos[s*3+1]+this.pVel[s*3+1]*e),this.pPos[s*3+2]+=this.pVel[s*3+2]*e}this.pts.geometry.attributes.position.needsUpdate=!0;let i=this.player;if(i){let s=i.r,r=i.neckP;r.updateMatrix(),i.bodyG.updateMatrix(),this.whipAnim=Math.max(0,this.whipAnim-e);let a=this.whipAnim>0?Math.sin((1-this.whipAnim/.32)*Math.PI):0,o=s.v>10?Math.sin(this.t*2*Math.PI*(s.v/(4.2+s.v*.16)))*.05:0;for(let c of this.arms){let h=new O(.2,2.25,c.s*.2),u=new O(.92+o,1.72+o*.4,c.s*.11);c.s>0&&a>0&&(u=new O(.5-a*.15,1.95+a*.35,.36+a*.1));let d=i.bit.clone().add(new O(0,0,c.s*.1)).applyMatrix4(r.matrix);if(Uh(c.arm,h,u),c.hand.position.copy(u),Uh(c.rein,c.s>0&&a>0?new O(.92,1.72,.11):u,d),c.s>0){let f=a>0?new O(.05-a*.6,1.6+a*.2,.55):new O(1.3,1.45,.28);Uh(this.whipStick,u,f,.65)}}if(this.view==="fp"){let c=i.bodyG.position.y;this.shake=Math.max(0,this.shake-e);let h=this.shake*.25;this.rig.position.set(.12,2.55-c*.55+Math.sin(this.t*40)*h*.1,0),this.camera.rotation.set(-.13-i.bodyG.rotation.z*.6+(Math.random()-.5)*h*.05,-Math.PI/2,-i.yaw*.5+(Math.random()-.5)*h*.05),this.camera.rotation.x-=0;let u=Math.min(1,s.v/18),d=this.camera.aspect<1?90:66;this.camera.fov+=(d+u*6-this.camera.fov)*.05,this.camera.updateProjectionMatrix()}else{let c=Lt(s.u,s.d,{}),h=this.view==="tv"?0:9,u;if(this.view==="tv"){let d=Lt(s.u+2,s.d+22,{});t.set(d.x,7,d.z),u=new O(c.x,1.4,c.z)}else t.set(c.x-c.hx*h+c.nx*1.5,4.2,c.z-c.hz*h+c.nz*1.5),u=new O(c.x+c.hx*8,1.4,c.z+c.hz*8);this.camera.position.lerp(t,1-Math.exp(-e*10)),this.camera.lookAt(u)}let l=Lt(s.u,s.d,{});this.sun.position.set(l.x+this.sunDir.x*100,this.sunDir.y*100,l.z+this.sunDir.z*100),this.sun.target.position.set(l.x,0,l.z),this.sun.target.updateMatrixWorld(),this.camera.getWorldPosition(t),this.sky.position.copy(t)}}render(){this.renderer.render(this.scene,this.camera)}dispose(){window.removeEventListener("resize",this._onResize),this.scene.traverse(e=>{e.geometry&&e.geometry.dispose(),e.material&&(Array.isArray(e.material)?e.material:[e.material]).forEach(i=>{i.map&&i.map.dispose(),i.dispose()})}),this.renderer.dispose()}},Tv=new O(0,1,0);function Uh(n,e,t,i){let s=new O().subVectors(t,e),r=s.length();n.position.copy(e).addScaledVector(s,.5),n.quaternion.setFromUnitVectors(Tv,s.normalize()),n.scale.set(1,i?1:r,1)}var Mt=null,Zi=null,Fn=null,Hf=!0,wl=null;function El(n){Hf=n,Zi&&(Zi.gain.value=n?.8:0)}function Vf(){if(Mt){Mt.state==="suspended"&&Mt.resume();return}try{Mt=new(window.AudioContext||window.webkitAudioContext),Zi=Mt.createGain(),Zi.gain.value=Hf?.8:0,Zi.connect(Mt.destination),wl=Mt.createBuffer(1,Mt.sampleRate*2,Mt.sampleRate);let n=wl.getChannelData(0);for(let e=0;e<n.length;e++)n[e]=Math.random()*2-1}catch{Mt=null}}function ps(n,e,t,i,s="bandpass",r=0){if(!Mt)return;let a=Mt.currentTime+r,o=Mt.createBufferSource();o.buffer=wl;let l=Mt.createBiquadFilter();l.type=s,l.frequency.value=e,l.Q.value=t;let c=Mt.createGain();c.gain.setValueAtTime(i,a),c.gain.exponentialRampToValueAtTime(1e-4,a+n),o.connect(l),l.connect(c),c.connect(Zi),o.start(a,Math.random()*1.5),o.stop(a+n+.05)}function Wf(n=.5){ps(.09,180+Math.random()*60,1.2,n),ps(.05,900,2,n*.25)}function $f(){ps(.08,3200,.8,.9,"highpass"),ps(.12,1400,3,.4)}function Xf(){ps(.15,300,1,.5)}function qf(){ps(.35,600,.6,.8),ps(.25,2500,1,.5,"highpass",.02)}function Yf(){if(!Mt)return;[523,659,784,1046,784,1046].forEach((e,t)=>{let i=Mt.currentTime+t*.16,s=Mt.createOscillator();s.type="sawtooth",s.frequency.value=e;let r=Mt.createGain();r.gain.setValueAtTime(1e-4,i),r.gain.exponentialRampToValueAtTime(.18,i+.02),r.gain.exponentialRampToValueAtTime(1e-4,i+(t===5?.6:.15));let a=Mt.createBiquadFilter();a.type="lowpass",a.frequency.value=2500,s.connect(a),a.connect(r),r.connect(Zi),s.start(i),s.stop(i+.7)})}function Kf(){if(!Mt||Fn)return;let n=Mt.createBufferSource();n.buffer=wl,n.loop=!0;let e=Mt.createBiquadFilter();e.type="bandpass",e.frequency.value=700,e.Q.value=.5,Fn=Mt.createGain(),Fn.gain.value=.02,n.connect(e),e.connect(Fn),Fn.connect(Zi),n.start(),Fn._src=n}function Fh(n){Fn&&Fn.gain.setTargetAtTime(n,Mt.currentTime,.3)}function jf(){if(Fn){try{Fn._src.stop()}catch{}Fn.disconnect(),Fn=null}}var Jf=null,Oh=/fast/.test(location.hash)?5:1;function Tl(n){let e=document.getElementById("race-screen");e.innerHTML=`
    <canvas id="race-canvas"></canvas>
    <div class="hud-top">
      <div class="hud-race"><b>${n.race.g?`<span class="grade g-${n.race.g}">${n.race.g}</span>`:""}${n.race.name}</b><span>${n.race.place||""} ${n.race.surf}${n.race.dist}m</span></div>
      <div class="hud-stats"><div><small>\u9806\u4F4D</small><b id="h-rank">-</b></div><div><small>\u6B8B\u308A</small><b id="h-rem">-</b></div><div><small>\u30BF\u30A4\u30E0</small><b id="h-time">0:00.0</b></div></div>
    </div>
    <canvas id="minimap" width="220" height="130"></canvas>
    <button id="h-view" class="hud-small">\u8996\u70B9</button>
    <button id="h-quit" class="hud-small hud-quit">\u4E2D\u6B62</button>
    <div id="h-msg" class="hud-msg"></div><div id="side-l" class="side l"></div><div id="side-r" class="side r"></div>
    <div class="hud-bottom">
      <div class="gauge-wrap"><div class="gauge-label"><span>\u4F53\u529B</span><span id="h-speed">0 km/h</span></div><div class="gauge"><div id="h-gauge"></div></div></div>
      <div class="ctrl">
        <div class="steer"><button id="b-left" class="cbtn">\u25C0</button><button id="b-right" class="cbtn">\u25B6</button></div>
        <button id="b-whip" class="cbtn whip">\u30E0\u30C1</button>
      </div>
    </div>
    <div id="h-result" class="hud-result hidden"></div>`,e.classList.remove("hidden"),document.body.classList.add("in-race");let t={...n.player,isPlayer:!0,silk:dn[n.player.silk??0]},i=n.fieldSize||12,s=n.opponents?[...n.opponents]:[];s.length<i-1&&s.push(...ic(n.race,t,i-1-s.length));let r=sc({dist:n.race.dist,surf:n.race.surf,specs:[t,...s]}),a=/iPhone|iPad|Android/i.test(navigator.userAgent)&&(navigator.hardwareConcurrency||4)<=4,o=new bl(document.getElementById("race-canvas"),r,{view:Ce.settings.view||"fp",title:n.race.name,lowPower:a});Vf(),El(Ce.settings.sound),Kf(),Fh(.05);let l={steer:0,whip:!1,l:!1,r:!1},c=q=>document.getElementById(q),h=(q,B,W)=>{q.addEventListener("pointerdown",oe=>{oe.preventDefault();try{q.setPointerCapture(oe.pointerId)}catch{}q.classList.add("on"),B()});let X=oe=>{q.classList.remove("on"),W&&W()};q.addEventListener("pointerup",X),q.addEventListener("pointercancel",X),q.addEventListener("pointerleave",X)};h(c("b-left"),()=>{l.l=!0},()=>{l.l=!1}),h(c("b-right"),()=>{l.r=!0},()=>{l.r=!1}),h(c("b-whip"),()=>{l.whip=!0},null);let u=(q,B)=>{(q.key==="ArrowLeft"||q.key==="a")&&(l.l=B),(q.key==="ArrowRight"||q.key==="d")&&(l.r=B),(q.key===" "||q.key==="ArrowUp")&&B&&(l.whip=!0)},d=q=>u(q,!0),f=q=>u(q,!1);window.addEventListener("keydown",d),window.addEventListener("keyup",f);let g=["fp","back","tv"],v={fp:"\u9A0E\u624B\u8996\u70B9",back:"\u5F8C\u308D\u304B\u3089",tv:"\u4E2D\u7D99"};c("h-view").textContent=v[o.view]||"\u8996\u70B9",c("h-view").onclick=()=>{let q=g[(g.indexOf(o.view)+1)%g.length];o.setView(q),Ce.settings.view=q,At(),c("h-view").textContent=v[q]};let p=!1;c("h-quit").onclick=()=>{confirm("\u30EC\u30FC\u30B9\u3092\u4E2D\u6B62\u3057\u307E\u3059\u304B\uFF1F\uFF08\u51FA\u8D70\u3057\u306A\u304B\u3063\u305F\u3053\u3068\u306B\u306A\u308A\u307E\u3059\uFF09")&&(p=!0,H(null))};let m=c("h-msg"),M=0,R=(q,B=1.6,W="")=>{m.textContent=q,m.className="hud-msg show "+W,M=B},b=c("minimap").getContext("2d"),A=()=>{let q=b.canvas;b.clearRect(0,0,q.width,q.height);let B=(q.width-16)/(zt.Ls+2*zt.R+60),W=(q.height-16)/(2*zt.R+60),X=Math.min(B,W),oe=q.width/2,Ie=q.height/2;b.strokeStyle="rgba(255,255,255,0.75)",b.lineWidth=6,b.beginPath();for(let re=0;re<=zt.P;re+=20){let _e=Lt(re,10),Pe=oe+_e.x*X,ie=Ie-_e.z*X;re?b.lineTo(Pe,ie):b.moveTo(Pe,ie)}b.closePath(),b.stroke();let J=Lt(zt.finishU,10);b.fillStyle="#ff3b3b",b.fillRect(oe+J.x*X-1,Ie-J.z*X-6,3,12);for(let re of r.racers){let _e=Lt(re.u,re.d);b.fillStyle=re.isPlayer?"#ffe14d":"#"+(re.silk??16777215).toString(16).padStart(6,"0"),b.beginPath(),b.arc(oe+_e.x*X,Ie-_e.z*X,re.isPlayer?4.5:3,0,Math.PI*2),b.fill(),re.isPlayer&&(b.strokeStyle="#000",b.lineWidth=1,b.stroke())}},T=performance.now(),_=0,S=0,N=!1,C=0,D=0,F=0,V=3;R("3",1);let P=q=>{let B=Math.min(.1,(q-T)/1e3);T=q,_+=B*Oh;let W=0;for(l.steer=(l.r?1:0)-(l.l?1:0);_>=1/60&&W<6*Oh;)rc(r,1/60,l),l.whip=!1,_-=1/60,W++;for(let ie of r.events.splice(0))if(ie.type==="start")R("\u30B9\u30BF\u30FC\u30C8\uFF01",1.2,"big"),qf();else if(ie.type==="whip")o.onWhip(),$f();else if(ie.type==="bump")Xf();else if(ie.type==="mark"){let De={1e3:"\u6B8B\u308A1000m",600:"\u6B8B\u308A600m\u3000\u305D\u308D\u305D\u308D\u52DD\u8CA0\uFF01",400:"\u6B8B\u308A400m\uFF01 \u30E0\u30C1\u3067\u8FFD\u3048\uFF01",200:"\u6B8B\u308A200m\uFF01"}[ie.m];R(De,1.6),ie.m<=400&&Fh(ie.m===200?.5:.35)}else if(ie.type==="finish"&&ie.r.isPlayer){let De=ie.r.pos;R(De===1?"1\u7740\uFF01\uFF01 \u52DD\u3063\u305F\uFF01":`${De}\u7740\u3067\u30B4\u30FC\u30EB`,4,De===1?"big win":"big"),De===1&&Yf(),N=!0,C=0}if(r.countdown>0){let ie=Math.ceil(r.countdown);ie!==V&&ie>0&&(V=ie,R(String(ie),.9,"big"))}o.update(B),o.render();let X=r.player,oe=Math.max(0,r.dist-X.p);c("h-rank").textContent=`${X.rank||"-"}/${r.racers.length}`,c("h-rem").textContent=X.finished?"\u30B4\u30FC\u30EB":`${Math.ceil(oe)}m`,c("h-time").textContent=oi(X.finished?X.finishTime:r.t);let Ie=X.energy/X.cap,J=c("h-gauge");J.style.width=(Ie*100).toFixed(1)+"%",J.style.background=Ie>.5?"#3ddc84":Ie>.2?"#ffc93d":"#ff4d4d",c("h-speed").textContent=Math.round(X.v*3.6)+" km/h"+(X.whipT>0?" \u26A1":""),c("b-whip").classList.toggle("cool",X.whipCool>0),X.blocked&&!X.finished?(F+=B,F>.8&&M<=0&&R("\u524D\u304C\u8A70\u307E\u3063\u3066\u3044\u308B\uFF01 \u5DE6\u53F3\u306B\u52D5\u3051\uFF01",1.3,"warn")):F=0,Ie<=0&&!X.finished&&M<=0&&r.started&&R("\u30B9\u30BF\u30DF\u30CA\u5207\u308C\u2026\uFF01",1.2,"warn"),M-=B,M<=0&&m.classList.remove("show"),A();let re=0,_e=0;for(let ie of r.racers){if(ie===X)continue;let De=ie.p-X.p,dt=ie.d-X.d;if(Math.abs(De)<3.5&&Math.abs(dt)<3){let Ue=1-Math.abs(dt)/3;dt<0?re=Math.max(re,Ue):_e=Math.max(_e,Ue)}}c("side-l").style.opacity=re.toFixed(2),c("side-r").style.opacity=_e.toFixed(2);let Pe=Math.floor(X.stride/((4.2+X.v*.16)/3));Pe!==D&&X.v>3&&(D=Pe,Wf(.25+Math.min(.4,X.v/40))),N&&(C+=B*Oh,C>3.2&&!c("h-result").dataset.shown&&j()),S=requestAnimationFrame(P)};S=requestAnimationFrame(P);function K(){let q=r.racers.map(W=>({r:W,time:W.finished?W.finishTime:r.t+(r.dist-W.p)/Math.max(10,W.v)}));q.sort((W,X)=>W.time-X.time);let B=q[0];return q.map((W,X)=>({pos:X+1,name:W.r.name,jname:W.r.jname,num:W.r.num,time:W.time,isPlayer:!!W.r.isPlayer,margin:X===0?"":ac(W.time-q[X-1].time,16.5),silk:W.r.silk}))}function j(){let q=c("h-result");q.dataset.shown="1";let B=K(),W=B.find(oe=>oe.isPlayer),X=B.map(oe=>`<tr class="${oe.isPlayer?"me":""}"><td>${oe.pos}</td><td><span class="num" style="background:#${(oe.silk??16777215).toString(16).padStart(6,"0")}">${oe.num}</span></td><td>${oe.name}<small>${oe.jname||""}</small></td><td>${oi(oe.time)}</td><td>${oe.margin}</td></tr>`).join("");q.innerHTML=`<div class="res-card"><h2>${n.race.name} \u7D50\u679C</h2><div class="res-me ${W.pos===1?"win":""}">${W.pos}\u7740 <small>${oi(W.time)}</small></div>
      <div class="res-table"><table><tr><th>\u7740</th><th>\u756A</th><th>\u99AC\u540D / \u9A0E\u624B</th><th>\u30BF\u30A4\u30E0</th><th>\u7740\u5DEE</th></tr>${X}</table></div>
      <button id="res-next" class="btn primary">\u6B21\u3078</button></div>`,q.classList.remove("hidden"),c("res-next").onclick=()=>H({pos:W.pos,field:B.length,time:W.time,whips:r.player.whips,list:B})}function H(q){N!=="done"&&(N="done",cancelAnimationFrame(S),window.removeEventListener("keydown",d),window.removeEventListener("keyup",f),jf(),o.dispose(),e.classList.add("hidden"),e.innerHTML="",document.body.classList.remove("in-race"),Jf=null,n.onDone&&n.onDone(p?null:q))}Jf={race:r,view:o},window.__race=r}var Te=n=>String(n??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),Al=n=>"#"+(n??16777215).toString(16).padStart(6,"0"),Cl=n=>(n>0?"+":"")+n,On=Ni,Rl="horse",oa=()=>{},nr=n=>n==="horse"?"activeHorse":"activeJockey",Bh=(n=Rl)=>Ce[nr(n)];function zh(n,e){Rl=n,oa=e;let t=Bh();if(t&&!t.p&&(Ce[nr(n)]=null,t=null),!t){Gh(n);return}ir()}function Qf(n){return`<header class="top"><button class="back" data-act="home">\u2039</button><h1>${n}</h1><div class="carrot">\u{1F955} ${Ce.carrots}</div></header>`}function Rv(n){let e=Ct[n.kind];return`<div class="mbars">${e.keys.map(t=>{let i=n.st[t];return`<div class="mb"><span>${e.names[t]}</span><div class="bar"><i style="width:${Math.min(100,i)}%"></i></div><b>${Math.floor(i)}</b></div>`}).join("")}</div>`}function Ti(n,e="full"){let t=xn(n),i=e==="preview",s=fn(n),r=n.flags.potShown?`\u4F38\u3073\u3057\u308D ${n.flags.potEst}`:`\u30B9\u30AB\u30A6\u30C8\u8A55\u4FA1 ${n.flags.potEst}`,a=ga[n.kind][n.growth],o,l,c;if(n.kind==="horse")o=`${n.age}\u6B73\u30FB${$l[s]}`,l=[n.style,a.n,`\u829D${n.apt.turf}\u30FB\u30C0${n.apt.dirt}`].map(d=>`<span>${Te(d)}</span>`).join(""),c=`<div class="face" style="--c:${Al(un[n.coat].body)}">\u{1F434}</div>`;else{let d=wn(n);o=`${n.age}\u6B73\u30FB${n.stage==="school"?"\u7AF6\u99AC\u5B66\u6821":n.free?"\u30D5\u30EA\u30FC":d?d.n:"\u30D7\u30ED\u9A0E\u624B"}`,l=[`\u5F97\u610F\uFF1A${n.pref}`,a.n].map(f=>`<span>${Te(f)}</span>`).join(""),c=`<div class="face" style="--c:${Al(dn[n.silk])}">\u{1F3C7}</div>`}l+=`<span class="pot">${r}</span>`+n.skills.map(d=>`<span class="sk" title="${Te(Pi[d].d)}">${Te(Pi[d].n)}</span>`).join("");let h=Ct[n.kind],u=i?"":`<div class="meters"><div><span>\u4F53\u529B</span><b class="${n.sta<30?"bad":""}">${Math.round(n.sta)}</b></div><div><span>\u8ABF\u5B50</span><b>${Math.round(n.cond)}</b></div><div><span>${h.popName}</span><b>${Math.round(n.pop)}</b></div><div><span>\u8A55\u4FA1</span><b>${Math.round(n.eval)}</b></div></div>
    <div class="wallet"><span>${h.moneyName} <b class="${n.money<0?"bad":""}">${On(n.money)}</b></span>${n.inj>0?`<span class="bad">\u{1FA79} ${Te(n.injName||"\u30B1\u30AC")} \u6B8B\u308A${Math.ceil(n.inj)}\u9031</span>`:`<span>${n.kind==="horse"?`\u6226\u7E3E ${n.record.join("-")}`:n.stage==="pro"?`${n.rides}\u6226${n.wins}\u52DD`:`\u6A21\u64EC\u30EC\u30FC\u30B9${n.mockWins}\u52DD`}</span>`}</div>`;return`<section class="pcard ${t>=88||bn(n,"legend")?"legendary":""}">
    <div class="pc-top"><div class="pc-ovr"><span class="n">${t}</span><span class="tier">${vu(n,t)}</span></div>
    <div class="pc-id"><div class="name">${Te(n.name)}</div><div class="sub">${o}</div><div class="tags">${l}</div></div>${c}</div>
    ${e==="compact"?"":Rv(n)}${u}</section>`}function Cv(n){let e=Math.round(n*100),t=n>=1;return`<span class="ring ${t?"safe":""}"><svg viewBox="0 0 48 48"><circle cx="24" cy="24" r="20" class="bg"/><circle cx="24" cy="24" r="20" class="fg" stroke-dasharray="${(e/100*125.66).toFixed(1)} 125.66"/></svg><b>${t?"\u78BA\u5B9F":e}${t?"":"<small>%</small>"}</b></span>`}function Iv(n){return n.map(([e,t,i])=>{let s=i!==void 0,r=s?i:t;return`<span class="chip ${r>0?"up":r<0?"down":""}">${Te(e)} ${s?Te(t):Cl(t)}</span>`}).join("")}function Pv(n){let e=n.kind==="horse",t=e?0:16,i=e?7:45,s=Ct[n.kind].turns,r=(i-t+1)*s.length,a=(n.age-t)*s.length+Math.max(0,s.indexOf(n.month)),o=Math.min(100,Math.round(a/r*100)),l=e?4:30,c=e?n.age<2?`\u30C7\u30D3\u30E5\u30FC\u307E\u3067\u3042\u3068${2-n.age}\u5E74\uFF082\u6B736\u6708\u304B\u3089\uFF09`:n.age<l?`\u904B\u547D\u306E\u5206\u5C90\u70B9\u307E\u3067\u3042\u3068${l-n.age}\u5E74`:"\u5F15\u9000\u306F7\u6B73\u306E\u5E74\u672B":n.stage==="school"?"\u30C7\u30D3\u30E5\u30FC\u306F18\u6B73":n.age<l?`\u904B\u547D\u306E\u5206\u5C90\u70B9\u307E\u3067\u3042\u3068${l-n.age}\u5E74`:`${n.age>=33?"\u5F15\u9000\u3092\u9078\u3079\u308B":"33\u6B73\u304B\u3089\u5F15\u9000\u3092\u9078\u3079\u308B"}\u30FB45\u6B73\u3067\u5F15\u9000`;return`<div class="cbar"><div class="cbar-t"><span>${e?"\u7AF6\u8D70\u99AC\u751F":"\u9A0E\u624B\u4EBA\u751F"} ${o}%</span><span>${c}</span></div><div class="cbar-b"><i style="width:${o}%"></i><em style="left:${Math.round((l-t)*s.length/r*100)}%"></em></div></div>`}function ir(){let n=Bh(),e=document.getElementById("app");if(!n){Gh(Rl);return}n._kind=Rl;let t=n.p;n.screen==="retireNow"&&Vh(n);let i=t.kind==="horse"?"\u99AC\u306E\u80B2\u6210":"\u9A0E\u624B\u306E\u80B2\u6210",s=!["retired"].includes(n.screen),r=s?`<div class="seg c3 subnav">${[["play","\u30D7\u30EC\u30FC"],["life",t.kind==="horse"?"\u7267\u5834\u30FB\u53A9\u820E":"\u66AE\u3089\u3057"],["log","\u7D4C\u6B74"]].map(([o,l])=>`<button class="opt" aria-pressed="${n.tab===o}" data-act="tab" data-v="${o}">${l}</button>`).join("")}</div>`:"",a;n.tab==="life"&&s?a=Fv(n):n.tab==="log"&&s?a=Ov(n):a=(Sn[n.screen]||Sn.month)(n),e.innerHTML=`${Qf(i)}<div class="page career">${r}${a}</div>${s?Lv(n):""}`,kv(n),window.scrollTo(0,n._keepScroll?window.scrollY:0),n._keepScroll=!1,n.auto&&zv(n)}function Lv(n){return`<div class="autobar"><button class="ab-speed" data-act="speed">\xD7${n.speed||1}</button><button class="ab-auto ${n.auto?"on":""}" data-act="auto">${n.auto?"\u6B62\u3081\u308B":"\u30AA\u30FC\u30C8"}</button></div>`}function Gh(n){let e=n==="horse"?_a():xa();Ce._draft={kind:n,prev:e,custom:!1,n:Ce._draftN=(Ce._draftN||0)+1,parents:[]},aa()}function aa(){let n=Ce._draft,e=n.prev,t=n.kind==="horse",i=document.getElementById("app"),s=ga[n.kind],r=t?Ce.horses:Ce.jockeys,a=bn(e,"legend")?'<b class="gold">10\u4E07\u982D\u306B1\u982D\u306E\u4F1D\u8AAC\u304C\u73FE\u308C\u305F\u3002</b>\u9650\u754C\u304C\u3068\u3066\u3082\u9AD8\u3044\u3002':bn(e,"monster")?'<b class="gold">\u5929\u624D\u304C\u898B\u3064\u304B\u3063\u305F\u3002</b>\u4E26\u3088\u308A\u306F\u308B\u304B\u306B\u9650\u754C\u304C\u9AD8\u3044\u3002':n.custom?"\u6761\u4EF6\u3092\u5909\u3048\u308B\u305F\u3073\u306B\u3001\u80FD\u529B\u306F\u5F15\u304D\u76F4\u3055\u308C\u308B\u3002":t?"\u7267\u5834\u306B\u65B0\u3057\u3044\u547D\u304C\u751F\u307E\u308C\u305F\u3002\u3053\u306E\u99AC\u306E\u4E00\u751F\u3092\u898B\u5B88\u308B\u304B\u3001\u5225\u306E\u99AC\u3092\u63A2\u3059\u304B\u3002":"\u7AF6\u99AC\u5B66\u6821\u306E\u5165\u5B66\u8A66\u9A13\u306B\u3001\u65B0\u3057\u3044\u624D\u80FD\u304C\u73FE\u308C\u305F\u3002\u3053\u306E\u4EBA\u306E\u9A0E\u624B\u4EBA\u751F\u3092\u6B69\u3080\u304B\u3001\u5225\u306E\u4EBA\u3092\u63A2\u3059\u304B\u3002",o=n.custom?t?`
    <div class="card"><label>\u99AC\u306E\u540D\u524D\uFF089\u6587\u5B57\u307E\u3067\uFF09</label><input id="cname" maxlength="9" value="${Te(e.name)}">
    <label>\u6BDB\u8272</label><div class="chips">${un.map((d,f)=>`<button class="chip ${f===e.coat?"on":""}" data-act="dset" data-k="coat" data-v="${f}"><i style="background:${Al(d.body)}"></i>${d.name}</button>`).join("")}</div>
    <label>\u811A\u8CEA</label><div class="chips">${pa.map(d=>`<button class="chip ${d===e.style?"on":""}" data-act="dset" data-k="style" data-v="${d}">${d}</button>`).join("")}</div>
    <label>\u6210\u9577\u30BF\u30A4\u30D7</label><div class="chips">${Object.entries(s).map(([d,f])=>`<button class="chip ${d===e.growth?"on":""}" data-act="dset" data-k="growth" data-v="${d}">${f.n}</button>`).join("")}</div></div>`:`<div class="card"><label>\u9A0E\u624B\u306E\u540D\u524D</label><input id="cname" maxlength="10" value="${Te(e.name)}">
    <label>\u52DD\u8CA0\u670D\u306E\u8272</label><div class="chips">${dn.map((d,f)=>`<button class="chip sw ${f===e.silk?"on":""}" data-act="dset" data-k="silk" data-v="${f}"><i style="background:${Al(d)}"></i></button>`).join("")}</div>
    <label>\u5F97\u610F\u306A\u6226\u6CD5</label><div class="chips">${pa.map(d=>`<button class="chip ${d===e.pref?"on":""}" data-act="dset" data-k="pref" data-v="${d}">${d}</button>`).join("")}</div>
    <label>\u6210\u9577\u30BF\u30A4\u30D7</label><div class="chips">${Object.entries(s).map(([d,f])=>`<button class="chip ${d===e.growth?"on":""}" data-act="dset" data-k="growth" data-v="${d}">${f.n}</button>`).join("")}</div></div>`:"",l=`<div class="kick">${t?"\u8840\u7D71\uFF08\u80B2\u3066\u305F\u99AC\u304B\u3089\u53D7\u3051\u7D99\u3050\uFF09":"\u5E2B\u5320\uFF08\u80B2\u3066\u305F\u9A0E\u624B\u304B\u3089\u53D7\u3051\u7D99\u3050\uFF09"}<span class="r">${n.parents.length}/3</span></div>
    ${r.length?`<p class="note">${t?"\u5F15\u9000\u3057\u305F\u99AC\u30923\u982D\u307E\u3067\u9078\u3076\u3068\u30011\u982D\u306B\u3064\u304D1\u3064\u624D\u80FD\u3092\u53D7\u3051\u7D99\u3050\u30022\u982D\u4EE5\u4E0A\u3067\u300C\u8840\u7D71\u306E\u7D99\u627F\u8005\u300D\u3002":"\u5F15\u9000\u3057\u305F\u9A0E\u624B\u30923\u4EBA\u307E\u3067\u9078\u3076\u3068\u30011\u4EBA\u306B\u3064\u304D1\u3064\u6280\u3092\u53D7\u3051\u7D99\u3050\u3002"}</p><div class="plist">${r.slice(0,30).map((d,f)=>`<button class="pitem ${n.parents.includes(f)?"on":""}" data-act="dpar" data-v="${f}"><b>${Te(d.name)}</b><small>${d.rank||""}\u3000${d.g1Wins?`G1 ${d.g1Wins}\u52DD`:`${d.wins}\u52DD`}</small></button>`).join("")}</div>`:`<p class="note">${t?"\u99AC\u3092\u5F15\u9000\u307E\u3067\u80B2\u3066\u308B\u3068\u3001\u3053\u3053\u3067\u7236\u30FB\u6BCD\u3068\u3057\u3066\u9078\u3079\u308B\u3002":"\u9A0E\u624B\u3092\u5F15\u9000\u307E\u3067\u80B2\u3066\u308B\u3068\u3001\u3053\u3053\u3067\u5E2B\u5320\u3068\u3057\u3066\u9078\u3079\u308B\u3002"}</p>`}`,c=t?`<dl class="scout"><div><dt>\u7236</dt><dd>${Te(e.sire)}</dd></div><div><dt>\u6BCD</dt><dd>${Te(e.dam)}</dd></div><div><dt>\u811A\u8CEA</dt><dd>${e.style}</dd></div><div><dt>\u6210\u9577\u30BF\u30A4\u30D7</dt><dd>${s[e.growth].n}<small>${s[e.growth].d}</small></dd></div><div><dt>\u9069\u6027</dt><dd>\u829D${e.apt.turf}\u30FB\u30C0\u30FC\u30C8${e.apt.dirt}</dd></div><div><dt>\u30B9\u30AB\u30A6\u30C8\u8A55\u4FA1</dt><dd>${e.flags.potEst}<small>\u4F38\u3073\u3057\u308D\u306E\u898B\u7ACB\u3066\uFF08SS\u301CD\uFF09</small></dd></div></dl>`:`<dl class="scout"><div><dt>\u5F97\u610F\u306A\u6226\u6CD5</dt><dd>${e.pref}</dd></div><div><dt>\u6210\u9577\u30BF\u30A4\u30D7</dt><dd>${s[e.growth].n}<small>${s[e.growth].d}</small></dd></div><div><dt>\u30B9\u30AB\u30A6\u30C8\u8A55\u4FA1</dt><dd>${e.flags.potEst}<small>\u4F38\u3073\u3057\u308D\u306E\u898B\u7ACB\u3066\uFF08SS\u301CD\uFF09</small></dd></div></dl>`;i.innerHTML=`${Qf(t?"\u99AC\u306E\u80B2\u6210":"\u9A0E\u624B\u306E\u80B2\u6210")}<div class="page career">
    <div class="kick">${t?"\u7267\u5834\u30EC\u30DD\u30FC\u30C8":"\u30B9\u30AB\u30A6\u30C8\u30EC\u30DD\u30FC\u30C8"}<span class="r">No.${String(n.n).padStart(3,"0")}</span></div>
    <p class="note">${a}</p>${Ti(e,"preview")}${c}${l}
    <div class="stack"><button class="btn red" data-act="dstart">${t?"\u3053\u306E\u99AC\u3067\u59CB\u3081\u308B":"\u3053\u306E\u9A0E\u624B\u3067\u59CB\u3081\u308B"}</button><button class="btn ghost" data-act="dreroll">${n.custom?"\u80FD\u529B\u3092\u5F15\u304D\u76F4\u3059":t?"\u5225\u306E\u99AC\u3092\u63A2\u3059":"\u5225\u306E\u4EBA\u3092\u63A2\u3059"}</button></div>
    <button class="linkbtn" data-act="dcustom">${n.custom?"\u304A\u307E\u304B\u305B\u306B\u623B\u3059":t?"\u540D\u524D\u3084\u6BDB\u8272\u3092\u81EA\u5206\u3067\u6C7A\u3081\u308B":"\u540D\u524D\u3084\u52DD\u8CA0\u670D\u3092\u81EA\u5206\u3067\u6C7A\u3081\u308B"}</button>${o}</div>`;let h=()=>{let d=document.getElementById("cname");d&&(e.name=d.value.trim()||e.name)},u=d=>{h();let f={name:e.name,coat:e.coat,style:e.style,growth:e.growth,silk:e.silk,pref:e.pref,...d};n.prev=t?_a(f):xa(f),aa()};i.querySelectorAll("[data-act]").forEach(d=>d.onclick=()=>{let f=d.dataset.act,g=d.dataset.v;if(f==="home")return oa();if(f==="dreroll"&&(n.custom?u({}):(n.prev=t?_a():xa(),n.n++,aa())),f==="dcustom"&&(h(),n.custom=!n.custom,aa()),f==="dset"){let v=d.dataset.k;u({[v]:["coat","silk"].includes(v)?+g:g})}if(f==="dpar"){let v=+g,p=n.parents.indexOf(v);p>=0?n.parents.splice(p,1):n.parents.length<3&&n.parents.push(v),h(),aa()}if(f==="dstart"){h();let v=n.prev;v.id=Gl();let p=n.parents.map(M=>r[M]).filter(Boolean),m=Su(v,p);t&&p[0]&&(v.sire=p[0].name,p[1]&&(v.dam=p[1].name)),v.log.unshift(t?`${v.year}\u5E745\u6708 \u7236${v.sire}\u30FB\u6BCD${v.dam}\u306E\u9593\u306B\u3001${un[v.coat].name}\u306E\u4ED4\u99AC\u300C${v.name}\u300D\u304C\u751F\u307E\u308C\u305F`:`${v.year}\u5E744\u6708 ${v.name}\u3001\u7AF6\u99AC\u5B66\u6821\u306B\u5165\u5B66`),m.forEach(M=>v.log.unshift("\u53D7\u3051\u7D99\u3044\u3060\uFF1A"+M)),Ce[nr(n.kind)]=Tu(v),Ce._draft=null,At(),ir()}})}var Sn={};Sn.camp=n=>{let e=n.p,t=Ct[e.kind],i=[...t.keys.map(o=>[o,t.names[o],Math.round(e.st[o])]),["all","\u30D0\u30E9\u30F3\u30B9","\u5168\u4F53"]],s=e.kind==="horse",r=s?e.age===0?"\u751F\u307E\u308C\u305F\u3070\u304B\u308A\u306E\u4ED4\u99AC\u3002\u307E\u305A\u306F\u7267\u5834\u3067\u306E\u3073\u306E\u3073\u80B2\u3066\u3088\u3046\u3002":e.age===1?"\u80B2\u6210\u7267\u5834\u3067\u3001\u7AF6\u8D70\u99AC\u306B\u306A\u308B\u305F\u3081\u306E\u6E96\u5099\u3092\u3059\u308B\u4E00\u5E74\u3002":e.age===2?"\u3044\u3088\u3044\u3088\u30C8\u30EC\u30BB\u30F3\u3078\u30026\u6708\u304B\u3089\u30EC\u30FC\u30B9\u306B\u51FA\u3089\u308C\u308B\u3002":`${e.age}\u6B73\u306E\u30B7\u30FC\u30BA\u30F3\u3002${Ms[e.path||"middle"].n}\u3067\u6226\u3046\u3002`:e.stage==="school"?e.age===16?"\u7AF6\u99AC\u5B66\u6821\u306B\u5165\u5B66\u30022\u5E74\u9593\u3067\u9A0E\u624B\u306E\u57FA\u790E\u3092\u305F\u305F\u304D\u8FBC\u3080\u3002":"\u7AF6\u99AC\u5B66\u68212\u5E74\u76EE\u3002\u5352\u696D\u3059\u308C\u3070\u30C7\u30D3\u30E5\u30FC\u3060\u3002":`${e.age}\u6B73\u306E\u30B7\u30FC\u30BA\u30F3\u3002${e.free?"\u30D5\u30EA\u30FC":wn(e).n}\u3067\u9A0E\u4E57\u3059\u308B\u3002`,a=e.month;return`${Ti(e)}
  <div class="kick">${e.year}\u5E74 ${s?"\u8ABF\u6559\u306E\u65B9\u91DD":"\u7DF4\u7FD2\u306E\u65B9\u91DD"}</div><p class="note">${r}</p>
  <div class="label">\u4ECA\u5E74\u306E${s?"\u8ABF\u6559":"\u7DF4\u7FD2"}\u306E\u91CD\u70B9</div>
  <div class="seg c3">${i.map(([o,l,c])=>`<button class="opt" aria-pressed="${e.focus===o}" data-act="focus" data-v="${o}">${l}<span class="d">${c}</span></button>`).join("")}</div>
  <div class="label">\u5F37\u5EA6</div>
  <div class="seg c3">${Object.entries(ur).map(([o,l])=>`<button class="opt" aria-pressed="${e.int===o}" data-act="int" data-v="${o}">${l.n}<span class="d">\u5E74\u9593\u30B1\u30AC\u7387 ${Math.round(Eu(e,o)*100)}%</span></button>`).join("")}</div>
  <div class="stack"><button class="btn red" data-act="toMonth">${a}\u6708\u306B\u9032\u3080</button></div>`};function Nv(n){let e=[];if(n.kind==="horse"){let t=fn(n);t==="farm"?e.push("\u751F\u307E\u308C\u6545\u90F7\u306E\u7267\u5834\u3067\u904E\u3054\u3059"):t==="ikusei"?e.push("\u80B2\u6210\u7267\u5834\u3067\u7AF6\u8D70\u99AC\u306B\u306A\u308B\u6E96\u5099"):n.age===2&&n.month<5&&e.push("\u30C8\u30EC\u30BB\u30F3\u3067\u8ABF\u6559\u3002\u30EC\u30FC\u30B9\u306F6\u6708\u304B\u3089"),pr(n).filter(s=>s.g).forEach(s=>e.push(`<span class="mmk">${s.m}\u6708</span><span class="grade g-${s.g}">${s.g}</span><b>${Te(s.name)}</b> ${s.surf}${s.dist}m${s.locked?" \u{1F512}":""}`)),t==="tc"&&!(n.age===2&&n.month<5)&&e.push("\u6761\u4EF6\u6226\u306F\u6BCE\u67082\u30EC\u30FC\u30B9\u305A\u3064")}else n.stage==="school"?e.push("\u7AF6\u99AC\u5B66\u6821\u306E\u8A13\u7DF4\u3002\u6A21\u64EC\u30EC\u30FC\u30B9\u306B\u3082\u51FA\u3089\u308C\u308B"):(Ma(n).filter(i=>i.g==="G1").forEach(i=>e.push(`<span class="mmk">${i.m}\u6708</span><span class="grade g-G1">G1</span><b>${Te(i.name)}</b>${i.locked?" \u{1F512}\u8A55\u4FA1"+i.need:""}`)),e.push(`\u9A0E\u4E57\u4F9D\u983C\u306E\u898B\u8FBC\u307F\uFF1A\u6708${wa(n,(wn(n)||{rep:45}).rep,n.free)}\u978D\u524D\u5F8C`));return e}function Dv(n,e){let t=n.p,i=e.cost||0,s=i>0&&i>t.money||e.race&&!Hh(n).some(o=>!o.locked),r=n.act===e.id,a=[`\u6210\u9577\xD7${e.g}`];return e.sta&&a.push(`\u4F53\u529B${Cl(e.sta)}`),i&&a.push(`\u8CBB\u7528 ${On(i)}`),`<button class="act" aria-pressed="${r}" data-act="pickAct" data-v="${e.id}" ${s?"disabled":""}><b>${Te(Xl(e,t))}</b><span>${Te(e.d)}</span><em>${a.join("\u30FB")}${s?e.race?"\u30FB\u51FA\u3089\u308C\u308B\u30EC\u30FC\u30B9\u306A\u3057":"\u30FB\u304A\u91D1\u304C\u8DB3\u308A\u306A\u3044":""}</em></button>`}function Hh(n){let e=n.p;return e.kind==="horse"?e.inj>0?[]:pr(e):e.stage==="school"?[{m:e.month+1>12?e.month:e.month+1,name:"\u7AF6\u99AC\u5B66\u6821 \u6A21\u64EC\u30EC\u30FC\u30B9",mock:1,surf:"\u829D",dist:[1200,1400,1600][e.month%3],place:"\u5B66\u6821",prize:0,lv:34}]:e.inj>0?[]:Ma(e)}function Uv(n){let e=n.p;return`<div class="label">\u51FA\u308B\u30EC\u30FC\u30B9</div><div class="rlist">${Hh(n).map((i,s)=>{let[r,a,o]=i.mock?["","",""]:Lu(e,i),l=n.raceSel&&n.raceSel.name===i.name&&n.raceSel.m===i.m&&n.raceSel.dist===i.dist&&n.raceSel.surf===i.surf;return`<button class="ritem ${i.locked?"locked":""} ${l?"on":""}" data-act="pickRace" data-v="${s}">
      <div><span class="mmk">${i.m}\u6708</span>${i.g?`<span class="grade g-${i.g}">${i.g}</span>`:i.mock?"":'<span class="grade gc">\u6761\u4EF6</span>'}<b>${Te(i.name)}</b>${r?`<span class="odds ${o}">${r} ${a}</span>`:""}</div>
      <small>${i.place||""} ${i.surf==="\u30C0"?"\u30C0\u30FC\u30C8":"\u829D"}${i.dist}m${i.prize?`\u30001\u7740 ${On(i.prize)}`:""}${e.kind==="horse"?`\u3000\u9069\u6027${i.surf==="\u829D"?e.apt.turf:e.apt.dirt}`:""}${i.path?"\u3000\u2605\u8DEF\u7DDA":""}</small>
      ${i.locked?`<small class="lock">\u{1F512} ${e.kind==="horse"?"\u52DD\u3061\u661F\u304C\u8DB3\u308A\u306A\u3044":`\u8A55\u4FA1${i.need}\u4EE5\u4E0A\u3067\u9A0E\u4E57\u4F9D\u983C`}</small>`:""}</button>`}).join("")||'<p class="note">\u3053\u306E\u30BF\u30FC\u30F3\u306B\u51FA\u3089\u308C\u308B\u30EC\u30FC\u30B9\u306F\u306A\u3044\u3002</p>'}</div>`}Sn.month=n=>{let e=n.p,t=Ct[e.kind].turns,i=ci(e),s=t.map(o=>`<i class="${o<e.month?"done":o===e.month?"now":""}"></i>`).join(""),r=n.act&&hr[e.kind].find(o=>o.id===n.act),a=r&&(!r.race||n.raceSel&&!n.raceSel.locked);return`${Ti(e,"compact")}
  <section class="cal"><div class="cal-m"><span class="cnum">${e.month}</span><span class="u">\u2013${i}\u6708</span></div><div class="cal-i"><b>${e.year}\u5E74</b><span class="sub">${e.age}\u6B73\u30FB${$l[fn(e)]}</span><div class="dots" style="grid-template-columns:repeat(${t.length},1fr)">${s}</div></div></section>
  ${Pv(e)}
  <div class="kick">\u3053\u306E${Ct[e.kind].len}\u304B\u6708\u306E\u4E88\u5B9A</div><ul class="plan">${Nv(e).map(o=>`<li>${o}</li>`).join("")}</ul>
  <div class="kick">\u3053\u306E${Ct[e.kind].len}\u304B\u6708\u306E\u884C\u52D5<span class="r">\u3072\u3068\u3064\u9078\u3076</span></div>
  <div class="acts">${dr(e).map(o=>Dv(n,o)).join("")}</div>
  ${r&&r.race?Uv(n):""}
  <div class="stack"><button class="btn red" data-act="confirm" ${a?"":"disabled"}>${a?`\u3053\u306E\u884C\u52D5\u3067${Ct[e.kind].len}\u304B\u6708\u3092\u904E\u3054\u3059`:r&&r.race?"\u30EC\u30FC\u30B9\u3092\u9078\u3093\u3067\u304F\u3060\u3055\u3044":"\u884C\u52D5\u3092\u9078\u3093\u3067\u304F\u3060\u3055\u3044"}</button></div>`};Sn.event=n=>{let e=n.p,t=va(n.evq[n.evi]),i=fr(e),s=n.evr,r=typeof t.t=="function"?t.t(i):t.t,a=typeof t.x=="function"?t.x(i):t.x,o;if(!s)o=`<div class="stack">${t.ch.map((c,h)=>`<button class="choice" data-act="choose" data-v="${h}"><span><b>${Te(c.l)}</b>${c.d?`<small>${Te(c.d)}</small>`:""}</span>${Cv(ya(c,i))}</button>`).join("")}</div>`;else{let c=t.ch[s.ci];o=`<div class="evcard"><div class="verdict ${s.safe?"safe":s.win?"ok":"ng"}"><span class="vbig">${s.safe?"\u6C7A\u5B9A":s.win?"\u6210\u529F":"\u5931\u6557"}</span><span class="sub">\u300C${Te(c.l)}\u300D<br>\u6210\u529F\u7387 ${Math.round(s.pr*100)}%</span></div><p>${Te(s.m)}</p>${s.fx.length?`<div class="chips">${Iv(s.fx)}</div>`:""}</div>
    <div class="stack"><button class="btn red" data-act="nextEv">${n.evi+1<n.evq.length?"\u6B21\u306E\u51FA\u6765\u4E8B\u3078":"\u3053\u306E\u30BF\u30FC\u30F3\u306E\u7D50\u679C\u3078"}</button></div>`}let l=t.sp?'<div class="lgband"><span>SPECIAL</span><span>\u7279\u5225\u306A\u51FA\u6765\u4E8B</span></div>':"";return`${Ti(e,"compact")}<div class="kick">${e.year}\u5E74${e.month}\u2013${ci(e)}\u6708\u306E\u51FA\u6765\u4E8B<span class="r">${n.evi+1}/${n.evq.length}</span></div>
  <div class="evcard ${t.sp?"legend":""}">${l}<h2>${Te(r)}</h2><p>${Te(a)}</p></div>${o}`};Sn.afterEvents=n=>{let e=n.p,t=n.raceSel;if(!t)return mr(n),At(),Sn.mres(n);let i=e.kind==="horse",s=[Jn,...Ce.jockeys],r=i?Ce.jockeys.find(a=>a.id===e.jockeyId)||Jn:null;return n.style||(n.style=i?e.style:e.pref),`${Ti(e,"compact")}<div class="kick">${t.m}\u6708\u3000\u51FA\u8D70</div>
  <div class="evcard legend"><h2>${t.g?`<span class="grade g-${t.g}">${t.g}</span>`:""}${Te(t.name)}</h2><p>${t.place||""} ${t.surf==="\u30C0"?"\u30C0\u30FC\u30C8":"\u829D"}${t.dist}m${t.prize?`\u30001\u7740\u8CDE\u91D1 ${On(t.prize)}`:""}</p>
  ${i?`<p class="sub">\u4F53\u529B ${Math.round(e.sta)}\u30FB\u8ABF\u5B50 ${ru[Sa(e)]}${e.sta<30?"\uFF08\u75B2\u308C\u304C\u6B8B\u3063\u3066\u3044\u308B\u2026\uFF09":""}</p>`:`<p class="sub">${t.mock?"\u5B66\u6821\u306E\u99AC\u306B\u4E57\u308B":"\u4F9D\u983C\u3055\u308C\u305F\u99AC\u306B\u4E57\u308B"}</p>`}</div>
  ${i?`<div class="label">\u9A0E\u624B</div><div class="chips">${s.map((a,o)=>`<button class="chip ${(e.jockeyId??null)===(a.id??null)?"on":""}" data-act="jk" data-v="${o}">${Te(a.name)}${a.rank?`<small>${a.rank}</small>`:""}</button>`).join("")}</div>`:""}
  <div class="label">\u4F5C\u6226</div><div class="chips">${pa.map(a=>`<button class="chip ${a===n.style?"on":""}" data-act="style" data-v="${a}">${a}</button>`).join("")}</div>
  <div class="howto"><b>\u64CD\u4F5C</b>\u3000\u25C0\u25B6\u3067\u9032\u8DEF\u3001\u30E0\u30C1\u3067\u52A0\u901F\uFF08\u4F53\u529B\u304C\u6E1B\u308A\u3084\u3059\u3044\uFF09\u3002\u4F53\u529B\u30B2\u30FC\u30B8\u304C0\u306B\u306A\u308B\u3068\u5931\u901F\u3002\u30B9\u30DE\u30DB\u306F\u6A2A\u5411\u304D\u304C\u304A\u3059\u3059\u3081\u3002</div>
  <div class="stack"><button class="btn race" data-act="ride3d">\u{1F3C7} \u81EA\u5206\u3067\u4E57\u308B\uFF083D\u30EC\u30FC\u30B9\uFF09</button><button class="btn ghost" data-act="rideAuto">\u7D50\u679C\u3060\u3051\u898B\u308B</button></div>`};Sn.mres=n=>{let e=n.p,t=n.mres,i=Ct[e.kind];if(!t)return Sn.month(n);let s=t.d.filter(([,h])=>Math.abs(h)>=.5).map(([h,u],d)=>`<span class="chip pop ${u>0?"up":"down"}" style="animation-delay:${200+d*80}ms">${i.names[h]} ${u>0?"+":""}${u.toFixed(1)}</span>`).join(""),r=[["\u4F53\u529B",t.dsta],["\u8ABF\u5B50",t.dcond],[i.popName,t.dpop],["\u8A55\u4FA1",t.deval]];t.dfam!==null&&r.push([e.fam.partner&&e.fam.partner.married?"\u5BB6\u65CF":"\u611B\u60C5",t.dfam]);let a=t.fate,o=a?`<div class="fate ${a.ty}"><b>${Te(a.head)}</b><p>${Te(a.why)}${a.ty==="retire"?"\u3002\u3053\u3053\u3067\u73FE\u5F79\u751F\u6D3B\u304C\u7D42\u308F\u308B\u3002":"\u3002"}</p></div>`:"",l=a?a.ty==="death"?"\u304A\u5225\u308C\u3078":"\u5F15\u9000\u3078":Vl(e)?"\u5E74\u9593\u7DCF\u62EC\u3078":`${Ct[e.kind].turns.find(h=>h>e.month)||1}\u6708\u3078`,c=t.races.map(h=>`<li class="mt"><span class="md">${h.m}\u6708</span><span class="mo"><small>${h.g?h.g+"\u30FB":""}${h.surf}${h.dist}m${h.horse?"\u30FB"+Te(h.horse):""}</small>${Te(h.name)}<small>${oi(h.time)}${h.prize?"\u30FB\u8CDE\u91D1 "+On(h.prize):""}</small></span><span class="ms ${h.pos===1?"w":h.pos<=3?"d":"l"}"><i>${h.pos}\u7740</i>/${h.field}</span></li>`).join("");return`${o}${Ti(e,"compact")}
  <div class="kick">${t.y}\u5E74${t.m}\u2013${t.m1}\u6708\u306E\u7D50\u679C<span class="r">${Te(t.act)}</span></div>
  ${t.ev?`<p class="note">\u3053\u306E\u30BF\u30FC\u30F3\u306E\u51FA\u6765\u4E8B\uFF1A${Te(t.ev.t)}\uFF08${Te(t.ev.l)}\uFF09</p>`:""}
  ${c?`<ul class="mlist">${c}</ul>`:""}
  ${t.rides?`<p class="note">\u9A0E\u4E57 ${t.rides}\u978D\u30FB<b class="gold">${t.w}\u52DD</b></p>`:""}
  ${t.notes.length?`<ul class="plan">${t.notes.map(h=>`<li>${Te(h)}</li>`).join("")}</ul>`:""}
  ${t.skills.length?`<div class="chips">${t.skills.map(h=>`<span class="chip gold shine">\u7279\u6B8A\u80FD\u529B\u300C${Te(Pi[h].n)}\u300D\u3092\u7FD2\u5F97</span>`).join("")}</div>`:""}
  ${t.carrots?`<p class="note">\u{1F955} \u91D1\u306E\u306B\u3093\u3058\u3093 +${t.carrots}</p>`:""}
  <div class="kick">\u3053\u306E\u30BF\u30FC\u30F3\u306E\u5909\u5316<span class="r">\u7DCF\u5408 ${t.o0} \u2192 <b class="${t.o1>t.o0?"upv":""}">${t.o1}</b></span></div>
  ${s?`<div class="chips">${s}</div>`:""}
  <div class="chips">${r.map(([h,u])=>`<span class="chip ${u>0?"up":u<0?"down":""}">${h} ${Cl(u)}</span>`).join("")}<span class="chip ${t.dm>=0?"up":"down"}">${i.moneyName} ${t.dm>=0?"+":""}${On(t.dm)}</span></div>
  <p class="note">\u53CE\u5165 ${On(t.inc)}\u30FB\u56FA\u5B9A\u8CBB ${On(t.cost)}</p>
  <div class="stack"><button class="btn red" data-act="afterTurn">${l}</button></div>`};Sn.report=n=>{let e=n.p,t=n.report,i=Ct[e.kind],s=t.awards.length||t.titles.length,r=t.d.filter(([,a])=>a).map(([a,o])=>`<span class="chip ${o>0?"up":"down"}">${i.names[a]} ${Cl(o)}</span>`).join("");return`<article class="front ${s?"gold":""}">${s?'<span class="gogai">\u53F7\u5916</span>':""}
    <div class="dateline"><span>${t.year}\u5E74 \u7DCF\u62EC</span><span>${t.age}\u6B73</span></div>
    <div class="vhead"><span class="l1">${Te(t.headA)}</span><span class="l2">${Te(t.headB)}</span></div>
    <p class="deck">${Te(t.deck)}</p>
    ${t.awards.length?`<div class="chips">${t.awards.map(a=>`<span class="chip gold">${Te(a)}</span>`).join("")}</div>`:""}</article>
  ${t.rows.length?`<div class="kick">\u4ECA\u5E74\u306E\u6210\u7E3E</div><table class="st"><tbody>${t.rows.map(([a,o])=>`<tr><th>${Te(a)}</th><td>${Te(o)}</td></tr>`).join("")}</tbody></table>`:""}
  <div class="kick">\u80FD\u529B\u306E\u5909\u5316<span class="r">\u7DCF\u5408 ${t.o0} \u2192 <b>${t.o1}</b></span></div>
  ${r?`<div class="chips">${r}</div>`:'<p class="note">\u5909\u5316\u306A\u3057</p>'}
  ${t.potNote?`<p class="note">${e.kind==="horse"?"\u8ABF\u6559\u5E2B":"\u6559\u5B98"}\u306E\u898B\u7ACB\u3066\uFF1A\u4F38\u3073\u3057\u308D\u306F <b class="gold big">${t.potNote}</b>\uFF08SS\u301CD\uFF09</p>`:""}
  <div class="stack"><button class="btn red" data-act="toOffers">${e.kind==="horse"?e.age<2?"\u6B21\u306E\u5E74\u3078":"\u6765\u5E74\u306E\u8DEF\u7DDA\u3092\u6C7A\u3081\u308B":e.stage==="school"&&e.age>=17?"\u30C7\u30D3\u30E5\u30FC\u3059\u308B\u53A9\u820E\u3092\u6C7A\u3081\u308B":e.stage==="school"?"\u6B21\u306E\u5E74\u3078":"\u6765\u5E74\u306E\u6240\u5C5E\u3092\u6C7A\u3081\u308B"}</button></div>`};Sn.offers=n=>{let e=n.p,t=n.offers;if(!t)return"";let i=`${Ti(e,"compact")}<div class="kick">${e.year+1}\u5E74\u306B\u5411\u3051\u3066</div><p class="note">${Te(t.note||"")}</p><div class="stack">`;return e.kind==="horse"?e.age<2?i+=`<button class="btn red" data-act="offer" data-k="none">${e.year+1}\u5E74\u3078</button>`:(t.forced||(i+=t.paths.map(s=>`<div class="offer ${e.path===s.k?"renew":""}"><div class="top"><div><div class="club">${s.n}${e.path===s.k?'<span class="tag">\u4ECA\u5E74\u3068\u540C\u3058</span>':""}</div><div class="lg">${s.d}</div></div></div><button class="btn" data-act="offer" data-k="path" data-v="${s.k}">\u3053\u306E\u8DEF\u7DDA\u3067\u73FE\u5F79\u3092\u7D9A\u3051\u308B</button></div>`).join("")),i+=t.retireOpts.map(s=>`<div class="offer"><div class="top"><div><div class="club">${s.n}</div><div class="lg">${Te(s.d)}</div></div></div><button class="btn ghost" data-act="offer" data-k="retire" data-v="${Te(s.n.replace("\u5F15\u9000\u3057\u3066","")+"\u3002"+s.d)}">${s.n}</button></div>`).join("")):(i+=t.list.map(s=>{let r=Di[s.stable];return`<div class="offer ${s.renew?"renew":""}"><div class="top"><div><div class="club">${Te(r.n)}${s.renew?'<span class="tag">\u6B8B\u7559</span>':""}</div><div class="lg">\u53A9\u820E\u306E\u529B ${r.rep}</div></div><div class="stars">${Mu(r.rep)}</div></div>
      <div class="kv"><div>\u9A0E\u4E57\u4F9D\u983C\u306E\u898B\u8FBC\u307F<b>\u6708${wa(e,r.rep,!1)}\u978D</b></div></div>
      <button class="btn" data-act="offer" data-k="stable" data-v="${r.id}">${s.renew?"\u6B8B\u308B":e.stage==="school"?"\u3053\u306E\u53A9\u820E\u3067\u30C7\u30D3\u30E5\u30FC":"\u79FB\u7C4D\u3059\u308B"}</button></div>`}).join(""),(t.free||t.stayFree)&&(i+=`<div class="offer"><div class="top"><div><div class="club">\u30D5\u30EA\u30FC${t.stayFree?'<span class="tag">\u7D99\u7D9A</span>':""}</div><div class="lg">\u6240\u5C5E\u306A\u3057\u3002\u4EBA\u6C17\u3068\u8A55\u4FA1\u3067\u4F9D\u983C\u304C\u6C7A\u307E\u308B</div></div></div><div class="kv"><div>\u9A0E\u4E57\u4F9D\u983C\u306E\u898B\u8FBC\u307F<b>\u6708${wa(e,0,!0)}\u978D</b></div></div><button class="btn" data-act="offer" data-k="free">${t.stayFree?"\u30D5\u30EA\u30FC\u3092\u7D9A\u3051\u308B":"\u30D5\u30EA\u30FC\u306B\u306A\u308B"}</button></div>`),(t.canRetire||t.forced)&&(i+=`<button class="btn ghost" data-act="offer" data-k="retire" data-v="${e.age}\u6B73\u3067\u30E0\u30C1\u3092\u7F6E\u3044\u305F">${t.forced?"\u5F15\u9000\u3059\u308B":"\u73FE\u5F79\u3092\u5F15\u9000\u3059\u308B"}</button>`)),i+"</div>"};function Vh(n){let e=n.p,t=Ru(e);t.id=Gl(),e.kind==="horse"?Ce.horses.unshift(t):Ce.jockeys.unshift(t);let i=20+Math.round((e.g1Wins||0)*20+(e.gradedWins||0)*5);Ce.carrots+=i,n.summary={card:t,bonus:i},n.screen="retired",n.auto=!1,n.tab="play",At()}Sn.retireNow=n=>(Vh(n),Sn.retired(n));Sn.retired=n=>{let e=n.p,t=n.summary,i=t.card,s=i.died,r=e.kind==="horse"?[["\u901A\u7B97\u6210\u7E3E",`${e.record.join("-")}`],["\u7372\u5F97\u8CDE\u91D1",On(e.earnings)],["\u91CD\u8CDE",`${e.gradedWins}\u52DD\uFF08G1 ${e.g1Wins}\u52DD\uFF09`]]:[["\u901A\u7B97",`${e.rides}\u6226${e.wins}\u52DD`],["\u91CD\u8CDE",`${e.gradedWins}\u52DD\uFF08G1 ${e.g1Wins}\u52DD\uFF09`],["\u751F\u6DAF\u7372\u5F97",On(e.earnings)]];return`<article class="front ${s?"mourn":"gold"}"><div class="dateline"><span>${e.year}\u5E74</span><span>${e.age}\u6B73</span></div>
    <div class="vhead"><span class="l1">${Te(e.name)}</span><span class="l2">${s?"\u5929\u56FD\u3078":"\u5F15\u9000"}</span></div>
    <p class="deck">${Te(i.retireReason)}</p></article>
  <div class="rank-big" style="color:${xs(i.rank)}">${i.rank}</div><p class="note center">\u8A55\u4FA1\u70B9 ${i.score}</p>
  <table class="st"><tbody>${r.map(([a,o])=>`<tr><th>${a}</th><td>${o}</td></tr>`).join("")}</tbody></table>
  ${e.titles.length?`<div class="kick">\u52DD\u3063\u305F\u91CD\u8CDE</div><div class="chips">${e.titles.slice(-20).map(a=>`<span class="chip gold">${Te(a)}</span>`).join("")}</div>`:""}
  ${e.awards.length?`<div class="kick">\u53D7\u8CDE</div><div class="chips">${e.awards.map(a=>`<span class="chip gold">${Te(a)}</span>`).join("")}</div>`:""}
  <p class="note">${e.kind==="horse"?"\u4E00\u89A7\u306B\u767B\u9332\u3057\u305F\u3002\u6B21\u306B\u751F\u307E\u308C\u308B\u99AC\u306E\u7236\u30FB\u6BCD\u306B\u9078\u3079\u308B\u3002\u5BFE\u6226\u306B\u3082\u51FA\u305B\u308B\u3002":"\u4E00\u89A7\u306B\u767B\u9332\u3057\u305F\u3002\u99AC\u306E\u80B2\u6210\u3067\u9A0E\u624B\u306B\u9078\u3079\u308B\u3002\u6B21\u306E\u9A0E\u624B\u306E\u5E2B\u5320\u306B\u3082\u306A\u308C\u308B\u3002"}\u3000\u{1F955} +${t.bonus}</p>
  <div class="stack"><button class="btn red" data-act="finish">\u30DB\u30FC\u30E0\u3078</button><button class="btn ghost" data-act="again">${e.kind==="horse"?"\u6B21\u306E\u99AC\u3092\u80B2\u3066\u308B":"\u6B21\u306E\u9A0E\u624B\u3092\u80B2\u3066\u308B"}</button></div>`};function Fv(n){let e=n.p,t=e.kind==="horse",i=Ct[e.kind],s=Jl(e),a=ql[e.kind].map(l=>{let[c,h]=Yl(e,l),u=l.type==="sub"?`\u6708${l.price}\u4E07\u5186`:l.type==="home"?`\u5BB6\u8CC3 \u6708${l.price}\u4E07\u5186`:On(l.price),d=l.type==="once"&&e.items[l.id]||l.type==="sub"&&e.subs[l.id]||l.type==="home"&&e.home===l.id||l.type==="car"&&e.car===l.id;return`<div class="shopi ${d?"own":""}"><div><b>${Te(l.n)}</b><small>${Te(l.d)}</small><em>${Te(l.eff)}</em></div><button class="btn sm ${c?"":"off"}" data-act="buy" data-v="${l.id}" ${c?"":"disabled"}>${d&&l.type==="sub"?"\u89E3\u7D04":d?"\u6E08\u307F":"\u8CB7\u3046"}<small>${h||u}</small></button></div>`}).join(""),o="";if(!t){let l=e.fam.partner;o=`<div class="kick">\u5BB6\u65CF</div><p class="note">${l?l.married?`${Te(l.n)}\u3068\u7D50\u5A5A\u3057\u3066\u3044\u308B\u3002\u5BB6\u65CF\u306E\u6E80\u8DB3\u5EA6 ${Math.round(e.fam.happy)}`:`\u604B\u4EBA\uFF1A${Te(l.n)}\uFF08\u611B\u60C5 ${Math.round(l.love)}\uFF09`:"\u3044\u307E\u306F\u4E00\u4EBA\u3002\u51FA\u4F1A\u3044\u306F\u51FA\u6765\u4E8B\u3067\u8D77\u304D\u308B\u3002"}${e.fam.kids.length?`<br>\u5B50\u3069\u3082\uFF1A${e.fam.kids.map(c=>Te(c.n)).join("\u3001")}`:""}</p>
      <p class="note">\u4F4F\u307E\u3044\uFF1A${e.home==="dorm"?"\u5BEE":Te((li("jockey",e.home)||{}).n||"")}\u3000\u8ECA\uFF1A${e.car?Te(li("jockey",e.car).n):"\u306A\u3057"}</p>`}return`${Ti(e,"compact")}${o}
  <div class="kick">${i.moneyName}<span class="r">${On(e.money)}</span></div>
  <table class="st"><tbody>${s.map(([l,c])=>`<tr><th>${Te(l)}</th><td>\u6708${c}\u4E07\u5186</td></tr>`).join("")||"<tr><th>\u56FA\u5B9A\u8CBB</th><td>\u306A\u3057</td></tr>"}</tbody></table>
  <div class="kick">${t?"\u7267\u5834\u30FB\u53A9\u820E\u306E\u8CB7\u3044\u7269":"\u8CB7\u3044\u7269"}</div><div class="shop">${a}</div>`}function Ov(n){let e=n.p,t=e.kind==="horse"?e.races.slice().reverse().slice(0,40).map(i=>`<div><span class="${i.pos===1?"win":""}">${i.pos}\u7740</span>${i.g?`<span class="grade g-${i.g}">${i.g}</span>`:""}${Te(i.name)}<small>${i.y}\u5E74${i.m}\u6708 ${i.surf}${i.dist}m ${oi(i.time)}</small></div>`).join(""):"";return`${Ti(e)}
  ${e.titles.length?`<div class="kick">\u52DD\u3063\u305F\u91CD\u8CDE</div><div class="chips">${e.titles.slice(-30).map(i=>`<span class="chip gold">${Te(i)}</span>`).join("")}</div>`:""}
  ${e.awards.length?`<div class="kick">\u53D7\u8CDE</div><div class="chips">${e.awards.map(i=>`<span class="chip gold">${Te(i)}</span>`).join("")}</div>`:""}
  ${t?`<div class="kick">\u30EC\u30FC\u30B9\u6210\u7E3E</div><div class="rhist">${t}</div>`:""}
  <div class="kick">\u6B69\u307F</div><div class="log">${e.log.slice(0,60).map(i=>`<div>${Te(i)}</div>`).join("")||"<div>\u307E\u3060\u8A18\u9332\u306F\u306A\u3044</div>"}</div>
  <div class="kick">\u4ECA\u5E74\u306E\u884C\u52D5</div><div class="log">${e.yearLog.slice().reverse().map(i=>`<div>${i.m}\u6708\uFF1A${Te(i.act)}${i.races.length?"\u30FB"+Te(i.races.join(" ")):""}</div>`).join("")||"<div>\u2014</div>"}</div>
  <button class="btn ghost" data-act="quit">\u3053\u306E\u80B2\u6210\u3092\u3084\u3081\u308B</button>`}function kv(n){document.getElementById("app").querySelectorAll("[data-act]").forEach(t=>t.onclick=()=>{t.disabled||Bv(n,t.dataset.act,t.dataset.v,t)})}function Bv(n,e,t,i){let s=n.p;switch(e){case"home":return kh(n),At(),oa();case"tab":n.tab=t;break;case"focus":s.focus=t,n._keepScroll=!0;break;case"int":s.int=t,n._keepScroll=!0;break;case"toMonth":ba(n);break;case"pickAct":n.act=t,n.raceSel=null,n._keepScroll=!0;break;case"pickRace":{let r=Hh(n)[+t];r&&!r.locked&&(n.raceSel={...r}),n._keepScroll=!0;break}case"confirm":Zl(n);break;case"choose":Ql(n,+t);break;case"nextEv":ec(n);break;case"jk":{let r=[Jn,...Ce.jockeys][+t];s.jockeyId=r.id??null,n._keepScroll=!0;break}case"style":n.style=t,n._keepScroll=!0;break;case"ride3d":return Zf(n,!0);case"rideAuto":return Zf(n,!1);case"afterTurn":n.style=null,tc(n);break;case"toOffers":nc(n);break;case"offer":{let r=i.dataset.k;if(r==="retire"&&!n.auto&&!confirm("\u672C\u5F53\u306B\u5F15\u9000\u3057\u307E\u3059\u304B\uFF1F"))return;Ui(n,r,r==="stable"?+t:t),n.screen==="camp"&&s.log.unshift(`${s.year}\u5E74 ${s.kind==="horse"?s.age>=2?Ms[s.path].n+"\u3078":`${s.age}\u6B73\u306B`:s.free?"\u30D5\u30EA\u30FC\u3067\u9A0E\u4E57":wn(s)?wn(s).n+"\u6240\u5C5E":""}`);break}case"buy":{yu(s,t).forEach(a=>s.log.unshift(`${s.year}\u5E74${s.month}\u6708 ${a}`)),n._keepScroll=!0;break}case"finish":return Ce[nr(s.kind)]=null,At(),oa();case"again":return Ce[nr(s.kind)]=null,At(),Gh(s.kind);case"quit":return confirm("\u3053\u306E\u80B2\u6210\u3092\u3084\u3081\u307E\u3059\u304B\uFF1F\uFF08\u4E00\u89A7\u306B\u306F\u6B8B\u308A\u307E\u305B\u3093\uFF09")?(Ce[nr(s.kind)]=null,At(),oa()):void 0;case"auto":n.auto=!n.auto,n.auto||kh(n);break;case"speed":n.speed={1:2,2:4,4:8,8:1}[n.speed||1],n._keepScroll=!0;break}At(),ir()}function ep(n){let e=n.p,t=n.raceSel;if(e.kind==="horse"){let s=Ce.jockeys.find(a=>a.id===e.jockeyId)||Jn,r=Nu(e,t,s);return r.player.style=n.style||e.style,r}let i=Du(e,t);return n.style&&(i.player.style=n.style),i}function Zf(n,e){let t=ep(n),i=s=>{if(!s){n.raceSel=null,n.act="rest",mr(n),At(),ir();return}s.jname=t.player.jname,n.raceRes=s,mr(n),s.pos===1&&(Ce.carrots+=0),At(),ir()};if(!e){i(oc(t));return}kh(n),Tl({...t,onDone:i})}var ms=null;function kh(n){ms&&clearTimeout(ms),ms=null,n&&(n.auto=!1)}function zv(n){ms&&clearTimeout(ms);let e=900/(n.speed||1);ms=setTimeout(()=>{ms=null,!(Bh()!==n||!n.auto)&&Gv(n)},e)}function Gv(n){let e=n.p;switch(n.tab="play",n.screen){case"camp":ba(n);break;case"month":{let t=Cu(n);if(t.race){let i=Pu(n);i?n.raceSel={...i}:t=dr(e).find(s=>s.id==="rest")||dr(e)[0]}n.act=t.id,Zl(n);break}case"event":n.evr?ec(n):Ql(n,Iu(n));break;case"afterEvents":if(n.raceSel){let t=ep(n),i=oc(t);i.jname=t.player.jname,n.raceRes=i}mr(n);break;case"mres":tc(n);break;case"report":nc(n);break;case"offers":{let t=n.offers;if(e.kind==="horse")e.age<2?Ui(n,"none"):t.forced?Ui(n,"retire",t.retireOpts[t.retireOpts.length-1].n+"\u3002"+t.retireOpts[t.retireOpts.length-1].d):Ui(n,"path",e.path||"middle");else if(t.forced)Ui(n,"retire",`${e.age}\u6B73\u3067\u30E0\u30C1\u3092\u7F6E\u3044\u305F`);else if(t.list.length){let i=t.list.slice().sort((s,r)=>Di[r.stable].rep-Di[s.stable].rep)[0];Ui(n,"stable",i.stable)}else Ui(n,"free");break}case"retireNow":Vh(n);break;case"retired":n.auto=!1;break}At(),ir()}var Wh=[{id:"ssr-1",rarity:"SSR",kind:"horse",name:"SSR\u30AD\u30E3\u30E9\u2460\uFF08\u6E96\u5099\u4E2D\uFF09",bonus:{}},{id:"ssr-2",rarity:"SSR",kind:"jockey",name:"SSR\u30AD\u30E3\u30E9\u2461\uFF08\u6E96\u5099\u4E2D\uFF09",bonus:{}},{id:"ssr-3",rarity:"SSR",kind:"support",name:"SSR\u30AD\u30E3\u30E9\u2462\uFF08\u6E96\u5099\u4E2D\uFF09",bonus:{}},{id:"sr-1",rarity:"SR",kind:"horse",name:"SR\u30AD\u30E3\u30E9\u2460\uFF08\u6E96\u5099\u4E2D\uFF09",bonus:{}},{id:"sr-2",rarity:"SR",kind:"horse",name:"SR\u30AD\u30E3\u30E9\u2461\uFF08\u6E96\u5099\u4E2D\uFF09",bonus:{}},{id:"sr-3",rarity:"SR",kind:"jockey",name:"SR\u30AD\u30E3\u30E9\u2462\uFF08\u6E96\u5099\u4E2D\uFF09",bonus:{}},{id:"sr-4",rarity:"SR",kind:"support",name:"SR\u30AD\u30E3\u30E9\u2463\uFF08\u6E96\u5099\u4E2D\uFF09",bonus:{}},{id:"r-1",rarity:"R",kind:"horse",name:"R\u30AD\u30E3\u30E9\u2460\uFF08\u6E96\u5099\u4E2D\uFF09",bonus:{}},{id:"r-2",rarity:"R",kind:"horse",name:"R\u30AD\u30E3\u30E9\u2461\uFF08\u6E96\u5099\u4E2D\uFF09",bonus:{}},{id:"r-3",rarity:"R",kind:"jockey",name:"R\u30AD\u30E3\u30E9\u2462\uFF08\u6E96\u5099\u4E2D\uFF09",bonus:{}},{id:"r-4",rarity:"R",kind:"support",name:"R\u30AD\u30E3\u30E9\u2463\uFF08\u6E96\u5099\u4E2D\uFF09",bonus:{}},{id:"r-5",rarity:"R",kind:"support",name:"R\u30AD\u30E3\u30E9\u2464\uFF08\u6E96\u5099\u4E2D\uFF09",bonus:{}}],gs={SSR:.03,SR:.18,R:.79},$h=10,Xh=100;function Hv(n){let e=Math.random();return e<gs.SSR?"SSR":e<gs.SSR+gs.SR||n?"SR":"R"}function tp(n){let e=[];for(let t=0;t<n;t++){let i=Hv(n===10&&t===9),s=Wh.filter(r=>r.rarity===i);e.push(s[Math.floor(Math.random()*s.length)])}return e}var Vv=()=>document.getElementById("app"),Jt=n=>String(n??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),Il=n=>"#"+(n??16777215).toString(16).padStart(6,"0");function la(n){Vv().innerHTML=n,window.scrollTo(0,0)}function ca(n){document.querySelectorAll("[data-act]").forEach(e=>{let t=e.dataset.act;n[t]&&(e.onclick=i=>{i.preventDefault(),n[t](e.dataset.v,e)})})}function qh(n,{onClose:e,cls:t=""}={}){let i=document.createElement("div");i.className="modal "+t,i.innerHTML=`<div class="modal-card">${n}</div>`,document.body.appendChild(i);let s=()=>{i.remove(),e&&e()};return i.addEventListener("click",r=>{r.target===i&&!t.includes("nobg")&&s()}),i.querySelectorAll("[data-close]").forEach(r=>r.onclick=s),{el:i,close:s}}function Pl(n){let e=document.createElement("div");e.className="toast",e.textContent=n,document.body.appendChild(e),setTimeout(()=>e.classList.add("show"),10),setTimeout(()=>{e.classList.remove("show"),setTimeout(()=>e.remove(),400)},2200)}function np(n,e){let t=rr(e);return`<div class="stat"><span class="sn">${n}</span><span class="rk" style="color:${xs(t)}">${t}</span>
    <div class="bar"><i style="width:${Math.min(100,e)}%"></i></div><span class="sv">${Math.floor(e)}</span></div>`}function Ll(n,e="home"){return`<header class="top"><button class="back" data-act="go" data-v="${e}">\u2039</button><h1>${n}</h1>
    <div class="carrot">\u{1F955} ${Ce.carrots}</div></header>`}var ip={};function Nl(n){(ip[n]||_s)()}function _s(){let n=Ce.activeHorse,e=Ce.activeJockey;la(`
  <div class="title-screen">
    <div class="title-bg"></div>
    <div class="logo"><div class="logo-sub">\u7AF6\u99AC\u80B2\u6210\u30B2\u30FC\u30E0</div><div class="logo-main">\u6B7B\u306C\u304B<br>\u751F\u304D\u308B\u304B\u306E<br>\u6226\u3044</div></div>
    <div class="carrot home-carrot">\u{1F955} \u91D1\u306E\u306B\u3093\u3058\u3093 ${Ce.carrots}</div>
    <div class="menu">
      <button class="mbtn big" data-act="horse">\u{1F40E} \u99AC\u3092\u80B2\u3066\u308B${n&&n.p?`<small>\u7D9A\u304D\uFF1A${Jt(n.p.name)}\uFF08${n.p.age}\u6B73${n.p.month}\u6708\uFF09</small>`:"<small>\u751F\u307E\u308C\u3066\u304B\u3089\u5F15\u9000\u307E\u3067</small>"}</button>
      <button class="mbtn" data-act="jockey">\u{1F3C7} \u9A0E\u624B\u3092\u80B2\u3066\u308B${e&&e.p?`<small>\u7D9A\u304D\uFF1A${Jt(e.p.name)}\uFF08${e.p.age}\u6B73\uFF09</small>`:"<small>\u7AF6\u99AC\u5B66\u6821\u304B\u3089\u5F15\u9000\u307E\u3067</small>"}</button>
      <button class="mbtn" data-act="list">\u{1F4D6} \u4E00\u89A7<small>\u80B2\u3066\u305F\u99AC ${Ce.horses.length}\u982D\u30FB\u9A0E\u624B ${Ce.jockeys.length}\u4EBA</small></button>
      <button class="mbtn" data-act="gacha">\u{1F3B0} \u30AC\u30C1\u30E3<small>\u30AD\u30E3\u30E9\u306F\u6E96\u5099\u4E2D</small></button>
      <button class="mbtn" data-act="vs">\u2694\uFE0F \u5BFE\u6226\u30FB\u30EC\u30FC\u30B9<small>\u80B2\u3066\u305F\u99AC\u3067\u52DD\u8CA0</small></button>
      <button class="mbtn small" data-act="settings">\u2699\uFE0F \u8A2D\u5B9A</button>
    </div>
  </div>`),ca({horse:()=>zh("horse",_s),jockey:()=>zh("jockey",_s),list:()=>Dl("h"),gacha:rp,vs:Yv,settings:Kv})}ip.home=_s;function Dl(n="h"){let e=Ce.horses,t=Ce.jockeys;la(`${Ll("\u4E00\u89A7")}
  <div class="page">
    <div class="tabs"><button class="${n==="h"?"on":""}" data-act="tab" data-v="h">\u99AC\uFF08${e.length}\uFF09</button><button class="${n==="j"?"on":""}" data-act="tab" data-v="j">\u9A0E\u624B\uFF08${t.length}\uFF09</button></div>
    ${n==="h"?e.length?e.map((i,s)=>`<button class="lcard" data-act="hd" data-v="${s}">
      <div class="lrank" style="color:${xs(i.rank||"G")}">${i.rank||"-"}</div>
      <div class="linfo"><b><i class="dot sm" style="background:${Il(un[i.coat].body)}"></i>${Jt(i.name)}</b>
      <small>${i.record.join("-")}\u3000${du(i.earnings)}${i.g1Wins?`\u3000G1 ${i.g1Wins}\u52DD`:""}</small>
      <small class="muted">${Jt(i.retireReason||"")}</small></div></button>`).join(""):'<div class="empty">\u307E\u3060\u5F15\u9000\u3057\u305F\u99AC\u306F\u3044\u307E\u305B\u3093\u3002<br>\u99AC\u3092\u80B2\u3066\u3066\u5F15\u9000\u3055\u305B\u308B\u3068\u3001\u3053\u3053\u306B\u6B8B\u308A\u307E\u3059\u3002</div>':t.length?t.map((i,s)=>{let r=Ci.reduce((a,o)=>a+i.s[o],0)/5;return`<button class="lcard" data-act="jd" data-v="${s}">
      <div class="lrank" style="color:${xs(i.rank||rr(r))}">${i.rank||rr(r)}</div>
      <div class="linfo"><b><i class="dot sm" style="background:${Il(dn[i.silk])}"></i>${Jt(i.name)}</b><small>${i.races}\u6226${i.wins}\u52DD${i.g1Wins?`\u3000G1 ${i.g1Wins}\u52DD`:""}</small><small class="muted">${Jt(i.retireReason||"")}</small></div></button>`}).join(""):'<div class="empty">\u307E\u3060\u30C7\u30D3\u30E5\u30FC\u3057\u305F\u9A0E\u624B\u306F\u3044\u307E\u305B\u3093\u3002</div>'}
  </div>`),ca({go:Nl,tab:i=>Dl(i),hd:i=>Wv(e[+i]),jd:i=>$v(t[+i])})}function Wv(n){let e=(n.races||[]).slice().reverse(),t=qh(`<h2><i class="dot sm" style="background:${Il(un[n.coat].body)}"></i>${Jt(n.name)}</h2>
    <p class="center muted">\u7236 ${n.sire}\u3000\u6BCD ${n.dam}\u3000${un[n.coat].name}</p>
    ${jn.map(i=>np(da[i],n.s[i])).join("")}
    <div class="apt"><span>\u829D ${n.apt.turf}</span><span>\u30C0 ${n.apt.dirt}</span><span>${n.style}</span><span>${n.record.join("-")}</span></div>
    ${n.titles&&n.titles.length?`<p>\u{1F3C6} ${n.titles.map(Jt).join("\u3001")}</p>`:""}
    <div class="rhist">${e.map(i=>`<div><span class="${i.pos===1?"win":""}">${i.pos}\u7740</span>${i.g?`<span class="grade g-${i.g}">${i.g}</span>`:""}${Jt(i.name)}<small>${i.surf}${i.dist}m ${oi(i.time)}</small></div>`).join("")||'<p class="muted">\u30EC\u30FC\u30B9\u8A18\u9332\u306A\u3057</p>'}</div>
    <button class="btn wide" data-a="code">\u5BFE\u6226\u30B3\u30FC\u30C9\u3092\u30B3\u30D4\u30FC</button>
    <button class="btn ghost wide" data-a="del">\u4E00\u89A7\u304B\u3089\u6D88\u3059</button>
    <button class="btn primary wide" data-close>\u9589\u3058\u308B</button>`);t.el.querySelector("[data-a=code]").onclick=()=>sp(n),t.el.querySelector("[data-a=del]").onclick=()=>{confirm("\u672C\u5F53\u306B\u6D88\u3057\u307E\u3059\u304B\uFF1F")&&(Ce.horses.splice(Ce.horses.indexOf(n),1),At(),t.close(),Dl("h"))}}function $v(n){let e=qh(`<h2><i class="dot sm" style="background:${Il(dn[n.silk])}"></i>${Jt(n.name)}</h2>
    ${Ci.map(t=>np(fa[t],n.s[t])).join("")}
    <div class="apt"><span>${n.races}\u6226 ${n.wins}\u52DD</span><span>G1 ${n.g1Wins||0}\u52DD</span><span>${Jt(n.retireReason||"")}</span></div>
    ${n.titles&&n.titles.length?`<p>\u{1F3C6} ${n.titles.slice(-12).map(Jt).join("\u3001")}</p>`:""}
    <button class="btn ghost wide" data-a="del">\u4E00\u89A7\u304B\u3089\u6D88\u3059</button><button class="btn primary wide" data-close>\u9589\u3058\u308B</button>`);e.el.querySelector("[data-a=del]").onclick=()=>{confirm("\u672C\u5F53\u306B\u6D88\u3057\u307E\u3059\u304B\uFF1F")&&(Ce.jockeys.splice(Ce.jockeys.indexOf(n),1),At(),e.close(),Dl("j"))}}function Xv(n,e){let t={v:1,n:n.name,s:n.s,a:n.apt,st:n.style,c:n.coat,k:n.skills||[],jn:e?e.name:Jn.name,js:e?e.s:Jn.s,sl:e?e.silk:6};return"SNK-"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))}function qv(n){try{let e=JSON.parse(decodeURIComponent(escape(atob(n.trim().replace(/^SNK-/,"")))));if(!e.s||!e.n)return null;for(let t of jn)e.s[t]=Math.max(1,Math.min(105,+e.s[t]||1));return e}catch{return null}}function sp(n){let e=Xv(n,mu(n.jockeyId)),t=()=>Pl("\u5BFE\u6226\u30B3\u30FC\u30C9\u3092\u30B3\u30D4\u30FC\u3057\u307E\u3057\u305F\u3002\u53CB\u9054\u306B\u9001\u308D\u3046\uFF01");navigator.clipboard?navigator.clipboard.writeText(e).then(t,()=>prompt("\u3053\u306E\u30B3\u30FC\u30C9\u3092\u30B3\u30D4\u30FC\u3057\u3066\u304F\u3060\u3055\u3044",e)):prompt("\u3053\u306E\u30B3\u30FC\u30C9\u3092\u30B3\u30D4\u30FC\u3057\u3066\u304F\u3060\u3055\u3044",e)}function rp(){let n={};for(let t of Ce.gacha)n[t]=(n[t]||0)+1;la(`${Ll("\u30AC\u30C1\u30E3")}
  <div class="page">
    <div class="banner"><div class="bn-tag">PICK UP</div><div class="bn-title">\u30AD\u30E3\u30E9\u6E96\u5099\u4E2D</div><div class="bn-sub">\u3053\u306E\u3042\u3068\u30AD\u30E3\u30E9\u3092\u8FFD\u52A0\u4E88\u5B9A</div></div>
    <div class="rates">SSR ${gs.SSR*100}%\u3000SR ${gs.SR*100}%\u3000R ${gs.R*100}%\u3000\uFF0810\u9023\u306FSR\u4EE5\u4E0A1\u679A\u78BA\u5B9A\uFF09</div>
    <div class="row2"><button class="btn primary" data-act="p1">1\u56DE\u5F15\u304F<small>\u{1F955}${$h}</small></button><button class="btn race" data-act="p10">10\u9023<small>\u{1F955}${Xh}</small></button></div>
    <div class="muted small center">\u91D1\u306E\u306B\u3093\u3058\u3093\u306F\u30EC\u30FC\u30B9\u3067\u52DD\u3064\u30FB\u99AC\u3092\u5F15\u9000\u3055\u305B\u308B\u30FB\u9A0E\u624B\u3092\u30C7\u30D3\u30E5\u30FC\u3055\u305B\u308B\u3068\u5897\u3048\u307E\u3059</div>
    <div class="sec">\u6301\u3063\u3066\u3044\u308B\u30AD\u30E3\u30E9\uFF08${Ce.gacha.length}\uFF09</div>
    <div class="cgrid">${Wh.map(t=>`<div class="ccard ${t.rarity} ${n[t.id]?"":"none"}"><span class="rar">${t.rarity}</span><span class="cn">${n[t.id]?Jt(t.name):"\uFF1F\uFF1F\uFF1F"}</span>${n[t.id]?`<span class="cnt">\xD7${n[t.id]}</span>`:""}</div>`).join("")}</div>
  </div>`);let e=(t,i)=>{if(Ce.carrots<i){Pl("\u91D1\u306E\u306B\u3093\u3058\u3093\u304C\u8DB3\u308A\u307E\u305B\u3093");return}Ce.carrots-=i;let s=tp(t);for(let o of s)Ce.gacha.push(o.id);At();let r=s.some(o=>o.rarity==="SSR")?"SSR":s.some(o=>o.rarity==="SR")?"SR":"R",a=qh(`<div class="gacha-anim ${r}"><div class="gate-light"></div></div><div class="gres">${s.map((o,l)=>`<div class="ccard ${o.rarity} flip" style="animation-delay:${.6+l*.12}s"><span class="rar">${o.rarity}</span><span class="cn">${Jt(o.name)}</span></div>`).join("")}</div>
      <button class="btn primary wide" data-close>OK</button>`,{onClose:rp,cls:"gacha"})};ca({go:Nl,p1:()=>e(1,$h),p10:()=>e(10,Xh)})}function Yv(){let n=[],e=Ce.activeHorse&&Ce.activeHorse.p;e&&fn(e)==="tc"&&n.push({h:{name:e.name,s:e.st,apt:e.apt,style:e.style,coat:e.coat,skills:e.skills},label:"\u80B2\u6210\u4E2D"});for(let l of Ce.horses)n.push({h:l,label:"\u5F15\u9000\u99AC"});let t=0,i=-1,s=0,r=[],a=[{name:"\u30D5\u30EA\u30FC\u30EC\u30FC\u30B9",g:null,surf:"\u829D",dist:2e3,place:"\u6771\u4EAC"},...ys.filter(l=>l.g==="G1")],o=()=>{la(`${Ll("\u5BFE\u6226\u30FB\u30EC\u30FC\u30B9")}
    <div class="page">
      ${n.length?"":'<div class="empty">\u5BFE\u6226\u306B\u51FA\u305B\u308B\u99AC\u304C\u3044\u307E\u305B\u3093\u3002<br>\u99AC\u3092\u80B2\u3066\u3066\u30C8\u30EC\u30BB\u30F3\u306B\u5165\u308B\uFF082\u6B73\uFF09\u304B\u3001\u5F15\u9000\u3055\u305B\u308B\u3068\u51FA\u3089\u308C\u307E\u3059\u3002</div>'}
      ${n.length?`
      <div class="sec">\u81EA\u5206\u306E\u99AC</div>
      <div class="plist">${n.map((u,d)=>`<button class="pitem ${d===t?"on":""}" data-act="sel" data-v="${d}"><b>${Jt(u.h.name)}</b><small>${u.label}\u3000${jn.map(f=>rr(u.h.s[f])).join("")}</small></button>`).join("")}</div>
      <div class="sec">\u9A0E\u624B</div>
      <div class="chips"><button class="chip ${i===-1?"on":""}" data-act="js" data-v="-1">${Jn.name}</button>${Ce.jockeys.map((u,d)=>`<button class="chip ${i===d?"on":""}" data-act="js" data-v="${d}">${Jt(u.name)}</button>`).join("")}</div>
      <div class="sec">\u30EC\u30FC\u30B9</div>
      <select id="rsel">${a.map((u,d)=>`<option value="${d}" ${d===s?"selected":""}>${u.g?u.g+" ":""}${u.name}\uFF08${u.surf}${u.dist}m\uFF09</option>`).join("")}</select>
      ${s===0?`<div class="row2"><select id="fsurf"><option ${a[0].surf==="\u829D"?"selected":""}>\u829D</option><option ${a[0].surf==="\u30C0"?"selected":""}>\u30C0</option></select>
        <select id="fdist">${[1200,1400,1600,1800,2e3,2200,2400,2500,3e3,3200].map(u=>`<option ${u===a[0].dist?"selected":""}>${u}</option>`).join("")}</select></div>`:""}
      <div class="sec">\u76F8\u624B</div>
      <div class="muted small">\u53CB\u9054\u306E\u5BFE\u6226\u30B3\u30FC\u30C9\u3092\u5165\u308C\u308B\u3068\u3001\u305D\u306E\u99AC\u3068\u52DD\u8CA0\u3067\u304D\u307E\u3059\uFF08\u6B8B\u308A\u306FCPU\uFF09</div>
      <div class="row"><input id="fcode" placeholder="SNK-\u2026"><button class="btn" data-act="add">\u8FFD\u52A0</button></div>
      <div class="plist">${r.map((u,d)=>`<div class="pitem on"><b>${Jt(u.n)}</b><small>${Jt(u.jn)}</small><button class="x" data-act="rm" data-v="${d}">\xD7</button></div>`).join("")}</div>
      <button class="btn race wide" data-act="start">\u30EC\u30FC\u30B9\u958B\u59CB\uFF01</button>
      <button class="btn wide" data-act="mycode">\u81EA\u5206\u306E\u99AC\u306E\u5BFE\u6226\u30B3\u30FC\u30C9\u3092\u30B3\u30D4\u30FC</button>`:""}
    </div>`);let l=document.getElementById("rsel");l&&(l.onchange=()=>{s=+l.value,o()});let c=document.getElementById("fsurf"),h=document.getElementById("fdist");c&&(c.onchange=()=>{a[0].surf=c.value}),h&&(h.onchange=()=>{a[0].dist=+h.value}),ca({go:Nl,sel:u=>{t=+u,o()},js:u=>{i=+u,o()},add:()=>{let u=qv(document.getElementById("fcode").value);if(!u){Pl("\u30B3\u30FC\u30C9\u304C\u8AAD\u3081\u307E\u305B\u3093\u3067\u3057\u305F");return}r.length>=11||(r.push(u),o())},rm:u=>{r.splice(+u,1),o()},mycode:()=>sp(n[t].h),start:()=>{let u=n[t].h,d=i>=0?Ce.jockeys[i]:Jn,f={...a[s]},g=jn.reduce((p,m)=>p+u.s[m],0)/5;f.lv=f.g==="G1"?80:g,f.prize=0;let v=r.map((p,m)=>({name:p.n,jname:p.jn,h:{...p.s},j:{...p.js},apt:f.surf==="\u829D"?p.a.turf:p.a.dirt,cond:2,style:p.st,coat:p.c,silk:dn[p.sl??m],hsk:p.k||[]}));Tl({race:f,fieldSize:f.g?14:12,opponents:v,player:{name:u.name,jname:d.name,h:{...u.s},j:{...d.s},apt:f.surf==="\u829D"?u.apt.turf:u.apt.dirt,cond:2,style:u.style,coat:u.coat,silk:d.silk??6,hsk:u.skills||[],jsk:d.skills||[]},onDone:p=>{p&&p.pos===1&&(Ce.carrots+=5,At(),Pl("\u52DD\u5229\uFF01 \u{1F955}+5")),o()}})}})};o()}function Kv(){la(`${Ll("\u8A2D\u5B9A")}
  <div class="page">
    <div class="card"><label class="sw-row"><span>\u52B9\u679C\u97F3</span><input type="checkbox" id="snd" ${Ce.settings.sound?"checked":""}></label>
    <label class="sw-row"><span>\u30EC\u30FC\u30B9\u306E\u8996\u70B9\uFF08\u6700\u521D\uFF09</span><select id="vw"><option value="fp" ${Ce.settings.view==="fp"?"selected":""}>\u9A0E\u624B\u8996\u70B9</option><option value="back" ${Ce.settings.view==="back"?"selected":""}>\u5F8C\u308D\u304B\u3089</option><option value="tv" ${Ce.settings.view==="tv"?"selected":""}>\u4E2D\u7D99</option></select></label></div>
    <div class="card"><b>\u904A\u3073\u65B9</b><p class="small">\u99AC\u306F0\u6B73\u304B\u3089\u80B2\u3066\u3066\u30012\u6B736\u6708\u304B\u3089\u30EC\u30FC\u30B9\u306B\u51FA\u3089\u308C\u307E\u3059\u30027\u6B73\u306E\u5E74\u672B\u304B\u3001\u91CD\u3044\u6545\u969C\u3067\u5F15\u9000\u3002\u75B2\u308C\u305F\u307E\u307E\u8ABF\u6559\u3059\u308B\u3068\u30B1\u30AC\u3092\u3057\u3084\u3059\u304F\u3001\u91CD\u3044\u6545\u969C\u3060\u3068\u7AF6\u8D70\u751F\u547D\u306E\u5371\u6A5F\u306B\u3002<br>\u30EC\u30FC\u30B9\u306F\u9A0E\u624B\u8996\u70B9\u3002\u25C0\u25B6\u3067\u9032\u8DEF\u3092\u5909\u3048\u3001\u30E0\u30C1\u3067\u52A0\u901F\u3002\u4F53\u529B\u30B2\u30FC\u30B8\u306E\u4F7F\u3044\u65B9\u304C\u52DD\u8CA0\u306E\u5206\u304B\u308C\u76EE\u3067\u3059\u3002</p></div>
    <button class="btn ghost wide" data-act="reset">\u30C7\u30FC\u30BF\u3092\u3059\u3079\u3066\u6D88\u3059</button>
    <p class="muted small center">\u30C7\u30FC\u30BF\u306F\u3053\u306E\u7AEF\u672B\u306E\u30D6\u30E9\u30A6\u30B6\u306B\u4FDD\u5B58\u3055\u308C\u3066\u3044\u307E\u3059</p>
  </div>`),document.getElementById("snd").onchange=n=>{Ce.settings.sound=n.target.checked,El(Ce.settings.sound),At()},document.getElementById("vw").onchange=n=>{Ce.settings.view=n.target.value,At()},ca({go:Nl,reset:()=>{confirm("\u80B2\u3066\u305F\u99AC\u30FB\u9A0E\u624B\u30FB\u30AC\u30C1\u30E3\u3092\u3059\u3079\u3066\u6D88\u3057\u307E\u3059\u3002\u3088\u308D\u3057\u3044\u3067\u3059\u304B\uFF1F")&&(pu(),_s())}})}_s();var ap=0;document.addEventListener("touchend",n=>{let e=Date.now();e-ap<300&&n.target.closest("button")&&n.preventDefault(),ap=e},{passive:!1});"serviceWorker"in navigator&&location.protocol==="https:"&&navigator.serviceWorker.register("./sw.js").catch(()=>{});
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
