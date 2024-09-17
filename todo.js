
const todos = ["test"];
let userInput = prompt("What do you want to do?");

while (userInput !== "quit" && userInput !== "q") {
  if (userInput === "list") {
    console.log("******************");
    for (let i = 0; i < todos.length; i++) {
      console.log(`${i} ${todos[i]}`);
    }
  } else if (userInput === "delete") {
    const deleteInput = prompt("Enter a todo index");
    const deleted = todos.splice(deleteInput, 1);
    console.log(`${deleted} has been deleted`);
  } else if (userInput === "new") {
    const todoInput = prompt("Enter a todo");
    if (!todoInput) {
      todoInput = prompt("Todo cannot be empty");
    }
    todos.push(todoInput);
    console.log("New todo added to the list");
  } else {
    console.log("Unknown command");
  }

  userInput = prompt("What do you want to do?");
}

console.log("You quit the app.");
