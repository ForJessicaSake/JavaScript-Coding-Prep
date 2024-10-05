/*Write a script that selects a paragraph element with the ID intro 
and changes its text to "Welcome to DOM manipulation!"*/

const paragraphElement = document.getElementById("intro");
paragraphElement.innerText = "Welcome to DOM manipulation";

/*Given the following HTML, write a script that selects all <h2> tags
 and changes their text color to "blue"*/

const headingTwos = document.getElementsByTagName("h2");
for (let headingTwo of headingTwos) {
  headingTwo.style.color = "blue";
}

/*Write a script that selects all elements with the class button
 and sets their disabled attribute to true*/

const buttons = document.getElementsByClassName("button");
for (let button of buttons) {
  button.setAttribute("disabled", true);
}

/*Write a script that uses querySelectorAll() to select all <li> elements within a <ul>
 and change their textContent to "List Item Modified"*/

const listElements = document.querySelectorAll("ul li");
for (let listElement of listElements) {
  listElement.textContent = "List Item Modified";
}

/*Write a script that selects the first <div> element inside a <section> using querySelector() 
and changes its background color to "lightgreen".*/

const divElement = document.querySelector("section div");
divElement.style.backgroundColor = "lightGreen";

/*I've provided you with an <h1> element which contains 
7 individual spans (each holding a single letter). 
Please write some JavaScript to make them rainbow-colored! 
In dom.js you'll find an array of color names called colors.  
Your task is to select all spans, iterate over them, 
and assign them each one of the colors from the colors array. 
The first span should be red, the second should be orange, etc.*/

const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
const spans = document.querySelectorAll("h1 span");
for (let i = 0; i < spans.length; i++) {
  spans[i].style.color = colors[i];
}

/*Write a script that adds the class "active" to a button element.*/

const button = document.querySelector("button").classList.add("active");

/*Manually remove the class "highlight" from all <p> elements when the script runs.*/
const allParagraphElements = document.querySelectorAll("p");
for (let paragraph of allParagraphElements) {
  paragraph.classList.remove("highlight");
}

/*Check if a <div> element with the ID "myDiv" has the class "hidden" 
and log a message to the console depending on whether the class exists.*/

const div = document.querySelector("#myDiv").classList.contains("hidden");
if (!div) {
  console.log("No hidden class exists");
} else {
  console.log("There is a class called hidden");
}

/*Toggle the class "dark-mode" on the <body> tag when the script runs.*/

const body = document.querySelector("body").classList.toggle("dark-mode");

/*Create exactly 100 new button elements
Each button must have some text inside of it (it doesn't matter what)
Each button must be appended inside the container div. */

const container = document.querySelector("#container");
for (let i = 1; i <= 100; i++) {
  const button = document.createElement("button");
  button.innerText = "Loop";
  container.append(button);
}

/*Write a script that creates a new <p> element with the text "Hello, World!", 
then appends it as the last child of a <div> with the ID "container".*/

const paragraph = document.createElement("p");
paragraph.innerText = "learning how to create elements and append.";
container.append(paragraph);

/*Select the second <li> element in a list and remove it from the DOM.*/
const list = document.querySelector("li").nextElementSibling;
list.remove();

/*Select a <div> with the ID "main". Log all its direct child elements to the console, 
 and then remove the first child from the list of children. */
const children = document.querySelector("#main").children;
children[0].remove();
for (let child of children) {
  console.log(child);
}

/* Write a script that creates a new <li> element with the text
 "New Item" and appends it to a <ul> with the ID "itemList" every time 
 a button with the ID "addItemBtn" is clicked. Add a separate button with the ID "removeItemBtn"
that removes the last <li> element when clicked.*/

const ul = document.querySelector("#itemList");
const addItemButton = document.querySelector("#addItemBtn");
const removeItemButton = document.querySelector("#removeItemBtn");

addItemButton.addEventListener("click", () => {
  const newList = document.createElement("li");
  newList.innerText = "New Item";
  alert("clicked add item button");
  ul.append(newList);
});

removeItemButton.addEventListener("click", () => {
  const lastElement = ul?.children[ul?.children.length - 1];
  if (!lastElement) return;
  lastElement.remove();
  console.log(lastElement.remove());
});

/* Create a script that changes the text of a <p> element with the ID "message" 
to "Mouse Over Detected!" when the mouse hovers over it, and resets the text back to
"Hover over me!" when the mouse leaves the paragraph.*/

const message = document.querySelector("#message");
message.addEventListener("mouseover", () => {
  message.innerText = "Mouse Over Detected!";
});

message.addEventListener("mouseout", () => {
  message.innerText = " Hover over me!";
});

/*Add an event listener to a button with the ID "toggleDarkMode". 
When the button is clicked, toggle the class "dark-mode" on the <body> element. 
The button text should change to "Light Mode" if dark mode is enabled 
and back to "Dark Mode" if it's disabled.*/

const htmlBody = document.querySelector("body");
const toggleButton = document.querySelector("#toggleDarkMode");
toggleButton.addEventListener("click", () => {
  htmlBody.classList.toggle("dark-mode");
});

/* Create a script that generates random color for your body background. */
const randomColor = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);

  return `rgb(${r}, ${g}, ${b})`;
};

const headingOne = document.querySelector("h1");
const themeButton = document
  .querySelector("#theme")
  .addEventListener("click", () => {
    headingOne.innerText = `theme color is - ${randomColor()}`;
    document.body.style.backgroundColor = randomColor();
  });

/* index.html already has a form element that contains two <input> elements, 
one for quantity and one for a product name. index.html also contains an empty <ul> 
where you will append new <li>'s.*/

const ullists = document.querySelector("#list");
const form = document.querySelector("#form");
const quantity = form.elements.qty;
const product = form.elements.product;

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const list = document.createElement("li");
  list.innerText = `${quantity.value} ${product.value}`;
  ullists.append(list);
});

/*In the index.html file, you'll find an <h1> and an <input type="text"> element. The h1 should 
start with the text "Enter Your Username" (I've done that for you, already in the markup).
Whenever an input event is fired on the <input> element, update the <h1> so that it displays
"Welcome, " plus the current value from the text input. If the <input> goes back to being empty, 
update the <h1> so that it once again says "Enter Your Username"*/

const usernameHeading = document.querySelector("#usernameHeading");
const usernameInput = document.querySelector("#username");

usernameInput.addEventListener("input", (e) => {
  const username = usernameInput.value;
  if (username) {
    usernameHeading.innerText = `Welcome ${username}`;
  } else {
    usernameHeading.innerText = "Enter Your Username";
  }
});

/*change event*/
usernameInput.addEventListener("change", (e) => {
  console.log(`${e.target.value} triggered on blur`);
});
