"use strict";
// Classes
class character {
    constructor(stregth, skill) {
        this.stregth = stregth;
        this.skill = skill;
    }
    attack() {
        console.log(`Attack with ${this.stregth} points`);
    }
}
const p1 = new character(10, 98);
p1.attack();
