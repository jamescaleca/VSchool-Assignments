const mongoose = require('mongoose')
const Schema = mongoose.Schema

const issueSchema = new Schema({
    title: {
        type: String,
        required: true,
        lowercase: true
    },
    description: {
        type: String,
        required: true
    },
    upvotes: {
        type: Number,
        default: 1
    },
    downvotes: {
        type: Number,
        default: 0
    },
    votesTotal: {
        type: Number,
        default: 0
    }
})

module.exports = mongoose.model("Issue", issueSchema)