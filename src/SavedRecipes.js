import { useState } from "react";
import EachRecipe from "./EachRecipe";
import Inspo from "./Inspo";
import "./SavedRecipes.css"

export default function SavedRecipes(props){

const {submitRecipe, addRecipe, clearList, updateRecipeName, recipeList, updateMealType, updateCuisineType} = props;

// const [recipeList, setRecipeList] = useState([
//     {text: "", cuisineType: "", mealType: "", selected: false}]);


// const [addRecipe, setAddRecipe] = useState(
//     {text: "", cuisineType:"", mealType:""})

console.log(recipeList)

function handleChange(e){
    e.preventDefault();
}

// function submitRecipe(e){
//     e.preventDefault();
//     setRecipeList([...recipeList, addRecipe])
//     setAddRecipe({text: "", cuisineType:"", mealType:"", selected: false})
// }

// function clearList(){
//     setRecipeList([
//         {text: "", cuisineType: "", mealType: ""}])
// }

    return(
        <div> 
            <h1>Saved recipes</h1>

            <ul>
                My recipes:
                {recipeList.map((recipe, index) => (
                    <EachRecipe recipe={recipe} index={index} />
                ))} 
            </ul>


            <form className="recipeForm" onSubmit={submitRecipe}>
                <h3>Add my own</h3>

                <label className="addName">
                    Meal name: 
                    <input type="text" 
                    name="text"
                    value={addRecipe.text}
                    placeholder="add meal" 
                    // onChange={(e) => setAddRecipe({...addRecipe, text: e.target.value})}
                    onChange={updateRecipeName}
                    />
                </label>
                
                <label className="addCuisineType">
                    Cuisine Type:
                    <input name="cuisineType" 
                    value={addRecipe.cuisineType}
                    placeholder="add cuisine"
                    // onChange={(e) => setAddRecipe({...addRecipe, cuisineType: e.target.value})}
                    onChange={updateCuisineType}
                    />
                </label>

                <label className="addMealType">
                    Meal type:
                <select name="mealType"
                value={addRecipe.mealType}
                // onChange={(e) => setAddRecipe({...addRecipe, mealType: e.target.value})}
                onChange={updateMealType}
                >
                        <option></option>
                        <option>Breakfast</option>
                        <option>Brunch</option>
                        <option>Lunch</option>
                        <option>Dinner</option>
                        <option>Snack</option>
                    </select>
                </label>
                 
                <button type="submit">Add meal</button>
            </form>


            <button onClick={clearList}>Clear all</button>
            <button>Clear selected</button>


        </div>


    )   

}