import { useState } from "react";
import "./EachRecipe.css"

export default function EachRecipe(props){
    
    const { recipe, deleteListItem, index, userRecipe, 
        addOrRemove, selectedItemsIDs, recipeList, setRecipeList } = props;
     

const [chosenMealType, setChosenMealType] = useState("")
// const [newRecipeType, setNewRecipeType] = 

function selectMealType(e){
    setChosenMealType(e.target.value) // set the state for this element as users input
}

function changeMealType (e) {
    e.preventDefault();
    // recipe.mealType = chosenMealType;
    // console.log(recipe.mealType)

    const updatedMealType = recipeList.map((item) => {
        if (recipe.id === item.id) {
            return { ...recipe, mealType: chosenMealType };
          }
    });
    setRecipeList(updatedMealType);
}
    

// recipe.mealType is displayed on the UI
// the drop down menu updates selectMealType which in turn updates the state chosenMealType
// now update recipe.mealType with chosenMealType


    return(
        <div className="eachMeal">

            <div className="userMeal">
                <p>{ recipe.text }</p>
                <p>{ recipe.cuisineType }</p>
                <p>{ recipe.mealType }</p>
            </div>

            <div className="userOptions">
            <button className="likeBtn" onClick={(e) => e.target.innerText="Love!"}>Like?</button>
             
            <button className="deleteBtn" onClick={() => deleteListItem(recipe.id)}>Delete</button>
          
            <label>Select: <input type="checkbox" name="checkBox" 
            onChange={(e) => addOrRemove(e, recipe.id)} /></label> 

            </div>
            
            <form className="editMeal" onSubmit={changeMealType}>
            Edit meal type: &nbsp;&nbsp;
                <label>
                    <select name="updateMealType"
                    value={chosenMealType}
                    onChange={selectMealType}>
                    
                        <option></option>
                        <option>Breakfast</option>
                        <option>Brunch</option>
                        <option>Lunch</option>
                        <option>Dinner</option>
                        <option>Snack</option>
                    </select>
                    <button type="submit">Update</button>
                </label>
            </form>
                
            

        </div>
    )

}