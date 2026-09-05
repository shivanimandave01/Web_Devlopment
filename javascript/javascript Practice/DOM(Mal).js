// let newBtn = document.createElement("button");

// newBtn.innerText = "Click Me!";
// console.log(newBtn);

// let div = document.querySelector("div");
// div.append(newBtn);

let newBtn = document.createElement("button");

newBtn.innerText = "Show Me!";
console.log(newBtn);

let div = document.querySelector("div");
div.prepend(newBtn);

newBtn.style.backgroundColor = "blue";
newBtn.style.color = "White";