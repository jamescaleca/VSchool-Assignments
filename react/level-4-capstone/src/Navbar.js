import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { ThemeContext } from "./contexts/themeContext"
import "./styles.css"
import BeerIcon from "./assets/beer-icon.png"

function Navbar(props) {
    const {theme, toggleTheme} = useContext(ThemeContext)
    return (
        <div>
            <ul className={`${theme}-theme`}>
                <li>
                    <button className="theme-button"
                        onClick={toggleTheme}
                        
                    >
                        {theme === "light" ? "Light" : "Dark"} Theme
                    </button>
                </li>

                <li><Link className="navbar-links" to="/about">About</Link></li>

                <li><Link className="navbar-links" to="/">Home</Link></li>

                <li><img  alt="BeerIcon" src={BeerIcon} style={{height: "3%", width: "3%", float: "left"}}></img></li>
            </ul>
        </div>
    )
}


export default Navbar