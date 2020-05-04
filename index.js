const express = require('express')
const app = express()
const port = 8080

const serveIndex = require('serve-index')

// old test suite

app.get('/', (req, res) => {
    res.send('Hello Friend')
})

app.use('/boyz', (req, res) =>{
    res.json(['Jamie', 'David', 'Colin', 'Michael', 'Doody', 'Amanda', 'Brian', 'Brandon', 'Milo', 'Vance', 'Elijah']);
})

// middleware

app.use('/files', express.static('files'))
app.use('/files', serveIndex('files'))

app.listen(port, () => console.log('Example app listening on port: ' + port))