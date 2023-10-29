const projects = [];
const tasks = [];

function addProject() {
    const projectName = document.getElementById("project-name").value;
    if (projectName) {
        projects.push(projectName);
        updateProjects();
        document.getElementById("project-name").value = "";
        updateTaskSelect();
    }
}

function addTask() {
    const taskName = document.getElementById("task-name").value;
    const projectSelect = document.getElementById("project-select");
    const selectedProject = projectSelect.options[projectSelect.selectedIndex].value;
    
    if (taskName && selectedProject !== "default") {
        tasks.push({ name: taskName, project: selectedProject });
        updateTasks();
        document.getElementById("task-name").value = "";
    }
}

function updateProjects() {
    const projectList = document.getElementById("projects");
    projectList.innerHTML = "";
    projects.forEach(project => {
        const listItem = document.createElement("li");
        listItem.textContent = project;
        projectList.appendChild(listItem);
    });
}

function updateTasks() {
    const taskList = document.getElementById("tasks");
    taskList.innerHTML = "";
    tasks.forEach(task => {
        const listItem = document.createElement("li");
        listItem.textContent = `${task.name} (Project: ${task.project})`;
        taskList.appendChild(listItem);
    });
}

function updateTaskSelect() {
    const projectSelect = document.getElementById("project-select");
    projectSelect.innerHTML = '<option value="default">Select Project</option>';
    projects.forEach(project => {
        const option = document.createElement("option");
        option.value = project;
        option.textContent = project;
        projectSelect.appendChild(option);
    });
}