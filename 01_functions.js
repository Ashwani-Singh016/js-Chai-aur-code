// console.log("V")
// console.log("i")
// console.log("j")
// console.log("a")
// console.log("y")


// function sayMyName(){
//     console.log("V");
//     console.log("i");
//     console.log("j");
//     console.log("a");
//     console.log("y");

// }
// sayMyName()

// function addTwoNumbers(num1 ,num2){
//     console.log(num1 + num2);
// }

function addTwoNumbers(num1 ,num2){
    // let result = num1 + num2
    // return result
    return num1+num2
// NOTE : When we use return function then we ca store the actual value of results....
}
const result = addTwoNumbers(1,8)
// console.log("Results: ",result);

function calculateCartPrice(val1,val2, ...num1){
    return num1
}
// console.log(calculateCartPrice(200,400,500,2000));

const user = {
    username:"Vijay",
    price:199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is 
        ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username:"Sam",
    price:299
})
const myNewArray =[200,400,100.600]

function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,500,1000]));

