let div = document.createElement("div")
document.querySelector("body").appendChild(div).setAttribute("id", "id1")
let b = document.querySelector("#id1")
let nameInp = document.querySelector("#name")
nameInp.addEventListener("keyup", (event)=> {
    b.innerText = nameInp.value;
})