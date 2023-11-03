const readline = require('readline');

const shoppingList = [];
//maak een shopping list die leeg is met haakjes waar de producten in komen

function displayShoppingList() {
  console.clear();
  //gebruik console.clear om de console leeg te maken na elke bewerking
  if (shoppingList.length === 0) {
    console.log('Jouw lijst is nog leeg!');
    //als je shopping list leeg is. vertelt de console dat
  } else {
    console.log('Jouw lijst bevat: ' + shoppingList.join(', '));
     //als er spullen in je shopping list zitten vetelt de console dat ook
  }
}

function addToShoppingList(item) {
  shoppingList.push(item);
  displayShoppingList();
   //maak een functie om producten toe te voegen aan je shopping list. gebruik push om producten op de lijst te zetten. display hierna de lijst om te laten zien wat er in de lijst zit
}

function removeFromShoppingList(item) {
  const index = shoppingList.indexOf(item);
  if (index !== -1) {
    shoppingList.splice(index, 1);
     //maak een functie om producten te verwijderen van je lijst. door splice te gebruiken verwijder je de producten van je lijst
  }
  displayShoppingList();
  // laat de lijst weer zien na het verwijderen van een product
}

const rl = readline.createInterface({
    //maak een interface om te kunnen communiceren met de console
  input: process.stdin,
  //zorgt ervoor dat de console input kan lezen
  output: process.stdout
  //zorgt ervoor dat de console output kan lezen
});

function main() {
  rl.question('Wat wil je doen? toevoegen (t) of verwijderen (v)? ', (action) => {
      // vraag de gebruiker of hij iets wil toevoegen of verwijderen
    if (action === 't') {
      rl.question('Wat wil je toevoegen? ', (item) => {
        addToShoppingList(item);
        //als gebruiker iets wil toevoegen aan de shopping list. vraag wat gebruiker wil toevoegen en voeg het toe aan de lijst door de functie addToShoppingList te runnen
        rl.close();
      });
    } else if (action === 'v') {
      rl.question('Wat wil je verwijderen? ', (item) => {
       //zelfde als bij toevoegen
        removeFromShoppingList(item);
        rl.close();
      });
    } else {
      console.log('Ongeldige keuze. Kies "t" om toe te voegen of "v" om te verwijderen.');
            //als de gebruiker iets ander invoert dan de twee opties stelt het de vraag opnieuw
      rl.close();
    }
  });
}

main();

