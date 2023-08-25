// Function to turn user imput into an objet
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
/* function handleImageUpload(file) {
    const reader = new FileReader();

            reader.onload = function(e) {
                const img = document.createElement('img');
                img.src = e.target.result;
                img.style.maxWidth = '100%';
                imageContainer.innerHTML = '';
                imageContainer.appendChild(img);
            };

            reader.readAsDataURL(file);
} */

// Function to convert image to Base64 string
function onChange() {
    let userImg = document.getElementById("taskFile");
    userImg.addEventListener('change', function(event) {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onloadend = function() {
            const base64 = reader.result;
            document.getElementById('outputBase64').value = base64;

            // Call showList after loading the Base64
            // showList(tasks, base64);
        };

        reader.readAsDataURL(file);
    });
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
    console.log(tasks);

    document.getElementById("tasks").innerHTML = ""
    showList(tasks)

    clearInputFields(); // Call the function to clear inputs
}

// Function to show list of tasks
function showList(tasks, base64) {
    var listItems = tasks.map((element, index) => `
        <li id="${element.title}-${index}"> 
        ${element.title}<br>
        ${element.description}<br>
        Deadline: ${element.deadline}<br>
        Base64: ${base64}<br>
        Image:<br> ${element.file ? `<img id="userImg" src="${base64}">
        <br>` : 'No image available<br>'}
        <button id="deleteButton" onclick="deleteTask(${index})">Delete</button>
        </li>
    `);

    document.getElementById("tasks").innerHTML = listItems.join("");
}

// Function to delete a task
function deleteTask(index) {
    tasks.splice(index, 1);
    console.log(tasks)
    showList(tasks); // Refresh the list after deletion
}