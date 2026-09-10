let number = praseInt(prompt("Enter a number: "));
let factorial = 1;
let i = 1;  
while (i <= number) {
    factorial *= i;
    i++;
}
console.log("The factorial of " + number + " is: " + factorial);
    