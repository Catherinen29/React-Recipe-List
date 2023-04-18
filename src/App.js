
import './App.css';
import Inspo from './Inspo';
import NavBar from './NavBar';
import SavedRecipes from './SavedRecipes';
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {

  const [recipeList, setRecipeList] = useState([
    {text: "", cuisineType: "", mealType: "", selected: false}]);

  const [addRecipe, setAddRecipe] = useState(
    {text: "", cuisineType:"", mealType:""})
  
  function submitRecipe(e){
    e.preventDefault();
    setRecipeList([...recipeList, addRecipe])
    setAddRecipe({text: "", cuisineType:"", mealType:"", selected: false})
  }

  function clearList(){
    setRecipeList([{text: "", cuisineType: "", mealType: ""}])
  }
   
  const updateRecipeName = (e) => (setAddRecipe({...addRecipe, text: e.target.value}))
  const updateMealType = (e) => (setAddRecipe({...addRecipe, mealType: e.target.value}))
  const updateCuisineType = (e) => (setAddRecipe({...addRecipe, cuisineType: e.target.value}))



  return (
    <div className="App">

    <div>Nav Bar</div>
    
    <NavBar />

    <Routes>
      <Route path="/Inspo" element={<Inspo />} />
      <Route path="/SavedRecipes" element={
      <SavedRecipes       
        recipeList={recipeList} 
        addRecipe={addRecipe}
        submitRecipe={submitRecipe} 
        clearList={clearList} 
        updateRecipeName={updateRecipeName}
        updateMealType={updateMealType}
        updateCuisineType={updateCuisineType}/>}
       />
    </Routes>

    </div>

  );
}

export default App;
