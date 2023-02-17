// NaN
// NaN stands for "Not a Number." It is a special value in JavaScript that represents a number that is not a number. It is typically returned when an operation that expects a number as a result fails to produce a valid number. For example:

Number("hello") // returns NaN
Math.sqrt(-1) // returns NaN

// You can use the isNaN() function to check if a value is NaN. For example:

console.log(isNaN(NaN)) // returns true
console.log(isNaN(123)) // returns false
console.log(isNaN("hello")) // returns true