// array destructuring 
// The destructuring assignment syntax makes it possible to unpack values from arrays, or properties from objects, into distinct variables.


const myArray = ["value1", "value2", "value3","value4"];


// let myvar1 = myArray[0];
// let myvar2 = myArray[1];
// console.log("value of myvar1", myvar1);
// console.log("value of myvar2", myvar2);

// this is not right method to use

// -------------------------------------------------------------------------------------------------

// Desturcturing

// let [myvar1, ,myvar2] = myArray;        // isse skip kr skte hai ek index ko
// let [myvar1,] = myArray;           // agar ek hi value hai or hum dono print kr wate hai (default value aayegii mtlab undefined)


// agar mujhe value 3 and value 4 new array me print krna hai to 
// let myNewArray=myArray.slice(2)



// by using rest operator
let [myvar1, myvar2, ...myNewArray] = myArray;    
console.log("value of myvar1", myvar1);
console.log("value of myvar2", myvar2);
console.log(myNewArray);