require('dotenv').config()
var express = require('express'),
    app = express(),
    server = require('http').createServer(app);
var lastSaveTime = Math.floor(Date.now()/1000);
var moment = require("moment");

app.use('/', express.static(__dirname + '/www'));

server.listen(process.env.PORT || 3000);//publish to heroku

console.log("SERVER IS RUNNING ON", process.env.PORT || 3000)