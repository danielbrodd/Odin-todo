
function createTask({title, description = "", dueDate = new Date().toDateString(), piority = 4, subCheckList = [], projectID, completed = false, parentTask}){
    const id = Math.random().toString(16).slice(2);
    const addSubtask = (suboptions)=> {
        suboptions.parentTask = id; 
        subCheckList.push(createTask(suboptions))
    }
    return {title, description, dueDate, piority, subCheckList, projectID, completed, id, parentTask, addSubtask}
}


export default createTask


