// A promise is a JavaScript object that represents the eventual completion or failure of an asynchronous operation. They are just like placeholders to store a future value that will be returned after some time.
// Promises have three states: pending, fulfilled, and rejected.
// A promise starts in the pending state, and it is either fulfilled with a value or rejected with a reason when the asynchronous operation is completed.


// let promise = new Promise(function (resolve, reject) {
//     //do something
// });


// Example 1: Program with a Promise

let count = true

let countValue = new Promise(function (resolve, reject) {
    if (count) {
        resolve("there is a count value")
    }
    else {
        reject("there is no count value")
    }
})
 
console.log(countValue)
countValue.then(
    function successValue(result) {
        console.log("promise is resolved")
    }
)
countValue.catch(
    function errorValue(result) {
        console.log("promise is rejected")
    }
)
