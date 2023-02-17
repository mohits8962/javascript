// 1. What is callback functions in javascripts?
// We know that functions are first class citizens so we can take a function and pass it into another functions and that function which we passed inside fucntion are called callback functions

// 2. callback functions are so powerfull that this gives us the access to the whole asynchronous world in a synchronous single threaded language.

// 3. with the help of callbacks we can do asynchronous thing in javascript

// --------------------------------------------------------------------------

// ***************example******************

// here callback in parameter is same as return statement
// y hume humara result wapas rega

// callback ka ek standard hota hai ki 
// first error hota hai or next result hota hai

function add(num, callback) {
    // below statement is like callback(error, result)
    callback(null, num + 10)
}

// here first argument is value which is 20
// and second argument is another fucntion which is having two parameter first is error and second is callback
add(20, (error, result) => {
    console.log(error, result)
})



// ***************example******************

// yeh ek callback function hai js ka (settimeout)

console.log("first")

setTimeout(() => {
    console.log("second")
}, 2000)

console.log("third")