const taskForm = document.getElementById("task-form");
const taskList = document.getElementById("task-list");

// console.log(taskForm, taskList);
taskForm.addEventListener("submit", function (event){ 
  event.preventDefault();
  const taskInput = document.getElementById("task-input"); 
  const taskText = taskInput.value.trim(); 

  if(taskText !== ""){
    //Create a new task item 
    const taskItem = document.createElement("li"); 
    taskItem.classlist.add("task-item"); 
    taskItem.textContent = taskText;
    taskList.appendChild(taskItem);
  }
//console.log(taskText); 
}); 
