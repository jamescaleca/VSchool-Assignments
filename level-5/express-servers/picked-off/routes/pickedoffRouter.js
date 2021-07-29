const express = require('express')
const pickedoffRouter = express.Router()

//pickedoffRouter.route('/oldPlant') 

let oldPlant = {
    name: 'cactus',
    type: 'spiny boi'
}

pickedoffRouter.route('/oldPlant')
    .put((req, res, next) => {
        ///const updatedPlant = Object.assign('/oldPlant', req.body)
        const updatedPlant = {...oldPlant, ...req.body}
        console.log(updatedPlant)
        res.send(updatedPlant)
        next()
    })



module.exports = pickedoffRouter