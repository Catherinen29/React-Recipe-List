import { useState } from "react";
import EachRecipe from "./EachRecipe";
import Inspo from "./Inspo";
import "./SavedRecipes.css"

export default function SavedRecipes(props){

const {submitRecipe, addRecipe, clearList, deleteListItem,
    updateRecipeName, recipeList, updateMealType, 
    updateCuisineType, changeMealType} = props;

console.log(recipeList)

function handleChange(e){
    e.preventDefault();
}

    return(
        <div> 
            <h1>Saved recipes</h1>

                <h3>My recipes:</h3>
                {recipeList.map((recipe, index) => (
                    <EachRecipe recipe={recipe} index={index} 
                        deleteListItem={deleteListItem} 
                        changeMealType={changeMealType} />
                ))} 


            <form className="recipeForm" onSubmit={submitRecipe}>
                <h3>Add your own</h3>
                {/* new meal user input: */}
                <label className="addName">
                    Meal name: 
                    <input type="text" 
                    name="text"
                    value={addRecipe.text}
                    placeholder="add meal" 
                    onChange={updateRecipeName}
                    />
                </label>
                
                {/* new cuisine user input: */}
                <label className="addCuisineType">
                    Cuisine Type:
                    <input name="cuisineType" 
                    value={addRecipe.cuisineType}
                    placeholder="add cuisine"
                    onChange={updateCuisineType}
                    />
                </label>

                {/* new meal type user input: */}
                <label className="addMealType">
                    Meal type:
                <select name="mealType"
                value={addRecipe.mealType}
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