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
                // console.log("Answers in request " + QnA_List[0].answers);
                // console.log("Answers in result " + result.QnA_List[0].answers);
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


async function updateHousing(userId, data) {
    // const id ={_id: userId };
    var result = {};
    try{
        let doc = await housing.findByIdAndUpdate(userId , data, {returnOriginal: false });
        if (!doc){
            result.status = 400;
            result.message = "No record found";
            return result;
        }
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

async function deleteHousing(housingId) {
    // let emailDelete = email;
    // console.log(emailDelete + "email delete in services");
    var result = {};
        await housing.findByIdAndDelete(housingId).then(function(doc, error){
            console.log("The document deleted is " + doc + " " + error);
            if(error){
                result.status = 500;
                result.message = "Delete failed! Try again.";
                console.log("Delete failed!");
            }
            if(!doc){
                result.status = 400;
                result.message = "No Record found!! Please check the details again.";
            }
            else{
                // result = doc;
                result.status = 200;
                result.message = "Data record deleted successfully";
            }
            // return result;
        });
        return result;
}

// Adding rating
async function addReview (housingID, rating){
    var result = {};
    await housing.findById(housingID).then((doc, err) => {
        if(err){
            result.status = 500;
            result.message = "Error occured.";
            console.log("Error!! failed!");
        }
        if(!doc){
            result.status = 400;
            result.message = "No Record found!! Please check the details again.";
        }
        else{
            console.log(doc + "===========================DOC===============================");
            // console.log(doc.rating_list[0]);
            doc.rating_list.push(rating);
            result.status = 200;
            result.message = "Review Added";
            return result;
            // console.log(doc.rating_list.push(rating));

        }
    })
}


module.exports = {
    createHousing, 
    getHousing,
    updateHousing,
    deleteHousing,
    
}