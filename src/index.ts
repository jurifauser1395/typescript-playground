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

// Decorators

 @log
function getAge(): string  {
    return 'hi'
}


