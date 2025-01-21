// Types of datatypes

// Primitive Datatypes

// 7 Types :  Number, String, Bigint, null, Undefined, Symbol, Boolean, 

// Symbol

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)   // false
console.log(id, "  ", anotherId); // Symbol(123)    Symbol(123)

// References (Non-Primitive Datatypes)

// Arrays, Objects, Functions

const dataStructures = ["Array", "String", "Linked List", "Stack", "Queue", "Tree", "Graph"]

const myObj = {
    name: "Swapnil",
    age: 21,
    branch: "IT"
}

const myFun = function()
{
    console.log("Hello world")
}

console.log(typeof myFun) // function

// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object