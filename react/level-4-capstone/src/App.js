import React from "react"
import { Switch, Route } from "react-router-dom"
import About from "./About"
import Home from "./Home"
import RecipesList from "./recipes/RecipesList"
import SingleRecipe from "./recipes/SingleRecipe"
import FilteredRecipes from "./recipes/FilteredRecipes"
import "./styles.css"


function App() {
    return (
        <>
            <Switch>
                <Route exact path="/"><Home /></Route>
                <Route exact path="/about"><About /></Route>
                <Route exact path="/recipes"><RecipesList /></Route>
                <Route exact path="/recipes/:recipeId"><SingleRecipe /></Route>
                <Route exact path="/search"><FilteredRecipes /></Route>
            </Switch>
        </>
    )
}

export default App