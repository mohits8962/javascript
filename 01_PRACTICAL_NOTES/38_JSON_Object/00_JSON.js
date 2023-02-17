// JSON (JavaScript Object Notation) is a lightweight data interchange format that is easy for humans to read and write and easy for machines to parse and generate. 
// It is based on a subset of the JavaScript programming language, so it can be used with most programming languages. It is commonly used for transmitting data in web applications. 

// Both JSON.parse and JSON.stringify are built-in functions of the global JSON object in JavaScript.


// JSON.parse
// The JSON.parse function is used to parse a JSON string and convert it into a JavaScript object.
// It takes a JSON string as input and returns a JavaScript object constructed from the JSON string.

// const jsonString = '{"name": "John", "age": 30, "city": "New York"}';
// console.log(typeof jsonString)

// const person = JSON.parse(jsonString)
// console.log(typeof person)
// console.log(person)



// JSON.stringify
// The JSON.stringify function is used to convert a JavaScript object or value to a JSON string. 
// It takes a JavaScript object or value as input and returns a JSON string representation of that object.

const person = { name: 'John', age: 30, city: 'New York' };
console.log(typeof person)

const jsonString = JSON.stringify(person)
console.log(typeof jsonString)
console.log(jsonString); // outputs '{"name":"John","age":30,"city":"New York"}' 



