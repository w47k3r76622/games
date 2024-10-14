(function(){(function(){for(var c=0,b=["ms","moz","webkit","o"],a=0;a<b.length&&!window.requestAnimationFrame;++a)window.requestAnimationFrame=window[b[a]+"RequestAnimationFrame"],window.cancelRequestAnimationFrame=window[b[a]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(a,b){var f=(new Date).getTime(),g=Math.max(0,16-(f-c)),h=window.setTimeout(function(){a(f+g)},g);c=f+g;return h});window.cancelAnimationFrame||(window.cancelAnimationFrame=function(a){clearTimeout(a)})})();
var A=!1,G=!1,N=!0,O=!1,P=!1,Q=[],$=0,R=1,v=[],q=[],H=!0,k=[],f=[],B=0,w=0,C=0,u=3,I=!0,K=!0,D=0,L=0,S,p,T,U,s,aa,ba,E,ca,m,y,V,W,X,r,F,t,n=function(c,b){return Math.floor(Math.random()*(b-c+1))+c},x=function(c,b,a,e){var d=this;d.type=c;d.x=b;d.y=a;d.radius=e||0;d.diameter=2*e;d.centerX=d.x+e;d.centerY=d.y+e;d.collided=!1;d.alive=!0;d.draw=function(){d.collided||s.drawImage(r.getImage(d.type),d.x,d.y)}},ea=function(c,b,a,e){var d=this;d.type=c;d.x=b;d.y=a;d.radius=e||0;d.diameter=2*e;d.centerX=d.x+
e;d.centerY=d.y+e;d.collided=!1;d.alive=!0;d.rippleRadius=1;d.rippleRadius2=4;d.draw=function(){s.strokeStyle=d.collided?"#000088":"#FFFFFF";s.beginPath();s.arc(d.centerX,d.centerY,d.rippleRadius,0,2*Math.PI,!0);s.stroke();s.beginPath();s.arc(d.centerX,d.centerY,d.rippleRadius2,0,2*Math.PI,!0);s.stroke();d.rippleRadius+=0.04*(d.rippleRadius+1);d.rippleRadius2+=0.04*(d.rippleRadius2+1);d.rippleRadius>d.radius&&(d.rippleRadius=1);d.rippleRadius2>d.radius&&(d.rippleRadius2=1)}},M=function(c,b,a,e){var d=
this;d.type=c;d.centerX=b;d.centerY=a;d.radius=e||0;d.diameter=2*e;d.speed=2;d.blinking=!1;d.blinkingMod=0;d.increaseSpeed=function(){d.speed+=0.5};d.decreaseSpeed=function(){d.speed-=0.5}};M.prototype.init=function(){this.centerX=B;this.centerY=w;this.speed=2+0.5*u};M.prototype.update=function(){w<40+this.radius&&(w=40+this.radius);var c=Math.sqrt((B-this.centerX)*(B-this.centerX)+(w-this.centerY)*(w-this.centerY));shipCanvasContext.clearRect(this.centerX-this.radius-1,this.centerY-this.radius-1,
this.diameter+2,this.diameter+2);4<c&&(this.centerX+=Math.floor((B-this.centerX)/c*this.speed),this.centerY+=Math.floor((w-this.centerY)/c*this.speed))};M.prototype.draw=function(){this.blinking?(this.blinkingMod++,5>this.blinkingMod%10&&shipCanvasContext.drawImage(r.getImage(6),this.centerX-this.radius,this.centerY-this.radius),40<this.blinkingMod&&(this.blinking=!1,this.blinkingMod=0)):shipCanvasContext.drawImage(r.getImage(5),this.centerX-this.radius,this.centerY-this.radius)};var J=function(){this.entityList=
[];this.levelNumber=1;this.levelOffsetY=this.levelOffsetX=this.levelSpeed=this.levelWidth=0};J.prototype.init=function(){this.levelNumber=1;this.levelOffsetX=0;this.generateLevel()};J.prototype.generateLevel=function(){var c=0,b=0,a=0,e=a=0,a=0;this.levelWidth=3600+720*this.levelNumber;this.levelSpeed=2+Math.floor(0.5*this.levelNumber);for(a=this.entityList.length=0;a<2+Math.floor(0.5*this.levelNumber);a++)c=0===a?n(this.levelWidth-720,this.levelWidth-40):n(1440,this.levelWidth-40),b=n(40,400),this.entityList.push(new ea(7,
c,b,20));for(e=0;e<20+Math.floor(0.5*this.levelNumber);e++)c=n(720,this.levelWidth-20),b=n(40,420),a=n(0,3),this.entityList.push(new x(a,c,b,10));for(a=0;a<25*this.levelNumber;a++)c=n(720,this.levelWidth-20),b=n(40,420),this.entityList.push(new x(4,c,b,10))};J.prototype.checkEntityCollisions=function(){for(var c=0,b=0,a=0,e=0,d=0,l=e=b=0,b=!0,g=a=a=l=d=e=0,h=0,c=g=a=0;c<this.entityList.length;c++)if(b=this.entityList[c].x,a=this.entityList[c].centerX,e=this.entityList[c].centerY,d=this.entityList[c].radius,
l=this.entityList[c].type,!this.entityList[c].collided&&b+this.entityList[c].diameter>-this.levelOffsetX&&b<-this.levelOffsetX+720&&(b=a+this.levelOffsetX,(d+10)*(d+10)>=(b-t.centerX)*(b-t.centerX)+(e-t.centerY)*(e-t.centerY)))if(0===l||1===l||2===l||3===l)this.entityList[c].collided=!0,k.push(new x(l,b-d,e-d,d));else if(7===l){b=!0;for(e=0;e<q.length;e++)0===q[e]&&(b=!1);if(b){for(e=0;e<q.length;e++)q[e]--;H=!0;this.entityList[c].collided=!0;u++;10<u?u=10:t.increaseSpeed();I=!0;D+=500}}else if(4===
l&&!t.blinking)if(u--,I=!0,0===u){l=n(20,30);for(d=0;d<l;d++)a=n(3,6),f.push(new x(8,b,e,a)),a=Math.floor(256*Math.random()),g=Math.floor(256*Math.random()),h=Math.floor(256*Math.random()),f[f.length-1].color="rgb("+a+","+g+","+h+")",a=n(0,1),g=n(0,1),f[f.length-1].vx=a?-n(1,5):n(1,5),f[f.length-1].vy=g?-n(1,5):n(1,5),f[f.length-1].endGameParticle=!0;G=!0}else for(this.entityList[c].collided=!0,t.blinking=!0,t.decreaseSpeed(),l=n(5,10),d=0;d<l;d++)a=n(1,3),f.push(new x(8,b,e,a)),a=n(0,1),f[f.length-
1].vx=-n(3,6),f[f.length-1].vy=a?-n(1,3):n(1,3),f[f.length-1].color="#CCCCCC"};J.prototype.drawEntities=function(){var c=0,b=0;s.save();s.translate(this.levelOffsetX,this.levelOffsetY);for(b=0;b<this.entityList.length;b++)c=this.entityList[b].x,c+this.entityList[b].diameter>-this.levelOffsetX&&c<-this.levelOffsetX+720&&this.entityList[b].draw();s.restore();this.levelOffsetX-=this.levelSpeed;this.levelOffsetX<-this.levelWidth&&(this.levelOffsetX=0,this.levelNumber++,K=!0,this.generateLevel())};var z=
function(){};z.prototype.init=function(){S=document.getElementById("headerCanvas");p=S.getContext("2d");T=S.width;U=document.getElementById("bgCanvas");s=U.getContext("2d");aa=U.width;ba=document.getElementById("entityCanvas");E=ba.getContext("2d");ca=document.getElementById("textCanvas");m=ca.getContext("2d");y=document.getElementById("shipCanvas");shipCanvasContext=y.getContext("2d");V=y.width;W=y.height;X=y.getBoundingClientRect();y.style.cursor="crosshair";y.addEventListener("mousemove",fa,!1);
y.addEventListener("click",ga,!1);r=new ha;r.init();p.fillStyle="rgba(0, 0, 200, 0.5)";p.fillRect(0,0,T,40);p.fillStyle="#0000CC";p.fillRect(0,38,T,2);p.drawImage(r.getImage(0),250,10);p.drawImage(r.getImage(1),300,10);p.drawImage(r.getImage(2),350,10);p.drawImage(r.getImage(3),400,10);v[0]=new x(0,250,10,10);v[1]=new x(1,300,10,10);v[2]=new x(2,350,10,10);v[3]=new x(3,400,10,10);q[0]=0;q[1]=0;q[2]=0;q[3]=0;p.fillStyle="#FFFFFF";p.font="14px Helvetica";p.fillText("Luck:",15,25);p.fillStyle="#FFFFFF";
p.font="14px Helvetica";p.fillText("Level:",170,25);p.fillStyle="#FFFFFF";p.font="14px Helvetica";p.fillText("Score:",480,25);for(var c=0;10>c;c++){var b=document.createElement("canvas");b.width=2160;b.height=440;var a=b.getContext("2d"),e=a.createLinearGradient(0,0,2160,0);e.addColorStop(0,"#000000");var d=Math.floor(80*Math.random()),f=Math.floor(80*Math.random()),g=Math.floor(80*Math.random());e.addColorStop(0.5,"rgb("+d+","+f+","+g+")");e.addColorStop(1,"#000000");a.fillStyle=e;a.fillRect(0,0,
2160,440);a.fillStyle="#FFFFFF";for(e=0;500>e;e++)d=Math.floor(2161*Math.random()),f=Math.floor(441*Math.random()),a.fillRect(d,f,1,1);Q.push(b)}F=new J;F.init();t=new M(5,0,0,10);da()};z.prototype.startGame=function(){var c=0;E.clearRect(0,0,720,440);for(c=0;c<q.length;c++)q[c]=0;u=3;D=0;K=I=H=!0;k.length=0;f.length=0;t.init();F.init()};z.prototype.drawTitleBox=function(c,b){shipCanvasContext.fillStyle="rgba(0, 0, 155, 0.8)";shipCanvasContext.strokeStyle="#0000EE";shipCanvasContext.fillRect(c,b,
700,52);shipCanvasContext.strokeRect(c,b,700,52);shipCanvasContext.font="30px Helvetica";shipCanvasContext.fillStyle="#FFFFFF";shipCanvasContext.fillText("Lucky Seeds",c+270,b+30);shipCanvasContext.font="10px Helvetica";shipCanvasContext.fillStyle="#FFFFFF";shipCanvasContext.fillText("Created by Mary Ann Pham (oneminutesand)",c+252,b+45)};z.prototype.drawStartBox=function(c,b){shipCanvasContext.fillStyle="rgba(0, 0, 155, 0.8)";shipCanvasContext.strokeStyle="#0000EE";shipCanvasContext.fillRect(c,b,
86,35);shipCanvasContext.strokeRect(c,b,86,35);shipCanvasContext.font="20px Helvetica";shipCanvasContext.fillStyle="#DDDDFF";shipCanvasContext.fillText("START",c+11,b+25)};z.prototype.drawInstructionBox=function(c,b){shipCanvasContext.fillStyle="rgba(0, 0, 155, 0.8)";shipCanvasContext.strokeStyle="#0000EE";shipCanvasContext.fillRect(c,b,490,140);shipCanvasContext.strokeRect(c,b,490,140);shipCanvasContext.font="13px Helvetica";shipCanvasContext.fillStyle="#FFFFFF";shipCanvasContext.fillText("Instructions",
c+10,b+23);shipCanvasContext.font="12px Helvetica";shipCanvasContext.fillStyle="#FFFFFF";shipCanvasContext.fillText("1. Collect the four lucky seeds.",c+15,b+43);shipCanvasContext.drawImage(r.getImage(0),c+185,b+28);shipCanvasContext.drawImage(r.getImage(1),c+215,b+28);shipCanvasContext.drawImage(r.getImage(2),c+245,b+28);shipCanvasContext.drawImage(r.getImage(3),c+275,b+28);shipCanvasContext.fillText("2. Each set of four lucky seeds will increase your luck when you touch a beacon.",c+15,b+63);shipCanvasContext.beginPath();
shipCanvasContext.arc(c+467,b+58,6,0,2*Math.PI,!0);shipCanvasContext.strokeStyle="#FFFFFF";shipCanvasContext.stroke();shipCanvasContext.beginPath();shipCanvasContext.arc(c+467,b+58,10,0,2*Math.PI,!0);shipCanvasContext.strokeStyle="#FFFFFF";shipCanvasContext.stroke();shipCanvasContext.fillText("3. Avoid rocks.  Rocks will decrease your luck.",c+15,b+83);shipCanvasContext.drawImage(r.getImage(4),c+270,b+70);shipCanvasContext.fillText("4. You lose the game when you lose all your luck.",c+15,b+103);shipCanvasContext.fillText("5. The higher your luck, the faster your ship.",
c+15,b+123)};z.prototype.drawEndGameBox=function(c,b){shipCanvasContext.fillStyle="rgba(0, 0, 155, 0.8)";shipCanvasContext.strokeStyle="#0000EE";shipCanvasContext.fillRect(c,b,390,70);shipCanvasContext.strokeRect(c,b,390,70);shipCanvasContext.font="20px Helvetica";shipCanvasContext.fillStyle="#FFFFFF";shipCanvasContext.fillText("Game Over!",c+150,b+25);shipCanvasContext.font="16px Helvetica";shipCanvasContext.fillStyle="#FFFFFF";shipCanvasContext.fillText("Score: "+D,c+40,b+55);shipCanvasContext.fillText("Level: "+
F.levelNumber,c+280,b+55)};z.prototype.showTitle=function(){shipCanvasContext.fillStyle="rgba(0, 0, 0, 0.5)";shipCanvasContext.fillRect(0,0,V,W);this.drawTitleBox(10,10);this.drawStartBox(40,200);this.drawInstructionBox(200,200);G&&(G=!1,this.drawEndGameBox(165,95))};var da=function(){N&&(N=!1,Y.showTitle());O&&(O=!1,Y.startGame());A||(40<=B&&126>=B&&200<=w&&235>=w?(shipCanvasContext.strokeStyle="#EE0000",shipCanvasContext.strokeRect(40,200,85,35),P=!0):(shipCanvasContext.strokeStyle="#0000EE",shipCanvasContext.strokeRect(40,
200,85,35),P=!1));var c=0,b=0,a=0,e=0,d=0,l=0,g=0,h=c=0;if(A&&!G){t.update();F.checkEntityCollisions();for(g=0;g<k.length;g++)c=k[g].x,b=k[g].y,a=k[g].centerX,e=k[g].centerY,d=k[g].radius,l=k[g].type,k[g].alive&&(E.clearRect(c,b,k[g].diameter,k[g].diameter),c=Math.sqrt((v[l].centerX-a)*(v[l].centerX-a)+(v[l].centerY-e)*(v[l].centerY-e)),4<c?(a+=Math.floor(7*((v[l].centerX-a)/c)),e+=Math.floor(7*((v[l].centerY-e)/c)),k[g].centerX=a,k[g].centerY=e,k[g].x=a-d,k[g].y=e-d):(k[g].alive=!1,q[l]++,9<q[l]&&
(q[l]=9),D+=100,H=!0));for(g=0;g<k.length;g++)k[g].alive||k.splice(h,1)}if(A){for(h=0;h<f.length;h++)f[h].alive&&(E.clearRect(f[h].x,f[h].y,f[h].radius,f[h].radius),f[h].x+=f[h].vx,f[h].y+=f[h].vy,0>f[h].x||720<f[h].x||0>f[h].y||440<f[h].y)&&(f[h].alive=!1,f[h].endGameParticle&&(N=!0,A=!1));for(h=0;h<f.length;h++)f[h].alive||f.splice(h,1)}requestAnimationFrame(da);s.drawImage(Q[$],Math.floor(C),0);C<-(2160-aa)&&s.drawImage(Q[R],Math.floor(C)+2160,0);C-=0.3;-2160>=C&&(C=0,$=R,R=n(0,9));if(A){F.drawEntities();
for(d=d=0;d<k.length;d++)k[d].alive&&(a=k[d].x,e=k[d].y,type=k[d].type,E.drawImage(r.getImage(type),a,e));for(a=a=0;a<f.length;a++)f[a].alive&&(E.fillStyle=f[a].color,E.fillRect(f[a].x,f[a].y,f[a].radius,f[a].radius));H&&(H=!1,m.clearRect(275,10,20,20),m.clearRect(325,10,20,20),m.clearRect(375,10,20,20),m.clearRect(425,10,20,20),m.font="14px Helvetica",m.fillStyle="#FF8888",m.fillText(q[0].toString(),280,25),m.fillStyle="#00FF00",m.fillText(q[1].toString(),330,25),m.fillStyle="#FFFF00",m.fillText(q[2].toString(),
380,25),m.fillStyle="#AAAAFF",m.fillText(q[3].toString(),430,25),m.clearRect(524,10,105,20),m.fillStyle="#FFFFFF",m.fillText(D.toString(),525,25));if(I)for(I=!1,m.clearRect(53,10,112,20),a=54,e=12,m.fillStyle=1===u?"#FF0000":2===u?"#FFFF00":3===u?"#77DD00":"#00DD00",d=0;d<u;d++)m.fillRect(a,e,7,16),a+=11;K&&(m.clearRect(210,10,35,20),L++,m.fillStyle=5>L%10?"#FFFFFF":"#000000",40<L&&(K=!1,m.fillStyle="#FFFFFF",L=0),m.fillText(F.levelNumber.toString(),212,25));G||t.draw()}},ha=function(){var c=[];this.init=
function(){var b=document.createElement("canvas"),a=b.getContext("2d");b.width=b.height=20;a.beginPath();a.arc(6,7,4,0,2*Math.PI,!0);a.arc(14,7,4,0,2*Math.PI,!0);a.moveTo(10,6);a.lineTo(18,9);a.lineTo(10,18);a.lineTo(2,9);a.moveTo(10,6);a.lineTo(18,9);a.lineTo(10,18);a.lineTo(2,9);var e=a.createRadialGradient(10,10,2,10,10,10);e.addColorStop(0,"#AA0000");e.addColorStop(1,"#FF0000");a.fillStyle=e;a.fill();c[0]=b;b=document.createElement("canvas");a=b.getContext("2d");b.width=b.height=20;a.beginPath();
a.arc(6,6,4,0,2*Math.PI,!0);a.moveTo(14,6);a.arc(14,6,4,0,2*Math.PI,!0);a.moveTo(14,14);a.arc(14,14,4,0,2*Math.PI,!0);a.moveTo(6,15);a.arc(6,14,4,0,2*Math.PI,!0);a.moveTo(10,10);a.arc(10,10,4,0,2*Math.PI,!0);e=a.createRadialGradient(10,10,2,10,10,10);e.addColorStop(0,"#00FF00");e.addColorStop(1,"#00BB00");a.fillStyle=e;a.fill();c[1]=b;b=document.createElement("canvas");a=b.getContext("2d");b.width=b.height=20;a.beginPath();a.moveTo(10,0);a.lineTo(4,19);a.lineTo(19,7);a.lineTo(1,7);a.lineTo(16,19);
a.lineTo(10,0);e=a.createRadialGradient(10,10,2,10,10,10);e.addColorStop(0,"#FFDD00");e.addColorStop(1,"#FFEE00");a.fillStyle=e;a.fill();c[2]=b;b=document.createElement("canvas");a=b.getContext("2d");b.width=b.height=20;a.beginPath();a.moveTo(10,1);a.lineTo(3,10);a.lineTo(10,19);a.lineTo(17,10);a.lineTo(10,1);e=a.createRadialGradient(10,10,2,10,10,10);e.addColorStop(0,"#5555FF");e.addColorStop(1,"#CCCCFF");a.fillStyle=e;a.fill();c[3]=b;b=document.createElement("canvas");a=b.getContext("2d");b.width=
b.height=20;a.beginPath();a.moveTo(10,1);a.lineTo(1,10);a.lineTo(10,17);a.lineTo(14,10);a.lineTo(10,3);a.lineTo(8,16);a.lineTo(16,7);a.lineTo(1,1);a.lineTo(13,19);a.lineTo(10,1);e=a.createRadialGradient(10,10,2,10,10,10);e.addColorStop(0,"#555555");e.addColorStop(1,"#EEEEEE");a.fillStyle=e;a.fill();c[4]=b;b=document.createElement("canvas");a=b.getContext("2d");b.width=b.height=20;a.fillStyle="rgba(50, 100, 200, 1)";a.strokeStyle="#CCFF00";a.beginPath();a.arc(10,10,9,0,2*Math.PI,!0);a.fill();a.stroke();
c[5]=b;b=document.createElement("canvas");a=b.getContext("2d");b.width=b.height=20;a.fillStyle="rgba(50, 100, 200, 0.5)";a.strokeStyle="#CCFF00";a.beginPath();a.arc(10,10,9,0,2*Math.PI,!0);a.fill();a.stroke();c[6]=b};this.getImage=function(b){return c[b]}},ga=function(c){!A&&P&&(O=A=!0,shipCanvasContext.clearRect(0,0,V,W))},fa=function(c){B=c.clientX-X.left;w=c.clientY-X.top},Z=document.createElement("canvas");if(Z.getContext&&Z.getContext("2d")&&"function"===typeof Z.getContext("2d").fillText){var Y=
new z;Y.init()}})();
