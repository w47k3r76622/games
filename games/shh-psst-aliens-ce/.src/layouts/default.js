(()=>{var t={253:(t,e,n)=>{"use strict";n.d(e,{Z:()=>s});var r=n(15),i=n.n(r),o=n(645),a=n.n(o)()(i());a.push([t.id,"body {\r\n\tmargin: 0px;\r\n\tpadding: 0px;\r\n\tfont-family: sans-serif;\r\n\tfont-size: 12pt;\r\n\tline-height: 1.2;\r\n\tcolor: #333333;\r\n\tbackground-color: white;\r\n\ttext-align: center;\r\n}\r\n\r\nspace\\:game h2 {\r\n\tcolor: green;\r\n\tfont-family: monospace;\r\n}\r\n\r\nspace\\:grid {\r\n\tdisplay: inline-block;\r\n\tborder: 0.1em dashed silver;\r\n}\r\n\r\nspace\\:grid div {\r\n\tdisplay: table;\r\n\tmargin-left: auto;\r\n\tmargin-right: auto;\r\n\tfont-family: emoji;\r\n\tfont-size: 22px;\r\n}\r\n\r\nspace\\:gridrow {\r\n\tdisplay: table-row;\r\n}\r\n\r\nspace\\:cell {\r\n\tdisplay: table-cell;\r\n\ttext-align: center;\r\n\tvertical-align: middle;\r\n\tborder: 0px;\r\n\twidth: 3em;\r\n\theight: 3em;\r\n}\r\n\r\nspace\\:modalbox {\r\n\tposition: absolute;\r\n\tleft: calc(50% - 11em);\r\n\ttop: 5em;\r\n\twidth: 20em;\r\n\theight: 6em;\r\n\tpadding: 1em;\r\n\tborder: 0.5em solid green;\r\n\tbackground-color: yellowgreen;\r\n\tfont-size: 14pt;\r\n\ttext-align: center;\r\n}\r\n\r\ninput {\r\n\tpadding: 0.5em;\r\n\tmargin: 0.25em;\r\n\tbackground-color: lightgreen;\r\n\tborder: 2px solid green;\r\n\tborder-radius: 3px;\r\n\tfont-size: 14pt;\r\n\tcursor: pointer;\r\n}","",{version:3,sources:["webpack://./src/layouts/default.css"],names:[],mappings:"AAAA;CACC,WAAW;CACX,YAAY;CACZ,uBAAuB;CACvB,eAAe;CACf,gBAAgB;CAChB,cAAc;CACd,uBAAuB;CACvB,kBAAkB;AACnB;;AAEA;CACC,YAAY;CACZ,sBAAsB;AACvB;;AAEA;CACC,qBAAqB;CACrB,2BAA2B;AAC5B;;AAEA;CACC,cAAc;CACd,iBAAiB;CACjB,kBAAkB;CAClB,kBAAkB;CAClB,eAAe;AAChB;;AAEA;CACC,kBAAkB;AACnB;;AAEA;CACC,mBAAmB;CACnB,kBAAkB;CAClB,sBAAsB;CACtB,WAAW;CACX,UAAU;CACV,WAAW;AACZ;;AAEA;CACC,kBAAkB;CAClB,sBAAsB;CACtB,QAAQ;CACR,WAAW;CACX,WAAW;CACX,YAAY;CACZ,yBAAyB;CACzB,6BAA6B;CAC7B,eAAe;CACf,kBAAkB;AACnB;;AAEA;CACC,cAAc;CACd,cAAc;CACd,4BAA4B;CAC5B,uBAAuB;CACvB,kBAAkB;CAClB,eAAe;CACf,eAAe;AAChB",sourcesContent:["body {\r\n\tmargin: 0px;\r\n\tpadding: 0px;\r\n\tfont-family: sans-serif;\r\n\tfont-size: 12pt;\r\n\tline-height: 1.2;\r\n\tcolor: #333333;\r\n\tbackground-color: white;\r\n\ttext-align: center;\r\n}\r\n\r\nspace\\:game h2 {\r\n\tcolor: green;\r\n\tfont-family: monospace;\r\n}\r\n\r\nspace\\:grid {\r\n\tdisplay: inline-block;\r\n\tborder: 0.1em dashed silver;\r\n}\r\n\r\nspace\\:grid div {\r\n\tdisplay: table;\r\n\tmargin-left: auto;\r\n\tmargin-right: auto;\r\n\tfont-family: emoji;\r\n\tfont-size: 22px;\r\n}\r\n\r\nspace\\:gridrow {\r\n\tdisplay: table-row;\r\n}\r\n\r\nspace\\:cell {\r\n\tdisplay: table-cell;\r\n\ttext-align: center;\r\n\tvertical-align: middle;\r\n\tborder: 0px;\r\n\twidth: 3em;\r\n\theight: 3em;\r\n}\r\n\r\nspace\\:modalbox {\r\n\tposition: absolute;\r\n\tleft: calc(50% - 11em);\r\n\ttop: 5em;\r\n\twidth: 20em;\r\n\theight: 6em;\r\n\tpadding: 1em;\r\n\tborder: 0.5em solid green;\r\n\tbackground-color: yellowgreen;\r\n\tfont-size: 14pt;\r\n\ttext-align: center;\r\n}\r\n\r\ninput {\r\n\tpadding: 0.5em;\r\n\tmargin: 0.25em;\r\n\tbackground-color: lightgreen;\r\n\tborder: 2px solid green;\r\n\tborder-radius: 3px;\r\n\tfont-size: 14pt;\r\n\tcursor: pointer;\r\n}"],sourceRoot:""}]);const s=a},645:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=t(e);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},e.i=function(t,n,r){"string"==typeof t&&(t=[[null,t,""]]);var i={};if(r)for(var o=0;o<this.length;o++){var a=this[o][0];null!=a&&(i[a]=!0)}for(var s=0;s<t.length;s++){var l=[].concat(t[s]);r&&i[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),e.push(l))}},e}},15:t=>{"use strict";function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}t.exports=function(t){var n,r,i=(r=4,function(t){if(Array.isArray(t))return t}(n=t)||function(t,e){var n=t&&("undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"]);if(null!=n){var r,i,o=[],a=!0,s=!1;try{for(n=n.call(t);!(a=(r=n.next()).done)&&(o.push(r.value),!e||o.length!==e);a=!0);}catch(t){s=!0,i=t}finally{try{a||null==n.return||n.return()}finally{if(s)throw i}}return o}}(n,r)||function(t,n){if(t){if("string"==typeof t)return e(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?e(t,n):void 0}}(n,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=i[1],a=i[3];if(!a)return o;if("function"==typeof btoa){var s=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),c="/*# ".concat(l," */"),d=a.sources.map((function(t){return"/*# sourceURL=".concat(a.sourceRoot||"").concat(t," */")}));return[o].concat(d).concat([c]).join("\n")}return[o].join("\n")}},387:(t,e,n)=>{"use strict";n.d(e,{Z:()=>r});const r="<space:cell>\r\n\t<span data-id='value'></span>\r\n</space:cell>"},77:(t,e,n)=>{"use strict";n.d(e,{Z:()=>r});const r="<space:game>\r\n\t<h2>Shh-Psst! Aliens!!! (CE)</h2>\r\n\t<h4>Find ALL the aliens and destroy them!</h4>\r\n\t<div data-id='grid'></div>\r\n\t<div class='actions'>\r\n\t\t<div style='display: inline-block; padding-bottom: 3m;'>\r\n\t\t\t<input type='button' data-id='leftButton' value='&lt;' />\r\n\t\t</div>\r\n\t\t<div style='display: inline-block;'>\r\n\t\t\t<input type='button' data-id='upButton' value='^' />\r\n\t\t\t<br />\r\n\t\t\t<input type='button' data-id='downButton' value='v' />\r\n\t\t</div>\r\n\t\t<div style='display: inline-block; padding-bottom: 3m;'>\r\n\t\t\t<input type='button' data-id='rightButton' value='&gt;' />\r\n\t\t</div>\r\n\t\t&nbsp;\r\n\t\t&nbsp;\r\n\t\t&nbsp;\r\n\t\t&nbsp;\r\n\t\t<input type='button' data-id='talkButton' value='Talk' />\r\n\t\t<input type='button' data-id='killButton' value='Kill' />\r\n\t</div>\r\n\t<pre>\r\nHi there hero! (⛄)\r\n\r\nTalk to people (🙍) and they'll tell you\r\nhow many aliens (👽) they've seen.\r\n\r\nDon't talk to anyone you suspect is an alien,\r\nor they will WOUND you. (🩸).\r\n<b>Three wounds and you lose.</b>\r\n\r\nKill anyone you suspect is an alien.\r\nDon't kill regular people (⚰️)\r\n... or their friends will get mad. (😠)\r\n\r\n<i>(Angry people don't talk!!!)</i>\r\n\r\n<b>If you you kill 3 regular people, you lose.</b>\r\n\r\nNavigate with WASD, your arrow keys,\r\nor the <i>on-screen Arrow buttons</i>.\r\n\r\nUse the Talk and Kill buttons or `T` and `K`\r\non your keyboard.\r\n\r\n\t</pre>\r\n</space:game>"},447:(t,e,n)=>{"use strict";n.d(e,{Z:()=>r});const r="<space:gridrow>\r\n\t<div data-id='cells'></div>\r\n</space:gridrow>"},343:(t,e,n)=>{"use strict";n.d(e,{Z:()=>r});const r="<space:grid>\r\n\t<div data-id='cells'></div>\r\n</space:grid>"},604:(t,e,n)=>{"use strict";n.d(e,{Z:()=>r});const r="<space:modalbox>\r\n\t<div class='backdrop'>\r\n\t\t<div class='message' data-id='message'></div>\r\n\t\t<br />\r\n\t\t<div class='actions'><input type='button' data-id='restartButton' value=\"Try Again\" /></div>\r\n\t</div>\r\n</space:modalbox>"},892:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>a});var r=n(379),i=n.n(r),o=n(253);i()(o.Z,{insert:"head",singleton:!1});const a=o.Z.locals||{}},379:(t,e,n)=>{"use strict";var r,i=function(){var t={};return function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}t[e]=n}return t[e]}}(),o=[];function a(t){for(var e=-1,n=0;n<o.length;n++)if(o[n].identifier===t){e=n;break}return e}function s(t,e){for(var n={},r=[],i=0;i<t.length;i++){var s=t[i],l=e.base?s[0]+e.base:s[0],c=n[l]||0,d="".concat(l," ").concat(c);n[l]=c+1;var u=a(d),p={css:s[1],media:s[2],sourceMap:s[3]};-1!==u?(o[u].references++,o[u].updater(p)):o.push({identifier:d,updater:m(p,e),references:1}),r.push(d)}return r}function l(t){var e=document.createElement("style"),r=t.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(t){e.setAttribute(t,r[t])})),"function"==typeof t.insert)t.insert(e);else{var a=i(t.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var c,d=(c=[],function(t,e){return c[t]=e,c.filter(Boolean).join("\n")});function u(t,e,n,r){var i=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(t.styleSheet)t.styleSheet.cssText=d(e,i);else{var o=document.createTextNode(i),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(o,a[e]):t.appendChild(o)}}function p(t,e,n){var r=n.css,i=n.media,o=n.sourceMap;if(i?t.setAttribute("media",i):t.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}var h=null,f=0;function m(t,e){var n,r,i;if(e.singleton){var o=f++;n=h||(h=l(e)),r=u.bind(null,n,o,!1),i=u.bind(null,n,o,!0)}else n=l(e),r=p.bind(null,n,e),i=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)};return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else i()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var n=s(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var r=0;r<n.length;r++){var i=a(n[r]);o[i].references--}for(var l=s(t,e),c=0;c<n.length;c++){var d=a(n[c]);0===o[d].references&&(o[d].updater(),o.splice(d,1))}n=l}}}},898:t=>{t.exports=function(t,e){if(e=e||t,!t.__attributes_imported&&e.attributes&&e.attributes.length)for(var n=0;n<e.attributes.length;n++){var r=e.attributes[n];t[r.name]||(t[r.name]=r.value)}t.__attributes_imported=!0}},115:(t,e,n)=>{const r=n(898);t.exports=function t(e,n){var i;if("function"==typeof n&&"function"==typeof n.getBindings){i=[];const r=n.getBindings();for(var o=0;o<r.length;o++)for(var a=t(e,r[o]),s=0;s<a.length;s++)i.push(a[s]);return i}for(n=n.replace(/:/g,"\\:"),i=e.querySelectorAll(n),o=0;o<i.length;o++)r(i[o]);return Array.prototype.slice.call(i,0)}},438:(t,e,r)=>{const{isa:i,getTypeId:o,setType:a,registerType:s}=r(695),l=r(115),c=r(898);function d(t,e){(e=e||function(){}).template=t,u(e);const n=function(t){return p(e,t)};return n.apply=function(t,n){e.apply(t,n)},n.call=function(){var t=Array.prototype.shift.apply(arguments);return e.call(t,arguments)},n.__constructor=e,n.name=e.name,n.getBindings=()=>u.getBindings(n),n}function u(t,e,n){if("function"==typeof t){var r=u.addBinding(e,t);t.binding=r;var o=l(i(n,Node)?n:document,r);return u.Apply(t,o),o.length}i(t,Node)&&u.BindExistingConstructors(t)}d.clear=function(){u.Classes={}},u.BindExistingConstructors=function(t,e){var n=[],r=e&&e.dependencies||u.Classes;for(var i in r)u(u.Classes[i],i,t)>0&&(n[i]=1);e&&!e.dependencies&&(e.dependencies=n)},u.Apply=function(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.__AlreadyBound||(u.importParameters(t,r),u.ApplyClone(t,r),u.ApplyConstructor(t,r),c(r),r.__AlreadyBound=!0)}},u.ApplyTemplate=function(t,e){var{compiled:n}=u.compile(t);n&&(e.innerHTML=n)},u.ApplyClone=function(t,e){if(u.compile(t)){for(;e.firstChild;)e.removeChild(e.firstChild);var n=u.getClone(t);for(0==n.childNodes.length&&(n=e.__holdingDiv);n.firstChild;)e.appendChild(n.removeChild(n.firstChild))}},u.ApplyConstructor=function(t,e){u.BindExistingConstructors(e,t),a(e,t),u.attachIdentifiedChildren(e),u.applyParameters(e),t.apply(e),"function"==typeof e.init&&e.init()},u.applyProperties=function(t,e){var n="object"==typeof e?e:{};for(var r in n)n.hasOwnProperty(r)&&(t[r]=n[r])},u.originalCreateElement=document.createElement,u.createNode=function(t,e){var{tag:e,className:n=""}=e?{tag:e}:u.compile(t),r=u.originalCreateElement.call(document,"div");0==e.indexOf(":")&&(e=e.substr(1)),r.innerHTML="<"+e+"></"+e+">";var i=r.firstChild;return i.className=n||"",i},u.Classes={},document.createElement=function(t,e){var n=u.getConstructor(t);if(n){var r=u.getClone(n);u.applyProperties(r,e),u.ApplyConstructor(n,r),r.__AlreadyBound=!0}else r=u.originalCreateElement.call(this,t),u.applyProperties(r,e);return r},u.getClone=function(t){return t.templateNode||(t.templateNode=u.createNode(t),u.ApplyTemplate(t,t.templateNode)),t.templateNode.cloneNode(!0)},u.addBinding=function(t,e){const n=u.compile(e,t);return u.Classes[n.tag]=e,n.tag},u.getConstructor=function(t){return u.Classes[t]},u.getBindings=function(t){var e=[];for(var n in u.Classes)u.Classes[n]!==t&&u.Classes[n]!==t.__constructor||e.push(n);return e},u.makeNodeFrom=function(t,e){if(i(t,Node)||i(t,Element))return t;if(i(t,Array)){var n=document.createElement("div");return u.addArrayAsChildren(n,t),n}if("object"!=typeof t)return(n=document.createElement("div")).innerHTML=t,n;var r=null;if(e&&(r=u.getConstructor(e)),"object"==typeof t.__types)for(var o=TG.getTypeArray(t),a=0;a<o.length;a++)r=u.getConstructor(o[a]);if(r)return p(r,t);var s=document.createElement("div");return s.innerHTML=t,s},u.addArrayAsChildren=function(t,e,n){for(;t.firstChild;)t.removeChild(t.firstChild);for(var r=0;r<e.length;r++)e[r]=u.makeNodeFrom(e[r],n),e[r].parentNode&&e[r].parentNode.removeChild(e[r]),t.appendChild(e[r])},u.childNodeArray=function(t){var e=[];e.events={};var r=t["data-collection"]||t.getAttribute("data-collection");e.render=function(){u.addArrayAsChildren(t,e)},e.loadFromDOM=function(n){n&&(t=n);var r=[],i=t["data-collection"]||t.getAttribute("data-collection");r=i?l(t,i):Array.prototype.slice.call(t.childNodes),e.length=0,r.forEach((function(t){e.push(t)}))},e.push=function(n){var i=u.makeNodeFrom(n,r);return t.appendChild(i),Array.prototype.push.call(e,i)},e.pop=function(){return t.removeChild(n),Array.prototype.pop.apply(e)},e.shift=function(){return t.removeChild(n),Array.prototype.shift.apply(e)},e.unshift=function(n){var i=u.makeNodeFrom(n,r);return t.insertBefore(i,t.firstChild),Array.prototype.unshift.call(e,i)},e.splice=function(){for(var n=Array.prototype.slice.call(arguments,0),r=n.shift(),i=n.shift()||e.length,o=n||[],a=r;a<r+i;a++){var s=e[a];t.removeChild(s)}var l=e[a];return o.forEach((function(e){t.insertBefore(e,l)})),Array.prototype.splice.apply(e,arguments)};for(var i=["reverse","sort"],o=0;o<i.length;o++)!function(){var t=i[o];e[t]=function(){var n=Array.prototype[t].apply(e,arguments);return e.render(),n}}();return e.loadFromDOM(),e},u.defineAccessors=function(t,e,n){var r=Object.getOwnPropertyDescriptor(e,n);if(!(r&&0==r.configurable||t.__accessorDefined)){Object.defineProperty(t,"__accessorDefined",{get:function(){return!0},enumerable:!1}),e[n];var o="innerHTML";"string"==typeof t.value&&(o="value");var a=t.getAttribute("data-property"),s=a,l=u.childNodeArray(t);e.__dom=e.__dom||{},Object.defineProperty(e.__dom,n,{get:function(){return t}}),Object.defineProperty(e,"__dom",{enumerable:!1});var c=!0;(t["data-ignore"]||t.getAttribute("data-ignore"))&&(c=!1),Object.defineProperty(e,n,{get:function(){return"children"==a||"children"==s||t["data-collection"]||t.getAttribute("data-collection")?l:a?t[a]:s?t[s]:t},set:function(e){var n=function(e){if(i(e,Array))u.addArrayAsChildren(t,e),s="children";else if(i(e,Node))t.parentNode&&t.parentNode.replaceChild(e,t),t=e,s=null;else if(i(e,Object)){for(var n in e)t[n]=e[n];s=null}else a?(t[a]=e,s=a):(t[o]=e,s=o)};e?"function"==typeof e.then?e.then((t=>n(t))).catch(console.error):"function"==typeof e.onto?e.onto(l.loadFromDOM(t)):(n(e),l.loadFromDOM(t)):n(e)},enumerable:c,configurable:!1})}},u.attachIdentifiedChildren=function(t,e){var n=(e||t).querySelectorAll("[data-id]");n=Array.prototype.slice.call(n,0);for(var r=0;r<n.length;r++){var i=n[r].getAttribute("data-id"),o=t[i];u.defineAccessors(n[r],t,i),o&&(t[i]=o)}},u.compile=function(t){if(!t.compilation){const e=u.buildSampleContainer(t.template),n=u.compileTemplate(e),{tag:r,className:i}=u.findBinding(e);t.compilation={template:t.template,compiled:n,tag:r,className:i}}return t.compilation},u.buildSampleContainer=function(t){const e=document.createElement("div");return e.innerHTML=t,e},u.compileTemplate=function(t){return 1===t.childNodes.length?t.firstChild.innerHTML:t.innerHTML},u.findBinding=function(t){return t.childNodes&&1===t.childNodes.length&&(t=t.firstChild),{tag:t.tagName,className:t.className}},u.importParameters=function(t,e,n){if(n=n||e,!e.__parameters_imported&&n.childNodes){e.parameters=[];for(var r=0;r<n.childNodes.length;r++){var i=n.childNodes[r];if(i.nodeType&&3==i.nodeType&&i.data&&i.data.replace(/\s/g,"")){var o=document.createElement("span");o.innerHTML=i.data,i=o}e.parameters.push(i)}if(null!=u.compile(t)){for(e.__holdingDiv=document.createElement("div"),e.__holdingDiv.style.display="none",document.body.appendChild(e.__holdingDiv),r=0;r<e.parameters.length;r++)e.__holdingDiv.appendChild(e.parameters[r]);u(e.__holdingDiv)}}e.__parameters_imported=!0},u.applyParameters=function(t){if(t.parameters&&i(t.parameters,Array)&&t.__holdingDiv){for(var e=t.parameters,n=e.length-1;n>=0;n--){var r=e[n]["data-id"];r||"function"!=typeof e[n].getAttribute||(r=e[n].getAttribute("data-id")),r&&(t[r]=e[n])}t.__holdingDiv.parentNode.removeChild(t.__holdingDiv),delete t.__holdingDiv}},u.copyDefaultAttributes=function(t,e){if(i(t,Node)&&i(e,Node))for(var n=0;n<t.attributes.length;n++){var r=t.attributes[n].name;e.hasAttribute(r)||(e.setAttribute(r,t.attributes[n].value),e[r]=t.attributes[n].value)}},u.getChildren=function(t,e){if(!t.childNodes)return[];for(var n=[],r=l(t,e),i=0;i<r.length;i++)r[i].parentNode===t&&n.push(r[i]);return n};const p=function(t,e){var n=e||{},r=null;for(var i in u.Classes)if(u.Classes[i]===t){r=document.createElement(i,n);break}return null===r&&(r=e,t.apply(r)),r};t.exports={DomClass:d,bless:u,isa:i,getTypeId:o,setType:a,registerType:s,getNodes:l}},695:(t,e,n)=>{function r(t){var e=t;if("function"==typeof t&&"function"==typeof t.getBindings){var n=t.getBindings();e=n.length>0?n[0]:t.name||t.toString()}return e}function i(t,e){t.__types=t.__types||{};var n=r(e);if(n&&null==t.__types[n]){var i=0;for(var o in t.__types)i=Math.max(i,t.__types[o]);i+=1,t.__types[n]=i}}Element=n.g.Element||function(){return!0},Node=n.g.Node||Element,t.exports={isa:function(t,e){var n=typeof t,i=typeof e;return"string"===n?e===String:"number"===n?e===Number:null==t?i===n:"boolean"===n?n===i:!("string"!==i&&"function"!==i||(t.__types=t.__types||{},!e||!t.__types[r(e)]))||(e===Element||e===Node||e===NodeList||"function"===i?t instanceof e:t===e)},getTypeId:r,setType:i,registerType:i}},637:(t,e,n)=>{const{DomClass:r}=n(438),i=r(n(387).Z,(function(){this.value=this.item.toString(!0)}));t.exports={Cell:i}},101:(t,e,n)=>{const{DomClass:r}=n(438),{Grid:i}=n(688),{GameState:o}=n(619),{ModalBox:a}=n(90),{KeyBoardDPad:s}=n(349).Z,{Commands:l}=n(354),c=r(n(77).Z,(function(){const t=this;this.dpad=new s,this.init=function(){const e=new o({width:17,height:17,density:.1});this.grid=new i({state:e}),this.dpad.disconnect(),this.dpad.connect((t=>e.execute(t))),this.talkButton.onclick=function(){e.execute(l.TALK)},this.killButton.onclick=function(){e.execute(l.KILL)},this.upButton.onclick=function(){e.execute(l.UP)},this.downButton.onclick=function(){e.execute(l.DOWN)},this.leftButton.onclick=function(){e.execute(l.LEFT)},this.rightButton.onclick=function(){e.execute(l.RIGHT)},e.onchange((()=>{e.wounds>=3?t.loseGame("Sorry, you died!"):e.murders>=3?t.loseGame("Sorry, you killed too many people!"):0==e.aliens&&t.winGame()}))},this.endGame=function(t){this.dpad.disconnect(),this.showModal(t),this.talkButton.onclick=null,this.killButton.onclick=null,this.upButton.onclick=null,this.downButton.onclick=null,this.leftButton.onclick=null,this.rightButton.onclick=null},this.loseGame=function(t){this.endGame(t)},this.winGame=function(){this.endGame("Congratulations! You killed all the aliens!")},this.showModal=function(t){const e=new a({message:t});document.body.appendChild(e),e.onclose=()=>this.init()},this.init()}));t.exports={Game:c}},687:(t,e,n)=>{"use strict";n.r(e),n.d(e,{GridRow:()=>i});const{DomClass:r}=n(438),i=r(n(447).Z)},688:(t,e,n)=>{const{DomClass:r}=n(438),{Cell:i}=n(637),{GridRow:o}=n(687),a=r(n(343).Z,(function(){if(!this.state)throw new Error("No map provided!");this.cells=this.state.mapSlice(5,5,(t=>new i({item:t}))),this.state.onchange((()=>{this.cells=this.state.mapSlice(5,5,(t=>new i({item:t}))).map((t=>new o({cells:t})))}))}));t.exports={Grid:a}},90:(t,e,n)=>{"use strict";n.r(e),n.d(e,{ModalBox:()=>i});const{DomClass:r}=n(438),i=r(n(604).Z,(function(){const t=this;this.restartButton.onclick=()=>{t.parentNode.removeChild(t),t.onclose()}}))},354:(t,e,n)=>{"use strict";n.r(e),n.d(e,{Commands:()=>r,commandToName:()=>i});const r=Object.freeze({UP:1,DOWN:2,LEFT:3,RIGHT:4,TALK:5,KILL:6}),i=function(t){for(let e in r)if(r[e]===t)return e}},619:(t,e,n)=>{"use strict";n.r(e),n.d(e,{GameState:()=>c});var r=n(354);const i="⚰️",o="🩸",a="🙍",s="👽";class l{map;x;y;items;visited=!1;investigated=!1;constructor(t,e,n,r=[]){this.state=t,this.map=t.data,this.x=e,this.y=n,this.items=r}add(t){this.items.push(t)}remove(t){const e=this.items.indexOf(t);e>-1&&this.items.splice(e,1)}has(t){return this.items.indexOf(t)>-1}enter(){this.visited=!0,this.add("⛄")}leave(){this.remove("⛄")}talk(){this.has(a)?(this.remove(a),this.add(o)):this.clue&&(this.investigated=!0)}kill(){this.has(a)?(this.remove(a),this.add(s)):this.clue&&this.add(i)}toString(){let t=this.items.join("");return this.clue&&(t+=this.clue),t}get isEmpty(){return 0==this.items.length}get clue(){if(this.has(i)||this.isAlien)return;const t=this.alienItemCount,e=this.countNearby(i);return t?e>0?"😠":this.investigated?`"${t}"`:"🙍":void 0}get alienItemCount(){return this.countNearby(a)+this.countNearby(s)+this.countNearby(o)}get isAlien(){return this.has(a)||this.has(s)||this.has(o)}countNearby(t){let e=0;for(let n=this.x-1;n<=this.x+1;n++)for(let r=this.y-1;r<=this.y+1;r++)this.map[n]&&this.map[n][r]&&this.map[n][r].has(t)&&e++;return e}}class c{data=[];position=[0,0];weaponDurability=0;subscribers=[];constructor(t={}){Object.assign(this,{width:10,height:10,density:.1,...t});for(let t=0;t<this.width;t++){const e=[];for(let n=0;n<this.height;n++)e.push(new l(this,t,n));this.data.push(e)}this.position=[Math.floor(this.width/2),Math.floor(this.height/2)];const[e,n]=this.position;this.placeAliens(),this.data[e][n].enter(),console.log(this.toString())}countItem(t){let e=0;for(let n=0;n<this.width;n++)for(let r=0;r<this.height;r++)this.data[n][r].has(t)&&e++;return e}get aliens(){return this.countItem(a)}get murders(){return this.countItem(i)}get wounds(){return this.countItem(o)}placeItems(t,e=null){const n=Math.floor(this.width*this.height*(e||this.density));let r=0;const[i,o]=this.position;for(;r<n;){const e=Math.floor(Math.random()*this.width),n=Math.floor(Math.random()*this.height);this.data[e][n].isEmpty&&(e===i&&n===o||(this.data[e][n].add(t),r++))}return r}placeWeapons(t=null){this.placeItems("⚔",this.density/3)}placeAliens(t=null){this.placeItems(a)}execute(t){const e=this,n={[r.Commands.UP]:()=>{e.move(0,-1)},[r.Commands.DOWN]:()=>{e.move(0,1)},[r.Commands.RIGHT]:()=>{e.move(1,0)},[r.Commands.LEFT]:()=>{e.move(-1,0)},[r.Commands.TALK]:()=>{e.talk()},[r.Commands.KILL]:()=>{e.kill()}}[t];n&&n()}move(t,e){let[n,r]=this.position;this.data[n][r].leave(),n=this.bounded(n+t,0,this.width-1),r=this.bounded(r+e,0,this.height-1),this.position=[n,r],this.data[n][r].enter(),this.fireOnChange({name:"move",dx:t,dy:e,x:n,y:r})}talk(){const[t,e]=this.position;this.data[t][e].talk(),this.fireOnChange({name:"talk",x:t,y:e})}kill(){const[t,e]=this.position;this.data[t][e].kill(),this.fireOnChange({name:"kill",x:t,y:e})}bounded(t,e,n){return Math.max(e,Math.min(t,n))}fireOnChange(t){for(let e of this.subscribers)"function"==typeof e&&e(t)}onchange(t){this.subscribers.push(t)}inBounds(t,e){return!(e<0||t<0||t>this.width-1||e>this.height-1)}sliceYX(t,e){const n=[],[r,i]=this.position,o=Math.floor((t||this.width)/2),a=Math.floor((e||this.height)/2),s=r-o,l=r+o,c=i+a;for(let t=i-a;t<=c;t++){const e=[];for(let n=s;n<=l;n++)this.inBounds(n,t)?e.push(this.data[n][t]):e.push("🌲");n.push(e)}return n}mapSlice(t,e,n){return this.sliceYX(t,e).map((t=>t.map((t=>n(t)))))}toString(t,e){return this.sliceYX(t,e).map((t=>t.map((t=>t.toString())).join(""))).join("\n")}}},349:(t,e,n)=>{"use strict";n.d(e,{Z:()=>o});var r=n(354);const i=Object.freeze({ArrowUp:r.Commands.UP,KeyW:r.Commands.UP,ArrowDown:r.Commands.DOWN,KeyS:r.Commands.DOWN,ArrowLeft:r.Commands.LEFT,KeyA:r.Commands.LEFT,ArrowRight:r.Commands.RIGHT,KeyD:r.Commands.RIGHT,KeyT:r.Commands.TALK,KeyK:r.Commands.KILL}),o={KeyBoardDPad:class{eventListener=null;subscriber=null;connect(t){this.subscriber&&this.disconnect(),this.subscriber=t,this.eventListener=t=>{t.preventDefault(),this.handleKeyDown(t)},document.addEventListener("keydown",this.eventListener)}disconnect(){this.eventListener&&(document.removeEventListener("keydown",this.eventListener),this.eventListener=null,this.subscriber=null)}handleKeyDown(t){i[t.code]&&this.subscriber(i[t.code])}},KEYMAP:i}}},e={};function r(n){var i=e[n];if(void 0!==i)return i.exports;var o=e[n]={id:n,exports:{}};return t[n](o,o.exports,r),o.exports}r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},(()=>{const t=r(438);r(892);const e=r(101);console.log(e),Object.assign(window,t),setTimeout((function e(){"complete"===document.readyState?t.bless(document):setTimeout(e,1)}),1)})()})();
