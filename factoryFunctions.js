'use strict'; 
function createCharacter(name, nickname, race, origin, attack, defense, weapon){
  return {
    name,   
    nickname,
    race,
    origin,
    attack, 
    defense, 
    weapon,
    describe: function(){
      console.log(`${this.name} is a ${this.race} from ${this.origin} and has a ${weapon}`);
    },
    evaluateFight: function(opponent){ 
      const x = (opponent.defense > this.attack) ? 0 : this.attack - opponent.defense;
      const y = (this.defense > opponent.attack) ? 0 : opponent.attack - this.defense; 
      return `Your opponent takes ${x} damage and you receive ${y} damage`;
    }
  }; 
} 
const Gandalf = createCharacter('Gandalf the White', 'Gandalf', 'wizard', 'Middle Earth', 10, 6, 'wizard staff');
const Bilbo = createCharacter('Bilbon Baggins', 'Bilbo', 'hobbit', 'The Shire', 2, 1, 'the Ring');
const Frodo = createCharacter('Frodo Baggins', 'Frodo', 'hobbit', 'The Shire', 3, 2, 'blade');
const Aragorn = createCharacter('Aragorn son of Arathorn', 'Aragorn', 'Man', 'Dunnedain', 6, 8, 'anduril');
const Legolas = createCharacter('Legolas', 'Legolas', 'Elf', 'Woodland Realm', 8, 5, 'bow and arrow');
const Arwen = createCharacter('Arwen Undomiel', 'Ar', 'Half-Elf', 'Rivendell', 5, 5, 'hadhafang');

let characters = [Gandalf, Bilbo, Frodo, Aragorn, Legolas]; 

const foundCharacter = characters.find(function(character){ 
  return character.nickname === 'Aragorn'; 
});
console.log(foundCharacter);
foundCharacter.describe();

characters.forEach(function(character){
  character.describe(); 
});

const hobbits = characters.filter(function(character){
  return character.race.toLowerCase() === 'hobbit';
});
console.log('hobbits', hobbits);

const weakChars = characters.filter(function(character){
  return character.attack <= 5;
});
console.log('weakChars', weakChars);

/*
console.log('Bilbo vs Gandalf: ' + Bilbo.evaluateFight(Gandalf)); 
console.log('Gandalf vs Bilbo: ' + Gandalf.evaluateFight(Bilbo));
*/ 