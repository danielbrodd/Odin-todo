
function createTask({name, description = "", dueDate = new Date(), piority = 4, projectID = "PROJECT-DEFAULT", subCheckList = [], completed = false}){
    return {name, description, dueDate, piority, projectID, subCheckList, completed}
}


function addTask(options){
    var task = createTask(options);
    tasks.push(task)
}

export default addTask