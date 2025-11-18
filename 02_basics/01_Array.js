// Array

const myArr = [10, 20, 30, 40, 50]
// console.log(myArr[2]) // 30
// console.log(myArr.splice(3, 1)) // [ 40 ]  // removes element from index 3, 1 is number of elements to be removed
// console.log(myArr) // [ 10, 20, 30, 50 ]

const heroes = ["Shaktiman", "Nagraj", "Krish"]
// console.log(heroes[1]) // Nagraj
const arr = new Array(5)
// console.log(arr) // [ <5 empty items> ]
arr[0] = 1
arr[2] = 2
arr[4] = 3
console.log(arr) // [ 1, <1 empty item>, 2, <1 empty item>, 3 ]


const myArr2 = new Array(1, 2, 3, 4, 5)
// console.log(myArr2) // [ 1, 2, 3, 4, 5 ]

// myArr2.push(10) // Adding element in backside of myArr2
// myArr2.pop() // Removing element from backside of myArr2
// myArrr2.unshift(0) // Adding element from front of myArr2 // while adding element from front side all the indexes will be shifted by 1
// myArr2.shift() // Removing element from frontside of myArr2

// console.log(myArr2.includes(10)) // return -1, as 10 is not found in myArr2
// console.log(myArr2.includes(3)) // return 2, index of 3 in myArr2

const newArr = myArr2.join(); // convert array into string 
// console.log(myArr2);  // [ 1, 2, 3, 4, 5 ]
// console.log(newArr);  // 1,2,3,4,5
// console.log(typeof newArr);  // string

// console.log("A", myArr) // A [ 10, 20, 30, 40, 50 ]

// console.log(myArr.slice(1, 3))  // gives copy values of index 1 and 2 will be included and index 3 will be excluded // [ 20, 30 ]
// console.log("B", myArr) // B [ 10, 20, 30, 40, 50 ]

// console.log(myArr.splice(1, 3)) // separates the part 1 to 3 from original myArr, 3 is also included // [ 20, 30, 40 ]
// console.log("C", myArr) // C [ 10, 50 ] after using splice operation now only these elements are remaining in myArr