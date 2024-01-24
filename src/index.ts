class Animal {

    private weight = 1

    // professional why of declaring a constructor in typescript
    constructor(
        protected color: string,
        public canFly: boolean
        ){ 
    }
    
    get getWeight(): number {
        return this.weight
    }

    set setWeight(birdWeight: number) {
        this.weight = birdWeight;
    }
}
 
let duck = new Animal('brown', true)

class Bird extends Animal {
    isMammal: boolean = false;

    changeColor() {
        this.color = 'blue';
    }
}