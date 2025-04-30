//FOR OF//////////////////////////////////////

// const arr=[1,2,4,53,112]

// for (const num of arr) {
//     console.log(num)
// }

// const greetings = "Hello World"
// for (const greet of greetings) {
//     console.log(`Each Char is +${greet}`)
// }

//Maps

// const map = new Map();
// map.set('IN','INDIA')
// map.set('ENG','ENGLAND')
// map.set('FR','FRANCE')
// console.log(map)

// for (const [key,value] of map) {
//     console.log(key,value)
// }

// const myObj={
//     'Game1':"NFS",
//     'Game2':'Spiderman'
// }
// for (const [key,value] of myObj) {
//     console.log(key,value)
// }



/************************************************************************************** */

// const myobj={
//     js:"Javascript",
//     cpp:"CPLUSPLUS",
//     rb:"Ruby"

// }

// for (const key in myobj) {
//    console.log(myobj[key])
// }

// const arr=["CPP","JS","Java"]
// for (const key in arr) {
    
//     console.log(arr[key])
// }

const coding  =["C","C++","Java","Python","Javascript"]
// coding.forEach( function (item){
//     console.log(item);
// })

// coding.forEach((val)=>{
//     console.log(val)
// })


// function printMe(item)
// {
//     console.log(item)
// }

// coding.forEach(printMe)


coding.forEach((item,index,arr)=>{
    console.log(item,index,arr)
})

const myCoding =[
    {
        languageName:"C",
        languageFileName:"c"
    },

    {
        languageName:"Java",
        languageFileName:"java"
    },

    {
        languageName:"Python",
        languageFileName:"py"
    }


]


myCoding.forEach( (item) =>{
    console.log(item.languageFileName)
})