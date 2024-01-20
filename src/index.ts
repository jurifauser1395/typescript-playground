// declare a type of type object
type Point = {
    x: number;
    y: number;
}

function coordinates(pt: Point) {
    console.log('x coordinates: ' + pt.x);
    console.log('y coordinates: ' + pt.y);
}

coordinates({x: 100, y: 40});
 
// declare a type of type union
type ID = string | number;

let userIdNumber = (idNumber: ID, idBit: string): string => idNumber + ' ' + idBit

let id01 = userIdNumber(23423, 'Donkey')

console.log(id01)