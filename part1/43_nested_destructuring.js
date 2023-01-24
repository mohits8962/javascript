// nested destructuring
 
const users = [
    {userId: 1,firstName: 'harshit', gender: 'male'},
    {userId: 2,firstName: 'mohit', gender: 'male'},
    {userId: 3,firstName: 'nitish', gender: 'male'},
]

// const [{firstName: user1firstName, userId}, , {gender: user3gender}] = users;
// console.log(user1firstName);
// console.log(userId);
// console.log(user3gender);


// const [ ,{firstName:user2firstName, userId}]=users       // index chhod k second wala print kara skte hai
// console.log(user2firstName)
// console.log(userId)