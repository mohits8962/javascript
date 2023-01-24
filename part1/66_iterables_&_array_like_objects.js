// iterables 
// Iterable is an object which can be looped over or iterated over with the help of a for loop. Objects like lists, tuples, sets, dictionaries, strings, etc. are called iterables. In short and simpler terms, iterable is anything that you can loop over.

// 1. jispe hum for of loop laga sakein
// 2. string , array are iterable 

// const firstName = "Harshit";
// for(let char of firstName){
//     console.log(char);
// }

const items = ['item1', 'item2', 'item3'];
// for(let item of items){
//     console.log(item);
// }


// array like object 
// An array-like is an object It has indexed access to the elements and a non-negative length property to know the number of elements in it. These are the only similarities it has with an array. Doesn't have any of the Array methods like, push, pop, join, map, etc.

// 1. jinke pas length property hoti hai 
// 2. aur jiko hum index se access kar sakte hai
// example :- string 

// const firstName = "harshit";
// console.log(firstName.length);
// console.log(firstName[2]);