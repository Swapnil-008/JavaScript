// const promiseOne = new Promise((resolve, reject) =>{
//     // Do an async tast
//     // DB calls, cryptography, network
//     setTimeout(() => {
//         console.log("Async task is completed")
//         resolve()
//     }, 1000)
// })
// promiseOne.then(() => {
//     console.log("Promise is consumed")
// })

// // Another way of promising
// new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("Async2 is completed")
//         resolve()
//     }, 1000)
// }).then(() => {
//     console.log("Promise2 is consumed")
// })

// const promiseThree = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve({username: "Swapnil", email: "swapnilshingne155@gmail.com"})
//     }, 1000)
// })
// promiseThree.then((data) => {
//     console.log(data)
// })

// const promiseFour = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let error = false;
//         if(!error)
//         {
//             resolve({username: "Swapnil", password: "123456"})
//         }
//         else{
//             reject('ERROR: Something went wrong!')
//         }
//     }, 1000)
// })

// promiseFour.then((user) => {
//     console.log(user)
//     return user.username    // returned username will be pass as a parameter for next then block
// }).then((username) => {
//     console.log(username)
// }).catch((error) => {
//     console.log(error)
// }).finally(() => {
//     console.log("The promise is either resolved or rejected")
// })

// when error is true output: ERROR: Something went wrong! (with finally block)
// when error is false output:
// { username: 'Swapnil', password: '123456' }
// Swapnil (with finally block)

// const promiseFive = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let error = true
//         if(!error)
//         {
//             resolve({username: "Swapnil", password: "123456"})
//         }
//         else{
//             reject("ERROR: JS went wrong!")
//         }
//     }, 1000)
// })

// async function consumePromised()
// {
//     try{
//         const response = await promiseFive
//         console.log(response)
//     }catch(error)
//     {
//         console.log(error)
//     }
// }

// when error = true   ERROR: JS went wrong!
// when error is false { username: 'Swapnil', password: '123456' }
// consumePromised()

// async function getAllUsers()
// {
//     try{
//         const response = await fetch('https://api.github.com/users/Swapnil-008')  // It returns a promise
//         const data = await response.json()    // for converting that string to JSON it needs time that's why here also it has to wait until data gets converted in JSON
//         console.log(data)
//     }
//     catch(error)
//     {
//         console.log(error)
//     }
// }
// getAllUsers()

fetch('https://api.github.com/users/Swapnil-008')
.then((response) => {
    const error = false
    if(!error)
    {
        return response.json()
    }
    return "JS went wrong"
})
.then((data) => {
    console.log(data)
})
.catch((error) => {
    console.log('E', error)
})