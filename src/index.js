let toDoList = document.getElementById('tasks')
let toDoForm = document.getElementById("create-task-form")





toDoForm.addEventListener("submit", function(event){
  event.preventDefault()
  let newTaskToAdd = event.target.newTaskDescription.value
  let newButton = document.createElement("button")
  let newTaskLi = document.createElement("li")
  let importance = event.target.priority.value

  newTaskLi.className = importance
  newButton.innerText = "x"
  newButton.className = "new-button"
  newTaskLi.innerText = newTaskToAdd
  newTaskLi.append(newButton)
  toDoList.append(newTaskLi)

  event.target.newTaskDescription.value = ""



})


toDoList.addEventListener("click", function(event){
  if (event.target.tagName === "BUTTON"){
    //console.log(event.target.parent)
    event.target.parentElement.remove()
 }
})

document.addEventListener("DOMContentLoaded", () => {
  // your code here
});
