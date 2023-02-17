//Closure :

// Function bundled with its lexical environment is known as a closure. Whenever function is returned, even if its vanished in execution context but still it remembers the reference it was pointing to. Its not just that function alone it returns but the entire closure.

// closure is basically a function which is bundled together with its lexical enviorment or we can say that closure with its lexical enviorment


// 01
// function x(){
//     let x=29
//     function y(){
//         console.log(x)
//     }
//     y()
// }
// x()                         // output here is 29



// 02                      (we can also return the function)
// function x(){
//     let x=29
//     function y(){
//         console.log(x)
//     }
//     return y
// }
// var z=x()
// console.log(z)              // output here is funtion y

// z()                        // output here is 29



// 1. functions are so cool that when they return from another functions they still remember its lexical scope thats why output here is 29


// we can also return above example like this 

// function x(){
//     let x=29
//     return function y(){
//         console.log(x)
//     }
// }
// var z=x()
// console.log(z)

// z()


//another example

// function x() {
//     var a = 7
//     function y() {
//         console.log(a)
//     }
//     a = 100                           //adding new point here..........reference will change to 100 here
//     return y
// }
// var z = x()
// console.log(z)

// z()                                // now it will give the output 100

//1. they still remember where they actually present so in the above example y remembers its lexical scope
//2. not just function code was return but the closure was written (means function that is bundled together with its lexical scope)
//3. or we can say that closure enclosed function along with its lexical enviorment that was written
//4. it will remember its reference to a (not its value) but its refence to



// Another example

function z() {
    var b = 900
    function x() {
        var a = 7
        function y() {
            console.log(a, b)
        }
        y()                                // here y forms a closure along with x and z
    }
    x()
}
z()                                 // output here is a=7 and b=900


// In this example here we are trying to access its parent scope and parents, parents scope also
// And if we return y here then it will still remember its references (they would have retained means they will still remember)

