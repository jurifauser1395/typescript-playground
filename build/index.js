"use strict";
// Enums 
var SeatChoice;
(function (SeatChoice) {
    SeatChoice["AISLE"] = "v";
    SeatChoice[SeatChoice["MIDDLE"] = 3] = "MIDDLE";
    SeatChoice[SeatChoice["WINDOW"] = 4] = "WINDOW";
    SeatChoice[SeatChoice["FOURTH"] = 5] = "FOURTH";
})(SeatChoice || (SeatChoice = {}));
const hcSeat = SeatChoice.AISLE;
console.log(hcSeat);
