

const getActiveProject = () => {
    const activeProject = document.querySelector('.active')
    const index = activeProject.getAttribute('data-project-index')

    return index;
}

export default getActiveProject;