export function save(data) {
    data.addTask = data.addTask.toString()
    let bucket = JSON.parse(localStorage.getItem('bucket'));
    
    bucket.push(data);
    
    localStorage.setItem('bucket', JSON.stringify(bucket));

};

export function retrieve () {
    var bucket = localStorage.getItem('bucket');
    bucket = JSON.parse(bucket);
    for (let each in bucket) {
        bucket[each].addTask = eval("("+bucket[each].addTask+")");
    };
    console.log('retrieved');

    for (let each of bucket) console.log(each);

    return bucket

};

