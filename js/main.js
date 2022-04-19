const email = document.querySelector("#email");
const icon1 = document.querySelector(".icon1");
const icon2 = document.querySelector(".icon2");
const errorText = document.querySelector(".error-text");
const button = document.querySelector("button");

let regExp = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

function check(){
  if(email.value.match(regExp)){
    email.style.borderColor = "#27ae60";
    icon1.style.display = "none";
    icon2.style.display = "block";
    errorText.style.display = "none";
    button.style.display = "block"
  }else{
   email.style.borderColor = "#e74c3c";
   icon1.style.display = "block";
   icon2.style.display = "none";
   errorText.style.display = "block";
   button.style.display = "none"

  }
  if(email.value == ""){
    email.style.borderColor = "lightgrey";
    icon1.style.display = "none";
    icon2.style.display = "none";
    errorText.style.display = "none";
    button.style.display = "none"
  }

}