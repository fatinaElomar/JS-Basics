
document.querySelector("[name='button']").onclick = function () {
    let x = prompt(
      "delet text"
    );
    if ( x == "yes") {
      document.getElementById("name").value = "";
      document.getElementById("surname").value = "";
      document.getElementById("city").value = "";
    } else if ( x == "no") {
      alert("Done")
    }
  };