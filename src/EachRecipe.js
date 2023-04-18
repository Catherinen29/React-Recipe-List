

export default function EachRecipe(props){
    
    const { recipe } = props;
     
    // console.log(recipeList)
    
    return(
        <div>
            <p>{ recipe.text }</p>
            <p>{ recipe.cuisineType }</p>
            <p>{ recipe.mealType }</p>
            
            <button>Select</button>
        </div>
    )

}