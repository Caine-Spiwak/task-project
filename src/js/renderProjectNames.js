import projects from "./projects";

const renderProjectNames = () => {
    const projectList = document.querySelector('#project-list')

    projects.forEach((project, index) => {
        projectList.innerHTML += `
            <li data-project-index='${index}' class='project'>${project.name}</li>
        `;

    
    });
};

export default renderProjectNames;