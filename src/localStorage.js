import { createProject } from "./projectsManagement.js";
import createTask from "./addTask.js";

export function save(data) {
    console.log(data)
    data.addTask = data.addTask.toString()
    console.log(data)
    let bucket = JSON.parse(localStorage.getItem('bucket')) || [];
    
    bucket.push(data);
    
    localStorage.setItem('bucket', JSON.stringify(bucket));

};

export function retrieve () {
    let bucket = localStorage.getItem('bucket');
    bucket = JSON.parse(bucket) || [];
    for (let each of bucket) {
        each.addTask = eval("(" + each.addTask + ")");
    };
    console.log('retrieved');


    return bucket

};


