// datatypes in javascript

// // nn bb ss u - Primitives in Js
// let a = null;
// let b = 345;
// let c = true; // can also be false
// let d = BigInt("567") + BigInt("3")
// let e = "Mohit"
// let f = Symbol("I am a nice symbol")
// let g
// console.log(a, b, c , d, e, f, g)
// console.log(typeof c)

// // Non Primitive Data Type - Objects in Js
// const item = {
//   "Mohit": true,
//   "Shubh": false,
//   "Lovish": 67,
//   "Rohan": undefined
// }
// console.log(item["Shubh"])


// ---------------------------------------------------------------------------------

// primitve vs reference data types

// primitve data type
let num1 = 6;
let num2 = num1;
console.log("value is num1 is", num1);
console.log("value is num2 is", num2);
num1++;

console.log("after incrementing num1")
console.log("value is num1 is", num1);
console.log("value is num2 is", num2);


// reference data types 

// array 
let array1 = ["item1", "item2"];
let array2 = array1;
console.log("array1", array1);
console.log("array2", array2);
array1.push("item3");

console.log("after pushing element to array 1");
console.log("array1", array1);
console.log("array2", array2);