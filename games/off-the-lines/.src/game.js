!function(){"use strict";game.currentLevel=0;var a,o,s,i,l,n,r,c,p=!1,u=90,d=0,h=0;game.renderPaths=function(i,n){game.LEVELS[n].paths.forEach(function(t,e){var o=document.createElementNS("http://www.w3.org/2000/svg","path");o.setAttribute("style","fill:none;stroke:url(#path-gradient"+n+");stroke-linecap:butt;stroke-linejoin:miter"),o.setAttribute("d",t.data),i.appendChild(o)})},game.initLevel=function(t){var e,s=document.querySelector(".game .svg-elements");for(l(0,!0),i(u=90,!0),p=!1,game.showMessage("hide"),document.querySelector(".main-menu").style.display="none",document.querySelector(".levels").style.display="none",document.querySelector(".score").style.display="block",document.querySelector(".timer").style.display="block",document.querySelector(".game svg").style.display="block",game.currentLevel=t,a=JSON.parse(JSON.stringify(game.LEVELS[t]));s.firstChild;)s.removeChild(s.firstChild);a.paths.forEach(function(t,e){var o=document.createElementNS("http://www.w3.org/2000/svg","path");o.setAttribute("style","fill:none;stroke:url(#path-gradient);stroke-linecap:butt;stroke-linejoin:miter"),o.setAttribute("d",t.data),s.appendChild(o),t.el=o,t.length=o.getTotalLength()}),a.scorers.forEach(function(t,e){var o=document.createElementNS("http://www.w3.org/2000/svg","text"),i=document.createElementNS("http://www.w3.org/2000/svg","rect"),n=a.paths[t.location.path].el.getPointAtLength(a.paths[t.location.path].length/1e3*t.location.pos);o.innerHTML="+"+t.points+" PTS",o.setAttribute("x",n.x),o.setAttribute("y",n.y+2),o.setAttribute("style","font-size:20px;font-family:sans-serif;fill:#bbb;fill-opacity:1;stroke:none;"),o.setAttribute("alignment-baseline","middle"),o.setAttribute("text-anchor","middle"),i.setAttribute("x",n.x-45),i.setAttribute("y",n.y-15),i.setAttribute("style","fill:#111;stroke:none"),i.setAttribute("width","90"),i.setAttribute("height","30"),s.appendChild(i),s.appendChild(o),t.x=n.x,t.y=n.y,t.id="scorer"+e}),a.cells.forEach(function(t){t.el=document.createElementNS("http://www.w3.org/2000/svg","circle"),t.el.setAttribute("style","opacity:1;fill:url(#radial-"+t.colour+");fill-opacity:1;stroke:none"),t.el.setAttribute("r",22),t.el.setAttribute("class","cell"),s.appendChild(t.el),t.id="cell_"+t.colour}),a.controllers.forEach(function(t,e){var o=document.createElementNS("http://www.w3.org/2000/svg","rect"),i=document.createElementNS("http://www.w3.org/2000/svg","text"),n=a.paths[t.location.path].el.getPointAtLength(a.paths[t.location.path].length/1e3*t.location.pos);i.setAttribute("x",n.x),i.setAttribute("y",n.y),i.setAttribute("alignment-baseline","middle"),i.setAttribute("text-anchor","middle"),"teleporter"===t.type?(o.setAttribute("width","70"),o.setAttribute("height","70"),o.setAttribute("x",n.x-35),o.setAttribute("y",n.y-35),i.innerHTML="Teleporter",o.setAttribute("style","fill-opacity:0;stroke:hotpink;stroke-width:4px;"),i.setAttribute("style","font-size:15px;font-family:sans-serif;fill:#bbb;fill-opacity:1;stroke:none;")):(o.setAttribute("width","100"),o.setAttribute("height","100"),o.setAttribute("x",n.x-50),o.setAttribute("y",n.y-50),o.setAttribute("style","fill-opacity:0;stroke:#bbb;stroke-width:8px;"),i.setAttribute("style","font-size:25px;font-family:sans-serif;fill:#bbb;fill-opacity:1;stroke:none;"),"wait"===t.type?(o.setAttribute("cursor","pointer"),i.innerHTML="Wait",o.onclick=function(){t.paused=!t.paused,game.playSound("control"),t.paused?o.setAttribute("style","fill-opacity:0;stroke:orange;stroke-width:8px;"):o.setAttribute("style","fill-opacity:0;stroke:#bbb;stroke-width:8px;")}):"switch"===t.type&&(o.setAttribute("cursor","pointer"),i.innerHTML="Switch",o.onclick=function(){t.switched=!t.switched,game.playSound("control"),t.switched?o.setAttribute("style","fill-opacity:0;stroke:purple;stroke-width:8px;"):o.setAttribute("style","fill-opacity:0;stroke:#bbb;stroke-width:8px;")})),s.appendChild(i),s.appendChild(o),t.x=n.x,t.y=n.y,t.id="controller"+e+"_"+t.type}),e=window.setInterval(function(){i(u-=1),(p||0===u)&&window.clearInterval(e)},1e3),game.playSound("start"),o()},n=[],s=function(t,e){var o=n.indexOf(t.id+"-"+e.id),i=!1;return t.location.path===e.location.path&&t.x&&e.x&&t.y&&e.y&&t.x>e.x-11&&t.x<e.x+11&&t.y>e.y-11&&t.y<e.y+11?-1===o&&(-1===t.id.indexOf("wait")&&-1===e.id.indexOf("wait")&&n.push(t.id+"-"+e.id),i=!0):-1!==o&&n.splice(o,1),i},o=function(){Date.now();var t,r,n=!1;a.cells.forEach(function(o,i){var e;t=a.paths[o.location.path].el.getPointAtLength(a.paths[o.location.path].length/1e3*o.location.pos),o.el.setAttribute("cx",t.x),o.el.setAttribute("cy",t.y),o.x=t.x,o.y=t.y,1e3<=o.location.pos&&0<o.speed||o.location.pos<=0&&o.speed<0?0<o.speed?(a.paths[o.location.path].atEnd.reverse&&(o.speed=-o.speed),o.location.pos=a.paths[o.location.path].atEnd.pos,o.location.path=a.paths[o.location.path].atEnd.path):(a.paths[o.location.path].atStart.reverse&&(o.speed=-o.speed),o.location.pos=a.paths[o.location.path].atStart.pos,o.location.path=a.paths[o.location.path].atStart.path):(e=!1,a.controllers.forEach(function(t){"switch"===t.type&&t.switched&&o.location.pos>t.location.pos-22&&o.location.pos<t.location.pos+22&&s(o,t)&&(o.location.path=t.leadsTo.path,o.location.pos=t.leadsTo.pos||0,t.leadsTo.reverse&&(o.speed=-o.speed)),"wait"===t.type&&t.paused&&s(o,t)&&(e=!0)}),a.breaks.forEach(function(t){2===t.stage&&s(o,t)&&(n=!0)}),e||(o.location.pos=o.location.pos+o.speed*(2500/a.paths[o.location.path].length))),a.cells.forEach(function(t,e){i<e&&s(o,t)&&(n=!0)}),a.scorers.forEach(function(t){s(o,t)&&(game.playSound("point"),l(t.points),a.cells.forEach(function(t){h<100&&(t.speed=1.01*t.speed,h+=1)}))})}),n?(p=!0,game.playSound("lose"),function(){var t;for(t=0;t<180;t+=1)!function(){var i=t;window.setTimeout(function(){a.cells.forEach(function(t){var e=parseFloat(t.el.getAttribute("cx"),10),o=parseFloat(t.el.getAttribute("cy"),10);t.el.setAttribute("r",22-i/15),t.el.setAttribute("cx",960<e?e-5*Math.random():e+5*Math.random()),t.el.setAttribute("cy",540<o?o-5*Math.random():o+5*Math.random())})},17*i)}()}(),window.setTimeout(function(){game.showMessage("collision",d)},3e3)):0===u?(game.playSound("out-of-time"),game.showMessage("out-of-time",d)):(r=!1,a.breaks.length&&Math.random()<5e-4&&a.breaks.forEach(function(t,e){var o,i,n,s=document.querySelector(".game .svg-elements");r||0!==t.stage||(r=!0,t.stage=1,n=a.paths[t.location.path].el.getPointAtLength(a.paths[t.location.path].length/1e3*t.location.pos),t.x=n.x,t.y=n.y,t.id="lineBreak-"+e,(o=document.createElementNS("http://www.w3.org/2000/svg","circle")).setAttribute("style","opacity:1;fill:black;fill-opacity:0;stroke:red;stroke-width:2px;"),o.setAttribute("r","50"),o.setAttribute("cx",n.x),o.setAttribute("cy",n.y),o.setAttribute("class","stage1"),s.insertBefore(o,s.querySelector("rect:first-of-type")),(i=document.createElementNS("http://www.w3.org/2000/svg","text")).setAttribute("x",n.x),i.setAttribute("y",n.y+70),i.setAttribute("style","font-size:16px;font-family:sans-serif;fill:red;fill-opacity:1;stroke:none;"),i.setAttribute("alignment-baseline","middle"),i.setAttribute("text-anchor","middle"),i.innerHTML="LINE FAULT DETECTED",s.appendChild(i),window.setTimeout(function(){i.innerHTML="",o.setAttribute("class","stage2"),o.setAttribute("style","opacity:1;fill:#111;fill-opacity:1;stroke:none"),t.stage=2},4e3),game.playSound("warning"))}),window.setTimeout(o,20))},r=document.querySelector(".score strong"),l=function(t,e){e?d=0:d+=t,r.style.color=d<20?"red":"green",r.innerHTML=d},c=document.querySelector(".timer strong"),i=function(t){var e="green";u<90*.67&&(e="orange"),u<90*.33&&(e="red"),c.style.color=e,c.innerHTML=t}}();