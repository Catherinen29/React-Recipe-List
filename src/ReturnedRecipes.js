import "./ReturnedRecipes.css"

export default function ReturnedRecipes(props){
const {newRecipe} = props;

    return(
        <div className="recipeResult">
                <div className="returnedLabel">{newRecipe.label}</div>
                <div className="returnedMeal">{newRecipe.mealType}</div>
                <div className="returnedCuisine">{newRecipe.cuisineType}</div>

            <button>Add to list</button>
        </div>

    )
}