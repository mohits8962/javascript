// how to iterate object 


const person = {
    name: "harshit",
    age: 22,
    "person hobbies": ["guitar", "sleeping", "listening music"]
}


// to object iterate we use two methods

// 1. for in loop 
// 2. Object.keys 


// for in loop ------------------------------

// for(let key in person){
//     // console.log(`${key} : ${person[key]}`);               // template string
//     console.log(key," : " ,person[key]);                     // without template string
// }


// Object.keys-------------------------------------

// console.log(typeof (Object.keys(person)));                   // object.keys method
// const val = Array.isArray((Object.keys(person)));            // method to check if its array or not
// console.log(val);


// for(let key of Object.keys(person)){
//     console.log(person[key]);
// }