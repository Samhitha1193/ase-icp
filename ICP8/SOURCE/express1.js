var express = require('express')
var app = express()
var request = require('request');

app.listen(3000)

app.get('/myproject', function (req, res) {


    return request('https://api.edamam.com/api/nutrition-data?app_id=f270d1e0&app_key=e165614ec0234d9a126e0e3c3aed7b82&ingr="apple"', function (error, response, body) {
        //Check for error
        if(error){
            console.log('Error:', error);
            return res.send(error)
            
        }
        //Check for right status code
        if(response.statusCode !== 200){
            return console.log('Invalid Status Code Returned:', response.statusCode);
            return res.send(response.body)
        }
        console.log("the text response is:", JSON.parse(response.body));
        res.send(JSON.parse(response.body))
        
        
    });  
  
})