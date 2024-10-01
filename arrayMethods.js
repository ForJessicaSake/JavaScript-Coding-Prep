/*Write a function that takes an array of numbers, filters out the odd numbers, 
and then returns a new array where each remaining number is squared.*/

const evenSqaured = (arr) => {
  return arr.filter((no) => no % 2 === 0).map((no) => no * no);
};

const result = evenSqaured([1, 2, 3, 4, 5, 6, 7, 8, 9]);
console.log(result);

/*Create a function that takes an array of strings,
 uses forEach to print each string in uppercase,
and then returns a new array with the lengths of those strings using map.*/
const upperCasedLengthStrings = (arr) => {
  arr.forEach((element) => console.log(element.toUpperCase()));
  return arr.map((element) => element.length);
};
const result2 = upperCasedLengthStrings(["Hello", "Mary", "blessing"]);
console.log(result2);

/*Given an array of numbers, 
write a function that checks if all the numbers are positive using every,
and returns true if they are, or false if any number is negative.*/
const positiveNumbers = (arr) => {
  return arr.every((no) => no > 0);
};
const result3 = positiveNumbers([-1, -2, 4, 5, 0]);
console.log(result3);

/*Write a function that takes an array of objects with name and age properties, 
filters out those who are under 18, and returns an array of names of the remaining people using map.*/
const personsGreaterThan18 = (arr) => {
  return arr.filter((person) => person.age >= 18).map((person) => person.name);
};
const result4 = personsGreaterThan18([
  {
    name: "Rachael",
    age: 16,
  },
  {
    name: "Michael",
    age: 18,
  },
  {
    name: "Rico",
    age: 19,
  },
  {
    name: "Jasmine",
    age: 21,
  },
  {
    name: "Gabby",
    age: 14,
  },
]);

console.log(result4);

/*Write a function that takes an array of numbers, 
checks if any of the numbers are divisible by 3 using some, 
and returns true if at least one number is divisible by 3, otherwise false.*/

const divisbleBy3 = (arr) => {
  return arr.some((no) => no % 3 === 0);
};

const result5 = divisbleBy3([1, 2, 3, 4, 5, 6, 7, 8, 9]);
console.log(result5);

const result6 = [6, 2, 3, 4, 5].reduce(
  (accumulator, currentValue) => accumulator
);
console.log(result6);

/*Write a function that takes an array of numbers 
and uses the reduce method to return the sum of all even numbers in the array.*/

const sumOfEvenNumbers = (arr) => {
  return arr
    .filter((no) => no % 2 === 0)
    .reduce((accumulator, currentValue) => accumulator + currentValue);
};
const result7 = sumOfEvenNumbers([1, 2, 3, 4, 5, 6]);
console.log(result7);

/*Write a function that takes an array of strings and 
uses reduce to return the longest string in the array.*/

function longestString(arr) {
  return arr.reduce((accumulator, currentValue) => {
    if (currentValue.length > accumulator.length) {
      return currentValue;
    }
    return accumulator;
  });
}

const result8 = longestString(["apple", "banana", "watermelon", "grape"]);
console.log(result8);

/*Write a function that takes an array of numbers and 
uses the reduce method to return the product of all elements in the array. */

function productOArray(arr) {
  return arr.reduce((accumulator, currentValue) => accumulator * currentValue);
}
const result9 = productOArray([1, 2, 3, 4]);
console.log(result9);

/*Write a function that takes an array of numbers and uses filter, map, and reduce 
to return the sum of the squares of only the odd numbers in the array.*/

function sumOfOddNumberSquares(arr) {
  return arr
    .filter((no) => no % 2 !== 0)
    .map((no) => no * no)
    .reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    });
}

const result10 = sumOfOddNumberSquares([1, 2, 3, 4]);
console.log(result10)