"use strict"//To use the new version of JS
//alert("Hello");//We are using node not browser
let number = 3;
let name = "Raj"
let isLogged = true;
let state = null;

//Primitive Datatype
//number => 2^53
//bigInt
// string => ""
//boolen => true/false
//null => standalone value type of its is object REMEMBER
//undefined 
// symbol =>unique 


//object
console.log(typeof (state));//object
console.log(typeof (undefined));//undefined


/****************************************Interview *******************************************/
/* Types:-
    Primitive(Call By Value):-
    1.String , 2.Number ,3.Boolean ,4.NULL ,5.Undefined 6.Symbol(Used to make an element unique),7.BigINT.
    
    Reference Type (Non - Primitive)(Call By Refenrence):-
    1.Array,2.Objects ,3.Functions*/

const score = 100 //Dynamically written Language ,doesnt need to define the data type

const scoreVlaue = 100.33

const isLoggedIn = false

const temp = null

let userEmail;//Garbage in C, Undefined in JS

const id = Symbol('123')
const anotherId = Symbol('123')

console.table([id, anotherId, id === anotherId])

const bigNum = 204256164330431461n


const heroes = ["Iron-Man", "Hulk", "Thor"]

let myObj = {
    name: MYself,
    age: "22"
}

const myFunction = function () {
    console.log("Hello World")

}