
const banner = document.querySelector('.banner')

const bannerModal = document.querySelector('.bannerModalDetails')

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

    const mealInstuctions = bannerData.strInstructions;

    bannerModal.innerHTML=` 
    <div class="bannerIngrediants">
        <h2>Ingrediants</h2>
        <ul>
            <li></li>

        </ul>

    </div>

    <div class="bannerInstruction">
        <h2>Instructions</h2>
        <p>${mealInstuctions}</p>
    </div>


    <div>
        <h2>YouTube Link</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, exercitationem. Suscipit tenetur
            officiis commodi fugit.</p>
    </div>`



    // let mealIngrds = bannerData.strIngredient1;

    // let mealMeasure=bannerData.strMeasure;
    // mealMeasure.array.forEach(element => {
    //     console.log('each', mealMeasure)
    // });
    // bannerModal.innerHTML = ` <div class="bannerIngrediants">
    //     <h2>Ingrediants</h2>
    //     <ul>
    //         <li>${mealIngrds} - ${mealMeasure}</li>

    //     </ul>

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