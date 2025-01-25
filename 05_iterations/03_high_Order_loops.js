// forof loop----------------------------------------------------------------------------------------

const arr = [1, 2, 3, 4, 5]
// for (const num of arr)
// {
//     console.log(num);
// }

const greetings = "hello world!"
// for (const ch of greetings)
// {
//     console.log(ch);
// }

const map = new Map()
map.set("IN", "INDIA")
map.set("USA", "UNITED STATES OF AMERICA")
map.set("FR", "FRANCE")

// for (const pair of map)
// {
//     console.log(pair)
// }
// [ 'IN', 'INDIA' ]
// [ 'USA', 'UNITED STATES OF AMERICA' ]
// [ 'FR', 'FRANCE' ]

// for (const [key, value] of map)
// {
//     console.log(key + " " +value)
// }
// IN INDIA
// USA UNITED STATES OF AMERICA
// FR FRANCE

let myObj = {
    name: "swapnil",
    email: "abc@mail.com"
}
// for (const [key, value] of myObj)
// {
    // console.log(key + " " +value)  // It will generate error because you can't iterate an object like this
// }


// forin loop-------------------------------------------------------------------------------

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

// for (const key in myObject)
// {
//     console.log(`${key} shortcut is for ${myObject[key]}`);
// }

// js shortcut is for javascript
// cpp shortcut is for C++
// rb shortcut is for ruby
// swift shortcut is for swift by apple

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming)
{
    console.log(programming[key]);
}
// if you try to print in array then it will be give you an index as a key of every element of an array
// js
// rb
// py
// java
// cpp

// for each-----------------------------------------------------------------------------------

const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val){
//     console.log(val);
// } )

// coding.forEach( (item) => {
//     console.log(item);
// } )

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )
