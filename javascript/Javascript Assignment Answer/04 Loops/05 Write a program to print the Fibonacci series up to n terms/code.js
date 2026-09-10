let n = parseInt(prompt("Enter the number of terms: "));
let firstTerm = 0;
let secondTerm = 1;

if (n <= 0) {
    console.log("Please enter a positive integer.");
} else if (n === 1) {
    console.log("Fibonacci series: " + firstTerm);
} else {
    console.log("Fibonacci series: " + firstTerm + ", " + secondTerm, end="");
    for (let i = 2; i < n; i++) {
        let nextTerm = firstTerm + secondTerm;
        console.log(", " + nextTerm);
        firstTerm = secondTerm;
        secondTerm = nextTerm;
    }
}