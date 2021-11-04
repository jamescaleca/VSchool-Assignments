import React, { useEffect, useState, useContext } from 'react'
import { round } from 'mathjs'
import {UserContext} from './userProvider'
import axios from 'axios'

export const DataContext = React.createContext()

export default function DataProvider(props) {
    const [countryData, setCountryData] = useState([])
    const [allStatesData, setAllStatesData] = useState([])
    const [countyData, setCountyData] = useState([])
    const [vaccineData, setVaccineData] = useState([])

    const {userAxios, stateRes} = useContext(UserContext)

    const allStatesAbbrevArr = [ "AK","AL","AR","AZ","CA","CO","CT","DC","DE","FL","GA","HI","IA","ID","IL","IN","KS","KY","LA","MA","MD","ME","MI","MN","MO","MP","MS","MT","NC","ND","NE","NH","NJ","NM","NV","NY","OH","OK","OR","PA","PR","RI","SC","SD","TN","TX","UT","VA","VT","WA","WI","WV","WY" ]

    let countyNames = []

    const allStatesAbbrevDropDown = allStatesAbbrevArr.map(state => (
        <option key={state} value={`${state}`}>{state}</option>
    ))

    const getAllStatesData = () => {
        userAxios
            .get('/api')
            .then(res => {
                const statesData = res.data
                setAllStatesData(statesData)
            })
            .catch(err => console.log(err))
    }

    const getStateResCountiesData = (stateRes) => {
        userAxios
            .get(`https://api.covidactnow.org/v2/county/${stateRes}.timeseries.json?apiKey=a303c351b45d45ae8e97a44c1bacd4f2`)
            .then(res => {
                const countyData = res.data
                countyNames = countyData.map(county => county.county)
                console.log(countyNames)
                setCountyData(countyData)
            })
            .catch(err => console.log(err))
    }

    const getCountryData = () => {
        axios
            .get('https://api.covidactnow.org/v2/country/US.timeseries.json?apiKey=a303c351b45d45ae8e97a44c1bacd4f2')
            .then(res => {
                const countryData = res.data
                setCountryData(countryData)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getAllStatesData()
    }, [])

    const statesDataRender = allStatesData.map(state => (
        <li key={state.state}>
            <p>State: {state.name}</p>
            <p>Population: {state.population}</p>
            <p>Cases: {state.cases}</p>
            <p>Vaccines Distributed: {state.vaxDist}</p>
            <p>Vaccines Completed: {state.vaxCompleted}</p>
        </li>
    ))

    const countyDataRender = countyData.map(county => (
        <li key={county.county}>
            <p>County: {county.county}</p>
            <p>State: {county.state}</p>
            <p>Population: {county.population}</p>
            <p>Cases: {county.actuals.cases}</p>
            <p>Vaccines Completed: {county.actuals.vaccinationsCompleted}</p>
            <p>
                Percent of population fully vaccinated:  {round(county.actuals.vaccinationsCompleted / county.population * 100, 2)}%
            </p>
        </li>
    ))

    return (
        <DataContext.Provider value={{
            statesDataRender,
            getAllStatesData,
            getStateResCountiesData,
            getCountryData,
            countyDataRender,
            allStatesAbbrevDropDown,
            countyNames
        }}>{props.children}
        </DataContext.Provider>
    )
}