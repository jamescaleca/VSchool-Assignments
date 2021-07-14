import React, { useEffect, useState, createContext } from "react"
import { Link } from "react-router-dom"
import ErrorPage from "../ErrorPage"
import axios from "axios"

const RecipesContext = createContext()

function RecipesContextProvider(props) {
    const [recipesData, setRecipesData] = useState([])
    const [search, setSearch] = useState('')
    const [searchData, setSearchData] = useState([])

    // Getting all recipes from the API

    const getAllRecipes = () => {
        axios
            .get("https://api.punkapi.com/v2/beers")
            .then(response => {
                const allRecipes = response.data
                setRecipesData(allRecipes)
            })
            .catch(error => <ErrorPage />)
    }

    useEffect(() => {
        getAllRecipes() 
    }, [])

    const allRecipes = recipesData.map(recipe => (
        <li key={recipe.id}>
            <h1>{recipe.id}</h1>
            <img style={{height: "100px", width: "100px"}} alt={recipe.name} src={recipe.image_url}></img>
            <Link to={`/recipes/${recipe.id}`}>{recipe.name}</Link>
            <p>{recipe.tagline}</p>
        </li>
    ))

    // Search results

    const filterRecipes = (e) => {
        axios
            .get(`https://api.punkapi.com/v2/beers?food=${search}`)
            .then(response => {
                const searchData = response.data
                setSearchData(searchData)
            })
    }

    const searchResults = searchData.length > 0 ?

    searchData.map(recipe => (
        <li key={recipe.id}>
            <h1>{recipe.id}</h1>
            <img style={{height: "100px", width: "100px"}} alt={recipe.name} src={recipe.image_url}></img>
            <Link to={`/recipes/${recipe.id}`}>{recipe.name}</Link>
            <p>{recipe.tagline}</p>
        </li>
    ))
    :
    <>
        <h3>Sorry, looks like we have nothing matching that food pairing</h3>
    </>

    return (
        <RecipesContext.Provider value={{
            allRecipes, 
            searchResults, 
            filterRecipes, 
            search, 
            setSearch, 
            searchData, 
            setSearchData
        }}>
            {props.children}
        </RecipesContext.Provider>
    )
}

export {RecipesContextProvider, RecipesContext}