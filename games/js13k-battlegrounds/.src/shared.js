'use strict';var l;const m=Math.PI;function ba(a){return a[Math.random()*a.length|0]}function ca(){return ba("Blue Red Green Orange Mad Crazy".split(" "))+ba("Cat Dog Turtle Wombat Tiger Boi Killer".split(" "))+(1E3*Math.random()|0)}const da=new q(1,0,0,0);function ea(a){this.fa=2147483648;this.Fa=1103515245;this.Ja=12345;this.state=a}ea.prototype.pa=function(){return this.state=(this.Fa*this.state+this.Ja)%this.fa};ea.prototype.oa=function(){return this.pa()/(this.fa-1)};
ea.prototype.R=function(a,b){b-=a;var c=this.pa()/this.fa;return a+(c*b|0)};function fa(a,b,c){this.x=a;this.z=b;this.u=c}function ha(a,b){return Math.hypot(a.x-b.x,a.z-b.z)>a.u}function ia(a){this.T=a;this.H=new ea(a);this.J=this.Na();this.ea=this.Pa();this.P=this.Oa();this.M=this.$(4,1E3,5);this.S=this.$(5,1E3,1);this.X=new fa(0,0,0)}l=ia.prototype;l.Na=function(){const a=[];let b=new fa(0,0,500);a.push(b);let c=320;for(;6>a.length;)b=this.La(b,c),a.push(b),c/=2;return a};
l.La=function(a,b){const c=a.u-b,e=a.x-c,d=a.x+c,g=a.z-c,h=a.z+c;for(;;){const f=this.H.R(e,d),k=this.H.R(g,h);if(Math.hypot(a.x-f,a.z-k)<c)return new fa(f,k,b)}};l.Pa=function(){const a=this.H.R(6,20),b=[];for(var c=0;c<a;c++){let a=this.H.R(0,1E3)/100,c=this.H.R(0,200);b.push([c*Math.cos(a),c*Math.sin(a)])}return b};l.Oa=function(){const a=[];for(var b=0;20>=b;b++){const e=[];for(var c=0;20>=c;c++)e.push(this.Ka(-400+40*b,-400+40*c));a.push(e)}return a};
l.Ka=function(a,b){for(var c=.1,e=0;e<this.ea.length;e++)c=Math.max(c,70-.3*Math.hypot(a-this.ea[e][0],b-this.ea[e][1]));return c+=5*(this.H.oa()-.5)};
l.i=function(a,b){-400>=a&&(a=-399);400<=a&&(a=399);-400>=b&&(b=-399);400<=b&&(b=399);var c=(a- -400)/40|0,e=(b- -400)/40|0;const d=40*c+-400,g=40*e+-400,h=this.P[c][e];if(a-d>b-g){var f=d+40;var k=this.P[c+1][e];var n=g;var v=d+40;c=this.P[c+1][e+1]}else f=d+40,k=this.P[c+1][e+1],n=g+40,v=d,c=this.P[c][e+1];var z=g+40;e=((n-z)*(a-v)+(v-f)*(b-z))/((n-z)*(d-v)+(v-f)*(g-z));a=((z-g)*(a-v)+(d-v)*(b-z))/((n-z)*(d-v)+(v-f)*(g-z));return e*h+a*k+(1-e-a)*c};l.ca=function(){return-400+800*this.H.oa()};
l.$=function(a,b,c){const e=[];for(;e.length<b;){const b=this.ca(),g=this.ca(),h=this.i(b,g)+c;0<h&&e.push(new q(a,b,h,g))}return e};l.ja=function(a){return Math.min(10,a/30|0)};l.ia=function(a){return Math.min(5,a/60|0)};l.ka=function(a){return 10===this.ja(a)?this.J[5]:this.J[this.ia(a)+1]};
l.aa=function(a){var b=this.ja(a);if(10===b)return this.J[5];var c=this.ia(a);if(0===b%2)return this.J[c];a=a%30/30;b=1-a;let e=this.J[c];c=this.J[c+1];this.X.x=b*e.x+a*c.x;this.X.z=b*e.z+a*c.z;this.X.u=b*e.u+a*c.u;return this.X};function q(a,b,c,e,d,g,h){this.v=a;this.x=b;this.y=c;this.z=e;this.c=d;this.a=g;this.f=h;this.o=this.w=this.name=this.s=void 0;this.j=100;this.actions=this.pitch=this.g=this.sa=this.I=void 0}
function ja(a){let b=0;for(let c=0;c<a.entities.length;c++){let e=a.entities[c];2===e.v&&0<e.j&&b++}return b};
