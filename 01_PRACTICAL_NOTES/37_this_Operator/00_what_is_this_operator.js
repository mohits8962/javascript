// What is the “this” operator?
// Answer- In JavaScript, the "this" keyword refers to the object that is executing the current function. The value of "this" can be different depending on how a function is called.
// Here are some examples of how the "this" keyword can be used in JavaScript:



// 1- In the global scope, "this" refers to the global object, which is either the window object in a browser or the global object in Node.js.
// if we simply console the this in vs code we get empty object {}
// But if we do the same in browser it will give us the window object
// For example:

// console.log(this); // outputs the global object

// ---------------------------------------------------------------

// 2- In a function, "this" refers to the object that is calling the function. For example:

// a.
// const obj = {
//   name: 'My Object',
//   greet: function() {
//     console.log(`Hello, I am ${this.name}`);
//   }
// }
// obj.greet(); // outputs "Hello, I am My Object"

// b.
// In this if we console the this in function without strict mode this will give us window object

// function name(){
//     console.log(this)
// }
// name()

// c.
// but if we console the same statement in strict mode this will give us undefined
// yeh kahega ki tum window ko acces nahi kr skte
// tum sirf function k andar ki properties ko hi acces kr skte ho

// "use strict"
// function name(){
//     console.log(this)
// }
// name()


// ---------------------------------------------------------------

// 3- In an object method, "this" refers to the object itself.
// Object --> object call --> this operator can access its variable values
// For example:

// const obj = {
//   name: 'My Object',
//   greet: function() {
//     console.log(`Hello, I am ${this.name}`);
//   }
// }

// obj.greet(); // outputs "Hello, I am My Object"

// ---------------------------------------------------------------

// 4- In an arrow function, "this" refers to the context in which the arrow function was defined, rather than the object that is calling the function.
// In arrow function --> strict mode of javascript --> this operator will be undefined
// For example:

// const obj = {
//   name: 'My Object',
//   greet: () => {
//     console.log(`Hello, I am ${this.name}`);
//   }
// }

// obj.greet(); // outputs "Hello, I am undefined"



// ---------------------------------------------------------------

// "this" in noraml function or in arrow function (lexical scoping)

// For example:

"use strict"
console.log(this)

// in strict mode this function of "this" will give undefined
// isme lexical scoping hai mtlab y sirf us block me khelega that why it give undefined
function simpleFunc(num) {
    console.log(this)
    console.log(200 + num)
}

simpleFunc(100)

// arrow function me strict mode pe bhi iska "this" window object ko point krega
// kyuki iski koi lexical scopping nahi hoti thats why it can acces to global object this
const arrowFunc = (num) => {
    console.log(this)
    console.log(200 + num)
}

arrowFunc(100)