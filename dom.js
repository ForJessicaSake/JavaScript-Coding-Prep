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
paragraph.innerText= "learning how to create elements and append.";
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
