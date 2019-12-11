ContactModel = require("../models/Contact");
var Op = require("sequelize").Op;

exports.addNewContact = function(req,res){
    let contactObject = req.body ;
    let user = req.user ;
    let createdAt = new Date(); 
    contactObject.Authorization = user.authorization ;
    contactObject.DeviceToken = user.deviceToken;
    contactObject.FingerPrint = user.fingerPrint;
    contactObject.CreatedAt = createdAt;
    
    ContactModel.create(contactObject)
    .then(function(contact){
        return res.status(200).json({
            message: "New Contact for this user Added Successfully",
            data: contact
          });
    })
    .catch(function(error){
        return res.status(400).json({
            message: error.message
          });
    });
}

exports.findUserContacts = function(req,res){
    let Authorization = req.user.authorization ;
    let DeviceToken = req.user.deviceToken;
    let FingerPrint = req.user.fingerPrint;

    ContactModel.findAll({
        where: {
            [Op.and]: [ { Authorization } , { DeviceToken } , {FingerPrint} ]
        }
    })
    .then(function(contact){
        return res.status(200).json({
            message: "Contact for this user Retrieved Successfully",
            data: contact
          });
    })
    .catch(function(error){
        return res.status(400).json({
            message: error.message
          });
    });
}

exports.getRecentContacts = function(req,res){
    let Authorization = req.user.authorization ;
    let DeviceToken = req.user.deviceToken;
    let FingerPrint = req.user.fingerPrint;

    ContactModel.findAll({
        where: {
            [Op.and]: [ { Authorization } , { DeviceToken } , {FingerPrint} ]
        },
        order : [["createdAt",'DESC']]
    })
    .then(function(contact){
        return res.status(200).json({
            message: "Contact for this user Retrieved Successfully",
            data: contact
          });
    })
    .catch(function(error){
        return res.status(400).json({
            message: error.message
          });
    });
}
