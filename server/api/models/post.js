const mongoose = require('mongoose');

var post = new mongoose.Schema({
    title: { type: String, default:''},
    address: { type: String, default:''},
    city: {type: String, default: 'Boston'},
    zipcode: {type: String, default: '02120'},
    photos: [{
        path: {type: String, default: ''}
    }],
    description: { type: String, default:''},
    rating_list:[{
        userID: {type: String, default: ''},
        rating: {type: Number, default: ''},
        review: {type: String, default: ''}
    }],
    QnA_List: [{
        question:{
            userID: { type: String, default: '' },
            value: { type: String, default: '' }
        },
        answer: [{
            userID: { type: String, default: '' },
            answer: { type: String, default: '' }
        }]
    }],
    overall_rating: {type: Number, default:''},
    category: {type: String, default:''},
    googlemapLink: {type: String, default:''}

    
}, {timestamps: true});

module.exports = mongoose.model('post', post);