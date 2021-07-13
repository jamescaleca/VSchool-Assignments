import React, { useContext } from "react"
import { RecipesContext } from "../contexts/recipesContext"
import { Link } from "react-router-dom"

function RecipesList() {
    const {recipesData} = useContext(RecipesContext)

    const recipes = recipesData.map(recipe => (
        <li key={recipe.id}>
            <h1>{recipe.id}</h1>
            <img style={{height: "100px", width: "100px"}} alt={recipe.name} src={recipe.image_url}></img>
            <Link to={`/recipes/${recipe.id}`}>{recipe.name}</Link>
            <p>{recipe.tagline}</p>
        </li>
    ))

    return (
        <>
            <h1>All Recipes</h1>
            <ul>{recipes}</ul>
        </>
    )
}

export default RecipesList