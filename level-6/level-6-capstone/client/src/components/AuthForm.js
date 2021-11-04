import React, { useContext } from 'react'
import {DataContext} from '../contexts/dataProvider'

export default function AuthForm(props) {
    const {
        handleChange,
        handleSubmit,
        btnText,
        errMsg,
        toggle,
        inputs: {
            username,
            password,
            state
        }
    } = props

    const { allStatesAbbrevDropDown, countyNames } = useContext(DataContext)
    console.log(countyNames)

    const countiesDropDown = countyNames.map(county => (
        <option key={county} value={`${county}`}>{county}</option>
    ))

    return (
        <form id='auth-form' onSubmit={handleSubmit}>
            <input 
                type='text'
                value={username}
                name='username'
                onChange={handleChange}
                placeholder='Username'
            />
            <input 
                type='text'
                value={password}
                name='password'
                onChange={handleChange}
                placeholder='Password'
            />
            { !toggle ? 
                <>
                    <label for='stateRes'>Select state of residence:</label>
                    <select 
                        name='stateRes'
                        id='stateRes'
                        onChange={handleChange}
                    >{allStatesAbbrevDropDown}
                    </select>
                    
                    <label for='countyRes'>Select county of residence:</label>
                    <select>
                        {countiesDropDown}
                    </select>
                </>
                : null
            }
            
            <button>{ btnText }</button>
            <p style={{color: 'red'}}>{ errMsg }</p>
        </form>
    )
}