const banner = document.querySelector('.banner');

const bannerPageProps = document.querySelector('.bannerPageContainer')

const recipesContainer = document.querySelector('.recipesContainer')

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

function recipesCards(recipesProps) {
   let recipesData = recipesProps.meals[0]

   const recipesImages = recipesData.strMealThumb
   const recipesName = recipesData.strMeal

   recipesContainer.innerHTML = `  <div class="recipesCards">
   <img src=${recipesImages} alt="${recipesName}Photo">
   <span class="recipesNames">${recipesName}</span>
   </div>`
}



// Functions for Banner Page
function openBannerPage() {
   window.location.href = "bannerPage.html"
}




fetch('https://www.themealdb.com/api/json/v1/1/random.php')
   .then(res => res.json())
   .then((data) => { randomMeal(data), recipesCards(data) })
   .catch(error => console.log('error', error))