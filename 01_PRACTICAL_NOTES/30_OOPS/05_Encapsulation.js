class BankAccount {
    customerName
    accountNumber
    #balance = 0

    constructor(customerName, balance = 0) {
        this.customerName = customerName
        this.accountNumber = Date.now()
        // by using # we can create private fields
        this.#balance = balance
    }

    deposit(amount) {
        this.#balance += amount
    }

    withdraw(amount) {
        this.#balance -= amount
    }

    set balance(amount) {
        if (isNaN(amount)) {
            throw new Error("Amount is not a valid input")
        }

        this.#balance = +amount
    }

    get balance() {
        return this.#balance
    }
}

// ------------------------------------------------

class CurrentAccount extends BankAccount {
    transactionLimit = 50000

    constructor(customerName, balance = 0) {
        // super mtlab agar hum kisi class se inerit kr rhe hai
        // to pehle super wala jo constructor hai use call kro
        super(customerName, balance)

        // we cannot access private field in subclass example in currentAccount
        // console.log(this.#balance)
    }

    #calculateInterest(amount){
        console.log("Calculating Interest")
    }

    takeBusinessLoan(amount) {
        this.#calculateInterest(amount)
        console.log("Taking Business Loan:" + amount)
    }
}


const rakeshAcc = new CurrentAccount("Rakesh", 1000)
// rakeshAcc.setBalance("300")
// console.log(rakeshAcc.getBalance())


// pehle wo function the isiliye hum call krte the
// but jb getter or setter ka use krenge to like koi property ki tarah use kr ste hai
rakeshAcc.balance = 6000
console.log(rakeshAcc.balance)

rakeshAcc.takeBusinessLoan(400)
console.log(rakeshAcc)

