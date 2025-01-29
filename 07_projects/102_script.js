let remainingTasks = 0;
let tasks = [];

const addButton = document.querySelector("#addButton");
const taskInput = document.querySelector("#task");
const list = document.querySelector(".list");
const remainingTasksDisplay = document.querySelector(".remainingTasks");
const upperDiv = document.querySelector(".upper");
const taskList = document.querySelector('.tasks')
addButton.addEventListener("click", () => {
    const taskAdded = taskInput.value.trim();
    
    function showMessage(msg)
    {
        let messageBox = document.querySelector(".message-box");
        if (!messageBox)
        {
            messageBox = document.createElement("div");
            messageBox.classList.add("message-box");
            upperDiv.insertBefore(messageBox, list);
        }
        messageBox.innerHTML = msg;
        setTimeout(() =>
        {
            if (messageBox) messageBox.remove();
        }, 3000);
    }

    if (taskAdded === "")
    {
        showMessage("Please enter a valid task!");
        return;
    }
    if (tasks.includes(taskAdded))
    {
        showMessage("Task is already added!");
        return;
    }

    tasks.push(taskAdded);
    remainingTasks++;

    remainingTasksDisplay.innerHTML = `You have ${remainingTasks} task(s) to complete.`;
    const newTask = document.createElement("div");
    newTask.classList('newTask')
    newTask.innerHTML = taskAdded;

    taskList.appendChild(newTask);
    taskInput.value = "";
});
