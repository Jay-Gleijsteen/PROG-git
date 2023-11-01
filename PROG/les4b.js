var readlineSync = require("readline-sync")//import the library
//kies een random nummer tot 100
var randomNummer = (Math.ceil(Math.random() * 100))
//stelt de vraag kies nummer 1 tot 100
var Zeggen = "hi";
//readlineSync.question("Raad het nummer 1-100!")
//maakt een loop die om het nummer blijft vragen tot dat het correcte nummer geraden is
while (Zeggen != randomNummer)
{

 
  Zeggen = readlineSync.questionInt("Raad het nummer 1-100!")
  if (Zeggen === randomNummer)
   {
    console.log("Het is GOED!!!")
    break;
  }
  else
  {
    console.log("sorry het is FOUT")
  if(Zeggen > randomNummer)
  {
    console.log("lager"  )
  }
    else if(Zeggen < randomNummer)
    {
      console.log("hoger")
    }
  }
} 

  
      
   