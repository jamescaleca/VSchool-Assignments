import React, {Component} from "react"
import {ThemeConsumer} from "./themeContext"

function Navbar(props) {
    return (
        <ThemeConsumer>
            {context => (
                <header className={`${context.theme}-theme`}>
                    <nav>
                        <a href="">Home</a>
                        <a href="">About</a>
                        <a href="">Contact</a>
                    </nav>
                </header>
            )}
        </ThemeConsumer>
    )
}

export default Navbar