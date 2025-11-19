// 1) Simple function

function printName()
{
    console.log("Swapnil")
}
// printName()


// 2) Function returning value and passing arguments
function addTwoNumbers(number1, number2)
{
    return number1 + number2
}
const result = addTwoNumbers(5, 6)
// console.log("Result: ", result)

// function having parameter but not passed any argument
function loggedIn(name)
{
    return `${name} just logged in.`
}
// console.log(loggedIn()) // undefined just logged in.
// when you do not pass argument to function having parameter it takes that parameter as a undefined

function loggedIn(username)
{
    if(!username)
    {
        console.log("Please enter a username")
        return
    }
    return `${name} just logged in.`
}
// console.log(loggedIn())

// function with default values

function loggedIn(username = "xavier")
{
    if(!username)
    {
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in.`
}
// console.log(loggedIn())  // here if we do not pass any argument to function call, then it will use mentioned default value as a parameter