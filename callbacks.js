const fullNames = [{first: 'Albus', last: 'Dumbledore'}, {first: 'Harry', last: 'Potter'}, {first: 'Hermione', last: 'Granger'}, {first: 'Ron', last: 'Weasley'}, {first: 'Rubeus', last: 'Hagrid'}, {first: 'Minerva', last: 'McGonagall'}, {first: 'Severus', last: 'Snape'}];
const firstNames = fullNames.map((name)=>name.first)
console.log(firstNames)

//Compute the sum:[65, 44, 12, 4];
let sum = 0;
const numbers = [65, 44, 12, 4];
numbers.forEach((num)=> sum += num)
console.log(sum)


const fruits = ["Apple", "Banana", "Orange"]

// const result = fruits.map((fruit)=> console.log(fruit))
// const result = fruits.map((fruit)=> fruit)


const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const result = nums.filter(num=> num % 2 === 0).map(num=>num)
console.log(result)