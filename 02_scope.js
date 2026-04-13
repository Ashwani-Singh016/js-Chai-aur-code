
let a =300 
// global declaration of scope 
if (true){
    let a= 10
    const b= 20
    console.log("INNER: ",a);
}

// for(let i =0; i<array.length ; i++){
//     const element =array[i];
// }

// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username ="vijay"

    function two(){
        const website ="youtube"
        // console.log(username);
    }
    // console.log(website);
    // two()
}
// one()

if (true){
    const username = "vijay"
    if(username === "vijay"){
        const website ="youtube"
        // console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);


// +++++++++++++++INTERESTING +++++++++++++

console.log(addone(5))
function addone(num){
    return num + 1
}
// NOTE :: Concept of HOISTING IN JS where we are using function (addtwo) before
// declaration so it provide errors.....

console.log(addTwo(5))
const addTwo = function(num){
    return num + 2
}
addTwo(5)