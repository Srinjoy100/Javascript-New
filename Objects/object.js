//Singleton

//Object Literals

const user = {
    name: "Raj",
    age: 22,
    location: "Kolkata",
    eMail: "abc@gmail.com",
    isLoggedIn: false
}

// console.log(user.name)
// //Alternative Way to Access Object
// console.log(user["name"])

// user.location = "New Delhi"
// console.log(user["location"])

// user.greeting = function()
// {
//     console.log("Hello User")
// }

// console.log(user.greeting);



//Singleton Object
// const tinder = new Object()
// tinder.id ="123ABC"
// tinder.name = "Sam"
// tinder.isLoggedIn = false
// console.log(tinder)

// const regularUser = {
//     email:"some@gmail.com",
//     full_name:{
//         user_full:{
//             firstname:"Raj",
//             lastname:"Bhattacharjee"
//         }
//     }
// }

// console.log(regularUser.full_name.user_full.lastname)

const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "a", 4: "b" }

//const obj3 = {obj1 , obj2}
//const obj3 = Object.assign({},obj1,obj2)
const obj3 = { ...obj1, ...obj2 }
//console.log(obj3)
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


//Destructuring//

const course = {
    name: "JS",
    price: 999,
    teacher: "Hitesh Choudhary"
}

console.log(course.price)

const { teacher } = course//Destructuring
const { price: value } = course
console.log(teacher)
console.log(value)

//API
// {
//     "name" : "Raj",
//     "price" : "free",
//     "course_name": JS"
// }

[
    {

    },
    {

    }
]