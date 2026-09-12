let numbers = [1, 2, 3, 4, 5];

// Using map() to square each number
let squaredNumbers = numbers.map(function(num) {
    return num * num;
}); 

console.log("Original numbers:", numbers);
console.log("Squared numbers:", squaredNumbers);

// Using filter() to get even numbers
let evenNumbers = numbers.filter(function(num) {
    return num % 2 === 0;
}); 

console.log("Even numbers:", evenNumbers);

// Using reduce() to calculate the sum of numbers
let sum = numbers.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);

console.log("Sum:", sum);
