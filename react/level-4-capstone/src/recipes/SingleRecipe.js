import React, { useEffect, useState } from "react"
import { useParams, useHistory } from "react-router-dom"
import ErrorPage from "../ErrorPage"
import axios from "axios"

function SingleRecipe() {
    const {recipeId} = useParams()
    const [thisRecipe, setThisRecipe] = useState([])
    const history = useHistory()

    useEffect(() => {
        const getThisRecipe = () => {
            axios 
                .get(`https://api.punkapi.com/v2/beers/${recipeId}`)
                .then(response => {
                    const thisSingleRecipe = response.data
                    setThisRecipe(thisSingleRecipe)
                })
                .catch(error => <ErrorPage />)
        }
        getThisRecipe()
    }, [])

    function backToResults() {
        history.goBack()
    }

    return (
        thisRecipe[0] ? 
        <>
            <h1>Recipe Detail Page</h1>
            <h3>{thisRecipe[0].name}</h3>
            <img alt={thisRecipe[0].name} src={thisRecipe[0].image_url}></img>
            <h3>{thisRecipe[0].tagline}</h3>
            <h4>{thisRecipe[0].description}</h4>
            <h4>ABV: {thisRecipe[0].abv}%</h4>
            <h4>IBUs: {thisRecipe[0].ibu}</h4>

            <p>Food pairing: </p>
            <ul className="food-pairing-list">{thisRecipe[0].food_pairing.map(food => <li key={food}>{food}</li>)}</ul>
            
            <h3>Recipe:</h3>
            <p>Volume: {thisRecipe[0].volume.value} {thisRecipe[0].volume.unit}</p>
            <p>Boil Volume: {thisRecipe[0].boil_volume.value} {thisRecipe[0].boil_volume.unit}</p>
            <h4>Method:</h4>
            <p>Mash temp: 
                {thisRecipe[0].method.mash_temp[0].temp.value}° 
                {thisRecipe[0].method.mash_temp[0].temp.unit}
            </p>
            <p>Fermentation: 
                {thisRecipe[0].method.fermentation.temp.value}° 
                {thisRecipe[0].method.fermentation.temp.unit}
            </p>
            <p>Twist: 
                {thisRecipe[0].method.twist}
            </p>

            <h4>Ingredients:</h4>

            <h5>Malt:</h5>
            <ul>{thisRecipe[0].ingredients.malt.map(malt => 
                <>
                    <li key={malt.name}>{malt.name}</li>
                    <li key={malt.amount.value}>{malt.amount.value} {malt.amount.unit}</li>
                </>
            )}</ul>

            <h5>Hops:</h5>
            <ul>{thisRecipe[0].ingredients.hops.map(hop => 
                <>
                    <li key={hop.name}>{hop.name}</li>
                    <li key={hop.amount.value}>{hop.amount.value} {hop.amount.unit}</li>
                    <li key={hop.add}>Add time: {hop.add}</li>
                    <li key={hop.attribute}>Attribute: {hop.attribute}</li>
                </>
            )}</ul>

            <h5>Yeast:</h5>
            <p>{thisRecipe[0].ingredients.yeast}</p>

            <h5>Brewers' Tips:</h5>
            <p>{thisRecipe[0].brewers_tips}</p>

            <h5>Target FG:</h5>
            <p>{thisRecipe[0].target_fg}</p>

            <h5>Target OG:</h5>
            <p>{thisRecipe[0].target_og}</p>

            <h5>EBC:</h5>
            <p>{thisRecipe[0].ebc}</p>

            <h5>SRM:</h5>
            <p>{thisRecipe[0].srm}</p>

            <h5>PH:</h5>
            <p>{thisRecipe[0].ph}</p>

            <h5>Attenuation level:</h5>
            <p>{thisRecipe[0].attenuation_level}</p>

            <h5>Recipe contributed by:</h5>
            <p>{thisRecipe[0].contributed_by}</p>

            <button onClick={backToResults} className="back-to-results-button">Back to results</button>
        </>
        :
        <ErrorPage />
    )
}

export default SingleRecipe