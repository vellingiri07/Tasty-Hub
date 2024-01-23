
const banner = document.querySelector('.banner')

const bannerModalDetails = document.querySelector('.bannerModalDetails')

const bannerModalHead=document.querySelector('.bannerModalHead')

function randomBanner(bannerProps) {
    let bannerData = bannerProps.meals[0]

    const mealName = bannerData.strMeal;

    const mealImage = bannerData.strMealThumb;

    // Banner Script

    banner.innerHTML = `<div class="bannerContent">
    <h1>${mealName}</h1>
    <button  onclick="openBannerModal()">Click to Cook</button>
    </div>
    <div>
    <img src=${mealImage} alt="${mealName}photo">
    </div>`


    // Banner Modal script
    const mealInstuctions = bannerData.strInstructions;

    // let mealIngrds = bannerData.strIngredient1;

    let mealMeasure = bannerData.strMeasure;

    

    let mealYoutube=bannerData.strYoutube;

    // Fetch data for Banner Modal
    
    bannerModalHead.innerHTML=` <img src=${mealImage} alt="${mealName}photo">
    <span>${mealName}</span>`
    

    bannerModalDetails.innerHTML = ` 
    <div class="bannerIngrediants">
        <h2>Ingrediants</h2>
    <ul>
        <li>${bannerData.strIngredient1} - ${bannerData.strMeasure1}</li>
        <li>${bannerData.strIngredient2} - ${bannerData.strMeasure2}</li>
        <li>${bannerData.strIngredient3} - ${bannerData.strMeasure3}</li>
        <li>${bannerData.strIngredient4} - ${bannerData.strMeasure4}</li>
        <li>${bannerData.strIngredient5} - ${bannerData.strMeasure5}</li>
        <li>${bannerData.strIngredient6} - ${bannerData.strMeasure6}</li>
        <li>${bannerData.strIngredient7} - ${bannerData.strMeasure7}</li>
        <li>${bannerData.strIngredient8} - ${bannerData.strMeasure8}</li>
        <li>${bannerData.strIngredient9} - ${bannerData.strMeasure9}</li>
        <li>${bannerData.strIngredient10} - ${bannerData.strMeasure10}</li>
        <li>${bannerData.strIngredient11} - ${bannerData.strMeasure11}</li>
        <li>${bannerData.strIngredient9} - ${bannerData.strMeasure12}</li>
        <li>${bannerData.strIngredient13} - ${bannerData.strMeasure13}</li>
        <li>${bannerData.strIngredient14} - ${bannerData.strMeasure14}</li>
        <li>${bannerData.strIngredient15} - ${bannerData.strMeasure15}</li>

    </ul>

    </div>

    <div class="bannerInstruction">
        <h2>Instructions</h2>
        <p>${mealInstuctions}</p>
    </div>


    <div>
        <h2>YouTube Link</h2>
        <iframe frameborder="0" allowfullscreen="" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" title="Array Iteration: 8 Methods - map, filter, reduce, some, every, find, findIndex, forEach" width="100%" height="500px" src="https://www.youtube.com/embed/Urwzk6ILvPQ?autoplay=0&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fkalvium.community&amp;widgetid=1" id="widget2" data-gtm-yt-inspected-7="true"></iframe>
    </div>`



    console.log('meals', bannerData)

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