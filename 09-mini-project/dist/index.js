"use strict";
console.log("Dipesh Paudel!");
console.log("hello".replaceAll("l", "!"));
function printDouble(message) {
    console.log(message);
    console.log(message);
}
printDouble("Hello World!");
const btnOne = document.getElementById("btn");
console.log(btnOne);
btnOne?.addEventListener("click", () => {
    console.log("Clicked One!");
});
const btnTwo = document.getElementById("btn");
console.log(btnTwo);
btnTwo.addEventListener("click", () => {
    console.log("Clicked Two!");
});
let mystery = "How are you?";
const numChars = mystery.length;
console.log(numChars);
const todoInput = document.getElementById("todo-input");
const btnThree = document.getElementById("btn");
console.log(btnThree);
btnThree.addEventListener("click", () => {
    console.log("Clicked Three!");
});
const form = document.getElementById("todo-form");
const list = document.getElementById("todo-list");
const todos = readTodos();
todos.forEach(createTodoElement);
function readTodos() {
    const todosJSON = localStorage.getItem("todos");
    if (todosJSON === null)
        return [];
    return JSON.parse(todosJSON);
}
function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
}
function handleSubmit(e) {
    e.preventDefault();
    const newTodo = {
        text: todoInput.value,
        completed: false,
    };
    createTodoElement(newTodo);
    todos.push(newTodo);
    saveTodos();
    todoInput.value = "";
}
form.addEventListener("submit", handleSubmit);
function createTodoElement(todo) {
    const newLI = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.completed;
    checkbox.addEventListener("change", () => {
        todo.completed = checkbox.checked;
        saveTodos();
    });
    newLI.append(todo.text);
    newLI.append(checkbox);
    list.append(newLI);
}
