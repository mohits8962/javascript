// Using Objects Literal
// const obj = {
//   key1: 'value1',
//   key2: 'value2',
//   key3: 'value3'
// };

// ----------------------------------------------------------------------------------

// create a object with constructor 
// function vehicle(name, maker, engine) {
//     this.name = name
//     this.maker = maker
//     this.engine = engine
// }

// // new keyword to create aan object
// let car = new vehicle("GT", "BMW", "1998c")
// // property accesors
// console.log(car.name)

// ----------------------------------------------------------------------------------

// creating object by using object. create method
// const coder = {
//     isStudying: false,
//     printIntroduction: function () {
//         console.log(`my name is ${this.name}. am i studying?: ${this.isStudying}`)
//     }
// }

// const me = Object.create(coder)
// me.name = "Mukul"
// me.isStudying = true
// me.printIntroduction()
// console.log(me)


// ----------------------------------------------------------------------------------

// using es6 class

class Vehicle {
    constructor(name, maker, engine) {
        this.name = name
        this.maker = maker
        this.engine = engine
    }
}

let car1 = new Vehicle("GT", "BMW", "1998c")
console.log(car1)