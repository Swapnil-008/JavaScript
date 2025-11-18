// Strings

let name = "Swapnil"
let rollNo = 33176
// console.log(name + " : " + rollNo )  // Outdated 

// Instead of this above syntax, we should prefer `` (that's call backticks)

console.log(`My name is ${name} and my Roll No. is ${rollNo}`)

// Methods or functions of string
// These all methods do not make changes in original string, because string is an primitive datatype
const myStr = new String("Desperate")
// console.log(name.toUpperCase())
console.log(myStr.length);  //9
console.log(myStr.charAt(2));  //s
console.log(myStr.indexOf('t'))
console.log(myStr.toUpperCase())  //DESPERATE
console.log(myStr.substring(0, 5)) //Despe
console.log(myStr.substring(4, 2)) // sp //It swaps the start and end index as the start > end
console.log(myStr.slice(4, 2))  //sperat  //negative indexing allowed

let newStr = "hello-world-all"
console.log(newStr.split('-')) // [ 'hello', 'world', 'all' ]
newStr = "                 hello         "
console.log(newStr)
console.log(`${newStr.trimStart()}  ${newStr.trimStart().length}`); //hello           14
console.log(`${newStr.trimEnd()}  ${newStr.trimEnd().length}`);  //                 hello  22
console.log(newStr.trim())  // hello
newStr = "hello-world-all"
console.log(newStr.replaceAll('-', ' '))
console.log(newStr.includes('world--'))  //returns true or false