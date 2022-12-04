const { createHousing, getHousing, updateHousing } = require('../services/HousingService');

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
        let result = await updateHousing(data);

        res.status(result.status);
        res.json(result);
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
    
}