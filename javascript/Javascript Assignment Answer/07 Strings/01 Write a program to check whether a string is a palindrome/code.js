let str = "racecar";
let cleanedStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
let reversedStr = cleanedStr.split("").reverse().join("");
if (cleanedStr === reversedStr) {
    console.log("The string is a palindrome.");
} else {
    console.log("The string is not a palindrome.");
}
