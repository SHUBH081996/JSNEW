// const PromiseOne = new Promise((resolve, reject) => {
   
//     setTimeout(() => {
//         console.log("Async task is completed");
//         resolve();
//     }, 1000);
// })

// PromiseOne.then(()=> {
//     console.log("Promise consumed");
    
// })


// new Promise((resolve,reject) => 
// {
//     setTimeout(() => {
//         console.log("Async task 2 completed");
//         resolve();
        
//     }, 1000);
// }).then(() => 
// {
//     console.log("Async 2 resolved ");
    
// })






// const promiseThree = new Promise((resolve,reject) => 
// {
//     setTimeout(() => {
//         resolve({userName : "praful" , email : "praful@gmail.com"})
//     }, 1000);
    
// })

// promiseThree.then((user) => {
//  console.log(user.userName);
// })


// const promiseFour = new Promise((resolve,reject) => 
// {
//     setTimeout(() => {
//         let error = false;

//         if(!error){
//             resolve
//          ({userName : "praful" , password : "123"})
//         }
//         else{
//          reject('ERROR : Something went wrong')
//         }
//     }, 1000);
// })

// promiseFour.then((user)  => 
// {
//     return user.userName
// }).then((username) => {
//    console.log(username);
   
// }).catch((error) => {
// console.log("error comes"  + error);

// }).finally(() => 
// {
// console.log("promise finallly ");

// })



const promiseFive = new Promise((resolve, reject) => 
{
  setTimeout(() => {
        let error = true;

        if(!error){
            resolve
         ({userName : "praful" , password : "123"})
        }
        else{
         reject('ERROR : JS went wrong')
        }
    }, 1000);
})

async function consumePromiseFive()
{
    try {
           const response =  await promiseFive
            console.log(response);
    } catch (error) {
        console.log(error);
        
    }
}

consumePromiseFive();



async function getAllUsers ()
{

   try {
    
     const response  = await fetch('https://jsonplaceholder.typicode.com/users')
    const data  = await response.json()
    console.log(data);

   } catch (error) {
    
    console.log("E : " + error);
    
   }
}

getAllUsers();




fetch('https://api.github.com/users/prafulsor')
.then( (response) => 
{
 return response.json();
}).then((data) => 
{
console.log(data);
})
.catch((error) => 
{
console.log(error);
})