import "./ReturnedRecipes.css"
import uuid from 'react-uuid';
import { useState } from "react";


export default function ReturnedRecipes(props){
const { recipe, addRecipe } = props;

const [newRecipe, setNewRecipe] = useState({
    text: recipe.label, cuisineType:recipe.cuisineType, mealType:recipe.mealType, 
    selected: false, id: uuid()})


    return(
        <div className="recipeResult">
                <div className="returnedLabel">{recipe.label}</div>
                <div className="returnedMeal">{recipe.mealType}</div>
                <div className="returnedCuisine">{recipe.cuisineType}</div>

            <button onClick={() => addRecipe(newRecipe)}>Add to list</button>
        </div>

    )
}