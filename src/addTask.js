
function createTask({title, description = "", dueDate = new Date().toDateString(), piority = 4, projectID, completed = false, }){
    const id = Math.random().toString(16).slice(2);
    
    // Remove add subtask feature due to complexity issues with recursion and stringify
    /*const addSubtask = (suboptions)=> {
        suboptions.parentTask = id; 
        subCheckList.push(createTask(suboptions))
    }*/
    return {title, description, dueDate, piority, projectID, completed, id}
}


export default createTask


