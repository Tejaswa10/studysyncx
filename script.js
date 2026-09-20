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
    taskLi.textContent = task;
    taskList.appendChild(taskLi);
    taskInput.value = "";
    };  
});
