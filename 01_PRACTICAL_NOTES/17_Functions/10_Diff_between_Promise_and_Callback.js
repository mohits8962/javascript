// **JavaScript Callback**	
// Syntax	
// The syntax is difficult to understand.	

// Error handling	
// Error handling may be hard to manage.	

// Callback hell	
// It may create callback hell.	


// **JavaScript Promise**
// Syntax		
// The syntax is user-friendly and easy to read because of then and catch.

// Error handling		
// Error handling is easier to manage using catch block.

// Callback hell		
// It resolves callback hell.

// -------------------------------------------------------------------------------------------------

// A callback function is passed as an argument  to another function whereas
// promise is something that is achieved or completed in the future.
// In javascript a promise is an object and we use a promise constructor to initialize a promise.

// callback

// function add(num, callback) {
//     callback(null, num + 10)
// }

// add(20, (error, result) => {
//     console.log(error, result)
// })

// ---------------------------------------------------

// promise
// this is not same as callback
// promise will wait for the task to complete

// function add(num) {
//     return new Promise((resolve, reject) => {
//         resolve(num + 10)
//     })
// }

// console.log("first")

// add(20)
//     .then((res) => {
//         console.log('result is:', res)
//     })
//     .catch((error) => {
//         console.log("error is:", error)
//     })

// console.log("third")

// ---------------------------------------------------

// same promise in async to understand well
// async function add(num) {
//     return num + 10
// }

// console.log("first")
// console.log(add(20))
// console.log("third")

// but now to open a promise
// before we are using .then but now in async we have this thing called await
// same above code using await

async function add(num) {
    return num + 10
}

console.log("first")

async function result(){
    let res = await add(20)
    console.log(res)
}
result()

console.log("third")
