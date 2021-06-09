import React from "react"

import {ThemeConsumer} from "./themeContext"
import Navbar from "./Navbar"
import Main from "./Main"
import Footer from "./Footer"

function App() {
    return (
        <ThemeConsumer>
            {context => (
                <div className={`${context.theme}-theme`}>
                    <Navbar />
                    <Main />
                    <Footer />
                </div>
            )}
        </ThemeConsumer>
    )
}

export default App