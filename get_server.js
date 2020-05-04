const request = require('request')

const http = require('http')

const api = {
    hostname: 'localhost',
    port: 300,
    path: '/boyz',
    method: 'GET',
}

const req = http.request(api, res =>{
    console.log('status Code: ' + res.statusCode)

    res.on('data', d =>{
        console.log(d)
    })
})

req.on('error', err =>{
    console.log('drat')
    console.error(err)
})
req.end