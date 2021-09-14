const mongoose = require('mongoose')
const Schema = mongoose.Schema

const commentSchema = new Schema({
  comment: {
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
  }
})

module.exports = mongoose.model('Comment', commentSchema)