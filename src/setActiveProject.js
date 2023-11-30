

const setActiveProject = (index) => {
    const projects = document.querySelectorAll('.project')

    projects.forEach((project) => {

        const answer = project.classList.contains('active');
        console.log(answer);

        if (project.classList.contains('active')) {
            project.addEventListener('click', () => {
                document.querySelector('.active').classList.remove('active');
                project.classList.add('active')
            })
        } else {
            const activeProject = document.querySelector(`[data-project-index="${index}"`)
            activeProject.classList.add('active')
        }
        
    })
}

export default setActiveProject;