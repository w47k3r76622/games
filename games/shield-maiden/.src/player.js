function startPlayer(){_.button.disabled=!0,_.audio.parentNode.style.opacity=.3;try{var t=_.formula.value.replace(/(sin|cos|tan|floor|ceil)/g,"Math.$1");_.audio.stop&&_.audio.stop(),_.audio.src="data:audio/wav;base64,"+btoa(softsynth(t)),_.audio.title=_.formula.value,_.audio.volume=.3,_.audio.play()}catch(a){alert(a)}_.audio.parentNode.style.opacity=1,_.button.disabled=!1}var sounds={test:[0,,.1812,,.1349,.4524,,.2365,,,,,,.0819,,,,,1,,,,,.5],start:[0,,.0911,.4779,.434,.5016,,,,,,.3504,.6396,,,,,,1,,,,,.5],dirt:[3,,.1337,.3709,.0896,.0379,,.2476,,,,,,,,.4619,.1879,-.1484,1,,,,,.5],hp:[0,,.3722,,.407,.3215,,.4808,,,,,,.2295,,.6552,,,1,,,,,.5],horse:[0,,.3239,,.4899,.3072,,.1272,,,,,,.2305,,.7536,,,1,,,,,.5],treasure:[1,,.3429,,.2116,.2116,,.2249,,,,,,,,,,,1,,,,,.5],enemy:[1,,.0919,,.2654,.5705,,-.3563,,,,,,,,,,,1,,,,,.5],move:[1,,.0458,,.1652,.442,,.1422,,,,,,,,,,,1,,,,,0]},player=new Audio;player.src=jsfxr(sounds.start);var softsynth=function(f){return eval("for(var t=0,S='RIFF_oO_WAVEfmt "+atob("EAAAAAEAAQBAHwAAQB8AAAEACAA")+"data';++t<3e5;)S+=String.fromCharCode("+f+")")},e,_={};_.button=document.getElementById("generate"),_.audio=document.getElementById("audio"),_.formula=document.getElementById("formula"),_.button.onclick=startPlayer;