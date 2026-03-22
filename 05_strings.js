//  Strings in javascript

// const name = "ramesh"
// const repoCount = 50
// console.log(name + repoCount + "Value");

// console.log ('Hello my name is ${name} and my repo count is ${repoCount}');

const gameName = new String ('Gamaholic')
console.log (gameName[0]);
console.log (gameName.__proto__);

console.log (gameName.length);
console.log (gameName.toUpperCase());
console.log (gameName.toLowerCase());
console.log (gameName.charAt(2));
console.log (gameName.indexOf('h'));

const newString = gameName.substring(0,4)
console.log (newString);

const anotherString = gameName.slice(-7,4)
console.log (anotherString);

// using TRIM in the JS FOR REMOVE THE EXTRA WHITE SPACE 
const newStringOne = "  Ramesh  "
console.log (newStringOne);
console.log (newStringOne.trim());

const url = "https://ramesh.com/ramesh%20singh"
console.log(url.replace('%20','-'));
console.log (url.includes('aroma'));

// USING SPLIT IN THE JS HELP BY GOOGLE 

console.log (gameName.split('-'));
