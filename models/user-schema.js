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
            time:String
        }
    ]

})

var User = mongoose.model("user", userSchema);

module.exports = User;