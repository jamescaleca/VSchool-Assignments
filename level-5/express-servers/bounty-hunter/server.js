// Remember to start the dang mongodb!
// command is:
// brew services start mongodb-community@5.0

const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')

// Middleware //
app.use(express.json())
app.use(morgan('dev'))

// Connect to DataBase
mongoose.connect('mongodb://localhost:27017/bountiesdb',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    },
    () => console.log('Connected to the DB')
)

// Routes //
app.use('/bounties', require('./routes/bountyRouter.js'))

// Error handler //
app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

// Server listen //
app.listen(8000, () => {
    console.log('The server is running on Port 8000')
})