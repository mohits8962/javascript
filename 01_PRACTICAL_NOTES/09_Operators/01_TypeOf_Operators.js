// typeof operator

// In JavaScript, the typeof operator is used to determine the type of a value. It can be used as follows:

typeof value

// The typeof operator returns a string indicating the type of the operand. For example:

typeof "hello" // returns "string"
typeof 123 // returns "number"
typeof true // returns "boolean"
typeof {} // returns "object"
typeof [] // returns "object"
typeof Symbol() // returns "symbol"
typeof null // returns "object" (this is a bug in JavaScript)
typeof undefined // returns "undefined"


// -------------------------------------------------------------

let age = 22
let firstName = "harshit"
let example = true

console.log(typeof age) // returns "number"
console.log(typeof firstName) // returns "string"
console.log(typeof example) // returns "boolean"

// we can check it by using this
// let age = "18";

// age = Number(age);
// console.log(typeof age); 

// age = String(age);
// console.log(typeof age);  

// -------------------------------------------------------------

// // convert number to string. 
// // 22 -> "22"

// age = age + "";     // numbers k saath agar blank string add krenge to wo number ko string me convert kr dega
// console.log(typeof(age)); "22"

// -------------------------------------------------------------

// // convert string to number. 

// let myStr = +"34";         // string k aage + laga denge to wo number me change hojayega  
// console.log(typeof myStr);

// -------------------------------------------------------------