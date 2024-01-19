"use strict";
// specify the return type 
function addTwo(num) {
    return num + 3;
}
// within parentheses type of the argument and after the second ":" return type
const getHello = (s) => {
    return ' ';
};
const heros = ['thor', 'spiderman', 'batman', 'ironman'];
// looping through the elements in the array: exchanging hero with the hero names
const heros01 = heros.map((hero) => {
    return `hero is ${hero}`;
});

console.log(heros01)


function handleError(errmsg) {
    throw new Error(errmsg);
}
//handleError('heeenlooo');
