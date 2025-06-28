//OBJECT LITERALS

const Jsuser = 
{
    name : "praful",
    age : 22,
    location : "indore",
    email : "praful@google.com",
    isLoggedin : false,
    lastLoggedInDays : ["Monday","friday"]
}

// console.log(Jsuser["email"]);
// Jsuser.email = "praful@gmail.com"
// console.log(Jsuser["email"]);

Jsuser.greetings = function()
{
console.log("Hello JS Users")
}

Jsuser.greeting = function()
{
console.log(`Hello JS Users, i am ${this.name} and i am ${this.age} years old`)
}
console.log(Jsuser.greetings());
console.log(Jsuser.greeting());



    
    

