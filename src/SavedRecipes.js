import { useState } from "react";
import EachRecipe from "./EachRecipe";
import Inspo from "./Inspo";
import "./SavedRecipes.css"
import uuid from 'react-uuid';

export default function SavedRecipes(props){

const {addRecipe, clearList, deleteListItem, recipeList, setRecipeList, changeMealType} = props;


const [userRecipe, setUserRecipe] = useState(
    {text: "", cuisineType:"", mealType:"",  id: uuid()})

const updateRecipe = (e) => (setUserRecipe({...userRecipe, [e.target.name]: e.target.value})) 
// function linked to addType field which updates the text in the state with the user's input


function submitRecipe(e) {
    e.preventDefault();
    addRecipe(userRecipe)
    setUserRecipe({text: "", cuisineType:"", mealType:"", id: uuid()})
}


const [selectedItemsIDs, setSelectedItemsIDs] = useState([])

function addOrRemove(e, id){
// console.log(selectedItemsIDs.includes(id))
const selectedItemsArray = [...selectedItemsIDs] // copy the array

    if (selectedItemsArray.includes(id)) { 
        const indexToRemove = selectedItemsArray.indexOf(id) // get the index of the id that has been checked
        selectedItemsArray.splice(indexToRemove) // remove the id using the index
        setSelectedItemsIDs(selectedItemsArray) // set the state with the new array having removed the id

    } else if (!selectedItemsArray.includes(id)) {
        setSelectedItemsIDs([...selectedItemsArray, id]) // add the id to the array
    }
  }

function removeSelected (){
    const checkIfIDIncluded = recipeList.filter((bananas) => !selectedItemsIDs.includes(bananas.id))
    setRecipeList(checkIfIDIncluded)
}
// use filter to create a copy of the recipeList array only of 
// objects that include the id of each item in the selectedItemsIDs array
// update the recipeList state

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
                    autoComplete="off"
                    onChange={updateRecipe}
                    />
                </label>
                
                {/* new cuisine user input: */}
                <label className="addType" id="addCuisineType">
                    Cuisine Type:&nbsp;&nbsp;
                    <input name="cuisineType" 
                    value={userRecipe.cuisineType}
                    placeholder="Enter cuisine"
                    autoComplete="off"
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
                <button onClick={removeSelected}>Clear selected</button>
            </div>

            <div className="recipeList">
            {recipeList.map((recipe, index) => (
                <EachRecipe 
                    key={recipe.id}
                    recipe={recipe} index={index} 
                    deleteListItem={deleteListItem} 
                    changeMealType={changeMealType}
                    userRecipe={userRecipe} 
                    selectedItemsIDs={selectedItemsIDs}
                    addOrRemove={addOrRemove}
                    recipeList={recipeList}
                    setRecipeList={setRecipeList}
                    />
            ))} 
            </div>




        </div>


    )   

}