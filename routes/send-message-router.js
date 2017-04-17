var express = require("express");
var User = require("../models/user-schema");
var accountSid = 'AC131c5fc5785b07bb264a15b5c4887533';
var authToken = "20bb01386a3c4dd1748dd19d2d8f4b75";
var client = require('twilio')(accountSid, authToken);


var cron = require("node-cron");

var task =
    function scheduler(message, minute,hour) {

    new cron.schedule("" + minute +" " + hour  +" " + "* * *", function () {
        sendMessage(message);
    });
};

function sendMessage(message) {
    client.messages.create({
        to: "+18015928538",
        from: "+18014059043",
        body: message
    }, function (err, message) {
    });
}



module.exports = task;
