import React, { useContext, useEffect, useState } from "react"
import { useParams, useHistory } from "react-router-dom"
import { ThemeContext } from "../contexts/themeContext"
import ErrorPage from "../ErrorPage"
import Navbar from "../Navbar"
import axios from "axios"
import "../styles.css"


function SingleRecipe() {
    const {recipeId} = useParams()
    const [thisRecipe, setThisRecipe] = useState([])
    const history = useHistory()
    const {theme} = useContext(ThemeContext)

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
        <div className={`${theme}--bg-primary`}>
            <Navbar />
            <h1 className={`${theme}-theme-text text-center`}>Recipe Detail Page</h1>
            <h2 className={`${theme}-theme-text text-center`}>{thisRecipe[0].name}</h2>
            <img 
                className={`rec-detail-img img-contain`}
                alt={thisRecipe[0].name} 
                src={thisRecipe[0].image_url}
            ></img>
            <h3 className={`${theme}-theme-text`}>{thisRecipe[0].tagline}</h3>
            <h4 className={`${theme}-theme-text`}>{thisRecipe[0].description}</h4>
            <h4 className={`${theme}-theme-text`}>ABV: {thisRecipe[0].abv}%</h4>
            <h4 className={`${theme}-theme-text`}>IBUs: {thisRecipe[0].ibu}</h4>

            <h4 className={`${theme}-theme-text`}>Food pairing: </h4>
            <ul className={`${theme}-food-pairing-list`}>
                {thisRecipe[0].food_pairing.map(food => 
                    <li 
                        className={`${theme}-theme-text`} 
                        key={food}
                    >{food}
                    </li>
                )}
            </ul>
            
            <h3 className={`${theme}-theme-text`}>Recipe:</h3>
            <p className={`${theme}-theme-text`}>
                Volume: {thisRecipe[0].volume.value} {thisRecipe[0].volume.unit}
            </p>
            <p className={`${theme}-theme-text`}>
                Boil Volume: {thisRecipe[0].boil_volume.value} {thisRecipe[0].boil_volume.unit}
            </p>
            <h4 className={`${theme}-theme-text`}>
                Method:
            </h4>
            <p className={`${theme}-theme-text`}>
                Mash temp: {thisRecipe[0].method.mash_temp[0].temp.value}° {thisRecipe[0].method.mash_temp[0].temp.unit}
            </p>
            <p className={`${theme}-theme-text`}>
                Fermentation: {thisRecipe[0].method.fermentation.temp.value}° {thisRecipe[0].method.fermentation.temp.unit}
            </p>
            {thisRecipe[0].method.twist ?
                <>
                    <h4 className={`${theme}-theme-text`}>
                        Twist: 
                    </h4>
                    <p className={`${theme}-theme-text`}>
                        {thisRecipe[0].method.twist}
                    </p>
                </>
                :
                null
            }

            <h4 className={`${theme}-theme-text`}>
                Ingredients:
            </h4>

            <h5 className={`${theme}-theme-text`}>
                Malt:
            </h5>
            <ul className={`${theme}-malt-ul ${theme}-theme-text`}>
                {thisRecipe[0].ingredients.malt.map(malt => 
                    <li key={malt.name}>
                        <b>{malt.name}</b> - {malt.amount.value} {malt.amount.unit}
                    </li>
                )}
            </ul>

            <h5 className={`${theme}-theme-text`}>
                Hops:
            </h5>
            <ul className={`${theme}-hops-ul ${theme}-theme-text`}>
                {thisRecipe[0].ingredients.hops.map(hop => 
                    <li key={hop.name}>
                        <b>{hop.name}</b> - {hop.amount.value} {hop.amount.unit} <br />
                        <b>Add time:</b> {hop.add} <br />
                        <b>Attribute:</b> {hop.attribute}
                    </li>
                )}
            </ul>

            <h5 className={`${theme}-theme-text`}>
                Yeast:
            </h5>
            <p className={`${theme}-theme-text`}>{thisRecipe[0].ingredients.yeast}</p>

            <h5 className={`${theme}-theme-text`}>
                Brewers' Tips:
            </h5>
            <p className={`${theme}-theme-text`}>{thisRecipe[0].brewers_tips}</p>

            <h5 className={`${theme}-theme-text`}>
                Target FG:
            </h5>
            <p className={`${theme}-theme-text`}>{thisRecipe[0].target_fg}</p>

            <h5 className={`${theme}-theme-text`}>
                Target OG:
            </h5>
            <p className={`${theme}-theme-text`}>{thisRecipe[0].target_og}</p>

            <h5 className={`${theme}-theme-text`}>
                EBC:
            </h5>
            <p className={`${theme}-theme-text`}>{thisRecipe[0].ebc}</p>

            <h5 className={`${theme}-theme-text`}>
                SRM:
            </h5>
            <p className={`${theme}-theme-text`}>{thisRecipe[0].srm}</p>

            <h5 className={`${theme}-theme-text`}>
                PH:
            </h5>
            <p className={`${theme}-theme-text`}>{thisRecipe[0].ph}</p>

            <h5 className={`${theme}-theme-text`}>
                Attenuation level:
            </h5>
            <p className={`${theme}-theme-text`}>{thisRecipe[0].attenuation_level}</p>

            <h5 className={`${theme}-theme-text`}>
                Recipe contributed by:
            </h5>
            <p className={`${theme}-theme-text`}>{thisRecipe[0].contributed_by}</p>

            <button 
                onClick={backToResults} 
                className={`${theme}-back-to-results-button`}
            >
                Back to results
            </button>
        </div>
        :
        <>
            <Navbar />
            <ErrorPage />
        </>
    
    )
}

export default SingleRecipe