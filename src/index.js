document.addEventListener("DOMContentLoaded", () => {
  // your code here

  let taskTable= document.querySelector('#tasks')
  let taskForm = document.querySelector("#create-task-form")

  // Form to SUBMIT Event Listener
  taskForm.addEventListener('submit', function(evt){
      evt.preventDefault();
    // Create a table TR to put data in rows
      let newRow = document.createElement("tr")
          taskTable.append(newRow)

    // Create TD for task description
      let newTask = evt.target['new-task-description'].value;
      let newTaskData = document.createElement("td");
          newTaskData.innerText = newTask;
          // taskName.append(newTaskData);
    // Create TD for task user
      let user = evt.target.user.value;
      let newUserData = document.createElement('td')
          newUserData.innerText = user;
          // taskUser.append(newUserData)
    // Create TD for task date
      let date = evt.target.date.value;
      let newDateData = document.createElement('td')
          newDateData.innerText = date;
          newRow.append(newTaskData, newUserData, newDateData)

    // Change COLOR based off priority
      let priority = evt.target.priority.value
      if (priority === "high") {
        newRow.style.color = "red"
      }
      if (priority === "medium") {
        newRow.style.color = "orange"
      }
      if (priority === "low") {
        newRow.style.color = "blue"
      }
    });

  //  DELETE event listener
  taskTable.addEventListener("click", function(evt){
    if (evt.target.tagName === "TD"){
      evt.target.parentNode.remove()
    }

  })
});

// });
