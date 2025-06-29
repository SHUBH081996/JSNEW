const user = 
{
    username : "praful",
    price : 999,

    welcomemessage : function(){
        console.log(`welocme to website ${this.username}`);
        
    }

}

// user.welcomemessage()
// user.username = "sam"
// user.welcomemessage()


// console.log(this);

// function chai()
// {
//     let username = "praful"
//     console.log(this.username);
    
// }

// chai()



const chai = (value1 , value2) =>
{
    let username = "praful"
console.log(this.username);

}

// console.log(chai());



// const addtwo = (num1 , num2) =>
// {
//     return num1 + num2
// }


// const addtwo = (num1 , num2) =>  num1 + num2

// const addtwo = (num1 , num2) =>  (num1 + num2)

const addtwo = (num1 , num2) =>  ({username : "praful"})

    

console.log(addtwo());




