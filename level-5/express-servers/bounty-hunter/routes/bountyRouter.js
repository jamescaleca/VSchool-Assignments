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

module.exports = bountyRouter
