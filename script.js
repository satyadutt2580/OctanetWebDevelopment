

let tasks = [];

function renderTasks() {
    const tasksList = document.getElementById('tasks');
    tasksList.innerHTML = '';
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.textContent = `${index + 1}. Task: ${task.task}, Start Date: ${task.start_date}, End Date: ${task.end_date}`;
        
        // Add a button to remove the task
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.onclick = () => removeTask(index); // Call removeTask function with index
        li.appendChild(removeButton);

        tasksList.appendChild(li);
    });
}

function addTask() {
    const taskInput = document.getElementById('task');
    const startDateInput = document.getElementById('start-date');
    const endDateInput = document.getElementById('end-date');

    const task = {
        task: taskInput.value,
        start_date: startDateInput.value,
        end_date: endDateInput.value
    };

    tasks.push(task);
    renderTasks();

    // Reset input fields
    taskInput.value = '';
    startDateInput.value = '';
    endDateInput.value = '';
}

function removeTask(index) {
    tasks.splice(index, 1); // Remove the task at the given index
    renderTasks(); // Re-render the tasks list
}
