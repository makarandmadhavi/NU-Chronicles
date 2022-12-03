const { createUser } = require('../services/UserService');

/*
 * call other imported services, or same service but different functions here if you need to
*/
const addNewUser = async (req, res) => {
    const user = req.body
    try {
        let result = await createUser(user);

        res.status(result.status);
        res.json(result.message);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
}

module.exports = {
    addNewUser
}