const express = require('express')
const app = express()
require('dotenv').config()
const morgan = require('morgan')
const mongoose = require('mongoose')
const expressJwt = require('express-jwt')
const axios = require('axios')
const State = require('./models/state')
const db = mongoose.connection

app.use(express.json())
app.use(morgan('dev'))

const statesUrl = 'https://api.covidactnow.org/v2/states.timeseries.json?apiKey=a303c351b45d45ae8e97a44c1bacd4f2'

const countiesUrl = `https://api.covidactnow.org/v2/counties.timeseries.json?apiKey=a303c351b45d45ae8e97a44c1bacd4f2`

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}

const getStatesData = axios.get(statesUrl)
    .then((res) => {
        let statesArray = res
        let arrayLength = statesArray.data.length
        
        for(let i = 0; i <= arrayLength; i++) {
            let name = statesArray.data[i].state
            let population = statesArray.data[i].population
            let cases = statesArray.data[i].actuals.cases
            let vaxDist = statesArray.data[i].actuals.vaccinesDistributed
            let vaxCompleted = statesArray.data[i].actuals.vaccinationsCompleted

            // console.log(name + ' ' + cases + ' ' + vaxDist + ' ' + vaxCompleted)

            let upState = new State()
            upState.name = name
            upState.population = population
            upState.cases = cases
            upState.vaxDist = vaxDist
            upState.vaxCompleted = vaxCompleted

            upState.save()
        }
    })
    .catch(function (err) {
        console.log(err)
    })

db.dropCollection('states', (err, res) => {
    if (err) {
        console.log('Couldnt delete the states collection')
    } else {
        console.log('Collection states was deleted')
    }
})

// const getCountyData = axios.get(countiesUrl)
//     .then((res) => {
//         let countyArray = res
//         let arrayLength = countyArray.data.length

//         for(let i = 0; i <= arrayLength; i++) {
//             let state = countyArray.data[i].state
//             let county = countyArray.data[i].county
//             let population = countyArray.data[i].population
//             let cases = countyArray.data[i].actuals.cases
//             let vaxCompleted = countyArray.data[i].actuals.vaccinationsCompleted

//             console.log(state + ' ' + county + ' ' + cases + ' ' + population + ' ' + vaxCompleted)

//             let upCounty = new County()
//             upCounty.state = state
//             upCounty.county = county
//             upCounty.population = population
//             upCounty.cases = cases
//             upCounty.vaxCompleted = vaxCompleted

//             upCounty.save()
//         }
//     })
//     .catch((err) => console.log(err))

// db.dropCollection('counties', (err, res) => {
//     if(err) {
//         console.log('Couldnt delete the counties collection')
//     } else {
//         console.log('Collection counties was deleted')
//     }
// })

mongoose.connect('mongodb://localhost:27017/covid-vaxx-case-db', options, getStatesData)
// mongoose.connect('mongodb://localhost:27017/covid-vaxx-case-db', options, getCountyData)

app.use(
    '/auth',
    require('./routes/authRouter.js'),
    expressJwt({
        secret: process.env.SECRET,
        algorithms: ['HS256']
    })
)

app.use('/api', 
    require('./routes/dataRouter'),
    expressJwt({
        secret: process.env.SECRET,
        algorithms: ['HS256']
}))

app.use((err, req, res, next) => {
    console.log(err)
    if(err.name === 'UnauthorizedError'){
        res.status(err.status)
    }
    return res.send({errMsg: err.message})
})

app.listen(9000, () => {
    console.log('Server is running on local port 9000')
})