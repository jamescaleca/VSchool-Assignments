const express = require('express')
const app = express()
const morgan = require('morgan')

// Middleware //
app.use(express.json())
app.use(morgan('dev'))

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