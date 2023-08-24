function createObjectFromUserInput(userTitle, userDescription, userDeadline, userFile) {
    return {
        title: userTitle,
        description: userDescription,
        deadline: userDeadline,
        file: userFile,
    };
}

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
    showList(tasks)
}

function showList(tasks) {
    var listItems = tasks.map((element, index) => `
        <li id="${element.title}-${index}"> 
        ${element.title}<br>
        ${element.description}<br>
        Deadline: ${element.deadline}<br>
        Image: ${element.file}<br>
        <button id="deleteButton" onclick="deleteTask(${index})">Delete</button>
        </li>
    `);

    document.getElementById("tasks").innerHTML = listItems.join("");
}


function deleteTask() {
    taskToDelete = task.indexOf()
    console.log(taskToDelete)
}

// let taskId = document.getElementById(`"${element.title}-${index}"`);
   // console.log(tasks.indexOf(task))
    /*   let taskToDelete = taskId;
      tasks.splice(taskToDelete, 1)
          console.log(tasks) */


/* function deleteTask(taskToDelete) {
    taskToDelete = tasks.splice(tasks.indexOf(this), 1)

    console.log(tasks)
} */
