var fiorinum = [];
var bombenum = [];
var campo = []

// var usernum = prompt('Inserisci un numero da 1 a 100')
function bomba() {
    var numeribomba = Math.floor(Math.random() * 100) + 1;
    return numeribomba;
}

while (campo.length < 100) {
    while (bombenum.length < 16) {
        var continuo = bomba()
        if(!bombenum.includes(continuo)) {
            bombenum.push(continuo);
        }
    }

    while (fiorinum.length < 84) {
        var fiori = bomba()
        if (!fiorinum.includes(fiori)) {
            fiorinum.push(fiori);
        }
    }
    if (!bombenum.includes(fiorinum)) {
        var campo = fiorinum.concat(bombenum);
    }
}



console.log(campo);
