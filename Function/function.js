// // function basic()
// // {
// //     for(let i=0;i<=10;i++)
// //     {
// //         console.log(i)
// //     }
// // }

// //basic()//Execution

// //basic //It is a reference

// // function Add(num1,num2)
// // {
// //     console.log(num1 + num2) // This is not returning anything
// // }

// // Add("Hello","Raj")
// // function Add(num1,num2)
// // {
// //     return (num1+num2)
// //     console.log("Hello")//Not reachable as written after return statement
// // }

// // const res =Add(5,4)
// //console.log("Result:",res)

// // function loggedIn(name)
// // {
// //     return `${name} has logged in to the system`
// // }

// // const res1=loggedIn("Raj")
// // console.log(res1)


// function CalculateCartPrice(val1, val2, ...num1)//Rest Operator,val1 and val2 will be the first two values in the call,while the only element in num1 will be [1000]
// {
//     return num1
// }

// console.log(CalculateCartPrice(200, 5, 1000))


// const user = {
//     name: "Raj",
//     price: 199
// }
// function handleObject(obj) {
//     console.log(`username is ${obj.name} and price is ${obj.price}`)
// }
// handleObject(user)

// const myarr = [100, 200, 300]

// function returnVal(arr) {
//     return arr[1];
// }

// console.log(returnVal(myarr))
// /*******************************************Scope******************************************************/
// if (true) {
//     let a = 10
//     const b = 20
//     var c = 30
// }


// //console.log(a)
// //console.log(b);
// console.log(c)


// function one()
// {
//     const username="Raj";
//     function two()
//     {
//         const website = "Youtube";
//         console.log(username)
//     }
//     console.log(website)
//     two()
// }

// one()

// //*****************************************Interesting**************************************** */

// function addOne(num)
// {
//     return num+1;
// }
// addOne(7)

// const addTwo = function(num)
// {
//     return num + 2;
// }

// addTwo(7)

// /******************************************************IIFE(Immediately Invoked Function Expression ) ***************************/

 (function chai()
 {
    //Named IFFE
    console.log("DB Connected");
})();

(function another()
{
    console.log("Bye Bye");
})();

((name)=>{
    console.log(`${name} has connected to the Database`)
})("Raj")