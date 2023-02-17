// What is the difference between map and filter?
// Answer-  

// MAP
// map and filter are both functions in JavaScript that can be used to transform arrays.

// map is a higher-order function that applies a given function to each element of an array and returns a new array with the modified elements. 

const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(x => x * 2);
console.log(doubled)
console.log(numbers)
// doubled is [2, 4, 6, 8, 10]

// ------------------------------------------------------------

// FILTER
// filter is also a higher-order function that creates a new array with all elements that pass a test implemented by the provided function. 

const numberss = [1, 2, 3, 4, 5];
const evens = numberss.filter(x => x % 2 === 0);
console.log(evens)
console.log(numberss)
// even is [2, 4]
