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