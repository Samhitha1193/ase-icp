var request = require('request');
request('http://numbersapi.com/03/07/date?json', function (error, response, body) {
    //Check for error
    if(error){
        return console.log('Error:', error);
    }

    //Check for right status code
    if(response.statusCode !== 200){
        return console.log('Invalid Status Code Returned:', response.statusCode);
    }
    console.log("the text response is:", JSON.parse(response.body).text);
	
});