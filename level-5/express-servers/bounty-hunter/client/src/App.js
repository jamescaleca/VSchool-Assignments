import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Bounty from './components/Bounty'
import AddBountyForm from './components/AddBountyForm'
import './App.css'

function App() {
    const [bounties, setBounties] = useState([])

    function getBounties() {
        axios.get('/bounties')
            .then(res => setBounties(res.data))
            .catch(err => console.log(err.response.data.errMsg))
    }

    function handleFilter(e) {
        if(e.target.value === 'reset'){
            getBounties()
        } else {
        axios.get(`/bounties/search/type?type=${e.target.value}`)
            .then(res => setBounties(res.data))
            .catch(err => console.log(err))
        }
    }

    function addBounty(newBounty) {
        axios.post('/bounties', newBounty)
            .then(res => {
                setBounties(prevBounties => [...prevBounties, res.data])
            })
            .catch(err => console.log(err))
    }

    function deleteBounty(bountyId) {
        axios.delete(`/bounties/${bountyId}`)
            .then(res => {
                setBounties(prevBounties => prevBounties.filter(bounty => bounty._id !== bountyId))
            })
            .catch(err => console.log(err))
    }

    function editBounty(updates, bountyId) {
        axios.put(`/bounties/${bountyId}`, updates)
            .then(res => {
                setBounties(prevBounties => prevBounties.map(bounty => bounty._id !== bountyId ? bounty : res.data))
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getBounties()
    }, [])

    return (
        <>
            <h1 className='title'>Bounty Hunter Database</h1>
            <h2 className='subtitle'>Your one stop shop for all your bounty hunting needs</h2>

            {/* Add bounty form */}
            <div className='row'>
                <div className='column'>
                    <AddBountyForm 
                        submit={addBounty}
                        btnText='Add Bounty'
                    />
                </div>

                <div className='column'>
                    {/* Bounties list */}
                    <div className='existing-bounties'>
                        {/* Filter form  */}
                        <h3>Filter by Type</h3>
                        <select onChange={handleFilter} className='filter-form'>
                            <option>- Select a Type -</option>
                            <option value='Jedi'>Jedi</option>
                            <option value='Sith'>Sith</option>
                            <option value='Other'>Other</option>
                        </select>
                        { bounties.map(bounty => 
                            <Bounty 
                                {...bounty} 
                                key={`${bounty.firstName}${bounty.lastName}`}
                                deleteBounty={deleteBounty}
                                editBounty={editBounty}
                            />) 
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default App