import React, { useContext, useEffect } from 'react'
import { UserContext } from '../contexts/userProvider'
import { DataContext } from '../contexts/dataProvider'
import '../css/styles.css'

function Home() {
    const { user: { username, stateRes }, token } = useContext(UserContext)
    const { statesDataRender, getStateResCountiesData, countyDataRender } = useContext(DataContext)

    useEffect(() => {
        getStateResCountiesData(stateRes)
    }, [])

    return (
        <div className='home'>
            <div id='home-page-title'>
                <h1>Welcome @{username} from {stateRes}</h1>
            </div>

            <ol>
                {countyDataRender}
            </ol>
        </div>
    )
}

export default Home