class Bird {

    private weight = 1

    // professional why of declaring a constructor in typescript
    constructor(
        public color: string,
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


let duck = new Bird('brown', true)

