const banner = document.querySelector('.banner');

const bannerPageProps = document.querySelector('.bannerPageContainer')

function randomMeal(props) {
   let data = props.meals[0]
   const mealImage = data.strMealThumb
   const mealName = data.strMeal
   banner.innerHTML = `<div class="bannerContentContainer">
   <h1 ">${mealName}</h1>
   <button class="bannerButton" onclick="openBannerPage()">Click to Cook</button>
</div>
<div>
   <img src=${mealImage} alt="photo">
</div>`

   console.log('Function ', data)
}

// Functions for Banner Page
function openBannerPage(){
   window.location.href="bannerPage.html"
}




fetch('https://www.themealdb.com/api/json/v1/1/random.php')
   .then(res => res.json())
   .then((data) => { randomMeal(data) })
   .catch(error => console.log('error', error))