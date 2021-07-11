import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"
import { ThemeContextProvider } from "./contexts/themeContext"
import { RecipesContextProvider } from "./contexts/recipesContext"
import App from "./App"

ReactDOM.render(
    <Router>
        <ThemeContextProvider>
            <RecipesContextProvider>
                <App />
            </RecipesContextProvider>
        </ThemeContextProvider>
    </Router>, 
    document.getElementById("root")
)