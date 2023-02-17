// The setTimeout function is a way to execute a callback function asynchronously, after a specified amount of time has passed. It works by scheduling the callback function to be executed at a later time, and then returning control to the main program flow.


// explain setTimeout 
// setTimeout(()=>{
//     console.log("i am timeout")
// },1000)

// console.log("i am not timeout")



// exlain settimeout using async
async function delayedHello() {
    console.log("Before delayed")
    await setTimeout(sayHello, 1000)
    console.log("After delayed")
}

delayedHello()

function sayHello() {
    console.log("Hello")
}
