// use rest operator for catching arguments

function handlingRestOperator(...nums)
{
    return nums
}
// console.log(handlingRestOperator(100, 500, 700, 200)); //[ 100, 500, 700, 200 ]

function handlingRestOperator(num1, num2, ...nums)
{
    return nums
}
// console.log(handlingRestOperator(100, 500, 700, 200));  // [ 700, 200 ]

//Passing object

const myObj = {
    username: "Swapnil",
    email: "swapnil@mail.com"
}

function passingObject(anyObject)
{
    return `${anyObject.username} is the user and his mail id is ${anyObject.email}`
}
// console.log(passingObject(myObj)); // Swapnil is the user and his mail id is swapnil@mail.com

//Passing array

const myNewArray = [40, 80, 10, 90]
function passingArray(array)
{
    return array
}
// console.log(passingArray(myNewArray)); // [ 40, 80, 10, 90 ]