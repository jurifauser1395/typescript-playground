"use strict";
function newBike(bike) {
    console.log(' Checkout my new bike, it is ' + bike.color + ' and costs ' + bike.price + '$ and is ' + bike.shape + '!');
}
let myNewBike = {
    shape: 'nice',
    color: 'black',
    price: 453,
    weight: 34
};
newBike(myNewBike);
