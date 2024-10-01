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
