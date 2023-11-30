import addNewProject from "./add-new-project";

const newProjectModal = () => {

    // GET MODAL ELEMENT
    const modal = document.querySelector("[data-project-modal]")

    // GET FORM ELEMENT
    const form = document.querySelector('#project-name');

    // GET OPEN & CLOSE BUTTON
    const openBtn = document.querySelector("[data-open-project-modal]")
    const closeBtn = document.querySelector("[data-close-project-modal]")

    // *GET ADD PROJECT BUTTON*
    const addProjectBtn = document.querySelector("#add-project-btn")

    // ADD EVENT LISTENER TO OPEN & CLOSE BUTTON
    openBtn.addEventListener('click', () => {
        modal.showModal();
    });

    closeBtn.addEventListener('click', () => {
        modal.close();
    });

    // *ADD EVENT LISTENER TO ADD PROJECT BUTTON*
    addProjectBtn.addEventListener('click', (event) => {
        // NOT SENDING TO BACK END
        event.preventDefault();
        
        // *ADD NEW PROJECT LOGIC*
        addNewProject();
        
        // RESET FORM VALUES
        form.value = '';
        // CLOSE MODAL
        modal.close();
    })
}

export default newProjectModal;