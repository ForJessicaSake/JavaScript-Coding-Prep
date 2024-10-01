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

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']; 
const spans = document.querySelectorAll('h1 span');
for(let i =  0; i <spans.length; i++){
    spans[i].style.color =  colors[i]
}
