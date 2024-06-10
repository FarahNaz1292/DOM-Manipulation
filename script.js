document.addEventListener("DOMContentLoaded",function(){
    //input tag
const task=document.getElementById('task');
// add button tag
const addBtn=document.getElementById('addBtn');
//list tag
const tasklist=document.getElementById('taskList');
addBtn.addEventListener("click", function(){
    const addText=task.value;
    //creating an element with JS
    const listItem=document.createElement('li');
    //adding the list item 
    listItem.innerHTML=`${addText} <span id="delete" >Delete</span>`;
    const newTask = task.value;

    if (newTask === '') {
        alert('Please enter a task!');
        return;
    }
    //adding list item in list 
    tasklist.appendChild(listItem);
    task.value = '';
   
    const deleteItem=document.querySelector("#delete")
    deleteItem.addEventListener("click",function(){
        tasklist.removeChild(listItem)
    })
   
})

})