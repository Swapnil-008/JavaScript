// const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(descripter);
// output
// value: 3.141592653589793,
// writable: false,   // due to this we are not able to change the value of PI
// enumerable: false,
// configurable: false

// console.log(Math.PI);  // 3.141592653589793
// Math.PI = 5
// console.log(Math.PI);  // 3.141592653589793

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,
    orderChai: function()
    {
        console.log("chai nhi bni");
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, 'name', {     // with this we can set properties of our object also
    writable: false,                      // with this nobody can change the value of our parameter writable 
    enumerable: false,                    // with this whenever we try to iterate an object this entity(name) will be not included in iterations         
    
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

// for (let [key, value] of Object.entries(chai))
// {
//     if (typeof value !== 'function')
//     {
//         console.log(`${key} : ${value}`);
//     }
// }
// price : 250
// isAvailable : true