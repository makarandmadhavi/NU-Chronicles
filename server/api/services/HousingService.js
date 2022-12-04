const housing = require('../models/housing');
const user = require('../models/housing');

//Create Data
async function createHousing(data) {
    var title = data.title;
    var address = data.address;
    var floorPlan = data.floorPlan;
    var description = data.description;
    var rating_list = data.rating_list;
    var QnA_List = data.QnA_List;
    var overall_rating = data.overall_rating;

    var result = {};

    await housing.findOne({title : data.title }).then((doc) => {
        if (doc) {
                
            result.status = 400;
            result.message =  "User already exists with same title: " + title;
        } 
        else{
            var newHousing = new housing(data);

            newHousing.save(function(message, data){
                if (message) {
                    console.log(message);
                    result.status = 500;
                    result.message =  "Housing not created";
                    return;
                }
                result = data;
                console.log("Answers in request " + QnA_List[0].answers);
                console.log("Answers in result " + result.QnA_List[0].answers);
                console.log(message);
            });
            // result = data;
            
            result.status = 200;
            result.message = "Saved Successfully";
        }
    })
    
    
    return result;
    // return result;

}

// get data
async function getHousing() {
    var result = {};
    await housing.find().then(function(data, error) {
        if (error){
            console.log("Error Occured " + error);
            result.status = 500;
            result.message =  "could not get data " + data;
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


async function updateHousing(data) {
    const title ={title: data.title };
    var result = {};
    try{
        let doc = await housing.findOneAndUpdate(title , data, {returnOriginal: false });
        result = doc;
        result.status = 200;
        result.message = "Update Successfully";
        console.log(doc);
        return result;
    }
    catch(e){
        result.status = 500;
        result.message = "error occured while updating " + e;
        return result;
    }
    
}

module.exports = {
    createHousing, 
    getHousing,
    updateHousing
}