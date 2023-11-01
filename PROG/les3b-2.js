function cillinderInhoud( radius2, hoogte ){
    let cillinderInhoud = (radius2 * Math.PI * hoogte)
    return cillinderInhoud;
}

let cillinderbereken = cillinderInhoud(2.5, 3.4, 5);
console.log(cillinderbereken)