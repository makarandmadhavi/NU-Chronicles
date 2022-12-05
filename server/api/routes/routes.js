const bodyParser = require('body-parser');
const Sample = require('../models/user');
const { addNewUser, deleteExistingUser, getAllUsers, updateExistingUser } = require('../controllers/UserController');
const { addPosting, getPosting, updatePosting, deletePosting, insertReview, deleteReview, getReviews, insertQuestion, deleteQnA } = require('../controllers/postController');
const post = require('../models/post');


module.exports = (app) => {
    //Create User
    app.post('/user/create', bodyParser.json(), addNewUser);


    //Get one User
    app.post('/user/loginApi', function (req, res) {
        console.log("EMAIL: " + req.body.email);
        post.findOne({ email: req.body.email }, function (error, samples) {
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


    //addpost
    app.post('/post/create', bodyParser.json(), addPosting);

    //get Post Data
    app.get('/post/get', getPosting);

    //Update Post
    app.put('/post/update', updatePosting);

    //Delete post
    app.delete('/post/delete', bodyParser.json(), deletePosting);


    //add Review/ Rating
    app.post('/review/add', bodyParser.json(), insertReview);

    //delete Review/Rating
    app.delete('/review/delete', bodyParser.json(), deleteReview);

    //get Rating
    app.get('/review/get', bodyParser.json(), getReviews);

    //Insert Question
    app.post('/question/add', bodyParser.json(), insertQuestion);

    //Delete Question
    app.delete('/question/delete', bodyParser.json(), deleteQnA)


}
