"use strict";
// generics in typescript
const score = [];
const names = [];
function identityOne(val) {
    return val;
}
function identityTow(val) {
    return val;
}
function identityThree(val) {
    return val;
}
// identityThree('3')
function identityFour(val) {
    return val;
}
identityFour({ brand: 'sr', type: 4 });
function getSearchProducts(productId) {
    return productId[3];
}
const getMoreSearchProducts = (productsID) => {
    // do some database operations 
    const myIndex = 4;
    return productsID[myIndex];
};
function anotherFunction(valOne, valTwo) {
    return {
        valOne,
        valTwo
    };
}
anotherFunction(4, { connection: 'fv', username: 'v', password: 'vre' });
class Sellable {
    constructor() {
        this.card = [];
    }
    addToCard(product) {
        this.card.push(product);
    }
}
function detectType(val) {
    if (typeof val === 'string') {
        return val.toLowerCase();
    }
    return val + 43;
}
// null is a datatype! be careful!
function provideID(id) {
    if (!id) {
        console.log('Please provide id!');
        return;
    }
    id.toLowerCase();
}
let numbers = [3, 43, 34, 435, 43, 1];
function loopTrough(n) {
    let l = (n.length - 1);
    if (Array.isArray(n)) {
        for (let index of n) {
            console.log('This is my number ' + index);
        }
    }
}
loopTrough(numbers);
