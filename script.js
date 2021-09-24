var contentDiv = document.getElementById('app');
//model

const model = [
{
  player: 'Deg',
  picture: '<img src="player.jpg">',
  hp: 100,
  attacks: {
      name: ['Sword', 'Hammer', 'Fire', 'Lightning'],
      power: [10, 20, 20, 10],
  }
},

{
  player: 'Linn',
  hp: 150,
  attacks: {
    name: ['Sword', 'Hammer', 'Fire', 'Lightning'],
    power: [10, 20, 20, 10],
  }

},
{
    player: 'Bjørnar',
    hp: 100,
    attacks: {
      name: ['Sword', 'Hammer', 'Fire', 'Lightning'],
      power: [10, 20, 20, 10],
    }
  
  },
{
    player: 'Geir',
    hp: 125,
    attacks: {
      name: ['Sword', 'Hammer', 'Fire', 'Lightning'],
      power: [10, 20, 20, 10],
    }
  },
  {
    player: 'Eskil',
    hp: 150,
    attacks: {
      name: ['Sword', 'Hammer', 'Fire', 'Lightning'],
      power: [10, 20, 20, 10],
    }
  },
{
    player: 'Terje',
    hp: 200,
    attacks: {
      name: ['MVC', 'Feather', 'ErrorCodes', 'Acrobatics'],
      power: [10, 5, 30, 10],
    }
  },
{ 
player: 'Siste boss',
// picture: 'sisteBoss.PNG'
 hp: 500,
 attacks: {
  name: ['Undefined', 'ERROR', 'UNEXPECTED TOKEN', 'EMPTYCONSOLE'],
  power: [10, 20, 60, 65],
 }

}, 


];

// let ;
let opponentNum = 1;
let Hit = 1;
let crit = 2; 
let weaponHooman;
let weaponNPC;
// model.opponent.player.name.length);




//view
show();
function show(){
    contentDiv.innerHTML = `
    <h1>FIGHT!</h1>
<div class="wrapper">
    <div id="deg">
    <div>${model[0].player}</div>
    <div>${model[0].picture}</div>
    <br>HP: ${model[0].hp}
    <br><button id="sword">Sword</button>
    <br>You used ${weaponHooman} to land a .. blow to your opponent!
    </div>
    Click the enemy to attack!
    <div id="opponent" onclick="attack()">
    <div>${model[1].player}</div>
    <div>${model[1].picture}</div>
    <br>HP: ${model[1].hp}
    <br>${model[opponentNum].player} attacked you with *weaponhooman* for *damage*!
    </div>
</div>
    
    `
}


//controller
function attack() {
  let rdmAttkNameNum = Math.floor(Math.random() * 3);
  let playerAttackNR = Math.floor(Math.random() * 11);
  let attackImpact = '';
  if (model[0].hp > 0) {
    if (playerAttackNR > 4 ){
      attackImpact = Hit;
    } else if (playerAttackNR == 4 || playerAttackNR == 3 || playerAttackNR == 2 ) {
      attackImpact = 0;
    } else {
      attackImpact = crit;
    }
    weaponHooman = model[0].attacks.name[rdmAttkNameNum];
    
  
    model[opponentNum].hp -= (model[0].attacks.power[rdmAttkNameNum] * attackImpact);
    if (model[opponentNum].hp <= 0) model[opponentNum].hp = 0;
    

    attackNPC();
  };
    show();
}

function attackNPC() {
  let rdmAttkNameNum = Math.floor(Math.random() * 3);
  let attackImpact = '';
  let npcAttackNR = Math.floor(Math.random() * 11);
  if (model[opponentNum].hp > 0){
    if (npcAttackNR > 6 ){
      attackImpact = Hit;
    } else if (npcAttackNR == 4 || npcAttackNR == 3 || npcAttackNR == 2 || npcAttackNR == 5 || npcAttackNR == 6|| npcAttackNR == 1 ) {
      attackImpact = 0;
    } else {
      attackImpact = crit;
    }

    weaponNPC = model[opponentNum].attacks.name[rdmAttkNameNum];

    model[0].hp -= (model[opponentNum].attacks.power[rdmAttkNameNum] * attackImpact);

    if (model[0].hp <= 0) model[0].hp = 0;
  

  }
  show();
}
