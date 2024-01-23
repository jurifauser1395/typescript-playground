"use strict";
class Bird {
    // professional why of declaring a constructor in typescript
    constructor(color, canFly) {
        this.color = color;
        this.canFly = canFly;
    }
}
let duck = new Bird('brown', true);
