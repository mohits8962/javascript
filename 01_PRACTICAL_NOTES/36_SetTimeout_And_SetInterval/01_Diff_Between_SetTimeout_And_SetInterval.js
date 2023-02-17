// What are set timeout and set interval functions and what is the difference between them?

// Answer-  setTimeout and setInterval are functions that are available in JavaScript and are used to schedule a function to be executed after a certain amount of time has passed or to execute a function repeatedly with a certain amount of time in between each execution.

// The main difference between setTimeout and setInterval is that setTimeout executes a function only once, while setInterval executes a function repeatedly.

// Here is an example of how to use setTimeout:
function sayHello() {
  console.log("Hello!");
}

setTimeout(sayHello, 1000); // Outputs "Hello!" after 1000 milliseconds (1 second)


// Here is an example of how to use setInterval:
function sayHello() {
  console.log("Hello!") 
}

setInterval(sayHello, 1000); // Outputs "Hello!" every 1000 milliseconds (1 second)

// Both setTimeout and setInterval return a value that can be used to cancel the scheduled function execution by calling the clearTimeout or clearInterval function, respectively.
