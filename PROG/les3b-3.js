function langezeideInhoud(overstaand , aanliggend  ){
    let overstaandKwadraat = overstaand * overstaand;
    let aanliggendKwadraat = aanliggend * aanliggend;
    let wortel = Math.sqrt(overstaandKwadraat + aanliggendKwadraat);
    return wortel;
}

let langezeidebereken = langezeideInhoud(21, 6);
console.log(langezeidebereken)