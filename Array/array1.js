// //ARRAY

 let arr1 = [1,2,4,21,10]
// console.log(arr1[4])
// console.log(arr1[8])

let arr2= ["Iron-Man","Thor","Hulk","Captain America"]
// // console.log(arr2.push("Loki"))
// // console.log(arr2)
// // arr1=arr2
// // console.log(arr1)
// // arr1.push(7);
// // console.log(arr1)
// //console.log(arr2.shift())
// console.log(arr1.includes(21))
// arr2=arr1.join()
// console.log(arr2)
// console.log(arr1)

//Slice,Splice
//console.log("R",arr1)
// const myn1 = arr1.slice(1,3)
// console.log(myn1)
// console.log(arr1)

//const myn2 = arr1.splice(1,3)
//console.log(myn2)
console.log(arr1)


/********************************************Part2************************************/
//console.log(arr1.concat(arr2)) can be done alternatively using spread operator

const newarr = [...arr1,...arr2]//Using Spread Operator

console.log(newarr)

const arr3 = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const arr4 = arr3.flat(Infinity)

console.log(arr4)

console.log(Array.isArray("Raj"))
console.log(Array.from("Raj"))
console.log(Array.from({name:"Raj"}))//Returns empty array as output

let score1= 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3))