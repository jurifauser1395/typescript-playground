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
