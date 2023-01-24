function about(hobby, favMusician){
    console.log(this.firstName, this.age, hobby, favMusician);
}
const user1 = {
    firstName : "harshit",
    age: 8,   
}
const user2 = {
    firstName : "mohit",
    age: 9,
    
}

// about.call(user1,"guitar", "atif" )



// call
// user1.about.call(user2, "guitar", "atif")

// apply     -------------------- alag alag pass krne ki jagah isko array me pass kr skte hai value 
// about.apply(user1, ["guitar", "bach"]);

// bind     --------------------- y hume function return 
// const func = about.bind(user2, "guitar", "bach");
// func();
