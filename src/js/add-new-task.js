import createTask from "./createTask";
import projects from "./projects";
import renderTasks2 from "./renderTasks2";
import changeActiveProject from "./changeActiveProject";

const addNewTask = () => {

    // GET ACTIVE PROJECT'S NEW TASK INFO
    const title = document.getElementById("title").value
    const description = document.getElementById("description").value
    const dueDate = document.getElementById("dueDate").value
    const priority = document.getElementById("priority").value

    // CREATE A NEW TASK
    const newTask = createTask(title, description, dueDate, priority);


    // GET ACTIVE PROJECT INDEX
    const index = document.querySelector('.active').getAttribute('data-project-index')

    // GET ACTIVE PROJECT
    const activeProject = projects[index]

    // ADD TASK TO THAT PROJECT
    activeProject.tasks.push(newTask)

    // CLEAR TASKS BEFORE RE_RENDER
    document.querySelector('#task-content').innerHTML = '';

    // RE-RENDER TASKS
    renderTasks2();

    // ALLOW CHANGE OF ACTIVE PROJECT
    changeActiveProject();
};

export default addNewTask;