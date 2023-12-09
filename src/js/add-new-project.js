import projects from "./projects";
import createProject from "./createProject";
import renderProjectNames from "./renderProjectNames";
import updateActiveProject from "./updateActiveProject";
// import setActiveProject from "./setActiveProject";
// import setDefaultActiveProject from "./setDefaultActiveProject";

const addNewProject = () => {
    
    // GET NEW PROJECT NAME
    const projectName = document.querySelector('#project-name').value;

    // CREATE THE NEW PROJECT
    const newProject = createProject(projectName);

    // ADD THE PROJECT TO THE LIST OF PROJECTS
    projects.push(newProject);

    // GET PROJECT LIST ELEMENT
    const projectArea = document.querySelector('#project-list');

    // CLEAR PROJECTS BEFORE RE-RENDER
    projectArea.innerHTML = '';

    // RE-RENDER PROJECT NAMES
    renderProjectNames();

    // UPDATE ACTIVE PROJECT
    updateActiveProject();
}

export default addNewProject;