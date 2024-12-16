/*Create a dynamic to-do list where users can add and remove tasks.*/

const form = document.querySelector("#taskForm");
const ul = document.querySelector("#toDoList");
const taskDescription = document.querySelector("#taskDescription");
const taskDueDate = document.querySelector("#dueDate");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const task = document.createElement("li");
  const removeButton = document.createElement("button");
  removeButton.innerText = "Remove Task";
  const taskContent = `${taskDescription.value} - ${taskDueDate.value}`;
  task.innerText = taskContent

  task.appendChild(removeButton);
  ul.appendChild(task);
});

ul.addEventListener("click", (e) => {
  if(e.target.nodeName !== ' li'); return
  e.target.remove();
});
