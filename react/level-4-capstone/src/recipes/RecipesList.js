import React, { useContext } from "react"
import { RecipesContext } from "../contexts/recipesContext"
import { ThemeContext } from "../contexts/themeContext"
import Navbar from "../Navbar"
import "../styles.css"

function RecipesList() {
    const {allRecipes} = useContext(RecipesContext)
    const {theme} = useContext(ThemeContext)

    return (
        <>
            <Navbar />
            <div className={`${theme}--bg-primary container`}>
                <h1 style={{margin: 0, padding: 20 }} className={`text-center`}>All Recipes</h1>
                <ul className={`${theme}--all-rec-ul tiles`}>{allRecipes}</ul>
            </div>
        </>
    )
}

export default RecipesList