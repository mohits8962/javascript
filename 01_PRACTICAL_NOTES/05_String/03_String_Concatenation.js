// Declaring different variables of different data types
let space = ' '
let firstName = 'Mohit'
let lastName = 'sahu'
let country = 'India'
let city = 'Pune'
let language = 'JavaScript'
let age= 22
let job = 'Developer'


// Concatenating using addition operator
let fullName = firstName + space + lastName // concatenation, merging two string together.
console.log(fullName)

let personInfoOne = fullName + '. I am ' + age + '. I live in ' + country // ES5
console.log(personInfoOne)

// Concatenation: Template Literals(Template Strings)
let personInfoTwo = `I am ${fullName}. I am ${age}. I live in ${country}.` //ES6 - String interpolation method

let personInfoThree = `I am ${fullName}. I live in ${city}, ${country}. I am a ${job}. I teach ${language}.`
console.log(personInfoTwo)
console.log(personInfoThree)


// string concatenation 

let string1 = "17";
let string2 = "10";

// if we add + sign before the string then it will convert to number
let newString = +string1 + +string2;
console.log(newString);
console.log(typeof newString);