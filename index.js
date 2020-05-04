const express = require('express')
const app = express()
const port = 3000



const serveIndex = require('serve-index')

// old test suite

app.get('/', (req, res) => {
    res.send('Hello Friend')
})

app.use('/boyz', (req, res) =>{
    res.json(['Jamie', 'David', 'Colin', 'Michael', 'Doody', 'Amanda', 'Brian', 'Brandon', 'Milo', 'Vance', 'Elijah']);
})

// middleware


// basic console.log middleware
app.use((req, res, next) => {
    console.log('Time: ', Date.now());
    next(); // tells middleware to go to the next function
})

// passing a path to middleware
app.use('/boy',(req, res, next) => {
    console.log("Request type:" + req.method)
    next();
})

app.use('/files', express.static('files'))
app.use('/files', serveIndex('files'))

app.listen(port, () => console.log('Example app listening on port: ' + port))