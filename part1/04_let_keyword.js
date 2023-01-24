// let keyword 
// we can declare variable with let too
// declare variable with let keyword 


// var firstName = "harshit";
// var firstName = "Mohit";
// console.log(firstName);
// in  var this will run with double declaration bcoz var is global variable


// but

// let firstName = "harshit";
// let firstName = "Mohit";
// console.log(firstName);
// this will show SyntaxError: Identifier 'firstName' has already been declared

let firstName = "harshit";
firstName = "Mohit";
console.log(firstName);
// this is correct (we dont have two declare 2nd times)


// block scope vs funtion scope