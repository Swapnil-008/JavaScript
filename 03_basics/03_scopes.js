// local scope and global scope

if(true)
{
    let a = 10        // block scope
    const b = 20      // block scope
    var c = 30        // block scope
} 

// console.log(a);  // undefined 
// console.log(b);  // undefined 
// console.log(c);  // 30 // because var is accessible outside the block and that's why we don't use var

let a = 300
if(true)
{
    a = 30
}
// console.log(a)  // 30


let b = 200
if(true)
{
    let b = 20
    // console.log("Inner: ", b)  // 20
}
// console.log(b) // 200  // because we create a different copy of b inside block whose value is valid inside block only that's why it doesn't make changes in outside b's value

// The global scope which we have on console of browser is different from the global scope we are using on node // importet for interview, lecture 21 in ending 2 min

function one()
{
    const username = "hitesh"
    function two()
    {
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);  // it will generate error as used website outside the block of function two
    two()
}
// one()

if (true)
{
    const username = "hitesh"
    if (username === "hitesh")
    {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);  // it will generate error as website used outside the block of inner 'if' statement
}

// console.log(addOne(5));
function addOne(num)
{
    return num + 1;
}

// console.log(addTwo(5))  //it will generate an error
let addTwo = function(num)
{
    return num + 2;
}

//above both notations of functions are valid but in second notation you can't call the function before you declared