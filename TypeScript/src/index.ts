// Classes
class character {
    name?: string;
    stregth: number;
    skill: number;

    constructor(stregth: number, skill: number) {
        this.stregth = stregth;
        this.skill = skill;
    }

    attack(): void {
        console.log(`Attack with ${this.stregth} points`);
    }
}

const p1 = new character(10, 98);
p1.attack();
