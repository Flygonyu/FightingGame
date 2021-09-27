var contentDiv = document.getElementById('app');
var contentDiv2 = document.getElementById('app2');
//model

const model = [
{
  player: 'Deg',
  picture: '<img src="player.jpg">',
  hp: 100,
  attacks: {
      name: ['sword', 'fire'],
      power: [10, 30],
  }
},

{
  player: 'Linn',
  picture: '<img src="player.jpg">',
  hp: 100,
  attacks: {
    name: ['sword', 'hammer', 'fire', 'lightning'],
    power: [10, 20, 20, 10],
  }

},
{
    player: 'Bjørnar',
    picture: '<img src="player.jpg">',
    hp: 100,
    attacks: {
      name: ['sword', 'hammer', 'fire', 'lightning'],
      power: [10, 20, 20, 10],
    }
  
  },
{
    player: 'Geir',
    picture: '<img src="geir.png">',
    hp: 125,
    attacks: {
      name: ['sword', 'hammer', 'fire', 'lightning'],
      power: [10, 20, 20, 10],
    }
  },
  {
    player: 'Eskil',
    picture: '<img src="eskil.png">',
    hp: 150,
    attacks: {
      name: ['sword', 'hammer', 'fire', 'lightning'],
      power: [10, 20, 20, 10],
    }
  },
{
    player: 'Terje',
    picture: '<img src="terje.png">',
    hp: 200,
    attacks: {
      name: ['MVC', 'Javascript', 'errorCodes', 'acrobatics'],
      power: [20, 10, 30, 10],
    }
  },
{ 
player: 'U̷̯̘̲͊͂̀̀̈́̓̆̅͑̚N̷̨̢̰̱̓̌̇̍̋͆̒́͐̒̚K̴̙̜̜̫̻͙͓̐́͠Ń̷̬̠͎͎̗͕̣͍Ơ̷̜̳̍̑̊͊͜W̵͓̭͝N̷̨̮͘͝',
picture: '<img src="sisteBoss.PNG">',
// picture: 'sisteBoss.PNG'
 hp: 500,
 attacks: {
  name: ['UNDÈFINED', 'ERROR', 'UNEXPECTED TOKEN', 'EMPTYCONSOLE'],
  power: [10, 20, 40, 45],
// music:  
}

}, 


];

// let ;
let opponentNum = 1;
let hit = 1;
let crit = 2; 
let miss = 0;
let weaponHooman = 'defend';
let weaponNPC;
let humanDamage = 0;
let NPCDamage;
let disableheal = 'Disabled';
let gameInfo = '';
let hide = 'hide';
let hideInput = '';
let hideInfo ='hide';
let attackImpact;
let attackText= '';
let defenceUP;
let inputValue = 'Hvem er du?';
let disableButtons = 'disabled';
let disableDefend = '';
let buttonstatus;
let buttonfunction;
let hideBlock ='hide'
// let nextOpponent = 1;
// let defend;
// model.opponent.player.name.length);
let hasplayed = 'false';



//view
show();


