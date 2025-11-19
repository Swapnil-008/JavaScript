const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// const obj3 = {obj1, obj2} //This will add obj1 and obj2 as nested objects inside obj3

// const obj3 = {...obj1, ...obj2} // This will spread the key value pairs of obj1 and obj2 into obj3
// const obj3 = Object.assign(obj1, obj2) // This will copy the key value pairs of obj2 into obj1 and return obj1
const obj3 = Object.assign({}, obj1, obj2) // This will copy the key value pairs of obj1 and obj2 into a new empty object and return that new object
// console.log(obj1)
// console.log(obj2)
// console.log(obj3)

const myArr = [
    {
        id: 121,
        name: "swap"
    },
    {
        id: 145,
        name: "adi"
    },
    {
        id: 150,
        name: "ved",
    },
    {
        id: 175,
        name: "ani",
    },
    {
        id: 191,
        name: "ayu",
    }
]

// console.log(myArr)
// console.log(Object.keys(obj3))
// console.log(Object.values(obj3))
// console.log(Object.entries(obj3))

const course = {
    title: "JavaScript",
    price: 999,
    instructor: "swapnil",
    duration: "30 days"
}

// De-structuring
const {instructor} = course<
console.log(instructor)