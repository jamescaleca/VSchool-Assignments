import React, { useContext } from 'react'
import { round } from 'mathjs'
import { DataContext } from '../contexts/dataProvider'

export default function StateResData() {
    const {stateResData, allStatesData, selectedState, diffStateSelectData} = useContext(DataContext)

    console.log(diffStateSelectData)
    return (
        <>
        {diffStateSelectData.length > 0 ?
            <ul style={{listStyle: 'none'}}>
                <li>
                    <h2>Data for {diffStateSelectData[0].name}:</h2>
                </li>
                <li>Population: <b>{diffStateSelectData[0].population}</b></li>
                <li>
                    Vaccinations completed: <b>{diffStateSelectData[0].vaxCompleted}</b>
                </li>
                <li>
                    Total cases: <b>{diffStateSelectData[0].cases}</b>
                </li>
                <li>
                    Percentage of population fully vaccinated: 
                    <b> {round(diffStateSelectData[0].vaxCompleted / diffStateSelectData[0].population * 100, 2)}%</b>
                </li>
            </ul> : null
        }
        </>
    )
}