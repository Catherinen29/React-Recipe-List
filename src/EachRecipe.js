import "./EachRecipe.css"

export default function EachRecipe(props){
    
    const { recipe, deleteListItem, index, changeMealType } = props;
     
    // console.log(recipeList)
    function selectItem(){
        if (recipe.selected === false) {
        }
    }

    return(
        <div className="eachMeal">
            <p>{ recipe.text }</p>
            <p>{ recipe.cuisineType }</p>
            <p>{ recipe.mealType }</p>

            <button className="selectBtn" onClick={selectItem}>Select</button>
            <button className="likeBtn" onClick={(e) => e.target.innerText="Love!"}>Like?</button>
            <button className="deleteBtn" onClick={() => deleteListItem(index)}>Delete</button>
            
            
            <form onSubmit={changeMealType}>
            <div>Edit meal type:</div>
                <label>
                    <select name="updateMealType"
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