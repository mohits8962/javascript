// comparison operator 
// difference between == and === operator
//  In JavaScript, the == operator is used to compare the values of two variables, while the === operator is used to compare the values and types of two variables.

let x = 10;
let y = "10";

console.log(x == y);  // Output: true
console.log(x === y);  // Output: false

// In the example above, x has a value of 10 and is of type number, while y has a value of "10" and is of type string. When we use the == operator to compare x and y, JavaScript converts the string value of y to a number (10) and then compares the two values, which are equal. However, when we use the === operator to compare x and y, JavaScript compares both the values and the types of the two variables. Since the values and types are not equal, the === operator returns false.



// == vs === 
let num1 = 7;
let num2 = "7"
console.log(num1 == num2)
// this is loose equality check...... in this compiler will check only its value thats why this give (true) as output.

console.log(num1 === num2);
// this is strict equality check ....... in this compiler will check type and value both thats why this give (false) as output.



// != vs !==
console.log(num1 !== num2)
// this is strict equality check ....... in this compiler will check type and value both thats why this give (false) as output.

console.log(num1 != num2)
// this is loose equality check ......... in this compiler will check only its value thats why this give (true) as output.