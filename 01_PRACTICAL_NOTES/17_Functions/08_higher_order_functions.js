// Higher order funnctions
// A function which takes another functions as an argument or return a new function or both is called higher order function.


function x() {                                 // here x is callback function
    console.log("hello world")
}

function y(x) {                                // here y is higher order fucntions cause it takes x as an argument
    x()
}


// examples

// we can write in this type too but this stype is not recommended in interview cause in this code is repeating again and again only the logic changes

// const radius = [3, 1, 2, 4]

// // 01. calculate the area of circle
// const calculateArea = function (radius) {
//     const output = []
//     for (let i = 0; i < radius.length; i++) {
//         output.push(Math.PI * radius[i] * radius[i])
//     }
//     return output
// }

// console.log(calculateArea(radius))


// // 02 calculate the circumference of circle 

// const calculateCircumference = function (radius) {
//     const output = []
//     for (let i = 0; i < radius.length; i++) {
//         output.push(2 * Math.PI * radius[i])
//     }
//     return output
// }

// console.log(calculateCircumference(radius))


// // 03 calculate the diameter of circle

// const calculateDiameter = function (radius) {
//     const output = []
//     for (let i = 0; i < radius.length; i++) {
//         output.push(2 * radius[i])
//     }
//     return output
// }

// console.log(calculateDiameter(radius))




// intead of writing the code in above manner we should write like this 


// we can write the logic in one function and then pass it to the another function as an argument ........in this way we can not repeat ourselves and this is also recommended for interviews .........thats higher order function 

const radius = [3, 1, 2, 4]

const area = function (radius) {
    return Math.PI * radius * radius
}

const circumference = function (radius) {
    return 2 * Math.PI * radius
}

const diameter = function (radius) {
    return 2 * radius
}


const calculate = function (arr, logic) {
    const output = []
    for (let i = 0; i < arr.length; i++) {
        output.push(logic(arr[i]))
    }
    return output
}

console.log(calculate(radius, area))
// console.log(calculate(radius, circumference))
// console.log(calculate(radius, diameter))

// In this way we should write our code 
// 01. pass the logic in one function 
// 02. then pass it to the another function as an argument 
// 03. then that called higher order functions 


// we can also use map function in it because it do the same thing
// 01. It make the blank array and then iterate over an array which was given and then push that to blank array

console.log(radius.map(area))
// console.log(radius.map(circumference))
// console.log(radius.map(diameter))


// --------------------------------------------------------------------------------------------------

// if u see it will same as the above console

// 01. console.log(calculate(radius, area))

// 02. console.log(radius.map(area))

// but in point 1 we pass two arguments and in point 2 we pass only one argument so if we want to make the 1st point similar to the point 2 then we should do this  

Array.prototype.calculate = function (logic) {
    const output = []
    for (let i = 0; i < this.length; i++) {
        output.push(logic(this[i]))
    }
    return output
}

console.log(radius.calculate(area))

// now it will same as the map function
// 01. here this targets the array which is passes (radius.calculate) in this calculate work as a map function and we pass the array in that which is radius here and then pass the other function in it which is area
