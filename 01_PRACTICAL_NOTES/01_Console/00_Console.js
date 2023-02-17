// console.log can print something on console 
console.log("hello world");
console.log('hello world');
console.log(`hello world`);

// we can use double quote, single quote and backticks to print something on console.


// In JavaScript, the console is an object which provides access to the browser debugging console. The console object provides us with several different methods, like : 
// log()
// error()
// warn()
// clear()
// time() and timeEnd()
// table()
// count()

// ---------------------------------------------------------------------------------
// console.log('abc');
// console.log(1);
// console.log(true);
// console.log(null);
// console.log(undefined);
// console.log([1, 2, 3, 4]); // array inside log
// console.log({ a: 1, b: 2, c: 3 }); // object inside log
// Mainly used to log(print) the output to the console. We can put any type inside the log(), be it a string, array, object, boolean etc. 


// ---------------------------------------------------------------------------------
console.error('This is a simple error');
// This method is used to log error message to the console. Useful in testing of code. By default the error message will be highlighted with red color. 


// ---------------------------------------------------------------------------------
console.warn('This is a warning.');
// Used to log warning message to the console. By default the warning message will be highlighted with yellow color. 


// ---------------------------------------------------------------------------------
console.clear();
// Used to clear the console. The console will be cleared, in case of Chrome a simple overlayed text will be printed like : ‘Console was cleared’ while in Firefox no message is returned. 


// ---------------------------------------------------------------------------------
// console.time() and console.timeEnd() method
console.time('abc');
let fun = function () {
    console.log('fun is running');
}
let fun2 = function () {
    console.log('fun2 is running..');
}
fun(); // calling fun();
fun2(); // calling fun2();
console.timeEnd('abc');
// Whenever we want to know the amount of time spend by a block or a function, we can make use of the time() and timeEnd() methods provided by the JavaScript console object.
// In the above code snippet, we can see that the label is ‘abc’ which is same for both the time() and the timeEnd() method. If we increase the amount of code inside the block defined by these methods, then the time will increase. It is also worth remembering that the time returned to the console will be in milliseconds and might be different each time we refresh the page. 


// ---------------------------------------------------------------------------------
console.table({ 'a': 1, 'b': 2 });
// This method allows us to generate a table inside a console. The input must be an array or an object which will be shown as a table. 


// ---------------------------------------------------------------------------------
// console.count() method
for (let i = 0; i < 5; i++) {
    console.count(i);
}
// This method is used to count the number that the function hit by this counting method. 