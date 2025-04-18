 const userEmail = []

// if(userEmail)
// {
//     console.log("Got User Email");
// }
// else
// {
//     console.log("Dont have user email")
// }


/*******************************************************Falsy Values****************************************** */
//false,0,-0, BigInt 0n,"",null,undefined,NANA    
//Truthy Value//
//"0",'false'," ",[],{},function(){}
if(userEmail.length===0)
{
    console.log("Array is Empty")
}
const currentObj={};
if(currentObj.keys(currentObj).length===0)
{
    console.log("Empty")
}