
let pass = prompt("enter your password:");
document.getElementById("password")
let passinp = document.getElementById("password");
passinp.value = pass;

let conf = prompt("Confirm your password:");
document.getElementById("confirmation")
let confinp = document.getElementById("confirmation");
confinp.value = conf;


document.querySelector("[name='button']").onclick = function (e) {
  e.preventDefault();
  if (passinp.value == "" && confinp.value == '') {
    password.style.border = "1px solid red";
  } else if (passinp.value == confinp.value) {
    alert("Password Confirme");
  } else {
    confirmation.style.border = "1px solid red"
    alert("it doesn't match!");
  }
};