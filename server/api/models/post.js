const mongoose = require('mongoose');

var post = new mongoose.Schema({
    title: { type: String, default:''},
    address: { type: String, default:''},
    floorPlan: { type: String, default:''},
    description: { type: String, default:''},
    rating_list:[{
        user: {type: String, default: ''},
        rating: {type: Number, default: ''},
        review: {type: String, default: ''}
    }],
    QnA_List:[{
        question: {type: String, default:''},
        answer: {type: String, default:''}
    }],
    overall_rating: {type: Number, default:''}
    
})

module.exports = mongoose.model('post', post);