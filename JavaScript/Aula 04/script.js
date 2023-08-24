var j1 = 1;
var j2 = 1;
var placar;

j1 != -1 && j2 != -1
    ? console.log("Jogadores válidos")
    : console.log("Jogadores inválidos");
if (j1 > 0 && j2 === 0) {
    console.log("Jogador 1 marcou um ponto");
    placar = j1 > j2;
} else if (j2 > 0 && j1 === 0) {
    console.log("Jogador 2 marcou um ponto");
    placar = j2 > j1;
} else {
    console.log("Ninguém marcou ponto");
}

switch (placar) {
    case (placar = j1 > j2):
        console.log("Jogador 1 ganhou");
        break;
    case (placar = j2 > j1):
        console.log("Jogador 2 ganhou");
        break;
    default:
        console.log("Ninguem ganhou");
}

let array = ["v1", "v2", "v3", "v4", "v5"];
let objeto = { p1: "v1", p2: "v2", p3: "v3" };

// for - executa uma instrução até que ela seja falsa
for (let i = 0; i < array.length; i++) {
    console.log(i);
}

// for/in - executa repetição a partir de uma propriedade
for (let i in array) {
    console.log(i);
}

// com object
for (i in objeto) {
    console.log(i);
}

// for/of - executa repetição a partir de um valor
for (i of array) {
    console.log(i);
}

// com object
for (i of objeto.p1) {
    console.log(i);
}

var a = 0;

while (a < 10) {
    a++;
    console.log(a);
}

do {
    a++;
    console.log(a);
} while (a < 10);
