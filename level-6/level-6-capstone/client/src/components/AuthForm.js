import React, { useContext, useState } from 'react'
import { UserContext } from '../contexts/userProvider'
import { DataContext } from '../contexts/dataProvider'
import axios from 'axios'

export default function AuthForm(props) {
    const { btnText, handleSubmit } = props

    const { 
        inputs: {
            username,
            password,
            stateRes,
            countyRes
        },
        setInputs,
        toggle,
        allStatesAbbrevArr, 
        statePlaceholder, 
        selectedState,
        handleChange
    } = useContext(DataContext)

    const { errMsg } = useContext(UserContext)

    const [stateCounties, setStateCounties] = useState([])
    const [countyPlaceholder, setCountyPlaceholder] = useState('default')
    const [selectedCounty, setSelectedCounty] = useState()


    function handleStateChange(e) {
        const { name, value } = e.target
        axios
            .get(`https://api.covidactnow.org/v2/county/${value}.timeseries.json?apiKey=a303c351b45d45ae8e97a44c1bacd4f2`)
            .then(res => {
                setStateCounties(res.data)
                console.log(res.data)
                setInputs(prevInputs => ({
                    ...prevInputs,
                    [name]: value
                }))
            })
            .catch((err) => {if(err) console.log(err)})
    }

    function handleCountyChange(e) {
        const {value} = e.target
        let selectedCounty = countiesFips.filter(county => {
            if(county.county === value){
                return county
            }
        })
        console.log(selectedCounty)
        setInputs(prevInputs => ({
            ...prevInputs,
            countyRes: {county: value, fips: selectedCounty[0].fips}
        }))
    }

    let allStatesAbbrevDropDown = allStatesAbbrevArr.map(state => (
        <option key={state.state} value={`${state.state}`}>{state.state}</option>
    ))

    let countiesFips = stateCounties.map(county => ({county: county.county, fips: county.fips}))

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
                type='password'
                value={password}
                name='password'
                onChange={handleChange}
                placeholder='Password'
            /><br/>
            { !toggle ? 
                <div id='select-st-cty'>
                    <label for='stateRes'>Select state of residence:</label>
                    <select 
                        defaultValue={statePlaceholder}
                        name='stateRes'
                        id='stateRes'
                        value={selectedState.value}
                        onChange={handleStateChange}
                    ><option value='default' hidden disabled>State</option>{allStatesAbbrevDropDown}
                    </select> 
                    
                    <label for='countyRes'>Select county of residence:</label>
                    <select
                        defaultValue={countyPlaceholder}
                        value={countyRes.county}
                        name='countyRes'
                        // id={countyRes.fips}
                        onChange={handleCountyChange}
                    ><option value='default' hidden>County</option>
                        {stateCounties.map(county => (
                            <option value={`${county.county}`}>{county.county}</option>
                        ))}
                    </select>
                    
                </div> : null
            }
            <button>{ btnText }</button>
            <p style={{color: 'red'}}>{ errMsg }</p>
        </form>
    )
}