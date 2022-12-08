let red =document.querySelector(".red")
let green =document.querySelector(".green")
let blue =document.querySelector(".blue")
let txt = document.getElementById("text");

red.onclick = function () {
  txt.style.color = "red";
};

green.onclick = function () {
  txt.style.color = "green";
};

blue.onclick = function () {
  txt.style.color = " blue";
};
