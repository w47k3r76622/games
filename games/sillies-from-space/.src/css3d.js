﻿C = {
unit: "px",
camX: 0,
camY: 0,
camZ: 0,
camRX: 0,
camRY: 0,
camRZ: 0,
sprite_count: 0,
sprites: [],
plane_count: 0,
cube_count: 0,
pyramid_count: 0,
options: {},
$: t => self[t],
set_unit: t => C.unit=t,
set_perspective: t => viewport.style.perspective=`${t}${C.unit}`,

// Initialize an object's properties
init: t => {
  t.css||(t.css=""),
  t.html||(t.html=""),
  t.g||(t.g="scene"),
  t.o||(t.o="center"),
  t.o=="top left"&&(t.x+=t.w/2,t.y+=t.h/2),
  t.o=="top"&&(t.y+=t.h/2),
  t.o=="top right"&&(t.x-=t.w/2,t.y+=t.h/2),
  t.o=="right"&&(t.x-=t.w/2),
  t.o=="bottom right"&&(t.x-=t.w/2,t.y-=t.h/2),
  t.o=="bottom"&&(t.y-=t.h/2),
  t.o=="bottom left"&&(t.x+=t.w/2,t.y-=t.h/2),
  t.o=="left"&&(t.x+=t.w/2),
  t.w||(t.w=0),
  t.h||(t.h=0),
  t.x||(t.x=0),
  t.y||(t.y=0),
  t.z||(t.z=0),
  t.rx||(t.rx=0),
  t.ry||(t.ry=0),
  t.rz||(t.rz=0),
  t.sx||(t.sx=1),
  t.sy||(t.sy=1),
  t.sz||(t.sz=1),
  C.options[t.n]=t
},

// Group of objects
group: t => {
  t.d||t.d===0||(t.d=t.h),
  C.init(t),
  C.$(t.g).innerHTML+=`<div id="${t.n}"class="group ${t.css}"style="position:absolute;width:${t.w}${C.unit};height:${t.d}${C.unit};transform:${C.tr(t)}">`
},

// Plane
plane: t => {
  t.n||(t.n=`plane${C.plane_count++}`),
  C.init(t),
  C.$(t.g).innerHTML+=`<div id="${t.n}"class="plane ${t.css}"style="position:absolute;width:${t.w}${C.unit};height:${t.h}${C.unit};background:${t.b};transform-origin:${t.o};transform:${C.tr(t)}">${t.html}`,
  C.camera()
},

// Sprite (optional)
sprite: t => {
  t.n||(t.n=`sprite${C.sprite_count++}`),
  C.init(t),
  C.$(t.g).innerHTML+=`<div id="${t.n}"class="sprite ${t.css}"style="position:absolute;width:${t.w}${C.unit};height:${t.h}${C.unit};background:${t.b};transform-origin:${t.o};transform:${C.tr(t)}">${t.html}`,
  C.sprites.push(t.n),
  C.camera()
},

// Cube (optional)
cube: t => {
  t.n||(t.n=`cube${C.cube_count++}`),
  C.init(t),
  C.group(t),
  //Added id to sides of cube they can be refered to in code
  C.plane({n:t.n + "1",g:t.n,x:t.w/2,y:t.d/2,w:t.w,h:t.d,b:t.b,css:"bottom"}),
  C.plane({n:t.n + "2",g:t.n,y:t.d/2,w:t.d,h:t.h,b:t.b1||t.b,rx:-90,ry:-90,o:"bottom",css:"left"}),
  C.plane({n:t.n + "3",g:t.n,x:t.w,y:t.d/2,w:t.d,h:t.h,b:t.b2||t.b,rx:-90,ry:-90,o:"bottom",css:"right"}),
  C.plane({n:t.n + "4",g:t.n,x:t.w/2,y:t.d,w:t.w,h:t.h,b:t.b1||t.b,rx:-90,o:"bottom",css:"front"}),
  C.plane({n:t.n + "5",g:t.n,x:t.w/2,y:0,w:t.w,h:t.h,b:t.b2||t.b,rx:-90,o:"bottom",css:"back"}),
  C.plane({n:t.n + "6",g:t.n,x:t.w/2,y:t.d/2,z:t.h,w:t.w,h:t.d,b:t.b,css:"top"})
},


// Move the camera
camera: t => {
  t&&(t.x||0===t.x)&&(C.camX=t.x),
  t&&(t.y||0===t.y)&&(C.camY=t.y),
  t&&(t.z||0===t.z)&&(C.camZ=t.z),
  t&&(t.rx||0===t.rx)&&(C.camRX=t.rx),
  t&&(t.ry||0===t.ry)&&(C.camRY=t.ry),
  t&&(t.rz||0===t.rz)&&(C.camRZ=t.rz),
  C.camX+=(Math.random()-.5)/1e3,
  scene.style.transform=`translateX(${-C.camX}${C.unit})translateY(${-C.camY}${C.unit})translateZ(${-C.camZ}${C.unit})rotateX(${C.camRX}deg)rotateY(${C.camRY}deg)rotateZ(${C.camRZ}deg)`;
  for(var r in C.sprites){
    var n=C.$(C.sprites[r]),
    o=n.style.transform.replace(/ *rotate.*\(.*?deg\)/g,"");
    n.style.transform=o+`rotateZ(${-C.camRZ}deg)rotateX(${-C.camRX}deg)`
  }
},

// Move an object
move: t => {
  if(t.n){
   var r=C.$(t.n),
   n=C.options[t.n];
   (t.x||0===t.x)&&(n.x=t.x),
   (t.y||0===t.y)&&(n.y=t.y),
   (t.z||0===t.z)&&(n.z=t.z),
   (t.rx||0===t.rx)&&(n.rx=t.rx),
   (t.ry||0===t.ry)&&(n.ry=t.ry),
   (t.rz||0===t.rz)&&(n.rz=t.rz),
   C.options[t.n]=n,
   r.style.transform=C.tr(n)
 }
},

//Added function to change background of object
changeBackground: t => {
  var r=C.$(t.n);
  r.style.background=t.b;
},

// CSS3D transform string
tr: t => `translateX(-50%)translateY(-50%)translateX(${t.x}${C.unit})translateY(${t.y}${C.unit})translateZ(${t.z}${C.unit})rotateX(${t.rx}deg)rotateY(${t.ry}deg)rotateZ(${t.rz}deg)scaleX(${t.sx})scaleY(${t.sy})scaleZ(${t.sz})`

}
