let obj1 = {
    name: "John Doe",
    rollNo: 12345
};

let obj2 = {
    marks: 85,
    grade: "A"
};

let mergedObj = {...obj1, ...obj2};
console.log(mergedObj);