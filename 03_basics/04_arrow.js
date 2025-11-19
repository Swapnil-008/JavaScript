// this keyword -- gives the reference of current context

const user = {
    username: "swapnil",
    website: "youtube",

    welcomeMessage: function()
    {
        console.log(`${this.username}, welcome on ${this.website}`)
        console.log(this)  // this statement will print a current object
    }
}

// user.welcomeMessage();
// user.username = "sam"
// user.welcomeMessage()
// console.log(this)  // {} give empty object

// but on console of browser this above statement gives a **window object

// function chai()
// {
//     console.log(this);
// }

// chai(); // gives lots of data

// const chai = function()
// {
//     console.log(this);
// }

// chai();  // it also gives lots of data
// this doesn't work in function, it only works inside object
// Arrow function

const chai = () => {
    console.log(this)
}
// chai();   {}  this gives an empty object inside arrow function 

// Implicit return
const addTwoNum = (num1, num2) => (num1 + num2) // here return keyword is not required 
// console.log(addTwoNum(5, 4)) // 9

// const addTwoNum = (num1, num2) => {  // Curly bracket -> use return keyword
//     return num1 + num2;
// }

// for returning object in above way we have to use curly bracktes inside parentesis

const returnObject = () => ({username: "swapnil"})
// console.log(returnObject());  // { username: 'swapnil' }