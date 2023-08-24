function createObjectFromUserInput(userTitle, userDescription, userDeadline, userFile) {
    return {
        title: userTitle,
        description: userDescription,
        deadline: userDeadline,
        file: userFile,
    };
}

let tasks = new Array();

// Function to clear input fields
function clearInputFields() {
    document.getElementById("taskTitle").value = "";
    document.getElementById("taskDescription").value = "";
    document.getElementById("taskDeadline").value = "";
    document.getElementById("taskFile").value = "";
}

// Function to handle image upload
function handleImageUpload() {
    const input = document.getElementById('imageInput');
    const imageContainer = document.getElementById('imageContainer');

    if (input.files && input.files[0]) {
        const reader = new FileReader();

        reader.onload = function(e) {
            const img = document.createElement('img');
            img.src = e.target.result;
            img.style.maxWidth = '100%';
            imageContainer.innerHTML = '';
            imageContainer.appendChild(img);
        };

        reader.readAsDataURL(input.files[0]);
    }
}



// Add task on click
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

    clearInputFields(); // Call the function to clear inputs
}

function showList(tasks) {
    var listItems = tasks.map((element, index) => `
        <li id="${element.title}-${index}"> 
        ${element.title}<br>
        ${element.description}<br>
        Deadline: ${element.deadline}<br>
        Image: ${element.file ? `<img id="userImg" src="${element.file}">
        <br>` : 'No image available<br>'}
        <button id="deleteButton" onclick="deleteTask(${index})">Delete</button>
        </li>
    `);

    document.getElementById("tasks").innerHTML = listItems.join("");
    console.log(document.getElementById("taskFile").value);

}

function deleteTask(index) {
    tasks.splice(index, 1);
    console.log(tasks)
    showList(tasks); // Refresh the list after deletion
}