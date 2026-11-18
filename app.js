var On=["spd","sta","pow","gut","wis"],Hi={spd:"\u30B9\u30D4\u30FC\u30C9",sta:"\u30B9\u30BF\u30DF\u30CA",pow:"\u30D1\u30EF\u30FC",gut:"\u6839\u6027",wis:"\u8CE2\u3055"},mi=["tec","whip","bal","fit","jud"],rs={tec:"\u6280\u8853",whip:"\u30E0\u30C1",bal:"\u30D0\u30E9\u30F3\u30B9",fit:"\u4F53\u529B",jud:"\u5224\u65AD"},kr=["\u7D76\u4E0D\u8ABF","\u4E0D\u8ABF","\u666E\u901A","\u597D\u8ABF","\u7D76\u597D\u8ABF"],Jo=["#7b5cff","#5b9bff","#cfcfcf","#ffb347","#ff5a5a"],nh=[.978,.99,1,1.007,1.014],Ws=[.7,.85,1,1.1,1.2],ih=["G","F","E","D","C","B","A"],sh={G:.9,F:.92,E:.94,D:.957,C:.972,B:.988,A:1},rh=["\u9003\u3052","\u5148\u884C","\u5DEE\u3057","\u8FFD\u8FBC"],je=[{name:"\u9E7F\u6BDB",body:7027230,mane:1707784,leg:1707784},{name:"\u9ED2\u9E7F\u6BDB",body:3810068,mane:1182214,leg:1182214},{name:"\u9752\u9E7F\u6BDB",body:2365199,mane:722693,leg:722693},{name:"\u6817\u6BDB",body:10112802,mane:12088380,leg:9061664},{name:"\u6803\u6817\u6BDB",body:7223836,mane:13213802,leg:7223836},{name:"\u82A6\u6BDB",body:10263190,mane:6973542,leg:5591631}],sn=[14034984,1920728,15909376,1483594,16347926,9647082,16777215,1118481,15485081,440020,8702998,8138002,6583435,16436245,1013358,12456508,4405450,10724259];function gi(n){return n>=97?"SS":n>=90?"S":n>=80?"A":n>=70?"B":n>=60?"C":n>=50?"D":n>=35?"E":n>=20?"F":"G"}function as(n){return{SS:"#ff4fd8",S:"#ffcf33",A:"#ff7a3d",B:"#ff5a5a",C:"#3ddc84",D:"#3db8ff",E:"#9d8cff",F:"#9aa0a6",G:"#6b7076"}[n]}var se=(n,t)=>n+Math.random()*(t-n),_i=(n,t)=>Math.floor(se(n,t+1)),Le=n=>n[Math.floor(Math.random()*n.length)],Qt=(n,t,e)=>Math.max(t,Math.min(e,n)),ah=(n,t,e)=>n+(t-n)*e,hf=["\u30B5\u30F3\u30C0\u30FC","\u30D6\u30EC\u30A4\u30BA","\u30B7\u30EB\u30D0\u30FC","\u30B4\u30FC\u30EB\u30C9","\u30DF\u30E9\u30AF\u30EB","\u30B9\u30BF\u30FC","\u30C0\u30FC\u30AF","\u30E9\u30A4\u30B8\u30F3\u30B0","\u30AD\u30F3\u30B0","\u30AF\u30A4\u30FC\u30F3","\u30ED\u30FC\u30C9","\u30B9\u30C8\u30FC\u30E0","\u30D5\u30EC\u30A4\u30E0","\u30D6\u30EB\u30FC","\u30EC\u30C3\u30C9","\u30DB\u30EF\u30A4\u30C8","\u30B0\u30E9\u30F3","\u30A8\u30A2\u30FC","\u30E1\u30A4\u30B7\u30E7\u30A6","\u30B5\u30AF\u30E9","\u30C8\u30A6\u30AB\u30A4","\u30CA\u30EA\u30BF","\u30DE\u30C1\u30AB\u30CD","\u30C0\u30A4\u30EF","\u30BF\u30A4\u30AD","\u30CF\u30E4\u30C6","\u30A4\u30CA\u30BA\u30DE","\u30AB\u30BC\u30CE","\u30DF\u30DB\u30CE","\u30E4\u30DE\u30C8"],uf=["\u30DC\u30EB\u30C8","\u30CF\u30FC\u30C8","\u30A6\u30A4\u30F3\u30B0","\u30BD\u30FC\u30C9","\u30C9\u30EA\u30FC\u30E0","\u30ED\u30B1\u30C3\u30C8","\u30CA\u30A4\u30C8","\u30B8\u30E3\u30B9\u30C6\u30A3\u30B9","\u30AF\u30E9\u30A6\u30F3","\u30D6\u30EC\u30A4\u30D6","\u30D5\u30A1\u30A4\u30A2","\u30B7\u30E3\u30C9\u30A6","\u30EA\u30FC\u30D5","\u30B9\u30D4\u30EA\u30C3\u30C8","\u30A8\u30FC\u30B9","\u30E0\u30FC\u30F3","\u30B5\u30F3","\u30AA\u30FC\u30E9","\u30BF\u30A4\u30AC\u30FC","\u30C9\u30E9\u30B4\u30F3","\u30DB\u30FC\u30D7","\u30D3\u30AF\u30C8\u30EA\u30FC","\u30D5\u30E9\u30C3\u30B7\u30E5","\u30C6\u30A4\u30AA\u30FC","\u30AA\u30FC","\u30CF\u30E4\u30D6\u30B5","\u30A4\u30AB\u30C5\u30C1","\u30B5\u30E0\u30E9\u30A4","\u30BC\u30ED","\u30D6\u30E9\u30A4\u30A2\u30F3"];function xi(){let n=Le(hf)+Le(uf);return n.length>9&&(n=n.slice(0,9)),n}var df=["\u6B66\u7530","\u5DDD\u6751","\u6A2A\u5C71","\u677E\u5CA1","\u5CA9\u672C","\u798F\u7530","\u6238\u5D0E","\u5742\u4E95","\u6C60\u7530","\u9BAB\u5CF6","\u83C5\u539F","\u85E4\u5CA1","\u7530\u8FBA","\u4E09\u6D66","\u5317\u5CF6","\u4F50\u85E4","\u5409\u7530","\u4E39\u7FBD"],ff=["\u7FD4","\u62D3\u4E5F","\u5927\u5730","\u98AF\u592A","\u84EE","\u60A0\u771F","\u6D77\u6597","\u9678","\u96BC\u4EBA","\u5065\u592A","\u6DBC","\u4E00\u8F1D","\u6E4A","\u6674","\u5927\u548C","\u745B\u592A"];function Vi(){return Le(df)+" "+Le(ff)}var oh=["\u30B5\u30F3\u30C7\u30FC\u30D6\u30EC\u30A4\u30D6","\u30C7\u30A3\u30FC\u30D7\u30AF\u30E9\u30A6\u30F3","\u30AD\u30F3\u30B0\u30ED\u30FC\u30C9","\u30B9\u30C6\u30A4\u30B4\u30FC\u30EB\u30C7\u30F3","\u30AA\u30EB\u30D5\u30A7\u30B9\u30BF\u30FC","\u30ED\u30FC\u30C9\u30AB\u30CA\u30ED\u30F3","\u30CF\u30FC\u30C4\u30AF\u30E9\u30A4\u30E0","\u30A8\u30D4\u30D5\u30A1\u30CD\u30AA","\u30AD\u30BF\u30B5\u30F3\u30D6\u30E9\u30C3\u30C9","\u30C9\u30A5\u30E9\u30E1\u30F3\u30C6\u30AA"],lh=["\u30DF\u30B9\u30A6\u30A4\u30F3\u30C9","\u30B9\u30A4\u30FC\u30C8\u30EA\u30EA\u30FC","\u30ED\u30FC\u30BA\u30DE\u30EA\u30FC","\u30CF\u30C3\u30D4\u30FC\u30D9\u30EB","\u30B7\u30E3\u30A4\u30CB\u30FC\u30C7\u30A4","\u30E0\u30FC\u30F3\u30E9\u30A4\u30C8","\u30B5\u30AF\u30E9\u30D2\u30E1","\u30A8\u30F3\u30B8\u30A7\u30EB\u30CF\u30FC\u30C8"],Gr=[{m:1,name:"\u4EAC\u6210\u676F",g:"G3",age:"3",surf:"\u829D",dist:2e3,place:"\u4E2D\u5C71",prize:4e3},{m:1,name:"\u30A2\u30E1\u30EA\u30ABJCC",g:"G2",age:"4+",surf:"\u829D",dist:2200,place:"\u4E2D\u5C71",prize:6200},{m:1,name:"\u65E5\u7D4C\u65B0\u6625\u676F",g:"G2",age:"4+",surf:"\u829D",dist:2400,place:"\u4EAC\u90FD",prize:5700},{m:2,name:"\u5171\u540C\u901A\u4FE1\u676F",g:"G3",age:"3",surf:"\u829D",dist:1800,place:"\u6771\u4EAC",prize:4300},{m:2,name:"\u4EAC\u90FD\u8A18\u5FF5",g:"G2",age:"4+",surf:"\u829D",dist:2200,place:"\u4EAC\u90FD",prize:6200},{m:2,name:"\u30D5\u30A7\u30D6\u30E9\u30EA\u30FCS",g:"G1",age:"4+",surf:"\u30C0",dist:1600,place:"\u6771\u4EAC",prize:12e3},{m:3,name:"\u5F25\u751F\u8CDE",g:"G2",age:"3",surf:"\u829D",dist:2e3,place:"\u4E2D\u5C71",prize:5400},{m:3,name:"\u962A\u795E\u5927\u8CDE\u5178",g:"G2",age:"4+",surf:"\u829D",dist:3e3,place:"\u962A\u795E",prize:6700},{m:3,name:"\u4E2D\u5C71\u8A18\u5FF5",g:"G2",age:"4+",surf:"\u829D",dist:1800,place:"\u4E2D\u5C71",prize:6200},{m:3,name:"\u9AD8\u677E\u5BAE\u8A18\u5FF5",g:"G1",age:"4+",surf:"\u829D",dist:1200,place:"\u4E2D\u4EAC",prize:17e3},{m:4,name:"\u5927\u962A\u676F",g:"G1",age:"4+",surf:"\u829D",dist:2e3,place:"\u962A\u795E",prize:3e4},{m:4,name:"\u7690\u6708\u8CDE",g:"G1",age:"3",surf:"\u829D",dist:2e3,place:"\u4E2D\u5C71",prize:2e4},{m:4,name:"\u30CB\u30E5\u30FC\u30B8\u30FC\u30E9\u30F3\u30C9T",g:"G2",age:"3",surf:"\u829D",dist:1600,place:"\u4E2D\u5C71",prize:5400},{m:4,name:"\u9752\u8449\u8CDE",g:"G2",age:"3",surf:"\u829D",dist:2400,place:"\u6771\u4EAC",prize:5400},{m:5,name:"\u5929\u7687\u8CDE\uFF08\u6625\uFF09",g:"G1",age:"4+",surf:"\u829D",dist:3200,place:"\u4EAC\u90FD",prize:22e3},{m:5,name:"NHK\u30DE\u30A4\u30EBC",g:"G1",age:"3",surf:"\u829D",dist:1600,place:"\u6771\u4EAC",prize:13e3},{m:5,name:"\u65E5\u672C\u30C0\u30FC\u30D3\u30FC",g:"G1",age:"3",surf:"\u829D",dist:2400,place:"\u6771\u4EAC",prize:3e4},{m:5,name:"\u4EAC\u738B\u676FSC",g:"G2",age:"4+",surf:"\u829D",dist:1400,place:"\u6771\u4EAC",prize:5900},{m:6,name:"\u5B89\u7530\u8A18\u5FF5",g:"G1",age:"3+",surf:"\u829D",dist:1600,place:"\u6771\u4EAC",prize:18e3},{m:6,name:"\u5B9D\u585A\u8A18\u5FF5",g:"G1",age:"3+",surf:"\u829D",dist:2200,place:"\u962A\u795E",prize:22e3},{m:6,name:"\u30E6\u30CB\u30B3\u30FC\u30F3S",g:"G3",age:"3",surf:"\u30C0",dist:1600,place:"\u6771\u4EAC",prize:4e3},{m:7,name:"\u51FD\u9928\u8A18\u5FF5",g:"G3",age:"3+",surf:"\u829D",dist:2e3,place:"\u51FD\u9928",prize:4300},{m:7,name:"\u30E9\u30B8\u30AANIKKEI\u8CDE",g:"G3",age:"3",surf:"\u829D",dist:1800,place:"\u798F\u5CF6",prize:4e3},{m:8,name:"\u672D\u5E4C\u8A18\u5FF5",g:"G2",age:"3+",surf:"\u829D",dist:2e3,place:"\u672D\u5E4C",prize:7e3},{m:8,name:"\u65B0\u6F5F2\u6B73S",g:"G3",age:"2",surf:"\u829D",dist:1600,place:"\u65B0\u6F5F",prize:3300},{m:9,name:"\u30BB\u30F3\u30C8\u30E9\u30A4\u30C8\u8A18\u5FF5",g:"G2",age:"3",surf:"\u829D",dist:2200,place:"\u4E2D\u5C71",prize:5400},{m:9,name:"\u795E\u6238\u65B0\u805E\u676F",g:"G2",age:"3",surf:"\u829D",dist:2400,place:"\u962A\u795E",prize:5400},{m:9,name:"\u30AA\u30FC\u30EB\u30AB\u30DE\u30FC",g:"G2",age:"3+",surf:"\u829D",dist:2200,place:"\u4E2D\u5C71",prize:6700},{m:9,name:"\u30B9\u30D7\u30EA\u30F3\u30BF\u30FC\u30BAS",g:"G1",age:"3+",surf:"\u829D",dist:1200,place:"\u4E2D\u5C71",prize:17e3},{m:9,name:"\u672D\u5E4C2\u6B73S",g:"G3",age:"2",surf:"\u829D",dist:1800,place:"\u672D\u5E4C",prize:3300},{m:10,name:"\u6BCE\u65E5\u738B\u51A0",g:"G2",age:"3+",surf:"\u829D",dist:1800,place:"\u6771\u4EAC",prize:6700},{m:10,name:"\u4EAC\u90FD\u5927\u8CDE\u5178",g:"G2",age:"3+",surf:"\u829D",dist:2400,place:"\u4EAC\u90FD",prize:6700},{m:10,name:"\u30B5\u30A6\u30B8\u30A2\u30E9\u30D3\u30A2RC",g:"G3",age:"2",surf:"\u829D",dist:1600,place:"\u6771\u4EAC",prize:3300},{m:10,name:"\u83CA\u82B1\u8CDE",g:"G1",age:"3",surf:"\u829D",dist:3e3,place:"\u4EAC\u90FD",prize:2e4},{m:10,name:"\u5929\u7687\u8CDE\uFF08\u79CB\uFF09",g:"G1",age:"3+",surf:"\u829D",dist:2e3,place:"\u6771\u4EAC",prize:22e3},{m:11,name:"\u30A2\u30EB\u30BC\u30F3\u30C1\u30F3\u5171\u548C\u56FD\u676F",g:"G2",age:"3+",surf:"\u829D",dist:2500,place:"\u6771\u4EAC",prize:5700},{m:11,name:"\u6771\u4EAC\u30B9\u30DD\u30FC\u30C4\u676F2\u6B73S",g:"G2",age:"2",surf:"\u829D",dist:1800,place:"\u6771\u4EAC",prize:4e3},{m:11,name:"\u6B66\u8535\u91CES",g:"G3",age:"3+",surf:"\u30C0",dist:1600,place:"\u6771\u4EAC",prize:4e3},{m:11,name:"\u30DE\u30A4\u30EBCS",g:"G1",age:"3+",surf:"\u829D",dist:1600,place:"\u4EAC\u90FD",prize:18e3},{m:11,name:"\u30B8\u30E3\u30D1\u30F3C",g:"G1",age:"3+",surf:"\u829D",dist:2400,place:"\u6771\u4EAC",prize:5e4},{m:12,name:"\u30B9\u30C6\u30A4\u30E4\u30FC\u30BAS",g:"G2",age:"3+",surf:"\u829D",dist:3600,place:"\u4E2D\u5C71",prize:6200},{m:12,name:"\u30C1\u30E3\u30F3\u30D4\u30AA\u30F3\u30BAC",g:"G1",age:"3+",surf:"\u30C0",dist:1800,place:"\u4E2D\u4EAC",prize:12e3},{m:12,name:"\u671D\u65E5\u676FFS",g:"G1",age:"2",surf:"\u829D",dist:1600,place:"\u4EAC\u90FD",prize:7e3},{m:12,name:"\u30DB\u30FC\u30D7\u30D5\u30EBS",g:"G1",age:"2",surf:"\u829D",dist:2e3,place:"\u4E2D\u5C71",prize:7e3},{m:12,name:"\u6709\u99AC\u8A18\u5FF5",g:"G1",age:"3+",surf:"\u829D",dist:2500,place:"\u4E2D\u5C71",prize:5e4}],ch=[{name:"\u65B0\u99AC",prize:700,lv:24},{name:"\u672A\u52DD\u5229",prize:550,lv:27},{name:"1\u52DD\u30AF\u30E9\u30B9",prize:1e3,lv:37},{name:"2\u52DD\u30AF\u30E9\u30B9",prize:1500,lv:47},{name:"3\u52DD\u30AF\u30E9\u30B9",prize:1800,lv:56},{name:"\u30AA\u30FC\u30D7\u30F3",prize:2400,lv:62}];var Xs=["\u6771\u4EAC","\u4E2D\u5C71","\u4EAC\u90FD","\u962A\u795E","\u4E2D\u4EAC","\u65B0\u6F5F","\u798F\u5CF6","\u5C0F\u5009"];function os(n){if(n>=1e4){let t=Math.floor(n/1e4),e=Math.round(n%1e4);return t+"\u5104"+(e?e+"\u4E07":"")+"\u5186"}return Math.round(n)+"\u4E07\u5186"}function ls(n){let t=Math.floor(n/60),e=n-t*60;return t+":"+(e<10?"0":"")+e.toFixed(1)}var hh="shinuka_ikiruka_v1",Zo=()=>({carrots:30,activeHorse:null,activeJockey:null,horses:[],jockeys:[],gacha:[],settings:{sound:!0,view:"fp"},nextId:1}),It=pf();function pf(){try{let n=localStorage.getItem(hh);if(n)return Object.assign(Zo(),JSON.parse(n))}catch{}return Zo()}function Re(){try{localStorage.setItem(hh,JSON.stringify(It))}catch{}}function Ko(){let n=It.nextId++;return Re(),n}function uh(){It=Zo(),Re()}function jo(n){return n==null?null:It.jockeys.find(t=>t.id===n)||null}function Bn(n){let t=3+n;return{age:Math.floor(t/12),month:t%12+1}}function Qo(n){let t=Bn(n);return`${t.age}\u6B73 ${t.month}\u6708`}var tl=92;function vi(n){let{age:t}=Bn(n.t);return t===0?0:t===1?1:2}var fh=["\u751F\u307E\u308C\u6545\u90F7\u306E\u7267\u5834","\u80B2\u6210\u7267\u5834","\u30C8\u30EC\u30FC\u30CB\u30F3\u30B0\u30BB\u30F3\u30BF\u30FC"];function dh(n){return ih[Qt(Math.round(n),0,6)]}function ph(n,t={}){let e=t.coat??_i(0,je.length-1),i=t.talent??se(0,1),s={};for(let l of On)s[l]=Math.round(Qt(se(62,92)+i*12,55,110));let r={};for(let l of On)r[l]=_i(4,12);let a=se(2.5,6.6),o=se(1.5,6.6);return{name:n||xi(),coat:e,sire:Le(oh),dam:Le(lh),t:0,s:r,cap:s,apt:{turf:dh(a),dirt:dh(o)},style:Le(["\u9003\u3052","\u5148\u884C","\u5148\u884C","\u5DEE\u3057","\u5DEE\u3057","\u8FFD\u8FBC"]),fatigue:0,cond:2,injury:null,feed:"normal",money:1e3,earnings:0,record:[0,0,0,0],races:[],wins:0,gradedWins:0,g1Wins:0,titles:[],jockeyId:null,log:[],retired:!1,retireReason:"",lastRaceT:-1}}var mf=[{id:"graze",name:"\u653E\u7267",desc:"\u5E83\u3044\u7267\u5834\u3067\u8D70\u308A\u56DE\u308B",g:{pow:4,sta:4},f:8,inj:.004},{id:"mare",name:"\u6BCD\u99AC\u3068\u99C6\u3051\u3063\u3053",desc:"\u30B9\u30D4\u30FC\u30C9\u306E\u571F\u53F0",g:{spd:5,gut:2},f:10,inj:.006},{id:"people",name:"\u4EBA\u306B\u6163\u308C\u308B",desc:"\u8CE2\u3055\u304C\u80B2\u3064",g:{wis:5,gut:1},f:4,inj:0},{id:"rest",name:"\u4F11\u990A",desc:"\u75B2\u308C\u3092\u3068\u308B",rest:35}],gf=[{id:"break",name:"\u99B4\u81F4",desc:"\u978D\u3068\u4EBA\u3092\u80CC\u306B\u4E57\u305B\u308B",g:{wis:5,gut:2},f:8,inj:.004},{id:"hillL",name:"\u5742\u8DEF\uFF08\u8EFD\u3081\uFF09",desc:"\u30D1\u30EF\u30FC\u3092\u3064\u3051\u308B",g:{pow:6,spd:2},f:13,inj:.008},{id:"lap",name:"\u5468\u56DE\u30B3\u30FC\u30B9",desc:"\u30B9\u30BF\u30DF\u30CA\u3092\u3064\u3051\u308B",g:{sta:6,gut:1},f:11,inj:.006},{id:"dash",name:"\u30C0\u30C3\u30B7\u30E5\u7DF4\u7FD2",desc:"\u30B9\u30D4\u30FC\u30C9\u3092\u3064\u3051\u308B",g:{spd:6,pow:1},f:13,inj:.008},{id:"rest",name:"\u4F11\u990A",desc:"\u75B2\u308C\u3092\u3068\u308B",rest:35}],_f=[{id:"turf",name:"\u829D\u30B3\u30FC\u30B9\u8FFD\u3044\u5207\u308A",desc:"\u30B9\u30D4\u30FC\u30C9\u4E2D\u5FC3",g:{spd:8,pow:2},f:15,inj:.012},{id:"hill",name:"\u5742\u8DEF",desc:"\u30D1\u30EF\u30FC\u4E2D\u5FC3",g:{pow:8,spd:2},f:16,inj:.014},{id:"wood",name:"\u30A6\u30C3\u30C9\u30C1\u30C3\u30D7",desc:"\u30B9\u30BF\u30DF\u30CA\u4E2D\u5FC3",g:{sta:8,gut:2},f:13,inj:.008},{id:"pair",name:"\u4F75\u305B\u99AC",desc:"\u6839\u6027\u4E2D\u5FC3",g:{gut:8,spd:2},f:15,inj:.012},{id:"gate",name:"\u30B2\u30FC\u30C8\u7DF4\u7FD2",desc:"\u8CE2\u3055\u4E2D\u5FC3",g:{wis:7,gut:1},f:7,inj:.003},{id:"pool",name:"\u30D7\u30FC\u30EB",desc:"\u811A\u306B\u3084\u3055\u3057\u3044\u30B9\u30BF\u30DF\u30CA\u5F37\u5316",g:{sta:4},f:5,inj:.001},{id:"rest",name:"\u4F11\u990A",desc:"\u75B2\u308C\u3092\u3068\u308B",rest:35},{id:"farm",name:"\u653E\u7267\u306B\u51FA\u3059",desc:"\u5916\u53A9\u3067\u3057\u3063\u304B\u308A\u30EA\u30D5\u30EC\u30C3\u30B7\u30E5",rest:65,cond:1}];function el(n){return[mf,gf,_f][vi(n)]}var Wi=[{id:"normal",name:"\u666E\u901A\u306E\u98FC\u3044\u8449",cost:0,desc:"\u7121\u6599"},{id:"carrot",name:"\u306B\u3093\u3058\u3093\u591A\u3081",cost:5,desc:"\u4F53\u8ABF\u304C\u5C11\u3057\u4E0A\u304C\u308A\u3084\u3059\u3044"},{id:"good",name:"\u826F\u8CEA\u306A\u98FC\u3044\u8449",cost:20,desc:"\u75B2\u308C\u304C\u5C11\u3057\u629C\u3051\u308B\u30FB\u4F53\u8ABFUP"},{id:"supp",name:"\u7279\u88FD\u30B5\u30D7\u30EA",cost:50,desc:"\u30C8\u30EC\u30FC\u30CB\u30F3\u30B0\u52B9\u679C+15%"}],xf=[.8,.9,1,1.1,1,.75,.5,.3];function mh(n,t,e,i){let s=n.s[t],r=n.cap[t],a=Math.max(0,(r-s)/r),o=e*i*Math.pow(a,.55)*se(.85,1.15);return s>=r&&(o=Math.random()<.15?1:0),o=Math.round(o*10)/10,n.s[t]=Math.round(Math.min(r+2,s+o)*10)/10,o}var vf=["\u30BD\u30A8","\u632B\u77F3","\u30D5\u30EC\u30B0\u30E2\u30FC\u30CD","\u7B4B\u8089\u75DB"],yf=["\u9AA8\u819C\u708E","\u5265\u96E2\u9AA8\u6298","\u7403\u7BC0\u708E","\u30C8\u30E2\u306E\u7B4B\u8089\u3092\u75DB\u3081\u305F"],Mf=["\u5C48\u8171\u708E","\u9AA8\u6298\uFF08\u91CD\u5EA6\uFF09","\u7E4B\u976D\u5E2F\u708E"];function nl(n,t){let e=n.fatigue/40,i=[1.4,1.2,1,.9,.85][n.cond],s=Bn(n.t).age>=6?1.3:1;return t*(1+e*e*1.6)*i*s}function gh(n,t){if(Math.random()>=nl(n,t))return null;let e=Math.random(),i;return e<.64?i={name:Le(vf),months:1,sev:1}:e<.93?i={name:Le(yf),months:_i(3,5),sev:2}:i={name:Le(Mf),months:_i(9,12),sev:3},n.injury=i,i.sev>=2&&(n.s.spd=Math.max(1,n.s.spd-i.sev*1.5),n.s.pow=Math.max(1,n.s.pow-i.sev)),i}function _h(n,t,e){let s=el(n).find(c=>c.id===t),r=Wi.find(c=>c.id===n.feed)||Wi[0],a={title:s.name,gains:{},msgs:[],injury:null},{age:o}=Bn(n.t);n.money<r.cost?(n.feed="normal",a.msgs.push("\u304A\u91D1\u304C\u8DB3\u308A\u306A\u3044\u306E\u3067\u666E\u901A\u306E\u98FC\u3044\u8449\u306B\u3057\u305F")):n.money-=r.cost;let l=n.feed==="supp"?1.15:1;if(s.g){let c=e&&vi(n)===2?1+e.s.tec/1e3:1,h=xf[Math.min(o,7)]*Ws[n.cond]*l*c*(n.fatigue>75?.7:1);for(let[d,u]of Object.entries(s.g))a.gains[d]=mh(n,d,u,h);n.fatigue=Qt(n.fatigue+s.f*se(.85,1.15),0,100),a.injury=gh(n,s.inj),Math.random()<.12&&(n.cond=Qt(n.cond+(Math.random()<.5?1:-1),0,4))}else n.fatigue=Qt(n.fatigue-s.rest*se(.9,1.1),0,100),(Math.random()<.5||s.cond)&&(n.cond=Qt(n.cond+1,0,4),a.msgs.push("\u4F53\u8ABF\u304C\u4E0A\u304C\u3063\u305F"));return xh(n,a),bf(n,a),il(n,a),a}function xh(n,t){n.feed==="carrot"&&Math.random()<.3&&(n.cond=Qt(n.cond+1,0,4),t.msgs.push("\u306B\u3093\u3058\u3093\u3067\u6A5F\u5ACC\u304C\u3044\u3044\uFF01 \u4F53\u8ABFUP")),n.feed==="good"&&(n.fatigue=Qt(n.fatigue-6,0,100),Math.random()<.35&&(n.cond=Qt(n.cond+1,0,4),t.msgs.push("\u98FC\u3044\u8449\u3092\u3088\u304F\u98DF\u3079\u305F\uFF01 \u4F53\u8ABFUP")))}var Sf=[{p:.05,f:(n,t)=>{n.cond=Qt(n.cond-1,0,4),t.msgs.push("\u591C\u306B\u99AC\u623F\u3067\u66B4\u308C\u3066\u3044\u305F\u2026\u4F53\u8ABFDOWN")}},{p:.04,f:(n,t)=>{n.s.gut=Math.min(n.cap.gut+2,n.s.gut+2),t.msgs.push("\u3068\u306A\u308A\u306E\u99AC\u3068\u30B1\u30F3\u30AB\u3057\u3066\u8CA0\u3051\u3093\u6C17\u304C\u80B2\u3063\u305F\uFF08\u6839\u6027+2\uFF09")}},{p:.04,f:(n,t)=>{n.fatigue=Qt(n.fatigue-10,0,100),t.msgs.push("\u3050\u3063\u3059\u308A\u7720\u308C\u305F\uFF08\u75B2\u52B4-10\uFF09")}},{p:.03,f:(n,t)=>{n.s.wis=Math.min(n.cap.wis+2,n.s.wis+2),t.msgs.push("\u53A9\u52D9\u54E1\u3055\u3093\u306E\u8A00\u3046\u3053\u3068\u3092\u3088\u304F\u805E\u304F\u3088\u3046\u306B\u306A\u3063\u305F\uFF08\u8CE2\u3055+2\uFF09")}}];function bf(n,t){for(let e of Sf)if(Math.random()<e.p){e.f(n,t);break}n.fatigue>=80&&Math.random()<.4&&(n.cond=Qt(n.cond-1,0,4),t.msgs.push("\u75B2\u308C\u304C\u305F\u307E\u3063\u3066\u4F53\u8ABFDOWN"))}function il(n,t){let e=vi(n)<2?2:1;for(let i=0;i<e;i++){n.t++;let{age:s,month:r}=Bn(n.t);if(r===1&&t.msgs.push(`\u5E74\u304C\u660E\u3051\u3066${s}\u6B73\u306B\u306A\u3063\u305F`),s>=5){let a=(s-4)*.12;n.s.spd=Math.max(1,n.s.spd-a),n.s.pow=Math.max(1,n.s.pow-a*.7)}}n.injury&&!t.injury&&(n.injury.months-=e,n.fatigue=Qt(n.fatigue-15,0,100),n.injury.months<=0&&(t.msgs.push(`${n.injury.name}\u304C\u6CBB\u3063\u305F\uFF01`),n.injury=null)),Bn(n.t).age===2&&Bn(n.t).month<=2&&vi(n)===2&&!n._tc&&(n._tc=!0,t.msgs.push("\u30C8\u30EC\u30FC\u30CB\u30F3\u30B0\u30BB\u30F3\u30BF\u30FC\u306B\u5165\u53A9\u3057\u305F\uFF01 \u30EC\u30FC\u30B9\u306B\u51FA\u3089\u308C\u308B\u306E\u306F2\u6B736\u6708\u304B\u3089")),n.t>tl&&(n.retireReason="7\u6B73\u306E\u5E74\u672B\u3067\u5F15\u9000",t.forceRetire=!0)}function vh(n){let t={title:"\u6CBB\u7642\u30FB\u4F11\u990A",gains:{},msgs:[],injury:null},e=Wi.find(i=>i.id===n.feed)||Wi[0];return n.money>=e.cost?n.money-=e.cost:n.feed="normal",n.fatigue=Qt(n.fatigue-30,0,100),xh(n,t),il(n,t),t}function Ef(n){let t=n*9301+49297;return()=>(t=(t*9301+49297)%233280,t/233280)}function wf(n){return n.races.length===0?0:n.wins===0?1:Math.min(n.wins+1,5)}function sl(n){let{age:t,month:e}=Bn(n.t);if(n.injury||vi(n)<2)return[];if(t===2&&e<6)return[];if(n.lastRaceT===n.t)return[];let i=[],s=wf(n),r=Ef(n.t*31+(n.id||7)),a=[1200,1400,1600,1800,2e3,2200,2400,2500],o=2;for(let l=0;l<o;l++){let c=ch[s],h=r()<.68?"\u829D":"\u30C0",d=a[Math.floor(r()*(t===2?4:a.length))];s<=1&&t===2&&(d=Math.min(d,2e3)),i.push({name:c.name+(l?"\uFF08"+Xs[Math.floor(r()*Xs.length)]+"\uFF09":""),g:null,cls:s,surf:h,dist:d,place:Xs[Math.floor(r()*Xs.length)],prize:c.prize,lv:c.lv,age:t+""})}for(let l of Gr){if(l.m!==e||!(l.age==="2"&&t===2||l.age==="3"&&t===3||l.age==="3+"&&t>=3||l.age==="4+"&&t>=4))continue;let h;l.g==="G1"?h=l.age==="2"?n.wins>=1:n.wins>=2||n.gradedWins>=1:h=n.wins>=1,i.push({...l,cls:6,lv:Tf(l),locked:!h})}return i}function Tf(n){let t={G3:64,G2:70,G1:79}[n.g];return n.age==="2"?t-14:n.age==="3"?t-5:t}function yh(n,t,e,i){let s={title:t.name,gains:{},msgs:[],injury:null},r=e.pos,a=e.field;n.races.push({t:n.t,name:t.name,g:t.g,surf:t.surf,dist:t.dist,pos:r,field:a,time:e.time,jockey:i?i.name:"\u898B\u7FD2\u3044\u9A0E\u624B"}),n.record[Math.min(r,4)-1]++;let o=0;r<=5&&(o=t.prize*[1,.4,.25,.15,.1][r-1]),n.money+=o*.8,n.earnings+=o,o&&s.msgs.push(`\u8CDE\u91D1 ${Math.round(o)}\u4E07\u5186 \u3092\u7372\u5F97\uFF01`),r===1?(n.wins++,t.g&&(n.gradedWins++,n.titles.push(t.name)),t.g==="G1"&&n.g1Wins++,s.carrots=t.g==="G1"?50:t.g?20:10,n.cond<4&&n.cond++):r<=3?s.carrots=3:r>=a-2&&Math.random()<.5&&(n.cond=Math.max(0,n.cond-1),s.msgs.push("\u5927\u6557\u3057\u3066\u5143\u6C17\u304C\u306A\u3044\u2026\u4F53\u8ABFDOWN"));let l=t.g==="G1"?2:t.g?1.5:1;for(let h of["gut","wis"])s.gains[h]=mh(n,h,2*l,1);n.fatigue=Qt(n.fatigue+18+t.dist/220+e.whips*.25,0,100);let c=gh(n,.012+e.whips*6e-4);return c&&(s.injury=c),n.lastRaceT=n.t,il(n,s),s}function rl(n){let t=On.reduce((e,i)=>e+n.s[i],0);return Math.round(t+n.g1Wins*60+n.gradedWins*20+n.wins*6+n.earnings/2e3)}function Mh(n){let t=rl(n);return t>=800?"SS":t>=600?"S":t>=480?"A":t>=400?"B":t>=330?"C":t>=260?"D":t>=180?"E":t>=100?"F":"G"}function Sh(n){let t=1100+24*n.s.sta;return t<1500?"\u77ED\u8DDD\u96E2":t<1900?"\u30DE\u30A4\u30EB":t<2500?"\u4E2D\u8DDD\u96E2":"\u9577\u8DDD\u96E2"}var bh=24;function Eh(n,t={}){let e=t.talent??se(0,1),i={},s={};for(let r of mi)i[r]=Math.round(Qt(se(62,90)+e*12,55,105)),s[r]=_i(8,16);return{name:n||Vi(),t:0,s,cap:i,fatigue:0,cond:2,injury:null,silk:t.silk??_i(0,sn.length-1),record:[0,0,0,0],races:0,wins:0,g1Wins:0,mockWins:0,log:[],debuted:!1}}function wh(n){if(n.debuted)return"\u30C7\u30D3\u30E5\u30FC\u6E08\u307F";let t=Math.floor(n.t/12)+1,e=(n.t+3)%12+1;return`\u7AF6\u99AC\u5B66\u6821 ${t}\u5E74\u76EE ${e}\u6708\uFF08\u6B8B\u308A${bh-n.t}\u304B\u6708\uFF09`}var al=[{id:"ride",name:"\u9A0E\u4E57\u8A13\u7DF4",desc:"\u6280\u8853\u4E2D\u5FC3",g:{tec:7,bal:2},f:14,inj:.012},{id:"whip",name:"\u6728\u99AC\u3067\u30E0\u30C1\u7DF4\u7FD2",desc:"\u30E0\u30C1\u4E2D\u5FC3",g:{whip:7,fit:1},f:10,inj:.002},{id:"bal",name:"\u30D0\u30E9\u30F3\u30B9\u7DF4\u7FD2",desc:"\u30D0\u30E9\u30F3\u30B9\u4E2D\u5FC3",g:{bal:7,tec:1},f:10,inj:.002},{id:"run",name:"\u7B4B\u30C8\u30EC\u30FB\u30E9\u30F3\u30CB\u30F3\u30B0",desc:"\u4F53\u529B\u4E2D\u5FC3",g:{fit:7,bal:1},f:15,inj:.004},{id:"study",name:"\u30EC\u30FC\u30B9\u6620\u50CF\u7814\u7A76",desc:"\u5224\u65AD\u4E2D\u5FC3",g:{jud:7,tec:1},f:4,inj:0},{id:"rest",name:"\u4F11\u990A",desc:"\u75B2\u308C\u3092\u3068\u308B",rest:35}];function Th(n){return!n.injury&&n.t%3===2}function ol(n,t,e,i){let s=n.s[t],r=n.cap[t],a=Math.max(0,(r-s)/r),o=e*i*Math.pow(a,.55)*se(.85,1.15);return s>=r&&(o=Math.random()<.15?1:0),o=Math.round(o*10)/10,n.s[t]=Math.round(Math.min(r+2,s+o)*10)/10,o}var Af=[{name:"\u6253\u64B2",months:1},{name:"\u843D\u99AC\u3057\u3066\u624B\u9996\u3092\u306D\u3093\u3056",months:1},{name:"\u9396\u9AA8\u9AA8\u6298",months:3},{name:"\u843D\u99AC\u3067\u8170\u3092\u75DB\u3081\u305F",months:2}];function Ah(n,t){let e=al.find(s=>s.id===t),i={title:e.name,gains:{},msgs:[],injury:null};if(e.g){let s=Ws[n.cond]*(n.fatigue>75?.7:1);for(let[a,o]of Object.entries(e.g))i.gains[a]=ol(n,a,o,s);n.fatigue=Qt(n.fatigue+e.f*se(.85,1.15),0,100);let r=e.inj*(1+Math.pow(n.fatigue/40,2)*1.6);Math.random()<r&&(n.injury={...Le(Af)},i.injury=n.injury),Math.random()<.12&&(n.cond=Qt(n.cond+(Math.random()<.5?1:-1),0,4))}else n.fatigue=Qt(n.fatigue-e.rest,0,100),Math.random()<.5&&(n.cond=Qt(n.cond+1,0,4),i.msgs.push("\u4F53\u8ABF\u304C\u4E0A\u304C\u3063\u305F"));return Math.random()<.05&&(n.s.jud=Math.min(n.cap.jud+2,n.s.jud+2),i.msgs.push("\u5148\u8F29\u9A0E\u624B\u304B\u3089\u30A2\u30C9\u30D0\u30A4\u30B9\u3092\u3082\u3089\u3063\u305F\uFF08\u5224\u65AD+2\uFF09")),ll(n,i),i}function Rh(n){let t={title:"\u6CBB\u7642",gains:{},msgs:[],injury:null};return n.fatigue=Qt(n.fatigue-30,0,100),ll(n,t),t}function ll(n,t){n.t++,n.injury&&!t.injury&&(n.injury.months--,n.injury.months<=0&&(t.msgs.push(`${n.injury.name}\u304C\u6CBB\u3063\u305F\uFF01`),n.injury=null)),n.t>=bh&&(t.debut=!0)}function Ch(n,t,e){let i={title:"\u6A21\u64EC\u30EC\u30FC\u30B9",gains:{},msgs:[],injury:null},s=t===1?5:t<=3?3.5:t<=e/2?2.5:1.5;for(let r of["tec","whip","bal","fit","jud"])i.gains[r]=ol(n,r,s,Ws[n.cond]);return t===1&&(n.mockWins++,i.msgs.push("\u6A21\u64EC\u30EC\u30FC\u30B9\u30671\u7740\uFF01 \u6559\u5B98\u306B\u307B\u3081\u3089\u308C\u305F")),n.fatigue=Qt(n.fatigue+18,0,100),ll(n,i),i}function Ih(n,t,e){n.races++,n.record[Math.min(t,4)-1]++,t===1&&(n.wins++,e==="G1"&&n.g1Wins++);let i=e==="G1"?1.2:e?.9:.6;for(let s of["tec","jud","whip"])ol(n,s,i,1)}var $s={name:"\u898B\u7FD2\u3044\u9A0E\u624B",s:{tec:30,whip:30,bal:30,fit:30,jud:30},silk:6,npc:!0};var Ne={Ls:500,R:160,width:26,finishU:400};Ne.P=2*Ne.Ls+2*Math.PI*Ne.R;var{Ls:dn,R:Tn,P:hs}=Ne,cs=Math.PI*Tn;function be(n,t,e={}){n=(n%hs+hs)%hs;let i,s,r,a,o,l,c=!1;if(n<dn)i=-dn/2+n,s=Tn,r=1,a=0,o=0,l=1;else if(n<dn+cs){let h=(n-dn)/Tn;c=!0,o=Math.sin(h),l=Math.cos(h),i=dn/2+Tn*o,s=Tn*l,r=Math.cos(h),a=-Math.sin(h)}else if(n<2*dn+cs)i=dn/2-(n-dn-cs),s=-Tn,r=-1,a=0,o=0,l=-1;else{let h=(n-2*dn-cs)/Tn;c=!0,o=-Math.sin(h),l=-Math.cos(h),i=-dn/2+Tn*o,s=Tn*l,r=-Math.cos(h),a=Math.sin(h)}return e.x=i+o*t,e.z=s+l*t,e.hx=r,e.hz=a,e.nx=o,e.nz=l,e.curve=c,e}function Rf(n){return n=(n%hs+hs)%hs,n>=dn&&n<dn+cs||n>=2*dn+cs}var Cf={\u9003\u3052:.927,\u5148\u884C:.913,\u5DEE\u3057:.9,\u8FFD\u8FBC:.889},If={\u9003\u3052:520,\u5148\u884C:620,\u5DEE\u3057:720,\u8FFD\u8FBC:780},Pf={\u9003\u3052:1,\u5148\u884C:1.6,\u5DEE\u3057:3.2,\u8FFD\u8FBC:4.6},Nh=16.5;function Lf(n){let t=n.h,e=n.j,i=sh[n.apt]??1,s=nh[n.cond??2],r=(16.55+.022*t.spd)*i*s,a=1100+24*t.sta;return{...n,top:r,cap:a,energy:a,accel:.42+.008*t.pow,startAccel:3+.022*t.pow,eff:(1.06-.0012*t.wis)*(1.08-.0016*e.bal),whipDv:.4+.0055*e.whip,whipCd:Math.max(.35,.7-.0035*e.fit),whipDrain:1.38-.0018*e.fit,latSpeed:n.isPlayer?1.25+.016*e.tec:.85+.011*e.tec,cruise:Cf[n.style]??.905,spurtDist:(If[n.style]??650)*se(.9,1.12)*(1.15-e.jud/400),laneWant:Pf[n.style]??2,u:0,p:0,d:0,v:0,whipT:0,whipCool:0,whips:0,finished:!1,finishTime:0,gateDelay:se(.02,.38)*(1.25-(t.wis+e.jud)/260),blocked:!1,stride:Math.random()*10,aiTimer:Math.random()*.3,aiWhipT:0,bump:0}}function Dh(n,t,e,i={}){let s=t.h,r=(s.spd*1.3+s.pow*.9+s.gut*.8+s.wis*.6+Math.min(s.sta,20+n.dist/40)*1)/4.6,a=ah(n.lv??40,r,i.blend??.6),o=(n.dist*1.13-1100)/24,l=[],c=["\u9003\u3052","\u5148\u884C","\u5148\u884C","\u5148\u884C","\u5DEE\u3057","\u5DEE\u3057","\u5DEE\u3057","\u8FFD\u8FBC","\u8FFD\u8FBC"];for(let h=0;h<e;h++){let d=h<3?se(0,5):se(-7,2),u=a+d,m={spd:Qt(u+se(-4,4),5,100),pow:Qt(u+se(-6,5),5,100),gut:Qt(u+se(-8,6),5,100),wis:Qt(u+se(-8,6),5,100),sta:Qt(Math.max(u+se(-10,6),o+se(-2,12)),5,105)},g=Qt(u*.8+se(-8,12),20,95),v={tec:g,whip:g+se(-8,8),bal:g+se(-8,8),fit:g+se(-8,8),jud:g+se(-8,8)};l.push({name:xi(),jname:Vi(),h:m,j:v,apt:Le(["A","A","A","B","B"]),cond:Le([1,2,2,2,3,3]),style:Le(c),coat:Math.floor(Math.random()*je.length),silk:sn[(h*5+3)%sn.length]})}return l}function Uh(n){let t=Ne.finishU-n.dist,e=n.specs.map((s,r)=>Lf(s)),i=e.map((s,r)=>r).sort(()=>Math.random()-.5);return e.forEach((s,r)=>{s.gate=i[r]+1,s.u=t,s.d=1.1+i[r]*1.25,s.num=i[r]+1}),{dist:n.dist,surf:n.surf,u0:t,racers:e,t:0,started:!1,countdown:3.2,finishedCount:0,order:[],player:e.find(s=>s.isPlayer)||null,events:[]}}function Ph(n,t,e){let i=n.eff*(e?n.whipDrain:1);return t<=1?n.top*1.1:Nh*Math.pow(Math.max(0,n.energy)/(t*i),.25)}function Fh(n,t,e){if(n.countdown>0){n.countdown-=t,n.countdown<=0&&(n.started=!0,n.events.push({type:"start"}));return}n.t+=t;let i=n.racers,s=n.player,r=[...i].sort((o,l)=>(l.finished?1e6-l.finishTime*100:l.p)-(o.finished?1e6-o.finishTime*100:o.p));r.forEach((o,l)=>{o.rank=l+1});let a=r[0].p;for(let o of i){let l=n.dist-o.p;if(n.t<o.gateDelay){o.v=0;continue}let c,h=o.energy/o.cap,d=o.whipT>0;if(o.finished)c=11;else if(o.isPlayer&&!o.ai)c=o.top*o.cruise,l<o.spurtDist*.9&&(c=Qt(Ph(o,l,!1),o.top*.86,o.top)),e&&e.whip&&o.whipCool<=0&&(Lh(o,n),d=!0);else{if(c=o.top*o.cruise,o.style==="\u9003\u3052"&&o.rank>1&&n.t<25&&h>.7&&(c+=.25),l<o.spurtDist){let f=l<460&&h>.04,p=Ph(o,l,f);c=Math.min(o.top*1+(f?o.whipDv:0),p),c=Math.max(c,o.top*.86),o.aiWhipT-=t,f&&o.aiWhipT<=0&&p>o.top*.97&&(Lh(o,n),o.aiWhipT=se(.45,.9),d=!0)}if(s&&!s.finished&&l<900&&!o.finished){let f=o.p-s.p;f>3?c-=.16*Math.min(1,(f-3)/8):f<-4&&f>-40&&(c+=.06)}}if(d&&o.whipT>0&&(c+=(o.isPlayer&&!o.ai?1.15:1)*o.whipDv*(o.energy>0?1:.3)+(l<400?o.h.gut*.002:0)),l<420&&!o.finished){for(let f of i)if(f!==o&&Math.abs(f.p-o.p)<1.6&&Math.abs(f.d-o.d)<2.6){c+=.12*o.h.gut/100;break}}o.energy<=0?c=Math.min(c,o.top*(.85+7e-4*o.h.gut)+(d?.15:0)):h<.12&&(c*=.95+5e-4*o.h.gut),c=Math.min(c,o.top*1.07),o.blocked=!1;for(let f of i){if(f===o)continue;let p=f.p-o.p;p>0&&p<2.7&&Math.abs(f.d-o.d)<.95&&c>f.v+.05&&(c=f.v+.05,o.blocked=!0)}let u=o.v<13?o.startAccel:c>o.v?o.accel:.9;if(o.v<c?o.v=Math.min(c,o.v+u*t):o.v=Math.max(c,o.v-u*t),o.bump>0&&(o.v-=.5*t,o.bump-=t),!o.finished){let f=o.eff*(o.whipT>0?o.whipDrain:1);o.energy-=Math.pow(o.v/Nh,4)*f*o.v*t,o.energy<0&&(o.energy=0)}o.whipT-=t,o.whipCool-=t;let m=Rf(o.u)?Tn/(Tn+o.d):1,g=o.v*t*m;o.u+=g,o.p+=g,o.stride+=o.v*t,!o.finished&&o.p>=n.dist&&(o.finished=!0,o.finishTime=n.t-(o.p-n.dist)/Math.max(1,o.v),n.finishedCount++,n.order.push(o),o.pos=n.order.length,n.events.push({type:"finish",r:o}));let v=o.d;if(o.isPlayer&&!o.ai){let f=e?e.steer:0;v=o.d+f*o.latSpeed*t}else{o.aiTimer-=t,o.aiTimer<=0&&(o.aiTimer=.25,o.laneTarget=Nf(o,n,l));let f=o.laneTarget??o.laneWant,p=o.latSpeed*(n.t<6?.5:1);v=o.d+Qt(f-o.d,-p*t,p*t)}o.d=v}for(let o=0;o<i.length;o++)for(let l=o+1;l<i.length;l++){let c=i[o],h=i[l];if(Math.abs(c.p-h.p)<2.4){let d=h.d-c.d,u=Math.abs(d);if(u<1.05){let m=(1.05-u)/2,g=d>=0?1:-1;c.d-=m*g,h.d+=m*g;for(let v of[c,h])v.bump<=0&&v.isPlayer&&n.events.push({type:"bump"}),v.bump=.25}}}for(let o of i)o.d=Qt(o.d,.7,Ne.width-1.2);if(s&&!s.finished&&n.events.length<50){let o=n.dist-s.p;for(let l of[1e3,600,400,200])o<l&&!n["m"+l]&&n.dist>l+100&&(n["m"+l]=!0,n.events.push({type:"mark",m:l}))}return a}function Lh(n,t){n.whipT=.95,n.whipCool=n.whipCd,n.whips++,n.isPlayer&&t.events.push({type:"whip"})}function Nf(n,t,e){let i=n.laneWant;if(t.t<4)return n.d;e<480&&(n.style==="\u5DEE\u3057"||n.style==="\u8FFD\u8FBC")&&(i=Math.max(n.d,3.5));let s=r=>{let a=99;for(let o of t.racers){if(o===n)continue;let l=o.p-n.p;l>-1.5&&l<6&&Math.abs(o.d-r)<1.1&&(a=Math.min(a,l))}return a};if(n.blocked||s(i)<6){let r=[n.d-1.3,n.d+1.3,n.d+2.6,n.d],a=n.d,o=-1;for(let l of r){if(l<.8||l>Ne.width-2)continue;let c=s(l)-Math.abs(l-i)*.4;c>o&&(o=c,a=l)}i=a}return i}function Oh(n,t){let e=n*t/2.4;return e<.05?"\u30CF\u30CA":e<.15?"\u30A2\u30BF\u30DE":e<.3?"\u30AF\u30D3":e<.6?"1/2":e<.85?"3/4":e<1.15?"1":e<1.4?"1 1/4":e<1.65?"1 1/2":e<1.9?"1 3/4":e<2.5?"2":e<3.5?"3":e<4.5?"4":e<6?"5":"\u5927\u5DEE"}var uu=0,zl=1,du=2;var Ji=1,fu=2,Fs=3,Li=0,Ye=1,Ve=2,Zi=0,Os=1,kl=2,Gl=3,Hl=4,pu=5;var Ki=100,mu=101,gu=102,_u=103,xu=104,vu=200,yu=201,Mu=202,Su=203,Vl=204,Wl=205,bu=206,Eu=207,wu=208,Tu=209,Au=210,Ru=211,Cu=212,Iu=213,Pu=214,fa=0,pa=1,ma=2,Ts=3,ga=4,_a=5,xa=6,va=7,Xl=0,Lu=1,Nu=2,Vn=0,$l=1,ql=2,Yl=3,Er=4,Jl=5,Zl=6,Kl=7;var jl=300,ji=301,Bs=302,Va=303,Wa=304,As=1e3,kn=1001,ya=1002,He=1003,Du=1004;var wr=1005;var on=1006,Xa=1007;var ri=1008;var hn=1009,Ql=1010,tc=1011,zs=1012,$a=1013,Nn=1014,Sn=1015,Dn=1016,qa=1017,Ya=1018,Qi=1020,ec=35902,nc=35899,ic=1021,sc=1022,Un=1023,ti=1026,ai=1027,Ja=1028,Za=1029,Ni=1030,Ka=1031;var ja=1033,Tr=33776,Ar=33777,Rr=33778,Cr=33779,Qa=35840,to=35841,eo=35842,no=35843,io=36196,so=37492,ro=37496,ao=37488,oo=37489,Ir=37490,lo=37491,co=37808,ho=37809,uo=37810,fo=37811,po=37812,mo=37813,go=37814,_o=37815,xo=37816,vo=37817,yo=37818,Mo=37819,So=37820,bo=37821,Eo=36492,wo=36494,To=36495,Ao=36283,Ro=36284,Pr=36285,Co=36286;var tr=2300,Ma=2301,ua=2302,Pl=2303,Ll=2400,Nl=2401,Dl=2402;var Uu=3200;var Io=0,Fu=1,oi="",De="srgb",er="srgb-linear",nr="linear",oe="srgb";var da=7680;var Ou=519,Bu=512,zu=513,ku=514,rc=515,Gu=516,Hu=517,ac=518,oc=519,Vu=35044;var lc="300 es",yn=2e3,Rs=2001;function Df(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Uf(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function ir(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Wu(){let n=ir("canvas");return n.style.display="block",n}var Bh={},Cs=null;function cc(...n){let t="THREE."+n.shift();Cs?Cs("log",t,...n):console.log(t,...n)}function Xu(n){let t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Nt(...n){n=Xu(n);let t="THREE."+n.shift();if(Cs)Cs("warn",t,...n);else{let e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function Dt(...n){n=Xu(n);let t="THREE."+n.shift();if(Cs)Cs("error",t,...n);else{let e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function Qs(...n){let t=n.join(" ");t in Bh||(Bh[t]=!0,Nt(...n))}function $u(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}var qu={[fa]:fa,[ma]:xa,[ga]:ga,[Ts]:_a,[pa]:pa,[xa]:ma,[va]:va,[_a]:Ts},Gn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Qe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var cl=Math.PI/180,Sa=180/Math.PI;function Lr(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Qe[n&255]+Qe[n>>8&255]+Qe[n>>16&255]+Qe[n>>24&255]+"-"+Qe[t&255]+Qe[t>>8&255]+"-"+Qe[t>>16&15|64]+Qe[t>>24&255]+"-"+Qe[e&63|128]+Qe[e>>8&255]+"-"+Qe[e>>16&255]+Qe[e>>24&255]+Qe[i&255]+Qe[i>>8&255]+Qe[i>>16&255]+Qe[i>>24&255]).toLowerCase()}function jt(n,t,e){return Math.max(t,Math.min(e,n))}function Ff(n,t){return(n%t+t)%t}function hl(n,t,e){return(1-e)*n+e*t}function Yu(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function hc(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Of(n,t){if(t.constructor===Float32Array)return n;let e=hc(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/e,-1)}function Bf(n,t){if(t.constructor===Float32Array)return n;let e=hc(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*e)}var mc=class mc{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(jt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(jt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*s+t.x,this.y=r*s+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};mc.prototype.isVector2=!0;var Yt=mc,cn=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,a,o){let l=i[s+0],c=i[s+1],h=i[s+2],d=i[s+3],u=r[a+0],m=r[a+1],g=r[a+2],v=r[a+3];if(d!==v||l!==u||c!==m||h!==g){let f=l*u+c*m+h*g+d*v;f<0&&(u=-u,m=-m,g=-g,v=-v,f=-f);let p=1-o;if(f<.9995){let M=Math.acos(f),A=Math.sin(M);p=Math.sin(p*M)/A,o=Math.sin(o*M)/A,l=l*p+u*o,c=c*p+m*o,h=h*p+g*o,d=d*p+v*o}else{l=l*p+u*o,c=c*p+m*o,h=h*p+g*o,d=d*p+v*o;let M=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=M,c*=M,h*=M,d*=M}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,s,r,a){let o=i[s],l=i[s+1],c=i[s+2],h=i[s+3],d=r[a],u=r[a+1],m=r[a+2],g=r[a+3];return t[e]=o*g+h*d+l*m-c*u,t[e+1]=l*g+h*u+c*d-o*m,t[e+2]=c*g+h*m+o*u-l*d,t[e+3]=h*g-o*d-l*u-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(s/2),d=o(r/2),u=l(i/2),m=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=u*h*d+c*m*g,this._y=c*m*d-u*h*g,this._z=c*h*g+u*m*d,this._w=c*h*d-u*m*g;break;case"YXZ":this._x=u*h*d+c*m*g,this._y=c*m*d-u*h*g,this._z=c*h*g-u*m*d,this._w=c*h*d+u*m*g;break;case"ZXY":this._x=u*h*d-c*m*g,this._y=c*m*d+u*h*g,this._z=c*h*g+u*m*d,this._w=c*h*d-u*m*g;break;case"ZYX":this._x=u*h*d-c*m*g,this._y=c*m*d+u*h*g,this._z=c*h*g-u*m*d,this._w=c*h*d+u*m*g;break;case"YZX":this._x=u*h*d+c*m*g,this._y=c*m*d+u*h*g,this._z=c*h*g-u*m*d,this._w=c*h*d-u*m*g;break;case"XZY":this._x=u*h*d-c*m*g,this._y=c*m*d-u*h*g,this._z=c*h*g+u*m*d,this._w=c*h*d+u*m*g;break;default:Nt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=i+o+d;if(u>0){let m=.5/Math.sqrt(u+1);this._w=.25/m,this._x=(h-l)*m,this._y=(r-c)*m,this._z=(a-s)*m}else if(i>o&&i>d){let m=2*Math.sqrt(1+i-o-d);this._w=(h-l)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+c)/m}else if(o>d){let m=2*Math.sqrt(1+o-i-d);this._w=(r-c)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(l+h)/m}else{let m=2*Math.sqrt(1+d-i-o);this._w=(a-s)/m,this._x=(r+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(jt(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-i*c,this._z=r*h+a*c+i*l-s*o,this._w=a*h-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let i=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},gc=class gc{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(zh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(zh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*i),h=2*(o*e-r*s),d=2*(r*i-a*e);return this.x=e+l*c+a*d-o*h,this.y=i+l*h+o*c-r*d,this.z=s+l*d+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this.z=jt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this.z=jt(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(jt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return ul.copy(this).projectOnVector(t),this.sub(ul)}reflect(t){return this.sub(ul.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(jt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};gc.prototype.isVector3=!0;var F=gc,ul=new F,zh=new cn,_c=class _c{constructor(t,e,i,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c)}set(t,e,i,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],d=i[7],u=i[2],m=i[5],g=i[8],v=s[0],f=s[3],p=s[6],M=s[1],A=s[4],b=s[7],T=s[2],w=s[5],_=s[8];return r[0]=a*v+o*M+l*T,r[3]=a*f+o*A+l*w,r[6]=a*p+o*b+l*_,r[1]=c*v+h*M+d*T,r[4]=c*f+h*A+d*w,r[7]=c*p+h*b+d*_,r[2]=u*v+m*M+g*T,r[5]=u*f+m*A+g*w,r[8]=u*p+m*b+g*_,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-i*r*h+i*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=h*a-o*c,u=o*l-h*r,m=c*r-a*l,g=e*d+i*u+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return t[0]=d*v,t[1]=(s*c-h*i)*v,t[2]=(o*i-s*a)*v,t[3]=u*v,t[4]=(h*e-s*l)*v,t[5]=(s*r-o*e)*v,t[6]=m*v,t[7]=(i*l-c*e)*v,t[8]=(a*e-i*r)*v,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return Qs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(dl.makeScale(t,e)),this}rotate(t){return Qs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(dl.makeRotation(-t)),this}translate(t,e){return Qs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(dl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};_c.prototype.isMatrix3=!0;var Ut=_c,dl=new Ut,kh=new Ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Gh=new Ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function zf(){let n={enabled:!0,workingColorSpace:er,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===oe&&(s.r=Qn(s.r),s.g=Qn(s.g),s.b=Qn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===oe&&(s.r=ws(s.r),s.g=ws(s.g),s.b=ws(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===oi?nr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[er]:{primaries:t,whitePoint:i,transfer:nr,toXYZ:kh,fromXYZ:Gh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:De},outputColorSpaceConfig:{drawingBufferColorSpace:De}},[De]:{primaries:t,whitePoint:i,transfer:oe,toXYZ:kh,fromXYZ:Gh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:De}}}),n}var Kt=zf();function Qn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ws(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var us,ba=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{us===void 0&&(us=ir("canvas")),us.width=t.width,us.height=t.height;let s=us.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=us}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=ir("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Qn(r[a]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Qn(e[i]/255)*255):e[i]=Qn(e[i]);return{data:e,width:t.width,height:t.height}}else return Nt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},kf=0,Is=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:kf++}),this.uuid=Lr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(fl(s[a].image)):r.push(fl(s[a]))}else r=fl(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function fl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?ba.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Nt("Texture: Unable to serialize Texture."),{})}var Gf=0,pl=new F,ln=class n extends Gn{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=kn,s=kn,r=on,a=ri,o=Un,l=hn,c=n.DEFAULT_ANISOTROPY,h=oi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Gf++}),this.uuid=Lr(),this.name="",this.source=new Is(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Yt(0,0),this.repeat=new Yt(1,1),this.center=new Yt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ut,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(pl).x}get height(){return this.source.getSize(pl).y}get depth(){return this.source.getSize(pl).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){Nt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Nt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==jl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case As:t.x=t.x-Math.floor(t.x);break;case kn:t.x=t.x<0?0:1;break;case ya:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case As:t.y=t.y-Math.floor(t.y);break;case kn:t.y=t.y<0?0:1;break;case ya:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};ln.DEFAULT_IMAGE=null;ln.DEFAULT_MAPPING=jl;ln.DEFAULT_ANISOTROPY=1;var xc=class xc{constructor(t=0,e=0,i=0,s=1){this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],m=l[5],g=l[9],v=l[2],f=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-v)<.01&&Math.abs(g-f)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+v)<.1&&Math.abs(g+f)<.1&&Math.abs(c+m+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let A=(c+1)/2,b=(m+1)/2,T=(p+1)/2,w=(h+u)/4,_=(d+v)/4,S=(g+f)/4;return A>b&&A>T?A<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(A),s=w/i,r=_/i):b>T?b<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),i=w/s,r=S/s):T<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),i=_/r,s=S/r),this.set(i,s,r,e),this}let M=Math.sqrt((f-g)*(f-g)+(d-v)*(d-v)+(u-h)*(u-h));return Math.abs(M)<.001&&(M=1),this.x=(f-g)/M,this.y=(d-v)/M,this.z=(u-h)/M,this.w=Math.acos((c+m+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this.z=jt(this.z,t.z,e.z),this.w=jt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this.z=jt(this.z,t,e),this.w=jt(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(jt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};xc.prototype.isVector4=!0;var ve=xc,Ea=class extends Gn{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:on,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new ve(0,0,t,e),this.scissorTest=!1,this.viewport=new ve(0,0,t,e),this.textures=[];let s=i.count;for(let r=0;r<s;r++)this.textures[r]=new ln({width:t,height:e,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:on,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Is(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},mn=class extends Ea{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},sr=class extends ln{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=He,this.minFilter=He,this.wrapR=kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var wa=class extends ln{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=He,this.minFilter=He,this.wrapR=kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Ha=class Ha{constructor(t,e,i,s,r,a,o,l,c,h,d,u,m,g,v,f){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c,h,d,u,m,g,v,f)}set(t,e,i,s,r,a,o,l,c,h,d,u,m,g,v,f){let p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=u,p[3]=m,p[7]=g,p[11]=v,p[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ha().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,i=t.elements,s=1/ds.setFromMatrixColumn(t,0).length(),r=1/ds.setFromMatrixColumn(t,1).length(),a=1/ds.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let u=a*h,m=a*d,g=o*h,v=o*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=m+g*c,e[5]=u-v*c,e[9]=-o*l,e[2]=v-u*c,e[6]=g+m*c,e[10]=a*l}else if(t.order==="YXZ"){let u=l*h,m=l*d,g=c*h,v=c*d;e[0]=u+v*o,e[4]=g*o-m,e[8]=a*c,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=m*o-g,e[6]=v+u*o,e[10]=a*l}else if(t.order==="ZXY"){let u=l*h,m=l*d,g=c*h,v=c*d;e[0]=u-v*o,e[4]=-a*d,e[8]=g+m*o,e[1]=m+g*o,e[5]=a*h,e[9]=v-u*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let u=a*h,m=a*d,g=o*h,v=o*d;e[0]=l*h,e[4]=g*c-m,e[8]=u*c+v,e[1]=l*d,e[5]=v*c+u,e[9]=m*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let u=a*l,m=a*c,g=o*l,v=o*c;e[0]=l*h,e[4]=v-u*d,e[8]=g*d+m,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=m*d+g,e[10]=u-v*d}else if(t.order==="XZY"){let u=a*l,m=a*c,g=o*l,v=o*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+v,e[5]=a*h,e[9]=m*d-g,e[2]=g*d-m,e[6]=o*h,e[10]=v*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Hf,t,Vf)}lookAt(t,e,i){let s=this.elements;return fn.subVectors(t,e),fn.lengthSq()===0&&(fn.z=1),fn.normalize(),yi.crossVectors(i,fn),yi.lengthSq()===0&&(Math.abs(i.z)===1?fn.x+=1e-4:fn.z+=1e-4,fn.normalize(),yi.crossVectors(i,fn)),yi.normalize(),Hr.crossVectors(fn,yi),s[0]=yi.x,s[4]=Hr.x,s[8]=fn.x,s[1]=yi.y,s[5]=Hr.y,s[9]=fn.y,s[2]=yi.z,s[6]=Hr.z,s[10]=fn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],d=i[5],u=i[9],m=i[13],g=i[2],v=i[6],f=i[10],p=i[14],M=i[3],A=i[7],b=i[11],T=i[15],w=s[0],_=s[4],S=s[8],L=s[12],R=s[1],N=s[5],U=s[9],H=s[13],I=s[2],q=s[6],Y=s[10],G=s[14],X=s[3],B=s[7],V=s[11],W=s[15];return r[0]=a*w+o*R+l*I+c*X,r[4]=a*_+o*N+l*q+c*B,r[8]=a*S+o*U+l*Y+c*V,r[12]=a*L+o*H+l*G+c*W,r[1]=h*w+d*R+u*I+m*X,r[5]=h*_+d*N+u*q+m*B,r[9]=h*S+d*U+u*Y+m*V,r[13]=h*L+d*H+u*G+m*W,r[2]=g*w+v*R+f*I+p*X,r[6]=g*_+v*N+f*q+p*B,r[10]=g*S+v*U+f*Y+p*V,r[14]=g*L+v*H+f*G+p*W,r[3]=M*w+A*R+b*I+T*X,r[7]=M*_+A*N+b*q+T*B,r[11]=M*S+A*U+b*Y+T*V,r[15]=M*L+A*H+b*G+T*W,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],m=t[14],g=t[3],v=t[7],f=t[11],p=t[15],M=l*m-c*u,A=o*m-c*d,b=o*u-l*d,T=a*m-c*h,w=a*u-l*h,_=a*d-o*h;return e*(v*M-f*A+p*b)-i*(g*M-f*T+p*w)+s*(g*A-v*T+p*_)-r*(g*b-v*w+f*_)}determinantAffine(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-i*(r*h-o*l)+s*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],m=t[11],g=t[12],v=t[13],f=t[14],p=t[15],M=e*o-i*a,A=e*l-s*a,b=e*c-r*a,T=i*l-s*o,w=i*c-r*o,_=s*c-r*l,S=h*v-d*g,L=h*f-u*g,R=h*p-m*g,N=d*f-u*v,U=d*p-m*v,H=u*p-m*f,I=M*H-A*U+b*N+T*R-w*L+_*S;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let q=1/I;return t[0]=(o*H-l*U+c*N)*q,t[1]=(s*U-i*H-r*N)*q,t[2]=(v*_-f*w+p*T)*q,t[3]=(u*w-d*_-m*T)*q,t[4]=(l*R-a*H-c*L)*q,t[5]=(e*H-s*R+r*L)*q,t[6]=(f*b-g*_-p*A)*q,t[7]=(h*_-u*b+m*A)*q,t[8]=(a*U-o*R+c*S)*q,t[9]=(i*R-e*U-r*S)*q,t[10]=(g*w-v*b+p*M)*q,t[11]=(d*b-h*w-m*M)*q,t[12]=(o*L-a*N-l*S)*q,t[13]=(e*N-i*L+s*S)*q,t[14]=(v*A-g*T-f*M)*q,t[15]=(h*T-d*A+u*M)*q,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+i,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,a){return this.set(1,i,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,d=o+o,u=r*c,m=r*h,g=r*d,v=a*h,f=a*d,p=o*d,M=l*c,A=l*h,b=l*d,T=i.x,w=i.y,_=i.z;return s[0]=(1-(v+p))*T,s[1]=(m+b)*T,s[2]=(g-A)*T,s[3]=0,s[4]=(m-b)*w,s[5]=(1-(u+p))*w,s[6]=(f+M)*w,s[7]=0,s[8]=(g+A)*_,s[9]=(f-M)*_,s[10]=(1-(u+v))*_,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),e.identity(),this;let a=ds.set(s[0],s[1],s[2]).length(),o=ds.set(s[4],s[5],s[6]).length(),l=ds.set(s[8],s[9],s[10]).length();r<0&&(a=-a),An.copy(this);let c=1/a,h=1/o,d=1/l;return An.elements[0]*=c,An.elements[1]*=c,An.elements[2]*=c,An.elements[4]*=h,An.elements[5]*=h,An.elements[6]*=h,An.elements[8]*=d,An.elements[9]*=d,An.elements[10]*=d,e.setFromRotationMatrix(An),i.x=a,i.y=o,i.z=l,this}makePerspective(t,e,i,s,r,a,o=yn,l=!1){let c=this.elements,h=2*r/(e-t),d=2*r/(i-s),u=(e+t)/(e-t),m=(i+s)/(i-s),g,v;if(l)g=r/(a-r),v=a*r/(a-r);else if(o===yn)g=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===Rs)g=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,r,a,o=yn,l=!1){let c=this.elements,h=2/(e-t),d=2/(i-s),u=-(e+t)/(e-t),m=-(i+s)/(i-s),g,v;if(l)g=1/(a-r),v=a/(a-r);else if(o===yn)g=-2/(a-r),v=-(a+r)/(a-r);else if(o===Rs)g=-1/(a-r),v=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}};Ha.prototype.isMatrix4=!0;var ee=Ha,ds=new F,An=new ee,Hf=new F(0,0,0),Vf=new F(1,1,1),yi=new F,Hr=new F,fn=new F,Hh=new ee,Vh=new cn,Pn=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-jt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(jt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-jt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(jt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:Nt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Hh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Hh,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Vh.setFromEuler(this),this.setFromQuaternion(Vh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Pn.DEFAULT_ORDER="XYZ";var rr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Wf=0,Wh=new F,fs=new cn,Yn=new ee,Vr=new F,qs=new F,Xf=new F,$f=new cn,Xh=new F(1,0,0),$h=new F(0,1,0),qh=new F(0,0,1),Yh={type:"added"},qf={type:"removed"},ps={type:"childadded",child:null},ml={type:"childremoved",child:null},$e=class n extends Gn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Wf++}),this.uuid=Lr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new F,e=new Pn,i=new cn,s=new F(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ee},normalMatrix:{value:new Ut}}),this.matrix=new ee,this.matrixWorld=new ee,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new rr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return fs.setFromAxisAngle(t,e),this.quaternion.multiply(fs),this}rotateOnWorldAxis(t,e){return fs.setFromAxisAngle(t,e),this.quaternion.premultiply(fs),this}rotateX(t){return this.rotateOnAxis(Xh,t)}rotateY(t){return this.rotateOnAxis($h,t)}rotateZ(t){return this.rotateOnAxis(qh,t)}translateOnAxis(t,e){return Wh.copy(t).applyQuaternion(this.quaternion),this.position.add(Wh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Xh,t)}translateY(t){return this.translateOnAxis($h,t)}translateZ(t){return this.translateOnAxis(qh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Yn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Vr.copy(t):Vr.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),qs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yn.lookAt(qs,Vr,this.up):Yn.lookAt(Vr,qs,this.up),this.quaternion.setFromRotationMatrix(Yn),s&&(Yn.extractRotation(s.matrixWorld),fs.setFromRotationMatrix(Yn),this.quaternion.premultiply(fs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Dt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Yh),ps.child=t,this.dispatchEvent(ps),ps.child=null):Dt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(qf),ml.child=t,this.dispatchEvent(ml),ml.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Yn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Yn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Yn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Yh),ps.child=t,this.dispatchEvent(ps),ps.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qs,t,Xf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qs,$f,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*s,r[13]+=i-r[1]*e-r[5]*i-r[9]*s,r[14]+=s-r[2]*e-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),d=a(t.shapes),u=a(t.skeletons),m=a(t.animations),g=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};$e.DEFAULT_UP=new F(0,1,0);$e.DEFAULT_MATRIX_AUTO_UPDATE=!0;$e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ee=class extends $e{constructor(){super(),this.isGroup=!0,this.type="Group"}},Yf={type:"move"},Ps=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ee,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ee,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ee,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let v of t.hand.values()){let f=e.getJointPose(v,i),p=this._getHandJoint(c,v);f!==null&&(p.matrix.fromArray(f.transform.matrix),p.matrix.decompose(p.position,p.quaternion,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=f.radius),p.visible=f!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),m=.02,g=.005;c.inputState.pinching&&u>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Yf)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new Ee;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},Ju={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Mi={h:0,s:0,l:0},Wr={h:0,s:0,l:0};function gl(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var qt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=De){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Kt.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=Kt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Kt.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=Kt.workingColorSpace){if(t=Ff(t,1),e=jt(e,0,1),i=jt(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=gl(a,r,t+1/3),this.g=gl(a,r,t),this.b=gl(a,r,t-1/3)}return Kt.colorSpaceToWorking(this,s),this}setStyle(t,e=De){function i(r){r!==void 0&&parseFloat(r)<1&&Nt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Nt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Nt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=De){let i=Ju[t.toLowerCase()];return i!==void 0?this.setHex(i,e):Nt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Qn(t.r),this.g=Qn(t.g),this.b=Qn(t.b),this}copyLinearToSRGB(t){return this.r=ws(t.r),this.g=ws(t.g),this.b=ws(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=De){return Kt.workingToColorSpace(tn.copy(this),t),Math.round(jt(tn.r*255,0,255))*65536+Math.round(jt(tn.g*255,0,255))*256+Math.round(jt(tn.b*255,0,255))}getHexString(t=De){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Kt.workingColorSpace){Kt.workingToColorSpace(tn.copy(this),e);let i=tn.r,s=tn.g,r=tn.b,a=Math.max(i,s,r),o=Math.min(i,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Kt.workingColorSpace){return Kt.workingToColorSpace(tn.copy(this),e),t.r=tn.r,t.g=tn.g,t.b=tn.b,t}getStyle(t=De){Kt.workingToColorSpace(tn.copy(this),t);let e=tn.r,i=tn.g,s=tn.b;return t!==De?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Mi),this.setHSL(Mi.h+t,Mi.s+e,Mi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Mi),t.getHSL(Wr);let i=hl(Mi.h,Wr.h,e),s=hl(Mi.s,Wr.s,e),r=hl(Mi.l,Wr.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},tn=new qt;qt.NAMES=Ju;var ar=class n{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new qt(t),this.near=e,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},or=class extends $e{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Pn,this.environmentIntensity=1,this.environmentRotation=new Pn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Rn=new F,Jn=new F,_l=new F,Zn=new F,ms=new F,gs=new F,Jh=new F,xl=new F,vl=new F,yl=new F,Ml=new ve,Sl=new ve,bl=new ve,wi=class n{constructor(t=new F,e=new F,i=new F){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Rn.subVectors(t,e),s.cross(Rn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){Rn.subVectors(s,e),Jn.subVectors(i,e),_l.subVectors(t,e);let a=Rn.dot(Rn),o=Rn.dot(Jn),l=Rn.dot(_l),c=Jn.dot(Jn),h=Jn.dot(_l),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let u=1/d,m=(c*l-o*h)*u,g=(a*h-o*l)*u;return r.set(1-m-g,g,m)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Zn)===null?!1:Zn.x>=0&&Zn.y>=0&&Zn.x+Zn.y<=1}static getInterpolation(t,e,i,s,r,a,o,l){return this.getBarycoord(t,e,i,s,Zn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Zn.x),l.addScaledVector(a,Zn.y),l.addScaledVector(o,Zn.z),l)}static getInterpolatedAttribute(t,e,i,s,r,a){return Ml.setScalar(0),Sl.setScalar(0),bl.setScalar(0),Ml.fromBufferAttribute(t,e),Sl.fromBufferAttribute(t,i),bl.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Ml,r.x),a.addScaledVector(Sl,r.y),a.addScaledVector(bl,r.z),a}static isFrontFacing(t,e,i,s){return Rn.subVectors(i,e),Jn.subVectors(t,e),Rn.cross(Jn).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Rn.subVectors(this.c,this.b),Jn.subVectors(this.a,this.b),Rn.cross(Jn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,a,o;ms.subVectors(s,i),gs.subVectors(r,i),xl.subVectors(t,i);let l=ms.dot(xl),c=gs.dot(xl);if(l<=0&&c<=0)return e.copy(i);vl.subVectors(t,s);let h=ms.dot(vl),d=gs.dot(vl);if(h>=0&&d<=h)return e.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0&&l-h>0)return a=l/(l-h),e.copy(i).addScaledVector(ms,a);yl.subVectors(t,r);let m=ms.dot(yl),g=gs.dot(yl);if(g>=0&&m<=g)return e.copy(r);let v=m*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(i).addScaledVector(gs,o);let f=h*g-m*d;if(f<=0&&d-h>=0&&m-g>=0)return Jh.subVectors(r,s),o=(d-h)/(d-h+(m-g)),e.copy(s).addScaledVector(Jh,o);let p=1/(f+v+u);return a=v*p,o=u*p,e.copy(i).addScaledVector(ms,a).addScaledVector(gs,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Hn=class{constructor(t=new F(1/0,1/0,1/0),e=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Cn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Cn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=Cn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Cn):Cn.fromBufferAttribute(r,a),Cn.applyMatrix4(t.matrixWorld),this.expandByPoint(Cn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Xr.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Xr.copy(i.boundingBox)),Xr.applyMatrix4(t.matrixWorld),this.union(Xr)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Cn),Cn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ys),$r.subVectors(this.max,Ys),_s.subVectors(t.a,Ys),xs.subVectors(t.b,Ys),vs.subVectors(t.c,Ys),Si.subVectors(xs,_s),bi.subVectors(vs,xs),Xi.subVectors(_s,vs);let e=[0,-Si.z,Si.y,0,-bi.z,bi.y,0,-Xi.z,Xi.y,Si.z,0,-Si.x,bi.z,0,-bi.x,Xi.z,0,-Xi.x,-Si.y,Si.x,0,-bi.y,bi.x,0,-Xi.y,Xi.x,0];return!El(e,_s,xs,vs,$r)||(e=[1,0,0,0,1,0,0,0,1],!El(e,_s,xs,vs,$r))?!1:(qr.crossVectors(Si,bi),e=[qr.x,qr.y,qr.z],El(e,_s,xs,vs,$r))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Cn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Cn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Kn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Kn=[new F,new F,new F,new F,new F,new F,new F,new F],Cn=new F,Xr=new Hn,_s=new F,xs=new F,vs=new F,Si=new F,bi=new F,Xi=new F,Ys=new F,$r=new F,qr=new F,$i=new F;function El(n,t,e,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){$i.fromArray(n,r);let o=s.x*Math.abs($i.x)+s.y*Math.abs($i.y)+s.z*Math.abs($i.z),l=t.dot($i),c=e.dot($i),h=i.dot($i);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Ce=new F,Yr=new Yt,Jf=0,an=class extends Gn{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Jf++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Vu,this.updateRanges=[],this.gpuType=Sn,this.version=0,this._normalizationScale=t!==void 0?hc(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Yr.fromBufferAttribute(this,e),Yr.applyMatrix3(t),this.setXY(e,Yr.x,Yr.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Ce.fromBufferAttribute(this,e),Ce.applyMatrix3(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Ce.fromBufferAttribute(this,e),Ce.applyMatrix4(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ce.fromBufferAttribute(this,e),Ce.applyNormalMatrix(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ce.fromBufferAttribute(this,e),Ce.transformDirection(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=this._denormalize(i)),i}setComponent(t,e,i){return this.normalized&&(i=this._normalize(i)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Of(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):Bf(t,this.array)}};var lr=class extends an{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var cr=class extends an{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var re=class extends an{constructor(t,e,i){super(new Float32Array(t),e,i)}},Zf=new Hn,Js=new F,wl=new F,ei=class{constructor(t=new F,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):Zf.setFromPoints(t).getCenter(i);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Js.subVectors(t,this.center);let e=Js.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Js,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(wl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Js.copy(t.center).add(wl)),this.expandByPoint(Js.copy(t.center).sub(wl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Kf=0,vn=new ee,Tl=new $e,ys=new F,pn=new Hn,Zs=new Hn,Ge=new F,Ue=class n extends Gn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Kf++}),this.uuid=Lr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Df(t)?cr:lr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Ut().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return vn.makeRotationFromQuaternion(t),this.applyMatrix4(vn),this}rotateX(t){return vn.makeRotationX(t),this.applyMatrix4(vn),this}rotateY(t){return vn.makeRotationY(t),this.applyMatrix4(vn),this}rotateZ(t){return vn.makeRotationZ(t),this.applyMatrix4(vn),this}translate(t,e,i){return vn.makeTranslation(t,e,i),this.applyMatrix4(vn),this}scale(t,e,i){return vn.makeScale(t,e,i),this.applyMatrix4(vn),this}lookAt(t){return Tl.lookAt(t),Tl.updateMatrix(),this.applyMatrix4(Tl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ys).negate(),this.translate(ys.x,ys.y,ys.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new re(i,3))}else{let i=Math.min(t.length,e.count);for(let s=0;s<i;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Nt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Hn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Dt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];pn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ge.addVectors(this.boundingBox.min,pn.min),this.boundingBox.expandByPoint(Ge),Ge.addVectors(this.boundingBox.max,pn.max),this.boundingBox.expandByPoint(Ge)):(this.boundingBox.expandByPoint(pn.min),this.boundingBox.expandByPoint(pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Dt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ei);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Dt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(t){let i=this.boundingSphere.center;if(pn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Zs.setFromBufferAttribute(o),this.morphTargetsRelative?(Ge.addVectors(pn.min,Zs.min),pn.expandByPoint(Ge),Ge.addVectors(pn.max,Zs.max),pn.expandByPoint(Ge)):(pn.expandByPoint(Zs.min),pn.expandByPoint(Zs.max))}pn.getCenter(i);let s=0;for(let r=0,a=t.count;r<a;r++)Ge.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Ge));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ge.fromBufferAttribute(o,c),l&&(ys.fromBufferAttribute(t,c),Ge.add(ys)),s=Math.max(s,i.distanceToSquared(Ge))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Dt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Dt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new an(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let o=[],l=[],c=new Uint8Array(i.count);for(let L=0;L<i.count;L++)o[L]=new F,l[L]=new F;let h=new F,d=new F,u=new F,m=new Yt,g=new Yt,v=new Yt,f=new F,p=new F;function M(L,R,N){c[L]=c[R]=c[N]=1,h.fromBufferAttribute(i,L),d.fromBufferAttribute(i,R),u.fromBufferAttribute(i,N),m.fromBufferAttribute(r,L),g.fromBufferAttribute(r,R),v.fromBufferAttribute(r,N),d.sub(h),u.sub(h),g.sub(m),v.sub(m);let U=1/(g.x*v.y-v.x*g.y);isFinite(U)&&(f.copy(d).multiplyScalar(v.y).addScaledVector(u,-g.y).multiplyScalar(U),p.copy(u).multiplyScalar(g.x).addScaledVector(d,-v.x).multiplyScalar(U),o[L].add(f),o[R].add(f),o[N].add(f),l[L].add(p),l[R].add(p),l[N].add(p))}let A=this.groups;A.length===0&&(A=[{start:0,count:t.count}]);for(let L=0,R=A.length;L<R;++L){let N=A[L],U=N.start,H=N.count;for(let I=U,q=U+H;I<q;I+=3)M(t.getX(I+0),t.getX(I+1),t.getX(I+2))}let b=new F,T=new F,w=new F,_=new F;function S(L){w.fromBufferAttribute(s,L),_.copy(w);let R=o[L];b.copy(R),b.sub(w.multiplyScalar(w.dot(R))).normalize(),T.crossVectors(_,R);let U=T.dot(l[L])<0?-1:1;a.setXYZW(L,b.x,b.y,b.z,U)}for(let L=0,R=i.count;L<R;++L)c[L]&&S(L);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new an(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let u=0,m=i.count;u<m;u++)i.setXYZ(u,0,0,0);let s=new F,r=new F,a=new F,o=new F,l=new F,c=new F,h=new F,d=new F;if(t)for(let u=0,m=t.count;u<m;u+=3){let g=t.getX(u+0),v=t.getX(u+1),f=t.getX(u+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,v),a.fromBufferAttribute(e,f),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,f),o.add(h),l.add(h),c.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(f,c.x,c.y,c.z)}else for(let u=0,m=e.count;u<m;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ge.fromBufferAttribute(t,e),Ge.normalize(),t.setXYZ(e,Ge.x,Ge.y,Ge.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h),m=0,g=0;for(let v=0,f=l.length;v<f;v++){o.isInterleavedBufferAttribute?m=l[v]*o.data.stride+o.offset:m=l[v]*h;for(let p=0;p<h;p++)u[g++]=c[m++]}return new an(u,h,d)}if(this.index===null)return Nt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,i);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){let u=c[h],m=t(u,i);l.push(m)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let m=c[d];h.push(m.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,m=d.length;u<m;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Al=new F,jf=new F,Qf=new Ut,In=class{constructor(t=new F(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=Al.subVectors(i,e).cross(jf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let s=t.delta(Al),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||Qf.getNormalMatrix(t),s=this.coplanarPoint(Al).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},tp=0,ni=class extends Gn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:tp++}),this.uuid=Lr(),this.name="",this.type="Material",this.blending=Os,this.side=Li,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Vl,this.blendDst=Wl,this.blendEquation=Ki,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qt(0,0,0),this.blendAlpha=0,this.depthFunc=Ts,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ou,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=da,this.stencilZFail=da,this.stencilZPass=da,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){Nt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Nt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new qt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new In().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Yt().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Yt().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var jn=new F,Rl=new F,Jr=new F,Zr=new F,hr=class{constructor(t=new F,e=new F(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,jn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=jn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(jn.copy(this.origin).addScaledVector(this.direction,e),jn.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){Rl.copy(t).add(e).multiplyScalar(.5),Jr.copy(e).sub(t).normalize(),Zr.copy(this.origin).sub(Rl);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Jr),o=Zr.dot(this.direction),l=-Zr.dot(Jr),c=Zr.lengthSq(),h=Math.abs(1-a*a),d,u,m,g;if(h>0)if(d=a*l-o,u=a*o-l,g=r*h,d>=0)if(u>=-g)if(u<=g){let v=1/h;d*=v,u*=v,m=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=r,d=Math.max(0,-(a*u+o)),m=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(a*u+o)),m=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-l),r),m=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-r,-l),r),m=u*(u+2*l)+c):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-l),r),m=-d*d+u*(u+2*l)+c);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),m=-d*d+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Rl).addScaledVector(Jr,u),m}intersectSphere(t,e){if(t.radius<0)return null;jn.subVectors(t.center,this.origin);let i=jn.dot(this.direction),s=jn.dot(jn)-i*i,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(i=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(i=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,jn)!==null}intersectTriangle(t,e,i,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,d=t.x-a.x,u=t.y-a.y,m=t.z-a.z,g=e.x-a.x,v=e.y-a.y,f=e.z-a.z,p=i.x-a.x,M=i.y-a.y,A=i.z-a.z,b=Math.abs(l),T=Math.abs(c),w=Math.abs(h),_,S,L,R,N,U,H,I,q,Y,G,X;if(b>=T&&b>=w?(L=l,U=d,q=g,X=p,l>=0?(_=c,S=h,R=u,N=m,H=v,I=f,Y=M,G=A):(_=h,S=c,R=m,N=u,H=f,I=v,Y=A,G=M)):T>=w?(L=c,U=u,q=v,X=M,c>=0?(_=h,S=l,R=m,N=d,H=f,I=g,Y=A,G=p):(_=l,S=h,R=d,N=m,H=g,I=f,Y=p,G=A)):(L=h,U=m,q=f,X=A,h>=0?(_=l,S=c,R=d,N=u,H=g,I=v,Y=p,G=M):(_=c,S=l,R=u,N=d,H=v,I=g,Y=M,G=p)),L===0)return null;let B=_/L,V=S/L,W=1/L,rt=R-B*U,Et=N-V*U,J=H-B*q,it=I-V*q,mt=Y-B*X,wt=G-V*X,et=mt*it-wt*J,Rt=rt*wt-Et*mt,ce=J*Et-it*rt;if(s){if(et<0||Rt<0||ce<0)return null}else if((et<0||Rt<0||ce<0)&&(et>0||Rt>0||ce>0))return null;let Ct=et+Rt+ce;if(Ct===0)return null;let ne=W*(et*U+Rt*q+ce*X);return(Ct>0?ne<0:ne>0)?null:this.at(ne/Ct,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ln=class extends ni{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pn,this.combine=Xl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Zh=new ee,qi=new hr,Kr=new ei,Kh=new F,jr=new F,Qr=new F,ta=new F,Cl=new F,ea=new F,jh=new F,na=new F,yt=class extends $e{constructor(t=new Ue,e=new Ln){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){ea.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],d=r[l];h!==0&&(Cl.fromBufferAttribute(d,t),a?ea.addScaledVector(Cl,h):ea.addScaledVector(Cl.sub(e),h))}e.add(ea)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Kr.copy(i.boundingSphere),Kr.applyMatrix4(r),qi.copy(t.ray).recast(t.near),!(Kr.containsPoint(qi.origin)===!1&&(qi.intersectSphere(Kr,Kh)===null||qi.origin.distanceToSquared(Kh)>(t.far-t.near)**2))&&(Zh.copy(r).invert(),qi.copy(t.ray).applyMatrix4(Zh),!(i.boundingBox!==null&&qi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,qi)))}_computeIntersections(t,e,i){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=u.length;g<v;g++){let f=u[g],p=a[f.materialIndex],M=Math.max(f.start,m.start),A=Math.min(o.count,Math.min(f.start+f.count,m.start+m.count));for(let b=M,T=A;b<T;b+=3){let w=o.getX(b),_=o.getX(b+1),S=o.getX(b+2);s=ia(this,p,t,i,c,h,d,w,_,S),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=f.materialIndex,e.push(s))}}else{let g=Math.max(0,m.start),v=Math.min(o.count,m.start+m.count);for(let f=g,p=v;f<p;f+=3){let M=o.getX(f),A=o.getX(f+1),b=o.getX(f+2);s=ia(this,a,t,i,c,h,d,M,A,b),s&&(s.faceIndex=Math.floor(f/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=u.length;g<v;g++){let f=u[g],p=a[f.materialIndex],M=Math.max(f.start,m.start),A=Math.min(l.count,Math.min(f.start+f.count,m.start+m.count));for(let b=M,T=A;b<T;b+=3){let w=b,_=b+1,S=b+2;s=ia(this,p,t,i,c,h,d,w,_,S),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=f.materialIndex,e.push(s))}}else{let g=Math.max(0,m.start),v=Math.min(l.count,m.start+m.count);for(let f=g,p=v;f<p;f+=3){let M=f,A=f+1,b=f+2;s=ia(this,a,t,i,c,h,d,M,A,b),s&&(s.faceIndex=Math.floor(f/3),e.push(s))}}}};function ep(n,t,e,i,s,r,a,o){let l;if(t.side===Ye?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,t.side===Li,o),l===null)return null;na.copy(o),na.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(na);return c<e.near||c>e.far?null:{distance:c,point:na.clone(),object:n}}function ia(n,t,e,i,s,r,a,o,l,c){n.getVertexPosition(o,jr),n.getVertexPosition(l,Qr),n.getVertexPosition(c,ta);let h=ep(n,t,e,i,jr,Qr,ta,jh);if(h){let d=new F;wi.getBarycoord(jh,jr,Qr,ta,d),s&&(h.uv=wi.getInterpolatedAttribute(s,o,l,c,d,new Yt)),r&&(h.uv1=wi.getInterpolatedAttribute(r,o,l,c,d,new Yt)),a&&(h.normal=wi.getInterpolatedAttribute(a,o,l,c,d,new F),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new F,materialIndex:0};wi.getNormal(jr,Qr,ta,u.normal),h.face=u,h.barycoord=d}return h}var ur=class extends ln{constructor(t=null,e=1,i=1,s,r,a,o,l,c=He,h=He,d,u){super(null,a,o,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ls=class extends an{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Ms=new ee,Qh=new ee,sa=[],tu=new Hn,np=new ee,Ks=new yt,js=new ei,Ti=class extends yt{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ls(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,np)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Hn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Ms),tu.copy(t.boundingBox).applyMatrix4(Ms),this.boundingBox.union(tu)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ei),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Ms),js.copy(t.boundingSphere).applyMatrix4(Ms),this.boundingSphere.union(js)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,a=t*r+1;for(let o=0;o<i.length;o++)i[o]=s[a+o]}raycast(t,e){let i=this.matrixWorld,s=this.count;if(Ks.geometry=this.geometry,Ks.material=this.material,Ks.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),js.copy(this.boundingSphere),js.applyMatrix4(i),t.ray.intersectsSphere(js)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ms),Qh.multiplyMatrices(i,Ms),Ks.matrixWorld=Qh,Ks.raycast(t,sa);for(let a=0,o=sa.length;a<o;a++){let l=sa[a];l.instanceId=r,l.object=this,e.push(l)}sa.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Ls(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new ur(new Float32Array(s*this.count),s,this.count,Ja,Sn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<i.length;c++)a+=i[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;return r[l]=o,r.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Yi=new ei,ip=new Yt(.5,.5),ra=new F,Ai=class{constructor(t=new In,e=new In,i=new In,s=new In,r=new In,a=new In){this.planes=[t,e,i,s,r,a]}set(t,e,i,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=yn,i=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],m=r[7],g=r[8],v=r[9],f=r[10],p=r[11],M=r[12],A=r[13],b=r[14],T=r[15];if(s[0].setComponents(c-a,m-h,p-g,T-M).normalize(),s[1].setComponents(c+a,m+h,p+g,T+M).normalize(),s[2].setComponents(c+o,m+d,p+v,T+A).normalize(),s[3].setComponents(c-o,m-d,p-v,T-A).normalize(),i)s[4].setComponents(l,u,f,b).normalize(),s[5].setComponents(c-l,m-u,p-f,T-b).normalize();else if(s[4].setComponents(c-l,m-u,p-f,T-b).normalize(),e===yn)s[5].setComponents(c+l,m+u,p+f,T+b).normalize();else if(e===Rs)s[5].setComponents(l,u,f,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Yi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Yi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Yi)}intersectsSprite(t){Yi.center.set(0,0,0);let e=ip.distanceTo(t.center);return Yi.radius=.7071067811865476+e,Yi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Yi)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(ra.x=s.normal.x>0?t.max.x:t.min.x,ra.y=s.normal.y>0?t.max.y:t.min.y,ra.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ra)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},eu=new ee,Ta=class n{constructor(){this.coordinateSystem=yn,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,i=this._frustums;for(let s=0;s<e.length;s++){let r=e[s];eu.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[s]===void 0&&(i[s]=new Ai),i[s].setFromProjectionMatrix(eu,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,i=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new Ai),e[s].copy(i[s]);return this._count=t._count,this}clone(){return new n().copy(this)}};var Ns=class extends ni{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new qt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},nu=new ee,Ul=new hr,aa=new ei,oa=new F,dr=class extends $e{constructor(t=new Ue,e=new Ns){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),aa.copy(i.boundingSphere),aa.applyMatrix4(s),aa.radius+=r,t.ray.intersectsSphere(aa)===!1)return;nu.copy(s).invert(),Ul.copy(t.ray).applyMatrix4(nu);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,d=i.attributes.position;if(c!==null){let u=Math.max(0,a.start),m=Math.min(c.count,a.start+a.count);for(let g=u,v=m;g<v;g++){let f=c.getX(g);oa.fromBufferAttribute(d,f),iu(oa,f,l,s,t,e,this)}}else{let u=Math.max(0,a.start),m=Math.min(d.count,a.start+a.count);for(let g=u,v=m;g<v;g++)oa.fromBufferAttribute(d,g),iu(oa,g,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function iu(n,t,e,i,s,r,a){let o=Ul.distanceSqToPoint(n);if(o<e){let l=new F;Ul.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var fr=class extends ln{constructor(t=[],e=ji,i,s,r,a,o,l,c,h){super(t,e,i,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Ri=class extends ln{constructor(t,e,i,s,r,a,o,l,c){super(t,e,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ii=class extends ln{constructor(t,e,i=Nn,s,r,a,o=He,l=He,c,h=ti,d=1){if(h!==ti&&h!==ai)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:d};super(u,s,r,a,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Is(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},pr=class extends ii{constructor(t,e=Nn,i=ji,s,r,a=He,o=He,l,c=ti){let h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,i,s,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},mr=class extends ln{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Ie=class n extends Ue{constructor(t=1,e=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],d=[],u=0,m=0;g("z","y","x",-1,-1,i,e,t,a,r,0),g("z","y","x",1,-1,i,e,-t,a,r,1),g("x","z","y",1,1,t,i,e,s,a,2),g("x","z","y",1,-1,t,i,-e,s,a,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new re(c,3)),this.setAttribute("normal",new re(h,3)),this.setAttribute("uv",new re(d,2));function g(v,f,p,M,A,b,T,w,_,S,L){let R=b/_,N=T/S,U=b/2,H=T/2,I=w/2,q=_+1,Y=S+1,G=0,X=0,B=new F;for(let V=0;V<Y;V++){let W=V*N-H;for(let rt=0;rt<q;rt++){let Et=rt*R-U;B[v]=Et*M,B[f]=W*A,B[p]=I,c.push(B.x,B.y,B.z),B[v]=0,B[f]=0,B[p]=w>0?1:-1,h.push(B.x,B.y,B.z),d.push(rt/_),d.push(1-V/S),G+=1}}for(let V=0;V<S;V++)for(let W=0;W<_;W++){let rt=u+W+q*V,Et=u+W+q*(V+1),J=u+(W+1)+q*(V+1),it=u+(W+1)+q*V;l.push(rt,Et,it),l.push(Et,J,it),X+=6}o.addGroup(m,X,L),m+=X,u+=G}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},gr=class n extends Ue{constructor(t=1,e=1,i=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:i,radialSegments:s,heightSegments:r},e=Math.max(0,e),i=Math.max(1,Math.floor(i)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let a=[],o=[],l=[],c=[],h=e/2,d=Math.PI/2*t,u=e,m=2*d+u,g=i*2+r,v=s+1,f=new F,p=new F;for(let M=0;M<=g;M++){let A=0,b=0,T=0,w=0;if(M<=i){let L=M/i,R=L*Math.PI/2;b=-h-t*Math.cos(R),T=t*Math.sin(R),w=-t*Math.cos(R),A=L*d}else if(M<=i+r){let L=(M-i)/r;b=-h+L*e,T=t,w=0,A=d+L*u}else{let L=(M-i-r)/i,R=L*Math.PI/2;b=h+t*Math.sin(R),T=t*Math.cos(R),w=t*Math.sin(R),A=d+u+L*d}let _=Math.max(0,Math.min(1,A/m)),S=0;M===0?S=.5/s:M===g&&(S=-.5/s);for(let L=0;L<=s;L++){let R=L/s,N=R*Math.PI*2,U=Math.sin(N),H=Math.cos(N);p.x=-T*H,p.y=b,p.z=T*U,o.push(p.x,p.y,p.z),f.set(-T*H,w,T*U),f.normalize(),l.push(f.x,f.y,f.z),c.push(R+S,_)}if(M>0){let L=(M-1)*v;for(let R=0;R<s;R++){let N=L+R,U=L+R+1,H=M*v+R,I=M*v+R+1;a.push(N,U,H),a.push(U,I,H)}}}this.setIndex(a),this.setAttribute("position",new re(o,3)),this.setAttribute("normal",new re(l,3)),this.setAttribute("uv",new re(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},Ds=class n extends Ue{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],l=[],c=new F,h=new Yt;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=e;d++,u+=3){let m=i+d/e*s;c.x=t*Math.cos(m),c.y=t*Math.sin(m),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[u]/t+1)/2,h.y=(a[u+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new re(a,3)),this.setAttribute("normal",new re(o,3)),this.setAttribute("uv",new re(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.segments,t.thetaStart,t.thetaLength)}},we=class n extends Ue{constructor(t=1,e=1,i=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],m=[],g=0,v=[],f=i/2,p=0;M(),a===!1&&(t>0&&A(!0),e>0&&A(!1)),this.setIndex(h),this.setAttribute("position",new re(d,3)),this.setAttribute("normal",new re(u,3)),this.setAttribute("uv",new re(m,2));function M(){let b=new F,T=new F,w=0,_=(e-t)/i;for(let S=0;S<=r;S++){let L=[],R=S/r,N=R*(e-t)+t;for(let U=0;U<=s;U++){let H=U/s,I=H*l+o,q=Math.sin(I),Y=Math.cos(I);T.x=N*q,T.y=-R*i+f,T.z=N*Y,d.push(T.x,T.y,T.z),b.set(q,_,Y).normalize(),u.push(b.x,b.y,b.z),m.push(H,1-R),L.push(g++)}v.push(L)}for(let S=0;S<s;S++)for(let L=0;L<r;L++){let R=v[L][S],N=v[L+1][S],U=v[L+1][S+1],H=v[L][S+1];(t>0||L!==0)&&(h.push(R,N,H),w+=3),(e>0||L!==r-1)&&(h.push(N,U,H),w+=3)}c.addGroup(p,w,0),p+=w}function A(b){let T=g,w=new Yt,_=new F,S=0,L=b===!0?t:e,R=b===!0?1:-1;for(let U=1;U<=s;U++)d.push(0,f*R,0),u.push(0,R,0),m.push(.5,.5),g++;let N=g;for(let U=0;U<=s;U++){let I=U/s*l+o,q=Math.cos(I),Y=Math.sin(I);_.x=L*Y,_.y=f*R,_.z=L*q,d.push(_.x,_.y,_.z),u.push(0,R,0),w.x=q*.5+.5,w.y=Y*.5*R+.5,m.push(w.x,w.y),g++}for(let U=0;U<s;U++){let H=T+U,I=N+U;b===!0?h.push(I,I+1,H):h.push(I+1,I,H),S+=3}c.addGroup(p,S,b===!0?1:2),p+=S}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},si=class n extends we{constructor(t=1,e=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,i,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new n(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var qe=class n extends Ue{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(i),l=Math.floor(s),c=o+1,h=l+1,d=t/o,u=e/l,m=[],g=[],v=[],f=[];for(let p=0;p<h;p++){let M=p*u-a;for(let A=0;A<c;A++){let b=A*d-r;g.push(b,-M,0),v.push(0,0,1),f.push(A/o),f.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<o;M++){let A=M+c*p,b=M+c*(p+1),T=M+1+c*(p+1),w=M+1+c*p;m.push(A,b,w),m.push(b,T,w)}this.setIndex(m),this.setAttribute("position",new re(g,3)),this.setAttribute("normal",new re(v,3)),this.setAttribute("uv",new re(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}};var Fe=class n extends Ue{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),c=0,h=[],d=new F,u=new F,m=[],g=[],v=[],f=[];for(let p=0;p<=i;p++){let M=[],A=p/i,b=a+A*o,T=t*Math.cos(b),w=Math.sqrt(t*t-T*T),_=0;p===0&&a===0?_=.5/e:p===i&&l===Math.PI&&(_=-.5/e);for(let S=0;S<=e;S++){let L=S/e,R=s+L*r;d.x=-w*Math.cos(R),d.y=T,d.z=w*Math.sin(R),g.push(d.x,d.y,d.z),u.copy(d).normalize(),v.push(u.x,u.y,u.z),f.push(L+_,1-A),M.push(c++)}h.push(M)}for(let p=0;p<i;p++)for(let M=0;M<e;M++){let A=h[p][M+1],b=h[p][M],T=h[p+1][M],w=h[p+1][M+1];(p!==0||a>0)&&m.push(A,b,w),(p!==i-1||l<Math.PI)&&m.push(b,T,w)}this.setIndex(m),this.setAttribute("position",new re(g,3)),this.setAttribute("normal",new re(v,3)),this.setAttribute("uv",new re(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var _r=class n extends Ue{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},i=Math.floor(i),s=Math.floor(s);let l=[],c=[],h=[],d=[],u=new F,m=new F,g=new F;for(let v=0;v<=i;v++){let f=a+v/i*o;for(let p=0;p<=s;p++){let M=p/s*r;m.x=(t+e*Math.cos(f))*Math.cos(M),m.y=(t+e*Math.cos(f))*Math.sin(M),m.z=e*Math.sin(f),c.push(m.x,m.y,m.z),u.x=t*Math.cos(M),u.y=t*Math.sin(M),g.subVectors(m,u).normalize(),h.push(g.x,g.y,g.z),d.push(p/s),d.push(v/i)}}for(let v=1;v<=i;v++)for(let f=1;f<=s;f++){let p=(s+1)*v+f-1,M=(s+1)*(v-1)+f-1,A=(s+1)*(v-1)+f,b=(s+1)*v+f;l.push(p,M,b),l.push(M,A,b)}this.setIndex(l),this.setAttribute("position",new re(c,3)),this.setAttribute("normal",new re(h,3)),this.setAttribute("uv",new re(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function ts(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];if(su(s))s.isRenderTargetTexture?(Nt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone();else if(Array.isArray(s))if(su(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][i]=r}else t[e][i]=s.slice();else t[e][i]=s}}return t}function en(n){let t={};for(let e=0;e<n.length;e++){let i=ts(n[e]);for(let s in i)t[s]=i[s]}return t}function su(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function sp(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function uc(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Kt.workingColorSpace}var Zu={clone:ts,merge:en},rp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ap=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Mn=class extends ni{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=rp,this.fragmentShader=ap,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ts(t.uniforms),this.uniformsGroups=sp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=e[s.value]||null;break;case"c":this.uniforms[i].value=new qt().setHex(s.value);break;case"v2":this.uniforms[i].value=new Yt().fromArray(s.value);break;case"v3":this.uniforms[i].value=new F().fromArray(s.value);break;case"v4":this.uniforms[i].value=new ve().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Ut().fromArray(s.value);break;case"m4":this.uniforms[i].value=new ee().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Aa=class extends Mn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Ht=class extends ni{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new qt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Io,this.normalScale=new Yt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Ra=class extends ni{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Uu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Ca=class extends ni{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Ss(n,t){return!n||n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function la(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var Ci=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=e[++i],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=e[--i-1],t>=r)break t}a=i,i=0;break e}break n}for(;i<a;){let o=i+a>>>1;t<e[o]?a=o:i=o+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=i[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Ia=class extends Ci{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ll,endingEnd:Ll}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Nl:r=t,o=2*e-i;break;case Dl:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Nl:a=t,l=2*i-e;break;case Dl:a=1,l=i+s[1]-s[0];break;default:a=t-1,l=e}let c=(i-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,m=this._weightNext,g=(i-e)/(s-e),v=g*g,f=v*g,p=-u*f+2*u*v-u*g,M=(1+u)*f+(-1.5-2*u)*v+(-.5+u)*g+1,A=(-1-m)*f+(1.5+m)*v+.5*g,b=m*f-m*v;for(let T=0;T!==o;++T)r[T]=p*a[h+T]+M*a[c+T]+A*a[l+T]+b*a[d+T];return r}},Pa=class extends Ci{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(i-e)/(s-e),d=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*d+a[l+u]*h;return r}},La=class extends Ci{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Na=class extends Ci{interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this.inTangents,d=this.outTangents;if(!h||!d){let g=(i-e)/(s-e),v=1-g;for(let f=0;f!==o;++f)r[f]=a[c+f]*v+a[l+f]*g;return r}let u=o*2,m=t-1;for(let g=0;g!==o;++g){let v=a[c+g],f=a[l+g],p=m*u+g*2,M=d[p],A=d[p+1],b=t*u+g*2,T=h[b],w=h[b+1],_=lp(i,e,M,T,s);r[g]=Ku(_,v,A,w,f)}return r}};function Ku(n,t,e,i,s){let r=1-n;return r*r*r*t+3*r*r*n*e+3*r*n*n*i+n*n*n*s}function op(n,t,e,i,s){let r=1-n;return 3*r*r*(e-t)+6*r*n*(i-e)+3*n*n*(s-i)}function lp(n,t,e,i,s){let r=(n-t)/(s-t);for(let a=0;a<8;a++){let o=Ku(r,t,e,i,s)-n;if(Math.abs(o)<1e-10)break;let l=op(r,t,e,i,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var gn=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ss(e,this.TimeBufferType),this.values=Ss(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Ss(t.times,Array),values:Ss(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s),la(t.settings)&&(i.settings={inTangents:Ss(t.settings.inTangents,Array),outTangents:Ss(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new La(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Pa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Ia(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Na(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case tr:e=this.InterpolantFactoryMethodDiscrete;break;case Ma:e=this.InterpolantFactoryMethodLinear;break;case ua:e=this.InterpolantFactoryMethodSmooth;break;case Pl:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Nt("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return tr;case this.InterpolantFactoryMethodLinear:return Ma;case this.InterpolantFactoryMethodSmooth:return ua;case this.InterpolantFactoryMethodBezier:return Pl}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t;la(this.settings)&&(ru(this.settings.inTangents,t),ru(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t;la(this.settings)&&(au(this.settings.inTangents,t),au(this.settings.outTangents,t))}return this}trim(t,e){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<t;)++r;for(;a!==-1&&i[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Dt("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(Dt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){Dt("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){Dt("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&Uf(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Dt("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===ua,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let d=o*i,u=d-i,m=d+i;for(let g=0;g!==i;++g){let v=e[d+g];if(v!==e[u+g]||v!==e[m+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let d=o*i,u=a*i;for(let m=0;m!==i;++m)e[u+m]=e[d+m]}++a}}if(r>0){t[a]=t[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,la(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function ru(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]+=t}function au(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]*=t}gn.prototype.ValueTypeName="";gn.prototype.TimeBufferType=Float32Array;gn.prototype.ValueBufferType=Float32Array;gn.prototype.DefaultInterpolation=Ma;var Ii=class extends gn{constructor(t,e,i){super(t,e,i)}};Ii.prototype.ValueTypeName="bool";Ii.prototype.ValueBufferType=Array;Ii.prototype.DefaultInterpolation=tr;Ii.prototype.InterpolantFactoryMethodLinear=void 0;Ii.prototype.InterpolantFactoryMethodSmooth=void 0;var Da=class extends gn{constructor(t,e,i,s){super(t,e,i,s)}};Da.prototype.ValueTypeName="color";var Ua=class extends gn{constructor(t,e,i,s){super(t,e,i,s)}};Ua.prototype.ValueTypeName="number";var Fa=class extends Ci{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)cn.slerpFlat(r,0,a,c-o,a,c,l);return r}},xr=class extends gn{constructor(t,e,i,s){super(t,e,i,s)}InterpolantFactoryMethodLinear(t){return new Fa(this.times,this.values,this.getValueSize(),t)}};xr.prototype.ValueTypeName="quaternion";xr.prototype.InterpolantFactoryMethodSmooth=void 0;var Pi=class extends gn{constructor(t,e,i){super(t,e,i)}};Pi.prototype.ValueTypeName="string";Pi.prototype.ValueBufferType=Array;Pi.prototype.DefaultInterpolation=tr;Pi.prototype.InterpolantFactoryMethodLinear=void 0;Pi.prototype.InterpolantFactoryMethodSmooth=void 0;var Oa=class extends gn{constructor(t,e,i,s){super(t,e,i,s)}};Oa.prototype.ValueTypeName="vector";var Ba=class{constructor(t,e,i){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let m=c[d],g=c[d+1];if(m.global&&(m.lastIndex=0),m.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},ju=new Ba,za=class{constructor(t){this.manager=t!==void 0?t:ju,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};za.DEFAULT_MATERIAL_NAME="__DEFAULT";var vr=class extends $e{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new qt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},yr=class extends vr{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy($e.DEFAULT_UP),this.updateMatrix(),this.groundColor=new qt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Il=new ee,ou=new F,lu=new F,ka=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Yt(512,512),this.mapType=hn,this.map=null,this.mapPass=null,this.matrix=new ee,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ai,this._frameExtents=new Yt(1,1),this._viewportCount=1,this._viewports=[new ve(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;ou.setFromMatrixPosition(t.matrixWorld),e.position.copy(ou),lu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(lu),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,s){Il.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(Il,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===Rs||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(Il)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},ca=new F,ha=new cn,zn=new F,Mr=class extends $e{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ee,this.projectionMatrix=new ee,this.projectionMatrixInverse=new ee,this.coordinateSystem=yn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(ca,ha,zn),zn.x===1&&zn.y===1&&zn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ca,ha,zn.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(ca,ha,zn),zn.x===1&&zn.y===1&&zn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ca,ha,zn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ei=new F,cu=new Yt,hu=new Yt,rn=class extends Mr{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Sa*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(cl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Sa*2*Math.atan(Math.tan(cl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Ei.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ei.x,Ei.y).multiplyScalar(-t/Ei.z),Ei.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ei.x,Ei.y).multiplyScalar(-t/Ei.z)}getViewSize(t,e){return this.getViewBounds(t,cu,hu),e.subVectors(hu,cu)}setViewOffset(t,e,i,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(cl*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Sr=class extends Mr{constructor(t=-1,e=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,a=i+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Fl=class extends ka{constructor(){super(new Sr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},br=class extends vr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy($e.DEFAULT_UP),this.updateMatrix(),this.target=new $e,this.shadow=new Fl}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var bs=-90,Es=1,Us=class extends $e{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new rn(bs,Es,t,e);s.layers=this.layers,this.add(s);let r=new rn(bs,Es,t,e);r.layers=this.layers,this.add(r);let a=new rn(bs,Es,t,e);a.layers=this.layers,this.add(a);let o=new rn(bs,Es,t,e);o.layers=this.layers,this.add(o);let l=new rn(bs,Es,t,e);l.layers=this.layers,this.add(l);let c=new rn(bs,Es,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===yn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Rs)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let v=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let f=!1;t.isWebGLRenderer===!0?f=t.state.buffers.depth.getReversed():f=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,2,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,3,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,4,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),i.texture.mipmapsAutoUpdate=v,t.setRenderTarget(i,5,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,m),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Ga=class extends rn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var dc="\\[\\]\\.:\\/",cp=new RegExp("["+dc+"]","g"),fc="[^"+dc+"]",hp="[^"+dc.replace("\\.","")+"]",up=/((?:WC+[\/:])*)/.source.replace("WC",fc),dp=/(WCOD+)?/.source.replace("WCOD",hp),fp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",fc),pp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",fc),mp=new RegExp("^"+up+dp+fp+pp+"$"),gp=["material","materials","bones","map"],Ol=class{constructor(t,e,i){let s=i||fe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},fe=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(cp,"")}static parseTrackName(t){let e=mp.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);gp.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=i(o.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Nt("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){Dt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Dt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Dt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Dt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Dt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){Dt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){Dt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;Dt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Dt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Dt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};fe.Composite=Ol;fe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};fe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};fe.prototype.GetterByBindingType=[fe.prototype._getValue_direct,fe.prototype._getValue_array,fe.prototype._getValue_arrayElement,fe.prototype._getValue_toArray];fe.prototype.SetterByBindingTypeAndVersioning=[[fe.prototype._setValue_direct,fe.prototype._setValue_direct_setNeedsUpdate,fe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[fe.prototype._setValue_array,fe.prototype._setValue_array_setNeedsUpdate,fe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[fe.prototype._setValue_arrayElement,fe.prototype._setValue_arrayElement_setNeedsUpdate,fe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[fe.prototype._setValue_fromArray,fe.prototype._setValue_fromArray_setNeedsUpdate,fe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Bx=new Float32Array(1);var vc=class vc{constructor(t,e,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=i,r[3]=s,this}};vc.prototype.isMatrix2=!0;var Bl=vc;function pc(n,t,e,i){let s=_p(i);switch(e){case ic:return n*t;case Ja:return n*t/s.components*s.byteLength;case Za:return n*t/s.components*s.byteLength;case Ni:return n*t*2/s.components*s.byteLength;case Ka:return n*t*2/s.components*s.byteLength;case sc:return n*t*3/s.components*s.byteLength;case Un:return n*t*4/s.components*s.byteLength;case ja:return n*t*4/s.components*s.byteLength;case Tr:case Ar:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Rr:case Cr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case to:case no:return Math.max(n,16)*Math.max(t,8)/4;case Qa:case eo:return Math.max(n,8)*Math.max(t,8)/2;case io:case so:case ao:case oo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case ro:case Ir:case lo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case co:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case ho:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case uo:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case fo:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case po:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case mo:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case go:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case _o:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case xo:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case vo:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case yo:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Mo:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case So:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case bo:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Eo:case wo:case To:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Ao:case Ro:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Pr:case Co:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function _p(n){switch(n){case hn:case Ql:return{byteLength:1,components:1};case zs:case tc:case Dn:return{byteLength:2,components:1};case qa:case Ya:return{byteLength:2,components:4};case Nn:case $a:case Sn:return{byteLength:4,components:1};case ec:case nc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Nt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function yd(){let n=null,t=!1,e=null,i=null;function s(r,a){i=n.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function wp(n){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,d=c.byteLength,u=n.createBuffer();n.bindBuffer(l,u),n.bufferData(l,c,h),o.onUploadCallback();let m;if(c instanceof Float32Array)m=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=n.SHORT;else if(c instanceof Uint32Array)m=n.UNSIGNED_INT;else if(c instanceof Int32Array)m=n.INT;else if(c instanceof Int8Array)m=n.BYTE;else if(c instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){let h=l.array,d=l.updateRanges;if(n.bindBuffer(c,o),d.length===0)n.bufferSubData(c,0,h);else{d.sort((m,g)=>m.start-g.start);let u=0;for(let m=1;m<d.length;m++){let g=d[u],v=d[m];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++u,d[u]=v)}d.length=u+1;for(let m=0,g=d.length;m<g;m++){let v=d[m];n.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(n.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Tp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ap=`#ifdef USE_ALPHAHASH
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
#endif`,Rp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Cp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ip=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Pp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Lp=`#ifdef USE_AOMAP
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
#endif`,Np=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Dp=`#ifdef USE_BATCHING
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
#endif`,Up=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Fp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Op=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Bp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,zp=`#ifdef USE_IRIDESCENCE
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
#endif`,kp=`#ifdef USE_BUMPMAP
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
#endif`,Gp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Hp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Vp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Wp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Xp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,$p=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,qp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Yp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Jp=`#define PI 3.141592653589793
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
} // validated`,Zp=`vec3 transformedNormal = objectNormal;
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
#endif`,Kp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,jp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Qp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,tm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,em="gl_FragColor = linearToOutputTexel( gl_FragColor );",nm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,im=`#ifdef USE_ENVMAP
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
#endif`,sm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,rm=`#ifdef USE_ENVMAP
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
#endif`,am=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,om=`#ifdef USE_ENVMAP
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
#endif`,lm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,cm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,hm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,um=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,dm=`#ifdef USE_GRADIENTMAP
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
}`,fm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,pm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,mm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,gm=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,_m=`#ifdef USE_ENVMAP
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
#endif`,xm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,vm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ym=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Mm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Sm=`PhysicalMaterial material;
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
#endif`,bm=`uniform sampler2D dfgLUT;
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
}`,Em=`
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
#endif`,wm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Tm=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Am=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,Rm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Cm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Im=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Lm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Nm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Dm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Um=`#if defined( USE_POINTS_UV )
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
#endif`,Fm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Om=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Bm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,zm=`#if defined( USE_MORPHCOLORS )
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
#endif`,km=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gm=`#ifdef USE_MORPHTARGETS
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
#endif`,Hm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Wm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Xm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$m=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Ym=`#ifdef USE_NORMALMAP
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
#endif`,Jm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Zm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Km=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,jm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Qm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,t0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,e0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,n0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,i0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,s0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,r0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,a0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,o0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,l0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,c0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,h0=`float getShadowMask() {
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
}`,u0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,d0=`#ifdef USE_SKINNING
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
#endif`,f0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,p0=`#ifdef USE_SKINNING
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
#endif`,m0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,g0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,_0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,x0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,v0=`#ifdef USE_TRANSMISSION
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
#endif`,y0=`#ifdef USE_TRANSMISSION
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
#endif`,M0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,S0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,b0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,E0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,w0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,T0=`uniform sampler2D t2D;
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
}`,A0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,R0=`uniform float backgroundBlurriness;
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
}`,C0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,I0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,P0=`#include <common>
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
}`,L0=`#if DEPTH_PACKING == 3200
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
}`,N0=`#define DISTANCE
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
}`,D0=`#define DISTANCE
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
}`,U0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,F0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,O0=`uniform float scale;
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
}`,B0=`uniform vec3 diffuse;
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
}`,z0=`#include <common>
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
}`,k0=`uniform vec3 diffuse;
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
}`,G0=`#define LAMBERT
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
}`,H0=`#define LAMBERT
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
}`,V0=`#define MATCAP
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
}`,W0=`#define MATCAP
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
}`,X0=`#define NORMAL
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
}`,$0=`#define NORMAL
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
}`,q0=`#define PHONG
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
}`,Y0=`#define PHONG
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
}`,J0=`#define STANDARD
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
}`,Z0=`#define STANDARD
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
}`,K0=`#define TOON
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
}`,j0=`#define TOON
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
}`,Q0=`uniform float size;
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
}`,tg=`uniform vec3 diffuse;
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
}`,eg=`#include <common>
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
}`,ng=`uniform vec3 color;
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
}`,ig=`uniform float rotation;
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
}`,sg=`uniform vec3 diffuse;
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
}`,Xt={alphahash_fragment:Tp,alphahash_pars_fragment:Ap,alphamap_fragment:Rp,alphamap_pars_fragment:Cp,alphatest_fragment:Ip,alphatest_pars_fragment:Pp,aomap_fragment:Lp,aomap_pars_fragment:Np,batching_pars_vertex:Dp,batching_vertex:Up,begin_vertex:Fp,beginnormal_vertex:Op,bsdfs:Bp,iridescence_fragment:zp,bumpmap_pars_fragment:kp,clipping_planes_fragment:Gp,clipping_planes_pars_fragment:Hp,clipping_planes_pars_vertex:Vp,clipping_planes_vertex:Wp,color_fragment:Xp,color_pars_fragment:$p,color_pars_vertex:qp,color_vertex:Yp,common:Jp,defaultnormal_vertex:Zp,displacementmap_pars_vertex:Kp,displacementmap_vertex:jp,emissivemap_fragment:Qp,emissivemap_pars_fragment:tm,colorspace_fragment:em,colorspace_pars_fragment:nm,envmap_fragment:im,envmap_common_pars_fragment:sm,envmap_pars_fragment:rm,envmap_pars_vertex:am,envmap_physical_pars_fragment:_m,envmap_vertex:om,fog_vertex:lm,fog_pars_vertex:cm,fog_fragment:hm,fog_pars_fragment:um,gradientmap_pars_fragment:dm,lightmap_pars_fragment:fm,lights_lambert_fragment:pm,lights_lambert_pars_fragment:mm,lights_pars_begin:gm,lights_toon_fragment:xm,lights_toon_pars_fragment:vm,lights_phong_fragment:ym,lights_phong_pars_fragment:Mm,lights_physical_fragment:Sm,lights_physical_pars_fragment:bm,lights_fragment_begin:Em,lights_fragment_maps:wm,lights_fragment_end:Tm,lightprobes_pars_fragment:Am,logdepthbuf_fragment:Rm,logdepthbuf_pars_fragment:Cm,logdepthbuf_pars_vertex:Im,logdepthbuf_vertex:Pm,map_fragment:Lm,map_pars_fragment:Nm,map_particle_fragment:Dm,map_particle_pars_fragment:Um,metalnessmap_fragment:Fm,metalnessmap_pars_fragment:Om,morphinstance_vertex:Bm,morphcolor_vertex:zm,morphnormal_vertex:km,morphtarget_pars_vertex:Gm,morphtarget_vertex:Hm,normal_fragment_begin:Vm,normal_fragment_maps:Wm,normal_pars_fragment:Xm,normal_pars_vertex:$m,normal_vertex:qm,normalmap_pars_fragment:Ym,clearcoat_normal_fragment_begin:Jm,clearcoat_normal_fragment_maps:Zm,clearcoat_pars_fragment:Km,iridescence_pars_fragment:jm,opaque_fragment:Qm,packing:t0,premultiplied_alpha_fragment:e0,project_vertex:n0,dithering_fragment:i0,dithering_pars_fragment:s0,roughnessmap_fragment:r0,roughnessmap_pars_fragment:a0,shadowmap_pars_fragment:o0,shadowmap_pars_vertex:l0,shadowmap_vertex:c0,shadowmask_pars_fragment:h0,skinbase_vertex:u0,skinning_pars_vertex:d0,skinning_vertex:f0,skinnormal_vertex:p0,specularmap_fragment:m0,specularmap_pars_fragment:g0,tonemapping_fragment:_0,tonemapping_pars_fragment:x0,transmission_fragment:v0,transmission_pars_fragment:y0,uv_pars_fragment:M0,uv_pars_vertex:S0,uv_vertex:b0,worldpos_vertex:E0,background_vert:w0,background_frag:T0,backgroundCube_vert:A0,backgroundCube_frag:R0,cube_vert:C0,cube_frag:I0,depth_vert:P0,depth_frag:L0,distance_vert:N0,distance_frag:D0,equirect_vert:U0,equirect_frag:F0,linedashed_vert:O0,linedashed_frag:B0,meshbasic_vert:z0,meshbasic_frag:k0,meshlambert_vert:G0,meshlambert_frag:H0,meshmatcap_vert:V0,meshmatcap_frag:W0,meshnormal_vert:X0,meshnormal_frag:$0,meshphong_vert:q0,meshphong_frag:Y0,meshphysical_vert:J0,meshphysical_frag:Z0,meshtoon_vert:K0,meshtoon_frag:j0,points_vert:Q0,points_frag:tg,shadow_vert:eg,shadow_frag:ng,sprite_vert:ig,sprite_frag:sg},_t={common:{diffuse:{value:new qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ut},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ut}},envmap:{envMap:{value:null},envMapRotation:{value:new Ut},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ut},normalScale:{value:new Yt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0},uvTransform:{value:new Ut}},sprite:{diffuse:{value:new qt(16777215)},opacity:{value:1},center:{value:new Yt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ut},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0}}},Xn={basic:{uniforms:en([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.fog]),vertexShader:Xt.meshbasic_vert,fragmentShader:Xt.meshbasic_frag},lambert:{uniforms:en([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new qt(0)},envMapIntensity:{value:1}}]),vertexShader:Xt.meshlambert_vert,fragmentShader:Xt.meshlambert_frag},phong:{uniforms:en([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new qt(0)},specular:{value:new qt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Xt.meshphong_vert,fragmentShader:Xt.meshphong_frag},standard:{uniforms:en([_t.common,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.roughnessmap,_t.metalnessmap,_t.fog,_t.lights,{emissive:{value:new qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag},toon:{uniforms:en([_t.common,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.gradientmap,_t.fog,_t.lights,{emissive:{value:new qt(0)}}]),vertexShader:Xt.meshtoon_vert,fragmentShader:Xt.meshtoon_frag},matcap:{uniforms:en([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,{matcap:{value:null}}]),vertexShader:Xt.meshmatcap_vert,fragmentShader:Xt.meshmatcap_frag},points:{uniforms:en([_t.points,_t.fog]),vertexShader:Xt.points_vert,fragmentShader:Xt.points_frag},dashed:{uniforms:en([_t.common,_t.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xt.linedashed_vert,fragmentShader:Xt.linedashed_frag},depth:{uniforms:en([_t.common,_t.displacementmap]),vertexShader:Xt.depth_vert,fragmentShader:Xt.depth_frag},normal:{uniforms:en([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,{opacity:{value:1}}]),vertexShader:Xt.meshnormal_vert,fragmentShader:Xt.meshnormal_frag},sprite:{uniforms:en([_t.sprite,_t.fog]),vertexShader:Xt.sprite_vert,fragmentShader:Xt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xt.background_vert,fragmentShader:Xt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ut}},vertexShader:Xt.backgroundCube_vert,fragmentShader:Xt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xt.cube_vert,fragmentShader:Xt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xt.equirect_vert,fragmentShader:Xt.equirect_frag},distance:{uniforms:en([_t.common,_t.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xt.distance_vert,fragmentShader:Xt.distance_frag},shadow:{uniforms:en([_t.lights,_t.fog,{color:{value:new qt(0)},opacity:{value:1}}]),vertexShader:Xt.shadow_vert,fragmentShader:Xt.shadow_frag}};Xn.physical={uniforms:en([Xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ut},clearcoatNormalScale:{value:new Yt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ut},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Ut},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ut},sheen:{value:0},sheenColor:{value:new qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ut},transmissionSamplerSize:{value:new Yt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ut},attenuationDistance:{value:0},attenuationColor:{value:new qt(0)},specularColor:{value:new qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ut},anisotropyVector:{value:new Yt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ut}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag};var Po={r:0,b:0,g:0},rg=new ee,Md=new Ut;Md.set(-1,0,0,0,1,0,0,0,1);function ag(n,t,e,i,s,r){let a=new qt(0),o=s===!0?0:1,l,c,h=null,d=0,u=null;function m(M){let A=M.isScene===!0?M.background:null;if(A&&A.isTexture){let b=M.backgroundBlurriness>0;A=t.get(A,b)}return A}function g(M){let A=!1,b=m(M);b===null?f(a,o):b&&b.isColor&&(f(b,1),A=!0);let T=n.xr.getEnvironmentBlendMode();T==="additive"?e.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(n.autoClear||A)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function v(M,A){let b=m(A);b&&b.isCubeTexture?(c===void 0&&(c=new yt(new Ie(1,1,1),new Mn({name:"BackgroundCubeMaterial",uniforms:ts(Xn.backgroundCube.uniforms),vertexShader:Xn.backgroundCube.vertexShader,fragmentShader:Xn.backgroundCube.fragmentShader,side:Ye,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,w,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=b,c.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(rg.makeRotationFromEuler(A.backgroundRotation)).transpose(),b.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Md),c.material.toneMapped=Kt.getTransfer(b.colorSpace)!==oe,(h!==b||d!==b.version||u!==n.toneMapping)&&(c.material.needsUpdate=!0,h=b,d=b.version,u=n.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new yt(new qe(2,2),new Mn({name:"BackgroundMaterial",uniforms:ts(Xn.background.uniforms),vertexShader:Xn.background.vertexShader,fragmentShader:Xn.background.fragmentShader,side:Li,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.toneMapped=Kt.getTransfer(b.colorSpace)!==oe,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(h!==b||d!==b.version||u!==n.toneMapping)&&(l.material.needsUpdate=!0,h=b,d=b.version,u=n.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function f(M,A){M.getRGB(Po,uc(n)),e.buffers.color.setClear(Po.r,Po.g,Po.b,A,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,A=1){a.set(M),o=A,f(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,f(a,o)},render:g,addToRenderList:v,dispose:p}}function og(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null),r=s,a=!1;function o(N,U,H,I,q){let Y=!1,G=d(N,I,H,U);r!==G&&(r=G,c(r.object)),Y=m(N,I,H,q),Y&&g(N,I,H,q),q!==null&&t.update(q,n.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,b(N,U,H,I),q!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(q).buffer))}function l(){return n.createVertexArray()}function c(N){return n.bindVertexArray(N)}function h(N){return n.deleteVertexArray(N)}function d(N,U,H,I){let q=I.wireframe===!0,Y=i[U.id];Y===void 0&&(Y={},i[U.id]=Y);let G=N.isInstancedMesh===!0?N.id:0,X=Y[G];X===void 0&&(X={},Y[G]=X);let B=X[H.id];B===void 0&&(B={},X[H.id]=B);let V=B[q];return V===void 0&&(V=u(l()),B[q]=V),V}function u(N){let U=[],H=[],I=[];for(let q=0;q<e;q++)U[q]=0,H[q]=0,I[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:H,attributeDivisors:I,object:N,attributes:{},index:null}}function m(N,U,H,I){let q=r.attributes,Y=U.attributes,G=0,X=H.getAttributes();for(let B in X)if(X[B].location>=0){let W=q[B],rt=Y[B];if(rt===void 0&&(B==="instanceMatrix"&&N.instanceMatrix&&(rt=N.instanceMatrix),B==="instanceColor"&&N.instanceColor&&(rt=N.instanceColor)),W===void 0||W.attribute!==rt||rt&&W.data!==rt.data)return!0;G++}return r.attributesNum!==G||r.index!==I}function g(N,U,H,I){let q={},Y=U.attributes,G=0,X=H.getAttributes();for(let B in X)if(X[B].location>=0){let W=Y[B];W===void 0&&(B==="instanceMatrix"&&N.instanceMatrix&&(W=N.instanceMatrix),B==="instanceColor"&&N.instanceColor&&(W=N.instanceColor));let rt={};rt.attribute=W,W&&W.data&&(rt.data=W.data),q[B]=rt,G++}r.attributes=q,r.attributesNum=G,r.index=I}function v(){let N=r.newAttributes;for(let U=0,H=N.length;U<H;U++)N[U]=0}function f(N){p(N,0)}function p(N,U){let H=r.newAttributes,I=r.enabledAttributes,q=r.attributeDivisors;H[N]=1,I[N]===0&&(n.enableVertexAttribArray(N),I[N]=1),q[N]!==U&&(n.vertexAttribDivisor(N,U),q[N]=U)}function M(){let N=r.newAttributes,U=r.enabledAttributes;for(let H=0,I=U.length;H<I;H++)U[H]!==N[H]&&(n.disableVertexAttribArray(H),U[H]=0)}function A(N,U,H,I,q,Y,G){G===!0?n.vertexAttribIPointer(N,U,H,q,Y):n.vertexAttribPointer(N,U,H,I,q,Y)}function b(N,U,H,I){v();let q=I.attributes,Y=H.getAttributes(),G=U.defaultAttributeValues;for(let X in Y){let B=Y[X];if(B.location>=0){let V=q[X];if(V===void 0&&(X==="instanceMatrix"&&N.instanceMatrix&&(V=N.instanceMatrix),X==="instanceColor"&&N.instanceColor&&(V=N.instanceColor)),V!==void 0){let W=V.normalized,rt=V.itemSize,Et=t.get(V);if(Et===void 0)continue;let J=Et.buffer,it=Et.type,mt=Et.bytesPerElement,wt=it===n.INT||it===n.UNSIGNED_INT||V.gpuType===$a;if(V.isInterleavedBufferAttribute){let et=V.data,Rt=et.isInterleavedBuffer===!0?et.stride:et.itemSize,ce=V.offset;if(et.isInstancedInterleavedBuffer||et.isInstancedBufferAttribute){for(let Ct=0;Ct<B.locationSize;Ct++)p(B.location+Ct,et.meshPerAttribute);N.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let Ct=0;Ct<B.locationSize;Ct++)f(B.location+Ct);n.bindBuffer(n.ARRAY_BUFFER,J);for(let Ct=0;Ct<B.locationSize;Ct++)A(B.location+Ct,rt/B.locationSize,it,W,Rt*mt,(ce+rt/B.locationSize*Ct)*mt,wt)}else{if(V.isInstancedBufferAttribute){for(let et=0;et<B.locationSize;et++)p(B.location+et,V.meshPerAttribute);N.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let et=0;et<B.locationSize;et++)f(B.location+et);n.bindBuffer(n.ARRAY_BUFFER,J);for(let et=0;et<B.locationSize;et++)A(B.location+et,rt/B.locationSize,it,W,rt*mt,rt/B.locationSize*et*mt,wt)}}else if(G!==void 0){let W=G[X];if(W!==void 0)switch(W.length){case 2:n.vertexAttrib2fv(B.location,W);break;case 3:n.vertexAttrib3fv(B.location,W);break;case 4:n.vertexAttrib4fv(B.location,W);break;default:n.vertexAttrib1fv(B.location,W)}}}}M()}function T(){L();for(let N in i){let U=i[N];for(let H in U){let I=U[H];for(let q in I){let Y=I[q];for(let G in Y)h(Y[G].object),delete Y[G];delete I[q]}}delete i[N]}}function w(N){if(i[N.id]===void 0)return;let U=i[N.id];for(let H in U){let I=U[H];for(let q in I){let Y=I[q];for(let G in Y)h(Y[G].object),delete Y[G];delete I[q]}}delete i[N.id]}function _(N){for(let U in i){let H=i[U];for(let I in H){let q=H[I];if(q[N.id]===void 0)continue;let Y=q[N.id];for(let G in Y)h(Y[G].object),delete Y[G];delete q[N.id]}}}function S(N){for(let U in i){let H=i[U],I=N.isInstancedMesh===!0?N.id:0,q=H[I];if(q!==void 0){for(let Y in q){let G=q[Y];for(let X in G)h(G[X].object),delete G[X];delete q[Y]}delete H[I],Object.keys(H).length===0&&delete i[U]}}}function L(){R(),a=!0,r!==s&&(r=s,c(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:L,resetDefaultState:R,dispose:T,releaseStatesOfGeometry:w,releaseStatesOfObject:S,releaseStatesOfProgram:_,initAttributes:v,enableAttribute:f,disableUnusedAttributes:M}}function lg(n,t,e){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),e.update(c,i,1)}function a(l,c,h){h!==0&&(n.drawArraysInstanced(i,l,c,h),e.update(c,i,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let u=0;for(let m=0;m<h;m++)u+=c[m];e.update(u,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function cg(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let _=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(_){return!(_!==Un&&i.convert(_)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(_){let S=_===Dn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(_!==hn&&_!==Sn&&!S&&i.convert(_)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(_){if(_==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Nt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),u=e.logarithmicDepthBuffer===!0&&d===!1;e.reversedDepthBuffer===!0&&d===!1&&Nt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&d===!0&&Nt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),f=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),M=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),A=n.getParameter(n.MAX_VARYING_VECTORS),b=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),T=n.getParameter(n.MAX_SAMPLES),w=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:m,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:f,maxAttributes:p,maxVertexUniforms:M,maxVaryings:A,maxFragmentUniforms:b,maxSamples:T,samples:w}}function hg(n){let t=this,e=null,i=0,s=!1,r=!1,a=new In,o=new Ut,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let m=d.length!==0||u||i!==0||s;return s=u,i=d.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,m){let g=d.clippingPlanes,v=d.clipIntersection,f=d.clipShadows,p=n.get(d);if(!s||g===null||g.length===0||r&&!f)r?h(null):c();else{let M=r?0:i,A=M*4,b=p.clippingState||null;l.value=b,b=h(g,u,A,m);for(let T=0;T!==A;++T)b[T]=e[T];p.clippingState=b,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(d,u,m,g){let v=d!==null?d.length:0,f=null;if(v!==0){if(f=l.value,g!==!0||f===null){let p=m+v*4,M=u.matrixWorldInverse;o.getNormalMatrix(M),(f===null||f.length<p)&&(f=new Float32Array(p));for(let A=0,b=m;A!==v;++A,b+=4)a.copy(d[A]).applyMatrix4(M,o),a.normal.toArray(f,b),f[b+3]=a.constant}l.value=f,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,f}}var Ur=class extends mn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new fr(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ie(5,5,5),r=new Mn({name:"CubemapFromEquirect",uniforms:ts(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ye,blending:Zi});r.uniforms.tEquirect.value=e;let a=new yt(s,r),o=e.minFilter;return e.minFilter===ri&&(e.minFilter=on),new Us(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,s);t.setRenderTarget(r)}},Qu=256,ug=3,dg=20,Sd=256,bd=16,fg=3,pg=new F,mg=new qt,No=class n{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Us(1,10,null),this._boxMesh=new yt(new Ie(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,i=.1,s=100,r={}){let{size:a=256,position:o=pg}=r,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);let d=l.autoClear,u=l.autoClearColor,m=l.autoClearDepth,g=l.autoClearStencil,v=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,v===null&&(t.background=l.getClearColor(mg));let f=new Us(i,s,h);return f.position.copy(o),f.update(l,t),l.autoClear=d,l.autoClearColor=u,l.autoClearDepth=m,l.autoClearStencil=g,t.background=v,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=nd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ed(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(Qu,Yu(t))}_fromTexture(t,e){t.mapping===ji||t.mapping===Bs?this._setSize(t.image.length===0?Qu:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let i=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(i),i}_allocateTarget(){let t=this._cubeSize,e=td(t,!1,!1),i=Math.log2(t)-ug;for(let s=0;s<=i;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==e||t&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=td(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,i){let s=this._boxMesh,r=this._cubeCamera;s.material=i,r.renderTarget=t,r.activeMipmapLevel=e;let a=t.width>>e;t.viewport.set(0,0,a,a),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===ji||t.mapping===Bs?(this._cubemapMaterial===null&&(this._cubemapMaterial=nd()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=ed()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=gg(),this._integrationMaterial=_g());let e=this._cubeSize,i=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/bd);for(let a=0;a<=i;a++){let o=n.lodToRoughness(a,i);if(a>i-fg)r.roughness.value=o,this._renderCube(t,a,this._integrationMaterial);else{let l=o>0?Math.log2(e)+.5*Math.log2(6/(Sd*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(t,a,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=xg());let i=this._blurMaterial,s=i.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,i),s.envMap.value=t.texture,this._renderCube(r,0,i)}};function td(n,t,e){return new Ur(n,{minFilter:ri,generateMipmaps:t,type:Dn,colorSpace:er,depthBuffer:e})}function Fr(n,t,e){return new Mn({name:n,uniforms:t,vertexShader:Xt.cube_vert,fragmentShader:e,side:Ye,blending:Zi,depthTest:!1,depthWrite:!1})}function gg(){return Fr("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Sd}u

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
	`)}function _g(){return Fr("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:bd}},`

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
	`)}function xg(){return Fr("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${dg}
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
	`)}function ed(){return Fr("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function nd(){return Fr("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function vg(n){let t=new WeakMap,e=new WeakMap,i=null;function s(u,m=!1){return u==null?null:m?a(u):r(u)}function r(u){if(u&&u.isTexture){let m=u.mapping;if(m===Va||m===Wa)if(t.has(u)){let g=t.get(u).texture;return o(g,u.mapping)}else{let g=u.image;if(g&&g.height>0){let v=new Ur(g.height);return v.fromEquirectangularTexture(n,u),t.set(u,v),u.addEventListener("dispose",c),o(v.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){let m=u.mapping,g=m===Va||m===Wa,v=m===ji||m===Bs;if(g||v){let f=e.get(u),p=f!==void 0?f.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return i===null&&(i=new No(n)),f=g?i.fromEquirectangular(u,f):i.fromCubemap(u,f),f.texture.pmremVersion=u.pmremVersion,e.set(u,f),f.texture;if(f!==void 0)return f.texture;{let M=u.image;return g&&M&&M.height>0||v&&M&&l(M)?(i===null&&(i=new No(n)),f=g?i.fromEquirectangular(u):i.fromCubemap(u),f.texture.pmremVersion=u.pmremVersion,e.set(u,f),u.addEventListener("dispose",h),f.texture):null}}}return u}function o(u,m){return m===Va?u.mapping=ji:m===Wa&&(u.mapping=Bs),u}function l(u){let m=0,g=6;for(let v=0;v<g;v++)u[v]!==void 0&&m++;return m===g}function c(u){let m=u.target;m.removeEventListener("dispose",c);let g=t.get(m);g!==void 0&&(t.delete(m),g.dispose())}function h(u){let m=u.target;m.removeEventListener("dispose",h);let g=e.get(m);g!==void 0&&(e.delete(m),g.dispose())}function d(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function yg(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&Qs("WebGLRenderer: "+i+" extension not supported."),s}}}function Mg(n,t,e,i){let s={},r=new WeakMap,a=new FinalizationRegistry(g=>delete s[g]);function o(g){l(g.target)}function l(g){g.index!==null&&t.remove(g.index);for(let f in g.attributes)t.remove(g.attributes[f]);g.removeEventListener("dispose",o),delete s[g.id],a.unregister(g);let v=r.get(g);v&&(t.remove(v),r.delete(g)),i.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,e.memory.geometries--}function c(g,v){return s[v.id]!==void 0||(v.addEventListener("dispose",o),s[v.id]=new WeakRef(v),a.register(v,v.id,v),e.memory.geometries++),v}function h(g){let v=g.attributes;for(let f in v)t.update(v[f],n.ARRAY_BUFFER)}function d(g){let v=g.index,f=g.attributes.position,p=0;if(f===void 0)return;let M=v!==null?v.array.length:f.array.length/3-1,A=f.count>=65535?cr:lr,b=new A(Math.ceil(M/3)*6,1),T=b.array;if(v!==null){let _=v.array;p=v.version;for(let S=0,L=0;S<M;S+=3){let R=_[S+0],N=_[S+1],U=_[S+2];T[L++]=R,T[L++]=N,T[L++]=N,T[L++]=U,T[L++]=U,T[L++]=R}}else{p=f.version;for(let _=0,S=0;_<M;_+=3){let L=_+0,R=_+1,N=_+2;T[S++]=L,T[S++]=R,T[S++]=R,T[S++]=N,T[S++]=N,T[S++]=L}}b.version=p;let w=r.get(g);w&&t.remove(w),r.set(g,b)}function u(g){let v=r.get(g);if(v){let f=g.index;f!==null&&v.version<f.version&&d(g)}else d(g);return r.get(g)}function m(){for(let g in s){let v=s[g].deref();v!==void 0&&l(v)}}return{get:c,update:h,getWireframeAttribute:u,dispose:m}}function Sg(n,t,e){let i;function s(d){i=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,u){n.drawElements(i,u,r,d*a),e.update(u,i,1)}function c(d,u,m){m!==0&&(n.drawElementsInstanced(i,u,r,d*a,m),e.update(u,i,m))}function h(d,u,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,r,d,0,m);let v=0;for(let f=0;f<m;f++)v+=u[f];e.update(v,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function bg(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(r/3);break;case n.LINES:e.lines+=o*(r/2);break;case n.LINE_STRIP:e.lines+=o*(r-1);break;case n.LINE_LOOP:e.lines+=o*r;break;case n.POINTS:e.points+=o*r;break;default:Dt("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function Eg(n,t,e){let i=new WeakMap,s=new ve;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,u=i.get(o);if(u===void 0||u.count!==d){let L=function(){_.dispose(),i.delete(o),o.removeEventListener("dispose",L)};u!==void 0&&u.texture.dispose();let m=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],M=o.morphAttributes.color||[],A=0;m===!0&&(A=1),g===!0&&(A=2),v===!0&&(A=3);let b=o.attributes.position.count*A,T=1;b>t.maxTextureSize&&(T=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);let w=new Float32Array(b*T*4*d),_=new sr(w,b,T,d);_.type=Sn,_.needsUpdate=!0;let S=A*4;for(let R=0;R<d;R++){let N=f[R],U=p[R],H=M[R],I=b*T*4*R;for(let q=0;q<N.count;q++){let Y=q*S;m===!0&&(s.fromBufferAttribute(N,q),w[I+Y+0]=s.x,w[I+Y+1]=s.y,w[I+Y+2]=s.z,w[I+Y+3]=0),g===!0&&(s.fromBufferAttribute(U,q),w[I+Y+4]=s.x,w[I+Y+5]=s.y,w[I+Y+6]=s.z,w[I+Y+7]=0),v===!0&&(s.fromBufferAttribute(H,q),w[I+Y+8]=s.x,w[I+Y+9]=s.y,w[I+Y+10]=s.z,w[I+Y+11]=H.itemSize===4?s.w:1)}}u={count:d,texture:_,size:new Yt(b,T)},i.set(o,u),o.addEventListener("dispose",L)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,e);else{let m=0;for(let v=0;v<c.length;v++)m+=c[v];let g=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function wg(n,t,e,i,s){let r=new WeakMap;function a(c){let h=s.render.frame,d=c.geometry,u=t.get(c,d);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let m=c.skeleton;r.get(m)!==h&&(m.update(),r.set(m,h))}return u}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var Tg={[$l]:"LINEAR_TONE_MAPPING",[ql]:"REINHARD_TONE_MAPPING",[Yl]:"CINEON_TONE_MAPPING",[Er]:"ACES_FILMIC_TONE_MAPPING",[Zl]:"AGX_TONE_MAPPING",[Kl]:"NEUTRAL_TONE_MAPPING",[Jl]:"CUSTOM_TONE_MAPPING"};function Ag(n,t,e,i,s,r){let a=new mn(t,e,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,h=new Ue;h.setAttribute("position",new re([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new re([0,2,0,0,2,0],2));let d=new Aa({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new yt(h,d),m=new Sr(-1,1,1,-1,0,1),g=null,v=null,f=!1,p,M=null,A=[],b=!1;this.setSize=function(T,w){a.setSize(T,w),o!==null&&o.setSize(T,w),l!==null&&l.setSize(T,w);for(let _=0;_<A.length;_++){let S=A[_];S.setSize&&S.setSize(T,w)}},this.setEffects=function(T){A=T,b=A.length>0&&A[0].isRenderPass===!0;let w=a.width,_=a.height;A.length>0&&o===null&&(o=new mn(w,_,{type:Dn,depthBuffer:!1,stencilBuffer:!1}),l=new mn(w,_,{type:Dn,depthBuffer:!1,stencilBuffer:!1}));let S=s===!0&&A.some(L=>L.needsDepthTexture===!0);S!==(a.depthTexture!==null)&&(S===!0&&c===null&&(c=new ii(w,_),r===!0&&(c.format=ai,c.type=Qi)),a.dispose(),a.depthTexture=S?c:null,a.resolveDepthBuffer=S,a.storeMultisampledDepthBuffer=S);for(let L=0;L<A.length;L++){let R=A[L];R.setSize&&R.setSize(w,_),S&&R.needsDepthTexture===!0&&R.setDepthTexture&&R.setDepthTexture(c)}},this.begin=function(T,w){if(f||T.toneMapping===Vn&&A.length===0)return!1;if(M=w,w!==null){let _=w.width,S=w.height;(a.width!==_||a.height!==S)&&this.setSize(_,S)}return b===!1&&T.setRenderTarget(a),p=T.toneMapping,T.toneMapping=Vn,!0},this.hasRenderPass=function(){return b},this.end=function(T,w){T.toneMapping=p,f=!0;let _=a,S=o;for(let L=0;L<A.length;L++){let R=A[L];R.enabled!==!1&&(R.render(T,S,_,w),R.needsSwap!==!1&&(_=S,S=S===o?l:o))}if(g!==T.outputColorSpace||v!==T.toneMapping){g=T.outputColorSpace,v=T.toneMapping,d.defines={},Kt.getTransfer(g)===oe&&(d.defines.SRGB_TRANSFER="");let L=Tg[v];L&&(d.defines[L]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=_.texture,T.setRenderTarget(M),T.render(u,m),M=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),d.dispose()}}var Ed=new ln,wd=new ii(1,1),Td=new pr(1),Ad=new sr,Rd=new wa,Cd=new fr,id=[],sd=[],rd=new Float32Array(16),ad=new Float32Array(9),od=new Float32Array(4);function Gs(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=id[s];if(r===void 0&&(r=new Float32Array(s),id[s]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(r,o)}return r}function Oe(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Be(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Uo(n,t){let e=sd[t];e===void 0&&(e=new Int32Array(t),sd[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Rg(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Cg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;n.uniform2fv(this.addr,t),Be(e,t)}}function Ig(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Oe(e,t))return;n.uniform3fv(this.addr,t),Be(e,t)}}function Pg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;n.uniform4fv(this.addr,t),Be(e,t)}}function Lg(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Oe(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Be(e,t)}else{if(Oe(e,i))return;od.set(i),n.uniformMatrix2fv(this.addr,!1,od),Be(e,i)}}function Ng(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Oe(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Be(e,t)}else{if(Oe(e,i))return;ad.set(i),n.uniformMatrix3fv(this.addr,!1,ad),Be(e,i)}}function Dg(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Oe(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Be(e,t)}else{if(Oe(e,i))return;rd.set(i),n.uniformMatrix4fv(this.addr,!1,rd),Be(e,i)}}function Ug(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Fg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;n.uniform2iv(this.addr,t),Be(e,t)}}function Og(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Oe(e,t))return;n.uniform3iv(this.addr,t),Be(e,t)}}function Bg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;n.uniform4iv(this.addr,t),Be(e,t)}}function zg(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function kg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;n.uniform2uiv(this.addr,t),Be(e,t)}}function Gg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Oe(e,t))return;n.uniform3uiv(this.addr,t),Be(e,t)}}function Hg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;n.uniform4uiv(this.addr,t),Be(e,t)}}function Fo(n){return n.version===0&&(n.compareFunction=oc,n.needsUpdate=!0),n}function Vg(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?r=Fo(wd):r=Ed,e.setTexture2D(t||r,s)}function Wg(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Rd,s)}function Xg(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_CUBE_SHADOW?r=Fo(Td):r=Cd,e.setTextureCube(t||r,s)}function $g(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Ad,s)}function qg(n){switch(n){case 5126:return Rg;case 35664:return Cg;case 35665:return Ig;case 35666:return Pg;case 35674:return Lg;case 35675:return Ng;case 35676:return Dg;case 5124:case 35670:return Ug;case 35667:case 35671:return Fg;case 35668:case 35672:return Og;case 35669:case 35673:return Bg;case 5125:return zg;case 36294:return kg;case 36295:return Gg;case 36296:return Hg;case 35678:case 36198:case 36298:case 36306:case 35682:return Vg;case 35679:case 36299:case 36307:return Wg;case 35680:case 36300:case 36308:case 36293:return Xg;case 36289:case 36303:case 36311:case 36292:return $g}}function Yg(n,t){n.uniform1fv(this.addr,t)}function Jg(n,t){let e=Gs(t,this.size,2);n.uniform2fv(this.addr,e)}function Zg(n,t){let e=Gs(t,this.size,3);n.uniform3fv(this.addr,e)}function Kg(n,t){let e=Gs(t,this.size,4);n.uniform4fv(this.addr,e)}function jg(n,t){let e=Gs(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Qg(n,t){let e=Gs(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function t_(n,t){let e=Gs(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function e_(n,t){n.uniform1iv(this.addr,t)}function n_(n,t){n.uniform2iv(this.addr,t)}function i_(n,t){n.uniform3iv(this.addr,t)}function s_(n,t){n.uniform4iv(this.addr,t)}function r_(n,t){n.uniform1uiv(this.addr,t)}function a_(n,t){n.uniform2uiv(this.addr,t)}function o_(n,t){n.uniform3uiv(this.addr,t)}function l_(n,t){n.uniform4uiv(this.addr,t)}function c_(n,t,e){let i=this.cache,s=t.length,r=Uo(e,s);Oe(i,r)||(n.uniform1iv(this.addr,r),Be(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=Fo(wd):a=Ed;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function h_(n,t,e){let i=this.cache,s=t.length,r=Uo(e,s);Oe(i,r)||(n.uniform1iv(this.addr,r),Be(i,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Rd,r[a])}function u_(n,t,e){let i=this.cache,s=t.length,r=Uo(e,s);Oe(i,r)||(n.uniform1iv(this.addr,r),Be(i,r));let a;this.type===n.SAMPLER_CUBE_SHADOW?a=Fo(Td):a=Cd;for(let o=0;o!==s;++o)e.setTextureCube(t[o]||a,r[o])}function d_(n,t,e){let i=this.cache,s=t.length,r=Uo(e,s);Oe(i,r)||(n.uniform1iv(this.addr,r),Be(i,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Ad,r[a])}function f_(n){switch(n){case 5126:return Yg;case 35664:return Jg;case 35665:return Zg;case 35666:return Kg;case 35674:return jg;case 35675:return Qg;case 35676:return t_;case 5124:case 35670:return e_;case 35667:case 35671:return n_;case 35668:case 35672:return i_;case 35669:case 35673:return s_;case 5125:return r_;case 36294:return a_;case 36295:return o_;case 36296:return l_;case 35678:case 36198:case 36298:case 36306:case 35682:return c_;case 35679:case 36299:case 36307:return h_;case 35680:case 36300:case 36308:case 36293:return u_;case 36289:case 36303:case 36311:case 36292:return d_}}var Sc=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=qg(e.type)}},bc=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=f_(e.type)}},Ec=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],i)}}},yc=/(\w+)(\])?(\[|\.)?/g;function ld(n,t){n.seq.push(t),n.map[t.id]=t}function p_(n,t,e){let i=n.name,s=i.length;for(yc.lastIndex=0;;){let r=yc.exec(i),a=yc.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){ld(e,c===void 0?new Sc(o,n,t):new bc(o,n,t));break}else{let d=e.map[o];d===void 0&&(d=new Ec(o),ld(e,d)),e=d}}}var ks=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);p_(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&i.push(a)}return i}};function cd(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var m_=37297,g_=0;function __(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}var hd=new Ut;function x_(n){Kt._getMatrix(hd,Kt.workingColorSpace,n);let t=`mat3( ${hd.elements.map(e=>e.toFixed(4))} )`;switch(Kt.getTransfer(n)){case nr:return[t,"LinearTransferOETF"];case oe:return[t,"sRGBTransferOETF"];default:return Nt("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function ud(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+__(n.getShaderSource(t),o)}else return r}function v_(n,t){let e=x_(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var y_={[$l]:"Linear",[ql]:"Reinhard",[Yl]:"Cineon",[Er]:"ACESFilmic",[Zl]:"AgX",[Kl]:"Neutral",[Jl]:"Custom"};function M_(n,t){let e=y_[t];return e===void 0?(Nt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Lo=new F;function S_(){Kt.getLuminanceCoefficients(Lo);let n=Lo.x.toFixed(4),t=Lo.y.toFixed(4),e=Lo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function b_(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Dr).join(`
`)}function E_(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function w_(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),a=r.name,o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function Dr(n){return n!==""}function dd(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function fd(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var T_=/^[ \t]*#include +<([\w\d./]+)>/gm;function wc(n){return n.replace(T_,A_)}function A_(n,t){let e=Xt[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return wc(e)}var R_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function pd(n){return n.replace(R_,C_)}function C_(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function md(n){let t=`precision ${n.precision} float;
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
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var I_={[Ji]:"SHADOWMAP_TYPE_PCF",[Fs]:"SHADOWMAP_TYPE_VSM"};function P_(n){return I_[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var L_={[Bs]:"ENVMAP_MODE_REFRACTION"};function N_(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":L_[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var D_={[Xl]:"ENVMAP_BLENDING_MULTIPLY",[Lu]:"ENVMAP_BLENDING_MIX",[Nu]:"ENVMAP_BLENDING_ADD"};function U_(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":D_[n.combine]||"ENVMAP_BLENDING_NONE"}function F_(n,t,e,i){let s=n.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=P_(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=N_(e),d=U_(e),u=b_(e),m=E_(r),g=s.createProgram(),v,f,p=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(v=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Dr).join(`
`),v.length>0&&(v+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Dr).join(`
`),f.length>0&&(f+=`
`)):(v=[md(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Dr).join(`
`),f=[md(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Vn?"#define TONE_MAPPING":"",e.toneMapping!==Vn?Xt.tonemapping_pars_fragment:"",e.toneMapping!==Vn?M_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Xt.colorspace_pars_fragment,v_("linearToOutputTexel",e.outputColorSpace),S_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Dr).join(`
`)),a=wc(a),a=dd(a,e),a=fd(a,e),o=wc(o),o=dd(o,e),o=fd(o,e),a=pd(a),o=pd(o),e.isRawShaderMaterial!==!0&&(p=`#version 300 es
`,v=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,f=["#define varying in",e.glslVersion===lc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===lc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let M=p+v+a,A=p+f+o,b=cd(s,s.VERTEX_SHADER,M),T=cd(s,s.FRAGMENT_SHADER,A);s.attachShader(g,b),s.attachShader(g,T),e.index0AttributeName!==void 0?s.bindAttribLocation(g,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function w(R){if(n.debug.checkShaderErrors){let N=s.getProgramInfoLog(g)||"",U=s.getShaderInfoLog(b)||"",H=s.getShaderInfoLog(T)||"",I=N.trim(),q=U.trim(),Y=H.trim(),G=!0,X=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(G=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,g,b,T);else{let B=ud(s,b,"vertex"),V=ud(s,T,"fragment");Dt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+I+`
`+B+`
`+V)}else I!==""?Nt("WebGLProgram: Program Info Log:",I):(q===""||Y==="")&&(X=!1);X&&(R.diagnostics={runnable:G,programLog:I,vertexShader:{log:q,prefix:v},fragmentShader:{log:Y,prefix:f}})}s.deleteShader(b),s.deleteShader(T),_=new ks(s,g),S=w_(s,g)}let _;this.getUniforms=function(){return _===void 0&&w(this),_};let S;this.getAttributes=function(){return S===void 0&&w(this),S};let L=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=s.getProgramParameter(g,m_)),L},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=g_++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=b,this.fragmentShader=T,this}var O_=0,Tc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new Ac(t),e.set(t,i)),i}},Ac=class{constructor(t){this.id=O_++,this.code=t,this.usedTimes=0}};function B_(n){return n===Ni||n===Ir||n===Pr}function z_(n,t,e,i,s,r){let a=new rr,o=new Tc,l=new Set,c=[],h=new Map,d=i.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(_){return l.add(_),_===0?"uv":`uv${_}`}function g(_,S,L,R,N,U){let H=R.fog,I=N.geometry,q=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?R.environment:null,Y=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,G=t.get(_.envMap||q,Y),X=u[_.type],B=i.precision;_.precision!==null&&(B=i.getMaxPrecision(_.precision),B!==_.precision&&Nt("WebGLProgram.getParameters:",_.precision,"not supported, using",B,"instead."));let V=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,W=V!==void 0?V.length:0,rt=0;I.morphAttributes.position!==void 0&&(rt=1),I.morphAttributes.normal!==void 0&&(rt=2),I.morphAttributes.color!==void 0&&(rt=3);let Et,J,it,mt;if(X){let gt=Xn[X];Et=gt.vertexShader,J=gt.fragmentShader}else{Et=_.vertexShader,J=_.fragmentShader;let gt=o.getVertexShaderStage(_),le=o.getFragmentShaderStage(_);o.update(_,gt,le),it=gt.id,mt=le.id}let wt=n.getRenderTarget(),et=n.state.buffers.depth.getReversed(),Rt=N.isInstancedMesh===!0,ce=N.isBatchedMesh===!0,Ct=!!_.map,ne=!!_.matcap,ae=!!G,Bt=ae&&G.isPMREMTexture===!0,Se=!!_.aoMap,ue=!!_.lightMap,Je=!!_.bumpMap&&_.wireframe===!1,xt=!!_.normalMap,zt=!!_.displacementMap,$t=!!_.emissiveMap,ge=!!_.metalnessMap,Me=!!_.roughnessMap,We=_.anisotropy>0,D=_.clearcoat>0,xn=_.diffuseRoughness>0,_e=_.dispersion>0,xe=_.retroreflectivity>0,pt=_.iridescence>0,Pe=_.sheen>0,Lt=_.transmission>0,Ft=We&&!!_.anisotropyMap,E=D&&!!_.clearcoatMap,x=D&&!!_.clearcoatNormalMap,z=D&&!!_.clearcoatRoughnessMap,nt=xn&&!!_.diffuseRoughnessMap,tt=pt&&!!_.iridescenceMap,ot=pt&&!!_.iridescenceThicknessMap,dt=Pe&&!!_.sheenColorMap,K=Pe&&!!_.sheenRoughnessMap,j=!!_.specularMap,ct=!!_.specularColorMap,C=!!_.specularIntensityMap,Q=Lt&&!!_.transmissionMap,Z=Lt&&!!_.thicknessMap,ht=!!_.gradientMap,at=!!_.alphaMap,lt=_.alphaTest>0,At=!!_.alphaHash,Wt=!!_.extensions,st=Vn;_.toneMapped&&(wt===null||wt.isXRRenderTarget===!0)&&(st=n.toneMapping);let Pt=Bt?G.isCompressedCubeTexture?G.image[0].mipmaps:G.mipmaps:null,Gt={shaderID:X,shaderType:_.type,shaderName:_.name,vertexShader:Et,fragmentShader:J,defines:_.defines,customVertexShaderID:it,customFragmentShaderID:mt,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:B,batching:ce,batchingColor:ce&&N._colorsTexture!==null,instancing:Rt,instancingColor:Rt&&N.instanceColor!==null,instancingMorph:Rt&&N.morphTexture!==null,outputColorSpace:wt===null?n.outputColorSpace:wt.isXRRenderTarget===!0?wt.texture.colorSpace:Kt.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Ct,matcap:ne,envMap:ae,envMapMode:ae&&G.mapping,envMapPMREM:Bt,envMapMaxLod:Bt?Pt.length-1:null,envMapSize:Bt?Pt[0].width:null,aoMap:Se,lightMap:ue,bumpMap:Je,normalMap:xt,displacementMap:zt,emissiveMap:$t,normalMapObjectSpace:xt&&_.normalMapType===Fu,normalMapTangentSpace:xt&&_.normalMapType===Io,packedNormalMap:xt&&_.normalMapType===Io&&B_(_.normalMap.format),metalnessMap:ge,roughnessMap:Me,anisotropy:We,anisotropyMap:Ft,clearcoat:D,clearcoatMap:E,clearcoatNormalMap:x,clearcoatRoughnessMap:z,diffuseRoughness:xn,diffuseRoughnessMap:nt,dispersion:_e,retroreflection:xe,iridescence:pt,iridescenceMap:tt,iridescenceThicknessMap:ot,sheen:Pe,sheenColorMap:dt,sheenRoughnessMap:K,specularMap:j,specularColorMap:ct,specularIntensityMap:C,transmission:Lt,transmissionMap:Q,thicknessMap:Z,gradientMap:ht,opaque:_.transparent===!1&&_.blending===Os&&_.alphaToCoverage===!1,alphaMap:at,alphaTest:lt,alphaHash:At,combine:_.combine,mapUv:Ct&&m(_.map.channel),aoMapUv:Se&&m(_.aoMap.channel),lightMapUv:ue&&m(_.lightMap.channel),bumpMapUv:Je&&m(_.bumpMap.channel),normalMapUv:xt&&m(_.normalMap.channel),displacementMapUv:zt&&m(_.displacementMap.channel),emissiveMapUv:$t&&m(_.emissiveMap.channel),metalnessMapUv:ge&&m(_.metalnessMap.channel),roughnessMapUv:Me&&m(_.roughnessMap.channel),anisotropyMapUv:Ft&&m(_.anisotropyMap.channel),clearcoatMapUv:E&&m(_.clearcoatMap.channel),clearcoatNormalMapUv:x&&m(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:z&&m(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:nt&&m(_.diffuseRoughnessMap.channel),iridescenceMapUv:tt&&m(_.iridescenceMap.channel),iridescenceThicknessMapUv:ot&&m(_.iridescenceThicknessMap.channel),sheenColorMapUv:dt&&m(_.sheenColorMap.channel),sheenRoughnessMapUv:K&&m(_.sheenRoughnessMap.channel),specularMapUv:j&&m(_.specularMap.channel),specularColorMapUv:ct&&m(_.specularColorMap.channel),specularIntensityMapUv:C&&m(_.specularIntensityMap.channel),transmissionMapUv:Q&&m(_.transmissionMap.channel),thicknessMapUv:Z&&m(_.thicknessMap.channel),alphaMapUv:at&&m(_.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(xt||We),vertexNormals:!!I.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!I.attributes.uv&&(Ct||at),fog:!!H,useFog:_.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||I.attributes.normal===void 0&&xt===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:et,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:W,morphTextureStride:rt,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:U.filter(gt=>gt.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:st,decodeVideoTexture:Ct&&_.map.isVideoTexture===!0&&Kt.getTransfer(_.map.colorSpace)===oe,decodeVideoTextureEmissive:$t&&_.emissiveMap.isVideoTexture===!0&&Kt.getTransfer(_.emissiveMap.colorSpace)===oe,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Ve,flipSided:_.side===Ye,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Wt&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Wt&&_.extensions.multiDraw===!0||ce)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Gt.vertexUv1s=l.has(1),Gt.vertexUv2s=l.has(2),Gt.vertexUv3s=l.has(3),l.clear(),Gt}function v(_){let S=[];if(_.shaderID?S.push(_.shaderID):(S.push(_.customVertexShaderID),S.push(_.customFragmentShaderID)),_.defines!==void 0)for(let L in _.defines)S.push(L),S.push(_.defines[L]);return _.isRawShaderMaterial===!1&&(f(S,_),p(S,_),S.push(n.outputColorSpace)),S.push(_.customProgramCacheKey),S.join()}function f(_,S){_.push(S.precision),_.push(S.outputColorSpace),_.push(S.envMapMode),_.push(S.envMapPMREM),_.push(S.envMapMaxLod),_.push(S.envMapSize),_.push(S.mapUv),_.push(S.alphaMapUv),_.push(S.lightMapUv),_.push(S.aoMapUv),_.push(S.bumpMapUv),_.push(S.normalMapUv),_.push(S.displacementMapUv),_.push(S.emissiveMapUv),_.push(S.metalnessMapUv),_.push(S.roughnessMapUv),_.push(S.anisotropyMapUv),_.push(S.clearcoatMapUv),_.push(S.clearcoatNormalMapUv),_.push(S.clearcoatRoughnessMapUv),_.push(S.diffuseRoughnessMapUv),_.push(S.iridescenceMapUv),_.push(S.iridescenceThicknessMapUv),_.push(S.sheenColorMapUv),_.push(S.sheenRoughnessMapUv),_.push(S.specularMapUv),_.push(S.specularColorMapUv),_.push(S.specularIntensityMapUv),_.push(S.transmissionMapUv),_.push(S.thicknessMapUv),_.push(S.combine),_.push(S.fogExp2),_.push(S.sizeAttenuation),_.push(S.morphTargetsCount),_.push(S.numSunLights),_.push(S.numDirLights),_.push(S.numPointLights),_.push(S.numSpotLights),_.push(S.numSpotLightMaps),_.push(S.numHemiLights),_.push(S.numRectAreaLights),_.push(S.numSunLightShadows),_.push(S.numDirLightShadows),_.push(S.numPointLightShadows),_.push(S.numSpotLightShadows),_.push(S.numSpotLightShadowsWithMaps),_.push(S.numLightProbes),_.push(S.numLightProbeGrids),_.push(S.shadowMapType),_.push(S.toneMapping),_.push(S.numClippingPlanes),_.push(S.numClipIntersection),_.push(S.depthPacking)}function p(_,S){a.disableAll(),S.instancing&&a.enable(0),S.instancingColor&&a.enable(1),S.instancingMorph&&a.enable(2),S.matcap&&a.enable(3),S.envMap&&a.enable(4),S.normalMapObjectSpace&&a.enable(5),S.normalMapTangentSpace&&a.enable(6),S.clearcoat&&a.enable(7),S.iridescence&&a.enable(8),S.alphaTest&&a.enable(9),S.vertexColors&&a.enable(10),S.vertexAlphas&&a.enable(11),S.vertexUv1s&&a.enable(12),S.vertexUv2s&&a.enable(13),S.vertexUv3s&&a.enable(14),S.vertexTangents&&a.enable(15),S.anisotropy&&a.enable(16),S.alphaHash&&a.enable(17),S.batching&&a.enable(18),S.dispersion&&a.enable(19),S.retroreflection&&a.enable(24),S.diffuseRoughness&&a.enable(25),S.batchingColor&&a.enable(20),S.gradientMap&&a.enable(21),S.packedNormalMap&&a.enable(22),S.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),S.numLightProbeGrids>0&&a.enable(22),S.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function M(_){let S=u[_.type],L;if(S){let R=Xn[S];L=Zu.clone(R.uniforms)}else L=_.uniforms;return L}function A(_,S){let L=h.get(S);return L!==void 0?++L.usedTimes:(L=new F_(n,S,_,s),c.push(L),h.set(S,L)),L}function b(_){if(--_.usedTimes===0){let S=c.indexOf(_);c[S]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function T(_){o.remove(_)}function w(){o.dispose()}return{getParameters:g,getProgramCacheKey:v,getUniforms:M,acquireProgram:A,releaseProgram:b,releaseShaderCache:T,programs:c,dispose:w}}function k_(){let n=new WeakMap;function t(a){return n.has(a)}function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function G_(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function gd(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function _d(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function a(u){let m=0;return u.isInstancedMesh&&(m+=2),u.isSkinnedMesh&&(m+=1),m}function o(u,m,g,v,f,p){let M=n[t];return M===void 0?(M={id:u.id,object:u,geometry:m,material:g,materialVariant:a(u),groupOrder:v,renderOrder:u.renderOrder,z:f,group:p},n[t]=M):(M.id=u.id,M.object=u,M.geometry=m,M.material=g,M.materialVariant=a(u),M.groupOrder=v,M.renderOrder=u.renderOrder,M.z=f,M.group=p),t++,M}function l(u,m,g,v,f,p,M){M.reversedDepth===!0&&(f=-f);let A=o(u,m,g,v,f,p);g.transmission>0?i.push(A):g.transparent===!0?s.push(A):e.push(A)}function c(u,m,g,v,f,p){let M=o(u,m,g,v,f,p);g.transmission>0?i.unshift(M):g.transparent===!0?s.unshift(M):e.unshift(M)}function h(u,m){e.length>1&&e.sort(u||G_),i.length>1&&i.sort(m||gd),s.length>1&&s.sort(m||gd)}function d(){for(let u=t,m=n.length;u<m;u++){let g=n[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:d,sort:h}}function H_(){let n=new WeakMap;function t(i,s){let r=n.get(i),a;return r===void 0?(a=new _d,n.set(i,[a])):s>=r.length?(a=new _d,r.push(a)):a=r[s],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function V_(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new F,color:new qt};break;case"SpotLight":e={position:new F,direction:new F,color:new qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new F,color:new qt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new F,skyColor:new qt,groundColor:new qt};break;case"RectAreaLight":e={color:new qt,position:new F,halfWidth:new F,halfHeight:new F};break}return n[t.id]=e,e}}}function W_(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Yt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Yt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Yt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var X_=0;function $_(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function q_(n){let t=new V_,e=W_(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new F);let s=new F,r=new ee,a=new ee;function o(c){let h=0,d=0,u=0;for(let U=0;U<9;U++)i.probe[U].set(0,0,0);let m=0,g=0,v=0,f=0,p=0,M=0,A=0,b=0,T=0,w=0,_=0,S=0,L=0,R=0;c.sort($_);for(let U=0,H=c.length;U<H;U++){let I=c[U],q=I.color,Y=I.intensity,G=I.distance,X=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===Ni?X=I.shadow.map.texture:X=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=q.r*Y,d+=q.g*Y,u+=q.b*Y;else if(I.isLightProbe){for(let B=0;B<9;B++)i.probe[B].addScaledVector(I.sh.coefficients[B],Y);R++}else if(I.isSunLight){let B=t.get(I);if(B.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let V=I.shadow,W=e.get(I);W.shadowIntensity=V.intensity,W.shadowBias=V.bias,W.shadowNormalBias=V.normalBias,W.shadowRadius=V.radius,W.shadowMapSize.copy(V.mapSize).multiply(V.getFrameExtents()),i.sunShadow[g]=W,i.sunShadowMap[g]=X;let rt=V.getViewportCount();for(let Et=0;Et<rt;Et++)i.sunShadowMatrix[v+Et]=V.getMatrix(Et),i.sunShadowCascade[v+Et]=V._cascadeData[Et];v+=rt,g++}i.sun[m]=B,m++}else if(I.isDirectionalLight){let B=t.get(I);if(B.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let V=I.shadow,W=e.get(I);W.shadowIntensity=V.intensity,W.shadowBias=V.bias,W.shadowNormalBias=V.normalBias,W.shadowRadius=V.radius,W.shadowMapSize=V.mapSize,i.directionalShadow[f]=W,i.directionalShadowMap[f]=X,i.directionalShadowMatrix[f]=I.shadow.matrix,T++}i.directional[f]=B,f++}else if(I.isSpotLight){let B=t.get(I);B.position.setFromMatrixPosition(I.matrixWorld),B.color.copy(q).multiplyScalar(Y),B.distance=G,B.coneCos=Math.cos(I.angle),B.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),B.decay=I.decay,i.spot[M]=B;let V=I.shadow;if(I.map&&(i.spotLightMap[S]=I.map,S++,V.updateMatrices(I),I.castShadow&&L++),i.spotLightMatrix[M]=V.matrix,I.castShadow){let W=e.get(I);W.shadowIntensity=V.intensity,W.shadowBias=V.bias,W.shadowNormalBias=V.normalBias,W.shadowRadius=V.radius,W.shadowMapSize=V.mapSize,i.spotShadow[M]=W,i.spotShadowMap[M]=X,_++}M++}else if(I.isRectAreaLight){let B=t.get(I);B.color.copy(q).multiplyScalar(Y),B.halfWidth.set(I.width*.5,0,0),B.halfHeight.set(0,I.height*.5,0),i.rectArea[A]=B,A++}else if(I.isPointLight){let B=t.get(I);if(B.color.copy(I.color).multiplyScalar(I.intensity),B.distance=I.distance,B.decay=I.decay,I.castShadow){let V=I.shadow,W=e.get(I);W.shadowIntensity=V.intensity,W.shadowBias=V.bias,W.shadowNormalBias=V.normalBias,W.shadowRadius=V.radius,W.shadowMapSize=V.mapSize,W.shadowCameraNear=V.camera.near,W.shadowCameraFar=V.camera.far,i.pointShadow[p]=W,i.pointShadowMap[p]=X,i.pointShadowMatrix[p]=I.shadow.matrix,w++}i.point[p]=B,p++}else if(I.isHemisphereLight){let B=t.get(I);B.skyColor.copy(I.color).multiplyScalar(Y),B.groundColor.copy(I.groundColor).multiplyScalar(Y),i.hemi[b]=B,b++}}A>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=_t.LTC_FLOAT_1,i.rectAreaLTC2=_t.LTC_FLOAT_2):(i.rectAreaLTC1=_t.LTC_HALF_1,i.rectAreaLTC2=_t.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;let N=i.hash;(N.sunLength!==m||N.directionalLength!==f||N.pointLength!==p||N.spotLength!==M||N.rectAreaLength!==A||N.hemiLength!==b||N.numSunShadows!==g||N.numDirectionalShadows!==T||N.numPointShadows!==w||N.numSpotShadows!==_||N.numSpotMaps!==S||N.numLightProbes!==R)&&(i.sun.length=m,i.directional.length=f,i.spot.length=M,i.rectArea.length=A,i.point.length=p,i.hemi.length=b,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=v,i.sunShadowCascade.length=v,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.directionalShadowMatrix.length=T,i.pointShadow.length=w,i.pointShadowMap.length=w,i.pointShadowMatrix.length=w,i.spotShadow.length=_,i.spotShadowMap.length=_,i.spotLightMatrix.length=_+S-L,i.spotLightMap.length=S,i.numSpotLightShadowsWithMaps=L,i.numLightProbes=R,N.sunLength=m,N.directionalLength=f,N.pointLength=p,N.spotLength=M,N.rectAreaLength=A,N.hemiLength=b,N.numSunShadows=g,N.numDirectionalShadows=T,N.numPointShadows=w,N.numSpotShadows=_,N.numSpotMaps=S,N.numLightProbes=R,i.version=X_++)}function l(c,h){let d=0,u=0,m=0,g=0,v=0,f=0,p=h.matrixWorldInverse;for(let M=0,A=c.length;M<A;M++){let b=c[M];if(b.isSunLight){let T=i.sun[d];T.direction.setFromMatrixPosition(b.matrixWorld),T.direction.transformDirection(p),d++}else if(b.isDirectionalLight){let T=i.directional[u];T.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(p),u++}else if(b.isSpotLight){let T=i.spot[g];T.position.setFromMatrixPosition(b.matrixWorld),T.position.applyMatrix4(p),T.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(p),g++}else if(b.isRectAreaLight){let T=i.rectArea[v];T.position.setFromMatrixPosition(b.matrixWorld),T.position.applyMatrix4(p),a.identity(),r.copy(b.matrixWorld),r.premultiply(p),a.extractRotation(r),T.halfWidth.set(b.width*.5,0,0),T.halfHeight.set(0,b.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),v++}else if(b.isPointLight){let T=i.point[m];T.position.setFromMatrixPosition(b.matrixWorld),T.position.applyMatrix4(p),m++}else if(b.isHemisphereLight){let T=i.hemi[f];T.direction.setFromMatrixPosition(b.matrixWorld),T.direction.transformDirection(p),f++}}}return{setup:o,setupView:l,state:i}}function xd(n){let t=new q_(n),e=[],i=[],s=[];function r(d){h.camera=d,e.length=0,i.length=0,s.length=0}function a(d){d.isLightProbeGrid?s.push(d):e.push(d)}function o(d){i.push(d)}function l(){t.setup(e),s.sort((d,u)=>d.priority-u.priority||d.id-u.id)}function c(d){t.setupView(e,d)}let h={lightsArray:e,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Y_(n){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new xd(n),t.set(s,[o])):r>=a.length?(o=new xd(n),a.push(o)):o=a[r],o}function i(){t=new WeakMap}return{get:e,dispose:i}}var J_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Z_=`uniform sampler2D shadow_pass;
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
}`,K_=[new F(1,0,0),new F(-1,0,0),new F(0,1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1)],j_=[new F(0,-1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1),new F(0,-1,0),new F(0,-1,0)],vd=new ee,Nr=new F,Mc=new F;function Q_(n,t,e){let i=new Ai,s=new Yt,r=new Yt,a=new ve,o=new Ra,l=new Ca,c={},h=e.maxTextureSize,d={[Li]:Ye,[Ye]:Li,[Ve]:Ve},u=new Mn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Yt},radius:{value:4}},vertexShader:J_,fragmentShader:Z_}),m=u.clone();m.defines.HORIZONTAL_PASS=1;let g=new Ue;g.setAttribute("position",new an(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new yt(g,u),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ji;let p=this.type;this.render=function(w,_,S){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||w.length===0)return;this.type===fu&&(Nt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ji);let L=n.getRenderTarget(),R=n.getActiveCubeFace(),N=n.getActiveMipmapLevel(),U=n.state;U.setBlending(Zi),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let H=p!==this.type;H&&_.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(q=>q.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,q=w.length;I<q;I++){let Y=w[I],G=Y.shadow;if(G===void 0){Nt("WebGLShadowMap:",Y,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);let X=G.getFrameExtents();s.multiply(X),r.copy(G.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/X.x),s.x=r.x*X.x,G.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/X.y),s.y=r.y*X.y,G.mapSize.y=r.y));let B=n.state.buffers.depth.getReversed();if(G.camera._reversedDepth=B,G.map===null||H===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===Fs){if(Y.isPointLight){Nt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new mn(s.x,s.y,{format:Ni,type:Dn,minFilter:on,magFilter:on,generateMipmaps:!1}),G.map.texture.name=Y.name+".shadowMap",G.map.depthTexture=new ii(s.x,s.y,Sn),G.map.depthTexture.name=Y.name+".shadowMapDepth",G.map.depthTexture.format=ti,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=He,G.map.depthTexture.magFilter=He}else Y.isPointLight?(G.map=new Ur(s.x),G.map.depthTexture=new pr(s.x,Nn)):(G.map=new mn(s.x,s.y),G.map.depthTexture=new ii(s.x,s.y,Nn)),G.map.depthTexture.name=Y.name+".shadowMap",G.map.depthTexture.format=ti,this.type===Ji?(G.map.depthTexture.compareFunction=B?ac:rc,G.map.depthTexture.minFilter=on,G.map.depthTexture.magFilter=on):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=He,G.map.depthTexture.magFilter=He);G.camera.updateProjectionMatrix()}G.map.isWebGLCubeRenderTarget!==!0&&(G.map.width!==s.x||G.map.height!==s.y)&&G.map.setSize(s.x,s.y);let V=G.map.isWebGLCubeRenderTarget?6:G.getViewportCount();Y.isPointLight!==!0&&G.updateMatrices(Y,S);let W=(G.camera.layers.mask&4294967294)!==0?G.camera.layers:S.layers;for(let rt=0;rt<V;rt++){let Et=G.getCamera(rt);if(Y.isPointLight){let J=G.camera,it=G.matrix,mt=Y.distance||J.far;mt!==J.far&&(J.far=mt,J.updateProjectionMatrix()),Nr.setFromMatrixPosition(Y.matrixWorld),J.position.copy(Nr),Mc.copy(J.position),Mc.add(K_[rt]),J.up.copy(j_[rt]),J.lookAt(Mc),J.updateMatrixWorld(),it.makeTranslation(-Nr.x,-Nr.y,-Nr.z),vd.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),G._frustum.setFromProjectionMatrix(vd,J.coordinateSystem,J.reversedDepth)}if(G.map.isWebGLCubeRenderTarget)n.setRenderTarget(G.map,rt),n.clear();else{rt===0&&(n.setRenderTarget(G.map),n.clear());let J=G.getViewport(rt);a.set(r.x*J.x,r.y*J.y,r.x*J.z,r.y*J.w),U.viewport(a)}i=G.getFrustum(rt),b(_,S,Et,Y,W,this.type)}G.isPointLightShadow!==!0&&this.type===Fs&&M(G,S),G.needsUpdate=!1}p=this.type,f.needsUpdate=!1,n.setRenderTarget(L,R,N)};function M(w,_){let S=t.update(v);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,m.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,m.needsUpdate=!0),w.mapPass===null?w.mapPass=new mn(s.x,s.y,{format:Ni,type:Dn}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),u.uniforms.shadow_pass.value=w.map.depthTexture,u.uniforms.resolution.value.set(w.map.width,w.map.height),u.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(_,null,S,u,v,null),m.uniforms.shadow_pass.value=w.mapPass.texture,m.uniforms.resolution.value.set(w.map.width,w.map.height),m.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(_,null,S,m,v,null)}function A(w,_,S,L){let R=null,N=S.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(N!==void 0)R=N;else if(R=S.isPointLight===!0?l:o,n.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){let U=R.uuid,H=_.uuid,I=c[U];I===void 0&&(I={},c[U]=I);let q=I[H];q===void 0&&(q=R.clone(),I[H]=q,_.addEventListener("dispose",T)),R=q}if(R.visible=_.visible,R.wireframe=_.wireframe,L===Fs?R.side=_.shadowSide!==null?_.shadowSide:_.side:R.side=_.shadowSide!==null?_.shadowSide:d[_.side],R.alphaMap=_.alphaMap,R.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,R.map=_.map,R.clipShadows=_.clipShadows,R.clippingPlanes=_.clippingPlanes,R.clipIntersection=_.clipIntersection,R.displacementMap=_.displacementMap,R.displacementScale=_.displacementScale,R.displacementBias=_.displacementBias,R.wireframeLinewidth=_.wireframeLinewidth,R.linewidth=_.linewidth,S.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let U=n.properties.get(R);U.light=S}return R}function b(w,_,S,L,R,N){if(w.visible===!1)return;if(w.layers.test(R)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&N===Fs)&&(!w.frustumCulled||w.intersectsFrustum(i))){w.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,w.matrixWorld);let I=t.update(w),q=w.material;if(Array.isArray(q)){let Y=I.groups;for(let G=0,X=Y.length;G<X;G++){let B=Y[G],V=q[B.materialIndex];if(V&&V.visible){let W=A(w,V,L,N);w.onBeforeShadow(n,w,_,S,I,W,B),n.renderBufferDirect(S,null,I,W,w,B),w.onAfterShadow(n,w,_,S,I,W,B)}}}else if(q.visible){let Y=A(w,q,L,N);w.onBeforeShadow(n,w,_,S,I,Y,null),n.renderBufferDirect(S,null,I,Y,w,null),w.onAfterShadow(n,w,_,S,I,Y,null)}}let H=w.children;for(let I=0,q=H.length;I<q;I++)b(H[I],_,S,L,R,N)}function T(w){w.target.removeEventListener("dispose",T);for(let S in c){let L=c[S],R=w.target.uuid;R in L&&(L[R].dispose(),delete L[R])}}}function tx(n,t){function e(){let C=!1,Q=new ve,Z=null,ht=new ve(0,0,0,0);return{setMask:function(at){Z!==at&&!C&&(n.colorMask(at,at,at,at),Z=at)},setLocked:function(at){C=at},setClear:function(at,lt,At,Wt,st){st===!0&&(at*=Wt,lt*=Wt,At*=Wt),Q.set(at,lt,At,Wt),ht.equals(Q)===!1&&(n.clearColor(at,lt,At,Wt),ht.copy(Q))},reset:function(){C=!1,Z=null,ht.set(-1,0,0,0)}}}function i(){let C=!1,Q=!1,Z=null,ht=null,at=null;return{setReversed:function(lt){if(Q!==lt){let At=t.get("EXT_clip_control");lt?At.clipControlEXT(At.LOWER_LEFT_EXT,At.ZERO_TO_ONE_EXT):At.clipControlEXT(At.LOWER_LEFT_EXT,At.NEGATIVE_ONE_TO_ONE_EXT),Q=lt;let Wt=at;at=null,this.setClear(Wt)}},getReversed:function(){return Q},setTest:function(lt){lt?et(n.DEPTH_TEST):Rt(n.DEPTH_TEST)},setMask:function(lt){Z!==lt&&!C&&(n.depthMask(lt),Z=lt)},setFunc:function(lt){if(Q&&(lt=qu[lt]),ht!==lt){switch(lt){case fa:n.depthFunc(n.NEVER);break;case pa:n.depthFunc(n.ALWAYS);break;case ma:n.depthFunc(n.LESS);break;case Ts:n.depthFunc(n.LEQUAL);break;case ga:n.depthFunc(n.EQUAL);break;case _a:n.depthFunc(n.GEQUAL);break;case xa:n.depthFunc(n.GREATER);break;case va:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ht=lt}},setLocked:function(lt){C=lt},setClear:function(lt){at!==lt&&(at=lt,Q&&(lt=1-lt),n.clearDepth(lt))},reset:function(){C=!1,Z=null,ht=null,at=null,Q=!1}}}function s(){let C=!1,Q=null,Z=null,ht=null,at=null,lt=null,At=null,Wt=null,st=null;return{setTest:function(Pt){C||(Pt?et(n.STENCIL_TEST):Rt(n.STENCIL_TEST))},setMask:function(Pt){Q!==Pt&&!C&&(n.stencilMask(Pt),Q=Pt)},setFunc:function(Pt,Gt,gt){(Z!==Pt||ht!==Gt||at!==gt)&&(n.stencilFunc(Pt,Gt,gt),Z=Pt,ht=Gt,at=gt)},setOp:function(Pt,Gt,gt){(lt!==Pt||At!==Gt||Wt!==gt)&&(n.stencilOp(Pt,Gt,gt),lt=Pt,At=Gt,Wt=gt)},setLocked:function(Pt){C=Pt},setClear:function(Pt){st!==Pt&&(n.clearStencil(Pt),st=Pt)},reset:function(){C=!1,Q=null,Z=null,ht=null,at=null,lt=null,At=null,Wt=null,st=null}}}let r=new e,a=new i,o=new s,l={},c=new WeakMap,h={},d={},u={},m=new WeakMap,g=[],v=null,f=!1,p=null,M=null,A=null,b=null,T=null,w=null,_=null,S=new qt(0,0,0),L=0,R=!1,N=null,U=null,H=null,I=null,q=null,Y=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,X=0,B=n.getParameter(n.VERSION);B.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(B)[1]),G=X>=1):B.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),G=X>=2);let V=null,W={},rt=n.getParameter(n.SCISSOR_BOX),Et=n.getParameter(n.VIEWPORT),J=new ve().fromArray(rt),it=new ve().fromArray(Et);function mt(C,Q,Z,ht){let at=new Uint8Array(4),lt=n.createTexture();n.bindTexture(C,lt),n.texParameteri(C,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(C,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let At=0;At<Z;At++)C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY?n.texImage3D(Q,0,n.RGBA,1,1,ht,0,n.RGBA,n.UNSIGNED_BYTE,at):n.texImage2D(Q+At,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,at);return lt}let wt={};wt[n.TEXTURE_2D]=mt(n.TEXTURE_2D,n.TEXTURE_2D,1),wt[n.TEXTURE_CUBE_MAP]=mt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),wt[n.TEXTURE_2D_ARRAY]=mt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),wt[n.TEXTURE_3D]=mt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),et(n.DEPTH_TEST),a.setFunc(Ts),Je(!1),xt(zl),et(n.CULL_FACE),Se(Zi);function et(C){h[C]!==!0&&(n.enable(C),h[C]=!0)}function Rt(C){h[C]!==!1&&(n.disable(C),h[C]=!1)}function ce(C,Q){return u[C]!==Q?(n.bindFramebuffer(C,Q),u[C]=Q,C===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=Q),C===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=Q),!0):!1}function Ct(C,Q){let Z=g,ht=!1;if(C){Z=m.get(Q),Z===void 0&&(Z=[],m.set(Q,Z));let at=C.textures;if(Z.length!==at.length||Z[0]!==n.COLOR_ATTACHMENT0){for(let lt=0,At=at.length;lt<At;lt++)Z[lt]=n.COLOR_ATTACHMENT0+lt;Z.length=at.length,ht=!0}}else Z[0]!==n.BACK&&(Z[0]=n.BACK,ht=!0);ht&&n.drawBuffers(Z)}function ne(C){return v!==C?(n.useProgram(C),v=C,!0):!1}let ae={[Ki]:n.FUNC_ADD,[mu]:n.FUNC_SUBTRACT,[gu]:n.FUNC_REVERSE_SUBTRACT};ae[_u]=n.MIN,ae[xu]=n.MAX;let Bt={[vu]:n.ZERO,[yu]:n.ONE,[Mu]:n.SRC_COLOR,[Vl]:n.SRC_ALPHA,[Au]:n.SRC_ALPHA_SATURATE,[wu]:n.DST_COLOR,[bu]:n.DST_ALPHA,[Su]:n.ONE_MINUS_SRC_COLOR,[Wl]:n.ONE_MINUS_SRC_ALPHA,[Tu]:n.ONE_MINUS_DST_COLOR,[Eu]:n.ONE_MINUS_DST_ALPHA,[Ru]:n.CONSTANT_COLOR,[Cu]:n.ONE_MINUS_CONSTANT_COLOR,[Iu]:n.CONSTANT_ALPHA,[Pu]:n.ONE_MINUS_CONSTANT_ALPHA};function Se(C,Q,Z,ht,at,lt,At,Wt,st,Pt){if(C===Zi){f===!0&&(Rt(n.BLEND),f=!1);return}if(f===!1&&(et(n.BLEND),f=!0),C!==pu){if(C!==p||Pt!==R){if((M!==Ki||T!==Ki)&&(n.blendEquation(n.FUNC_ADD),M=Ki,T=Ki),Pt)switch(C){case Os:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case kl:n.blendFunc(n.ONE,n.ONE);break;case Gl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Hl:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Dt("WebGLState: Invalid blending: ",C);break}else switch(C){case Os:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case kl:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Gl:Dt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Hl:Dt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Dt("WebGLState: Invalid blending: ",C);break}A=null,b=null,w=null,_=null,S.set(0,0,0),L=0,p=C,R=Pt}return}at=at||Q,lt=lt||Z,At=At||ht,(Q!==M||at!==T)&&(n.blendEquationSeparate(ae[Q],ae[at]),M=Q,T=at),(Z!==A||ht!==b||lt!==w||At!==_)&&(n.blendFuncSeparate(Bt[Z],Bt[ht],Bt[lt],Bt[At]),A=Z,b=ht,w=lt,_=At),(Wt.equals(S)===!1||st!==L)&&(n.blendColor(Wt.r,Wt.g,Wt.b,st),S.copy(Wt),L=st),p=C,R=!1}function ue(C,Q){C.side===Ve?Rt(n.CULL_FACE):et(n.CULL_FACE);let Z=C.side===Ye;Q&&(Z=!Z),Je(Z),C.blending===Os&&C.transparent===!1?Se(Zi):Se(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),a.setFunc(C.depthFunc),a.setTest(C.depthTest),a.setMask(C.depthWrite),r.setMask(C.colorWrite);let ht=C.stencilWrite;o.setTest(ht),ht&&(o.setMask(C.stencilWriteMask),o.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),o.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),$t(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?et(n.SAMPLE_ALPHA_TO_COVERAGE):Rt(n.SAMPLE_ALPHA_TO_COVERAGE)}function Je(C){N!==C&&(C?n.frontFace(n.CW):n.frontFace(n.CCW),N=C)}function xt(C){C!==uu?(et(n.CULL_FACE),C!==U&&(C===zl?n.cullFace(n.BACK):C===du?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Rt(n.CULL_FACE),U=C}function zt(C){C!==H&&(G&&n.lineWidth(C),H=C)}function $t(C,Q,Z){C?(et(n.POLYGON_OFFSET_FILL),(I!==Q||q!==Z)&&(I=Q,q=Z,a.getReversed()&&(Q=-Q,Z=-Z),n.polygonOffset(Q,Z))):Rt(n.POLYGON_OFFSET_FILL)}function ge(C){C?et(n.SCISSOR_TEST):Rt(n.SCISSOR_TEST)}function Me(C){C===void 0&&(C=n.TEXTURE0+Y-1),V!==C&&(n.activeTexture(C),V=C)}function We(C,Q,Z){Z===void 0&&(V===null?Z=n.TEXTURE0+Y-1:Z=V);let ht=W[Z];ht===void 0&&(ht={type:void 0,texture:void 0},W[Z]=ht),(ht.type!==C||ht.texture!==Q)&&(V!==Z&&(n.activeTexture(Z),V=Z),n.bindTexture(C,Q||wt[C]),ht.type=C,ht.texture=Q)}function D(){let C=W[V];C!==void 0&&C.type!==void 0&&(n.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function xn(){try{n.compressedTexImage2D(...arguments)}catch(C){Dt("WebGLState:",C)}}function _e(){try{n.compressedTexImage3D(...arguments)}catch(C){Dt("WebGLState:",C)}}function xe(){try{n.texSubImage2D(...arguments)}catch(C){Dt("WebGLState:",C)}}function pt(){try{n.texSubImage3D(...arguments)}catch(C){Dt("WebGLState:",C)}}function Pe(){try{n.compressedTexSubImage2D(...arguments)}catch(C){Dt("WebGLState:",C)}}function Lt(){try{n.compressedTexSubImage3D(...arguments)}catch(C){Dt("WebGLState:",C)}}function Ft(){try{n.texStorage2D(...arguments)}catch(C){Dt("WebGLState:",C)}}function E(){try{n.texStorage3D(...arguments)}catch(C){Dt("WebGLState:",C)}}function x(){try{n.texImage2D(...arguments)}catch(C){Dt("WebGLState:",C)}}function z(){try{n.texImage3D(...arguments)}catch(C){Dt("WebGLState:",C)}}function nt(C){return d[C]!==void 0?d[C]:n.getParameter(C)}function tt(C,Q){d[C]!==Q&&(n.pixelStorei(C,Q),d[C]=Q)}function ot(C){J.equals(C)===!1&&(n.scissor(C.x,C.y,C.z,C.w),J.copy(C))}function dt(C){it.equals(C)===!1&&(n.viewport(C.x,C.y,C.z,C.w),it.copy(C))}function K(C,Q){let Z=c.get(Q);Z===void 0&&(Z=new WeakMap,c.set(Q,Z));let ht=Z.get(C);ht===void 0&&(ht=n.getUniformBlockIndex(Q,C.name),n.uniformBlockBinding(Q,ht,ht),Z.set(C,ht))}function j(C,Q,Z){let at=c.get(Q).get(C);l[at]!==Z&&(n.bindBufferBase(n.UNIFORM_BUFFER,at,Z),l[at]=Z)}function ct(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),h={},d={},V=null,W={},u={},l={},m=new WeakMap,g=[],v=null,f=!1,p=null,M=null,A=null,b=null,T=null,w=null,_=null,S=new qt(0,0,0),L=0,R=!1,N=null,U=null,H=null,I=null,q=null,J.set(0,0,n.canvas.width,n.canvas.height),it.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:et,disable:Rt,bindFramebuffer:ce,drawBuffers:Ct,useProgram:ne,setBlending:Se,setMaterial:ue,setFlipSided:Je,setCullFace:xt,setLineWidth:zt,setPolygonOffset:$t,setScissorTest:ge,activeTexture:Me,bindTexture:We,unbindTexture:D,compressedTexImage2D:xn,compressedTexImage3D:_e,texImage2D:x,texImage3D:z,pixelStorei:tt,getParameter:nt,updateUBOMapping:K,uniformBlockBinding:j,texStorage2D:Ft,texStorage3D:E,texSubImage2D:xe,texSubImage3D:pt,compressedTexSubImage2D:Pe,compressedTexSubImage3D:Lt,scissor:ot,viewport:dt,reset:ct}}function ex(n,t,e,i,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Yt,h=new WeakMap,d=new Set,u,m=new WeakMap,g=new Set,v=new FinalizationRegistry(E=>g.delete(E)),f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(E,x){return f?new OffscreenCanvas(E,x):ir("canvas")}function M(E,x,z){let nt=1,tt=Ft(E);if((tt.width>z||tt.height>z)&&(nt=z/Math.max(tt.width,tt.height)),nt<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){let ot=Math.floor(nt*tt.width),dt=Math.floor(nt*tt.height);u===void 0&&(u=p(ot,dt));let K=x?p(ot,dt):u;return K.width=ot,K.height=dt,K.getContext("2d").drawImage(E,0,0,ot,dt),Nt("WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+ot+"x"+dt+")."),K}else return"data"in E&&Nt("WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),E;return E}function A(E){return E.generateMipmaps}function b(E){n.generateMipmap(E)}function T(E){return E.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?n.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function w(E,x,z,nt,tt,ot=!1){if(E!==null){if(n[E]!==void 0)return n[E];Nt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let dt;nt&&(dt=t.get("EXT_texture_norm16"),dt||Nt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let K=x;if(x===n.RED&&(z===n.FLOAT&&(K=n.R32F),z===n.HALF_FLOAT&&(K=n.R16F),z===n.UNSIGNED_BYTE&&(K=n.R8),z===n.UNSIGNED_SHORT&&dt&&(K=dt.R16_EXT),z===n.SHORT&&dt&&(K=dt.R16_SNORM_EXT)),x===n.RED_INTEGER&&(z===n.UNSIGNED_BYTE&&(K=n.R8UI),z===n.UNSIGNED_SHORT&&(K=n.R16UI),z===n.UNSIGNED_INT&&(K=n.R32UI),z===n.BYTE&&(K=n.R8I),z===n.SHORT&&(K=n.R16I),z===n.INT&&(K=n.R32I)),x===n.RG&&(z===n.FLOAT&&(K=n.RG32F),z===n.HALF_FLOAT&&(K=n.RG16F),z===n.UNSIGNED_BYTE&&(K=n.RG8),z===n.UNSIGNED_SHORT&&dt&&(K=dt.RG16_EXT),z===n.SHORT&&dt&&(K=dt.RG16_SNORM_EXT)),x===n.RG_INTEGER&&(z===n.UNSIGNED_BYTE&&(K=n.RG8UI),z===n.UNSIGNED_SHORT&&(K=n.RG16UI),z===n.UNSIGNED_INT&&(K=n.RG32UI),z===n.BYTE&&(K=n.RG8I),z===n.SHORT&&(K=n.RG16I),z===n.INT&&(K=n.RG32I)),x===n.RGB_INTEGER&&(z===n.UNSIGNED_BYTE&&(K=n.RGB8UI),z===n.UNSIGNED_SHORT&&(K=n.RGB16UI),z===n.UNSIGNED_INT&&(K=n.RGB32UI),z===n.BYTE&&(K=n.RGB8I),z===n.SHORT&&(K=n.RGB16I),z===n.INT&&(K=n.RGB32I)),x===n.RGBA_INTEGER&&(z===n.UNSIGNED_BYTE&&(K=n.RGBA8UI),z===n.UNSIGNED_SHORT&&(K=n.RGBA16UI),z===n.UNSIGNED_INT&&(K=n.RGBA32UI),z===n.BYTE&&(K=n.RGBA8I),z===n.SHORT&&(K=n.RGBA16I),z===n.INT&&(K=n.RGBA32I)),x===n.RGB&&(z===n.UNSIGNED_SHORT&&dt&&(K=dt.RGB16_EXT),z===n.SHORT&&dt&&(K=dt.RGB16_SNORM_EXT),z===n.UNSIGNED_INT_5_9_9_9_REV&&(K=n.RGB9_E5),z===n.UNSIGNED_INT_10F_11F_11F_REV&&(K=n.R11F_G11F_B10F)),x===n.RGBA){let j=ot?nr:Kt.getTransfer(tt);z===n.FLOAT&&(K=n.RGBA32F),z===n.HALF_FLOAT&&(K=n.RGBA16F),z===n.UNSIGNED_BYTE&&(K=j===oe?n.SRGB8_ALPHA8:n.RGBA8),z===n.UNSIGNED_SHORT&&dt&&(K=dt.RGBA16_EXT),z===n.SHORT&&dt&&(K=dt.RGBA16_SNORM_EXT),z===n.UNSIGNED_SHORT_4_4_4_4&&(K=n.RGBA4),z===n.UNSIGNED_SHORT_5_5_5_1&&(K=n.RGB5_A1)}return(K===n.R16F||K===n.R32F||K===n.RG16F||K===n.RG32F||K===n.RGBA16F||K===n.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function _(E,x){let z;return E?x===null||x===Nn||x===Qi?z=n.DEPTH24_STENCIL8:x===Sn?z=n.DEPTH32F_STENCIL8:x===zs&&(z=n.DEPTH24_STENCIL8,Nt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Nn||x===Qi?z=n.DEPTH_COMPONENT24:x===Sn?z=n.DEPTH_COMPONENT32F:x===zs&&(z=n.DEPTH_COMPONENT16),z}function S(E,x){return A(E)===!0||E.isFramebufferTexture&&E.minFilter!==He&&E.minFilter!==on?Math.log2(Math.max(x.width,x.height))+1:E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?x.mipmaps.length:1}function L(E){let x=new WeakRef(E);i.get(E).__ref=x,g.add(x),v.register(E,x,x)}function R(E){let x=i.get(E).__ref;x!==void 0&&(g.delete(x),v.unregister(x))}function N(E){H(E.target)}function U(E){I(E.target)}function H(E){E.removeEventListener("dispose",N),R(E),Y(E),E.isVideoTexture&&h.delete(E),E.isHTMLTexture&&d.delete(E)}function I(E){E.removeEventListener("dispose",U),R(E),X(E)}function q(){for(let E of g){let x=E.deref();x!==void 0&&(x.isRenderTarget===!0?I(x):H(x))}g.clear(),d.clear()}function Y(E){let x=i.get(E);if(x.__webglInit===void 0)return;let z=E.source,nt=m.get(z);if(nt){let tt=nt[x.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&G(E),Object.keys(nt).length===0&&m.delete(z)}i.remove(E)}function G(E){let x=i.get(E);n.deleteTexture(x.__webglTexture);let z=E.source,nt=m.get(z);delete nt[x.__cacheKey],a.memory.textures--}function X(E){let x=i.get(E);x.__depthDisposeCallback&&x.__depthDisposeCallback();let z=E.depthTexture;if(z&&z.renderTarget===E&&H(z),E.isWebGLCubeRenderTarget)for(let tt=0;tt<6;tt++){if(Array.isArray(x.__webglFramebuffer[tt]))for(let ot=0;ot<x.__webglFramebuffer[tt].length;ot++)n.deleteFramebuffer(x.__webglFramebuffer[tt][ot]);else n.deleteFramebuffer(x.__webglFramebuffer[tt]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[tt])}else{if(Array.isArray(x.__webglFramebuffer))for(let tt=0;tt<x.__webglFramebuffer.length;tt++)n.deleteFramebuffer(x.__webglFramebuffer[tt]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let tt=0;tt<x.__webglColorRenderbuffer.length;tt++)x.__webglColorRenderbuffer[tt]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[tt]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let nt=E.textures;for(let tt=0,ot=nt.length;tt<ot;tt++){let dt=i.get(nt[tt]);dt.__webglTexture&&(n.deleteTexture(dt.__webglTexture),a.memory.textures--),i.remove(nt[tt])}i.remove(E)}let B=0;function V(){B=0}function W(){return B}function rt(E){B=E}function Et(){let E=B;return E>=s.maxTextures&&Nt("WebGLTextures: Trying to use "+(E+1)+" texture units while this GPU supports only "+s.maxTextures),B+=1,E}function J(E){let x=[];return x.push(E.wrapS),x.push(E.wrapT),x.push(E.wrapR||0),x.push(E.magFilter),x.push(E.minFilter),x.push(E.anisotropy),x.push(E.internalFormat),x.push(E.format),x.push(E.type),x.push(E.generateMipmaps),x.push(E.mipmapsAutoUpdate),x.push(E.premultiplyAlpha),x.push(E.flipY),x.push(E.unpackAlignment),x.push(E.colorSpace),x.join()}function it(E,x){let z=i.get(E);if(E.isVideoTexture&&Pe(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&z.__version!==E.version){let nt=E.image;if(nt===null)Nt("WebGLRenderer: Texture marked for update but no image data found.");else if(nt.complete===!1)Nt("WebGLRenderer: Texture marked for update but image is incomplete");else{ue(z,E,x);return}}else E.isExternalTexture&&(z.__webglTexture=E.sourceTexture?E.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,z.__webglTexture,n.TEXTURE0+x)}function mt(E,x){let z=i.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&z.__version!==E.version){ue(z,E,x);return}else E.isExternalTexture&&(z.__webglTexture=E.sourceTexture?E.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,z.__webglTexture,n.TEXTURE0+x)}function wt(E,x){let z=i.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&z.__version!==E.version){ue(z,E,x);return}e.bindTexture(n.TEXTURE_3D,z.__webglTexture,n.TEXTURE0+x)}function et(E,x){let z=i.get(E);if(E.version>0&&z.__version!==E.version){Je(z,E,x);return}e.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture,n.TEXTURE0+x)}let Rt={[As]:n.REPEAT,[kn]:n.CLAMP_TO_EDGE,[ya]:n.MIRRORED_REPEAT},ce={[He]:n.NEAREST,[Du]:n.NEAREST_MIPMAP_NEAREST,[wr]:n.NEAREST_MIPMAP_LINEAR,[on]:n.LINEAR,[Xa]:n.LINEAR_MIPMAP_NEAREST,[ri]:n.LINEAR_MIPMAP_LINEAR},Ct={[Bu]:n.NEVER,[oc]:n.ALWAYS,[zu]:n.LESS,[rc]:n.LEQUAL,[ku]:n.EQUAL,[ac]:n.GEQUAL,[Gu]:n.GREATER,[Hu]:n.NOTEQUAL};function ne(E,x){if(x.type===Sn&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===on||x.magFilter===Xa||x.magFilter===wr||x.magFilter===ri||x.minFilter===on||x.minFilter===Xa||x.minFilter===wr||x.minFilter===ri)&&Nt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(E,n.TEXTURE_WRAP_S,Rt[x.wrapS]),n.texParameteri(E,n.TEXTURE_WRAP_T,Rt[x.wrapT]),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,Rt[x.wrapR]),n.texParameteri(E,n.TEXTURE_MAG_FILTER,ce[x.magFilter]),n.texParameteri(E,n.TEXTURE_MIN_FILTER,ce[x.minFilter]),x.compareFunction&&(n.texParameteri(E,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(E,n.TEXTURE_COMPARE_FUNC,Ct[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===He||x.minFilter!==wr&&x.minFilter!==ri||x.type===Sn&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){let z=t.get("EXT_texture_filter_anisotropic");n.texParameterf(E,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function ae(E,x){let z=!1;E.__webglInit===void 0&&(E.__webglInit=!0,x.addEventListener("dispose",N),L(x));let nt=x.source,tt=m.get(nt);tt===void 0&&(tt={},m.set(nt,tt));let ot=J(x);if(ot!==E.__cacheKey){tt[ot]===void 0&&(tt[ot]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,z=!0),tt[ot].usedTimes++;let dt=tt[E.__cacheKey];dt!==void 0&&(tt[E.__cacheKey].usedTimes--,dt.usedTimes===0&&G(x)),E.__cacheKey=ot,E.__webglTexture=tt[ot].texture}return z}function Bt(E,x,z){return Math.floor(Math.floor(E/z)/x)}function Se(E,x,z,nt){let ot=E.updateRanges;if(ot.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,x.width,x.height,z,nt,x.data);else{ot.sort((C,Q)=>C.start-Q.start);let dt=0;for(let C=1;C<ot.length;C++){let Q=ot[dt],Z=ot[C],ht=Q.start+Q.count,at=Bt(Z.start,x.width,4),lt=Bt(Q.start,x.width,4);Z.start<=ht+1&&at===lt&&Bt(Z.start+Z.count-1,x.width,4)===at?Q.count=Math.max(Q.count,Z.start+Z.count-Q.start):(++dt,ot[dt]=Z)}ot.length=dt+1;let K=e.getParameter(n.UNPACK_ROW_LENGTH),j=e.getParameter(n.UNPACK_SKIP_PIXELS),ct=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,x.width);for(let C=0,Q=ot.length;C<Q;C++){let Z=ot[C],ht=Math.floor(Z.start/4),at=Math.ceil(Z.count/4),lt=ht%x.width,At=Math.floor(ht/x.width),Wt=at,st=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,lt),e.pixelStorei(n.UNPACK_SKIP_ROWS,At),e.texSubImage2D(n.TEXTURE_2D,0,lt,At,Wt,st,z,nt,x.data)}E.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,K),e.pixelStorei(n.UNPACK_SKIP_PIXELS,j),e.pixelStorei(n.UNPACK_SKIP_ROWS,ct)}}function ue(E,x,z){let nt=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(nt=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(nt=n.TEXTURE_3D);let tt=ae(E,x),ot=x.source;e.bindTexture(nt,E.__webglTexture,n.TEXTURE0+z);let dt=i.get(ot);if(ot.version!==dt.__version||tt===!0){if(e.activeTexture(n.TEXTURE0+z),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){let st=Kt.getPrimaries(Kt.workingColorSpace),Pt=x.colorSpace===oi?null:Kt.getPrimaries(x.colorSpace),Gt=x.colorSpace===oi||st===Pt?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Gt)}e.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment);let j=M(x.image,!1,s.maxTextureSize);j=Lt(x,j);let ct=r.convert(x.format,x.colorSpace),C=r.convert(x.type),Q=w(x.internalFormat,ct,C,x.normalized,x.colorSpace,x.isVideoTexture);ne(nt,x);let Z,ht=x.mipmaps,at=x.isVideoTexture!==!0,lt=dt.__version===void 0||tt===!0,At=ot.dataReady,Wt=S(x,j);if(x.isDepthTexture)Q=_(x.format===ai,x.type),lt&&(at?e.texStorage2D(n.TEXTURE_2D,1,Q,j.width,j.height):e.texImage2D(n.TEXTURE_2D,0,Q,j.width,j.height,0,ct,C,null));else if(x.isDataTexture)if(ht.length>0){at&&lt&&e.texStorage2D(n.TEXTURE_2D,Wt,Q,ht[0].width,ht[0].height);for(let st=0,Pt=ht.length;st<Pt;st++)Z=ht[st],at?At&&e.texSubImage2D(n.TEXTURE_2D,st,0,0,Z.width,Z.height,ct,C,Z.data):e.texImage2D(n.TEXTURE_2D,st,Q,Z.width,Z.height,0,ct,C,Z.data);x.generateMipmaps=!1}else at?(lt&&e.texStorage2D(n.TEXTURE_2D,Wt,Q,j.width,j.height),At&&Se(x,j,ct,C)):e.texImage2D(n.TEXTURE_2D,0,Q,j.width,j.height,0,ct,C,j.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){at&&lt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Wt,Q,ht[0].width,ht[0].height,j.depth);for(let st=0,Pt=ht.length;st<Pt;st++)if(Z=ht[st],x.format!==Un)if(ct!==null)if(at){if(At)if(x.layerUpdates.size>0){let Gt=pc(Z.width,Z.height,x.format,x.type);for(let gt of x.layerUpdates){let le=Z.data.subarray(gt*Gt/Z.data.BYTES_PER_ELEMENT,(gt+1)*Gt/Z.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,st,0,0,gt,Z.width,Z.height,1,ct,le)}}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,st,0,0,0,Z.width,Z.height,j.depth,ct,Z.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,st,Q,Z.width,Z.height,j.depth,0,Z.data,0,0);else Nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else at?At&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,st,0,0,0,Z.width,Z.height,j.depth,ct,C,Z.data):e.texImage3D(n.TEXTURE_2D_ARRAY,st,Q,Z.width,Z.height,j.depth,0,ct,C,Z.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{at&&lt&&e.texStorage2D(n.TEXTURE_2D,Wt,Q,ht[0].width,ht[0].height);for(let st=0,Pt=ht.length;st<Pt;st++)Z=ht[st],x.format!==Un?ct!==null?at?At&&e.compressedTexSubImage2D(n.TEXTURE_2D,st,0,0,Z.width,Z.height,ct,Z.data):e.compressedTexImage2D(n.TEXTURE_2D,st,Q,Z.width,Z.height,0,Z.data):Nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):at?At&&e.texSubImage2D(n.TEXTURE_2D,st,0,0,Z.width,Z.height,ct,C,Z.data):e.texImage2D(n.TEXTURE_2D,st,Q,Z.width,Z.height,0,ct,C,Z.data)}else if(x.isDataArrayTexture)if(at){if(lt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Wt,Q,j.width,j.height,j.depth),At)if(x.layerUpdates.size>0){let st=pc(j.width,j.height,x.format,x.type);for(let Pt of x.layerUpdates){let Gt=j.data.subarray(Pt*st/j.data.BYTES_PER_ELEMENT,(Pt+1)*st/j.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Pt,j.width,j.height,1,ct,C,Gt)}x.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,ct,C,j.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Q,j.width,j.height,j.depth,0,ct,C,j.data);else if(x.isData3DTexture)at?(lt&&e.texStorage3D(n.TEXTURE_3D,Wt,Q,j.width,j.height,j.depth),At&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,ct,C,j.data)):e.texImage3D(n.TEXTURE_3D,0,Q,j.width,j.height,j.depth,0,ct,C,j.data);else if(x.isFramebufferTexture){if(lt)if(at)e.texStorage2D(n.TEXTURE_2D,Wt,Q,j.width,j.height);else{let st=j.width,Pt=j.height;for(let Gt=0;Gt<Wt;Gt++)e.texImage2D(n.TEXTURE_2D,Gt,Q,st,Pt,0,ct,C,null),st>>=1,Pt>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in n){let st=n.canvas;if(st.hasAttribute("layoutsubtree")||st.setAttribute("layoutsubtree","true"),j.parentNode!==st){st.appendChild(j),d.add(x),st.onpaint=Pt=>{let Gt=Pt.changedElements;for(let gt of d)Gt.includes(gt.image)&&(gt.needsUpdate=!0)},st.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,j);else{let Gt=n.RGBA,gt=n.RGBA,le=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Gt,gt,le,j)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(ht.length>0){if(at&&lt){let st=Ft(ht[0]);e.texStorage2D(n.TEXTURE_2D,Wt,Q,st.width,st.height)}for(let st=0,Pt=ht.length;st<Pt;st++)Z=ht[st],at?At&&e.texSubImage2D(n.TEXTURE_2D,st,0,0,ct,C,Z):e.texImage2D(n.TEXTURE_2D,st,Q,ct,C,Z);x.generateMipmaps=!1}else if(at){if(lt){let st=Ft(j);e.texStorage2D(n.TEXTURE_2D,Wt,Q,st.width,st.height)}At&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,ct,C,j)}else e.texImage2D(n.TEXTURE_2D,0,Q,ct,C,j);A(x)&&x.mipmapsAutoUpdate===!0&&b(nt),dt.__version=ot.version,x.onUpdate&&x.onUpdate(x)}E.__version=x.version}function Je(E,x,z){if(x.image.length!==6)return;let nt=ae(E,x),tt=x.source;e.bindTexture(n.TEXTURE_CUBE_MAP,E.__webglTexture,n.TEXTURE0+z);let ot=i.get(tt);if(tt.version!==ot.__version||nt===!0){e.activeTexture(n.TEXTURE0+z);let dt=Kt.getPrimaries(Kt.workingColorSpace),K=x.colorSpace===oi?null:Kt.getPrimaries(x.colorSpace),j=x.colorSpace===oi||dt===K?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,j);let ct=x.isCompressedTexture||x.image[0].isCompressedTexture,C=x.image[0]&&x.image[0].isDataTexture,Q=[];for(let gt=0;gt<6;gt++)!ct&&!C?Q[gt]=M(x.image[gt],!0,s.maxCubemapSize):Q[gt]=C?x.image[gt].image:x.image[gt],Q[gt]=Lt(x,Q[gt]);let Z=Q[0],ht=r.convert(x.format,x.colorSpace),at=r.convert(x.type),lt=w(x.internalFormat,ht,at,x.normalized,x.colorSpace),At=x.isVideoTexture!==!0,Wt=ot.__version===void 0||nt===!0,st=tt.dataReady,Pt=S(x,Z);ne(n.TEXTURE_CUBE_MAP,x);let Gt;if(x.isDepthTexture){if(lt=_(x.format===ai,x.type),Wt)if(At)e.texStorage2D(n.TEXTURE_CUBE_MAP,1,lt,Z.width,Z.height);else for(let gt=0;gt<6;gt++)e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,lt,Z.width,Z.height,0,ht,at,null)}else if(ct){At&&Wt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Pt,lt,Z.width,Z.height);for(let gt=0;gt<6;gt++){Gt=Q[gt].mipmaps;for(let le=0;le<Gt.length;le++){let ze=Gt[le];x.format!==Un?ht!==null?At?st&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+gt,le,0,0,ze.width,ze.height,ht,ze.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+gt,le,lt,ze.width,ze.height,0,ze.data):Nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):At?st&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+gt,le,0,0,ze.width,ze.height,ht,at,ze.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+gt,le,lt,ze.width,ze.height,0,ht,at,ze.data)}}}else{if(Gt=x.mipmaps,At&&Wt){Gt.length>0&&Pt++;let gt=Ft(Q[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,Pt,lt,gt.width,gt.height)}for(let gt=0;gt<6;gt++)if(C){At?st&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,Q[gt].width,Q[gt].height,ht,at,Q[gt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,lt,Q[gt].width,Q[gt].height,0,ht,at,Q[gt].data);for(let le=0;le<Gt.length;le++){let fi=Gt[le].image[gt].image;At?st&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+gt,le+1,0,0,fi.width,fi.height,ht,at,fi.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+gt,le+1,lt,fi.width,fi.height,0,ht,at,fi.data)}}else{At?st&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,ht,at,Q[gt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,lt,ht,at,Q[gt]);for(let le=0;le<Gt.length;le++){let ze=Gt[le];At?st&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+gt,le+1,0,0,ht,at,ze.image[gt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+gt,le+1,lt,ht,at,ze.image[gt])}}}A(x)&&x.mipmapsAutoUpdate===!0&&b(n.TEXTURE_CUBE_MAP),ot.__version=tt.version,x.onUpdate&&x.onUpdate(x)}E.__version=x.version}function xt(E,x,z,nt,tt,ot){let dt=r.convert(z.format,z.colorSpace),K=r.convert(z.type),j=w(z.internalFormat,dt,K,z.normalized,z.colorSpace),ct=i.get(x),C=i.get(z);if(C.__renderTarget=x,!ct.__hasExternalTextures){let Q=Math.max(1,x.width>>ot),Z=Math.max(1,x.height>>ot);tt===n.TEXTURE_3D||tt===n.TEXTURE_2D_ARRAY?e.texImage3D(tt,ot,j,Q,Z,x.depth,0,dt,K,null):e.texImage2D(tt,ot,j,Q,Z,0,dt,K,null)}e.bindFramebuffer(n.FRAMEBUFFER,E),pt(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,nt,tt,C.__webglTexture,0,xe(x)):(tt===n.TEXTURE_2D||tt>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,nt,tt,C.__webglTexture,ot),e.bindFramebuffer(n.FRAMEBUFFER,null)}function zt(E,x,z){if(n.bindRenderbuffer(n.RENDERBUFFER,E),x.depthBuffer){let nt=x.depthTexture,tt=nt&&nt.isDepthTexture?nt.type:null,ot=_(x.stencilBuffer,tt),dt=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;pt(x)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,xe(x),ot,x.width,x.height):z?n.renderbufferStorageMultisample(n.RENDERBUFFER,xe(x),ot,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,ot,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,dt,n.RENDERBUFFER,E)}else{let nt=x.textures;for(let tt=0;tt<nt.length;tt++){let ot=nt[tt],dt=r.convert(ot.format,ot.colorSpace),K=r.convert(ot.type),j=w(ot.internalFormat,dt,K,ot.normalized,ot.colorSpace);pt(x)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,xe(x),j,x.width,x.height):z?n.renderbufferStorageMultisample(n.RENDERBUFFER,xe(x),j,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,j,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function $t(E,x,z){let nt=x.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,E),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let tt=i.get(x.depthTexture);tt.__renderTarget=x;let ot=nt?x.depthTexture.image[0]:x.depthTexture.image;(!tt.__webglTexture||ot.width!==x.width||ot.height!==x.height)&&(ot.width=x.width,ot.height=x.height,x.depthTexture.needsUpdate=!0),nt?et(x.depthTexture,0):it(x.depthTexture,0);let dt=tt.__webglTexture,K=xe(x),j=nt?n.TEXTURE_CUBE_MAP_POSITIVE_X+z:n.TEXTURE_2D,ct=x.depthTexture.format===ai?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(x.depthTexture.format===ti)pt(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ct,j,dt,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,ct,j,dt,0);else if(x.depthTexture.format===ai)pt(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ct,j,dt,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,ct,j,dt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ge(E){let x=i.get(E),z=E.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==E.depthTexture){let nt=E.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),nt){let tt=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,nt.removeEventListener("dispose",tt)};nt.addEventListener("dispose",tt),x.__depthDisposeCallback=tt}x.__boundDepthTexture=nt}if(E.depthTexture&&!x.__autoAllocateDepthBuffer)if(z)for(let nt=0;nt<6;nt++)$t(x.__webglFramebuffer[nt],E,nt);else E.texture.mipmaps.length>0?$t(x.__webglFramebuffer[0],E,0):$t(x.__webglFramebuffer,E,0);else if(z){x.__webglDepthbuffer=[];for(let nt=0;nt<6;nt++)if(e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[nt]),x.__webglDepthbuffer[nt]===void 0)x.__webglDepthbuffer[nt]=n.createRenderbuffer(),zt(x.__webglDepthbuffer[nt],E,!1);else{let tt=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ot=x.__webglDepthbuffer[nt];n.bindRenderbuffer(n.RENDERBUFFER,ot),n.framebufferRenderbuffer(n.FRAMEBUFFER,tt,n.RENDERBUFFER,ot)}}else if(E.texture.mipmaps.length>0?e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),zt(x.__webglDepthbuffer,E,!1);else{let tt=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ot=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ot),n.framebufferRenderbuffer(n.FRAMEBUFFER,tt,n.RENDERBUFFER,ot)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Me(E,x,z){let nt=i.get(E);x!==void 0&&xt(nt.__webglFramebuffer,E,E.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),z!==void 0&&ge(E)}function We(E){let x=E.texture,z=i.get(E),nt=i.get(x);E.addEventListener("dispose",U),L(E);let tt=E.textures,ot=E.isWebGLCubeRenderTarget===!0,dt=tt.length>1;if(dt||(nt.__webglTexture===void 0&&(nt.__webglTexture=n.createTexture()),nt.__version=x.version,a.memory.textures++),ot){z.__webglFramebuffer=[];for(let K=0;K<6;K++)if(x.mipmaps.length>0){z.__webglFramebuffer[K]=[];for(let j=0;j<x.mipmaps.length;j++)z.__webglFramebuffer[K][j]=n.createFramebuffer()}else z.__webglFramebuffer[K]=n.createFramebuffer()}else{if(x.mipmaps.length>0){z.__webglFramebuffer=[];for(let K=0;K<x.mipmaps.length;K++)z.__webglFramebuffer[K]=n.createFramebuffer()}else z.__webglFramebuffer=n.createFramebuffer();if(dt)for(let K=0,j=tt.length;K<j;K++){let ct=i.get(tt[K]);ct.__webglTexture===void 0&&(ct.__webglTexture=n.createTexture(),a.memory.textures++)}if(E.samples>0&&pt(E)===!1){z.__webglMultisampledFramebuffer=n.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let K=0;K<tt.length;K++){let j=tt[K];z.__webglColorRenderbuffer[K]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,z.__webglColorRenderbuffer[K]);let ct=r.convert(j.format,j.colorSpace),C=r.convert(j.type),Q=w(j.internalFormat,ct,C,j.normalized,j.colorSpace,E.isXRRenderTarget===!0),Z=xe(E);n.renderbufferStorageMultisample(n.RENDERBUFFER,Z,Q,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+K,n.RENDERBUFFER,z.__webglColorRenderbuffer[K])}n.bindRenderbuffer(n.RENDERBUFFER,null),E.depthBuffer&&(z.__webglDepthRenderbuffer=n.createRenderbuffer(),zt(z.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ot){e.bindTexture(n.TEXTURE_CUBE_MAP,nt.__webglTexture),ne(n.TEXTURE_CUBE_MAP,x);for(let K=0;K<6;K++)if(x.mipmaps.length>0)for(let j=0;j<x.mipmaps.length;j++)xt(z.__webglFramebuffer[K][j],E,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+K,j);else xt(z.__webglFramebuffer[K],E,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);A(x)?b(n.TEXTURE_CUBE_MAP):x.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,x.mipmaps.length-1),e.unbindTexture()}else if(dt){for(let K=0,j=tt.length;K<j;K++){let ct=tt[K],C=i.get(ct),Q=n.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(Q=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(Q,C.__webglTexture),ne(Q,ct),xt(z.__webglFramebuffer,E,ct,n.COLOR_ATTACHMENT0+K,Q,0),A(ct)&&b(Q)}e.unbindTexture()}else{let K=n.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(K=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(K,nt.__webglTexture),ne(K,x),x.mipmaps.length>0)for(let j=0;j<x.mipmaps.length;j++)xt(z.__webglFramebuffer[j],E,x,n.COLOR_ATTACHMENT0,K,j);else xt(z.__webglFramebuffer,E,x,n.COLOR_ATTACHMENT0,K,0);A(x)?b(K):x.mipmaps.length>0&&n.texParameteri(K,n.TEXTURE_MAX_LEVEL,x.mipmaps.length-1),e.unbindTexture()}E.depthBuffer&&ge(E)}function D(E){let x=E.textures;for(let z=0,nt=x.length;z<nt;z++){let tt=x[z];if(A(tt)&&tt.mipmapsAutoUpdate===!0){let ot=T(E),dt=i.get(tt).__webglTexture;e.bindTexture(ot,dt),b(ot),e.unbindTexture()}}}let xn=[];function _e(E){if(E.samples>0){if(pt(E)===!1){let x=E.textures,z=E.width,nt=E.height,tt=n.COLOR_BUFFER_BIT,ot=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,dt=i.get(E),K=x.length>1;if(K)for(let ct=0;ct<x.length;ct++)e.bindFramebuffer(n.FRAMEBUFFER,dt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ct,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,dt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ct,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,dt.__webglMultisampledFramebuffer),E.texture.mipmaps.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,dt.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,dt.__webglFramebuffer);for(let ct=0;ct<x.length;ct++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(tt|=n.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(tt|=n.STENCIL_BUFFER_BIT)),K){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,dt.__webglColorRenderbuffer[ct]);let C=i.get(x[ct]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,C,0)}n.blitFramebuffer(0,0,z,nt,0,0,z,nt,tt,n.NEAREST),l===!0&&(xn.length=0,xn.push(n.COLOR_ATTACHMENT0+ct),E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&xn.push(ot),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,xn))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),K)for(let ct=0;ct<x.length;ct++){e.bindFramebuffer(n.FRAMEBUFFER,dt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ct,n.RENDERBUFFER,dt.__webglColorRenderbuffer[ct]);let C=i.get(x[ct]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,dt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ct,n.TEXTURE_2D,C,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,dt.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&l){let x=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function xe(E){return Math.min(s.maxSamples,E.samples)}function pt(E){let x=i.get(E);return E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Pe(E){let x=a.render.frame;h.get(E)!==x&&(h.set(E,x),E.update())}function Lt(E,x){let z=E.colorSpace,nt=E.format,tt=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||z!==er&&z!==oi&&(Kt.getTransfer(z)===oe?(nt!==Un||tt!==hn)&&Nt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Dt("WebGLTextures: Unsupported texture color space:",z)),x}function Ft(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=Et,this.resetTextureUnits=V,this.getTextureUnits=W,this.setTextureUnits=rt,this.setTexture2D=it,this.setTexture2DArray=mt,this.setTexture3D=wt,this.setTextureCube=et,this.rebindTextures=Me,this.setupRenderTarget=We,this.updateRenderTargetMipmap=D,this.updateMultisampleRenderTarget=_e,this.setupDepthRenderbuffer=ge,this.setupFrameBufferTexture=xt,this.useMultisampledRTT=pt,this.dispose=q}function nx(n,t){function e(i,s=oi){let r,a=Kt.getTransfer(s);if(i===hn)return n.UNSIGNED_BYTE;if(i===qa)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Ya)return n.UNSIGNED_SHORT_5_5_5_1;if(i===ec)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===nc)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Ql)return n.BYTE;if(i===tc)return n.SHORT;if(i===zs)return n.UNSIGNED_SHORT;if(i===$a)return n.INT;if(i===Nn)return n.UNSIGNED_INT;if(i===Sn)return n.FLOAT;if(i===Dn)return n.HALF_FLOAT;if(i===ic)return n.ALPHA;if(i===sc)return n.RGB;if(i===Un)return n.RGBA;if(i===ti)return n.DEPTH_COMPONENT;if(i===ai)return n.DEPTH_STENCIL;if(i===Ja)return n.RED;if(i===Za)return n.RED_INTEGER;if(i===Ni)return n.RG;if(i===Ka)return n.RG_INTEGER;if(i===ja)return n.RGBA_INTEGER;if(i===Tr||i===Ar||i===Rr||i===Cr)if(a===oe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Tr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ar)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Rr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Cr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Tr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ar)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Rr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Cr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Qa||i===to||i===eo||i===no)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Qa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===to)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===eo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===no)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===io||i===so||i===ro||i===ao||i===oo||i===Ir||i===lo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===io||i===so)return a===oe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===ro)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===ao)return r.COMPRESSED_R11_EAC;if(i===oo)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Ir)return r.COMPRESSED_RG11_EAC;if(i===lo)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===co||i===ho||i===uo||i===fo||i===po||i===mo||i===go||i===_o||i===xo||i===vo||i===yo||i===Mo||i===So||i===bo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===co)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ho)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===uo)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===fo)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===po)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===mo)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===go)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===_o)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===xo)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===vo)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===yo)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Mo)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===So)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===bo)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Eo||i===wo||i===To)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Eo)return a===oe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===wo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===To)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ao||i===Ro||i===Pr||i===Co)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Ao)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Ro)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Pr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Co)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Qi?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var ix=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,sx=`
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

}`,Rc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new mr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new Mn({vertexShader:ix,fragmentShader:sx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new yt(new qe(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Cc=class extends Gn{constructor(t,e){super();let i=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,m=null,g=null,v=typeof XRWebGLBinding<"u",f=new Rc,p={},M=e.getContextAttributes(),A=null,b=null,T=[],w=[],_=new Yt,S=null,L=null,R=new rn;R.viewport=new ve;let N=new rn;N.viewport=new ve;let U=[R,N],H=new Ga,I=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let it=T[J];return it===void 0&&(it=new Ps,T[J]=it),it.getTargetRaySpace()},this.getControllerGrip=function(J){let it=T[J];return it===void 0&&(it=new Ps,T[J]=it),it.getGripSpace()},this.getHand=function(J){let it=T[J];return it===void 0&&(it=new Ps,T[J]=it),it.getHandSpace()};function Y(J){let it=w.indexOf(J.inputSource);if(it===-1)return;let mt=T[it];mt!==void 0&&(mt.update(J.inputSource,J.frame,c||a),mt.dispatchEvent({type:J.type,data:J.inputSource}))}function G(){s.removeEventListener("select",Y),s.removeEventListener("selectstart",Y),s.removeEventListener("selectend",Y),s.removeEventListener("squeeze",Y),s.removeEventListener("squeezestart",Y),s.removeEventListener("squeezeend",Y),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",X);for(let J=0;J<T.length;J++){let it=w[J];it!==null&&(w[J]=null,T[J].disconnect(it))}I=null,q=null,f.reset();for(let J in p)delete p[J];if(t.setRenderTarget(A),m=null,u=null,d=null,s=null,b=null,Et.stop(),i.isPresenting=!1,t.setPixelRatio(S),t.setSize(_.width,_.height,!1),L!==null){let J=L.camera;J.fov=L.fov,J.zoom=L.zoom,J.updateProjectionMatrix(),L=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,i.isPresenting===!0&&Nt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,i.isPresenting===!0&&Nt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return u!==null?u:m},this.getBinding=function(){return d===null&&v&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(A=t.getRenderTarget(),s.addEventListener("select",Y),s.addEventListener("selectstart",Y),s.addEventListener("selectend",Y),s.addEventListener("squeeze",Y),s.addEventListener("squeezestart",Y),s.addEventListener("squeezeend",Y),s.addEventListener("end",G),s.addEventListener("inputsourceschange",X),M.xrCompatible!==!0&&await e.makeXRCompatible(),S=t.getPixelRatio(),t.getSize(_),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let mt=null,wt=null,et=null;M.depth&&(et=M.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,mt=M.stencil?ai:ti,wt=M.stencil?Qi:Nn);let Rt={colorFormat:e.RGBA8,depthFormat:et,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(Rt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),b=new mn(u.textureWidth,u.textureHeight,{format:Un,type:hn,depthTexture:new ii(u.textureWidth,u.textureHeight,wt,void 0,void 0,void 0,void 0,void 0,void 0,mt),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let mt={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,e,mt),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),b=new mn(m.framebufferWidth,m.framebufferHeight,{format:Un,type:hn,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Et.setContext(s),Et.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return f.getDepthTexture()};function X(J){for(let it=0;it<J.removed.length;it++){let mt=J.removed[it],wt=w.indexOf(mt);wt>=0&&(w[wt]=null,T[wt].disconnect(mt))}for(let it=0;it<J.added.length;it++){let mt=J.added[it],wt=w.indexOf(mt);if(wt===-1){for(let Rt=0;Rt<T.length;Rt++)if(Rt>=w.length){w.push(mt),wt=Rt;break}else if(w[Rt]===null){w[Rt]=mt,wt=Rt;break}if(wt===-1)break}let et=T[wt];et&&et.connect(mt)}}function B(J,it){it===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(it.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let it=J.near,mt=J.far;f.texture!==null&&(f.depthNear>0&&(it=f.depthNear),f.depthFar>0&&(mt=f.depthFar)),H.near=N.near=R.near=it,H.far=N.far=R.far=mt,(I!==H.near||q!==H.far)&&(s.updateRenderState({depthNear:H.near,depthFar:H.far}),I=H.near,q=H.far),H.layers.mask=J.layers.mask|6,R.layers.mask=H.layers.mask&-5,N.layers.mask=H.layers.mask&-3;let wt=J.parent,et=H.cameras;B(H,wt);for(let Rt=0;Rt<et.length;Rt++)B(et[Rt],wt);H.projectionMatrix.copy(R.projectionMatrix),H.projectionMatrixInverse.copy(R.projectionMatrixInverse),L===null&&J.isPerspectiveCamera&&(L={camera:J,fov:J.fov,zoom:J.zoom}),V(J,H,wt)};function V(J,it,mt){mt===null?J.matrix.copy(it.matrixWorld):(J.matrix.copy(mt.matrixWorld),J.matrix.invert(),J.matrix.multiply(it.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(it.projectionMatrix),J.projectionMatrixInverse.copy(it.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Sa*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(u===null&&m===null))return l},this.setFoveation=function(J){l=J,u!==null&&(u.fixedFoveation=J),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=J)},this.hasDepthSensing=function(){return f.texture!==null},this.getDepthSensingMesh=function(){return f.getMesh(H)},this.getCameraTexture=function(J){return p[J]};let W=null;function rt(J,it){if(h=it.getViewerPose(c||a),g=it,h!==null){let mt=h.views;m!==null&&(t.setRenderTargetFramebuffer(b,m.framebuffer),t.setRenderTarget(b));let wt=!1;mt.length!==H.cameras.length&&(H.cameras.length=0,wt=!0);for(let Ct=0;Ct<mt.length;Ct++){let ne=mt[Ct],ae=null;if(m!==null)ae=m.getViewport(ne);else{let Se=d.getViewSubImage(u,ne);ae=Se.viewport,Ct===0&&(t.setRenderTargetTextures(b,Se.colorTexture,Se.depthStencilTexture),t.setRenderTarget(b))}let Bt=U[Ct];Bt===void 0&&(Bt=new rn,Bt.layers.enable(Ct),Bt.viewport=new ve,U[Ct]=Bt),Bt.matrix.fromArray(ne.transform.matrix),Bt.matrix.decompose(Bt.position,Bt.quaternion,Bt.scale),Bt.projectionMatrix.fromArray(ne.projectionMatrix),Bt.projectionMatrixInverse.copy(Bt.projectionMatrix).invert(),Bt.viewport.set(ae.x,ae.y,ae.width,ae.height),Ct===0&&(H.matrix.copy(Bt.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),wt===!0&&H.cameras.push(Bt)}let et=s.enabledFeatures;if(et&&et.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){d=i.getBinding();let Ct=d.getDepthInformation(mt[0]);Ct&&Ct.isValid&&Ct.texture&&f.init(Ct,s.renderState)}if(et&&et.includes("camera-access")&&v){t.state.unbindTexture(),d=i.getBinding();for(let Ct=0;Ct<mt.length;Ct++){let ne=mt[Ct].camera;if(ne){let ae=p[ne];ae||(ae=new mr,p[ne]=ae);let Bt=d.getCameraImage(ne);ae.sourceTexture=Bt}}}}for(let mt=0;mt<T.length;mt++){let wt=w[mt],et=T[mt];wt!==null&&et!==void 0&&et.update(wt,it,c||a)}W&&W(J,it),it.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:it}),g=null}let Et=new yd;Et.setAnimationLoop(rt),this.setAnimationLoop=function(J){W=J},this.dispose=function(){}}},rx=new ee,Id=new Ut;Id.set(-1,0,0,0,1,0,0,0,1);function ax(n,t){function e(f,p){f.matrixAutoUpdate===!0&&f.updateMatrix(),p.value.copy(f.matrix)}function i(f,p){p.color.getRGB(f.fogColor.value,uc(n)),p.isFog?(f.fogNear.value=p.near,f.fogFar.value=p.far):p.isFogExp2&&(f.fogDensity.value=p.density)}function s(f,p,M,A,b){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(f,p):p.isMeshLambertMaterial?(r(f,p),p.envMap&&(f.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(f,p),d(f,p)):p.isMeshPhongMaterial?(r(f,p),h(f,p),p.envMap&&(f.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(f,p),u(f,p),p.isMeshPhysicalMaterial&&m(f,p,b)):p.isMeshMatcapMaterial?(r(f,p),g(f,p)):p.isMeshDepthMaterial?r(f,p):p.isMeshDistanceMaterial?(r(f,p),v(f,p)):p.isMeshNormalMaterial?r(f,p):p.isLineBasicMaterial?(a(f,p),p.isLineDashedMaterial&&o(f,p)):p.isPointsMaterial?l(f,p,M,A):p.isSpriteMaterial?c(f,p):p.isShadowMaterial?(f.color.value.copy(p.color),f.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(f,p){f.opacity.value=p.opacity,p.color&&f.diffuse.value.copy(p.color),p.emissive&&f.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(f.map.value=p.map,e(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,e(p.alphaMap,f.alphaMapTransform)),p.bumpMap&&(f.bumpMap.value=p.bumpMap,e(p.bumpMap,f.bumpMapTransform),f.bumpScale.value=p.bumpScale,p.side===Ye&&(f.bumpScale.value*=-1)),p.normalMap&&(f.normalMap.value=p.normalMap,e(p.normalMap,f.normalMapTransform),f.normalScale.value.copy(p.normalScale),p.side===Ye&&f.normalScale.value.negate()),p.displacementMap&&(f.displacementMap.value=p.displacementMap,e(p.displacementMap,f.displacementMapTransform),f.displacementScale.value=p.displacementScale,f.displacementBias.value=p.displacementBias),p.emissiveMap&&(f.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,f.emissiveMapTransform)),p.specularMap&&(f.specularMap.value=p.specularMap,e(p.specularMap,f.specularMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest);let M=t.get(p),A=M.envMap,b=M.envMapRotation;A&&(f.envMap.value=A,f.envMapRotation.value.setFromMatrix4(rx.makeRotationFromEuler(b)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&f.envMapRotation.value.premultiply(Id),f.reflectivity.value=p.reflectivity,f.ior.value=p.ior,f.refractionRatio.value=p.refractionRatio),p.lightMap&&(f.lightMap.value=p.lightMap,f.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,f.lightMapTransform)),p.aoMap&&(f.aoMap.value=p.aoMap,f.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,f.aoMapTransform))}function a(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,p.map&&(f.map.value=p.map,e(p.map,f.mapTransform))}function o(f,p){f.dashSize.value=p.dashSize,f.totalSize.value=p.dashSize+p.gapSize,f.scale.value=p.scale}function l(f,p,M,A){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.size.value=p.size*M,f.scale.value=A*.5,p.map&&(f.map.value=p.map,e(p.map,f.uvTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,e(p.alphaMap,f.alphaMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function c(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.rotation.value=p.rotation,p.map&&(f.map.value=p.map,e(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,e(p.alphaMap,f.alphaMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function h(f,p){f.specular.value.copy(p.specular),f.shininess.value=Math.max(p.shininess,1e-4)}function d(f,p){p.gradientMap&&(f.gradientMap.value=p.gradientMap)}function u(f,p){f.metalness.value=p.metalness,p.metalnessMap&&(f.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,f.metalnessMapTransform)),f.roughness.value=p.roughness,p.roughnessMap&&(f.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,f.roughnessMapTransform)),p.envMap&&(f.envMapIntensity.value=p.envMapIntensity)}function m(f,p,M){f.ior.value=p.ior,p.diffuseRoughness>0&&(f.diffuseRoughness.value=p.diffuseRoughness,p.diffuseRoughnessMap&&(f.diffuseRoughnessMap.value=p.diffuseRoughnessMap,e(p.diffuseRoughnessMap,f.diffuseRoughnessMapTransform))),p.sheen>0&&(f.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),f.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(f.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,f.sheenColorMapTransform)),p.sheenRoughnessMap&&(f.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,f.sheenRoughnessMapTransform))),p.clearcoat>0&&(f.clearcoat.value=p.clearcoat,f.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(f.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,f.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(f.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ye&&f.clearcoatNormalScale.value.negate())),p.dispersion>0&&(f.dispersion.value=p.dispersion),p.retroreflectivity>0&&(f.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(f.iridescence.value=p.iridescence,f.iridescenceIOR.value=p.iridescenceIOR,f.iridescenceThicknessMinimum.value=p.iridescenceThicknessMinimum,f.iridescenceThicknessMaximum.value=p.iridescenceThicknessMaximum,p.iridescenceMap&&(f.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,f.iridescenceMapTransform)),p.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),p.transmission>0&&(f.transmission.value=p.transmission,f.transmissionSamplerMap.value=M.texture,f.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(f.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,f.transmissionMapTransform)),f.thickness.value=p.thickness,p.thicknessMap&&(f.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=p.attenuationDistance,f.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(f.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(f.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=p.specularIntensity,f.specularColor.value.copy(p.specularColor),p.specularColorMap&&(f.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,f.specularColorMapTransform)),p.specularIntensityMap&&(f.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,f.specularIntensityMapTransform))}function g(f,p){p.matcap&&(f.matcap.value=p.matcap)}function v(f,p){let M=t.get(p).light;f.referencePosition.value.setFromMatrixPosition(M.matrixWorld),f.nearDistance.value=M.shadow.camera.near,f.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function ox(n,t,e,i){let s={},r={};function a(M,A){let b=A.program;i.uniformBlockBinding(M,b,s[M.id])}function o(M,A){let b=s[M.id];b===void 0&&(g(M),b=l(M),s[M.id]=b,M.addEventListener("dispose",f));let T=A.program;i.updateUBOMapping(M,T);let w=t.render.frame;r[M.id]!==w&&(c(M),r[M.id]=w)}function l(M){let A=n.createBuffer(),b=M.__size,T=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,A),n.bufferData(n.UNIFORM_BUFFER,b,T),n.bindBuffer(n.UNIFORM_BUFFER,null),A}function c(M){let A=s[M.id],b=M.uniforms,T=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,A);for(let w=0,_=b.length;w<_;w++){let S=b[w];if(Array.isArray(S))for(let L=0,R=S.length;L<R;L++)h(S[L],w,L,T);else h(S,w,0,T)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(M,A,b,T){if(u(M,A,b,T)===!0){let w=M.__offset,_=M.value;if(Array.isArray(_)){let S=0;for(let L=0;L<_.length;L++){let R=_[L],N=v(R,!0);d(R,M.__data,S),S+=N.storage/Float32Array.BYTES_PER_ELEMENT}}else d(_,M.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,w,M.__data)}}function d(M,A,b){typeof M=="number"||typeof M=="boolean"?A[b]=M:M.isMatrix3?(A[b]=M.elements[0],A[b+1]=M.elements[1],A[b+2]=M.elements[2],A[b+3]=0,A[b+4]=M.elements[3],A[b+5]=M.elements[4],A[b+6]=M.elements[5],A[b+7]=0,A[b+8]=M.elements[6],A[b+9]=M.elements[7],A[b+10]=M.elements[8],A[b+11]=0):ArrayBuffer.isView(M)?A.set(M.subarray(0,A.length-b),b):M.toArray(A,b)}function u(M,A,b,T){let w=M.value,_=A+"_"+b;if(Array.isArray(w)){T[_]===void 0&&(T[_]=[]);let S=T[_],L=!1;for(let R=0;R<w.length;R++)m(w[R],S,R)===!0&&(L=!0);return L}return m(w,T,_)}function m(M,A,b){if(A[b]===void 0)return typeof M=="number"||typeof M=="boolean"?A[b]=M:ArrayBuffer.isView(M)?A[b]=M.slice():A[b]=M.clone(),!0;{let T=A[b];if(typeof M=="number"||typeof M=="boolean"){if(T!==M)return A[b]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(T.equals(M)===!1)return T.copy(M),!0}}return!1}function g(M){let A=M.uniforms,b=0,T=16;for(let _=0,S=A.length;_<S;_++){let L=Array.isArray(A[_])?A[_]:[A[_]];for(let R=0,N=L.length;R<N;R++){let U=L[R],H=Array.isArray(U.value)?U.value:[U.value],I=Array.isArray(A[_])||Array.isArray(U.value),q=b;for(let G=0,X=H.length;G<X;G++){let B=H[G],V=v(B,I),W=b%T,rt=W%V.boundary,Et=W+rt;b+=rt,Et!==0&&T-Et<V.storage&&(b+=T-Et),G===0&&(q=b),b+=V.storage}let Y=U.type==="int"?Int32Array:U.type==="uint"?Uint32Array:Float32Array;U.__data=new Y((b-q)/Float32Array.BYTES_PER_ELEMENT),U.__offset=q}}let w=b%T;return w>0&&(b+=T-w),M.__size=b,M.__cache={},this}function v(M,A){let b={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(b.boundary=4,b.storage=4):M.isVector2?(b.boundary=8,b.storage=8):M.isVector3||M.isColor?(b.boundary=16,b.storage=12):M.isVector4?(b.boundary=16,b.storage=16):M.isMatrix3?(b.boundary=16,b.storage=48):M.isMatrix4?(b.boundary=16,b.storage=64):M.isTexture?Nt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(b.boundary=16,b.storage=M.byteLength):Nt("WebGLRenderer: Unsupported uniform value type.",M),A===!0&&(b.boundary=16,b.storage=Math.ceil(b.storage/16)*16),b}function f(M){let A=M.target;A.removeEventListener("dispose",f),n.deleteBuffer(s[A.id]),delete s[A.id],delete r[A.id]}function p(){for(let M in s)n.deleteBuffer(s[M]);s={},r={}}return{bind:a,update:o,dispose:p}}var lx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Wn=null;function cx(){return Wn===null&&(Wn=new ur(lx,16,16,Ni,Dn),Wn.name="DFG_LUT",Wn.minFilter=on,Wn.magFilter=on,Wn.wrapS=kn,Wn.wrapT=kn,Wn.generateMipmaps=!1,Wn.needsUpdate=!0),Wn}var Do=class{constructor(t={}){let{canvas:e=Wu(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:m=hn}=t;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;let v=m,f=new Set([ja,Ka,Za]),p=new Set([hn,Nn,zs,Qi,qa,Ya]),M=new Uint32Array(4),A=new Int32Array(4),b={textures:[],min:[],max:[],resolution:[]},T=null,w=null,_=[],S=[],L=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Vn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,N=!1,U=null,H=null,I=null,q=null;this._outputColorSpace=De;let Y=0,G=0,X=null,B=-1,V=null,W=new ve,rt=new ve,Et=null,J=new qt(0),it=0,mt=e.width,wt=e.height,et=1,Rt=null,ce=null,Ct=new ve(0,0,mt,wt),ne=new ve(0,0,mt,wt),ae=!1,Bt=new Ai,Se=new Ta,ue=!1,Je=!1,xt=new ee,zt=new F,$t=new ve,ge={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Me=!1;function We(){return X===null?et:1}let D=i;function xn(y,P){return e.getContext(y,P)}let _e,xe,pt,Pe,Lt,Ft,E,x,z,nt,tt,ot,dt,K,j,ct,C,Q,Z,ht,at,lt,At;try{let y={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",Pt,!1),e.addEventListener("webglcontextrestored",Gt,!1),e.addEventListener("webglcontextcreationerror",gt,!1),D===null){let P="webgl2";if(D=xn(P,y),D===null)throw xn(P)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Wt()}catch(y){throw e.removeEventListener("webglcontextlost",Pt,!1),e.removeEventListener("webglcontextrestored",Gt,!1),e.removeEventListener("webglcontextcreationerror",gt,!1),Dt("WebGLRenderer: "+y.message),y}function Wt(){_e=new yg(D),_e.init(),at=new nx(D,_e),xe=new cg(D,_e,t,at),pt=new tx(D,_e),xe.reversedDepthBuffer&&u&&pt.buffers.depth.setReversed(!0),H=D.createFramebuffer(),I=D.createFramebuffer(),q=D.createFramebuffer(),Pe=new bg(D),Lt=new k_,Ft=new ex(D,_e,pt,Lt,xe,at,Pe),E=new vg(R),x=new wp(D),lt=new og(D,x),z=new Mg(D,x,Pe,lt),nt=new wg(D,z,x,lt,Pe),Q=new Eg(D,xe,Ft),j=new hg(Lt),tt=new z_(R,E,_e,xe,lt,j),ot=new ax(R,Lt),dt=new H_,K=new Y_(_e),C=new ag(R,E,pt,nt,g,l),ct=new Q_(R,nt,xe),At=new ox(D,Pe,xe,pt),Z=new lg(D,_e,Pe),ht=new Sg(D,_e,Pe),Pe.programs=tt.programs,R.capabilities=xe,R.extensions=_e,R.properties=Lt,R.renderLists=dt,R.shadowMap=ct,R.state=pt,R.info=Pe}v!==hn&&(L=new Ag(v,e.width,e.height,o,s,r));let st=new Cc(R,D);this.xr=st,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let y=_e.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){let y=_e.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return et},this.setPixelRatio=function(y){y!==void 0&&(et=y,this.setSize(mt,wt,!1))},this.getSize=function(y){return y.set(mt,wt)},this.setSize=function(y,P,$=!0){if(st.isPresenting){Nt("WebGLRenderer: Can't change size while VR device is presenting.");return}mt=y,wt=P,e.width=Math.floor(y*et),e.height=Math.floor(P*et),$===!0&&(e.style.width=y+"px",e.style.height=P+"px"),L!==null&&L.setSize(e.width,e.height),this.setViewport(0,0,y,P)},this.getDrawingBufferSize=function(y){return y.set(mt*et,wt*et).floor()},this.setDrawingBufferSize=function(y,P,$){mt=y,wt=P,et=$,e.width=Math.floor(y*$),e.height=Math.floor(P*$),this.setViewport(0,0,y,P)},this.setEffects=function(y){if(v===hn){Dt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let P=0;P<y.length;P++)if(y[P].isOutputPass===!0){Nt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(W)},this.getViewport=function(y){return y.copy(Ct)},this.setViewport=function(y,P,$,O){y.isVector4?Ct.set(y.x,y.y,y.z,y.w):Ct.set(y,P,$,O),pt.viewport(W.copy(Ct).multiplyScalar(We()).round())},this.getScissor=function(y){return y.copy(ne)},this.setScissor=function(y,P,$,O){y.isVector4?ne.set(y.x,y.y,y.z,y.w):ne.set(y,P,$,O),pt.scissor(rt.copy(ne).multiplyScalar(We()).round())},this.getScissorTest=function(){return ae},this.setScissorTest=function(y){pt.setScissorTest(ae=y)},this.setOpaqueSort=function(y){Rt=y},this.setTransparentSort=function(y){ce=y},this.getClearColor=function(y){return y.copy(C.getClearColor())},this.setClearColor=function(){C.setClearColor(...arguments)},this.getClearAlpha=function(){return C.getClearAlpha()},this.setClearAlpha=function(){C.setClearAlpha(...arguments)},this.clear=function(y=!0,P=!0,$=!0){let O=0;if(y){let k=!1;if(X!==null){let ft=X.texture.format;k=f.has(ft)}if(k){let ft=X.texture.type,Mt=p.has(ft),ut=C.getClearColor(),vt=C.getClearAlpha(),Tt=ut.r,Ot=ut.g,Jt=ut.b;Mt?(M[0]=Tt,M[1]=Ot,M[2]=Jt,M[3]=vt,D.clearBufferuiv(D.COLOR,0,M)):(A[0]=Tt,A[1]=Ot,A[2]=Jt,A[3]=vt,D.clearBufferiv(D.COLOR,0,A))}else O|=D.COLOR_BUFFER_BIT}P&&(O|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),$&&(O|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O!==0&&D.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(y){y.setRenderer(this),U=y},this.dispose=function(){e.removeEventListener("webglcontextlost",Pt,!1),e.removeEventListener("webglcontextrestored",Gt,!1),e.removeEventListener("webglcontextcreationerror",gt,!1),C.dispose(),dt.dispose(),K.dispose(),Ft.dispose(),Lt.dispose(),E.dispose(),nt.dispose(),z.dispose(),lt.dispose(),At.dispose(),tt.dispose(),st.dispose(),st.removeEventListener("sessionstart",$c),st.removeEventListener("sessionend",qc),zi.stop()};function Pt(y){y.preventDefault(),cc("WebGLRenderer: Context Lost."),N=!0}function Gt(){cc("WebGLRenderer: Context Restored."),N=!1;let y=Pe.autoReset,P=ct.enabled,$=ct.autoUpdate,O=ct.needsUpdate,k=ct.type;Wt(),Pe.autoReset=y,ct.enabled=P,ct.autoUpdate=$,ct.needsUpdate=O,ct.type=k}function gt(y){Dt("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function le(y){let P=y.target;P.removeEventListener("dispose",le),ze(P)}function ze(y){fi(y),Lt.remove(y)}function fi(y){let P=Lt.get(y).programs;P!==void 0&&(P.forEach(function($){tt.releaseProgram($)}),y.isShaderMaterial&&tt.releaseShaderCache(y))}this.renderBufferDirect=function(y,P,$,O,k,ft){P===null&&(P=ge);let Mt=k.isMesh&&k.matrixWorld.determinantAffine()<0,ut=of(y,P,$,O,k);pt.setMaterial(O,Mt);let vt=$.index,Tt=1;if(O.wireframe===!0){if(vt=z.getWireframeAttribute($),vt===void 0)return;Tt=2}let Ot=$.drawRange,Jt=$.attributes.position,St=Ot.start*Tt,Zt=(Ot.start+Ot.count)*Tt;ft!==null&&(St=Math.max(St,ft.start*Tt),Zt=Math.min(Zt,(ft.start+ft.count)*Tt)),vt!==null?(St=Math.max(St,0),Zt=Math.min(Zt,vt.count)):Jt!=null&&(St=Math.max(St,0),Zt=Math.min(Zt,Jt.count));let Ae=Zt-St;if(Ae<0||Ae===1/0)return;lt.setup(k,O,ut,$,vt);let de,he=Z;if(vt!==null&&(de=x.get(vt),he=ht,he.setIndex(de)),k.isMesh)O.wireframe===!0?(pt.setLineWidth(O.wireframeLinewidth*We()),he.setMode(D.LINES)):he.setMode(D.TRIANGLES);else if(k.isLine){let Ze=O.linewidth;Ze===void 0&&(Ze=1),pt.setLineWidth(Ze*We()),k.isLineSegments?he.setMode(D.LINES):k.isLineLoop?he.setMode(D.LINE_LOOP):he.setMode(D.LINE_STRIP)}else k.isPoints?he.setMode(D.POINTS):k.isSprite&&he.setMode(D.TRIANGLES);if(k.isBatchedMesh)if(_e.get("WEBGL_multi_draw"))he.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{let Ze=k._multiDrawStarts,bt=k._multiDrawCounts,nn=k._multiDrawCount,ie=vt?x.get(vt).bytesPerElement:1,ki=Lt.get(O).currentProgram.getUniforms();for(let Ke=0;Ke<nn;Ke++)ki.setValue(D,"_gl_DrawID",Ke),he.render(Ze[Ke]/ie,bt[Ke])}else if(k.isInstancedMesh)he.renderInstances(St,Ae,k.count);else if($.isInstancedBufferGeometry){let Ze=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,bt=Math.min($.instanceCount,Ze);he.renderInstances(St,Ae,bt)}else he.render(St,Ae)};function Xc(y,P,$,O){U!==null&&y.isNodeMaterial&&U.setObject(O,y),ue===!0&&j.setState(y,$,!1),y.transparent===!0&&y.side===Ve&&y.forceSinglePass===!1?(y.side=Ye,y.needsUpdate=!0,Vs(y,P,O),y.side=Li,y.needsUpdate=!0,Vs(y,P,O),y.side=Ve):Vs(y,P,O)}this.compile=function(y,P,$=null){$===null&&($=y),U!==null&&U.renderStart(y,P,$),w=K.get($),w.init(P),S.push(w),$.traverseVisible(function(k){k.isLight&&k.layers.test(P.layers)&&(w.pushLight(k),k.castShadow&&w.pushShadow(k))}),y!==$&&y.traverseVisible(function(k){k.isLight&&k.layers.test(P.layers)&&(w.pushLight(k),k.castShadow&&w.pushShadow(k))}),w.setupLights(),U!==null&&U.updateLights(w.state.lightsArray),Je=this.localClippingEnabled,ue=j.init(this.clippingPlanes,Je),ue===!0&&j.setGlobalState(this.clippingPlanes,P),U!==null&&ct.render(w.state.shadowsArray,$,P);let O=new Set;return y.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;let ft=k.material;if(ft)if(Array.isArray(ft))for(let Mt=0;Mt<ft.length;Mt++){let ut=ft[Mt];Xc(ut,$,P,k),O.add(ut)}else Xc(ft,$,P,k),O.add(ft)}),w=S.pop(),U!==null&&U.renderEnd(),O},this.compileAsync=function(y,P,$=null){let O=this.compile(y,P,$);return new Promise(k=>{function ft(){if(O.forEach(function(Mt){let vt=Lt.get(Mt).currentProgram;(vt===void 0||vt.isReady())&&O.delete(Mt)}),O.size===0){k(y);return}setTimeout(ft,10)}_e.get("KHR_parallel_shader_compile")!==null?ft():setTimeout(ft,10)})};let qo=null;function rf(y){qo&&qo(y)}function $c(){zi.stop()}function qc(){zi.start()}let zi=new yd;zi.setAnimationLoop(rf),typeof self<"u"&&zi.setContext(self),this.setAnimationLoop=function(y){qo=y,st.setAnimationLoop(y),y===null?zi.stop():zi.start()},st.addEventListener("sessionstart",$c),st.addEventListener("sessionend",qc),this.render=function(y,P){if(P!==void 0&&P.isCamera!==!0){Dt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;U!==null&&U.renderStart(y,P);let $=st.enabled===!0&&st.isPresenting===!0,O=L!==null&&(X===null||$)&&L.begin(R,X);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),P.parent===null&&P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),st.enabled===!0&&st.isPresenting===!0&&(L===null||L.isCompositing()===!1)&&(st.cameraAutoUpdate===!0&&st.updateCamera(P),P=st.getCamera()),y.isScene===!0&&y.onBeforeRender(R,y,P,X),w=K.get(y,S.length),w.init(P),w.state.textureUnits=Ft.getTextureUnits(),S.push(w),xt.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),P.isArrayCamera?Se.setFromArrayCamera(P):Bt.setFromProjectionMatrix(xt,yn,P.reversedDepth),Je=this.localClippingEnabled,ue=j.init(this.clippingPlanes,Je),T=dt.get(y,_.length),T.init(),_.push(T),this.info.render.frame++,st.enabled===!0&&st.isPresenting===!0){let Mt=R.xr.getDepthSensingMesh();Mt!==null&&Yo(Mt,P,-1/0,R.sortObjects)}Yo(y,P,0,R.sortObjects),T.finish(),U!==null&&U.updateLights(w.state.lightsArray),R.sortObjects===!0&&T.sort(Rt,ce),Me=st.enabled===!1||st.isPresenting===!1||st.hasDepthSensing()===!1,Me&&C.addToRenderList(T,y),this.info.autoReset===!0&&this.info.reset(),ue===!0&&j.beginShadows();let k=w.state.shadowsArray;if(ct.render(k,y,P),ue===!0&&j.endShadows(),(O&&L.hasRenderPass())===!1){let Mt=T.opaque,ut=T.transmissive;if(w.setupLights(),P.isArrayCamera){let vt=P.cameras;if(ut.length>0)for(let Tt=0,Ot=vt.length;Tt<Ot;Tt++){let Jt=vt[Tt];Jc(Mt,ut,y,Jt)}Me&&C.render(y);for(let Tt=0,Ot=vt.length;Tt<Ot;Tt++){let Jt=vt[Tt];Yc(T,y,Jt,Jt.viewport)}}else ut.length>0&&Jc(Mt,ut,y,P),Me&&C.render(y),Yc(T,y,P)}X!==null&&G===0&&(Ft.updateMultisampleRenderTarget(X),Ft.updateRenderTargetMipmap(X)),O&&L.end(R),y.isScene===!0&&y.onAfterRender(R,y,P),lt.resetDefaultState(),B=-1,V=null,S.pop(),S.length>0?(w=S[S.length-1],Ft.setTextureUnits(w.state.textureUnits),ue===!0&&j.setGlobalState(R.clippingPlanes,w.state.camera)):w=null,_.pop(),_.length>0?T=_[_.length-1]:T=null,U!==null&&U.renderEnd()};function Yo(y,P,$,O){if(y.visible===!1)return;if(y.layers.test(P.layers)){if(y.isGroup)$=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(P);else if(y.isLight)w.pushLight(y),y.castShadow&&w.pushShadow(y);else if(y.isSprite){let Mt=P.isArrayCamera?Se:Bt;if(!y.frustumCulled||y.intersectsFrustum(Mt)){O&&$t.setFromMatrixPosition(y.matrixWorld).applyMatrix4(xt);let ut=nt.update(y),vt=y.material;vt.visible&&T.push(y,ut,vt,$,$t.z,null,P)}}else if(y.isMesh||y.isLine||y.isPoints){let Mt=P.isArrayCamera?Se:Bt;if(!y.frustumCulled||y.intersectsFrustum(Mt)){let ut=nt.update(y),vt=y.material;if(O&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),$t.copy(y.boundingSphere.center)):(ut.boundingSphere===null&&ut.computeBoundingSphere(),$t.copy(ut.boundingSphere.center)),$t.applyMatrix4(y.matrixWorld).applyMatrix4(xt)),Array.isArray(vt)){let Tt=ut.groups;for(let Ot=0,Jt=Tt.length;Ot<Jt;Ot++){let St=Tt[Ot],Zt=vt[St.materialIndex];Zt&&Zt.visible&&T.push(y,ut,Zt,$,$t.z,St,P)}}else vt.visible&&T.push(y,ut,vt,$,$t.z,null,P)}}}let ft=y.children;for(let Mt=0,ut=ft.length;Mt<ut;Mt++)Yo(ft[Mt],P,$,O)}function Yc(y,P,$,O){let{opaque:k,transmissive:ft,transparent:Mt}=y;w.setupLightsView($),ue===!0&&j.setGlobalState(R.clippingPlanes,$),O&&pt.viewport(W.copy(O)),k.length>0&&Br(k,P,$),ft.length>0&&Br(ft,P,$),Mt.length>0&&Br(Mt,P,$),pt.buffers.depth.setTest(!0),pt.buffers.depth.setMask(!0),pt.buffers.color.setMask(!0),pt.setPolygonOffset(!1)}function Jc(y,P,$,O){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[O.id]===void 0){let St=_e.has("EXT_color_buffer_half_float")||_e.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[O.id]=new mn(1,1,{generateMipmaps:!0,type:St?Dn:hn,minFilter:ri,samples:Math.max(4,xe.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Kt.workingColorSpace})}let ft=w.state.transmissionRenderTarget[O.id],Mt=O.viewport||W;ft.setSize(Mt.z*R.transmissionResolutionScale,Mt.w*R.transmissionResolutionScale);let ut=R.getRenderTarget(),vt=R.getActiveCubeFace(),Tt=R.getActiveMipmapLevel();R.setRenderTarget(ft),R.getClearColor(J),it=R.getClearAlpha(),it<1&&R.setClearColor(16777215,.5),R.clear(),Me&&C.render($);let Ot=R.toneMapping;R.toneMapping=Vn;let Jt=O.viewport;if(O.viewport!==void 0&&(O.viewport=void 0),w.setupLightsView(O),ue===!0&&j.setGlobalState(R.clippingPlanes,O),Br(y,$,O),Ft.updateMultisampleRenderTarget(ft),Ft.updateRenderTargetMipmap(ft),_e.has("WEBGL_multisampled_render_to_texture")===!1){let St=!1;for(let Zt=0,Ae=P.length;Zt<Ae;Zt++){let de=P[Zt],{object:he,geometry:Ze,material:bt,group:nn}=de;if(bt.side===Ve&&he.layers.test(O.layers)){let ie=bt.side;bt.side=Ye,bt.needsUpdate=!0,Zc(he,$,O,Ze,bt,nn),bt.side=ie,bt.needsUpdate=!0,St=!0}}St===!0&&(Ft.updateMultisampleRenderTarget(ft),Ft.updateRenderTargetMipmap(ft))}R.setRenderTarget(ut,vt,Tt),R.setClearColor(J,it),Jt!==void 0&&(O.viewport=Jt),R.toneMapping=Ot}function Br(y,P,$){let O=P.isScene===!0?P.overrideMaterial:null;for(let k=0,ft=y.length;k<ft;k++){let Mt=y[k],{object:ut,geometry:vt,group:Tt}=Mt,Ot=Mt.material;Ot.allowOverride===!0&&O!==null&&(Ot=O),ut.layers.test($.layers)&&Zc(ut,P,$,vt,Ot,Tt)}}function Zc(y,P,$,O,k,ft){U!==null&&k.isNodeMaterial&&U.setObject(y,k),y.onBeforeRender(R,P,$,O,k,ft),y.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),k.onBeforeRender(R,P,$,O,y,ft),k.transparent===!0&&k.side===Ve&&k.forceSinglePass===!1?(k.side=Ye,k.needsUpdate=!0,R.renderBufferDirect($,P,O,k,y,ft),k.side=Li,k.needsUpdate=!0,R.renderBufferDirect($,P,O,k,y,ft),k.side=Ve):R.renderBufferDirect($,P,O,k,y,ft),y.onAfterRender(R,P,$,O,k,ft)}function Kc(y){let P=0;for(let $ of y)$.texture!==null&&P++;return P}function Vs(y,P,$){P.isScene!==!0&&(P=ge);let O=Lt.get(y),k=w.state.lights,ft=w.state.shadowsArray,Mt=k.state.version,ut=tt.getParameters(y,k.state,ft,P,$,w.state.lightProbeGridArray),vt=tt.getProgramCacheKey(ut),Tt=O.programs;O.environment=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?P.environment:null,O.fog=P.fog;let Ot=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap;O.envMap=E.get(y.envMap||O.environment,Ot),O.envMapRotation=O.environment!==null&&y.envMap===null?P.environmentRotation:y.envMapRotation,Tt===void 0&&(y.addEventListener("dispose",le),Tt=new Map,O.programs=Tt,O.programVariants=new Map);let Jt=Tt.get(vt);if(Jt!==void 0){if(O.currentProgram===Jt&&O.lightsStateVersion===Mt)return Qc(y,ut),Jt}else ut.uniforms=tt.getUniforms(y),U!==null&&y.isNodeMaterial&&U.build(y,$,ut),y.onBeforeCompile(ut,R),Jt=tt.acquireProgram(ut,vt),Tt.set(vt,Jt),O.uniforms=ut.uniforms;let St=O.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(St.clippingPlanes=j.uniform),Qc(y,ut),O.needsLights=cf(y),O.lightsStateVersion=Mt,O.needsLights&&(St.ambientLightColor.value=k.state.ambient,St.lightProbe.value=k.state.probe,St.sunLights.value=k.state.sun,St.sunLightShadows.value=k.state.sunShadow,St.directionalLights.value=k.state.directional,St.directionalLightShadows.value=k.state.directionalShadow,St.spotLights.value=k.state.spot,St.spotLightShadows.value=k.state.spotShadow,St.rectAreaLights.value=k.state.rectArea,St.ltc_1.value=k.state.rectAreaLTC1,St.ltc_2.value=k.state.rectAreaLTC2,St.pointLights.value=k.state.point,St.pointLightShadows.value=k.state.pointShadow,St.hemisphereLights.value=k.state.hemi,St.sunShadowMatrix.value=k.state.sunShadowMatrix,St.sunShadowCascade.value=k.state.sunShadowCascade,St.directionalShadowMatrix.value=k.state.directionalShadowMatrix,St.spotLightMatrix.value=k.state.spotLightMatrix,St.spotLightMap.value=k.state.spotLightMap,St.pointShadowMatrix.value=k.state.pointShadowMatrix),O.numLightProbeGrids=Kc(w.state.lightProbeGridArray),O.currentProgram=Jt,O.uniformsList=null,Jt}function af(y,P,$,O,k){let ft=Lt.get(y),Mt=ft.currentProgram.id+","+O+","+k,ut=ft.programVariants.get(Mt);return ut===void 0?(ut=Vs(y,P,$),ft.programVariants.set(Mt,ut)):(ft.currentProgram=ut,ft.uniformsList=null,ft.outputColorSpace=O,ft.toneMapping=k),ut}function jc(y){if(y.uniformsList===null){let P=y.currentProgram.getUniforms();y.uniformsList=ks.seqWithValue(P.seq,y.uniforms)}return y.uniformsList}function Qc(y,P){let $=Lt.get(y);$.outputColorSpace=P.outputColorSpace,$.batching=P.batching,$.batchingColor=P.batchingColor,$.instancing=P.instancing,$.instancingColor=P.instancingColor,$.instancingMorph=P.instancingMorph,$.skinning=P.skinning,$.morphTargets=P.morphTargets,$.morphNormals=P.morphNormals,$.morphColors=P.morphColors,$.morphTargetsCount=P.morphTargetsCount,$.numClippingPlanes=P.numClippingPlanes,$.numIntersection=P.numClipIntersection,$.vertexAlphas=P.vertexAlphas,$.vertexTangents=P.vertexTangents,$.toneMapping=P.toneMapping}function of(y,P,$,O,k){P.isScene!==!0&&(P=ge),Ft.resetTextureUnits();let ft=P.fog,Mt=O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial?P.environment:null,ut=X===null?R.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:Kt.workingColorSpace,vt=O.isMeshStandardMaterial||O.isMeshLambertMaterial&&!O.envMap||O.isMeshPhongMaterial&&!O.envMap,Tt=E.get(O.envMap||Mt,vt),Ot=O.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,Jt=!!$.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),St=!!$.morphAttributes.position,Zt=!!$.morphAttributes.normal,Ae=!!$.morphAttributes.color,de=Vn;O.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(de=R.toneMapping);let he=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Ze=he!==void 0?he.length:0,bt=Lt.get(O),nn=w.state.lights;if(ue===!0&&(Je===!0||y!==V)){let ye=y===V&&O.id===B;j.setState(O,y,ye)}let ie=!1,ki=!1;O.version===bt.__version?bt.needsLights&&bt.lightsStateVersion!==nn.state.version||k.isBatchedMesh&&bt.batching===!1||!k.isBatchedMesh&&bt.batching===!0||k.isBatchedMesh&&bt.batchingColor===!0&&k._colorsTexture===null||k.isBatchedMesh&&bt.batchingColor===!1&&k._colorsTexture!==null||k.isInstancedMesh&&bt.instancing===!1||!k.isInstancedMesh&&bt.instancing===!0||k.isSkinnedMesh&&bt.skinning===!1||!k.isSkinnedMesh&&bt.skinning===!0||k.isInstancedMesh&&bt.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&bt.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&bt.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&bt.instancingMorph===!1&&k.morphTexture!==null||bt.envMap!==Tt||O.fog===!0&&bt.fog!==ft||bt.numClippingPlanes!==void 0&&(bt.numClippingPlanes!==j.numPlanes||bt.numIntersection!==j.numIntersection)||bt.vertexAlphas!==Ot||bt.vertexTangents!==Jt||bt.morphTargets!==St||bt.morphNormals!==Zt||bt.morphColors!==Ae||bt.morphTargetsCount!==Ze||bt.numLightProbeGrids!==Kc(w.state.lightProbeGridArray)?ie=!0:(bt.outputColorSpace!==ut||bt.toneMapping!==de)&&(ki=!0):(ie=!0,bt.__version=O.version);let Ke=bt.currentProgram;(ie===!0||ki===!0)&&(Ke=ki===!0?af(O,P,k,ut,de):Vs(O,P,k),U&&O.isNodeMaterial&&U.onUpdateProgram(O,Ke,bt));let zr=!1,pi=!1,Gi=!1,te=Ke.getUniforms(),Xe=bt.uniforms;if(pt.useProgram(Ke.program)&&(zr=!0,pi=!0,Gi=!0),O.id!==B&&(B=O.id,pi=!0),zr||V!==y){pt.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),te.setValue(D,"projectionMatrix",y.projectionMatrix),te.setValue(D,"viewMatrix",y.matrixWorldInverse);let ke=te.map.cameraPosition;ke!==void 0&&ke.setValue(D,zt.setFromMatrixPosition(y.matrixWorld)),xe.logarithmicDepthBuffer&&te.setValue(D,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&te.setValue(D,"isOrthographic",y.isOrthographicCamera===!0),V!==y&&(V=y,pi=!0,Gi=!0)}if(bt.needsLights&&(nn.state.sunShadowMap.length>0&&te.setValue(D,"sunShadowMap",nn.state.sunShadowMap,Ft),nn.state.directionalShadowMap.length>0&&te.setValue(D,"directionalShadowMap",nn.state.directionalShadowMap,Ft),nn.state.spotShadowMap.length>0&&te.setValue(D,"spotShadowMap",nn.state.spotShadowMap,Ft),nn.state.pointShadowMap.length>0&&te.setValue(D,"pointShadowMap",nn.state.pointShadowMap,Ft)),k.isSkinnedMesh){te.setOptional(D,k,"bindMatrix"),te.setOptional(D,k,"bindMatrixInverse");let ye=k.skeleton;ye&&(ye.boneTexture===null&&ye.computeBoneTexture(),te.setValue(D,"boneTexture",ye.boneTexture,Ft))}k.isBatchedMesh&&(te.setOptional(D,k,"batchingTexture"),te.setValue(D,"batchingTexture",k._matricesTexture,Ft),te.setOptional(D,k,"batchingIdTexture"),te.setValue(D,"batchingIdTexture",k._indirectTexture,Ft),te.setOptional(D,k,"batchingColorTexture"),k._colorsTexture!==null&&te.setValue(D,"batchingColorTexture",k._colorsTexture,Ft));let wn=$.morphAttributes;if((wn.position!==void 0||wn.normal!==void 0||wn.color!==void 0)&&Q.update(k,$,Ke),(pi||bt.receiveShadow!==k.receiveShadow)&&(bt.receiveShadow=k.receiveShadow,te.setValue(D,"receiveShadow",k.receiveShadow)),(O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial)&&O.envMap===null&&P.environment!==null&&(Xe.envMapIntensity.value=P.environmentIntensity),Xe.dfgLUT!==void 0&&(Xe.dfgLUT.value=cx()),pi){if(te.setValue(D,"toneMappingExposure",R.toneMappingExposure),bt.needsLights&&lf(Xe,Gi),ft&&O.fog===!0&&ot.refreshFogUniforms(Xe,ft),ot.refreshMaterialUniforms(Xe,O,et,wt,w.state.transmissionRenderTarget[y.id]),bt.needsLights&&bt.numLightProbeGrids>0){let ye=b,ke=0;for(let qn of w.state.lightProbeGridArray)qn.texture!==null&&(ye.textures[ke]=qn.texture,ye.min[ke]=qn.boundingBox.min,ye.max[ke]=qn.boundingBox.max,ye.resolution[ke]=qn.resolution,ke++);for(let qn in ye)ye[qn].length=ke;Xe.probesSH.value=ye.textures,Xe.probesMin.value=ye.min,Xe.probesMax.value=ye.max,Xe.probesResolution.value=ye.resolution}ks.upload(D,jc(bt),Xe,Ft)}if(O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(ks.upload(D,jc(bt),Xe,Ft),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&te.setValue(D,"center",k.center),te.setValue(D,"modelViewMatrix",k.modelViewMatrix),te.setValue(D,"normalMatrix",k.normalMatrix),te.setValue(D,"modelMatrix",k.matrixWorld),O.uniformsGroups!==void 0){let ye=O.uniformsGroups;for(let ke=0,qn=ye.length;ke<qn;ke++){let eh=ye[ke];At.update(eh,Ke),At.bind(eh,Ke)}}return Ke}function lf(y,P){y.ambientLightColor.needsUpdate=P,y.lightProbe.needsUpdate=P,y.sunLights.needsUpdate=P,y.sunLightShadows.needsUpdate=P,y.directionalLights.needsUpdate=P,y.directionalLightShadows.needsUpdate=P,y.pointLights.needsUpdate=P,y.pointLightShadows.needsUpdate=P,y.spotLights.needsUpdate=P,y.spotLightShadows.needsUpdate=P,y.rectAreaLights.needsUpdate=P,y.hemisphereLights.needsUpdate=P}function cf(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return Y},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(y,P,$){let O=Lt.get(y);O.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,O.__autoAllocateDepthBuffer===!1&&(O.__useRenderToTexture=!1),Lt.get(y.texture).__webglTexture=P,Lt.get(y.depthTexture).__webglTexture=O.__autoAllocateDepthBuffer?void 0:$,O.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,P){let $=Lt.get(y);$.__webglFramebuffer=P,$.__useDefaultFramebuffer=P===void 0},this.setRenderTarget=function(y,P=0,$=0){X=y,Y=P,G=$;let O=null,k=!1,ft=!1;if(y){let ut=Lt.get(y);if(ut.__useDefaultFramebuffer!==void 0){pt.bindFramebuffer(D.FRAMEBUFFER,ut.__webglFramebuffer),W.copy(y.viewport),rt.copy(y.scissor),Et=y.scissorTest,pt.viewport(W),pt.scissor(rt),pt.setScissorTest(Et),B=-1;return}else if(ut.__webglFramebuffer===void 0)Ft.setupRenderTarget(y);else if(ut.__hasExternalTextures)Ft.rebindTextures(y,Lt.get(y.texture).__webglTexture,Lt.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){let Ot=y.depthTexture;if(ut.__boundDepthTexture!==Ot){if(Ot!==null&&Lt.has(Ot)&&(y.width!==Ot.image.width||y.height!==Ot.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ft.setupDepthRenderbuffer(y)}}let vt=y.texture;(vt.isData3DTexture||vt.isDataArrayTexture||vt.isCompressedArrayTexture)&&(ft=!0);let Tt=Lt.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Tt[P])?O=Tt[P][$]:O=Tt[P],k=!0):y.samples>0&&Ft.useMultisampledRTT(y)===!1?O=Lt.get(y).__webglMultisampledFramebuffer:Array.isArray(Tt)?O=Tt[$]:O=Tt,W.copy(y.viewport),rt.copy(y.scissor),Et=y.scissorTest}else W.copy(Ct).multiplyScalar(et).floor(),rt.copy(ne).multiplyScalar(et).floor(),Et=ae;if($!==0&&(O=H),pt.bindFramebuffer(D.FRAMEBUFFER,O)&&pt.drawBuffers(y,O),pt.viewport(W),pt.scissor(rt),pt.setScissorTest(Et),k){let ut=Lt.get(y.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+P,ut.__webglTexture,$)}else if(ft){let ut=P;for(let vt=0;vt<y.textures.length;vt++){let Tt=Lt.get(y.textures[vt]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+vt,Tt.__webglTexture,$,ut)}}else if(y!==null&&$!==0){let ut=Lt.get(y.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,ut.__webglTexture,$)}B=-1};function th(y){let P=Lt.get(y);return(P.__readFormat!==y.format||P.__readType!==y.type)&&(P.__readFormat=y.format,P.__readType=y.type,P.__formatReadable=xe.textureFormatReadable(y.format),P.__typeReadable=xe.textureTypeReadable(y.type)),P}this.readRenderTargetPixels=function(y,P,$,O,k,ft,Mt,ut=0){if(!(y&&y.isWebGLRenderTarget)){Dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let vt=Lt.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Mt!==void 0&&(vt=vt[Mt],Array.isArray(vt)&&(vt=vt[0])),vt){pt.bindFramebuffer(D.FRAMEBUFFER,vt);try{let Tt=y.textures[ut],Ot=Tt.format,Jt=Tt.type;y.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+ut);let St=th(Tt);if(St.__formatReadable===!1){Dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(St.__typeReadable===!1){Dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}P>=0&&P<=y.width-O&&$>=0&&$<=y.height-k&&D.readPixels(P,$,O,k,at.convert(Ot),at.convert(Jt),ft)}finally{let Tt=X!==null?Lt.get(X).__webglFramebuffer:null;pt.bindFramebuffer(D.FRAMEBUFFER,Tt)}}},this.readRenderTargetPixelsAsync=async function(y,P,$,O,k,ft,Mt,ut=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let vt=Lt.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Mt!==void 0&&(vt=vt[Mt],Array.isArray(vt)&&(vt=vt[0])),vt)if(P>=0&&P<=y.width-O&&$>=0&&$<=y.height-k){pt.bindFramebuffer(D.FRAMEBUFFER,vt);let Tt=y.textures[ut],Ot=Tt.format,Jt=Tt.type;y.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+ut);let St=th(Tt);if(St.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(St.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Zt=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Zt),D.bufferData(D.PIXEL_PACK_BUFFER,ft.byteLength,D.STREAM_READ),D.readPixels(P,$,O,k,at.convert(Ot),at.convert(Jt),0),D.bindBuffer(D.PIXEL_PACK_BUFFER,null);let Ae=X!==null?Lt.get(X).__webglFramebuffer:null;pt.bindFramebuffer(D.FRAMEBUFFER,Ae);let de=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await $u(D,de,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Zt),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ft),D.bindBuffer(D.PIXEL_PACK_BUFFER,null),D.deleteBuffer(Zt),D.deleteSync(de),ft}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,P=null,$=0){let O=Math.pow(2,-$),k=Math.floor(y.image.width*O),ft=Math.floor(y.image.height*O),Mt=P!==null?P.x:0,ut=P!==null?P.y:0;Ft.setTexture2D(y,0),D.copyTexSubImage2D(D.TEXTURE_2D,$,0,0,Mt,ut,k,ft),pt.unbindTexture()},this.copyTextureToTexture=function(y,P,$=null,O=null,k=0,ft=0){let Mt,ut,vt,Tt,Ot,Jt,St,Zt,Ae,de=y.isCompressedTexture?y.mipmaps[ft]:y.image;if($!==null)Mt=$.max.x-$.min.x,ut=$.max.y-$.min.y,vt=$.isBox3?$.max.z-$.min.z:1,Tt=$.min.x,Ot=$.min.y,Jt=$.isBox3?$.min.z:0;else{let te=Math.pow(2,-k);Mt=Math.floor(de.width*te),ut=Math.floor(de.height*te),y.isDataArrayTexture?vt=de.depth:y.isData3DTexture?vt=Math.floor(de.depth*te):vt=1,Tt=0,Ot=0,Jt=0}O!==null?(St=O.x,Zt=O.y,Ae=O.z):(St=0,Zt=0,Ae=0);let he=at.convert(P.format),Ze=at.convert(P.type),bt;P.isData3DTexture?(Ft.setTexture3D(P,0),bt=D.TEXTURE_3D):P.isDataArrayTexture||P.isCompressedArrayTexture?(Ft.setTexture2DArray(P,0),bt=D.TEXTURE_2D_ARRAY):(Ft.setTexture2D(P,0),bt=D.TEXTURE_2D),pt.activeTexture(D.TEXTURE0),pt.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,P.flipY),pt.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),pt.pixelStorei(D.UNPACK_ALIGNMENT,P.unpackAlignment);let nn=pt.getParameter(D.UNPACK_ROW_LENGTH),ie=pt.getParameter(D.UNPACK_IMAGE_HEIGHT),ki=pt.getParameter(D.UNPACK_SKIP_PIXELS),Ke=pt.getParameter(D.UNPACK_SKIP_ROWS),zr=pt.getParameter(D.UNPACK_SKIP_IMAGES);pt.pixelStorei(D.UNPACK_ROW_LENGTH,de.width),pt.pixelStorei(D.UNPACK_IMAGE_HEIGHT,de.height),pt.pixelStorei(D.UNPACK_SKIP_PIXELS,Tt),pt.pixelStorei(D.UNPACK_SKIP_ROWS,Ot),pt.pixelStorei(D.UNPACK_SKIP_IMAGES,Jt);let pi=y.isDataArrayTexture||y.isData3DTexture,Gi=P.isDataArrayTexture||P.isData3DTexture;if(y.isDepthTexture){let te=Lt.get(y),Xe=Lt.get(P),wn=Lt.get(te.__renderTarget),ye=Lt.get(Xe.__renderTarget);pt.bindFramebuffer(D.READ_FRAMEBUFFER,wn.__webglFramebuffer),pt.bindFramebuffer(D.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let ke=0;ke<vt;ke++)pi&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Lt.get(y).__webglTexture,k,Jt+ke),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Lt.get(P).__webglTexture,ft,Ae+ke)),D.blitFramebuffer(Tt,Ot,Tt+Mt,Ot+ut,St,Zt,St+Mt,Zt+ut,D.DEPTH_BUFFER_BIT,D.NEAREST);pt.bindFramebuffer(D.READ_FRAMEBUFFER,null),pt.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(k!==0||y.isRenderTargetTexture||Lt.has(y)){let te=Lt.get(y),Xe=Lt.get(P);pt.bindFramebuffer(D.READ_FRAMEBUFFER,I),pt.bindFramebuffer(D.DRAW_FRAMEBUFFER,q);for(let wn=0;wn<vt;wn++)pi?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,te.__webglTexture,k,Jt+wn):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,te.__webglTexture,k),Gi?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Xe.__webglTexture,ft,Ae+wn):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Xe.__webglTexture,ft),k!==0?D.blitFramebuffer(Tt,Ot,Tt+Mt,Ot+ut,St,Zt,St+Mt,Zt+ut,D.COLOR_BUFFER_BIT,D.NEAREST):Gi?D.copyTexSubImage3D(bt,ft,St,Zt,Ae+wn,Tt,Ot,Mt,ut):D.copyTexSubImage2D(bt,ft,St,Zt,Tt,Ot,Mt,ut);pt.bindFramebuffer(D.READ_FRAMEBUFFER,null),pt.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else Gi?y.isDataTexture||y.isData3DTexture?D.texSubImage3D(bt,ft,St,Zt,Ae,Mt,ut,vt,he,Ze,de.data):P.isCompressedArrayTexture?D.compressedTexSubImage3D(bt,ft,St,Zt,Ae,Mt,ut,vt,he,de.data):D.texSubImage3D(bt,ft,St,Zt,Ae,Mt,ut,vt,he,Ze,de):y.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,ft,St,Zt,Mt,ut,he,Ze,de.data):y.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,ft,St,Zt,de.width,de.height,he,de.data):D.texSubImage2D(D.TEXTURE_2D,ft,St,Zt,Mt,ut,he,Ze,de);pt.pixelStorei(D.UNPACK_ROW_LENGTH,nn),pt.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ie),pt.pixelStorei(D.UNPACK_SKIP_PIXELS,ki),pt.pixelStorei(D.UNPACK_SKIP_ROWS,Ke),pt.pixelStorei(D.UNPACK_SKIP_IMAGES,zr),ft===0&&P.generateMipmaps===!0&&P.mipmapsAutoUpdate===!0&&D.generateMipmap(bt),pt.unbindTexture()},this.initRenderTarget=function(y){Lt.get(y).__webglFramebuffer===void 0&&Ft.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?Ft.setTextureCube(y,0):y.isData3DTexture?Ft.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?Ft.setTexture2DArray(y,0):Ft.setTexture2D(y,0),pt.unbindTexture()},this.resetState=function(){Y=0,G=0,X=null,pt.reset(),lt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return yn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Kt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Kt._getUnpackColorSpace()}};function _n(n,t=!1){let e=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},a={},o=n[0].morphTargetsRelative,l=new Ue;l.morphTargetsRelative=o;let c=0;for(let h=0;h<n.length;++h){let d=n[h],u=0,m=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let g in d.attributes){if(!i.has(g))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+g+'" attribute exists among all geometries, or in none of them.'),null;r[g]===void 0&&(r[g]=[]),r[g].push(d.attributes[g]),u++}if(u!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let g in d.morphAttributes){if(!s.has(g))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(d.morphAttributes[g].length!==n[0].morphAttributes[g].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have the same number of morph targets for the "'+g+'" morph attribute.'),null;a[g]===void 0&&(a[g]=[]),a[g].push(d.morphAttributes[g]),m++}if(m!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of morph attributes."),null;if(t){let g;if(e)g=d.index.count;else if(d.attributes.position!==void 0)g=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,g,h),c+=g}}if(e){let h=0,d=[];for(let u=0;u<n.length;++u){let m=n[u].index;for(let g=0;g<m.count;++g)d.push(m.getX(g)+h);h+=n[u].attributes.position.count}l.setIndex(d)}for(let h in r){let d=Pd(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,d)}for(let h in a){let d=a[h][0].length;if(d!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<d;++u){let m=[];for(let v=0;v<a[h].length;++v)m.push(a[h][v][u]);let g=Pd(m);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}}return l}function Pd(n){let t,e,i,s=-1,r=0;for(let c=0;c<n.length;++c){let h=n[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let a=new t(r),o=new an(a,e,i),l=0;for(let c=0;c<n.length;++c){let h=n[c];if(h.isInterleavedBufferAttribute){let d=l/e;for(let u=0,m=h.count;u<m;u++)for(let g=0;g<e;g++){let v=h.getComponent(u,g);o.setComponent(u+d,g,v)}}else a.set(h.array,l);l+=h.count*e}return s!==void 0&&(o.gpuType=s),o}function $n(n,t){let e=document.createElement("canvas");return e.width=n,e.height=t,e}function es(n,t=1,e=1){let i=new Ri(n);return i.wrapS=i.wrapT=As,i.repeat.set(t,e),i.colorSpace=De,i.anisotropy=8,i}function Lc(n,t,e,i,s,r=9e3,a=2){for(let o=0;o<r;o++){let l=(Math.random()-.5)*s;n.fillStyle=`rgb(${Pc(i[0]+l)},${Pc(i[1]+l*1.1)},${Pc(i[2]+l*.6)})`,n.fillRect(Math.random()*t,Math.random()*e,a*(.5+Math.random()),a*(.5+Math.random())*2)}}var Pc=n=>Math.max(0,Math.min(255,Math.round(n)));function Nc(){let n=$n(512,512),t=n.getContext("2d"),e=[66,128,44],i=[82,146,52];for(let s=0;s<2;s++)for(let r=0;r<2;r++){let a=(s+r)%2?e:i;t.fillStyle=`rgb(${a})`,t.fillRect(s*256,r*256,256,256)}Lc(t,512,512,[74,137,48],42,26e3,1.6),t.globalAlpha=.08,t.fillStyle="#d8ffb0";for(let s=0;s<512;s+=8)t.fillRect(0,s,512,1);return t.globalAlpha=1,es(n)}function Dc(){let n=$n(512,512),t=n.getContext("2d");t.fillStyle="rgb(150,112,74)",t.fillRect(0,0,512,512),Lc(t,512,512,[150,112,74],50,3e4,1.4),t.globalAlpha=.12,t.strokeStyle="#5a3c22";for(let e=0;e<40;e++){t.beginPath();let i=Math.random()*512;t.moveTo(0,i),t.bezierCurveTo(170,i+10,340,i-10,512,i),t.stroke()}return t.globalAlpha=1,es(n)}function Ld(){let n=$n(256,256),t=n.getContext("2d");return t.fillStyle="rgb(76,124,46)",t.fillRect(0,0,256,256),Lc(t,256,256,[76,124,46],50,9e3,1.5),es(n)}function Nd(){let n=$n(512,256),t=n.getContext("2d");t.fillStyle="#3a3d44",t.fillRect(0,0,512,256);let e=["#e8e8e8","#2b2b2b","#c23b3b","#3b6cc2","#e0c040","#6a4a3a","#7aa05a","#d88a4a","#f0d0b0","#4a4a7a"];for(let i=0;i<16;i++){let s=i*16;t.fillStyle="#55585f",t.fillRect(0,s+13,512,3);for(let r=0;r<70;r++){if(Math.random()<.12)continue;let a=r*7.3+Math.random()*3;t.fillStyle=e[Math.floor(Math.random()*e.length)],t.fillRect(a,s+6,5,8),t.fillStyle=["#f1c9a5","#d9a87e","#2a1a10","#111"][Math.floor(Math.random()*4)],t.beginPath(),t.arc(a+2.5,s+4,2.3,0,Math.PI*2),t.fill()}}return es(n)}function Dd(){let n=$n(1024,128),t=n.getContext("2d"),e=["#f0f0f0","#222","#b33","#36b","#dc4","#654","#7a5","#d84","#448","#999"];for(let s=0;s<150;s++){let r=Math.random()*1024,a=70+Math.random()*40,o=12+Math.random()*6;t.fillStyle=e[Math.floor(Math.random()*e.length)],t.fillRect(r-o/2,128-a+18,o,a),t.fillStyle=["#f1c9a5","#d9a87e","#c69a72"][Math.floor(Math.random()*3)],t.beginPath(),t.arc(r,128-a+10,7,0,Math.PI*2),t.fill(),t.fillStyle=["#2a1a10","#111","#5a3a20"][Math.floor(Math.random()*3)],t.beginPath(),t.arc(r,128-a+7,7,Math.PI,Math.PI*2),t.fill()}return es(n)}function Ud(){let n=$n(256,128),t=n.getContext("2d");t.fillStyle="#d9dde2",t.fillRect(0,0,256,128);for(let e=0;e<4;e++)for(let i=0;i<16;i++)t.fillStyle=Math.random()<.2?"#9fb7cf":"#5f7a96",t.fillRect(i*16+2,e*32+6,12,20);return es(n)}function Oo(n,t={}){let e=t.w||512,i=t.h||128,s=$n(e,i),r=s.getContext("2d");r.fillStyle=t.bg||"#ffffff",r.fillRect(0,0,e,i),t.border&&(r.strokeStyle=t.border,r.lineWidth=10,r.strokeRect(5,5,e-10,i-10)),r.fillStyle=t.fg||"#111",r.font=`bold ${t.size||Math.floor(i*.62)}px "Hiragino Sans","Noto Sans JP",sans-serif`,r.textAlign="center",r.textBaseline="middle";let a=String(n).split(`
`);a.forEach((l,c)=>r.fillText(l,e/2,i/2+(c-(a.length-1)/2)*(t.size||i*.62)*1.15));let o=new Ri(s);return o.colorSpace=De,o.anisotropy=4,o}function Fd(n,t){let e=$n(128,96),i=e.getContext("2d");i.fillStyle=t,i.fillRect(0,0,128,96),i.fillStyle="#fff",i.fillRect(30,14,68,68),i.fillStyle="#111",i.font="bold 54px sans-serif",i.textAlign="center",i.textBaseline="middle",i.fillText(String(n),64,50);let s=new Ri(e);return s.colorSpace=De,s}function Od(){let n=$n(256,256),t=n.getContext("2d");t.fillStyle="#ffffff",t.fillRect(0,0,256,256),t.globalAlpha=.18;for(let e=0;e<4e3;e++){t.fillStyle=Math.random()<.5?"#000":"#fff";let i=Math.random()*256,s=Math.random()*256;t.fillRect(i,s,1,3+Math.random()*5)}return t.globalAlpha=1,es(n,2,2)}function Bd(){let n=$n(128,128),t=n.getContext("2d"),e=t.createRadialGradient(64,64,4,64,64,62);return e.addColorStop(0,"rgba(0,0,0,0.55)"),e.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=e,t.fillRect(0,0,128,128),new Ri(n)}var kt=(n,t,e)=>new F(n,t,e),Bo=null;function pe(n,t,e=0,i,s=0,r=0){let a=new ee,o=new cn().setFromEuler(new Pn(s,r,e));return a.compose(t||kt(0,0,0),o,i||kt(1,1,1)),n.applyMatrix4(a),n}function Di(n,t,e,i,s,r=10){let a=new we(t,n,e,r),o=s-Math.PI/2,l=kt(i.x+Math.cos(s)*e/2,i.y+Math.sin(s)*e/2,i.z);return pe(a,l,o)}var Ui={};function hx(){if(Ui.h)return Ui.h;let n=_n([pe(new gr(.4,1.25,6,14),kt(0,1.27,0),Math.PI/2,kt(1.06,1,.82)),pe(new Fe(.45,14,10),kt(.62,1.25,0),0,kt(1,1.02,.8)),pe(new Fe(.47,14,10),kt(-.64,1.3,0),0,kt(1,1,.86)),pe(new Fe(.3,10,8),kt(.5,1.5,0),0,kt(1.2,.8,.7))].map(f=>f.toNonIndexed?f.toNonIndexed():f)),t=.42,e=-1.05,i=kt(Math.cos(t)*.95,Math.sin(t)*.95,0),s=_n([Di(.27,.15,1,kt(-.05,-.05,0),t,12).toNonIndexed(),pe(new Fe(.17,10,8),i.clone(),0,kt(1,1,.85)).toNonIndexed(),Di(.15,.085,.58,i.clone().add(kt(.02,.02,0)),e,10).toNonIndexed(),pe(new Fe(.09,8,6),i.clone().add(kt(Math.cos(e)*.58,Math.sin(e)*.58+.01,0)),0,kt(1.1,.9,.9)).toNonIndexed()]),r=_n([pe(new si(.035,.15,6),i.clone().add(kt(-.04,.16,.07)),-.25,null,.15).toNonIndexed(),pe(new si(.035,.15,6),i.clone().add(kt(-.04,.16,-.07)),-.25,null,-.15).toNonIndexed()]),a=pe(new Ie(.95,.07,.035),kt(Math.cos(t)*.45-Math.sin(t)*.17,Math.sin(t)*.45+Math.cos(t)*.17,0),t),o=_n([pe(new Fe(.03,6,5),i.clone().add(kt(.12,-.05,.11))).toNonIndexed(),pe(new Fe(.03,6,5),i.clone().add(kt(.12,-.05,-.11))).toNonIndexed()]),l=i.clone().add(kt(Math.cos(e)*.5,Math.sin(e)*.5,0)),c=pe(new we(.075,.11,.5,8),kt(0,-.25,0)),h=_n([pe(new we(.042,.05,.46,7),kt(0,-.23,0)).toNonIndexed(),pe(new Fe(.06,7,5),kt(0,-.47,0)).toNonIndexed()]),d=pe(new we(.055,.07,.09,8),kt(.01,-.03,0)),u=pe(new we(.08,.15,.58,8),kt(0,-.29,0)),m=_n([pe(new we(.042,.055,.5,7),kt(0,-.25,0)).toNonIndexed(),pe(new Fe(.06,7,5),kt(0,-.5,0)).toNonIndexed()]),g=_n([pe(new we(.09,.035,.8,7),kt(0,-.4,0)).toNonIndexed()]),v=_n([pe(new Ie(.5,.06,.42),kt(.1,1.69,0)).toNonIndexed(),pe(new Ie(.16,.08,.36),kt(.32,1.72,0)).toNonIndexed()]);return Ui.h={body:n,neck:s,ears:r,mane:a,eyes:o,upperF:c,lowerF:h,hoof:d,upperH:u,lowerH:m,tail:g,saddle:v,bit:l,alpha:t},Ui.h}function ux(){if(Ui.j)return Ui.j;let n=pe(new Ie(.5,.24,.34),kt(.24,.43,0),-.12),t=_n([pe(new Fe(.135,12,8,0,Math.PI*2,0,Math.PI*.6),kt(.56,.6,0)).toNonIndexed()]),e=pe(new Fe(.105,10,8),kt(.6,.56,0)),i=_n([Di(.07,.06,.42,kt(-.02,.32,.17),-.35).toNonIndexed(),Di(.07,.06,.42,kt(-.02,.32,-.17),-.35).toNonIndexed()]),s=_n([Di(.055,.045,.42,kt(.37,.18,.2),-2).toNonIndexed(),Di(.055,.045,.42,kt(.37,.18,-.2),-2).toNonIndexed()]),r=_n([Di(.05,.045,.42,kt(.42,.48,.17),-.85).toNonIndexed(),Di(.05,.045,.42,kt(.42,.48,-.17),-.85).toNonIndexed()]);return Ui.j={torso:n,helmet:t,face:e,pants:i,boots:s,arms:r},Ui.j}var Uc={};function li(n,t={}){let e=n+JSON.stringify(t);return Uc[e]||(Uc[e]=new Ht({color:n,roughness:.6,metalness:0,...t})),Uc[e]}function zd(n,t,e,i={}){Bo||(Bo=Od());let s=hx(),r=new Ee,a=new Ee;r.add(a);let o=new Ht({color:n.body,roughness:.42,metalness:.05,map:Bo}),l=li(n.mane,{roughness:.8}),c=new Ht({color:n.leg,roughness:.5,map:Bo}),h=li(1710618,{roughness:.4}),d=new yt(s.body,o);a.add(d);let u=new yt(s.saddle,li(2759184,{roughness:.5}));a.add(u);let m=Fd(e,"#ffffff"),g=new Ht({map:m,roughness:.8,side:Ve});for(let Y of[1,-1]){let G=new yt(new qe(.62,.42),g);G.position.set(.02,1.5,Y*.36),Y<0&&(G.rotation.y=Math.PI),a.add(G)}let v=new Ee;v.position.set(.58,1.42,0),a.add(v);let f=new yt(s.neck,o);v.add(f),v.add(new yt(s.ears,o));let p=new yt(s.mane,l);v.add(p),v.add(new yt(s.eyes,li(328965,{roughness:.2})));let M=new yt(new _r(.11,.018,6,14),li(1118481));M.position.copy(s.bit).add(kt(-.08,.1,0)),M.rotation.y=Math.PI/2,M.rotation.x=.6,v.add(M);let A=[],b=(Y,G,X,B,V)=>{let W=new Ee;W.position.set(Y,G,X),a.add(W),W.add(new yt(B?s.upperF:s.upperH,c));let rt=new Ee;rt.position.y=B?-.5:-.58,W.add(rt),rt.add(new yt(B?s.lowerF:s.lowerH,c));let Et=new yt(s.hoof,h);Et.position.y=B?-.5:-.52,rt.add(Et),A.push({hip:W,knee:rt,front:B,off:V})};b(.62,1.12,.17,!0,.5),b(.62,1.12,-.17,!0,.62),b(-.66,1.2,.17,!1,0),b(-.66,1.2,-.17,!1,.1);let T=new Ee;T.position.set(-1.08,1.45,0),a.add(T),T.add(new yt(s.tail,l));let w=ux(),_=new Ee;_.position.set(.05,1.68,0),a.add(_);let S=li(t,{roughness:.35,metalness:.05}),L=new yt(w.torso,S);_.add(L);let R=new yt(w.helmet,S);_.add(R);let N=new yt(w.face,li(14857356));_.add(N);let U=new yt(w.pants,li(15921906));_.add(U);let H=new yt(w.boots,li(1381653,{roughness:.3}));_.add(H);let I=new yt(w.arms,S);return _.add(I),r.traverse(Y=>{Y.isMesh&&(Y.castShadow=!!i.shadow)}),{root:r,bodyG:a,neckP:v,mane:p,legs:A,tailP:T,jock:_,torso:L,helmet:R,face:N,pants:U,boots:H,arms:I,silk:S,bit:s.bit.clone(),phase:0}}function kd(n,t,e,i){let s=4.2+e*.16,r=t/s*Math.PI*2,a=Math.min(1,e/14);for(let o of n.legs){let l=r+o.off*Math.PI*2;o.front?(o.hip.rotation.z=(.62*Math.sin(l)+.05)*a,o.knee.rotation.z=-1.5*Math.max(0,Math.cos(l))*a):(o.hip.rotation.z=(.5*Math.sin(l)-.12)*a,o.knee.rotation.z=(.9*Math.max(0,Math.cos(l+.4))-.25)*a)}return n.bodyG.position.y=.06*Math.sin(r*1)*a,n.bodyG.rotation.z=.035*Math.sin(r+1.2)*a,n.neckP.rotation.z=(.1*Math.sin(r+2.4)-.12)*a,n.tailP.rotation.z=-1.1-.4*a+.08*Math.sin(r*2),n.tailP.rotation.x=.08*Math.sin(i*9),n.jock.position.y=1.68-n.bodyG.position.y*.7,n.jock.rotation.z=-n.bodyG.rotation.z*.8,n.mane.scale.y=1+.25*Math.sin(i*22),r}var{Ls:dx,R:ci,P:zo,width:un}=Ne,Te={};function Hs(n,t,e,i,s,r=10,a=1){let o=[],l=[],c=[],h=Math.ceil(zo/s);for(let u=0;u<=h;u++){let m=u/h*zo,g=be(m,n,{}),v=be(m,t,{});if(o.push(g.x,e,g.z,v.x,i,v.z),l.push(m/r,0,m/r,a),u<h){let f=u*2;c.push(f,f+1,f+2,f+1,f+3,f+2)}}let d=new Ue;return d.setAttribute("position",new re(o,3)),d.setAttribute("uv",new re(l,2)),d.setIndex(c),d.computeVertexNormals(),d}function fx(n){let t=new Mn({side:Ye,depthWrite:!1,fog:!1,uniforms:{sunDir:{value:n.clone().normalize()}},vertexShader:"varying vec3 vDir; void main(){ vDir = normalize(position); vec4 p = modelViewMatrix*vec4(position,1.0); gl_Position = projectionMatrix*p; gl_Position.z = gl_Position.w; }",fragmentShader:`uniform vec3 sunDir; varying vec3 vDir;
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
      }`}),e=new yt(new Fe(4e3,32,16),t);return e.renderOrder=-1,e.frustumCulled=!1,e}var ko=class{constructor(t,e,i={}){this.race=e,this.opts=i,this.view=i.view||"fp";let s=i.lowPower;this.renderer=new Do({canvas:t,antialias:!s,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,s?1:1.6)),this.renderer.outputColorSpace=De,this.renderer.toneMapping=Er,this.renderer.toneMappingExposure=1.05,this.renderer.shadowMap.enabled=!s,this.renderer.shadowMap.type=Ji,this.scene=new or,this.scene.fog=new ar(12176864,120,1500),this.camera=new rn(72,1,.05,6e3),this.camera.rotation.order="YXZ",this.t=0,this.shake=0,this.whipAnim=0,this.buildWorld(),this.buildHorses(),this.particles(),this.resize(),this._onResize=()=>this.resize(),window.addEventListener("resize",this._onResize)}resize(){let t=this.renderer.domElement,e=t.clientWidth||window.innerWidth,i=t.clientHeight||window.innerHeight;this.renderer.setSize(e,i,!1),this.camera.aspect=e/i,this.camera.fov=e<i?90:66,this.camera.updateProjectionMatrix()}buildWorld(){let t=this.scene,e=new F(-.45,.62,.35).normalize();this.sunDir=e,t.add(this.sky=fx(e)),t.add(new yr(14084351,5398575,.75));let i=new br(16773336,2.6);i.castShadow=!0,i.shadow.mapSize.set(1024,1024);let s=i.shadow.camera;s.left=-28,s.right=28,s.top=28,s.bottom=-28,s.near=1,s.far=220,i.shadow.bias=-4e-4,i.shadow.normalBias=.03,t.add(i),t.add(i.target),this.sun=i;let r=Ld();r.repeat.set(600,600);let a=new yt(new qe(5e3,5e3),new Ht({map:r,roughness:.95}));a.rotation.x=-Math.PI/2,a.position.y=-.02,a.receiveShadow=!0,t.add(a);let o=this.race.surf!=="\u30C0",l=o?Nc():Dc(),c=new yt(Hs(-1.5,un+1.2,.01,.01,2,13,2.1),new Ht({map:l,roughness:o?.85:1}));c.receiveShadow=!0,t.add(c);let h=o?Dc():Nc(),d=new yt(Hs(-26,-4,.008,.008,3,13,1.7),new Ht({map:h,roughness:1}));d.receiveShadow=!0,t.add(d);let u=new Ht({color:16053492,roughness:.35,side:Ve}),m=(xt,zt)=>{t.add(new yt(Hs(xt,xt,zt-.14,zt,2),u)),t.add(new yt(Hs(xt-.07,xt+.07,zt,zt,2),u));let $t=Math.floor(zo/3.2),ge=new Ti(new Ie(.07,zt,.07),u,$t),Me=new ee;for(let We=0;We<$t;We++)be(We*3.2,xt,Te),Me.makeTranslation(Te.x,zt/2,Te.z),ge.setMatrixAt(We,Me);t.add(ge)};m(-.15,1.05),m(un+.4,1.05),m(-4,1),m(-26,.9);let g=new Ht({color:3103270,roughness:1,side:Ve});t.add(new yt(Hs(un+2.6,un+2.6,0,1.4,4),g)),t.add(new yt(Hs(un+2.3,un+2.9,1.4,1.4,4),g));for(let xt=200;xt<=3600;xt+=200){let zt=Ne.finishU-xt;be(zt,-.6,Te);let $t=new Ee,ge=new yt(new we(.06,.06,3.2,8),new Ht({color:xt%1e3===0?13904426:16777215}));if(ge.position.y=1.6,$t.add(ge),xt<=1600){let Me=new yt(new qe(1.4,.8),new Ln({map:Oo(String(xt),{w:256,h:140,bg:"#ffffff",fg:"#d42a2a",border:"#d42a2a"}),side:Ve}));Me.position.y=3.1,Me.rotation.y=Math.atan2(-Te.hz,Te.hx)+Math.PI/2,$t.add(Me)}$t.position.set(Te.x,0,Te.z),t.add($t)}be(Ne.finishU,-.8,Te);let v=new Ee,f=new yt(new we(.1,.1,5,10),new Ht({color:16777215}));f.position.y=2.5,v.add(f);let p=new yt(new we(.9,.9,.08,24),new Ht({color:16777215,roughness:.2,metalness:.4}));p.rotation.x=Math.PI/2,p.position.y=5.2,v.add(p);let M=new yt(new Ds(.55,24),new Ln({color:13904426}));M.position.set(0,5.2,.05),v.add(M);let A=M.clone();A.position.z=-.05,A.rotation.y=Math.PI,v.add(A),v.position.set(Te.x,0,Te.z),t.add(v);let b=be(Ne.finishU,0,{}),T=be(Ne.finishU,un,{}),w=new yt(new qe(.25,un),new Ln({color:16777215,transparent:!0,opacity:.7}));w.rotation.x=-Math.PI/2,w.position.set(b.x,.02,(b.z+T.z)/2),t.add(w);let _=ci+un+14,S=-230,L=260,R=L-S,N=(S+L)/2,U=new yt(new qe(R+40,16),new Ht({color:10132116,roughness:1}));U.rotation.x=-Math.PI/2,U.position.set(N,.01,ci+un+6),U.receiveShadow=!0,t.add(U);let H=Nd();H.repeat.set(R/16,3);let I=new yt(new qe(R,46),new Ht({map:H,roughness:1}));I.rotation.x=-Math.PI/2-.55,I.position.set(N,11,_+19),t.add(I);let q=Ud();q.repeat.set(R/30,1);let Y=new yt(new Ie(R,16,20),[new Ht({color:13620184}),new Ht({color:13620184}),new Ht({color:12567754}),new Ht({color:12567754}),new Ht({map:q}),new Ht({color:13620184})]);Y.position.set(N,30,_+48),t.add(Y);let G=new yt(new Ie(R+10,1.2,46),new Ht({color:15265007,roughness:.4,metalness:.3}));G.position.set(N,39,_+26),G.rotation.x=.08,G.castShadow=!1,t.add(G);for(let xt=S+10;xt<L;xt+=40){let zt=new yt(new we(.6,.6,30,8),new Ht({color:14540253}));zt.position.set(xt,15,_+36),t.add(zt)}let X=Dd();X.repeat.set(R/30,1);let B=new Ht({map:X,transparent:!0,alphaTest:.4,side:Ve,roughness:1});for(let[xt,zt,$t]of[[ci+un+5.5,2.1,.2],[ci+un+9,2.3,.9],[ci+un+12.5,2.5,1.7]]){let ge=new yt(new qe(R,zt),B);ge.position.set(N,$t+zt/2,xt),t.add(ge);let Me=new yt(new Ie(R,$t+.01,3.5),new Ht({color:9276808}));Me.position.set(N,($t+.01)/2,xt+1.2),t.add(Me)}let V=new Ee,W=Oo(this.opts.title||"\u6B7B\u306C\u304B\u751F\u304D\u308B\u304B\u306E\u6226\u3044",{w:1024,h:256,bg:"#0b1a2e",fg:"#ffd34d",size:110}),rt=new yt(new qe(60,15),new Ln({map:W,toneMapped:!1}));rt.position.y=16,V.add(rt);let Et=new yt(new Ie(63,18,1.5),new Ht({color:2236962}));Et.position.set(0,16,-.9),V.add(Et);for(let xt of[-20,20]){let zt=new yt(new Ie(1.5,8,1.5),new Ht({color:5592405}));zt.position.set(xt,4,-.9),V.add(zt)}V.position.set(60,0,ci-70),t.add(V);let J=new yt(new Ds(40,32),new Ht({color:3829647,roughness:.08,metalness:.4}));J.rotation.x=-Math.PI/2,J.scale.set(2.2,1,1),J.position.set(-60,.03,-20),t.add(J);let it=new we(.3,.45,4,6);it.translate(0,2,0);let mt=new si(3.2,9,8);mt.translate(0,8,0);let wt=new Fe(3.6,8,6);wt.translate(0,6.5,0);let et=[];for(let xt=0;xt<520;xt++){let zt=Math.random()*zo,$t=un+14+Math.random()*160;be(zt,$t,Te),!(Te.z>ci&&Te.x>S-30&&Te.x<L+30)&&et.push([Te.x,Te.z,.7+Math.random()*.8,Math.random()<.5])}for(let xt=0;xt<60;xt++){let zt=(Math.random()-.5)*(dx+60),$t=(Math.random()-.5)*(ci*1.2);Math.abs(zt-60)<50&&$t>ci-100||Math.hypot((zt+60)/2.2,$t+20)<45||et.push([zt,$t,.5+Math.random()*.6,!0])}let Rt=new Ti(it,new Ht({color:4863268}),et.length),ce=et.filter(xt=>!xt[3]),Ct=et.filter(xt=>xt[3]),ne=new Ti(mt,new Ht({color:2379818,roughness:1}),ce.length),ae=new Ti(wt,new Ht({color:4025902,roughness:1}),Ct.length),Bt=new ee,Se=new cn,ue=new F;et.forEach((xt,zt)=>{ue.setScalar(xt[2]),Bt.compose(new F(xt[0],0,xt[1]),Se,ue),Rt.setMatrixAt(zt,Bt)}),ce.forEach((xt,zt)=>{ue.setScalar(xt[2]),Bt.compose(new F(xt[0],0,xt[1]),Se,ue),ne.setMatrixAt(zt,Bt)}),Ct.forEach((xt,zt)=>{ue.set(xt[2],xt[2]*(.8+Math.random()*.4),xt[2]),Bt.compose(new F(xt[0],0,xt[1]),Se,ue),ae.setMatrixAt(zt,Bt)}),t.add(Rt,ne,ae);let Je=new Ht({color:7244448,roughness:1,flatShading:!0});for(let xt=0;xt<14;xt++){let zt=xt/14*Math.PI*2+Math.random()*.2,$t=1700+Math.random()*600,ge=new yt(new si(300+Math.random()*300,160+Math.random()*220,7),Je);ge.position.set(Math.cos(zt)*$t,60,Math.sin(zt)*$t),t.add(ge)}this.buildGate()}buildGate(){let t=this.race,e=t.racers.length,i=new Ee,s=new Ht({color:3111482,roughness:.6}),r=new Ht({color:13619151,roughness:.5});be(t.u0+1.6,0,Te);let a=Math.atan2(-Te.hz,Te.hx);for(let u=0;u<=e;u++){let m=.5+u*1.25,g=be(t.u0+1.6,m,{}),v=new yt(new Ie(2.6,2.4,.08),s);v.position.set(g.x,1.2,g.z),v.rotation.y=a,i.add(v)}let o=be(t.u0+1.6,.5,{}),l=be(t.u0+1.6,.5+e*1.25,{}),c=new yt(new Ie(.5,.6,e*1.25+.4),r);c.position.set((o.x+l.x)/2,2.7,(o.z+l.z)/2),c.rotation.y=a,i.add(c);let h=Oo("\u6B7B\u306C\u304B\u751F\u304D\u308B\u304B\u306E\u6226\u3044",{w:1024,h:96,bg:"#2f7a3a",fg:"#ffffff",size:60}),d=new yt(new qe(e*1.25,.5),new Ln({map:h,side:Ve}));d.position.set((o.x+l.x)/2,2.7,(o.z+l.z)/2),d.rotation.y=a-Math.PI/2,d.position.x-=Math.cos(a)*.27,d.position.z+=Math.sin(a)*.27,i.add(d),this.scene.add(i),this.gate=i}buildHorses(){this.models=[];let t=new Ln({map:Bd(),transparent:!0,depthWrite:!1});for(let i of this.race.racers){let s=je[i.coat??0],r=zd(s,i.silk??16777215,i.num,{shadow:!0}),a=new yt(new qe(3,1.2),t);a.rotation.x=-Math.PI/2,a.position.y=.03,r.root.add(a),this.scene.add(r.root),r.r=i,this.models.push(r),i.isPlayer&&(this.player=r)}let e=this.player;if(e){this.rig=new Ee,e.bodyG.add(this.rig),this.rig.position.set(.12,2.55,0),this.rig.add(this.camera);let i=e.silk,s=new Ht({color:16119285,roughness:.7});this.arms=[];for(let r of[1,-1]){let a=new yt(new we(.045,.055,1,10),i),o=new yt(new Fe(.055,10,8),s),l=new yt(new we(.008,.008,1,5),new Ht({color:2759182}));e.bodyG.add(a,o,l),this.arms.push({s:r,arm:a,hand:o,rein:l})}this.whipStick=new yt(new we(.008,.014,.65,6),new Ht({color:1118481})),e.bodyG.add(this.whipStick),this.setView(this.view)}}setView(t){this.view=t;let e=this.player;if(!e)return;let i=t==="fp";for(let s of[e.torso,e.helmet,e.face,e.pants,e.boots,e.arms])s.visible=!i;for(let s of this.arms)s.arm.visible=i,s.hand.visible=i,s.rein.visible=!0;this.whipStick.visible=i,i?(this.camera.parent!==this.rig&&this.rig.add(this.camera),this.camera.position.set(0,0,0)):this.scene.add(this.camera)}particles(){let e=new Ue;this.pPos=new Float32Array(700*3),this.pVel=new Float32Array(700*3),this.pLife=new Float32Array(700),e.setAttribute("position",new an(this.pPos,3));let i=this.race.surf!=="\u30C0";this.pts=new dr(e,new Ns({color:i?5204522:9069632,size:i?.07:.09,sizeAttenuation:!0})),this.pts.frustumCulled=!1,this.scene.add(this.pts),this.pN=700,this.pI=0}emit(t,e,i,s,r){let a=this.pI;this.pI=(this.pI+1)%this.pN,this.pPos[a*3]=t,this.pPos[a*3+1]=e,this.pPos[a*3+2]=i,this.pVel[a*3]=s+(Math.random()-.5)*1.5,this.pVel[a*3+1]=1.5+Math.random()*2.5,this.pVel[a*3+2]=r+(Math.random()-.5)*1.5,this.pLife[a]=.7+Math.random()*.4}onWhip(){this.whipAnim=.32,this.shake=.12}update(t){this.t+=t;let e=new F;for(let s of this.models){let r=s.r,a=be(r.u,r.d,Te),o=Math.atan2(-a.hz,a.hx),l=(r.d-(s.lastD??r.d))/Math.max(t,.001);s.lastD=r.d,s.yaw=(s.yaw??0)*.85+-Math.atan2(l,Math.max(r.v,3))*.15,s.root.position.set(a.x,0,a.z),s.root.rotation.y=o+s.yaw;let c=kd(s,r.stride,r.v,this.t);if(r.v>8){let h=Math.floor(c/Math.PI);if(h!==s.lastStep){s.lastStep=h;let d=this.race.surf==="\u30C0"?6:3;for(let u=0;u<d;u++)this.emit(a.x-a.hx*(.5+Math.random()),.08,a.z-a.hz*(.5+Math.random()),-a.hx*r.v*.15,-a.hz*r.v*.15)}}}for(let s=0;s<this.pN;s++){if(this.pLife[s]<=0){this.pPos[s*3+1]=-10;continue}this.pLife[s]-=t,this.pVel[s*3+1]-=9.8*t,this.pPos[s*3]+=this.pVel[s*3]*t,this.pPos[s*3+1]=Math.max(.01,this.pPos[s*3+1]+this.pVel[s*3+1]*t),this.pPos[s*3+2]+=this.pVel[s*3+2]*t}this.pts.geometry.attributes.position.needsUpdate=!0;let i=this.player;if(i){let s=i.r,r=i.neckP;r.updateMatrix(),i.bodyG.updateMatrix(),this.whipAnim=Math.max(0,this.whipAnim-t);let a=this.whipAnim>0?Math.sin((1-this.whipAnim/.32)*Math.PI):0,o=s.v>10?Math.sin(this.t*2*Math.PI*(s.v/(4.2+s.v*.16)))*.05:0;for(let c of this.arms){let h=new F(.2,2.25,c.s*.2),d=new F(.92+o,1.72+o*.4,c.s*.11);c.s>0&&a>0&&(d=new F(.5-a*.15,1.95+a*.35,.36+a*.1));let u=i.bit.clone().add(new F(0,0,c.s*.1)).applyMatrix4(r.matrix);if(Fc(c.arm,h,d),c.hand.position.copy(d),Fc(c.rein,c.s>0&&a>0?new F(.92,1.72,.11):d,u),c.s>0){let m=a>0?new F(.05-a*.6,1.6+a*.2,.55):new F(1.3,1.45,.28);Fc(this.whipStick,d,m,.65)}}if(this.view==="fp"){let c=i.bodyG.position.y;this.shake=Math.max(0,this.shake-t);let h=this.shake*.25;this.rig.position.set(.12,2.55-c*.55+Math.sin(this.t*40)*h*.1,0),this.camera.rotation.set(-.13-i.bodyG.rotation.z*.6+(Math.random()-.5)*h*.05,-Math.PI/2,-i.yaw*.5+(Math.random()-.5)*h*.05),this.camera.rotation.x-=0;let d=Math.min(1,s.v/18),u=this.camera.aspect<1?90:66;this.camera.fov+=(u+d*6-this.camera.fov)*.05,this.camera.updateProjectionMatrix()}else{let c=be(s.u,s.d,{}),h=this.view==="tv"?0:9,d;if(this.view==="tv"){let u=be(s.u+2,s.d+22,{});e.set(u.x,7,u.z),d=new F(c.x,1.4,c.z)}else e.set(c.x-c.hx*h+c.nx*1.5,4.2,c.z-c.hz*h+c.nz*1.5),d=new F(c.x+c.hx*8,1.4,c.z+c.hz*8);this.camera.position.lerp(e,1-Math.exp(-t*10)),this.camera.lookAt(d)}let l=be(s.u,s.d,{});this.sun.position.set(l.x+this.sunDir.x*100,this.sunDir.y*100,l.z+this.sunDir.z*100),this.sun.target.position.set(l.x,0,l.z),this.sun.target.updateMatrixWorld(),this.camera.getWorldPosition(e),this.sky.position.copy(e)}}render(){this.renderer.render(this.scene,this.camera)}dispose(){window.removeEventListener("resize",this._onResize),this.scene.traverse(t=>{t.geometry&&t.geometry.dispose(),t.material&&(Array.isArray(t.material)?t.material:[t.material]).forEach(i=>{i.map&&i.map.dispose(),i.dispose()})}),this.renderer.dispose()}},px=new F(0,1,0);function Fc(n,t,e,i){let s=new F().subVectors(e,t),r=s.length();n.position.copy(t).addScaledVector(s,.5),n.quaternion.setFromUnitVectors(px,s.normalize()),n.scale.set(1,i?1:r,1)}var me=null,Fi=null,bn=null,Gd=!0,Go=null;function Ho(n){Gd=n,Fi&&(Fi.gain.value=n?.8:0)}function Hd(){if(me){me.state==="suspended"&&me.resume();return}try{me=new(window.AudioContext||window.webkitAudioContext),Fi=me.createGain(),Fi.gain.value=Gd?.8:0,Fi.connect(me.destination),Go=me.createBuffer(1,me.sampleRate*2,me.sampleRate);let n=Go.getChannelData(0);for(let t=0;t<n.length;t++)n[t]=Math.random()*2-1}catch{me=null}}function ns(n,t,e,i,s="bandpass",r=0){if(!me)return;let a=me.currentTime+r,o=me.createBufferSource();o.buffer=Go;let l=me.createBiquadFilter();l.type=s,l.frequency.value=t,l.Q.value=e;let c=me.createGain();c.gain.setValueAtTime(i,a),c.gain.exponentialRampToValueAtTime(1e-4,a+n),o.connect(l),l.connect(c),c.connect(Fi),o.start(a,Math.random()*1.5),o.stop(a+n+.05)}function Vd(n=.5){ns(.09,180+Math.random()*60,1.2,n),ns(.05,900,2,n*.25)}function Wd(){ns(.08,3200,.8,.9,"highpass"),ns(.12,1400,3,.4)}function Xd(){ns(.15,300,1,.5)}function $d(){ns(.35,600,.6,.8),ns(.25,2500,1,.5,"highpass",.02)}function qd(){if(!me)return;[523,659,784,1046,784,1046].forEach((t,e)=>{let i=me.currentTime+e*.16,s=me.createOscillator();s.type="sawtooth",s.frequency.value=t;let r=me.createGain();r.gain.setValueAtTime(1e-4,i),r.gain.exponentialRampToValueAtTime(.18,i+.02),r.gain.exponentialRampToValueAtTime(1e-4,i+(e===5?.6:.15));let a=me.createBiquadFilter();a.type="lowpass",a.frequency.value=2500,s.connect(a),a.connect(r),r.connect(Fi),s.start(i),s.stop(i+.7)})}function Yd(){if(!me||bn)return;let n=me.createBufferSource();n.buffer=Go,n.loop=!0;let t=me.createBiquadFilter();t.type="bandpass",t.frequency.value=700,t.Q.value=.5,bn=me.createGain(),bn.gain.value=.02,n.connect(t),t.connect(bn),bn.connect(Fi),n.start(),bn._src=n}function Oc(n){bn&&bn.gain.setTargetAtTime(n,me.currentTime,.3)}function Jd(){if(bn){try{bn._src.stop()}catch{}bn.disconnect(),bn=null}}var Zd=null,Bc=/fast/.test(location.hash)?5:1;function Vo(n){let t=document.getElementById("race-screen");t.innerHTML=`
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
    <div id="h-result" class="hud-result hidden"></div>`,t.classList.remove("hidden"),document.body.classList.add("in-race");let e={...n.player,isPlayer:!0,silk:sn[n.player.silk??0]},i=n.fieldSize||12,s=n.opponents?[...n.opponents]:[];s.length<i-1&&s.push(...Dh(n.race,e,i-1-s.length));let r=Uh({dist:n.race.dist,surf:n.race.surf,specs:[e,...s]}),a=/iPhone|iPad|Android/i.test(navigator.userAgent)&&(navigator.hardwareConcurrency||4)<=4,o=new ko(document.getElementById("race-canvas"),r,{view:It.settings.view||"fp",title:n.race.name,lowPower:a});Hd(),Ho(It.settings.sound),Yd(),Oc(.05);let l={steer:0,whip:!1,l:!1,r:!1},c=X=>document.getElementById(X),h=(X,B,V)=>{X.addEventListener("pointerdown",rt=>{rt.preventDefault();try{X.setPointerCapture(rt.pointerId)}catch{}X.classList.add("on"),B()});let W=rt=>{X.classList.remove("on"),V&&V()};X.addEventListener("pointerup",W),X.addEventListener("pointercancel",W),X.addEventListener("pointerleave",W)};h(c("b-left"),()=>{l.l=!0},()=>{l.l=!1}),h(c("b-right"),()=>{l.r=!0},()=>{l.r=!1}),h(c("b-whip"),()=>{l.whip=!0},null);let d=(X,B)=>{(X.key==="ArrowLeft"||X.key==="a")&&(l.l=B),(X.key==="ArrowRight"||X.key==="d")&&(l.r=B),(X.key===" "||X.key==="ArrowUp")&&B&&(l.whip=!0)},u=X=>d(X,!0),m=X=>d(X,!1);window.addEventListener("keydown",u),window.addEventListener("keyup",m);let g=["fp","back","tv"],v={fp:"\u9A0E\u624B\u8996\u70B9",back:"\u5F8C\u308D\u304B\u3089",tv:"\u4E2D\u7D99"};c("h-view").textContent=v[o.view]||"\u8996\u70B9",c("h-view").onclick=()=>{let X=g[(g.indexOf(o.view)+1)%g.length];o.setView(X),It.settings.view=X,Re(),c("h-view").textContent=v[X]};let f=!1;c("h-quit").onclick=()=>{confirm("\u30EC\u30FC\u30B9\u3092\u4E2D\u6B62\u3057\u307E\u3059\u304B\uFF1F\uFF08\u51FA\u8D70\u3057\u306A\u304B\u3063\u305F\u3053\u3068\u306B\u306A\u308A\u307E\u3059\uFF09")&&(f=!0,G(null))};let p=c("h-msg"),M=0,A=(X,B=1.6,V="")=>{p.textContent=X,p.className="hud-msg show "+V,M=B},b=c("minimap").getContext("2d"),T=()=>{let X=b.canvas;b.clearRect(0,0,X.width,X.height);let B=(X.width-16)/(Ne.Ls+2*Ne.R+60),V=(X.height-16)/(2*Ne.R+60),W=Math.min(B,V),rt=X.width/2,Et=X.height/2;b.strokeStyle="rgba(255,255,255,0.75)",b.lineWidth=6,b.beginPath();for(let it=0;it<=Ne.P;it+=20){let mt=be(it,10),wt=rt+mt.x*W,et=Et-mt.z*W;it?b.lineTo(wt,et):b.moveTo(wt,et)}b.closePath(),b.stroke();let J=be(Ne.finishU,10);b.fillStyle="#ff3b3b",b.fillRect(rt+J.x*W-1,Et-J.z*W-6,3,12);for(let it of r.racers){let mt=be(it.u,it.d);b.fillStyle=it.isPlayer?"#ffe14d":"#"+(it.silk??16777215).toString(16).padStart(6,"0"),b.beginPath(),b.arc(rt+mt.x*W,Et-mt.z*W,it.isPlayer?4.5:3,0,Math.PI*2),b.fill(),it.isPlayer&&(b.strokeStyle="#000",b.lineWidth=1,b.stroke())}},w=performance.now(),_=0,S=0,L=!1,R=0,N=0,U=0,H=3;A("3",1);let I=X=>{let B=Math.min(.1,(X-w)/1e3);w=X,_+=B*Bc;let V=0;for(l.steer=(l.r?1:0)-(l.l?1:0);_>=1/60&&V<6*Bc;)Fh(r,1/60,l),l.whip=!1,_-=1/60,V++;for(let et of r.events.splice(0))if(et.type==="start")A("\u30B9\u30BF\u30FC\u30C8\uFF01",1.2,"big"),$d();else if(et.type==="whip")o.onWhip(),Wd();else if(et.type==="bump")Xd();else if(et.type==="mark"){let Rt={1e3:"\u6B8B\u308A1000m",600:"\u6B8B\u308A600m\u3000\u305D\u308D\u305D\u308D\u52DD\u8CA0\uFF01",400:"\u6B8B\u308A400m\uFF01 \u30E0\u30C1\u3067\u8FFD\u3048\uFF01",200:"\u6B8B\u308A200m\uFF01"}[et.m];A(Rt,1.6),et.m<=400&&Oc(et.m===200?.5:.35)}else if(et.type==="finish"&&et.r.isPlayer){let Rt=et.r.pos;A(Rt===1?"1\u7740\uFF01\uFF01 \u52DD\u3063\u305F\uFF01":`${Rt}\u7740\u3067\u30B4\u30FC\u30EB`,4,Rt===1?"big win":"big"),Rt===1&&qd(),L=!0,R=0}if(r.countdown>0){let et=Math.ceil(r.countdown);et!==H&&et>0&&(H=et,A(String(et),.9,"big"))}o.update(B),o.render();let W=r.player,rt=Math.max(0,r.dist-W.p);c("h-rank").textContent=`${W.rank||"-"}/${r.racers.length}`,c("h-rem").textContent=W.finished?"\u30B4\u30FC\u30EB":`${Math.ceil(rt)}m`,c("h-time").textContent=ls(W.finished?W.finishTime:r.t);let Et=W.energy/W.cap,J=c("h-gauge");J.style.width=(Et*100).toFixed(1)+"%",J.style.background=Et>.5?"#3ddc84":Et>.2?"#ffc93d":"#ff4d4d",c("h-speed").textContent=Math.round(W.v*3.6)+" km/h"+(W.whipT>0?" \u26A1":""),c("b-whip").classList.toggle("cool",W.whipCool>0),W.blocked&&!W.finished?(U+=B,U>.8&&M<=0&&A("\u524D\u304C\u8A70\u307E\u3063\u3066\u3044\u308B\uFF01 \u5DE6\u53F3\u306B\u52D5\u3051\uFF01",1.3,"warn")):U=0,Et<=0&&!W.finished&&M<=0&&r.started&&A("\u30B9\u30BF\u30DF\u30CA\u5207\u308C\u2026\uFF01",1.2,"warn"),M-=B,M<=0&&p.classList.remove("show"),T();let it=0,mt=0;for(let et of r.racers){if(et===W)continue;let Rt=et.p-W.p,ce=et.d-W.d;if(Math.abs(Rt)<3.5&&Math.abs(ce)<3){let Ct=1-Math.abs(ce)/3;ce<0?it=Math.max(it,Ct):mt=Math.max(mt,Ct)}}c("side-l").style.opacity=it.toFixed(2),c("side-r").style.opacity=mt.toFixed(2);let wt=Math.floor(W.stride/((4.2+W.v*.16)/3));wt!==N&&W.v>3&&(N=wt,Vd(.25+Math.min(.4,W.v/40))),L&&(R+=B*Bc,R>3.2&&!c("h-result").dataset.shown&&Y()),S=requestAnimationFrame(I)};S=requestAnimationFrame(I);function q(){let X=r.racers.map(V=>({r:V,time:V.finished?V.finishTime:r.t+(r.dist-V.p)/Math.max(10,V.v)}));X.sort((V,W)=>V.time-W.time);let B=X[0];return X.map((V,W)=>({pos:W+1,name:V.r.name,jname:V.r.jname,num:V.r.num,time:V.time,isPlayer:!!V.r.isPlayer,margin:W===0?"":Oh(V.time-X[W-1].time,16.5),silk:V.r.silk}))}function Y(){let X=c("h-result");X.dataset.shown="1";let B=q(),V=B.find(rt=>rt.isPlayer),W=B.map(rt=>`<tr class="${rt.isPlayer?"me":""}"><td>${rt.pos}</td><td><span class="num" style="background:#${(rt.silk??16777215).toString(16).padStart(6,"0")}">${rt.num}</span></td><td>${rt.name}<small>${rt.jname||""}</small></td><td>${ls(rt.time)}</td><td>${rt.margin}</td></tr>`).join("");X.innerHTML=`<div class="res-card"><h2>${n.race.name} \u7D50\u679C</h2><div class="res-me ${V.pos===1?"win":""}">${V.pos}\u7740 <small>${ls(V.time)}</small></div>
      <div class="res-table"><table><tr><th>\u7740</th><th>\u756A</th><th>\u99AC\u540D / \u9A0E\u624B</th><th>\u30BF\u30A4\u30E0</th><th>\u7740\u5DEE</th></tr>${W}</table></div>
      <button id="res-next" class="btn primary">\u6B21\u3078</button></div>`,X.classList.remove("hidden"),c("res-next").onclick=()=>G({pos:V.pos,field:B.length,time:V.time,whips:r.player.whips,list:B})}function G(X){L!=="done"&&(L="done",cancelAnimationFrame(S),window.removeEventListener("keydown",u),window.removeEventListener("keyup",m),Jd(),o.dispose(),t.classList.add("hidden"),t.innerHTML="",document.body.classList.remove("in-race"),Zd=null,n.onDone&&n.onDone(f?null:X))}Zd={race:r,view:o},window.__race=r}var zc=[{id:"ssr-1",rarity:"SSR",kind:"horse",name:"SSR\u30AD\u30E3\u30E9\u2460\uFF08\u6E96\u5099\u4E2D\uFF09",bonus:{}},{id:"ssr-2",rarity:"SSR",kind:"jockey",name:"SSR\u30AD\u30E3\u30E9\u2461\uFF08\u6E96\u5099\u4E2D\uFF09",bonus:{}},{id:"ssr-3",rarity:"SSR",kind:"support",name:"SSR\u30AD\u30E3\u30E9\u2462\uFF08\u6E96\u5099\u4E2D\uFF09",bonus:{}},{id:"sr-1",rarity:"SR",kind:"horse",name:"SR\u30AD\u30E3\u30E9\u2460\uFF08\u6E96\u5099\u4E2D\uFF09",bonus:{}},{id:"sr-2",rarity:"SR",kind:"horse",name:"SR\u30AD\u30E3\u30E9\u2461\uFF08\u6E96\u5099\u4E2D\uFF09",bonus:{}},{id:"sr-3",rarity:"SR",kind:"jockey",name:"SR\u30AD\u30E3\u30E9\u2462\uFF08\u6E96\u5099\u4E2D\uFF09",bonus:{}},{id:"sr-4",rarity:"SR",kind:"support",name:"SR\u30AD\u30E3\u30E9\u2463\uFF08\u6E96\u5099\u4E2D\uFF09",bonus:{}},{id:"r-1",rarity:"R",kind:"horse",name:"R\u30AD\u30E3\u30E9\u2460\uFF08\u6E96\u5099\u4E2D\uFF09",bonus:{}},{id:"r-2",rarity:"R",kind:"horse",name:"R\u30AD\u30E3\u30E9\u2461\uFF08\u6E96\u5099\u4E2D\uFF09",bonus:{}},{id:"r-3",rarity:"R",kind:"jockey",name:"R\u30AD\u30E3\u30E9\u2462\uFF08\u6E96\u5099\u4E2D\uFF09",bonus:{}},{id:"r-4",rarity:"R",kind:"support",name:"R\u30AD\u30E3\u30E9\u2463\uFF08\u6E96\u5099\u4E2D\uFF09",bonus:{}},{id:"r-5",rarity:"R",kind:"support",name:"R\u30AD\u30E3\u30E9\u2464\uFF08\u6E96\u5099\u4E2D\uFF09",bonus:{}}],is={SSR:.03,SR:.18,R:.79},kc=10,Gc=100;function gx(n){let t=Math.random();return t<is.SSR?"SSR":t<is.SSR+is.SR||n?"SR":"R"}function Kd(n){let t=[];for(let e=0;e<n;e++){let i=gx(n===10&&e===9),s=zc.filter(r=>r.rarity===i);t.push(s[Math.floor(Math.random()*s.length)])}return t}var _x=()=>document.getElementById("app"),Vt=n=>String(n??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]),Fn=n=>"#"+(n??16777215).toString(16).padStart(6,"0");function hi(n){_x().innerHTML=n,window.scrollTo(0,0)}function ui(n){document.querySelectorAll("[data-act]").forEach(t=>{let e=t.dataset.act;n[e]&&(t.onclick=i=>{i.preventDefault(),n[e](t.dataset.v,t)})})}function En(n,{onClose:t,cls:e=""}={}){let i=document.createElement("div");i.className="modal "+e,i.innerHTML=`<div class="modal-card">${n}</div>`,document.body.appendChild(i);let s=()=>{i.remove(),t&&t()};return i.addEventListener("click",r=>{r.target===i&&!e.includes("nobg")&&s()}),i.querySelectorAll("[data-close]").forEach(r=>r.onclick=s),{el:i,close:s}}function Or(n){let t=document.createElement("div");t.className="toast",t.textContent=n,document.body.appendChild(t),setTimeout(()=>t.classList.add("show"),10),setTimeout(()=>{t.classList.remove("show"),setTimeout(()=>t.remove(),400)},2200)}function Wo(n,t){let e=gi(t);return`<div class="stat"><span class="sn">${n}</span><span class="rk" style="color:${as(e)}">${e}</span>
    <div class="bar"><i style="width:${Math.min(100,t)}%"></i></div><span class="sv">${Math.floor(t)}</span></div>`}function Oi(n,t="home"){return`<header class="top"><button class="back" data-act="go" data-v="${t}">\u2039</button><h1>${n}</h1>
    <div class="carrot">\u{1F955} ${It.carrots}</div></header>`}var jd={};function Bi(n){(jd[n]||di)()}function di(){let n=It.activeHorse,t=It.activeJockey;hi(`
  <div class="title-screen">
    <div class="title-bg"></div>
    <div class="logo"><div class="logo-sub">\u7AF6\u99AC\u80B2\u6210\u30B2\u30FC\u30E0</div><div class="logo-main">\u6B7B\u306C\u304B<br>\u751F\u304D\u308B\u304B\u306E<br>\u6226\u3044</div></div>
    <div class="carrot home-carrot">\u{1F955} \u91D1\u306E\u306B\u3093\u3058\u3093 ${It.carrots}</div>
    <div class="menu">
      <button class="mbtn big" data-act="horse">\u{1F40E} \u99AC\u3092\u80B2\u3066\u308B${n?`<small>\u7D9A\u304D\uFF1A${Vt(n.name)}\uFF08${Qo(n.t)}\uFF09</small>`:"<small>\u751F\u307E\u308C\u3066\u304B\u3089\u5F15\u9000\u307E\u3067</small>"}</button>
      <button class="mbtn" data-act="jockey">\u{1F3C7} \u9A0E\u624B\u3092\u80B2\u3066\u308B${t?`<small>\u7D9A\u304D\uFF1A${Vt(t.name)}</small>`:"<small>\u7AF6\u99AC\u5B66\u6821\u304B\u3089\u30C7\u30D3\u30E5\u30FC\u307E\u3067</small>"}</button>
      <button class="mbtn" data-act="list">\u{1F4D6} \u4E00\u89A7<small>\u80B2\u3066\u305F\u99AC ${It.horses.length}\u982D\u30FB\u9A0E\u624B ${It.jockeys.length}\u4EBA</small></button>
      <button class="mbtn" data-act="gacha">\u{1F3B0} \u30AC\u30C1\u30E3<small>\u30AD\u30E3\u30E9\u306F\u6E96\u5099\u4E2D</small></button>
      <button class="mbtn" data-act="vs">\u2694\uFE0F \u5BFE\u6226\u30FB\u30EC\u30FC\u30B9<small>\u80B2\u3066\u305F\u99AC\u3067\u52DD\u8CA0</small></button>
      <button class="mbtn small" data-act="settings">\u2699\uFE0F \u8A2D\u5B9A</button>
    </div>
  </div>`),ui({horse:()=>It.activeHorse?ss():xx(),jockey:()=>It.activeJockey?Xo():bx(),list:()=>$o("h"),gacha:nf,vs:Rx,settings:Cx})}jd.home=di;function xx(){let n=Math.floor(Math.random()*je.length),t=()=>{hi(`${Oi("\u99AC\u3092\u80B2\u3066\u308B")}
    <div class="page">
      <div class="card center"><div class="foal" style="--c:${Fn(je[n].body)}"><span>\u{1F434}</span></div>
        <p>\u7267\u5834\u3067\u65B0\u3057\u3044\u547D\u304C\u751F\u307E\u308C\u3088\u3046\u3068\u3057\u3066\u3044\u307E\u3059\u3002<br>\u540D\u524D\u3068\u6BDB\u8272\u3092\u6C7A\u3081\u3066\u304F\u3060\u3055\u3044\u3002</p></div>
      <div class="card">
        <label>\u99AC\u306E\u540D\u524D\uFF08\u30AB\u30BF\u30AB\u30CA9\u6587\u5B57\u307E\u3067\uFF09</label>
        <div class="row"><input id="hname" maxlength="9" value="${Vt(xi())}"><button class="btn" data-act="rand">\u{1F3B2}</button></div>
        <label>\u6BDB\u8272</label>
        <div class="chips">${je.map((e,i)=>`<button class="chip ${i===n?"on":""}" data-act="coat" data-v="${i}"><i style="background:${Fn(e.body)}"></i>${e.name}</button>`).join("")}</div>
      </div>
      <button class="btn primary wide" data-act="born">\u8A95\u751F\u3055\u305B\u308B</button>
    </div>`),ui({go:Bi,rand:()=>{document.getElementById("hname").value=xi()},coat:e=>{let i=document.getElementById("hname").value;n=+e,t(),document.getElementById("hname").value=i},born:()=>{let e=document.getElementById("hname").value.trim()||xi(),i=ph(e,{coat:n});i.id=Ko(),i.log.unshift(`\u7236${i.sire}\u30FB\u6BCD${i.dam}\u306E\u9593\u306B\u3001${je[n].name}\u306E\u4ED4\u99AC\u300C${i.name}\u300D\u304C\u751F\u307E\u308C\u305F\uFF01`),It.activeHorse=i,Re(),En(`<h2>\u8A95\u751F\uFF01</h2><div class="foal big" style="--c:${Fn(je[n].body)}"><span>\u{1F434}</span></div>
          <p><b>${Vt(i.name)}</b><br>\u7236 ${i.sire}\u3000\u6BCD ${i.dam}</p>
          <p class="muted">\u829D ${i.apt.turf}\uFF0F\u30C0\u30FC\u30C8 ${i.apt.dirt}\u3000\u811A\u8CEA\u306E\u50BE\u5411\uFF1A${i.style}</p>
          <button class="btn primary wide" data-close>\u80B2\u6210\u30B9\u30BF\u30FC\u30C8</button>`,{onClose:ss})}})};t()}function Qd(n){return jo(n.jockeyId)||$s}function vx(n){return n<=5e-4?'<span class="risk r0">\u5B89\u5168</span>':n<.015?'<span class="risk r1">\u4F4E</span>':n<.035?'<span class="risk r2">\u4E2D</span>':'<span class="risk r3">\u9AD8</span>'}function ss(){let n=It.activeHorse;if(!n)return di();let t=Bn(n.t),e=vi(n),i=Qd(n),s=sl(n),r=el(n),a=n.fatigue<40?"#3ddc84":n.fatigue<70?"#ffc93d":"#ff4d4d",o=tl-n.t;hi(`${Oi(Vt(n.name))}
  <div class="page">
    <div class="card hcard">
      <div class="hc-top"><div class="dot" style="background:${Fn(je[n.coat].body)}"></div>
        <div><b>${t.age}\u6B73 ${t.month}\u6708</b><small>${fh[e]}</small></div>
        <div class="money">\u{1F4B4} ${os(n.money)}</div></div>
      <div class="hc-mid">
        <span class="cond" style="background:${Jo[n.cond]}">${kr[n.cond]}</span>
        <div class="fat"><small>\u75B2\u52B4</small><div class="bar"><i style="width:${n.fatigue}%;background:${a}"></i></div></div>
      </div>
      ${n.injury?`<div class="injury">\u{1FA79} ${Vt(n.injury.name)}\uFF08\u6CBB\u308B\u307E\u3067\u3042\u3068${n.injury.months}\u304B\u6708\uFF09</div>`:""}
      ${n.fatigue>=70&&!n.injury?'<div class="warnbox">\u75B2\u308C\u304C\u305F\u307E\u3063\u3066\u3044\u307E\u3059\u3002\u3053\u306E\u307E\u307E\u8ABF\u6559\u3059\u308B\u3068\u30B1\u30AC\u3057\u3084\u3059\u3044\uFF01</div>':""}
    </div>
    <div class="card">
      ${On.map(l=>Wo(Hi[l],n.s[l])).join("")}
      <div class="apt"><span>\u829D <b>${n.apt.turf}</b></span><span>\u30C0\u30FC\u30C8 <b>${n.apt.dirt}</b></span><span>${Sh(n)}\u5411\u304D</span><span>${n.style}</span></div>
      <div class="apt"><span>\u6226\u7E3E ${n.record.join("-")}</span><span>\u7372\u5F97\u8CDE\u91D1 ${os(n.earnings)}</span>${n.g1Wins?`<span>G1 ${n.g1Wins}\u52DD</span>`:""}</div>
    </div>
    ${e===2?`<div class="card jrow" data-act="pickj"><span>\u{1F3C7} \u9A0E\u624B</span><b>${Vt(i.name)}</b><small>${i.npc?"\u9A0E\u624B\u3092\u80B2\u3066\u308B\u3068\u4E57\u305B\u304B\u3048\u3089\u308C\u307E\u3059":"\u30BF\u30C3\u30D7\u3067\u5909\u66F4"}</small></div>`:""}
    ${s.length?`<button class="btn race wide" data-act="races">\u{1F3C1} \u4ECA\u6708\u306E\u30EC\u30FC\u30B9\u3092\u898B\u308B\uFF08${s.filter(l=>!l.locked).length}\u30EC\u30FC\u30B9\uFF09</button>`:e===2&&t.age===2&&t.month<6?'<div class="muted center">\u30EC\u30FC\u30B9\u306F2\u6B736\u6708\u304B\u3089\u51FA\u3089\u308C\u307E\u3059</div>':""}
    <div class="sec">\u30C8\u30EC\u30FC\u30CB\u30F3\u30B0</div>
    ${n.injury?'<button class="btn wide" data-act="treat">\u{1FA79} \u6CBB\u7642\u306B\u5C02\u5FF5\u3059\u308B</button>':`
    <div class="grid">${r.map(l=>{let c=l.g?Object.keys(l.g).map(d=>Hi[d]).join("\u30FB"):l.rest?`\u75B2\u52B4 -${l.rest}`:"",h=l.g?vx(nl(n,l.inj)):"";return`<button class="tbtn ${l.g?"":"rest"}" data-act="act" data-v="${l.id}"><b>${l.name}</b><small>${c}</small>${l.g?`<span class="tmeta">\u75B2\u52B4+${l.f} \u30B1\u30AC${h}</span>`:`<span class="tmeta">${l.desc}</span>`}</button>`}).join("")}</div>`}
    <div class="sec">\u4ECA\u6708\u306E\u30A8\u30B5</div>
    <div class="chips">${Wi.map(l=>`<button class="chip ${n.feed===l.id?"on":""}" data-act="feed" data-v="${l.id}">${l.name}<small>${l.cost?l.cost+"\u4E07\u5186":"\u7121\u6599"}</small></button>`).join("")}</div>
    <div class="muted small">${Wi.find(l=>l.id===n.feed).desc}</div>
    <div class="sec">\u3067\u304D\u3054\u3068</div>
    <div class="log">${n.log.slice(0,8).map(l=>`<div>${Vt(l)}</div>`).join("")}</div>
    <div class="foot"><span class="muted">\u5F15\u9000\u307E\u3067\u6700\u5927 ${Math.max(0,o)}\u304B\u6708</span><button class="btn ghost" data-act="retire">\u5F15\u9000\u3055\u305B\u308B</button></div>
  </div>`),ui({go:Bi,act:l=>{let c=_h(n,l,i.npc?null:i);Vc(n,c)},treat:()=>{let l=vh(n);Vc(n,l)},feed:l=>{n.feed=l,Re(),ss()},races:()=>Mx(n),pickj:()=>yx(n),retire:()=>{confirm(`${n.name}\u3092\u5F15\u9000\u3055\u305B\u307E\u3059\u304B\uFF1F`)&&(n.retireReason="\u5F15\u9000\u3092\u6C7A\u3081\u305F",Wc(n))}})}function tf(n,t){let e=Object.entries(n).filter(([,i])=>i>0);return e.length?`<div class="gains">${e.map(([i,s])=>`<span>${t[i]} <b>+${s}</b></span>`).join("")}</div>`:""}function Vc(n,t){for(let s of t.msgs)n.log.unshift(s);Object.keys(t.gains).length&&n.log.unshift(`${t.title}\uFF1A`+Object.entries(t.gains).filter(([,s])=>s>0).map(([s,r])=>`${Hi[s]}+${r}`).join(" ")),t.carrots&&(It.carrots+=t.carrots),t.injury&&n.log.unshift(`\u30B1\u30AC\uFF1A${t.injury.name}\uFF08${t.injury.months}\u304B\u6708\uFF09`),n.log=n.log.slice(0,40),Re();let e=`<h2>${Vt(t.title)}</h2>${tf(t.gains,Hi)}${t.carrots?`<p class="center">\u{1F955} \u91D1\u306E\u306B\u3093\u3058\u3093 +${t.carrots}</p>`:""}${t.msgs.map(s=>`<p>${Vt(s)}</p>`).join("")}`;if(t.injury){let s=t.injury.sev;e+=`<div class="injury big">\u26A0\uFE0F ${s===3?"\u91CD\u3044\u6545\u969C":s===2?"\u30B1\u30AC":"\u8EFD\u3044\u30B1\u30AC"}\uFF1A${Vt(t.injury.name)}<br><small>${t.injury.months}\u304B\u6708\u306E\u4F11\u990A\u304C\u5FC5\u8981</small></div>`}let i=()=>{if(t.forceRetire){Wc(n);return}if(t.injury&&t.injury.sev===3){let s=En(`<h2>\u6B7B\u306C\u304B\u751F\u304D\u308B\u304B</h2><p>${Vt(n.name)}\u306F\u300C${Vt(t.injury.name)}\u300D\u3068\u8A3A\u65AD\u3055\u308C\u305F\u3002<br>\u7AF6\u8D70\u99AC\u3068\u3057\u3066\u8D70\u308A\u7D9A\u3051\u308B\u306B\u306F\u9577\u3044\u4F11\u990A\u304C\u5FC5\u8981\u3060\u3002</p>
        <button class="btn primary wide" data-a="cont">\u9577\u671F\u4F11\u990A\u3057\u3066\u5FA9\u5E30\u3092\u3081\u3056\u3059</button><button class="btn wide" data-a="ret">\u5F15\u9000\u3055\u305B\u308B</button>`,{cls:"nobg"});s.el.querySelector("[data-a=cont]").onclick=()=>{s.close(),n.log.unshift("\u5FA9\u5E30\u3092\u3081\u3056\u3057\u3066\u9577\u671F\u4F11\u990A\u306B\u5165\u3063\u305F"),Re(),ss()},s.el.querySelector("[data-a=ret]").onclick=()=>{s.close(),n.retireReason=`${t.injury.name}\u3067\u5F15\u9000`,Wc(n)};return}ss()};En(e+'<button class="btn primary wide" data-close>OK</button>',{onClose:i})}function yx(n){let t=[$s,...It.jockeys],e=En(`<h2>\u9A0E\u624B\u3092\u9078\u3076</h2><div class="plist">${t.map((i,s)=>`<button class="pitem ${(n.jockeyId??null)===(i.id??null)?"on":""}" data-i="${s}">
    <b>${Vt(i.name)}</b><small>${mi.map(r=>rs[r]+gi(i.s[r])).join(" ")}</small></button>`).join("")}</div>
    ${It.jockeys.length?"":'<p class="muted">\u300C\u9A0E\u624B\u3092\u80B2\u3066\u308B\u300D\u3067\u30C7\u30D3\u30E5\u30FC\u3055\u305B\u305F\u9A0E\u624B\u304C\u3001\u3053\u3053\u306B\u51FA\u3066\u304D\u307E\u3059\u3002</p>'}<button class="btn wide" data-close>\u9589\u3058\u308B</button>`);e.el.querySelectorAll("[data-i]").forEach(i=>i.onclick=()=>{let s=t[+i.dataset.i];n.jockeyId=s.id??null,Re(),e.close(),ss()})}function Mx(n){let t=sl(n),e=En(`<h2>${Qo(n.t)} \u306E\u30EC\u30FC\u30B9</h2><div class="rlist">${t.map((i,s)=>`
    <button class="ritem ${i.locked?"locked":""}" data-i="${s}">
      <div>${i.g?`<span class="grade g-${i.g}">${i.g}</span>`:`<span class="grade gc">${i.name.split("\uFF08")[0]}</span>`}<b>${Vt((i.g,i.name))}</b></div>
      <small>${i.place} ${i.surf==="\u30C0"?"\u30C0\u30FC\u30C8":"\u829D"}${i.dist}m\u30001\u7740 ${os(i.prize)}</small>
      ${i.locked?'<small class="lock">\u{1F512} \u52DD\u3061\u661F\u304C\u8DB3\u308A\u306A\u3044</small>':""}
    </button>`).join("")}</div><button class="btn wide" data-close>\u3084\u3081\u308B</button>`);e.el.querySelectorAll("[data-i]").forEach(i=>i.onclick=()=>{let s=t[+i.dataset.i];if(s.locked){Or("\u3082\u3063\u3068\u52DD\u3063\u3066\u304B\u3089\u6311\u6226\u3057\u3088\u3046");return}e.close(),Sx(n,s)})}function Sx(n,t){let e=Qd(n),i=n.style,s=t.surf==="\u829D"?n.apt.turf:n.apt.dirt,r=()=>{let a=En(`<h2>${t.g?`<span class="grade g-${t.g}">${t.g}</span>`:""}${Vt(t.name)}</h2>
      <p class="center">${t.place} ${t.surf==="\u30C0"?"\u30C0\u30FC\u30C8":"\u829D"}${t.dist}m</p>
      <div class="apt"><span>\u9069\u6027 ${s}</span><span>\u4F53\u8ABF ${kr[n.cond]}</span><span>\u75B2\u52B4 ${Math.round(n.fatigue)}</span><span>\u9A0E\u624B ${Vt(e.name)}</span></div>
      <label>\u4F5C\u6226</label><div class="chips">${rh.map(o=>`<button class="chip ${o===i?"on":""}" data-s="${o}">${o}</button>`).join("")}</div>
      <div class="howto"><b>\u64CD\u4F5C</b><br>\u25C0 \u25B6\uFF1A\u99AC\u3092\u5DE6\u53F3\u306B\u52D5\u304B\u3059\uFF08\u5185\u30E9\u30C1\u6CBF\u3044\u306F\u8FD1\u9053\uFF09<br>\u30E0\u30C1\uFF1A\u305F\u305F\u3044\u3066\u3044\u308B\u9593\u30B9\u30D4\u30FC\u30C9UP\u3002\u3067\u3082\u4F53\u529B\u304C\u6E1B\u308A\u3084\u3059\u3044<br>\u4F53\u529B\u30B2\u30FC\u30B8\u304C0\u306B\u306A\u308B\u3068\u4E00\u6C17\u306B\u5931\u901F\uFF01</div>
      <button class="btn race wide" data-go>\u51FA\u8D70\uFF01</button><button class="btn wide" data-close>\u3084\u3081\u308B</button>`,{cls:"nobg"});a.el.querySelectorAll("[data-s]").forEach(o=>o.onclick=()=>{i=o.dataset.s,a.close(),r()}),a.el.querySelector("[data-go]").onclick=()=>{a.close();let o=t.g==="G1"?14:t.g?12:10;Vo({race:t,fieldSize:o,player:{name:n.name,jname:e.name,h:{...n.s},j:{...e.s},apt:s,cond:n.cond,style:i,coat:n.coat,silk:e.silk??6},onDone:l=>{if(!l){ss();return}let c=yh(n,t,l,e.npc?null:e);e.npc||Ih(e,l.pos,t.g),c.title=`${t.name}\u3000${l.pos}\u7740`,Vc(n,c)}})}};r()}function Wc(n){n.retired=!0,n.retireReason||(n.retireReason="\u5F15\u9000");let t=Mh(n);n.rank=t,n.score=rl(n);let e={...n,log:n.log.slice(0,10)};It.horses.unshift(e),It.activeHorse=null;let i=10+n.g1Wins*20;It.carrots+=i,Re(),En(`<h2>\u5F15\u9000</h2><div class="rank-big" style="color:${as(t)}">${t}</div>
    <p class="center"><b>${Vt(n.name)}</b><br>${Vt(n.retireReason)}</p>
    <div class="apt"><span>\u6226\u7E3E ${n.record.join("-")}</span><span>\u7372\u5F97\u8CDE\u91D1 ${os(n.earnings)}</span></div>
    ${n.titles.length?`<p class="center">\u52DD\u3063\u305F\u91CD\u8CDE\uFF1A${n.titles.map(Vt).join("\u3001")}</p>`:""}
    <p class="center">\u{1F955} \u91D1\u306E\u306B\u3093\u3058\u3093 +${i}</p><p class="muted center">\u4E00\u89A7\u306B\u767B\u9332\u3057\u307E\u3057\u305F</p>
    <button class="btn primary wide" data-close>\u30DB\u30FC\u30E0\u3078</button>`,{onClose:di})}function bx(){let n=Math.floor(Math.random()*sn.length),t=()=>{hi(`${Oi("\u9A0E\u624B\u3092\u80B2\u3066\u308B")}
    <div class="page">
      <div class="card center"><div class="foal" style="--c:${Fn(sn[n])}"><span>\u{1F3C7}</span></div><p>\u7AF6\u99AC\u5B66\u6821\u306B\u65B0\u3057\u3044\u751F\u5F92\u304C\u5165\u5B66\u3057\u307E\u3059\u3002<br>2\u5E74\u9593\u935B\u3048\u3066\u30C7\u30D3\u30E5\u30FC\u3055\u305B\u3088\u3046\u3002</p></div>
      <div class="card"><label>\u9A0E\u624B\u306E\u540D\u524D</label>
        <div class="row"><input id="jname" maxlength="10" value="${Vt(Vi())}"><button class="btn" data-act="rand">\u{1F3B2}</button></div>
        <label>\u52DD\u8CA0\u670D\u306E\u8272</label>
        <div class="chips">${sn.map((e,i)=>`<button class="chip sw ${i===n?"on":""}" data-act="silk" data-v="${i}"><i style="background:${Fn(e)}"></i></button>`).join("")}</div></div>
      <button class="btn primary wide" data-act="start">\u5165\u5B66\u3059\u308B</button>
    </div>`),ui({go:Bi,rand:()=>{document.getElementById("jname").value=Vi()},silk:e=>{let i=document.getElementById("jname").value;n=+e,t(),document.getElementById("jname").value=i},start:()=>{let e=Eh(document.getElementById("jname").value.trim(),{silk:n});e.log.unshift(`${e.name}\u304C\u7AF6\u99AC\u5B66\u6821\u306B\u5165\u5B66\u3057\u305F\uFF01`),It.activeJockey=e,Re(),Xo()}})};t()}function Xo(){let n=It.activeJockey;if(!n)return di();let t=n.fatigue<40?"#3ddc84":n.fatigue<70?"#ffc93d":"#ff4d4d",e=Th(n);hi(`${Oi(Vt(n.name))}
  <div class="page">
    <div class="card hcard"><div class="hc-top"><div class="dot" style="background:${Fn(sn[n.silk])}"></div><div><b>${wh(n)}</b><small>16\u6B73\u3067\u5165\u5B66</small></div></div>
      <div class="hc-mid"><span class="cond" style="background:${Jo[n.cond]}">${kr[n.cond]}</span>
        <div class="fat"><small>\u75B2\u52B4</small><div class="bar"><i style="width:${n.fatigue}%;background:${t}"></i></div></div></div>
      ${n.injury?`<div class="injury">\u{1FA79} ${Vt(n.injury.name)}\uFF08\u3042\u3068${n.injury.months}\u304B\u6708\uFF09</div>`:""}</div>
    <div class="card">${mi.map(i=>Wo(rs[i],n.s[i])).join("")}
      <div class="muted small">\u6280\u8853\uFF1A\u5DE6\u53F3\u306E\u52D5\u304D\uFF0F\u30E0\u30C1\uFF1A\u30E0\u30C1\u306E\u52B9\u304D\uFF0F\u30D0\u30E9\u30F3\u30B9\uFF1A\u4F53\u529B\u306E\u6E1B\u308A\u306B\u304F\u3055\uFF0F\u4F53\u529B\uFF1A\u30E0\u30C1\u3092\u9023\u7D9A\u3067\u6253\u3066\u308B\uFF0F\u5224\u65AD\uFF1A\u30B9\u30BF\u30FC\u30C8</div></div>
    ${e?'<button class="btn race wide" data-act="mock">\u{1F3C1} \u6A21\u64EC\u30EC\u30FC\u30B9\u306B\u51FA\u308B\uFF08\u5927\u304D\u304F\u6210\u9577\uFF09</button>':""}
    <div class="sec">\u30C8\u30EC\u30FC\u30CB\u30F3\u30B0</div>
    ${n.injury?'<button class="btn wide" data-act="treat">\u{1FA79} \u6CBB\u7642\u306B\u5C02\u5FF5\u3059\u308B</button>':`<div class="grid">${al.map(i=>`<button class="tbtn ${i.g?"":"rest"}" data-act="act" data-v="${i.id}"><b>${i.name}</b><small>${i.desc}</small>${i.g?`<span class="tmeta">\u75B2\u52B4+${i.f}</span>`:""}</button>`).join("")}</div>`}
    <div class="sec">\u3067\u304D\u3054\u3068</div><div class="log">${n.log.slice(0,8).map(i=>`<div>${Vt(i)}</div>`).join("")}</div>
  </div>`),ui({go:Bi,act:i=>Hc(n,Ah(n,i)),treat:()=>Hc(n,Rh(n)),mock:()=>{let i={spd:40,sta:45,pow:40,gut:40,wis:40};Vo({race:{name:"\u7AF6\u99AC\u5B66\u6821 \u6A21\u64EC\u30EC\u30FC\u30B9",dist:Le([1200,1400,1600]),surf:"\u829D",place:"\u5B66\u6821",lv:34,prize:0},fieldSize:8,player:{name:"\u5B66\u6821\u306E\u99AC",jname:n.name,h:i,j:{...n.s},apt:"A",cond:2,style:"\u5148\u884C",coat:0,silk:n.silk},onDone:s=>{if(!s)return Xo();let r=Ch(n,s.pos,s.field);r.title=`\u6A21\u64EC\u30EC\u30FC\u30B9 ${s.pos}\u7740`,Hc(n,r)}})}})}function Hc(n,t){for(let i of t.msgs)n.log.unshift(i);Object.keys(t.gains).length&&n.log.unshift(`${t.title}\uFF1A`+Object.entries(t.gains).filter(([,i])=>i>0).map(([i,s])=>`${rs[i]}+${s}`).join(" ")),t.injury&&n.log.unshift(`\u30B1\u30AC\uFF1A${t.injury.name}`),n.log=n.log.slice(0,30),Re();let e=`<h2>${Vt(t.title)}</h2>${tf(t.gains,rs)}${t.msgs.map(i=>`<p>${Vt(i)}</p>`).join("")}`;t.injury&&(e+=`<div class="injury big">\u26A0\uFE0F ${Vt(t.injury.name)}<br><small>${t.injury.months}\u304B\u6708\u306E\u4F11\u990A</small></div>`),En(e+'<button class="btn primary wide" data-close>OK</button>',{onClose:()=>{if(t.debut){n.debuted=!0,n.id=Ko(),n.log.unshift("\u30C7\u30D3\u30E5\u30FC\uFF01"),It.jockeys.unshift(n),It.activeJockey=null,It.carrots+=10,Re();let i=mi.reduce((s,r)=>s+n.s[r],0)/5;En(`<h2>\u30C7\u30D3\u30E5\u30FC\uFF01</h2><div class="rank-big" style="color:${as(gi(i))}">${gi(i)}</div><p class="center"><b>${Vt(n.name)}</b> \u304C\u9A0E\u624B\u3068\u3057\u3066\u30C7\u30D3\u30E5\u30FC\u3057\u305F\uFF01<br>\u99AC\u306E\u80B2\u6210\u3067\u9A0E\u624B\u306B\u9078\u3079\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002</p><p class="center">\u{1F955} +10</p><button class="btn primary wide" data-close>\u30DB\u30FC\u30E0\u3078</button>`,{onClose:di})}else Xo()}})}function $o(n="h"){let t=It.horses,e=It.jockeys;hi(`${Oi("\u4E00\u89A7")}
  <div class="page">
    <div class="tabs"><button class="${n==="h"?"on":""}" data-act="tab" data-v="h">\u99AC\uFF08${t.length}\uFF09</button><button class="${n==="j"?"on":""}" data-act="tab" data-v="j">\u9A0E\u624B\uFF08${e.length}\uFF09</button></div>
    ${n==="h"?t.length?t.map((i,s)=>`<button class="lcard" data-act="hd" data-v="${s}">
      <div class="lrank" style="color:${as(i.rank||"G")}">${i.rank||"-"}</div>
      <div class="linfo"><b><i class="dot sm" style="background:${Fn(je[i.coat].body)}"></i>${Vt(i.name)}</b>
      <small>${i.record.join("-")}\u3000${os(i.earnings)}${i.g1Wins?`\u3000G1 ${i.g1Wins}\u52DD`:""}</small>
      <small class="muted">${Vt(i.retireReason||"")}</small></div></button>`).join(""):'<div class="empty">\u307E\u3060\u5F15\u9000\u3057\u305F\u99AC\u306F\u3044\u307E\u305B\u3093\u3002<br>\u99AC\u3092\u80B2\u3066\u3066\u5F15\u9000\u3055\u305B\u308B\u3068\u3001\u3053\u3053\u306B\u6B8B\u308A\u307E\u3059\u3002</div>':e.length?e.map((i,s)=>{let r=mi.reduce((a,o)=>a+i.s[o],0)/5;return`<button class="lcard" data-act="jd" data-v="${s}">
      <div class="lrank" style="color:${as(gi(r))}">${gi(r)}</div>
      <div class="linfo"><b><i class="dot sm" style="background:${Fn(sn[i.silk])}"></i>${Vt(i.name)}</b><small>${i.races}\u6226${i.wins}\u52DD${i.g1Wins?`\u3000G1 ${i.g1Wins}\u52DD`:""}</small></div></button>`}).join(""):'<div class="empty">\u307E\u3060\u30C7\u30D3\u30E5\u30FC\u3057\u305F\u9A0E\u624B\u306F\u3044\u307E\u305B\u3093\u3002</div>'}
  </div>`),ui({go:Bi,tab:i=>$o(i),hd:i=>Ex(t[+i]),jd:i=>wx(e[+i])})}function Ex(n){let t=(n.races||[]).slice().reverse(),e=En(`<h2><i class="dot sm" style="background:${Fn(je[n.coat].body)}"></i>${Vt(n.name)}</h2>
    <p class="center muted">\u7236 ${n.sire}\u3000\u6BCD ${n.dam}\u3000${je[n.coat].name}</p>
    ${On.map(i=>Wo(Hi[i],n.s[i])).join("")}
    <div class="apt"><span>\u829D ${n.apt.turf}</span><span>\u30C0 ${n.apt.dirt}</span><span>${n.style}</span><span>${n.record.join("-")}</span></div>
    ${n.titles&&n.titles.length?`<p>\u{1F3C6} ${n.titles.map(Vt).join("\u3001")}</p>`:""}
    <div class="rhist">${t.map(i=>`<div><span class="${i.pos===1?"win":""}">${i.pos}\u7740</span>${i.g?`<span class="grade g-${i.g}">${i.g}</span>`:""}${Vt(i.name)}<small>${i.surf}${i.dist}m ${ls(i.time)}</small></div>`).join("")||'<p class="muted">\u30EC\u30FC\u30B9\u8A18\u9332\u306A\u3057</p>'}</div>
    <button class="btn wide" data-a="code">\u5BFE\u6226\u30B3\u30FC\u30C9\u3092\u30B3\u30D4\u30FC</button>
    <button class="btn ghost wide" data-a="del">\u4E00\u89A7\u304B\u3089\u6D88\u3059</button>
    <button class="btn primary wide" data-close>\u9589\u3058\u308B</button>`);e.el.querySelector("[data-a=code]").onclick=()=>ef(n),e.el.querySelector("[data-a=del]").onclick=()=>{confirm("\u672C\u5F53\u306B\u6D88\u3057\u307E\u3059\u304B\uFF1F")&&(It.horses.splice(It.horses.indexOf(n),1),Re(),e.close(),$o("h"))}}function wx(n){let t=En(`<h2><i class="dot sm" style="background:${Fn(sn[n.silk])}"></i>${Vt(n.name)}</h2>
    ${mi.map(e=>Wo(rs[e],n.s[e])).join("")}
    <div class="apt"><span>${n.races}\u6226 ${n.wins}\u52DD</span><span>${n.record.join("-")}</span><span>\u6A21\u64EC\u30EC\u30FC\u30B9 ${n.mockWins}\u52DD</span></div>
    <button class="btn ghost wide" data-a="del">\u4E00\u89A7\u304B\u3089\u6D88\u3059</button><button class="btn primary wide" data-close>\u9589\u3058\u308B</button>`);t.el.querySelector("[data-a=del]").onclick=()=>{confirm("\u672C\u5F53\u306B\u6D88\u3057\u307E\u3059\u304B\uFF1F")&&(It.jockeys.splice(It.jockeys.indexOf(n),1),Re(),t.close(),$o("j"))}}function Tx(n,t){let e={v:1,n:n.name,s:n.s,a:n.apt,st:n.style,c:n.coat,jn:t?t.name:"\u898B\u7FD2\u3044\u9A0E\u624B",js:t?t.s:$s.s,sl:t?t.silk:6};return"SNK-"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))}function Ax(n){try{let t=JSON.parse(decodeURIComponent(escape(atob(n.trim().replace(/^SNK-/,"")))));if(!t.s||!t.n)return null;for(let e of On)t.s[e]=Math.max(1,Math.min(105,+t.s[e]||1));return t}catch{return null}}function ef(n){let t=Tx(n,jo(n.jockeyId)),e=()=>Or("\u5BFE\u6226\u30B3\u30FC\u30C9\u3092\u30B3\u30D4\u30FC\u3057\u307E\u3057\u305F\u3002\u53CB\u9054\u306B\u9001\u308D\u3046\uFF01");navigator.clipboard?navigator.clipboard.writeText(t).then(e,()=>prompt("\u3053\u306E\u30B3\u30FC\u30C9\u3092\u30B3\u30D4\u30FC\u3057\u3066\u304F\u3060\u3055\u3044",t)):prompt("\u3053\u306E\u30B3\u30FC\u30C9\u3092\u30B3\u30D4\u30FC\u3057\u3066\u304F\u3060\u3055\u3044",t)}function nf(){let n={};for(let e of It.gacha)n[e]=(n[e]||0)+1;hi(`${Oi("\u30AC\u30C1\u30E3")}
  <div class="page">
    <div class="banner"><div class="bn-tag">PICK UP</div><div class="bn-title">\u30AD\u30E3\u30E9\u6E96\u5099\u4E2D</div><div class="bn-sub">\u3053\u306E\u3042\u3068\u30AD\u30E3\u30E9\u3092\u8FFD\u52A0\u4E88\u5B9A</div></div>
    <div class="rates">SSR ${is.SSR*100}%\u3000SR ${is.SR*100}%\u3000R ${is.R*100}%\u3000\uFF0810\u9023\u306FSR\u4EE5\u4E0A1\u679A\u78BA\u5B9A\uFF09</div>
    <div class="row2"><button class="btn primary" data-act="p1">1\u56DE\u5F15\u304F<small>\u{1F955}${kc}</small></button><button class="btn race" data-act="p10">10\u9023<small>\u{1F955}${Gc}</small></button></div>
    <div class="muted small center">\u91D1\u306E\u306B\u3093\u3058\u3093\u306F\u30EC\u30FC\u30B9\u3067\u52DD\u3064\u30FB\u99AC\u3092\u5F15\u9000\u3055\u305B\u308B\u30FB\u9A0E\u624B\u3092\u30C7\u30D3\u30E5\u30FC\u3055\u305B\u308B\u3068\u5897\u3048\u307E\u3059</div>
    <div class="sec">\u6301\u3063\u3066\u3044\u308B\u30AD\u30E3\u30E9\uFF08${It.gacha.length}\uFF09</div>
    <div class="cgrid">${zc.map(e=>`<div class="ccard ${e.rarity} ${n[e.id]?"":"none"}"><span class="rar">${e.rarity}</span><span class="cn">${n[e.id]?Vt(e.name):"\uFF1F\uFF1F\uFF1F"}</span>${n[e.id]?`<span class="cnt">\xD7${n[e.id]}</span>`:""}</div>`).join("")}</div>
  </div>`);let t=(e,i)=>{if(It.carrots<i){Or("\u91D1\u306E\u306B\u3093\u3058\u3093\u304C\u8DB3\u308A\u307E\u305B\u3093");return}It.carrots-=i;let s=Kd(e);for(let o of s)It.gacha.push(o.id);Re();let r=s.some(o=>o.rarity==="SSR")?"SSR":s.some(o=>o.rarity==="SR")?"SR":"R",a=En(`<div class="gacha-anim ${r}"><div class="gate-light"></div></div><div class="gres">${s.map((o,l)=>`<div class="ccard ${o.rarity} flip" style="animation-delay:${.6+l*.12}s"><span class="rar">${o.rarity}</span><span class="cn">${Vt(o.name)}</span></div>`).join("")}</div>
      <button class="btn primary wide" data-close>OK</button>`,{onClose:nf,cls:"gacha"})};ui({go:Bi,p1:()=>t(1,kc),p10:()=>t(10,Gc)})}function Rx(){let n=[];It.activeHorse&&vi(It.activeHorse)===2&&n.push({h:It.activeHorse,label:"\u80B2\u6210\u4E2D"});for(let o of It.horses)n.push({h:o,label:"\u5F15\u9000\u99AC"});let t=0,e=-1,i=0,s=[],r=[{name:"\u30D5\u30EA\u30FC\u30EC\u30FC\u30B9",g:null,surf:"\u829D",dist:2e3,place:"\u6771\u4EAC"},...Gr.filter(o=>o.g==="G1")],a=()=>{hi(`${Oi("\u5BFE\u6226\u30FB\u30EC\u30FC\u30B9")}
    <div class="page">
      ${n.length?"":'<div class="empty">\u5BFE\u6226\u306B\u51FA\u305B\u308B\u99AC\u304C\u3044\u307E\u305B\u3093\u3002<br>\u99AC\u3092\u80B2\u3066\u3066\u30C8\u30EC\u30BB\u30F3\u306B\u5165\u308B\uFF082\u6B73\uFF09\u304B\u3001\u5F15\u9000\u3055\u305B\u308B\u3068\u51FA\u3089\u308C\u307E\u3059\u3002</div>'}
      ${n.length?`
      <div class="sec">\u81EA\u5206\u306E\u99AC</div>
      <div class="plist">${n.map((h,d)=>`<button class="pitem ${d===t?"on":""}" data-act="sel" data-v="${d}"><b>${Vt(h.h.name)}</b><small>${h.label}\u3000${On.map(u=>gi(h.h.s[u])).join("")}</small></button>`).join("")}</div>
      <div class="sec">\u9A0E\u624B</div>
      <div class="chips"><button class="chip ${e===-1?"on":""}" data-act="js" data-v="-1">\u898B\u7FD2\u3044\u9A0E\u624B</button>${It.jockeys.map((h,d)=>`<button class="chip ${e===d?"on":""}" data-act="js" data-v="${d}">${Vt(h.name)}</button>`).join("")}</div>
      <div class="sec">\u30EC\u30FC\u30B9</div>
      <select id="rsel">${r.map((h,d)=>`<option value="${d}" ${d===i?"selected":""}>${h.g?h.g+" ":""}${h.name}\uFF08${h.surf}${h.dist}m\uFF09</option>`).join("")}</select>
      ${i===0?`<div class="row2"><select id="fsurf"><option ${r[0].surf==="\u829D"?"selected":""}>\u829D</option><option ${r[0].surf==="\u30C0"?"selected":""}>\u30C0</option></select>
        <select id="fdist">${[1200,1400,1600,1800,2e3,2200,2400,2500,3e3,3200].map(h=>`<option ${h===r[0].dist?"selected":""}>${h}</option>`).join("")}</select></div>`:""}
      <div class="sec">\u76F8\u624B</div>
      <div class="muted small">\u53CB\u9054\u306E\u5BFE\u6226\u30B3\u30FC\u30C9\u3092\u5165\u308C\u308B\u3068\u3001\u305D\u306E\u99AC\u3068\u52DD\u8CA0\u3067\u304D\u307E\u3059\uFF08\u6B8B\u308A\u306FCPU\uFF09</div>
      <div class="row"><input id="fcode" placeholder="SNK-\u2026"><button class="btn" data-act="add">\u8FFD\u52A0</button></div>
      <div class="plist">${s.map((h,d)=>`<div class="pitem on"><b>${Vt(h.n)}</b><small>${Vt(h.jn)}</small><button class="x" data-act="rm" data-v="${d}">\xD7</button></div>`).join("")}</div>
      <button class="btn race wide" data-act="start">\u30EC\u30FC\u30B9\u958B\u59CB\uFF01</button>
      <button class="btn wide" data-act="mycode">\u81EA\u5206\u306E\u99AC\u306E\u5BFE\u6226\u30B3\u30FC\u30C9\u3092\u30B3\u30D4\u30FC</button>`:""}
    </div>`);let o=document.getElementById("rsel");o&&(o.onchange=()=>{i=+o.value,a()});let l=document.getElementById("fsurf"),c=document.getElementById("fdist");l&&(l.onchange=()=>{r[0].surf=l.value}),c&&(c.onchange=()=>{r[0].dist=+c.value}),ui({go:Bi,sel:h=>{t=+h,a()},js:h=>{e=+h,a()},add:()=>{let h=Ax(document.getElementById("fcode").value);if(!h){Or("\u30B3\u30FC\u30C9\u304C\u8AAD\u3081\u307E\u305B\u3093\u3067\u3057\u305F");return}s.length>=11||(s.push(h),a())},rm:h=>{s.splice(+h,1),a()},mycode:()=>ef(n[t].h),start:()=>{let h=n[t].h,d=e>=0?It.jockeys[e]:$s,u={...r[i]},m=On.reduce((v,f)=>v+h.s[f],0)/5;u.lv=u.g==="G1"?80:m,u.prize=0;let g=s.map((v,f)=>({name:v.n,jname:v.jn,h:{...v.s},j:{...v.js},apt:u.surf==="\u829D"?v.a.turf:v.a.dirt,cond:2,style:v.st,coat:v.c,silk:sn[v.sl??f]}));Vo({race:u,fieldSize:u.g?14:12,opponents:g,player:{name:h.name,jname:d.name,h:{...h.s},j:{...d.s},apt:u.surf==="\u829D"?h.apt.turf:h.apt.dirt,cond:2,style:h.style,coat:h.coat,silk:d.silk??6},onDone:v=>{v&&v.pos===1&&(It.carrots+=5,Re(),Or("\u52DD\u5229\uFF01 \u{1F955}+5")),a()}})}})};a()}function Cx(){hi(`${Oi("\u8A2D\u5B9A")}
  <div class="page">
    <div class="card"><label class="sw-row"><span>\u52B9\u679C\u97F3</span><input type="checkbox" id="snd" ${It.settings.sound?"checked":""}></label>
    <label class="sw-row"><span>\u30EC\u30FC\u30B9\u306E\u8996\u70B9\uFF08\u6700\u521D\uFF09</span><select id="vw"><option value="fp" ${It.settings.view==="fp"?"selected":""}>\u9A0E\u624B\u8996\u70B9</option><option value="back" ${It.settings.view==="back"?"selected":""}>\u5F8C\u308D\u304B\u3089</option><option value="tv" ${It.settings.view==="tv"?"selected":""}>\u4E2D\u7D99</option></select></label></div>
    <div class="card"><b>\u904A\u3073\u65B9</b><p class="small">\u99AC\u306F0\u6B73\u304B\u3089\u80B2\u3066\u3066\u30012\u6B736\u6708\u304B\u3089\u30EC\u30FC\u30B9\u306B\u51FA\u3089\u308C\u307E\u3059\u30027\u6B73\u306E\u5E74\u672B\u304B\u3001\u91CD\u3044\u6545\u969C\u3067\u5F15\u9000\u3002\u75B2\u308C\u305F\u307E\u307E\u8ABF\u6559\u3059\u308B\u3068\u30B1\u30AC\u3092\u3057\u3084\u3059\u304F\u3001\u91CD\u3044\u6545\u969C\u3060\u3068\u7AF6\u8D70\u751F\u547D\u306E\u5371\u6A5F\u306B\u3002<br>\u30EC\u30FC\u30B9\u306F\u9A0E\u624B\u8996\u70B9\u3002\u25C0\u25B6\u3067\u9032\u8DEF\u3092\u5909\u3048\u3001\u30E0\u30C1\u3067\u52A0\u901F\u3002\u4F53\u529B\u30B2\u30FC\u30B8\u306E\u4F7F\u3044\u65B9\u304C\u52DD\u8CA0\u306E\u5206\u304B\u308C\u76EE\u3067\u3059\u3002</p></div>
    <button class="btn ghost wide" data-act="reset">\u30C7\u30FC\u30BF\u3092\u3059\u3079\u3066\u6D88\u3059</button>
    <p class="muted small center">\u30C7\u30FC\u30BF\u306F\u3053\u306E\u7AEF\u672B\u306E\u30D6\u30E9\u30A6\u30B6\u306B\u4FDD\u5B58\u3055\u308C\u3066\u3044\u307E\u3059</p>
  </div>`),document.getElementById("snd").onchange=n=>{It.settings.sound=n.target.checked,Ho(It.settings.sound),Re()},document.getElementById("vw").onchange=n=>{It.settings.view=n.target.value,Re()},ui({go:Bi,reset:()=>{confirm("\u80B2\u3066\u305F\u99AC\u30FB\u9A0E\u624B\u30FB\u30AC\u30C1\u30E3\u3092\u3059\u3079\u3066\u6D88\u3057\u307E\u3059\u3002\u3088\u308D\u3057\u3044\u3067\u3059\u304B\uFF1F")&&(uh(),di())}})}di();var sf=0;document.addEventListener("touchend",n=>{let t=Date.now();t-sf<300&&n.target.closest("button")&&n.preventDefault(),sf=t},{passive:!1});"serviceWorker"in navigator&&location.protocol==="https:"&&navigator.serviceWorker.register("./sw.js").catch(()=>{});
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
