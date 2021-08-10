// Create a space battle game
// Each ship has a hull=HP, firepower=DPS, accuracy=random value between 0-1
// Alien ship properties(each key assigned a random value within its range):
//  - hull: 3-6
//  - firepower: 2-4
//  - accuracy: 0.6-0.8

// *make 6 alien ships*

// *your* ship aka the USS Schwarzenegger:
//  - hull: 20
//  - firepower: 5
//  - accuracy: 0.7

// Player has two commands: attack and retreat
// "retreat" ends game
// destroying a ship(0 HP) queues next ship
// Beat the boss and win

// "Start Menu/Game Prompts"

var pressStart = ()=>{

alert("WARNING! EARTH IS UNDER ATTACK!");
    
alert("THE USS SCWARZENEGGER IS OUR ONLY HOPE!");

alert("ATTACK EACH ENEMY SHIP BY CLICKING 'ATTACK!'");

alert("If things get too crazy, you can end the game by pressing 'RETREAT!'");

}

var retreat = ()=>{

    alert("The alien forces were too much for the Scrwarzenneger. Earth is lost. Game over.");


// *create a "ship" class

class ship{
    constructor(hp, dps, accuracy){
    this.hp=hp;
    this.dps=dps;
    this.accuracy=accuracy;
    }
}


var USS_Schwarzenegger = new ship(20, 5, 0.7)

// console.log(USS_Schwarzenegger)


// Create an alien array that can push a new ship with new(random) values for a loop.

var aliens = []

for(i = 1; i < 6; i++){
    let hp = Math.floor(Math.random() * 4) + 3;
    let dps = Math.floor(Math.random() * 3) + 2;
    let accuracy = (Math.floor(Math.random() * 3) + 6)/10

    alienShip = new ship(hp, dps, accuracy)

    aliens.push(alienShip)
}

// console.log(aliens[0].hp)


// Create "Attack" function for attack button

function Attack(){

if(Math.random() <= USS_Schwarzenegger.accuracy){
    aliens[0].hp -= USS_Schwarzenegger.dps
    // console.log(aliens[0].hp)
        alert("YOU GOT A HIT!")
    }

    if(aliens[0].hp > 0){
        alert("THE SHIP IS STILL HERE! BRACE YOURSELVES!")
        Attack(USS_Schwarzenegger)
        // console.log(aliens)
        }

if(Math.random() <= aliens[0].accuracy){
    USS_Schwarzenegger.hp -= aliens[0].dps
    // console.log(USS_Schwarzenegger.hp)
        alert("THE ALIENS RETURNED FIRE AND HIT THE HULL!")
    }
    
if(aliens[0].hp <= 0){
    alert("YOU GOT A HIT!")
    alert("YOU DESTROYED THE ALIEN SHIP!")
    alert("ANOTHER SHIP APPROACHES!")
    aliens.shift()
    // console.log(aliens)
    }

if(aliens.length == 0){
    alert("ALL THE ALIENS HAVE BEEN DESTROYED! YOU WIN!")
    alert("Play again?")
}

    if(USS_Schwarzenegger.hp == 0){
    alert("Your ship has been destroyed. Earth is lost. Game over.")
    alert("Play again?")
    }
}


// Create "attack" functions for user ship and alien ships
// Create "hit" and "miss" conditions(loop must check across each alien)





