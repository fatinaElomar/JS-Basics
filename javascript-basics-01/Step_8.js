var age =prompt("enter your age")
var age_inp = document.getElementById("age")
age_inp.value=age


document.getElementById("validate").addEventListener("click", function () {
    var age = document.getElementById("age").value;
    if (age < 18) {
      alert("you are under 18")
  } else{
      alert("you are over 18");
  }
  });
 