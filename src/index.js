import { createProject } from "./projectsManagement.js";
import { save } from "./localStorage.js";

const PROJECT_DEFAULT = createProject("PROJECT_DEFAULT");

PROJECT_DEFAULT.addTask({title: "First todo"});

PROJECT_DEFAULT.addTask({title: "Second", description: "Hi, this is a description"})

PROJECT_DEFAULT.tasks[0].addSubtask({title: "sub"});
console.log(PROJECT_DEFAULT);

save(`TASKS_${PROJECT_DEFAULT.name}`, PROJECT_DEFAULT);


var id = Math.random().toString(16).slice(2);

console.log(id)