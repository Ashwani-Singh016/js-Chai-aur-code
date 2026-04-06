// arrays 
// Here arrays are resizable and cant access by orbitery string
// 

const myArr = [0,1,2,3,4]
const myHeros =["Shaktiman","heropush"]

const myArr2 = [2,3,4,6]

// console.log(myArr[0])
// console.log(myHeros[1])
myArr.push(6)
myArr.push(9)
myArr.pop()
myArr.unshift(9)
myArr.shift(9)
console.log(myArr);
console.log(myArr.includes(9));
console.log(myArr.indexOf(3));

// ++++++++++++++................\\\\
// //    // slice and splice.....\\
// array of ,from ,read

const fruits = ["Apple", "Banana", "Orange", "Mango", "Kiwi"];

// Extract from index 1 up to (but not including) index 3
const subArray = fruits.slice(1, 3); 

console.log(subArray); // ["Banana", "Orange"]
console.log(fruits);   // ["Apple", "Banana", "Orange", "Mango", "Kiwi"] (Original unchanged)

//  splice exmaple 


let months = ["Jan", "March", "April", "June"];

// At index 1, remove 0 elements, then add "Feb"
months.splice(1, 0, "Feb"); 
console.log(months); // ["Jan", "Feb", "March", "April", "June"]

// At index 3, remove 2 elements and replace them with "May"
let removed = months.splice(3, 2, "May"); 

console.log(removed); // ["April", "June"] (The deleted items)
console.log(months);  // ["Jan", "Feb", "March", "May"] (Original modified)
