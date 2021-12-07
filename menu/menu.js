//Declear General Variables
let root = document.querySelector("#root")
let container = document.createElement("div")
let select = document.querySelector('#select')
let search = document.getElementById('search-input')
let all = document.querySelector('.all')
container.classList= "container"

// Start Cart Section

let cart = document.querySelector(".cart")
let cartItems = document.querySelector(".cartItems")
let emptyCart = document.querySelector(".empty-cart")
let removeAll = document.getElementById("remove-all")
let totalPricePar = document.getElementById("total-price")
let openCartIcon = document.querySelector(".wholeCart")

let mealsOrder = [];

// Open Cart
openCartIcon.addEventListener('click', ()=>{
    cart.classList.toggle("openCart")
    addToCart()
})

// Close the Cart
let closeCartBtn = document.querySelector(".closeBtn")
closeCartBtn.addEventListener('click', function() {
    cart.classList.toggle("openCart") //why openCart not cart
});

// Add Data To LocalStorage
function addToLocalStorage(){

    let addIcon = document.querySelectorAll('.add-cart')
    let card = document.querySelectorAll('.card')
    let productImage = document.querySelectorAll('.productImage')
    let productName = document.querySelectorAll('.productName')
    let productPrice = document.querySelectorAll('.productPrice')

    mealsOrder = localStorage.getItem("Item") === null ? [] : JSON.parse(localStorage.getItem("Item"));

    // Cart Counter
    let mealsCount = document.getElementById("count")
    mealsCount.textContent = mealsOrder.length

    for(let i = 0; i < addIcon.length; i++){
        addIcon[i].addEventListener('click', () => {
            const mealDataObj = {
                id: card[i].id,
                mealPhoto: productImage[i].src,
                name: productName[i].textContent,
                price: productPrice[i].textContent
                }

                mealsOrder.push(mealDataObj)
                window.localStorage.setItem("Item", JSON.stringify(mealsOrder))
                addToCart()
        })
    }
    }

// Add Data To The Cart
function addToCart(){
    
    mealsOrder = localStorage.getItem("Item") === null ? [] : JSON.parse(localStorage.getItem("Item"));
    if(mealsOrder.length == 0){
            emptyCart.style.display = 'flex'
            cartItems.style.display = 'none'
            totalPricePar.style.display = 'none'
        }else {
            emptyCart.style.display = 'none'
            cartItems.style.display = 'block'
            totalPricePar.style.display = 'block'
        }

        // Cart Counter
        let mealsCount = document.getElementById("count")
        mealsCount.textContent = mealsOrder.length

        cartItems.innerHTML= " "

        for(let i = 0; i < mealsOrder.length; i++){
            let mealInfo = document.createElement("div")
            mealInfo.className = "mealInfo"
            mealInfo.setAttribute("id", mealsOrder[i].id)
    
            let image = document.createElement("div")
            image.className = "image"
            let img = document.createElement("img")
            img.src = mealsOrder[i].mealPhoto
            img.src = mealsOrder[i].mealPhoto
            image.appendChild(img)
            mealInfo.appendChild(image)
    
            let info = document.createElement("div")
            info.className = "info"
    
            let text = document.createElement("div")
            text.className = "text"
            let name = document.createElement("h3")
            name.className = "name"
            name.textContent = mealsOrder[i].name.split(" ").slice(0, 2).join(" ");
            name.textContent = mealsOrder[i].name.split(" ").slice(0, 2).join(" ");

            let price = document.createElement("h3")
            price.className = "price"
            price.textContent = mealsOrder[i].price
            text.appendChild(name)
            text.appendChild(price)
            info.appendChild(text)

            let deleteItem = document.createElement("div")
            deleteItem.className = "deleteItem"
            let deleteIcon = document.createElement("i")
            deleteIcon.className = "fas fa-trash-alt delete"
            deleteIcon.setAttribute('onClick', `deleteItem(${mealsOrder[i].id})`)
            deleteItem.appendChild(deleteIcon)
    
            mealInfo.appendChild(deleteItem)

            cartItems.appendChild(mealInfo)
        }
    }


// Delete The Item 
function deleteItem(id){

    for(let i = 0; i < mealsOrder.length; i++){
        if(mealsOrder[i].id == id){
            mealsOrder.splice(i, 1)
        }
        window.localStorage.setItem("Item", JSON.stringify(mealsOrder))
    }
    addToCart()
}

// Remove All Data
removeAll.setAttribute('onclick', 'removeAllFunc()');
function removeAllFunc(){
    mealsOrder = '[]'
    window.localStorage.setItem("Item", mealsOrder)
    location.reload()
    addToCart()
}
