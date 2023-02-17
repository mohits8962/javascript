// Question 01
// let a=[]
// let b=[]
// console.log(a==b)       // false
// console.log(a===b)      // false
// In this question both will give false because when we compare two array it didnt compare its array it compares its memory location and memory location kbhi do ki sm nhi ho sakti that's why it gives false

// Question 02
// let a = []
// let b = a
// console.log(a==b)       // true
// console.log(a===b)      // true
// It will give true because we assign the memory location of a in b so b is having the same memory location as a thats why it wll give the output true

// Question 03
// let a = [20]
// let b = [20]
// console.log(a[0]==b[0])       // true
// console.log(a[0]===b[0])      // true
// In this both will give true because in this array is different but we are checking the the element value thats why it will give true

// Question 04
// let z=[1,2,3,4]
// let a={name:'anil'}
// console.log(...z)
// Here it will give normal 1 2 3 4 because we destructure the value of z it will open the value

// Question 05
// console.log(typeof NaN)
// it will number 

// Question 06
// let data = 10 - -10
// console.log(data)
// It will give 20 beacuse - - is +

// Question 07
// const set = new Set([1, 1, 2, 2, 3, 4,5])
// console.log(set)
// Set will basically remove the duplicate value from the array output is { 1, 2, 3, 4, 5 }

// Question 08
// let data = {name:'mohit'}
// console.log(delete data.name)
// it will give th output true bcoz it checks if its getting deleted then it will give true

// Question 09
// let data = {name:'mohit'}
// console.log(delete data)
// it will give false because we cannot delete data , we can delete it property by choosing data.name but we cannot direct delete data

// Question 10
// const data = ['peter', 'anil', 'sam']
// const [y] = data
// console.log(y)
// it will give only peter because hum jb bhi [y] aise krke variable assign krte hai to it will give the first valur of array ....now if we [y,z] then it will give peter anil

// Question 11
// In ths we want second value without adding first
// const data = ['peter', 'anil', 'sam']
// const [,y] = data
// console.log(y)
// simply we have to add , before y then it will give second value

// Question 12
// How to get name property without . operator
// const data = { name: 'mohit', age: 29, skill: 'JS' }
// const {name} = data      // by using destructuring
// console.log(name)

// Question 13
// merge two objects
// const data = {name:'anil',age:29, skill:'JS'}
// const info = {city:'Noida', mail:'anil@gmail.com'}
// data01 = {...data,...info}
// console.log(data01)


// Question 14
// const data = {name:'anil',age:29, skill:'JS'}
// const info = {city:'Noida'}
// data01 = {data,...info}
// console.log(data01)
// in this data will come as same as data bcoz we didnt destructure it  and info value will come openly because we destructure it
// { data: { name: 'anil', age: 29, skill: 'JS' }, city: 'Noida' }


// Question 15
// const data = {name:'anil',age:29, skill:'JS'}
// const info = {city:'Noida', skill:'node'}
// data01 = {...data,...info}
// console.log(data01)
// In this it will give only one skill >position is same as 3rd but the value is from 2nd output is  { name: 'anil', age: 29, skill: 'node', city: 'Noida' }


// Question 16
// const name = 'Mohit'
// console.log(name())
// It will give us the error of (name is not a function)


// Question 17
// const result = false || {} || null;
// console.log(result)
// Here we are using or operator that why it will not give false it will print only true so it will print {} because it is true 


// Question 18
// const result = null || false || '' ;
// console.log(result)
// here empty string is also falsy value; this will give empty string because when all the value are false it will give the last one as output


// Question 19
// const result = [] || 0 || true ;
// console.log(result)
// this will give [] because it wil first value which is true 


// Question 20
// console.log(Promise.resolve(5))
// this will give Promise { 5 } as fulfilled 


// Question 21
// JSON.parse()
// What this method will do?
// It will parse JSON to a jaavascript value


// Question 22
// let name = 'sidhu'

// function getName(){
//     console.log(name)
//     let name = 'anil'
// }
// getName()

// It will give us the error of Cannot access 'name' before initialization


// Question 23
// let name = 'anil'

// function getName(){
//     console.log(name)
// }
// getName()
// this will give the output of anil because of lexical enviorment it will firstly check name in child scope if it didnt find there it will to its parent scope and find it if it is present there then it will take that value and console it  


