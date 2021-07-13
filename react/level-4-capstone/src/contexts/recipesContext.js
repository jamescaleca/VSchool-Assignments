import React, { useEffect, useState, createContext } from "react"
import axios from "axios"

const RecipesContext = createContext()

function RecipesContextProvider(props) {
    const [recipesData, setRecipesData] = useState([])

    const getAllRecipes = () => {
        axios
            .get("https://api.punkapi.com/v2/beers")
            .then(response => {
                const allRecipes = response.data
                setRecipesData(allRecipes)
            })
            .catch(error => console.log(error))
    }

    useEffect(() => {
        getAllRecipes() 
    }, [])

    return (
        <RecipesContext.Provider value={{recipesData}}>
            {props.children}
        </RecipesContext.Provider>
    )
}

export {RecipesContextProvider, RecipesContext}