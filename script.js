// Create objet from user imput
function createObjectFromUserInput(userTitle, userDescription, userDeadline, userFile) {
    return {
        title: userTitle,
        description: userDescription,
        deadline: userDeadline,
        file: userFile,
    };
}

// Assign objet to function "add task" (on click "Add" button)
let tasks = new Array();

function addTask() {
    let task = createObjectFromUserInput(
        document.getElementById("taskTitle").value,
        document.getElementById("taskDescription").value,
        document.getElementById("taskDeadline").value,
        document.getElementById("taskFile").value
    );

    if (!task) {
        alert("Please add a task");
    }

    tasks.push(task);
    console.log(tasks)

    document.getElementById("tasks").innerHTML = ""

    insertTask(tasks)
}

// Add new task to To Do List
function insertTask(tasks) {
    tasks.forEach((element, index) => {
        document.getElementById("tasks").innerHTML += `
            <li id="${element.title}-${index}"> 
            ${element.title}<br>
            ${element.description}<br>
            Deadline: ${element.deadline}<br>
            Image: ${element.file}<br>
            <button id="deleteButton" onclick="deleteTask()">Delete</button>
            </li>
        `
    });
}


// Function to delete task (on click "Delete" button)
function deleteTask(taskToDelete) {
    let taskToDelete = tasks.indexOf(taskToDelete)
    tasks.splice(taskToDelete, 1)

    console.log(tasks)
}

