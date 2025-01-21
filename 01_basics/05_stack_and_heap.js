// Primitive datatypes just copy the value of varible does not refer the memory of variable

let myEmail = "swapnilshingne155@gmail.com"
let anotherEmail = myEmail                  
anotherEmail = "swapnilshingne09@gmail.com"
console.log(myEmail);
console.log(anotherEmail);

// Reference variables refer the memory of the variables

let myObj = {
    name: "Swapnil",
    rollNo: 33177
}

let newObj = myObj
myObj.rollNo = 33176


// Changes will reflect in rollNos of both the objects, because newObj refer the address/memory of the myObj
console.log(myObj.rollNo);  
console.log(newObj.rollNo);
