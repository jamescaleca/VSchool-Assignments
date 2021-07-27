import React, { useContext } from "react"
import { Link } from "react-router-dom"
import Navbar from "./Navbar"
import { RecipesContext } from "./contexts/recipesContext"
import { ThemeContext } from "./contexts/themeContext"
import "./styles.css"

function Home() {
    const {filterRecipes, search, setSearch} = useContext(RecipesContext)
    const {theme} = useContext(ThemeContext)

    return (
        <>
            <Navbar />
            <section className={`${theme}--bg-primary container`}>
                <div>
                    <div className="split">
                        <h2 className={`${theme}-theme-text text-center`}>Welcome</h2>
                        <h3 className={`${theme}-theme-text text-center`}>Search for a beer recipe by food pairing:</h3>
                        <form className={`${theme}-form-search-bar text-center`}>
                            <input 
                                className={`${theme}-search-input`}
                                type="text" 
                                placeholder="Beef Wellington"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            ></input>
                            <br/>
                            <button 
                                className={`${theme}-search-button`}
                                type="submit" 
                                value="Search" 
                                onClick={(e) => {
                                    e.preventDefault()
                                    filterRecipes()
                                }}
                            ><Link to="/search">Search</Link>
                            </button>
                            <hr/>
                            <Link 
                                to="/recipes" 
                                className={`${theme}-all-recipes-button`}
                            >See all recipes
                            </Link>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home