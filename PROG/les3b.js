function kubusInhoud(kubushoogte, kubusbreedte, kubuslenghte){
    let kubusInhoud = (kubushoogte * kubusbreedte * kubuslenghte)
    return kubusInhoud;
}

let kubusbereken = kubusInhoud(3, 5, 6);
console.log(kubusbereken)