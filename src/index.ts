let superHeros: string[][] = [
    ['1', '2', '3', '4', '5'],
    ['a', 'b', 'c', 'd', 'e'],
    ['!', '@', '#', '$', '%']
] 

let cycles = (superHeros.length - 1);

for(let i = 0; i <= cycles; i++) {
    console.log(superHeros[i])
}

console.log('\n')

for(let i = 0; i <= cycles; i++) {
    console.log(superHeros[i][1])
}

superHeros.push(['[','(', '{', '<', '"'])

let cycles01 = (superHeros.length - 1);

console.log('\n')

for(let i = 0; i <= cycles01; i++) {
    console.log(superHeros[i])
}

console.log('\n')

let stringArray = (element: Array<string>) => console.log(`This is my array: ${element}`)
 
superHeros.map(stringArray)

function getDbId(id: number | string) {
    if ( typeof id === 'string') {
        console.log(`Nice Id: ${id}` + id.toUpperCase())
    }
}

getDbId('his')

const data: (string | number)[] = [1, 2, 3, 4, 5, '1', '2', '3', '4', '5' ]
