import projects from "./projects";

const renderTodos = (index) => {

    // GET TODOS FOR ACTIVE PROJECTS TASKS
    const tasks = projects[index].tasks     //[0].todos

    // RENDER TODOS
    tasks.forEach((task, i) => {
        const currentTask = document.querySelector(`[data-task-index='${i}']`)
        const currentTodos = tasks[i].todos
        const todoList = document.createElement('ol')
        todoList.classList.add('todo-list')

        currentTodos.forEach((todo, i) => {
            
            todoList.innerHTML += `
            <li data-todo-index='${i}' class="todo">
                <span class="todo-description">${todo.description}</span>
            </li>
            `;

            currentTask.appendChild(todoList)
        })
    })
}

export default renderTodos;