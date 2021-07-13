import React from "react"
import { Switch, Route } from "react-router-dom"
import About from "./About"
import Home from "./Home"
import RecipesList from "./recipes/RecipesList"
import SingleRecipe from "./recipes/SingleRecipe"

function Page() {
    return (
        <>
            <Switch>
                <Route exact path="/"><Home /></Route>
                <Route exact path="/about"><About /></Route>
                <Route exact path="/recipes"><RecipesList /></Route>
                <Route path="/recipes/:recipeId"><SingleRecipe /></Route>
            </Switch>
        </>
    )
}

export default Page