interface User {
    name: string,
    email: string
}

interface Admin {
    name: string,
    email: string,
    isAdmin: boolean
}

// The "in" keyword, very important 
function isAdmin(account: User | Admin) {
    if ('isAdmin' in account) {
        return account.isAdmin
    }
}


// instanceof keyword 
function logValue(x: Date | string) {
    if (x instanceof Date) {
        console.log(x.toUTCString())
    } else {
        console.log(x.toUpperCase())
    }
}

type Fish = {swim: () => void}
type Bird = {fly: () => void}


// as keyword for typecasting 
function isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim !== undefined
}

function getFood(pet: Fish | Bird) {
    if (isFish(pet)) {
        pet.swim()
        return 'fish food'
    } else {
        pet.fly
        return 'bird food'
    }
}


interface Circle {
    kind: 'circle',
    radius: number

}

interface Square {
    kind: 'square'
    side: number
}

interface Rectangle {
    kind: 'rectangle',
    length: number, 
    width: number
}

type Shape = Circle | Square | Rectangle 

function getTrueShape(shape: Shape) {
    if (shape.kind === 'circle') {
        return Math.PI * shape.radius ** 2
    }
    // return shape.side * shape.side
}

function getArea(shape: Shape) {
    switch(shape.kind) {
        case 'circle': 
            return Math.PI * shape.radius ** 2
        
        case 'square': 
            return shape.side * shape.side
        
        case 'rectangle':
            return shape.width * shape.length
        
        default:
            const _defaultforshape: never = shape
            return _defaultforshape
    }
}

function loggedMethod(originalMethod: any, context: ClassMethodDecoratorContext) {
    const methodName = String(context.name);

    function replacementMethod(this: any, ...args: any[]) {
        console.log(`LOG: Entering method '${methodName}'.`)
        const result = originalMethod.call(this, ...args);
        console.log(`LOG: Exiting method '${methodName}'.`)
        return result;
    }

    return replacementMethod;
}

// Decorators

class Person {
    name: string;
    constructor(name: string) {
        this.name = name;
    }

    @loggedMethod
    greet() {        
        console.log(`Hello, my name is ${this.name}`);
    }
}

const p = new Person('Juri');
p.greet();

