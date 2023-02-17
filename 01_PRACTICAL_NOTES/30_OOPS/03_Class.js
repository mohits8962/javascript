// hume ise fucntion expresstion k form me bhi use kr skte hai

// const BankAccount = class{
class BankAccount {
    // hume aise likhenege to parameter pass nahi kr skte
    // class function does not get hoisted
    customerName
    accountNumber
    balance = 0

    // to hum constructor function ka use krte hai
    // jisse hum parameter pass kr skte hai
    constructor(customerName, balance = 0) {
        this.customerName = customerName
        this.accountNumber = Date.now()
        this.balance = balance
    }

    // class me hume alag se prototype me add krne ki zarurat nahi hoti
    // hum bs methods likhte hai class k anadar or wo automatic prototype me leta hai

    deposit(amount) {
        this.balance += amount
    }

    withdraw(amount){
        this.balance -= amount
    }
}

const rakeshAcc = new BankAccount("Rakesh", 1000)
rakeshAcc.deposit(5000)
rakeshAcc.withdraw(2000)
console.log(rakeshAcc)