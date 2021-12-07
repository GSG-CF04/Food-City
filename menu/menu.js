//Declear General Variables
let root = document.querySelector("#root")
let container = document.createElement("div")
let select = document.querySelector('#select')
let search = document.getElementById('search-input')
let all = document.querySelector('.all')
container.classList= "container"

// All Fetch  Api
let Breakfast;
let Beef;
let Chicken;
let Dessert;
let Ordinary_Drink;
let Filter;

let breakfastUrl = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Breakfast"
let chickenUrl = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Chicken"
let beefUrl = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef"
let dessertUrl = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert"

function getData(meal){
    return fetch(`${meal}`)
    .then(res => res.json())
    .then(data =>{
        let meals=data.meals
        Chicken = Dessert = Beef = Breakfast = meals
        meals.forEach((meal) => {
            
        displayCatogaries(meal)
    })})
}

function getDataDrinks(){
    return fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink`)
    .then(res=>res.json())
    .then(data=>{
        let drinks=data.drinks
        Ordinary_Drink=drinks
        drinks.forEach((drinks) => {
            displayCatogarieDrink(drinks)
        });
    })
}

Promise.all([getData(chickenUrl), getData(breakfastUrl), getData(dessertUrl), getData(beefUrl), getDataDrinks()])
.then(() => {
    addToLocalStorage()
})

// Search From Api Food By Name
search.addEventListener("input",()=>{
    let selectValue = select.value;
    let data;
    container.innerHTML=' '
    switch(selectValue){
        case 'Filter':
            data=[Breakfast,Dessert,Beef,Chicken]
            dataDrink=Ordinary_Drink;
            data.forEach((cat) =>{
                cat.forEach((item) =>{
                    if(item.strMeal.toLowerCase().includes(search.value)){
                        displayCatogaries(item)
            }})
            })
            dataDrink.forEach((itemDrink)=>{
                if(itemDrink.strDrink.toLowerCase().includes(search.value)){
                displayCatogarieDrink(itemDrink)
                }
            })
        break;
        case 'Breakfast':
            data = Breakfast;
            data.forEach(item =>{
                if(item.strMeal.toLowerCase().includes(search.value)){
                displayCatogaries(item)
                }
            })
            break;
        case 'Beef':
            data = Beef;
            data.forEach(item =>{
                if(item.strMeal.toLowerCase().includes(search.value))
                    displayCatogaries(item)
            })
            break;
        case 'Chicken':
            data=Chicken;
            data.forEach(item =>{if(item.strMeal.toLowerCase().includes(search.value))displayCatogaries(item)})
            break;
        case 'Dessert':
            data=Dessert;
            data.forEach(item =>{if(item.strMeal.toLowerCase().includes(search.value))displayCatogaries(item)})
        break;
        case 'Ordinary_Drink':
            data=Ordinary_Drink;
            data.forEach(item =>{if(item.strDrink.toLowerCase().includes(search.value))displayCatogarieDrink(item)})
            break;
    }
    addToLocalStorage()
})
//Filter Menu
select.addEventListener('change',()=>{
    let selectValue = select.value;
    let data;
    search.value=''

    container.innerHTML=' '
    switch(selectValue){  
        case 'Breakfast':    
            getData(breakfastUrl).then(()=>addToLocalStorage())
            break;
        case 'Beef':
            getData(beefUrl).then(()=>addToLocalStorage())
            break;
        case 'Chicken':
            getData(chickenUrl).then(()=>addToLocalStorage())
            break;
        case 'Dessert':
            getData(dessertUrl).then(()=>addToLocalStorage())
        break;
        case 'Ordinary_Drink':
            getDataDrinks().then(()=>addToLocalStorage())
            break;
    }
})

// toggle arrow select
let selectShow = document.querySelector('.select-menu')
selectShow.addEventListener('click',()=>{
    selectShow.classList.toggle('arrow-active')
})

// Whole Menu
all.addEventListener('click',()=>{
    location.reload();
})

// Display food data 
function displayCatogaries(meal) {
    let randomPrice = Math.random()
    let food = Math.floor(randomPrice*50+10)

    let card = document.createElement("div")
    card.classList="card"
    card.setAttribute("id", meal.idMeal)

    let divImage = document.createElement('div')
    divImage.classList='divImg'
    let mealImag = document.createElement("img")
    mealImag.className = "mealImag productImage"
    mealImag.src = meal.strMealThumb

    let detailsCategory = document.createElement("div")
    detailsCategory.classList="detailsCategory"

    let mealName = document.createElement("h4")
    mealName.classList= "mealName productName"
    mealName.textContent = meal.strMeal

    let mealDetails = document.createElement("div")
    mealDetails.classList="mealDetails"

    let priceFood = document.createElement('h5')
    priceFood.classList='price productPrice'
    priceFood.textContent=`${food}$`
    mealDetails.appendChild(priceFood)

    let cartIcon = document.createElement("i")
    cartIcon.classList="fas fa-cart-plus add-cart" 

    detailsCategory.appendChild(mealName)
    mealDetails.appendChild(cartIcon)
    detailsCategory.appendChild(mealDetails)
    divImage.appendChild(mealImag)
    card.appendChild(divImage)
    card.appendChild(detailsCategory)
    container.appendChild(card)
    root.appendChild(container)
}

// Display drink data
function displayCatogarieDrink (drinks){

    let randomPrice = Math.random()
    let PriceDrink = Math.floor(randomPrice*20+3)

    let card = document.createElement("div")
    card.classList="card"
    card.setAttribute("id", drinks.idDrink)

    let divImage = document.createElement('div')
    divImage.classList = 'divImg'
    let drinkImag = document.createElement("img")
    drinkImag.src = drinks.strDrinkThumb
    drinkImag.className = "drinkImag productImage" 

    let detailsCategoryDrinks = document.createElement("div")
    detailsCategoryDrinks.classList="detailsCategoryDrinks"

    let drinkName = document.createElement("h4")
    drinkName.classList= "drinkName productName"
    drinkName.textContent = drinks.strDrink

    let drinkDetails = document.createElement("div")
    drinkDetails.classList="drinkDetails"

    let drinkPrice = document.createElement('h4')
    drinkPrice.classList = 'priceDrinks productPrice'
    drinkPrice.textContent = `${PriceDrink}$`
    drinkDetails.appendChild(drinkPrice)

    let cartIcon = document.createElement("i")
    cartIcon.classList = "fas fa-cart-plus add-cart"

    detailsCategoryDrinks.appendChild(drinkName)
    drinkDetails.appendChild(cartIcon)
    detailsCategoryDrinks.appendChild(drinkDetails)
    divImage.appendChild(drinkImag)
    card.appendChild(divImage)
    card.appendChild(detailsCategoryDrinks)
    container.appendChild(card)
    root.appendChild(container)
}

// // Start Cart Section

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
    
            let counter = document.createElement("div")
            counter.className = "counter"
            let minus = document.createElement("i")
            minus.className = "fas fa-minus-square"
            

            let countNum = document.createElement("h3")
            countNum.className = "countNum"
            countNum.textContent = 1;

            let plus = document.createElement("i")
            plus.className = "fas fa-plus-square"

            let itemPriceText = price.textContent
            let itemPriceNum = itemPriceText.match(/\d/g);
            itemPriceNum = +(itemPriceNum.join(""));

                    
            // Plus Function
            plus.addEventListener('click', () =>{
                countNum.textContent = Number(countNum.textContent)+1 
                let itemTotalPrice = Number(countNum.textContent * itemPriceNum) 
                price.textContent = `${itemTotalPrice}$`;
                return countNum.textContent
            })
            
            // Minus Function
            minus.addEventListener('click', (e) =>{
                if(countNum.textContent <= 1){
                    e.isTrusted = false
                }else{
                    e.isTrusted = true
                    countNum.textContent = Number(countNum.textContent)-1
                    let itemTotalPrice = Number(countNum.textContent * itemPriceNum)
                    price.textContent = `${itemTotalPrice}$`;
                }
                return countNum.textContent
            }) 

            totalPriceFunc()

            counter.appendChild(minus)
            counter.appendChild(countNum)
            counter.appendChild(plus)
            info.appendChild(counter)
    
            mealInfo.appendChild(info)

            let deleteItem = document.createElement("div")
            deleteItem.className = "deleteItem"
            let deleteIcon = document.createElement("i")
            deleteIcon.className = "fas fa-trash-alt delete"
            deleteIcon.setAttribute('onClick', `deleteItem(${mealsOrder[i].id})`)
            deleteItem.appendChild(deleteIcon)
    
            mealInfo.appendChild(deleteItem)
    
            cartItems.appendChild(mealInfo)

            // Total Price Function

            function totalPriceFunc(){
                let totalPriceNum = 0;
                for(let i = 0; i < mealsOrder.length; i++){
                    let priceText = mealsOrder[i].price
                    let priceNum = priceText.match(/\d/g);
                    priceNum = +(priceNum.join(""));
                    totalPriceNum += priceNum
                }
                return totalPriceNum;
            }
        }
        
        let totalPrice = document.createElement("div")
        totalPrice.className = "totalPrice"
        let priceText = document.createElement("h2")
        priceText.className = "priceText"
        priceText.textContent = "Total Price"
        totalPrice.appendChild(priceText)
        let priceValue = document.createElement("h2")
        priceValue.className = "priceValue"
        priceValue.textContent = `${totalPriceFunc()} $`
        totalPrice.appendChild(priceValue)
        totalPricePar.appendChild(totalPrice)

        let orderNowLink = document.createElement("a")
        orderNowLink.className = "orderNowLink"
        orderNowLink.setAttribute("href", "../order/order.html")

        let orderNowBtn = document.createElement("bottun")
        orderNowBtn.className = "orderBtn"
        orderNowBtn.textContent = "Order Now"

        orderNowLink.appendChild(orderNowBtn)
        totalPricePar.appendChild(orderNowLink)

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



