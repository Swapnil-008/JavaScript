// myCoding.forEach( (item) => {
    
//     console.log(item.languageName);
// } )


// const temp = coding.forEach(language => {
//     if(language == "java")
//     {
//         return language;
//     }
// });
// console.log(temp)  // undefined // beacuse foreach loop doesn't return anything

// temp = coding.filter(language => {
//     if(language == "java")
//     {
//         return language;
//     }
// })
// console.log(temp) // [ 'java' ]

const myArr = [1, 2, 3, 4, 5]

// let newArr = myArr.filter((num) => num > 2)
// console.log(newArr)  // [ 3, 4, 5 ]

// but in above statement if we use num > 2 inside curly brackets then we have to use 'return' keyword

// newArr = myArr.filter((num) => {
//     return  num > 2
// })
// console.log(newArr)  // [ 3, 4, 5 ]

let newArr = []
myArr.forEach((num) => {
    if(num > 2)
    {
        newArr.push(num)
    }
})
// console.log(newArr)  //  [ 3, 4, 5 ]

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks = books.filter( (book) => book.genre === 'History')

  userBooks = books.filter( (book) => { 
    return book.publish >= 1995 && book.genre === "History"
})
//   console.log(userBooks);
//   [
//     {
//       title: 'Book Three',
//       genre: 'History',
//       publish: 1999,
//       edition: 2007
//     }
//   ]

newArr = myArr.map((num) => num + 10)
// console.log(newArr)  // if we use curly brackets then we have to use return keyword as we have used in filter method
// [ 11, 12, 13, 14, 15 ]

//chaining of methods

newArr = myArr.map((num) => num * 10)  // here num's value are 1, 2, 3, 4, 5
              .map((num) => num + 1)   // here num's value are 10, 20, 30, 40, 50
              .filter((num) => num >= 20) // here num's value are 11, 21, 31, 41, 51 

// console.log(newArr)  // [ 21, 31, 41, 51 ]

const initialValue = 0
let sum = myArr.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue)
console.log(sum) // 15
//only in first iteration initialValue variable is used 

sum = myArr.reduce((accumulator, currentValue) => {
    console.log(`accumulator: ${accumulator}, currectValue: ${currentValue} `)
    return accumulator + currentValue
}, 0);
console.log(sum)  // 15

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);