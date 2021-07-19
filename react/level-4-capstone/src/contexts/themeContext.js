import React, { useState } from "react"
import "../styles.css"

const ThemeContext = React.createContext()

function ThemeContextProvider(props) {
    const [theme, setTheme] = useState("dark")

    function toggleTheme() {
        setTheme(prevTheme => prevTheme === "light" ? "dark" : "light")
        console.log(theme)
    }

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export {ThemeContextProvider, ThemeContext}