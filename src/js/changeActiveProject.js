import renderTasks2 from "./renderTasks2";



const changeActiveProject = () => {

    // GET ALL PROJECT ELEMENTS
    const projects = document.querySelectorAll('.project')

    // ADD EVENT LISTENER TO EACH PROJECT
    projects.forEach((project) => {
        project.addEventListener("click", () => {

            // SWITCH ACTIVE CLASS WHEN NEW PROJECT CLICKED
            document.querySelector('.active').classList.remove('active');
            project.classList.add('active')

            document.querySelector('#task-content').innerHTML = '';

            renderTasks2();
        })
    })

};

export default changeActiveProject;
