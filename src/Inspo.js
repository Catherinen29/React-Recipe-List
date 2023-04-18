import { useState } from "react";
import ReturnedRecipes from "./ReturnedRecipes";

export default function Inspo (){

const [ingredient, setIngredient] = useState("")
      
const [newRecipe, setNewRecipe] = useState([
  {label:""}, 
  {cuisineType:""}, 
  {mealType:""},
  {add: false}
])


function clickSearch(e){
    e.preventDefault();
    console.log(ingredient)

// Get the data from the API
    fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${ingredient}&app_id=9bc1e042&app_key=11c9111cb077c2f3afaa930c0214705e%09&random=true`)
    .then((response) => response.json())
    .then((results) => {
        // console.log(results) 

// Create an array which holds all the returned recipes:
        const searchRecipeArr = results.hits.map((recipeData, index) => ({ 
              label: recipeData.recipe.label,
              cuisineType: recipeData.recipe.cuisineType[0], 
              mealType: recipeData.recipe.mealType[0],
              index}
          ))

// Update the state with the new array of recipes:
        setNewRecipe(searchRecipeArr) 
    }) 
    setIngredient("")
    console.log(newRecipe)
    }


    return(

        <div>
        <h1>Recipe inspiration</h1>

        <form onSubmit={clickSearch}>
            <input 
                value={ingredient}
                onChange={(e) => setIngredient(e.target.value)}
                placeholder="Search by ingredient" 
                required
                />

            <button type="submit">search</button>
        </form>

        <div>product of API search: 
          <div>
            {newRecipe.map((item, index) => (
              <ReturnedRecipes newRecipe={item} key={index} />))}
          </div>
        </div>
  
      </div>

    )
}