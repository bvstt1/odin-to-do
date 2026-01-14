import { Todo, Project } from './objects.js';
import { saveToStorage } from './storage.js';


const defaultProject = new Project('Default Project');
const projects = [defaultProject];

function createTodo(title, description, dueDate, priority, project) {
    const todo = new Todo(title, description, dueDate, priority);
    if (project.name){
        project.todos.push(todo);
        console.log(project)
        saveToStorage("todo", todo)
        console.log(project)
        return;
    }
    else{
        project = defaultProject;
        project.todos.push(todo);
        console.log(project)
        saveToStorage("todo", todo)
        console.log(project)
        return;
    }
}

function createProject(name) {
    let project = new Project(name, [], true);
    return projects.push(project);
}   

export { createTodo, createProject };