// Question 24
// console.log(`${(x => x)('I Love')} to Program`)


// Question 25
// should get output 6

// function sumValues(x, y, z) {
//     return x + y + z
// }

// a: sumValues([...1,2,3])
// b: sumValues([...[1,2,3]])
// c: sumValues(...[1,2,3])
// d: sumValues(1,2,3)

// answer is c



// Question 26
// const name = 'code step by step'

// console.log(!typeof name === 'object')
// In above line this will give false because there value checked by 2 times first by ! and then === sso when it checked !typeof name this give false and when we compare false with object then it give false.

// console.log(!typeof name === 'string')
// In above line this will also give false bcoz it also checks !typeof name and this will give false and then it compare the false with string that will give false also .

// console.log(!typeof name === false)
// this will give true 



// Question 27
// const name = 'Subscribe'
// const age = 21

// console.log(isNaN(name))
// console.log(isNaN(age))

// output is true and then false cause Nan is Not a Number so in first it will check that name is not a number so it will give true and then same fr age so it will check age is not a number so it give false beacause age is number. 



// Question 28
// what can modify person object
// let person = {name:'Anil'}
// Object.seal(person)
// person.age = 21          //1
// person.name = 'sidhu'    //2
// console.log(person)

// by using object.seal it will only allow us to modify the present value but it not allow us to update any value
// so in first line it is updating that why the result is same { name: 'Anil' }
// but in third line it will modify the already present value so it give { name: 'sidhu' }



// Question 29
// remove first element 

// let data = [2,9,0,10]
// data.shift()
// console.log(data)
// we can get the output by using shift()



// Question 30
// remove last element 

// let data = [2,9,0,10]
// data.pop()
// console.log(data)
// we can get the output by using pop()



// Question 31
// check any value is odd or even

// let a = 30
// if (a % 2 === 0) {
//     console.log('even')
// } else {
//     console.log('odd')
// }


// Question 32
// let data = {
//     name:'anil'
// }
// delete data.name
// console.log(data)

// it will give the output as {} empty object


// Question 33
// convert data to boolean false value
// let data = 'true'

// console.log(typeof !data)
// console.log(!data)

// by adding ! in front of any value it will change it to false and typeOf false is boolean 


// Question 34
// convert data to boolean true value
// let data = 'true'

// console.log(typeof !!data)
// console.log(!!data)

// by adding one ! it will convert it to false and if again add ! then it will convert that false to true that is boolean value 


// Question 35
// D/B Map and forEach function

// The main difference between map and forEach is that the map method returns a new array by applying the callback function on each element of an array, while the forEach method doesn’t return anything.



// Question 36
// let data = ['anil','peter','bruce']
// delete data[1]
// console.log(data)
// output is [ 'anil', <1 empty item>, 'bruce' ]
// In this when any element is deleted it empty that space it dosen't give undefined and null there because null and undefined kind of taking ssome spaces in memory.



// Question 37
// let data = ['anil','peter','bruce']
// delete data[1]
// console.log(data.length)
//  gives the output 3 bhale hi delete ho gya hai but still wha ek empty space hai jo count hoga.


// Question 38
// merge two array
// let a = [1, 2, 3]
// let b = [4, 5, 6]
// let c = [...a,...b]
// console.log(c)


// Question 39
// let a = [1, 2, 3, 4]
// let b = [4, 5, 6]
// let c = [...a, ...b]
// console.log(c)
// it will not remove the duplicate it will kept it because it destructure the value only


// Question 40
// let c = 3 ** 3
// console.log(c)
// output is 27 because ** represents exponential 


// Question 41
// let a = 2
// setTimeout(() => {
//     console.log(a)
// }, 0)
// a = 100
// In this output is 100 so after a = 2 then comes ste timeout line that will take time so it goes direct to a = 100 and then set timeout line get executed so it will print 100. 


// Question 42
// let a = 2
// let A = 30
// console.log(A)
// because of case senstivity


// Question 43
// let a10 = 'Mohit'       //1
// // let 10a = 'Mohit'       //2
// console.log(a10)
// we can console the first line but we cant console tthe second line because js has the rule of not starting the variable name as number.


// Question 44
