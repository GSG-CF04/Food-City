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


// Whole Menu
all.addEventListener('click',()=>{
    location.reload();
})