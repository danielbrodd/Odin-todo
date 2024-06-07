import { createProject } from "./projectsManagement.js";
import { retrieve, save } from "./localStorage.js";

if (localStorage.getItem('bucket') === null) {
    let bucket = [];
    localStorage.setItem('bucket',JSON.stringify(bucket));
    const PROJECT_DEFAULT = createProject("PROJECT_DEFAULT");

    PROJECT_DEFAULT.addTask({title: "First todo"});

    PROJECT_DEFAULT.addTask({title: "Second", description: "Hi, this is a description"})

    save(PROJECT_DEFAULT)

    const SECOND_PROJECT = createProject('SECOND_PROJECT')
    save(SECOND_PROJECT)
}
    
let bucket = retrieve()






// save(`TASKS_${PROJECT_DEFAULT.name}`, PROJECT_DEFAULT);

// var returned = retrieve(`TASKS_${PROJECT_DEFAULT.name}`)
// sconsole.log(returned) 
