const todoList = document.querySelector("#todo-list");
const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");

todoForm.addEventListener("submit", formHandler);

function formHandler(event) {
  event.preventDefault(); // отменяет поведение по умолчанию
  // console.log('Submit!')
  const taskText = todoInput.value;
  console.log(taskText);

  // var1
  // todoList.insertAdjacentHTML("afterbegin", `<li>${taskText}</li>`);

  // var2
  const todoItem = document.createElement("li");
  todoItem.textContent = taskText;
  todoList.append(todoItem);

  const removeButton = document.createElement("button");
  removeButton.setAttribute("role", "button");
  removeButton.textContent = "Удалить задачу";
  removeButton.style.marginLeft = "10px";

  todoItem.append(removeButton);

  removeButton.addEventListener("click", removeTask);

  todoInput.value = "";
  todoInput.focus();
}

function removeTask(event) {
  this.closest("li").remove();
  todoInput.focus();
}
