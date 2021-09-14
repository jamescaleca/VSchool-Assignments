const express = require('express')
const book = require('../models/book.js')
const bookRouter = express.Router()
const Book = require('../models/book.js')

bookRouter.get('/', (req, res, next) => {
    Book.find((err, books) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(books)
    })
})

bookRouter.get('/:authorId', (req, res, next) => {
    Book.find({ author: req.params.authorId }, (err, books) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(books)
    })
})

bookRouter.post('/:authorId', (req, res, next) => {
    req.body.author = req.params.authorId
    const newBook = new book(req.body)
    newBook.save((err, savedBook) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedBook)
    })
})

// like a book
bookRouter.put('/like/:bookId', (req, res, next) => {
    Book.findOneAndUpdate(
        { _id: req.params.bookId },
        { $inc: { likes: 1 } },
        { new: true },
        (err, updatedBook) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedBook)
        }
    )
})

// Find books by like range
bookRouter.get('/search/bylikes', (req, res, next) => {
    Book.where('likes').gte(5).exec((err, book) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(books)
    })
})

module.exports = bookRouter