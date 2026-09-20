const addTask = document.querySelector("#addTask");
const taskInput = document.querySelector("#taskInput");
const taskList = document.querySelector("#taskList");
let inputShown = false;


addTask.addEventListener("click", function(){
    if(inputShown === false){
    taskInput.style.display = "block";
    inputShown = true;
    }
    else{
    const task = taskInput.value;
    console.log(task);
    const taskLi = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    taskLi.textContent = task;
    taskLi.prepend(checkbox);

    const delButton = document.createElement("button");
    delButton.textContent = "Delete";
    taskLi.appendChild(delButton);
    delButton.addEventListener("click", function(){
        taskLi.remove();
    })

    taskLi.addEventListener("change", function(){
        if(checkbox.checked){
            taskLi.style.textDecoration = "line-through";
        }
        else{
            taskLi.style.textDecoration = "none";
        }
    })

    taskList.appendChild(taskLi);
    taskInput.value = "";
    }
});
