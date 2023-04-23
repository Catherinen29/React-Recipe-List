import { useState } from "react";
import ReturnedRecipes from "./ReturnedRecipes";
import uuid from 'react-uuid';
import "./Inspo.css";

export default function Inspo (props){

  const {setAddRecipe, addRecipe } = props;

const [ingredient, setIngredient] = useState("")
      

const [recipes, setRecipes] = useState([])

function clickSearch(e){
    e.preventDefault();
    console.log(ingredient)

// Get the data from the API
    fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${ingredient}&app_id=9bc1e042&app_key=11c9111cb077c2f3afaa930c0214705e%09&random=true`)
    .then((response) => response.json())
    .then((results) => {

// Create an array which holds all the returned recipes:
        const searchRecipeArr = results.hits.map((recipeData, index) => ({ 
              label: recipeData.recipe.label,
              cuisineType: recipeData.recipe.cuisineType[0], 
              mealType: recipeData.recipe.mealType[0],
              index}
          ))

// Update the state with the new array of recipes:
        setRecipes(searchRecipeArr) 
    }) 
    setIngredient("")
    // console.log(newRecipe)
    }


    return(

        <div>
        <h1 className="InspoHeading">Find me foods</h1>

        <form onSubmit={clickSearch} className="inspoForm">
            <input 
                value={ingredient}
                onChange={(e) => setIngredient(e.target.value)}
                placeholder="Search by ingredient" 
                required
                />

            <button type="submit">Search</button>
        </form>

        <div>
          <div className="searchResults">
            {recipes.map((recipe, index) => (
              <ReturnedRecipes recipe={recipe} key={index} addRecipe={addRecipe} />))}
          </div>
        </div>

      </div>

    )
}