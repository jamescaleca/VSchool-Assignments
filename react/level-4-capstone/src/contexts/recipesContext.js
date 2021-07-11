import React, { useEffect, useState, createContext } from "react"
import axios from "axios"

const RecipesContext = createContext()

function RecipesContextProvider(props) {
    const [recipesData, setRecipesData] = useState([])
    const [singleRecipe, setSingleRecipe] = useState("")

    const getAllRecipes = () => {
        axios
            .get("https://api.punkapi.com/v2/beers")
            .then(response => {
                const allRecipes = response.data
                setRecipesData(allRecipes)
            })
            .catch(error => console.log(error))
    }

    const getOneRecipe = (id) => {
        axios
            .get(`https://api.punkapi.com/v2/beers/${id}`)
            .then(response => {
                const singleRecipe = response.data
                setSingleRecipe(singleRecipe)
            })
            .catch(error => console.log("oops!"))
    }

    useEffect(() => {
        getAllRecipes()
    }, [])

    return (
        <RecipesContext.Provider value={{recipesData, singleRecipe, getOneRecipe}}>
            {props.children}
        </RecipesContext.Provider>
    )
}

export {RecipesContextProvider, RecipesContext}