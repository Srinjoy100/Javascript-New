const score = 400

const balance = new Number(200)

//console.log(score,balance)

//console.log(score)

console.log(balance.toString().length)
console.log(balance.toFixed(4))

const num = 23.87313
console.log(num.toPrecision(4))

let standard = 10000000000;
console.log(standard.toLocaleString("en-IN"));


// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)
