document.addEventListener("DOMContentLoaded", () => {
  const taskForm = document.querySelector("form#create-task-form")
  const taskList = document.querySelector("ul#tasks")
  taskForm.addEventListener("submit", function(e){
    e.preventDefault()
    let newTask = document.createElement("li")
    // debugger
    let newDesc = taskForm.newTaskDescription.value
    const delButton = document.createElement("BUTTON")
    delButton.innerText = "X"
    // debugger
    delButton.addEventListener("click", function(evt){
      evt.preventDefault()
      // debugger
      evt.target.parentElement.remove()
    })
    // debugger
    newTask.innerText = newDesc
    newTask.appendChild(delButton)
    // debugger
    taskList.append(newTask)
    
  })
});
