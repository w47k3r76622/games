let TOOLTIP_DELAY=300,DICE_ROLL_INTERVAL=50,DICE_ROLL_DELAY=500,MESSAGE_DURATION=3e3,roomCirclesRaw=[...document.querySelectorAll(".R10_Center .circle"),...document.querySelectorAll(".R11_Center .circle"),...document.querySelectorAll(".R12_Center .circle"),...document.querySelectorAll(".R14_Center .circle"),...document.querySelectorAll(".R15_Center .circle"),...document.querySelectorAll(".R16_Center .circle")],hallCirclesRaw=[...document.querySelectorAll(".Hall1_Left .circle"),...document.querySelectorAll(".Hall1_Right .circle"),...document.querySelectorAll(".Hall2_Left .circle"),...document.querySelectorAll(".Hall2_Right .circle"),...document.querySelectorAll(".Hall3_Left .circle"),...document.querySelectorAll(".Hall3_Right .circle")];class ElementManager{constructor(){this.roomNumbers=[10,11,12,14,15,16],this.hallNumbers=[1,2,3],this.roomSquares=this.roomNumbers.reduce((e,t)=>(e[t]=this.getRoomSquares(t),e),{}),this.roomCircles=this.roomNumbers.reduce((e,t)=>(e[t]=this.getRoomCircles(t),e),{}),this.hallCircles=this.hallNumbers.reduce((e,t)=>(e[t]=this.getHallCircles(t),e),{}),this.partyCircles=this.getElements(".circle-container .circle")}getElements(e){return document.querySelectorAll(e)}getRoomSquares(e){var t=[10,11,12].includes(e)?"Left":"Right";return this.getElements(`.R${e}_Top .square, .R${e}_${t} .square, .R${e}_Bot .square`)}getRoomCircles(e){return this.getElements(`.R${e}_Center .circle`)}getHallCircles(e){return this.getElements(`.Hall${e}_Left .circle, .Hall${e}_Right .circle`)}}class UIManager{constructor(e,t){this.game=e,this.elementManager=t,this.startButton=document.getElementById("start-game-button"),this.rollButton=document.querySelector(".roll-button"),this.diceRes=document.querySelector(".dice-res"),this.thirteenCounter=document.querySelector(".Room13R"),this.characterSelectionArea=this.elementManager.getElements(".CharSel_Char1 .circle, .CharSel_Char2 .circle"),this.messageElement=document.getElementById("selection-message"),this.arrowElement=document.getElementById("arrow-char-sel"),this.tooltipTimeout=null,this.setupEventListeners=this.setupEventListeners.bind(this),this.setupAbilityClickListeners=this.setupAbilityClickListeners.bind(this),this.setupTooltipListeners=this.setupTooltipListeners.bind(this),this.handleTooltipEvent=this.handleTooltipEvent.bind(this),this.showTooltip=this.showTooltip.bind(this),this.hideTooltip=this.hideTooltip.bind(this),this.moveTooltip=this.moveTooltip.bind(this),this.activateAbility=this.activateAbility.bind(this),this.handleMuscleJoeAbility=this.handleMuscleJoeAbility.bind(this),this.handleRollButtonClick=this.handleRollButtonClick.bind(this),this.updateTooltip=this.updateTooltip.bind(this),this.checkSelectedParty=this.checkSelectedParty.bind(this),this.toggleRollButton=this.toggleRollButton.bind(this),this.enableRollButton=this.enableRollButton.bind(this),this.disableCharacterSelection=this.disableCharacterSelection.bind(this),this.updateResult=this.updateResult.bind(this),this.updateThirteenCount=this.updateThirteenCount.bind(this),this.setupCharacterSelection=this.setupCharacterSelection.bind(this),this.showMessage=this.showMessage.bind(this),this.moveArrow=this.moveArrow.bind(this),this.breakThroughWalls=this.breakThroughWalls.bind(this),this.removeWallStroke=this.removeWallStroke.bind(this),this.updateWallDisplay=this.updateWallDisplay.bind(this),this.updateScoreDisplay=this.updateScoreDisplay.bind(this)}hideMessage(){this.messageElement&&this.messageElement.classList.remove("visible")}hideArrow(){this.arrowElement&&(this.arrowElement.style.display="none")}setupEventListeners(){this.rollButton&&this.rollButton.addEventListener("click",this.handleRollButtonClick),this.setupAbilityClickListeners(),this.setupTooltipListeners()}setupAbilityClickListeners(){var e=document.querySelector(".abilities-cooldown");e&&e.addEventListener("click",e=>{var t;e.target.classList.contains("ability")&&(e=e.target,0===(t=parseInt(e.getAttribute("data-cooldown"),10))?this.activateAbility(e):this.showMessage(`Ability on cooldown for ${t} more rolls.`))})}setupTooltipListeners(){var e=document.querySelector(".circle-container");e&&(e.addEventListener("mouseover",this.handleTooltipEvent),e.addEventListener("mouseout",this.handleTooltipEvent),e.addEventListener("mousemove",this.handleTooltipEvent))}handleTooltipEvent=e=>{if(e.target.classList.contains("circle"))switch(e.type){case"mouseover":this.tooltipTimeout=setTimeout(()=>{this.showTooltip(e)},TOOLTIP_DELAY);break;case"mouseout":clearTimeout(this.tooltipTimeout),this.hideTooltip();break;case"mousemove":this.moveTooltip(e)}};showTooltip=e=>{var t=document.getElementById("tooltip");let o=e.target.textContent.trim();var r=this.game.characters.find(e=>e.emoji===o);t.textContent=r?r.description:"No description available",t.style.display="block",this.moveTooltip(e)};hideTooltip=()=>{document.getElementById("tooltip").style.display="none"};moveTooltip=e=>{var t=document.getElementById("tooltip");t.style.left=e.pageX+10+"px",t.style.top=e.pageY+10+"px"};activateAbility=e=>{switch(e.textContent.trim()){case"💪":this.handleMuscleJoeAbility();break;case"🔍":break;default:this.showMessage("Unknown ability.")}};hideMessage(){this.messageElement&&this.messageElement.classList.remove("visible")}handleMuscleJoeAbility=()=>{this.game.dice.total;var e=this.game.characters.find(e=>"💪"===e.emoji);e&&0===e.remainingCooldown?this.breakThroughWalls():0<e.remainingCooldown&&this.showMessage(`Ability on cooldown for ${e.remainingCooldown} more rolls.`)};breakThroughWalls(){var e=this.game.dice.total,t=(console.log("UIManager breaking walls for room "+e),this.game.breakThroughWalls(e));this.updateWallDisplay(t,e)}removeWallStroke=(e,t)=>{console.log("Removing wall stroke",e,t);e=document.querySelector("."+e);e&&(e.style["border-"+t]="0")};handleRollButtonClick=()=>{var e=this.rollButton.textContent;"Start Game"===e&&this.checkSelectedParty()?this.game.startGame():"Roll Dice"===e&&this.game.rollDice()};updateTooltip=(e,t)=>{var o=document.getElementById("tooltip");t?(o.textContent=e.target.dataset.description||"No description available",o.style.left=e.pageX+10+"px",o.style.top=e.pageY+10+"px",o.classList.add("visible")):o.classList.remove("visible")};checkSelectedParty=()=>5===Array.from(this.elementManager.partyCircles).filter(e=>""!==e.textContent).length?(this.toggleRollButton("Start Game"),!0):(this.toggleRollButton("Select Party First"),!1);toggleRollButton=e=>{this.rollButton&&(this.rollButton.textContent=e)};enableRollButton=()=>{this.rollButton.disabled=!1};disableCharacterSelection=()=>{this.characterSelectionArea.forEach(e=>{e.style.pointerEvents="none"})};updateResult=e=>{this.diceRes.textContent=e};updateThirteenCount(e){var t=document.getElementById("thirteen-count");t&&(t.textContent=`Thirteens: ${e} / 13`)}setupCharacterSelection(){this.characterSelectionArea.forEach((e,t)=>{var o=this.game.characters[t];e.textContent=o.emoji,e.dataset.description=o.description,e.setAttribute("draggable",!0),e.addEventListener("click",()=>{this.game.gameStarted||""===e.textContent||this.game.moveToPartySelection(e,t)}),e.addEventListener("mouseover",this.handleTooltipEvent),e.addEventListener("mouseout",this.handleTooltipEvent),e.addEventListener("mousemove",this.handleTooltipEvent)})}showMessage=(e,t=MESSAGE_DURATION)=>{this.messageElement&&(this.messageElement.textContent=e,this.messageElement.classList.add("visible"),0<t)&&setTimeout(()=>{this.messageElement.classList.remove("visible")},t)};moveArrow=(e,t="")=>{e=document.getElementById(e);document.getElementById("arrow-sel-party");e&&!e.contains(this.arrowElement)&&(e.appendChild(this.arrowElement),t)&&(this.arrowElement.textContent=t)};updateWallDisplay(e,t){console.log("Updating wall display:",e,"for room",t),e.r10wall&&(this.removeWallStroke("R10_Bot","bottom"),this.removeWallStroke("R11_Top","top")),e.r12wall&&(this.removeWallStroke("R11_Bot","bottom"),this.removeWallStroke("R12_Top","top")),e.r14wall&&(this.removeWallStroke("R14_Bot","bottom"),this.removeWallStroke("R15_Top","top")),e.r16wall&&(this.removeWallStroke("R15_Bot","bottom"),this.removeWallStroke("R16_Top","top"))}updateScoreDisplay(e){var t=document.querySelector(".score");t&&(t.textContent="Score: "+e)}}class Game{constructor(){this.score=0,this.maxScore=18,this.dice=new Dice,this.elementManager=new ElementManager,this.uiManager=new UIManager(this,this.elementManager),this.board=new Board(this,this.elementManager,this.uiManager),this.thirteenCount=0,this.isMasked=!0,this.gameStarted=!1,this.wallState={r10wall:!1,r12wall:!1,r14wall:!1,r16wall:!1},this.characters=this.initializeCharacters(),this.rolledRoom=null,this.init()}initializeCharacters(){return[new Character("Magnify Mark","🔍",{type:"reveal",cooldown:0},"Magnify Mark - Can reveal all emojis in a room."),new Character("Muscle Joe","💪",{type:"breakWall",cooldown:3},"Muscle Joe - Can break through walls. Only when rolled into the room."),new Character("Brain Brian","🧠",{type:"completeTasks",cooldown:5},"Brain Brian - Increase the roll chance of the room by 10%"),new Character("Jester Chester","🃏",{type:"completeEmoji",cooldown:5},"Jester Chester - Can complete a random emoji in a room."),new Character("Wrench Steve","🔧",{type:"adjustDice",cooldown:5},"Wrench Steve - Can make the next roll a 16."),new Character("Magic Mike","🪄",{type:"teleport",cooldown:5,destination:".R13_Center"},"Magic Mike - Can teleport to the opposite side room."),new Character("Ghost Casper","👻",{type:"swap",cooldown:5},"Ghost Casper - Drag him over someone else to swap places."),new Character("Candle Cindy","🕯️",{type:"protect",cooldown:5,preventBasement:!0},"Candle Cindy - Block the next 13 from rolling."),new Character("Bat Man","🦇",{type:"escapeBasement",cooldown:5},"Bat Man - Can escape the basement to any room."),new Character("Pumpkin Cinderella","🎃",{type:"freeAll",cooldown:5},"Pumpkin Cinderella - Can get everyone out of the basement.")]}init(){this.uiManager.setupEventListeners(),this.uiManager.updateResult(this.dice.total),this.setupCharacterSelection()}updateScore(){this.score+=1,this.uiManager.updateScoreDisplay(this.score)}allowRoom13Entry=()=>{var e=document.querySelector(".Hall1_Top .circle");e.classList.add("unlocked"),e.addEventListener("drop",this.handleRoom13Drop)};setupCharacterSelection(){this.uiManager.setupCharacterSelection()}moveToPartySelection(t,e){var o,r=Array.from(this.board.selectedParty).find(e=>""===e.textContent);t.classList.contains("selected")?(t.classList.remove("selected"),(o=Array.from(this.board.selectedParty).find(e=>e.textContent===t.textContent))&&(o.textContent="")):r&&(r.textContent=t.textContent,r.dataset.description=t.dataset.description,t.classList.add("selected")),this.uiManager.checkSelectedParty(),this.board.updateGameMessage()}startGame(){this.gameStarted=!0,this.uiManager.hideMessage(),this.uiManager.hideArrow(),this.uiManager.toggleRollButton("Roll Dice"),this.uiManager.enableRollButton(),this.board.populateRoomSquares(this.isMasked),this.uiManager.disableCharacterSelection(),this.board.startGame(),this.board.dragAndDropManager.setupDragAndDrop()}clearHistory(){document.querySelectorAll(".history .circle").forEach(e=>{e.textContent=""})}clearCharacterSelectors(){document.querySelectorAll(".CharSel_Char1 .circle, .CharSel_Char2 .circle").forEach(e=>{e.textContent="",e.classList.remove("selected")})}rollDice(){if(this.board.isHallwayEmpty()&&this.hasCharactersInBasement())this.dice.total=13,this.handleThirteenRoll();else{let e=!1,a;for(;!e;){var t=(a=[Math.floor(6*Math.random())+1,Math.floor(6*Math.random())+1,Math.floor(6*Math.random())+1]).reduce((e,t)=>e+t,0);10<=t&&t<=16&&(e=!0,this.dice.total=t)}this.uiManager.updateResult(0);let s=[document.querySelector(".dice1"),document.querySelector(".dice2"),document.querySelector(".dice3")];s.forEach((o,r)=>{setTimeout(()=>{let t=setInterval(()=>{o.textContent=Math.floor(6*Math.random())+1},DICE_ROLL_INTERVAL);setTimeout(()=>{clearInterval(t),o.textContent=a[r];var e=a.slice(0,r+1).reduce((e,t)=>e+t,0);this.uiManager.updateResult(e),r===s.length-1&&(document.querySelectorAll(".action-taken").forEach(e=>{e.classList.remove("action-taken"),e.style.backgroundColor="",e.setAttribute("draggable",!0)}),13===this.dice.total?this.handleThirteenRoll():this.board.moveToRoom(this.dice.total))},DICE_ROLL_DELAY)},r*DICE_ROLL_DELAY)}),this.characters.forEach(e=>{0<e.remainingCooldown&&--e.remainingCooldown}),this.rolledRoom=this.getRolledRoom()}}hasCharactersInBasement(){var e=document.querySelectorAll(".Base_Char .circle");return Array.from(e).some(e=>""!==e.textContent)}handleThirteenRoll(){this.thirteenCount+=1,this.uiManager.updateThirteenCount(this.thirteenCount),this.board.isHallwayEmpty()?this.board.moveBasementToParty():this.board.moveHallwayToBasement(),this.checkWinCondition()}checkWinCondition(){13<=this.thirteenCount&&(alert("Count Dekatria has expelled you from the mansion!"),location.reload())}addHistory(e){var t=document.querySelectorAll(".history .circle");Array.from(t).map(e=>e.textContent).includes(e)||(t=Array.from(t).find(e=>""===e.textContent))&&(t.textContent=e)}getCurrentRoom(e){return"Room11"}getRolledRoom(){return"Room11"}getAdjacentRoom(e,t){var o=parseInt(e.match(/\d+/)[0],10);let r;switch(t){case"top":r=o-1;break;case"bottom":r=o+1;break;default:return null}return"Room"+r}breakThroughWalls(e){console.log("Breaking walls for room "+e);let t=!1;return 10!==e&&11!==e||this.wallState.r10wall||(this.wallState.r10wall=!0,t=!0),11!==e&&12!==e||this.wallState.r12wall||(this.wallState.r12wall=!0,t=!0),14!==e&&15!==e||this.wallState.r14wall||(this.wallState.r14wall=!0,t=!0),15!==e&&16!==e||this.wallState.r16wall||(this.wallState.r16wall=!0,t=!0),console.log("Updated wall state:",this.wallState),this.uiManager.updateWallDisplay(this.wallState,e),t}handleRoom13Drop(e){e.preventDefault();var t=e.dataTransfer.getData("text"),t=document.getElementById(t);this.score<13?this.uiManager.showMessage("Room 13 is locked! You need 13 points to access it."):e.target.classList.contains("circle")&&e.target.closest(".Hall1_Top")?(alert("Congratulations! You've slain Count Dekatria!"),location.reload()):e.target.closest(".Room13")&&(e.target.classList.contains("circle")&&!e.target.textContent?(e.target.textContent=t.textContent,t.textContent="",this.uiManager.showMessage("Character placed in Room 13!")):this.uiManager.showMessage("Invalid drop location in Room 13."))}setupDragAndDrop(){var e=document.querySelectorAll(".character"),t=document.querySelectorAll(".square, .circle");e.forEach(e=>{e.addEventListener("dragstart",e=>{e.dataTransfer.setData("text",e.target.id)})}),t.forEach(e=>{e.addEventListener("dragover",this.handleDragOver),e.addEventListener("drop",e=>{e.target.closest(".Room13")||e.target.closest(".Hall1_Top")?this.handleRoom13Drop(e):this.handleDrop(e)})})}handleDragOver(e){e.preventDefault()}handleDrop(e){e.preventDefault();var t=e.dataTransfer.getData("text"),t=document.getElementById(t);e.target!==t&&(e.target.classList.contains("circle")&&!e.target.textContent?(e.target.textContent=t.textContent,t.textContent=""):this.uiManager.showMessage("Invalid drop location."))}}class Dice{constructor(){this.roll1=0,this.roll2=0,this.roll3=0,this.total=0}roll(){this.roll1=Math.floor(6*Math.random())+1,this.roll2=Math.floor(6*Math.random())+1,this.roll3=Math.floor(6*Math.random())+1,this.total=this.roll1+this.roll2+this.roll3}rollDiceInRange(e,t){for(;this.roll(),this.total<e||this.total>t;);}reset(){this.roll1=0,this.roll2=0,this.roll3=0,this.total=0}}class Ability{constructor(e,t,o){this.type=e,this.description=t,this.cooldown=o,this.remainingCooldown=0}use(e,t,o){if(0<this.remainingCooldown)e.game.uiManager.showMessage(t.name+"'s ability is on cooldown.");else switch(this.type){case"reveal":this.revealAbility(e,o);break;case"move":this.moveAbility(e,o,t);break;default:console.log(t.name+" has no defined ability.")}}revealAbility(e,t){t.forEach(e=>{"❓"===e.textContent&&(e.textContent=e.dataset.emoji,e.classList.add("revealed"))}),e.game.uiManager.showMessage(this.name+" revealed all emojis in the room!")}}class ActivateAbilities{constructor(){this.cooldowns={},this.init()}init(){document.querySelectorAll(".ability").forEach(e=>{var t=parseInt(e.dataset.cooldown,10);this.cooldowns[e.id]={cooldown:t,remaining:0},e.addEventListener("click",()=>this.activateAbility(e.id))})}activateAbility(e){var t=this.cooldowns[e];0===t.remaining?(console.log("Activating ability: "+e),this.useAbility(e),t.remaining=t.cooldown):console.log(`Ability ${e} is on cooldown. Remaining: `+t.remaining)}}class Board{constructor(e,t,o){this.game=e,this.elementManager=t,this.uiManager=o,this.roomCircles=t.roomCircles,this.roomSquares=t.roomSquares,this.hallCircles=t.hallCircles,this.selectedParty=t.partyCircles,this.gameStarted=!1,this.currentStep=0,this.score=0,this.dragAndDropManager=new DragAndDropManager(this,this.uiManager),this.finishSetup()}finishSetup(){this.dragAndDropManager.setupDragAndDrop()}areBasementSlotsFilled=()=>{var e=document.querySelectorAll(".Base_Char .circle");return Array.from(e).every(e=>""!==e.textContent)};checkAllChecked=()=>{18===document.querySelectorAll(".checked").length&&(alert("All emojis checked! You can now enter Room 13."),this.game.allowRoom13Entry())};moveHallwayToBasement=()=>{let o=document.querySelectorAll(".Base_Char .circle"),r=[];Object.values(this.hallCircles).forEach(e=>{e.forEach(e=>{var t;""!==e.textContent&&(t=Array.from(o).find(e=>""===e.textContent))&&(t.textContent=e.textContent,r.push(e.textContent),e.textContent="")})}),0<r.length&&this.game.uiManager.showMessage("Characters moved to the basement: "+r.join(", "))};populateRoomSquares(r){let t=Array.from(this.selectedParty).map(e=>e.textContent).filter(Boolean);5===t.length&&(this.game.uiManager.hideMessage(),this.game.uiManager.hideArrow(),Object.entries(this.roomSquares).forEach(([,e])=>{let o=this.shuffleArray([...t]);e.forEach((e,t)=>{t=o[t%o.length];e.dataset.emoji=t,e.textContent=r?"❓":t})}))}moveToRoom=e=>{var{hallCircle:e,roomSlots:t,roomSquares:o,roomNumber:r}=this.getRoomElements(e);e&&""!==e.textContent?(this.moveCharacterToRoom(e,t,o,r)||this.moveCharacterBackToParty(e),this.checkAllChecked()):this.game.uiManager.showMessage(`Room ${r} was opened but no one entered.`)};getRoomElements=e=>{let t,o,r,a;switch(e){case 10:t=document.querySelector(".Hall1_Left .circle"),o=document.querySelectorAll(".R10_Center .circle"),r=this.roomSquares[10],a=10;break;case 11:t=document.querySelector(".Hall2_Left .circle"),o=document.querySelectorAll(".R11_Center .circle"),r=this.roomSquares[11],a=11;break;case 12:t=document.querySelector(".Hall3_Left .circle"),o=document.querySelectorAll(".R12_Center .circle"),r=this.roomSquares[12],a=12;break;case 14:t=document.querySelector(".Hall1_Right .circle"),o=document.querySelectorAll(".R14_Center .circle"),r=this.roomSquares[14],a=14;break;case 15:t=document.querySelector(".Hall2_Right .circle"),o=document.querySelectorAll(".R15_Center .circle"),r=this.roomSquares[15],a=15;break;case 16:t=document.querySelector(".Hall3_Right .circle"),o=document.querySelectorAll(".R16_Center .circle"),r=this.roomSquares[16],a=16;break;default:return{}}return{hallCircle:t,roomSlots:o,roomSquares:r,roomNumber:a}};moveCharacterToRoom=(o,r,a,s)=>{for(let e=0;e<r.length;e++)if(""===r[e].textContent){r[e].textContent=o.textContent,o.textContent="";var l=this.checkForMatch(r[e],a,s);let t=r[e].textContent.trim();var i=this.game.characters.find(e=>e.emoji===t);return i&&i.useAbility(this,s),l||(this.updateHistory(s,r[e].textContent),this.game.uiManager.showMessage(r[e].textContent+` moved to room ${s} but did not score a point.`)),this.dragAndDropManager?this.dragAndDropManager.setupDragEventListeners(r[e],"party-char-"+t):console.error("dragAndDropManager is not initialized"),!0}return!1};moveCharacterFromRoom=(t,e,o)=>{parseInt(t.className.match(/\d+/)[0]);var r=parseInt(e.className.match(/\d+/)[0]),a=e.querySelectorAll(".circle"),s=this.roomSquares[r];let l=!1;for(let e=0;e<a.length;e++)if(""===a[e].textContent){a[e].textContent=o;var i=Array.from(t.querySelectorAll(".circle")).find(e=>e.textContent===o),i=(i&&(i.textContent=""),this.checkForMatch(a[e],s,r)),n=this.game.characters.find(e=>e.emoji===o);n&&n.useAbility(this,r),i||(this.updateHistory(r,o),this.game.uiManager.showMessage(o+` moved to room ${r} but did not score a point.`)),l=!0;break}return l||this.game.uiManager.showMessage("No empty slots in the target room."),l};checkForMatch=(t,o,r)=>{for(let e=0;e<o.length;e++)if(o[e].dataset.emoji===t.textContent&&!o[e].classList.contains("checked"))return o[e].textContent=t.textContent,o[e].classList.add("checked"),this.updateScore(this.score+1),this.game.uiManager.showMessage(t.textContent+` matched in room ${r} and scored a point!`),!0;return!1};moveCharacterBackToParty=e=>{var t=Array.from(this.selectedParty).find(e=>""===e.textContent);t&&(t.textContent=e.textContent,e.textContent="")};moveBasementToParty=()=>{var e=document.querySelectorAll(".Base_Char .circle");let r=[];e.forEach(e=>{var t,o;""!==e.textContent&&(t=Array.from(this.selectedParty).find(e=>""===e.textContent))&&(o=e.textContent.trim(),t.textContent=o,r.push(o),e.textContent="",this.dragAndDropManager.setupDragEventListeners(t,"party-char-"+o))}),0<r.length&&this.game.uiManager.showMessage("All characters escaped from the basement: "+r.join(", "))};isHallwayEmpty=()=>Object.values(this.hallCircles).every(e=>Array.from(e).every(e=>""===e.textContent));isRoom13Occupied=()=>{var e=document.querySelector(".R13_Top .circle, .R13_Left .circle, .R13_Right .circle");return e&&""!==e.textContent};clearBoard=()=>{Object.values(this.roomSquares).forEach(e=>{e.forEach(e=>{e.textContent="",e.classList.remove("checked")})}),Object.values(this.hallCircles).forEach(e=>{e.forEach(e=>e.textContent="")}),this.selectedParty.forEach(e=>e.textContent="")};shuffleArray=t=>{for(let e=t.length-1;0<e;e--){var o=Math.floor(Math.random()*(e+1));[t[e],t[o]]=[t[o],t[e]]}return t};toggleMask=()=>{Object.values(this.roomSquares).forEach(e=>{e.forEach(e=>{"❓"===e.textContent?e.textContent=e.dataset.emoji:e.textContent="❓"})})};updateHistory=(e,t)=>{let o;switch(e){case 10:o=document.querySelector(".R10_BotRight .history");break;case 11:o=document.querySelector(".R11_BotRight .history");break;case 12:o=document.querySelector(".R12_BotRight .history");break;case 14:o=document.querySelector(".R14_BotLeft .history");break;case 15:o=document.querySelector(".R15_BotLeft .history");break;case 16:o=document.querySelector(".R16_BotLeft .history");break;default:return void console.error("Unknown room number:",e)}var r;o?(r=o.querySelectorAll(".circle"),Array.from(r).map(e=>e.textContent).includes(t)?console.log(`Emoji ${t} is already in history for room `+e):(r=Array.from(r).find(e=>""===e.textContent))?r.textContent=t:console.log("No empty slot found in history.")):console.error("No history element found for room:",e)};updateGameMessage=()=>{var e=Array.from(this.selectedParty).filter(e=>""!==e.textContent).length;e<5&&!this.game.gameStarted?(this.currentStep=0,this.game.uiManager.showMessage("⬅️ Select 5 characters carefully"),this.game.uiManager.moveArrow("arrow-char-sel","Click to select and deselect")):5!==e||this.game.gameStarted?this.game.gameStarted&&1===this.currentStep?(this.currentStep=2,this.game.uiManager.showMessage("Drag characters to the hallway circles. Then roll the room number to get Characters into the room."),(e=document.getElementById("arrow-dice"))&&(e.style.display="none"),(e=document.getElementById("arrow-sel-party"))&&(e.textContent="⬇️ Get 13 points to open Room 13 ⬇️",e.style.display="block"),this.game.uiManager.moveArrow("arrow-sel-party","Drag to hallway")):2===this.currentStep?[...Object.values(this.hallCircles).flat()].some(e=>e.textContent&&""!==e.textContent.trim())?(this.currentStep=3,this.game.uiManager.showMessage("Roll the room number to get Characters into the room."),this.game.uiManager.moveArrow("arrow-dice","Roll Dice")):(this.game.uiManager.showMessage("Drag characters to the hallway circles. Then roll the room number to get Characters into the room."),this.game.uiManager.moveArrow("arrow-sel-party","⬇️ Characters that enter a room and match a ❓ score a point ⬇️")):3===this.currentStep&&(this.game.uiManager.showMessage(`↙️ Get 13 points to open Door 13 { ${this.score} / 13 } - Roll to move characters from hall to rooms.`),this.game.uiManager.moveArrow("arrow-guide","Get 13 points")):(this.currentStep=1,this.game.uiManager.showMessage("Click Start Game ➡️"),this.game.uiManager.moveArrow("arrow-dice","⬇️ Click Start to randomize the ❓'s⬇️"),this.game.uiManager.checkSelectedParty())};nextStep=()=>{this.currentStep<4&&(this.currentStep++,this.updateGameMessage())};startGame=()=>{this.gameStarted=!0,this.nextStep()};onCharacterDragged=()=>{2===this.currentStep&&this.nextStep()};onRollButtonClick=()=>{2===this.currentStep?(this.currentStep=3,this.updateGameMessage()):3===this.currentStep&&this.updateGameMessage()};updateScore(e){this.score=e;e=document.getElementById("score-count");e&&(e.textContent=`Score: ${this.score} / 13`),13<=this.score&&this.allowRoom13Entry()}allowRoom13Entry=()=>{var e=document.querySelector(".Hall1_Top .circle");e.classList.add("unlocked"),e.addEventListener("drop",this.handleRoom13Drop)};handleRoom13Drop=e=>{e.preventDefault();var t=e.dataTransfer.getData("text"),t=document.getElementById(t);this.score<13?this.uiManager.showMessage("Room 13 is locked! You need 13 points to access it."):e.target.classList.contains("circle")&&e.target.closest(".Hall1_Top")?(alert("Congratulations! You've won the game!"),location.reload()):e.target.closest(".Room13")&&(e.target.classList.contains("circle")&&!e.target.textContent?(e.target.textContent=t.textContent,t.textContent="",this.uiManager.showMessage("Character placed in Room 13!")):this.uiManager.showMessage("Invalid drop location in Room 13."))};handleCharacterMove(t,e){console.log(`Attempting to move ${t} to `+e.className);var o,r=parseInt(e.className.match(/\d+/)[0]),a=e.querySelectorAll(".circle"),s=this.roomSquares[r];let l=!1;for(let e=0;e<a.length;e++)if(console.log(`Checking slot ${e}: "${a[e].textContent}"`),""===a[e].textContent)return l=!0,console.log("Found empty slot at index "+e),a[e].textContent=t,o=this.checkForMatch(t,s,r),console.log("Match result: "+o),o?(this.game.updateScore(),this.game.uiManager.showMessage(t+` matched in room ${r} and scored a point!`)):(this.updateHistory(r,t),this.game.uiManager.showMessage(t+` moved to room ${r} but did not score a point.`)),(o=this.game.characters.find(e=>e.emoji===t))&&(console.log("Triggering ability for "+o.name),o.useAbility(this,r)),this.dragAndDropManager&&(console.log("Setting up drag event listeners for "+t),this.dragAndDropManager.setupDragEventListeners(a[e],"party-char-"+t)),console.log("Move completed successfully"),!0;return l||(console.log("No empty slots found in room "+r),console.log("Final room slots content:",Array.from(a).map(e=>e.textContent))),!1}checkForMatch(e,t,o){for(var r of t)if(r.dataset.emoji===e&&!r.classList.contains("checked"))return r.textContent=e,r.classList.add("checked"),!0;return!1}updateHistory(e,t){var e=document.querySelector(`.R${e}_BotRight .history, .R${e}_BotLeft .history`);e&&(e=Array.from(e.querySelectorAll(".circle")).find(e=>""===e.textContent))&&(e.textContent=t)}}class Character{constructor(e,t,o,r){this.name=e,this.emoji=t,this.ability=o,this.description=r,this.remainingCooldown=0}useAbility(e,t){if(0<this.remainingCooldown)e.game.uiManager.showMessage(this.name+"'s ability is on cooldown.");else switch(this.ability.type){case"reveal":this.revealAbility(e,t);break;case"breakWall":this.breakWallAbility(e,t)}}revealAbility(e,t){e.roomSquares[t].forEach(e=>{"❓"===e.textContent&&(e.textContent=e.dataset.emoji,e.classList.add("revealed"))}),e.game.uiManager.showMessage(this.name+" revealed all emojis in the room!")}breakWallAbility(e,t){console.log(this.name+" is attempting to break walls for room "+t),e.game.breakThroughWalls(t)?e.game.uiManager.showMessage(this.name+" broke through the wall!"):e.game.uiManager.showMessage(this.name+" tried to break the wall, but it was already broken.")}}class DragAndDropManager{constructor(e,t){this.board=e,this.uiManager=t,console.log("UIManager in DragAndDropManager:",this.uiManager)}setupDragAndDrop=()=>{var e=hallCirclesRaw,t=roomCirclesRaw,o=Array.from(this.board.selectedParty),r=Array.from(document.querySelectorAll(".Hall1_Top .circle"));[...e,...t,...o,...r].forEach(e=>{e?(this.setupDragEventListeners(e),this.setupDropEventListeners(e)):console.error("Invalid element found:",e)})};setupDragEventListeners=e=>{e.id||(e.id="circle-"+Math.random().toString(36).substr(2,9)),e.addEventListener("dragstart",e=>{this.board.game.gameStarted?(e.dataTransfer.setData("text/plain",e.target.id),console.log(`Drag started: ${e.target.id}, Character: `+e.target.textContent)):(console.log("Cannot drag before the game starts."),e.preventDefault())}),e.setAttribute("draggable",!0)};setupDropEventListeners=e=>{e.addEventListener("dragover",e=>e.preventDefault()),e.addEventListener("drop",this.onDrop)};onDragStart=e=>{e.target&&e.target.id?(e.dataTransfer.setData("text/plain",e.target.id),console.log(`Drag started: ${e.target.id}, Character: `+e.target.textContent)):console.error("Dragged element has no ID:",e.target)};highlightValidDropTargets=t=>{document.querySelectorAll(".circle").forEach(e=>{e.classList.remove("valid-drop")}),document.querySelectorAll(".circle").forEach(e=>{this.isDropAllowed(t,e)&&e.classList.add("valid-drop")})};isDropAllowed=(e,t)=>{var o=this.board.game.wallState,{r10wall:o,r12wall:r,r14wall:a,r16wall:s}=(console.log("Current wall state in isDropAllowed:",o),o);return e&&t?(e=e.closest("[class^='R'][class$='_Center']"),t=t.closest("[class^='R'][class$='_Center']"),console.log("Dragged from: "+(e?e.className:"Not a room")),console.log("Target room: "+(t?t.className:"Not a room")),!e&&t?(console.log("Drop not allowed: Cannot move a non-room character into a room."),!1):!t||(e=e?parseInt(e.className.match(/\d+/)[0]):null,t=parseInt(t.className.match(/\d+/)[0]),console.log(`Attempting to move from Room ${e} to Room `+t),e===t)||(o=10===e&&11===t&&o||11===e&&10===t&&o||11===e&&12===t&&r||12===e&&11===t&&r||14===e&&15===t&&a||15===e&&14===t&&a||15===e&&16===t&&s||16===e&&15===t&&s,console.log("Move allowed based on wall state: "+o),o)):(console.error("Dragged or target element is null."),!1)};onDrop=e=>{e.preventDefault();var t,o,r,a=e.dataTransfer.getData("text/plain"),s=document.getElementById(a);s?s===e.target?console.log("Cannot drop character on itself."):""!==e.target.textContent.trim()?(console.log("Swapping characters."),t=s.textContent.trim(),s.textContent=e.target.textContent.trim(),e.target.textContent=t):(t=this.isDropAllowed(s,e.target),console.log("Drop allowed: "+t),t?(t=s.textContent.trim(),o=e.target.closest("[class^='R'][class$='_Center']"),r=s.closest("[class^='R'][class$='_Center']"),console.log(`Attempting to move ${t} to room:`,o),o&&r&&o!==r?(console.log(`Moving ${t} from room ${r.className} to room `+o.className),r=this.board.moveCharacterFromRoom(r,o,t),console.log("Move result: "+(r?"Successful":"Failed")),r||this.board.game.uiManager.showMessage("No empty slots in the target room.")):o?(console.log(`Moving ${t} within the same room: `+o.className),r=this.board.moveCharacterToRoom(t,o,s),console.log("Move result: "+(r?"Successful":"Failed")),r||this.board.game.uiManager.showMessage("No empty slots in the target room.")):(console.log(`Moving ${t} to non-room target: `+e.target.className),e.target.textContent=t,s.textContent="")):this.board.game.uiManager.showMessage("Invalid move. Try again."),document.querySelectorAll(".valid-drop").forEach(e=>{e.classList.remove("valid-drop")})):console.error("Dragged element not found in the DOM:",a)}}document.addEventListener("DOMContentLoaded",()=>{new Game});