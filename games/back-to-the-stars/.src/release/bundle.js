!function(){"use strict";const e=(...e)=>e.reduceRight((e,t)=>(...a)=>t(e(...a)),e=>e),t={46:4,45:31744,49:12718239,50:31504927,51:31505470,52:19496002,53:33060926,54:15235630,55:32540804,56:15252014,57:15252526,48:15255086,65:33095217,66:32079423,67:33047071,68:29967935,69:33059359,70:33059344,71:33054271,72:18415153,73:32641183,74:1082943,75:19558993,76:17318431,77:18732593,78:18667121,79:33080895,80:33095184,81:32066143,82:33095249,83:33061951,84:32641156,85:18400831,86:18400580,87:18405233,88:18157905,89:18414724,90:32575775,32:0,44:132,43:145536,47:1118480,58:131200,64:32569023,35:328e3,37:15259182};var a={t(e,a,s,r,n=1){r=r.toUpperCase(),[...r].map((i,o)=>{if(t[r.charCodeAt(o)])for(let i=0;i<25;i++){const l=~~(i/5);t[r.charCodeAt(o)]>>i&!0&&e.fillRect(a+5*n+(6*o-(i-5*l))*n,s+5*n-l*n,n,n)}})}},s=({context:e})=>(e.webkitImageSmoothingEnabled=!1,e.msImageSmoothingEnabled=!1,e.imageSmoothingEnabled=!1,{r(t,a,s,r,n={}){e.fillStyle=n.fill||"#e0e0e0",e.fillRect(t,a,s,r)},t(t,s,r,n){e.fillStyle="#000",a.t(e,s,r+n.stroke||3,t,n.size||3),e.fillStyle=n.fill||"#f0f0f0",a.t(e,s,r,t,n.size||3)},di(t,a,s,r,n,i,o,l,d){e.drawImage(t,a,s,r,n,i,o,l,d)},clr(){e.clearRect(0,0,e.canvas.width,e.canvas.height)},rt(t){e.rotate(t)},tr(t,a){e.translate(t,a)},sc(t,a){e.scale(t,a)},st(t,a,s,r,n,i){e.setTransform(t,a,s,r,n,i)},sv(){e.save()},ro(){e.restore()}}),r=e=>{const t=new Image;return t.src=e,t.onload=(e=>{console.log("loaded")}),t},n=e=>{const{state:t={x:0,y:0,animation:"idle",paused:!1},width:a,height:s,image:r,animations:n,update:i,render:o,onEnd:l=(()=>{console.log("from ss")})}=e;let d=t.animation,c=0,g=2,f=0,u=!1,m=0,h=0,p=!1,x=!0,y=1;function S(e){u=-1===e}function A(e){c=n[d=e].speed}function b(){m=0,h=0,v.setVisible(!0),p=!1,y=1}const v={...e,setVisible(e){x=e},setPosition(e,a){t.x=e,t.y=a},setScale(e){g=e},setAnimation:A,setSpeed(e){c=e},setRotation(e){f=e},setDirection:S,playAnimation:b,stop(){p=!0}};return{...v,update(e){i&&i({...e,setDirection:S,setAnimation:A,playAnimation:b}),h+=1,m>=n[d].frames.length-1&&(n[d].direction&&"alternate"===n[d].direction?y=-1:"once"!==n[d].direction||p?m=0:(y=0,p=!0,l({...v}))),0===m&&n[d].direction&&"alternate"===n[d].direction&&(y=1),!p&&c&&h%c==0&&(m+=y)},render(e){o&&o(e);const{context:i}=e;if(!x)return;const l=n[d].frames[m]-1;i.sv(),i.tr(t.x+a,t.y+s),i.sc(u?-g:g,g),i.rt((u?-f:f)*Math.PI/180),i.di(r,l*a,0,a,s,-a/2,-s/2,a,s),i.ro()}}},i=e=>{const{state:t,init:a,update:s,render:r}=e;function n(e){Object.entries(e).forEach(e=>{t[e[0]]=e[1]})}return{...e,state:t,setState:n,init(e){a&&a(e)},update(e){s&&s({...e,state:t,setState:n})},render(e){r&&r({...e,state:t})}}},o=t=>{const{state:a={},update:s,render:r}=t;return e(i)({...t,update(e){a.entities&&a.entities.forEach(t=>{t.update(e)}),s&&s(e)},render(e){a.entities&&a.entities.forEach(t=>{t.render(e)}),r&&r(e)}})},l=e=>{const{update:t,render:a,beforeCameraRender:s}=e,{state:r={speed:30,target:{x:0,y:0}}}=e;let n=0,i=0,o=0,l=0,d=0,c=!1,g=0,f=500;function u(e){g=1,f=e}function m(e,t){n=e,i=t,c=!0}function h(){return{x:l+256,y:o+240}}return{...e,update(e){t&&t({...e,setShake:u,setTarget:m,getTarget:h});const{speed:a}=r;g>0&&(g+=5,l=l+10*Math.random()-5,o=o+10*Math.random()-5),g>f&&(g=0);const s=n-l,p=i-o,x=Math.sqrt(s*s+p*p);d=Math.atan2(p,s)*(180/Math.PI),c&&(x>20?(l+=s/a,o+=p/a):c=!1),(o=~~o)>260&&(o=260),(l=~~l)<256&&(l=256),l>512&&(l=512)},render(e){const{context:t}=e;s&&s(e),t.sv(),t.tr(-(l-256),-(o-240)),a&&a(e),t.ro()}}},d=e=>{const{keys:t={up:38,down:40,left:37,right:39},update:a}=e,s={};function r(e){return!!s[t[e]]}return{...e,update(e){a&&a({...e,isPressed:r});const{isKeyPressed:n}=e;Object.keys(t).map(e=>{s[t[e]]=n(t[e])})}}},g=e=>{const{state:t={x:0,y:0,xVel:0,yVel:0,speed:.2,maxSpeed:8,friction:2,gravity:10},update:a}=e;function s(e){t.xVel<t.maxSpeed&&(t.xVel+=2*e||t.speed*t.friction*2)}function r(e){t.xVel>-t.maxSpeed&&(t.xVel-=2*e||t.speed*t.friction*2)}return{...e,update(e){const n=t.speed*t.friction;~~t.xVel>0&&(t.xVel-=n),~~t.xVel<0&&(t.xVel+=n),t.yVel+=t.speed,t.yVel>t.gravity&&(t.yVel=t.gravity),t.x+=~~t.xVel,t.y+=~~t.yVel,a&&a({...e,incXVel:s,decXVel:r})}}},f=e=>{const{state:t={x:0,y:0,xVel:0,yVel:0,speed:.5,gravity:10,isJumping:!1},update:a}=e;function s(e){t.isJumping||(t.yVel=-7,t.isJumping=!0)}return{...e,update(e){a&&a({...e,jump:s})}}};function u(){this.x=new AudioContext,this.r=Date.now(),this.buffer=0,this.volume=.5,this.randomness=.1}u.prototype.z=function(e,t){var a,s=this.Generate(e);for(a in t)s[a]=t[a];return this.Z(s.volume,s.randomness,s.frequency,s.length,s.attack,s.slide,s.noise,s.modulation,s.modulationPhase)},u.prototype.Z=function(e,t,a,s,r,n,i,o,l){s=void 0===s?1:s,r=void 0===r?.1:r,n=void 0===n?0:n,i=void 0===i?0:i,o=void 0===o?0:o,l=void 0===l?0:l,e*=this.volume,a*=2*Math.PI/44100,a*=1+t*(2*this.R()-1),n*=1e3*Math.PI/194481e4,r*=0|(s=0<s?44100*(10<s?10:s)|0:1),o*=2*Math.PI/44100,l*=Math.PI,t=[];for(var d=0,c=0,g=0;g<s;++g)t[g]=e*Math.cos(d*a*Math.cos(c*o+l))*(g<r?g/r:1-(g-r)/(s-r)),d+=1+i*(2*this.R()-1),c+=1+i*(2*this.R()-1),a+=n;return this.buffer=t,e=this.x.createBuffer(1,t.length,44100),a=this.x.createBufferSource(),e.getChannelData(0).set(t),a.buffer=e,a.connect(this.x.destination),a.start(),a},u.prototype.Generate=function(e){var t=this.r;this.r=e;for(var a=9;a--;)this.R();return(a={}).seed=e,a.volume=1,a.randomness=e?this.randomness:0,a.frequency=e?2e3*Math.pow(this.R(),2)|0:220,a.slide=e?parseFloat((10*Math.pow(this.R(),3)).toFixed(1)):0,a.length=e?parseFloat((.1+this.R()).toFixed(1)):1,a.attack=e?parseFloat(this.R().toFixed(2)):.1,a.noise=e?parseFloat((5*Math.pow(this.R(),3)).toFixed(1)):0,a.modulation=e?parseFloat((99*Math.pow(this.R(),5)).toFixed(1)):0,a.modulationPhase=e?parseFloat(this.R().toFixed(2)):0,this.r=t,a},u.prototype.Note=function(e,t){return e*Math.pow(2,t/12)},u.prototype.R=function(){return this.r^=this.r<<13,this.r^=this.r>>7,this.r^=this.r<<17,Math.abs(this.r)%1e9/1e9},new u;var m=t=>{const{gameState:a,update:s,render:r,colliding:o}=t,{assets:l}=a;let c=new u;return e(i,n,e=>{const{update:t}=e;return{...e,update(e){t&&t(e);const{state:a,setState:s}=e;a.y>448&&s({y:448,yVel:0,isJumping:!1}),a.x<0&&s({x:0,xVel:0}),a.x>736&&s({x:736,xVel:0})}}},f,g,d)({state:{x:0,y:0,xVel:0,yVel:0,speed:.2,maxSpeed:5,friction:1,gravity:10,isJumping:!1,animation:"idle",bbox:{x:0,y:0,w:32,h:32},colliders:[]},keys:{left:37,right:39,jump:32},width:16,height:16,image:l.getAsset("spritesheet"),animations:{idle:{frames:[1]},walk:{frames:[1,2,3,4,5],speed:3,direction:"alternate"},jump:{frames:[1]},fall:{frames:[6]},talk:{frames:[1,6],speed:15,direction:"alternate"}},...t,update(e){s&&s(e);const{state:t,setDirection:a,setAnimation:r,isPressed:n,incXVel:i,decXVel:l,jump:d}=e;r("idle"),n("left")&&(l(),a(-1),r("walk")),n("right")&&(i(),a(1),r("walk")),n("jump")&&!t.isJumping&&(c.z(28209),d(),r("jump")),t.isJumping&&r("jump"),~~t.yVel>1&&r("fall"),t.colliders.forEach(e=>{o&&t.x+t.bbox.x+t.bbox.w>e.state.x+e.state.bbox.x&&t.x+t.bbox.x<e.state.x+e.state.bbox.x+e.state.bbox.w&&t.y+t.bbox.y+t.bbox.h>e.state.y+e.state.bbox.y&&t.y+t.bbox.y<e.state.y+e.state.bbox.y+e.state.bbox.h&&o(e)})},render(e){r&&r(e)}})},h=t=>{const{gameState:a,update:s,getTarget:r}=t,{assets:o}=a;let l=0;function d(e){const{state:t,setAnimation:a,playAnimation:s}=e;t.bursting||(t.bursting=!0,a("burst"),s())}function c(){return 234+~~(300*Math.random())}return e(i,n,e=>{const{update:t}=e;return{...e,update(e){t&&t(e);const{state:a,setState:s}=e,n=r();a.y>n.y-32&&(s({y:480-n.y}),d(e)),a.x<0&&s({x:0,xVel:0}),a.x>736&&s({x:736,xVel:0})}}},g)({state:{x:c(),y:480-r().y,xVel:0,yVel:0,speed:.2,maxSpeed:5,friction:1,gravity:1.5,animation:"idle",bbox:{x:0,y:0,w:32,h:32},bursting:!1},keys:{left:37,right:39,jump:32},width:16,height:16,image:o.getAsset("spritesheet"),animations:{idle:{frames:[19,20],speed:10,direction:"alternate"},burst:{frames:[19,21,22,23,24,25,26],speed:3,direction:"once"}},onEnd(e){const{state:t,setAnimation:a,playAnimation:s}=e;t.bursting=!1,a("idle"),t.y=r().y-480,t.x=c(),s()},...t,burst:d,update(e){s&&s({...e},d);const{state:t}=e;++l%~~(40*Math.random())==0&&(t.xVel=3-~~(6*Math.random()))}})},p=t=>{const{gameState:a}=t,{assets:s}=a;return e(i,n,e=>({...e}))({state:{x:30,y:30,animation:"twinkle"},width:16,height:16,image:s.getAsset("spritesheet"),animations:{twinkle:{frames:[12,13,14,15,16],speed:5,direction:"once"}},onEnd(e){const{state:t,playAnimation:a,setVisible:s}=e;t.x=768*Math.random(),s(!1),setTimeout(()=>{s(!0),a()},1e3*Math.random())},...t})};const x=c.getContext("2d"),y=e(t=>{const{state:a={scenes:{},assets:{},renderer:null,currentScene:null},assets:s={},onload:i=(()=>{}),onready:o=(()=>{})}=t;!function(){const e={13:"enter",27:"esc",32:"space",37:"left",38:"up",39:"right",40:"down"};for(let t=0;t<26;t++)e[65+t]=(10+t).toString(36);for(let t=0;t<10;t++)e[48+t]=""+t}();let l,d=0,c={};function g(e){Object.entries(e).forEach(e=>{a[e[0]]=e[1]})}function f(e){const t=e-d,s=a.renderer;d=e,a.currentScene&&a.currentScene.update({dt:t,isKeyPressed:u}),s.clr(),s.sv(),s.r(0,0,512,480,{fill:"#036"}),a.currentScene&&a.currentScene.render({context:a.renderer,gameState:a}),s.ro(),l=requestAnimationFrame(f)}function u(e){return e?!!c[e]:Object.entries(c).length>0||void 0}const m=new Worker("assets-loader.js");return m.onmessage=function(t){a.assets=(a=>{const s={spritesheet:t=>e(n)(t),image:t=>e(r)(t),dithered:t=>{const{width:a,height:s,image_data:n}=t,i=document.createElement("canvas");i.width=a,i.height=s;const o=i.getContext("2d"),l=new ImageData(a,s);return l.data.set(n),o.putImageData(l,0,0),e(r)(i.toDataURL())}},i={};return Object.entries(t.data).forEach(e=>{i[e[0]]=s[e[1].type](e[1].data)}),{getAsset:e=>i[e]}})(),o({state:a,setState:g})},m.postMessage(s),a.currentScene=a.scenes.loading({gameState:a}),addEventListener("keydown",e=>{c[e.which]=!0}),addEventListener("keyup",e=>{c[e.which]=!1,delete c[e.which]}),addEventListener("blur",()=>c={}),{...t,setScene(e){a.currentScene=a.scenes[e]({gameState:a})},start(){l=requestAnimationFrame(f)},stop(){cancelAnimationFrame(l)}}})({state:{scenes:{loading:({})=>{let t=0;return e(o)({update(e){t++},render({context:e}){e.t("Loading",172,140,{size:4,fill:"#fff",stroke:5}),e.sv(),e.tr(256,240),e.rt(t/50),e.t("#",-30,-30,{size:10,stroke:0}),e.ro()}})},game:({gameState:t})=>{const{assets:a,gameOver:s}=t;let r=0,n=0,d=0,c=0,g=0,f=!1,x=!1,y=!1,S=!1,A=new u;const b=(({gameState:t})=>{const{assets:a}=t,s=e(i,e=>{const{image:t}=e;return{...e,render({context:e}){e.di(t,0,0,256,240,0,0,512,480),e.di(t,0,0,256,240,512,0,512,480)}}})({state:{x:0,y:0},image:a.getAsset("background")}),r=e(i,e=>{const{image:t}=e;return{render({context:e}){e.di(t,0,0,256,240,0,295,512,480)}}})({image:a.getAsset("sun")}),n=e(i,e=>{const{image:t}=e;let a=0;return{update(e){((a-=.25)<-512||a>512)&&(a=0)},render({context:e}){e.di(t,0,0,256,240,~~a,0,512,480),e.di(t,0,0,256,240,512+~~a,0,512,480)}}})({image:a.getAsset("clouds")});function l(e){const a=p({gameState:t});return a.setState({x:100,y:e}),a.setAnimation("twinkle"),a.setScale(4),a.playAnimation(),a}const d=[l(130),l(30),l(-130),l(-260),l(-390),l(-420)];return e(o)({state:{entities:[...d,s,r,n]},update(e){},render(e){}})})({gameState:t}),v=e(m)({gameState:t,colliding(e){const{burst:a}=e;a(e),v.state.yVel=-7,v.state.isJumping=!0,g=0,x=!0,t.score+=t.height,!y&&A.z(28209),y=!0,setTimeout(()=>{y=!1},50)}});v.setAnimation("idle"),v.setScale(2),v.setState({x:384,y:460}),v.playAnimation();const V=(t=>{const{image:a,render:s}=t;return e(i)({...t,render(e){s&&s(e);const{context:t}=e;for(let e=0;e<24;e++)t.di(a,96,0,16,16,32*e,478,32,32)}})})({image:a.getAsset("spritesheet")}),w=e(i)({render(e){}});return e(l,o)({state:{speed:10,entities:[V,v,w]},update(a){const{state:i,setTarget:o,getTarget:l}=a;r++,o(v.state.x,v.state.y);const u=l();if(n=u.x,d=u.y,~~v.state.yVel>0&&g++,~~v.state.yVel<=0&&(g=0),++c%100==0&&i.entities.length<10){const a=function(a){const s=e(h)({gameState:t,getTarget:a});return s.setAnimation("idle"),s.setScale(2),s.playAnimation(),s}(l);i.entities.push(a),v.state.colliders.push(a)}g>120&&(f=!0),v.state.y>447&&x&&(f=!0),f&&(A.z(35003),s()),t.height=~~((480-v.state.y)/30),b.update(a)},beforeCameraRender(e){const{context:a}=e;let s=-~~v.state.x,n=-~~v.state.y;a.sv(),a.tr(s/20,20+n/20),b.render(e),a.ro(),r<300&&(a.t("Jump into the",139,130,{size:3,fill:"#fff",stroke:2}),a.t("bubbles to get",130,160,{size:3,fill:"#fff",stroke:2})),r>150&&r<450&&(a.t("back to",130,200,{size:6,fill:"#fff",stroke:6}),a.t("the stars",94,240,{size:6,fill:"#fff",stroke:6}),!S&&A.z(55428),S=!0),r<400&&(a.t("Arrow keys to move",148,410,{size:2,fill:"#fff",stroke:2}),a.t("Space to jump",178,430,{size:2,fill:"#fff",stroke:2})),a.t(`Score ${t.score}`,10,10,{size:2,fill:"#fff",stroke:2})}})},gameOver:({gameState:t})=>{const{startGame:a,score:s=0,highScore:r=0}=t;let n=0;return e(o)({update(e){const{isKeyPressed:t}=e;(n+=1)>100&&t()&&a()},render({context:e}){e.t("Game Over",30,160,{size:8,stroke:8}),e.t(`Score:${s}`,30,240,{size:4,stroke:4}),e.t(`High Score:${r}`,30,270,{size:4,stroke:4}),n>100&&e.t("Press any key",178,420,{size:2,stroke:2})}})}},renderer:s({context:x}),gameOver(){y.state.maxHeight<y.state.height&&(y.state.maxHeight=y.state.height),y.state.highScore<y.state.score&&(y.state.highScore=y.state.score),y.setScene("gameOver")},startGame(){y.state.score=0,y.setScene("game")},score:0,highScore:0,height:0,maxHeight:0,currentHeight:0},assets:{title:{type:"dithered",data:(e=>{const t=s({context:e}),a=e.createLinearGradient(0,0,0,100);return a.addColorStop(0,"red"),a.addColorStop(1/6,"orange"),a.addColorStop(2/6,"yellow"),a.addColorStop(.5,"green"),a.addColorStop(4/6,"blue"),a.addColorStop(5/6,"indigo"),a.addColorStop(1,"violet"),t.clr(),t.t("Bring it",0,0,{size:5,fill:"#000"}),t.t("back",-5,25,{size:10,fill:"#000"}),e.globalCompositeOperation="source-in",e.fillStyle=a,e.fillRect(0,0,256,100),e.globalCompositeOperation="source-over",e.fillStyle="rgba(255, 0, 0, 0.5)",e.fillRect(-20,200,256,40),e.fillStyle="#fff",e.font="30px sans-serif",e.fillText(`${String.fromCodePoint(127918)}`,20,232),t.t("JS13K Edition",62,214,{size:2,fill:"#fff",stroke:2}),{width:256,height:240,image_data:e.getImageData(0,0,256,240)}})(x)},background:{type:"dithered",data:(e=>{const t=e.createLinearGradient(0,0,0,240);return t.addColorStop(0,"rgb(0, 0, 63, 0)"),t.addColorStop(.5,"rgb(127, 0, 127, 1)"),t.addColorStop(.75,"rgb(127, 0, 0, 1)"),t.addColorStop(1,"orange"),e.clearRect(0,0,256,240),e.fillStyle=t,e.fillRect(0,0,512,480),{width:256,height:240,image_data:e.getImageData(0,0,256,240)}})(x)},clouds:{type:"dithered",data:(e=>{e.clearRect(0,0,256,240),e.font="30px sans-serif",e.fillStyle="#fff",e.save(),e.translate(20,100),e.fillText(`${String.fromCodePoint(9729)}`,-15,15),e.restore(),e.save(),e.font="60px sans-serif",e.translate(200,200),e.fillText(`${String.fromCodePoint(9729)}`,-15,15),e.restore(),e.save(),e.font="40px sans-serif",e.translate(140,20),e.fillText(`${String.fromCodePoint(9729)}`,-15,15),e.restore(),e.save(),e.globalCompositeOperation="source-in";const t=e.createLinearGradient(0,0,0,240);return t.addColorStop(0,"rgb(0, 0, 0, 0.75)"),t.addColorStop(1,"rgb(255, 255, 255, 1)"),e.fillStyle=t,e.fillRect(0,0,256,240),e.globalCompositeOperation="source-over",e.restore(),{width:256,height:240,image_data:e.getImageData(0,0,256,240)}})(x)},sun:{type:"dithered",data:(e=>(e.clearRect(0,0,256,240),e.save(),e.font="200px sans-serif",e.translate(128,120),e.fillText(`${String.fromCodePoint(127774)}`,-100,100),e.restore(),{width:256,height:240,image_data:e.getImageData(0,0,256,240)}))(x)},backgroundMontains:{type:"dithered",data:(e=>(e.clearRect(0,0,256,240),e.fillStyle="black",e.save(),e.translate(100,250),e.rotate(45*Math.PI/180),e.fillRect(-50,-50,100,100),e.restore(),e.save(),e.translate(180,270),e.rotate(45*Math.PI/180),e.fillRect(-50,-50,100,100),e.restore(),e.save(),e.font="50px sans-serif",e.translate(50,200),e.fillText(`${String.fromCodePoint(127983)}`,-50,50),e.restore(),e.save(),e.font="50px sans-serif",e.translate(250,200),e.fillText(`${String.fromCodePoint(127984)}`,-50,50),e.restore(),e.save(),e.globalCompositeOperation="source-in",e.fillStyle="black",e.fillRect(0,0,256,240),e.globalCompositeOperation="source-over",e.restore(),{width:256,height:240,image_data:e.getImageData(0,0,256,240)}))(x)},spritesheet:{type:"image",data:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAaAAAAAQCAMAAABnVVuqAAAAqFBMVEUAAAAAAAB5eXmioqIwUYJBksNh0+Oi//MwYUFJomlx45Ki/8s4bQBJqhBx80Gi86I4aQBRogCa6wDL84JJWQCKigDr0yD/85J5QQDDcQD/ogD/26KiMADjUQD/eTD/y7qyEDDbQWH/YbL/uuuaIHnbQcPzYf/jsv9hEKKSQfOicf/Dsv8oALpBQf9Rgv+iuv8gALJBYfthov+S0/95eXmysrLr6+v///+noU3CAAAAOHRSTlMA/////////////////////////////////////////////////////////////////////////7X8Y8UAAAP/SURBVFiFtZnLVuMwDIaj0+0sEhYlTdnMoZy+AMXv/2bju379di4DRSV1FLuJo8+SZTMMuyJV9tt2ZAwy5GMc50XlulyvjiQ/j5//rUc/TUrXjtb/VEcRsQBYH+ReRQ60Z318mV5e/ozp8KfzJciy5PL6RTLIFESJsP50keaEpJgOTGjsyfWHS/N75OOgBPsnAD3dGzsdB9uDHs075sN/z5lMKb8e9uOBjDIaQFZ/tsipjLtTP1Qk86ERHVxq64/qSCHWr7qQAcB6KPwFF49O/Z4+kcxJLpdUXonPl+cRpBJh/ekiJ09IzudQns/n1yD4MBfNZ2BgVVN/VHeGF3XKXCQAfT1afaN+VZ+8m0xTOoL4OShEuCCxfJAEIEKA5PmA1CIeTHSdULz/fQ/yGgemtnQGSVKcU9XUH9IdXnLVvXphbgWA0T8+Usj6WAe2ql9IZp1/QtkJcd40nojODFH/X0DdIdmVQCaLRDx/A6DoV8VsOJ2bCYLtn0MVuBvoiQqHMrff1RbAj3RBXQKgRfEslxnmn3DOHjS8hXuAy7Del+23dJ0W5e09CRfpuELIAxIDaMWeLqumvkauhEPnFmdvUB2QMgajpHIXgPeE5BNrHoV6aKz6XSqfJR0w/4SyAfQWiAAQ1rsAtjxkRwIJnx7E75OUEHcqfGIEgqd0AEG0cvkPkgLV9QOTl2YLrWvVLuZErQJo9ZKalRBGwFBPWtEDIOWT56A6/yydOSh1aYQYN3QAUWBwjuMM2dW8sRmfcruVCHe7SYxw0YN0CoL7oH1rbb1dDmcVTZ6mrPs66k2bI/BYE1zo5Bhlgezp93u50OTZ0pmDzDqoD4iIMK/OW3zfgzwgiZ8MyCPCLI7m7Q6gcqrpWk0gBgcANLlAOP2OQwswbxzx6gMbgBDIkCKgrdf2CwOiddDj036y2fYArb1RX9+Yg1KMK1lcSuNeYSXECUAnT6iVmDTQsTGA9GZtpweDowKSex9Q2VoQAlQJVY/S31OEW2gdtO5BkMdNu3xW33pNB6lpXFgGxXWQyKlDqIx9mNrVUzRbc4WRzv5NcD0wnqB/OuJT5CWHiRdwga2AMrCIR0qEHPB+AdBiEjmhdRA50KP0KrhQvv83+OwK2kAa0RxB7YxxC6tMTHMIreYB5MI0JfY8jFTa4Wh2PJJbafOB6zf0C8U4Xgf1Q1x0oYwoehPvvzxV0mZCgoLnSbKL1NOqOKgHK5eZSitWQ5y9g71ox5A3PyJIXjJQi2G1nn8POrCJqITWQZ8k9RZ1hyex+s390ki/bg6jEuXIZqkDJv3Nz700ZrM+rtaxT82WYatSc9MC9ItZCHlAMssMwtHFPkL07Bc9aFf2/90Qv3/j0f8Aln4wIiYcRwAAAAAASUVORK5CYII="}},onready:({})=>{y.setScene("game")}});y.start()}();
