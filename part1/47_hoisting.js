// hoisting
// 1. function ko declare krne se pehle call kr sakte hai   
// 2. y sirf function declaration me hoga (function expression or arrow function me nahi hoga )


// Hoisting is a behavior in JavaScript in which declarations of variables and functions are automatically moved to the top of the current scope. This means that variable and function declarations are processed before any code is executed, regardless of where they appear in the code. In terms of variables and constants, keyword var is hoisted and let and const does not allow hoisting.


// —-----------------------------

// var a = 4;
// function greet() {
//     b = 'hello';
//     console.log(b); // hello
//     var b;
// }
// greet(); // hello
// console.log(b);

// ------------------------------------------------

// hello();                            // function declaration k pehle hi call kr skte hai (only in function declaration)

// function hello(){
//     console.log("hello world");
// }


// console.log(hello);                 // agar hum var k case me variable declaration k pehle call krte hai to undefined dega 
// var hello = "hello world";          // variable
// console.log(hello);                 // baad me krenge to output de dega

// ( variable wale me var me bs undefined dega ...........let or const me error dega because inme value uninitialised hogii)


// // var allow hoisting
// x = 10
// console.log(x);
// var x;

// // let dosent allow hoisting
// x = 10
// console.log(x);
// let x;
