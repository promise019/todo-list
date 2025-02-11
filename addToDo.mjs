let addToDo = document.getElementById("addToDo");//add to-do list button
let display = document.getElementById('show-toDo');//div that displays all our todo
let clearAll = document.getElementById('clear');//auto clear all to-do



//responsible for reloading data even after exiting or refreshing browser
document.addEventListener('DOMContentLoaded', ()=>{
    Atask();/*function for adding and deleting data from webpage and localStorage*/
 });
 


//add to do list
addToDo.addEventListener('click', ()=>{
    let toDoValue = document.getElementById('todoValue');//typed value
    let task = toDoValue.value.trim();
    if (task==="") return alert("pls input a value");
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];//fetch to-do from localstorage, ready for pushing
    //
    tasks.push(task);// push the fetched to the empty array
    localStorage.setItem("tasks", JSON.stringify(tasks))//sets the value in local storage
    
    toDoValue.value = "";//empty's input field after adding to-do
    Atask();
});



/*function for adding and deleting data from webpage and localStorage*/
function Atask() {
    let current = JSON.parse(localStorage.getItem("tasks")) || [];
    display.innerHTML="";//stop todo from duplicating after adding to do
    
    current.forEach((todo, index) => {
        let ul = document.createElement('ul');
        let li = document.createElement('li');
        if (todo.length > 30) {
            li.innerText=todo.slice(0, 35) + ".....";
        } else {
            li.innerText=todo
        }
        

        let deleteButton = document.createElement('button');
        deleteButton.innerText = "delete";
        deleteButton.className="delete";
    
        li.appendChild(deleteButton);
        ul.appendChild(li)
        display.appendChild(ul);
    });
        
//single deletion per to-do
        let deleteButton = document.getElementsByClassName('delete')
        for (let i = 0; i < deleteButton.length; i++) {
            deleteButton[i].addEventListener("click", (index)=>{
               deleteButton[i].parentElement.remove();
               let value = JSON.parse(localStorage.getItem('tasks'))
               value.splice(i , 1)
               localStorage.setItem("tasks", JSON.stringify(value))
            })
        };
}

//empty all to-do
clearAll.addEventListener('click', ()=>{
    localStorage.setItem("tasks", JSON.stringify([]))
    display.innerHTML="";
})