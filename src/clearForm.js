

const clearForm = () => {
    const title = document.getElementById("title")
    const description = document.getElementById("description")
    const dueDate = document.getElementById("dueDate")
    const priority = document.getElementById("priority")

    title.value = '';
    description.value = '';
    dueDate.value = '';
    priority.value = '';
}

export default clearForm;