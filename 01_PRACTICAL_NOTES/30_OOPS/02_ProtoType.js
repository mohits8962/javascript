function BankAccount(customerName, balance = 0) {
    this.customerName = customerName
    this.accountNumber = Date.now()
    this.balance = balance

    // // hum methods bhi provide kra skte hai class me
    // this.deposit = function (amount) {
    //     this.balance = this.balance + amount
    // }
    // this.withdraw = (amount) => {
    //     this.balance = this.balance - amount
    // }
}


const rakeshAcc = new BankAccount("Rakesh")
// const johnhAcc = new BankAccount("John", 1000)
// console.log(rakeshAcc, johnhAcc)


// yaha pe hum arrow function use nahi kr skte hai 
// kyuki arrow dunction ka khud ka context nahi hota hai 
// arrow function k andar jo this hota hai wo uske outer scope se leleta hai
// yaha humne file me likha hai or to arrow funcntion ka this point krega window object ko
// 
BankAccount.prototype.deposit = function (amount) {
    this.balance = this.balance + amount
}

BankAccount.prototype.withdraw = function (amount) {
    this.balance = this.balance - amount
}

rakeshAcc.deposit(1000)

// console.log(BankAccount.prototype)
console.log(rakeshAcc)