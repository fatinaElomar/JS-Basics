var sh = document.getElementById("show");
var hi = document.getElementById("hide");
var txt = document.getElementById("texte")
var a = document.querySelectorAll("a")

a.forEach((e) => {
    e.addEventListener("click", (e) =>{
    if(e.target.id == "hide"){
        txt.style.display = "none"
    } else {
        txt.style.display = "block"
    
    }
})});
/*** */