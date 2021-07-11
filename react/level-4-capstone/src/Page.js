import React from "react"
import { Switch, Route } from "react-router-dom"
import RecipesList from "./recipes/RecipesList"
import About from "./About"
import Home from "./Home"

function Page() {
    return (
        <>
            <Switch>
                <Route exact path="/"><Home /></Route>
                <Route exact path="/about"><About /></Route>
                <Route exact path="/recipes"><RecipesList /></Route>
                
            </Switch>
        </>
    )
}

export default Page