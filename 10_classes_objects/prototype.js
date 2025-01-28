// const newHeroes = ["Hulk", "Spiderman"]

// let newUser = {
//     username: "Swapnil",
//     rollNo: 33176
// }

// console.log(newUser)  // { username: 'Swapnil', rollNo: 33176 }
// Object.prototype.email = "Swapnil.com"  // here we set the parameter or property email in object and every array, object consider as an object, that's why it is accessible to all who refers object or consider as an object
// console.log(newUser.email)  // Swapnil.com 
// console.log(newHeroes.email)   // As i mentioned in above statement that's why we are able to access email in newHeroes array also

// Array.prototype.callName = function()
// {
//     console.log("My name is swapnil")
// }

// newHeroes.callName()    //My name is swapnil
// newUser.callName()      // It will generate error because as we saw in above statements there we had added properties to an object, and as array is considered as an object that's why that properties are accessible to array also
// but here we have added property to an array and object is not considered as an array that's why that property is not applicable / accessible for an object

// Inheritance
// --Internally--

const user = {
    username: "swapnil",
    email: "swapnil@mail.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: "JS Assignment",
    fullTime: true,
    __proto__: user,  // whenever we will be try to print object TASupport only these two properties will be show, but in prototype due to this line of code properties of user are also added, but you can access those properties using objectName and dot operator only
}
// TASupport.__proto__ = user // Another way
console.log(TASupport.username)
console.log(user)


// --Modern way--
Object.setPrototypeOf(TASupport,TeachingSupport)
console.log(TASupport.isAvailable)  // properties of object TeachingSupport are inherited in TASupport

let str = "ChaiAurCode     "
String.prototype.trueLength = function()
{
    return this.trim().length  // Now this method has added to string to get an length of any string without whitespaces
}
console.log(str.trueLength())