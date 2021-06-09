import React, {Component} from "react"
import {ThemeConsumer} from "./themeContext"

function Footer(props) {
    return (
        <ThemeConsumer>
            {context => (
                <footer className={`${context.theme}-theme-footer`}>
                    The most amazing footer
                </footer>
            )}
        </ThemeConsumer>
    )
}

export default Footer