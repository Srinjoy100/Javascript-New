// //If Statement
// if(false)
// {
//     console.log("HAHAHA");

// }
// console.log("HIHIHI")

// if(2=="2")
// {
//     console.log("Number Matched");
// }
// if(2==="2")
// {
//     console.log("Will Not Execute")
// }

// const temp=41;
// if(temp<50)
// {
//     console.log("Less Than 50");

// }
// else
// {
//     console.log("Greater than 50")
// }

//const  score=200;
// if(score>100)
// {
//     let power="You can fly";// var power wil get exceuted as scope of var is global
//     console.log(`User can use his power:${power}`)
// }
// console.log(power);
// const balance=1000
// console.log(balance>500?"Hello":"Bye")//Use of Ternary operator

/***********************************************Nesting********************************************* */

// const balance=1000
// if(balance>500)
// {
//     if(balance<1500)
//     {
//         console.log("Yes,as well as less than 1500");
//     }
//     else
//     {
//         console.log("No");
//     }
// }
// // else
// // {
// //     console.log("HAHHHAA")
// // }

const userLoggedIn=true;
const debitCard=true;
if(userLoggedIn && debitCard)
{
    console.log("Hello")
}