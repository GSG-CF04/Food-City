const newSlides=()=>{
    let burgerIcon=document.querySelector('.burgerIcon')
    let navLinks =document.querySelector('.navLinks')
    let navLink=document.querySelectorAll('.navLinks li ')
//Add Toggle
    burgerIcon.addEventListener('click',()=>{
    navLinks.classList.toggle('active')
    burgerIcon.classList.toggle('fa-times')
  //Add Animate to link
    navLink.forEach((link,index)=>{
        if(link.style.animation){
            link.style.animation=''
        }else{
            link.style.animation=`newLink  0.5s ease forwards ${index/7+0.7}s`
            
        }
    })
    })
}
newSlides();