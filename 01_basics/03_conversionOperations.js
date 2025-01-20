let score = "33"

// console.log(typeof score);
// console.log(typeof(score));

// let scoreNumber = Number(score)
// console.log(scoreNumber); // 33

/*
    But if
    score = "33abc" => NaN (Not a Number)
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
console.log(typeof(stringNumber));

let str1 = "Swapnil"
let str2 = " Shingne"

console.log(str1 + str2) // Swapnil Shingne

console.log("1" + 2) // 12
console.log(1 + "2") // 12
console.log("1" + 2 + 2) // 122
console.log(1 + 2 + "2") // 32
console.log( 3 + 4 * 5 % 3) // This way is not correct to write a code
// if you are using multipe operators in single equation the must use brackets


//when will we use comparison operators for compare values of different datatypes, we may get unexpected results
console.log("1" > 2) // false
console.log("2" > 1) // true
console.log("20" < 1) // false

console.log(null > 0)  // false
console.log(null == 0) // false
console.log(null >= 0) // true

// In javascript == operator works different from other operators > < >= <=
//In above example when we are comparing null with > and  <= operators that time null is converted to 0

console.log("2" == 2) // true
console.log("2" === 2) // false
//because this operator compares data type also