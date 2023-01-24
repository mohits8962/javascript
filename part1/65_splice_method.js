// splice method 
// The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place

// method
// start , delete , insert 


const myArray = ['item1', 'item2', 'item3'];

// delete
// const deletedItem = myArray.splice(1, 2);
// console.log("delted item", deletedItem);

// insert 
// myArray.splice(1, 0,'inserted item');


// insert and delete 
const deletedItem = myArray.splice(1, 2, "inserted item1", "inserted item2")
console.log("delted item", deletedItem);
console.log(myArray);