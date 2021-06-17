import React from "react"
import { Link, Switch, Route } from "react-router-dom"

import Home from "./Home"
import About from "./About"
import Services from "./Services"

function App() {
    return (
        <div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/services">Services</Link>
            </nav>

            <Switch>
                <Route exact path="/"><Home /></Route>
                <Route exact path="/about"><About /></Route>
                <Route exact path="/services"><Services /></Route>
            </Switch>
        </div>
    )
}

export default App