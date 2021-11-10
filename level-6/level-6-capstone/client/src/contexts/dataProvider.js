import React, { useEffect, useState, useContext } from 'react'
import { round } from 'mathjs'
import {UserContext} from './userProvider'
import axios from 'axios'

export const DataContext = React.createContext()

export default function DataProvider(props) {
    const [countryData, setCountryData] = useState([])
    const [allStatesData, setAllStatesData] = useState([])
    const [countyCoordsData, setCountyCoordsData] = useState([])
    const [countyData, setCountyData] = useState([])
    const [vaccineData, setVaccineData] = useState([])

    const {userAxios, stateRes} = useContext(UserContext)

    let countyNames = []

    let countyCoordsArr = []

    const allStatesAbbrevArr = [ 
        {state: 'AK', lat: 64.2008, lng: -149.4937},
        {state: 'AL', lat: 32.3182, lng: -86.9023},
        {state: 'AR', lat: 35.2010, lng: -91.8318},
        {state: 'AZ', lat: 34.0489, lng: -111.0937}, 
        {state: 'CA', lat: 36.7783, lng: -119.4179},
        {state: 'CO', lat: 39.5501, lng: -105.7821},
        {state: 'CT', lat: 41.6032, lng: -73.0877},
        {state: 'DC', lat: 38.9072, lng: -77.0369}, 
        {state: 'DE', lat: 38.9108, lng: -75.5277},
        {state: 'FL', lat: 27.6648, lng: -81.5158},
        {state: 'GA', lat: 32.1656, lng: -82.9001}, 
        {state: 'HI', lat: 19.8968, lng: -155.5828},
        {state: 'IA', lat: 41.8780, lng: -93.0977},
        {state: 'ID', lat: 44.0682, lng: -114.7420},
        {state: 'IL', lat: 40.6331, lng: -89.3985},
        {state: 'IN', lat: 40.2672, lng: -86.1349},
        {state: 'KS', lat: 39.0119, lng: -98.4842},
        {state: 'KY', lat: 37.8393, lng: -84.2700},
        {state: 'LA', lat: 30.9843, lng: -91.9623},
        {state: 'MA', lat: 46.7296, lng: -94.6859},
        {state: 'MD', lat: 39.0458, lng: -76.6413},
        {state: 'ME', lat: 45.2538, lng: -69.4455},
        {state: 'MI', lat: 44.3148, lng: -85.6024},
        {state: 'MN', lat: 46.7296, lng: -94.6859},
        {state: 'MO', lat: 46.8797, lng: -110.3626},
        {state: 'MP', lat: 15.0979, lng: 145.6739},
        {state: 'MS', lat: 32.3547, lng: -89.3985},
        {state: 'MT', lat: 46.8797, lng: -110.3626},
        {state: 'NC', lat: 35.7596, lng: -79.0193},
        {state: 'ND', lat: 47.5515, lng: -101.0020},
        {state: 'NE', lat: 43.9654, lng: -70.8227},
        {state: 'NH', lat: 43.1939, lng: -71.5724},
        {state: 'NJ', lat: 40.0583, lng: -74.4057},
        {state: 'NM', lat: 34.5199, lng: -105.8701},
        {state: 'NV', lat: 38.8026, lng: -116.4194},
        {state: 'NY', lat: 40.7128, lng: -74.0060},
        {state: 'OH', lat: 40.4173, lng: -82.9071},
        {state: 'OK', lat: 35.0078, lng: -97.0929},
        {state: 'OR', lat: 43.8041, lng: -120.5542},
        {state: 'PA', lat: 41.2033, lng: -77.1945},
        {state: 'PR', lat: 18.2208, lng: -66.5901}, 
        {state: 'RI', lat: 41.5801, lng: -71.4774},
        {state: 'SC', lat: 33.8361, lng: -81.1637},
        {state: 'SD', lat: 43.9695, lng: -99.9018},
        {state: 'TN', lat: 35.5175, lng: -86.5804},
        {state: 'TX', lat: 31.9686, lng: -99.9018},
        {state: 'UT', lat: 39.3210, lng: -111.0937},
        {state: 'VA', lat: 37.4316, lng: -78.6569},
        {state: 'VT', lat: 44.5588, lng: -72.5778},
        {state: 'WA', lat: 47.7511, lng: -120.7401},
        {state: 'WI', lat: 43.7844, lng: -88.7879},
        {state: 'WV', lat: 38.5976, lng: -80.4549}, 
        {state: 'WY', lat: 43.0760, lng: -107.2903} ]

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
                
                setCountyData(countyData)
            })
            .catch(err => console.log(err))
    }

    const getCountyCoords = (stateAbbr, countyName) => {
        axios
            .get(`https://public.opendatasoft.com/api/records/1.0/search/?dataset=us-county-boundaries&q=&rows=1&refine.stusab=${stateAbbr}&refine.namelsad=${countyName}`)
            .then(res => {
                const countyCoords = res.data.records[0].geometry.coordinates
                countyCoordsArr = countyCoords.map(coord => coord)
                // setCountyCoordsData(countyCoords)
                setCountyCoordsData(countyCoordsArr)
                
            })
            .catch(err => console.log(err))
    }

    const getCountyNames = (stateSelection) => {
        axios
            .get(`https://api.covidactnow.org/v2/county/${stateSelection}.timeseries.json?apiKey=a303c351b45d45ae8e97a44c1bacd4f2`)
            .then(res => {
                console.log(res.data)
            })
    }

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
            <br/>
            <p>County: {county.county}</p>
            <p>State: {county.state}</p>
            <p>Population: {county.population}</p>
            <p>Cases: {county.actuals.cases}</p>
            <p>Vaccines Completed: {county.actuals.vaccinationsCompleted}</p>
            <p>
                Percent of population fully vaccinated:  {round(county.actuals.vaccinationsCompleted / county.population * 100, 2)}%
            </p>
            <br/>
            <hr/>
        </li>
    ))

    return (
        <DataContext.Provider value={{
            allStatesAbbrevArr,
            statesDataRender,
            getAllStatesData,
            getStateResCountiesData,
            getCountyNames,
            getCountyCoords,
            countyCoordsData,
            countyData,
            countyDataRender,
            countyNames
        }}>{props.children}
        </DataContext.Provider>
    )
}