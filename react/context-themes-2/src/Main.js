import React, {Component} from "react"
import {ThemeConsumer} from "./themeContext"

function Main(props) {
    return (
        <ThemeConsumer>
            {context => (
                <div className={`${context.theme}-theme`}>
                    <h1>What a cool website!</h1>
                    <p>Yet another sick nasty way to add responsiveness</p>
                    <h3>Good stuff</h3>
                    <button onClick={context.toggleTheme} className={`${context.theme}-theme`}>Change theme</button>
                </div>
            )}
        </ThemeConsumer>
    )
}

export default Main