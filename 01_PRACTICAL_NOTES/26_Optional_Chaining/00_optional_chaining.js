// optional chaining 
// The optional chaining operator (?.) enables you to read the value of a property located deep within a chain of connected objects without having to check that each reference in the chain is valid.

const user  = {
    firstName: "harshit",
    address: {houseNumber: '1234'}
}



console.log(user?.firstName);
console.log(user?.address?.houseNumber);