import React from 'react'
import '../css/styles.css'

export default function Navbar(props) {
    const { logout } = props

    return (
        <div className='navbar'>
            <button onClick={logout}>Logout</button>
        </div>
    )
}