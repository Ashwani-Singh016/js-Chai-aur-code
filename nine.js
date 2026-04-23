const myNums = [1,2,3]
// const myTotal = myNums.reduce(function (acc,currval){
//     console.log(`acc:${acc} and currval ${currval}`);
//     return acc + currval
// },0)

const myTotal = myNums.reduce((acc,curr)=> acc + curr,0)

console.log(myTotal);

const shoppingCart = [
    {
       itemName: "mobile dec course",
       price: 999 
    },
    {
       itemName: "js development",
       price: 1999 
    },
    {
       itemName: "py course",
       price: 400
    },
    {
       itemName: "data science",
       price: 999 
    },
]

const pricetoPay = shoppingCart.reduce((acc,item)=> acc +item.price,0)
console.log(pricetoPay);