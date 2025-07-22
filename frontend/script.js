const API_URL = "http://13.232.190.5:3000/todos";

async function fetchTodos() {
  const res = await fetch(API_URL);
  const todos = await res.json();
  const list = document.getElementById("todo-list");
  list.innerHTML = "";
  todos.forEach(todo => {
    const li = document.createElement("li");
    li.textContent = todo.text;
    list.appendChild(li);
  });
}

async function addTodo() {
  const input = document.getElementById("todo-input");
  await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text: input.value }),
  });
  input.value = "";
  fetchTodos();
}

fetchTodos();

