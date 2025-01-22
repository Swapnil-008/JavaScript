// Array 02

const marvelHeroes = ["Ironman", "Thor", "Spiderman"]
const dcHeroes = ["Shaktiman", "Flash", "Batman"]

// marvelHeroes.push(dcHeroes);
// console.log(marvelHeroes); // [ 'Ironman', 'Thor', 'Spiderman', [ 'Shaktiman', 'Flash', 'Batman' ] ]

const allHeroes = marvelHeroes.concat(dcHeroes) // returns a new array and no changes are in marvelHeroes array
// console.log(allHeroes)  // [ 'Ironman', 'Thor', 'Spiderman', 'Shaktiman', 'Flash', 'Batman' ]

//but using concat function you can concate only two arrays so we use spread operater, using spread operater you can concat more than one array

const newArray = [...marvelHeroes, ...dcHeroes, allHeroes] // [ 'Ironman', 'Thor', 'Spiderman', 'Shaktiman', 'Flash', 'Batman', 'Ironman', 'Thor', 'Spiderman', 'Shaktiman', 'Flash', 'Batman' ]
// console.log(newArray)

const name = "Swapnil"
const nameArr = Array.from(name)   // Converts a string into array
// console.log(nameArr)  
// [
//     'S', 'w', 'a',
//     'p', 'n', 'i',
//     'l'
// ]

// console.log(Array.from({college: "PICT"}))  // []