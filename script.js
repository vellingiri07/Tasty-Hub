
const banner = document.querySelector('.banner')

// Banner Script

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

    console.log('meals', bannerData)

}

// Banner Modal Script

const bannerModalContainer = document.querySelector('.bannerModalContainer');

function bannerModals(bannerModalProps) {

    const bannerModal = bannerModalProps.meals[0];

    const modalMealName = bannerModal.strMeal;

    const modalMealImg = bannerModal.strMealThumb;

    const modalMealInstruction = bannerModal.strInstructions;

    const modalMealYoutube = bannerModal.strYoutube;


    // Banner Modal Image and Recipes Name

    const bannerModalHead = document.querySelector('.bannerModalHead')

    bannerModalHead.innerHTML += ` 
    <div class="bannerModalHead ">
    <img src=${modalMealImg} alt="">
    <span>${modalMealName}</span>`


    // Banner Modal Ingredients Fetch


    const bannerIngredients = document.querySelector('.bannerIngrediants ');

     // Banner Modal Ingredients Array
     /*const bannerIngredientsArray = [bannerModal.strIngredient1, bannerModal.strIngredient2, bannerModal.strIngredient3,
        bannerModal.strIngredient4, bannerModal.strIngredient5, bannerModal.strIngredient6, bannerModal.strIngredient7, bannerModal.strIngredient8, bannerModal.strIngredient9, bannerModal.strIngredient10, bannerModal.strIngredient11, bannerModal.strIngredient12, bannerModal.strIngredient13,
        bannerModal.strIngredient14, bannerModal.strIngredient15, bannerModal.strIngredient16, bannerModal.strIngredient17, bannerModal.strIngredient18, bannerModal.strIngredient19, bannerModal.strIngredient20];
    */

        var bannerIngredientsArray=[]

        const bannerMeasureArray =[]

        for(let k=1;k<=20;k++){
            let ingredients=bannerModal.strIngredient[i];

            let measures=bannerModal.strMeasure[i]

            bannerIngredients.push(ingredients)

            bannerMeasureArray.push(measures)
        }

        console.log("banner ins",bannerIngredients)


    // Banner Modal Measure Array

   /* const bannerMeasureArray = [bannerModal.strMeasure1, bannerModal.strMeasure2, bannerModal.strMeasure3,
    bannerModal.strMeasure4, bannerModal.strMeasure5, bannerModal.strMeasure6, bannerModal.strMeasure7, bannerModal.strMeasure8, bannerModal.strMeasure9, bannerModal.strMeasure10, bannerModal.strMeasure11, bannerModal.strMeasure12, bannerModal.strMeasure13,
    bannerModal.strMeasure14, bannerModal.strMeasure15, bannerModal.strMeasure16, bannerModal.strMeasure17, bannerModal.strMeasure18, bannerModal.strMeasure19, bannerModal.strMeasure20];

     */

    for (let i = 0; i < 20; i++) {
        if (bannerIngredientsArray[i].length != 0 && bannerMeasureArray[i].length != 0) {
            bannerIngredients.innerHTML += ` <ul>
            <li>${bannerIngredientsArray[i]} - ${bannerMeasureArray[i]}</li>

        </ul>`

           console.log("ingredients array length",bannerIngredientsArray.length)
        }

        if(bannerIngredientsArray[i] == null || bannerMeasureArray[i] == null) {
            continue;

        }

    }

    // Banner Modal Instruction Fetch

    const bannerInstruction = document.querySelector('.bannerInstruction');

    bannerInstruction.innerHTML = `<div >
    <h2>Instructions</h2>
    <p>${modalMealInstruction}</p>
    </div>`

    // Banner Model Youtube Fetch

    const bannerYoutube = document.querySelector('.bannerYoutube');

    bannerYoutube.innerHTML = ` <h2>YouTube Link</h2>
    <iframe src=${modalMealYoutube} width="700" height="300" src=  frameborder="0"></iframe>
`

    console.log('Banner Model', bannerModal)

}

// Home page Random Recipes Card 

const recipesCardContainer = document.querySelector('.recipesCardContainer');

function recipesCards(recipesCardsProps) {

    const recipesCard = recipesCardsProps.meals[0]

    const cardsMealImage = recipesCard.strMealThumb;

    const cardsMealName = recipesCard.strMeal;

    recipesCardContainer.innerHTML += `
    <div class="recipesCards" onclick=recipesCardModal() >
        <img src=${cardsMealImage} >
        <span class="recipesNames">${cardsMealName}</span>
      
    </div>`
}

// Random Meal API Url 

const RandomMealUrl = ('https://www.themealdb.com/api/json/v1/1/random.php')


fetch(RandomMealUrl)
    .then(res => res.json())
    .then(data => { randomBanner(data), bannerModals(data) })
    .catch(error => ('error', error))



for (let i = 1; i <=20; i++) {
    fetch(RandomMealUrl)
        .then(res => res.json())
        .then(data => { recipesCards(data)})
        .catch(error => ('error', error))
}


function openBannerModal() {
    bannerModalContainer.showModal();
}

function closeBannerModal() {
    bannerModalContainer.close();
}

