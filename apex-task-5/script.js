let tasks =
JSON.parse(localStorage.getItem("tasks")) || [];

displayTasks();

function addTask() {

    let input =
    document.getElementById("taskInput");

    if(input.value === "")
        return;

    tasks.push(input.value);

    localStorage.setItem(
        "tasks",
        JSON.stringify(tasks)
    );

    input.value = "";

    displayTasks();
}

function displayTasks() {

    let list =
    document.getElementById("taskList");

    list.innerHTML = "";

    tasks.forEach((task,index)=>{

        list.innerHTML += `
        <li>
            ${task}
            <button onclick="deleteTask(${index})">
                Delete
            </button>
        </li>`;
    });
}

function deleteTask(index){

    tasks.splice(index,1);

    localStorage.setItem(
        "tasks",
        JSON.stringify(tasks)
    );

    displayTasks();
}

function toggleMode(){
    document.body.classList.toggle("dark");
}

function sendMessage(){

    document.getElementById("message")
    .innerHTML =
    "Message sent successfully!";
}