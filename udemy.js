/* 
- Create a variable points that start at 40. create an if statement that checks if points is greater than 20. if it is, subtract 10 from points. 
- Print the points at the end of the program.
- Change points to start at 15 and run the program again.
*/

let points = 15;
function checkPoints() {
  if (points > 20) {
    points -= 10;
  }
  return points;
}

console.log(checkPoints());

/*
    1. At the start of the program print out: "--- Animal Checker Program ---"
    2. Create a variable called animal that starts at the value "cat"
    3. Create an if statement that checks if animal is equal to "cat"
    4. If it is equal to "cat", print out "Meow!" to the screen
    5. If it is equal to "dog", print out "Woof!" to the screen
    6. If it is neither "cat" nor "dog", print out "Must be an alien"
    7. At the end of the program print out: "--- Animal check complete ---"
    8. Change animal to different values to make sure it works in all cases
*/

console.log("--- Animal Checker Program ---");
let animal = "chicken";
function animalChecker() {
  if (animal === "cat") {
    console.log("Meow");
  } else if (animal === "dog") {
    console.log("Woof");
  } else {
    console.log("Must be an alien");
  }
}
animalChecker();
console.log("--- Animal check complete ---");

/*
    Create a program that starts with a number variable.
    The program will print out whether the variable is
    even or odd to the screen when run.

    Change the variable to test it works in both cases.

    HINT: modulus operator ( % ) is your friend
*/

let number = 11;
function evenOrOddChecker() {
  if (number % 2 === 0) {
    console.log("Even");
  } else {
    console.log("Odd");
  }
}
evenOrOddChecker();

/* 
   Spot the bug 🐞
   Should print:
   "Most places consider you an adult."
   but it doesn't, why?
*/

const age = 20;

if (age < 3) {
  console.log("You're just a baby!");
} else if (age <= 12) {
  console.log("You are in elementary school, kid.");
} else if (age <= 17) {
  console.log("Nice, you're a teenager!");
} else if (age >= 18) {
  console.log("Most places consider you an adult.");
} else {
  console.log("What? How did this happen!?");
}

/*
    What would each of these variables evaluate to?

    1. const one = true && "hi";
    2. const two = false && "bye";
    3. const three = true || "meow";
    4. const four = false || "rawr";

    Print them out to the console to see if you got them right.

    HINT: 3 & 4 are more challenging, so don't worry if you don't
    get them right away!
*/

const one = true && "hi";
const two = false && "bye";
const three = true || "meow";
const four = false || "rawr";

console.log(one); //hi
console.log(two); //false
console.log(three); //true
console.log(four); //rawr

/*
    What would each of these lines of code do:

    true && console.log("moo");
    false && console.log("moo moo?")
    true || console.log("hello friend");
    false || console.log("bye friend");

    This is a very challenging problem set. Once you see the results,
    try to see if you can see WHY it works that way. This will come in
    very handy in the future.
*/

true && console.log("moo"); //moo
false && console.log("moo moo?"); //false
true || console.log("hello friend"); //true
false || console.log("bye friend"); //bye friend

/*======================= Array practice exercises===============================*/
/*
Create an empty array called fruits. Use the push() method to add "apple", "banana", and "orange". 
Then, use the pop() method to remove the last item from the array and log the final array to the console.
*/

const fruits = [];
fruits.push("apple", "banana", "orange");
fruits.pop();
console.log(fruits);

/*
Create an array called numbers with the values [1, 2, 3]. 
Use push() to add two numbers to the array and pop() to remove one. 
Log the result after each operation. 
*/

const numbers = [1, 2, 3];
numbers.push(4, 5);
console.log(numbers);
numbers.pop();
console.log(numbers);

/*
Imagine you are creating a shopping cart system. 
Start with an empty array called cart. Add three items using push(). 
Then, simulate removing the last added item using pop(). 
Log the state of the cart after each operation.
*/

const cart = [];
cart.push("soap", "brush", "mop");
console.log(cart);
cart.pop();
console.log(cart);

/*
Create a function undoAction() that simulates an undo feature. 
It will store the previous states of an array in a stack. 
When called, the function will remove the last state using pop().
Use push() to store new states of the array and pop() to go back to the previous state.
*/

let arr = [1, 2, 3, 4, 5];
const undoAction = (arr) => {
  return arr.pop();
};

console.log(arr.push(6, 7, 8, 9));
undoAction(arr);
console.log(arr);
undoAction(arr);
console.log(arr);

const testDataTypes = {
  1999: "Good",
  true: true,
  "first Name": "test",
  null: null,
  undefined: undefined,
};

console.log(testDataTypes["first Name"]);

const restaurant = {
  name: "Ichiran Ramen",
  address: `${Math.floor(Math.random() * 100) + 1} Johnson Ave`,
  city: "Brooklyn",
  state: "NY",
  zipcode: "11206",
};
const fullAddress = `${restaurant.address}, ${restaurant.city}, ${restaurant.state} ${restaurant.zipcode}`;

/*
  Please use a for...of loop to loop over it, 
  and print out the square of each value 
  (the number multiplied by itself).
*/
const arrayOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let num of numbers) {
  console.log(num * num);
}
