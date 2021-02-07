document.getElementById("search").addEventListener("click",function(){
loadData();
})
const loadData = search =>{
    const mealName = document.getElementById("meal-input").value;
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`)
    .then(res => res.json())
    .then(data => displaySearch(data))
    .catch(error =>{
        const searchDetails = document.getElementById("search-details");
        const notFoundMessage = `
        <h4> Sorry! "${mealName}" is not available right now. </h4>
        `;
        searchDetails.innerHTML= notFoundMessage;
    })
    const displaySearch = meals =>{
        const mealsArray = meals.meals
        const searchResults = document.getElementById("search-results");
        mealsArray.forEach(meal => {
            const mealDiv = document.createElement("div");
            mealDiv.className = "mealDiv";
            const mealInfo = `
            <img src="${meal.strMealThumb} ">
            <br>
            <a href="">${meal.strMeal} </a>
            `;
            mealDiv.innerHTML = mealInfo;
            searchResults.appendChild(mealDiv);
        });
        }  
}


