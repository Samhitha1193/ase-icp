
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var bodyParser = require("body-parser");
var express = require('express');
var cors = require('cors');
var app = express();

var url = 'mongodb://samhitha:samhitha@ds115569.mlab.com:15569/samhitha';
//var url = 'mongodb://marmik:2621@ds051923.mlab.com:51923/demo';
//app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.listen(8081)

var id = 1;
app.get('/register', function (req, res) {
    MongoClient.connect(url, function(err, db) {
        debugger;

        var dbo = db.db("samhitha");
        if(err)
        {
            res.write("Failed, Error while connecting to Database");
            res.end();
        }
        var data = {
            userId:id++,
            firstName:"Samhitha",
            lastName:"Tummanapalli",
            mobileNum:9404476072,
            city:"Kansas City"
        };

        insertDocument(dbo, data, function() {
            res.write("Successfully inserted");
            res.end();
        });
    });
})

app.get('/search', function (req, res) {
    MongoClient.connect(url, function(err, db) {
        var dbo = db.db("samhitha");
        if(err)
        {
            res.write("Failed, Error while connecting to Database");
            res.end();
        }
        dbo.collection("users").findOne({mobileNum:9404476072}, function(err, result) {
            if (err) throw err;
            console.log("users data retrieved",result);
            db.close();
            res.status(200).json(result);
        })
    });
})

var insertDocument = function(db, data, callback) {
    db.collection('users').insertOne( data, function(err, result) {
        if(err)
        {
            res.write("Registration Failed, Error While Registering");
            res.end();
        }
        console.log("Inserted a document into the users collection.", data);
        callback();
    });
};