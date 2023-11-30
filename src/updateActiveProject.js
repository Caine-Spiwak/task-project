import renderTasks2 from "./renderTasks2";
import changeActiveProject from "./changeActiveProject";

const updateActiveProject = () => {
    
    // GET ALL PROJECT ELEMENTS
    const projects = document.querySelectorAll('.project')

    // GET NEW PROJECT'S INDEX
    let newProjectIndex = 0;

    projects.forEach(() => {
        newProjectIndex += 1;
    })

    newProjectIndex -= 1;

    // GET NEW PROJECT ELEMENT
    const newActiveProject = document.querySelector(`[data-project-index="${newProjectIndex}"]`);
    
    // SET NEW PROJECT TO ACTIVE
    newActiveProject.classList.add('active')

    // CLEAR TASKS FOR RE-RENDER
    document.querySelector('#task-content').innerHTML = '';

    // RE-RENDER ACTIVE PROJECTS TASKS
    renderTasks2();

    // ALLOW CHANGE OF ACTIVE PROJECT
    changeActiveProject();
}

export default updateActiveProject;