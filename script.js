
const banner = document.querySelector('.banner')



function randomBanner(bannerProps) {
    let bannerData = bannerProps.meals[0]

    const mealName = bannerData.strMeal;

    const mealImage = bannerData.strMealThumb;

    banner.innerHTML = `<div class="bannerContent">
    <h1>${mealName}</h1>
   <button  onclick="openBannerModal()">Click to Cook</button>
</div>
<div>
    <img src=${mealImage} alt="${mealName}photo">
</div>`

    console.log('meals',bannerData)

}

fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    .then(res => res.json())
    .then(data => randomBanner(data))
    .catch(error => ('error', error))

// Dialog Box


const bannerRecipes = document.querySelector('.bannerModalContainer');


function openBannerModal() {
    bannerRecipes.showModal();
}

function closeBannerModal() {
    bannerRecipes.close();
}