import React, { useContext } from 'react'
import { UserContext } from '../contexts/userProvider'
import { DataContext } from '../contexts/dataProvider'
import CountyMap from './CountyMap'
import CountyResData from './CountyResData'
import CountryData from './CountryData'
import StateResData from './StateResData'
import '../css/styles.css'

function Home() {
    const { user: { username, stateRes, countyRes } } = useContext(UserContext)
    const { countyResData, stateResData, countryView } = useContext(DataContext)

    return (
        <>
        { countryView === false ?
            <>{ stateResData.length !== 0 && countyResData.length !== 0 ?
                <div className='home'>
                    <div id='home-page-title'>
                        <h1>Welcome @<i>{username}</i></h1>
                    </div>
                    <ul id='main-content' style={{paddingLeft: '0'}}>
                        <li>
                            <CountyResData />
                            <StateResData />
                        </li>
                        <li>
                            <CountyMap />
                        </li>
                        <li>
                            <p>The more red a county appears on the map, the higher the percentage of that county's population is vaccinated.</p>
                            <p>The more green each county appears, the lower the percentage of the population is vaccinated.</p>
                            <p>Data courtesy of <a>covidactnow.org</a></p>
                        </li>
                    </ul>
                </div> : 
                <h1>Loading data...</h1>
            }</>
            :
            <div className='home'>
                <ul>
                    <li><CountryData /></li>
                    <li><CountyMap /></li>
                    <li>
                        <p>The more red a county appears on the map, the higher the percentage of that county's population is vaccinated.</p>
                        <p>The more green each county appears, the lower the percentage of the population is vaccinated.</p>
                        <p>Data courtesy of <a>covidactnow.org</a></p>
                    </li>
                </ul>
            </div>
        }
        </>
    )
}

export default Home