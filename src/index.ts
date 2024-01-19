// specify the return type 

function addTwo(num: number): number {
    return num + 3
}


// within parentheses type of the argument and after the second ":" return type
const getHello = (s: string): string => {
    return ' '
}

const heros = ['thor', 'spiderman', 'batman', 'ironman']

// looping through the elements in the array: exchanging hero with the hero names
heros.map(hero => {
    return `hero is ${hero}`
})