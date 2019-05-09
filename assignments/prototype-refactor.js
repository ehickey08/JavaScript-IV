/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/  

class GameObject {
    constructor (charAttributes) {
        this.createdAt = charAttributes.createdAt;
        this.name = charAttributes.name;
        this.dimensions = charAttributes.dimensions;
    }

    destroy () {
        return `${this.name} was removed from the game.`
    }
}


class CharacterStats extends GameObject{
    constructor (statAttributes) {
        super(statAttributes);
        this.healthPoints = statAttributes.healthPoints;
    }

    takeDamage () {
        return `${this.name} took damage.`
    }
}


class Humanoid  extends CharacterStats{
    constructor(humanAttributes) {
        super(humanAttributes);
        this.team = humanAttributes.team;
        this.weapons = humanAttributes.weapons;
        this.language = humanAttributes.language;
    }

    greet() {
        return `${this.name} offers a greeting in ${this.language}`
    }
}
/*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/

// Test you work by un-commenting these 3 objects and the list of console logs below:


  const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Tongue',
  });

  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Tongue',
  });

  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });


  console.log(mage.createdAt); // Today's date
  console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  console.log(swordsman.healthPoints); // 15
  console.log(mage.name); // Bruce
  console.log(swordsman.team); // The Round Table
  console.log(mage.weapons); // Staff of Shamalama
  console.log(archer.language); // Elvish
  console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  console.log(mage.takeDamage()); // Bruce took damage.
  console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.


  // Stretch task: 
  // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
  // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  // * Create two new objects, one a villain and one a hero and fight it out with methods!


  Humanoid.prototype.setHealth = function (newHealthPoints) {
      this.healthPoints -= newHealthPoints;
      
      if(this.healthPoints>0) {
            console.log(`${this.name} is still in the fight with ${this.healthPoints} hP.\n\n`)
      } else{
            console.log(`\n\n **OH WOW! What an attack! ${this.name} has died.** \n\n`);
      }
  }

  Humanoid.prototype.attack = function(){
      const damage = Math.ceil(Math.random()*this.maxDamage); //determines damage of attack
      const hit = Math.random(); //determines if attack hits
      const temp = Math.random(); //will be used to determine which weapon is used, see if loop below to choose between weapon options
      let attackChoice = '';
      if(temp<0.33){
          attackChoice = this.weapons[0];
      } else if (temp>=0.33 && temp <0.67){
          attackChoice = this.weapons[1];
      } else {
          attackChoice=this.weapons[2]
      }

      console.log(`${this.name} attacks with ${attackChoice}!`);

      if(hit<this.hitChance){ //probability of villian hitting is lower than hero
          console.log((`${attackChoice} hit! It did ${damage} damage points to ${this.opponent}.`));
          return damage;
      } else {
          console.log(`${this.opponent} was too fast! ${attackChoice} missed!`);
          return 0;
      }
  }

    class Villian extends Humanoid{
        constructor(villianAttributes){
            super(villianAttributes);
            this.teammate = villianAttributes.teammate;
            this.opponent = villianAttributes.opponent;
            this.maxDamage = villianAttributes.maxDamage;
            this.hitChance = villianAttributes.hitChance;
        }

        battle (opponent) {
            this.opponent = opponent.name;
            return `${this.name} is going to try to kill ${opponent.name}.`;
        }
    }

    class Hero extends Villian {
        constructor (heroAttributes){
            super(heroAttributes);
            this.winningCheer = heroAttributes.winningCheer;      
        }

        battle (opponent) {
            this.opponent = opponent.name;
            return `${this.name} is going to try to put an end to the evil ${opponent.name}.`;
        }
    }

    //create our Villian, called boss
    const boss = new Villian ({
        createdAt: new Date(),
        dimensions: {
            length: 6,
            width: 10, //yes, he is fat
            height: 6,
        },
        healthPoints: 65,
        name: 'Bowser',
        team: 'Team Evil',
        weapons: [
        'Fire Breath',
        'Spinning Shell',
        'Roar',
        ],
        language: 'Turtle',
        teammate: [
            'Baby Bowser',
            'Wario'
        ],
        maxDamage: 10,
        hitChance: 0.7
    });

    //create our Hero, called goodGuy
    const goodGuy = new Hero ({
        createdAt: new Date(),
        dimensions: {
            length: 2,
            width: 3, 
            height: 4,
        },
        healthPoints: 55, //less health than villian
        name: 'Mario',
        team: 'Team Good',
        weapons: [
        'Fire Ball',
        'Coin Jump',
        'Magic Carpet',
        ],
        language: 'Italian',
        teammate: [
            'Luigi',
            'Toad'
        ],
        winningCheer: 'Yippee',
        maxDamage: 15,
        hitChance: 0.85,
    });

    //The nuisances of the battle
    console.log(`\n\n*******ENEMIES MEET*******`);
    console.log(goodGuy.battle(boss));
    console.log(boss.battle(goodGuy));
    console.log(goodGuy.greet());
    console.log(boss.greet());
    console.log(`\n\n*******BATTLE BEGINS*******`);
    
    //The battle. It will go back and forth until someone dies. 
    do{
        goodGuy.setHealth(boss.attack());
        boss.setHealth(goodGuy.attack());
    }while((goodGuy.healthPoints>0 && boss.healthPoints>0));

    console.log(`${goodGuy.name} celebrates with a ${goodGuy.winningCheer}!!!!`); //This will be awkward if Mario dies.