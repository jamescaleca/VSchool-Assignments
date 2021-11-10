import React, { useContext, useEffect } from 'react'
import { UserContext } from '../contexts/userProvider'
import { DataContext } from '../contexts/dataProvider'
import CountyMap from './CountyMap'
import '../css/styles.css'

function Home() {
    const { user: { username, stateRes, countyRes } } = useContext(UserContext)
    const { 
        getStateResCountiesData, 
        countyDataRender, 
        countyData, 
        allStatesAbbrevArr,
        getCountyCoords,
        countyCoordsData
    } = useContext(DataContext)

    const countyUrlRes = countyRes.county.replace(' ', '+')

    

    useEffect(() => {
        getCountyCoords(stateRes, countyUrlRes)
        getStateResCountiesData(stateRes)
    }, [])

    const countyResData = countyData.filter(county => {
        if(county.county === countyRes.county){return county}
    })

    const stateResCoord = allStatesAbbrevArr.filter(state => {
        if(state.state === stateRes){return state}
    })

    console.log(countyCoordsData)

    return (
        <div className='home'>
            <div id='home-page-title'>
                <h1>Welcome @<i>{username}</i> from {countyRes.county}, {stateRes}</h1>
            </div>
            <h2>Data from your county:</h2>
            { countyResData.length > 0 ? 
            <>
                <ul style={{listStyle: 'none'}}>
                    <li>{countyResData[0].county}, {countyResData[0].state}</li>
                    <li>
                        Vaccinations Completed: <b>{countyResData[0].actuals.vaccinationsCompleted}</b>
                    </li>
                    <li>
                        Total Cases: <b>{countyResData[0].actuals.cases}</b>
                    </li>
                </ul>
                <p>Data current as of: <b>{countyResData[0].lastUpdatedDate}</b></p>
                <CountyMap 
                    stateResCoord={stateResCoord}
                    countyCoordsData={countyCoordsData}
                    countyRes={countyRes.county}
                />
            </> : null
            }
            
        </div>
    )
}

export default Home