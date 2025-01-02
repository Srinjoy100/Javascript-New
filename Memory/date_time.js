//Date
let myDate= new Date()
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleString())
// console.log(myDate.toLocaleTimeString())

// let date = new Date(2025,0,12)//0 is Jan in JS
// console.log(date.toDateString())

let date = new Date("01-02-2025")
// console.log(date.toDateString())

// let timeStamp = Date.now()
// console.log(date.getTime())
// console.log(Math.floor(Date.now()/1000))

let date2 = new Date()
console.log(date2.getFullYear())
console.log(date2.getTimezoneOffset())
console.log(date2.getMinutes())
date.toLocaleString('default',{objects})