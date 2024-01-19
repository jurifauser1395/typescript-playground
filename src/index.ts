const User = {
    name: 'Hans',
    email: 'hans@hans.com',
    isActive: true
}

function createUser({name: string, isPaid: boolean}) {}

createUser({name: 'Hans', isPaid: false})

// same as usual, return type after the parentheses even if it is an object
function createCourse():{name:string, price: number}{
    return {name: 'hans', price: 4}
}

type User = {
    name: string;
    email: string;
    isActive: boolean
}

function createUser01(user: User):User {
    return User 
}