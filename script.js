
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

    let mealIngrds = bannerData.strIngredient1;

    let mealMeasure = bannerData.strMeasure;

    let mealYoutube=bannerData.strYoutube;

    // Fetch data for Banner Modal
    
    bannerModalHead.innerHTML=` <img src=${mealImage} alt="${mealName}photo">
    <span>${mealName}</span>`

    bannerModalDetails.innerHTML = ` 
    <div class="bannerIngrediants">
        <h2>Ingrediants</h2>
    <ul>
        <li>${mealIngrds} - ${mealMeasure}</li>

    </ul>

    </div>

    <div class="bannerInstruction">
        <h2>Instructions</h2>
        <p>${mealInstuctions}</p>
    </div>


    <div>
        <h2>YouTube Link</h2>
        <iframe width="923" height="519" src=${mealYoutube} title="Chicken Teriyaki Casserole" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  allowfullscreen></iframe>
    </div>`



    // mealMeasure.array.forEach(element => {
    //     console.log('each', mealMeasure)
    // });
    // bannerModal.innerHTML = 
    // </div>`
    // // }

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