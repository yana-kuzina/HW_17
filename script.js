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
  li.className = "list-group-item";
  const span = document.createElement("span");
  span.innerHTML = todoInput.value;
  li.append(span);

  const deleteButton = document.createElement("button");
  deleteButton.className = "remove-button btn btn-danger";
  deleteButton.innerText = "Delete";
  li.append(deleteButton);

  let checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox"); // <input type=checkbox
  checkbox.className = "form-check-input";
  li.prepend(checkbox);

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
  const button = event.target;
  const isRemoveButton = button.className === "remove-button";

  if (isRemoveButton) {
    const li = button.closest("li");
    li.remove();
  }
};

list.onchange = function (event) {
  const checkbox = event.target;
  checkbox.disabled = true;

  // 1 - find parent LI
  const parentLi = checkbox.closest("li");
  // 2 - find button in current LI
  const button = parentLi.querySelector("button");
  // 3 - disabled=true for button
  button.disabled = true;

  // add class for LI
  const span = parentLi.querySelector("span");
  span.classList.add("completed");
};
