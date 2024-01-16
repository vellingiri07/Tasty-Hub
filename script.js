const banner = document.querySelector('.banner');

const bannerPageProps = document.querySelector('.bannerPageContainer')

const recipesContainer = document.querySelector('.recipesContainer')



// Function For Banner Random Meals
function randomMeal(props) {
   let data = props.meals[0]
   const mealImage = data.strMealThumb
   const mealName = data.strMeal
   banner.innerHTML = `<div class="bannerContentContainer">
   <h1 ">${mealName}</h1>
   <h2 class="bannerButton" onclick="openBannerPage()">Click to Cook</h2>
</div>
<div>
   <img src=${mealImage} alt="photo">
</div>`

   console.log('Function ', data)
}


// For Random Meal
fetch('https://www.themealdb.com/api/json/v1/1/random.php')
   .then(res => res.json())
   .then((data) => { randomMeal(data) })
   .catch(error => console.log('error', error))


// Functions for Banner Page
function openBannerPage() {
   window.location.href = "bannerPage.html"
}



// For Random Recipes Cards 

let temp = '';

function recipesCards(recipesProps) {
   let recipesData = recipesProps.meals[0]

   const recipesImages = recipesData.strMealThumb
   const recipesName = recipesData.strMeal

   temp += `  <div class="recipesCards">
      <img src=${recipesImages} alt="${recipesName}Photo">
      <span class="recipesNames">${recipesName}</span>
      </div>`
}


for (let i = 0; i < 40; i++) {
   fetch('https://www.themealdb.com/api/json/v1/1/random.php')
      .then(res => res.json())
      .then((data) => { recipesCards(data), recipesContainer.innerHTML = temp })
      .catch(error => console.log('error', error))
}



// Categories vise Recipes Card

function vegRecipes() {

}


function nonVegRecipes() {
   recipesContainer.innerHTML = ` <div class="recipesCards">
   <img src="./Photos/Palmyra.jpeg" alt="">
   <span class="recipesNames">Palmyra Juice</span>
</div>`
}

let seaFood = ''

function seaFoodRecipes() {

   

   function getSeaFoodRecipes(seaProps) {
      let data = seaProps.meals[0]

      const seaFoodMeal = data.strMeal
      const seaMealImage = data.strMealThumb

      seaFood += ` <div class="recipesCards">
      <img src=${seaMealImage} alt="">
      <span class="recipesNames">${seaFoodMeal}</span>
   </div>`

      console.log('veg', data)
   }

   for (let i = 0; i <= 20; i++) {
      fetch('https://themealdb.com/api/json/v1/1/filter.php?c=seafood')
         .then(res => res.json())
         .then((data) => { getSeaFoodRecipes(data), recipesContainer.innerHTML = seaFood })
         .catch(error => console.log('error', error))
   }
   
}

function soupRecipes() {
   recipesContainer.innerHTML = ` <div class="recipesCards">
   <img src="./Photos/PineApple.png" alt="">
   <span class="recipesNames">Pineapple Juice</span>
</div>`
}

function snacksRecipes() {
   recipesContainer.innerHTML = ` <div class="recipesCards">
   <img src="./Photos/Hibiscus.jpeg" alt="">
   <span class="recipesNames">Hibiscus Juice</span>
</div>`
}

function saladsRecipes() {
   recipesContainer.innerHTML = ` <div class="recipesCards">
   <img src="./Photos/Orange.png" alt="">
   <span class="recipesNames">Orange Juice</span>
</div>`
}

function dessertsRecipes() {
   recipesContainer.innerHTML = ` <div class="recipesCards">
   <img src="./Photos/dhal rice.jpg" alt="">
   <span class="recipesNames">Dhal rice</span>
</div>`
}

