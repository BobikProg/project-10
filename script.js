let taskInput = document.querySelector(".form-task");
let addBtn = document.querySelector("button");
let taskList = document.querySelector("task-list");
// taskInput.value = "go?"
function addNewTask(event) {
    event.preventDefault();
    let task = taskInput.value;

    let newItem = document.querySelector(`#template`).cloneNode(true).content;
    newItem.querySelector(`.task__text`).value = task;
    taskList.append(newItem);
    taskInput.value = "";
    taskInput.focus();
}
addBtn.addEventListener(`click`, addNewTask);