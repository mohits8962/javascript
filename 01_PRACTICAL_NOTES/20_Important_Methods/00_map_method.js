// map method 
// 1. map() creates a new array from calling a function for every array element.
// 2. map() calls a function once for each element in an array.
// 3. map() does not execute the function for empty elements. map() does not change the original array.
// 4. Agar kuch return nahi hora to undefined return hoga
// 5. Map method humesha return krta hai 


const numbers = [3, 4, 6, 1, 8];

// const square = function(number){
//     return number*number;
// }


// map method--------------------

// const squareNumber = numbers.map((number, index)=>{
//     return `index: ${index}, ${number * number}`
//     return index;
// });
// console.log(squareNumber);

const users = [
    { firstName: "harshit", age: 23 },
    { firstName: "mohit", age: 21 },
    { firstName: "nitish", age: 22 },
    { firstName: "garima", age: 20 },
]

const userName = users.map((user) => {
    return user.firstName
})
console.log(userName)