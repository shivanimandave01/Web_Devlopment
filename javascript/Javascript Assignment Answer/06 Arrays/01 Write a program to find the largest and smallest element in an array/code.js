let arr = [5, 2, 8, 1, 9];

let largest = arr[0];
let smallest = arr[0];  

for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
        largest = arr[i];
    }
    if (arr[i] < smallest) {
        smallest = arr[i];
    }
}

console.log("Largest element:", largest);
console.log("Smallest element:", smallest);