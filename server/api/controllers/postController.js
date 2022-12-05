const { createPost, getPost, updatePost, deletePost, addReview, deleteRating, getRating, addQuestion, deleteQuestionAns } = require('../services/PostService');

const addPosting = async (req, res) => {
    const post = req.body;
    // console.log("in add housing " + req.body.QnA_List[0].answers);
    try {
        let result = await createPost(post);

        res.status(result.status);
        res.json(result);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
}

const getPosting = async (req, res) => {
    try {
        let result = await getPost();

        // console.log("In controller " + result);
        res.status(result.status);
        res.json(result);
    }
    catch(e){
        console.log(e);
        res.sendStatus(500);
    }
}

const updatePosting = async (req, res) => {
    const data = req.body;
    try{
        let result = await updatePost(req.body._id, data);

        res.status(result.status);
        res.json(result);
    }
    catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
}

const deletePosting = async (req, res) => {
    const id = req.body._id;
    try{
        let result = await deletePost(id);

        res.status(result.status);
        res.json(result);

    }
    catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
}

const insertReview = async (req, res) => {
    const id  = req.body._id; // Post ID to find the Post
    var rating = {};
    rating.userID = req.body.userID;
    rating.rating = req.body.rating;
    rating.review = req.body.review;
    try {
        let result = await addReview(id, rating);

        res.status(result.status);
        res.json(result.message);
    }
    catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
}

//Get review
const getReviews = async (req, res) => {
    const PostID = req.body._id;
    try {
        let result = await getRating(PostID);

        res.status(result.status);
        res.json(result);
    }
    catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
}


const deleteReview = async (req, res) => {
    const PostID = req.body._id;
    const reviewId = req.body.reviewId;
    try {
        let result = await deleteRating(PostID, reviewId);

        res.status(result.status);
        res.json(result);
    }
    catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
}

//insert Question
const insertQuestion = async (req, res) => {
    const id  = req.body._id; // Post ID to find the Post
    var rating = {};
    userID = req.body.user_id;
    question = req.body.question;
    try {
        let result = await addQuestion(id, userID, question);

        res.status(result.status);
        res.json(result.message);
    }
    catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
}

//delete qna
const deleteQnA = async (req, res) => {
    const PostID = req.body._id;
    const QnA_ID = req.body.QnA_ID;
    try {
        let result = await deleteQuestionAns(PostID, QnA_ID);

        res.status(result.status);
        res.json(result);
    }
    catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
}

module.exports = {
    addPosting,
    getPosting,
    updatePosting,
    deletePosting,
    insertReview,
    deleteReview,
    getReviews,
    insertQuestion,
    deleteQnA
}