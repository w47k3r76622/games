var _e=Object.defineProperty;var ve=(t,e,n)=>e in t?_e(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var z=(t,e,n)=>ve(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(r){if(r.ep)return;r.ep=!0;const a=n(r);fetch(r.href,a)}})();function S(){}function ce(t){return t()}function ne(){return Object.create(null)}function A(t){t.forEach(ce)}function ue(t){return typeof t=="function"}function J(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let j;function ye(t,e){return t===e?!0:(j||(j=document.createElement("a")),j.href=e,t===j.href)}function we(t){return Object.keys(t).length===0}function g(t,e){t.appendChild(e)}function T(t,e,n){t.insertBefore(e,n||null)}function E(t){t.parentNode&&t.parentNode.removeChild(t)}function $e(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function v(t){return document.createElement(t)}function de(t){return document.createTextNode(t)}function $(){return de(" ")}function fe(){return de("")}function k(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function be(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function s(t,e,n){const i=e.toLowerCase();i in t?t[i]=typeof t[i]=="boolean"&&n===""?!0:n:e in t?t[e]=typeof t[e]=="boolean"&&n===""?!0:n:be(t,e,n)}function xe(t){return Array.from(t.childNodes)}function Se(t,e,{bubbles:n=!1,cancelable:i=!1}={}){return new CustomEvent(t,{detail:e,bubbles:n,cancelable:i})}let V;function P(t){V=t}function he(){if(!V)throw new Error("Function called outside component initialization");return V}function Ee(t){he().$$.on_mount.push(t)}function me(){const t=he();return(e,n,{cancelable:i=!1}={})=>{const r=t.$$.callbacks[e];if(r){const a=Se(e,n,{cancelable:i});return r.slice().forEach(o=>{o.call(t,a)}),!a.defaultPrevented}return!0}}const L=[],ie=[];let U=[];const oe=[],Ae=Promise.resolve();let K=!1;function Ce(){K||(K=!0,Ae.then(ge))}function X(t){U.push(t)}const W=new Set;let F=0;function ge(){if(F!==0)return;const t=V;do{try{for(;F<L.length;){const e=L[F];F++,P(e),ke(e.$$)}}catch(e){throw L.length=0,F=0,e}for(P(null),L.length=0,F=0;ie.length;)ie.pop()();for(let e=0;e<U.length;e+=1){const n=U[e];W.has(n)||(W.add(n),n())}U.length=0}while(L.length);for(;oe.length;)oe.pop()();K=!1,W.clear(),P(t)}function ke(t){if(t.fragment!==null){t.update(),A(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(X)}}function Te(t){const e=[],n=[];U.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),U=e}const G=new Set;let M;function Me(){M={r:0,c:[],p:M}}function Re(){M.r||A(M.c),M=M.p}function I(t,e){t&&t.i&&(G.delete(t),t.i(e))}function H(t,e,n,i){if(t&&t.o){if(G.has(t))return;G.add(t),M.c.push(()=>{G.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}function D(t){return(t==null?void 0:t.length)!==void 0?t:Array.from(t)}function Be(t,e){t.d(1),e.delete(t.key)}function Oe(t,e,n,i,r,a,o,l,c,u,h,m){let d=t.length,f=a.length,y=d;const R={};for(;y--;)R[t[y].key]=y;const w=[],B=new Map,p=new Map,C=[];for(y=f;y--;){const _=m(r,a,y),b=n(_);let x=o.get(b);x?C.push(()=>x.p(_,e)):(x=u(b,_),x.c()),B.set(b,w[y]=x),b in R&&p.set(b,Math.abs(y-R[b]))}const O=new Set,te=new Set;function q(_){I(_,1),_.m(l,h),o.set(_.key,_),h=_.first,f--}for(;d&&f;){const _=w[f-1],b=t[d-1],x=_.key,N=b.key;_===b?(h=_.first,d--,f--):B.has(N)?!o.has(x)||O.has(x)?q(_):te.has(N)?d--:p.get(x)>p.get(N)?(te.add(x),q(_)):(O.add(N),d--):(c(b,o),d--)}for(;d--;){const _=t[d];B.has(_.key)||c(_,o)}for(;f;)q(w[f-1]);return A(C),w}function pe(t){t&&t.c()}function Q(t,e,n){const{fragment:i,after_update:r}=t.$$;i&&i.m(e,n),X(()=>{const a=t.$$.on_mount.map(ce).filter(ue);t.$$.on_destroy?t.$$.on_destroy.push(...a):A(a),t.$$.on_mount=[]}),r.forEach(X)}function Y(t,e){const n=t.$$;n.fragment!==null&&(Te(n.after_update),A(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Fe(t,e){t.$$.dirty[0]===-1&&(L.push(t),Ce(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Z(t,e,n,i,r,a,o=null,l=[-1]){const c=V;P(t);const u=t.$$={fragment:null,ctx:[],props:a,update:S,not_equal:r,bound:ne(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:ne(),dirty:l,skip_bound:!1,root:e.target||c.$$.root};o&&o(u.root);let h=!1;if(u.ctx=n?n(t,e.props||{},(m,d,...f)=>{const y=f.length?f[0]:d;return u.ctx&&r(u.ctx[m],u.ctx[m]=y)&&(!u.skip_bound&&u.bound[m]&&u.bound[m](y),h&&Fe(t,m)),d}):[],u.update(),h=!0,A(u.before_update),u.fragment=i?i(u.ctx):!1,e.target){if(e.hydrate){const m=xe(e.target);u.fragment&&u.fragment.l(m),m.forEach(E)}else u.fragment&&u.fragment.c();e.intro&&I(t.$$.fragment),Q(t,e.target,e.anchor),ge()}P(c)}class ee{constructor(){z(this,"$$");z(this,"$$set")}$destroy(){Y(this,1),this.$destroy=S}$on(e,n){if(!ue(n))return S;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!we(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Le="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Le);function Ue(t,e){let n=t.font.match(/(\d+)px/),i=n?Number(n[1]):10,r=Ie(t),a=i;e.split(/\n/).forEach(o=>{for(;;){let l=Pe(t,o,r,a);if(a+=i,o===l||(o=l,!o))break}})}function Ie(t){switch(t.textAlign){case"start":return 0;case"center":return t.canvas.width*.5;case"right":return t.canvas.width}throw new Error("Unknown textAlign: "+t.textAlign)}function Pe(t,e,n,i){let r=t.canvas.width;for(let a=1;a<e.length;++a){let o=e.substr(0,a);if(t.measureText(o).width>r){let c=e.lastIndexOf(" ",a),u=c===-1?a-1:c+1,h=o.substr(0,u);return t.fillText(h,n,i),e.substr(u)}}return t.fillText(e,n,i),null}AFRAME.registerComponent("canvas-text",{dependencies:["canvas-material"],schema:{text:{type:"string"},font:{type:"string"},strokeStyle:{type:"string"},fillStyle:{type:"string"},textAlign:{type:"string"},textBaseline:{type:"string"},direction:{type:"string"},shadowBlur:{type:"number"},shadowColor:{type:"string"}},update(){let t=this.el.components["canvas-material"],e=t.data.width,n=t.data.height,i=this.ctx;i=t.getContext(),i.clearRect(0,0,e,n),i.font=this.data.font,i.strokeStyle=this.data.strokeStyle,i.fillStyle=this.data.fillStyle,i.textAlign=this.data.textAlign,i.textBaseline=this.data.textBaseline,i.direction=this.data.direction,i.shadowBlur=this.data.shadowBlur,i.shadowColor=this.data.shadowColor,Ue(i,this.data.text),t.updateTexture()}});AFRAME.registerComponent("canvas-material",{schema:{width:{type:"int",default:200},height:{type:"int",default:200},byId:{type:"boolean",default:!1},id:{type:"string",default:""}},update:function(){this.canvas||(this.canvas=document.createElement("canvas")),this.canvas.width=this.data.width,this.canvas.height=this.data.height;const t=new THREE.CanvasTexture(this.canvas),e=new THREE.MeshStandardMaterial({map:t,transparent:!0,side:AFRAME.THREE.DoubleSide});this.data.byId&&this.data.id?(this.canvas.setAttribute("id",this.data.id),document.body.appendChild(this.canvas),this.el.setAttribute("src",`#${this.data.id}`)):setTimeout(()=>{this.el.object3D.children[0].material=e},100),this.getContext=()=>this.canvas.getContext("2d"),this.updateTexture=()=>t.needsUpdate=!0}});AFRAME.registerShader("grid-shader",{schema:{time:{type:"time",is:"uniform"},uvScale:{type:"float",is:"uniform",default:5}},vertexShader:"varying vec2 vUV;uniform float uvScale;void main(){vUV=uv*uvScale;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",fragmentShader:"varying vec2 vUV;uniform float time;void main(){vec3 color1=vec3(1.0,0.0,0.0);vec3 color2=vec3(0.0,0.0,1.0);vec3 color3=vec3(0.0,1.0,0.0);vec3 gridColor;float phase=mod(time*0.0001,3.0);if(phase<1.0){gridColor=mix(color1,color2,phase);}else if(phase<2.0){gridColor=mix(color2,color3,phase-1.0);}else{gridColor=mix(color3,color1,phase-2.0);}float gridWidth=0.05;vec2 grid=fract(vec2(vUV.x,vUV.y+time*0.00005)*10.0)-0.5;float line=min(abs(grid.x),abs(grid.y));float intensity=smoothstep(gridWidth,gridWidth-0.02,line);vec3 color=gridColor*intensity;float alpha=intensity>0.0?0.5:0.0;gl_FragColor=vec4(color,alpha);}"});AFRAME.registerShader("sun-shader",{schema:{time:{type:"time",is:"uniform"}},vertexShader:"varying vec2 vUV;void main(){vUV=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",fragmentShader:"precision mediump float;uniform float time;varying vec2 vUV;void main(){vec2 uv=vUV;vec2 sunCenter=vec2(0.5,0.5);float sunRadius=0.45;vec3 topColor=vec3(1.2,0.9,0.0);vec3 bottomColor=vec3(1.2,0.3,0.4);float dist=length(uv-sunCenter);vec3 color=mix(bottomColor,topColor,smoothstep(0.0,1.0,uv.y));float glowIntensity=smoothstep(sunRadius-0.02,sunRadius,dist);if(dist<sunRadius&&uv.y<0.5){float lineThickness=0.2;float speed=time*0.0001;float lines=mod(uv.y*2.0+speed,0.3);if(step(lineThickness,lines)>0.0){discard;}}if(dist<sunRadius){gl_FragColor=vec4(color,1.0);}else{discard;}}"});AFRAME.registerComponent("canvas-sky",{init:function(){const t=document.createElement("canvas");t.width=1024,t.height=512;const e=t.getContext("2d"),n=t.width,i=t.height,r=e.createLinearGradient(n/2,0,n/2,i);r.addColorStop(0,"#303461"),r.addColorStop(.3,"#85536E"),r.addColorStop(.6,"#D46A4B"),r.addColorStop(.9,"#EB7337"),e.fillStyle=r,e.fillRect(0,0,n,i);const a=new THREE.CanvasTexture(t);this.el.setAttribute("material","shader","flat"),this.el.setAttribute("material","src",a)}});AFRAME.registerComponent("mountains",{init:function(){const t=this.el,e=document.createElement("canvas");e.width=1024,e.height=512;const n=e.getContext("2d");["#813945","#7B3647","#753146","#663047"].forEach(a=>{let o=0,l=e.height*(Math.random()*.2+.7);for(n.strokeStyle=a,n.beginPath(),n.moveTo(o,l);o<e.width;){let c=Math.random()*20+50,u=(Math.random()-.5)*100;o+=c,l+=u,(l<0||l>e.height)&&(l-=2*u),n.lineTo(o,l)}n.lineTo(e.width,l),n.lineTo(e.width,e.height),n.lineTo(0,e.height),n.lineTo(0,e.height*.7),n.stroke(),n.fillStyle=a,n.fill()});const r=new THREE.CanvasTexture(e);t.setAttribute("material","src",r)}});const Ve=new URL("/assets/Pistol_5.2b834b42.glb",location.href).href;function re(t,e,n){const i=t.slice();return i[5]=e[n],i[7]=n,i}function ae(t,e){let n,i,r,a,o,l,c,u,h;return{key:t,first:null,c(){n=v("a-entity"),i=v("a-gltf-model"),r=v("a-plane"),a=$(),o=v("a-entity"),c=$(),s(r,"position",".17 .04 0"),s(r,"rotation","0 90 0"),s(r,"geometry","primitive: plane; width: .2; height: .2"),s(r,"canvas-material","width:1024; height:1024"),s(r,"canvas-text"," text: 💥; font: 500px sans-serif; textAlign: center; textBaseline: middle; "),s(r,"animation","startEvents: bang; property: scale; to: 1 1 1; dur: 100;"),s(r,"animation__hide","startEvents: hidebang; property: scale; to: 0 0 0; dur: 10;"),s(r,"scale","0 0 0"),s(o,"class","gun-raycaster"),s(o,"raycaster","objects: .target; showLine: true; lineColor:red; far: 40; autoRefresh: true; enabled: true"),s(o,"position","-.05 .07 0"),s(o,"rotation","0 -90 0"),s(i,"position","0 0 0"),s(i,"rotation","0 90 -45"),ye(i.src,l=Ve)||s(i,"src",l),s(n,"oculus-touch-controls",`hand: ${e[0](e[7])}; model: false;`),s(n,"haptics","events: triggerdown; dur: 200; force: 0.5"),this.first=n},m(m,d){T(m,n,d),g(n,i),g(i,r),g(i,a),g(i,o),g(n,c),u||(h=[k(r,"animationcomplete",e[1]),k(n,"triggerdown",e[2]),k(n,"pinchstarted",e[2])],u=!0)},p(m,d){e=m},d(m){m&&E(n),u=!1,A(h)}}}function Ne(t){let e=[],n=new Map,i,r=D(Array(2));const a=o=>o[7];for(let o=0;o<r.length;o+=1){let l=re(t,r,o),c=a(l);n.set(c,e[o]=ae(c,l))}return{c(){for(let o=0;o<e.length;o+=1)e[o].c();i=fe()},m(o,l){for(let c=0;c<e.length;c+=1)e[c]&&e[c].m(o,l);T(o,i,l)},p(o,[l]){l&7&&(r=D(Array(2)),e=Oe(e,l,a,1,o,r,n,i.parentNode,Be,ae,i,re))},i:S,o:S,d(o){o&&E(i);for(let l=0;l<e.length;l+=1)e[l].d(o)}}}function je(t){const e=me(),n=o=>o===0?"left":"right",i=o=>{o.children[0].children[0].emit("bang")};return[n,o=>{o.target.emit("hidebang")},o=>{const l=o.target,c=o.target.querySelector(".gun-raycaster");if(i(l),c.components.raycaster.intersections.length===0)return;c.components.raycaster.intersections[0].object.el.emit("hit"),e("hit")}]}class Ge extends ee{constructor(e){super(),Z(this,e,je,Ne,J,{})}}function se(t,e,n){const i=t.slice();return i[9]=e[n],i[11]=n,i}function le(t){let e,n,i,r;return{c(){e=v("a-image"),n=$(),s(e,"position",t[4]()),s(e,"animation",`startEvents: start-animation; property: position; to: ${Math.random()*2-1} 0 ${Math.random()*2}; dur: 5000; easing: linear; loop: false`),s(e,"class",`enemy-${t[11]} target`),s(e,"width","1"),s(e,"height","1"),s(e,"visible","true"),s(e,"canvas-material","width:2048; height:2048"),s(e,"canvas-text","text: 🤖; font: 1300px sans-serif; textAlign: center; textBaseline: middle;")},m(a,o){T(a,e,o),T(a,n,o),i||(r=[k(e,"animationcomplete",t[1]),k(e,"hit",t[2]),k(e,"loaded",t[3])],i=!0)},p:S,d(a){a&&(E(e),E(n)),i=!1,A(r)}}}function He(t){let e,n=D(t[0]),i=[];for(let r=0;r<n.length;r+=1)i[r]=le(se(t,n,r));return{c(){for(let r=0;r<i.length;r+=1)i[r].c();e=fe()},m(r,a){for(let o=0;o<i.length;o+=1)i[o]&&i[o].m(r,a);T(r,e,a)},p(r,[a]){if(a&30){n=D(r[0]);let o;for(o=0;o<n.length;o+=1){const l=se(r,n,o);i[o]?i[o].p(l,a):(i[o]=le(l),i[o].c(),i[o].m(e.parentNode,e))}for(;o<i.length;o+=1)i[o].d(1);i.length=n.length}},i:S,o:S,d(r){r&&E(e),$e(i,r)}}}function De(t){const e=me();let n=[{},{},{},{},{}];function i(c){c.setAttribute("position",l()),c.emit("start-animation")}function r(c){const u=c.target;e("miss"),i(u)}function a(c){const u=c.target;e("hit"),i(u)}function o(){n.forEach((c,u)=>{const h=document.querySelector(`.enemy-${u}`);h&&h.emit("start-animation")})}const l=()=>`${Math.random()*26-5} -1 ${Math.random()*-100-10}`;return Ee(()=>{o()}),[n,r,a,o,l]}class qe extends ee{constructor(e){super(),Z(this,e,De,He,J,{})}}function ze(t){let e,n,i,r,a,o;return a=new qe({props:{position:"0 -1 0"}}),a.$on("miss",t[5]),a.$on("hit",t[4]),{c(){e=v("a-entity"),n=v("a-text"),r=$(),pe(a.$$.fragment),s(n,"value",i="Score: "+t[0]),s(n,"align","center"),s(n,"width","4"),s(e,"position","0 3 -4")},m(l,c){T(l,e,c),g(e,n),g(e,r),Q(a,e,null),o=!0},p(l,c){(!o||c&1&&i!==(i="Score: "+l[0]))&&s(n,"value",i)},i(l){o||(I(a.$$.fragment,l),o=!0)},o(l){H(a.$$.fragment,l),o=!1},d(l){l&&E(e),Y(a)}}}function We(t){let e,n,i,r,a,o,l,c,u,h,m;return{c(){e=v("a-entity"),n=v("a-text"),r=$(),a=v("a-entity"),o=v("a-plane"),l=$(),c=v("a-text"),s(n,"value",i=`${t[0]<-10?"Game Over":`Defend yourself!
13's are coming!`}

Score: ${t[0]}

High Score: ${t[1]}`),s(n,"align","center"),s(n,"width","6"),s(n,"position","0 1 0"),s(o,"color","#4CAF50"),s(o,"height","0.3"),s(o,"width","1.5"),s(o,"class","clickable target"),s(o,"position","0 0 0"),s(o,"event-set__enter","_event: mouseenter; color: #45a049"),s(o,"event-set__leave","_event: mouseleave; color: #4CAF50"),s(c,"value",u=t[0]<-10?"Restart Game":"Shoot to Start"),s(c,"align","center"),s(c,"position","0 0 0.01"),s(c,"width","4"),s(a,"position","0 -0.5 0"),s(e,"position","0 1.5 -4")},m(d,f){T(d,e,f),g(e,n),g(e,r),g(e,a),g(a,o),g(a,l),g(a,c),h||(m=[k(o,"click",t[3]),k(o,"hit",t[3])],h=!0)},p(d,f){f&3&&i!==(i=`${d[0]<-10?"Game Over":`Defend yourself!
13's are coming!`}

Score: ${d[0]}

High Score: ${d[1]}`)&&s(n,"value",i),f&1&&u!==(u=d[0]<-10?"Restart Game":"Shoot to Start")&&s(c,"value",u)},i:S,o:S,d(d){d&&E(e),h=!1,A(m)}}}function Ke(t){let e,n,i,r,a,o,l,c,u,h,m,d,f,y;h=new Ge({}),h.$on("hit",t[4]);const R=[We,ze],w=[];function B(p,C){return p[2]?1:0}return d=B(t),f=w[d]=R[d](t),{c(){e=v("a-scene"),n=v("a-image"),i=$(),r=v("a-plane"),a=$(),o=v("a-image"),l=$(),c=v("a-sky"),u=$(),pe(h.$$.fragment),m=$(),f.c(),s(n,"mountains",""),s(n,"width","35"),s(n,"height","2"),s(n,"position","0 0.8 -45"),s(n,"scale","3 3 3"),s(r,"scale","35 35 35"),s(r,"material","shader: sun-shader;"),s(r,"position","0 19 -100"),s(o,"material","shader: grid-shader;"),s(o,"width","40"),s(o,"height","40"),s(o,"position","0 -1 -10"),s(o,"rotation","90 180 0"),s(c,"canvas-sky",""),s(c,"segments-width","8"),s(c,"segments-height","16"),s(e,"cursor","rayOrigin: mouse"),s(e,"raycaster","objects: .clickable"),s(e,"fog","type: exponential; density: 0.001")},m(p,C){T(p,e,C),g(e,n),g(e,i),g(e,r),g(e,a),g(e,o),g(e,l),g(e,c),g(e,u),Q(h,e,null),g(e,m),w[d].m(e,null),y=!0},p(p,[C]){let O=d;d=B(p),d===O?w[d].p(p,C):(Me(),H(w[O],1,1,()=>{w[O]=null}),Re(),f=w[d],f?f.p(p,C):(f=w[d]=R[d](p),f.c()),I(f,1),f.m(e,null))},i(p){y||(I(h.$$.fragment,p),I(f),y=!0)},o(p){H(h.$$.fragment,p),H(f),y=!1},d(p){p&&E(e),Y(h),w[d].d()}}}function Xe(t,e,n){let i=0,r=localStorage.getItem("highScore")||0,a=!1;function o(){a&&i>r&&(n(1,r=i),localStorage.setItem("highScore",r)),n(0,i=0),n(2,a=!a)}function l(){n(0,i+=10),u()}function c(){n(0,i-=5),u()}function u(){i<-10&&o()}return[i,r,a,o,l,c]}class Je extends ee{constructor(e){super(),Z(this,e,Xe,Ke,J,{})}}new Je({target:document.getElementById("app")});
