// arrow functions
// An arrow function expression is a compact alternative to a traditional function expression,
// but is limited and can't be used in all situations.
// 1. if we only take one parameter then there is no need to use parenthesis (only when take one input)
// 2. Agar ek hi line me return kr raha hai to usko ek hi leine me likh skte hai (x => x % 2 === 0)


// const singHappyBirthday = function(){
//     console.log("happy birthday to you ......");
// }

const singHappyBirthday = () => {
    console.log("happy birthday to you ......");
}

singHappyBirthday();

// -----------------------------------------------------------------------------------------------

const sumThreeNumbers = (number1, number2, number3) => {
    return number1 + number2 + number3;
}

const ans = sumThreeNumbers(2,3,4);
console.log(ans);

// ----------------------------------------------------------------------------------------------

// const isEven = function(number){
//     return number % 2 === 0;
// }

const isEven = number => number % 2 === 0;
console.log(isEven(4));

// ----------------------------------------------------------------------------------

const firstChar = anyString => anyString[0];
console.log(firstChar("harshit"));

// -------------------------------------------------------------------------------------------


function findTarget(array, target) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === target) {
            return i;
        }
    }
    return -1;
}
