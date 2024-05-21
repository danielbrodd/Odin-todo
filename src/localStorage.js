export function save(dataString, data) {
    localStorage.setItem(dataString, JSON.stringify(data));
};

export function retrieve (item) {
    var temp1 = localStorage.getItem(item);
    temp1 = JSON.parse(temp1);
    return temp1;
};