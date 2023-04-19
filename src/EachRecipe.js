import { useState } from "react";
import "./EachRecipe.css"

export default function EachRecipe(props){
    
    const { recipe, deleteListItem, index, userRecipe } = props;
     

    const [IsSelected, setIsSelected] = useState([])

    function selectItem(e, recipe){
        console.log("CLICK *********")
        if (recipe.checked){
            console.log("HELLO *******")
        }
        // setIsSelected(...IsSelected, e.target.id)
        console.log(recipe)
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
          
            <label>Select: <input type="checkbox" name="checkBox" onChange={() => selectItem(recipe.id)} /></label> 

            </div>
            
            <form className="editMeal">
            Edit meal type: &nbsp;&nbsp;
                <label>
                    <select name="updateMealType"
                    value={userRecipe.mealType}
                    // onChange={changeMealType}>
                    >
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