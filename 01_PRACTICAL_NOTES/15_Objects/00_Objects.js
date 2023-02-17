// objects 
// The Object type represents one of JavaScript's data types. it is basically a collection of key value pairs.

// 1. objects are refrence datatypes
// 2. arrays are good but not sufficient 
// 3. for real world data 
// 4. objects store key value pairs 
// 5. objects don't have index


// JavaScript objects are collections of key-value pairs. They are used to store data and can be created using object literals or the Object constructor. The value can consist of properties and methods and contain all other javascript data types, such as string, boolean, and numbers.

// const obj = {
//   key1: 'value1',
//   key2: 'value2',
//   key3: 'value3'
// };

// We can also create an object using the Object constructor function:

// const obj = new Object();
// obj.key1 = 'value1';
// obj.key2 = 'value2';
// obj.key3 = 'value3';

// how to create objects 

// const person = {name:"Harshit",age:22};
const person = {
    name: "harshit",
    age: 22,
    hobbies: ["guitar", "sleeping", "listening music"]
}
// console.log(person);

// --------------------------------------------------------------

// to search for a key or value

if("name" in person){
    console.log(person.name)
}

if(person.hasOwnProperty("hobbies")){
    console.log(person.hobbies)
}

// --------------------------------------------------------------

// how to access data from objects 
// console.log(person["name"]);
// console.log(person["age"]);
// console.log(person.hobbies);

// --------------------------------------------------------------

// // how to add key value pair to objects
// person["gender"] = "male";          //bracket notation
// person.gender = "male"              //dot notation
// console.log(person);