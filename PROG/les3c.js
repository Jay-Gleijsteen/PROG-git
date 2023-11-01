let rl = require('readline-sync');
var jaar = rl.question('In welk jaar ben je geboren? ');
var maand = rl.question('In welke maand ben je geboren? ');
var dag =  rl.question('op welke dag ben je geboren? ');

function getNowDate(jaar, maand, dag) {

    let now = new Date();
    let geboorte = new Date(jaar, maand, dag);
    let mili = now-geboorte;
    var veschilJaar = mili / (1000 * 3600 * 24) / 365;
    return Math.round(veschilJaar);
}

let veschilJaar = getNowDate(jaar, maand, dag)
console.log(veschilJaar)