const mongoose = require('mongoose');

const { schema , model, Schema } = require ('mongoose');

const modelSchema = new Schema ({
    name : {
        type : String ,
        required: true
    },
    email: {
        type : String ,
        required: true
    },
    phone : {
        type : Number,
        required: true
    },
    avatar: {
        type: String,
        default: true
    },
    password: {
        type : String,
        required : true
    }
});

module.exports = mongoose.model('user',modelSchema);