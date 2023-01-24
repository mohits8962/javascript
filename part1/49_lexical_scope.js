// A scope means where you can access any specific variable or any function in our code



// lexical scope
// A lexical scope in JavaScript means that a variable defined outside a function can be accessible inside another function defined after the variable declaration. But the opposite is not true; the variables defined inside a function will not be accessible outside that function.


// function a(){
//     c()
//     function c(){
//         console.log(b)
//     }
// }
// var b=10
// a()



const myVar = "value1";

function myApp(){

    // const myVar="value1"

    function myFunc(){
        // const myVar = "value59";                        // is case me y print krega (value 59)         
        const myFunc2 = () =>{
            console.log("inside myFunc", myVar);           // or agar iske andar ka my var nahi hai to y bahar waala my var print kr dega agar hoga to myapp k anadar
        }
        myFunc2();
    }
    
    console.log(myVar);
    myFunc();
}

myApp();