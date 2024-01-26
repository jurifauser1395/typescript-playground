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
        pet.fly()
        return 'bird food'
    }
}