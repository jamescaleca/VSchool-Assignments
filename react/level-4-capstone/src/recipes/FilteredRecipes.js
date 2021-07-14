import React, { useContext } from "react"
import { RecipesContext } from "../contexts/recipesContext"

function FilteredRecipes() {
    const {searchResults} = useContext(RecipesContext)

    return (
        <>
            <h1>Search Results</h1>
            <ul>{searchResults}</ul>
        </>
    )
}

export default FilteredRecipes