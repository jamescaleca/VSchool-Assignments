const express = require('express')
const inventory = express.Router()
const InventoryModel = require('../models/inventory.js')

// Get one
inventory.get('/', (req, res, next) => {
    InventoryModel.find((err, items) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(items)
    })
})

// Get by type
inventory.get('/search/type', (req, res, next) => {
    InventoryModel.find({ type: req.query.type }, (err, items) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(items)
    })
})

// Post one
inventory.post('/', (req, res, next) => {
    const newItem = new InventoryModel(req.body)
    newItem.save((err, savedItem) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedItem)
    })
})

// Delete one
inventory.delete('/:itemId', (req, res, next) => {
    InventoryModel.findOneAndDelete({ _id: req.params.itemId }, (err, deletedItem) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send (`Successfully deleted item ${deletedItem.name} from the database`)
    })
})

// Put one
inventory.put('/:itemId', (req, res, next) => {
    InventoryModel.findOneAndUpdate(
        { _id: req.params.itemId },
        req.body,
        { new: true },
        (err, updatedItem) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedItem)
        }
    )
})


module.exports = inventory