// document.addEventListener("DOMContentLoaded", () => {
// });

//find form

let form = document.querySelector("#create-task-form");
let text_field = form.querySelector("#new-task-description");
let list = document.querySelector("#tasks");
let parent = document.querySelector("#list");

console.log(list);

form.addEventListener("submit", function(evt){
  evt.preventDefault();

  let value = text_field.value;
  
  let li_tag = document.createElement("li");
  li_tag.innerText = value + " ";
  
  console.log("Value: ", priority_list.value);
  switch(priority_list.value){
    case "1":
        console.log("HIT1");
      li_tag.style.color = "red"
      li_tag.dataset.number = 1;
      break;
    case "2":
      console.log("HIT2");
      li_tag.style.color = "yellow"
      li_tag.dataset.number = 2;
      break;
    case "3":
        console.log("Hit3");
        li_tag.style.color = "green"
        li_tag.dataset.number = 3;
        break;
    default:
      break;
  }
  
  list.append(li_tag);
  let button = document.createElement("button");

  button.innerText = "x";
  li_tag.append(button);



  button.addEventListener("click", function(evt){

    evt.target.parentNode.remove();
  })
})

let priority_list = document.createElement("select");
let option_tag1 = document.createElement("option");
let option_tag2 = document.createElement("option");
let option_tag3 = document.createElement("option");

option_tag1.value = "1";
option_tag1.innerText = "1: Top Priority";
option_tag2.value = "2";
option_tag2.innerText = "2: Middle Priority";
option_tag3.value = "3";
option_tag3.innerText = "3: Low Priority";

priority_list.append(option_tag1);
priority_list.append(option_tag2);
priority_list.append(option_tag3);

// console.log(form.childNodes[5]);
// form.childNodes
form.append(priority_list);
// console.log(array)


//sorting button
let sort_btn = document.createElement("button");
sort_btn.innerText = "Sort!";

parent.insertBefore(sort_btn, list);



sort_btn.addEventListener("click", function(evt){
  let list_items = document.querySelectorAll("li");
  //getElementBy , cant do foreach
  //so switch to querySelectorAll

  let array = Array.from(list_items);
  list_items.forEach(function(item){
      item.remove();
  })
  
  //sort
  array.sort(function(a,b){
     return parseInt(a.dataset.number) - parseInt(b.dataset.number) })
  console.log("After sort: ", array);

  array.forEach(function(tag){
    list.append(tag);
  })
})

