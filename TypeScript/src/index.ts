// Classes

// Data modifiers
// Public
// Private
// Protected

class character {
    protected name?: string;
    stregth: number;
    skill: number;

    constructor(name: string, stregth: number, skill: number) {
        this.name = name;
        this.stregth = stregth;
        this.skill = skill;
    }

    attack(): void {
        console.log(`Attack with ${this.stregth} points`);
    }
}

// character = superclass
// magician = subclass
class magician extends character {
    magicPoints: number;
    constructor(
        name: string,
        stregth: number,
        skill: number,
        magicPoints: number
    ) {
        super(name, stregth, skill);
        this.magicPoints = magicPoints;
    }
}

const p1 = new character("Rafael", 10, 98);
const p2 = new magician("Mago", 09, 30, 100);
