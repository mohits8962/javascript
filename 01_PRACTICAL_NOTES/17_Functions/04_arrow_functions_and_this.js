// arrow functions 
// arrow function ka this ni hota ....arrow function this apne surroundiing se leta hai.....mtlab undefined dega 

const user1 = {
    firstName : "harshit",
    age: 8,
    about: () => {
        console.log(this.firstName, this.age);
    }   
}

user1.about(user1);

// arrow function me this window hota hai 