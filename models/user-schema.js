var mongoose = require("mongoose");
var Schema = mongoose.Schema;




var userSchema = new Schema({
    phoneNumber: Number,
    reminders:[
        {
            title: String,
            message: String,
            occurence: {
                type:String,
                enum: ["One Time", "Daily"]
            },
            time:String,
            hour: String,
            minute:String,
            amPm:{
                type:String,
                enum: ["AM, PM"]
            }

        }
    ]

});

var User = mongoose.model("user", userSchema);

module.exports = User;