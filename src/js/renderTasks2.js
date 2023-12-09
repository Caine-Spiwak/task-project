import projects from "./projects";
import renderTodos from "./renderTodos";

const renderTasks2 = () => {
   
    // GET ACTIVE PROJECT / INDEX
    const index = document.querySelector('.active').getAttribute('data-project-index')

    // GET TASKS FOR ACTIVE PROJECT
    const tasks = projects[index].tasks

    // RENDER TASKS
    const taskContent = document.querySelector('#task-content')
    
    tasks.forEach((task, i) => {

        taskContent.innerHTML += `
            <div data-task-index='${i}' class='task'>
                <div class="task-row">
                    <div class="task-title">${task.title}</div>
                    <i class="fa-solid fa-ellipsis-vertical"></i>
                </div>
                <div class="task-description">${task.description}</div>
                <ol id="todo-list" data-todo-list='${i}'></ol>
                <div class="task-row task-btm-row">
                    <div class="task-due-date">${task.dueDate}</div>
                    <div class="task-priority">${task.priority}</div>
                </div>
            </div>
        `;

        renderTodos(task, i);


    })

    // RENDER TODOS
    // renderTodos();
};

export default renderTasks2;