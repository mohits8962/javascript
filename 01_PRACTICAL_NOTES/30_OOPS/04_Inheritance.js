// class

class BankAccount {
    customerName
    accountNumber
    balance = 0

    constructor(customerName, balance = 0) {
        this.customerName = customerName
        this.accountNumber = Date.now()
        this.balance = balance
    }

    deposit(amount) {
        this.balance += amount
    }

    withdraw(amount) {
        this.balance -= amount
    }
}

// ------------------------------------------------

class CurrentAccount extends BankAccount {
    transactionLimit = 50000

    constructor(customerName, balance = 0) {
        // super mtlab agar hum kisi class se inerit kr rhe hai
        // to pehle super wala jo constructor hai use call kro
        super(customerName, balance)
    }

    takeBusinessLoan(amount) {
        console.log("Taking Business Loan:" + amount)
    }
}

// ------------------------------------------------

class SavingAccount extends BankAccount {
    transactionLimit = 50000

    constructor(customerName, balance = 0) {
        super(customerName, balance)
    }

    takePersonalLoan(amount) {
        console.log("Taking Personal Loan:" + amount)
    }
}

const rakeshAcc = new SavingAccount("Rakesh", 1000)
rakeshAcc.deposit(5000)
rakeshAcc.withdraw(2000)
console.log(rakeshAcc)






















// **********************************************************************

// function BankAccount(customerName, balance = 0) {
//     this.customerName = customerName
//     this.accountNumber = Date.now()
//     this.balance = balance
// }

// BankAccount.prototype.deposit = function (amount) {
//     this.balance = this.balance + amount
// }

// BankAccount.prototype.withdraw = function (amount) {
//     this.balance = this.balance - amount
// }

// // ----------------------------------------------------------------

// function CurrentAccount(customerName, balance = 0) {
//     // constructor linking
//     BankAccount.call(this, customerName, balance)
//     this.transactionLimit = 50000
// }

// CurrentAccount.prototype = Object.create(BankAccount.prototype)

// CurrentAccount.prototype.takeBusinessLoan = function (amount) {
//     console.log("Taking Business Loan:" + amount)
// }

// // ---------------------------------------------------------------

// function SavingAccount(customerName, balance = 0) {
//     // constructor linking
//     BankAccount.call(this, customerName, balance)
//     this.transactionLimit = 10000
// }

// SavingAccount.prototype = Object.create(BankAccount.prototype)

// SavingAccount.prototype.takePersonalLoan = function (amount) {
//     console.log("Taking Personal Loan:" + amount)
// }

// // -----------------------------------------------------------------



// const rakeshAcc = new SavingAccount("Rakesh", 1000)
// rakeshAcc.deposit(1000)

// console.log(rakeshAcc)