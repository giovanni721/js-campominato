var campo = [];
var usernum = prompt('Inserisci un numero da 1 a 100')
function bomba() {
    var numeribomba = Math.floor(Math.random() * 100) + 1;
    return numeribomba;
}


function mine() {
    while (campo.length < 16) {
        var continuo = bomba()
        if(!campo.includes(continuo)) {
            campo.push(continuo);
        }
    }
}
function fiori() {
    while (campo.length < 84) {
        var fiori = bomba()
        if (!campo.includes(fiori)) {
            campo.push(fiori);
        }
    }
}
