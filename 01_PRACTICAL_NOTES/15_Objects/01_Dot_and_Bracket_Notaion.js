// difference between dot and bracket notaion

// Dot notation is faster to write and easier to read than bracket notation. However, you can use variables with bracket notation, but not with dot notation. This is especially useful for situations when you want to access a property but don't know the name of the property ahead of time.

// The biggest difference is in loops, where we are iterating through an object. We must use bracket notation, since it can accept a variable. Dot notation can only use exact property names.

var stories = {
    title: "Wee Gillis",
    setting: "Scotland",
    author: "Leaf Munro"
}
var variable = 'title'
console.log(stories.variable)    // undefined
console.log(stories[variable])   // "Wee Gillis"

// In direct references dot notation, stories.title is preferable over, stories['title']. As you have already observed, it is much easier to write and to read.


const key = "email";

const person = {
    name: "harshit",
    age: 22,
    "person hobbies": ["guitar", "sleeping", "listening music"]
}


console.log(person["person hobbies"]);

person[key] = "harshitvashisth@gmail.com";
console.log(person);
