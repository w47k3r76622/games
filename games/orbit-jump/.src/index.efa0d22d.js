let t,s,i={};function h(t,...s){(i[t]||[]).map((t=>t(...s)))}function e(){return t}function r(){return s}function o(i){if(t=document.getElementById(i)||i||document.querySelector("canvas"),!t)throw Error("You must provide a canvas element for the game");return s=t.getContext("2d"),s.imageSmoothingEnabled=!1,h("init"),{canvas:t,context:s}}class n{constructor({t:t,frames:s,i:i,loop:h=!0}){this.t=t,this.frames=s,this.i=i,this.loop=h;let{width:e,height:r,margin:o=0}=t.frame;this.width=e,this.height=r,this.margin=o,this.h=0,this.o=0}clone(){return new n(this)}reset(){this.h=0,this.o=0}update(t=1/60){if(this.loop||this.h!=this.frames.length-1)for(this.o+=t;this.o*this.i>=1;)this.h=++this.h%this.frames.length,this.o-=1/this.i}l({x:t,y:s,width:i=this.width,height:h=this.height,context:e=r()}){let o=this.frames[this.h]/this.t.h|0,n=this.frames[this.h]%this.t.h|0;e.drawImage(this.t._,n*this.width+(2*n+1)*this.margin,o*this.height+(2*o+1)*this.margin,this.width,this.height,t,s,i,h)}}function a(){return new n(...arguments)}a.prototype=n.prototype,a.u=n;new WeakMap;function l(t,s){let i=Math.sin(s),h=Math.cos(s);return{x:t.x*h-t.y*i,y:t.x*i+t.y*h}}function _(t,s,i){return Math.min(Math.max(t,i),s)}function c(t,s){return t.rotation||s.rotation?null:([t,s]=[t,s].map((t=>u(t))),t.x<s.x+s.width&&t.x+t.width>s.x&&t.y<s.y+s.height&&t.y+t.height>s.y)}function u(t){let{x:s=0,y:i=0,width:h,height:e}=t.p||t;return t.g&&(h=t.g,e=t.m),t.anchor&&(s-=h*t.anchor.x,i-=e*t.anchor.y),h<0&&(s+=h,h*=-1),e<0&&(i+=e,e*=-1),{x:s,y:i,width:h,height:e}}class d{constructor(t=0,s=0,i={}){this.x=t,this.y=s,i.v&&(this.M(i.o,i.S,i.F,i.A),this.x=t,this.y=s)}add(t){return new d(this.x+t.x,this.y+t.y,this)}C(t){return new d(this.x-t.x,this.y-t.y,this)}scale(t){return new d(this.x*t,this.y*t)}normalize(t=this.length()){return new d(this.x/t,this.y/t)}D(t){return this.x*t.x+this.y*t.y}length(){return Math.hypot(this.x,this.y)}j(t){return Math.hypot(this.x-t.x,this.y-t.y)}angle(t){return Math.acos(this.D(t)/(this.length()*t.length()))}M(t,s,i,h){this.v=!0,this.o=t,this.S=s,this.F=i,this.A=h}get x(){return this.k}get y(){return this.B}set x(t){this.k=this.v?_(this.o,this.F,t):t}set y(t){this.B=this.v?_(this.S,this.A,t):t}}function p(){return new d(...arguments)}p.prototype=d.prototype,p.u=d;const f=()=>{};function y(t,s){let i=s.parentNode;if(t.setAttribute("data-kontra",""),i){let h=i.querySelector("[data-kontra]:last-of-type")||s;i.insertBefore(t,h.nextSibling)}else document.body.appendChild(t)}class x extends class{constructor(t){return this.init(t)}init(t={}){this.position=p(),this.W=p(),this.acceleration=p(),this.Y=1/0,Object.assign(this,t)}update(t){this.advance(t)}advance(t){let s=this.acceleration;t&&(s=s.scale(t)),this.W=this.W.add(s);let i=this.W;t&&(i=i.scale(t)),this.position=this.position.add(i),this.R(),this.Y--}get dx(){return this.W.x}get dy(){return this.W.y}set dx(t){this.W.x=t}set dy(t){this.W.y=t}get L(){return this.acceleration.x}get O(){return this.acceleration.y}set L(t){this.acceleration.x=t}set O(t){this.acceleration.y=t}H(){return this.Y>0}R(){}}{init({width:t=0,height:s=0,context:i=r(),l:h=this.X,update:e=this.advance,children:o=[],anchor:n={x:0,y:0},I:a=0,$:l=0,opacity:_=1,rotation:c=0,G:u=1,U:d=1,...p}={}){this.children=[],super.init({width:t,height:s,context:i,anchor:n,I:a,$:l,opacity:_,rotation:c,G:u,U:d,...p}),this.P=!0,this.T(),o.map((t=>this.q(t))),this.V=h,this.K=e}update(t){this.K(t),this.children.map((s=>s.update&&s.update(t)))}l(t){let s=this.context;s.save(),(this.x||this.y)&&s.translate(this.x,this.y),this.rotation&&s.rotate(this.rotation),(this.I||this.$)&&s.translate(-this.I,-this.$),1==this.G&&1==this.U||s.scale(this.G,this.U);let i=-this.width*this.anchor.x,h=-this.height*this.anchor.y;(i||h)&&s.translate(i,h),this.context.globalAlpha=this.opacity,this.V(),(i||h)&&s.translate(-i,-h);let e=this.children;t&&(e=e.filter(t)),e.map((t=>t.l&&t.l())),s.restore()}X(){}R(t,s){this.T(),this.children.map((t=>t.R()))}get x(){return this.position.x}get y(){return this.position.y}set x(t){this.position.x=t,this.R()}set y(t){this.position.y=t,this.R()}get width(){return this.N}set width(t){this.N=t,this.R()}get height(){return this.J}set height(t){this.J=t,this.R()}T(){if(!this.P)return;let{Z:t=0,tt:s=0,st:i=1,it:h=0,ht:e=1,et:r=1}=this.parent||{};this.Z=this.x,this.tt=this.y,this.rt=this.width,this.ot=this.height,this.st=i*this.opacity,this.it=h+this.rotation;let{x:o,y:n}=l({x:this.x,y:this.y},h);this.Z=o,this.tt=n,this.ht=e*this.G,this.et=r*this.U,this.Z=this.x*e,this.tt=this.y*r,this.rt=this.width*this.ht,this.ot=this.height*this.et,this.Z+=t,this.tt+=s}get p(){return{x:this.Z,y:this.tt,width:this.rt,height:this.ot,opacity:this.st,rotation:this.it,G:this.ht,U:this.et}}q(t,{absolute:s=!1}={}){this.children.push(t),t.parent=this,t.R=t.R||f,t.R()}removeChild(t){let s=this.children.indexOf(t);-1!==s&&(this.children.splice(s,1),t.parent=null,t.R())}get opacity(){return this.nt}set opacity(t){this.nt=t,this.R()}get rotation(){return this.at}set rotation(t){this.at=t,this.R()}setScale(t,s=t){this.G=t,this.U=s}get G(){return this.lt}set G(t){this.lt=t,this.R()}get U(){return this._t}set U(t){this._t=t,this.R()}}function w(){return new x(...arguments)}w.prototype=x.prototype,w.u=x;class g extends w.u{init({_:t,width:s=(t?t.width:void 0),height:i=(t?t.height:void 0),...h}={}){super.init({_:t,width:s,height:i,...h})}get ct(){return this.o}set ct(t){let s,i;for(s in this.o={},t)this.o[s]=t[s].clone(),i=i||this.o[s];this.ut=i,this.width=this.width||i.width,this.height=this.height||i.height}dt(t){this.ut=this.ct[t],this.ut.loop||this.ut.reset()}advance(t){super.advance(t),this.ut&&this.ut.update(t)}X(){this._&&this.context.drawImage(this._,0,0,this._.width,this._.height),this.ut&&this.ut.l({x:0,y:0,width:this.width,height:this.height,context:this.context}),this.color&&(this.context.fillStyle=this.color,this.context.fillRect(0,0,this.width,this.height))}}function m(){return new g(...arguments)}m.prototype=g.prototype,m.u=g;let b=/(\d+)(\w+)/;class v extends w.u{init({text:t="",textAlign:s="",lineHeight:i=1,font:h=r().font,...e}={}){t=""+t,super.init({text:t,textAlign:s,lineHeight:i,font:h,...e}),this.ft()}get width(){return this.N}set width(t){this.F=!0,this.N=t,this.yt=t}get text(){return this.xt}set text(t){this.F=!0,this.xt=t}get font(){return this.h}set font(t){this.F=!0,this.h=t,this.wt=function(t){let s=t.match(b),i=+s[1];return{size:i,unit:s[2],gt:i}}(t).gt}get lineHeight(){return this.bt}set lineHeight(t){this.F=!0,this.bt=t}l(){this.F&&this.ft(),super.l()}ft(){this.vt=[],this.F=!1;let t=this.context;if(t.font=this.font,!this.vt.length&&this.yt){let s=this.text.split(" "),i=0,h=2;for(;h<=s.length;h++){let e=s.slice(i,h).join(" ");t.measureText(e).width>this.yt&&(this.vt.push(s.slice(i,h-1).join(" ")),i=h-1)}this.vt.push(s.slice(i,h).join(" "))}if(!this.vt.length&&this.text.includes("\n")){let s=0;this.text.split("\n").map((i=>{this.vt.push(i),s=Math.max(s,t.measureText(i).width)})),this.N=this.yt||s}this.vt.length||(this.vt.push(this.text),this.N=this.yt||t.measureText(this.text).width),this.height=this.wt+(this.vt.length-1)*this.wt*this.lineHeight,this.T()}X(){let t=0,s=this.textAlign,i=this.context;s=this.textAlign||("rtl"===i.canvas.dir?"right":"left"),t="right"===s?this.width:"center"===s?this.width/2|0:0,this.vt.map(((h,e)=>{i.textBaseline="top",i.textAlign=s,i.fillStyle=this.color,i.font=this.font,i.fillText(h,t,this.wt*this.lineHeight*e)}))}}function M(){return new v(...arguments)}M.prototype=v.prototype,M.u=v;let S=new WeakMap;function F(...t){t.map((t=>{let s=t.context?t.context.canvas:e(),i=S.get(s);if(!i)throw new ReferenceError("Pointer events not initialized for the objects canvas");t.Mt||(t.Mt=t.l,t.l=function(){i.St.push(this),this.Mt()},i.Ft.push(t))}))}class A extends m.u{init({At:t=0,Ct:s=0,text:i,Dt:h,jt:e,...r}={}){super.init({At:t,Ct:s,...r}),this.kt=M({...i,context:this.context}),this.width||(this.width=this.kt.width,this.height=this.kt.height),F(this),this.q(this.kt),this.Et=h||f,this.Bt=e||f;const o=this.Wt=document.createElement("button");o.style="position:absolute;left:-9999px",o.textContent=this.text,o.addEventListener("focus",(()=>this.focus())),o.addEventListener("blur",(()=>this.blur())),o.addEventListener("keydown",(t=>this.Yt(t))),o.addEventListener("keyup",(t=>this.Rt(t))),y(o,this.context.canvas),this.T(),this.ft()}get text(){return this.kt.text}set text(t){this.F=!0,this.kt.text=t}Lt(){this.Wt.remove()}ft(){this.text!==this.Wt.textContent&&(this.Wt.textContent=this.text),this.kt.ft();let t=this.kt.width+2*this.At,s=this.kt.height+2*this.Ct;this.width=Math.max(t,this.width),this.height=Math.max(s,this.height),this.T()}l(){this.F&&this.ft(),super.l()}enable(){this.disabled=this.Wt.disabled=!1,this.Ot()}disable(){this.disabled=this.Wt.disabled=!0,this.Ht()}focus(){this.disabled||(this.Xt=!0,document.activeElement!=this.Wt&&this.Wt.focus(),this.It())}blur(){this.Xt=!1,document.activeElement==this.Wt&&this.Wt.blur(),this.$t()}zt(){this.disabled||(this.Gt=!0)}Ut(){this.Gt=!1}Ot(){}Ht(){}It(){}$t(){}Dt(){this.disabled||(this.pressed=!0,this.Et())}jt(){this.disabled||(this.pressed=!1,this.Bt())}Yt(t){"Enter"!=t.code&&"Space"!=t.code||this.Dt()}Rt(t){"Enter"!=t.code&&"Space"!=t.code||this.jt()}}function C(){return new A(...arguments)}function D(t){let s=t.canvas;t.clearRect(0,0,s.width,s.height)}function j({Pt:t=60,Tt:s=!0,update:i=f,l:e,context:o=r()}={}){if(!e)throw Error("You must provide a render() function");let n,a,l,_,c,u=0,d=1e3/t,p=1/t,y=s?D:f;function x(){if(a=requestAnimationFrame(x),l=performance.now(),_=l-n,n=l,!(_>1e3)){for(h("tick"),u+=_;u>=d;)c.update(p),u-=d;y(o),c.l()}}return c={update:i,l:e,qt:!0,start(){n=performance.now(),this.qt=!1,requestAnimationFrame(x)},stop(){this.qt=!0,cancelAnimationFrame(a)},Vt:x,set Kt(t){n=t}},c}C.prototype=A.prototype,C.u=A;let k={set:(t,s,i)=>(s.startsWith("_")||(t.F=!0),Reflect.set(t,s,i))},E={start:t=>t?1:0,Nt:()=>.5,end:t=>t?0:1};class B extends w.u{init({Jt:t="column",align:s="start",Qt:i="start",Zt:h=0,rowGap:e=0,ts:r=1,dir:o="",ss:n=[],...a}={}){return super.init({Jt:t,align:s,Qt:i,Zt:h,rowGap:e,ts:r,dir:o,ss:n,...a}),this.ft(),new Proxy(this,k)}q(t){this.F=!0,super.q(t)}removeChild(t){this.F=!0,super.removeChild(t)}l(){this.F&&this.ft(),super.l()}Lt(){this.children.map((t=>t.Lt&&t.Lt()))}ft(){this.F=!1,this.ss.map((t=>{t.hs.call(this)&&this.S!==t&&(this.S=t,t.es.call(this))}));let t=this.rs=[],s=this.os=[],i=this.ns=[],h=this.children,e=this.ls="column"===this.Jt?1:"row"===this.Jt?h.length:this.ts,r=0,o=0;for(let n,a=0;n=h[a];a++){t[r]=t[r]||[],n.ft&&n.ft(),i[r]=Math.max(i[r]||0,n.height);let h=n.colSpan||1,a=h;do{s[o]=Math.max(s[o]||0,n.width/a),t[r][o]=n}while(a+o++<=e&&--h);o>=e&&(o=0,r++)}for(;o>0&&o<e;)t[r][o++]=!1;let n=t.length,a=[].concat(this.Zt),l=[].concat(this.rowGap);this.N=s.reduce(((t,s)=>t+s),0);for(let t=0;t<e-1;t++)this.N+=a[t%a.length];this.J=i.reduce(((t,s)=>t+s),0);for(let t=0;t<n-1;t++)this.J+=l[t%l.length];this.T();let _="rtl"===this.context.canvas.dir&&!this.dir||"rtl"===this.dir;this._s=_,_&&(this.rs=t.map((t=>t.reverse())),this.os=s.reverse());let c=-this.anchor.y*this.height,u=[];this.rs.map(((t,h)=>{let e=-this.anchor.x*this.width;t.map(((t,r)=>{if(t&&!u.includes(t)){u.push(t);let o=E[t.justifySelf||this.Qt](this._s),n=E[t.alignSelf||this.align](),l=t.colSpan||1,_=s[r];if(l>1&&r+l<=this.ls)for(let t=1;t<l;t++)_+=s[r+t]+a[(r+t)%a.length];let d=_*o,p=i[h]*n,f=0,y=0,{width:x,height:w}=t;if(t.anchor&&(f=t.anchor.x,y=t.anchor.y),0===o)d+=x*f;else if(.5===o){d+=(f<.5?-1:.5===f?0:1)*x*o}else d-=x*(1-f);if(0===n)p+=w*y;else if(.5===n){p+=(y<.5?-1:.5===y?0:1)*w*n}else p-=w*(1-y);t.x=e+d,t.y=c+p}e+=s[r]+a[r%a.length]})),c+=i[h]+l[h%l.length]}))}}function W(){return new B(...arguments)}W.prototype=B.prototype,W.u=B;let Y={},R={},L={},O={cs:"enter",us:"esc",ds:"space",ps:"left",fs:"up",ys:"right",xs:"down"};function H(t){let s=O[t.code];L[s]=!0,Y[s]&&Y[s](t)}function X(t){let s=O[t.code];L[s]=!1,R[s]&&R[s](t)}function I(){L={}}function $(){let t;for(t=0;t<26;t++)O[t+65]=O["Key"+String.fromCharCode(t+65)]=String.fromCharCode(t+97);for(t=0;t<10;t++)O[48+t]=O["Digit"+t]=""+t;window.addEventListener("keydown",H),window.addEventListener("keyup",X),window.addEventListener("blur",I)}function z(t){return!!L[t]}class G{constructor({create:t,ws:s=1024}={}){let i;if(!t||!(i=t())||!(i.update&&i.init&&i.H&&i.l))throw Error("Must provide create() function which returns an object with init(), update(), render(), and isAlive() functions");this.v=t,this.gs=[t()],this.size=0,this.ws=s}get(t={}){if(this.size===this.gs.length){if(this.size===this.ws)return;for(let t=0;t<this.size&&this.gs.length<this.ws;t++)this.gs.push(this.v())}let s=this.gs[this.size];return this.size++,s.init(t),s}bs(){return this.gs.slice(0,this.size)}clear(){this.size=this.gs.length=0,this.gs.push(this.v())}update(t){let s,i=!1;for(let h=this.size;h--;)s=this.gs[h],s.update(t),s.H()||(i=!0,this.size--);i&&this.gs.sort(((t,s)=>s.H()-t.H()))}l(){for(let t=this.size;t--;)this.gs[t].l()}}function U(){return new G(...arguments)}function P(t,s){let i=[],h=s.x+s.width/2,e=s.y+s.height/2,{x:r,y:o,width:n,height:a}=u(t),l=t.y<e,_=t.y+t.height>=e;return t.x<h&&(l&&i.push(0),_&&i.push(2)),t.x+t.width>=h&&(l&&i.push(1),_&&i.push(3)),i}U.prototype=G.prototype,U.u=G;class T{constructor({vs:t=3,Ms:s=25,bounds:i}={}){this.vs=t,this.Ms=s;let h=e();this.bounds=i||{x:0,y:0,width:h.width,height:h.height},this.S=!1,this.F=0,this.Ft=[],this.vt=[],this.ft=null}clear(){this.vt.map((function(t){t.clear()})),this.S=!1,this.Ft.length=0}get(t){let s=new Set;for(;this.vt.length&&this.S;)return P(t,this.bounds).map((i=>{this.vt[i].get(t).map((t=>s.add(t)))})),Array.from(s);return this.Ft.filter((s=>s!==t))}add(...t){t.map((t=>{Array.isArray(t)?this.add.apply(this,t):this.S?this.o(t):(this.Ft.push(t),this.Ft.length>this.Ms&&this.F<this.vs&&(this.Ss(),this.Ft.map((t=>this.o(t))),this.Ft.length=0))}))}o(t){P(t,this.bounds).map((s=>{this.vt[s].add(t)}))}Ss(t,s,i){if(this.S=!0,!this.vt.length)for(t=this.bounds.width/2|0,s=this.bounds.height/2|0,i=0;i<4;i++)this.vt[i]=new T({bounds:{x:this.bounds.x+(i%2==1?t:0),y:this.bounds.y+(i>=2?s:0),width:t,height:s},vs:this.vs,Ms:this.Ms}),this.vt[i].F=this.F+1,this.vt[i].ft=this}}function q(){return new T(...arguments)}function V(t){let s=[];return t.Wt?s.push(t.Wt):t.children&&t.children.map((t=>{s=s.concat(V(t))})),s}q.prototype=T.prototype,q.u=T;class K extends w.u{init({id:t,name:s=t,Fs:i=!0,As:h=c,...e}){const r=this.Wt=document.createElement("section");r.tabIndex=-1,r.style="position:absolute;left:-9999px",r.id=t,r.setAttribute("aria-label",s),super.init({id:t,name:s,Fs:i,As:h,...e}),y(r,this.context.canvas);let o=this.context.canvas;this.Cs=w({x:o.width/2,y:o.height/2,width:o.width,height:o.height,anchor:{x:.5,y:.5}}),this.Cs.R=()=>{super.R.call(this.Cs);this.context.canvas;this.Cs.Z=this.Cs.x*this.G,this.Cs.tt=this.Cs.y*this.U}}show(){this.hidden=this.Wt.hidden=!1;let t=this.children.find((t=>t.focus));t?t.focus():this.Wt.focus(),this.Ds()}hide(){this.hidden=this.Wt.hidden=!0,this.js()}q(t,s){super.q(t,s),V(t).map((t=>{this.Wt.appendChild(t)}))}removeChild(t){super.removeChild(t),V(t).map((t=>{y(t,this.context.canvas)}))}Lt(){this.Wt.remove(),this.children.map((t=>t.Lt&&t.Lt()))}update(t){this.hidden||super.update(t)}ks(t){let s=(t=t.p||t).x,i=t.y;t.G&&(s/=t.G,i/=t.U),this.Cs.x=s,this.Cs.y=i,this.R()}R(){super.R(),this.Cs&&this.Cs.R()}l(){let{x:t,y:s,width:i,height:h}=this.Cs;this.I=t*this.G-i/2,this.$=s*this.U-h/2,this.hidden||super.l((t=>!this.Fs||this.As(t,this.Cs)))}Ds(){}js(){}}function N(){return new K(...arguments)}function J(t){if(+t===t)return t;let s=[],i=t.split(".."),h=+i[0],e=+i[1],r=h;if(h<e)for(;r<=e;r++)s.push(r);else for(;r>=e;r--)s.push(r);return s}N.prototype=K.prototype,N.u=K;class Q{constructor({_:t,Es:s,Bs:i,Ws:h,ct:e}={}){if(!t)throw Error("You must provide an Image for the SpriteSheet");this.ct={},this._=t,this.frame={width:s,height:i,margin:h},this.h=t.width/s|0,this.Ys(e)}Ys(t){let s,i;for(i in t){let{frames:h,i:e,loop:r}=t[i];if(s=[],void 0===h)throw Error("Animation "+i+" must provide a frames property");[].concat(h).map((t=>{s=s.concat(J(t))})),this.ct[i]=a({t:this,frames:s,i:e,loop:r})}}}function Z(){return new Q(...arguments)}Z.prototype=Q.prototype,Z.u=Q;var tt={Rs:{Ls:null,Os:null},Hs:{Xs:{Is:!0,$s:!1,zs:[]},Gs:{Is:!0,$s:!1,zs:[]},Us:{Is:!0,$s:!1,zs:[]},Ps:{Is:!0,$s:!1,zs:[]},Ts:{Is:!0,$s:!0,zs:[]},qs:{Is:!0,$s:!1,zs:[]}},Vs:30,Xs:0,Ks:null,Ns:!0};let st=Math.PI,it=Math.sin,ht=Math.cos,et=Math.atan2,rt=Math.pow,ot=Math.sign;class nt extends m.u{constructor(t){super({x:t.x,y:t.y,width:22,height:22,color:"#d44646",anchor:{x:.5,y:.5}}),this.Js=13,this.Vs=t.Vs,[m({x:0,y:-11,width:22,height:2,color:"rgba(255, 255, 255, 0.3)",anchor:{x:.5,y:0}}),m({x:0,y:9,width:22,height:2,color:"rgba(255, 255, 255, 0.3)",anchor:{x:.5,y:0}}),m({x:0,y:0,width:22,height:2,color:"rgba(255, 255, 255, 0.3)",anchor:{x:.5,y:.5}}),M({text:"fuel",font:"12px Verdana",color:"#FFF",x:2,y:3})].forEach((t=>{this.q(t)}))}}class at extends m.u{constructor(t){super({x:t.x,y:t.y,width:2*t.Js,height:2*t.Js,anchor:{x:.5,y:.5}}),this.Qs=t.Qs,this.Js=t.Js,this.Zs=t.Zs,this.ti=t.ti,this.si=t.si,this.ii=0,[[-18,12,25],[20,2,30],[-10,-10,50]].forEach((t=>{this.q(M({x:t[0],y:t[1],text:"●",font:`${t[2]}px Arial`,color:"rgba(0, 0, 0, 0.2)",anchor:{x:.5,y:.5}}))}))}l(){this.ii+=1/60,this.rotation+=this.ti*st/180;let t=tt.Rs.Os;for(let s=0;s<2;s++)t.fillStyle=`rgba(${wt(this.Qs)}, 0.2)`,t.beginPath(),t.arc(this.x,this.y,this.Js+this.Zs-s*this.Zs/2-10*rt(it(this.ii),2),0,2*st),t.fill(),t.closePath();t.fillStyle=this.Qs,t.beginPath(),t.arc(this.x,this.y,this.Js,0,2*st),t.fill(),t.closePath(),super.l()}}class lt extends m.u{constructor(t){super({x:t.x,y:t.y,width:2*t.Js,height:2*t.Js,anchor:{x:.5,y:.5}}),this.Qs=t.Qs,this.Js=t.Js,this.hi=t.hi,this.ei=t.ei,this.ri=t.ri,this.ii=0}l(){super.l(),this.ii+=1/60;let t=tt.Rs.Os;for(let s=0;s<this.hi;s++){let i=2*st/this.hi*s,h=ht(i+this.ii),e=it(i+this.ii),r=ht(i+this.ii+1),o=it(i+this.ii+1);t.lineCap="round",t.strokeStyle=this.Qs,t.lineWidth=this.ri,t.beginPath(),t.moveTo(this.x+h*this.Js,this.y+e*this.Js),t.quadraticCurveTo(this.x+r*(this.ei/3+this.Js),this.y+o*(this.ei/3+this.Js),this.x+h*(this.ei+this.Js),this.y+e*(this.ei+this.Js)),t.stroke(),t.closePath()}t.fillStyle=this.Qs,t.beginPath(),t.arc(this.x,this.y,this.Js,0,2*st),t.fill(),t.closePath();let s=t.createRadialGradient(this.p.x,this.p.y,0,this.p.x,this.p.y,this.Js-5);s.addColorStop(0,"#000"),s.addColorStop(.5+.2*rt(it(this.ii),2),"#000"),s.addColorStop(.51+.2*rt(it(this.ii),2),"rgba(255, 255, 255, 0.7)"),s.addColorStop(1,"rgba(255, 255, 255, 0.7)"),t.fillStyle=s,t.beginPath(),t.arc(this.x,this.y,this.Js-5,0,2*st),t.fill(),t.closePath()}}var _t={oi:[1,.1,6,.15,.03,0,,2,1,-91,-150,.11,.04,,182,,,.9,.04,.18],ni:[1,,238,,,.35,4,2.85,,,,,,.4,,.4,,.93,.08],Vs:[1,,330,.01,.4,.33,,.43,9.7,,-1,.02,.18,,,.1,,.98,,.41],ai:[1,,472,.01,.49,.49,1,1.95,.5,-2.7,-134,.06,.02,,,,,.69,.09,.12]};function ct(...t){return ut.play(...t)}const ut={volume:.3,sampleRate:44100,x:new(window.AudioContext||webkitAudioContext),play:function(...t){return this.li(this._i(...t))},li:function(...t){const s=this.x.createBuffer(t.length,t[0].length,this.sampleRate),i=this.x.createBufferSource();return t.map(((t,i)=>s.getChannelData(i).set(t))),i.buffer=s,i.connect(this.x.destination),i.start(),i},_i:function(t=1,s=.05,i=220,h=0,e=0,r=.1,o=0,n=1,a=0,l=0,_=0,c=0,u=0,d=0,p=0,f=0,y=0,x=1,w=0,g=0){const m=2*Math.PI;let b,v,M=this.sampleRate,S=a*=500*m/M/M,F=i*=(1+2*s*Math.random()-s)*m/M,A=[],C=0,D=0,j=0,k=1,E=0,B=0,W=0;for(l*=500*m/M**3,p*=m/M,_*=m/M,c*=M,u=u*M|0,v=(h=h*M+9)+(w*=M)+(e*=M)+(r*=M)+(y*=M)|0;j<v;A[j++]=W)++B%(100*f|0)||(W=o?o>1?o>2?o>3?Math.sin((C%m)**3):Math.max(Math.min(Math.tan(C),1),-1):1-(2*C/m%2+2)%2:1-4*Math.abs(Math.round(C/m)-C/m):Math.sin(C),W=(u?1-g+g*Math.sin(m*j/u):1)*(W>0?1:-1)*Math.abs(W)**n*t*this.volume*(j<h?j/h:j<h+w?1-(j-h)/w*(1-x):j<h+w+e?x:j<v-y?(v-j-y)/r*x:0),W=y?W/2+(y>j?0:(j<v-y?1:(v-j)/y)*A[j-y|0]/2):W),b=(i+=a+=l)*Math.cos(p*D++),C+=b-b*d*(1-1e9*(Math.sin(j)+1)%2),k&&++k>c&&(i+=_,F+=_,k=0),!u||++E%u||(i=F,a=S,k=k||1);return A},ci:function(t=0,s=440){return s*2**(t/12)}};class dt extends m.u{constructor(t){super({x:t.x,y:t.y,anchor:{x:.5,y:.5},width:18,height:18,color:"#FFF",rotation:t.ui||0}),this.Js=7,this.di=!1,this.si=.1,this.pi=p(0,0),[{x:3,y:0,anchor:{x:.5,y:.5},width:8,height:10,color:"#98DEFF"},{x:-10,y:-8,anchor:{x:.5,y:.5},width:16,height:8,color:"#CCC"},{x:-10,y:8,anchor:{x:.5,y:.5},width:16,height:8,color:"#CCC"},{x:-18,y:-8,anchor:{x:1,y:.5},width:0,height:6,color:"#FF9898"},{x:-18,y:8,anchor:{x:1,y:.5},width:0,height:6,color:"#FF9898"}].forEach((t=>{this.q(m(t))}))}update(){if(this.di){let t=p(this.p.x,this.p.y),s=et(this.p.y-this.pi.y,this.p.x-this.pi.x)+this.si,i=p(ht(s),it(s)).scale(this.pi.j(t)).add(this.pi).C(t).scale(.1);this.dx=i.x,this.dy=i.y}let t=(z("d")?1:0)-(z("a")?1:0);t=tt.Vs>0?3*t*st/180:0,this.rotation+=t,tt.Vs-=ot(t)*ot(t)*.1,0!==t&&ct(..._t.oi);let s=z("w")&&tt.Vs>0?1:0;this.dx=s?2*ht(this.rotation)*s:gt(this.dx,0,.04),this.dy=s?2*it(this.rotation)*s:gt(this.dy,0,.04),tt.Vs-=.5*s,[3,4].forEach((t=>{this.children[t].width=6*s})),s&&0===t&&ct(..._t.oi),tt.Hs.qs.zs[0].children[3].width=tt.Vs/100*220,super.update()}}class pt extends m.u{constructor(){super({})}l(){let t=tt.Rs.Os;t.lineCap="round",t.lineWidth=8,t.strokeStyle="#ff9898",yt[tt.Xs].fi.forEach(((s,i,h)=>{let[e,r]=h.length-1!==i?h[i+1]:h[0],[o,n]=s;t.beginPath(),t.lineTo(o,n),t.lineTo(e,r),t.stroke(),t.closePath()}))}}class ft extends m.u{constructor(){super({x:0,y:0}),[{x:0,y:0,width:tt.Rs.Ls.width,height:52,color:"#45454D"},{x:0,y:tt.Rs.Ls.height-52,width:tt.Rs.Ls.width,height:52,color:"#45454D"},{x:64,y:16,width:220,height:20,color:"#222"},{x:64,y:16,width:tt.Vs/100*220,height:20,color:"#FBFBFD"}].forEach((t=>{this.q(m(t))}));let t={yi:"20px Verdana",Qs:"#FFF"};[{text:"fuel",font:t.yi,color:t.Qs,x:16,y:16},{text:"R - restart stage",font:t.yi,color:t.Qs,x:tt.Rs.Ls.width-16,y:16,anchor:{x:1,y:0}},{text:"A/D - rotate",font:t.yi,color:t.Qs,x:16,y:tt.Rs.Ls.height-16,anchor:{x:0,y:1}},{text:"P - select stages",font:t.yi,color:t.Qs,x:tt.Rs.Ls.width-16,y:tt.Rs.Ls.height-16,anchor:{x:1,y:1}},{text:"W - boost",font:t.yi,color:t.Qs,x:tt.Rs.Ls.width/2,y:tt.Rs.Ls.height-16,anchor:{x:.5,y:1}}].forEach((t=>{this.q(M(t))}))}}var yt=[{fi:[[100,548],[100,430],[380,430],[450,330],[450,150],[600,152],[600,548]],xi:[{wi:0,gi:pt,mi:{}},{wi:5,gi:ft,mi:{}},{wi:1,gi:lt,mi:{x:525,y:220,Qs:"#AD98FF",Js:30,hi:12,ei:10,ri:10}},{wi:2,gi:at,mi:{x:474,y:422,Qs:"#FBFBFD",Js:30,Zs:80,ti:-2,si:-.1}},{wi:3,gi:nt,mi:{x:280,y:473,Vs:80}},{wi:4,gi:dt,mi:{x:180,y:473,ui:-1}}],Vs:30},{fi:[[67,103],[517,103],[517,504],[633,504],[633,596],[143,596],[143,169],[67,169]],xi:[{wi:0,gi:pt,mi:{}},{wi:5,gi:ft,mi:{}},{wi:1,gi:lt,mi:{x:580,y:548,Qs:"#f94e93",Js:30,hi:12,ei:10,ri:10}},{wi:2,gi:at,mi:{x:378,y:460,Qs:"#37bcd4",Js:30,Zs:90,ti:-2.8,si:-.17}},{wi:2,gi:at,mi:{x:273,y:230,Qs:"#95f54f",Js:30,Zs:80,ti:2.5,si:.15}},{wi:4,gi:dt,mi:{x:103,y:143,ui:1}}],Vs:60},{fi:[[57,150],[117,150],[117,350],[217,350],[403,115],[643,115],[643,585],[403,585],[403,205],[272,375],[272,375],[267,500],[57,500]],xi:[{wi:0,gi:pt,mi:{}},{wi:5,gi:ft,mi:{}},{wi:1,gi:lt,mi:{x:586,y:525,Qs:"#f9ad4e",Js:30,hi:12,ei:10,ri:10}},{wi:2,gi:at,mi:{x:167,y:400,Qs:"#efff98",Js:30,Zs:50,ti:-1.5,si:-.04}},{wi:2,gi:at,mi:{x:487,y:330,Qs:"#4f5bf5",Js:30,Zs:100,ti:2.5,si:.15}},{wi:3,gi:nt,mi:{x:320,y:270,Vs:40}},{wi:4,gi:dt,mi:{x:87,y:180,ui:2}}],Vs:50},{fi:[[338.2,535.5],[338.2,599],[55,599],[350,99],[645,599],[361.8,599],[361.8,535.5],[524.64,535.5],[350,229],[179.49,535.5]],xi:[{wi:0,gi:pt,mi:{}},{wi:5,gi:ft,mi:{}},{wi:1,gi:lt,mi:{x:429,y:569,Qs:"#6E7C7C",Js:30,hi:12,ei:10,ri:10}},{wi:2,gi:at,mi:{x:350,y:267,Qs:"#98DDCA",Js:30,Zs:43,ti:2.8,si:.17}},{wi:2,gi:at,mi:{x:207,y:510,Qs:"#CD5D7D",Js:30,Zs:43,ti:2.8,si:.17}},{wi:2,gi:at,mi:{x:496,y:515,Qs:"#949CDF",Js:30,Zs:43,ti:2.8,si:.17}},{wi:3,gi:nt,mi:{x:350,y:180,Vs:60}},{wi:4,gi:dt,mi:{x:300,y:569,ui:st-1}}],Vs:56},{fi:[[143,600],[143,100],[322,100],[322,523],[359,523],[359,100],[542,100],[542,600],[465,600],[465,166],[434,166],[434,600],[256,600],[256,166],[207,166],[207,600]],xi:[{wi:0,gi:pt,mi:{}},{wi:5,gi:ft,mi:{}},{wi:1,gi:lt,mi:{x:503,y:545,Qs:"#E36387",Js:30,hi:12,ei:10,ri:10}},{wi:2,gi:at,mi:{x:232,y:185,Qs:"#9DAD7F",Js:30,Zs:43,ti:2.8,si:.17}},{wi:2,gi:at,mi:{x:346,y:508,Qs:"#DF7861",Js:30,Zs:43,ti:-2.8,si:-.17}},{wi:2,gi:at,mi:{x:346,y:341,Qs:"#6155A6",Js:30,Zs:43,ti:-2.8,si:-.17}},{wi:2,gi:at,mi:{x:453,y:185,Qs:"#5EAAA8",Js:30,Zs:43,ti:2.8,si:.17}},{wi:3,gi:nt,mi:{x:352,y:580,Vs:80}},{wi:4,gi:dt,mi:{x:176,y:570,ui:-1}}],Vs:80},{fi:[[113,81],[30,94],[42,345],[228,327],[220,185],[243,180],[252,261],[437,247],[426,143],[554,150],[567,170],[473,179],[485,261],[267,272],[273,440],[572,429],[577,552],[121,562],[107,420],[153,413],[157,544],[556,539],[548,445],[243,458],[228,345],[30,364],[42,639],[670,634],[677,351],[367,364],[363,345],[577,338],[581,243],[671,233],[670,81],[332,69],[340,193],[320,190],[304,69],[153,89],[148,241],[121,247]],xi:[{wi:0,gi:pt,mi:{}},{wi:5,gi:ft,mi:{}},{wi:1,gi:lt,mi:{x:502,y:499,Qs:"#679B9B",Js:30,hi:12,ei:10,ri:10}},{wi:2,gi:at,mi:{x:127,y:233,Qs:"#82C4C3",Js:30,Zs:43,ti:-2.8,si:-.17}},{wi:2,gi:at,mi:{x:324,y:168,Qs:"#B49C73",Js:30,Zs:43,ti:-2.8,si:-.17}},{wi:2,gi:at,mi:{x:554,y:152,Qs:"#856C8B",Js:30,Zs:43,ti:2.8,si:.17}},{wi:2,gi:at,mi:{x:368,y:350,Qs:"#424874",Js:30,Zs:43,ti:-2.8,si:-.17}},{wi:2,gi:at,mi:{x:127,y:435,Qs:"#424874",Js:30,Zs:43,ti:2.8,si:.17}},{wi:3,gi:nt,mi:{x:520,y:290,Vs:100}},{wi:3,gi:nt,mi:{x:300,y:600,Vs:90}},{wi:4,gi:dt,mi:{x:69,y:124,ui:st-1}}],Vs:100}];function xt(t,s){return t.filter((t=>t!==s))}function wt(t){let s=t.substring(1).match(/.{1,2}/g);return[parseInt(s[0],16),parseInt(s[1],16),parseInt(s[2],16)]}function gt(t,s,i){return t+i*(s-t)}function mt(t,s,i=0){return p(t.p.x,t.p.y).j(p(s.p.x,s.p.y))<s.Js+t.Js+i}function bt(t,s,i){let[h,e]=i,[r,o]=s,n=p(h-r,e-o),a=n.length(),l=p(t.p.x-r,t.p.y-o),_=l.D(n),c=n.scale(_/rt(a,2));return _>0&&c.length()<a&&mt({Js:7,p:{x:l.x,y:l.y}},{Js:4,p:{x:c.x,y:c.y}})}function vt(t){t-=1,tt.Ns=!0,tt.Xs=t;let s=yt[t];tt.Vs=s.Vs;let i=[];for(let t in tt.Hs)i.push(t),tt.Hs[t].zs=[];for(let t of s.xi)tt.Hs[i[t.wi]].zs.push(new t.gi(t.mi))}let Mt=localStorage,St=document;function Ft(){let t=St.getElementById("stages");t.innerHTML="";for(let s=0;s<6;s++){let i=St.createElement("button");i.innerHTML=`<h3 class="btn">${s+1}</h3>`,i.setAttribute("class","s-b"+(0===s||At(s+1)?"":" l")),t.appendChild(i),i.onclick=t=>{t.preventDefault(),(0===s||At(s+1))&&(St.querySelectorAll(".b").forEach((t=>{t.classList.remove("s")})),tt.Ks.qt&&tt.Ks.start(),vt(s+1))}}}function At(t){return!!parseInt(Mt.getItem("oj_"+t)||"0")}Ft(),$();let{canvas:Ct,context:Dt}=o();tt.Rs={Ls:Ct,Os:Dt};let jt=window,kt=document,Et=()=>{let t=jt.innerHeight<jt.innerWidth?jt.innerHeight:jt.innerWidth;Ct.setAttribute("style",t<700?`width:${t}px;height:${t}px`:"")};Et(),jt.onresize=Et;let Bt=()=>{kt.querySelectorAll(".b").forEach((t=>{t.classList.remove("s")})),tt.Ks.qt&&tt.Ks.start(),vt(tt.Xs+1)},Wt=()=>{Ft(),kt.querySelectorAll(".b").forEach((t=>{t.classList.remove("s")})),kt.getElementById("menu-stages").classList.add("s")};jt.onkeyup=t=>{"r"===t.key&&tt.Ns?Bt():"p"===t.key&&tt.Ns&&!tt.Ks.qt&&Wt()},kt.querySelectorAll(".rs").forEach((t=>{t.onclick=Bt})),kt.querySelectorAll(".ss").forEach((t=>{t.onclick=Wt})),kt.getElementById("ns").onclick=()=>{kt.querySelectorAll(".b").forEach((t=>{t.classList.remove("s")})),tt.Ks.qt&&tt.Ks.start(),vt(tt.Xs+2)};let Yt=document.querySelectorAll(".volume");Yt.forEach((t=>{t.value=100,t.onchange=t=>{for(let s in _t)_t[s][0]=parseInt(t.target.value)/100;Yt.forEach((s=>{t.target!==s&&(s.value=t.target.value)}))}})),tt.Ks=j({update:function(){for(const s of tt.Hs.Ts.zs)if(s){yt[tt.Xs].fi.forEach(((t,i,h)=>{if(bt(s,t,h.length-1!==i?h[i+1]:h[0]))return ct(..._t.ni),tt.Ks.stop(),tt.Ns=!1,void setTimeout((()=>{kt.getElementById("menu-crash").classList.add("s")}),1500)}));for(let i of tt.Hs.Gs.zs)if(mt(i,s))return ct(..._t.ai),tt.Ks.stop(),tt.Ns=!1,t=tt.Xs+2,Mt.setItem("oj_"+t,"1"),void setTimeout((()=>{kt.getElementById("menu-"+(5!==tt.Xs?"finish":"thanks")).classList.add("s")}),1500);for(let t of tt.Hs.Ps.zs)mt(t,s)&&(tt.Hs.Ps.zs=xt(tt.Hs.Ps.zs,t),tt.Vs+=t.Vs,tt.Vs>100&&(tt.Vs=100),ct(..._t.Vs));for(let t of tt.Hs.Us.zs){if(mt(t,s))return ct(..._t.ni),tt.Ks.stop(),tt.Ns=!1,void setTimeout((()=>{kt.getElementById("menu-crash").classList.add("s")}),1500);if(s.di=mt(t,s,t.Zs),s.di){s.pi=p(t.p.x,t.p.y),s.si=t.si;break}}}var t;for(let t in tt.Hs){let s=tt.Hs[t];if(s.$s)for(let t of s.zs)t&&t.update()}},l:function(){for(let t in tt.Hs){let s=tt.Hs[t];if(s.Is)for(let t of s.zs)t&&t.l()}tt.bi&&tt.bi.l()}}),tt.Ks.start();