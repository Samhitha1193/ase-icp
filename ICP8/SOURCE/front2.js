var request = require('request');
request('https://api.edamam.com/api/nutrition-data?app_id=f270d1e0&app_key=e165614ec0234d9a126e0e3c3aed7b82&ingr="apple"', function (error, response, body) {
    //Check for error
    if(error){
        return console.log('Error:', error);
    }

    //Check for right status code
    if(response.statusCode !== 200){
        return console.log('Invalid Status Code Returned:', response.statusCode);
    }
    console.log("the text response is:", JSON.parse(response.body));
	
});