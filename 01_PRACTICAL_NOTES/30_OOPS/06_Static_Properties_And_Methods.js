// class Config {
//     static dbUser = "userName"
//     static dbPassword = "secret"
//     static apiToken = "abcd"
// }

// // hum static properties ko aise directiy class k bahar access nahi kr skte
// // so to access the static properties we put the class name 
// // and use the . method to access the properties
// console.log(Config.dbUser)

// =============================================================

class User {
    static id = 1
    static cache = {
        1: "some value"
    }

    constructor(name, age, income = 0) {
        this.name = name
        this.age = age
        this.income = +income
        this.id = User.id++
    }

    // // yeh ek utility function bana rhe yaha
    // static compareByAge(user1, user2) {
    //     return user1.age - user2.age
    // }

    // static compareByIncome(user1, user2) {
    //     return user1.income - user2.income
    // }

    // yaha pe this tabhi kaam krega 
    // jb hum static method me static property access krenge
    // ***bina static method me hume class name daal k get krna pdega***
    // checkCache() {
    //     console.log(User.cache)
    // }

    // static block
    // mtlab hume jab bhi koi static method call krenge tb y har baar call hoga
    static {
        console.log("Initialized")
    }

    static hasInCache() {
        console.log(this.cache)
    }


}

const user1 = new User("Rakesh", 30, 5000)
const user2 = new User("Ramesh", 40, 10000)
const user3 = new User("Suresh", 20, 7000)

const users = [user1, user2, user3]
User.hasInCache()
// user1.checkCache()
// users.sort(User.compareByIncome)
console.log(users)



// example

// yaha pe yeh static method jise hum class naam k call kr rhe hai
// basically random ek utility function hai Math class ki

// Math.random()
// Object.hasOwnProperty()