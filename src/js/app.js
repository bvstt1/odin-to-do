import { Todo, Project } from './objects.js';

const defaultProject = new Project('Default Project');
const projects = [defaultProject];

function createTodo(title, description, dueDate, priority, project) {
    const todo = new Todo(title, description, dueDate, priority);
    if (project.name){
        project.todos.push(todo);
        return;
    }
    else{
        project = defaultProject;
        project.todos.push(todo);
        return;
    }
}

function createProject(name) {
    let project = new Project(name, [], true);
    return projects.push(project);
}   

export { createTodo, createProject };