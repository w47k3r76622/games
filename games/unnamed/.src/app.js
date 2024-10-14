/**
 * My entry to js13kgames 2024 - Triskaidekaphobia.
 * Copyright (C) 2024	André Jaenisch
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published
 * by the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

!function(){"use strict";function t(t){return t.cloneNode(!0)}function e(t){const[n,o,a,i,r]=t;let s;s=["animate","animateMotion","circle","g","mpath","path","polygon","rect","svg","text","tspan"].includes(n)?document.createElementNS("http://www.w3.org/2000/svg",n):document.createElement(n);(o||[]).forEach((t=>s.classList.add(t))),Object.entries(a||{}).forEach((([t,e])=>s.setAttribute(t,e))),s.textContent=i||"";return(r||[]).forEach((t=>s.appendChild(e(t)))),s}function n(n,o){const a=t(n);return a.innerHTML="","title-section"===o.activeScene&&a.appendChild(e(["div",[],{},"",[["h1",[],{},"Name of the game"],["div",["f","fc","g"],{},"",[["button",[],{"data-scene":"new-game-section"},"New Game"],["button",[],{"data-scene":"load-game-section"},"Load Game"],["button",[],{"data-scene":"settings-section"},"Settings"],["button",[],{"data-scene":"about-section"},"About"]]]]])),a}function o(n,o){const a=t(n);return a.innerHTML="","settings-section"===o.activeScene&&a.appendChild(e(["div",[],{},"",[["h1",[],{},"Settings"],["fieldset",[],{},"",[["legend",[],{},"Visual Interface"],["div",[],{},"",[["label",[],{for:"color-preference"},"Choose your theme"]]],["div",[],{},"",[["select",[],{id:"color-preference"},"",[["option",[],{value:"system",checked:"checked"},"System"],["option",[],{value:"light"},"Light"],["option",[],{value:"dark"},"Dark"]]]]]]],["div",[],{},"",[["button",[],{"data-scene":"title-section"},"Back to Title"]]]]])),a}function a(n,o){const a=t(n);return a.innerHTML="","about-section"===o.activeScene&&a.appendChild(e(["div",[],{},"",[["h1",[],{},"About"],["p",[],{},"This game was developed entirely by me, ",[["a",[],{href:"https://jaenis.ch/"},"André Jaenisch"]]],["p",[],{},"It is licensed under ",[["a",[],{href:"https://code.jaenis.ch/js13kgames/js13kgames-2024/src/branch/main/LICENSES/AGPL-3.0-or-later.txt"},"AGPL version 3 or newer"]]],["p",[],{},"Find the source code on ",[["a",[],{href:"https://code.jaenis.ch/js13kgames/js13kgames-2024/"},"my Forgejo instance"]]],["div",[],{},"",[["button",[],{"data-scene":"title-section"},"Back to Title"]]]]])),a}function i(n,o){const a=t(n);return a.innerHTML="","new-game-section"===o.activeScene&&a.appendChild(e(["div",[],{},"",[["h1",[],{},"New game"],["fieldset",[],{},"",[["legend",[],{},"Player name"],["div",[],{},"",[["label",[],{for:"playername"},"How do you want to be known?"]]],["div",[],{},"",[["input",[],{id:"playername",type:"text",max:"64"}]]]]],["p",[],{},r(o)],["div",[],{},"",s(o)]]])),a}function r(t){const{playername:e}=t;return e?`I greet you, ${e}.`:""}function s(t){const{playername:e}=t;return e.trim()?[["button",["action"],{"data-scene":"level-section"},"Start playing"],["button",["action"],{"data-scene":"title-section"},"Back to Title"]]:[["button",["action"],{"data-scene":"title-section"},"Back to Title"]]}const c="TBD",l="GO_TO_MAP_ACTION",u="HELP_ACTION",p="MEET_ACTION",f="OFFER_ACTION",d="RESET_ACTION",m="SET_COLOR_PREFERENCE_ACTION",h="SET_PLAYERNAME_ACTION",v="SHOW_TEXTBOX_ACTION",y="SWITCH_TO_SCENE_ACTION";function g(n,o){const a=t(n);if(a.innerHTML="","load-game-section"===o.activeScene){const t=function(){const t=window.localStorage.getItem(c)||"[]";return JSON.parse(t)}();a.appendChild(e(["div",[],{},"",[["h1",[],{},"Load game"],["ul",[],{},"",t.map((t=>["li",[],{},t.playername,[["button",[],{type:"button","data-state":JSON.stringify(t)},"Load game"],["button",[],{type:"button","data-playername":t.playername},"Delete game"]]]))],["div",[],{},"",[["button",[],{"data-scene":"title-section"},"Back to Title"]]]]]))}return a}function b(n,o){const a=t(n);return a.innerHTML="","level-section"===o.activeScene&&a.appendChild(e(["div",[],{},"",[["h1",[],{},`Level in ${o.activeRoom}`],["div",[],{"data-component":"canvas"}],["div",[],{"data-component":"inventory"}],["div",[],{"data-component":"prompt"}],["div",[],{"data-component":"suggestions"}]]])),a}function w(n,o){const a=t(n);return a.appendChild(e(["svg",[],{"aria-role":"presentation",viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg"},"",[["def",[],{},"",[["path",[],{id:"gramma",fill:"none",stroke:"lightgrey",d:"M85,70 L85,60 L15,60"}]]],["text",[],{x:10,y:40},"🛌",[["tspan",["sr-only"],{},"You, sleeping in bed"]]],["text",[],{x:80,y:90},"🚪",[["tspan",["sr-only"],{},"A door"]]],,["text",[],{},"👵",[["tspan",["sr-only"],{},"An old woman"],["animateMotion",[],{dur:"3s",fill:"freeze",onend:`(${function(t){const{targetElement:e}=t,n=new CustomEvent("end",{bubbles:!0});e?.dispatchEvent(n)}.toString()})(this)`,repeatCount:"1"},"",[["mpath",[],{href:"#gramma"}]]]]],["g",[],{"data-component":"textbox"}]]])),a}function C(n,o){const a=t(n);return a.appendChild(e(["ul",[],{},"",[["li",[],{},"Inventory"]]])),a}function A(n,o){const a=t(n);return a.appendChild(e(["label",[],{for:"prompt"},"",[["span",["sr-only"],{},"What do you want to do?"],["input",[],{type:"text",id:"prompt",name:"prompt"}]]])),a}function E(n,o){const a=t(n);return a.appendChild(e(["label",[],{for:"possible-commands"},"",[["span",["sr-only"],{},"Suggested prompts"],["select",[],{id:"possible-commands",style:o.possiblePrompts.length>0?"":"display:none;"},"",[["option",[],{value:"",selected:"selected"},"pick suggestion"],...o.possiblePrompts.map((t=>["option",[],{value:`${o.prompt} ${t}`},t]))]]]])),a}function S(n,o){const a=t(n);return a.appendChild(e(["g",["tb"],{},"",[...T(o),...O(o)]])),a}function T(t){return 0===t.text.length?[]:(t.text.length,[["rect",[],{x:0,y:75,width:100,height:25}],...t.text.map(((t,e)=>["text",[],{x:5,y:85+10*e},t]))])}function O(t){return null===t.speaker?[]:[["text",[],{x:85,y:80},t.speaker]]}function x(t,e,n){if(e&&!n)return function(t){t.remove()}(e);if(!e&&n)return function(t,e){t.appendChild(e)}(t,n);if(function(t,e){if(t.tagName!==e.tagName)return!0;const n=t.attributes,o=e.attributes;return n.length!==o.length||(!!Array.from(n).find((function(n){const o=n.name;return t.getAttribute(o)!==e.getAttribute(o)}))||0===t.children.length&&0===e.children.length&&t.textContent!==e.textContent)}(e,n))return function(t,e){t.replaceWith(e)}(e,n);const o=Array.from(e.children),a=Array.from(n.children),i=Math.max(o.length,a.length);for(let t=0;t<i;t++)x(e,o[t],a[t])}const L=new Map;function k(t){return function(e,n){const o=t(e,n);return Array.from(o.querySelectorAll("[data-component]")).forEach((function(t){const e=t.dataset.component,o=L.get(e);o&&t.replaceWith(o(t,n))})),o}}function I(t,e){L.set(t,k(e))}function _(t,e,n){return Object.assign({},t,e,{})}function N(t,e){let{prompt:n}=e,{possiblePrompts:o}=t,[a,...i]=n.trim().split(" ");if(""===n.toLowerCase().trim())return _(t,{possiblePrompts:o});o=function(t){const e=function(t){return t.facts[`#${t.activeRoom}`]["schema:geoTouches"].map((t=>t.value)).map((e=>t.facts[e]))}(t);return e.map((t=>t["schema:name"][0].value.slice(1)))}(t);const r=o.find((t=>i.includes(t.toLowerCase())));return _(t,r?{activeRoom:r,possiblePrompts:[],prompt:""}:{prompt:e.prompt,possiblePrompts:o.map((t=>t.toLowerCase()))})}function P(t,e,n){return{"foaf:knows":e.map((t=>({value:t,type:"uri"}))),"foaf:name":[{value:t,type:"literal"}],"rdf:type":[{value:"http://xmlns.com/foaf/0.1/Person",type:"uri"}],"schema:gameLocation":[{value:n,type:"uri"}]}}function R(t){return{"rdf:type":[{value:"https://w3id.org/valueflows/ont/vf#ResourceSpecification",type:"uri"}],"vf:name":[{value:t,type:"literal"}]}}function j(t,e){return{"rdf:type":[{value:"https://schema.org/gameLocation",type:"uri"}],"schema:geoTouches":e.map((t=>({value:t,type:"uri"}))),"schema:name":[{value:t,type:"literal"}]}}const M={activeColorScheme:"system",activeRoom:"Inn",activeScenario:"",activeScene:"title-section",facts:{"#Apple":R("Apple"),"#AppleTree":function(t,e,n){const o=P(t,e,n);return o["rdf:type"][0].value="https://w3id.org/valueflows/ont/vf#EcologicalAgent",o}("AppleTree",[],"#Outside"),"#Inn":j("Inn",["#Outside"]),"#One":(B=1,U="http://www.ontology-of-units-of-measure.org/resource/om-2/one",{"rdf:type":[{value:"https://w3id.org/valueflows/ont/vf#Measure",type:"uri"}],"vf:hasNumericalValue":[{value:B,type:"literal"}],"vf:hasUnit":[{value:U,type:"uri"}]}),"#Outside":j("#Outside",["#Inn","#Shop"]),"#RaiseAction":(W="https://w3id.org/valueflows/ont/vf#raise",{"rdf:type":[{value:W,type:"uri"}],"vf:accountingEffect":[{value:"",type:"uri"}],"vf:accountableEffect":[{value:"",type:"uri"}],"vf:createResource":[{value:"",type:"uri"}],"vf:eventQuantity":[{value:"",type:"uri"}],"vf:onhandEffect":[{value:"",type:"uri"}],"vf:stateEffect":[{value:"",type:"uri"}]}),"#Shop":j("#Shop",["#Outside"]),"#Wheat":R("Wheat"),"#Yu":P("Yu",[],"#Inn")},playername:"",possiblePrompts:[],prompt:"",seed:"Triskaidekaphobia",speaker:null,text:[]};var W,B,U;function $(t,e,n,o,a,i,r){return{"rdf:type":[{value:"https://w3id.org/valueflows/ont/vf#EconomicEvent",type:"uri"}],"vf:action":[{value:t,type:"uri"}],"vf:provider":[{value:e,type:"uri"}],"vf:receiver":[{value:n,type:"uri"}],"vf:resourceConformsTo":[{value:o,type:"uri"}],"vf:resourceInventoriedAs":[{value:a,type:"uri"}],"vf:resourceQuantity":[{value:i,type:"uri"}],"vf:toLocation":[{value:r,type:"uri"}]}}function D(t,e,n){return{"rdf:type":[{value:"https://w3id.org/valueflows/ont/vf#EconomicResource",type:"uri"}],"vf:accountingQuantity":[{value:e,type:"uri"}],"vf:currentLocation":[{value:n,type:"uri"}],"vf:name":[{value:t,type:"literal"}]}}function F(t,e){let{name:n,seed:o}=e;const a=`#${n}`,i=P(n,[],"#Inn"),r=(s={"#Yu":t.facts["#Yu"],[a]:i},Object.fromEntries(Object.entries(s).map((([t,e],n,o)=>[t,{...e,"foaf:knows":[...e["foaf:knows"],...o.filter((([e,n])=>e!==t)).map((([t,e])=>({value:t,type:"uri"})))].filter((({value:t},e,n)=>0===e||1===n.filter((({value:e})=>e===t)).length))}]))));var s;return _(t,{facts:{...t.facts,"#Yu":r["#Yu"],"#AppleInInn":D("apple","#One","#Inn"),"#AppleInInnEvent":$("#RaiseAction","#AppleTree",a,"#Apple","#AppleInInn","#One","#Inn"),[a]:r[a]},seed:o})}function H(t,e){let{prompt:n}=e,{activeRoom:o,facts:a,possiblePrompts:i}=t,[r,...s]=n.trim().split(" ");if(n=n.toLowerCase().trim(),n.startsWith("offer")){i=function(t){const e=function(t){return Object.values(t.facts).filter((t=>"https://w3id.org/valueflows/ont/vf#EconomicEvent"===t["rdf:type"][0].value)).filter((e=>e["vf:toLocation"][0].value===`#${t.activeRoom}`)).map((t=>t["vf:resourceConformsTo"][0].value)).map((e=>t.facts[e]))}(t);return e.map((t=>t["vf:name"][0].value))}(t).map((t=>t.toLowerCase()));i.find((t=>s.includes(t)))&&(i=[],n="")}return _(t,{activeRoom:o,facts:a,possiblePrompts:i,prompt:n})}const G=new class{constructor(t){this.reducer=t,this.state=t(void 0,{type:d,payload:{}})}async dispatch(t){const e=this.state;this.state=this.reducer(this.state,t),this._applySideEffects(t,e,this.state)}getState(){return this.state}_applySideEffects(t,e,n){t.type===l&&this._maybeClearPrompt(e,n),t.type===f&&this._maybeClearPrompt(e,n),t.type===m&&this._applyColorTheme(t.payload.colorScheme),t.type===y&&this._setDocumentTitle()}_applyColorTheme(t){["system","light","dark"].forEach((t=>{document.body.classList.remove(`theme-${t}`)})),document.body.classList.add(`theme-${t}`)}_setDocumentTitle(){const{activeScene:t}=this.getState(),e=[{"about-section":"About","level-section":"","load-game-section":"Load Game","new-game-section":"New Game","settings-section":"Settings","title-section":""}[t],"js13kgames 2024"];document.title=e.filter(Boolean).join(" | ")}_maybeClearPrompt(t,e){if(e.possiblePrompts.length<t.possiblePrompts.length){const t=document.getElementById("prompt");t?.setAttribute("value","")}}}((function(t,e){if(void 0===t)return M;const{payload:n,type:o}=e;return o===l?N(t,n):o===u?function(t,e){let{prompt:n}=e,{possiblePrompts:o}=t;return n.startsWith("help ")&&(o=["try go","try offer"]),_(t,{possiblePrompts:o,prompt:n})}(t,n):o===p?F(t,n):o===d?_(M,{}):o===m?function(t,e){return _(t,{activeColorScheme:e.colorScheme})}(t,n):o===h?function(t,e){return _(t,{playername:e.playername.replace(/</g,"").replace(/>/g,"").replace(/{/g,"").replace(/}/g,"").replace(/\(/g,"").replace(/\)/g,"").replace(/"/g,"").replace(/'/g,"").replace(/%/g,"").replace(/&/g,"").replace(/=/g,"").replace(/\$/g,"").replace(/\//g,"").replace(/\\/g,"").replace(/\s+/," ")})}(t,n):o===y?function(t,e){return _(t,{activeScene:e.scene})}(t,n):o===v?function(t){const e=t.facts["#Yu"],n=e["foaf:knows"][0]?.value||null;let o=null;n&&(o=t.facts[n]["foaf:name"][0].value);return _(t,{speaker:o,text:["Ah, so you're awake.","Time to get up!"]})}(t):o===f?H(t,n):t}));function Y(){const t=document.getElementById("app");if(!t)return console.error('Could not find element with id "app"!');const e=(n=t,o=G.getState(),k((function(t){return t.cloneNode(!0)}))(n,o));var n,o;x(document.body,t,e)}function q(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function V(t,e,n){for(var o=0;o<n.length;o++)t.setUint8(e+o,n.charCodeAt(o))}var z=q((function(t,e){e=e||{};var n,o=t.numberOfChannels,a=t.sampleRate,i=e.float32?3:1,r=3===i?32:16;n=2===o?function(t,e){var n=t.length+e.length,o=new Float32Array(n),a=0,i=0;for(;a<n;)o[a++]=t[i],o[a++]=e[i],i++;return o}(t.getChannelData(0),t.getChannelData(1)):t.getChannelData(0);return function(t,e,n,o,a){var i=a/8,r=o*i,s=new ArrayBuffer(44+t.length*i),c=new DataView(s);V(c,0,"RIFF"),c.setUint32(4,36+t.length*i,!0),V(c,8,"WAVE"),V(c,12,"fmt "),c.setUint32(16,16,!0),c.setUint16(20,e,!0),c.setUint16(22,o,!0),c.setUint32(24,n,!0),c.setUint32(28,n*r,!0),c.setUint16(32,r,!0),c.setUint16(34,a,!0),V(c,36,"data"),c.setUint32(40,t.length*i,!0),1===e?function(t,e,n){for(var o=0;o<n.length;o++,e+=2){var a=Math.max(-1,Math.min(1,n[o]));t.setInt16(e,a<0?32768*a:32767*a,!0)}}(c,44,t):function(t,e,n){for(var o=0;o<n.length;o++,e+=4)t.setFloat32(e,n[o],!0)}(c,44,t);return s}(n,i,a,o,r)}));const J=[["C1","C0.5","C0.5","C1","C0.5","C0.5","C1","f1","a1","c1","h1","h0.5","h0.5","h1","h0.5","h0.5","h1","e1","g1","h1","C1","C0.5","C0.5","C1","C0.5","C0.5","C1","D1","E1","F1","E1","C1","h1","g1","f2","f2"]],Q={c:130.81,d:146.83,e:164.81,f:174.61,g:196,a:220,h:246.91,C:261.63,D:293.66,E:329.63,F:349.23,G:392,A:440,H:493.88,B:523.25};function X(t){return{type:l,payload:{prompt:t}}}function K(t){return{type:u,payload:{prompt:t}}}function Z(t){return{type:f,payload:{prompt:t}}}async function tt(t){const e=t.target;if(e){if("color-preference"===e.id){const t=e.value;await G.dispatch(function(t){return{type:m,payload:{colorScheme:t}}}(t)),Y()}if("possible-commands"===e.id){const t=e.value;t.startsWith("go ")?await G.dispatch(X(t)):t.startsWith("help ")?await G.dispatch(K(t)):await G.dispatch(Z(t)),Y()}}}function et(t,e){return t.getAttribute(`data-${e}`)||""}async function nt(t){const e=t.target;if(e&&et(e,"scene")){const t=et(e,"scene");await G.dispatch(function(t){return{type:y,payload:{scene:t}}}(t)),Y()}}function ot(t,e,n=0){return n+Math.floor(t()*(e-n))}function at(t){const e="bdfghklmnprstvwz".split(""),n="aeiou".split(""),o=ot(t.quick,6,2);t.state();return new Array(o).fill("x").map((function(o,a){const i=function(t,e){return t[ot(e,t.length)]}(a%2?n:e,t.quick);return t.state(),0===a?i.toUpperCase():i})).join("")}class it{constructor(t){null==t&&(t=+new Date);let e=4022871197;function n(t){t=String(t);for(let n=0;n<t.length;n++){e+=t.charCodeAt(n);let o=.02519603282416938*e;e=o>>>0,o-=e,o*=e,e=o>>>0,o-=e,e+=4294967296*o}return 2.3283064365386963e-10*(e>>>0)}this.c=1,this.s0=n(" "),this.s1=n(" "),this.s2=n(" "),this.s0-=n(t),this.s0<0&&(this.s0+=1),this.s1-=n(t),this.s1<0&&(this.s1+=1),this.s2-=n(t),this.s2<0&&(this.s2+=1)}next(){let{c:t,s0:e,s1:n,s2:o}=this,a=2091639*e+2.3283064365386963e-10*t;return this.s0=n,this.s1=o,this.s2=a-(this.c=0|a)}copy(t,e){return e.c=t.c,e.s0=t.s0,e.s1=t.s1,e.s2=t.s2,e}}function rt(t){const e=function(t,e){let n=new it(t),o=()=>n.next();return o.double=()=>o()+11102230246251565e-32*(2097152*o()|0),o.int32=()=>4294967296*n.next()|0,o.quick=o,function(t,e,n){let o=n&&n.state;o&&("object"==typeof o&&e.copy(o,e),t.state=()=>e.copy(e,{}))}(o,n,e),o}("string"==typeof t?t:"",{state:"object"!=typeof t||t});return e}async function st(t){if(!t.target)return;let{facts:e,seed:n}=G.getState();const o=rt(n);let a=null;for(;null===a||!Object.keys(e).includes(a);)a=at(o),n=o.state();await G.dispatch(function(t,e){return{type:p,payload:{name:t,seed:e}}}(a,n)),await G.dispatch({type:v,payload:{}}),Y()}async function ct(t){const e=t.target;var n;if(e&&("playername"===e.id&&(await G.dispatch((n=e.value,{type:h,payload:{playername:n}})),Y()),"prompt"===e.id)){const t=e.value;t.startsWith("go ")?await G.dispatch(X(t)):t.startsWith("help ")?await G.dispatch(K(t)):await G.dispatch(Z(t)),Y()}}function lt(t,e,n){t.addEventListener(e,n)}async function ut(){I("title-section",n),I("settings-section",o),I("about-section",a),I("new-game-section",i),I("load-game-section",g),I("level-section",b),I("canvas",w),I("inventory",C),I("prompt",A),I("suggestions",E),I("textbox",S),lt(document.body,"change",tt),lt(document.body,"click",nt),lt(document.body,"end",st),lt(document.body,"input",ct),await Y();const t=await async function(){if(J.length>0){let t=.1;const e=.25,n=J[0].map((t=>{const n=t.slice(0,1),o=Q[n],a=parseFloat(t.slice(1));return{hz:o,time:e*a}})),o=1,a=n.map((t=>t.time)).reduce(((t,e)=>t+e)),i=44100,r=new OfflineAudioContext({numberOfChannels:o,length:i*a,sampleRate:i});t=.1;const s=r.createOscillator(),c=r.createGain();s.connect(c),c.connect(r.destination),c.gain.setValueAtTime(1,r.currentTime),s.type="square",n.forEach((e=>{const{hz:n,time:o}=e;s.frequency.setValueAtTime(n,t),t+=o}));const{currentTime:l}=r;s.start(l),s.stop(l+a);const u=await r.startRendering(),p=z(u);let f="";const d=new Uint8Array(p),m=d.byteLength;for(let t=0;t<m;t++)f+=String.fromCharCode(d[t]);return`data:audio/wav;base64,${window.btoa(f)}`}}(),e=document.querySelector("audio");e?.setAttribute("src",t||"")}window.addEventListener("load",ut,!1)}();
