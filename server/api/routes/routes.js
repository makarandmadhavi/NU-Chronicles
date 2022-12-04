const bodyParser = require('body-parser');
const Sample = require('../models/user');
const { addNewUser, deleteExistingUser, getAllUsers, updateExistingUser } = require('../controllers/UserController');
const { addHousing, getHouse, updateHouse, deleteHouse, insertReview } = require('../controllers/housingController');
const housing = require('../models/housing');


module.exports = (app) => {
    //Create User
    app.post('/user/create', bodyParser.json(), addNewUser);


    //Get one User
    app.post('/user/loginApi', function (req, res) {
        console.log("EMAIL: " + req.body.email);
        housing.findOne({ email: req.body.email }, function (error, samples) {
            if (error)
                res.send(error);
            console.log("In server : " + req.body.email);
            res.status(200);
            res.json(samples);
        });
    });

    //delete User
    app.delete('/user/delete', bodyParser.json(), deleteExistingUser);

    //Get user
    app.get('/user/allusers', getAllUsers);

    //Update User
    app.put('/user/updateuser', bodyParser.json(), updateExistingUser);


    //addhousing
    app.post('/housing/create', bodyParser.json(), addHousing);

    //get Housing Data
    app.get('/housing/get', getHouse);

    //Update Housing
    app.put('/housing/update', updateHouse);

    //Delete housing
    app.delete('/housing/delete', bodyParser.json(), deleteHouse);


    //add Review/ Rating
    // app.post('/review/add', bodyParser.json(), insertReview);



}
