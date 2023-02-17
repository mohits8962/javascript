// What is shallowCopy and deepCopy?
// Answer- 
// SHALLOW COPY
// In JavaScript, a shallow copy of an object is a new object that has the same properties as the original object, but the properties are still references to the objects that the original object properties refer to. This means that if we modify a property of the original object, the corresponding property of the shallow copy will also be modified, because both properties refer to the same object.

let array1 = ["item1", "item2"];
let array2 = array1;
console.log("array1", array1);
console.log("array2", array2);
array1.push("item3");

console.log("after pushing element to array 1");
console.log("array1", array1);
console.log("array2", array2);

// ----------------------------------

// let userOne = {
//   name: 'Mohit',
//   role: 'Developer',
//   country: 'India'
// }

// let userTwo = {
//   name: 'Mohit',
//   role: 'Developer',
//   country: 'India'
// }
// console.log(userOne == userTwo) // false

// ----------------------------------

let nums = [1, 2, 3]
let numbers = nums
console.log(nums == numbers)  // true

// ----------------------------------

let userOne = {
    name: 'Mohit',
    role: 'Developer',
    country: 'India'
}
let userTwo = userOne
console.log(userOne == userTwo)  // true

// ----------------------------------

// let nums = [1, 2, 3]
// let numbers = [1, 2, 3]
// console.log(nums == numbers) // false

// ***************************************************************

// DEEP COPY
// A deep copy, on the other hand, is a new object that has copies of the original object's properties, rather than references to the original object's properties. This means that if you modify a property of the original object, the corresponding property of the deep copy will not be modified, because the properties are completely independent of each other.

let num1 = 6;
let num2 = num1;
console.log("value is num1 is", num1);
console.log("value is num2 is", num2);
num1++;

console.log("after incrementing num1")
console.log("value is num1 is", num1);
console.log("value is num2 is", num2);

