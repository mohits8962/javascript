// how to clone array 

// how to concatenate two arrays

// let array1 = ["item1", "item2"];     
// let array2 = ["item1", "item2"];
//both having differnt address

// array1.push("item3");       //so when we push item3 in array 1 then the output will only show in array 1 only

// console.log(array1===array2);  // yaha pe same nahi hoga kyuki array 2 hai to dono k address alag alag honge isiliye output (false)
// console.log(array1)            // ["item1", "item2","item3"]
// console.log(array2)            //  ["item1", "item2"]

// but this method for cloning array is not right (there is another method called slice method we can use that for cloning)

// -------------------------------------------------------------------------------

let array1 = ["item1", "item2"];
// let array2 = array1.slice(0).concat(["item3", "item4"]);          //one more method for cloning (as per speed this is fastest)
// use slice method and put index position from where we have to start then it will go to the end

// -------------------------------------------------------------------

// let array2 = [].concat(array1,["item3", "item4"]);         //one another method
// ek blank array leke usme array 1 ko concat krke usme items add kr skte hai jo bhi krne ho 


// -----------new way----------------------



// by spread operator

// 1. Spread syntax (...) allows an array or string, to be expanded in places 
// 2. spread operator ( ... ) allows us to quickly copy all or part of an existing array or object
//    into another array or object.

// let array2 = [...array1, "item3", "item4"];   // we can add items like that

// let oneMoreArray = ["item3", "item4"]        
// let array2 = [...array1, ...oneMoreArray];     // or we can make new array pust the rest operator it will work same

// console.log(array1===array2); 
// console.log(array1)            
// console.log(array2) 

// ------------------------------------------------
