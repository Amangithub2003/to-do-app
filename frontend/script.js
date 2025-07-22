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
  const text = input.value.trim();
  if (!text) return;  // prevent empty tasks

  try {
    await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: Date.now().toString(),
        text
      }),
    });
    input.value = "";
    fetchTodos();
  } catch (err) {
    console.error("Failed to add todo:", err);
  }
}

// Bind the button’s click event to addTodo()
document
  .getElementById("add-button")
  .addEventListener("click", addTodo);

// Initial load of existing todos
fetchTodos();
