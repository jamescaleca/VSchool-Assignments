import React, { useContext } from 'react'
import { round } from 'mathjs'
import { UserContext } from '../contexts/userProvider'
import { DataContext } from '../contexts/dataProvider'

export default function CountyResData() {
    const { countyResData } = useContext(DataContext)
    const { user: { countyRes } } = useContext(UserContext)

    return (
        <>
            <ul style={{listStyle: 'none'}}>
                <li><h2>Data for {countyRes.county}:</h2></li>
                <li>Population: <b>{countyResData.population}</b></li>
                <li>
                    Vaccinations completed: <b>{countyResData.actuals.vaccinationsCompleted}</b>
                </li>
                <li>
                    Total cases: <b>{countyResData.actuals.cases}</b>
                </li>
                <li>
                    Percentage of population fully vaccinated: 
                    <b> {round(countyResData.actuals.vaccinationsCompleted / countyResData.population * 100, 2)}%</b>
                </li>
            </ul>
        </>
    )
}