function save () {
    localStorage.setItem("allTasks", JSON.stringify(allTasks));
};

function retrieve (item) {
    var temp1 = localStorage.getItem(item);
    temp1 = JSON.parse(temp1);
    return temp1;
};