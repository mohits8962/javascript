// block scope vs function scope 

// 1. block scope
// A block scoped variable means that the variable defined within a block will not be accessible from outside the block.

// 2. function scope
// JavaScript has function scope: Each function creates a new scope. Variables defined inside a function are not accessible (visible) from outside the function.


// let and const are block scope
// var is function scope 

// --------------------------------------------------------------------------------


if(true){
    var firstName = "harshit";
    console.log(firstName);
}

console.log(firstName);


// ---------------------------------------------------------------------------------------


function myApp(){
    if(true){
        let firstName = "harshit";
        console.log(firstName);
    }

    if(true){
        console.log(firstName);
    }
    console.log(firstName);
}

myApp();