const form = document.getElementById("form");
const input = document.getElementById("input");
const todosUL = document.getElementById("todos");

const todos = JSON.parse(localStorage.getItem("todos"));

if (todos) {
  todos.forEach((element) => {
    AddToDo(element);
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  AddToDo();
});

function AddToDo(todo) {
  let todoText = input.value;
  if (todo) {
    todoText = todo.text;
  }

  if (todoText) {
    const todoEl = document.createElement("li");
    if (todo && todo.completed) {
      todoEl.classList.add("completed");
    }
    todoEl.innerText = todoText;
    todoEl.addEventListener("click", () => {
      todoEl.classList.toggle("completed");
      UpdateLS();
    });
    todoEl.addEventListener("contextmenu", (e) => {
      e.preventDefault();
      todoEl.remove();
      UpdateLS();
    });
    todosUL.appendChild(todoEl);

    input.value = "";

    UpdateLS();
  }
}

function UpdateLS() {
  todosEl = document.querySelectorAll("li");

  const todos = [];

  todosEl.forEach((to) => {
    todos.push({
      text: to.innerText,
      completed: to.classList.contains("completed"),
    });
  });

  localStorage.setItem("todos", JSON.stringify(todos));
}
//localStorage.setItem("name", JSON.stringify(obj));
//JSon.parse(localStorage.getItem(obj));
