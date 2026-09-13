let sentence = "hello world";
let words = sentence.split(" ");
for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
}
console.log(words.join(" ")); // "Hello World"
