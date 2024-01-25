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
