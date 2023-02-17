// includes(): It takes a substring argument and it check if substring argument exists in the string. includes() returns a boolean. It checks if a substring exist in a string and it returns true if it exists and false if it doesn't exist.
let string = 'I am FullStack Developer'
console.log(string.includes('Developer'))     // true
console.log(string.includes('developer'))     // false
console.log(string.includes('Stack'))     // true
console.log(string.includes('StaCk'))     // false
console.log(string.includes('java'))     // false
console.log(string.includes('am'))     // true

let country = 'Finland'
console.log(country.includes('fin')) // false
console.log(country.includes('Fin')) // true
console.log(country.includes('land')) // true
console.log(country.includes('Land')) // false