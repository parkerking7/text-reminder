var express = require("express");
var textRouter = express.Router();
var User = require("../models/user-schema");



textRouter


    .get("/", function(req, res){
        User.find(req.query, function(err, Users){
            res.send(Users);
        } )

    })
    .get("/:phoneNumber", function(req, res){
        User.find(req.params, function(err, user){
//
            res.send(user);
        } )

    })
    .post("/", function (req, res){
        newUser = new User(req.body);
        newUser.save(function(err,savedUser){
            res.send(savedUser);
        })
    })
    .delete("/:id", function(req,res){
        User.findByIdAndRemove(req.params.id,function(err,deletedUser){
            res.send(deletedUser);
        })
    })

    .put("/:id",function(req,res){
        User.findByIdAndUpdate(req.params.id,req.body,{new:true}, function(err, editedUser){
            res.send(editedUser);
        })
    });

module.exports = textRouter;