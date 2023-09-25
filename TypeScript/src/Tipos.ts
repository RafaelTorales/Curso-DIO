// Variaveis

// PRIMITIVOS
// Boolean
let ligado: boolean = false;
// Number
let idade: number = 20;
let altura: number = 1.65;
// String
let nome: string = "Rafael";

// ESPECIAIS
// Null
let nulo: null = null;
// Undefined
let indefinido: undefined = undefined;

// ABRANGENTES
// Any
let retornoView: any = "Qualquer coisa";
// Void
let retorno: void;

// Objeto - sem previsibilidade
let produto: object = {
    name: "Rafael",
    idade: 20,
    altura: 1.65,
};

// Objeto tipado - com previsibilidade
type ProdutoLoja = {
    nome: string;
    preco: number;
    unidades: number;
};

let meuProduto: ProdutoLoja = {
    nome: "Tenis",
    preco: 300.99,
    unidades: 10,
};

// Arrays
let dados: string[] = ["Rafael", "Miria", "Jhonny"];
let dados2: Array<string> = ["Rafael", "Miria", "Jhonny"];

// Arrays multi types
let infos: (string | number)[] = ["Rafael", 20, "Miria", 19];

// Tuplas
let boleto: [string, number, number] = ["agua conta", 199.9, 234529873241];

// Datas
let aniversario: Date = new Date("2022-12-01 05:00");
