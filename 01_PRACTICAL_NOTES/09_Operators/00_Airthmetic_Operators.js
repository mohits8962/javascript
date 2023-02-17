// JavaScript Arithmetic Operators are the operators that operate upon the numerical values and return a numerical value. There are many operators in JavaScript. 

// ----------------------------------------------------------------

// Addition (+) 
// The addition operator takes two numerical operands and gives their numerical sum. It also concatenates two strings or numbers.

// // Number + Number => Addition
// let x = 1 + 2
// console.log(x)

// // Number + String => Concatenation
// let y = 5 + "hello"
// console.log(y)

// ----------------------------------------------------------------

// Subtraction (-) 
// The subtraction operator gives the difference of two operands in the form of numerical value.

// // Number - Number => Subtraction
// let x = 10 - 7
// console.log(x)

// let y = "Hello" - 1
// console.log(y)

// ----------------------------------------------------------------

// Multiplication (*) 
// The multiplication operator gives the product of operands where one operand is a multiplicand and another is multiplier.

// Number * Number => Multiplication
// let x = 3 * 3
// let y = -4 * 4
// console.log(x)
// console.log(y)


// let a = Infinity * 0
// let b = Infinity * Infinity
// console.log(a)
// console.log(b)

// let z = 'hi' * 2
// console.log(z)       // NaN

// ----------------------------------------------------------------

// Division (/) 
// The division operator provides the quotient of its operands where the right operand is the divisor and the left operand is the dividend.

// Number / Number => Division
// let x = 5 / 2
// let y = 1.0 / 2.0
// console.log(x)
// console.log(y)


// let a = 3.0 / 0
// let b = 4.0 / 0.0
// console.log(a)
// console.log(b)

// let z = 2.0 / -0.0
// console.log(z)

// Output:
// 2.5
// 0.5
// Infinity
// Infinity
// -Infinity


// ----------------------------------------------------------------

// Modulus (%) 
// The modulus operator returns the remainder left over when a dividend is divided by a divisor. The modulus operator is also known as the remainder operator. It takes the sign of the dividend.

// Number % Number => Modulus of the number

// let x = 9 % 5
// let y = -12 % 5
// let z = 1 % -2
// let a = 5.5 % 2
// let b = -4 % 2
// let c = NaN % 2

// console.log(x)
// console.log(y)
// console.log(z)
// console.log(a)
// console.log(b)
// console.log(c)

// ----------------------------------------------------------------

// Exponentiation (**) 
// The exponentiation operator gives the result of raising the first operand to the power of the second operand. The exponentiation operator is right-associative. 

// Number ** Number => Exponential of the number

// let x = -4 ** 2 // This is an incorrect expression
// let y = -(4 ** 2)
// let z = 2 ** 5
// let a = 3 ** 3
// let b = 3 ** 2.5
// let c = 10 ** -2
// let d = 2 ** 3 ** 2
// let e = NaN ** 2

// console.log(y)
// console.log(z)
// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)
// console.log(e)

// Output:

// -16
// 32
// 27
// 15.588457268119896
// 0.01
// 512
// NaN

// ----------------------------------------------------------------

// Increment (++) 
// The increment operator increments (adds one to) its operand and returns a value.

// --- If used postfix with the operator after the operand (for example, x++), then it increments and returns the value before incrementing.
// --- If used prefix with the operator before the operand (for example, ++x), then it increments and returns the value after incrementing.

// // Postfix
// var a = 2;
// b = a++; // b = 2, a = 3

// // Prefix
// var x = 5;
// y = ++x; // x = 6, y = 6

// console.log(a)
// console.log(b)
// console.log(x)
// console.log(y)


// ----------------------------------------------------------------

// Decrement (–) 
// The decrement operator decrements (subtracts one from) its operand and returns a value.

// --- If used postfix, with operator after operand (for example, x–), then it decrements and returns the value before decrementing.
// --- If used prefix, with the operator before the operand (for example, –x), then it decrements and returns the value after decrementing.

// // Prefix
// var a = 2;
// b = --a;

// // Postfix
// var x = 3;
// y = x--;

// console.log(a)
// console.log(b)
// console.log(x)
// console.log(y)

// ----------------------------------------------------------------

// Unary (-) 
// This is a unary operator i.e. it operates on a single operand. It gives the negation of an operand.

// var a = 3;
// b = -a;

// // Unary negation operator
// // can convert non-numbers
// // into a number
// var x = "3";
// y = -x;

// console.log(a)
// console.log(b)
// console.log(x)
// console.log(y)

// ----------------------------------------------------------------

// Unary (+) 
// This is a way to convert a non-number into a number. Although unary negation (-) also can convert non-numbers, unary plus is the fastest and preferred way of converting something into a number, because it does not perform any other operations on the number.

// let a =  +4    
// let b = +'2'  
// let c = +true 
// let x = +false
// let y = +null
      
// console.log(a)
// console.log(b)
// console.log(c)
// console.log(x)
// console.log(y)