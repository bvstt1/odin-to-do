export class Project{
    constructor(name){
        this.name = name;
        this.todos = [];
        this.state = true;
    }
}

export class Todo{
    constructor(title, description, dueDate, priority){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.completed = false;
    }
}