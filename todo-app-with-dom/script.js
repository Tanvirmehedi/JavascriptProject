// select all user task

let newTask = document.querySelector("#new-task");

let form = document.querySelector("form");

let incomTask = document.querySelector("#items");

let completeTask = document.querySelector(".complete-list ul");

let createTask = function(task){
    let listItem = document.createElement("li");
    let checkbox = document.createElement("input");
    let label =document.createElement("label");

    label.textContent= task;
    checkbox.type="checkbox";

    listItem.appendChild(label)
    listItem.appendChild(checkbox);
    return listItem;
}

let addTask = function(event){
    event.preventDefault();
    listItem= createTask(newTask.value);
    incomTask.appendChild(listItem);
    newTask.value="";

    // bind The New List Item In this section
    bindIncompleteTask(listItem,completeTask);
}

// console.log(addTask());

let bindIncompleteTask = function(taskItem,checkBoxClick){
    let checkbox = document.querySelector("input[type='checkbox']");
    checkbox.onchange =checkBoxClick;
}