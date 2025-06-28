 let myDate = new Date()
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleDateString())



//let myCreatedate = new Date(2023,10,23)
//let myCreatedate = new Date(2023,10,23,5,3,22)
//console.log(myCreatedate.toLocaleString());

// let myCreatedDate = new Date("2025-03-25")
// //console.log(myCreatedDate.toLocaleString());

// let myTimeStamp = Date.now()
// console.log(myTimeStamp);


let newdate = new Date()
// console.log(newdate);
// console.log(newdate.getMonth());
// console.log(newdate.getDay());
// console.log(newdate.getFullYear());
// console.log(newdate.getMilliseconds());
// console.log(newdate.getTimezoneOffset());



console.log(newdate.toLocaleString('default',{
    weekday: "long",
    day : "numeric",
    year : "numeric"
}));









