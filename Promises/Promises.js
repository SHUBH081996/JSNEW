// const promiseOne = new Promise(function(resolve,reject){
//     //do only async tasks 
//     //db calls,cryptography,network calls

//     setTimeout(function(){
//         console.log('async task is completed');
//         resolve()
//     },1000)
// })

// promiseOne.then(function(){
//     console.log('prmise consumed');
// })


// new Promise(function(resolve,reject){
//     setTimeout(() => {
//     console.log('Async task 2 completed');
//     resolve();
//     }, 1000);
// }).then(function(){
//     console.log('async 2 resolved');
// })

// const promise3 = new Promise(function(resolve,reject){
//     setTimeout(function(){
//     resolve({username : "praful", email : "prafulsor@gmail.com"});
//     },1000)
// })

// promise3.then(function(user){
//     console.log(user);
    
// })

// const Promisefour = new Promise(function(resolve,reject){
//     setTimeout(() => {
//     let error = true;
//     if(!error){
//         resolve({username:"praful", Password :"123"})
//     }
//     else
//     {
//         reject('ERROR : Something went wrong');
//     }
//     }, 1000);
// })

// Promisefour.then((user) => 
// {
// console.log(user);
// return user.username;
// }).then((username) => 
// {
// console.log(username);

// }).catch(function(error){
//     console.log(error);
    
// }).finally(function(){
//     console.log('finallly the promise is either resolved or rejected');
// })


// const promiseFive = new Promise(function(resolve, reject){
//      setTimeout(() => {
//     let error = true;
//     if(!error){
//         resolve({username:"JavaScript", Password :"123"})
//     }
//     else
//     {
//         reject('ERROR : JS went wrong');
//     }
//     }, 1000);
// })

// async function consumePromiseFive(){
//     try {
        
//         const response = await promiseFive
//     console.log(response);
//     } catch (error) {
//         console.log(error);
        
//     }
    
// }
// consumePromiseFive();




// async function getAllUsers() {
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users");
//         const data = await response.json();
//          console.log(data);
//     } catch (error) {
//         console.log(error);
        
//     }
// }

// getAllUsers();








async function getAllUsers() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
         console.log(data);
    } catch (error) {
        console.log(error);
        
    }
}

fetch("https://jsonplaceholder.typicode.com/users").then((response) =>{
    return response.json();
}).then((data) =>
{
console.log(data);

})
.
catch((error) =>
{
console.log(error);
})