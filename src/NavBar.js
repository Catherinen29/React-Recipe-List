import { Link } from "react-router-dom";
import "./NavBar.css"

export default function NavBar(){
    return(
        <nav className="nav">
            {/* This stuff lets you navigate between components
                without re-loading the browser each time */}
            {/* <Link to="/">Go to home page</Link> */}
            {/* &nbsp; | &nbsp; */}
            <Link to="/Inspo">INSPO</Link>
            &nbsp; | &nbsp;
            <Link to="/SavedRecipes">RECIPES</Link>
        </nav>
    )
}