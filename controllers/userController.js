const UserModel = require('../models/User');

exports.CreateNewUser = function(req,res){
    let userObject = req.body ;

    UserModel.create(userObject)
    .then(function(user){
        return res.status(200).json({
            message: "New User Added Successfully",
            data: user
          });
    })
    .catch(function(error){
        return res.status(400).json({
            message: error.message
          });
    });
}

exports.getUserContacts = function(req,res){
    
}