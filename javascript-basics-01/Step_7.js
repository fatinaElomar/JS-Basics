let shoe_size=prompt("enter your shoe size")
let shoe_inp = document.getElementById("shoe_size")
shoe_inp.value=shoe_size

let year =prompt("enter your birth")
let year_inp = document.getElementById("year")
year_inp .value=year
let validate_button =document.getElementById("validate").onclick=function (){
    alert( ((((shoe_size*2) + 5 )* 50 )- year )+ 1766 ); }
   