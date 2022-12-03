const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const Sample = require('../models/user');

module.exports = (app) => {
    //Create User
app.post('/user/create',bodyParser.json(), function(req, res) {

    var regexForEmail = /^([\w.]+)@northeastern\.edu$/;
    var regexforName = /^[\w]+$/;
    var regexforNUID = /^[\d]{9}$/;
    var regexforPhone = /^(\([0-9]{3}\)|[0-9]{3}-)[0-9]{3}-[0-9]{4}$/;
    
    var regexForPassword = ("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,14})");

    var email = req.body.email;
    var password = req.body.password;
    var firstName = req.body.firstName;
    var lastName = req.body.lastName;
    var role = req.body.role;
    var phoneNumber = req.body.phoneNumber;
    var NUID = req.body.NUID;


    if( !email.trim().match(regexForEmail)){
        res.status(400);
        res.json("Email ID entered is not valid or correct. Please check entered details again.");
    }

    else if(!password.trim().match(regexForPassword)){
        res.status(400);
        res.json("Password should be 8-14 characters long. \n  Must contain an uppercase letter and a lowercase letter \n A special character and a numeric character (0-9) ");
    }

    else if(!firstName.trim().match(regexforName)){
        res.status(400);
        res.json("Please enter valid First Name");
    }

    else if(!lastName.trim().match(regexforName)){
        res.status(400);
        res.json("Please enter valid Last Name");
    }

    else if(!NUID.trim().match(regexforNUID)){
        res.status(400);
        res.json("Please enter valid 9 digit NUID number");
    }

    else if(!phoneNumber.trim().match(regexforPhone)){
        res.status(400);
        res.json("Please enter valid Phone Number");
    }

    else {
        Sample.findOne({email: email}, function(err, user){
            if(err) {
              console.log(err);
            }
            var message;
            if(user) {
                message = "User already exists with email: "+email;
                res.json({message: message})
            } else {
                var rec = new Sample(req.body);

                rec.password = bcrypt.hashSync(req.body.password, 10);
                rec.save(function(error, data) {
                    if (error) {
                        res.json({"message":"create failed!"});
                    }
                    res.status(201)
                    res.json(data);
                });
            }
        });
    }
});


//Get one User
app.post('/user/loginApi', function(req, res) {
    console.log("EMAIL: " + req.body.email);
    Sample.findOne({email: req.body.email}, function(error, samples) {
        if (error)
            res.send(error);
        console.log("In server : " + req.body.email);
        res.status(200);
        res.json(samples);
    });
});

}
