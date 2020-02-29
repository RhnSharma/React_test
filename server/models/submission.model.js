const mongoose = require('mongoose');

var submissionSchema =  new mongoose.Schema({
    name :{
        type: String,
        required: 'This field is required.'
    },
    email : {
        type: String
    },
    message : {
        type : String
    },
    image : {
        id: String,
        data : Buffer,
        contentType : String
    },
    createdAt : {
        type : String
    }
});


mongoose.model('Submission',submissionSchema);  