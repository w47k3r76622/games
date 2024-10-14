!function(){"use strict";class t{constructor(t=0,e=0){this.x=t,this.y=e}set(t,e){return this.x=t,this.y=e,this}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}subtract(t){return this.x-=t.x,this.y-=t.y,this}setSubtract(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}scale(t){return this.x*=t,this.y*=t,this}setMultiplyScalar(t,e){return this.x=t.x*e,this.y=t.y*e,this}length(){return(this.x**2+this.y**2)**.5}normalize(){const t=this.length();return 0!==t&&(this.x/=t,this.y/=t),this}dot(t){return this.x*t.x+this.y*t.y}distanceSquared(t){return(this.x-t.x)**2+(this.y-t.y)**2}}function e(t){return 440*2**((t-69)/12)}class s{constructor(t){this.state=0|t}randomUint32(){let t=this.state=this.state+1831565813|0;return t=Math.imul(t^t>>>15,1|t),t^=t+Math.imul(t^t>>>7,61|t),(t^t>>>14)>>>0}random(){return this.randomUint32()/2**32}}const n=4294967295;class i{constructor(t,e,s){this.channels=t,this.sampleRate=e,this.prng=s}generateReverb(t,e,s,i,o=0,a=-60){const r=Math.round(i*this.sampleRate),l=Math.round(o*this.sampleRate),h=(10**(a/10))**(1/(r-1));const c=1/(l-1),u=new AudioBuffer({length:r,numberOfChannels:this.channels,sampleRate:this.sampleRate});for(const t of function(t){const e=[];for(let s=0;s<t.numberOfChannels;++s)e[s]=t.getChannelData(s);return e}(u)){for(let e=0;e<r;++e)t[e]=(2*this.prng.randomUint32()-n)/n*h**e;for(let e=0;e<l;++e)t[e]*=c*e}!function(t,e,s,n,i){const o=new OfflineAudioContext(e.numberOfChannels,e.length,e.sampleRate),a=new BiquadFilterNode(o,{type:"lowpass",Q:1e-4,frequency:s});a.connect(o.destination),a.frequency.exponentialRampToValueAtTime(n,i);const r=new AudioBufferSourceNode(o,{buffer:e});r.connect(a),r.start(),o.oncomplete=e=>{t(e.renderedBuffer)},o.startRendering()}(t,u,e,s,i)}}function o(t,e){switch(e){case 0:case 8:t(64,0,.5),t(40,0,.25),t(67,.04,.5),t(71,.08,.5),t(76,.12,.5),t(47,.25,.5),t(71,.5,1.25),t(52,.5,.75),t(55,.75,1);break;case 1:case 9:t(59,0,.25),t(76,.25,.5),t(55,.25,.5),t(78,.5,.75),t(52,.5,.75),t(79,.75,1),t(47,.75,1);break;case 2:case 10:t(69,0,.5),t(45,0,.25),t(72,.04,.5),t(76,.08,.5),t(81,.12,.5),t(52,.25,.5),t(76,.5,1.25),t(57,.5,.75),t(60,.75,1);break;case 3:case 11:t(64,0,.25),t(81,.25,.5),t(60,.25,.5),t(83,.5,.75),t(57,.5,.75),t(86,.75,1),t(52,.75,1);break;case 4:case 12:t(69,0,.75),t(50,0,.25),t(74,.04,.75),t(78,.08,.75),t(81,.12,.75),t(57,.25,.5),t(62,.5,.75),t(79,.75,1),t(66,.75,1);break;case 5:case 13:t(78,0,.25),t(69,0,.25),t(79,.25,.375),t(66,.25,.5),t(78,.375,.625),t(62,.5,.75),t(74,.625,1),t(57,.75,1);break;case 6:t(59,0,1),t(35,0,.25),t(63,.04,1),t(66,.08,1),t(71,.12,1),t(42,.25,.5),t(47,.5,.75),t(51,.75,1);break;case 7:t(63,0,1),t(54,0,.25),t(66,.04,1),t(71,.08,1),t(75,.12,1),t(51,.25,.5),t(47,.5,.75),t(42,.75,1);break;case 14:t(64,0,2),t(40,0,.25),t(67,.04,2),t(71,.08,2),t(76,.12,2),t(47,.25,.5),t(52,.5,.75),t(55,.75,1);break;case 15:t(64,0,.25),t(59,.25,.5),t(55,.5,.75),t(52,.75,1);break;case 16:case 24:t(64,0,.125),t(40,0,.25),t(71,.125,.25),t(69,.25,.375),t(47,.25,.5),t(71,.375,.5),t(74,.5,.625),t(52,.5,.75),t(71,.625,.75),t(69,.75,.875),t(55,.75,1),t(71,.875,1);break;case 17:case 25:t(64,0,.125),t(59,0,.25),t(71,.125,.25),t(69,.25,.375),t(55,.25,.5),t(71,.375,.5),t(74,.5,.625),t(52,.5,.75),t(71,.625,.75),t(69,.75,.875),t(47,.75,1),t(71,.875,1);break;case 18:case 26:t(66,0,.125),t(36,0,.25),t(67,.125,.25),t(66,.25,.375),t(43,.25,.5),t(67,.375,.5),t(71,.5,.625),t(48,.5,.75),t(67,.625,.75),t(66,.75,.875),t(52,.75,1),t(67,.875,1);break;case 19:case 27:t(66,0,.125),t(55,0,.25),t(67,.125,.25),t(66,.25,.375),t(52,.25,.5),t(67,.375,.5),t(71,.5,.625),t(48,.5,.75),t(67,.625,.75),t(66,.75,.875),t(43,.75,1),t(67,.875,1);break;case 20:case 28:t(62,0,.125),t(38,0,.25),t(69,.125,.25),t(67,.25,.375),t(45,.25,.5),t(69,.375,.5),t(74,.5,.625),t(50,.5,.75),t(69,.625,.75),t(67,.75,.875),t(54,.75,1),t(69,.875,1);break;case 21:case 29:t(62,0,.125),t(57,0,.25),t(69,.125,.25),t(67,.25,.375),t(54,.25,.5),t(69,.375,.5),t(74,.5,.625),t(50,.5,.75),t(69,.625,.75),t(67,.75,.875),t(45,.75,1),t(69,.875,1);break;case 22:case 30:t(63,0,.125),t(35,0,.25),t(71,.125,.25),t(69,.25,.375),t(42,.25,.5),t(71,.375,.5),t(75,.5,.625),t(47,.5,.75),t(71,.625,.75),t(69,.75,.875),t(51,.75,1),t(71,.875,1);break;case 23:t(63,0,.125),t(54,0,.25),t(71,.125,.25),t(69,.25,.375),t(51,.25,.5),t(71,.375,.5),t(75,.5,.625),t(47,.5,.75),t(71,.625,.75),t(69,.75,.875),t(42,.75,1),t(71,.875,1);break;case 31:t(63,0,.125),t(47,0,.25),t(71,.125,.25),t(69,.25,.375),t(51,.25,.5),t(71,.375,.5),t(75,.5,.625),t(54,.5,.75),t(71,.625,.75),t(75,.75,.875),t(59,.75,1),t(78,.875,1);break;case 32:case 40:t(64,0,.5),t(40,0,.125),t(67,.04,.5),t(71,.08,.5),t(76,.12,.5),t(47,.125,.25),t(52,.25,.375),t(55,.375,.5),t(71,.5,1.25),t(67,.5,1.25),t(59,.5,.625),t(55,.625,.75),t(52,.75,.875),t(47,.875,1);break;case 33:case 41:t(40,0,.125),t(52,.125,.25),t(76,.25,.5),t(71,.25,.5),t(55,.25,.375),t(59,.375,.5),t(78,.5,.75),t(71,.5,.75),t(64,.5,.625),t(59,.625,.75),t(79,.75,1),t(71,.75,1),t(55,.75,.875),t(52,.875,1);break;case 34:case 42:t(69,0,.5),t(45,0,.125),t(72,.04,.5),t(76,.08,.5),t(81,.12,.5),t(52,.125,.25),t(57,.25,.375),t(60,.375,.5),t(76,.5,1.25),t(72,.5,1.25),t(64,.5,.625),t(60,.625,.75),t(57,.75,.875),t(52,.875,1);break;case 35:case 43:t(45,0,.125),t(57,.125,.25),t(81,.25,.5),t(76,.25,.5),t(60,.25,.375),t(64,.375,.5),t(83,.5,.75),t(76,.5,.75),t(69,.5,.625),t(64,.625,.75),t(86,.75,1),t(78,.75,1),t(60,.75,.875),t(57,.875,1);break;case 36:case 44:t(69,0,.75),t(50,0,.125),t(74,.04,.75),t(78,.08,.75),t(81,.12,.75),t(54,.125,.25),t(57,.25,.375),t(62,.375,.5),t(66,.5,.625),t(62,.625,.75),t(79,.75,1),t(57,.75,.875),t(50,.875,1);break;case 37:case 45:t(78,0,.25),t(74,0,.25),t(38,0,.125),t(45,.125,.25),t(79,.25,.375),t(50,.25,.375),t(78,.375,.625),t(54,.375,.5),t(57,.5,.625),t(74,.625,1),t(54,.625,.75),t(50,.75,.875),t(45,.875,1);break;case 38:t(59,0,1),t(35,0,.125),t(63,.04,1),t(66,.08,1),t(71,.12,1),t(42,.125,.25),t(47,.25,.375),t(51,.375,.5),t(54,.5,.625),t(51,.625,.75),t(47,.75,.875),t(42,.875,1);break;case 39:t(63,0,1),t(47,0,.125),t(66,.04,1),t(71,.08,1),t(75,.12,1),t(51,.125,.25),t(54,.25,.375),t(59,.375,.5),t(63,.5,.625),t(59,.625,.75),t(54,.75,.875),t(51,.875,1);break;case 46:t(64,0,2),t(40,0,.125),t(67,.04,2),t(71,.08,2),t(76,.12,2),t(47,.125,.25),t(52,.25,.375),t(55,.375,.5),t(59,.5,.625),t(55,.625,.75),t(52,.75,.875),t(47,.875,1);break;case 47:t(40,0,.125),t(52,.125,.25),t(55,.25,.375),t(59,.375,.5),t(64,.5,.625),t(67,.625,.75),t(71,.75,.875),t(76,.875,1);break;case 48:t(79,0,1),t(76,0,1),t(64,0,.125),t(67,.125,.25),t(71,.25,.375),t(67,.375,.5),t(71,.5,1);break;case 49:t(78,0,.5),t(74,0,.5),t(62,0,.25),t(69,.25,.5),t(81,.5,.75),t(74,.5,1),t(86,.75,1);break;case 50:t(88,0,2),t(84,0,2),t(67,0,1.5),t(60,0,1.5);break;case 51:t(60,.5,.75),t(67,.75,1);break;case 52:t(91,0,1),t(88,0,1),t(83,0,1),t(79,0,.25),t(76,.25,.5),t(71,.5,.75),t(67,.75,1);break;case 53:t(81,0,.3125),t(62,0,1),t(86,.04,.3125),t(90,.08,.3125),t(86,.3125,.625),t(81,.625,.9375),t(86,.9375,1.25);break;case 54:t(64,.25,2),t(71,.29,2),t(76,.33,2),t(79,.37,2),t(83,.41,2),t(88,.45,2)}}const a=120/70,r=new class{constructor(){this.con=null,this.initialized=!1}async initialize(t){if(!this.initialized){if(null===this.con&&(this.con=new AudioContext),"suspended"===this.con.state){try{await this.con.resume()}catch(t){return}if(this.initialized)return}"suspended"!==this.con.state&&(t(this.con),this.initialized=!0)}}};let l,h;function c(t){l=new GainNode(t,{gain:.3333});const e=new ConvolverNode(t),n=new GainNode(t,{gain:2/3}),o=new GainNode(t,{gain:1/3});l.connect(e),l.connect(n),e.connect(o),n.connect(t.destination),o.connect(t.destination);new i(2,t.sampleRate,new s(960)).generateReverb((s=>{e.buffer=s,h=t.currentTime+.05,f(),setInterval(f,999)}),16e3,1e3,2*a,1e-5,-90)}function u(t,s,n){s*=a,n*=a;const i=new OscillatorNode(r.con,{type:"square",frequency:e(t)});(function(t,e){const s=new GainNode(r.con,{gain:.5});return s.gain.setValueAtTime(.5,h+e),s.gain.exponentialRampToValueAtTime(1e-5,h+e+2*a),t.connect(s),s})(i,s).connect(l),i.start(h+s),i.stop(h+n)}let d=-1;function f(){let t=r.con.currentTime-h+4,e=(d+1)*a;if(!(e>t))for(t+=4;e<t;){const t=++d;o(((e,s,n)=>u(e,s+t,n+t)),t%57),e+=a}}function p(t){if(l)switch(t){case 0:g(91,0,.04);break;case 1:g(79,0,.05),g(83,.05,.05),g(88,.1,.05);break;case 2:g(43,0,.2)}}function g(t,s,n){s+=r.con.currentTime;const i=new OscillatorNode(r.con,{type:"square",frequency:e(t)});i.connect(l),i.start(s),i.stop(s+n)}const v=[17,51,119,51,17,0,74,74,108],b=[8,14,11,9,8,56,120,120,48],y=[16,48,126,51,17,1,1,3,30];class m{constructor(t,e,s,n){t||(t=document.createElement("canvas")),this.canvas=t,this.con=t.getContext("2d"),this.height=s,this.width=e,t.height=2*s,t.width=2*e,this.con.scale(2,2),n&&n(this.con,e,s)}}const x=new m(document.querySelector("#p"),840,540,(t=>t.scale(2,2))),P=x.con,w=new m(document.querySelector("#u"),960,540).con;function H(t,e){t.font=e+"px -apple-system, 'Segoe UI', 'DejaVu Sans', system-ui, sans-serif"}function I(t,e,s,n,i,o,a,r="#000000a0"){H(t,i),t.textAlign="center",t.textBaseline="middle";const l=t.measureText(a),h=-(l.actualBoundingBoxLeft||.5*l.width),c=-(l.actualBoundingBoxAscent||.5*n),u=l.actualBoundingBoxRight||.5*l.width,d=l.actualBoundingBoxDescent||.5*n,f=16,p=16;t.beginPath(),t.lineTo(e+h-p,s+d+p-f),t.lineTo(e+h-p,s+c-p+f),t.quadraticCurveTo(e+h-p,s+c-p,e+h-p+f,s+c-p),t.lineTo(e+u+p-f,s+c-p),t.quadraticCurveTo(e+u+p,s+c-p,e+u+p,s+c-p+f),t.lineTo(e+u+p,s+d+p-f),t.quadraticCurveTo(e+u+p,s+d+p,e+u+p-f,s+d+p),t.lineTo(e+h-p+f,s+d+p),t.quadraticCurveTo(e+h-p,s+d+p,e+h-p,s+d+p-f),t.fillStyle=r,t.fill(),t.fillStyle=o,t.fillText(a,e,s)}const T=Array.from({length:270},(()=>Array.from({length:420},(()=>0)))),k=Array.from({length:270},(()=>Array.from({length:420},(()=>0)))),L={levelIndex:0,level:null,levelPhase:0,phaseProgress:0,oldProgress:0,skullsTurnProgress:0,buttonsPressed:[!1,!1,!1],oldPressed:[!1,!1,!1],soundEnabled:!0,restartMessage:null,completedLevels:[],currentLevel:0,held:!1};function S(t,e=0){L.levelPhase=t,L.phaseProgress=L.oldProgress=e}function E(t,e,s,n=!1){for(let i=0;i<t.length;++i)for(let o=0;o<e;++o){0!==(t[i]/2**(n?o:e-1-o)&1)&&s(o,i)}}function R(t,e,s,n,i){P.beginPath(),P.rect(t+1,e,s-2,1),P.rect(t,e+1,s,n-2),P.rect(t+1,e+n-1,s-2,1),P.fillStyle=i,P.fill()}function C(t,e,s){P.fillStyle=L.level.reflect?"#7b8382":"#000",P.fillRect(t,e,15,1),R(t,e+1,15,17,L.level.reflect?"#43403f":"#63605f"),R(t+1,e+s,13,15,"#eaeae8"),R(t+2,e+s+1,11,13,"#cecac9")}function A(){const t=18*L.level.buttonsEnabled+2,e=.5*(270-t)|0,s=[b,y,v];for(let t=0;t<L.level.buttonsEnabled;++t){const n=e+19*t,i=L.buttonsPressed[t]?2:0;C(405,n,i),P.beginPath(),E(s[t],7,((t,e)=>{P.rect(t+405+4,e+i+n+3,1,1)})),P.fillStyle=0!==t||L.soundEnabled?"#000":"#ff0040",P.fill();for(let t=0;t<15;++t)for(let e=0;e<18;++e)(0!==t&&14!==t||0!==e&&17!==e)&&(T[e+n][t+405]=2)}}function M(t){if(L.oldPressed[0]=L.buttonsPressed[0],L.oldPressed[1]=L.buttonsPressed[1],L.oldPressed[2]=L.buttonsPressed[2],L.buttonsPressed[0]=L.buttonsPressed[1]=L.buttonsPressed[2]=!1,t.held){const e=function(t,e){t=(t+.5)/2.2857142857142856,e=(e+.5)/2;const s=.5*(270-(18*L.level.buttonsEnabled+2))|0;for(let n=0;n<L.level.buttonsEnabled;++n){const i=s+19*n;if(t>=405&&t<420&&e>=i&&e<i+18)return n}return NaN}(t.x,t.y);isFinite(e)&&(L.buttonsPressed[e]=!0)}var e;L.oldPressed[0]===L.buttonsPressed[0]&&L.oldPressed[1]===L.buttonsPressed[1]&&L.oldPressed[2]===L.buttonsPressed[2]||(t.held||(L.oldPressed[0]&&!L.buttonsPressed[0]&&(e=L.soundEnabled=!L.soundEnabled,l&&(l.gain.value=e?.3333:0)),L.oldPressed[1]&&!L.buttonsPressed[1]&&(L.level.reset(),p(0)),L.oldPressed[2]&&!L.buttonsPressed[2]&&(L.levelIndex=20,S(4),p(0))),A())}function B(t){return t*(2-t)}L.completedLevels[16]=!0;const N=new m(null,960,540,((t,e,s)=>{const n=t.createLinearGradient(0,0,0,s);n.addColorStop(0,"#2c3e50"),n.addColorStop(1,"#fd746c"),t.fillStyle=n,t.fillRect(0,0,e,s);const i="only in death does duty end",o=Array.from({length:8},(()=>" ")).join(i);H(t,"24"),t.textAlign="center",t.textBaseline="middle";const a=.25*t.measureText(i).width;t.fillStyle="#ffffff80";for(let n=-5;n<=5;++n)t.fillText(o,.5*e-a*n,.5*s+48*n);t.fillStyle="#fff",t.fillText(i,.5*e,.5*s)})).canvas;function q(t,e,s,n=0){w.save(),w.translate(t,e),w.rotate(-.5124),w.beginPath(),w.lineTo(n,-500),w.lineTo(s,-500),w.lineTo(s,1e3),w.lineTo(n,1e3),w.closePath(),w.restore(),w.save(),w.clip(),w.drawImage(N,0,0,N.width,N.height,0,0,960,540),w.restore()}const F=new t;function V(t,e,s,n,i,o,a){const r=[[n,n,i,3]];for(;0!==r.length;){let[s,i,h,c]=r.pop(),u=s;for(;u>=0&&o(t[h][u]);)--u;++u<s-1&&(c|=3);let d=i;for(;d<e&&o(t[h][d]);)++d;--d>i+1&&(c|=3);let f=!1;for(n=u;n<=d;++n)o(t[h][n])?(a(n,h),f||(f=!0,s=n)):f&&(f=!1,l(s,n-1,h,c));f&&l(s,d,h,c)}function l(t,e,n,i){1&i&&n>0&&r.push([t,e,n-1,1]),2&i&&n<s-1&&r.push([t,e,n+1,2])}}const _=[7,4,4,4,4,252,128,128,128,128,8188,4096,4096,4096,4096,8188,128,128,128,128,252,4,4,4,4,7],z=[213,178,248,143,283,178,248,213],D=[55,95,95,135,135,175,175,215],G=[87376,393172,1485557,1747645,1747629,1419629,1415533,1747621,1485397,419412,349520],O=[69888,349504,1398096,23680400,111848100,5816101540,7158196585,1789253481,7136608217,1776254420,1778351568,7153385424,6888619856,5457139008],j=[1092,6553,6825],W=["#0000","#101010","#dbcfb1","#a9a48d"],U=["#0000","#101010","#ffe08b","#fdbd8f"],$=["#0000","#101010","#78fae6"];function Q(t,e,s,n,i=!1){return function(o){o.scale(n,n);for(let n=0;n<t.length;++n)for(let a=0;a<e;++a){const r=t[n]/4**(i?a:e-1-a)&3;o.fillStyle=s[r],o.fillRect(a,n,1,1)}}}const X=[new m(null,99,99,Q(G,11,W,9)).canvas,new m(null,99,99,Q([87376,393172,1551029,2009773,1747625,1665625,1664601,1747625,1419925,366996,87376],11,W,9)).canvas,new m(null,99,99,Q(G,11,W,9,!0)).canvas],Y=new m(null,99,99,Q([21824,98128,370644,431604,435892,435892,436916,436916,436916,436916,349524],11,["#0000","#101010","#a9a48d","#dbcfb1"],9)).canvas,J=new m(null,153,126,(t=>{t.save(),Q(O,17,U,9)(t),t.restore(),t.translate(63,0),Q(j,7,$,9)(t)})).canvas,K=new m(null,99,126,(t=>{const e=X[2];t.drawImage(e,0,0,e.width,e.height,0,27,99,99),t.translate(18,0),Q(j,7,$,9)(t)})).canvas;class Z{constructor(t,e,s,n,i){this.level=t,this.x=e,this.y=s,this.index=n,this.isExit=i,this.isSatisfied=!1,this.orientation=Math.random()<.5?0:2,this.turningProgress=0}turn(){this.orientation=(this.orientation+2)%4,this.turningProgress=9}update(){this.turningProgress>0&&--this.turningProgress}_paintInternal(t){for(let e=-8;e<8;++e)for(let s=-7;s<7;++s){(s+.5)**2/49+(e+.5)**2/64<=1&&t(this.x+s,this.y+e)}}paintInternal(){P.fillStyle="#202020",this._paintInternal(((t,e)=>{P.fillRect(t-.5,e-.5,2,2)})),this._paintInternal(((t,e)=>{this.level.setPoint(t,e,this.index)}))}paint(){const t=this.isExit?Y:X[this.turningProgress>0?1:this.orientation];w.drawImage(t,0,0,t.width,t.height,2.2857142857142856*this.x-11,2*this.y-11,22,22)}}class tt{constructor(t,e){if(this.comparatorFn=t,this.length=0,this.values=[],e)for(const t of e)this.insert(t)}insert(t){this.values.length<=this.length&&(this.values.length=Math.max(1,2*this.values.length)),this.values[this.length++]=t,this.bubbleUp()}remove(){if(0===this.length)return null;const t=this.values[0];return 1===this.length?(this.length=0,this.values[0]=null,t):(this.values[0]=this.values[this.length-1],this.values[this.length-1]=null,this.length--,this.bubbleDown(),t)}parent(t){return 0===t?null:t-1>>>1}leftChild(t){const e=2*t+1;return e>=this.length?null:e}rightChild(t){const e=2*t+2;return e>=this.length?null:e}bubbleUp(){let t=this.length-1;for(;;){const e=this.parent(t);if(!(null!==e&&this.comparatorFn(this.values[t],this.values[e])<0))return;{const s=this.values[t];this.values[t]=this.values[e],this.values[e]=s,t=e}}}bubbleDown(){let t=0;for(;;){const e=this.leftChild(t),s=this.rightChild(t);let n=t;if(null!==e&&this.comparatorFn(this.values[n],this.values[e])>0&&(n=e),null!==s&&this.comparatorFn(this.values[n],this.values[s])>0&&(n=s),n===t)return;{const e=this.values[t];this.values[t]=this.values[n],this.values[n]=e,t=n}}}}class et extends t{constructor(t,e){super(t,e),this.hash=this.y<<16|this.x,this.priority=0}}function st(t){return 1===t||t>9}function nt(t,e,s,n,i){const o=[];return n>0&&st(t[i][n-1])&&o.push(new et(n-1,i)),i>0&&st(t[i-1][n])&&o.push(new et(n,i-1)),n<e-1&&st(t[i][n+1])&&o.push(new et(n+1,i)),i<s-1&&st(t[i+1][n])&&o.push(new et(n,i+1)),o}function it(t,e,s,n){return Math.abs(t-e)+Math.abs(s-n)}function ot(t,e,s=!1){const n=new m(null,840,540,(function(s){s.scale(2,2),s.fillStyle="#ff0040",function(t,e,s,n,i,o,a,r){const l=new et(n,i),h=new tt(((t,e)=>t.priority-e.priority),[l]),c=Object.create(null),u=Object.create(null);for(u[l.hash]=0;0!==h.length;){const n=h.remove();if(n.x===o&&n.y===a)break;for(const i of nt(t,e,s,n.x,n.y)){const t=u[n.hash]+1;(void 0===u[i.hash]||t<u[i.hash])&&(c[i.hash]=n,u[i.hash]=t,i.priority=t+it(o,a,i.x,i.y),h.insert(i))}}let d=new et(o,a);for(;void 0!==c[d.hash];)r(d.x,d.y),d=c[d.hash]}(T,420,270,t.x,t.y,e.x,e.y,(function(t,e){s.fillRect(t,e,1,1)}));const n=e.x-t.x,i=e.y-t.y;t._paintInternal(((t,e)=>{s.clearRect(t,e,1,1),s.clearRect(t+n,e+i,1,1)}))})).canvas;return new m(null,960,540,(function(t){t.drawImage(n,0,0,n.width,n.height,0,0,960,540),I(t,480,270,64,"bold 64","#ff0040",s?"Requires Coil Membership":"Not like this")})).canvas}function at(t){const e=L.restartMessage;e&&(w.globalAlpha=B(t),w.drawImage(e,0,0,e.width,e.height,0,0,960,540),w.globalAlpha=1)}class rt{constructor(){this.entryPoints=[],this.exitPoints=[],this.hotspots=Object.create(null),this.connected=Array.from({length:40},(()=>[])),this.reflect=!1,this.fungus=!1,this.fungusGeneration=0,this.fungusLeft=0,this.fungusTop=0,this.fungusRight=0,this.fungusBottom=0,this.buttonsEnabled=3}reset(){for(const t of this.connected)t.length=0;P.fillStyle="#000",P.fillRect(0,0,420,270),this.reflect&&(P.fillStyle="#7b8382",P.fillRect(210,0,210,270));for(let t=0;t<270;++t)for(let e=0;e<420;++e)T[t][e]=0;this.fungusGeneration=0,this.paintInternal(),A();for(const t of Object.values(this.hotspots))t.isSatisfied=!1,t.paintInternal()}addHotspot(t,e,s){const n=s?20:10,i=s?this.exitPoints:this.entryPoints,o=new Z(this,t,e,n+i.length,s);i.push(this.hotspots[o.index]=o)}setPoint(t,e,s){if(t<0||t>=420||e<0||e>=270)return;T[e][t]=s;const n=this.reflect&&t>=210;let i;i=0===s?"#000":1===s?n?"#e3b1ff":"#f7c5ff":2===s?n?"#d6d6d4":"#eaeae8":3===s?"#ff0040"+(4*this.fungusGeneration+127).toString(16):s>=10&&s<20?this.hotspots[s].isSatisfied?n?"#ebcc7e":"#ffe091":n?"#78eb88":"#8cff9b":s>=20&&s<40?this.hotspots[s].isSatisfied?n?"#ebcc7e":"#ffe091":n?"#62e6d2":"#78fae6":"#ff0040",P.fillStyle=i,P.fillRect(t,e,1,1)}getNeighbourhood(t,e){return[t>0?T[e][t-1]:0,e>0?T[e-1][t]:0,t<419?T[e][t+1]:0,e<269?T[e+1][t]:0]}getAnyConnectedNeighbour(t,e){const s=this.getNeighbourhood(t,e);return s[0]>9?s[0]:s[1]>9?s[1]:s[2]>9?s[2]:s[3]>9?s[3]:0}_connect(t,e){if(t!==e&&!this.connected[t][e])if(this.connected[t][e]=!0,this.connected[e][t]=!0,(.1*t|0)<2==(.1*e|0)<2)L.restartMessage=ot(this.hotspots[t],this.hotspots[e]),S(3),p(2);else{this.hotspots[t].isSatisfied=this.hotspots[e].isSatisfied=!0;const s=[];V(T,420,270,this.hotspots[t].x,this.hotspots[t].y,(t=>1===t||t>9),((t,e)=>{s.push(t,e,T[e][t]),T[e][t]=9}));for(let t=0;t<s.length;t+=3)this.setPoint(s[t],s[t+1],s[t+2]);p(1)}}connect(t,e){for(const s in this.connected[t])this.connected[t][s]&&this._connect(e,+s);for(const s in this.connected[e])this.connected[e][s]&&this._connect(t,+s);this._connect(t,e)}hasWon(){for(const t of this.entryPoints)if(!t.isSatisfied)return!1;return!0}paint(t){}paintInternal(){}paintInternalTiles(t,e,s=7,n=8){const i=.5*(420-s*e)|0,o=.5*(270-n*t.length)|0;P.fillStyle="#202020",E(t,e,((t,e)=>{P.fillRect(s*t+i-.5,n*e+o-.5,s+1,n+1)})),E(t,e,((t,e)=>{for(let a=0;a<n;++a)for(let r=0;r<s;++r)this.setPoint(r+s*t+i,a+n*e+o,2)}))}paintInternalTiles2(t,e,s=7,n=8){const i=s*e,o=210-i|0,a=.5*(270-n*t.length)|0,r=(t,e)=>(i,o)=>{P.fillRect(s*i+t-.5,n*o+e-.5,s+1,n+1)},l=(t,e)=>(i,o)=>{for(let a=0;a<n;++a)for(let r=0;r<s;++r)this.setPoint(r+s*i+t,a+n*o+e,2)};P.fillStyle="#202020",E(t,e,r(o,a)),E(t,e,r(o+i,a),!0),E(t,e,l(o,a)),E(t,e,l(o+i,a),!0)}paintInternalFungus(t,e,n){const i=new s(n);new Z(this,t,e,3,!1)._paintInternal(((t,e)=>{i.random()<.5&&this.setPoint(t,e,3)}))}advanceFungus(){if(!this.fungus)return;for(let t=this.fungusTop;t<this.fungusBottom;++t)for(let e=this.fungusLeft;e<this.fungusRight;++e)k[t][e]=T[t][e];let t,e,s;for(let n=this.fungusTop;n<this.fungusBottom;++n){t=0,e=this._fungusCol(this.fungusLeft,n);for(let i=this.fungusLeft;i<this.fungusRight;++i){if(s=i<this.fungusRight-1?this._fungusCol(i+1,n):0,0===T[n][i]){const o=t+e+s-(3===k[n][i]?1:0);3!==o&&6!==o||this.setPoint(i,n,3)}t=e,e=s}}++this.fungusGeneration,this.fungusGeneration>32&&(this.fungusGeneration=0)}_fungusCol(t,e){return(e>this.fungusTop&&3===k[e-1][t]?1:0)+(3===k[e][t]?1:0)+(e<this.fungusBottom-1&&3===k[e+1][t]?1:0)}}const lt=[33554431,16809985,16809985,16809985,16809985,17824801,17301537,17301537,17301537,17301537,17334241,16793633,16793633,16793633,16793633,17824801,32,32,32,32,1048544],ht=[171,206,276,178,241,213,115,304,122,297,143,276],ct=[75,75,75,115,115,155,195,195,219,219,227,227];const ut=[1572864,1572864,1572864,1572864,1572864,1572864,1572864,1572864,1572864,1572864,1572864,202899459,404226054,1572864,1572864,1572864,1572864,1572864,1572864,1572864,1572864,412318439424,824635305984,1572864,1572864,1572864,1572864,1572864,1572864,1572864,1572864,1572864,1572864,1572864],dt=[119,301,91,147,273,329,119,301],ft=[95,95,135,135,135,135,175,175];const pt=[2097151,2097151,2097151,2097151,2097151,2097151,2097151,2097151,2097151,2097151,2097151,2097151,2097151,2097151,2097151,2097151,2097151,2097151],gt=[73,346],vt=[135,135];function bt(t,e){const s=168+t,n=103+t,i=[],o=[];for(let t=0;t<15;++t){const a=Math.PI*(1.32*t/14-1.16),r=s*Math.cos(a)+210|0,l=n*Math.sin(a)+135|0;e(r,l,t),t>5&&t<9&&(i.push(r),o.push(270-l))}for(let t=0;t<3;++t)e(i[t],o[t],16+t+1)}const yt=[16776960,256,256,256,256,256,256,16744704,33279,32768,32768,32768,32768,32768,32768,65535],mt=[133,287],xt=[103,167];class Pt extends rt{constructor(){super(),this.buttonsEnabled=L.completedLevels[0]?3:2;this.addHotspot(mt[0],135,!1),this.addHotspot(mt[1],135,!0)}paint(t){I(w,480,405,24,"24","#eaeae8","Connect the dots")}}const wt=[33554431,16809985,16809985,16809985,16809985,17824801,17301537,17301537,17301537,17301537,17334241,16793633,16793633,16793633,16793633,17824801,32,32,32,32,33554431],Ht=[129,290],It=[195,195];const Tt=[16711935,8454273,8454273,8454273,8455297,8472705,8464513,8465025,8519553,8388609,8388609,8388609,8388609,8388609,8388609,16777215],kt=[119,154,266,154,294],Lt=[63,103,103,167,199];const St=[64,517348,273998,271428,4294721535,2147483649,2147483649,2147483649,2147483649,4294967295],Et=[98,210,119,301,322],Rt=[103,127,151,151,175];const Ct=[16777215,8388609,8388609,8388609,8388609,8388609,8917921,8499497,8982705,9124649,9961473,8388609,8388609,8388609,8388609,16777215],At=[119,147,273,217,147,273,294],Mt=[63,95,95,103,175,175,199];const Bt=[2032,4087,3957,3383,4294962775,4294963061,4087,2032,2055,2032],Nt=[98,322,98,322],qt=[55,55,215,215];const Ft=[7,4,4,4,4,126,68,68,68,4092,2112,2048,2048,2112,4092,68,68,68,126,4,4,4,4,7],Vt=[210,147,273,210],_t=[63,135,135,207];const zt=[524280,262152,262152,3932175,2228225,2220513,2192289,2208609,2216673,2154945,2097153,2097153,2154945,2216673,2208609,2192289,2220513,2097169,3932175,262152,262152,524280],Dt=[196,224,154,266,196,224],Gt=[71,71,135,135,199,199];const Ot=[135291957248,106301239296,106562531825,111011443483,133677462523,118515053315,110856272369],jt=[139332,417894,974967,417894,139332],Wt=[70,350],Ut=[59,211];const $t=[248,260,514,561,585,585,521,273,226,4,520,496],Qt=[105,203],Xt=[127,127];const Yt=[575,575],Jt=[315,49,161,315],Kt=[63,135,135,207];const Zt=[49,27,11,3,121,12,1,29,48,34],te=[108,73,108],ee=[71,135,199];const se=[3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,0,0,0,0,0,0,0,0,3,3,3,3,3,3,3,3],ne=[119,301,196,119,301,196],ie=[95,95,135,175,175,215];const oe=[Pt,class extends rt{constructor(){super(),this.buttonsEnabled=L.completedLevels[1]?3:2,this.addHotspot(mt[0],xt[0],!1),this.addHotspot(mt[1],xt[1],!0)}paint(t){I(w,480,81,48,"bold 48","#eaeae8","The Neatness")}paintInternal(){this.paintInternalTiles(yt,24)}},class extends rt{constructor(){super(),this.buttonsEnabled=L.completedLevels[2]?3:2,this.addHotspot(Ht[0],It[0],!1),this.addHotspot(Ht[1],It[1],!0)}paintInternal(){this.paintInternalTiles(wt,25)}},class extends rt{constructor(){super(),this.buttonsEnabled=L.completedLevels[3]?3:2,this.addHotspot(Nt[0],qt[0],!1),this.addHotspot(Nt[1],qt[1],!0),this.addHotspot(Nt[2],qt[2],!1),this.addHotspot(Nt[3],qt[3],!0)}paintInternal(){this.paintInternalTiles(Bt,32)}},class extends rt{constructor(){super(),this.buttonsEnabled=L.completedLevels[4]?3:2,this.addHotspot(Vt[0],_t[0],!1),this.addHotspot(Vt[1],_t[1],!1),this.addHotspot(Vt[2],_t[2],!0),this.addHotspot(Vt[3],_t[3],!0)}paintInternal(){this.paintInternalTiles2(Ft,12)}},class extends rt{constructor(){super(),this.addHotspot(Dt[0],Gt[0],!1),this.addHotspot(Dt[1],Gt[1],!1),this.addHotspot(Dt[2],Gt[2],!1),this.addHotspot(Dt[3],Gt[3],!0),this.addHotspot(Dt[4],Gt[4],!0),this.addHotspot(Dt[5],Gt[5],!0)}paintInternal(){this.paintInternalTiles(zt,22)}},class extends rt{constructor(){super(),this.reflect=!0;this.addHotspot(Wt[0],135,!1),this.addHotspot(Wt[1],135,!0)}paintInternal(){this.paintInternalTiles2(Ot,37,3,4)}},class extends rt{constructor(){super(),this.reflect=!0,this.addHotspot(Wt[0],Ut[0],!1),this.addHotspot(Wt[1],Ut[1],!0)}paintInternal(){this.paintInternalTiles(jt,20)}},class extends rt{constructor(){super(),this.reflect=!0,this.addHotspot(Qt[0],Xt[0],!1),this.addHotspot(Qt[1],Xt[1],!0)}paintInternal(){this.paintInternalTiles($t,10,14,16)}},class extends rt{constructor(){super(),this.reflect=!0,this.addHotspot(Jt[0],Kt[0],!1),this.addHotspot(Jt[1],Kt[1],!1),this.addHotspot(Jt[2],Kt[2],!0),this.addHotspot(Jt[3],Kt[3],!0)}paintInternal(){this.paintInternalTiles(Yt,10,42)}},class extends rt{constructor(){super(),this.reflect=!0,this.addHotspot(te[0],ee[0],!1),this.addHotspot(te[1],ee[1],!1),this.addHotspot(te[2],ee[2],!0),this.addHotspot(420-te[0],ee[0],!1),this.addHotspot(420-te[1],ee[1],!0),this.addHotspot(420-te[2],ee[2],!0)}paintInternal(){this.paintInternalTiles2(Zt,7)}},class extends rt{constructor(){super(),this.reflect=!0,this.addHotspot(ne[0],ie[0],!1),this.addHotspot(ne[1],ie[1],!0),this.addHotspot(ne[2],ie[2],!1),this.addHotspot(ne[3],ie[3],!1),this.addHotspot(ne[4],ie[4],!0),this.addHotspot(ne[5],ie[5],!0)}paintInternal(){this.paintInternalTiles(se,2)}},class extends rt{constructor(){super(),this.fungus=!0,this.fungusLeft=kt[0],this.fungusTop=Lt[0],this.fungusRight=kt[4],this.fungusBottom=Lt[4],this.addHotspot(kt[1],Lt[1],!1),this.addHotspot(kt[2],Lt[2],!0)}paint(t){I(w,480,432,24,"24","#eaeae8","They move when you move")}paintInternal(){this.paintInternalTiles(Tt,24),this.paintInternalFungus(kt[3],Lt[3],38)}},class extends rt{constructor(){super(),this.fungus=!0,this.fungusLeft=Et[0],this.fungusTop=Rt[0],this.fungusRight=Et[4],this.fungusBottom=Rt[4],this.addHotspot(Et[2],Rt[2],!1),this.addHotspot(Et[3],Rt[3],!0)}paintInternal(){this.paintInternalTiles(St,32),this.paintInternalFungus(Et[1],Rt[1],7)}},class extends rt{constructor(){super(),this.fungus=!0,this.fungusLeft=At[0],this.fungusTop=Mt[0],this.fungusRight=At[6],this.fungusBottom=Mt[6],this.addHotspot(At[1],Mt[1],!1),this.addHotspot(At[2],Mt[2],!0),this.addHotspot(At[4],Mt[4],!1),this.addHotspot(At[5],Mt[5],!0)}paint(t){I(w,480,432,24,"24","#eaeae8","Written by Mark Vasilkov for js13kGames in 2022")}paintInternal(){this.paintInternalTiles(Ct,24),this.paintInternalFungus(At[3],Mt[3],10)}},class extends rt{constructor(){super(),this.addHotspot(gt[0],vt[0],!1),this.addHotspot(gt[1],vt[1],!0),this.opacity=1}reset(){super.reset(),this.opacity=1}setPoint(t,e,s){super.setPoint(t,e,s),this.entryPoints[0].isSatisfied&&this.exitPoints[0].isSatisfied||(1===s||s>9)&&(this.opacity=t<gt[0]?1:t>gt[1]?0:1-(t-gt[0])/(gt[1]-gt[0]))}paint(t){!function(t){const e=136;var s;P.fillStyle="#7b8382",P.fillRect(e,63,147,144),P.drawImage(J,0,0,J.width,J.height,150,79,119,112),P.globalAlpha=1-((s=t)<.5?2*s*s:2*s*(2-s)-1),P.fillStyle="#eaeae8",P.fillRect(e,63,147,144),P.drawImage(K,0,0,K.width,K.height,185,79,77,112),P.globalAlpha=1}(this.opacity),I(w,480,81,24,"24","#eaeae8","Thank you for playing!"),I(w,480,459,24,"24","#eaeae8","But our princess is in another castle!")}paintInternal(){this.paintInternalTiles(pt,21)}},Pt,class extends rt{constructor(){super(),this.reflect=!0,this.addHotspot(dt[0],ft[0],!1),this.addHotspot(dt[1],ft[1],!1),this.addHotspot(dt[2],ft[2],!1),this.addHotspot(dt[3],ft[3],!0),this.addHotspot(dt[4],ft[4],!1),this.addHotspot(dt[5],ft[5],!0),this.addHotspot(dt[6],ft[6],!0),this.addHotspot(dt[7],ft[7],!0)}paintInternal(){this.paintInternalTiles(ut,40)}},class extends rt{constructor(){super(),this.reflect=!0,this.addHotspot(ht[0],ct[0],!1),this.addHotspot(ht[1],ct[1],!1),this.addHotspot(ht[2],ct[2],!1),this.addHotspot(ht[3],ct[3],!1),this.addHotspot(ht[4],ct[4],!1),this.addHotspot(ht[5],ct[5],!1),this.addHotspot(ht[6],ct[6],!0),this.addHotspot(ht[7],ct[7],!0),this.addHotspot(ht[8],ct[8],!0),this.addHotspot(ht[9],ct[9],!0),this.addHotspot(ht[10],ct[10],!0),this.addHotspot(ht[11],ct[11],!0)}paintInternal(){this.paintInternalTiles(lt,25)}},class extends rt{constructor(){super(),this.reflect=!0,this.addHotspot(z[0]-3,D[0],!1),this.addHotspot(z[1]-3,D[1],!1),this.addHotspot(z[2]-3,D[2],!0),this.addHotspot(z[3]-3,D[3],!1),this.addHotspot(z[4]-3,D[4],!0),this.addHotspot(z[5]-3,D[5],!1),this.addHotspot(z[6]-3,D[6],!0),this.addHotspot(z[7]-3,D[7],!0)}paintInternal(){this.paintInternalTiles2(_,13)}},Pt,class extends rt{constructor(){super(),this.buttonsEnabled=2,this.addHotspot(210,135,!1),bt(-20,((t,e)=>{this.addHotspot(t,e,!0)}))}_connect(t,e){super._connect(t,e);const s=this.entryPoints[0].index;let n;if(s===t)n=e;else{if(s!==e)return;n=t}if(this.entryPoints[0].isSatisfied){if(L.levelIndex=n-this.exitPoints[0].index-1,L.levelIndex>=14){L.levelIndex+=2;if(!("#coil"===location.hash||document.monetization&&"started"===document.monetization.state))return L.restartMessage=ot(this.hotspots[t],this.hotspots[e],!0),void S(3)}S(4)}}paint(t){I(w,480,351,48,"bold 48","#eaeae8","The Neatness")}paintInternal(){bt(0,((t,e,s)=>{const n=s===L.currentLevel?"#eaeae8":L.completedLevels[s]?"#7b8382":"#ff0040";I(P,t,e,12,"200 12",n,s>16?"Coil-"+(s-16):""+(s+1),"#0000")}))}}];function ae(t){21===t||0!==t&&!L.completedLevels[t-1]||(16===t||20===t?(L.currentLevel=t-1,L.levelIndex=t=21):L.currentLevel=t),L.level=new oe[t],S(0)}const re=new class{constructor(t,e,s){this.updateWrapper=()=>{const t=visualViewport.width,e=visualViewport.height,s=t/e,n=this.width/this.height;let i=visualViewport.offsetLeft,o=visualViewport.offsetTop;n<s?(this.scale=e/this.height,i+=.5*(t-this.scale*this.width)):(this.scale=t/this.width,o+=.5*(e-this.scale*this.height)),this.wrapper.style.transform=`translate(${i}px, ${o}px) scale(${this.scale})`},this.wrapper=t,this.width=e,this.height=s,this.scale=1}addEventListeners(){addEventListener("resize",this.updateWrapper),visualViewport.addEventListener("resize",this.updateWrapper),visualViewport.addEventListener("scroll",this.updateWrapper),this.updateWrapper()}documentToViewport(t){t.x/=this.scale,t.y/=this.scale}}(document.querySelector("#a"),960,540);re.addEventListeners();const le=new class extends class{constructor(t){this.x=this.y=0,this.held=!1,this.canvas=t}setPosition(t){const e=this.canvas.getBoundingClientRect();this.x=t.clientX-e.left,this.y=t.clientY-e.top}addEventListeners(t){t.addEventListener("mousedown",(t=>{t.preventDefault(),this.held=!0,this.setPosition(t)})),t.addEventListener("mousemove",(t=>{t.preventDefault(),this.setPosition(t)})),t.addEventListener("mouseup",(t=>{t.preventDefault(),this.held=!1})),t.addEventListener("mouseleave",(t=>{this.held=!1})),t.addEventListener("touchstart",(t=>{t.preventDefault(),this.held=!0,this.setPosition(t.targetTouches[0])})),t.addEventListener("touchmove",(t=>{t.preventDefault(),this.setPosition(t.targetTouches[0])})),t.addEventListener("touchend",(t=>{t.preventDefault(),this.held=!1})),t.addEventListener("touchcancel",(t=>{this.held=!1}))}}{constructor(t,e){super(t),this.paintLine=e,this.receivedFirstEvent=!1}setPosition(t){const e=this.x,s=this.y;super.setPosition(t),re.documentToViewport(this),this.receivedFirstEvent?this.held&&L.held&&this.paintLine(e,s,this.x,this.y):this.receivedFirstEvent=!0}}(x.canvas,(function(t,e,s,n){de(t,e,s,n,L.level.reflect?1:0),L.level.reflect&&de(960-t,e,960-s,n,2)}));function he(){r.initialized||r.initialize(c)}le.addEventListeners(document),document.addEventListener("contextmenu",(t=>{t.preventDefault()})),document.addEventListener("touchend",he),document.addEventListener("mousedown",he),document.addEventListener("mouseup",he);const ce=new t,ue=new t;function de(t,e,s,n,i){if(2!==L.levelPhase)return;const o=2===i?-.5:.5;if(e=(e+.5)/2,(t=(t+o)/2.2857142857142856)<0||t>=420||e<0||e>=270)return;const a=0|t,r=0|e,l=0|(s=(s+o)/2.2857142857142856),h=0|(n=(n+.5)/2);if(pe(a,r,i),a===l&&r===h){const t=L.level.getAnyConnectedNeighbour(a,r);return void(0!==t&&fe([[a,r,t]]))}ce.set(t,e);const c=ue.set(s,n).subtract(ce).length(),u=[];let d=!1;!function(t,e,s){const n=Math.abs(1/e.x),i=Math.abs(1/e.y);let o,a,r,l,h,c,u=Math.floor(t.x),d=Math.floor(t.y);for(e.x<0?(r=-1,o=(t.x-u)*n):(r=1,o=(u+1-t.x)*n),e.y<0?(l=-1,a=(t.y-d)*i):(l=1,a=(d+1-t.y)*i);;)if((c=o<a)?(u+=r,h=o,o+=n):(d+=l,h=a,a+=i),s(u,d,h))return F.hitDistance=h,F.hitVerticalSide=c,F.setMultiplyScalar(e,h).add(t)}(ce,ue.normalize(),(function(t,e,s){if(t<0||t>=420||e<0||e>=270)return!0;if(pe(t,e,i)){if(!d){const s=L.level.getAnyConnectedNeighbour(t,e);0!==s&&(u.push([t,e,s]),d=!0)}}else d=!1;return t===l&&e===h||(s>=c||void 0)})),fe(u)}function fe(t){for(const[e,s,n]of t)V(T,420,270,e,s,(t=>1===t),(function(t,e){L.level.setPoint(t,e,n);for(const s of L.level.getNeighbourhood(t,e))s>9&&s!==n&&L.level.connect(n,s)}))}function pe(t,e,s){if(t<210){if(2===s)return!1}else if(1===s)return!1;const n=T[e][t];return!(n>1)&&(L.level.setPoint(t,e,1),0===n&&L.level.advanceFungus(),!0)}ae(0),L.level.reset(),S(2),function(t,e,s=20){let n,i=0;function o(a){requestAnimationFrame(o),i+=a-n,n=a;let r=4;for(;i>0;)i-=s,--r>=0&&t(s);e(i/s+1)}requestAnimationFrame((function(t){requestAnimationFrame(o),n=t}))}((function(){switch(L.oldProgress=L.phaseProgress,L.held=le.held,L.levelPhase){case 0:L.level.reset(),S(1,48);break;case 1:--L.phaseProgress<=0&&S(2);break;case 2:if(L.phaseProgress>0&&--L.phaseProgress,++L.skullsTurnProgress>=50&&(L.skullsTurnProgress-=50,Math.random()<.5&&L.level.entryPoints.length>0)){const t=Math.random()*L.level.entryPoints.length|0;L.level.entryPoints[t].turn()}for(const t of L.level.entryPoints)t.update();M(le),L.level.hasWon()&&(L.completedLevels[L.levelIndex]=!0,S(4));break;case 3:le.held=!1,L.level.reset(),S(2,125);break;case 4:++L.phaseProgress>=48&&ae(++L.levelIndex)}}),(function(t){w.clearRect(0,0,960,540),L.level.paint(t);for(const t of Object.values(L.level.hotspots))t.paint();const e=function(t,e,s){return t*(1-s)+e*s}(L.oldProgress,L.phaseProgress,t);switch(L.levelPhase){case 0:q(480,270,-551,551);break;case 1:case 4:!function(t){let e;1===L.levelPhase?(e=.5*function(t){return t*t}((L.phaseProgress+1-t)/48)*1102,q(480,270,-e,e)):4===L.levelPhase&&(e=.5*B((L.phaseProgress-1+t)/48)*1102,q(0,540,e),q(960,0,-e))}(t);break;case 2:e>0&&at(e/125);break;case 3:at(1)}}))}();