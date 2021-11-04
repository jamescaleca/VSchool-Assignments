const mongoose = require('mongoose')
const Schema = mongoose.Schema

const countySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    state: {
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
    }
})

module.exports = mongoose.model('County', countySchema)