// object literals

const mySym = Symbol ("key1")

const JsUser = {
    name: "Vijay",
    age:21,
    location: "jaipur",
    mySym:"mykey1",
    email: "vijaysingh@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Mondays","thurday"]
}

console.log(JsUser.email);
// console.log(JsUser[email]);
console.log([mySym]);

JsUser.email= "vijay@chatpt.com"
// Object.freeze(JsUser);
JsUser.email= "vijay@microsoft.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js User");
}
JsUser.greetingTwo = function(){
    console.log(`Hello Js User, ${this.name}` );
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());