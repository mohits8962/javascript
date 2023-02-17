// default parameters 
// Default function parameters allow named parameters to be initialized with default values if no value or undefined is passed.


// sum of any (number + undefined) give the output (NaN)

// Before ES2015 we use this type to make the value of b (if we only have one parameters)

// function addTwo(a,b){
//     if(typeof b ==="undefined"){
//         b = 0;
//     }
//     return a+b;
// }


// -----------------------------------------------------------------------------------



// new method for default parameters

function addTwo(a, b = 0) {           // we can set the value direct in parameters 
    return a + b;
}
const ans = addTwo(4, 8);
console.log(ans);