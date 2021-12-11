import React, { useContext } from 'react'
import { round } from 'mathjs'
import { DataContext } from '../contexts/dataProvider'

export default function StateResData() {
    const {stateResData} = useContext(DataContext)
    return (
        <>
            <ul id='state-res-data-ul'>
                <li>
                    <h1>Data for {stateResData.name}:</h1>
                </li>
                <li>Population: <b>{stateResData.population}</b></li>
                <li>
                    Vaccinations completed: <b>{stateResData.vaxCompleted}</b>
                </li>
                <li>
                    Total cases: <b>{stateResData.cases}</b>
                </li>
                <li>
                    Percentage of population fully vaccinated: 
                    <b> {round(stateResData.vaxCompleted / stateResData.population * 100, 2)}%</b>
                </li>
            </ul>
        </>
    )
}