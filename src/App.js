
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

  function deleteListItem(index){
    const removeArr = [...recipeList]
    removeArr.splice(index, 1)
    setRecipeList(removeArr)
  }

  function pickMealType(){
    
  }
  function changeMealType(e){
    e.preventDefault();
    console.log("CLICK *********")
  }


  const updateRecipeName = (e) => (setAddRecipe({...addRecipe, text: e.target.value})) 
  // function linked to addName field which updates the text in the state with the user's input
  const updateMealType = (e) => (setAddRecipe({...addRecipe, mealType: e.target.value}))
    // function linked to addCuisineType field which updates the text in the state with the user's input
  const updateCuisineType = (e) => (setAddRecipe({...addRecipe, cuisineType: e.target.value}))
  // function linked to addMealType field which updates the text in the state with the user's input



  return (
    <div className="App">

    <div>Nav Bar</div>
    
    <NavBar />

    <Routes>
      <Route path="/Inspo" element={<Inspo addRecipe={addRecipe} />} />
      <Route path="/SavedRecipes" element={
      <SavedRecipes // pass props down to SavedRecipes component      
        recipeList={recipeList} 
        addRecipe={addRecipe}
        submitRecipe={submitRecipe} 
        clearList={clearList} 
        deleteListItem={deleteListItem}
        updateRecipeName={updateRecipeName}
        updateMealType={updateMealType}
        updateCuisineType={updateCuisineType}
        changeMealType={changeMealType}
        />
        }
       />
    </Routes>

    </div>

  );
}

export default App;
