// Object

const mySym = Symbol("key1")
const myObj = {
    name: "swapnil",
    "full name": "swapnil Shingne",
    email: "swapnilshingne155@gmail.com",
    [mySym]: "key1",
    location: "pune",
    married: false,
    languages: ["CPP", "JAVA"]
}

console.log(myObj.name)  // swapnil
console.log(myObj[name]) // this will generate error
console.log(myObj["name"]) // swapnil // This syntax is used for accessing entities like "full name", symbol
console.log(myObj.mySym); // it gives the value of entity mySum but the type of that entity will string not a symbol, that's why we use above syntax also
console.log(typeof myObj.mySym); //string  (if entity in myObj is 'mySym' not '[mySym]')
console.log(myObj[mySym]) // key1
console.log(typeof myObj[mySym]) // string the value stored in mySum

// if you want to override any entity of an object then you can easily override it

myObj.email = "swapnil@google.com"
console.log(myObj.email);
Object.freeze(myObj)
myObj.email = "swapnil@microsoft.com"
console.log(myObj) // After freezing changes will not reflect in original object

myObj.greeting = function()
{
    console.log("hello coder")
}

myObj.greetingTwo = function()
{
    console.log(`hello coder, ${myObj.name}`)
}

console.log(myObj.greeting());
console.log(myObj.greetingTwo());