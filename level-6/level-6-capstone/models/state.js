const mongoose = require('mongoose')
const Schema = mongoose.Schema

const stateSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    population: {
        type: Number
    },
    cases: {
        type: Number
    },
    vaxDist: {
        type: Number
    },
    vaxCompleted: {
        type: Number
    },
    coordinates: Array
})

module.exports = mongoose.model('State', stateSchema)