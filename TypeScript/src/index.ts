type heroi = {
    name: string;
    vulgo: string;
};

function printaObjetos(pessoa: heroi) {
    console.log(pessoa);
}

printaObjetos({
    name: "Rafael",
    vulgo: "Rafinha",
});
