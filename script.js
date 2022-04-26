const form = document.forms["todo-form"];
const list = document.getElementById("list");
const todoInput = form.elements["todo-input"];

form.onsubmit = (event) => {
  event.preventDefault();

  if (todoInput.value.trim().length === 0) {
    todoInput.classList.add("error");

    return;
  }

  let li = document.createElement("li");
  li.append(todoInput.value);

  const button = document.createElement("button");
  button.className = "remove-button";
  button.innerText = "Delete";
  li.append(button);

  list.append(li);

  form.reset();
};

todoInput.onfocus = () => {
  const isErrorField = todoInput.classList.contains("error");

  if (isErrorField) {
    todoInput.classList.remove("error");
  }
};

list.onclick = function (event) {
  const isRemoveButton = event.target.className === "remove-button";

  if (isRemoveButton) {
    const li = event.target.closest("li");
    li.remove();
  }
};
