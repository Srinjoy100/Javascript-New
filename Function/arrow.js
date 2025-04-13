const user={
    username:"Raj",
    price:100,
    welcomeMessage:function()
    {
        console.log(`${this.username} ,welocme to the website`);
        //console.log(this)
    }
}

//user.welcomeMessage()
//user.username = "Sam"
//user.welcomeMessage();
//console.log(this);//In Node Environment it will be empty

// function chai()
// {
//     let username = "Raj"
//     console.log(this.username);
// }
// chai();

/*********************************************ARROW FUNCTION **************************************************/

// const chai = () =>{
//     let username="Raj";
//     console.log(this);
// }
// chai();
// const addTwo = (num1,num2)=>{
//     return console.log(num1+num2);
// }
// addTwo(2,1)

const addTwo = (num1,num2)=> console.log(num1+num2);
    
addTwo(2,1)