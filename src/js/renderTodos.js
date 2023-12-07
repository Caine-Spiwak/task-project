import projects from "./projects";

const renderTodos = (index) => {

    // GET TODOS FOR ACTIVE PROJECTS TASKS
    const tasks = projects[index].tasks

    // RENDER TODOS
    tasks.forEach((task, i) => {
        const currentTask = document.querySelector(`[data-task-index='${i}']`)
        const todoList = document.createElement('ol')

        todoList.innerHTML += `
            <li data-todo-index='${i}' class="todo">
                <span class="todo-description">${task.todos.description}</span>
            </li>
        `;

        currentTask.appendChild(todoList)
    })

    
}

export default renderTodos;