// Stack Memory(Primitive Data Types), Heap(Non-Primitive)//

let name="Raj"
let name2 = name;
console.log(name2);

let user1 = {
    email:"user@gmail.com",
    upi:"userid"
}
let user2 = user1

console.log(user2)

user2.email="user";
console.log(user1)

// Heap contains a reference ,so any data types that contain data in heap,will modify the original data also.(Call By Reference)//
//It is not the case for the data types that point in Stack,the original data wont change,it creates a copy.(Call By Value)//