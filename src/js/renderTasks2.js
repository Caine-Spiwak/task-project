import projects from "./projects";

const renderTasks2 = () => {
   
    // GET ACTIVE PROJECT / INDEX
    const index = document.querySelector('.active').getAttribute('data-project-index')

    // GET ACTIVE PROJECT INDEX
    // const index = x.getAttribute('data-project-index')

    // GET TASKS FOR ACTIVE PROJECT
    const tasks = projects[index].tasks

    // RENDER TASKS
    tasks.forEach((task) => {
        const taskContent = document.querySelector('#task-content')
        const taskEl = document.createElement('div');

        taskEl.innerHTML = `
            <div data-task-index='${index}' class='task'>
                <div class="task-row">
                    <div class="task-title">${task.title}</div>
                    <i class="fa-solid fa-ellipsis-vertical"></i>
                </div>
                <div class="task-description">${task.description}</div>
                <div class="task-row task-btm-row">
                    <div class="task-due-date">${task.dueDate}</div>
                    <div class="task-priority">${task.priority}</div>
                </div>
            </div>
        `;

        taskContent.appendChild(taskEl)
    })
};

export default renderTasks2;