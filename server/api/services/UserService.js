const user = require('../models/user');
const bcrypt = require('bcryptjs');


const regexForEmail = /^([\w.]+)@northeastern\.edu$/;
const regexforName = /^[\w]+$/;
const regexforNUID = /^[\d]{9}$/;
const regexforPhone = /^(\([0-9]{3}\)|[0-9]{3}-)[0-9]{3}-[0-9]{4}$/;

const regexForPassword = ("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,14})");
function createUser (data) {

    var email = data.email;
    var password = data.password;
    var firstName = data.firstName;
    var lastName = data.lastName;
    var role = data.role;
    var phoneNumber = data.phoneNumber;
    var NUID = data.NUID;

    var result = {};

    if (!email.trim().match(regexForEmail)) {
        return { 
            status: 400, 
            message: "Email ID entered is not valid or correct. Please check entered details again." 
        };
    }

    else if (!password.trim().match(regexForPassword)) {
        return { status: 400, 
        message: "Password should be 8-14 characters long. \n  Must contain an uppercase letter and a lowercase letter \n A special character and a numeric character (0-9) " 
    };
    }

    else if (!firstName.trim().match(regexforName)) {
        return { status: 400, message: "Please enter valid First Name" };
    }

    else if (!lastName.trim().match(regexforName)) {
        return { status: 400, message: "Please enter valid Last Name" };
    }

    else if (!NUID.trim().match(regexforNUID)) {
        return { status: 400, message: "Please enter valid 9 digit NUID number" };
    }

    else if (!phoneNumber.trim().match(regexforPhone)) {
        return { status: 400, message: "Please enter valid Phone Number" };
    }

    else {
       return user.findOne({ email: email }).then((doc)=> {
    
            if (doc) {
                
                result.status = 400;
                result.message =  "User already exists with email: " + email;
            } else {
                var newUser = new user(data);

                newUser.password = bcrypt.hashSync(data.password, 10);
                newUser.save(function (message, data) {
                    if (message) {
                        result.status = 500;
                        result.message =  "User creation failed ";
                    }
                    
                });
                result.status = 201;
                result.message =  newUser;
            }
            return result;
        });
    }
}

module.exports = {
    createUser
}