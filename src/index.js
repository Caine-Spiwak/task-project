import renderProjectNames from './js/renderProjectNames';
import initialActiveProject from './js/initialActiveProject';
import renderTasks2 from './js/renderTasks2';
import newProjectModal from './js/new-project-modal';
import changeActiveProject from './js/changeActiveProject';
import newTaskModal from './js/new-task-modal';

// IMPORT CSS
import './main.css'
import './css/structure.css'
import './css/header.css'
import './css/sidebar.css'
import './css/content.css'


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
