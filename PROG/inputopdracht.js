let rl = require("readline-sync");

console.log("choose a path");

console.log("N (north)");
console.log("S (south)");
console.log("E (east)");
console.log("W (West)");
const anwser = rl.question("please input letter of youre choice");

if (anwser == "n"){
    console.log("you encounter obama")
}

if (anwser == "s"){
    console.log("you meet Irshaul")
}

if (anwser == "e"){
    console.log("you fall in a hole with a bouncy floor")
}

if (anwser == "w"){
    console.log("you find poop")
}