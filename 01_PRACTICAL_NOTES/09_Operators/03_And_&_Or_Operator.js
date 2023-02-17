// and or operator 


let firstName = "Harshit";
let age = 17;

// -----------------------------------------------------------------------
// if (firstName[0] === "H") {
//     console.log("your name starts with H")
// }

// if (age > 18) {
//     console.log("you are above 18");
// }
// -----------------------------------------------------------------------


// we can write above statement like this also by using &&

// and operator
if (firstName[0] === "H" && age > 18) {
    console.log("Name starts with H and above 18");
} else {
    console.log("inside else");
}

// -------------------------------------------------------

// or operator
if (firstName[0] === "H" || age > 18) {
    console.log("inside if");
} else {
    console.log("inside else");
}