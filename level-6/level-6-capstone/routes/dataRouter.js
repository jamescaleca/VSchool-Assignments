const express = require('express')
const app = express()
const morgan = require('morgan')
const dataRouter = express.Router()
const State = require('../models/state')
const County = require('../models/county')
const mongoose = require('mongoose')
const db = mongoose.connection
const axios = require('axios')

app.use(express.json())
app.use(morgan('dev'))

// const countyUrl = `https://api.covidactnow.org/v2/county/:stateId.timeseries.json?apiKey=a303c351b45d45ae8e97a44c1bacd4f2`

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}

// Get data for entire country
dataRouter.get('/', (req, res, next) => {
    State.find((err, states) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(states)
    })
})

// Get State data by State ID
dataRouter.get('/:stateId', (req, res, next) => {
    State.findById((req.params.stateId), (err, state) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        console.log(state.actuals)
        return res.status(200).send(state)
    })
})


// Get all counties in state
dataRouter.get('/:stateId', (req, res, next) => {
    County.find((err, counties) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(counties)
    })
})

// Get County data by County ID
dataRouter.get('/:stateId/:countyId', (req, res, next) => {
    County.findById((req.params.countyId), (err, county) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        console.log(county.actuals)
        return res.status(200).send(county)
    })
})

module.exports = dataRouter