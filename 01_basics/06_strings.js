// Strings

let name = "Swapnil"
let rollNo = 33176
// console.log(name + " : " + rollNo )  // Outdated 

// Instead of above syntax we have to prefer `` that's call backtick's 

console.log(`My name is ${name} and my Roll number is ${rollNo}`)

// Methods or functions of string
// These all methods does not make changes in original string, because string is an primitive datatype
const myStr = new String("Desperate")

console.log(myStr.length);  //9
console.log(myStr.charAt(2));  //s
console.log(myStr.toUpperCase())  //DESPERATE
console.log(myStr.substring(0, 5)) //Despe
console.log(myStr.slice(-7, -1))  //sperat

let newStr = "hello-world-all"
console.log(newStr.split('-')) // [ 'hello', 'world', 'all' ]
newStr = "                 hello         "
console.log(newStr)
console.log(`${newStr.trimStart()}  ${newStr.trimStart().length}`); //hello           14
console.log(`${newStr.trimEnd()}  ${newStr.trimEnd().length}`);  //                 hello  22
console.log(newStr.trim())  // hello