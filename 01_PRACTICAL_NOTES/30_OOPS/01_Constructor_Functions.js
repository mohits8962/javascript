function BankAccount(customerName, balance = 0) {
    this.customerName = customerName
    this.accountNumber = Date.now()
    this.balance = balance

    // hum methods bhi provide kra skte hai class me
    this.deposit = function (amount) {
        this.balance = this.balance + amount
    }
    this.withdraw = (amount) => {
        this.balance = this.balance - amount
    }
}

// const rakeshAccount = new BankAccount("Rakesh", 1000)

// // hum properties bhi dekh skte hai
// console.log(rakeshAccount.accountNumber)

// // hum values change bhi kr skte ahi
// // but hum real life me aise change nahi kr skte 
// // kyuki oops hume aise features provide krta hai jo hume yeh krne se roke
// // to aisa na ho na ki hum bahar se aise value daal k koi bhi change kr le 
// // hume ek method provide hota hai "Incapsulation" wo hum use krte hai aise cheeze krne k liye

// // rakeshAccount.balance = 5000         // ab aise call na kr ke

// // aise call krenge
// rakeshAccount.deposit(5000)
// rakeshAccount.withdraw(2000)

// console.log(rakeshAccount)


// // hum kitne bhi objects create kr skte hai isse
// // or powerfull feature yeh hai ki sbko alag alag memeory phase milega 
// // jisse agae hum obj 1 me kuch change krenge to obj 1 tk hi rhega baaki kisime change nahi hoga

// const johnAccount = new BankAccount("John")

// johnAccount.deposit(2000)

// console.log(johnAccount)


// ===================================================================

// DOM Part

const accounts = []
const accountForm = document.querySelector("#accountForm")
const customerName = document.querySelector("#customerName")
const balance = document.querySelector("#balance")

const depositForm = document.querySelector("#depositForm")
const accountNumber = document.querySelector("#accountNumber")
const amount = document.querySelector("#amount")

accountForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const account = new BankAccount(customerName.value, +balance.value)
    accounts.push(account)
    console.log(accounts)
})


depositForm.addEventListener('submit', (e) => {
    e.preventDefault()
    // accounts arraay me account find kro jo bhi account number bhej rhe hai
    // wo agar match hora hai koi bhi aacount to array me hai wo
    const account = accounts.find(
        (account) => account.accountNumber === +accountNumber.value
    )
    account.deposit(+amount.value)
    console.log(accounts)

})