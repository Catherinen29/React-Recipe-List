

export default function EachRecipe(props){
    
    const { recipe } = props;
     
    // console.log(recipeList)
    function selectItem(){
        if (recipe.selected === false) {

        }
    }

    return(
        <div>
            <p>{ recipe.text }</p>
            <p>{ recipe.cuisineType }</p>
            <p>{ recipe.mealType }</p>
            <button onClick={selectItem}>Select</button>
            <button>Love this</button>
            <div>dropdown</div>
            
            <label>
            <select name="mealType">
                        <option></option>
                        <option>Breakfast</option>
                        <option>Brunch</option>
                        <option>Lunch</option>
                        <option>Dinner</option>
                        <option>Snack</option>
                    </select>
                </label>
        </div>
    )

}