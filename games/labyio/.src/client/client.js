function handlePlay(a,b){socket.emit('movePiece',{side:a,index:b})}function reset(){UI={buttons:[]},Game={rules:{},players:[],playerPos:[],map:[],movingPiece:{},goals:[],pieceMoved:!1},swapState('stCreate'),changeTitles('Welcome','Welcome to LabyIO!')}function bind(){socket.on('connect',function(){reset()}),socket.on('disconnect',function(){changeTitles('Connecting...','Connection lost.')}),socket.on('error',function(){changeTitles('Error','Connection error.')}),socket.on('alert',function(a){alert(a)}),socket.on('message',function(a){document.title=a.title,message.innerHTML=a.text}),socket.on('username',function(a){inName.value=a}),socket.on('gameFound',function(a){swapState('stWaiting'),players.innerHTML='',Game.rules=a}),socket.on('playerJoin',function(a){Game.players.push(a),players.innerHTML+='<li>'+a+'</li>';let b=Game.rules.playerCount-Game.players.length+'/'+Game.rules.playerCount;changeTitles('Waiting '+b,'Waiting for '+b+' players...')}),socket.on('playerLeave',function(a){Game.players.splice(a,1),players.innerHTML='';for(let c=0;c<Game.players.length;c++)players.innerHTML+='<li>'+Game.players[c]+'</li>';let b=Game.rules.playerCount-Game.players.length+'/'+Game.rules.playerCount;changeTitles('Waiting '+b,'Waiting for '+b+' players...')}),socket.on('gameStart',function(a){Game.map=a.map,Game.movingPiece=a.movingPiece,Game.playerPos=a.playerPos,swapState('stGame'),gameInfo.innerHTML='';for(let c,b=0;b<Game.players.length;b++)c='<span class="tag" style="background-color: '+getColorForPlayer(b)+';">',c+=Game.players[b]===inName.value?'You!':Game.players[b],c+='</span>',gameInfo.innerHTML+=c;addGameButtons(),renderGame(ctx)}),socket.on('returnHome',function(){reset()}),socket.on('playerWon',function(){swapState('stWin'),changeTitles('You won!','Congratulations! You won!')}),socket.on('playerLoose',function(a){swapState('stWin'),changeTitles('You lost!','Looks like you lost the game :(<br><span style="color: '+getColorForPlayer(a)+';">'+Game.players[a]+'</span> won!')}),socket.on('newTurn',function(a){Game.pieceMoved=!1,Game.players[a]===inName.value?changeTitles('Your turn!','It\'s <span style="color: '+getColorForPlayer(a)+';">your</span> turn!'):changeTitles(Game.players[a]+' turn','It\'s <span style="color: '+getColorForPlayer(a)+';">'+Game.players[a]+'</span> turn!')}),socket.on('goalsUpdate',function(a){Game.goals=a,renderGame(ctx)}),socket.on('mapUpdate',function(a){Game.pieceMoved=!0,Game.map=a.map,Game.movingPiece=a.movingPiece,renderGame(ctx)}),socket.on('movingPieceUpdate',function(a){Game.movingPiece=a,renderGame(ctx)}),socket.on('playerPosUpdate',function(a){Game.playerPos=a,renderGame(ctx)})}