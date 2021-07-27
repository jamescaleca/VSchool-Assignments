import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { ThemeContext } from "./contexts/themeContext"
import "./styles.css"
import BeerIcon from "./assets/beer-icon.png"

function Navbar() {
    const {theme, toggleTheme} = useContext(ThemeContext)
    return (
        <header className={`${theme}--bg-light text-right`}>
            <nav className="container container--narrow">
                <ul className={`${theme}--nav-ul nav-ul`}>
                    <li>
                        <button 
                            className={`${theme}-theme-button`}
                            onClick={toggleTheme}
                        >{theme === "light" ? "Light" : "Dark"} Theme
                        </button>
                    </li>

                    <li>
                        <Link className={`${theme}-theme-nav-link`} to="/about">About</Link>
                    </li>

                    <li>
                        <Link className={`${theme}-theme-nav-link`} to="/">Home</Link>
                    </li>

                    <li>
                        <img 
                            className={`nav-icon img-contain`}
                            alt="BeerIcon" 
                            src={BeerIcon} 
                        ></img>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar