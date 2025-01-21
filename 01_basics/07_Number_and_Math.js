const score = 100
const nextScore = new Number(400)
console.log(score);  //100
console.log(nextScore);  //[Number: 400]

console.log(nextScore.toLocaleString()) // gives 400 in string, so we can apply all the properties of string on that

console.log(nextScore.toFixed(2))  // gives 2 digits after decimal

const hundreds = 10000000
console.log(hundreds.toLocaleString('en-IN'))  // It seprates the value by comma's according to indian numbers
console.log(Math.min(10, 5, 7, 3))  // gives minimum value
console.log(Math.max(10, 5, 7, 3))  // gives maximum value
console.log(Math.random())  // gives random value between 0 to 1
console.log(Math.floor(Math.random() * 10) + 1) // gives random value between 1 to 10

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min); //gives value always between min and max
