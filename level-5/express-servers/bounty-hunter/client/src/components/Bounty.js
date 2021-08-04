import React, { useState } from 'react'
import AddBountyForm from './AddBountyForm'
import '../App.css'

function Bounty(props) {
    console.log(props)
    const [editToggle, setEditToggle] = useState(false)
    const { firstName, lastName, bountyAmount, type, _id} = props

    return (
        <>
            { !editToggle ?
                <div className='bounty'>
                    <h1>{ firstName } { lastName }</h1>
                    <h2>${ bountyAmount }</h2>
                    <h2>{ type }</h2>
                    <button
                        className='delete-btn'
                        onClick={() => props.deleteBounty(_id)}
                    >Delete
                    </button>
                    <button
                        className='edit-btn'
                        onClick={() => setEditToggle(prevToggle => !prevToggle)}
                    >Edit
                    </button>
                </div>
            :
                <>
                    <AddBountyForm 
                        firstName={firstName}
                        lastName={lastName}
                        type={type}
                        bountyAmount={bountyAmount}
                        _id={_id}
                        btnText='Submit Edit'
                        submit={props.editBounty}
                    />
                    <button
                        onClick={() => setEditToggle(prevToggle => !prevToggle)}
                    >Close
                    </button>
                </>
            }
        </>
    )
}

export default Bounty