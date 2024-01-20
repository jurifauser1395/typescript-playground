"use strict";
function coordinates(pt) {
    console.log('x coordinates: ' + pt.x);
    console.log('y coordinates: ' + pt.y);
}
coordinates({ x: 100, y: 40 });
let userIdNumber = (idNumber, idBit) => idNumber + ' ' + idBit;
let id01 = userIdNumber(23423, 'Donkey');
console.log(id01);
