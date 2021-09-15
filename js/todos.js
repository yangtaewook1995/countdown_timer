const TODO_KEY = "todos";

const todoForm = document.querySelector(".todo__input");
const todoInput = document.querySelector(".todo__input-box");
const todoList = document.querySelector(".todo__list");

let todos = [];

function saveTodos() {
  localStorage.setItem(TODO_KEY, JSON.stringify(todos));
}

function deleteTodo(event) {
  const li = event.target.parentElement;
  const span = document.querySelector("#span-" + li.id);
  span.className = span.className == "" ? "todo-deleted" : "";
  const button = document.querySelector("#button-" + li.id);
  button.innerText = span.className == "" ? " " : "V";
}

function showTodos(newTodoObj) {
  const savedTodos = localStorage.getItem(TODO_KEY);
  const li = document.createElement("li");
  li.id = newTodoObj.id;
  const button = document.createElement("input");
  button.id = "button-" + newTodoObj.id;
  button.type = "checkbox";
  const span = document.createElement("span");
  span.id = "span-" + newTodoObj.id;
  span.innerText = newTodoObj.text;
  li.appendChild(button);
  li.appendChild(span);
  todoList.appendChild(li);

  button.addEventListener("click", deleteTodo);
}

function handleTodo(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };

  todos.push(newTodoObj);
  saveTodos();
  showTodos(newTodoObj);
}

todoForm.addEventListener("submit", handleTodo);
const savedToDos = localStorage.getItem(TODO_KEY);

if (savedToDos != null) {
  const parseToDos = JSON.parse(savedToDos);
  toDos = parseToDos;
  parseToDos.forEach(showTodos);
}
