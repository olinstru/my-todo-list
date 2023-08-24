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

function deleteTask(i) {
    tasks.splice(i, 1)
}
