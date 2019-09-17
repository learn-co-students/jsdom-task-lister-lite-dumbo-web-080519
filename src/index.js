document.addEventListener("DOMContentLoaded", () => {
  // your code here
});

// Things on the DOM

let taskForm = document.querySelector("#create-task-form")
let ul = document.querySelector("#tasks")


taskForm.addEventListener("submit", submitTaskHandler)

function submitTaskHandler(evt) {
  evt.preventDefault()
  let newTaskToAdd = evt.target.description.value
  let taskList = document.createElement("li")
  taskList.innerText = newTaskToAdd
  let col = evt.target.color.value
  if (col === "1") {
    taskList.style.color = "#66ff33"
  }
  else if (col === "0") {
    taskList.style.color = "#ff3300"
  }
  else
  taskList.style.color = "#ffff1a"

  ul.append(taskList)


}



ul.addEventListener("click", function(evt) {
  evt.preventDefault()
  if (evt.target.tagName === "LI") {
    evt.target.remove()
  }
}




)
