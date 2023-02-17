function about(hobby, favMusician) {
    console.log(this.firstName, this.age, hobby, favMusician);
}

const user1 = {
    firstName: "harshit",
    age: 8,
}

const user2 = {
    firstName: "mohit",
    age: 9,

}

// about.call(user1, "guitar", "atif")
// about.call(user2, "guitar", "atif")

// about.apply(user1, ["guitar", "bach"]);

// const func = about.bind(user2, "guitar", "bach");
// this will give output
// func();

// this will give function
// console.log(func)



// call
// Using the call method, we can invoke a function, by passing a value that will be treated as this inside it.

// const obj = {
//     myName: "john",
//     printName: function () {
//       console.log(this.myName);
//     },
//   };

//   obj.printName(); // john

//   const newObj = {
//     myName: "peter",
//   };

//   obj.printName.call(newObj); //peter



// apply     -------------------- alag alag pass krne ki jagah isko array me pass kr skte hai value 
// The apply function is very similar to the call function. The only difference between call and apply is the difference in how arguments are passed.

// call — we pass arguments as individual values, starting from 2nd argument
// apply — in the case of apply, the additional arguments will be passed as an array.

// function sayHello(greet, msg) {
//     console.log(`${greet} ${this.name} ! ${msg}`);
// }

// const obj = {
//     name: "peter",
// };
// sayHello.call(obj, "Hello", "Good Morning"); // Hello peter ! Good Morning
// sayHello.apply(obj, ["Hello", "Good Morning"]); // Hello peter ! Good Morning



// bind     --------------------- y hume function return krta hai
// Unlike call and apply method, bind will not invoke the function directly, instead, it changes this value inside the function and returns the changed function instance.

// We can invoke the returned function later point


function sayHello() {
    console.log(this.name);
}

const obj = { name: "peter" };
const newFunc = sayHello.bind(obj); // it won't invoke, it just returns back the new function instance
newFunc(); // peter

// passing additional arguments:
// passing additional arguments in bind works similar to the call method, we can pass additional arguments as individual values starting from the 2nd argument of the bind method.

// function sayHello(greet) {
//     console.log(`${greet} ${this.name}`);
//   }
  
//   const obj = { name: "peter" };
//   const newFunc = sayHello.bind(obj, "Hello");
//   newFunc(); // Hello peter




// NOTE: if we don’t pass any value/passing null while calling call, apply, bind methods means, then this inside calling function will points to the global object.

// function sayHello() {
//     // executing in browser env
//     console.log(this === window);
//   }
//   sayHello.call(null); // true
//   sayHello.apply(); // true
//   sayHello.bind()(); // true


// NOTE:
// we cannot use call, apply, and bind, methods on Arrow functions to change the value of this, because arrow functions don’t have their own this context,
// this inside arrow function will point to the outer/parent function in which it is present.
// So applying these methods on the arrow function will not make any effect.