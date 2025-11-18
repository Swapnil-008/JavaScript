// const accountId = 33176
// let accountEmail = "swapnilshingne155@gmail.com"
// var accountPassword = "15151515"
// accountCity = "pune" // possible but not preferable, way of creating variable
// let accountState // if you create a variable but don't initialize it and try to print it then it will be print undefined
// console.log(accountId)

// // accountId = 33177 // not allowed as accountId is constant

// /*
//     prefer not to use var
//     beacause of issue in block scope and functional scope
// */
// console.table([accountId, accountEmail, accountPassword, accountCity])

let name = "Swapnil";
var rollNo = 43178;
let city = "pune"
{
    let name = "Amey";
    var rollNo = "00"
    city = "mumbai"
}

console.log(name) //let  // Swapnil // changes applied just for the scope
console.log(rollNo) //var  // 00  // changes reflects to the variable having the same name
console.log(city)