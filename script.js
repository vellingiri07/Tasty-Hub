const banner = document.querySelector('.banner');


function randomMeal(props) {
    let data = props.meals[0]
   banner.innerHTML =  `<div class="bannerContentContainer">
   <h1 ">${data.strMeal}</h1>
   <button class="bannerButton">Click to Cook</button>
</div>
<div>
   <img src=${data.strMealThumb} alt="photo">
</div>`
   
   //`<div>
//     <img src=${data.strMealThumb} alt="">
//     <h1 class="bannerContent">${data.strMeal}</h1>
//     <button class="bannerContent bannerButton">Click to Cook</button>

// </div>`
    console.log('Function ', data)
}



fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    .then(res => res.json())
    .then((data) => randomMeal(data))
    .catch(erro => console.log('error da punda', erro))