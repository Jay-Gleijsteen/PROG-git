let huidigeTijd = new Date();
console.log(huidigeTijd.getHours());
if(huidigeTijd.getHours() > 6 && huidigeTijd.getHours() < 15){
    console.log("ga naar school")
}
else
{
    console.log("je hoeft niet naar school")
}
