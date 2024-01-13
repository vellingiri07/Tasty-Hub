let searchInput=document.getElementById('searchBar');

fetch('https://www.themealdb.com/api/json/v1/1/random.php')
.then((res)=>res.json())
.then((meals)=>console.log(meals[0].strMeal))
.then((err)=>console.log("error"))