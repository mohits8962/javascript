// callback functions 

// 1. What is callback functions in javascripts?
// We know that functions are first class citizens so we can take a function and pass it into another functions so that function that is passed inside fucntion are called callback functions

// 2. callback functions are so powerfull that this gives us the access to the whole asynchronous world in a synchronous single threaded language. 

// 3. with the help of callbacks we can do asynchronous thing in javascript

// function x(y){

// }

// x(function y(){

// })

// -------------------------------------------------------------------------------------------------------------
// 4. why this function are known as callback functions
// we can say that we can call this fucntions sometimes else in our code
// so we can give the responsibility of one function to another function (means giving responsibility of y to x)
// now its upto x where it want to call the function y
// now that is why we can say that this function y call sometimes later in our code that is why it is known as callbacks functions
// -------------------------------------------------------------------------------------------------------------


// now lets see how it is use in asynchronous --------for that 

// example:--

// setTimeout(function(){
//     console.log("timer")
// },5000)                                          // this will print after 5 milliseconds

// function x(y){
//     console.log("x")
//     y()
// }

// x(function y(){
//     console.log("y")
// })

// output is x then y and after 5 milliseconds timer

// 1. this set timeout functions takes callback functions
// 2. means it is passed on to set timeout but call later in code and will pass after certain amount of time


// -------------------------------------------------------------------------------------------------------------------
// 1. javascript has just one callstack and we can call it as a *****main thread*****
// 2. so everything which is executed inside our page is executed through the call stack only
// 3. so if any operation blocks this call stack that is known as ****blocking the main thread****
// --------------------------------------------------------------------------------------------------------------------------

// note#
// 1. we should never block our main code means call stack
// 2. we should use async operations for the things which takes times
// -----------------------------------------------------------------------------------------------------------------

// note#
// 1. so if javascript did not have first class functions
// 2. and if did not have callback fucntions
// 3. and could not have pass the functions to another functions

// we could not been able to use asynchronous fucntions
// ------------------------------------------------------------------------------------------------------------------------


// Another example

// function attachEventListner(){
//     let count = 0
//     document.getElementById("click me").addEventListener("click",function xyz(){
//         console.log("button clicked", ++count)
//     })
// }

// 1. here we use callback functions in addeventlistner
// 2. this forms closure with its lexical enviorment count
// 3. here it has haviing two scope that is ----1. lexical scope which is count -------2. and the global scope
// 4. eventlistner are heavy because ir cannot free up its memory
// -------------------------------------------------------------------------------------------------------

// note#
// 1. when event listner run it cannot free its memory thats why they are heavy
// 2. so in this case it cannot free up this memory that is why event listner are heavy
// 3. so that is the reason why are we have to remove the eventlistner

// note#
// good practise is to free up space
// so if we remove this event listner all the variables held by this closure will be ****garbage collected***

// note#
// pages me aise abhut se event listner hote hai jinme callback functions bhi hote hai so because it didnt free up its memory its get heavy so the good practise is to remove the event listner kyuki agar remove nahi krenge to page heavy ho jayega jisse website slow ho jayegi

// ----------------------------------------------------------------------------------------------------------------------------

// function ko as a input hum kisi function me call kr skte hai 

// A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.


// function myFunc2(name){
//     console.log("inside my func 2")
//     console.log(`your name is ${name}`);
// }


// function myFunc(callback){
//     console.log("hello there I am a func and I can..")
//     callback("harshit");
// }


// myFunc(myFunc2);



  