import React, { useContext } from "react"
import { RecipesContext } from "../contexts/recipesContext"

function RecipesList() {
    const {allRecipes} = useContext(RecipesContext)

    return (
        <>
            <h1>All Recipes</h1>
            <ul>{allRecipes}</ul>
        </>
    )
}

export default RecipesList