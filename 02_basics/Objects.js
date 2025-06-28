// //OBJECT LITERALS

// const Jsuser = 
// {
//     name : "praful",
//     age : 22,
//     location : "indore",
//     email : "praful@google.com",
//     isLoggedin : false,
//     lastLoggedInDays : ["Monday","friday"]
// }

// // console.log(Jsuser["email"]);
// // Jsuser.email = "praful@gmail.com"
// // console.log(Jsuser["email"]);

// Jsuser.greetings = function()
// {
// console.log("Hello JS Users")
// }

// Jsuser.greeting = function()
// {
// console.log(`Hello JS Users, i am ${this.name} and i am ${this.age} years old`)
// }
// console.log(Jsuser.greetings());
// console.log(Jsuser.greeting());



const tinderUser = new Object()

tinderUser.id = "123abc"
tinderUser.name = "praful"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser = 
{
    email : "some@gmail.com",
    fullName : 
    {
        firstName : "praful",
        lastName : "sor"
    }
    
    
}

// console.log(regularUser);
// console.log(regularUser.fullName);
// console.log(regularUser.email);

const obj1 = {1:"a", 2 : "b"}
const obj2 = {3:"c", 4 : "d"}

// const obj3 = {
//     obj1 , obj2
// }
const obj3 = Object.assign({},obj1,obj2)

console.log(obj3);




    
    

