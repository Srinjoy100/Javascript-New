const accId=10000
let accEmail = "Hello@gmail.com"
var accPassword = "123456"
accCity=  "Kolkata"

//accId = 20000//Not Allowed
accEmail = "Hc@Gmail.com"
accPassword = "201832"
accCity = "Mumbai"

let accState;
console.log(accId);

console.table([accEmail,accPassword,accCity,accState]);

/*
    Prefer Not to Use var because of issue in block scope and functional scope
    So we mostly use let and for constant we use only const
*/