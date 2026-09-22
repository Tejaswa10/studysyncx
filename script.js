const addTask = document.querySelector("#addTask");
const taskInput = document.querySelector("#taskInput");
const taskList = document.querySelector("#taskList");
let inputShown = false;
const darkMode = document.querySelector("#darkMode");
const body = document.querySelector("body");

darkMode.addEventListener("click", function(){
    body.classList.toggle("dark-mode");

    if(body.classList.contains("dark-mode")){
        darkMode.textContent = "☀️";
    }
    else{
        darkMode.textContent = "🌙";
    }
});


addTask.addEventListener("click", function(){
    if(inputShown === false){
    taskInput.style.display = "block";
    inputShown = true;
    }
    else{
    const task = taskInput.value;
    
    if(task === ""){
        return;
    }

    const taskLi = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    taskLi.textContent = task;
    taskLi.prepend(checkbox);

    const delButton = document.createElement("button");
    delButton.className = "del-button";
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
