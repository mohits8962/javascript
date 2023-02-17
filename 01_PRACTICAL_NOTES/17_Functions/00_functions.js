// functions
// jab function likh kr function ko declare krte hai thats called function declaration

// A JavaScript function is defined with the function keyword, followed by a name, followed by parentheses ().
// A set of statements that performs a task or calculates a value, but for a procedure to qualify as a function, it should take some input and return an output
// jo value upar leta hai wo parameter and jo deta hai neeche call krte waqt wo arguments

// ---------------------------------------------------------------------------------------------------------

// Difference between parameters and arguments
// 1. Parameters are local variables inside function (param1, param2)
// 2. parameters are also called labels or identifiers or parameters 

// 1. Arguments are that value which we put when we call functions
// 2. The value which we passed inside the fucntions are called arguments

// ---------------------------------------------------------------------------------------------------------

// there are types of functions
// 1. function statements/function declaration
// 2. function expression
// 3. Anonymous function
// 4. Named function expression
// 5. First class functions 

// ---------------------------------------------------------------------------------------------

// 1. function statements          (it is also known as function declaration)
// this way of writing a function is called function statements

// function a(){
//     console.log("a called");
// }

// ---------------------------------------------------------------------------------------------

// 2. function expression
// we can also assign function as value in variables that called function expressions

// var any = function (){
//     console.log("b called");
// }
// any()

// ---------------------------------------------------------------------------------------------------------

// the difference between function statements and function expressions is hoisting
// because if we call function statement before its declaration then it will called because in local memory it get space there.
// but in function expression it will not called because in local memory pehle variable undefined hota hai uski value code execution phase me assign hoti hai so it treated as any other variables and give undefined 
// uski value usko tb hi pata chalegii jb code line wise execute hoke uske pass tk aayega then only

// ---------------------------------------------------------------------------------------------------------

// 3. Anonymous function
// A function without its name is called anonymous function
// this function dosen't have their own identity means if we run a function without its name then it will give syntax error

// function (){
//     console.log("any string");
// }

// and according to ecmascript kisi bhi function ko without name use nahi kr skte  (so how we do that)
// so anonymous function is used where it can be used as value means as fucntion expression 
// but we dont use anonymous function because ecma script dosen't allow us to do that

// ---------------------------------------------------------------------------------------------

// 4. Named function expression
// named the function expression function 

// var giveName = function giveAnotherName(){
//     console.log("b called");
//     console.log(giveAnotherName);                          // if we want to access function
// }
// giveName()

// if we run giveName() it will print "b called" but if we call giveAnotherName() then it will throw an error that it is not a funtion 
// so here what is happend is giveAnotherName() is here treated as variable so it cannot be access in outer scope but we can access it inside function by console it giveAnotherName


// ---------------------------------------------------------------------------------------------------------

// 5. First class functions     (are also called first class citizens)
// we can pass any function as arguments also that are called fist class functions
// first class functions are nothing its only the ability to use function as value, and can be passed as an arguments to another functions and can be returned as a fucntions

// 1. way 01
// var any = function (param1){
//     console.log(param1);
// }

// any(function (){
//     console.log("any string");
//  })

// 2. way 02

// var any = function (param1){
//     console.log(param1);
// }
// function abc(){
//     console.log("any string");
// }

// any(abc)


// examples --------------------------------------------------------------------------------------------------------------


// function singHappyBirthday(){
//     console.log("happy birthday to you ......");
// }

// function sumThreeNumbers(number1, number2, number3){
//     return number1 + number2 + number3;
// }
// sumThreeNumbers(1, 2, 3)                                   // it will not print output

// function sumThreeNumbers(number1, number2, number3){
//     const sum= number1 + number2 + number3;
//     console.log(sum)
// }
// sumThreeNumbers(1, 2, 3)                                   // this will

// ------------------------------------------------------------------------------------

// isEven
// input : 1 number 
// output : true , false 


// function isEven(number){
//     return number % 2 === 0;
// }
// console.log(isEven(4));

// function isEven(num){
//     return num%2===0
// }
// console.log(isEven(3))

// ------------------------------------------------------------------------------------

// function 
// input : string 
// output: firstCharacter 

// function firstChar(anyString){
//     return anyString[0];
// }
// console.log(firstChar("zbc"));

// function findingString(str){
//     return str[1]
// }
// console.log(findingString("mohit"))

// -----------------------------------------------------------------------------------


// function 
// input : array, target (number)
// output: index of target if target present in array 

// function findTarget(array, target){
//     for(let i = 0; i<array.length; i++){
//         if(array[i]===target){
//             return i;
//         }
//     }
//     return -1;
// }
// const myArray = [1,3,8,90]
// const ans = findTarget(myArray, 90);
// console.log(ans);


// function findingString(str,word){
//     for(let i=0;i<str.length;i++){
//         if(str[i]===word){
//             return i
//         }
//     }
//     return "error"
// }
// const mystr= "priyanshi"
// const result=findingString(mystr,"i")
// console.log(result)
