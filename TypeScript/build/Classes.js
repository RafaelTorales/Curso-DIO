"use strict";
// Classes
// Data modifiers
// Public
// Private
// Protected
class character {
    constructor(name, stregth, skill) {
        this.name = name;
        this.stregth = stregth;
        this.skill = skill;
    }
    attack() {
        console.log(`Attack with ${this.stregth} points`);
    }
}
// character = superclass
// magician = subclass
class magician extends character {
    constructor(name, stregth, skill, magicPoints) {
        super(name, stregth, skill);
        this.magicPoints = magicPoints;
    }
}
const p1 = new character("Rafael", 10, 98);
const p2 = new magician("Mago", 19, 30, 100);
