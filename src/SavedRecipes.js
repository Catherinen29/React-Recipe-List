import { useState } from "react";
import EachRecipe from "./EachRecipe";
import Inspo from "./Inspo";
import "./SavedRecipes.css"
import uuid from 'react-uuid';

export default function SavedRecipes(props){

const {addRecipe, clearList, deleteListItem, recipeList, changeMealType} = props;
  
const [userRecipe, setUserRecipe] = useState(
    {text: "", cuisineType:"", mealType:"", selected: false, id: uuid()})

const updateRecipe = (e) => (setUserRecipe({...userRecipe, [e.target.name]: e.target.value})) 
// function linked to addName field which updates the text in the state with the user's input


function submitRecipe(e) {
    e.preventDefault();
    addRecipe(userRecipe)
    setUserRecipe({text: "", cuisineType:"", mealType:"", selected: false, id: uuid()})
}


function handleChange(e){
    e.preventDefault();
}

    return(
        <div> 
            <h1 className="SavedHeading">Saved meals</h1>

            <form className="recipeForm" onSubmit={submitRecipe}>
                <h3>Add your own</h3>
                {/* new meal user input: */}
                <label className="addType" id="addName">
                    Meal:  &nbsp;&nbsp;
                    <input type="text" 
                    name="text"
                    value={userRecipe.text}
                    placeholder="Enter meal name" 
                    autocomplete="off"
                    onChange={updateRecipe}
                    />
                </label>
                
                {/* new cuisine user input: */}
                <label className="addType" id="addCuisineType">
                    Cuisine Type:&nbsp;&nbsp;
                    <input name="cuisineType" 
                    value={userRecipe.cuisineType}
                    placeholder="Enter cuisine"
                    autocomplete="off"
                    onChange={updateRecipe}
                    />
                </label>

                {/* new meal type user input: */}
                <label className="addType" id="addMealType">
                    Meal type:&nbsp;&nbsp;
                <select name="mealType"
                value={userRecipe.mealType}
                onChange={updateRecipe}
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

            <div className="clearBtns">
                <button onClick={clearList}>Clear all</button>
                <button>Clear selected</button>
            </div>

            <div className="recipeList">
            {recipeList.map((recipe, index) => (
                <EachRecipe 
                    recipe={recipe} index={index} 
                    deleteListItem={deleteListItem} 
                    changeMealType={changeMealType}
                    userRecipe={userRecipe} 
                    />
            ))} 
            </div>




        </div>


    )   

}