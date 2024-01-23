class Bird {
    color: string;
    canFly: boolean;
    canSwim: string = 'yes'

    constructor(color: string, canFly: boolean) {
        this.color = color;
        this.canFly = canFly;
    }
}

let duck = new Bird('brown', true)

let swimDuck = duck.canSwim = ' '
