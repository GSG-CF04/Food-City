const newSlides = () => {
  let burgerIcon = document.querySelector(".burgerIcon");
  let navLinks = document.querySelector(".navLinks");
  let navLink = document.querySelectorAll(".navLinks li ");
  //Add Toggle
  burgerIcon.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    burgerIcon.classList.toggle("fa-times");
  });
};
newSlides();

let userName =document.querySelector (".name-field");
let userEmail =document.querySelector (".email-field");
let textarea = document.querySelector(".message-field");


let messageThank = document.querySelector(".message-thank");
document.querySelector(".submitBtn").addEventListener("click", function (e) {

  if (textarea.value == "" )  {
    e.preventDefault();
    textarea.style.borderColor = "red";
  } else {
    e.preventDefault();
    messageThank.style.display = "block";
    textarea.style.borderColor = "none";

  }

  setTimeout(function () {
    userName.value ='';
    userEmail.value ='';
    textarea.value ='';
    textarea.style.borderColor = "none";
    messageThank.style.display = "none";

  }, 1000);

});

