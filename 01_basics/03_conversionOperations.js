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