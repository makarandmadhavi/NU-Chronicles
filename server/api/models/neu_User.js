const mongoose = require('mongoose');

var neu_User = new mongoose.Schema({
    email : {type:  String, default: ''},
    // firstName: {type: String, default: ''},
    // lastName: {type: String, default: ''},
    NUID: {type: String, default: ''},
    // phoneNumber: {type: String, default: ''},
    // password : {type: String, default: ''},
    // role: {type: String, default:''},
    // photo: {type: Buffer, default:''},
    versionKey: false
})


module.exports = mongoose.model('neu_User', neu_User);