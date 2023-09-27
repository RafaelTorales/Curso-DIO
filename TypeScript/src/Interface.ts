// Interfaces (type x interface)
type robot = {
    readonly id: number | string;
    name: string;
};

interface robot2 {
    readonly id: number | string;
    name: string;
    sayHello(): string;
}

const bot1: robot = {
    id: "1",
    name: "Robozão",
};

const bot2: robot2 = {
    id: "1",
    name: "Robozão",
    sayHello: function (): string {
        throw new Error("Function not implemented.");
    },
};

class Pessoa implements robot2 {
    id: string | number;
    name: string;

    constructor(id: string | number, name: string) {
        this.id = id;
        this.name = name;
    }
    sayHello(): string {
        return `Hello ${this.name}`;
    }
}

const p = new Pessoa(1, "Gustman");
console.log(p.sayHello());
