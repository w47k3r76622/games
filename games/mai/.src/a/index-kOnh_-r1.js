var t=Object.defineProperty,e=(e,s,i)=>((e,s,i)=>s in e?t(e,s,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[s]=i)(e,"symbol"!=typeof s?s+"":s,i);!function(){const t=document.createElement("link").relList;if(!(t&&t.supports&&t.supports("modulepreload"))){for(const t of document.querySelectorAll('link[rel="modulepreload"]'))e(t);new MutationObserver((t=>{for(const s of t)if("childList"===s.type)for(const t of s.addedNodes)"LINK"===t.tagName&&"modulepreload"===t.rel&&e(t)})).observe(document,{childList:!0,subtree:!0})}function e(t){if(t.ep)return;t.ep=!0;const e=function(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),"use-credentials"===t.crossOrigin?e.credentials="include":"anonymous"===t.crossOrigin?e.credentials="omit":e.credentials="same-origin",e}(t);fetch(t.href,e)}}();const s=class t{constructor(t,s){e(this,"x",-1),e(this,"y",-1),this.x=t,this.y=s}clone(){return t.new(this.x,this.y)}static new(e,s){return new t(e,s)}};e(s,"ZERO",new s(0,0));let i=s;class r{constructor(t,s,i){e(this,"id"),e(this,"pos"),e(this,"timestamp"),this.id=t,this.pos=s,this.timestamp=i}}const n=9999;class a{constructor(){e(this,"inputs",[]),e(this,"disableContextMenu",(t=>{t.preventDefault()})),e(this,"onKeyDown",(({keyCode:t})=>{switch(t){case 37:this.inputs[0]=new r(n+t,i.new(0,0),0);break;case 39:this.inputs[0]=new r(n+t,i.new(window.innerWidth,0),0);break;case 40:this.inputs[0]=new r(n+t,i.new(window.innerWidth/2,0),0);break;default:this.inputs.length=0}})),e(this,"onKeyUp",(({keyCode:t})=>{let e=this.inputs.findIndex((({id:e})=>e==n+t));-1!=e?this.inputs.splice(e,1):this.inputs.length=0})),e(this,"onPointerDown",(t=>{t.preventDefault();const{x:e,y:s,pointerId:n,timeStamp:a}=t;this.inputs[0]=new r(n,i.new(e,s),a)})),e(this,"onPointerUp",(({pointerId:t})=>{const e=this.inputs.findIndex((({id:e})=>e==t));-1!=e?this.inputs.splice(e,1):this.inputs.length=0}))}activate(){const{body:t}=document;document.addEventListener("contextmenu",this.disableContextMenu),t.addEventListener("keydown",this.onKeyDown),t.addEventListener("keyup",this.onKeyUp),t.addEventListener("pointerdown",this.onPointerDown),t.addEventListener("pointermove",this.onPointerUp),t.addEventListener("pointerup",this.onPointerUp),t.addEventListener("pointerleave",this.onPointerUp),t.addEventListener("pointerout",this.onPointerUp),t.addEventListener("pointercancel",this.onPointerUp),this.inputs.length=0}disable(){const{body:t}=document;document.removeEventListener("contextmenu",this.disableContextMenu),t.removeEventListener("keydown",this.onKeyDown),t.removeEventListener("keyup",this.onKeyUp),t.removeEventListener("pointerdown",this.onPointerDown),t.removeEventListener("pointermove",this.onPointerUp),t.removeEventListener("pointerup",this.onPointerUp),t.removeEventListener("pointerleave",this.onPointerUp),t.removeEventListener("pointerout",this.onPointerUp),t.removeEventListener("pointercancel",this.onPointerUp),this.inputs.length=0}}class h extends EventTarget{constructor(){super(),e(this,"on"),e(this,"off"),e(this,"trigger"),this.on=this.addEventListener,this.off=this.removeEventListener,this.trigger=this.dispatchEvent}}const o="timed";class c extends Event{constructor(){super(o)}}const u=class t extends h{constructor(t,s){super(),e(this,"value",0),e(this,"stepDuration"),e(this,"time",0),e(this,"targetValue"),e(this,"percentage"),e(this,"running",!1),e(this,"triggered",!1),this.stepDuration=t,this.targetValue=s}step(t){this.running&&(this.time+=t,this.time>=this.stepDuration&&(this.time=0,this.value++,this.value>=this.targetValue&&(this.value=0,this.triggered=!0,this.trigger(new c)),this.percentage=this.value/this.targetValue))}decrement(t){this.value=this.value<t?0:this.value-t}stop(){this.running=!1}start(){this.running=!0}reset(){this.value=0,this.time=0}static stop(){t.all.forEach((t=>t.stop()))}static stepAll(e){t.all.forEach((t=>t.step(e)))}static new(e,s){const i=new t(e,s);return t.all.push(i),i}static remove(e){const s=t.all.indexOf(e);s>-1&&t.all.splice(s,1)}};e(u,"all",[]);let l=u;const d=40,p=280,w=162,y=200,g=82,m=100,x=41,v=i.new(20,30);class f{constructor(t,s,r,n){e(this,"pos"),e(this,"size"),this.pos=new i(t,s),this.size=new i(r,n)}}class b{constructor(t,s){e(this,"time",0),e(this,"activeFrame",0),e(this,"frames"),e(this,"sheet"),e(this,"speed"),this.frames=t,this.sheet=s,this.speed=700}setSpeed(t){this.speed=t}getSize(){return this.frames[this.activeFrame].size}step(t){this.time+=t,this.time>=this.speed&&(this.time=0,this.activeFrame++,this.activeFrame>=this.frames.length&&(this.activeFrame=0))}draw(t,e,s,i=!1,r,n){const a=this.frames[this.activeFrame],{x:h,y:o}=a.size;r=1*(r||h),n=1*(n||o),t.drawImage(this.sheet,0|a.pos.x,0|a.pos.y,0|h,0|o,0|e,0|s,0|r,0|n),i&&(t.save(),t.fillStyle="#fff",t.globalCompositeOperation="difference",t.fillRect(0|e,0|s,0|r,0|n),t.restore())}}var S=(t=>(t.EGG="egg",t.SMALL="small",t.BIG="big",t.DEAD="dead",t.GROWN="grown",t))(S||{});const E={path:["egg","small","big","grown"],requirements:{egg:{slept:3,timers:["tired"]},small:{slept:10,played:10,eaten:10,timers:["hungry","tired","playful"]},big:{slept:25,played:25,eaten:25,timers:["hungry","tired","playful"]},grown:{eaten:1e3,slept:1e3,played:1e3}}};let k;const A=()=>k||(k=(()=>{const t=i.new(20,20),e=i.new(50,50),s=i.new(100,100),r=document.querySelector("img"),n=document.createElement("canvas");n.width=r.width,n.height=r.height;const a=n.getContext("2d");a.drawImage(r,0,0);const h=a.getImageData(0,0,r.width,r.height),{data:o}=h;for(let i=0;i<o.length;i+=4)255===o[i]&&(o[i+3]=0);a.putImageData(h,0,0);const c=document.createElement("img");c.src=n.toDataURL();const u=new b([new f(e.x,2*e.y,e.x,e.y)],r),l=document.createElement("canvas"),d=l.getContext("2d");return d.fillStyle="#000",d.moveTo(25,5),d.lineTo(25,45),d.lineTo(5,25),d.fill(),d.moveTo(75,5),d.lineTo(75,45),d.lineTo(95,25),d.fill(),d.moveTo(105,25),d.lineTo(145,25),d.lineTo(125,45),d.fill(),{food:new b([new f(0,2*e.y,e.x,e.y)],c),creature:{[S.SMALL]:{idle:new b([new f(0,0,e.x,e.y)],r),hungry:new b([new f(2*e.x,0,e.x,e.y)],r),tired:new b([new f(3*e.x,0,e.x,e.y)],r),angry:new b([new f(4*e.x,0,e.x,e.y)],r),sick:new b([new f(5*e.x,0,e.x,e.y)],r),dead:new b([new f(6*e.x,0,e.x,e.y)],r),idleHungry:new b([new f(0,0,e.x,e.y),new f(2*e.x,0,e.x,e.y)],r),idleTired:new b([new f(0,0,e.x,e.y),new f(3*e.x,0,e.x,e.y)],r),idleAngry:new b([new f(0,0,e.x,e.y),new f(4*e.x,0,e.x,e.y)],r),idleSick:new b([new f(0,0,e.x,e.y),new f(5*e.x,0,e.x,e.y)],r)},[S.BIG]:{idle:new b([new f(0,e.y,e.x,e.y)],r),hungry:new b([new f(2*e.x,e.x,e.x,e.y)],r),tired:new b([new f(3*e.x,e.x,e.x,e.y)],r),angry:new b([new f(4*e.x,e.x,e.x,e.y)],r),sick:new b([new f(5*e.x,e.x,e.x,e.y)],r),dead:new b([new f(6*e.x,e.x,e.x,e.y)],r),idleHungry:new b([new f(0,e.x,e.x,e.y),new f(2*e.x,e.x,e.x,e.y)],r),idleTired:new b([new f(0,e.x,e.x,e.y),new f(3*e.x,e.x,e.x,e.y)],r),idleAngry:new b([new f(0,e.x,e.x,e.y),new f(4*e.x,e.x,e.x,e.y)],r),idleSick:new b([new f(0,e.x,e.x,e.y),new f(5*e.x,e.x,e.x,e.y)],r)},[S.GROWN]:{head:new b([new f(250,150,s.x,50)],r),body:new b([new f(250,200,s.x,50)],r)},[S.EGG]:{idle:u}},days:[[0,3*e.y,e.x,e.y],[e.x,3*e.y,e.x,e.y],[2*e.x,3*e.y,e.x,e.y],[0,4*e.y,e.x,e.y],[e.x,4*e.y,e.x,e.y],[2*e.x,4*e.y,e.x,e.y],[0,5*e.y,e.x,e.y],[e.x,5*e.y,e.x,e.y],[2*e.x,5*e.y,e.x,e.y],[3*e.x,5*e.y,e.x,e.y],[4*e.x,5*e.y,e.x,e.y],[5*e.x,5*e.y,e.x,e.y],[6*e.x,5*e.y,e.x,e.y]].map((([t,e,s,i])=>new b([new f(t,e,s,i)],r))),note:new b([new f(3*e.x,2*e.y,e.x,e.y)],r),hole:new b([new f(5*e.x,2*e.y,e.x,e.y)],r),ufo:new b([new f(6*e.x,2*e.y,e.x,e.y)],c),zzz:new b([new f(4*e.x+1,2*e.y+8,t.x,t.y)],r),bubble:new b([new f(4*e.x,2*e.y+20,t.x,t.y)],r),left:new b([new f(0,0,e.x,e.y)],l),right:new b([new f(e.x,0,e.x,e.y)],l),down:new b([new f(2*e.x,0,e.x,e.y)],l)}})(),k),D=1e3,V={type:1,payload:1},M={type:2,payload:1},N={type:3,payload:1},I={type:4,payload:1},z={type:5,payload:void 0},L=t=>({type:6,payload:t}),P=(t=!0)=>({type:7,payload:t}),O={type:8,payload:void 0},G=t=>({type:9,payload:t});var R=(t=>(t[t.NOT_YET=0]="NOT_YET",t[t.SIMPLY_DEAD=1]="SIMPLY_DEAD",t[t.BY_UFO=2]="BY_UFO",t[t.BY_HOLE=3]="BY_HOLE",t[t.BY_GIANT=4]="BY_GIANT",t))(R||{});const T=class t{constructor(t){e(this,"state"),e(this,"onIncSick",(()=>{this.dispatch({type:10,payload:1})})),this.state={day:{count:1,timer:l.new(D,30)},creature:{hungry:l.new(D,60),tired:l.new(D,30),playful:l.new(D,15),dirty:l.new(D,10),display:t.creature,state:"idle",evolution:S.EGG,pos:i.ZERO.clone(),stats:{eaten:0,played:0,slept:0,sick:0,dirty:0}},end:0,buttons:[],inputEnabled:!0},this.state.creature.tired.start(),this.state.day.timer.start(),this.state.day.timer.on(o,(()=>{this.dispatch(V)})),this.state.creature.hungry.on(o,this.onIncSick),this.state.creature.playful.on(o,this.onIncSick),this.state.creature.tired.on(o,this.onIncSick),this.state.creature.dirty.on(o,(()=>this.dispatch({type:11,payload:1})))}static getInstance(){return t.store||(t.store=new t(A())),t.store}isDead(){const{dirty:t,sick:e}=this.state.creature.stats;t+e>=50&&this.dispatch({type:12,payload:1})}dispatch(t){switch(t.type){case 12:this.state.end=t.payload;break;case 9:this.state.creature.pos.x=t.payload;break;case 1:this.state.day.count+=t.payload,this.state.day.count>=13&&(this.state.day.count=13,this.state.day.timer.stop(),this.state.end=Math.random()<.5?3:2);break;case 2:{const{stats:e,tired:s}=this.state.creature;e.slept+=t.payload,s.decrement(t.payload),e.sick>0&&(e.sick-=s.value>0?1:0),this.handleRequirements();break}case 3:{const{stats:e,hungry:s}=this.state.creature;e.eaten+=t.payload,s.decrement(t.payload),e.sick>0&&(e.sick-=s.value>0?1:0),this.handleRequirements();break}case 4:{const{stats:e,playful:s}=this.state.creature;e.played+=t.payload,s.decrement(t.payload),e.sick>0&&(e.sick-=s.value>0?1:0),this.handleRequirements();break}case 10:{const{stats:e}=this.state.creature;e.sick+=t.payload,this.isDead();break}case 11:{const{stats:e}=this.state.creature;e.dirty+=t.payload,this.isDead();break}case 5:break;case 6:this.state.buttons=t.payload.map((t=>({type:t,down:!1})));break;case 8:this.state.buttons.forEach((t=>t.down=!1));break;case 7:this.state.inputEnabled=t.payload}}handleRequirements(){if(0==Object.entries(E.requirements[this.state.creature.evolution]).filter((([t])=>"timers"!=t)).filter((([t,e])=>this.state.creature.stats[t]<=e)).length){const t=E.path.indexOf(this.state.creature.evolution)+1;if(t<E.path.length)switch(this.state.creature.evolution=E.path[t],this.state.creature.evolution){default:case S.GROWN:l.stop();case S.EGG:this.state.creature.tired.start();break;case S.SMALL:case S.BIG:this.state.creature.tired.start(),this.state.creature.hungry.start(),this.state.creature.playful.start(),this.state.creature.dirty.start()}this.state.creature.evolution===S.GROWN&&this.dispatch(L([]))}}getState(){return this.state}};e(T,"store");let Y=T;const B=[8,8,0,0],U=[0,0,8,8],_=(t,e,s,i,r=!1)=>{t.fillStyle="#fff",t.fillRect(0|s,0|i,20,20),e.draw(t,s,i,r,20,20)};class W{constructor(t,s){e(this,"size"),e(this,"resources"),e(this,"input"),e(this,"enabled",!1),e(this,"store"),this.size=t,this.resources=A(),this.store=Y.getInstance(),this.input=s}setSize(t){this.size=t}activate(){this.enabled||(this.store.dispatch(O),this.enabled=!0,this.input.activate())}disable(){this.enabled&&(this.enabled=!1,this.input.disable(),this.store.dispatch(O))}step(t){this.store.dispatch(O);const{inputEnabled:e}=this.store.getState();if(!e)return;const{innerWidth:s}=window,{x:i,y:r}=this.size,n=i/2|0;if(this.input.inputs.length>0){const t=this.input.inputs[0].pos.x/s*p,{buttons:e}=this.store.getState();switch(e.length){case 1:e[0].down=!0;break;case 2:if(t<=n-15+0){e[0].down=!0;break}if(t>n-15+30){e[1].down=!0;break}break;case 3:if(t<n-15+0){e[0].down=!0;break}if(t<=n-15+30){e[1].down=!0;break}if(t>n-15+30){e[2].down=!0;break}}}}draw(t){const{x:e,y:s}=this.size,i=e/2|0,r=s/2|0;t.fillStyle="#000",t.beginPath(),t.roundRect(d,d,e-80,s-80,U),t.roundRect(d,d-v.y,v.x,v.y,B),t.roundRect(e-d-v.x,d-v.y,v.x,v.y,B),t.rect(e,0,-e,s),t.fill();const n=this.resources.food.getSize();this.store.getState().buttons.forEach((({type:e,down:s},a,h)=>{switch(h.length){case 1:_(t,this.resources[e],i-45+35,r+n.y+10,s);break;case 2:_(t,this.resources[e],i-45+35*a*2,r+n.y+10,s);break;case 3:_(t,this.resources[e],i-45+35*a,r+n.y+10,s)}}))}}const C=t=>t<.5?2*t*t:1-Math.pow(-2*t+2,2)/2,F=t=>t*t,j=t=>1-(1-t)*(1-t),q=t=>t,H=t=>t<.5?0:1;class K{constructor(t,s,i,r){e(this,"from"),e(this,"to"),e(this,"value",0),e(this,"durationMs"),e(this,"time",0),e(this,"easingFn"),this.from=t,this.to=s,this.durationMs=i,this.easingFn=r}reset(){this.time=0,this.value=0}step(t){this.time+=t,this.time>=this.durationMs?(this.time=this.durationMs,this.value=1):this.value=this.easingFn(this.time/this.durationMs)}getValue(){return this.from+(this.to-this.from)*this.value}isDone(){return this.time>=this.durationMs}}class J{constructor(t){e(this,"easings"),this.easings=t}reset(){this.easings.forEach((t=>t.reset()))}isDone(){return this.easings.every((t=>t.isDone()))}step(t){for(let e of this.easings)if(!e.isDone())return void e.step(t)}getValue(){for(let t of this.easings)if(!t.isDone())return t.getValue()}}class Z{constructor(t){e(this,"easings"),e(this,"value",{}),this.easings=t}reset(){Object.values(this.easings).forEach((t=>t.reset()))}step(t){Object.values(this.easings).forEach((e=>e.step(t)))}isDone(){return Object.values(this.easings).every((t=>t.isDone()))}getValue(){return Object.entries(this.easings).reduce(((t,[e,s])=>(t[e]=s.getValue(),t)),this.value),-1}}const X=250;class Q{constructor(t){e(this,"easings"),e(this,"isStopped",!1),e(this,"size"),this.easings=new Z({dx:new J([new K(t.x,t.x,X,C),new K(0,0,X,C),new K(t.x,t.x,X,C)]),dy:new J([new K(t.y,t.y,X,C),new K(0,0,X,C),new K(t.y,t.y,X,C)])})}reset(){this.easings.reset()}start(){this.isStopped=!1}stop(){this.isStopped=!0}isDone(){return this.easings.isDone()}step(t){this.isStopped||this.easings.step(t)}draw(t){this.easings.getValue();const{dx:e,dy:s}=this.easings.value;t.fillStyle="#000",t.fillRect(m-e|0,x-s|0,2*e|0,2*s|0)}}class ${constructor(t){e(this,"creature"),this.creature=t}setCreature(t){this.creature=t}enter(){}exit(){}handleInput(){return null}step(t){}draw(t){}isDone(){return!0}}const tt=(t,s,r,n)=>{var a;class h{constructor(t,i,r,n){e(this,"pos"),e(this,"targetY"),e(this,"easing"),e(this,"time",0),e(this,"sprite"),this.pos=i,this.targetY=r,this.easing=new K(this.pos.y,r,n,C),this.sprite=t[s]}step(t){this.time+=t,this.easing.step(t),this.pos.x+=2*Math.sin(this.time/this.easing.durationMs*Math.PI*3),this.pos.y=this.easing.getValue()}draw(t){this.sprite.draw(t,this.pos.x,this.pos.y,!1,20,20)}isDone(){return this.easing.isDone()}}return a=class extends ${constructor(t,s,r){super(t),e(this,"bubbling",[]),e(this,"time",0),e(this,"resources"),e(this,"stopped",!1),e(this,"store"),this.resources=s,this.store=r,this.bubbling.push(new h(s,i.new(15,-15),-40,700))}exit(){this.stopped=!0}step(t){this.bubbling=this.bubbling.filter((t=>!t.isDone())),this.bubbling.forEach((e=>e.step(t))),this.time+=t,!this.stopped&&this.time>=400&&(this.time=0,this.bubbling.push(new h(this.resources,i.new(15,-15),-40,700)),this.store.dispatch(n))}draw(t){this.creature[r]?this.creature[r].draw(t,0,0):this.creature.idle.draw(t,0,0),this.bubbling.forEach((e=>e.draw(t)))}isDone(){return 0==this.bubbling.length}},e(a,"Bubbling",h),a},et=tt(0,"zzz","tired",M),st=tt(0,"bubble","sick",z),it=tt(0,"note","idle",I),rt=tt(0,"food","hungry",N);class nt extends ${constructor(){super(...arguments),e(this,"headJiggleAnim",new J([new K(0,5,1e3,H),new K(5,0,1e3,H),new K(0,-5,1e3,H),new K(-5,0,1e3,H)])),e(this,"resources",A())}handleInput(){return null}step(t){this.headJiggleAnim.step(t),this.headJiggleAnim.isDone()&&this.headJiggleAnim.reset()}draw(t){this.resources.creature.grown.head.draw(t,this.headJiggleAnim.getValue(),0),this.resources.creature.grown.body.draw(t,0,50)}isDone(){return!1}}class at extends ${constructor(t){super(t),e(this,"pos",i.ZERO.clone()),e(this,"start",0)}enter(){this.start=0,this.pos.x=0}step(t){this.creature.idle.step(t),this.start+=t,this.start<500/3?this.pos.x=1:this.start<250?this.pos.x=-1:this.pos.x=0}draw(t){this.creature.idle.draw(t,this.pos.x,this.pos.y)}isDone(){return this.start>=500}}class ht extends ${constructor(t){super(t),e(this,"lastSideJiggle",0),e(this,"jiggleWait",0)}handleInput(){return this.jiggleWait>=3e3?(this.jiggleWait=0,new at(this.creature)):null}step(t){var e;null==(e=this.creature.idle)||e.step(t),this.jiggleWait+=t}draw(t){this.creature.idle.draw(t,0,0)}isDone(){return!1}}class ot extends ${constructor(t,s,i,r){super(t),e(this,"creatureState"),e(this,"timer"),e(this,"stateName"),e(this,"state90Name"),this.timer=s,this.creature=t,this.stateName=i,this.state90Name=r,this.creatureState=this.stateName}handleInput(){return null}step(t){var e;const{percentage:s}=this.timer;s>.9?this.creatureState=this.state90Name:(this.creatureState=this.stateName,this.creature[this.creatureState]&&(this.creature[this.creatureState].speed=700*(1.3-s))),null==(e=this.creature[this.creatureState])||e.step(t)}draw(t){var e;null==(e=this.creature[this.creatureState])||e.draw(t,0,0)}isDone(){return this.timer.percentage<.3}}const ct=i.new(100,100);class ut{constructor(){e(this,"stack",[]),e(this,"subStates",[]),e(this,"store"),e(this,"resources"),e(this,"evolution"),e(this,"evolveAnim",new Q(i.new(50,50))),this.resources=A(),this.store=Y.getInstance();const t=this.store.getState();this.evolution=t.creature.evolution,this.stack.push(new ht(this.resources.creature[this.evolution]))}getSize(){return this.evolution===S.GROWN?ct:this.stack[this.stack.length-1].creature.idle.frames[0].size}handleInput(t){const e=this.store.getState();let s=this.stack[this.stack.length-1],i=!1,r=!1,n=!1;const{stats:a,tired:h,hungry:o,playful:c}=e.creature,u=s instanceof et,l=!u&&s instanceof it,d=!u&&!l&&s instanceof rt;for(let{type:w,down:y}of t)if(y)switch(w){case"zzz":i=!0,u||this.stack.push(new et(this.resources.creature[e.creature.evolution],this.resources,this.store));break;case"note":n=!0,l||this.stack.push(new it(this.resources.creature[e.creature.evolution],this.resources,this.store));break;case"food":r=!0,d||this.stack.push(new rt(this.resources.creature[e.creature.evolution],this.resources,this.store))}!i&&u&&s.exit(),!r&&d&&s.exit(),!n&&l&&s.exit();let p=s.handleInput();if(this.evolution!==S.EGG&&p instanceof at&&(p=null),this.evolution!==S.SMALL&&this.evolution!==S.BIG||null!=p||u||d||l||s instanceof ot||(h.percentage>=.5?p=new ot(this.resources.creature[this.evolution],h,"tired","idleTired"):o.percentage>=.3?p=new ot(this.resources.creature[this.evolution],o,"hungry","idleHungry"):c.percentage>=.5?p=new ot(this.resources.creature[this.evolution],c,"angry","idleAngry"):a.sick>10&&(p=new st(this.resources.creature[this.evolution],this.resources,this.store))),null!=p)return s.isDone()&&(s.exit(),this.stack.pop()),p.enter(),void this.stack.push(p);s.isDone()&&(s.exit(),this.stack.pop())}step(t){const e=this.store.getState(),s=this.stack[this.stack.length-1],{evolution:i}=e.creature;if(this.evolution!=i&&(this.evolveAnim.isStopped&&(this.store.dispatch(P(!1)),this.evolveAnim.start()),this.evolveAnim.step(t),this.evolveAnim.isDone())){this.evolveAnim.stop(),this.evolveAnim.reset(),this.evolution=i;const t=this.resources.creature[this.evolution];this.stack.forEach((e=>e.setCreature(t))),this.subStates.forEach((e=>e.setCreature(t))),this.store.dispatch(P(!0))}this.evolution==S.GROWN&&(this.stack.length=1,this.subStates.length=0,this.store.dispatch(G(0)),this.stack[0]instanceof nt||(this.stack[0]=new nt(this.resources.creature.small))),s.step(t),this.subStates.forEach((e=>e.step(t)))}draw(t){var e;const s=this.store.getState();t.save(),s.end==R.SIMPLY_DEAD?null==(e=this.resources.creature[this.evolution])||e.dead.draw(t,0,0):(t.translate(s.creature.pos.x,0),this.stack[this.stack.length-1].draw(t),this.subStates.forEach((e=>e.draw(t)))),t.restore()}}const lt=t=>Math.random()*t|0;class dt{step(t){}draw(t){}enter(){}exit(){}isDone(){return!0}}class pt{constructor(t){e(this,"views",{}),e(this,"activeViewName",""),e(this,"resources"),e(this,"store"),e(this,"gizmo"),e(this,"creatureStateManager"),e(this,"nextViewName",""),this.resources=A(),this.store=Y.getInstance(),this.gizmo=new W(i.new(p,w),t),this.gizmo.activate(),this.creatureStateManager=new ut}addView(t,e){this.views[t]=e}step(t){if(""==this.activeViewName)return;const e=this.store.getState();if(e.creature.evolution===S.GROWN)return"end"!=this.activeViewName&&(this.nextViewName="end",this.views[this.activeViewName].exit(),this.gizmo.disable(),this.store.dispatch(L([]))),this.views[this.activeViewName].isDone()&&(this.activeViewName="end",this.views[this.activeViewName].enter()),void this.views[this.activeViewName].step(t);this.gizmo.step(t);const s=this.views[this.activeViewName],i=s.handleInput(this.store.getState().buttons);if("end"!==this.nextViewName&&i&&(this.nextViewName=i,this.gizmo.disable(),s.exit()),s.isDone()){this.gizmo.disable();const t=this.nextViewName||"main";return this.nextViewName="",void this.setActiveView(t)}e.end===R.NOT_YET||"end"===this.activeViewName&&"end"===this.nextViewName||(this.nextViewName="end",s.exit(),this.gizmo.disable(),this.store.dispatch(L([]))),s.step(t)}draw(t){if(""==this.activeViewName)return;t.clearRect(0,0,p,w),t.save(),t.translate(this.gizmo.size.x/2-100,this.gizmo.size.y/2-41),this.views[this.activeViewName].draw(t),t.fillStyle="#000";for(let e=this.store.getState().creature.stats.dirty;e--;e>=0)t.fillRect(0|lt(y),0|lt(g),1,1);t.restore();this.resources.days[this.store.getState().day.count-1].draw(t,d,20,!1,20,20),this.gizmo.draw(t)}setActiveView(t){this.activeViewName=t,this.views[this.activeViewName].enter(),this.gizmo.activate()}}class wt extends dt{constructor(t){super(),e(this,"resources"),e(this,"store"),e(this,"creatureState","idle"),e(this,"creatureStateManager"),e(this,"creatureAnim",new Z({dx:new J([new K(0,5,5e3,C),new K(5,5,1e3,C),new K(5,-5,1e4,C),new K(-5,0,5e3,C),new K(0,0,6e3,C)])})),e(this,"exitAnimation",new Q(i.new(m,x))),e(this,"isExit",!1),e(this,"exitColors",["#fff","#000"]),e(this,"evolution"),this.resources=A(),this.store=Y.getInstance(),this.evolution=this.store.getState().creature.evolution,this.creatureStateManager=t}updateButtons(){const t=this.store.getState(),{evolution:e}=t.creature,s=E.requirements[e];this.store.dispatch(L(Object.entries(s).map((([t])=>(t=>{switch(t){case"slept":return"zzz";case"played":return"note";case"eaten":return"food";case"timers":return}})(t))).filter((t=>!!t))))}enter(){this.updateButtons(),this.exitAnimation.stop(),this.exitAnimation.reset(),this.isExit=!1}exit(){this.exitAnimation.start(),this.isExit=!0}isDone(){return this.isExit&&this.exitAnimation.isDone()}handleInput(t){if(this.creatureStateManager.handleInput(t),t.some((({type:t,down:e})=>"food"===t&&e)))return"foodGame"}step(t){this.isExit&&this.exitAnimation.step(t);const{evolution:e,pos:s}=this.store.getState().creature;e!=this.evolution&&(this.evolution=e,this.updateButtons()),e===S.SMALL||e==S.BIG?(this.creatureAnim.step(t),this.creatureAnim.isDone()&&this.creatureAnim.reset(),this.creatureAnim.getValue(),this.store.dispatch(G(this.creatureAnim.value.dx))):0!=s.x&&this.store.dispatch(G(0)),this.creatureStateManager.step(t)}draw(t){if(this.isExit)this.exitAnimation.draw(t);else{const e=this.creatureStateManager.getSize();t.save(),t.translate(100-e.x/2,g-e.y),this.creatureStateManager.draw(t),t.restore()}}}const yt=2e3,{abs:gt,floor:mt,max:xt,random:vt}=Math;class ft extends dt{constructor(t){super(),e(this,"creaturePos",i.new(100,57)),e(this,"creatureVel",i.ZERO.clone()),e(this,"foods",[]),e(this,"resources"),e(this,"store"),e(this,"creatureState","idle"),e(this,"timeEat",0),e(this,"timeGravity",1e3),e(this,"timeMove",0),e(this,"timeSpawn",yt),e(this,"exitAnimation",new Q(i.new(m,x))),e(this,"isExit",!1),e(this,"creature"),this.creature=t,this.resources=A(),this.store=Y.getInstance()}isDone(){return this.isExit&&this.exitAnimation.isDone()||this.store.getState().creature.evolution===S.GROWN}enter(){this.creaturePos.x=100,this.creaturePos.y=57,this.creatureVel.x=0,this.creatureVel.y=0,this.timeEat=0,this.timeGravity=1e3,this.timeMove=0,this.timeSpawn=yt,this.isExit=!1,this.exitAnimation.stop(),this.exitAnimation.reset(),this.store.dispatch(L(["left","down","right"])),this.store.dispatch(G(0))}exit(){this.exitAnimation.start(),this.isExit=!0}handleInput(t){if(!t.length)return void this.exit();this.creature.handleInput([]);const e=t[0].down,s=t[t.length-1].down;t[1].down?this.exit():(e&&(this.creatureVel.x=-1),s&&(this.creatureVel.x=1),e||s||(this.creatureVel.x=0))}step(t){this.isExit&&this.exitAnimation.step(t),this.creature.step(t),this.timeGravity+=t,this.timeEat+=t,this.timeMove+=t,this.timeSpawn+=t,this.timeGravity>50&&(this.timeGravity=0,this.foods.forEach((t=>t.y+=1))),this.timeEat>200&&(this.timeEat=0,this.creatureState="idle"),this.timeMove>40&&(this.timeMove=0,this.creaturePos.x+=this.creatureVel.x,this.creaturePos.x>=175&&this.creaturePos.x--,this.creaturePos.x<=0&&this.creaturePos.x++),this.timeSpawn>yt&&(this.timeSpawn=0,this.foods.push(i.new(xt(0,mt(vt()*y-20)),0))),this.foods=this.foods.filter((t=>{if("idle"==this.creatureState){const e=this.creaturePos.x-t.x,s=this.creaturePos.y-t.y;if(gt(e)<10&&gt(s)<10)return this.store.dispatch(N),this.creatureState="hungry",this.timeEat=0,!1}return t.y<62}))}draw(t){if(this.isExit)this.exitAnimation.draw(t);else{if("hungry"==this.creatureState){const e=this.store.getState(),s=this.resources.creature[e.creature.evolution];s[this.creatureState]&&s[this.creatureState].draw(t,this.creaturePos.x,this.creaturePos.y,!1,25,25)}else t.save(),t.translate(this.creaturePos.x,this.creaturePos.y),t.scale(.5,.5),this.creature.draw(t),t.restore();this.foods.forEach((e=>this.resources.food.draw(t,e.x,e.y,!1,20,20)))}}}class bt extends dt{constructor(t){super(),e(this,"resources"),e(this,"store"),e(this,"creatureStateManager"),e(this,"ufoAnim",new Z({ufoX:new J([new K(0,75,500,j),new K(75,75,500,q),new K(75,175,500,F)]),ufoY:new J([new K(0,16,500,j),new K(16,16,500,q),new K(16,0,500,F)]),creatureY:new J([new K(32,32,500,q),new K(32,x,500,j)]),creatureShrink:new J([new K(1,1,500,q),new K(1,.5,500,q)])})),e(this,"creatureDropAnim",new K(0,50,500,C)),this.resources=A(),this.store=Y.getInstance(),this.creatureStateManager=t}updateButtons(){this.store.dispatch(L([]))}enter(){this.updateButtons(),this.ufoAnim.reset()}exit(){}isDone(){return!1}handleInput(t){}step(t){this.ufoAnim.step(t),this.ufoAnim.getValue(),this.creatureStateManager.step(t)}draw(t){const e=this.creatureStateManager.getSize();switch(this.store.getState().end){case R.NOT_YET:case R.BY_GIANT:case R.SIMPLY_DEAD:t.save(),t.translate(100-e.x/2,g-e.y),this.creatureStateManager.draw(t),t.restore();break;case R.BY_UFO:case R.BY_HOLE:{const{ufoX:s,ufoY:i,creatureY:r,creatureShrink:n}=this.ufoAnim.value;n>.5&&(t.save(),t.translate(100-e.x/2*n,r),t.scale(n,n),this.creatureStateManager.draw(t),t.restore()),this.resources.ufo.draw(t,s,i);break}}}}window.addEventListener("load",(()=>{const t=document.querySelector("canvas");t.width=p,t.height=w;const e=()=>{const{devicePixelRatio:e,innerWidth:s,innerHeight:i}=window;let r=(s<i?s:i)/p|0;r<=0&&(r=1),t.width=p,t.height=w,t.style.width=r*p+"px",t.style.height=r*w+"px"};e(),window.addEventListener("resize",e);const s=t.getContext("2d");s.imageSmoothingEnabled=!1;const i=new pt(new a);i.addView("main",new wt(i.creatureStateManager)),i.addView("foodGame",new ft(i.creatureStateManager)),i.addView("end",new bt(i.creatureStateManager)),i.setActiveView("main");let r=0;const n=t=>{requestAnimationFrame(n),(t=>{l.stepAll(t),i.step(t)})(t-r),i.draw(s),r=t};n(0)}),{once:!0});
