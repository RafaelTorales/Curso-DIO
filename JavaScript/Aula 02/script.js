// Tipos Primitivos

// Boolean
let falso = false;
console.log(typeof falso);

// Number
let numero = 1;
console.log(typeof numero);

// String
let nome = "Rafael";
console.log(typeof nome);

// Diferença var e let, escopo global do var e escopo local do let

var escopoGlobal = "global";
console.log(escopoGlobal);

function escopoLocal() {
    let escopoLocalInterno = "local";
    console.log(escopoLocalInterno);
}

escopoLocal();
