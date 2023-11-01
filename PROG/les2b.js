var readlineSync = require("readline-sync");
var anwser = readlineSync.question("goedenavond. hoe oud bent u?");
if(anwser <= 17 )
{
    console.log("u mag niet naar binnen")
}
 else{
    anwser = (readlineSync.question("mag ik uw id zien?"))
        if (anwser == "ja"){
        console.log("kom binnen")
    }
    else {
        console.log("u mag niet naar binnen")
    }
 }