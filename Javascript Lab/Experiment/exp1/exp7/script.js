let lists = JSON.parse(localStorage.getItem("todoLists")) || [];

let currentListId = null;

let history = [];


function saveData() {
    localStorage.setItem("todoLists", JSON.stringify(lists));
}



function addList() {

    const input = document.getElementById("listInput");

    const name = input.value.trim();

    if (name === "") {
        alert("Enter a list name.");
        return;
    }

    const newList = {
        id: Date.now(),
        name: name,
        tasks: []
    };

    lists.push(newList);

    saveData();

    input.value = "";

    currentListId = newList.id;

    renderLists();
    renderTasks();
}



function selectList(id) {

    currentListId = id;

    renderLists();
    renderTasks();
}

function getCurrentList() {

    return lists.find(list => list.id === currentListId);
}


function addTask() {

    if (currentListId === null) {
        alert("First create or select a list.");
        return;
    }

    const input = document.getElementById("taskInput");

    const text = input.value.trim();

    if (text === "") {
        alert("Enter a task.");
        return;
    }

    const list = getCurrentList();

    // Save previous state for Undo
    saveHistory();

    list.tasks.push({
        id: Date.now(),
        text: text,
        completed: false
    });

    saveData();

    input.value = "";

    renderTasks();
}


function editTask(taskId) {

    const list = getCurrentList();

    const task = list.tasks.find(task => task.id === taskId);

    if (!task) return;

    const newText = prompt("Edit your task:", task.text);

    if (newText === null) {
        return;
    }

    if (newText.trim() === "") {
        alert("Task cannot be empty.");
        return;
    }

    saveHistory();

    task.text = newText.trim();

    saveData();

    renderTasks();
}


function deleteTask(taskId) {

    const list = getCurrentList();

    saveHistory();

    list.tasks = list.tasks.filter(
        task => task.id !== taskId
    );

    saveData();

    renderTasks();
}


function toggleTask(taskId) {

    const list = getCurrentList();

    const task = list.tasks.find(
        task => task.id === taskId
    );

    if (!task) return;

    saveHistory();

    task.completed = !task.completed;

    saveData();

    renderTasks();
}


function deleteCurrentList() {

    if (currentListId === null) {
        return;
    }

    const list = getCurrentList();

    const confirmDelete = confirm(
        `Delete "${list.name}" list?`
    );

    if (!confirmDelete) {
        return;
    }

    saveHistory();

    lists = lists.filter(
        list => list.id !== currentListId
    );

    currentListId = null;

    saveData();

    renderLists();
    renderTasks();
}



function saveHistory() {

    history.push(
        JSON.stringify(lists)
    );

    // Keep only last 10 actions
    if (history.length > 10) {
        history.shift();
    }
}



function undo() {

    if (history.length === 0) {
        alert("Nothing to undo.");
        return;
    }

    const previousState = history.pop();

    lists = JSON.parse(previousState);

    saveData();

    // Check if current list still exists
    const exists = lists.some(
        list => list.id === currentListId
    );

    if (!exists) {

        if (lists.length > 0) {
            currentListId = lists[0].id;
        } else {
            currentListId = null;
        }
    }

    renderLists();
    renderTasks();
}


function renderLists() {

    const container =
        document.getElementById("listsContainer");

    container.innerHTML = "";

    lists.forEach(list => {

        const button = document.createElement("button");

        button.textContent = list.name;

        button.className = "list-btn";

        if (list.id === currentListId) {
            button.classList.add("active");
        }

        button.onclick = function () {
            selectList(list.id);
        };

        container.appendChild(button);
    });
}



function renderTasks() {

    const title =
        document.getElementById("currentListName");

    const taskList =
        document.getElementById("taskList");

    taskList.innerHTML = "";

    const deleteListButton =
        document.querySelector(".delete-list");

    if (currentListId === null) {

        title.textContent = "Select a List";

        deleteListButton.style.display = "none";

        return;
    }

    const list = getCurrentList();

    title.textContent = list.name;

    deleteListButton.style.display = "block";

    list.tasks.forEach(task => {

        const li = document.createElement("li");

        li.className = "task";

        if (task.completed) {
            li.classList.add("completed");
        }


        // Left section
        const left = document.createElement("div");

        left.className = "task-left";


        // Checkbox
        const checkbox =
            document.createElement("input");

        checkbox.type = "checkbox";

        checkbox.checked = task.completed;

        checkbox.onchange = function () {
            toggleTask(task.id);
        };


        // Task text
        const span =
            document.createElement("span");

        span.textContent = task.text;

        span.className = "task-text";


        left.appendChild(checkbox);
        left.appendChild(span);


        // Buttons
        const actions =
            document.createElement("div");

        actions.className = "task-actions";


        // Edit
        const editButton =
            document.createElement("button");

        editButton.textContent = "Edit";

        editButton.className = "edit-btn";

        editButton.onclick = function () {
            editTask(task.id);
        };


        // Delete
        const deleteButton =
            document.createElement("button");

        deleteButton.textContent = "Delete";

        deleteButton.className = "delete-btn";

        deleteButton.onclick = function () {
            deleteTask(task.id);
        };


        actions.appendChild(editButton);
        actions.appendChild(deleteButton);


        li.appendChild(left);
        li.appendChild(actions);

        taskList.appendChild(li);
    });
}


if (lists.length > 0) {

    currentListId = lists[0].id;
}

renderLists();
renderTasks();