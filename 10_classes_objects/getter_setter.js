// Modern Syntax
// class User
// {
//     constructor(email, password)
//     {
//         this.email = email
//         this.password = password
//     }
//     get email()
//     {
//         return this._email
//     }
//     set email(email)
//     {
//         this._email = email
//     }
//     get password()
//     {
//         return this._password
//     }
//     set password(password)
//     {
//         this._password = password
//     }
// }
// const chai = new User("ABC@mail.com", 14578)
// console.log(chai.password)

// Using function only
function User(email, password){
    this._email = email;
    this._password = password

    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value
        }
    })
    Object.defineProperty(this, 'password', {
        get: function(){
            return this._password.toUpperCase()
        },
        set: function(value){
            this._password = value
        }
    })

}
const chai = new User("chai@chai.com", "chai")
console.log(chai.email);