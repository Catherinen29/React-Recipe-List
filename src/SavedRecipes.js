import { useState } from "react";
import EachRecipe from "./EachRecipe";

export default function SavedRecipes(){

const [recipeList, setRecipeList] = useState([
    {text: "recipe1", cuisineType: "italian", mealType: "lunch"}, 
    {text: "recipe2", cuisineType: "japanese", mealType: "lunch"}, 
    {text: "recipe3", cuisineType: "columbian", mealType: "lunch"}]);


const [addRecipe, setAddRecipe] = useState({text: ""})
// const [addCuisine, setAddCuisine] = useState("")


function handleChange(e){
    e.preventDefault();
    console.log(e.target.value)
}

function submitRecipe(e){
    e.preventDefault();
    console.log(e.target.value)
    setRecipeList([...recipeList, addRecipe])
}


    return(

        <div> 
            <h1>Saved recipes</h1>

            <ul>
                My recipes:
                {recipeList.map((recipe, index) => (
                    <EachRecipe recipe={recipe} />
                ))} 
            </ul>


            <button>Clear all</button>
            <button>Clear selected</button>


            <form onSubmit={submitRecipe}>
                <input type="text" 
                placeholder="add meal" 
                onChange={(e) => setAddRecipe({...addRecipe, text: e.target.value})}
                />
                <label className="saveCuisine">
                    Meal type:
                    <select>
                        <option>Breakfast</option>
                        <option>Brunch</option>
                        <option>Lunch</option>
                        <option>Dinner</option>
                        <option>Snack</option>
                    </select>

                </label>
                 
                <button>Add meal</button>
            </form>

        </div>

    )   

}