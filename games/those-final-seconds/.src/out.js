class aa{constructor(a,b,d,c,e){this.i=0;this.l=void 0;this.j=a;this.g=Array.from(b);this.u=d;this.type=c;this.o=e;this.i=.4}play(a){const b=this.j.currentTime,d=this.j.createOscillator(),c=this.j.createGain(),e=["setValueAtTime","linearRampToValueAtTime","exponentialRampToValueAtTime"][this.o];d.type=this.type;a*=this.u;let f=this.g[2]*a;d.frequency.setValueAtTime(this.g[0],b);c.gain.setValueAtTime(this.i*f,b);let h=0;for(let g=0;g<this.g.length;g+=3){const k=this.g[g],m=this.g[g+1];f=Math.max(1E-4,
Math.min(this.g[g+2]*a,1));d.frequency[e](k,b+h);c.gain[e](f,b+h);h+=1/60*m}c.gain.exponentialRampToValueAtTime(.5*f,b+h);d.connect(c).connect(this.j.destination);d.start(b);d.stop(b+h);d.onended=()=>d.disconnect();this.l?.disconnect();this.l=d}};function l(a,b,d){a.keys.get(b)!==d-2&&(a.keys.set(b,d),a.g||(a.g=!!(d&1)))}function p(a,b,d){a.actions.set(b,Array.from(d));a.o.push(...d)}function q(a,b){b=a.actions.get(b)??[];for(const d of b)if(b=a.keys.get(d)??0,0!=b)return b;return 0}function u(a,b,d){a.l.set(b,d)}function v(a,b,d){++a.j;const c=new Image;c.onload=()=>{++a.u;a.l.set(b,c)};c.src=d}function ba(a){a.i=new AudioContext;try{a.i.resume()}catch(b){}}function w(a,b,d,c=1,e="square",f=2){a.A.set(b,new aa(a.i,d,c,e,f))}
function y(a,b,d=.6){try{a.A.get(b)?.play(.6*d)}catch(c){}}
class ca{get aa(){return this.v.width}get ga(){return this.v.height}get ha(){return this.g}constructor(a){this.s=1;this.g=!1;this.j=this.u=0;this.i=void 0;this.loaded=()=>this.u>=this.j;this.B=()=>0==this.j?1:this.u/this.j;this.v=a;this.keys=new Map;this.o=[];this.actions=new Map;window.addEventListener("keydown",b=>{this.o.includes(b.code)&&b.preventDefault();l(this,b.code,3)});window.addEventListener("keyup",b=>{this.o.includes(b.code)&&b.preventDefault();l(this,b.code,2)});window.addEventListener("mousedown",
()=>{window.focus()});window.addEventListener("mousemove",()=>{window.focus()});window.addEventListener("contextmenu",b=>b.preventDefault());this.l=new Map;this.A=new Map}update(){for(const a of this.keys.keys()){const b=this.keys.get(a)??0;1<b&&this.keys.set(a,b-2)}this.g=!1}J(a){return this.l.get(a)}};function z(a){a.x=0;a.y=0}function B(a){const b=a.length;if(1E-4>b)return z(a),a.x=0,a;a.x/=b;a.y/=b;return a}function C(a,b){return B(new D(b.x-a.x,b.y-a.y))}class D{constructor(a=0,b=0){this.g=()=>new D(this.x,this.y);this.x=a;this.y=b}get length(){return Math.hypot(this.x,this.y)}};function ea(a,b,d,c=!0){let e=void 0;c&&(e=document.createElement("div"),e.id="d",e.setAttribute("style","position: absolute; top: 0; left: 0; z-index: -1;"));a.l=document.createElement("canvas");a.l.setAttribute("style","position: absolute;z-index: -1;image-rendering: optimizeSpeed;image-rendering: pixelated;image-rendering: -moz-crisp-edges;");a.l.width=b;a.l.height=d;c&&void 0!==e&&(e.appendChild(a.l),document.body.appendChild(e));a.i=a.l.getContext("2d");a.i.imageSmoothingEnabled=!1;a.i.globalAlpha=
1}function E(a){var b=window.innerWidth,d=window.innerHeight,c=b/d;let e,f;c>=a.o/a.u?(e=Math.round(c*a.u),c=a.u,f=d/a.u):(e=a.o,c=Math.round(a.o/c),f=b/a.o);e=Math.min(e,a.A)|0;c=Math.min(c,a.v)|0;a.l.width=e;a.l.height=c;a.l.style.width=String(e*f|0)+"px";a.l.style.height=String(c*f|0)+"px";a.l.style.left=String(b/2-f*e/2|0)+"px";a.l.style.top=String(d/2-f*c/2|0)+"px"}function F(a,b=1){a.i.globalAlpha=Math.max(0,Math.min(b,1))}
function G(a,b,d,c,e=c){b=b+a.g.x|0;d=d+a.g.y|0;c|=0;e|=0;for(let h=-e;h<=e;++h){var f=h/e;f=Math.round(Math.sqrt(1-f*f)*c);0>=f||a.i.fillRect(b-f,d+h,2*f,1)}}
function fa(a,b,d=a.width/2,c=a.height/2){d=d+a.g.x|0;c=c+a.g.y|0;var e=Math.max(0,c-b)|0;const f=Math.min(a.height,c+b)|0;0<e&&a.fillRect(0,0,a.width,e);for(f<a.height&&a.fillRect(0,f,a.width,a.height-f);e<f;++e){var h=e-c;if(Math.abs(h)>=b){a.i.fillRect(0,e,a.width,1);continue}const g=Math.round(d-Math.sqrt(b*b-h*h));h=Math.round(d+Math.sqrt(b*b-h*h));0<g&&a.i.fillRect(0,e,g,1);h<a.width&&a.i.fillRect(h,e,a.width-g,1)}}
function H(a,b,d,c,e){c|=0;e|=0;b=b+a.g.x|0;d=d+a.g.y|0;for(let g=-e;g<=e;++g){var f=g/e;f=Math.round(Math.sqrt(1-f*f)*e);if(!(0>=f)){var h=0;Math.abs(g)<c&&(h=g/c,h=Math.round(Math.sqrt(1-h*h)*c));0>=h?a.i.fillRect(b-f,d+g,2*f,1):(a.i.fillRect(b-f,d+g,f-h,1),a.i.fillRect(b+h,d+g,f-h,1))}}}
function J(a,b,d=0,c=0,e=0,f=0,h=0,g,k,m,n,t){b="string"==typeof b?a.J?.(b):b;if(void 0!==b){g??(g=b?.width??0);k??(k=b?.height??0);m??(m=g/2);n??(n=k/2);c=c+a.g.x|0;e=e+a.g.y|0;f|=0;h|=0;g|=0;k|=0;c|=0;e|=0;a=a.i;var r=0!=d||void 0!==t;r&&a.save();0!=(d&1)&&(a.translate(g,0),a.scale(-1,1),c*=-1);0!=(d&2)&&(a.translate(0,k),a.scale(1,-1),e*=-1);void 0!==t&&(a.translate(m+c|0,n+e|0),a.rotate(-t),c=-m,e=-n);a.drawImage(b,f,h,g,k,c,e,g,k);r&&a.restore()}}
function K(a,b,d,c,e,f=0,h=0,g=0){b="string"==typeof b?a.J?.(b):b;if(void 0!==b){var k=b.width/16|0,m=(d.length+1)*(k+f);1==g?c-=m/2|0:2==g&&(c-=m|0);g=c;for(m=0;m<d.length;++m){const n=d.charCodeAt(m);10==n?(g=c,e+=k+h):(J(a,b,0,g,e,n%16*k,((n/16|0)-2)*k,k,k),g+=k+f)}}}
class L{get width(){return this.l.width}get height(){return this.l.height}constructor(a,b=a?.width??0,d=a?.height??0,c=b,e=d,f=()=>{},h=!1){this.g=new D;this.J=()=>{};this.j=()=>this.l;this.o=b;this.A=c;this.u=d;this.v=e;this.J=f;null!==a?(this.l=a,this.i=a.getContext("2d")):(ea(this,b,d,h),h&&(E(this),window.addEventListener("resize",()=>E(this))))}clear(a){const b=this.i;b.fillStyle=a;b.fillRect(0,0,this.width,this.height)}setColor(a="#ffffff"){this.i.fillStyle=a}fillRect(a=0,b=0,d=this.width,c=
this.height,e){void 0!==e&&this.setColor(e);a=a+this.g.x|0;b=b+this.g.y|0;this.i.fillRect(a,b,d|0,c|0)}move(a,b=0){this.g.x+=a;this.g.y+=b}moveTo(a=0,b=0){this.g.x=a;this.g.y=b}};function ha(a,b){b.clear("#000000");a=a.g.B();const d=b.width/2-40,c=b.height/2-6;b.fillRect(d,c,80,12,"#ffffff");b.fillRect(d+1,c+1,78,10,"#000000");b.fillRect(d+2,c+2,76*a,8,"#ffffff")}function M(a,b,d,c){const e=1E3/60,f=a.g.loaded();a.j=Math.min(a.j+(b-a.o),5*e);a.o=b;for(b=!0;a.j>=e;a.j-=e){a.l&&a.u.update(a.g);if(f&&!a.l&&a.g.ha){a.l=!0;ba(a.g);c(a.g);a.g.update();break}b&&(a.g.update(),b=!1)}f?a.l?ia(a.u,a.i):d(a.i):ha(a,a.i);window.requestAnimationFrame(h=>M(a,h,d,c))}
class ja{constructor(){this.o=this.j=0;this.l=!1;this.i=new L(null,256,192,576,192,a=>this.g.J(a),!0);this.g=new ca(this.i)}};function ka(a,b,d=new D,c=new D){return a.x+a.w/2+d.x>=b.x-b.w/2+c.x&&a.x-a.w/2+d.x<=b.x+b.w/2+c.x&&a.y+a.U/2+d.y>=b.y-b.U/2+c.y&&a.y-a.U/2+d.y<=b.y+b.U/2+c.y}class N{constructor(a=0,b=0,d=0){this.x=0;this.y=a;this.w=b;this.U=d}};const O=(a,b,d)=>a<b?Math.min(b,a+d):Math.max(b,a-d);function P(a,b){if(a.isActive()){var d=b.height-24;J(b,"sh",0,a.h.x-16,d-16,32*(8-a.P+(Math.max(0,d-(a.h.y+a.C.y+a.C.U/2))/512*a.P|0)),0,32,32)}}
class Q{constructor(a=0,b=0,d=!1){this.g=!0;this.j=!1;this.V=0;this.P=8;this.da=()=>this.g;this.ka=()=>this.j;this.isActive=()=>this.g&&!this.j;this.ba=()=>this.h.g();this.O=c=>ka(this.C,c.C,this.h,c.h);this.h=new D(a,b);this.speed=new D;this.target=new D;this.u=new D(.15,.15);this.C=new N(0,16,16);this.g=d}update(a,b){this.g&&(this.j?(this.M?.(b)??!0)&&(this.j=this.g=!1):(this.H?.(a,b),this.speed.x=O(this.speed.x,this.target.x,this.u.x*b.s),this.speed.y=O(this.speed.y,this.target.y,this.u.y*b.s),
this.h.x+=this.speed.x*b.s,this.h.y+=this.speed.y*b.s,a=b.ga-24,0<=this.speed.y&&this.h.y+this.C.y+this.C.U/2>a&&(this.h.y=a-this.C.y-this.C.U/2,this.speed.y*=-this.V,this.N?.(b)),this.la?.(b)))}};const la=[[1,1],[2,1],[2,2],[3,2],[3,3]];function R(a,b){0<a.i||(S(a.m,-1),0<a.m.$&&y(b,"h"),a.i=60,a=a.m,0==a.level&&(a.Y=0),a.level=Math.max(0,a.level-1),a.l=30,0<a.Z&&(a.Z=0,a.u=30))}
class ma extends Q{constructor(a,b,d,c){super(a,96,!0);this.G=this.i=this.l=this.K=this.B=this.v=this.A=0;this.D=!1;this.o=0;this.S=()=>this.D;this.ma=()=>30<this.i;this.C=new N(2,24,16);this.u=new D(.2,.2);this.W=d;this.X=b;this.m=c}H(a,b){0>=(this.B-=b.s)&&(this.B+=6,this.W.next().R(this.h.x-16,this.h.y+4-this.A,-2+this.speed.x,this.speed.y/2,0));if(this.D){a=new D;0!=(q(b,"l")&1)?a.x=-1:0!=(q(b,"r")&1)&&(a.x=1);0!=(q(b,"u")&1)?a.y=-1:0!=(q(b,"d")&1)&&(a.y=1);B(a);var d=2.5+.5*this.m.L,c=.2+.05*
this.m.L;this.u.x=c;this.u.y=c;this.target.x=a.x*d;this.target.y=a.y*d;this.v=4*a.y;if(0!=(q(b,"s")&1)&&0>=this.l){a=Math.PI/10;d=la[this.m.level][this.K];c=-a*(d-1)/2;y(b,"b0");for(let f=0;f<d;++f){var e=c+f*a;const h=4*Math.cos(e);e=4*Math.sin(e);this.X.next().R(this.h.x+14,this.h.y+4+this.v,h+this.speed.x/2,e+this.speed.y/2,0)}this.l=17;this.K=(this.K+1)%2}0<this.l&&(this.l-=(1+.25*this.m.L)*b.s);0<this.i&&(this.i-=b.s);this.G=(this.G+b.s)%4;if(0>=this.m.$||0>=this.m.time)this.j=!0,this.o=0,y(b,
"d")}else 96<=(this.h.x+=1.5*b.s)&&(this.h.x=96,this.D=!0)}M(a){this.i-=a.s;return 60<=(this.o+=a.s)}la(a){if(this.D){const b=this.C.x+this.C.w/2,d=a.aa-this.C.w/2+this.C.x,c=-32+this.C.y+this.C.U/2;if(0>this.speed.x&&this.h.x<=b||0<this.speed.x&&this.h.x>=d)this.speed.x=0;this.h.x=Math.max(b,Math.min(this.h.x,d));0>this.speed.y&&this.h.y<c&&(this.speed.y=0,this.h.y=c,this.v=0)}this.A=O(this.A,this.v,.25*a.s)}N(){this.v=0}I(a){if(this.g)if(this.j){var b=["#ff6d00","#ffb600","#ffffb6"],d=this.o/60*
96;for(var c=0;8>c;++c){var e=2*Math.PI/8*c,f=this.h.x+Math.cos(e)*d;e=this.h.y+Math.sin(e)*d;for(var h=0;3>h;++h)a.setColor(b[(h+(this.o/3|0)%3)%3]),G(a,f,e,8-3*h)}}else if(!(0<this.i&&0!=Math.floor(this.i/4)%2)){b=this.h.x-16;d=this.h.y-12;0<this.m.L&&0==(this.G/2|0)%2&&(b+=-this.m.L+(Math.random()*(1+2*this.m.L)|0),d+=-this.m.L+(Math.random()*(1+2*this.m.L)|0));c=Math.round(this.A);f=32/(1+Math.abs(c))|0;e=-(0>Math.sign(c)?Math.floor:Math.ceil)(c/2);h=0;for(let g=0;32>g;g+=f)h+=Math.sign(c),J(a,
"p",0,b+g,d+e+h,g,0,f,24);5<this.l&&J(a,"r1",0,this.h.x+2,this.h.y-8+c,24*(4*(1-(this.l-17+12)/12)|0),0,24,24)}}};function na(a){for(let b of a)if(!b.da())return b};function oa(a,b){for(let d of a.g)d.isActive()&&b(d)}class T{constructor(a){this.g=[];this.type=a}next(){let a=na(this.g);void 0===a&&(a=new this.type.prototype.constructor,this.g.push(a));return a}update(a,b,d){for(let c of this.g)c.update(a,d),c.fa?.(b,d)}I(a){for(let b of this.g)b.I(a)}flush(){for(let b of this.g){var a=b;a.g=!1;a.j=!1}}};const pa=[0,0,-Math.PI/2,Math.PI,0],qa=[2*Math.PI/120,void 0,2*Math.PI/60,2*Math.PI/240,void 0];function U(a,b,d,c,e){if(a.A){y(e,"b1");e=-(b-1)*d/2;for(let h=0;h<b;++h){var f=e+h*d;const g=-Math.cos(f)*c;f=Math.sin(f)*c;a.X.next().R(a.h.x-10,a.h.y,a.speed.x+g,f,1)}a.o=20}}
function ra(a,b,d){if(a.isActive()&&b.isActive()&&a.ia(d)&&b.ia(d)){d=a.h;var c=b.h;d=20-Math.hypot(d.x-c.x,d.y-c.y);0<d&&(c=C(a.h,b.h),a.ca&&b.ca||(d*=2),a.ca&&(a.h.x-=c.x*d/2,a.h.y-=c.y*d/2,a.F-=c.y*d/2),b.ca&&(b.h.x+=c.x*d/2,b.h.y+=c.y*d/2,b.F+=c.y*d/2))}}
class sa extends Q{constructor(a,b,d){super(0,0,!1);this.D=this.K=this.v=this.l=this.i=this.id=this.B=this.F=0;this.ca=!0;this.A=!1;this.o=this.G=0;this.ia=c=>this.h.x<c.aa+12;this.C=new N(0,18,18);this.P=6;this.u=new D(.15,.15);this.X=a;this.W=b;this.S=d}M(a){return 16<=(this.D+=a.s)}N(){1==this.id&&0<this.l&&(this.l=0,this.i=30)}H(a,b){if(-24>this.h.x)this.g=!1;else if(this.h.x>=b.aa+16&&3!=this.id)this.h.x-=1.5*a*b.s;else switch(0<this.o&&(this.o-=b.s),this.K=(this.K+.0625*b.s)%1,1!=this.id&&(this.i=
(this.i+qa[this.id]*b.s)%(2*Math.PI)),this.id){case 0:this.target.x=1.5*-a;this.speed.x=this.target.x;this.h.y=this.F+8*Math.sin(this.i);0>=this.o&&0>=(this.G-=b.s)&&(this.G=30+90*Math.random(),U(this,1,0,3,b));break;case 1:this.target.y=4;if(0==this.l){this.target.x=1.5*-a;0>=(this.i-=b.s)&&(this.i=8+4*Number(this.A)+8*Math.random(),this.speed.x=1.5*-a-.4,this.target.x=this.speed.x,this.speed.y=-4,++this.l,y(b,"k1",.3));break}if(0!=this.l&&0<(this.i-=b.s)){this.speed.y=-4;break}this.A&&0<this.speed.y&&
2!=this.l&&(U(this,3,Math.PI/8,2.5,b),this.l=2,this.speed.x=1.5*-a+3.5);break;case 2:if(0==this.l){this.i=0;this.speed.x=-.375;if(this.h.x<b.aa)for(z(this.speed),++this.l,a=0;3>a;++a)U(this,1,0,3.5+.5*a,b);break}this.target.x=3*-a;this.h.y=this.F+4*Math.sin(this.i);6<=(this.v+=b.s)&&(this.v-=6,this.W.next().R(this.h.x+12,this.h.y,0,0,0));break;case 3:const d=this.h.y;this.B-=1.5*a*b.s;this.h.x=this.B+32*Math.cos(-this.i);this.h.y=this.F+32*Math.sin(-this.i);d<this.F-12&&this.h.y>=this.F-12&&U(this,
1,0,3,b)}}ja(a){if(this.isActive()&&3==this.id){var b=C(this.h,new D(this.B,this.F));for(let d=0;5>=d;++d){const c=32*d/5;J(a,"g",0,this.h.x-4+b.x*c,this.h.y-4+b.y*c,24,64,8,8)}}}I(a){if(this.g)if(this.j)J(a,"r2",0,this.h.x-24,this.h.y-24,48*(this.D/16*4|0),0,48,48);else{if(1!=this.id){var b=pa[this.id];J(a,"ro",0,this.h.x+17*Math.cos(b+Math.PI/2)-8,this.h.y-17*Math.sin(b+Math.PI/2)-8,16*(4*this.K|0),0,16,16,8,8,b)}J(a,"e",0,this.h.x-12,this.h.y-12,24*this.id,0,24,24);this.A?(J(a,"g",0,this.h.x-11,
this.h.y-4,48-16*Number(0<this.o),64,16,8),8<this.o&&J(a,"r1",0,this.h.x-24,this.h.y-12,24*(4*(1-(this.o-20+12)/12)|0),24,24,24)):(b=1==this.id?Math.max(-3,Math.min(Math.round(this.speed.y),3)):0,1==this.id&&(b=Math.max(-3,Math.min(Math.round(this.speed.y),3))),J(a,"e",0,this.h.x-12,this.h.y-12+b,24*this.id,24,24,24))}}R(a,b,d,c,e=!1){this.h=new D(a,b);z(this.speed);z(this.target);this.F=b;this.u.x=2==d?.05:.15;this.id=d;this.j=!1;this.g=!0;this.ca=3!=d;this.A=e;this.G=30+90*Math.random();this.i=
this.v=this.o=0;switch(this.id){case 1:this.i=30;break;case 2:this.h.x+=16*c;this.h.y+=c*(96>b?1:-1)*24;this.F=this.h.y;break;case 3:this.i=Math.PI/2*c,this.B=a+32,z(this.speed),z(this.target)}this.l=0}fa(a,b){this.isActive()&&a.isActive()&&this.O(a)&&R(a,b)}ea(a,b){this.j=!0;this.D=0;y(b,"k0");b=Math.random()<.3-.1*a.$;a=Math.random()<.4*(1-a.T/a.oa);(b||a)&&this.S.next().R(this.h.x,this.h.y,1.5,-1,Number(b))}};const ta=[0,60,300,1800],ua=[[.5,.4,.05,0],[.25,.25,.25,.25]];
function va(a,b,d){a.l=Math.min(7200,a.l+d.s);a.i=a.l/7200;const c=Math.floor(3+2*a.i);for(let r=0;r<a.j.length;++r)if(0>=(a.j[r]-=b*d.s)){var e=1+(Math.random()*c|0);a.j[r]+=30*e+60*Math.random();var f=a,h=d,g=void 0,k=f.i,m=ua[0],n=ua[1],t=Math.random();let x=m[0],A=n[0];const I=Math.min(m.length,n.length);let da=(1-k)*x+k*A;for(g=0;g<I&&!(t<da);++g)g<I-1&&(x=m[g+1],A=n[g+1],da+=(1-k)*x+k*A);k=g;k==f.o&&(k=(k+1)%4);f.o=k;m=h.ga-24-(3==k?48:24);h=h.aa+16;m=1==k?m:Math.random()*m;3==k&&(e=4);n=Math.random()<
0*(1-f.i)+.5*f.i;for(g=0;g<e;++g)t=na(f.g),void 0===t&&(t=new sa(f.u,f.A,f.v),f.g.push(t)),t.R(h+(3!=k?32*g:0),m,k,g,n);for(f=0;f<a.j.length;++f)r!=f&&(a.j[f]+=15)}}
class wa{constructor(a,b,d){this.o=-1;this.i=this.l=0;this.u=a;this.A=b;this.v=d;this.g=[];this.j=Array.from(ta)}update(a,b,d){va(this,a,d);for(let c=0;c<this.g.length;++c){const e=this.g[c];e.update(a,d);if(e.isActive()){oa(this.u,f=>{var h=e;h.isActive()&&f.isActive()&&h.ia(d)&&f.na()&&h.O(f)&&(f.ea(d),h.ea(b.m,d),b.m.Y+=1/(8*(1+2*b.m.level)),f=b.m,f.o+=100*(1+f.Z)|0,f.A=(f.o-f.j)/10|0,b.m.Z+=.1)});for(let f=c+1;f<this.g.length;++f)ra(e,this.g[f],d);e.fa(b,d)}}}ja(a){for(let b of this.g)b.ja(a)}I(a){for(let b of this.g)b.I(a)}}
;class xa extends Q{constructor(){super(0,0,!1);this.i=this.id=0;this.na=()=>0==this.id;this.C=new N(0,6,6)}M(a){return 10<=(this.i+=a.s)}N(a){this.ea(a)}H(a,b){if(this.h.x-8>b.aa||0>this.h.x+8||-32>this.h.y+8)this.g=!1}I(a){this.g&&(this.j?J(a,"r1",0,this.h.x-12,this.h.y-12,24*(this.i/10*4|0),48+24*this.id,24,24):J(a,"pr",0,this.h.x-8,this.h.y-8,16*this.id,0,16,16))}R(a,b,d,c,e){this.h=new D(a,b);this.speed=new D(d,c);this.target=this.speed.g();this.id=e;this.j=!1;this.g=!0}ea(){this.j=!0;this.i=
0}fa(a,b){this.isActive()&&a.isActive()&&0!=this.id&&this.O(a)&&(R(a,b),this.ea(b))}};const ya=[.03125];class za extends Q{constructor(){super(0,0,!1);this.id=this.i=0}H(a,b){1<=(this.i+=ya[this.id]*b.s)&&(this.g=!1)}I(a){this.g&&J(a,"gp",0,this.h.x-8,this.h.y-8,16*Math.floor(4*this.i),16*this.id,16,16)}R(a,b,d,c,e){this.h=new D(a,b);this.speed=new D(d,c);this.target=this.speed.g();this.i=0;this.id=e;this.j=!1;this.g=!0}};class Aa extends Q{constructor(){super(0,0,!1);this.F=this.i=this.l=this.id=0;this.o=!1;this.C=new N(0,16,16);this.u.x=.05;this.u.y=.075;this.V=1.25;this.P=4}N(){this.speed.y=Math.min(-2.5,this.speed.y)}M(a){return 10<=(this.l+=a.s)}H(a,b){0>this.h.x+8&&(this.g=!1);this.i=(this.i+.015625*b.s)%1;1==this.id&&(this.h.y=this.F+4*Math.sin(this.i*Math.PI*2));this.o||(this.target.x=-1.5*a)}I(a){this.g&&(this.j?J(a,"r1",0,this.h.x-12,this.h.y-12,24*(this.l/10*4|0),96+24*this.id,24,24):1==this.id?(J(a,"g",
0,this.h.x-8,this.h.y-8,48,48,16,16),J(a,"fo",0,this.h.x-5,this.h.y-7,176,0,16,16)):J(a,"cl",0,this.h.x-8,this.h.y-8,16*(8*this.i|0),0,16,16))}R(a,b,d,c,e,f=!1){this.h=new D(a,b);this.speed=new D(d*(1-e),c*(1-e));if(this.o=f)this.target.x=d;this.target.y=3*(1-e);this.F=b;this.id=e;this.j=!1;this.g=!0}fa(a,b){this.isActive()&&a.isActive()&&this.O(a)&&(y(b,"c"+String(this.id)),0==this.id?(a=a.m,a.T=Math.min(5,a.T+2)):S(a.m,1),this.j=!0,this.l=0)}};function S(a,b){a.$=Math.min(3,a.$+b);a.g=1;a.v=0>b}
class Ba{constructor(){this.$=3;this.g=0;this.v=!1;this.L=this.u=this.l=this.Y=this.i=this.level=0;this.time=13E3;this.Z=this.A=this.o=this.j=this.frameCount=this.T=0;this.oa=5}update(a,b){a&&(0<this.T?this.T=Math.max(0,this.T-1/60*b.s):(this.time-=0==this.frameCount?16:17,0>=this.time&&(this.time=0)));this.frameCount=(this.frameCount+1)%3;4==this.level?this.Y=this.i=0:(this.i=O(this.i,this.Y,1/60*b.s),1<=this.i&&1<=this.Y&&(++this.level,this.l=30,--this.Y,--this.i,y(b,"l")));this.l=Math.max(0,this.l-
b.s);this.u=Math.max(0,this.u-b.s);this.j=O(this.j,this.o,this.A*b.s);this.L=Math.min(2,(13E3-this.time)/5E3|0);this.g=Math.max(0,this.g-=.05*b.s)}};const Ca=["#ffffff","#000000","#6d6d6d"],Da=[20,50,90,140,200],Ea=[192,48,192,192],Fa=[1,.5,.25,.33],V=(a,b,d,c,e)=>{for(let f=0;3>f;++f)a.fillRect(b+f,d+f,c-2*f,e-2*f,Ca[f])},W=a=>{a=String(a);return 7<a.length?a:"0".repeat(7-a.length)+a};
function ia(a,b){b.moveTo();if(2>a.O)b.clear("#000000"),K(b,"fw",0==a.O?"A GAME BY":"MADE FOR",b.width/2,b.height/2-10,-1,0,1),K(b,"fw",0==a.O?"JANI NYK@NEN":"JS13K 2024",b.width/2,b.height/2+2,-1,0,1),Ga(a,b);else{Ha(a,b);var d=a.l;const m=a.o[0]|0;var c=b.height-48;b.clear("#6db6ff");J(b,"s",0,b.width-96,16);X(b,b.J("c"),a.o[3]|0,48-d/4);var e=b.J("m"),f=a.o[2]|0,h=44-d/2;const n=(b.width/192|0)+2;for(let t=0;t<n;++t){const r=-f+192*t;if(r>=b.width)break;for(let x=0;2>x;++x)J(b,e,0,r+96*x,h+24*
x)}X(b,b.J("b"),a.o[1]|0,96-d/1.5);X(b,b.J("f"),m,c-36-d);e=m;d=c-3-d;c=(b.width/16|0)+2;for(f=0;f<c;++f)J(b,"g",0,16*f-e%16,d,0,0,16,8);if(a.ba){var g=b.width/2;b.clear("rgba(0,0,0,0.5)");K(b,"fw","*2024 JANI NYK@NEN",g,b.height-10,-1,0,1);var k=b.J("ts");d=g-k.width/2;for(c=0;c<k.width;++c)J(b,"ts",0,d+c,8+4*Math.sin(a.i*Math.PI*2+c/k.width*Math.PI*4),c,0,1);b.moveTo(g-72,b.height/2+12);V(b,0,0,144,40);K(b,"fo","   CONTROLS:\nARROW KEYS: MOVE\nSPACE: SHOOT",4,0,-8,-5);b.moveTo();0<a.j?(a=1-a.j/
30,b.setColor("#000000"),fa(b,a*a*256)):Ia(a,b)}else{b.moveTo(0,-a.l);Ha(a,b);Ja(a,b);P(a.g,b);d=a.M;for(k of d.g)P(k,b);k=a.v;for(g of k.g)P(g,b);F(b,.25);Ja(a,b,!1);F(b);a.A.I(b);a.M.ja(b);a.M.I(b);a.g.I(b);a.v.I(b);a.B.I(b);b.moveTo();if(a.g.isActive()){g=b.width/2;k=b.height;d=g-48;V(b,d,k-10-7.5,96,15);b.fillRect(d+2,k-16,92*a.m.i,11,"#6db6ff");0==Math.floor(a.m.l/4)%2&&K(b,"fo","LEVEL "+String(a.m.level+1),g,k-20,-8,0,1);g=a.m.time%1E3/10|0;k=a.m.time/1E3|0;(0<a.m.T||2>a.m.L||0==(a.G/8|0)%2)&&
K(b,"fo","#"+(10>k?"0":"")+String(k)+"."+((10>g?"0":"")+String(g)),b.width/2-5,-2,-7,0,1);0>=a.m.T||(g=b.width/2-20,V(b,g,14,40,6),b.fillRect(g+2,16,a.m.T/5*36,2,"#ffffff"));k=a.m.$-(0<a.m.g&&!a.m.v?1:0);for(g=0;3>g;++g)J(b,"h",0,2+16*g,2,g<k?0:16,0,16,16);if(0<a.m.g)for(g=a.m.v?1-a.m.g:a.m.g,k=16*k+10,d=0;4>d;++d)c=-1+2*(1-d%2),e=-1+2*(d/2|0),J(b,"h",0,k+4*c-4+Math.round(c*g*4),10+4*e-4+Math.round(e*g*4),8*(1-d%2),8*(d/2|0),8,8);K(b,"fo","SCORE:",b.width-13,-4,-8,0,2);K(b,"fo",W(a.m.j),b.width-44,
6,-7,0,1);0==(a.m.u/2|0)%2&&K(b,"fo","BONUS: $"+(1+a.m.Z).toFixed(1),b.width,b.height-18,-8,0,2);a.W&&(60>a.i&&0==(a.i/4|0)%2||K(b,"fo",a.D,b.width/2,b.height/2-8,-7,0,1));a.K&&(b.clear("rgba(0,0,0,0.5)"),K(b,"fo","PAUSED",b.width/2,b.height/2-4,-7,0,1))}else g=b.width/2,k=b.height/2,d=a.g.da()?a.g.o/60:1,b.clear("rgba(0,0,0,"+String(.5*d)+")"),b.moveTo(0,b.height/2*(1-d)),K(b,"fo","SCORE: "+W(a.m.j),g,k,-7,0,1),K(b,"fo","BEST:  "+W(a.V),g,k+12,-7,0,1),b.moveTo(),J(b,"go",0,g-96,-32+64*d),a.g.da()||
Ia(a,b);Ga(a,b)}}}function Ka(a){for(let b=0;3>b;++b)a.v.next().R(128+64*b,128+b%2*32,-.75,2,0,2>b)}function X(a,b,d,c){const e=b.width,f=(a.width/e|0)+2;for(let h=0;h<f;++h)J(a,b,0,h*e-d%e,c)}
function Ja(a,b,d=!0){var c=a.o[0];a=b.height-48;d&&b.fillRect(0,a+4,b.width,44,"#6db600");b.setColor("#dbff00");d=(b.width/24|0)+2;c=-(c%24);for(let m=0;m<d;++m){var e=24*m+c,f=b,h=e,g=a;e=(e-b.width/2)/b.width*2*b.width+b.width/2;var k=b.height;h=h+f.g.x|0;g=g+f.g.y|0;e=e+f.g.x|0;k=k+f.g.y|0;const n=Math.abs(e-h),t=h<e?1:-1,r=-Math.abs(k-g),x=g<k?1:-1;let A=n+r;for(;h!=e||g!=k;){f.i.fillRect(h,g,1,1);const I=2*A;I>=r&&(A+=r,h+=t);I<=n&&(A+=n,g+=x)}}for(d=0;5>d;++d)a+=5.5*(d+1),b.fillRect(0,a,b.width,
1)}function Ga(a,b){if(0<a.j){const d=a.j/30;b.clear("rgba(0,0,0,"+String(a.H?1-d:d)+")")}}function Ia(a,b){.5<a.i&&K(b,"fo","PRESS ANY KEY",b.width/2,b.height-36,-8,0,1)}function Ha(a,b){a.g.ma()&&b.move(-2+(5*Math.random()|0),-2+(5*Math.random()|0))}
class La{constructor(){this.l=-84;this.S=this.u=this.N=0;this.K=!1;this.G=this.P=0;this.i=.49;this.D="";this.V=0;this.j=30;this.H=!1;this.ba=!0;this.W=!1;this.X=this.O=0;this.o=Array(4).fill(0);this.m=new Ba;this.B=new T(xa);this.A=new T(za);this.v=new T(Aa);this.g=new ma(-64,this.B,this.A,this.m);this.M=new wa(this.B,this.A,this.v);a:{try{var a=Number(window.localStorage.getItem("__jn")??0);break a}catch(b){}a=0}this.V=a;Ka(this)}update(a){var b=1/60;if(2>this.O)0<this.j?0>=(this.j-=a.s)&&(this.H?
(this.j=30,this.H=!1,++this.O):this.X=45):0>=(this.X-=a.s)&&(this.j=30,this.H=!0);else if(this.ba)this.i=(this.i+1/60*a.s)%1,0<this.j?this.j-=.5*a.s:a.ha&&(this.ba=!1,this.i=0,y(a,"s1"));else if(0<this.j)0>=(this.j-=a.s)&&(this.H?(this.m=new Ba,this.g=new ma(-48,this.B,this.A,this.m),this.M=new wa(this.B,this.A,this.v),this.B.flush(),this.A.flush(),this.v.flush(),this.S=this.u=this.N=this.l=this.G=this.P=this.i=0,Ka(this),this.j+=30):y(a,"s0"),this.H=!1);else if(this.g.da()){var d=this.g.S();d?this.g.isActive()&&
3==q(a,"p")&&(y(a,"s0"),this.K=!this.K):(this.D="READY?",this.i=120);if(!this.K){d&&this.g.isActive()&&(4>this.P&&(this.G+=a.s)>=60*Da[this.P]&&(this.G=0,++this.P,this.D="SPEED UP!",this.i=120,y(a,"g1")),this.S=.75+.25*this.P);this.u=O(this.u,this.S,b*a.s);this.i=Math.max(0,this.i-a.s);this.g.update(this.u,a);!d&&this.g.S()&&(y(a,"g0"),this.D="GO!");this.A.update(this.u,this.g,a);this.B.update(this.u,this.g,a);this.v.update(this.u,this.g,a);this.M.update(this.u,this.g,a);this.W?(b=this.g.ba().y,b<
this.l+64?this.N=b-64:b>this.l+a.ga-64&&(this.N=b-a.ga+64),this.l=O(this.l,this.N,Math.abs(this.l-this.N)/8*a.s),this.l=Math.max(-32,Math.min(this.l,0))):0<=(this.l+=2*a.s)&&(this.l=0,this.W=!0,y(a,"s0"));for(var c in this.o)this.o[c]=(this.o[c]+Fa[c]*this.u*a.s)%Ea[c];c=this.m.L;this.m.update(this.g.isActive()&&d,a);this.m.L!=c&&(this.D="PANIC UP!",this.i=120,y(a,"g1"));this.g.ka()&&(this.S=0,0>=this.m.time&&(this.D="TIME UP!",this.i=30));if(!(this.g.da()||this.m.j<=this.V)){this.V=this.m.j;try{window.localStorage.setItem("__jn",
String(this.m.j))}catch(e){}}}}else this.i=(this.i+1/60*a.s)%1,a.ha&&(this.i=0,this.j=30,this.H=!0,y(a,"s1"))}};const Y=(a,b)=>{const d=document.createElement("canvas");d.width=a;d.height=b;return d},Ma=a=>{const b=[];for(let d=0;d<a.length;++d){const c=a[d].length/2|0;b.push(Array(c));for(let e=0;e<c;++e)b[d][e]=parseInt(a[d].substring(2*e,2*e+2),16)}return b},Na=(a,b,d,c,e,f)=>{for(let h=d;h<d+8;++h)for(let g=b;g<b+8;++g){const k=h*c+g,m=f[e[a.data[4*k]/85|0]]??[];for(let n=0;4>n;++n)a.data[4*k+n]=m[n]??255}},Z=(a,b)=>{var d=Oa;if(void 0!==a){var c=Y(a.width,a.height),e=c.getContext("2d");e.drawImage(a,0,
0);var f=e.getImageData(0,0,a.width,a.height),h=c.width/8|0,g=c.height/8|0;d=Ma(d);var k=0;for(let m=0;m<g;++m)for(let n=0;n<h;++n){if(k>=b.length)continue;const t=(b[k]??"0000").split("").map(r=>parseInt(r,32));Na(f,8*n,8*m,a.width,t,d);++k}e.putImageData(f,0,0);return c}},Pa=(a,b,d,c)=>{const e=Y(d,c);e.getContext("2d").drawImage(a,48,b,d,c,0,0,d,c);return e},Qa=(a,b,d,c,e,f)=>{const h=Y(d,c),g=h.getContext("2d");g.font=b;g.textAlign="center";a=a.split("\n");for(b=3;0<=b;--b){g.fillStyle=0==b?"#ffffff":
"#000000";let m=0;for(var k of a)g.fillText(k,d/2,b+(m+1)*e),++m}e=g.getImageData(0,0,d,c);for(k=0;k<d*c;++k)if(64>e.data[4*k+3])e.data[4*k+3]=0;else{a=128<e.data[4*k]?0:1;for(b=0;3>b;++b)e.data[4*k+b]=f[a][b];e.data[4*k+3]=255}g.putImageData(e,0,0);return h};const Oa="00000000 000000 ffffff 6d6d6d b6b6b6 6db600 dbff00 924900 b66d00 ffb66d 6d2400 246d00 dbb649 ffffdb b62400 ff6d00 ffb600 ffdb00 db9200 244900 492400 b649db db92ff 2492db 6ddbff dbffff".split(" "),Ra=["J056","J056","K089","K087","KA78","A0CD","A0CD","A0CD","0007","1034","K089","K087","A0CD","A0CD","A0GF","A0EF","J0B5","J0B5","J0B5","J0B5","J0B5","J0B5","A0EF","A0EF","J0B5","J0B5","J0B5","J0B5","J0B5","J0B5","10H2","00GD","10IH","10IH","1034","1034","1034","1024","10LM","1000","10IH","10IH",
"1034","1034","1034","1034","1084","1000",,,,"1056","1056","1002","10FG","10FE",,,,"1056","1056","10EG","10FE","10FE",,,"1000","1042","10EF","10EF","10EF","10EF","10I9","10I9","10I9","10I9",,,,,"10ID","10I7","10I7","10I7",,,,,];const Sa=a=>{a.clear("#000000");K(a,"_f","PRESS ANY KEY",a.width/2,a.height/2-4,-1,0,1)},Ta=a=>{p(a,"l",["ArrowLeft","KeyA"]);p(a,"r",["ArrowRight","KeyD"]);p(a,"u",["ArrowUp","KeyW"]);p(a,"d",["ArrowDown","KeyS"]);p(a,"s",["Space","KeyZ","ControlLeft"]);p(a,"p",["Escape","Enter"]);var b=a.J("_g");b=Z(b,Ra);u(a,"g",b);var d=a.J("_g"),c=new L(null,32,48);for(var e=0;6>e;++e)J(c,b,0,6*e,10,33,0,6,8);J(c,b,0,22,10,32,0,7,8);J(c,b,0,3,10,33,0,7,8);for(e=0;3>e;++e)2>e&&J(c,b,0,8*(e+1),0,16+8*e,0,8,16),
J(c,b,0,8,16+7*e,16,9,8,7),J(c,b,0,16,16+7*e,24,9,8,7);for(e=0;2>e;++e)J(c,b,0,12,10,8*e,8,8,8);u(a,"f",c.j());c=new L(null,48,64);J(c,b,0,0,0,0,16,48,16);c.fillRect(0,16,48,48,"#246d00");u(a,"b",c.j());c=new L(null,48,96);J(c,b,0,12,16,40,0,24,8);for(e=0;32>e;++e)10>e&&J(c,b,0,16,24+8*e,32,8,16,8),2>e&&J(c,b,0,40*e,0,48+8*e,8,8,16),J(c,b,0,8+e,0,55,8,1,16);for(e=0;3>e;++e)J(c,b,0,6+13*e,4+e%2*4,56,2==e?28:24,8,4);u(a,"m",c.j());c=["#4992db","#92dbff","#ffffff"];e=[0,2,4];var f=new L(null,192,96);
for(var h=0;h<e.length;++h){var g=e[h];f.setColor(c[h]);for(var k=0;192>k;++k){var m=(k%24-12)/14;m=1+16*(1-Math.sqrt(1-m*m)+1.5*(1+Math.sin(k/192*Math.PI*2)))+g;f.fillRect(k,m,1,96-m+1)}}u(a,"c",f.j());c=new L(null,64,64);c.setColor("#ffdb00");G(c,32,32,32);c.setColor("#ffff92");G(c,30,30,30);e=12;for(f=0;5>f;++f)2>f&&J(c,b,0,22+12*f-4,26,48,24,8,8),h=28-e,g=38+f-2,c.fillRect(h,g+1,2*e,1,"#ffdb00"),c.fillRect(h,g,2*e,1,"#000000"),e-=f+1;u(a,"s",c.j());c=new L(null,32,24);c.fillRect(1,14,27,6,"#ffffff");
J(c,b,0,0,8,16,32,32,16);J(c,b,0,9,0,0,32,16,16);u(a,"p",c.j());c=new L(null,64,16);for(e=0;4>e;++e)f=8+16*e,h=5-e,c.setColor("#b6b6b6"),G(c,f,8,h),c.setColor("#ffffff"),G(c,f-1,7,h-1);u(a,"gp",c.j());c=new L(null,32,16);for(e=0;2>e;++e)for(c.setColor(0==e?"#ffffff":"#ffb649"),f=0;4>f;++f)h=10-2*f,g=6-f,c.fillRect(16*e+9-g,g,h,14-h);e=Z(Pa(d,32,8,8),["10EF"]);J(c,b,0,4,4,48,32,8,8);J(c,e,0,20,4);u(a,"pr",c.j());c=Pa(d,48,16,16);e=Z(c,["1042","1043","1043","1043"]);c=new L(null,32,16);J(c,b,0,0,0,
48,48,16,16);J(c,e,0,16,0);for(e=0;2>e;++e)J(c,b,0,4+16*e,4,56,32+8*e,8,8);u(a,"h",c.j());c=new L(null,96,48);c.fillRect(0,0,96,24,"#555555");for(e=0;4>e;++e)f=24*e,J(c,d,0,f+2,2,0,48,20,20),2==e&&(J(c,d,0,f+3,17,9,68,4,4),J(c,d,0,f+9,17,0,68,9,4));for(e=0;4>e;++e)J(c,d,0,80,9+e,20,48,3==e?4:1,20,4,10,-Math.PI/2);d=new L(Z(c.j(),"10DH 10DH 10FH 10PO 10PO 10NO 1024 1024 1034 102M 102M 10LM 10DH 10DH 10FH 10PO 10PO 10NO 1024 1024 1034 102M 102M 10LM 10FH 10FH 10FH 10NO 10NO 10NO 1034 1034 1034 10LM 10LM 10LM".split(" ")));
for(c=0;4>c;++c)J(d,b,0,24*c+5,32,40,48,8,1==c?8:4);J(d,b,0,7,35,40,56,4,4);J(d,b,0,54,35,44,56,4,8);J(d,b,2,77,37,40,52,8,4);u(a,"e",d.j());d=[24,24,34,24];c=[48,56,56,56];e=[16,10,6,10];f=new L(null,64,16);for(h=0;4>h;++h)J(f,b,0,16*h+7,8,51,40,2,8),g=e[h],J(f,b,3==h?1:0,16*h+8-g/2,7,d[h],c[h],g,6);u(a,"ro",f.j());d="#ffdb00 #ffb6b6 #ffdbff #ff9292 #db9200 #ff6d00".split(" ");c=new L(null,96,144);e=new L(null,192,48);for(f=0;6>f;++f)for(h=24*f+12,c.setColor(d[f]),g=0;4>g;++g)k=.25*g,m=2>f?5:6,H(c,
24*g+12,h,(2*m-1)*k,(1+k)*m),0==f&&(e.setColor("#ffb649"),H(e,48*g+24,24,19*k,10*(1+k)),e.setColor("#ffffb6"),H(e,48*g+24-1,23,18*k,9*(1+k)));u(a,"r1",c.j());u(a,"r2",e.j());d=new L(null,256,32);d.setColor("#499200");for(c=0;8>c;++c)e=16-2*c,G(d,32*c+16,16,e,e/3);u(a,"sh",d.j());d=[0,16,28,16,0,16,28,16];c=[16,11,4,11,16,11,4,11];e=new L(null,256,16);for(f=0;8>f;++f){h=3<=f&&6>=f;g=Number(3==f||7==f);k=Number(h);m=c[f];const n=(16*f+8-m/2|0)+Number(1==f||7==f);e.fillRect(n+2,3,m-4,10,h?"#db9200":
"#ffffdb");J(e,b,g,n,0,d[f],72,m,16);(2>f||7==f)&&J(e,b,k,16*f+7+f%2*(7==f?2:-1),6,16,68,3-f%2,4)}u(a,"cl",e.j());d=a.J("_f");b=Z(d,Array(64).fill("0001"));d=Z(d,Array(64).fill("0002"));c=new L(null,256,64);for(e=0;4>e;++e)for(f=0;16>f;++f){h=16*f+4;g=16*e+6;for(k=-1;1>=k;++k)for(m=-1;1>=m;++m)J(c,b,0,h+k,g+m,8*f,8*e,8,8);J(c,d,0,h,g,8*f,8*e,8,8)}u(a,"fw",d);u(a,"fo",c.j());u(a,"go",Qa("GAME OVER!","bold 24px Arial",192,32,24,[[255,109,0],[182,36,0]]));u(a,"ts",Qa("THOSE\nFINAL\nSECONDS","bold 32px Arial",
160,96,28,[[255,219,0],[219,109,0]]));for(b=0;2>b;++b)w(a,"s"+String(b),[112+16*b,10,1,80+16*b,6+4*b,.2],.4,"square",0),w(a,"g"+String(b),[192+32*b,28-8*b,1,144+16*b,8,.2],.4,"square",0);w(a,"h",[144,4,1,112,3,.9,96,12,.6],.5,"square",2);for(b=0;2>b;++b)w(a,"c"+String(b),[160,4,.6,100,2,1,256,16,.8],.5+.6*b,["square","triangle"][b],0),w(a,"b"+String(b),[96,2+2*b,1,144,4+8*b,.5],.6,"square",2),w(a,"k"+String(b),[128-16*b,2,.8,160,3+5*b,1,96+128*b,8-4*b,.8],.7,"sawtooth",1);w(a,"d",[112,6,.8,192,12,
1,144,32,.5],.7,"square",2);w(a,"l",[96,8,.6,192,12,1,256,16,.2],.6,"square",2);y(a,"s1")};window.onload=()=>{var a=new ja;a.u=new La.prototype.constructor(a.g);var b=a.g;v(b,"_f","f.png");v(b,"_g","g.png");M(a,0,Sa,Ta)};
