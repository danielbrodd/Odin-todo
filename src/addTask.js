
function createTask({name, description = "", dueDate = new Date(), piority = 4, projectID = "PROJECT-DEFAULT", subCheckList = [], completed = false}){
    return {name, description, dueDate, piority, projectID, subCheckList, completed}
}


function addTask(options, container){
    var task = createTask(options);
    container.push(task)
}

export default addTask