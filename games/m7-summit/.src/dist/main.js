(()=>{"use strict";class t{maxHp;atk;speed;canAttack=!0;hp;constructor(t,e){this.maxHp=t,this.atk=e,this.speed=.4*this.maxHp,this.hp=this.maxHp}reset=()=>{this.hp=this.maxHp};getRatio=()=>{const t=this.hp/this.maxHp*100;return Math.max(0,Math.ceil(t))};penalty=()=>{this.hp=Math.max(0,this.hp-13*this.atk)};attack=t=>!!this.canAttack&&(this.canAttack=!1,setTimeout((()=>{t.hp=Math.max(0,t.hp-this.atk),this.canAttack=!0}),this.speed),!0)}const e=[new class extends t{constructor(){super(8849,200)}getName=()=>"Everest";getPath=()=>"./dist/datasets/Everest.png";getHeight=()=>"88%";getAttackImage=()=>"./dist/datasets/Snow.png"},new class extends t{constructor(){super(8611,180)}getName=()=>"K2";getPath=()=>"./dist/datasets/K2.png";getHeight=()=>"86%";getAttackImage=()=>"./dist/datasets/Snow.png"},new class extends t{constructor(){super(5895,160)}getName=()=>"Kilimanjaro";getPath=()=>"./dist/datasets/Kilimanjaro.png";getHeight=()=>"58%";getAttackImage=()=>"./dist/datasets/Green.png"},new class extends t{constructor(){super(4478,150)}getName=()=>"Matterhorn";getPath=()=>"./dist/datasets/Matterhorn.png";getHeight=()=>"44%";getAttackImage=()=>"./dist/datasets/Snow.png"},new class extends t{constructor(){super(6960,170)}getName=()=>"Aconcagua";getPath=()=>"./dist/datasets/Aconcagua.png";getHeight=()=>"69%";getAttackImage=()=>"./dist/datasets/Volcanic.png"},new class extends t{constructor(){super(3776,200)}getName=()=>"Fuji";getPath=()=>"./dist/datasets/Fuji.png";getHeight=()=>"37%";getAttackImage=()=>"./dist/datasets/Green.png"},new class extends t{constructor(){super(1247,200)}getName=()=>"Kilauea";getPath=()=>"./dist/datasets/Kilauea.png";getHeight=()=>"12%";getAttackImage=()=>"./dist/datasets/Volcanic.png"}];class a{winner;page;constructor(t){this.winner=t,this.page=document.createElement("div"),this.appendIcon()}show=()=>document.body.appendChild(this.page);appendIcon=()=>{const t=document.createElement("button");t.className="fill next result-icon",t.addEventListener("click",(()=>{document.body.removeChild(this.page),(new n).show()}));const e=document.createElement("div");e.className="result-name",e.textContent=`WINNER: ${this.winner.getName()}`;const a=document.createElement("img");a.src=this.winner.getPath(),a.className="image result-image",t.appendChild(e),t.appendChild(a),this.page.appendChild(t)}}class s{p1;p2;moveMap=new Map([["Left",-1],["ArrowLeft",-1],["Right",1],["ArrowRight",1]]);page;now=99;attackCount=0;p1Element=void 0;p2Element=void 0;p1HpBar=void 0;p2HpBar=void 0;id=void 0;constructor(t,e){this.p1=t,this.p2=e,this.p1.reset(),this.p2.reset(),this.page=document.createElement("div"),this.appendStage(),this.appendHeader(),this.appendCharacters()}show=()=>{document.body.appendChild(this.page),document.body.onkeydown=t=>this.keydown(t),this.id=setInterval((()=>{this.now=this.now-1,this.page.querySelector(".fighting-timer").textContent=this.now.toString();const t=Number(this.p2Element.style.left.replace(/[^0-9]/g,""));let e=Math.min(20,Math.max(0,t));this.p2Element.style.right="0%";let a=50;if(13==++this.attackCount&&this.p2.penalty(),this.p2.attack(this.p1)){const t=document.createElement("img");t.className="image fighting-p2",t.src=this.p2.getAttackImage(),t.style.right=`${e}%`,document.body.appendChild(t);const s=setInterval((()=>{t.style.right=e+++"%",a--,0===a&&(document.body.removeChild(t),clearInterval(s))}),5)}0!==this.p1.getRatio()&&0!==this.p2.getRatio()||this.finish(),this.p1HpBar.style.width=`${this.p1.getRatio()}%`,this.p2HpBar.style.width=`${this.p2.getRatio()}%`,this.now<=0&&this.finish()}),1e3)};finish=()=>{clearInterval(this.id),document.body.onkeydown=()=>{},document.body.removeChild(this.page),new a(this.p1.getRatio()>this.p2.getRatio()?this.p1:this.p2).show()};appendHeader=()=>{const t=document.createElement("div");t.className="fighting-header";const e=document.createElement("div");e.className="fighting-bar",e.appendChild(this.createHpBar(this.p1.getName())),e.appendChild(this.createTimer()),e.appendChild(this.createHpBar(this.p2.getName())),t.appendChild(e),this.page.appendChild(t)};createHpBar=t=>{const e=document.createElement("div");e.style.width="45%";const a=document.createElement("div");a.style.backgroundColor="red";const s=document.createElement("div");s.style.backgroundColor="yellow",s.style.height="50%",this.p1HpBar?this.p2HpBar=s:this.p1HpBar=s;const i=document.createElement("div");return i.textContent=t,i.style.color="orange",i.style.height="50%",a.appendChild(s),e.appendChild(a),e.appendChild(i),e};createTimer=()=>{const t=document.createElement("p");return t.className="fighting-timer",t.textContent=this.now.toString(),t};appendStage=()=>{const t=document.createElement("img");t.className="fill image",t.style.position="absolute",t.src="./dist/datasets/NightSky.png",this.page.appendChild(t)};appendCharacters=()=>{this.p1Element=this.createCharacter(this.p1.getPath(),this.p1.getHeight(),"image fighting-p1"),this.page.appendChild(this.p1Element),this.p2Element=this.createCharacter(this.p2.getPath(),this.p2.getHeight(),"image fighting-p2"),this.page.appendChild(this.p2Element)};createCharacter=(t,e,a)=>{const s=document.createElement("img");return s.className=a,s.style.height=e,s.src=t,s};keydown=t=>{const e=Number(this.p1Element.style.left.replace(/[^0-9]/g,"")),a=this.moveMap.get(t.key)??0;let s=Math.min(20,Math.max(0,e+a));if(this.p1Element.style.left=`${s}%`,"a"===t.key){let t=50;if(13==++this.attackCount&&this.p1.penalty(),this.p1.attack(this.p2)){const e=document.createElement("img");e.className="image fighting-p1",e.src=this.p1.getAttackImage(),e.style.left=`${s}%`,document.body.appendChild(e);const a=setInterval((()=>{e.style.left=s+++"%",t--,0===t&&(document.body.removeChild(e),clearInterval(a))}),5)}0!==this.p1.getRatio()&&0!==this.p2.getRatio()||this.finish(),this.p1HpBar.style.width=`${this.p1.getRatio()}%`,this.p2HpBar.style.width=`${this.p2.getRatio()}%`}}}class i{page;constructor(){this.page=document.createElement("div"),this.appendIcon()}show=()=>document.body.appendChild(this.page);appendIcon=()=>{const t=[];e.forEach(((e,a)=>{const i=document.createElement("button");i.className="next selection-icon",i.addEventListener("click",(()=>{i.disabled=!0,i.style.backgroundColor="red",t.push(e),2===t.length&&(document.body.removeChild(this.page),new s(t[0],t[1]).show())}));const n=document.createElement("div");n.className="selection-name",n.textContent=e.getName();const h=document.createElement("img");h.src=e.getPath(),h.className="image selection-image",i.appendChild(n),i.appendChild(h),this.page.appendChild(i)}))}}class n{page;constructor(){this.page=document.createElement("div");const t=this.shuffle();[{x:"0",y:"0"},{x:"0",y:"50%"},{x:"50%",y:"0"},{x:"50%",y:"50%"}].forEach(((e,a)=>this.appendImage(t[a],e.y,e.x))),this.appendButton()}show=()=>document.body.appendChild(this.page);shuffle=()=>{const t=[];let a=4;for(;a;){const s=Math.floor(Math.random()*e.length);t.includes(s)||(t.push(s),a--)}return t.map((t=>e[t].getPath()))};appendImage=(t,e,a)=>{const s=document.createElement("img");s.src=t,s.className="image title-image",s.style.bottom=e,s.style.left=a,this.page.appendChild(s)};appendButton=()=>{const t=document.createElement("button");t.className="fill next title-next",t.addEventListener("click",(()=>{document.body.removeChild(this.page),(new i).show()}));const e=document.createElement("p");e.className="title-text",e.textContent="M7 Summit",t.appendChild(e),this.page.appendChild(t)}}(new n).show()})();