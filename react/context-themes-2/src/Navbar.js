import React, {Component} from "react"
import {ThemeConsumer} from "./themeContext"

function Navbar(props) {
    return (
        <ThemeConsumer>
            {context => (
                <header className={`${context.theme}-theme-header`}>
                    <nav>
                        <a href="" className={`${context.theme}-theme-header`}>Home</a>
                        <a href="" className={`${context.theme}-theme-header`}>About</a>
                        <a href="" className={`${context.theme}-theme-header`}>Contact</a>
                    </nav>
                </header>
            )}
        </ThemeConsumer>
    )
}

export default Navbar