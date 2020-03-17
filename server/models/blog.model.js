const mongoose = require('mongoose');

var blogSchema =  new mongoose.Schema({
    title :{
        type: String
    },
    description : {
        type: String
    },
    post: {
        type : String
    },
    createdAt : {
        type : String
    }
});


mongoose.model('Blog', blogSchema);  