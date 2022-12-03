const mongoose = require('mongoose');

module.exports = mongoose.model('user', {
    email : {type:  String, default: ''},
    firstName: {type: String, default: ''},
    lastName: {type: String, default: ''},
    NUID: {type: String, default: ''},
    phoneNumber: {type: String, default: ''},
    password : {type: String, default: ''},
    role: {type: String, default:''},
    // photo: {type: Buffer, default:''},
    versionKey: false
})