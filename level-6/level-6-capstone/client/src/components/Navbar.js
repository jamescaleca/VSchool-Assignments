import React, { useContext } from 'react'
import { UserContext } from '../contexts/userProvider'
import { DataContext } from '../contexts/dataProvider'
import '../css/styles.css'

export default function Navbar(props) {
    const { toggleCountryView } = useContext(DataContext)
    const { user: { username, countyRes, stateRes} } = useContext(UserContext)
    const { logout } = props

    return (
        <div id='navbar'>
            <button onClick={logout}>Logout</button>
            <button onClick={() => toggleCountryView()}>View the country</button>
            <p>@<i>{username}</i> - {countyRes.county}, {stateRes}</p>
        </div>
    )
}