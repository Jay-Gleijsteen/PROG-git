const readline = require('readline-sync');
//readlinesync voor de vragen
function getRandomDamage(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
  //functie maken om random damage te krijgen als de speler of de monster aanvalt. doe er een math ceil bij zodat de speler en de monster niet oneindig damage doen en het gevecht in een keer eindigen
}

function battle(playerName, playerHealth) {
    //functie maken voor de speler zijn naam en gezondheid. en voor de monsters gezondheid. ook om het spel te starten 
  let monsterHealth = 10; // Willekeurige monstergezondheid, je kunt dit aanpassen

  console.log(`Je komt een Goomba tegen`);
  console.log(`Je hebt ${playerHealth} HP.`);
//vertel speler zijn health
  while (playerHealth > 0 && monsterHealth > 0) {
    const action = readline.question('Wat ga je doen? (Vechten of vluchten?) ').toLowerCase();
// geef speler de optie om te vechten of te vluchten
    if (action === 'vechten') {
      const playerDamage = getRandomDamage(3, 7);
      const monsterDamage = getRandomDamage(1, 4);
// als speler vecht. run de functie getRandomDamage om te bepalen hoeveel schade de player doet. hetzelfde geld voor het monster
      console.log(`${playerName} springt op de Goomba en doet ${playerDamage} schade.`);
      monsterHealth -= playerDamage;
      console.log("Goomba heeft =" ,monsterHealth ,"hp")
// na het aanvallen gaat de playerdamage van monsters health af en laat het de monsters health zien
      if (monsterHealth <= 0) {
        console.log(`Goomba is verslagen! Je hebt gewonnen.`);
        break;
        //als het monsters hp 0 raakt komt er text dat je vertelt dat je gewonnen hebt. en eindigt het gevecht
      }

      console.log(`Goomba valt aan en doet ${monsterDamage} schade.`);
      playerHealth -= monsterDamage;
// de Goomba doet random damage aan de speler nadat de speler heb aangevallen
      console.log(`Je hebt ${playerHealth} HP.`);
    } else if (action === 'vluchten') {
      console.log(`${playerName} rent weg van de Goomba.`);
      break;
      //als speler vluchten kiest rent de speler weg van het gevecht en eindigt de code
    } else {
      console.log('Ongeldige keuze. Kies "vechten" of "vluchten".');
    }
  }

  if (playerHealth <= 0) {
    console.log(`${playerName} is verslagen. Het spel is voorbij.`);
    //als speler health 0 raakt eindigt het gevecht en wint de Goomba
  }
}

const playerName = readline.question('Enter name:');
// naam toevoegen voor de speler aan het begin van de code
let playerHealth = 15; // Begin gezondheid, je kunt dit aanpassen

battle(playerName, playerHealth);
//run de code 
