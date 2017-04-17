var express = require("express");
var User = require("../models/user-schema");
var client = require('twilio')(accountSid, authToken);


var accountSid = 'AC131c5fc5785b07bb264a15b5c4887533';
var authToken = "20bb01386a3c4dd1748dd19d2d8f4b75";

User.find(req.query, function(err, foundUsers){

});


// function sendMessage() {
//     client.messages.create({
//         to: "+18015928538",
//         from: "+18014059043",
//         body: namedVar,
//     }, function (err, message) {
//         console.log(message.sid);
//     });
// }

