class Bird {
    // professional why of declaring a constructor in typescript
    constructor(
        public color: string,
        public canFly: boolean
        ){ 
    }
}

let duck = new Bird('brown', true)

