import createTask from "./addTask.js";

export function createProject(name) {
    const tasks = [];
    const id = Math.random().toString(16).slice(2);

    const project = {
        name,
        id,
        tasks,
        addTask: (options) => {
            options.projectID = project.name;
            let task = createTask(options);
            
            project.tasks.push(task);
        }
    }
    /* const addTask = (options) => {
        options.projectID = name;
        let task = createTask(options);
        
        tasks.push(task);

        save(this.name, this);
    }; */

    // return {name, id, tasks, addTask}
    return project
}

