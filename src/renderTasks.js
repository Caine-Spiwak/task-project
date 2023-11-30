import projects from "./projects";

const renderTasks = () => {
    const activeProjects = document.querySelectorAll('.project');

    activeProjects.forEach((project) => {
        project.addEventListener('click', () => {
            const content = document.querySelector('#task-content');
            content.innerHTML = '';

            const index = project.getAttribute('data-project-index')

            const activeProject = projects[index];

            activeProject['tasks'].forEach((task, index) => {

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
        
                content.appendChild(taskEl);
            });
        })
    });
};

export default renderTasks;