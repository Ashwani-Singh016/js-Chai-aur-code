const userEmail =[]

if (userEmail){
    console.log("Got user email");
}else {
    console.log("Don't have user email");
}

//  falsy Value

// false, 0 ,-0,BigInt 0n ,"", null, undefined , NaN

// TRUTHY VALUES

if(userEmail.length === 0){
    console.log("Array is empty");
}

const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}

// NULLISH COALECING OPERATOR(??): null undefined

let val1;
val1 = 5 ?? 10
val1=null ?? 10
var2= undefined ?? 15
console.log(val1);
console.log(var2);

// TERNNARY OPERTAOR

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");