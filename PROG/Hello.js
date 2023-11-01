
console.log("hier een quiz over jay");
var readlineSync = require('readline-sync');
var userName = readlineSync.question('klaar voor de quiz?--');
console.log("oke cool");
var vraag1 = readlineSync.question("wat is mijn leeftijd? A 16 B 15 C 17 ");
console.log("jij had " + vraag1 +" het goede antwoord was A. 16");
var voorvraag2 = readlineSync.question("klaar voor vraag 2?");
var vraag2 = readlineSync.question("hoeveel katten heb ik? A 0 B 2 C 4 ");
console.log("jij heb " + vraag2 + " het antwoord goede was C. 4");
var voorvraag3 = readlineSync.question("klaar voor vraag 3?");
var vraag3 = readlineSync.question("hoeveel zussen heb ik(stieffamilie uitgezonderd)? A 0 B 2 C 3 ");
console.log("jij heb " + vraag3 + " het antwoord goede was B. 2");
var voorvraag4 = readlineSync.question("klaar voor vraag 4?");
var vraag4 = readlineSync.question("wat is mijn favo spel? A terraria B fortnite C Lol ");
console.log("jij heb " + vraag4 + " het antwoord was A. terraria");
var voorvraag5 = readlineSync.question("klaar voor de laatste vraag?");
var vraag5 = readlineSync.question("wat zijn mijn hobbies? A gamen,drummen B gamen,muziek maken C gamen,programmeren ");
console.log("jij heb " + vraag5 + " het antwoord was B. gamen,muziek maken");
console.log("einde quiz");

    
