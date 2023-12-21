// selcting the submit button
var submit=document.querySelector(".btn2")
var namee=document.getElementById("nametitle")
var number=document.getElementById("numbertitle")

submit.addEventListener("click",function(event){
    event.preventDefault()
    namee.value="";
    number.value="";
    alert("your information is saved")
})

