import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"

function SingleRecipe() {
    const {recipeId} = useParams()
    const [thisRecipe, setThisRecipe] = useState([])

    useEffect(() => {
        const getThisRecipe = () => {
            axios 
                .get(`https://api.punkapi.com/v2/beers/${recipeId}`)
                .then(response => {
                    const thisSingleRecipe = response.data
                    setThisRecipe(thisSingleRecipe)
                })
                .catch(error => console.log("woopsie"))
        }
        getThisRecipe()
    }, [])

    return (
        thisRecipe[0] ? 
        <>
            <h1>Recipe Detail Page</h1>
            <h3>{thisRecipe[0].name}</h3>
            <img alt={thisRecipe[0].name} src={thisRecipe[0].image_url}></img>
            <h3>{thisRecipe[0].tagline}</h3>
            <h3>ABV: {thisRecipe[0].abv}%</h3>
            <p>Food pairing: </p>
            <ul>{thisRecipe[0].food_pairing.map(food => 
                <li key={food}>{food}</li>
            )}</ul>
            
        </>
        :
        null
    )
}

export default SingleRecipe