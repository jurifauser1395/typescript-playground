"use strict";
let superHeros = [
    ['1', '2', '3', '4', '5'],
    ['a', 'b', 'c', 'd', 'e'],
    ['!', '@', '#', '$', '%']
];
let cycles = (superHeros.length - 1);
for (let i = 0; i <= cycles; i++) {
    console.log(superHeros[i]);
}
console.log('\n');
for (let i = 0; i <= cycles; i++) {
    console.log(superHeros[i][1]);
}
superHeros.push(['[', '(', '{', '<', '"']);
let cycles01 = (superHeros.length - 1);
console.log('\n');
for (let i = 0; i <= cycles01; i++) {
    console.log(superHeros[i]);
}
console.log('\n');
let stringArray = (element) => console.log(element);
superHeros.map(stringArray);
