import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { ThemeContext } from "./contexts/themeContext"
import "./styles.css"


function ErrorPage() {
    const {theme} = useContext(ThemeContext)

    return (
        <>
            <h1 className={`${theme}-theme-text text-center`}>Whoops!</h1>
            <h2 className={`${theme}-theme-text text-center`}>Couldn't find that page for ya</h2>
            <h3 className={`${theme}-theme-text text-center`}>Sorry about that!</h3>
            <h4 className={`${theme}-theme-text text-center`}>Go home?</h4>
            <Link to={"/"} className={`${theme}-theme-text text-center`}>Yes</Link>
            <Link to={"/"} className={`${theme}-theme-text text-center`}>Yes</Link>
        </>
    )
}

export default ErrorPage