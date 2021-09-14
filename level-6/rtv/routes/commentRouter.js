const express = require('express')
const commentRouter = express.Router()
const Comment = require('../models/comment.js')

// Get All Comments
commentRouter.get('/', (req, res, next) => {
  Comment.find((err, comments) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(200).send(comments)
  })
})

// Add new Comment
commentRouter.post('/', (req, res, next) => {
  req.body.user = req.user._id
  const newComment = new Comment(req.body)
  newComment.save((err, savedComment) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(201).send(savedComment)
  })
})

//Delete Comment
commentRouter.delete('/:commentId', (req, res, next) => {
  Comment.findByIdAndDelete(
    { _id: req.params.commentId, user: req.user._id },
    (err, deletedComment) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(200).send(`Successfully deleted comment ${deletedComment}`)
    }
  )
})

// Update Comment
commentRouter.put('/:commentId', (req, res, next) => {
  Comment.findByIdAndUpdate(
    { _id: req.params.commentId, user: req.user._id },
    req.body,
    { new: true },
    (err, updatedComment) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(201).send(updatedComment)
    }
  )
})

module.exports = commentRouter