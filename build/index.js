"use strict";
class Bird {
    // professional why of declaring a constructor in typescript
    constructor(color, canFly) {
        this.color = color;
        this.canFly = canFly;
        this.weight = 1;
    }
    get getWeight() {
        return this.weight;
    }
    set setWeight(birdWeight) {
        this.weight = birdWeight;
    }
}
let duck = new Bird('brown', true);
