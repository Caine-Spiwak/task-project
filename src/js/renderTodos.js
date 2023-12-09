

const renderTodos = (task, i) => {
    const todoList = document.querySelector(`[data-todo-list='${i}']`)
    
    task.todos.forEach((todo, index) => {
        todoList.innerHTML += `
            <li data-todo-index=${index} class="todo">${todo.description}</li>
        `
    })
}

export default renderTodos;