// In JavaScript, how do you turn an Object into an Array[] ??
// Answer - In JavaScript, there are several ways to convert an object into an array.Here are a few methods:


// Using the Object.keys() method:
// This method returns an array containing the keys of the object.You can then use the map() method to return the values of the object as an array.

// let obj = { a: 1, b: 2, c: 3 };
// let arr = Object.keys(obj).map(key => obj[key])
// console.log(arr); // [1, 2, 3]

// ----------------------------------------------------------------------------------------------

// Using the Object.values() method:
// This method returns an array containing the values of the object.

// let obj = { a: 1, b: 2, c: 3 };
// let arr = Object.values(obj);
// console.log(arr); // [1, 2, 3]

// ----------------------------------------------------------------------------------------------

// Using the Object.entries() method:
// This method returns an array of arrays, where each inner array contains a key - value pair of the object.

// let obj = { a: 1, b: 2, c: 3 };
// let arr = Object.entries(obj);
// console.log(arr); // [['a', 1], ['b', 2], ['c', 3]]

// ----------------------------------------------------------------------------------------------

// Using the for...in loop: You can use a for...in loop to iterate through the object's properties and push the values into an array.

// let obj = { a: 1, b: 2, c: 3 };
// let arr = [];
// for (let key in obj) {
//     arr.push(obj[key]);
// }
// console.log(arr); // [1, 2, 3]

// ----------------------------------------------------------------------------------------------

// Using Array.from() method:
// This method creates a new, shallow - copied Array instance from an array - like or iterable object.

// let obj = { a: 1, b: 2, c: 3 };
// let arr = Array.from(obj);
// console.log(arr); // [1, 2, 3]
