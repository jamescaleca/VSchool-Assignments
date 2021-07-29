const express = require('express')
const bountyRouter = express.Router()
const { v4: uuidv4 } = require('uuid')

const bounties = [
    { 
        firstName: 'Boz', 
        lastName: 'Scaggs', 
        living: true, 
        bountyAmount: '5000', 
        type: 'Sith',
         _id: uuidv4() 
    },
    { 
        firstName: 'Peter',
        lastName: 'Griffin',
        living: true,
        bountyAmount: '8000',
        type: 'Sith',
        _id: uuidv4()
    },
    { 
        firstName: 'John',
        lastName: 'Wick',
        living: true,
        bountyAmount: '200000',
        type: 'Jedi',
        _id: uuidv4()
    }
]

bountyRouter.route('/')
    .get((req, res) => {
        res.send(bounties)
    })
    .post((req, res) => {
        const newBounty = req.body
        newBounty._id = uuidv4()
        bounties.push(newBounty)
        res.send(`Successfully added ${newBounty.firstName} ${newBounty.lastName} to the database!`)
    })

bountyRouter.route('/:bountyId')
    .delete((req, res) => {
        console.log('Delete request received')
        const bountyId = req.params.bountyId
        const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
        bounties.splice(bountyIndex, 1)
        res.send('Successfully deleted bounty')
    })
    .put((req, res) => {
        const bountyId = req.params.bountyId
        const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
        const updatedBounty = Object.assign(bounties[bountyIndex], req.body)
        res.send(updatedBounty)
    })

module.exports = bountyRouter
