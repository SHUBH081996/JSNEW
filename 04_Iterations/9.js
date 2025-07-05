// 


const shoppingcart = [
    {
        itemname : "JSCOURSE",
        price : 2999
    },
    {
        itemname : "JAVA",
        price : 5999
    },
    {
        itemname : "DS",
        price : 9999
    },
    {
        itemname : "TOOLS",
        price : 7999
    },

]

//const pricetotal = shoppingcart.reduce((acc,item) => (acc + item.price),0 )
const pricetotal = shoppingcart.map((val)  => (val.price)).map((newval) => newval+ val)

console.log(pricetotal);
