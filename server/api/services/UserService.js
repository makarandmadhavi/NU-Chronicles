const user = require('../models/user');
const bcrypt = require('bcryptjs');
const housing = require('../models/housing');


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

async function deleteUser(email) {
    let emailDelete = email;
    console.log(emailDelete + "email delete in services");
    var result = {};
        await user.findOneAndDelete({email:emailDelete}).then(function(doc, error){
            console.log("The document deleted is " + doc + " " + error);
            if(error){
                result.status = 500;
                result.message = "Delete failed! Try again.";
                console.log("Delete failed!");
            }
            if(!doc){
                result.status = 400;
                result.message = "No Record found!! Please check the details again.";
            }
            else{
                // result = doc;
                result.status = 200;
                result.message = "Data record deleted successfully with email: "+emailDelete;
            }
            // return result;
        });
        return result;
}

//Update User
async function updateUser(user_id, newUserData) {
    var email = newUserData.email;
    var password = newUserData.password;
    var firstName = newUserData.firstName;
    var lastName = newUserData.lastName;
    var role = newUserData.role;
    var phoneNumber = newUserData.phoneNumber;
    var NUID = newUserData.NUID;

    var result = {};

    if (email && !email.trim().match(regexForEmail)) {
        return { 
            status: 400, 
            message: "Email ID entered is not valid or correct. Please check entered details again." 
        };
    }

    else if (password) {
        return { status: 400, 
        message: "Cannot change password with this API " 
    };
    }

    else if (firstName && !firstName.trim().match(regexforName)) {
        return { status: 400, message: "Please enter valid First Name" };
    }

    else if (lastName && !lastName.trim().match(regexforName)) {
        return { status: 400, message: "Please enter valid Last Name" };
    }

    else if (NUID && !NUID.trim().match(regexforNUID)) {
        return { status: 400, message: "Please enter valid 9 digit NUID number" };
    }

    else if (phoneNumber && !phoneNumber.trim().match(regexforPhone)) {
        return { status: 400, message: "Please enter valid Phone Number" };
    }
    else{
        // var result = {};
        console.log("Inside else and before update================================= ");
        return await user.findByIdAndUpdate(user_id, newUserData).then(function (doc, err) {
            if (err){
                console.log(err);
                result.status = 500;
                result.message = "Could not update " + err;
            }
            else{
                console.log("Updated User : ", doc);
                result.status = 200;
                result.message = "User Updated";
            }
            return result;
        });
    //    return result;
    }

}

async function getUsers() {
    var result = {};
    await user.find().then(function(data, error) {
        if (error){
            console.log("Error Occured " + error);
            result.status = 500;
            result.message =  "could not get data " + data;
            return;
        }
        
        result = data;
        console.log("Result after data is assignered " + result);
        result.status = 200;
        console.log(result.status);
        result.message = "all done";
        return;
    });
    return result;
    
}



module.exports = {
    createUser,
    deleteUser,
    getUsers,
    updateUser
}