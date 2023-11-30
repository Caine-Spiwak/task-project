import newProjectModal from './new-project-modal';
// import renderTasks from './renderTasks';
// import setDefaultActiveProject from './setDefaultActiveProject';
// import setActiveProject from './setActiveProject';
import renderProjectNames from './renderProjectNames';
// import getActiveProject from './getActiveProject';
// import renderDefaultTasks from './renderDefaultTasks';
import initialActiveProject from './initialActiveProject';
import './style.css'
import renderTasks2 from './renderTasks2';
import changeActiveProject from './changeActiveProject';
import newTaskModal from './new-task-modal';

// RENDER PROJECT NAMES
renderProjectNames();

// SET INITIAL ACTIVE PROJECT
initialActiveProject();

// RENDER TASKS
renderTasks2();

// ADD PROJECT FORM
newProjectModal();

// SWITCH ACTIVE PROJECT - KEEPING IN CASE LOADS FROM LOCAL STORAGE
changeActiveProject();

// ADD TASK MODAL
newTaskModal();
// setDefaultActiveProject();
// setActiveProject(0);
// setActiveProject();

// renderDefaultTasks();
// renderTasks();

// newProjectModal();

// newTaskModal();






