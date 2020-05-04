const request = require('request')

request('localhost:3000', {json: true}, (err, res, body) =>{
    if(err){
        console.log('Shit broke')
        console.log(err)
    }
    else{
        console.log(body)
    }
})