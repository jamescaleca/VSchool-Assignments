import React from "react"
import { Link } from "react-router-dom"

function ErrorPage() {
    return (
        <>
            <h1>Whoops!</h1>
            <h2>Couldn't find that page for ya</h2>
            <h3>Sorry about that!</h3>
            <h4>Go home?</h4>
            <Link to={"/"}>Yes</Link>
            <Link to={"/"}>Yes</Link>
        </>
    )
}

export default ErrorPage