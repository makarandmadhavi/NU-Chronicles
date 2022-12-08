const neu_User = require('../models/neu_User');

function createUser(data){
    const email = data.email;
    var result = {};
    return neu_User.findOne({ email: email }).then((doc) => {

        if (doc) {

            result.status = 400;
            result.message = "User already exists with email: " + email;
        } else {
            var newUser = new neu_User(data);

            // newUser.password = bcrypt.hashSync(data.password, 10);
            newUser.save(function (message, data) {
                if (message) {
                    result.status = 500;
                    result.message = "User creation failed ";
                }

            });
            result.status = 201;
            result.message = newUser;
        }
        return result;
    });

}

async function getUser(){
    var result = {};
    await neu_User.find().then(function (data, error) {
        if (error) {
            console.log("Error Occured " + error);
            result.status = 500;
            result.message = "could not get data " + data;
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

async function deleteUser(email) {
    let emailDelete = email;
    console.log(emailDelete + "email delete in services");
    var result = {};
    await neu_User.findOneAndDelete({ email: emailDelete }).then(function (doc, error) {
        console.log("The document deleted is " + doc + " " + error);
        if (error) {
            result.status = 500;
            result.message = "Delete failed! Try again.";
            console.log("Delete failed!");
        }
        if (!doc) {
            result.status = 400;
            result.message = "No Record found!! Please check the details again.";
        }
        else {
            // result = doc;
            result.status = 200;
            result.message = "Data record deleted successfully with email: " + emailDelete;
        }
        // return result;
    });
    return result;
}


module.exports = {
    createUser,
    getUser,
    deleteUser
    
}