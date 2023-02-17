// intro to arrays
// The Array object, as with arrays in other programming languages, enables storing a collection of multiple items under a single variable name 

// 1. arrays are resizable and can contain a mix of different data types
// 2. JavaScript arrays are zero-indexed: the first element of an array is at index 0, the second is at index 1, and so on —
//     and the last element is at the value of the array's length property minus 1.
// 3. JavaScript array-copy operations create shallow copies.
// 4. Arrays are ordered collection of items 
// 5. Arrays aren't primitives type but they are reference type 
// 6. Arrays are refrence type and in js all reference type we called objects


// how to create arrays

// let fruits = ["apple", "mango", "grapes"];
// console.log(fruits[2]);

// let numbers = [1,2,3,4];
// console.log(numbers);

// let mixed = [1,2,2.3, "string", null, undefined];
// console.log(mixed);



let fruits = ["apple", "mango", "grapes"];

// console.log(fruits);
// fruits[1] = "banana";   //this line is mutable (Mutable is a type of variable that can be changed.)
// console.log(fruits);
console.log(typeof fruits);   // this checks the type of our value

console.log(Array.isArray(fruits));  //it checks if the value that we put in variable is array or not. (so it gives TRUE)


let obj = {}; // object literal
console.log(typeof obj);
console.log(Array.isArray(obj));    // (it gives us FALSE because this is not a array)


// array indexing 