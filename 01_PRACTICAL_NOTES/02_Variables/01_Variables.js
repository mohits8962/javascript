// intro to variables

// variables can be change
// variables are containers for storing data
// variables can store some information
// we can use that information later
// we can change that information later
// variables are case sensitive (use camelCase)

// declare a variable 

var firstName = "Harshit";

// use a variable 
console.log(firstName);

// change value
// 2nd time we dont have to declare var

firstName = "Mohit";

console.log(firstName);


// The var, let, and const keywords are used to declare variables in JavaScript. var is the traditional way to declare variables, but it has some drawbacks, such as the ability to redeclare variables and the lack of block-level scope.
// thats why es6 introduces two more methods to declare variables.


// var Variable
// Var variable is the old way to declare a variable in javascript; var variable has the function scope, But having global scope when it is declared outside the function.
// When we declare a var variable, it gets hoisted to the top of the scope and gets assigned the value of undefined. 

// Let variable
// The let variable has block scope, meaning the let variable will be accessible only inside the block it's declared if we try to access outside of the scope, it will show a Reference Error. let variable didn't allow re-declaration of the variable, but it allowed us to update the variable
// let variable also get hoisted to the top of the scope But does not get assigned any value

// Const variable
// Const variable also has the Block scope like let variable, const variable also can't be accessed outside of the scope. Const variables can't be updated or re-declared; this behavior of const variables helps us to write error-free code.
// The const variable also gets hoisted to the top of the scope But does not get initialize any value
