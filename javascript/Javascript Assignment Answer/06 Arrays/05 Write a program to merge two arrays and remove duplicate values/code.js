let array1 = [1, 2, 3, 4, 5];
let array2 = [4, 5, 6, 7, 8];
let merged = array1.concat(array2);
let unique = [...new Set(merged)];
console.log("Merged array:", merged);
console.log("Array with unique values:", unique);

