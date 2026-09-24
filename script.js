const addTask = document.querySelector("#addTask");
const taskInput = document.querySelector("#taskInput");
const taskList = document.querySelector("#taskList");
let inputShown = false;
const darkMode = document.querySelector("#darkMode");
const body = document.querySelector("body");
let tasks = [];

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

    createTask(task, false);

    tasks.push({
    text: task,
    completed: false
    });

    localStorage.setItem("tasks", JSON.stringify(tasks));
    taskInput.value = "";
    }
});

taskInput.addEventListener("keydown", function(event){
    if(event.key === "Enter"){
        addTask.click();
    }
});

const savedTasks = localStorage.getItem("tasks");

if(savedTasks){
    tasks = JSON.parse(savedTasks);

    tasks.forEach(function(task){
        createTask(task.text, task.completed);
    });
}

function createTask(task, completed){
    const taskLi = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = completed;
    taskLi.textContent = task;
    taskLi.prepend(checkbox);

    const delButton = document.createElement("button");
    delButton.className = "del-button";
    delButton.textContent = "Delete";
    taskLi.appendChild(delButton);
    delButton.addEventListener("click", function(){
        taskLi.remove();

        tasks = tasks.filter(function(item){
            return item.text !== task;
        });
        localStorage.setItem("tasks", JSON.stringify(tasks));
    })

    taskLi.addEventListener("change", function(){
        if(checkbox.checked){
            taskLi.style.textDecoration = "line-through";
        }
        else{
            taskLi.style.textDecoration = "none";
        }
        const currentTask = tasks.find(function(item){
            return item.text === task;
        });
        if(currentTask){
            currentTask.completed = checkbox.checked;
            localStorage.setItem("tasks", JSON.stringify(tasks));
        }
    })

    taskList.appendChild(taskLi);

    if(checkbox.checked){
        taskLi.style.textDecoration = "line-through";
    }
}