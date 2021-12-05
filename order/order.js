let userName=document.querySelector('#userName');
let addressUser=document.querySelector('#address');
let phoneUser=document.querySelector('#phone')
let submitData=document.querySelector('.submit-order');
let cancelOrder=document.querySelector('.cancel-order');
let moreDetails=document.querySelector('#moreDetails')

function addInfoUserLocalStorage(){
    let detailsUser={
        name:userName.value,
        address:addressUser.value,
        phone:phoneUser.value,
        details:moreDetails.value
    }
    localStorage.setItem('detailsUser',JSON.stringify(detailsUser))
}


submitData.addEventListener('click',(e)=>{
    if(userName.value =='' && addressUser.value =='' && phoneUser.value=='' && moreDetails.value==''){
        e.preventDefault()
    }else{
        e.preventDefault()
        addInfoUserLocalStorage()
      
        userName.value='';
        phoneUser.value=''
        moreDetails.value=''
        addressUser.value=''
    }
    
})
cancelOrder.addEventListener('click',(e)=>{
    e.preventDefault()
    location.href='../menu/menu.html'
})
   