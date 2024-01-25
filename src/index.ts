// generics in typescript

const score: Array<number> = []

const names: Array<string> = []

function identityOne(val: boolean | number): boolean | number{
    return val
}

function identityTow(val: any): any{
    return val
}

function identityThree<Type>(val: Type): Type{
    return val
}

// identityThree('3')

function identityFour<T>(val: T): T {
    return val
}

interface Bootle{
    brand: string,
    type: number
}

identityFour<Bootle>({brand: 'sr', type: 4})

function getSearchProducts<T,>(productId: T[]): T{
    return productId[3]
}


const getMoreSearchProducts = <T,>(productsID: T[]): T => {
    // do some database operations 
    const myIndex = 4
    return productsID [myIndex]
}


interface Database {
    connection: string,
    username: string,
    password: string
}

function anotherFunction<T, U extends Database>(valOne: T, valTwo: U): object {
    return{
        valOne,
        valTwo
    }
}

anotherFunction(4, {connection: 'fv', username: 'v', password: 'vre'})


interface Quiz{
    name: string,
    type: string
}

interface Course {
    name: string,
    author: string,
    subject: string
}


class Sellable <T> {
    public card: T[] = []

    addToCard(product: T) {
        this.card.push(product)
    }
}

function detectType(val: number | string): number | string {
    if(typeof val === 'string') {
      return val.toLowerCase()
    }

    return val + 43
}

// null is a datatype! be careful!
function provideID(id: string | null) {
    if(!id) {
        console.log('Please provide id!')
        return
    }
    id.toLowerCase()
}