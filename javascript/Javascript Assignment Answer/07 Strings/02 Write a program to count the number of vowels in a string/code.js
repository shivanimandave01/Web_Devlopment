let str = "Hello, World!";
let vowelsCount = str.match(/[aeiou]/gi)?.length || 0;
console.log(`The number of vowels in the string is: ${vowelsCount}`);
