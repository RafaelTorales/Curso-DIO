// Interfaces (type x interface)
type robot = {
    readonly id: number | string;
    name: string;
};

interface robot2 {
    readonly id: number | string;
    name: string;
}

const bot1: robot = {
    id: "1",
    name: "Robozão",
};

const bot2: robot2 = {
    id: "1",
    name: "Robozão",
};

console.log((bot1.name = "Rafa"));
console.log(bot2);
