var express = require("express");
var app = express();
var textRoute = require("./routes/text-router");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var path = require("path");
var port = 3000;




app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "public")));

mongoose.connect("mongodb://localhost/texts", function(err){
    if(err) throw err;
    console.log("Connected to Database" + "")
})

app.use("/texts", textRoute);

app.listen(port, function(){
    console.log("Server is running on port " + port)
});