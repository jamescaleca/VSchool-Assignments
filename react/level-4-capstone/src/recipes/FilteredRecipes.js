import React, { useContext } from "react"
import { RecipesContext } from "../contexts/recipesContext"
import { ThemeContext } from "../contexts/themeContext"
import Navbar from "../Navbar"
import "../styles.css"

function FilteredRecipes() {
    const {searchResults} = useContext(RecipesContext)
    const {theme} = useContext(ThemeContext)

    return (
        <>
            <Navbar />
            <div className={`${theme}--bg-primary container`}>
                <h1 style={{margin: 0, padding: 20 }} className={`text-center`}>Search Results</h1>
                <ul className={`${theme}-search-res-ul tiles`}>{searchResults}</ul>
            </div>
        </>
    )
}

export default FilteredRecipes