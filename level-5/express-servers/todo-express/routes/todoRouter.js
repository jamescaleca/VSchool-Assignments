const express = require('express')
const todoRouter = express.Router()
const { v4: uuidv4 } = require('uuid')

const todos = [
    {
        name: "Todo 1",
        description: "Description 1",
        imageUrl: "http://www.myimage....",
        completed: false,
        _id: uuidv4()
    },
    {
        name: "Todo 2",
        description: "Description 2",
        imageUrl: "http://www.myimage....",
        completed: false,
        _id: uuidv4()
    }
]

todoRouter.route('/')
    .get((req, res) => {
        res.send(todos)
    })
    .post((req, res) => {
        const newTodo = req.body
        newTodo._id = uuidv4()
        todos.push(newTodo)
        res.send(`Successfully added ${newTodo.name} to the list`)
    })

todoRouter.route('/:todoId')
    .get((req, res) => {
        const todoId = req.params.todoId
        const foundTodo = todos.find(todo => todo._id === todoId)
        res.send(foundTodo)
    })
    .delete((req, res) => {
        console.log('Delete request received')
        const todoId = req.params.todoId
        const todoIndex = todos.findIndex(todo => todo._id === todoId)
        todos.splice(todoIndex, 1)
        res.send('Successfully deleted todo item')
    })
    .put((req, res) => {
        const todoId = req.params.todoId
        const todoIndex = todos.findIndex(todo => todo._id === todoId)
        const updatedTodo = Object.assign(todos[todoIndex], req.body)
        res.send(updatedTodo)
    })

module.exports = todoRouter