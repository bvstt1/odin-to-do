import { createTodo } from './app.js';

const openModal = document.querySelector('#todo-popup');
const modal = document.querySelector('#modal');
const closeModal = document.querySelector('#close-modal');

const inputTitle = document.querySelector('#title');
const inputDescription = document.querySelector('#description');
const inputDueDate = document.querySelector('#due-date');
const inputPriority = document.querySelector('#priority');
const inputProject = document.querySelector('#project-select');

openModal.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.add('active');
});

closeModal.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.remove('active');
    inputTitle.value = '';
    inputDescription.value = '';
    inputDueDate.value = '';
    inputPriority.value = '';
});

const saveTodoButton = document.querySelector('#save-todo');

saveTodoButton.addEventListener('click', (e) => {
    e.preventDefault();

    if (!inputTitle.value || !inputDueDate.value || !inputPriority.value || !inputDescription.value || !inputProject.value) {
        alert('Completed all required fields');
        return;
    }

    createTodo(inputTitle.value, inputDescription.value, inputDueDate.value, inputPriority.value, inputProject.value);

    modal.classList.remove('active');
    inputTitle.value = '';
    inputDescription.value = '';
    inputDueDate.value = '';
    inputPriority.value = '';
});