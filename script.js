var contentDiv = document.getElementById('app');
//model

const model = [
{
  player: 'Deg',
  picture: '<img src="player.jpg">',
  hp: 100,
  attacks: {
      name: ['sword', 'fire'],
      power: [10, 20],
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
let weaponHooman;
let weaponNPC;
let humanDamage;
let NPCDamage;
let disableheal = 'Disabled';
let gameInfo = 'Click the enemy to attack!';
let hide = 'hide';
let attackImpact;
let attackText= '';
// let nextOpponent = 1;
// let defend;
// model.opponent.player.name.length);




//view
show();
function show(){
  if (model[0].hp == 0) {
    gameInfo = 'Du tapte!';
  } else if (model[opponentNum].hp == 0) {
    gameInfo = 'Du vant!';
  };

 
  if (attackImpact == 0) {
    attackText = 'Miss!'
  } else if (attackImpact == 1){
    attackText = 'Hit!';
  } else if (attackImpact == 2){
    attackText = 'Crit!';
  } else if (attackImpact == 3){
    attackText = '';
  }
  
  contentDiv.innerHTML = `
    <h1>FIGHT!</h1>
<div class="wrapper">
    <div id="deg">
    <div>${model[0].player}</div>
    <div>${model[0].picture}</div>
    <br>HP: ${model[0].hp}
    <br><button id="sword" onclick="attack()">Sword</button><button id="fire" onclick="attack()">Fireball</button>
    <br>
    <button Disabled id="block" onclick="defend()">button</button>
    <button ${disableheal} id="Heal" onclick="heal()">Heal</button>
    <br>
    <div id="yourAttack" class="humanAttackInfo ${hide}">You used ${weaponHooman}! ${attackText} You did ${humanDamage} damage</div>
    </div>
    <div class="gameInfo"><div class=${hide}>${gameInfo}</div></div>
    <div id="opponent" onclick="attack()">
    <div>${model[opponentNum].player}</div>
    <div>${model[opponentNum].picture}</div>
    <br>HP: ${model[opponentNum].hp}
    <br>
    <div class="NPCAttackInfo ${hide}">${model[opponentNum].player} attacked you with ${weaponNPC} for ${NPCDamage} damage!</div>
    </div>
</div> 
`;
 
};


//controller
function attack() {
  let rdmAttkNameNum = Math.floor(Math.random() * 2);
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
    weaponHooman = model[0].attacks.name[rdmAttkNameNum];
    
    humanDamage = (model[0].attacks.power[rdmAttkNameNum] * attackImpact);
    model[opponentNum].hp -= humanDamage;
    if (model[opponentNum].hp <= 0) {
      model[opponentNum].hp = 0;
      opponentNum += 1;
    }
    if (model[6].hp < 250 ){model[6].picture = `<img src="unknown.png">`}
        attackNPC();
  } 
  hide = '';
    show();
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
    model[0].hp -= NPCDamage;

    if (model[0].hp <= 0) model[0].hp = 0;
  } 
  hide = '';
  show();
  }
  

 function defend() {
 model[opponentNum].hp = 1;
 

show()
}

function heal() {
attackImpact = 3;
weaponHooman = "Heal";
if (model[0].hp > 0){
if (model[0].hp == 100){
  disableheal = "Disabled"
} else if(model[0].hp == 90) {
  disableheal = '';
  model[0].hp += 10;
  humanDamage = '10 healing'
  attackNPC()
} else {
  disableheal ='';
  model[0].hp += 20;
  humanDamage = '20 healing';
  attackNPC()
}
}
show();
} 

 function setVolume(){
var audio = document.getElementById("myaudio");
  audio.volume = 0.1;

  show()
}

window.onkeydown = function(event) {
  if (event.keyCode == 27 ) {
    model[opponentNum].hp = 1;
      show();
  }
};