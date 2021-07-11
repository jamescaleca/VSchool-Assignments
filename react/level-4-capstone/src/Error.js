import React from "react"
import { Link, Switch, Route } from "react-router-dom"

function Error() {
    return (
        <div>
            <h1>Uh oh!</h1>
            <h2>Looks like you encountered an error</h2>
            <Link to="/">Back to Home</Link>
        </div>
    )
}

export default Error