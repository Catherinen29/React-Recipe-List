
import './App.css';
import Inspo from './Inspo';
import NavBar from './NavBar';
import SavedRecipes from './SavedRecipes';
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {

  const [recipeList, setRecipeList] = useState([]);

 
  function addRecipe(newRecipe){
    const isInList = recipeList.some((recipe) => recipe.id === newRecipe.id)
    if (!isInList) {
      setRecipeList([...recipeList, newRecipe])}

  }



  function clearList(){
    setRecipeList([])
  }

  function deleteListItem(id){
    const removeArr = [...recipeList]
    const indexToRemove = removeArr.findIndex((recipe) => recipe.id === id)
    // get the index of the item using the ID
    
    if (indexToRemove !== -1) {
      removeArr.splice(indexToRemove, 1)
    }
     // use splice to remove an item based on it's position in the array
    setRecipeList(removeArr) // set the new state
  }




  return (
    <div className="App">

    <div className="NavBar">
    <NavBar /> </div>

    <Routes>
      <Route path="/Inspo" element={<Inspo addRecipe={addRecipe} />} />
      <Route path="/SavedRecipes" element={<SavedRecipes // pass props down to SavedRecipes component      
        recipeList={recipeList} 
        addRecipe={addRecipe} 
        clearList={clearList} 
        deleteListItem={deleteListItem}
        // changeMealType={changeMealType}
        />
        }
       />
    </Routes>

    <footer />
    </div>

  );
}

export default App;
