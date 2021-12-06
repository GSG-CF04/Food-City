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

let userName =document.querySelector (".field");
let userEmail =document.querySelector ("#user_email");
let textarea = document.querySelector("textarea");


let messageThank = document.querySelector(".message_thank");
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
