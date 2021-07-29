const express = require('express')
const app = express()

app.use('/', express.json())

let oldPlant = {
    name: 'cactus',
    type: 'spiny boi'
}

app.get('/oldPlant', (req, res) => {
    res.send(oldPlant)
})

app.use(require('./routes/pickedoffRouter.js'))




app.listen(8000, () => {
    console.log('The server is running on Port 8000')
})