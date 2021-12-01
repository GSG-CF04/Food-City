const newSlides=()=>{
    let burgerIcon=document.querySelector('.burgerIcon')
    let navLinks =document.querySelector('.navLinks')
    let navLink=document.querySelectorAll('.navLinks li ')
//Add Toggle
    burgerIcon.addEventListener('click',()=>{
    navLinks.classList.toggle('active')
    burgerIcon.classList.toggle('fa-times')
    })
}
newSlides();