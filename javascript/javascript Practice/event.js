let Modebtn = document.querySelector("#mode");
let body = document.querySelector("body");

let currmode = "light";
Modebtn.addEventListener("click", () =>{
    if (currmode === "light") {
        currmode = "dark";
        body.style.backgroundColor = "black";
    }
    else{
        currmode = "light";
        body.style.backgroundColor = "white";
    }
    console.log(currmode);
});