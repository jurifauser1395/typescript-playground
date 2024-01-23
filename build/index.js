"use strict";
class Bird {
    constructor(color, canFly) {
        this.canSwim = 'yes';
        this.color = color;
        this.canFly = canFly;
    }
}
let duck = new Bird('brown', true);
let swimDuck = duck.canSwim = ' ';
