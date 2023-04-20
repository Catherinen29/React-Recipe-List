import { useState } from "react";
import "./EachRecipe.css"

export default function EachRecipe(props){
    
    const { recipe, deleteListItem, index, userRecipe, addOrRemove, selectedItemsIDs } = props;
     
function changeMealType(id){
    console.log(id)
}


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
            
            <form className="editMeal">
            Edit meal type: &nbsp;&nbsp;
                <label>
                    <select name="updateMealType"
                    value={userRecipe.mealType}
                    onChange={changeMealType}>
                    
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