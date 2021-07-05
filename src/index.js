document.addEventListener("DOMContentLoaded", () => {
  // your code here
let taskTable= document.querySelector('#tasks')
// let taskName = document.querySelector('#taskname')
// let taskUser = document.querySelector("#taskuser")
  // Form Submit Event Listener
  let taskForm = document.querySelector("#create-task-form")
  taskForm.addEventListener('submit', function(evt){
    evt.preventDefault();
    let newRow = document.createElement("tr") // Create a table TR put things in to TR
        taskTable.append(newRow)
    let newTask = evt.target['new-task-description'].value;
    let newTaskData = document.createElement("td");
        newTaskData.innerText = newTask;
        // taskName.append(newTaskData);
    
    let user = evt.target.user.value;
    let newUserData = document.createElement('td')
        newUserData.innerText = user;
        // taskUser.append(newUserData)
    let date = evt.target.date.value;
    let newDateData = document.createElement('td')
        newDateData.innerText = date;
        newRow.append(newTaskData, newUserData, newDateData)
        let priority = evt.target.priority.value
        debugger
        if (priority === "high") {
        //  taskTable.childNodes.style.color = "red"
          newRow.style.color = "red"
        }

  });
  // TO do ul event listener
  // taskForm.addEventListener('submit', function(evt){
  //   evt.preventDefault();
  //   let priority = evt.target.priority.value
  //   debugger
  //   if (priority === "high") {
  //    taskTable.childNodes.style.color = "red"

  //   }
  // })
  //  delete event listener

  taskTable.addEventListener("click", function(evt){
   
    if (evt.target.tagName === "TD"){
      
      evt.target.parentNode.remove()
    }

  })
});

//  