// rest parameters
// The rest parameter syntax allows a function to accept an indefinite number of arguments as an array
// The rest operator ( ... ) instructs the computer to add the rest of the user-supplied values into an array.



function myFunc(a,b,...c){                    // use rest operator here
    console.log(`a is ${a}`);
    console.log(`b is ${b}`);
    console.log(`c is`, c);
}

myFunc(3,4,5,6,7,8,9);


// ----------------------------------------------------------------------------

 
// function addAll(...numbers) {
//     let total =0
//     for (let number of numbers) {
//         total = total + number
//     }
//     return total
// }
// const ans = addAll(4,5,6,7,8,9,10,1)
// console.log(ans)