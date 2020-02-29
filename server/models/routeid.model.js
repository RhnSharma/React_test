const mongoose = require('mongoose');

var routeidSchema =  new mongoose.Schema({
    name :{
        type: String
    },
    id : {
        type: String
    }
});


mongoose.model('RouteID',routeidSchema);  