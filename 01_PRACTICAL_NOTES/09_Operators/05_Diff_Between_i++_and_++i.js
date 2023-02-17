// In JavaScript, i++ and ++i are both increment operators that increase the value of the variable i by 1. The difference between the two is in the order in which they perform the operation.

// i++ ----- postfix increment operator
// i++ is called the postfix increment operator because it increments the value of i after the current expression has been evaluated.
// This means that if you use i++ in an expression, the value of i will be used in the expression and then incremented after the expression has been evaluated.

// i++ => i=1 => i --> 1 => ++ -->2 => i

// let i = 0;
// console.log(i++); // Output: 0
// console.log(i); // Output: 1


// ++i ---------- prefix increment operator
// On the other hand, ++i is called the prefix increment operator because it increments the value of i before the current expression is evaluated.
// This means that if you use ++i in an expression, the value of i will be incremented and then used in the expression.

// ++i => i=1 => ++ --> 2 => i

// let i = 0;
// console.log(++i); // Output: 1
// console.log(i); // Output: 1
