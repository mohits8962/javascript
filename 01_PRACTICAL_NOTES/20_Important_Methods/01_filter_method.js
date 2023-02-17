// filter method 

// 1. The filter() method creates a new array filled with elements that pass a test provided by a function.
// 2. The filter() method does not execute the function for empty elements.
// 3. The filter() method does not change the original array.



const numbers = [1,3,2,6,4,8];

const evenNumbers = numbers.filter((number)=>{
    return number % 2 === 0;
});
console.log(evenNumbers);