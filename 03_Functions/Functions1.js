



function printMyName ()
{
console.log("p");
console.log("r");
console.log("a");
console.log("f");
console.log("u");
console.log("l");
}

// printMyName()


function addNumbers(value1 , value2)
{
    return value1 + value2
}

// console.log(addNumbers(12,11));
// console.log(addNumbers(12,"22"));
// console.log(addNumbers(12,"a"));

// const result = addNumbers(2,3)
// console.log(result);



function loginUserMessage (username = "sammy")
{
    if(!username)
    {
        console.log("please enter usrname")
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("gayle"));




function addCartValue (val1, val2 ,...num)
{
return num;
}

// console.log(addCartValue(122,111,232,111));


const user = 
{
    userName : "Praful",
    price : 199
}

function handleObject (anyobject)
{
    console.log(`user name is : ${anyobject.userName} and price is ${anyobject.price}`);
    
}

//

const mynewArray = [100,200,300,400]

function returnvalues(getarray)
{
    return getarray[1];
}

console.log(returnvalues(mynewArray));













