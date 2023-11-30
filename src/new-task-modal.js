import addNewTask from "./add-new-task";
import clearForm from "./clearForm";


const newTaskModal = () => {

    // GET NEW TASK MODAL
    const modal = document.querySelector("[data-modal]")

    // GET OPEN & CLOSE BUTTON
    const openBtn = document.querySelector("[data-open-modal]")
    const closeBtn = document.querySelector("[data-close-modal]")

    // GET ADD TASK BUTTON
    const addTaskBtn = document.querySelector("#add-task-btn")

    // ADD EVENT LISTENER TO OPEN & CLOSE BUTTONS
    openBtn.addEventListener('click', () => {
        modal.showModal();
    });

    closeBtn.addEventListener('click', () => {
        modal.close();
    });

    // ADD EVENT LISTENER & HANDLE ADD TASK BUTTON
    addTaskBtn.addEventListener('click', (event) => {
        // NOT SUBMITTING TO BACK END
        event.preventDefault();
        
        // *ADD NEW TASK*
        addNewTask();

        // CLEAR FORM
        clearForm();

        // CLOSE MODAL
        modal.close();
    })
}

export default newTaskModal;