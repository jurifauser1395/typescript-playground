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