// closures
// closure : 30-40%
// analyse : 70-80%
// real example : 100%


// function can return functions
// here outerfunction is returning the innerfunction so if we console the ans then it will print the whole innerfunction ....so if we call the ans then it will call the innerfunction because ans store the innerfunction.

// function outerFunction(){
//     function innerFunction(){
//         console.log("hello world")
//     }
//     return innerFunction;
// }

// const ans = outerFunction();
// // console.log(ans);
// ans();


function printFullName(firstName, lastName){
    function printName(){
        console.log(firstName, lastName);
    }
    return printName;
}

const ans = printFullName("harshit", "sharma");
// console.log(ans);
ans();

