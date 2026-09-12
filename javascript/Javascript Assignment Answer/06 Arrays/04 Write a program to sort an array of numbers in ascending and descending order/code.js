let numbers = [5, 2, 8, 1, 9];

// Sort in ascending order
let ascending = numbers.sort(function(a, b) {
    return a - b;
});

// Sort in descending order
let descending = numbers.sort(function(a, b) {
    return b - a;
});

console.log("Original array:", numbers);
console.log("Ascending order:", ascending);
console.log("Descending order:", descending);

