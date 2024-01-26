"use strict";
// The "in" keyword, very important 
function isAdmin(account) {
    if ('isAdmin' in account) {
        return account.isAdmin;
    }
}
// instanceof keyword 
function logValue(x) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
    }
    else {
        console.log(x.toUpperCase());
    }
}
// as keyword for typecasting 
function isFish(pet) {
    return pet.swim !== undefined;
}
function getFood(pet) {
    if (isFish(pet)) {
        pet.swim();
        return 'fish food';
    }
    else {
        pet.fly();
        return 'bird food';
    }
}
