const name = "Raj"
const repoCount= 50
//console.log(name + repoCount) Backdated//

console.log(`Hello my name is ${name} and my repocount is ${repoCount}`);//Modern Way,String Interpolation

const name2 = new String("Raj-Go")//Object creation 
console.log(name2)

// console.log(name2[0])
// //console.log(name2.__proto__)
// console.log(name.length)
// console.log(name2.toUpperCase())
// console.log(name2.charAt('1'))
// console.log(name2.indexOf('R'))

console.log(name2.substring(0,5))
console.log(name2.slice(-1,3))

const  newString = "     Hello          "
console.log(newString.trim())
console.log(name2.replace("R","B"))
console.log(name2.includes("B"))

console.log(name2.split('-'))