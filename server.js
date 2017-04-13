var express = require("express");
var app = express();
var port = 3000;
var mongoose = require("mongoose");

app.listen(port, function(){
    console.log("Server is running on port " + port)
})