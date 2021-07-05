document.addEventListener("DOMContentLoaded", () => {
  // your code here
});
​
let taskForm = document.querySelector("#create-task-form")
let ul = document.querySelector("#tasks")
function selectPriorty(){
  select = document.createElement("select")
​
  select.appendChild(new Option("high priorty", 1))
  select.appendChild(new Option("medium priorty", 2))
  select.appendChild(new Option("low priorty", 3))
  return select
}
​
taskForm.appendChild(selectPriorty())
​
function removeTask(evt){
​
  if (evt.target.tagName === "BUTTON"){
    evt.target.parentNode.remove()
  }
}
​
​
ul.addEventListener("click", removeTask)
​
​
function addListenerToTask(evt){
  evt.preventDefault()
  let button = document.createElement("Button")
  let text = document.createTextNode("x")
  button.appendChild(text)
  let taskToAdd = document.querySelector("#new-task-description").value
  let taskPriorty = document.querySelector("select").value
  let newTaskLi = document.createElement("li")
  newTaskLi.innerText = taskToAdd
​
  if(taskPriorty === "1"){
    newTaskLi.style.color = "red"
  }else if (taskPriorty === "2"){
    newTaskLi.style.color = "yellow"
  }else if (taskPriorty === "3"){
    newTaskLi.style.color = "MediumSeaGreen"
  }

  newTaskLi.appendChild(button)
  ul.append(newTaskLi)
}
taskForm.addEventListener("submit", addListenerToTask)
​
​
​
​
​
function sortTask(){
​
  var items = ul.childNodes;
  var itemsArr = [];
  for (var i in items) {
      if (items[i].nodeType == 1) { // get rid of the whitespace text nodes
          itemsArr.push(items[i]);
      }
  }
  itemsArr.sort((a, b) => (a.style.color.length > b.style.color.length) ? 1 : -1)
  for (i = 0; i < itemsArr.length; ++i) {
    ul.appendChild(itemsArr[i]);

  }
}
