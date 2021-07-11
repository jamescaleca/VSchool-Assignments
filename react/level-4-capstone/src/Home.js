import React from "react"
import "./styles.css"
import { Link } from "react-router-dom"

function Home(props) {
    return (
        <div>
            <form className="search-bar">
                <input type="text" placeholder="Beef Wellington"></input>
                <br/>
                <input type="submit" value="Search"></input>
            </form>
            <Link to="/recipes" className="all-recipes-button">See all recipes</Link>
        </div>
    )
}

export default Home