// function setUserName(username)
// {
//     return this.username = username
// }

// function createUser(username, email, password)
// {
//     this.username = setUserName(username)
//     this.email = email
//     this.password = password
// }
// const user = new createUser("Swapnil", "swapnil@mail.com", "1234")
// console.log(user)

// In above code if we didn't return username and catch username in createUser function then user object will not have username field because,
// setUserName function added a username to a reference that reference will be cleared / flush from the call stack after completing it's execution so we have to catch that reference of an updated object before it removes from call stack that's why we have catch the reference

// So doing same process as above we may use call method also

function setUserName(username)
{
    this.username = username   // the keyword 'this' has used here is referring to the reference which is passed as a parameter at the time of calling setUserName function that's why changes directly reflect to the object of passed reference
}
function createUser(username, email, password)
{
    setUserName.call(this, username) 
    this.email = email
    this.password = password
}
const user = new createUser("Swapnil", "swapnil@mail.com", "1234")
console.log(user)