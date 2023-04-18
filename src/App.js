
import './App.css';
import Inspo from './Inspo';
import NavBar from './NavBar';
import SavedRecipes from './SavedRecipes';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">

    <div>Nav Bar</div>
    
    <NavBar />

    <Routes>
      <Route path="/Inspo" element={<Inspo />} />
      <Route path="/SavedRecipes" element={<SavedRecipes />} />
    </Routes>


    </div>
  );
}

export default App;
