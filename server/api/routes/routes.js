const bodyParser = require('body-parser');
const Sample = require('../models/user');
const { addNewUser } = require('../controllers/UserController');


module.exports = (app) => {
    //Create User
    app.post('/user/create', bodyParser.json(), addNewUser);


    //Get one User
    app.post('/user/loginApi', function (req, res) {
        console.log("EMAIL: " + req.body.email);
        Sample.findOne({ email: req.body.email }, function (error, samples) {
            if (error)
                res.send(error);
            console.log("In server : " + req.body.email);
            res.status(200);
            res.json(samples);
        });
    });

}
