// It's the conversion of a function that accepts a callback into a function that returns a promise. Promisify is a way to wrap a callback-based function in a new function that returns a promise, allowing the original function to be used in a promise-based flow.
// promisify is a wrapper function it return us a new function which is a promisified function


// function getFruits() {
//     let fruits = ['apple', 'orange', 'banana']
//     setTimeout(() => {
//         console.log(fruits)
//     }, 2000)
// }

// // getFruits()


// function promisify(func) {               // wrapper function
//     return function () {
//         return new Promise((resolve, reject) => {
//             try {
//                 func(resolve)
//             }
//             catch (e) {
//                 reject(e)
//             }
//         })
//     }
// }

// const promisified = promisify(getFruits)
// promisified().then(res => console.log(res))


function getFruits() {
    let fruits = ['apple', 'mango', 'grapes']
    setTimeout(() => {
        console.log(fruits)
    }, 2000);
}

// getFruits()

function promisify(param) {
    return function () {
        return new Promise((resolve, reject) => {
            try {
                param(resolve)
            }
            catch (err) {
                reject(err)
            }
        })
    }
}

let promisified = promisify(getFruits)
promisified().then(res => console.log(res))