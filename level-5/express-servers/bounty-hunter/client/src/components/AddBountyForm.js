import React, { useState } from 'react'
import '../App.css'

function AddBountyForm(props) {
    const initInputs = 
        { 
            firstName: props.firstName || '', 
            lastName: props.lastName || '', 
            bountyAmount: props.bountyAmount || '', 
            type: props.type || 'Jedi'
        }
    const [inputs, setInputs] = useState(initInputs)

    function handleChange(e) {
        const { name, value } = e.target
        setInputs(prevInputs => ({...prevInputs, [name]: value}))
    }

    function handleSubmit(e) {
        e.preventDefault()
        props.submit(inputs, props._id)
        setInputs(initInputs)
    }

    return (
        <form onSubmit={handleSubmit} className='new-bounty-form'>
            <input 
                type='text'
                name='firstName'
                className='firstName'
                value={inputs.firstName}
                onChange={handleChange}
                placeholder='First Name'
                required={true}
            />
            <input 
                type='text'
                name='lastName'
                className='lastName'
                value={inputs.lastName}
                onChange={handleChange}
                placeholder='Last Name'
                required={true}
            />
            <input 
                type='number'
                name='bountyAmount'
                className='bountyAmount'
                value={inputs.bountyAmount}
                onChange={handleChange}
                placeholder='0'
                required={true}
            /><br />
            <label htmlFor='type'>Type:</label>
            <select 
                type='text'
                name='type'
                className='type'
                value={inputs.type}
                onChange={handleChange}
                placeholder='Type'
            >
                <option value='Jedi'>Jedi</option>
                <option value='Sith'>Sith</option>
                <option value='Other'>Other</option>
            </select><br />
            <button className='submit-btn'>{ props.btnText }</button>
        </form>
    )
}

export default AddBountyForm