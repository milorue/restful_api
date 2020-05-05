const request = require('request')

request('https://mrue-api.herokuapp.com/boyz', {json: true}, (req, res, body) => {
    console.log(body)
})