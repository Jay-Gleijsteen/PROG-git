function Rolldice(){
let getal = Math.ceil(Math.random() * 6);
return getal
}
function dice(){
    let d1 = Rolldice();
    let d2 = Rolldice();
    let d3 = Rolldice();
    let d4 = Rolldice();

    let array = [d1 ,d2 ,d3 ,d4]
    array.sort()
    return array[1] + array[2] + array[3]
}
console.log("STR", dice())
console.log("DEX", dice())
console.log("CON", dice())
console.log("INT", dice())
console.log("WIS", dice())
console.log("CHA", dice())