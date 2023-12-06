import projects from "./projects";

const renderProjectNames = () => {
    const projectList = document.querySelector('#project-list');

    projects.forEach((project, index) => {
        const projectLi = document.createElement('li');

        projectLi.innerHTML = `
            <li data-project-index='${index}' class='project'>${project.name}</li>
        `;
        
        projectList.appendChild(projectLi);
    });
};

export default renderProjectNames;