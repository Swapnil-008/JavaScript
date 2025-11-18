let score = "33"

// Different ways of using the typeof
console.log(typeof score);
console.log(typeof(score));  

let scoreNumber = Number(score)
console.log(scoreNumber); // 33

scoreNumber = true;
console.log(scoreNumber) // 1
console.log(typeof scoreNumber)  //boolean

/*
    But if
    score = "33abc" => NaN (Not a Number), type => Number
    score = null => 0
    score = undefined => NaN
    score = true => 1
    score = false => 0
*/

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 => true ; 0 => false
// ""(Empty String) => false ; "daedfsfe" => true

let number  = 33

let stringNumber = String(number)
console.log(stringNumber); // 33
console.log(typeof(stringNumber));  //String 

let str1 = "Swapnil"
let str2 = " Shingne"

console.log(str1 + str2) // Swapnil Shingne

// All these operations perform from left to right
console.log("1" + 2) // 12
console.log(typeof("1" + 2))  //String
console.log(1 + "2") // 12
console.log("1" + 2 + 2) // 122
console.log(1 + 2 + "2") // 32
console.log( 3 + 4 * 5 % 3) // 5 // This is not a correct way to write a code
// if we are using multipe operators in a single equation then must use brackets to perform the operations


//when we use comparison operators to compare values having different datatypes, we may get unexpected results
console.log("1" > 2) // false
console.log("2" > 1) // true
console.log("20" < 1) // false

console.log(null > 0)  // false
console.log(null == 0) // false
console.log(null >= 0) // true


console.log(undefined > 0)  // false
console.log(undefined == 0) // false
console.log(undefined >= 0) // false

// In javascript == operator works different from other operators >, <, >=, <=
//In above example when we are comparing null with > and  <= operators that time null is converted to 0

console.log("2" == 2) // true
console.log("2" === 2) // false
//because this operator compares the data type also