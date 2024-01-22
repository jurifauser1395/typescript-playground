interface Bike {
    shape: string,
    color: string,
    price: number,
    weight: number
}

function newBike (bike: Bike) {
    console.log(' Checkout my new bike, it is ' + bike.color + ' and costs ' + bike.price + '$ and is ' + bike.shape + '!')
}

let myNewBike: Bike = {
    shape: 'nice',
    color: 'black',
    price: 453,
    weight: 34
}
newBike(myNewBike)
