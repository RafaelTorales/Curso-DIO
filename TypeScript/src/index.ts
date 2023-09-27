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

const p1 = new character("Rafael", 10, 98);
p1.
