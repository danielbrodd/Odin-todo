import createTask from "./addTask.js";
import { save } from "./localStorage.js";
export function createProject(name) {
    const tasks = [];
    const id = Math.random().toString(16).slice(2);
    const addTask = (options) => {
        options.projectID = name;
        let task = createTask(options);
        
        tasks.push(task);
    };

    return {name, id, tasks, addTask}
}

