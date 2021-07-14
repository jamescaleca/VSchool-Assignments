import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { RecipesContext } from "./contexts/recipesContext"
import "./styles.css"

function Home() {
    const {filterRecipes, search, setSearch} = useContext(RecipesContext)

    return (
        <>
            <form className="search-bar">
                <input 
                    type="text" 
                    placeholder="Beef Wellington"
                    value={search}
                    onChange={(e) => {setSearch(e.target.value)}}
                ></input>
                <br/>
                <button type="submit" value="Search" onClick={(e) => {
                    e.preventDefault()
                    filterRecipes()
                }}>
                    <Link to="/search">Search</Link>
                </button>
                <hr/>
                <Link to="/recipes" className="all-recipes-button">See all recipes</Link>
            </form>
        </>
    )
}

export default Home