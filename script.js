
const banner = document.querySelector('.banner')

const bannerModalDetails = document.querySelector('.bannerModalDetails')

const bannerModalHead = document.querySelector('.bannerModalHead')

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



    console.log('meals', bannerData)

}

const bannerModalContainer = document.querySelector('.bannerModalContainer');

function bannerModals(bannerModalProps) {

    const bannerModal = bannerModalProps.meals[0];

    const modalMealName=bannerModal.strMeal;

    const modalMealImg=bannerModal.strMealThumb;

    const modalMealInstruction=bannerModal.strInstructions;

    const modalMealYoutube=bannerModal.strYoutube;

    const modalIngreds=[];

    modalIngreds.push(bannerModal.strIngrediant1)
    

   for(let i of modalIngreds){
        console.log(i)
   }


    bannerModalContainer.innerHTML = `<div class="bannerModalClose ">
    <img onclick="closeBannerModal()" src="./Photos/close_FILL0_wght400_GRAD0_opsz24.svg" alt="close menu icon">
</div>
<div class="bannerModalHead ">
    <img src=${modalMealImg} alt="">
    <span>${modalMealName}</span>
</div>
<div class="bannerModalDetails ">

    <div class="bannerIngrediants">
        <h2>Ingrediants</h2>
        <ul>
            <li></li>

        </ul>

    </div>

    <div class="bannerInstruction">
        <div >
            <h2>Instructions</h2>
            <p>${modalMealInstruction}</p>
        </div>
    </div>
    


    <div>
        <h2>YouTube Link</h2>
        <iframe src=${modalMealYoutube} width="923" height="519" src=  frameborder="0"></iframe>

    </div>

    </div>`

    console.log('Banner Model', bannerModal)

}

fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    .then(res => res.json())
    .then(data => { randomBanner(data), bannerModals(data) })
    .catch(error => ('error', error))




function openBannerModal() {
    bannerModalContainer.showModal();
}

function closeBannerModal() {
    bannerModalContainer.close();
}

