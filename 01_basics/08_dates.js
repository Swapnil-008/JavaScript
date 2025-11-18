// Dates

let myDate = new Date()

// console.log(myDate.toDateString()) //Tue Jan 21 2025
// console.log(myDate.toISOString())  //2025-01-21T19:23:52.395Z
// console.log(myDate.toJSON()) //2025-01-21T19:23:52.395Z
// console.log(myDate.toLocaleDateString()) //1/21/2025
// console.log(myDate.toLocaleString()) //1/21/2025, 7:27:52 PM
// console.log(myDate.toLocaleTimeString()) //7:28:23 PM

let myCreatedDate = new Date("01-22-2025")
console.log(myCreatedDate.toDateString())

//from January-1-1970,       Date.now() gives milliseconds'

console.log(Math.floor(Date.now() / 1000)) // seconds
console.log(Math.floor(Date.now() / 1000 / 60)) // minutes
console.log(Math.floor(Date.now() / 1000 / 60 / 60 )) //houres
console.log(Math.floor(Date.now() / 1000 / 60 / 60 / 24)) //days
console.log(Math.floor(Date.now() / 1000 / 60 / 60 / 24 / 30)) //months
console.log(Math.floor(Date.now() / 1000 / 60 / 60 / 24 / 30 / 12)) //years