function show(){
  
  if (model[0].hp == 0) {
    buttonstatus = 'prøve igjen?'
    buttonfunction = 'onclick="reset()"'
    gameInfo = 'tapte';
    disableheal = 'Disabled';
    hideInfo = '';
  } else if (model[opponentNum].hp == 0) {
    gameInfo = 'vant';
    hideInfo = ''
  };
 if (model[0].hp == 100){
 disableheal = "Disabled"
 } 

  if (attackImpact == 0) {
    attackText = 'Miss!'
  } else if (attackImpact == 1){
    attackText = 'Hit!';
  } else if (attackImpact == 2){
    attackText = 'Crit!';
  } else if (attackImpact == 3){
    attackText = '';
  }
  if (model[6].hp < 250 ){model[6].picture = `<img src="unknown.png">`}

  // if(defenceUP == 0){
  //   hideBlock='hide';
  // }
  //      attackNPC();
 // if (level > 1) {}
  contentDiv.innerHTML = `
    <h1>FIGHT!</h1>
<div class="wrapper">

    <div id="deg">
    <div> 
    ${inputValue}</div>
    <input class="playerName ${hideInput}" type="text" onchange="inputValue = this.value, hideInput = 'hide', disableButtons = '', show()" placeholder="type and press enter to start"/>
    <br>
    <div>${model[0].picture}</div>
    <br>HP: ${model[0].hp}
    <br>
    <button ${disableButtons} id="sword" onclick="Swordattack()">Sword</button> 
    <button ${disableButtons}  id="fire" onclick="Fireattack()">Fireball</button>
    <br>
    <button ${disableButtons} ${disableDefend} id="block" onclick="defend()">Defend</button> 
    <button ${disableheal} id="Heal" onclick="heal()">Heal</button>
    <br>
    <div id="yourAttack" class="humanAttackInfo ${hide}">You used ${weaponHooman}! ${attackText} You did ${humanDamage} damage</div>
    <br><div id="blocked" class="${hideBlock}"">You used Defend! ${model[opponentNum].player}'s attacks are less effective for ${defenceUP +1} rounds</div>
    </div>
  <div class="gameInfo"><div class=${hideInfo}>${inputValue} ${gameInfo} mot ${model[opponentNum].player} 
    <br> <button ${buttonfunction}>${buttonstatus}</button>
  </div></div>
    <div id="opponent">
    <div>${model[opponentNum].player}</div><br>
    <div>${model[opponentNum].picture}</div>
    <br>HP: ${model[opponentNum].hp}
    <br>
    <div class="NPCAttackInfo ${hide}">${model[opponentNum].player} attacked you with ${weaponNPC} for ${NPCDamage} damage!</div>
    </div>
</div> 
`;
};


//controller
function Swordattack() {
  // let rdmAttkNameNum = Math.floor(Math.random() * 2);
  let playerAttackNR = Math.floor(Math.random() * 11);
  attackImpact = '';
  if (model[0].hp > 0 && model[opponentNum].hp > 0) {
    if (playerAttackNR > 4 ){
      attackImpact = hit;
    } else if (playerAttackNR == 4 || playerAttackNR == 3 || playerAttackNR == 2 ) {
      attackImpact = miss;
    } else {
      attackImpact = crit;
    }
    weaponHooman = model[0].attacks.name[0];
    
    humanDamage = (model[0].attacks.power[0] * attackImpact);
    model[opponentNum].hp -= humanDamage;
    if (model[opponentNum].hp <= 0) {
      model[opponentNum].hp = 0;
      buttonfunction = 'onclick="nextEnemy()"'
      buttonstatus = "next?"
    }
    if (model[6].hp < 1) {buttonfunction = "onclick='nextLevelButton()'"
    buttonstatus = "are you sure you want to do this?"
    hideInfo = '';
    gameInfo = 'Vant over alle, men det er ikke over';}
    attackNPC();}
  hide = '';
    show();
}

// function 
function Fireattack() {
  // let rdmAttkNameNum = Math.floor(Math.random() * 2);
  let playerAttackNR = Math.floor(Math.random() * 11);
  attackImpact = '';
  if (model[0].hp > 0 && model[opponentNum].hp > 0) {
    if (playerAttackNR > 6 ){
      attackImpact = hit;
    } else if (playerAttackNR > 1 && playerAttackNR < 6) {
      attackImpact = miss;
    } else {
      attackImpact = crit;
    }
    weaponHooman = model[0].attacks.name[1];
    
    humanDamage = (model[0].attacks.power[1] * attackImpact);
    model[opponentNum].hp -= humanDamage;
    if (model[opponentNum].hp <= 0) {
      model[opponentNum].hp = 0;
      buttonfunction = 'onclick="nextEnemy()"'
      buttonstatus="next?";
    }
    if (model[6].hp <= 0) {
      buttonfunction = "onclick='nextLevelButton()'"
    buttonstatus = "are you sure you want to do this?"
    hideInfo = '';} else if (model[6].hp <= 0 && level == 2) {
      butt
    }
    attackNPC();
  hide = '';
    show();
}
}

