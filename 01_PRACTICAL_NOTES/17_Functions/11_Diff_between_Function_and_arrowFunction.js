// FUNCTION
// 1- In a regular function, an argument will give you a list of parameters passed in function.
// 2- In regular functions, we always have to return any value.
// 3- In a regular function, the value of this is determined by the calling context

// 1.
// first difference is synax
// function Es5() {
//     console.log("Es5 Function")
// }
// Es5()

// 2.
// second we can pass the argument but should be curly brases
// function Es5(a, b) {
//     console.log("Es5 Function", a, b)
// }
// Es5(10, 20)

// 3.
// lets say we have only one argument we have to put the proper syntax
// function Es5(a) {
//     console.log("Es5 Function", a)
// }
// Es5(10)

// 4.
// lets say if we dont have argument we still need to maintain syntax
// function Es5() {
//     console.log("Es5 Function")
// }
// Es5()

// 5.
// In this hoisting will work if we call the function before its declaratioon
// Es5()
// function Es5() {
//     console.log("Es5 Function")
// }

// *********************************************************************

// ARROW FUNCTION
// 1- In the arrow function, the argument is not defined.
// 2- In the arrow function, we can skip the return keyword.
// 3- In an arrow function, the value of this is determined by the surrounding lexical scope.

// 1.
// first difference is synax
// const Es6 = () => {
//     console.log("Es6 arrow Function")
// }
// Es6()

// 2.
// second we can pass the argument but if there is only one line we can skip the curly braces part
// const Es6 = (a, b) => console.log("Es6 Function", a, b)
// Es6(10, 20)

// 3.
// but in this if we have one argument we can skip the parenthersis part too
// no need to pass parenthesis if we pass only one argument
// const Es6 = a => console.log("Es6 Function", a)
// Es6(10)

// 4.
// here if dont have argument we can pass underscore and it will work
// const Es6 = _ => console.log("Es6 Function")
// Es6()

// 5.
// But in arrow fucntion we get error if we call it before its declaration
// hoisting will not work in arrow function
// because here we are using function expression like we are putting function in variable so when we call the let and const variable before its declaration it will go in initialize state and give us error 
// 'Cannot access 'Es6' before initialization'

// Es6()
// const Es6 = _ => console.log("Es6 Function")
