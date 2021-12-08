import React, { useEffect, useState, useContext } from 'react'
import { round } from 'mathjs'
import { UserContext } from './userProvider'
import axios from 'axios'

export const DataContext = React.createContext()

export default function DataProvider(props) {
    const [countryData, setCountryData] = useState({})
    const [countryView, setCountryView] = useState(false)
    const [allStatesData, setAllStatesData] = useState([])
    const [countyCoordsData, setCountyCoordsData] = useState([])
    const [stateCountiesCoords, setStateCountiesCoords] = useState([])
    const [stateCountiesData, setStateCountiesData] = useState([])
    const [stateResData, setStateResData] = useState([])
    const [countyResData, setCountyResData] = useState([])
    const [countyResCoords, setCountyResCoords] = useState([])
    const [countiesCombinedData, setCountiesCombinedData] = useState([])

    const { user: {stateRes, countyRes} } = useContext(UserContext)

    const getAllStatesData = () => {
        axios
            .get('/api')
            .then(res => setAllStatesData(res.data))
            .catch(err => console.log(err))
    }

    const getCountryData = () => {
        axios
            .get('https://api.covidactnow.org/v2/country/US.timeseries.json?apiKey=a303c351b45d45ae8e97a44c1bacd4f2')
            .then(res => {
                return setCountryData({
                    population: res.data.population,
                    cases: res.data.actuals.cases,
                    vaxCompleted: res.data.actuals.vaccinationsCompleted,
                    percentVaxxed: round(
                        res.data.actuals.vaccinationsCompleted /
                        res.data.population * 100, 2
                    )
                })
            })
            .catch(err => console.log(err))
    }

    const getStateResData = () => {
        axios
            .get('/api')
            .then(res => {
                res.data.filter(state => {
                    if(state.name === stateRes){
                        console.log(stateRes)
                        return setStateResData((prevState) => ({
                            ...prevState,
                            ...state
                        }))
                    }
                })
            })
            .catch(err => console.log(err))
    }

    const toggleCountryView = () => {
        return setCountryView(prevView => !prevView)
    }

    const getAllCountiesCovidData = () => {
        axios
            .get(`https://api.covidactnow.org/v2/county/${stateRes}.timeseries.json?apiKey=a303c351b45d45ae8e97a44c1bacd4f2`)
            .then(res => {
                res.data.map(county => {
                    return setCountiesCombinedData(prevState => ([
                        ...prevState,
                        {
                            county: county.county,
                            show: false,
                            vaxCompleted: county.actuals.vaccinationsCompleted,
                            population: county.population,
                            percentVaxxed: round(
                                county.actuals.vaccinationsCompleted / 
                                county.population * 100, 2
                            ),
                            coordinates: []
                        }
                    ]))
                })
            })
            .catch(err => console.log(err))
    }

    const getCountyResData = () => {
        axios
            .get(`https://api.covidactnow.org/v2/county/${stateRes}.timeseries.json?apiKey=a303c351b45d45ae8e97a44c1bacd4f2`)
            .then(res => {
                res.data.filter(county => {
                    if(county.county === countyRes.county){
                        return setCountyResData(prevCounty => ({
                            ...prevCounty,
                            ...county
                        }))
                    }
                })
            })
            .catch(err => console.log(err))
    }

    const combineCoordsAndCovidData = () => {
        axios
            .get(`https://public.opendatasoft.com/api/records/1.0/search/?dataset=us-county-boundaries&q=&rows=300&refine.stusab=${stateRes}`)
            .then(res => 
                setCountiesCombinedData(prevCounty => {
                    const map = {}
                    for(let i = 0; i < res.data.records.length; i++){
                        map[res.data.records[i].fields.namelsad] = res.data.records[i].geometry.coordinates
                    }
                    return prevCounty.map(county => {
                        return {
                            ...county,
                            coordinates: map[county.county]
                        }
                    })
                })
            )
            .catch(err => console.log(err))
    }

    const getAllStateCountiesCoords = () => {
        axios
            .get(`https://public.opendatasoft.com/api/records/1.0/search/?dataset=us-county-boundaries&q=&rows=300&refine.stusab=${stateRes}`)
            .then(res => {
                const countyCoords = res.data.records.map(county => {
                    return {
                        coordinates: county.geometry.coordinates, 
                        countyName: county.fields.namelsad
                    }
                })
                const countyResCoordsFilt = countyCoords.filter(county => {
                    if(county.countyName === countyRes.county){return county}
                })
                setStateCountiesCoords(countyCoords)
                setCountyResCoords(countyResCoordsFilt)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getAllStatesData()
        getStateResData()
        getAllCountiesCovidData()
        getCountyResData()
        getAllStateCountiesCoords()
        combineCoordsAndCovidData()
        getCountryData()
    }, [])

    // console.log(stateCountiesData)

    const onChildClickCallback = (countyName) => {
        setCountiesCombinedData(prevCounties => {
            countiesCombinedData.filter(county => {
                if(countyName === county.county){
                    return county.show = !county.show
                }
            })
            
        })
    }

    return (
        <DataContext.Provider value={{
            toggleCountryView,
            countryData,
            countryView,
            getStateResData,
            allStatesData,
            getAllStateCountiesCoords,
            setStateResData,
            countyCoordsData,
            stateCountiesCoords,
            stateCountiesData,
            stateResData,
            countyResData,
            countyResCoords,
            countiesCombinedData,
            onChildClickCallback,
            // combineCoordsAndCovidData
        }}>{props.children}
        </DataContext.Provider>
    )
}