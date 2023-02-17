// SHALLOW COPY

// In JavaScript, a shallow copy of an object is a new object that has the same properties as the original object, but the properties are still references to the objects that the original object properties refer to. This means that if we modify a property of the original object, the corresponding property of the shallow copy will also be modified, because both properties refer to the same object.

// let arr1 = ['item1', 'item2']
// let arr2 = arr1

// console.log('arr1', arr1)
// console.log('arr2', arr2)

// arr1.push('item3')

// console.log('after pushing')
// console.log('arr1', arr1)
// console.log('arr2', arr2)


// DEEP COPY

// A deep copy, on the other hand, is a new object that has copies of the original object's properties, rather than references to the original object's properties. This means that if you modify a property of the original object, the corresponding property of the deep copy will not be modified, because the properties are completely independent of each other.

// let num1 = 4
// let num2 = num1
// num2++

// console.log(num1)
// console.log(num2)





