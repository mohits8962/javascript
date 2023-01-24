// important array methods 

// 1. forEach ---------- The forEach() method executes a provided function once for each array element.
// 2. map
// 3. filter
// 4. reduce


 const numbers = [4,2,5,8];

 // we can also use this method but this is not higher order functions     (6:35:48)

 // by functions

 function multiby2(number, index) {
    // console.log("index is",index)
    // console.log(number*2)
    // console.log(`${number}*2=${number*2}`)
    console.log(`index is ${index} number is ${number}`)
 }
//  multiby2(numbers[0],0)


 // by for loop             // here we call function in this for loop

//  for (let i = 0; i < numbers.length; i++) {
//     // console.log(numbers[i]*2)
//     multiby2(numbers[i],i)     // 0th position pe jo value hai usko multi kr rha hai 
//  }


// by for each

// numbers.forEach(multiby2)       // we can use this in the place of for loop it will do the same as for loop

// -------------------------------------------------------------------------------

// function myFunc(number, index){
//     console.log(`index is ${index} number is ${number}`);
// }

// ------------------------------------------------------------------------------

// FOR EACH 

// numbers.forEach(function(number,index){                        // anonymous function (jis function ka kuch naam nahi hota)
//     console.log(`index is ${index} number is ${number}`);
// });

// numbers.forEach(function(number, index){
//     console.log(number*3, index);
// })


// ---------------------------------------------------------------------------------


const users = [
    {firstName: "harshit", age: 23},
    {firstName: "mohit", age: 21},
    {firstName: "nitish", age: 22},
    {firstName: "garima", age: 20},
]

// users.forEach(function(user){
//     console.log(user.firstName)
// })


// users.forEach((user,index)=>{
//     console.log(user.firstName,index)
// })


// for (const user of users) {
//     console.log(user.firstName)
// }

