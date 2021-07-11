import React, { useContext } from "react"
import { RecipesContext, getOneRecipe } from "../contexts/recipesContext"
import { Link, Switch, Route } from "react-router-dom"

function RecipesList() {
    const {recipesData, singleRecipe} = useContext(RecipesContext)


    const recipes = recipesData.map(recipe => (
        <li key={recipe.id}>
            <img style={{height: "100px", width: "100px"}} alt={recipe.name} src={recipe.image_url}></img>
            <h3>{recipe.name}</h3>
            <p>{recipe.tagline}</p>
        </li>
    ))
    return (
        <>
            <h1>All Recipes</h1>
            <ul style={{listStyleType: "circle"}}>{recipes}</ul>
            {/* <Link to={`/recipes/${recipe.id}`}>{recipe.name}</Link>
            <Switch>
                <Route exact path={`/recipes/${recipe.id}`}></Route>
            </Switch> */}
        </>
    )
}

export default RecipesList