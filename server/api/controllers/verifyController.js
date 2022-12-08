const { createUser, getUser, deleteUser } = require("../services/VerifyService");

const addneuUser = async(req,res) =>{
    const neu_User = req.body;
    console.log("Here ");
    try {
        let result = await createUser(neu_User);

        res.status(result.status);
        res.json(result);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
}

const getneuUser = async(req,res) =>{
    // const neu_User = req.body;
    // console.log("Here ");
    try {
        let result = await getUser();

        res.status(result.status);
        res.json(result);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
}

const deleteneuUser = async(req,res) =>{
    // const neu_User = req.body;
    // console.log("Here ");
    try {
        let result = await deleteUser(req.body.email);

        res.status(result.status);
        res.json(result);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
}

module.exports = {
    addneuUser,
    getneuUser,
    deleteneuUser
}