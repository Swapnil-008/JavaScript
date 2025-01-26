const addButton = document.getElementById('add-btn');
const deleteButton = document.getElementById('remove-btn');
const list = document.getElementById('list');

addButton.addEventListener('click', (e) => {
    e.preventDefault();
    const input = document.getElementById('addTask');
    const task = input.value.trim();
    const message = document.querySelector('.message')
    input.value = "";
    if (task)
    {
        const newTask = document.createElement('li');
        newTask.textContent = task;
        newTask.classList.add('task');
        list.appendChild(newTask);
        message.innerHTML = `Task ${task} is Added!`;
    }
}, false);

deleteButton.addEventListener('click', (e) => {
    e.preventDefault();
    const tasks = document.querySelectorAll('.task');
    const deleteList = document.querySelector('#removeTask');
    const deleteText = deleteList.value.trim();
    const message = document.querySelector('.message')
    deleteList.value = "";

    if (deleteText)
    {
        let taskFound = false;
        tasks.forEach((task) => {
            if (task.textContent === deleteText)
            {
                task.remove();
                taskFound = true;
            }
        });
        if(taskFound)
        {
            message.innerHTML = `Task ${deleteText} is Deleted!`;
        }
        else{
            message.innerHTML = `Task ${deleteText} is not found in the list.`;
            message.setAttribute
        }
    }
});
