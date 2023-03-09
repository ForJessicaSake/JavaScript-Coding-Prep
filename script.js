//defining variables with let and const
let age = 15;
let year = 2020;

const pi = 22/7

console.log(age, year);
console.log(pi)

age = 10;
year = 2023;

console.log(age, year);

//concatenation

//using the "+" to concatenate

let text = "totally";

console.log("I " + text + " would use this")

 //using the template strings 
 
 console.log(`This is ${text} better trust me!`)

 //math operators and methods
 const num = 10;
 console.log(num <= 10)
 console.log(num + 10)
 console.log(num ** 2)
 console.log(num/5)
 console.log(num % 4)

 //string methods

const test = "Jessica"
console.log(test.length);
console.log(test[2])
console.log(test.concat("hi"))
console.log(test.toUpperCase())
console.log(test.toLocaleLowerCase())
console.log(test.includes("i"))
console.log(test.indexOf(2))

//array methods
const arr = [1,2,3,4,5]
console.log(arr.join([7, 9]))
console.log(arr.length)
console.log(arr.push(10))
console.log(arr.pop())
console.log(arr.slice(0,3))
console.log(arr.splice(1,5)) 
console.log(arr.indexOf(2))