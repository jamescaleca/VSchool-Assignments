import React, {Component} from "react"
import {ThemeConsumer} from "./themeContext"

function Footer(props) {
    return (
        <ThemeConsumer>
            {context => (
                <footer>
                    The most amazing footer
                </footer>
            )}
        </ThemeConsumer>
    )
}

export default Footer