function attackNPC() {
  
  let rdmAttkNameNum = Math.floor(Math.random() * 3);
  let attackImpact = '';
  let npcAttackNR = Math.floor(Math.random() * 11);
  if (model[opponentNum].hp > 0 && model[0].hp > 0){
    if (npcAttackNR > 6 ){
      attackImpact = hit;
      disableheal = '';
    } else if (npcAttackNR == 4 || npcAttackNR == 3 || npcAttackNR == 2 || npcAttackNR == 5 || npcAttackNR == 6|| npcAttackNR == 1 ) {
      attackImpact = miss;
    } else {
      attackImpact = crit;
      disableheal = '';
    }

    weaponNPC = model[opponentNum].attacks.name[rdmAttkNameNum];

    NPCDamage = (model[opponentNum].attacks.power[rdmAttkNameNum] * attackImpact);
    
    if (defenceUP > 0) {
      NPCDamage = NPCDamage * 0.5;
      defenceUP -= 1;
      disableDefend = "Disabled"
      hideBlock=''
    } else if(defenceUP == 0){
      hideBlock='hide';
      disableDefend='';
    }else {
      disableDefend = '';
    }
    model[0].hp -= NPCDamage;

    if (model[0].hp <= 0) model[0].hp = 0;
  } 
  hide = '';
  show();
  }
  
function defend() {
   console.log('defend')
  defenceUP = 3;
  hideBlock='';
  attackNPC()
}

function heal() {
  attackImpact = 3;
  weaponHooman = "Heal";
  if (model[0].hp > 0){
// if (model[0].hp == 100){
 // disableheal = "Disabled"
// } 
  if(model[0].hp == 90) {
    disableheal = '';
    model[0].hp += 10;
    humanDamage = '10 healing'
    attackNPC()
  } else if(model[0].hp == 95) {
    disableheal = '';
    model[0].hp += 5;
    humanDamage = '5 healing'
    attackNPC()
  }else if(model[0].hp == 85) {
    disableheal = '';
    model[0].hp += 15;
    humanDamage = '15 healing'
    attackNPC()
  }else{
    disableheal ='';
    model[0].hp += 20;
    humanDamage = '20 healing';
    attackNPC();
    } 
  show();
  } 
}



//function setVolume(){
 // var audio = document.getElementById("myaudio");
 // audio.volume = 0.1;

 // show()
// }

// var obj = document.createElement('audio');
// console.log(obj.volume); // 1
// obj.volume = 0.75;

window.onkeydown = function(event) {
  if (event.keyCode == 27 /*&& model[opponentNum] < 6*/) {
  model[opponentNum].hp = 1;
//   } //else if(event.keycode == 27 && model[opponentNum] == 6) {
//   //    model[opponentNum.hp -250]
  show()
  }
}
 
function nextLevel(){
  level = 2;
  opponentNum = 1;
  // level = 1 + 1;
  model[1].picture = `<img src="playerHard.jpg">`;
  model[1].hp = 300;
  model[2].picture = `<img src="playerHard.jpg">`;
  model[2].hp = 300;
  model[3].picture = `<img src="geirHard.png">`;
  model[3].hp = 375;
  model[4].picture = `<img src="eskilHard.png">`;
  model[4].hp = 450;
  model[5].picture = `<img src="TerjeHard.png">`;
  model[5].hp = 600;
  model[6].hp = 1000;
  show()
}
 function reset() {
  opponentNum = 1;
  // level = 1 + 1;
  model[0].hp = 100;
  model[1].picture = `<img src="player.jpg">`;
  model[1].hp = 100;
  model[2].picture = `<img src="player.jpg">`;
  model[2].hp = 100;
  model[3].picture = `<img src="geir.png">`;
  model[3].hp = 125;
  model[4].picture = `<img src="eskil.png">`;
  model[4].hp = 150;
  model[5].picture = `<img src="Terje.png">`;
  model[5].hp = 200;
  model[6].hp = 500;
  hideInfo = 'hide';
  hide = 'hide';
  defenceUP=0;
  hideBlock = 'hide';
  disableDefend=''
  show()
 }
 function nextEnemy() {
   console.log('continue')
   opponentNum += 1;
   hideInfo="hide";
   hide = 'hide';
   defenceUP= 0;
   hideBlock = 'hide';
   disableDefend=''
   show()
 }
 function nextLevelButton() {
  hideInfo="hide";
  hide = 'hide';
  nextLevel()
 }

