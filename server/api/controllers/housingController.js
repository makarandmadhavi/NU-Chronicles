const { createHousing, getHousing, updateHousing, deleteHousing, addReview } = require('../services/HousingService');

const addHousing = async (req, res) => {
    const house = req.body;
    console.log("in add housing " + req.body.QnA_List[0].answers);
    try {
        let result = await createHousing(house);

        res.status(result.status);
        res.json(result);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
}

const getHouse = async (req, res) => {
    try {
        let result = await getHousing();

        // console.log("In controller " + result);
        res.status(result.status);
        res.json(result);
    }
    catch(e){
        console.log(e);
        res.sendStatus(500);
    }
}

const updateHouse = async (req, res) => {
    const data = req.body;
    try{
        let result = await updateHousing(req.body._id, data);

        res.status(result.status);
        res.json(result);
    }
    catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
}

const deleteHouse = async (req, res) => {
    const id = req.body._id;
    try{
        let result = await deleteHousing(id);

        res.status(result.status);
        res.json(result);

    }
    catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
}

const insertReview = async (req, res) => {
    const id  = req.body._id; // Housing ID to find the House
    var rating = {};
    rating.user = req.body.user;
    rating.rating = req.body.rating;
    rating.review = req.body.review;
    try {
        let result = await addReview(id, rating);

        res.send(result.status);
        res.json(result.message);
    }
    catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
}

module.exports = {
    addHousing,
    getHouse,
    updateHouse,
    deleteHouse,
    
}